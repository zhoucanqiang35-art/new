import application from "../dist/server/index.js";

const PUBLIC_ASSET =
  /\.(?:avif|css|gif|ico|jpe?g|js|json|png|svg|txt|webmanifest|webp|woff2?|xml)$/i;

function withSecurityHeaders(response) {
  const headers = new Headers(response.headers);
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

export default {
  async fetch(request, env, ctx) {
    const pathname = new URL(request.url).pathname;
    if (pathname.startsWith("/assets/") || PUBLIC_ASSET.test(pathname)) {
      return withSecurityHeaders(await env.ASSETS.fetch(request));
    }

    return withSecurityHeaders(await application.fetch(request, env, ctx));
  },
};
