import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages serves a static directory.  Keep the Vinext build for
  // Sites/Workers, and let `npm run build:pages` emit a complete static copy
  // (including an index.html for every route) into `out/`.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
