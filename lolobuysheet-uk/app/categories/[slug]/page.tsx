"use client";
import { useParams, useSearchParams } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { categories, categoryLabel, getLang, siteLabels, slugify, t } from "@/lib/site-language";
export default function CategoryDetail() {
  const p = useParams<{ slug: string }>(),
    lang = getLang(useSearchParams().get("lang")),
    x = t(lang),
    name = categories.find((v) => slugify(v) === p.slug) ?? "Shoes";
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
          <p>{x.c[5]}</p>
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
