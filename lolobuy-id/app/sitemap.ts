import type { MetadataRoute } from "next";
import { articles, categories, pages } from "./data";
import { locales } from "./translations";

// Canonical production origin for Google Search Console.
export default function sitemap():MetadataRoute.Sitemap{
  const base="https://lolobuy.id",updated=new Date("2026-08-26");
  const paths=["",...Object.keys(pages),...categories.map(c=>`category/${c.slug}`),...articles.map(a=>`article/${a.slug}`)];
  return locales.flatMap(locale=>paths.map(path=>({url:`${base}/${locale}${path?`/${path}`:""}`,lastModified:updated,changeFrequency:path===""?"weekly" as const:"monthly" as const,priority:path===""?1:.8})));
}
