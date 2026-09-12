import type { Metadata } from "next";
import ArticlePage from "@/components/article-page";
import { articleBySlug } from "@/content/articles";

export const metadata: Metadata = {title:"LoloBuy QC Photo Checklist | Warehouse Inspection Guide",description:"A practical, fact-checked checklist for reviewing LoloBuy warehouse QC photos before parcel submission."};
export default function Page(){return <ArticlePage article={articleBySlug["lolobuy-qc-photo-checklist"]}/>}
