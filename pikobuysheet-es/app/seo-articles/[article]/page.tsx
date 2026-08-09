import type { Metadata } from "next";
import { ArticlePage, articles } from "../../content-page";

export async function generateStaticParams() { return articles.map((article) => ({ article: article.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ article: string }> }): Promise<Metadata> {
  const { article: slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return { title: "PikoBuy SEO Articles" };
  const canonical = `https://pikobuysheet.es/seo-articles/${article.slug}`;
  const title = article.metaTitle ?? `${article.title} | PikoBuy Sheet`;
  const description = article.metaDescription ?? article.deck;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title,
      description,
      siteName: "PikoBuy Sheet",
      publishedTime: article.publishedISO,
      modifiedTime: article.modifiedISO ?? article.publishedISO,
    },
    twitter: { card: "summary", title, description },
  };
}

export default async function Page({ params }: { params: Promise<{ article: string }> }) {
  const { article } = await params;
  return <ArticlePage slug={article} locale="en" />;
}
