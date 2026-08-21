import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, Footer } from "../../components";
import { categories, products } from "../../data";

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const category=categories.find((item)=>item.slug===slug);
  return category?{title:`${category.name} | LoloBuy Spreadsheet Category`,description:`Browse independent ${category.name.toLowerCase()} product research cards, QC priorities and FindSpreadsheet discovery links.`}:{title:"Category not found"};
}

export default async function CategoryPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const category=categories.find((item)=>item.slug===slug);
  if(!category)notFound();
  const matches=products.filter((item)=>item.category===category.slug);
  return <><Header/><main><header className="category-hero shell"><Link href="/categories">← All categories</Link><span className="category-index">{category.glyph}</span><p className="eyebrow"><span></span>Independent product category</p><h1>{category.name}</h1><p>{category.note}. Use these records to decide what must be checked before opening the live FindSpreadsheet category.</p></header><section className="section shell"><div className="section-head"><div><p className="eyebrow"><span></span>Current product record</p><h2>Open the item<br/><em>on FindSpreadsheet.</em></h2></div></div><div className="product-grid">{matches.map((product)=><a className="product-card" href={product.live} key={product.slug}><div className="product-visual product-photo"><img src={product.image} alt={product.name}/><span>{product.label}</span></div><small>{category.name}</small><h2>{product.name}</h2><p>{product.summary}</p><strong>View on FindSpreadsheet ↗</strong></a>)}</div><div className="category-actions"><div><b>Live product availability changes</b><p>This independent page does not copy a fixed seller price or claim permanent stock. Use the live database for the current product records.</p></div><a className="database-cta" href={category.href}>Browse {category.name} on FindSpreadsheet ↗</a></div></section></main><Footer/></>;
}
