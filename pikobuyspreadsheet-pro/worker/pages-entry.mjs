import application from "../dist/server/index.js";

const staticAssetPath =
  /^(?:\/assets\/|\/products\/)|\.(?:css|js|mjs|png|jpe?g|webp|gif|svg|ico|woff2?|ttf|otf|webmanifest)$/i;

export default {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);

    // In Pages advanced mode the Worker owns every request. Route emitted
    // client assets directly to the Pages ASSETS binding before Vinext handles
    // application routes, otherwise browsers can receive unstyled HTML. Keep
    // application-owned metadata routes such as /robots.txt and /sitemap.xml
    // out of this matcher so Vinext can generate their responses.
    if (staticAssetPath.test(pathname)) {
      return env.ASSETS.fetch(request);
    }

    return application.fetch(request, env, context);
  },
};
