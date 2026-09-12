"use client";

import { SiteHeader } from "@/components/site-header";
import { useSearchParams } from "next/navigation";
import { getLang } from "@/lib/site-language";
import { articleContent } from "@/lib/site-content";

export default function ResearchALoloBuyOrderPage() {
  const lang = getLang(useSearchParams().get("lang"));
  const article = articleContent(lang);
  return (
    <main>
      <SiteHeader />
      <article className="inner prose longform">
        <p className="eyebrow">{article.kicker.toUpperCase()}</p>
        <h1>{article.title}</h1>
        <p className="lead">{article.lead}</p>
        {article.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </section>
        ))}
        <p className="source-note">{article.source}</p>
      </article>
    </main>
  );
}
