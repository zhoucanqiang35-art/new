import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/app/components/SiteHeader";

const categories = [
  ["Shoes", "Compare shape, outsole, heel profile, sizing notes and prices.", "/shoes/", "SH", "Footwear"],
  ["Hoodies", "Review fabric weight, print placement, sleeve length and fit notes.", "/hoodies-sweaters/", "HD", "Apparel"],
  ["T-Shirts", "Compare collar shape, print position, stitching and body length.", "/t-shirts/", "TS", "Essentials"],
  ["Jackets", "Check lining, zipper lines, cuffs, fit references and parcel volume.", "/jackets/", "JK", "Outerwear"],
  ["Pants / Shorts", "Compare waist, inseam, pocket shape, material and fit notes.", "/pants-shorts/", "PS", "Bottoms"],
  ["Bags", "Review hardware, zipper, lining, strap length and scale photos.", "/accessories/", "BG", "Carry"],
  ["Headwear", "Compare brim shape, embroidery, inside tags, sizing and angles.", "/headwear/", "HW", "Caps"],
  ["Accessories", "Check measurements, finish quality, packaging and included parts.", "/accessories/", "AC", "Details"],
  ["Jerseys", "Check patch placement, number alignment, fabric and version photos.", "/jersey/", "JR", "Sportswear"],
  ["Electronics", "Confirm model, compatibility, plug type and shipping restrictions.", "/electronics/", "EL", "Tech"],
];

export default function CategoriesPage(){return <main><SiteHeader /><div className="article-header"><p className="section-label">Ten focused product paths</p><h1>PikoBuy Spreadsheet Categories</h1><p>Choose the product type first, then continue to the matching FindSpreadsheet category and apply the right QC checklist.</p></div><section className="standalone-grid category-grid">{categories.map(([name,desc,url,icon,tag])=><a key={name} href={`https://findspreadsheet.com${url}`} className="category-card"><div className="category-card-top"><span className="category-icon">{icon}</span><span className="category-tag">{tag}</span></div><h2>{name}</h2><p>{desc}</p><span className="category-line" aria-hidden="true"/></a>)}</section></main>}
