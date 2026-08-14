import type { MetadataRoute } from "next";
import { productionOrigin, siteIndexable } from "./lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: siteIndexable
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    sitemap: `${productionOrigin}/sitemap.xml`,
    host: productionOrigin,
  };
}
