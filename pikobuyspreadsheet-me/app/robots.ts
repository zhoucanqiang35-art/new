import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://pikobuyspreadsheet-me.pages.dev/sitemap.xml",
    host: "https://pikobuyspreadsheet-me.pages.dev",
  };
}
