import app from "./server.js";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (
      url.pathname.startsWith("/assets/") ||
      url.pathname === "/og-hero.jpg"
    ) {
      return env.ASSETS.fetch(request);
    }

    return app.fetch(request, env, ctx);
  },
};
