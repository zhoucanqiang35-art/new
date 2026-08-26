import type { Metadata } from "next";
import { ArticleLayout } from "../article-layout";
import { articles } from "../article-data";

const article=articles["lolobuy-spreadsheet-guide"];
export const metadata:Metadata={title:`${article.title} | Independent 2026 Guide`,description:article.description};
export default function Page(){return <ArticleLayout article={article}/>}
