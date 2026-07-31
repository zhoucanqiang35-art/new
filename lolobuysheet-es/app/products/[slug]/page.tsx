import type { Metadata } from "next";
import { ProductPage } from "../../product-page";
import { getProduct, products } from "../../product-data";

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — USD Price & Source Link | LoloBuy Sheet`,
    description: `Verified product reference for ${product.name}, including the matching findspreadsheet.com image, source listing and USD price conversion.`,
    alternates: { canonical: `https://lolobuysheet.es/products/${product.slug}` },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProductPage slug={slug} />;
}
