import type { Metadata } from "next";
import { categories } from "../../components/category-data";
import { LanguageSelect } from "../../components/language-select";

export const metadata: Metadata = {
  title: "Product Categories",
  description: "Browse independent category research pages for shoes, hoodies, T-shirts, jackets, pants, hats, watches, electronics, socks and accessories.",
  alternates: { canonical: "/product-categories" },
};

export default function ProductCategories() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "PikoBuy Sheet Product Categories",
    url: "https://pikobuysheet.us/product-categories",
    description: "Independent category research pages that help visitors check visible listing information before continuing to FindSpreadsheet.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: categories.map((category, position) => ({
        "@type": "ListItem",
        position: position + 1,
        name: category.name,
        url: `https://pikobuysheet.us/product-categories/${category.slug}`,
      })),
    },
  };

  return <main className="route-shell"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><Header /><section className="route-hero"><p className="eyebrow"><span></span> PRODUCT CATEGORIES</p><h1>Start with the right<br /><em>comparison.</em></h1><p>Choose a category to open its dedicated detail page, then continue to the matching live results only when you are ready.</p></section><section className="category-catalog"><div className="category-grid">{categories.map(category => <article className="category-card" key={category.slug}><div className="category-icon" aria-hidden="true">{category.icon}</div><h3>{category.name}</h3><p>{category.note}</p><a href={`/product-categories/${category.slug}`}>Browse <span>↗</span></a></article>)}</div></section><Footer /></main>;
}
function Header(){return <header className="site-header"><a className="brand" href="/"><img className="brand-logo" src="/pikobuy-logo.png" alt="PikoBuy" /></a><nav aria-label="Main navigation"><a href="/">Home</a><a href="/product-categories">Product Categories</a><a href="/product-details">Product Details</a><a href="/seo-articles">SEO Articles</a><a href="/faq">FAQ</a><a href="/qc-guide">QC Method</a><a href="/regions">Regions</a></nav><LanguageSelect /></header>}
function Footer(){return <footer className="route-footer"><a className="brand" href="/"><img className="brand-logo" src="/pikobuy-logo.png" alt="PikoBuy" /></a><p>Independent product-research preview. Not affiliated with PikoBuy.</p><span>© 2026</span></footer>}