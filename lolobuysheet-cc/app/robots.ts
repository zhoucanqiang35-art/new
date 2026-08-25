import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    // Standard static sitemap served directly by Cloudflare Pages.
    sitemap: "https://lolobuysheet.cc/sitemap-index.xml",
  };
}
