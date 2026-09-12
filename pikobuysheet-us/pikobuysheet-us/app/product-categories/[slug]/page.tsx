import type { Metadata } from "next";
import { categories } from "../../../components/category-data";
import { LanguageSelect } from "../../../components/language-select";

export function generateStaticParams() { return categories.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug) ?? categories[0];
  return {
    title: `${category.name} Spreadsheet Research`,
    description: category.seoDescription,
    alternates: { canonical: `/product-categories/${category.slug}` },
  };
}

export default async function CategoryDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug) ?? categories[0];
  const canonical = `https://pikobuysheet.us/product-categories/${category.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://pikobuysheet.us/" },
          { "@type": "ListItem", position: 2, name: "Product Categories", item: "https://pikobuysheet.us/product-categories" },
          { "@type": "ListItem", position: 3, name: category.name, item: canonical },
        ],
      },
      {
        "@type": "CollectionPage",
        name: `${category.name} Spreadsheet Research`,
        url: canonical,
        description: category.seoDescription,
        isPartOf: { "@type": "WebSite", name: "PikoBuy Sheet", url: "https://pikobuysheet.us/" },
      },
    ],
  };

  return <main className="route-shell"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><Header /><section className="route-hero"><nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/product-categories">Product Categories</a><span>/</span><span aria-current="page">{category.name}</span></nav><p className="eyebrow"><span></span> CATEGORY DETAIL</p><h1>{category.name}<br /><em>what to check first.</em></h1><p>Review the category-specific comparison points on the left, then open the matching FindSpreadsheet results on the right.</p></section><section className="route-content category-detail-section"><article className="category-detail-card category-page-detail"><div><span className="detail-index">CATEGORY</span><h2>{category.name}</h2><p>{category.detail}</p><ul className="category-check-list">{category.checks.map((check) => <li key={check}>{check}</li>)}</ul></div><a href={category.databaseUrl}>Open {category.name}<span>↗</span></a></article></section><Footer /></main>;
}

function Header(){return <header className="site-header"><a className="brand" href="/"><img className="brand-logo" src="/pikobuy-logo.png" alt="PikoBuy" /></a><nav aria-label="Main navigation"><a href="/">Home</a><a href="/product-categories">Product Categories</a><a href="/product-details">Product Details</a><a href="/seo-articles">SEO Articles</a><a href="/faq">FAQ</a><a href="/qc-guide">QC Method</a><a href="/regions">Regions</a></nav><LanguageSelect /></header>}
function Footer(){return <footer className="route-footer"><a className="brand" href="/"><img className="brand-logo" src="/pikobuy-logo.png" alt="PikoBuy" /></a><p>Independent product-research preview. Not affiliated with PikoBuy.</p><span>© 2026</span></footer>}