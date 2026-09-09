import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { researchArticles } from "../../articleData";
import { PageHero, PageShell, SourceNote } from "../../components";
import { languages } from "../../data";
import { localizedContent } from "../../localizedContent";
import { ResponsiveArticleSection } from "../../ResponsiveDetails";

const siteUrl = "https://lolobuysheet.lt";

export function generateStaticParams() {
  return researchArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = researchArticles.find((item) => item.slug === slug);
  if (!article) return {};

  const translatedLanguages = languages.filter((language) =>
    localizedContent[language.code]?.articles.some((item) => item.slug === article.slug),
  );
  const canonicalPath = `/articles/${article.slug}`;

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: {
      canonical: canonicalPath,
      languages: Object.fromEntries([
        ["x-default", canonicalPath],
        ...translatedLanguages.map((language) => [
          language.code,
          `/languages/${language.code}/articles/${article.slug}`,
        ]),
      ]),
    },
    openGraph: {
      type: "article",
      url: `${siteUrl}${canonicalPath}`,
      title: article.title,
      description: article.description,
      publishedTime: article.published,
      modifiedTime: article.updated,
      images: [{ url: "/og.png", alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: ["/og.png"],
    },
  };
}

export default async function ArticleDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = researchArticles.find((item) => item.slug === slug);
  if (!article) notFound();

  const canonicalUrl = `${siteUrl}/articles/${article.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    mainEntityOfPage: canonicalUrl,
    url: canonicalUrl,
    image: `${siteUrl}/og.png`,
    datePublished: article.published,
    dateModified: article.updated ?? article.published,
    inLanguage: "en",
    keywords: article.keywords?.join(", "),
    author: { "@type": "Organization", name: "LoloBuy Sheet" },
    publisher: { "@type": "Organization", name: "LoloBuy Sheet", url: siteUrl },
    citation: article.sources?.map((source) => source.url),
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="article-wrap">
        <PageHero
          eyebrow={`${article.tag} · ${article.readTime}`}
          title={article.title}
          intro={article.description}
        />
        <div className="article-layout">
          <article className="prose long-form">
            {article.illustration && (
              <figure>
                <Image
                  src={article.illustration.src}
                  alt={article.illustration.alt}
                  width={article.illustration.width}
                  height={article.illustration.height}
                />
                <figcaption>{article.illustration.caption}</figcaption>
              </figure>
            )}
            {article.sections.map((section, index) => (
              <ResponsiveArticleSection title={section.heading} key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
                {index === 1 && (
                  <SourceNote>
                    Official LoloBuy public material was checked on {article.updated ?? "20 Aug 2026"}.
                    Platform rules, prices, timings, routes and account-specific deadlines can change and must
                    be rechecked live.
                  </SourceNote>
                )}
              </ResponsiveArticleSection>
            ))}
            {article.sources && article.sources.length > 0 && (
              <ResponsiveArticleSection title="Sources checked">
                <h2>Sources checked</h2>
                <p>
                  Material facts in this guide were checked against the following public sources. Access dates
                  are shown so readers can distinguish the cited record from current platform, carrier and
                  government rules.
                </p>
                <ul>
                  {article.sources.map((source) => (
                    <li key={source.url}>
                      <a href={source.url} target="_blank" rel="noreferrer noopener">
                        {source.label}
                      </a>{" "}
                      — accessed {source.accessed}
                    </li>
                  ))}
                </ul>
              </ResponsiveArticleSection>
            )}
            {article.relatedLinks && article.relatedLinks.length > 0 && (
              <ResponsiveArticleSection title="Related planning tools">
                <h2>Related planning tools</h2>
                <ul>
                  {article.relatedLinks.map((link) => (
                    <li key={link.url}>
                      <a href={link.url} target="_blank" rel="noreferrer noopener">
                        {link.label} →
                      </a>
                    </li>
                  ))}
                </ul>
              </ResponsiveArticleSection>
            )}
          </article>
          <aside className="article-side">
            <strong>Evidence-first reading</strong>
            <ol>
              <li>Separate platform facts</li>
              <li>Mark editorial checks</li>
              <li>Recheck live variables</li>
              <li>Save order evidence</li>
            </ol>
            <Link href="/sources">Open evidence ledger →</Link>
            <Link className="side-secondary" href="/articles">All SEO articles →</Link>
          </aside>
        </div>
      </div>
    </PageShell>
  );
}
