import { ArticlePage, articles } from "../../content-page";

export async function generateStaticParams() { return articles.map((article) => ({ article: article.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ article: string }> }) {
  const { article: slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  return { title: article ? `${article.title} | PikoBuy Sheet` : "PikoBuy SEO Articles", description: article?.deck };
}

export default async function Page({ params }: { params: Promise<{ article: string }> }) {
  const { article } = await params;
  return <ArticlePage slug={article} locale="en" />;
}
