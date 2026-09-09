import type { Metadata } from "next";
import { PageHero, PageShell } from "../components";
import { categories } from "../data";

export const metadata: Metadata = { title: "LoloBuy Product Categories", description: "Browse independent LoloBuy product research by category, from shoes and clothing to accessories and electronics.", alternates: { canonical: "/categories" } };

export default function CategoriesPage() { return <PageShell><div className="article-wrap"><PageHero eyebrow="Product directory" title="Browse every product category." intro="Use a focused category page to understand what to compare and what to request from warehouse QC before opening the live database."/><div className="hub-grid">{categories.map(category=><a className="hub-card" href={`/categories/${category.slug}`} key={category.slug}><span>{category.code} · CATEGORY</span><h2>{category.name}</h2><p>{category.description}</p><b>Open category →</b></a>)}</div></div></PageShell>; }
