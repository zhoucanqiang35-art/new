import { notFound } from "next/navigation";
import { Home } from "../page";

const supportedLocales = new Set(["es", "de", "fr", "it", "pt", "nl", "pl", "sv", "da", "no", "fi", "cs", "ro", "hu", "el", "uk", "tr", "ru", "bg", "ja", "ko", "ar", "zh"]);

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const normalizedLocale = locale.toLowerCase();
  if (!supportedLocales.has(normalizedLocale)) notFound();
  return <Home locale={normalizedLocale} />;
}
