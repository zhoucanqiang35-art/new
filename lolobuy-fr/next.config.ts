import type { NextConfig } from "next";

// The production domain keeps its existing root URLs. GitHub Pages serves this
// sub-project at /new, so its static preview needs a scoped asset path.
const githubPagesBasePath =
  process.env.GITHUB_PAGES === "true" ? "/new" : undefined;

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: githubPagesBasePath,
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
