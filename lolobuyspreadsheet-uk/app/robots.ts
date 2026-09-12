import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://lolobuyspreadsheet.uk/sitemap.xml",
    host: "https://lolobuyspreadsheet.uk",
  };
}
