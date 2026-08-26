import worker from "./_server/index.js";

export default {
  async fetch(request, env, context) {
    const url = new URL(request.url);
    const { pathname } = url;

    if (url.hostname === "www.lolobuy.id") {
      url.hostname = "lolobuy.id";
      return Response.redirect(url.toString(), 301);
    }

    // In Pages advanced mode `_worker.js` receives every request before the
    // static asset layer. Vinext renders CSS and browser bundles under
    // `/assets/`, so explicitly hand those requests to the Pages ASSETS
    // binding instead of sending them through the application router.
    if (pathname.startsWith("/assets/")) {
      return env.ASSETS.fetch(request);
    }

    return worker.fetch(request, env, context);
  },
};
