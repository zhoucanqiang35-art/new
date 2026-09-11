"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { categories, categoryLabel, getLang, slugify, t } from "@/lib/site-language";
export default function Categories() {
  const lang = getLang(useSearchParams().get("lang")),
    x = t(lang);
  return (
    <main>
      <SiteHeader />
      <section className="inner">
        <p className="eyebrow">{x.c[0].toUpperCase()}</p>
        <h1>{x.c[1]}</h1>
        <p>{x.c[2]}</p>
        <div className="cats">
          {categories.map((name, i) => (
            <Link key={name} href={`/categories/${slugify(name)}?lang=${lang}`}>
              <small>0{i + 1}</small>
              <strong>{categoryLabel(lang, name)}</strong>
              <em>{x.c[3]} →</em>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
