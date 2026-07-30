import { notFound } from "next/navigation";
import { SectionPage } from "../../localized-pages";
import { isLocale, isSection, languages, sections } from "../../site-content";

export function generateStaticParams() {
  return languages
    .filter(({ code }) => code !== "en")
    .flatMap(({ code }) => sections.map((section) => ({ locale: code, section })));
}

export default async function Page({ params }: { params: Promise<{ locale: string; section: string }> }) {
  const { locale, section } = await params;
  if (!isLocale(locale) || locale === "en" || !isSection(section)) notFound();
  return <SectionPage locale={locale} section={section} />;
}
