import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, Footer, ProductImage } from "../../components";
import { categories, products } from "../../data";
import { pageMetadata } from "../../seo";

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const product=products.find((item)=>item.slug===slug);
  return product?pageMetadata({title:`${product.name} | Product Research`,description:product.summary,path:`/products/${product.slug}`,image:product.image}):{title:"Product not found",robots:{index:false,follow:false}};
}

export default async function ProductPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const product=products.find((item)=>item.slug===slug);
  if(!product)notFound();
  const category=categories.find((item)=>item.slug===product.category)!;
  return <><Header/><main><header className="product-detail-hero shell"><div><Link href={`/categories/${category.slug}`}>← {category.name}</Link><p className="eyebrow"><span></span>{product.label}</p><h1>{product.name}</h1><p>{product.summary}</p><div className="product-status"><span>Price: check live record</span><span>Stock: not cached</span><span>Source: FindSpreadsheet</span></div></div><div className="product-visual detail product-photo"><ProductImage src={product.image} alt={product.name}/><span>{category.name}</span><small>Current main-site image</small></div></header><section className="product-detail-body shell"><article><small>01 / BEFORE ORDERING</small><h2>Three checks that can change the decision</h2><ol>{product.checks.map((check)=><li key={check}>{check}</li>)}</ol></article><article><small>02 / SHIPPING NOTE</small><h2>Plan for the packed item</h2><p>{product.shipping}</p></article><aside><b>Current product record</b><p>Seller price, options and availability can change. Open the matching main-site product page for the current gallery and source data.</p><a className="database-cta" href={product.live}>View this product on FindSpreadsheet ↗</a></aside></section><section className="section shell related-products"><div className="section-head"><div><p className="eyebrow"><span></span>Continue browsing</p><h2>Other current<br/><em>product records.</em></h2></div><Link className="text-link" href="/products">View all products →</Link></div><div className="product-grid compact">{products.filter((item)=>item.slug!==product.slug).slice(0,3).map((item)=><a className="product-card" href={item.live} key={item.slug}><div className="product-visual product-photo"><ProductImage src={item.image} alt={item.name}/><span>{item.label}</span></div><h3>{item.name}</h3><strong>View on FindSpreadsheet ↗</strong></a>)}</div></section></main><Footer/></>;
}
