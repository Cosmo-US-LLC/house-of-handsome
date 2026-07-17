const WP_PROXY_HOST = "wp-origin.houseofhandsome.ca";
const PAGES_HOST = "house-of-handsome.pages.dev";

const WP_PATH_PREFIXES = [
  "/blog/",
  "/wp-admin/",
  "/wp-content/",
  "/wp-includes/",
  "/wp-json/",
  "/feed",
  "/sitemap",
];

const WP_EXACT_PATHS = ["/wp-login.php", "/xmlrpc.php", "/robots.txt"];

function isWordPressPath(pathname) {
  if (WP_EXACT_PATHS.includes(pathname)) return true;
  return WP_PATH_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const targetHost = isWordPressPath(url.pathname) ? WP_PROXY_HOST : PAGES_HOST;

    const upstreamUrl = new URL(url.pathname + url.search, `https://${targetHost}`);

    const upstreamRequest = new Request(upstreamUrl, request);
    // WordPress needs the real site hostname to serve the right vhost/content;
    // Pages needs its own pages.dev hostname, or it 404s on a Host mismatch.
    upstreamRequest.headers.set("Host", targetHost === WP_PROXY_HOST ? url.hostname : targetHost);

    return fetch(upstreamRequest);
  },
};
