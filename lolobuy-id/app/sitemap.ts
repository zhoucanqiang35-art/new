import type { MetadataRoute } from "next";
import { articles, categories, pages } from "./data";
import { locales } from "./translations";

// Canonical production origin for Google Search Console.
export default function sitemap():MetadataRoute.Sitemap{
  const base="https://lolobuy.id",updated=new Date("2026-09-25");
  const sharedPaths=["",...Object.keys(pages)];
  const localized=locales.flatMap(locale=>{
    const localeArticles=articles.filter(article=>locale==="en"||!article.englishOnly);
    const articleEntries=localeArticles.map(article=>({url:`${base}/${locale}/article/${article.slug}`,lastModified:new Date(article.modified??article.published??"2026-09-25"),changeFrequency:"monthly" as const,priority:.8}));
    const categoryPaths=locale==="en"?[]:categories.map(c=>`category/${c.slug}`);
    const sharedEntries=[...sharedPaths,...categoryPaths].map(path=>({url:`${base}/${locale}${path?`/${path}`:""}`,lastModified:updated,changeFrequency:path===""?"weekly" as const:"monthly" as const,priority:path===""?1:.8}));
    return [...sharedEntries,...articleEntries];
  });
  const spreadsheetPaths=["spreadsheet",...categories.map(c=>`spreadsheet/${c.slug}`),"spreadsheet/brands/nike","spreadsheet/brands/stussy","shipping-calculator"];
  const cluster=spreadsheetPaths.map(path=>({url:`${base}/${path}`,lastModified:updated,changeFrequency:path==="spreadsheet"?"weekly" as const:"monthly" as const,priority:path==="spreadsheet"?1:.85}));
  return [...localized,...cluster];
}
