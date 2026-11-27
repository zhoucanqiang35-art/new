import type { Metadata } from "next";
import { Site } from "../site";
import languages from "../locales.json";
import { getLocale } from "../translations";
import { catalogLabels } from "../catalog-labels";
import { supportCopy } from "../support-copy";
import { seoPageCopy } from "../seo-page-copy";

type Props = { params: Promise<{ slug?: string[] }> };
const supported = new Set(languages.map(({ code }) => code));
const staticRoutes = ["categories", "products", "product", "guide", "qc", "shipping", "faq", "seo"];

export function generateStaticParams() {
  return [
    { slug: [] },
    ...Array.from(supported).flatMap(lang => [
      { slug: [lang] },
      ...staticRoutes.map(route => ({ slug: [lang, route] })),
    ]),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const parts = (await params).slug ?? [];
  const lang = supported.has(parts[0]) ? parts[0] : "en";
  const route = supported.has(parts[0]) ? parts[1] ?? "home" : parts[0] ?? "home";
  const names: Record<string, string> = { home:"PikoBuy Spreadsheet: Product Finds, QC Photos & Guides", categories:"PikoBuy Product Categories", products:"PikoBuy Product Details", guide:"PikoBuy Guide: Products, QC, Shipping and Returns", qc:"PikoBuy QC Checklist", shipping:"PikoBuy Shipping Guide", articles:"PikoBuy Research Articles", faq:"PikoBuy Spreadsheet FAQ", seo:"PikoBuy Spreadsheet SEO Articles" };
  const languageBundle=getLocale(lang);
  const copy = languageBundle?.copy;
  const localizedTitle = route === "home" ? copy?.title : copy?.pageTitles[route as keyof NonNullable<typeof copy>["pageTitles"]];
  const help = supportCopy(lang);
  const seo = seoPageCopy(lang);
  const helpTitle = route === "guide" ? help.guideTitle : route === "faq" ? help.faqTitle : route === "seo" ? seo.title : undefined;
  const title = helpTitle ?? (route === "products" || route === "product" ? catalogLabels(lang).browse :
    localizedTitle ?? names[route] ?? names.home);
  const helpDescription = route === "guide" ? help.guideIntro : route === "faq" ? help.faqIntro :
    route === "seo" ? seo.intro : undefined;
  const description = helpDescription ?? copy?.intro ?? "An independent PikoBuy spreadsheet guide for product discovery, QC checks and shipping.";
  const canonical = `https://pikobuyspreadsheet.uk/${lang}${route === "home" ? "/" : `/${route}/`}`;
  const languageAlternates=Object.fromEntries(Array.from(supported).map(language=>[language,`https://pikobuyspreadsheet.uk/${language}${route === "home" ? "/" : `/${route}/`}`]));
  return {
    title: `${title} | FindSpreadsheet`,
    description,
    robots: { index: route !== "product", follow: true },
    alternates: { canonical, languages: languageAlternates },
  };
}

export default async function Page({ params }: Props) {
  const parts = (await params).slug ?? [];
  const lang = supported.has(parts[0]) ? parts[0] : "en";
  const route = supported.has(parts[0]) ? parts[1] ?? "home" : parts[0] ?? "home";
  return <Site lang={lang} route={route} />;
}
