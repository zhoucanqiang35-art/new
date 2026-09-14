import Link from "next/link";
import { ArrowRight, BookOpenText } from "lucide-react";
import { SiteHeader } from "@/app/components/SiteHeader";

export default function SeoArticlesPage(){return <main><SiteHeader /><div className="article-header"><p className="section-label">Long-form product research</p><h1>PikoBuy SEO Articles</h1><p>Evidence-led articles written for people researching PikoBuy spreadsheets, product links, QC photos and shipping decisions.</p></div><section className="standalone-grid guide-grid seo-index-grid"><Link href="/seo-articles/pikobuy-spreadsheet-research-guide"><BookOpenText/><span>PIKOBUY SPREADSHEET · 9 MIN READ</span><h2>How to Use a PikoBuy Spreadsheet Without Buying Blind</h2><p>A fact-checked workflow covering product discovery, the two-payment process, warehouse photos, returns, parcel cost and delivery risk.</p><b>Read full article <ArrowRight size={15}/></b></Link></section></main>}
