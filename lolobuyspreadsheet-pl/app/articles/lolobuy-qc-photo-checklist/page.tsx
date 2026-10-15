import type { Metadata } from "next";
import ArticlePage from "@/components/article-page";
import { articleBySlug } from "@/content/articles";
import { absoluteUrl, articlePath, languageAlternates } from "@/content/seo";

const path = articlePath("lolobuy-qc-photo-checklist");
export const metadata: Metadata = {title:"LoloBuy QC Photo Checklist | Warehouse Inspection Guide",description:"A practical, fact-checked checklist for reviewing LoloBuy warehouse QC photos before parcel submission.",alternates:{canonical:absoluteUrl("en", path),languages:{"x-default":absoluteUrl("en", path),...languageAlternates(path)}}};
export default function Page(){return <ArticlePage article={articleBySlug["lolobuy-qc-photo-checklist"]}/>}
