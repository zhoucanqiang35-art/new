import type { Metadata } from "next";
import { categories } from "../content";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";

export const metadata: Metadata = { title: "PikoBuy Product Categories | Spreadsheet Europe", description: "Browse focused PikoBuy spreadsheet categories and open the matching live FindSpreadsheet collection.", robots: { index: false, follow: false } };

export default function ProductCategoriesPage() {
  return <main className="listing-page">
    <div className="preview-bar">Independent public review build · formal domain and Google indexing are not active</div>
    <SiteHeader />
    <section className="listing-hero shell"><p className="eyebrow"><span /> Product categories</p><h1>Start with the type of product you need.</h1><p>Each category has a focused QC note and opens the corresponding live collection on FindSpreadsheet.</p></section>
    <section className="section shell"><div className="category-grid">{categories.map((category) => <a className="category-card" href={category.href} key={category.name}><span className="category-icon" aria-hidden="true">{category.icon}</span><div className="category-copy"><h2>{category.name}</h2><p>{category.note}</p></div><strong className="category-link">Open listings <span>→</span></strong></a>)}</div></section>
    <SiteFooter />
  </main>;
}
