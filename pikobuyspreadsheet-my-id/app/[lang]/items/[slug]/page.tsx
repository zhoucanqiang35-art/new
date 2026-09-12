import type { Metadata } from "next";
import { SiteExperience } from "@/components/site-experience";
const langs=["es","de","fr","it","pt","nl","pl","sv"];
const items=["nike-dunk-low-vt-batch","essentials-hoodie","tech-fleece-jacket"];
export function generateStaticParams(){return langs.flatMap(lang=>items.map(slug=>({lang,slug})));}
export async function generateMetadata({params}:{params:Promise<{lang:string;slug:string}>}):Promise<Metadata>{const {lang,slug}=await params;return {alternates:{canonical:`https://pikobuyspreadsheet.my.id/${lang}/items/${slug}/`}};}
export default async function Item({params}:{params:Promise<{lang:string;slug:string}>}){const {lang,slug}=await params;return <SiteExperience lang={lang} page="products" itemSlug={slug}/>}
