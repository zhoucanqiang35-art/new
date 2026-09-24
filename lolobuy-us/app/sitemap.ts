import type { MetadataRoute } from "next";
import { contentPages, locales } from "./site-data";

const origin = "https://lolobuy.us";
const fixedPaths = ["", "spreadsheet", "faq", "updates", "seo-articles"];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...fixedPaths, ...Object.keys(contentPages)];
  const lastModified = new Date("2026-09-24T00:00:00.000Z");

  return locales.flatMap(([locale]) =>
    paths.map((path) => {
      const prefix = locale === "en" ? "" : `/${locale}`;
      const suffix = path ? `/${path}` : "/";
      return {
        url: `${origin}${prefix}${suffix}`,
        lastModified,
        changeFrequency: path.startsWith("seo-articles/") ? "weekly" : "monthly",
        priority: path === "" ? 1 : path === "spreadsheet" || path === "seo-articles" ? 0.9 : 0.7,
      } as const;
    }),
  );
}
