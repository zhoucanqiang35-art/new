import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SectionPage from "../../components/SectionPage";
import { isLocale, isSection, localeCodes, localeText, localizedPath, sectionKeys } from "../../data/locales";
import { uiCopy } from "../../data/ui-copy";

export function generateStaticParams() {
  return localeCodes.filter(locale => locale !== "en").flatMap(locale => sectionKeys.map(section => ({ locale, section })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; section: string }> }): Promise<Metadata> {
  const { locale, section } = await params;
  if (!isLocale(locale) || locale === "en" || !isSection(section)) return {};
  const index = sectionKeys.indexOf(section);
  const title = section === "faq" ? localeText[locale].faq : localeText[locale].nav[index];
  return {
    title: `${title} | LoloBuy Spreadsheet`,
    description: uiCopy(locale).leads[section],
    alternates: {
      canonical: localizedPath(locale, section),
      languages: Object.fromEntries(localeCodes.map(code => [code, localizedPath(code, section)])),
    },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string; section: string }> }) {
  const { locale, section } = await params;
  if (!isLocale(locale) || locale === "en" || !isSection(section)) notFound();
  return <SectionPage locale={locale} section={section} />;
}
