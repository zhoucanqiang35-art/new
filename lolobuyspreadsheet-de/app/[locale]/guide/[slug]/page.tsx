import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuidePage from "../../../components/GuidePage";
import { guideData, guideOrder, type GuideSlug } from "../../../data/guides";
import { isLocale, localeCodes, localizedPath, type Locale } from "../../../data/locales";
import { tr } from "../../../data/translate";

export function generateStaticParams() {
  return localeCodes
    .filter(locale => locale !== "en")
    .flatMap(locale => guideOrder.map(slug => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale === "en" || !guideOrder.includes(slug as GuideSlug)) return {};
  const key = slug as GuideSlug;
  const guide = guideData[key];
  return {
    title: `${tr(locale, guide.title)} | LoloBuy Spreadsheet`,
    description: tr(locale, guide.deck),
    alternates: {
      canonical: localizedPath(locale, `guide/${slug}`),
      languages: Object.fromEntries(localeCodes.map(code => [code, localizedPath(code, `guide/${slug}`)])),
    },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale === "en" || !guideOrder.includes(slug as GuideSlug)) notFound();
  return <GuidePage slug={slug as GuideSlug} locale={locale as Locale} />;
}
