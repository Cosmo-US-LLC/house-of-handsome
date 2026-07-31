import { readFileSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Regenerates public/sitemap.xml from two sources of truth, so it never goes stale:
//   1. src/App.jsx — every static <Route path="..."> (or the index route) becomes a URL.
//      Add a new page there as normal and it appears in the sitemap on the next build,
//      no separate registry to remember.
//   2. src/data/blogPosts.json — every post slug, plus each unique tag/category, becomes a URL.
// Paginated and param-based routes (/page/:pageNum, /tag/:tagSlug, /:slug, etc.) are skipped
// here since they're either duplicate/thin-content pages or are covered by the data-driven URLs above.

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const BASE_URL = "https://www.houseofhandsome.ca";

const today = new Date().toISOString().slice(0, 10);

function getStaticRoutes() {
  const appSource = readFileSync(path.join(ROOT, "src", "App.jsx"), "utf-8");

  const routes = [];

  if (/<Route\s+index\b/.test(appSource)) {
    routes.push({ loc: "/", changefreq: "weekly", priority: "1.0" });
  }

  const pathAttrRegex = /path\s*=\s*"([^"]+)"/g;
  let match;
  while ((match = pathAttrRegex.exec(appSource)) !== null) {
    const routePath = match[1];

    // Skip dynamic/param routes and pagination — handled via blogPosts.json or
    // intentionally excluded as duplicate/thin content.
    if (routePath.includes(":")) continue;

    routes.push({
      loc: routePath,
      changefreq: routePath === "/our-edmonton-barbershop-blog" ? "daily" : "monthly",
      priority: routePath === "/our-edmonton-barbershop-blog" ? "0.7" : "0.8",
    });
  }

  return routes;
}

function getBlogRoutes() {
  const dataPath = path.join(ROOT, "src", "data", "blogPosts.json");
  if (!existsSync(dataPath)) return [];

  const posts = JSON.parse(readFileSync(dataPath, "utf-8"));

  const postRoutes = posts.map((post) => ({
    loc: `/${post.slug}`,
    lastmod: (post.date || "").slice(0, 10) || today,
    changefreq: "monthly",
    priority: "0.6",
  }));

  const tagSlugs = new Set();
  const categorySlugs = new Set();
  for (const post of posts) {
    for (const tag of post.tags || []) tagSlugs.add(tag.slug);
    for (const category of post.categories || []) categorySlugs.add(category.slug);
  }

  const tagRoutes = [...tagSlugs].map((slug) => ({
    loc: `/tag/${slug}`,
    changefreq: "weekly",
    priority: "0.5",
  }));

  const categoryRoutes = [...categorySlugs].map((slug) => ({
    loc: `/category/${slug}`,
    changefreq: "weekly",
    priority: "0.5",
  }));

  return [...postRoutes, ...tagRoutes, ...categoryRoutes];
}

function buildXml(routes) {
  const urls = routes
    .map((route) => {
      const lastmod = route.lastmod || today;
      return `  <url>
    <loc>${BASE_URL}${route.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function dedupeByLoc(routes) {
  const seen = new Set();
  return routes.filter((route) => {
    if (seen.has(route.loc)) return false;
    seen.add(route.loc);
    return true;
  });
}

const routes = dedupeByLoc([...getStaticRoutes(), ...getBlogRoutes()]);
const xml = buildXml(routes);

writeFileSync(path.join(ROOT, "public", "sitemap.xml"), xml, "utf-8");

console.log(`sitemap.xml generated with ${routes.length} URLs.`);
