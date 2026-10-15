import ArticlePage from "@/components/article-page";
import { articleBySlug, articles } from "@/content/articles";
import { languageNames } from "@/content/navigation";
import { tr } from "@/content/i18n";
import { absoluteUrl, articlePath, languageAlternates, localeFor } from "@/content/seo";
import type { Metadata } from "next";

const languages = ["de", "fr", "es", "it", "nl", "pl", "pt", "sv"];

export function generateStaticParams() {
  return languages.flatMap((lang) => articles.map(({ slug }) => ({ lang, slug })));
}

export async function generateMetadata({params}:{params:Promise<{lang:string;slug:string}>}):Promise<Metadata> {
  const {lang,slug}=await params;
  const article=articleBySlug[slug] || articleBySlug["how-lolobuy-works"];
  const locale = localeFor(lang);
  const path = articlePath(article.slug);
  const canonical = absoluteUrl(locale, path);
  const title = tr(locale, article.title);
  const description = tr(locale, article.description);
  return {
    title,
    description,
    alternates: { canonical, languages: { "x-default": absoluteUrl("en", path), ...languageAlternates(path) } },
    openGraph: { type:"article", url:canonical, title, description },
  };
}

export default async function Page({params}:{params:Promise<{lang:string;slug:string}>}) {
  const {lang,slug}=await params;
  const article=articleBySlug[slug];
  return <ArticlePage article={article || articleBySlug["how-lolobuy-works"]} initialLang={languageNames[lang]?lang:"en"}/>;
}
