import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomePage from "../../page";
import ProductsPage from "../../products/page";
import ProductPage from "../../products/[slug]/page";
import CategoriesPage from "../../categories/page";
import CategoryPage from "../../categories/[slug]/page";
import GuidesPage from "../../guides/page";
import ShippingPage from "../../shipping/page";
import FAQPage from "../../faq/page";
import ArticlesPage from "../../articles/page";
import QCArticlePage from "../../articles/qc-photo-checklist/page";
import RecheckLinksPage from "../../articles/recheck-product-links/page";
import ReturnWindowPage from "../../articles/warehouse-return-window/page";
import WesternMarketsPage from "../../articles/western-market-search-intent/page";
import FirstVsSecondPaymentArticle from "../../articles/first-vs-second-payment/page";
import ShippingEstimateVolumetricWeightArticle from "../../articles/shipping-estimate-volumetric-weight/page";
import SearchPage from "../../search/page";
import { categories, categoryBySlug, productBySlug } from "../../catalog";
import { serverTranslations } from "../../i18n/server-translations";

const localizedLanguages = ["de", "fr", "es", "it", "nl", "pl", "pt", "sv"] as const;
const productSlugs = new Set([
  "nike-phantom-gx-elite-ag-pro",
  "gcds-logo-band-hoodie",
  "cp-company-down-jacket",
  "polo-ralph-lauren-knit-cap",
]);
const categorySlugs = new Set(categories.map((category) => category.slug));

const routeSeo: Record<string, { title: string; description: string }> = {
  "": { title: "PikoBuy Spreadsheet 2026 | Searchable Product Links & EU Guide", description: "An independent PikoBuy spreadsheet research guide for category-first product discovery, QC checks, shipping context and live FindSpreadsheet records." },
  products: { title: "PikoBuy Product Details & Research Notes", description: "Independent PikoBuy product research pages with USD price context, QC checks, sizing reminders and links to the live FindSpreadsheet category." },
  categories: { title: "PikoBuy Spreadsheet Product Categories", description: "Browse ten PikoBuy spreadsheet research categories, then continue to the matching live FindSpreadsheet category." },
  guides: { title: "How to Use PikoBuy: Complete Spreadsheet & Buying Workflow", description: "A fact-checked PikoBuy beginner workflow covering product links, the first payment, warehouse inspection, QC, returns, parcel submission and tracking." },
  shipping: { title: "PikoBuy Shipping Cost, Warehouse & Parcel Planning Guide", description: "Fact-checked notes on PikoBuy shipping estimates, weight, dimensions, forwarding, warehouse photos, route choice, tracking and logistics risk." },
  faq: { title: "PikoBuy Spreadsheet FAQ: Products, QC, Returns & Shipping", description: "Direct answers about PikoBuy spreadsheet research, product links, warehouse inspection, return timing, shipping estimates, tracking and site independence." },
  articles: { title: "PikoBuy SEO Articles: Buying, QC, Shipping & Research", description: "Fact-checked English PikoBuy research articles covering first orders, QC photos, shipping planning, warehouse returns and spreadsheet link checks." },
  "articles/first-vs-second-payment": { title: "PikoBuy First and Second Payment Explained: A Buyer’s Budget Guide", description: "Understand what PikoBuy’s first payment and second international shipping payment cover, when each happens, and what to verify before paying." },
  "articles/shipping-estimate-volumetric-weight": { title: "PikoBuy Shipping Estimate and Volumetric Weight: A Practical Guide", description: "Learn how to use a PikoBuy shipping estimate, compare actual and volumetric weight, check packed dimensions, and decide whether a parcel is ready." },
  "articles/qc-photo-checklist": { title: "PikoBuy QC Photo Checklist for Spreadsheet Finds", description: "A category-by-category QC photo checklist for PikoBuy spreadsheet finds, covering shoes, clothing, bags, accessories and electronics." },
  "articles/recheck-product-links": { title: "How to Recheck a PikoBuy Spreadsheet Product Link", description: "A defensive link-check process for PikoBuy spreadsheet records, covering redirects, changed variants, images, prices, seller details and stale availability." },
  "articles/warehouse-return-window": { title: "PikoBuy Five-Day Warehouse Return Window: Practical Checklist", description: "A practical guide to PikoBuy's published warehouse return timing, eligibility checks, evidence, seller rules and decision order." },
  "articles/western-market-search-intent": { title: "PikoBuy Search Intent for US, UK and European Buyers", description: "A fact-conscious SEO framework for PikoBuy research content serving US, UK and European search intent without inventing country usage claims." },
  search: { title: "Search PikoBuy Products on FindSpreadsheet", description: "Search the live FindSpreadsheet product database with the correct product-search parameters." },
};

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
  if (!isLocale(locale)) {
    const category = path.length === 0 ? categoryBySlug(locale) : undefined;
    if (!category) return {};
    return {
      title: `PikoBuy ${category.name} Spreadsheet | QC & Sizing Research`,
      description: `Research ${category.note.toLowerCase()} with category-specific inspection, sizing and parcel checks before opening the live database.`,
      alternates: {
        canonical: `/${category.slug}`,
        languages: { en: `/${category.slug}`, de: `/de/${category.slug}`, "x-default": `/${category.slug}` },
      },
      robots: { index: true, follow: true },
    };
  }
  const equivalent = basePath(path);
  const route = path.join("/");
  const languageUrls: Record<string, string> = { en: equivalent, "x-default": equivalent };
  localizedLanguages.forEach((language) => { languageUrls[language] = `/${language}${equivalent === "/" ? "" : equivalent}`; });
  const dictionary = serverTranslations[locale] || {};
  const translate = (value: string) => dictionary[value] || value;
  let seo = routeSeo[route];
  if (path[0] === "products" && path.length === 2) {
    const product = productBySlug(path[1]);
    if (product) seo = { title: `${translate(product.title)} — PikoBuy`, description: translate(product.summary) };
  }
  if ((path.length === 1 && categorySlugs.has(path[0])) || (path[0] === "categories" && path.length === 2)) {
    const category = categoryBySlug(path.length === 1 ? path[0] : path[1]);
    if (category) seo = { title: `${translate(category.name)} — PikoBuy Spreadsheet`, description: translate(category.note) };
  }
  const isCategoryPage = (path.length === 1 && categorySlugs.has(path[0])) || (path[0] === "categories" && path.length === 2);
  const translatedCategoryReady = !isCategoryPage || locale === "de";
  return {
    title: seo ? translate(seo.title) : undefined,
    description: seo ? translate(seo.description) : undefined,
    alternates: {
      canonical: `/${locale}${equivalent === "/" ? "" : equivalent}`,
      languages: languageUrls,
    },
    robots: path[0] === "search" || !translatedCategoryReady ? { index: false, follow: true } : { index: true, follow: true },
  };
}

export default async function LocalizedPage({ params, searchParams }: LocalizedPageProps) {
  const { locale, path = [] } = await params;
  if (!isLocale(locale)) {
    if (path.length === 0 && categorySlugs.has(locale)) return <CategoryPage params={Promise.resolve({ slug: locale })} />;
    notFound();
  }
  const route = path.join("/");
  if (!route) return <HomePage />;
  if (route === "products") return <ProductsPage />;
  if (path[0] === "products" && path.length === 2 && productSlugs.has(path[1])) {
    return <ProductPage params={Promise.resolve({ slug: path[1] })} locale={locale} />;
  }
  if (route === "categories") return <CategoriesPage />;
  if (path.length === 1 && categorySlugs.has(path[0])) {
    return <CategoryPage params={Promise.resolve({ slug: path[0] })} locale={locale} />;
  }
  if (path[0] === "categories" && path.length === 2 && categorySlugs.has(path[1])) {
    return <CategoryPage params={Promise.resolve({ slug: path[1] })} locale={locale} />;
  }
  if (route === "guides") return <GuidesPage />;
  if (route === "shipping") return <ShippingPage />;
  if (route === "faq") return <FAQPage locale={locale} />;
  if (route === "articles") return <ArticlesPage />;
  if (route === "articles/qc-photo-checklist") return <QCArticlePage />;
  if (route === "articles/recheck-product-links") return <RecheckLinksPage />;
  if (route === "articles/warehouse-return-window") return <ReturnWindowPage />;
  if (route === "articles/western-market-search-intent") return <WesternMarketsPage />;
  if (route === "articles/first-vs-second-payment") return <FirstVsSecondPaymentArticle />;
  if (route === "articles/shipping-estimate-volumetric-weight") return <ShippingEstimateVolumetricWeightArticle />;
  if (route === "search") return <SearchPage searchParams={searchParams} />;
  notFound();
}
