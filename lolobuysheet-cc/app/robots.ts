import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    // Use the dedicated static Google sitemap. It intentionally contains only
    // the highest-value canonical pages and bypasses the application runtime.
    sitemap: "https://lolobuysheet.cc/sitemap-google.xml",
  };
}
