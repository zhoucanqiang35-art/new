import type { MetadataRoute } from "next";
import { articles, categories, pages } from "./data";
import { locales } from "./translations";
export default function sitemap():MetadataRoute.Sitemap{
  const base="https://findspreadsheet-agent-guide.canqiangzhou32.chatgpt.site",updated=new Date("2026-08-25");
  const paths=["",...Object.keys(pages),...categories.map(c=>`category/${c.slug}`),...articles.map(a=>`article/${a.slug}`)];
  return locales.flatMap(locale=>paths.map(path=>({url:`${base}/${locale}${path?`/${path}`:""}`,lastModified:updated,changeFrequency:path===""?"weekly" as const:"monthly" as const,priority:path===""?1:.8})));
}
