"use client";

import { SiteHeader } from "../components/SiteHeader";
import { languageCopy, pageLabels, useLanguage } from "../i18n";
const categories=[['Shoes','/shoes/'],['Hoodies','/hoodies-sweaters/'],['T-Shirts','/t-shirts/'],['Jackets','/jackets/'],['Pants','/pants-shorts/'],['Hats','/headwear/'],['Watches','/accessories/'],['Electronics','/electronics/'],['Socks','/other-stuff/'],['Other Stuff','/other-stuff/']];
export default function Categories(){const language=useLanguage();const t=languageCopy[language];const labels=pageLabels[language];return <main><SiteHeader/><section className="category-section standalone"><p className="eyebrow">{labels.categoryCount}</p><h1>{t.section}</h1><p>{t.sectionBody}</p><div className="category-grid">{categories.map(([,path],i)=><a className="category-card" key={path+i} href={`https://findspreadsheet.com${path}`}><span>{String(i+1).padStart(2,'0')}</span><div><h3>{labels.categoryNames[i]}</h3><p>{t.explore}</p></div><i>↗</i></a>)}</div></section></main>}
