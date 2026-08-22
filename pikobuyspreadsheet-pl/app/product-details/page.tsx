import type { Metadata } from "next";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";

export const metadata: Metadata = { title: "PikoBuy Product Detail Research | Spreadsheet Europe", description: "Open focused product searches and use practical pre-order and warehouse QC checks.", robots: { index: false, follow: false } };

const products = [
  { category: "Accessories", name: "C.P. Company B Crossbody Rucksack", note: "Inspect lens, strap hardware, internal label and usable dimensions.", href: "https://findspreadsheet.com/accessories/c-p-company-b-crossbody-rucksack-26-styles-2127.html" },
  { category: "Footwear", name: "Dior B22 / B30", note: "Check the selected model, sizing, shape, outsole and visible stitching.", href: "https://findspreadsheet.com/shoes/dior-b22-b30-2418.html" },
  { category: "Sneakers", name: "Balenciaga 3XL Shoes", note: "Confirm colourway, size option, layered panels, laces and outsole condition.", href: "https://findspreadsheet.com/shoes/balenciaga-3xl-shoes-814.html" },
  { category: "Outerwear", name: "The North Face Down", note: "Confirm badge placement, zipper hardware, measurements and visible filling distribution.", href: "https://findspreadsheet.com/jackets/the-north-face-down-1636.html" },
  { category: "Sneakers", name: "Nike Air Max TN Sneakers", note: "Check selected style, size, air units, panel alignment and outsole condition.", href: "https://findspreadsheet.com/shoes/nike-air-max-tn-sneakers-31-styles-599.html" },
  { category: "T-Shirts", name: "Prada Triangle Logo T-Shirt", note: "Verify selected style, size, logo placement, collar, print and garment measurements.", href: "https://findspreadsheet.com/t-shirts/prada-triangle-logo-t-shirt-24-styles-613.html" },
];

export default function ProductDetailsPage() {
  return <main className="listing-page">
    <div className="preview-bar">Independent public review build · formal domain and Google indexing are not active</div><SiteHeader />
    <section className="listing-hero shell"><p className="eyebrow"><span /> Product details</p><h1>Research cards before you open an agent route.</h1><p>Every card now opens its exact product-detail page on FindSpreadsheet—not a generic search result. Price, stock, seller options and PikoBuy eligibility must still be confirmed on the current listing.</p></section>
    <section className="section shell"><div className="product-card-grid">{products.map((product) => <a className="product-research-card" href={product.href} key={product.name}><p>{product.category}</p><h2>{product.name}</h2><span className="product-placeholder">QC</span><div><b>What to check</b><span>{product.note}</span></div><strong>Open exact product page ↗</strong></a>)}</div></section>
    <SiteFooter />
  </main>;
}
