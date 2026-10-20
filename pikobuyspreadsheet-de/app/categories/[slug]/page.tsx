import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleShell from "../../components/ArticleShell";
import CategoryIcon from "../../components/CategoryIcon";
import { categories, categoryBySlug, products } from "../../catalog";
import { serverTranslations } from "../../i18n/server-translations";

type CategoryPageProps = { params: Promise<{ slug: string }>; locale?: string };

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = categoryBySlug((await params).slug);
  if (!category) return {};
  return {
    title: `PikoBuy ${category.name} Spreadsheet | QC & Sizing Research`,
    description: `Research ${category.note.toLowerCase()} with category-specific inspection, sizing and parcel checks before opening the live database.`,
    alternates: { canonical: `/${category.slug}` },
  };
}

export default async function CategoryPage({ params, locale = "en" }: CategoryPageProps) {
  const category = categoryBySlug((await params).slug);
  if (!category) notFound();
  const dictionary = serverTranslations[locale] || {};
  const translate = (value: string) => dictionary[value] || value;
  const matchingProducts = products.filter((product) => product.category === category.name);
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: translate("Home"), item: "https://pikobuyspreadsheet.de/" },
      { "@type": "ListItem", position: 2, name: translate(category.name), item: `https://pikobuyspreadsheet.de/${category.slug}` },
    ],
  };

  return (
    <ArticleShell
      eyebrow="Product category"
      title={category.name}
      intro={category.note}
      asideAction={(
        <div className="aside-card dark-card">
          <span className="kicker">Live database</span>
          <h3>Check the current category records.</h3>
          <p>Availability, variants, images and prices can change after this research page is updated.</p>
          <a className="button button-light" href={category.href} target="_blank" rel="noreferrer">Open live {category.name} category ↗</a>
          <a className="aside-back-link" href="/categories">← Back to all categories</a>
        </div>
      )}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="category-profile-heading">
        <span className="category-icon-box"><CategoryIcon name={category.name} /></span>
        <div><span className="kicker">Category research profile</span><h2>Three checks before opening the live record.</h2></div>
      </div>
      <div className="data-table category-profile-table">
        <div><b>Inspection focus</b><span>{category.inspectionFocus}</span></div>
        <div><b>Sizing or compatibility</b><span>{category.sizingFocus}</span></div>
        <div><b>Parcel impact</b><span>{category.parcelFocus}</span></div>
        <div><b>Live destination</b><span>FindSpreadsheet {category.name} category</span></div>
      </div>
      <h2>Representative research pages</h2>
      {matchingProducts.length ? (
        <div className="search-result-grid">
          {matchingProducts.map((product) => (
            <a className="search-result-card" href={`/products/${product.slug}`} key={product.slug}>
              <small>{product.category}</small><b>{product.title}</b><span>{product.summary}</span><strong>Open details →</strong>
            </a>
          ))}
        </div>
      ) : (
        <div className="callout"><b>No invented records</b><span>This category page does not create placeholder products. Use the live destination for current records while verified research pages are added.</span></div>
      )}
      <h2>Continue with the right guide</h2>
      <div className="page-card-grid category-guide-links">
        <a className="page-card" href="/guides"><span>01</span><div><b>Buying workflow</b><p>Follow the product, warehouse and parcel decisions in order.</p></div><strong>Open guide →</strong></a>
        <a className="page-card" href="/articles/qc-photo-checklist"><span>02</span><div><b>QC photo checklist</b><p>Review the photo evidence that matters for each product type.</p></div><strong>Open checklist →</strong></a>
        <a className="page-card" href="/shipping"><span>03</span><div><b>Parcel planning</b><p>Compare weight, dimensions and route constraints before shipping.</p></div><strong>Open shipping guide →</strong></a>
      </div>
    </ArticleShell>
  );
}
