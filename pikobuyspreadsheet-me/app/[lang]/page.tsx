import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LocalizedHome, type Locale } from "../localized-content";
import { ExpandedLocalizedHome, type ExtendedLocale } from "../expanded-locales";
const originalLocales=["de","fr","es","it"];const expandedLocales=["pt","nl","pl"];const locales=[...originalLocales,...expandedLocales];
const meta:Record<string,{title:string;description:string}>={
 de:{title:"PikoBuy Spreadsheet 2026 | Finds, QC & Versand",description:"Unabhängige PikoBuy-Produktsuche mit Quellenlinks, QC-Fotos, Größen- und Versandprüfungen."},
 fr:{title:"PikoBuy Spreadsheet 2026 | Trouvailles, QC et livraison",description:"Recherche PikoBuy indépendante avec liens sources, photos QC, tailles et planification de livraison."},
 es:{title:"PikoBuy Spreadsheet 2026 | Hallazgos, QC y envío",description:"Investigación PikoBuy independiente con enlaces de origen, fotos QC, tallas y planificación de envío."},
 it:{title:"PikoBuy Spreadsheet 2026 | Trovate, QC e spedizione",description:"Ricerca PikoBuy indipendente con link fonte, foto QC, taglie e pianificazione della spedizione."},
 pt:{title:"PikoBuy Spreadsheet 2026 | Achados, QC e envio",description:"Pesquisa PikoBuy independente com links de origem, fotos QC, tamanhos e planeamento de envio."},
 nl:{title:"PikoBuy Spreadsheet 2026 | Vondsten, QC en verzending",description:"Onafhankelijk PikoBuy-onderzoek met bronlinks, QC-foto’s, maten en verzendplanning."},
 pl:{title:"PikoBuy Spreadsheet 2026 | Znaleziska, QC i wysyłka",description:"Niezależne badanie PikoBuy z linkami źródłowymi, zdjęciami QC, wymiarami i planowaniem wysyłki."}
};
export function generateStaticParams(){return locales.map(lang=>({lang}));}
export async function generateMetadata({params}:{params:Promise<{lang:string}>}):Promise<Metadata>{const {lang}=await params;const data=meta[lang];if(!data)return {};return {...data,alternates:{canonical:`https://pikobuyspreadsheet.me/${lang}`,languages:{en:"https://pikobuyspreadsheet.me/",de:"https://pikobuyspreadsheet.me/de",fr:"https://pikobuyspreadsheet.me/fr",es:"https://pikobuyspreadsheet.me/es",it:"https://pikobuyspreadsheet.me/it",pt:"https://pikobuyspreadsheet.me/pt",nl:"https://pikobuyspreadsheet.me/nl",pl:"https://pikobuyspreadsheet.me/pl"}}};}
export default async function Page({params}:{params:Promise<{lang:string}>}){const {lang}=await params;if(!locales.includes(lang))notFound();if(expandedLocales.includes(lang))return <ExpandedLocalizedHome lang={lang as ExtendedLocale}/>;return <LocalizedHome lang={lang as Locale}/>;}
