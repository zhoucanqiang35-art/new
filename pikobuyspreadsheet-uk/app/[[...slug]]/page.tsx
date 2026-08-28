import type { Metadata } from "next";
import { Site } from "../site";
import { seoArticles } from "../seo-content";
import localized from "../localized.generated.json";

type Props = { params: Promise<{ slug?: string[] }> };
const supported = new Set(["en", "fr", "de", "es", "it", "pt", "nl", "pl", "ro"]);
const staticRoutes = ["categories", "products", "guide", "qc", "shipping", "articles", "faq", "seo"];

export function generateStaticParams() {
  const articleRoutes = seoArticles.map((article) => article.slug);
  return [
    { slug: [] },
    ...Array.from(supported).flatMap((lang) => [
      { slug: [lang] },
      ...[...staticRoutes, ...articleRoutes].map((route) => ({ slug: [lang, route] })),
    ]),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const parts = (await params).slug ?? [];
  const lang = supported.has(parts[0]) ? parts[0] : "en";
  const route = supported.has(parts[0]) ? parts[1] ?? "home" : parts[0] ?? "home";
  const names: Record<string, string> = { home:"PikoBuy Spreadsheet UK", categories:"PikoBuy Product Categories", products:"PikoBuy Product Details", guide:"PikoBuy Spreadsheet Guide", qc:"PikoBuy QC Checklist", shipping:"PikoBuy Shipping Guide", articles:"PikoBuy Research Articles", faq:"PikoBuy Spreadsheet FAQ", seo:"PikoBuy Spreadsheet SEO Articles" };
  const languageBundle=(localized as Record<string,{copy:{pageTitles:Record<string,string>;intro:string};articles:typeof seoArticles}>)[lang];
  const articles=languageBundle?.articles??seoArticles;
  const article = articles.find(item => item.slug === route);
  const localizedTitle=languageBundle?.copy.pageTitles[route];
  return {
    title: `${article?.title ?? localizedTitle ?? names[route] ?? names.home} | FindSpreadsheet`,
    description: article?.description ?? languageBundle?.copy.intro ?? "An independent, evidence-led PikoBuy spreadsheet guide for product discovery, QC checks, parcel planning and safer use of FindSpreadsheet.",
    robots: { index: false, follow: false },
    alternates: { canonical: `/${lang}${route === "home" ? "" : `/${route}`}` },
  };
}

export default async function Page({ params }: Props) {
  const parts = (await params).slug ?? [];
  const lang = supported.has(parts[0]) ? parts[0] : "en";
  const route = supported.has(parts[0]) ? parts[1] ?? "home" : parts[0] ?? "home";
  return <Site lang={lang} route={route} />;
}
