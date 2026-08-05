import type { NextConfig } from "next";

const isCloudflarePages = process.env.CF_PAGES === "1";

const nextConfig: NextConfig = isCloudflarePages
  ? {
      output: "export",
      trailingSlash: true,
      images: {
        unoptimized: true,
      },
      typescript: {
        tsconfigPath: "tsconfig.pages.json",
      },
    }
  : {
      redirects: async () => [
        {
          source: "/:path*",
          has: [{ type: "host", value: "www.lolobuysheet.es" }],
          destination: "https://lolobuysheet.es/:path*",
          permanent: true,
        },
      ],
    };

export default nextConfig;
