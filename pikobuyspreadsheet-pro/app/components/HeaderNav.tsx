import { getFeatureLabel, getHomeLabel, getLocale, getLocalizedGuideTitle } from "../../lib/site-data";

export default function HeaderNav({ localeCode = "en", currentSlug }: { localeCode?: string; currentSlug?: string }) {
  const locale = getLocale(localeCode) ?? getLocale("en")!;
  return <nav aria-label="Primary navigation">
    <a className={!currentSlug?"current":""} href={`/${locale.code}/`}>{getHomeLabel(locale.code)}</a>
    <a className={currentSlug==="product-categories"?"current":""} href={`/${locale.code}/product-categories/`}>{getFeatureLabel(locale.code,"productCategories")}</a>
    <a className={currentSlug==="product-details"?"current":""} href={`/${locale.code}/product-details/`}>{getFeatureLabel(locale.code,"productDetails")}</a>
    <a className={currentSlug==="seo-articles"?"current":""} href={`/${locale.code}/seo-articles/`}>{getFeatureLabel(locale.code,"seoArticles")}</a>
    <a className={currentSlug==="guides"?"current":""} href={`/${locale.code}/guides/`}>{locale.guidesLabel}</a>
    <a className={currentSlug==="sources"?"current":""} href={`/${locale.code}/sources/`}>{locale.sourcesLabel}</a>
    <a className={currentSlug==="faq"?"current":""} href={`/${locale.code}/faq/`}>{getLocalizedGuideTitle(locale.code,"faq")}</a>
  </nav>;
}
