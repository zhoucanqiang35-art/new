import { catalogHref } from "./catalog-model";
import { catalogLabels } from "./catalog-labels";
import { officialSources, supportCopy } from "./support-copy";
import { seoPageCopy } from "./seo-page-copy";

const sectionIds = ["product-search", "photos-and-qc", "purchase", "shipping", "returns-and-tracking", "compare-costs"];

export function SeoPage({ code }: { code: string }) {
  const t = seoPageCopy(code);
  const help = supportCopy(code);
  const links = {
    browse: [catalogHref(code), catalogLabels(code).browse],
    pictures: [`/${code}/guide/#buying-qc`, help.guides[2].title],
    order: [`/${code}/guide/#buying-order`, help.guides[1].title],
    shipping: [`/${code}/guide/#buying-shipping`, help.guides[3].title],
    faq: [`/${code}/faq/`, help.faqTitle],
  } satisfies Record<string, string[]>;
  return (
    <main className="support-page seo-page">
      <h1>{t.heading}</h1>
      <p className="support-intro">{t.intro}</p>
      <nav className="support-toc">
        {t.sections.map(({ title }, index) => <a href={`#${sectionIds[index]}`} key={sectionIds[index]}>{title}</a>)}
      </nav>
      {t.sections.map(({ title, paragraphs, action, source }, index) => {
        const [href, label] = links[action as keyof typeof links];
        const sourceIndex = officialSources.findIndex(([id]) => id === source);
        return (
          <section className="support-topic seo-topic" id={sectionIds[index]} key={sectionIds[index]}>
            <h2>{title}</h2>
            {paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            <div className="support-actions">
              <a href={href}>{label}</a>
              {sourceIndex >= 0 && (
                <a href={officialSources[sourceIndex][1]} target="_blank" rel="noopener">{help.guideNames[sourceIndex]}</a>
              )}
            </div>
          </section>
        );
      })}
    </main>
  );
}
