import { notFound } from "next/navigation";
import { buyerGuides } from "./guide-data";
import { getFaqItems, getUiCopy } from "./i18n";
import { mainCategories } from "./product-data";
import { seoArticles } from "./seo-content";
import { localePath, PageFrame, sectionTitles } from "./site-shell";
import { officialUpdates } from "./update-data";

function PageHero({ eyebrow, title, lead, checked = "Sources checked July 30, 2026", checkedNote = "Official facts and editorial guidance are labelled separately." }: { eyebrow: string; title: string; lead: string; checked?: string; checkedNote?: string }) {
  return (
    <section className="subpage-hero">
      <p className="kicker">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{lead}</p>
      <div className="verified-strip"><span>✓</span><b>{checked}</b><small>{checkedNote}</small></div>
    </section>
  );
}

function ArticleCards({ locale }: { locale: string }) {
  return (
    <div className="article-card-grid">
      {seoArticles.map((article, index) => (
        <a className="article-card" href={localePath(locale, `/seo-articles/${article.slug}`)} key={article.slug}>
          <small>0{index + 1} · {article.readTime}</small>
          <h2>{article.title}</h2>
          <p>{article.dek}</p>
          <span>Read fact-checked article →</span>
        </a>
      ))}
    </div>
  );
}

function GuideRoadmap({ locale }: { locale: string }) {
  return (
    <div className="guide-roadmap">
      {buyerGuides.map((guide, index) => (
        <a href={localePath(locale, `/guides/${guide.slug}`)} key={guide.slug}>
          <small>{String(index + 1).padStart(2, "0")} · {guide.stage}</small>
          <div>
            <h2>{guide.title}</h2>
            <p>{guide.summary}</p>
          </div>
          <span><b>{guide.readTime}</b>Open practical checklist →</span>
        </a>
      ))}
    </div>
  );
}

export function StandalonePage({ section, locale = "en" }: { section: string; locale?: string }) {
  if (!sectionTitles[section]) notFound();
  const currentPath = `/${section}`;
  const ui = getUiCopy(locale);

  if (section === "spreadsheet") {
    return (
      <PageFrame locale={locale} currentPath={currentPath}>
        <PageHero eyebrow="Independent product research" title="LoloBuy Spreadsheet" lead="A useful spreadsheet should show what was checked, when it was checked and which claims remain unverified." />
        <section className="content-shell">
          <div className="fact-banner"><b>What “checked” means here</b><p>A visible seller link, category, reference price and review date were inspected. It does not guarantee stock, authenticity, seller performance or future price.</p></div>
          <div className="editorial-grid">
            <a href={localePath(locale, "/seo-articles/how-lolobuy-works")}><span>01</span><h2>Start with the source</h2><p>Open the original marketplace listing, confirm the variation and save the link before sending it to LoloBuy.</p><strong>Read the complete guide →</strong></a>
            <a href={localePath(locale, "/seo-articles/lolobuy-shipping-cost-guide")}><span>02</span><h2>Budget beyond product price</h2><p>Separate domestic delivery, optional services and international freight. The official workflow uses two payment stages.</p><strong>Read the complete guide →</strong></a>
            <a href={localePath(locale, "/seo-articles/lolobuy-qc-photos-guide")}><span>03</span><h2>Review warehouse evidence</h2><p>Use QC photos to check visible order details, not to claim authenticity or hidden product performance.</p><strong>Read the complete guide →</strong></a>
          </div>
          <div className="page-cta"><div><small>INTERACTIVE HOME DATABASE</small><h2>Search the current review set</h2></div><a className="button primary" href={localePath(locale, "/#spreadsheet")}>Open spreadsheet →</a></div>
        </section>
      </PageFrame>
    );
  }

  if (section === "categories") {
    return (
      <PageFrame locale={locale} currentPath={currentPath}>
        <PageHero eyebrow="Browse with intent" title="LoloBuy Product Categories" lead="Ten practical starting points, each leading to a broader search rather than pretending one short list is complete." />
        <section className="content-shell">
          <div className="standalone-category-grid">
            {mainCategories.map((category, index) => (
              <a href={category.href} target="_blank" rel="noreferrer" key={category.name}>
                <small>{String(index + 1).padStart(2, "0")}</small><h2>{category.name}</h2><p>{category.note}</p><span>Open full main-site category ↗</span>
              </a>
            ))}
          </div>
        </section>
      </PageFrame>
    );
  }

  if (section === "guides") {
    return (
      <PageFrame locale={locale} currentPath={currentPath}>
        <PageHero eyebrow="Operational checklists" title="LoloBuy Buyer Guides" lead="Five concise workflows for decisions you need to make now: before payment, at warehouse arrival, during parcel planning, when a return is possible and before storage time runs out." />
        <section className="content-shell">
          <div className="fact-banner">
            <b>Guides are not SEO articles</b>
            <p>Each guide is a short, stage-based checklist with a concrete outcome. For background, policy conflicts and full explanations, use the separate long-form SEO Articles centre.</p>
          </div>
          <GuideRoadmap locale={locale} />
        </section>
      </PageFrame>
    );
  }

  if (section === "seo-articles") {
    return (
      <PageFrame locale={locale} currentPath={currentPath}>
        <PageHero eyebrow="Long-form research" title="LoloBuy SEO Articles" lead="Human-written, source-based articles built to answer complete search questions—not short paragraphs padded with keywords." />
        <section className="content-shell">
          <div className="fact-banner"><b>Editorial standard</b><p>Each article is based on LoloBuy’s official help centre or notices, shows a verification date and flags contradictions or changing information instead of hiding them.</p></div>
          <ArticleCards locale={locale} />
        </section>
      </PageFrame>
    );
  }

  if (section === "updates") {
    return (
      <PageFrame locale={locale} currentPath={currentPath}>
        <PageHero eyebrow="Official-source timeline" title="LoloBuy Updates" lead="Recent platform announcements translated into the question that matters: what should a shopper check or do differently?" />
        <section className="content-shell">
          <div className="update-list">
            {officialUpdates.map((update) => (
              <article key={update.title}>
                <small>{update.category} · {update.date}</small>
                <h2>{update.title}</h2>
                <p>{update.summary}</p>
                <div className="update-list-foot">
                  <a href={localePath(locale, `/updates/${update.slug}`)}>Read the complete update →</a>
                  <span>{update.sections.length} practical sections · source checked</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </PageFrame>
    );
  }

  return (
    <PageFrame locale={locale} currentPath={currentPath}>
      <PageHero eyebrow={ui.faqEyebrow} title={ui.faqTitle} lead={ui.faqLead} checked={ui.checked} checkedNote={ui.checkedNote} />
      <section className="content-shell faq-page-list">
        <div className="fact-banner faq-fact-banner"><b>{ui.sourcePolicy}</b><p>{ui.sourceNote}</p></div>
        {getFaqItems(locale).map((item, index) => (
          <details key={item.question} open={index === 0}>
            <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.question}<i>+</i></summary>
            <div className="faq-answer"><p>{item.answer}</p><a href={item.sourceHref} target="_blank" rel="noreferrer">{item.sourceLabel} ↗</a></div>
          </details>
        ))}
      </section>
    </PageFrame>
  );
}
