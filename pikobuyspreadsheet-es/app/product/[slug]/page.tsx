import type { Metadata } from "next";
import { products } from "../../data";
import { ProductDetailPage } from "../../site-components";
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const item=products.find(x=>x.slug===slug);return item?{title:item.name,description:`${item.category} listing research, approximate USD price and warehouse checks.`,openGraph:{title:item.name,description:item.check,images:[item.image]},twitter:{card:"summary_large_image",title:item.name,description:item.check,images:[item.image]}}:{title:"PikoBuy Product Detail"};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <ProductDetailPage slug={slug}/>;}
