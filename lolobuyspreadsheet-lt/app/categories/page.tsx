import { SiteHeader } from "../components/site-header";
import { products } from "../lib/catalog";

export default function Categories() { return <main><SiteHeader /><section className="page-hero category-hero"><p className="eyebrow">PRODUCT CATEGORIES</p><h1>Ten fixed ways to browse.</h1><p>Choose a category to read its product details, then use the right-side button to open the matching live FindSpreadsheet results.</p></section><section className="category-section"><div className="category-chip-grid">{products.map(product => <a className="category-chip" key={product.slug} href={`/categories/${product.slug}`}><span aria-hidden="true">{product.icon}</span><span className="notranslate" translate="no">{product.name}</span></a>)}</div></section></main>; }
