"use client";
import { useSearchParams } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { getLang, siteLabels, t } from "@/lib/site-language";
export default function Details() {
  const lang = getLang(useSearchParams().get("lang")), x = t(lang), labels = siteLabels(lang);
  return (
    <main>
      <SiteHeader />
      <section className="inner">
        <p className="eyebrow">{x.c[7].toUpperCase()}</p>
        <div className="product-dossier">
          <article>
            <span>01 / {labels.researchEdit}</span>
            <h1>{x.c[8]}</h1>
            <p>{x.c[9]}</p>
            <div className="swatches">
              <i />
              <i />
              <i />
            </div>
          </article>
          <aside>
            <p className="eyebrow">{x.c[10]}</p>
            <h2>{x.c[4]}</h2>
            <p>{x.c[11]}</p>
            <dl>
              <div>
                <dt>01</dt>
              <dd>{x.c[3]}</dd>
              </div>
              <div>
                <dt>02</dt>
              <dd>{x.c[10]}</dd>
              </div>
              <div>
                <dt>03</dt>
              <dd>{x.c[11]}</dd>
              </div>
            </dl>
            <a
              href="https://findspreadsheet.com"
              target="_blank"
              rel="noreferrer"
            >
              {labels.databaseSearch} · FindSpreadsheet →
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}
