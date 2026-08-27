import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LocalizedGuide, type Locale } from "../../localized-content";
import { ExpandedLocalizedGuide, type ExtendedLocale } from "../../expanded-locales";
const originalLocales=["de","fr","es","it"];const expandedLocales=["pt","nl","pl"];const locales=[...originalLocales,...expandedLocales];const pages=["how-pikobuy-works","qc-guide","shipping-guide","buyer-checklist","product-details","seo-articles","faq"];
const names:Record<string,Record<string,string>>={
 de:{"how-pikobuy-works":"So funktioniert PikoBuy","qc-guide":"PikoBuy QC-Ratgeber","shipping-guide":"PikoBuy Versandratgeber","buyer-checklist":"PikoBuy Käufer-Checkliste","product-details":"PikoBuy Produktdetails","seo-articles":"PikoBuy SEO-Artikel","faq":"PikoBuy FAQ"},
 fr:{"how-pikobuy-works":"Fonctionnement de PikoBuy","qc-guide":"Guide QC PikoBuy","shipping-guide":"Guide de livraison PikoBuy","buyer-checklist":"Liste de contrôle PikoBuy","product-details":"Détails produits PikoBuy","seo-articles":"Articles SEO PikoBuy","faq":"FAQ PikoBuy"},
 es:{"how-pikobuy-works":"Cómo funciona PikoBuy","qc-guide":"Guía QC de PikoBuy","shipping-guide":"Guía de envío PikoBuy","buyer-checklist":"Lista de control PikoBuy","product-details":"Detalles de productos PikoBuy","seo-articles":"Artículos SEO PikoBuy","faq":"Preguntas frecuentes PikoBuy"},
 it:{"how-pikobuy-works":"Come funziona PikoBuy","qc-guide":"Guida QC PikoBuy","shipping-guide":"Guida spedizione PikoBuy","buyer-checklist":"Checklist PikoBuy","product-details":"Dettagli prodotti PikoBuy","seo-articles":"Articoli SEO PikoBuy","faq":"FAQ PikoBuy"},
 pt:{"how-pikobuy-works":"Como funciona a PikoBuy","qc-guide":"Guia QC PikoBuy","shipping-guide":"Guia de envio PikoBuy","buyer-checklist":"Lista de verificação PikoBuy","product-details":"Detalhes dos produtos PikoBuy","seo-articles":"Artigos SEO PikoBuy","faq":"Perguntas frequentes PikoBuy"},
 nl:{"how-pikobuy-works":"Hoe PikoBuy werkt","qc-guide":"PikoBuy QC-gids","shipping-guide":"PikoBuy verzendgids","buyer-checklist":"PikoBuy-checklist","product-details":"PikoBuy-productdetails","seo-articles":"PikoBuy SEO-artikelen","faq":"PikoBuy veelgestelde vragen"},
 pl:{"how-pikobuy-works":"Jak działa PikoBuy","qc-guide":"Poradnik QC PikoBuy","shipping-guide":"Poradnik wysyłki PikoBuy","buyer-checklist":"Lista kontrolna PikoBuy","product-details":"Szczegóły produktów PikoBuy","seo-articles":"Artykuły SEO PikoBuy","faq":"FAQ PikoBuy"}
};
export function generateStaticParams(){return locales.flatMap(lang=>pages.map(page=>({lang,page})));}
export async function generateMetadata({params}:{params:Promise<{lang:string;page:string}>}):Promise<Metadata>{const {lang,page}=await params;const title=names[lang]?.[page];return title?{title,description:`${title} — FindSpreadsheet.`}:{};}
export default async function Page({params}:{params:Promise<{lang:string,page:string}>}){const {lang,page}=await params;if(!locales.includes(lang)||!pages.includes(page))notFound();if(expandedLocales.includes(lang))return <ExpandedLocalizedGuide lang={lang as ExtendedLocale} page={page}/>;return <LocalizedGuide lang={lang as Locale} page={page}/>;}
