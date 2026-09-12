import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Home from "../../page";
import LocaleTranslator from "../../locale-translator";
import { indexableRobots, pageAlternates, supportedLocales } from "../../seo";

const locales: readonly string[] = supportedLocales;

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale)) return {};
  return {
    title: "PikoBuy Spreadsheet Europe | Finds, QC & Shipping Guides",
    description: "Independent PikoBuy spreadsheet research for Europe: browse products, review QC photos, understand returns and estimate parcel shipping.",
    robots: indexableRobots,
    alternates: pageAlternates("/", locale),
  };
}

export default async function LocalisedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale)) notFound();
  return <><LocaleTranslator locale={locale} /><Home /></>;
}
