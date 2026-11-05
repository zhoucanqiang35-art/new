"use client";

import { useSearchParams } from "next/navigation";
import { categoryAdvice } from "@/lib/category-advice";
import { SiteHeader } from "@/components/site-header";
import { categoryLabel, getLang, siteLabels, t, type Category } from "@/lib/site-language";

export function CategoryDetailClient({ name }: { name: Category }) {
  const lang = getLang(useSearchParams().get("lang"));
  const x = t(lang);
  const labels = siteLabels(lang);
  const link = `https://findspreadsheet.com/search.html?keywords=${encodeURIComponent(name)}&channelid=2`;

  return (
    <main>
      <SiteHeader />
      <section className="inner category-detail">
        <article className="category-copy">
          <p className="eyebrow">{labels.categoryDetail.toUpperCase()}</p>
          <h1>{categoryLabel(lang, name)}</h1>
          <h2>{x.c[4]}</h2>
          <p>{categoryAdvice(lang, name)}</p>
          <p>{x.c[2]}</p>
        </article>
        <aside className="category-action">
          <p className="eyebrow">FINDSPREADSHEET</p>
          <strong>{categoryLabel(lang, name)}</strong>
          <p>{x.c[5]}</p>
          <a href={link} target="_blank" rel="noreferrer">
            {labels.categoryAction} →
          </a>
        </aside>
      </section>
    </main>
  );
}
