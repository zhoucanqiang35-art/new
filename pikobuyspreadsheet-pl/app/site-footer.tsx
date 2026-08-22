import { primaryLinks } from "./content";

export default function SiteFooter() {
  return <footer className="site-footer shell">
    <a className="brand" href="/"><img className="brand-logo" src="/pikobuy-logo.png" alt="PikoBuy Spreadsheet Europe" /></a>
    <p>Independent product-research resource for international shoppers. Not affiliated with or endorsed by PikoBuy.</p>
    <div><a href="/product-categories">Categories</a><a href="/product-details">Products</a><a href="/seo-articles">Articles</a><a href="/faq">FAQ</a><a href="/sources">Sources</a><a href={primaryLinks.products}>Main database ↗</a></div>
  </footer>;
}
