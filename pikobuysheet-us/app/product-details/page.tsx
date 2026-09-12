import type { Metadata } from "next";
import { categories } from "../../components/category-data";
import { LanguageSelect } from "../../components/language-select";

export const metadata: Metadata = {
  title: "Product Detail Checks",
  description: "Category-specific product checks for comparing visible listing information before opening matching FindSpreadsheet results.",
  alternates: { canonical: "/product-details" },
};

export default function ProductDetails(){return <main className="route-shell"><Header/><section className="route-hero"><p className="eyebrow"><span></span> PRODUCT DETAILS</p><h1>Open the right detail<br /><em>with the right checks.</em></h1><p>Choose a product group, read the key comparison points, then open the matching live product results on FindSpreadsheet.</p></section><section className="route-content category-detail-section"><div className="category-detail-list">{categories.map((group,index)=><article className="category-detail-card" key={group.slug}><div><span className="detail-index">{String(index+1).padStart(2,"0")}</span><h2>{group.name}</h2><p>{group.detail}</p></div><a href={group.databaseUrl}>Open {group.name}<span>↗</span></a></article>)}</div></section><Footer/></main>}
function Header(){return <header className="site-header"><a className="brand" href="/"><img className="brand-logo" src="/pikobuy-logo.png" alt="PikoBuy" /></a><nav aria-label="Main navigation"><a href="/">Home</a><a href="/product-categories">Product Categories</a><a href="/product-details">Product Details</a><a href="/seo-articles">SEO Articles</a><a href="/faq">FAQ</a><a href="/qc-guide">QC Method</a><a href="/regions">Regions</a></nav><LanguageSelect /></header>}
function Footer(){return <footer className="route-footer"><a className="brand" href="/"><img className="brand-logo" src="/pikobuy-logo.png" alt="PikoBuy" /></a><p>Independent product-research preview. Not affiliated with PikoBuy.</p><span>© 2026</span></footer>}