import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    // Google-compatible plain text sitemap, served as a static Pages asset.
    sitemap: "https://lolobuysheet.cc/sitemap.txt",
  };
}
