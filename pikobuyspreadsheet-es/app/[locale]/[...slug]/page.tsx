import { notFound } from "next/navigation";
import { locales } from "../../data";
import { LocalizedRoutePage } from "../../site-components";
export default async function Page({params}:{params:Promise<{locale:string;slug:string[]}>}){const {locale,slug}=await params;if(locale==="en-US"||!locales.some(item=>item.code===locale))notFound();return <LocalizedRoutePage locale={locale} slug={slug}/>;}
