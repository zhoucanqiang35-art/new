import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Details from "../../product-details/page";
import { isSiteLocale, localizedMetadata, siteLocales } from "../../locale-seo";
export function generateStaticParams() { return siteLocales.map((lang) => ({lang})); }
export async function generateMetadata({params}: {params: Promise<{lang: string}>}): Promise<Metadata> { const {lang} = await params; return isSiteLocale(lang) ? localizedMetadata(lang, "/product-details") : {}; }
export default async function LocalizedDetails({params}: {params: Promise<{lang: string}>}) { const {lang} = await params; if (!isSiteLocale(lang)) notFound(); return <Details initialLanguage={lang}/>; }
