import type { Metadata } from "next";
import { ProductPage } from "../../product-page";
import { allProducts, getProduct } from "../../product-data";
import { buildMetadata } from "../../seo";

export function generateStaticParams() {
  return allProducts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return buildMetadata({
    title: `${product.name} — USD Price & Source Link | LoloBuy Sheet`,
    description: `Verified product reference for ${product.name}, including the matching findspreadsheet.com image, source listing and USD price conversion.`,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProductPage slug={slug} />;
}
