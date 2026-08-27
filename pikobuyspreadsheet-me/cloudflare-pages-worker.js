import app from "./app.js";

export default {
  async fetch(request, env, ctx) {
    if (request.method === "GET" || request.method === "HEAD") {
      const assetResponse = await env.ASSETS.fetch(request);
      if (assetResponse.status !== 404) {
        return assetResponse;
      }
    }

    return app.fetch(request, env, ctx);
  },
};
