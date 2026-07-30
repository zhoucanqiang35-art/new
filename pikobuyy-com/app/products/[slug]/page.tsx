import { notFound } from "next/navigation";
import { findProduct, ProductDetailPage } from "../../detail-pages";
import { products } from "../../site-content";

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) notFound();
  return <ProductDetailPage product={product} />;
}
