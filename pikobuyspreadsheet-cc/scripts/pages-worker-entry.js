import application from "../dist/server/index.js";

const CANONICAL_HOST = "pikobuyspreadsheet.cc";
const PUBLIC_ASSET = /\.(?:avif|css|gif|ico|jpe?g|js|json|png|svg|webp|woff2?)$/i;
const SEARCH_ASSET_PATHS = new Set(["/robots.txt", "/sitemap.xml"]);

function withHeaders(response, additions = {}) {
  const headers = new Headers(response.headers);
  for (const [name, value] of Object.entries(additions)) headers.set(name, value);
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("X-Frame-Options", "SAMEORIGIN");
  headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function canonicalRedirect(url) {
  url.hostname = CANONICAL_HOST;
  url.protocol = "https:";
  return Response.redirect(url.toString(), 301);
}

function isPublicAsset(pathname) {
  return pathname.startsWith("/assets/") || pathname.startsWith("/categories/") || PUBLIC_ASSET.test(pathname);
}

const pagesWorker = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const { pathname } = url;
    const isPagesPreview = url.hostname.endsWith(".pages.dev");

    if (url.hostname === `www.${CANONICAL_HOST}` || (url.hostname === CANONICAL_HOST && url.protocol === "http:")) {
      return canonicalRedirect(url);
    }

    // Pages Advanced Mode gives this Worker control over every request. Serve
    // generated search files through the static ASSETS binding so crawlers get
    // stable file semantics instead of framework/RSC response headers. During
    // an incomplete deployment, fall back to the application metadata route.
    if (SEARCH_ASSET_PATHS.has(pathname)) {
      const assetResponse = await env.ASSETS.fetch(request);
      if (assetResponse.status !== 404) {
        return withHeaders(assetResponse, {
          "Cache-Control": "public, max-age=0, must-revalidate",
          ...(isPagesPreview ? { "X-Robots-Tag": "noindex, nofollow" } : {}),
        });
      }
    }

    if (isPublicAsset(pathname)) {
      const assetResponse = await env.ASSETS.fetch(request);
      const immutable = pathname.startsWith("/assets/");
      return withHeaders(assetResponse, {
        "Cache-Control": immutable ? "public, max-age=31536000, immutable" : "public, max-age=3600",
        ...(isPagesPreview ? { "X-Robots-Tag": "noindex, nofollow" } : {}),
      });
    }

    const cacheable = request.method === "GET" && url.hostname === CANONICAL_HOST && url.search === "";
    const edgeCache = globalThis.caches?.default;
    const cacheKey = cacheable
      ? new Request(`${url.origin}${pathname}`, { headers: { accept: "text/html" } })
      : null;

    if (edgeCache && cacheKey) {
      const cached = await edgeCache.match(cacheKey);
      if (cached) return withHeaders(cached, { "X-Edge-Cache": "HIT" });
    }

    const appResponse = await application.fetch(request, env, ctx);
    const contentType = appResponse.headers.get("content-type") ?? "";
    const responseHeaders = {
      ...(isPagesPreview ? { "X-Robots-Tag": "noindex, nofollow" } : {}),
      "Cache-Control": "no-store",
    };

    if (!cacheable || !/^text\/html\b/i.test(contentType) || appResponse.status !== 200) {
      return withHeaders(appResponse, responseHeaders);
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
