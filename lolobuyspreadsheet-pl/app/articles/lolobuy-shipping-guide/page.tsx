import type { Metadata } from "next";
import ArticlePage from "@/components/article-page";
import { articleBySlug } from "@/content/articles";

export const metadata: Metadata = {title:"LoloBuy Shipping Guide | Routes, Parcel Weight and ShipCare",description:"A fact-checked guide to LoloBuy parcel planning, route comparison, chargeable weight and ShipCare terms."};
export default function Page(){return <ArticlePage article={articleBySlug["lolobuy-shipping-guide"]}/>}
