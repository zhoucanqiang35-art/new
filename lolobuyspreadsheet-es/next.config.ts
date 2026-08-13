import type { NextConfig } from "next";

const isCloudflarePagesExport = process.env.CLOUDFLARE_PAGES_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isCloudflarePagesExport
    ? {
        output: "export" as const,
        trailingSlash: true,
        images: { unoptimized: true },
        typescript: { tsconfigPath: "tsconfig.pages.json" },
      }
    : {}),
};

export default nextConfig;
