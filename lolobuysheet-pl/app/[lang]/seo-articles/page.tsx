import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Articles from "../../seo-articles/page";
import { isSiteLocale, localizedMetadata, siteLocales } from "../../locale-seo";
export function generateStaticParams() { return siteLocales.map((lang) => ({lang})); }
export async function generateMetadata({params}: {params: Promise<{lang: string}>}): Promise<Metadata> { const {lang} = await params; return isSiteLocale(lang) ? localizedMetadata(lang, "/seo-articles") : {}; }
export default async function LocalizedArticles({params}: {params: Promise<{lang: string}>}) { const {lang} = await params; if (!isSiteLocale(lang)) notFound(); return <Articles initialLanguage={lang}/>; }
