import application from "../dist/server/index.js";

const CANONICAL_HOST = "pikobuyspreadsheet.shop";
const CRAWL_FILES = new Set(["/robots.txt", "/sitemap.xml"]);
const PUBLIC_ASSET = /\.(?:avif|css|gif|ico|jpe?g|js|json|png|svg|webp|woff2?)$/i;

function withHeaders(response, additions) {
  const headers = new Headers(response.headers);
  for (const [name, value] of Object.entries(additions)) headers.set(name, value);
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("X-Frame-Options", "SAMEORIGIN");
  headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

function canonicalRedirect(url) {
  url.hostname = CANONICAL_HOST;
  url.protocol = "https:";
  return Response.redirect(url.toString(), 301);
}

const pagesWorker = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const { pathname } = url;

    if (url.hostname === `www.${CANONICAL_HOST}` || url.hostname.endsWith(".pages.dev")) {
      return canonicalRedirect(url);
    }

    if (CRAWL_FILES.has(pathname) || pathname.startsWith("/assets/") || PUBLIC_ASSET.test(pathname)) {
      const assetResponse = await env.ASSETS.fetch(request);
      const immutable = pathname.startsWith("/assets/");
      return withHeaders(assetResponse, {
        "Cache-Control": immutable ? "public, max-age=31536000, immutable" : "public, max-age=3600",
      });
    }

    const cacheable = request.method === "GET" && url.hostname === CANONICAL_HOST && url.search === "";
    const edgeCache = globalThis.caches?.default;
    const cacheKey = cacheable ? new Request(`${url.origin}${pathname}`, { headers: { accept: "text/html" } }) : null;

    if (edgeCache && cacheKey) {
      const cached = await edgeCache.match(cacheKey);
      if (cached) return withHeaders(cached, { "X-Edge-Cache": "HIT" });
    }

    const appResponse = await application.fetch(request, env, ctx);
    const contentType = appResponse.headers.get("content-type") ?? "";
    if (!cacheable || !/^text\/html\b/i.test(contentType) || appResponse.status !== 200) {
      return withHeaders(appResponse, { "Cache-Control": "no-store" });
    }

    const response = withHeaders(appResponse, {
      "Cache-Control": "public, max-age=0, s-maxage=3600",
      "X-Edge-Cache": "MISS",
    });
    response.headers.delete("Set-Cookie");
    if (edgeCache && cacheKey) ctx.waitUntil(edgeCache.put(cacheKey, response.clone()));
    return response;
  },
};

export default pagesWorker;
