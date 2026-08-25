import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    // Keep one canonical discovery endpoint. The XML sitemap contains every
    // indexable English and localized URL and is served with an XML MIME type.
    sitemap: "https://lolobuysheet.cc/sitemap.xml",
  };
}
