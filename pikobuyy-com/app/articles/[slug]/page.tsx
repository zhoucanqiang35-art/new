import { notFound } from "next/navigation";
import { ContentDetailPage } from "../../detail-pages";
import { articleEntries } from "../../editorial-content";
import { buildMetadata, detailMetadata } from "../../seo";
import { sectionItemSlugs } from "../../site-content";

export function generateStaticParams() { return sectionItemSlugs.articles.map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = articleEntries[slug];
  if (!entry || !sectionItemSlugs.articles.includes(slug)) return {};
  if (entry.seoTitle) {
    return buildMetadata({
      title: entry.seoTitle,
      description: entry.dek,
      path: `articles/${slug}`,
      translatedPath: `articles/${slug}`,
      type: "article",
      publishedTime: entry.published,
      modifiedTime: entry.modified,
      image: entry.visual?.src,
    });
  }
  return detailMetadata("en", "articles", slug, entry.dek);
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!sectionItemSlugs.articles.includes(slug)) notFound();
  return <ContentDetailPage section="articles" slug={slug} />;
}
