import { LoloSite, type Locale, type SectionView } from "../../lolo-site";

const routeLocales = ["en", "fr", "de", "es", "it", "pt", "nl", "pl", "sv"] as const;
const routeSections = ["categories", "product-details", "how-it-works", "shipping", "faq", "seo-articles"] as const;

export function generateStaticParams() {
  return routeLocales.flatMap(locale => routeSections.map(section => ({ locale, section })));
}

export default async function SectionPage({ params }: { params: Promise<{ locale: string; section: string }> }) {
  const { locale, section } = await params;
  const safeLocale = routeLocales.includes(locale as Locale) ? locale as Locale : "en";
  const safeSection = routeSections.includes(section as SectionView) ? section as SectionView : "categories";
  return <LoloSite locale={safeLocale} view={safeSection} />;
}
