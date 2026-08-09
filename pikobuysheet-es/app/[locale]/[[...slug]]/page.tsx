import { notFound } from "next/navigation";
import HomeExperience from "../../home-experience";
import { ArticlePage, articles, ContentPage } from "../../content-page";
import { getLocaleCopy, localeCodes, navKeys, type PageKey } from "../../site-config";

export function generateStaticParams() {
  return localeCodes.filter((code) => code !== "en").map((locale) => ({ locale, slug: [] }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug?: string[] }> }) {
  const { locale, slug = [] } = await params;
  const copy = getLocaleCopy(locale);
  const page = (slug[0] || "home") as PageKey;
  const article = slug[1] ? articles.find((item) => item.slug === slug[1]) : undefined;
  const title = article?.title ?? (page === "home" ? copy.homeTitle : copy.nav[page as Exclude<PageKey, "home">]);
  return { title: `${title} | PikoBuy Sheet`, description: article?.deck ?? copy.homeIntro };
}

export default async function LocalizedPage({ params }: { params: Promise<{ locale: string; slug?: string[] }> }) {
  const { locale, slug = [] } = await params;
  if (!localeCodes.includes(locale) || locale === "en") notFound();
  if (!slug.length) return <HomeExperience locale={locale} />;
  const page = slug[0] as Exclude<PageKey, "home">;
  if (!navKeys.includes(page)) notFound();
  if (page === "seo-articles" && slug[1]) {
    const article = articles.find((item) => item.slug === slug[1]);
    if (!article || (article.publishedLocales && !article.publishedLocales.includes(locale))) notFound();
    return <ArticlePage slug={slug[1]} locale={locale} />;
  }
  if (slug.length > 1) notFound();
  return <ContentPage page={page} locale={locale} />;
}
