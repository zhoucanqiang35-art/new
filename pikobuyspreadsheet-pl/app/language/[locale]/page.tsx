import { notFound } from "next/navigation";
import Home from "../../page";
import LocaleTranslator from "../../locale-translator";

const locales = ["de", "fr", "es", "it", "nl", "pt", "pl"];

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export default async function LocalisedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale)) notFound();
  return <><LocaleTranslator locale={locale} /><Home /></>;
}
