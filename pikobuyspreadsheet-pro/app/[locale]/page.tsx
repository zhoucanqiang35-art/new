import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFeatureLabel, getLocale, getLocalizedGuideTitle, guideDefs, locales } from "../../lib/site-data";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Brand from "../components/Brand";
import HeaderNav from "../components/HeaderNav";
import MobileFold from "../components/MobileFold";
import ProductSearch from "../components/ProductSearch";
import FeatureCards from "../components/FeatureCards";
import { getUi } from "../../lib/i18n";

export function generateStaticParams() { return locales.map(({ code }) => ({ locale: code })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { const { locale: code } = await params; const locale = getLocale(code); if (!locale) return {}; return { title: `PikoBuy Spreadsheet — ${locale.name} Guide`, description: locale.intro, robots: { index: false, follow: false }, alternates: { canonical: `/${locale.code}/`, languages: Object.fromEntries(locales.map(item => [item.lang, `/${item.code}/`])) } }; }

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: code } = await params; const locale = getLocale(code); if (!locale) notFound();
  const ui=getUi(locale.code);
  return <main className="v3 v3-locale" id="top" lang={locale.lang}>
    <div className="v3-review">{locale.independent.toUpperCase()} · {ui.review.toUpperCase()} · NOINDEX</div>
    <header className="v3-header v3-wrap"><Brand href={`/${locale.code}/`} /><HeaderNav localeCode={locale.code} /><LanguageSwitcher current={locale.code} /></header>
    <section className="v3-locale-hero v3-wrap"><div><p className="v3-kicker"><i></i>{locale.checked.toUpperCase()}</p><h1>{locale.headline}</h1><p>{locale.intro}</p><ProductSearch id={`search-${locale.code}`} label={locale.browse} button={locale.browse} localeCode={locale.code}/></div><div className="v3-locale-panel"><span>{locale.guidesLabel.toUpperCase()} / {locale.code.toUpperCase()}</span><a href={`/${locale.code}/product-categories/`}><b>01</b>{getFeatureLabel(locale.code,"productCategories")}<strong>→</strong></a><a href={`/${locale.code}/product-details/`}><b>02</b>{getFeatureLabel(locale.code,"productDetails")}<strong>→</strong></a><a href={`/${locale.code}/seo-articles/`}><b>03</b>{getFeatureLabel(locale.code,"seoArticles")}<strong>→</strong></a><a href={`/${locale.code}/guides/`}><b>04</b>{getLocalizedGuideTitle(locale.code,"guides")}<strong>→</strong></a><a href={`/${locale.code}/sources/`}><b>05</b>{getLocalizedGuideTitle(locale.code,"sources")}<strong>→</strong></a><a href={`/${locale.code}/faq/`}><b>06</b>{getLocalizedGuideTitle(locale.code,"faq")}<strong>→</strong></a></div></section>
    <FeatureCards locale={locale}/>
    <MobileFold title={locale.guidesLabel}><section className="v3-guides" id="guides"><div className="v3-wrap"><div className="v3-section-head"><div><span>{locale.guidesLabel.toUpperCase()} / {locale.code.toUpperCase()}</span><h2>{locale.guidesLabel}</h2></div><p>{locale.intro}</p></div><div className="v3-guide-grid">{guideDefs.map((guide,index)=><a href={`/${locale.code}/${guide.slug}/`} key={guide.slug}><span>{String(index+1).padStart(2,"0")}</span><small>{locale.name}</small><h3>{getLocalizedGuideTitle(locale.code,guide.slug)}</h3><p>{locale.intro}</p><b>{locale.guidesLabel} →</b></a>)}</div></div></section></MobileFold>
    <MobileFold title={locale.sourcesLabel}><section className="v3-ledger" id="sources"><div className="v3-wrap"><div><span>{locale.sourcesLabel.toUpperCase()}</span><h2>{getLocalizedGuideTitle(locale.code,"sources")}</h2><p>{locale.intro}</p></div><div><a href={`/${locale.code}/how-to-use/`}><span>01</span><b>{getLocalizedGuideTitle(locale.code,"how-to-use")}</b><small>{locale.intro}</small><strong>→</strong></a><a href={`/${locale.code}/guides/`}><span>02</span><b>{getLocalizedGuideTitle(locale.code,"guides")}</b><small>{locale.intro}</small><strong>→</strong></a><a href={`/${locale.code}/shipping/`}><span>03</span><b>{getLocalizedGuideTitle(locale.code,"shipping")}</b><small>{locale.intro}</small><strong>→</strong></a><a href={`/${locale.code}/returns/`}><span>04</span><b>{getLocalizedGuideTitle(locale.code,"returns")}</b><small>{locale.intro}</small><strong>→</strong></a></div></div></section></MobileFold>
    <footer className="v3-footer"><div className="v3-wrap"><Brand href={`/${locale.code}/`} /><p>{locale.independent}. {locale.intro}</p><div><a href="https://findspreadsheet.com/" target="_blank" rel="noreferrer">FindSpreadsheet ↗</a><a href={`/${locale.code}/sources/`}>{locale.sourcesLabel}</a><a href="#top">↑</a></div></div></footer>
  </main>;
}
