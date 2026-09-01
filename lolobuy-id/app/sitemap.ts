import type { MetadataRoute } from "next";
import { articles, categories, pages } from "./data";
import { locales } from "./translations";

// Canonical production origin for Google Search Console.
export default function sitemap():MetadataRoute.Sitemap{
  const base="https://lolobuy.id",updated=new Date("2026-09-01");
  const sharedPaths=["",...Object.keys(pages),...categories.map(c=>`category/${c.slug}`)];
  return locales.flatMap(locale=>{
    const articlePaths=articles.filter(article=>locale==="en"||!article.englishOnly).map(article=>`article/${article.slug}`);
    return [...sharedPaths,...articlePaths].map(path=>({url:`${base}/${locale}${path?`/${path}`:""}`,lastModified:updated,changeFrequency:path===""?"weekly" as const:"monthly" as const,priority:path===""?1:.8}));
  });
}
