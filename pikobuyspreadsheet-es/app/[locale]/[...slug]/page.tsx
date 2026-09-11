import { notFound } from "next/navigation";
import { locales } from "../../data";
import { categories, products, seoArticles } from "../../data";
import { LocalizedRoutePage } from "../../site-components";
import { pageMetadata } from "../../seo";
const singleRoutes = ["categories","products","guides","shipping","countries","qc","methodology","faq","seo-articles"] as const;
export function generateStaticParams(){
  const routeParams=[
    ...singleRoutes.map((route)=>[route]),
    ...categories.map(({slug})=>["category",slug]),
    ...products.map(({slug})=>["product",slug]),
    ...seoArticles.map(({slug})=>["seo-articles",slug]),
  ];
  return locales
    .filter((item)=>item.code!=="en-US")
    .flatMap(({code})=>routeParams.map((slug)=>({locale:code,slug})));
}
export const dynamicParams=false;
export async function generateMetadata({params}:{params:Promise<{locale:string;slug:string[]}>}){
  const {locale,slug}=await params;
  if(locale==="es-ES"){
    const [first,second]=slug;
    const singleTitles:Record<string,string>={
      categories:"Pikobuy ropa links: categorías y hallazgos",
      products:"Hallazgos de PikoBuy: fichas y precios orientativos",
      guides:"Cómo comprar en PikoBuy desde España: guía paso a paso",
      shipping:"Envío PikoBuy a España: costes, rutas y aduanas",
      countries:"PikoBuy para España y Europa: países y rutas",
      qc:"PikoBuy QC fotos: checklist antes del envío",
      methodology:"Cómo verificamos el spreadsheet de PikoBuy",
      faq:"Preguntas frecuentes sobre PikoBuy en España",
      "seo-articles":"Guías PikoBuy en español: compra, QC y envío",
    };
    let title=singleTitles[first]||"Pikobuy Spreadsheet España";
    if(first==="category"){
      const item=categories.find((category)=>category.slug===second);
      title=item?`${item.name}: Pikobuy Spreadsheet España`:title;
    }
    if(first==="product"){
      const item=products.find((product)=>product.slug===second);
      title=item?`${item.name} | PikoBuy España`:title;
    }
    if(first==="seo-articles"){
      const item=seoArticles.find((article)=>article.slug===second);
      if(item) title=`${item.title} | Guía en español`;
    }
    return pageMetadata(locale,slug.join("/"),title,"Guía independiente en español con enlaces verificables, controles QC, costes orientativos y límites de envío para compradores de PikoBuy en España.");
  }
  return pageMetadata(locale,slug.join("/"),"PikoBuy Spreadsheet Europe","Localized PikoBuy product, shipping, QC and research guide.");
}
export default async function Page({params}:{params:Promise<{locale:string;slug:string[]}>}){const {locale,slug}=await params;if(locale==="en-US"||!locales.some(item=>item.code===locale))notFound();return <LocalizedRoutePage locale={locale} slug={slug}/>;}
