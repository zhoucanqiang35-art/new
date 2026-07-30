import { notFound } from "next/navigation";
import { ContentDetailPage } from "../../../detail-pages";
import { isLocale, isSection, languages, sectionItemSlugs, type Section } from "../../../site-content";

export function generateStaticParams() {
  const detailSections: Exclude<Section, "categories">[] = ["guides", "articles", "updates", "faq"];
  return languages
    .filter(({ code }) => code !== "en")
    .flatMap(({ code }) => detailSections.flatMap((section) => sectionItemSlugs[section].map((slug) => ({ locale: code, section, slug }))));
}

export default async function Page({ params }: { params: Promise<{ locale: string; section: string; slug: string }> }) {
  const { locale, section, slug } = await params;
  if (!isLocale(locale) || locale === "en" || !isSection(section) || section === "categories") notFound();
  const detailSection = section as Exclude<Section, "categories">;
  if (!sectionItemSlugs[detailSection].includes(slug)) notFound();
  return <ContentDetailPage locale={locale} section={detailSection} slug={slug} />;
}
