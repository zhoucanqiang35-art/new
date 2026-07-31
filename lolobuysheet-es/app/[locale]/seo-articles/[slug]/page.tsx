import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "../../../article-page";
import { getSeoArticle, seoArticles } from "../../../seo-content";
import { supportedLocales } from "../../../site-shell";

export function generateStaticParams() {
  return Array.from(supportedLocales)
    .filter((locale) => locale !== "en")
    .flatMap((locale) => seoArticles.map(({ slug }) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getSeoArticle(slug);
  if (!supportedLocales.has(locale) || locale === "en" || !article) return {};
  return {
    title: `${article.title} | LoloBuy Sheet`,
    description: article.description,
    alternates: { canonical: `https://lolobuysheet.es/${locale}/seo-articles/${article.slug}` },
  };
}

export default async function LocalizedSeoArticlePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!supportedLocales.has(locale) || locale === "en") notFound();
  return <ArticlePage slug={slug} locale={locale} />;
}
