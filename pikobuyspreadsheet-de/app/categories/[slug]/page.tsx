import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleShell from "../../components/ArticleShell";
import CategoryIcon from "../../components/CategoryIcon";
import { categories, categoryBySlug, products } from "../../catalog";

type CategoryPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = categoryBySlug((await params).slug);
  if (!category) return {};
  return {
    title: `${category.name} PikoBuy Spreadsheet Research`,
    description: `Research ${category.note.toLowerCase()} with category-specific inspection, sizing and parcel checks before opening the live database.`,
    alternates: { canonical: `/categories/${category.slug}` },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = categoryBySlug((await params).slug);
  if (!category) notFound();
  const matchingProducts = products.filter((product) => product.category === category.name);
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://pikobuyspreadsheet.de/" },
      { "@type": "ListItem", position: 2, name: "Categories", item: "https://pikobuyspreadsheet.de/categories" },
      { "@type": "ListItem", position: 3, name: category.name, item: `https://pikobuyspreadsheet.de/categories/${category.slug}` },
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
    </ArticleShell>
  );
}
