import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Home } from "../page";
import { homeMetadata } from "../seo";

const supportedLocaleValues = [
  "es", "de", "fr", "it", "pt", "nl", "pl", "sv", "da", "no", "fi", "cs",
  "ro", "hu", "el", "uk", "tr", "ru", "bg", "ja", "ko", "ar", "zh",
] as const;

const supportedLocales = new Set<string>(supportedLocaleValues);

export function generateStaticParams() {
  return supportedLocaleValues.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const normalizedLocale = locale.toLowerCase();
  if (!supportedLocales.has(normalizedLocale)) return {};
  return homeMetadata(normalizedLocale);
}

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const normalizedLocale = locale.toLowerCase();
  if (!supportedLocales.has(normalizedLocale)) notFound();
  return <Home locale={normalizedLocale} />;
}
