import { Header, Footer, MobileModule } from "../components";
import { categories } from "../data";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({ title: "LoloBuy Spreadsheet Categories | Product Discovery", description: "Browse ten FindSpreadsheet product categories before selecting a LoloBuy purchase route.", path: "/categories" });

export default function CategoriesPage() {
  return <><Header/><main className="inner-page shell"><div className="page-hero"><p className="eyebrow"><span></span>10 independent category pages</p><h1>Browse by category.<br/><em>Verify every row.</em></h1><p>Each card now opens a dedicated category page with relevant product records, QC priorities and a final route to the matching FindSpreadsheet section.</p></div><MobileModule title="All categories" defaultOpen><div className="category-grid large">{categories.map((c)=><a className="category-card" href={`/categories/${c.slug}`} key={c.slug}><span className="category-no">{c.glyph}</span><div><h2>{c.name}</h2><p>{c.note}</p><small>Open independent category page</small></div><b>→</b></a>)}</div></MobileModule><div className="notice"><b>Before you buy</b><p>Compare the source URL, item ID, selected variant, current price and available warehouse evidence. Final product discovery links go only to FindSpreadsheet.</p></div></main><Footer/></>;
}
