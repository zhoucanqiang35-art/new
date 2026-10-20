import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Home from "../../page";
import LocaleTranslator from "../../locale-translator";
import { indexableRobots, pageAlternates, supportedLocales } from "../../seo";
import { localiseSeo } from "../../localized-seo";

const locales: readonly string[] = supportedLocales;

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale)) return {};
  const title = "Pikobuy Spreadsheet 2026 | Searchable Finds, QC Photos & Guides";
  const description = "Search a Pikobuy spreadsheet for Taobao, Weidian, 1688 and Yupoo finds. Compare listings, QC photos, sizing and shipping weight before opening a product route.";
  return {
    title: localiseSeo(locale, title),
    description: localiseSeo(locale, description),
    robots: indexableRobots,
    alternates: pageAlternates("/", locale),
  };
}

export default async function LocalisedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale)) notFound();
  return <><LocaleTranslator locale={locale} /><Home /></>;
}
