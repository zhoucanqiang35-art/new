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

const locales = ["de", "fr", "es", "it", "nl", "pt", "pl"];
const staticRoutes = ["product-categories", "product-details", "seo-articles", "faq", "sources"];

export function generateStaticParams() {
  return locales.flatMap((locale) => [
    ...staticRoutes.map((route) => ({ locale, path: [route] })),
    ...guides.map((guide) => ({ locale, path: [guide.slug] })),
    ...faqItems.map((item) => ({ locale, path: ["faq", item.slug] })),
  ]);
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
