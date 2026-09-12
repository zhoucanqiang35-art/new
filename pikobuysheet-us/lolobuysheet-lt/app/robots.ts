import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // This public research site is intentionally open to search-engine crawling.
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://lolobuysheet.lt/sitemap.xml",
    host: "https://lolobuysheet.lt",
  };
}
