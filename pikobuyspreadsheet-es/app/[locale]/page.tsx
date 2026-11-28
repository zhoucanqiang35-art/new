import { notFound } from "next/navigation";
import { locales } from "../data";
import { HomePage } from "../site-components";
import { pageMetadata } from "../seo";
import { getCopy } from "../i18n";

export function generateStaticParams() { return locales.filter((item) => item.code !== "en-US").map((item) => ({ locale: item.code })); }
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale === "es-ES") return {...pageMetadata(
    locale,
    "",
    "Pikobuy Spreadsheet España 2026: hallazgos, QC y envíos",
    "Consulta un spreadsheet de PikoBuy en español con enlaces de ropa y zapatillas, fichas de productos, fotos QC, costes de envío y guías para España.",
  ),other:{"content-language":locale}};
  const text = getCopy(locale);
  return {...pageMetadata(locale, "", `PikoBuy Spreadsheet 2026 · ${text.navGuides}`, text.intro),other:{"content-language":locale}};
}

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.some((item) => item.code === locale) || locale === "en-US") notFound();
  return <HomePage locale={locale}/>;
}
