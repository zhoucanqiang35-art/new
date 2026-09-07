import { LanguageSelect } from "../../components/language-select";

const detailGroups = [
  { name: "Shoes", detail: "Compare outsole shape, heel profile, side angles, material finish, size labels and current price context before opening a product row.", query: "Shoes" },
  { name: "Hoodies", detail: "Review fabric weight, print or embroidery placement, ribbing, sleeve length, measurements and seller photos.", query: "Hoodies" },
  { name: "T-Shirts", detail: "Check collar shape, print placement, measurements, fabric feel and the selected size before comparing listings.", query: "T-Shirts" },
  { name: "Jackets", detail: "Inspect panels, zippers, lining, cuffs, material texture, measurements and current listing photographs.", query: "Jackets" },
  { name: "Pants", detail: "Compare waist and inseam measurements, fabric, pocket construction, logo placement and the chosen fit.", query: "Pants" },
  { name: "Hats", detail: "Check crown shape, stitching, adjustable details, embroidery placement and size or fit notes.", query: "Hats" },
  { name: "Watches", detail: "Review every included piece together, then compare colour matching, measurements and current seller images.", query: "Watches" },
  { name: "Electronics", detail: "Confirm material, sizing, pack quantity, visible finish and the exact variant selected in the live result.", query: "Electronics" },
  { name: "Socks", detail: "Inspect name and number printing, badge placement, fabric panels, sizing chart and current listing details.", query: "Socks" },
  { name: "Accessories", detail: "Use close-ups for hardware, dimensions, material finish, packaging condition and compatibility information.", query: "Accessories" },
];

export default function ProductDetails(){return <main className="route-shell"><Header/><section className="route-hero"><p className="eyebrow"><span></span> PRODUCT DETAILS</p><h1>Open the right detail<br /><em>with the right checks.</em></h1><p>Choose a product group, read the key comparison points, then open the matching live product results on FindSpreadsheet.</p></section><section className="route-content category-detail-section"><div className="category-detail-list">{detailGroups.map((group,index)=><article className="category-detail-card" key={group.name}><div><span className="detail-index">{String(index+1).padStart(2,"0")}</span><h2>{group.name}</h2><p>{group.detail}</p></div><a href={`https://findspreadsheet.com/search.html?keywords=${encodeURIComponent(group.query)}`}>Open {group.name}<span>↗</span></a></article>)}</div></section><Footer/></main>}
function Header(){return <header className="site-header"><a className="brand" href="/"><img className="brand-logo" src="/pikobuy-logo.png" alt="PikoBuy" /></a><nav aria-label="Main navigation"><a href="/">Home</a><a href="/product-categories">Product Categories</a><a href="/product-details">Product Details</a><a href="/seo-articles">SEO Articles</a><a href="/faq">FAQ</a><a href="/qc-guide">QC Method</a><a href="/regions">Regions</a></nav><LanguageSelect /></header>}
function Footer(){return <footer className="route-footer"><a className="brand" href="/"><img className="brand-logo" src="/pikobuy-logo.png" alt="PikoBuy" /></a><p>Independent product-research preview. Not affiliated with PikoBuy.</p><span>© 2026</span></footer>}
