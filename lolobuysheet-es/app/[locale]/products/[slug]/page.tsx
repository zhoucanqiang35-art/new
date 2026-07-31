import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductPage } from "../../../product-page";
import { getProduct, products } from "../../../product-data";
import { supportedLocales } from "../../../site-shell";

export function generateStaticParams() {
  return Array.from(supportedLocales)
    .filter((locale) => locale !== "en")
    .flatMap((locale) => products.map(({ slug }) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = getProduct(slug);
  if (!supportedLocales.has(locale) || locale === "en" || !product) return {};
  return {
    title: `${product.name} — USD Price & Source Link | LoloBuy Sheet`,
    description: `Verified product reference for ${product.name}, with the matching main-site image, source listing and USD conversion.`,
    alternates: { canonical: `https://lolobuysheet.es/${locale}/products/${product.slug}` },
  };
}

export default async function LocalizedProductDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!supportedLocales.has(locale) || locale === "en") notFound();
  return <ProductPage slug={slug} locale={locale} />;
}
