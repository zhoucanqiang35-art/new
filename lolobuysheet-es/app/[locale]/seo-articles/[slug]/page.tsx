import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "../../../article-page";
import { getSeoArticle, seoArticles } from "../../../seo-content";
import { buildMetadata, localizedUrl } from "../../../seo";
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
  return buildMetadata({
    title: `${article.title} | LoloBuy Sheet`,
    description: article.description,
    path: `/seo-articles/${article.slug}`,
    locale,
    canonical: localizedUrl("en", `/seo-articles/${article.slug}`),
    indexable: false,
    type: "article",
  });
}

export default async function LocalizedSeoArticlePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!supportedLocales.has(locale) || locale === "en") notFound();
  return <ArticlePage slug={slug} locale={locale} />;
}
