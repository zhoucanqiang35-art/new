import type { Metadata } from "next";
import { ArticlePage } from "../../article-page";
import { getSeoArticle, seoArticles } from "../../seo-content";

export function generateStaticParams() {
  return seoArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getSeoArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} | LoloBuy Sheet`,
    description: article.description,
    alternates: { canonical: `https://lolobuysheet.es/seo-articles/${article.slug}` },
  };
}

export default async function SeoArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ArticlePage slug={slug} />;
}
