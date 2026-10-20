import type { Metadata } from "next";
import { LocalizedArticle, getArticleMetadata } from "../localized-articles";
const seo=getArticleMetadata("parcel-submission-checklist");
export const metadata:Metadata={title:seo.title,description:seo.description,alternates:{canonical:"/articles/parcel-submission-checklist"}};
export default function Page(){return <LocalizedArticle id="parcel-submission-checklist" />;}