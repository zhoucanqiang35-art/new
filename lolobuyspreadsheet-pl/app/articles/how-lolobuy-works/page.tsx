import type { Metadata } from "next";
import ArticlePage from "@/components/article-page";
import { articleBySlug } from "@/content/articles";
import { absoluteUrl, articlePath, languageAlternates } from "@/content/seo";

const path = articlePath("how-lolobuy-works");
export const metadata: Metadata = {title:"How LoloBuy Works | International Buyer Guide",description:"A fact-checked guide to LoloBuy ordering, warehouse QC, parcel planning and global shipping.",alternates:{canonical:absoluteUrl("en", path),languages:{"x-default":absoluteUrl("en", path),...languageAlternates(path)}}};
export default function Page(){return <ArticlePage article={articleBySlug["how-lolobuy-works"]}/>}
