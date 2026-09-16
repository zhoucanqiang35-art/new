"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import type { SeoArticle } from "@/lib/seo-article-content";

export function ArticleClient({ article }: { article: SeoArticle }) {
  return (
    <main>
      <SiteHeader />
      <article className="inner prose longform">
        <p className="eyebrow">INDEPENDENT RESEARCH · 2026</p>
        <h1>{article.title}</h1>
        <p className="lead">{article.description}</p>
        <p className="source-note"><strong>Primary keyword:</strong> {article.primaryKeyword}</p>
        {article.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        ))}
        <section>
          <h2>Continue your research</h2>
          <p>
            Start with the <Link href="/seo-articles/lolobuy-product-link-research">product-link research guide</Link>, then use the <Link href="/seo-articles/lolobuy-qc-photos-guide">QC photos guide</Link> when an item reaches the warehouse. You can also browse the <Link href="/categories">product categories</Link> or return to the <Link href="/seo-articles">research library</Link>. The database search is available from every page header.
          </p>
        </section>
        <p className="source-note">{article.sourceNote}</p>
      </article>
    </main>
  );
}
