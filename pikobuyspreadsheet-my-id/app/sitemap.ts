import type { MetadataRoute } from "next";
import { localizedArticleRecords } from "@/components/full-locales";

const baseUrl = "https://pikobuyspreadsheet-my-id.pages.dev";
const languages = ["en", "es", "de", "fr", "it", "pt", "nl", "pl", "sv"] as const;
const pages = ["categories", "products", "guides", "shipping", "articles", "faq", "sources"] as const;

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const language of languages) {
    const prefix = language === "en" ? "" : `/${language}`;
    entries.push({ url: `${baseUrl}${prefix}/`, changeFrequency: "weekly", priority: language === "en" ? 1 : 0.8 });

    for (const page of pages) {
      entries.push({ url: `${baseUrl}${prefix}/${page}/`, changeFrequency: "weekly", priority: page === "articles" ? 0.9 : 0.8 });
    }

    for (const article of localizedArticleRecords[language]) {
      entries.push({ url: `${baseUrl}${prefix}/articles/${article.slug}/`, changeFrequency: "monthly", priority: 0.9 });
    }
  }

  return entries;
}
