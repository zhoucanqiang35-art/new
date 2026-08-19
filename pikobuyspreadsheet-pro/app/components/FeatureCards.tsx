import { getFeatureLabel, type Locale } from "../../lib/site-data";
import { getUi } from "../../lib/i18n";

const featureCards = [
  {key:"productCategories" as const,slug:"product-categories",number:"01",eyebrow:"10 CATEGORY CHECKLISTS",symbol:"◫"},
  {key:"productDetails" as const,slug:"product-details",number:"02",eyebrow:"6 FACT-CHECKED RECORDS",symbol:"◎"},
  {key:"seoArticles" as const,slug:"seo-articles",number:"03",eyebrow:"3 LONG-FORM GUIDES",symbol:"¶"},
];

export default function FeatureCards({locale}:{locale:Locale}){
  const ui=getUi(locale.code);
  return <section className="feature-entry v3-wrap">
    <div className="v3-section-head"><div><span>{ui.contentRoutes.toUpperCase()} / {locale.code.toUpperCase()}</span><h2>{ui.choosePage}</h2></div><p>{locale.intro}</p></div>
    <div className="feature-entry-grid">
      {featureCards.map(card=><a href={`/${locale.code}/${card.slug}/`} key={card.slug}><span>{card.number}</span><i>{card.symbol}</i><small>{getFeatureLabel(locale.code,card.key).toUpperCase()}</small><h3>{getFeatureLabel(locale.code,card.key)}</h3><p>{locale.intro}</p><b>{ui.open} →</b></a>)}
    </div>
  </section>;
}
