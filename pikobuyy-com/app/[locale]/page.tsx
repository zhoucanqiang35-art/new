import { notFound } from "next/navigation";
import { LocalizedHome } from "../localized-pages";
import { isLocale, languages } from "../site-content";
import { homeMetadata } from "../seo";

export function generateStaticParams() {
  return languages.filter(({ code }) => code !== "en").map(({ code }) => ({ locale: code }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") return {};
  return homeMetadata(locale);
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  return <LocalizedHome locale={locale} />;
}
