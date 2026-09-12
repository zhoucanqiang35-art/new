import { notFound, permanentRedirect } from "next/navigation";
import { guides } from "../../data";

export function generateStaticParams(){return guides.map((g)=>({slug:g.slug}));}

export default async function GuidePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const guide=guides.find((item)=>item.slug===slug);if(!guide)notFound();permanentRedirect(`/seo-articles/${guide.slug}`);}
