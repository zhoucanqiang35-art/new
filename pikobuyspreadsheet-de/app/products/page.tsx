import type { Metadata } from "next";
import ArticleShell from "../components/ArticleShell";
import { products } from "../catalog";

export const metadata: Metadata = {
  title: "PikoBuy Product Details & Research Notes",
  description: "Independent PikoBuy product research pages with USD price context, QC checks, sizing reminders and links to the live FindSpreadsheet category.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <ArticleShell
      eyebrow="Product details"
      title="Representative finds, researched one page at a time."
      intro="Use these independent product pages to review the checks that matter before opening the corresponding live FindSpreadsheet category."
    >
      <p className="lead">Each example below has its own permanent detail page, an approximate USD comparison price, and a short evidence checklist. It is a research starting point—not an offer or checkout page.</p>
      <div className="product-detail-grid">
        {products.map((product, index) => (
          <a className="product-detail-card" href={`/products/${product.slug}`} key={product.slug}>
            <span className="category-number">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <small>{product.category}</small>
              <h2>{product.title}</h2>
              <p>{product.summary}</p>
            </div>
            <div className="product-detail-price"><b>{product.price}</b><span>{product.cny} source value</span><strong>Open details →</strong></div>
          </a>
        ))}
      </div>
      <div className="callout"><b>Price note</b><span>USD values are approximate conversions for comparison. Confirm the current item, variant, source value and fees on the live record.</span></div>
    </ArticleShell>
  );
}
