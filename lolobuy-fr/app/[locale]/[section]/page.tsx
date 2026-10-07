import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LoloSite, type Locale, type SectionView } from "../../lolo-site";
import { getSectionMetadata, getSectionSchema, routeLocales, routeSections, type RouteLocale, type RouteSection } from "../../section-metadata";

export function generateStaticParams() {
  return routeLocales.flatMap(locale => routeSections.map(section => ({ locale, section })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; section: string }> }): Promise<Metadata> {
  const { locale, section } = await params;
  if (!routeLocales.includes(locale as RouteLocale) || !routeSections.includes(section as RouteSection)) return {};
  return getSectionMetadata(locale as RouteLocale, section as RouteSection);
}

export default async function SectionPage({ params }: { params: Promise<{ locale: string; section: string }> }) {
  const { locale, section } = await params;
  if (!routeLocales.includes(locale as RouteLocale) || !routeSections.includes(section as RouteSection)) notFound();
  const safeLocale = locale as Locale;
  const safeSection = section as SectionView;
  const schema = getSectionSchema(locale as RouteLocale, section as RouteSection);
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <LoloSite locale={safeLocale} view={safeSection} />
  </>;
}
