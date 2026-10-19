import { SeoGuide } from "@/components/seo-guides";
export default async function Page({params}:{params:Promise<{locale:string;slug:string}>}){const {locale,slug}=await params;return <SeoGuide slug={slug} initialLocale={locale as any}/>;}
