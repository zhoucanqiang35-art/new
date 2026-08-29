import app from "./app.js";

const worker = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const thinFilterKeys = ["brand", "category", "color", "filter", "max_price", "min_price", "seller", "size", "sort"];
    const isThinFilter = thinFilterKeys.some((key) => url.searchParams.has(key));
    if (request.method === "GET" || request.method === "HEAD") {
      const assetResponse = await env.ASSETS.fetch(request);
      if (assetResponse.status !== 404) {
        return assetResponse;
      }
    }

    const response = await app.fetch(request, env, ctx);
    if (!isThinFilter) return response;
    const headers = new Headers(response.headers);
    headers.set("X-Robots-Tag", "noindex, follow");
    return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
  },
};

export default worker;
