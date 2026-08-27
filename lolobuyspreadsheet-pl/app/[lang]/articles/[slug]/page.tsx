import ArticlePage from "@/components/article-page";
import { articleBySlug } from "@/content/articles";
import { languageNames } from "@/content/navigation";

export default async function Page({params}:{params:Promise<{lang:string;slug:string}>}) {
  const {lang,slug}=await params;
  const article=articleBySlug[slug];
  return <ArticlePage article={article || articleBySlug["how-lolobuy-works"]} initialLang={languageNames[lang]?lang:"en"}/>;
}
