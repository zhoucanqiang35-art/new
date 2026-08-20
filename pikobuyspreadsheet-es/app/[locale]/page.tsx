import { notFound } from "next/navigation";
import { locales } from "../data";
import { HomePage } from "../site-components";
import { pageMetadata } from "../seo";

export function generateStaticParams() { return locales.filter((item) => item.code !== "en-US").map((item) => ({ locale: item.code })); }
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return pageMetadata(locale,"","PikoBuy Spreadsheet Europe","Independent PikoBuy product, shipping and warehouse research.");
}

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.some((item) => item.code === locale) || locale === "en-US") notFound();
  return <HomePage locale={locale}/>;
}
