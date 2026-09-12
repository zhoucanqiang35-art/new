import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages serves the public build directly from dist/client.
  output: "export",
};

export default nextConfig;
