import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomePage from "../../page";
import ProductsPage from "../../products/page";
import ProductPage from "../../products/[slug]/page";
import CategoriesPage from "../../categories/page";
import GuidesPage from "../../guides/page";
import ShippingPage from "../../shipping/page";
import FAQPage from "../../faq/page";
import ArticlesPage from "../../articles/page";
import QCArticlePage from "../../articles/qc-photo-checklist/page";
import RecheckLinksPage from "../../articles/recheck-product-links/page";
import ReturnWindowPage from "../../articles/warehouse-return-window/page";
import WesternMarketsPage from "../../articles/western-market-search-intent/page";
import FirstVsSecondPaymentArticle from "../../articles/first-vs-second-payment/page";
import SearchPage from "../../search/page";

const localizedLanguages = ["de", "fr", "es", "it", "nl", "pl", "pt", "sv"] as const;
const productSlugs = new Set([
  "nike-phantom-gx-elite-ag-pro",
  "gcds-logo-band-hoodie",
  "cp-company-down-jacket",
  "polo-ralph-lauren-knit-cap",
]);

type LocalizedPageProps = {
  params: Promise<{ locale: string; path?: string[] }>;
  searchParams: Promise<{ q?: string | string[] }>;
};

function isLocale(locale: string): locale is (typeof localizedLanguages)[number] {
  return localizedLanguages.includes(locale as (typeof localizedLanguages)[number]);
}

function basePath(path: string[]) {
  return path.length ? `/${path.join("/")}` : "/";
}

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  const { locale, path = [] } = await params;
  if (!isLocale(locale)) return {};
  const equivalent = basePath(path);
  const languageUrls: Record<string, string> = { en: equivalent, "x-default": equivalent };
  localizedLanguages.forEach((language) => { languageUrls[language] = `/${language}${equivalent === "/" ? "" : equivalent}`; });
  return {
    alternates: {
      canonical: `/${locale}${equivalent === "/" ? "" : equivalent}`,
      languages: languageUrls,
    },
    robots: path[0] === "search" ? { index: false, follow: true } : { index: true, follow: true },
  };
}

export default async function LocalizedPage({ params, searchParams }: LocalizedPageProps) {
  const { locale, path = [] } = await params;
  if (!isLocale(locale)) notFound();
  const route = path.join("/");
  if (!route) return <HomePage />;
  if (route === "products") return <ProductsPage />;
  if (path[0] === "products" && path.length === 2 && productSlugs.has(path[1])) {
    return <ProductPage params={Promise.resolve({ slug: path[1] })} />;
  }
  if (route === "categories") return <CategoriesPage />;
  if (route === "guides") return <GuidesPage />;
  if (route === "shipping") return <ShippingPage />;
  if (route === "faq") return <FAQPage />;
  if (route === "articles") return <ArticlesPage />;
  if (route === "articles/qc-photo-checklist") return <QCArticlePage />;
  if (route === "articles/recheck-product-links") return <RecheckLinksPage />;
  if (route === "articles/warehouse-return-window") return <ReturnWindowPage />;
  if (route === "articles/western-market-search-intent") return <WesternMarketsPage />;
  if (route === "articles/first-vs-second-payment") return <FirstVsSecondPaymentArticle />;
  if (route === "search") return <SearchPage searchParams={searchParams} />;
  notFound();
}
