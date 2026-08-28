import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocaleTranslator from "../../../locale-translator";
import GuidePage from "../../../[slug]/page";
import FaqPage from "../../../faq/page";
import FaqDetailPage from "../../../faq/[slug]/page";
import ProductCategoriesPage from "../../../product-categories/page";
import ProductDetailsPage from "../../../product-details/page";
import SeoArticlesPage from "../../../seo-articles/page";
import SourcesPage from "../../../sources/page";
import { guides } from "../../../content";
import { faqItems } from "../../../faq-content";
import { indexableRobots, pageAlternates, supportedLocales } from "../../../seo";

const locales: readonly string[] = supportedLocales;
const staticRoutes = ["product-categories", "product-details", "seo-articles", "faq", "sources"];

const staticMetadata: Record<string, { title: string; description: string }> = {
  "product-categories": { title: "PikoBuy Product Categories | Spreadsheet Europe", description: "Browse focused PikoBuy spreadsheet categories and open the matching live collection." },
  "product-details": { title: "PikoBuy Product Detail Research | Spreadsheet Europe", description: "Open focused product searches and use practical pre-order and warehouse QC checks." },
  "seo-articles": { title: "PikoBuy SEO Articles & Guides | Spreadsheet Europe", description: "Evidence-led PikoBuy guides covering fees, seller and listing checks, spreadsheet use, QC photos, European shipping and returns." },
  faq: { title: "PikoBuy Spreadsheet FAQ | Six Practical Answers", description: "Six independent FAQ pages covering product links, QC photos, European shipping, returns and site independence." },
  sources: { title: "Sources & Editorial Policy | PikoBuy Spreadsheet Europe", description: "The source pages, verification rules and editorial boundaries used by PikoBuy Spreadsheet Europe." },
};

export function generateStaticParams() {
  return locales.flatMap((locale) => [
    ...staticRoutes.map((route) => ({ locale, path: [route] })),
    ...guides.map((guide) => ({ locale, path: [guide.slug] })),
    ...faqItems.map((item) => ({ locale, path: ["faq", item.slug] })),
  ]);
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; path: string[] }> }): Promise<Metadata> {
  const { locale, path } = await params;
  if (!locales.includes(locale)) return {};
  const pathname = `/${path.join("/")}`;
  const guide = path.length === 1 ? guides.find((item) => item.slug === path[0]) : undefined;
  const faq = path.length === 2 && path[0] === "faq" ? faqItems.find((item) => item.slug === path[1]) : undefined;
  const copy = guide
    ? { title: `${guide.seoTitle ?? guide.title} | PikoBuy Spreadsheet Europe`, description: guide.description }
    : faq
      ? { title: `${faq.question} | PikoBuy Spreadsheet FAQ`, description: faq.description }
      : staticMetadata[path[0]];
  if (!copy) return {};
  return {
    ...copy,
    robots: indexableRobots,
    alternates: pageAlternates(pathname, locale),
  };
}

export default async function LocalisedPage({ params }: { params: Promise<{ locale: string; path: string[] }> }) {
  const { locale, path } = await params;
  if (!locales.includes(locale)) notFound();

  let page: React.ReactNode;
  if (path.length === 1 && path[0] === "product-categories") page = <ProductCategoriesPage />;
  else if (path.length === 1 && path[0] === "product-details") page = <ProductDetailsPage />;
  else if (path.length === 1 && path[0] === "seo-articles") page = <SeoArticlesPage />;
  else if (path.length === 1 && path[0] === "faq") page = <FaqPage />;
  else if (path.length === 1 && path[0] === "sources") page = <SourcesPage />;
  else if (path.length === 1 && guides.some((guide) => guide.slug === path[0])) page = <GuidePage params={Promise.resolve({ slug: path[0] })} />;
  else if (path.length === 2 && path[0] === "faq" && faqItems.some((item) => item.slug === path[1])) page = <FaqDetailPage params={Promise.resolve({ slug: path[1] })} />;
  else notFound();

  return <><LocaleTranslator locale={locale} />{page}</>;
}
