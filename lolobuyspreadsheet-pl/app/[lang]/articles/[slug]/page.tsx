import ArticlePage from "@/components/article-page";
import { articleBySlug, articles } from "@/content/articles";
import { languageNames } from "@/content/navigation";
import type { Metadata } from "next";

const languages = ["de", "fr", "es", "it", "nl", "pl", "pt", "sv"];

export function generateStaticParams() {
  return languages.flatMap((lang) => articles.map(({ slug }) => ({ lang, slug })));
}

export async function generateMetadata({params}:{params:Promise<{lang:string;slug:string}>}):Promise<Metadata> {
  const {lang,slug}=await params;
  const article=articleBySlug[slug] || articleBySlug["how-lolobuy-works"];
  const canonical=`https://lolobuyspreadsheet.pl/${lang}/articles/${article.slug}/`;
  return {
    title: `${article.title} | LoloBuy Spreadsheet Europe`,
    description: article.description,
    alternates: { canonical },
    openGraph: { type:"article", url:canonical, title:article.title, description:article.description },
  };
}

export default async function Page({params}:{params:Promise<{lang:string;slug:string}>}) {
  const {lang,slug}=await params;
  const article=articleBySlug[slug];
  return <ArticlePage article={article || articleBySlug["how-lolobuy-works"]} initialLang={languageNames[lang]?lang:"en"}/>;
}
