import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://lolobuysheet.lt/sitemap.xml",
    host: "https://lolobuysheet.lt",
  };
}
