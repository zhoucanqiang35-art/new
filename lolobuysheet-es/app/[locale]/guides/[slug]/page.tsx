import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buyerGuides, getBuyerGuide } from "../../../guide-data";
import { GuidePage } from "../../../guide-page";
import { supportedLocales } from "../../../site-shell";

export function generateStaticParams() {
  return Array.from(supportedLocales)
    .filter((locale) => locale !== "en")
    .flatMap((locale) => buyerGuides.map(({ slug }) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = getBuyerGuide(slug);
  if (!supportedLocales.has(locale) || locale === "en" || !guide) return {};
  return {
    title: `${guide.title} | LoloBuy Buyer Guides`,
    description: guide.summary,
    alternates: { canonical: `https://lolobuysheet.es/${locale}/guides/${guide.slug}` },
  };
}

export default async function LocalizedBuyerGuidePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!supportedLocales.has(locale) || locale === "en" || !getBuyerGuide(slug)) notFound();
  return <GuidePage slug={slug} locale={locale} />;
}
