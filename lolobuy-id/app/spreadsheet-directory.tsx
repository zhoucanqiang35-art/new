"use client";

import { useMemo, useState } from "react";
import { products } from "./data";

export function SpreadsheetDirectory(){
  const [query,setQuery]=useState("");
  const [category,setCategory]=useState("all");
  const filtered=useMemo(()=>products.filter(item=>{
    const matchesQuery=`${item.name} ${item.category}`.toLowerCase().includes(query.trim().toLowerCase());
    const matchesCategory=category==="all"||item.category===category;
    return matchesQuery&&matchesCategory;
  }),[query,category]);
  const options=[...new Set(products.map(item=>item.category))];
  return <section className="spreadsheet-directory" aria-labelledby="spreadsheet-directory-title">
    <div className="directory-heading"><div><p className="eyebrow">LIVE FILTER</p><h2 id="spreadsheet-directory-title">Search the visible finds</h2></div><p>These records are rendered in the page HTML and remain research leads. Open the current detail page before acting.</p></div>
    <div className="directory-controls">
      <label><span>Search products</span><input type="search" value={query} onChange={event=>setQuery(event.target.value)} placeholder="Name or category"/></label>
      <label><span>Category</span><select value={category} onChange={event=>setCategory(event.target.value)}><option value="all">All categories</option>{options.map(option=><option value={option} key={option}>{option}</option>)}</select></label>
      <output aria-live="polite">{filtered.length} visible {filtered.length===1?"record":"records"}</output>
    </div>
    <div className="directory-results">{filtered.map((item,index)=><a className="directory-record" href={item.href} target="_blank" rel="noopener" key={item.href}>
      <img src={item.image} alt="" width={160} height={160} loading="lazy"/>
      <span className="record-number">{String(index+1).padStart(2,"0")}</span><div><small>{item.category}</small><h3>{item.name}</h3><p>{item.price} · {item.source}</p></div><b>Open current record ↗</b>
    </a>)}</div>
    {!filtered.length&&<p className="directory-empty">No visible record matches these filters. Try a broader category or search the full FindSpreadsheet database.</p>}
  </section>;
}
