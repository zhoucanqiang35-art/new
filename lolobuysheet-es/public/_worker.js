/** Cloudflare Pages edge entry point for the static-export deployment. */
const pagesWorker = {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === "www.lolobuysheet.es") {
      url.hostname = "lolobuysheet.es";
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }

    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);
    headers.delete("x-powered-by");
    headers.set("x-content-type-options", "nosniff");
    headers.set("referrer-policy", "strict-origin-when-cross-origin");
    headers.set("permissions-policy", "camera=(), microphone=(), geolocation=()");

    const contentType = headers.get("content-type") || "";
    if (contentType.includes("text/html")) {
      headers.set("cache-control", "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400");
    } else if (/\.(?:css|js|mjs|svg|webp|png|jpg|jpeg|woff2?)$/i.test(url.pathname)) {
      headers.set("cache-control", "public, max-age=31536000, immutable");
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};

export default pagesWorker;
