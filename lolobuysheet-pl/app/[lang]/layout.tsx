import { notFound } from "next/navigation";
import { isSiteLocale, siteLocales } from "../locale-seo";

export function generateStaticParams() {
  return siteLocales.map((lang) => ({lang}));
}

export default async function LocaleLayout({children, params}: {children: React.ReactNode; params: Promise<{lang: string}>}) {
  const {lang} = await params;
  if (!isSiteLocale(lang)) notFound();
  return children;
}
