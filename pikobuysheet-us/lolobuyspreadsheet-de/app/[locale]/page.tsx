import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SiteHome from "../components/SiteHome";
import { isLocale, localeCodes, localePath, localeText, type Locale } from "../data/locales";

export function generateStaticParams() {
  return localeCodes.filter(code => code !== "en" && code !== "de").map(locale => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en" || locale === "de") return {};
  const t = localeText[locale];
  return {
    title: `${t.title1} ${t.title2} | LoloBuy Spreadsheet`,
    description: t.intro,
    alternates: {
      canonical: localePath(locale),
      languages: Object.fromEntries(localeCodes.map(code => [code, localePath(code)])),
    },
  };
}

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en" || locale === "de") notFound();
  return <SiteHome locale={locale as Locale} />;
}
