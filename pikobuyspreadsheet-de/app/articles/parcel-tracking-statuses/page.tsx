import type { Metadata } from "next";
import { LocalizedArticle, getArticleMetadata } from "../localized-articles";
const seo=getArticleMetadata("parcel-tracking-statuses");
export const metadata:Metadata={title:seo.title,description:seo.description,alternates:{canonical:"/articles/parcel-tracking-statuses"}};
export default function Page(){return <LocalizedArticle id="parcel-tracking-statuses" />;}