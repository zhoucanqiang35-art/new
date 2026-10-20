import type { Metadata } from "next";
import { LocalizedArticle, getArticleMetadata } from "../localized-articles";
const seo=getArticleMetadata("spreadsheet-2026");
export const metadata:Metadata={title:seo.title,description:seo.description,alternates:{canonical:"/articles/spreadsheet-2026"}};
export default function Page(){return <LocalizedArticle id="spreadsheet-2026" />;}