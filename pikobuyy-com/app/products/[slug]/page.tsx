import { notFound } from "next/navigation";
import { findProduct, ProductDetailPage } from "../../detail-pages";
import { productMetadata } from "../../seo";
import { products } from "../../site-content";

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) return {};
  return productMetadata("en", product);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) notFound();
  return <ProductDetailPage product={product} />;
}
