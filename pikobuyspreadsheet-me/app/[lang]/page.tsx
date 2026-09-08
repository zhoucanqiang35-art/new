import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LocalizedHome, type Locale } from "../localized-content";
import { ExpandedLocalizedHome, type ExtendedLocale } from "../expanded-locales";
const originalLocales=["de","fr","es","it"];const expandedLocales=["pt","nl","pl"];const locales=[...originalLocales,...expandedLocales];
const meta:Record<string,{title:string;description:string}>={
 de:{title:"PikoBuy Spreadsheet Ratgeber",description:"Unabhängige Produktsuche, QC-, Größen- und Versandhinweise für PikoBuy-Spreadsheets."},
 fr:{title:"Guide PikoBuy Spreadsheet",description:"Recherche indépendante de produits, contrôles QC, tailles et livraison pour les tableaux PikoBuy."},
 es:{title:"Guía PikoBuy Spreadsheet",description:"Investigación independiente de productos, QC, tallas y envío para hojas PikoBuy."},
 it:{title:"Guida PikoBuy Spreadsheet",description:"Ricerca indipendente di prodotti, controlli QC, taglie e spedizione per fogli PikoBuy."},
 pt:{title:"Guia PikoBuy Spreadsheet",description:"Pesquisa independente de produtos, QC, tamanhos e envio para folhas PikoBuy."},
 nl:{title:"PikoBuy Spreadsheet-gids",description:"Onafhankelijk productonderzoek, QC-, maat- en verzendcontroles voor PikoBuy-spreadsheets."},
 pl:{title:"Poradnik PikoBuy Spreadsheet",description:"Niezależne wyszukiwanie produktów oraz kontrola QC, wymiarów i wysyłki dla arkuszy PikoBuy."}
};
export function generateStaticParams(){return locales.map(lang=>({lang}));}
export async function generateMetadata({params}:{params:Promise<{lang:string}>}):Promise<Metadata>{const {lang}=await params;const data=meta[lang];if(!data)return {};return {...data,alternates:{canonical:`https://pikobuyspreadsheet.me/${lang}`,languages:{en:"https://pikobuyspreadsheet.me/",de:"https://pikobuyspreadsheet.me/de",fr:"https://pikobuyspreadsheet.me/fr",es:"https://pikobuyspreadsheet.me/es",it:"https://pikobuyspreadsheet.me/it",pt:"https://pikobuyspreadsheet.me/pt",nl:"https://pikobuyspreadsheet.me/nl",pl:"https://pikobuyspreadsheet.me/pl"}}};}
export default async function Page({params}:{params:Promise<{lang:string}>}){const {lang}=await params;if(!locales.includes(lang))notFound();if(expandedLocales.includes(lang))return <ExpandedLocalizedHome lang={lang as ExtendedLocale}/>;return <LocalizedHome lang={lang as Locale}/>;}
