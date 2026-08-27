import ArticlePage from "@/components/article-page";
import { articleBySlug, articles } from "@/content/articles";
import { languageNames } from "@/content/navigation";

const languages = ["de", "fr", "es", "it", "nl", "pl", "pt", "sv"];

export function generateStaticParams() {
  return languages.flatMap((lang) => articles.map(({ slug }) => ({ lang, slug })));
}

export default async function Page({params}:{params:Promise<{lang:string;slug:string}>}) {
  const {lang,slug}=await params;
  const article=articleBySlug[slug];
  return <ArticlePage article={article || articleBySlug["how-lolobuy-works"]} initialLang={languageNames[lang]?lang:"en"}/>;
}
