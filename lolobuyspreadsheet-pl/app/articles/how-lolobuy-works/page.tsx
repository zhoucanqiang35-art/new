import type { Metadata } from "next";
import ArticlePage from "@/components/article-page";
import { articleBySlug } from "@/content/articles";

export const metadata: Metadata = {title:"How LoloBuy Works | International Buyer Guide",description:"A fact-checked guide to LoloBuy ordering, warehouse QC, parcel planning and global shipping."};
export default function Page(){return <ArticlePage article={articleBySlug["how-lolobuy-works"]}/>}
