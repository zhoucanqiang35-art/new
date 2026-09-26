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
            Discover candidates with the <Link href="/seo-articles/lolobuy-image-search-guide">image search guide</Link>, verify them with the <Link href="/seo-articles/lolobuy-product-link-research">product-link research guide</Link>, or prepare an unlisted request with the <Link href="/seo-articles/lolobuy-manual-order-guide">manual order guide</Link>. Review warehouse evidence with the <Link href="/seo-articles/lolobuy-qc-photos-guide">QC photos guide</Link>, then continue with the <Link href="/seo-articles/lolobuy-shipping-plan">shipping plan guide</Link>, <Link href="/seo-articles/lolobuy-return-request-guide">return request guide</Link>, or <Link href="/seo-articles/lolobuy-parcel-tracking-guide">parcel tracking guide</Link>.
          </p>
        </section>
        <p className="source-note">{article.sourceNote}</p>
      </article>
    </main>
  );
}
