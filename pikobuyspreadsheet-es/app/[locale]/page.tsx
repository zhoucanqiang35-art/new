import { notFound } from "next/navigation";
import { locales } from "../data";
import { HomePage } from "../site-components";

export function generateStaticParams() { return locales.filter((item) => item.code !== "en-US").map((item) => ({ locale: item.code })); }

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.some((item) => item.code === locale) || locale === "en-US") notFound();
  return <HomePage locale={locale}/>;
}
