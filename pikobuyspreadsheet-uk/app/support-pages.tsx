import { catalogHref, productHref } from "./catalog-model";
import { buyingRoutes, officialSources, supportCopy } from "./support-copy";
import faqSources from "./faq-sources.json";

const guideOrder = [4, 0, 1, 6, 5, 2, 3];
const guideSourceIndices = [0, 0, 3, 1, 4, 0, 1];

const screenshotSets = [
  [{ file: "home", from: [73, 14], to: [87, 61] }, { file: "search", from: [44, 55], to: [25, 63] }],
  [{ file: "order", from: [87, 13], to: [73, 30] }],
  [{ file: "qc", from: [25, 10], to: [12, 25] }],
  [{ file: "order", from: [44, 37], to: [27, 45] }],
  [{ file: "register", from: [51, 23], to: [78, 52] }],
  [{ file: "agents", from: [82, 29], to: [47, 31] }],
  [{ file: "currency", from: [77, 32], to: [43, 44] }],
];

function sourceLink(code: string, index: number) {
  const t = supportCopy(code);
  return <a href={officialSources[index][1]} target="_blank" rel="noopener">{t.guideNames[index]}</a>;
}

function SourceList({ code }: { code: string }) {
  const t = supportCopy(code);
  return (
    <section className="support-sources">
      <h2>{t.sources}</h2>
      <ul>{officialSources.map(([key], index) => <li key={key}>{sourceLink(code, index)}</li>)}</ul>
    </section>
  );
}

export function GuidePage({ code }: { code: string }) {
  const t = supportCopy(code);
  const chapters = guideOrder.map(index => ({ index, guide: t.guides[index] }));
  return (
    <main className="support-page">
      <h1>{t.guideTitle}</h1>
      <p className="support-intro">{t.guideIntro}</p>
      <nav className="support-toc">
        {chapters.map(({ guide, index }) => (
          <a href={`#${buyingRoutes[index]}`} key={buyingRoutes[index]}>{guide.title}</a>
        ))}
      </nav>
      {chapters.map(({ guide, index }) => (
        <section className="support-topic" id={buyingRoutes[index]} key={buyingRoutes[index]}>
          <h2>{guide.title}</h2>
          <p className="support-intro">{guide.intro}</p>
          <div className="buying-guide-layout">
            <ol className="buying-steps">
              {guide.steps.map(([title, body]) => (
                <li key={title}><h3>{title}</h3><p>{body}</p></li>
              ))}
            </ol>
            <div className="guide-screenshot-stack">
              {screenshotSets[index].map(({ file, from, to }) => {
                const marker = `guide-arrow-${index}-${file}`;
                return (
                  <figure key={file} className="guide-screenshot">
                    <div>
                      <img src={`/guides/${file}.jpg`} alt={guide.caption} loading="lazy" decoding="async" />
                      <svg className="guide-arrow" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                        <defs>
                          <marker id={marker} markerUnits="userSpaceOnUse" markerWidth="5" markerHeight="5" refX="4.5" refY="2.5" orient="auto">
                            <path d="M0,0 L5,2.5 L0,5 Z" fill="#c72317" stroke="#fff" strokeWidth=".35" />
                          </marker>
                        </defs>
                        <line x1={from[0]} y1={from[1]} x2={to[0]} y2={to[1]} stroke="#fff"
                          strokeWidth="8" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                        <line x1={from[0]} y1={from[1]} x2={to[0]} y2={to[1]} stroke="#c72317"
                          strokeWidth="4.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" markerEnd={`url(#${marker})`} />
                      </svg>
                    </div>
                    <figcaption>{t.screenshot} · {guide.caption}</figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
          <div className="support-actions">
            {index === 4 ? (
              <a href="https://www.pikobuy.com/register?invitedCode=KPNJVF&inviteUserId=1109716" target="_blank" rel="noopener">Join pikobuy</a>
            ) : (
              <a href={index === 0 ? catalogHref(code, { q: "7711451421" }) : productHref(code, "7711451421")}>
                {index === 0 ? guide.steps[0][0] : t.example}
              </a>
            )}
            {sourceLink(code, guideSourceIndices[index])}
          </div>
        </section>
      ))}
      <SourceList code={code} />
    </main>
  );
}

export function FAQPage({ code }: { code: string }) {
  const t = supportCopy(code);
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.flatMap(group => group.items.map(([question, answer]) => ({
      "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer },
    }))),
  };
  return (
    <main className="support-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <h1>{t.faqTitle}</h1>
      <p className="support-intro">{t.faqIntro}</p>
      <nav className="support-toc">
        {t.faq.map((group, index) => <a key={index} href={`#faq-${index + 1}`}>{group.title}</a>)}
      </nav>
      {t.faq.map((group, index) => (
        <section className="support-faq-group" id={`faq-${index + 1}`} key={index}>
          <h2>{group.title}</h2>
          {group.items.map(([question, answer], position) => {
            const sourceIndex = officialSources.findIndex(([key]) => key === faqSources[index][position]);
            return <details className="support-faq-item" key={position}>
              <summary>{question}</summary>
              <div>
                <p>{answer}</p>
                {sourceIndex >= 0 && sourceLink(code, sourceIndex)}
              </div>
            </details>;
          })}
        </section>
      ))}
      <SourceList code={code} />
    </main>
  );
}
