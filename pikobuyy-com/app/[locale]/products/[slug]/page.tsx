import { notFound } from "next/navigation";
import { findProduct, ProductDetailPage } from "../../../detail-pages";
import { isLocale, languages, products } from "../../../site-content";

export function generateStaticParams() {
  return languages
    .filter(({ code }) => code !== "en")
    .flatMap(({ code }) => products.map(({ slug }) => ({ locale: code, slug })));
}

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const product = findProduct(slug);
  if (!isLocale(locale) || locale === "en" || !product) notFound();
  return <ProductDetailPage locale={locale} product={product} />;
}
