import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "findspreadsheet.com", pathname: "/uploads/**" },
      { protocol: "https", hostname: "findspreadsheet.com", pathname: "/template/pc/skin/images/platform-logos/**" },
      { protocol: "https", hostname: "si.geilicdn.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
