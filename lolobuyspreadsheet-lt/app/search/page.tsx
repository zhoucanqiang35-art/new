"use client";

import { useSearchParams } from "next/navigation";
import { SiteHeader } from "../components/site-header";

const entries = [
  ["Shoes", "Sneakers, footwear, runners", "https://findspreadsheet.com/shoes/"],
  ["Hoodies", "Hoodies, sweatshirts, knitwear", "https://findspreadsheet.com/search.html?keywords=hoodies"],
  ["T-Shirts", "T-shirts, tees, tops", "https://findspreadsheet.com/t-shirts/"],
  ["Accessories", "Bags, belts, jewellery and accessories", "https://findspreadsheet.com/accessories/"],
  ["Electronics", "Electronics, devices and technology", "https://findspreadsheet.com/electronics/"],
  ["All Products", "The complete FindSpreadsheet product directory", "https://findspreadsheet.com/AllProducts/"],
];

export default function Search() {
  const params = useSearchParams(); const query = (params.get("q") || "").trim();
  const results = query ? entries.filter(([title, keywords]) => (title + " " + keywords).toLowerCase().includes(query.toLowerCase())) : entries;
  return <main><SiteHeader /><section className="page-hero"><p className="eyebrow">SEARCH RESULTS</p><h1>{query ? `Results for “${query}”` : "Browse all results"}</h1><p>Your search stays on a valid result page. Open a result to continue to the matching verified FindSpreadsheet section.</p></section><section className="section"><div className="grid">{results.map(([title, description, href]) => <a className="card" key={title} href={href}><h3>{title}</h3><p>{description}</p><b>Open result ↗</b></a>)}{results.length === 0 && <a className="card" href="https://findspreadsheet.com/AllProducts/"><h3>No exact directory label yet</h3><p>Open the full, valid FindSpreadsheet product directory and search there.</p><b>Open all products ↗</b></a>}</div></section></main>;
}
