import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleShell from "../../components/ArticleShell";
import { productBySlug, products } from "../../catalog";

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = productBySlug((await params).slug);
  if (!product) return {};
  return {
    title: `${product.title} — PikoBuy Product Research`,
    description: `${product.summary} Review price context and independent QC checks before opening the live FindSpreadsheet category.`,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: { title: `${product.title} — PikoBuy Product Research`, description: product.summary, images: [] },
    twitter: { card: "summary", title: `${product.title} — PikoBuy Product Research`, description: product.summary, images: [] },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = productBySlug((await params).slug);
  if (!product) notFound();

  return (
    <ArticleShell
      eyebrow={product.category}
      title={product.title}
      intro={product.summary}
      asideAction={(
        <div className="aside-card dark-card product-verification-card">
          <span className="kicker">Verify first</span>
          <h3>Continue only after verification.</h3>
          <p>Check that the current title, variant, images, size information and price still match your intent. Product records and seller options can change after this page is published.</p>
          <a className="button button-light" href={product.mainHref} target="_blank" rel="noreferrer">Open live {product.category} category ↗</a>
          <a className="aside-back-link" href="/products">← Back to all product details</a>
        </div>
      )}
    >
      <p className="lead">The displayed comparison price is <strong>{product.price}</strong>, converted from the recorded <strong>{product.cny}</strong> source value. Treat it as a research snapshot and verify the live record before continuing.</p>
      <h2>What to check first</h2>
      <ol>
        {product.checks.map((check) => <li key={check}><strong>{check}</strong></li>)}
      </ol>
      <div className="data-table">
        <div><b>Product category</b><span>{product.category}</span></div>
        <div><b>Comparison price</b><span>{product.price} · source value {product.cny}</span></div>
        <div><b>Research status</b><span>Representative lead; not a purchase recommendation</span></div>
        <div><b>Next destination</b><span>Live {product.category} category on FindSpreadsheet</span></div>
      </div>
    </ArticleShell>
  );
}
