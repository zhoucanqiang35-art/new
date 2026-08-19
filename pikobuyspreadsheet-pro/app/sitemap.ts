import type { MetadataRoute } from "next";
import { guideDefs, locales } from "../lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pikobuyspreadsheet.pro";
  const now = new Date("2026-08-18T00:00:00Z");
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...locales.flatMap((locale) => [
      { url: `${base}/${locale.code}/`, lastModified: now, changeFrequency: "weekly" as const, priority: .9 },
      ...guideDefs.map((guide) => ({ url: `${base}/${locale.code}/${guide.slug}/`, lastModified: now, changeFrequency: "monthly" as const, priority: .75 })),
    ]),
  ];
}
