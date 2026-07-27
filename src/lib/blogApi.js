const CMS_API_URL = import.meta.env.VITE_CMS_API_URL || "http://localhost:3000";

async function get(path) {
  const res = await fetch(`${CMS_API_URL}${path}`);
  if (!res.ok) {
    throw new Error(`CMS request failed (${res.status}): ${path}`);
  }
  const json = await res.json();
  return json.data;
}

function buildQuery(params) {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") query.set(key, value);
  });
  const qs = query.toString();
  return qs ? `?${qs}` : "";
}

// The CMS API returns fields named for its own schema (featuredImage, body,
// publishedAt). The website's blog components (PostCard, PostHero,
// PostContent, ...) were built against the old static blogPosts.json shape
// (image, content, date). Map here so those components stay unchanged.
function mapPost(post) {
  if (!post) return post;
  return {
    ...post,
    image: post.featuredImage ?? null,
    content: post.body,
    date: post.publishedAt,
  };
}

export async function getPosts({ page = 1, limit = 9, category, tag, search } = {}) {
  const { posts, pagination } = await get(
    `/api/blog/posts${buildQuery({ page, limit, category, tag, search })}`
  );
  return { posts: posts.map(mapPost), pagination };
}

export async function getPostBySlug(slug) {
  return mapPost(await get(`/api/blog/posts/${slug}`));
}

export function getCategories() {
  return get("/api/blog/categories");
}

export function getTags() {
  return get("/api/blog/tags");
}
