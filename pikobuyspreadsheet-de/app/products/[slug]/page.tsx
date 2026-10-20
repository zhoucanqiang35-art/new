import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleShell from "../../components/ArticleShell";
import { productBySlug, products } from "../../catalog";
import { serverTranslations } from "../../i18n/server-translations";

type ProductPageProps = { params: Promise<{ slug: string }>; locale?: string };

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

export default async function ProductPage({ params, locale = "en" }: ProductPageProps) {
  const product = productBySlug((await params).slug);
  if (!product) notFound();
  const dictionary = serverTranslations[locale] || {};
  const translate = (value: string) => dictionary[value] || value;
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: translate("Home"), item: "https://pikobuyspreadsheet.de/" },
      { "@type": "ListItem", position: 2, name: translate("Product details"), item: "https://pikobuyspreadsheet.de/products" },
      { "@type": "ListItem", position: 3, name: translate(product.title), item: `https://pikobuyspreadsheet.de/products/${product.slug}` },
    ],
  };
  const itemPage = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    name: translate(product.title),
    description: translate(product.summary),
    url: `https://pikobuyspreadsheet.de/products/${product.slug}`,
    dateModified: product.snapshotDate,
    isPartOf: { "@type": "WebSite", name: "PikoBuy Spreadsheet Research Guide", url: "https://pikobuyspreadsheet.de/" },
  };

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemPage) }} />
      <p className="lead">The displayed comparison price is <strong>{product.price}</strong>, converted from the recorded <strong>{product.cny}</strong> source value. Treat it as a research snapshot and verify the live record before continuing.</p>
      <h2>What to check first</h2>
      <ol>
        {product.checks.map((check) => <li key={check}><strong>{check}</strong></li>)}
      </ol>
      <div className="data-table">
        <div><b>Product category</b><span>{product.category}</span></div>
        <div><b>Comparison price</b><span>{product.price} · source value {product.cny}</span></div>
        <div><b>Research status</b><span>Representative lead; not a purchase recommendation</span></div>
        <div><b>Snapshot date</b><span>{product.snapshotDate} · availability not assumed</span></div>
        <div><b>Next destination</b><span>Live {product.category} category on FindSpreadsheet</span></div>
      </div>
      <h2>Related research</h2>
      <div className="page-card-grid category-guide-links">
        <a className="page-card" href={`/${product.category.toLowerCase().replaceAll(" / ", "-").replaceAll(" ", "-")}`}><span>01</span><div><b>Compare the category</b><p>Review the same inspection, sizing and parcel questions across similar finds.</p></div><strong>Open category →</strong></a>
        <a className="page-card" href="/articles/qc-photo-checklist"><span>02</span><div><b>QC photo checklist</b><p>Use a repeatable photo-review process before accepting a warehouse item.</p></div><strong>Open checklist →</strong></a>
        <a className="page-card" href="/shipping"><span>03</span><div><b>Shipping context</b><p>Plan weight and dimensions after the product evidence makes sense.</p></div><strong>Open guide →</strong></a>
      </div>
    </ArticleShell>
  );
}
