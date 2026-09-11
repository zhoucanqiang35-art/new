// Internal workspace sites can read the authenticated OpenAI user from the
// forwarded request headers:
//
// import { headers } from "next/headers";
//
// export default async function Home() {
//   const requestHeaders = await headers();
//   const email = requestHeaders.get("oai-authenticated-user-email");
//   const encodedFullName = requestHeaders.get("oai-authenticated-user-full-name");
//   const fullName =
//     encodedFullName &&
//     requestHeaders.get("oai-authenticated-user-full-name-encoding") ===
//       "percent-encoded-utf-8"
//       ? decodeURIComponent(encodedFullName)
//       : null;
//   const displayName = fullName ?? email;
//   // ...
// }

"use client";
import { SiteHeader } from "@/components/site-header";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { categories, categoryLabel, getLang, siteLabels, slugify, t } from "@/lib/site-language";
export default function Home() {
  const lang = getLang(useSearchParams().get("lang"));
  const x = t(lang);
  const labels = siteLabels(lang);
  return (
    <main>
      <SiteHeader />
      <section className="hero">
        <p className="eyebrow">{x.c[0].toUpperCase()}</p>
        <h1>
          {x.c[1]}
          <br />
          <i>LoloBuy</i>
        </h1>
        <p className="intro">
          {x.c[2]}
        </p>
        <form
          className="search"
          action="https://findspreadsheet.com/search.html"
          method="get"
        >
          <input
            name="keywords"
            required
            placeholder={x.c[5]}
          />
          <input type="hidden" name="channelid" value="2" />
          <button type="submit">{x.c[12]} →</button>
        </form>
        <a className="db" href="https://findspreadsheet.com">
          {labels.database} · FindSpreadsheet
        </a>
      </section>
      <section className="grid">
        <div className="sectionhead">
          <p className="eyebrow">{x.c[3].toUpperCase()}</p>
          <h2>{x.c[1]}</h2>
        </div>
        <div className="cats">
          {categories.map((item, i) => (
            <Link key={item} href={`/categories/${slugify(item)}?lang=${lang}`}>
              <small>0{i + 1}</small>
              <strong>{categoryLabel(lang, item)}</strong>
              <em>{x.c[3]} →</em>
            </Link>
          ))}
        </div>
      </section>
      <section className="method">
        <p className="eyebrow">{x.c[0].toUpperCase()}</p>
        <div>
          <article>
            <b>01</b>
            <h3>{x.c[3]}</h3><p>{x.c[2]}</p>
          </article>
          <article>
            <b>02</b>
            <h3>{x.c[10]}</h3><p>{x.c[5]}</p>
          </article>
          <article>
            <b>03</b>
            <h3>{x.c[4]}</h3><p>{x.c[11]}</p>
          </article>
        </div>
      </section>
      <section className="article">
        <p className="eyebrow">{x.c[13].toUpperCase()}</p><h2>{x.c[13]}</h2>
        <p>
          {x.c[2]}
        </p>
        <p>
          {x.c[11]}
        </p>
      </section>
      <footer>{x.c[0]} · FindSpreadsheet</footer>
    </main>
  );
}
