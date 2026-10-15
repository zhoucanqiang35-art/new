import type { Metadata } from "next";
import ArticlePage from "@/components/article-page";
import { articleBySlug } from "@/content/articles";
import { absoluteUrl, articlePath, languageAlternates } from "@/content/seo";

const path = articlePath("lolobuy-shipping-guide");
export const metadata: Metadata = {title:"LoloBuy Shipping Guide | Routes, Parcel Weight and ShipCare",description:"A fact-checked guide to LoloBuy parcel planning, route comparison, chargeable weight and ShipCare terms.",alternates:{canonical:absoluteUrl("en", path),languages:{"x-default":absoluteUrl("en", path),...languageAlternates(path)}}};
export default function Page(){return <ArticlePage article={articleBySlug["lolobuy-shipping-guide"]}/>}
