import type { MetadataRoute } from "next";
import { seoArticles } from "./article-data";

const baseUrl = "https://lolobuyspreadsheet.uk";
const languages = ["en", "de", "fr", "es", "it", "nl", "pl", "pt", "sv"];
const sections = ["", "/categories", "/product-details", "/guides", "/articles", "/faq"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-30T00:00:00Z");
  const sectionPages = languages.flatMap((language) =>
    sections.map((section) => ({
      url: `${baseUrl}/${language}${section}`,
      lastModified,
      changeFrequency: section === "/articles" ? "weekly" as const : "monthly" as const,
      priority: section === "" ? 1 : section === "/articles" ? 0.9 : 0.7,
    })),
  );

  const articlePages = languages.flatMap((language) =>
    seoArticles.map((article) => ({
      url: `${baseUrl}/${language}/articles/${article.slug}`,
      lastModified: new Date(`${article.dateModified ?? "2026-08-30"}T00:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: language === "en" ? 0.9 : 0.75,
    })),
  );

  return [...sectionPages, ...articlePages];
}
