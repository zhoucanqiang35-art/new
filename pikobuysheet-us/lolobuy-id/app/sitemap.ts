import type { MetadataRoute } from "next";
import { articles, categories, pages } from "./data";
import { locales } from "./translations";

// Canonical production origin for Google Search Console.
export default function sitemap():MetadataRoute.Sitemap{
  const base="https://lolobuy.id",updated=new Date("2026-09-11");
  const sharedPaths=["",...Object.keys(pages)];
  const localized=locales.flatMap(locale=>{
    const articlePaths=articles.filter(article=>locale==="en"||!article.englishOnly).map(article=>`article/${article.slug}`);
    const categoryPaths=locale==="en"?[]:categories.map(c=>`category/${c.slug}`);
    return [...sharedPaths,...categoryPaths,...articlePaths].map(path=>({url:`${base}/${locale}${path?`/${path}`:""}`,lastModified:updated,changeFrequency:path===""?"weekly" as const:"monthly" as const,priority:path===""?1:.8}));
  });
  const spreadsheetPaths=["spreadsheet",...categories.map(c=>`spreadsheet/${c.slug}`),"spreadsheet/brands/nike","spreadsheet/brands/stussy","shipping-calculator"];
  const cluster=spreadsheetPaths.map(path=>({url:`${base}/${path}`,lastModified:updated,changeFrequency:path==="spreadsheet"?"weekly" as const:"monthly" as const,priority:path==="spreadsheet"?1:.85}));
  return [...localized,...cluster];
}
