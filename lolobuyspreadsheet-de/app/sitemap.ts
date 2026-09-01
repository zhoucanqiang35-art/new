import type { MetadataRoute } from "next";
import { guideOrder } from "./data/guides";
import { localeCodes, localizedPath, sectionKeys } from "./data/locales";

const siteUrl = "https://lolobuyspreadsheet.de";
const lastModified = new Date("2026-09-01T00:00:00.000Z");
const sourceRecords = ["platform-materials", "app-listing"] as const;

function absolute(path: string) {
  return new URL(path, siteUrl).href;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const homes: MetadataRoute.Sitemap = localeCodes.map((locale) => ({
    url: absolute(localizedPath(locale)),
    lastModified,
    changeFrequency: "weekly",
    priority: locale === "en" ? 1 : 0.9,
  }));

  const sections: MetadataRoute.Sitemap = localeCodes.flatMap((locale) =>
    sectionKeys.map((section) => ({
      url: absolute(localizedPath(locale, section)),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  );

  const guides: MetadataRoute.Sitemap = localeCodes.flatMap((locale) =>
    guideOrder.map((slug) => ({
      url: absolute(localizedPath(locale, `guide/${slug}`)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  );

  const sources: MetadataRoute.Sitemap = localeCodes.flatMap((locale) =>
    sourceRecords.map((record) => ({
      url: absolute(localizedPath(locale, `sources/${record}`)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  );

  return [...homes, ...sections, ...guides, ...sources];
}
