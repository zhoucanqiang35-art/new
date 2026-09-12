import type { Metadata } from "next";
import { SiteExperience } from "@/components/site-experience";
const baseUrl="https://pikobuyspreadsheet.my.id";
const items=["nike-dunk-low-vt-batch","essentials-hoodie","tech-fleece-jacket"];
export function generateStaticParams(){return items.map(slug=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;return {title:`${slug.replaceAll("-"," ")} | PikoBuy product research`,alternates:{canonical:`${baseUrl}/items/${slug}/`}};}
export default async function Item({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <><ItemSchema slug={slug}/><SiteExperience lang="en" page="products" itemSlug={slug}/></>}
function ItemSchema({slug}:{slug:string}){const name=slug.replaceAll("-"," ");const data={"@context":"https://schema.org","@graph":[{"@type":"Product",name,description:"Independent product research guide. Verify option, warehouse photos, source and shipping before purchase."},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:baseUrl},{"@type":"ListItem",position:2,name:"Product details",item:`${baseUrl}/products/`},{"@type":"ListItem",position:3,name,item:`${baseUrl}/items/${slug}/`}]}]};return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/>}
