import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StandalonePage } from "../../standalone-page";
import { sectionTitles, supportedLocales } from "../../site-shell";

export async function generateMetadata({ params }: { params: Promise<{ locale: string; section: string }> }): Promise<Metadata> {
  const { locale, section } = await params;
  if (!supportedLocales.has(locale) || !sectionTitles[section]) return {};
  return {
    title: `${sectionTitles[section]} | LoloBuy Sheet`,
    description: "Independent LoloBuy research with official sources, practical buyer context and a consistent multilingual layout.",
    alternates: { canonical: `https://lolobuysheet.es/${locale}/${section}` },
  };
}

export default async function LocalizedSectionPage({ params }: { params: Promise<{ locale: string; section: string }> }) {
  const { locale, section } = await params;
  if (locale === "en" || !supportedLocales.has(locale) || !sectionTitles[section]) notFound();
  return <StandalonePage section={section} locale={locale} />;
}
