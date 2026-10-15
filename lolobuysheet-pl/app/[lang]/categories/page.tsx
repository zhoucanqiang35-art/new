import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Categories from "../../categories/page";
import { isSiteLocale, localizedMetadata, siteLocales } from "../../locale-seo";
export function generateStaticParams() { return siteLocales.map((lang) => ({lang})); }
export async function generateMetadata({params}: {params: Promise<{lang: string}>}): Promise<Metadata> { const {lang} = await params; return isSiteLocale(lang) ? localizedMetadata(lang, "/categories") : {}; }
export default async function LocalizedCategories({params}: {params: Promise<{lang: string}>}) { const {lang} = await params; if (!isSiteLocale(lang)) notFound(); return <Categories initialLanguage={lang}/>; }
