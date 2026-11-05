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
export function HomeClient() {
  const lang = getLang(useSearchParams().get("lang"));
  const x = t(lang);
  const labels = siteLabels(lang);
  const homeCopy = {
    en: ["LoloBuy Spreadsheet", "Browse product categories and practical QC and shipping guides, then check current listings on FindSpreadsheet."],
    nl: ["LoloBuy Spreadsheet", "Bekijk productcategorieën en praktische QC- en verzendgidsen en controleer actuele aanbiedingen op FindSpreadsheet."],
    de: ["LoloBuy Spreadsheet", "Entdecken Sie Produktkategorien sowie praktische QC- und Versandratgeber und prüfen Sie aktuelle Angebote auf FindSpreadsheet."],
    fr: ["LoloBuy Spreadsheet", "Explorez les catégories et les guides pratiques de contrôle qualité et de livraison, puis vérifiez les offres actuelles sur FindSpreadsheet."],
    es: ["LoloBuy Spreadsheet", "Explora categorías y guías prácticas de control de calidad y envío; después consulta los productos actuales en FindSpreadsheet."],
    it: ["LoloBuy Spreadsheet", "Esplora categorie e guide pratiche su controllo qualità e spedizione, poi verifica le offerte attuali su FindSpreadsheet."],
    pl: ["LoloBuy Spreadsheet", "Przeglądaj kategorie oraz praktyczne poradniki kontroli jakości i wysyłki, a następnie sprawdź aktualne oferty na FindSpreadsheet."],
    pt: ["LoloBuy Spreadsheet", "Explore categorias e guias práticos de controlo de qualidade e envio e consulte as ofertas atuais no FindSpreadsheet."],
    sv: ["LoloBuy Spreadsheet", "Utforska kategorier och praktiska guider om kvalitetskontroll och frakt och kontrollera aktuella annonser på FindSpreadsheet."],
  } as const;
  const guideLabels = {
    en: ["QC photo guide", "Shipping planning guide"], nl: ["Gids voor QC-foto’s", "Gids voor verzendplanning"],
    de: ["QC-Fotoratgeber", "Versandplanung"], fr: ["Guide des photos QC", "Guide de préparation de l’envoi"],
    es: ["Guía de fotos de control", "Guía de planificación de envío"], it: ["Guida alle foto QC", "Guida alla spedizione"],
    pl: ["Poradnik zdjęć QC", "Planowanie wysyłki"], pt: ["Guia de fotos QC", "Planeamento do envio"],
    sv: ["Guide till QC-bilder", "Guide till fraktplanering"],
  } as const;
  return (
    <main>
      <SiteHeader />
      <section className="hero">
        <p className="eyebrow">{x.c[0].toUpperCase()}</p>
        <h1>
          {homeCopy[lang][0]}
          <br />
          <i>UK</i>
        </h1>
        <p className="intro">
          {homeCopy[lang][1]}
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
        <p><Link href={`/seo-articles?lang=${lang}#lolobuy-qc-photos-guide`}>{guideLabels[lang][0]}</Link> · <Link href={`/seo-articles?lang=${lang}#lolobuy-shipping-plan`}>{guideLabels[lang][1]}</Link></p>
      </section>
      <footer>{x.c[0]} · FindSpreadsheet</footer>
    </main>
  );
}
