import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getUiCopy } from "../../i18n";
import { buildMetadata, localizedUrl, translatedFaqLocales } from "../../seo";
import { StandalonePage } from "../../standalone-page";
import { sectionTitles, supportedLocales } from "../../site-shell";

export function generateStaticParams() {
  return Array.from(supportedLocales)
    .filter((locale) => locale !== "en")
    .flatMap((locale) =>
      Object.keys(sectionTitles).map((section) => ({ locale, section })),
    );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; section: string }> }): Promise<Metadata> {
  const { locale, section } = await params;
  if (!supportedLocales.has(locale) || !sectionTitles[section]) return {};
  const faqIndexable = section === "faq" && (translatedFaqLocales as readonly string[]).includes(locale);
  const ui = getUiCopy(locale);
  return buildMetadata({
    title: section === "faq" ? `${ui.faqTitle} | LoloBuy Sheet` : `${sectionTitles[section]} | LoloBuy Sheet`,
    description: section === "faq" ? ui.faqLead : "Independent LoloBuy research with official sources and practical buyer context. This route remains available while its full translation is completed.",
    path: `/${section}`,
    locale,
    canonical: localizedUrl(faqIndexable ? locale : "en", `/${section}`),
    alternateLocales: faqIndexable ? translatedFaqLocales : ["en"],
    indexable: faqIndexable,
  });
}

export default async function LocalizedSectionPage({ params }: { params: Promise<{ locale: string; section: string }> }) {
  const { locale, section } = await params;
  if (locale === "en" || !supportedLocales.has(locale) || !sectionTitles[section]) notFound();
  return <StandalonePage section={section} locale={locale} />;
}
