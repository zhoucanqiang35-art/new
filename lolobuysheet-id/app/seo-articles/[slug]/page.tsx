import { SeoGuide } from "@/components/seo-guides";
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <SeoGuide slug={slug}/>;}
