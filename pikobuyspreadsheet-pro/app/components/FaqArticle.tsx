import { getLocalizedGuideTitle, type Locale } from "../../lib/site-data";
import { getUi } from "../../lib/i18n";

const faqItems = [
  {
    question: "Is this the official PikoBuy website?",
    answer: "No. This is an independent product-research and spreadsheet guide for FindSpreadsheet. It is not operated by, endorsed by or affiliated with PikoBuy. Account access, payments, order changes and support must always be handled through the official platform environment you use independently.",
    source: "Site disclosure",
  },
  {
    question: "What PikoBuy functions are confirmed by public official material?",
    answer: "The public beginner, shipping-estimate, return and forwarding materials describe a workflow that includes importing or finding a listing, purchase handling, warehouse check-in, photo review, parcel submission and international tracking. Availability, fees and route details can change, so re-check the current official screen before paying.",
    source: "Official basis: homepage, Beginner's Guide, Shipping Estimate, Returns & Exchanges",
  },
  {
    question: "How should I start with a product found through a spreadsheet?",
    answer: "Open the FindSpreadsheet product record, compare the title, options and source information, then reopen the original listing in the purchase environment. Confirm size, colour, model, quantity and seller terms before submitting anything. A spreadsheet row is a research lead, not a purchase guarantee.",
    source: "Official basis: Beginner's Guide steps 1–3",
  },
  {
    question: "What can PikoBuy QC photos and inspection feedback confirm?",
    answer: "Warehouse images can help confirm visible details such as colour, printed graphics, labels, obvious damage, dimensions and whether the received option appears to match the order. Useful angles depend on the product category, so request additional evidence when the standard views do not answer a visible question.",
    source: "Official basis: Beginner's Guide step 4 and Shipping Terms",
  },
  {
    question: "Do QC photos prove authenticity, materials or long-term quality?",
    answer: "No. Photos show only what is visible in the image. They do not prove authenticity, internal components, fabric composition, battery condition, durability or future performance. Treat them as one evidence layer and avoid conclusions that the photographs cannot support.",
    source: "Editorial boundary based on the published inspection scope",
  },
  {
    question: "Does the product price equal the delivered cost?",
    answer: "Usually not. The delivered total can include the product price, domestic seller shipping, optional services, return-related charges, packaging, international freight and destination taxes or customs charges. Compare the complete cost path rather than judging a find by the listing price alone.",
    source: "Official basis: Beginner's Guide and Returns & Exchanges",
  },
  {
    question: "Are PikoBuy shipping prices fixed?",
    answer: "Shipping results depend on destination, product type, route, parcel weight and dimensions. Estimates can change after warehouse measurements, packaging choices or route restrictions are applied. Use the warehouse parcel data for the most meaningful comparison before submission.",
    source: "Official basis: Shipping Estimate and Beginner's Guide step 5",
  },
  {
    question: "Are delivery estimates guaranteed?",
    answer: "No. Published delivery ranges are estimates. Carrier hand-offs, customs processing, weather, peak periods and local delivery conditions can affect timing. Avoid planning a time-sensitive event around the fastest displayed estimate.",
    source: "Official basis: Shipping Terms logistics risks",
  },
  {
    question: "Can I combine several warehouse items into one parcel?",
    answer: "PikoBuy publicly says it centrally manages orders from different sources and its beginner guide describes submitting a parcel after items reach the warehouse. Whether particular items can be combined depends on the live account, product restrictions and available routes. Confirm eligibility before assuming consolidation will save money.",
    source: "Official basis: public homepage and Beginner's Guide steps 4–5",
  },
  {
    question: "What should I do when tracking does not update?",
    answer: "First distinguish an order moving to the warehouse from an international parcel that has already been dispatched. After dispatch, use the tracking number shown in the account and allow time for the first carrier scan. If the delay exceeds the platform's published expectation, contact official support with the parcel details.",
    source: "Official basis: Beginner's Guide step 6",
  },
  {
    question: "Does PikoBuy guarantee customs clearance or no seizure?",
    answer: "No independent guide can guarantee customs clearance. Import rules, declarations, restricted goods, taxes and inspections depend on the destination and the parcel. Check the current rules that apply to you and avoid any product or route that may be restricted.",
    source: "Official basis: Shipping Terms logistics risks",
  },
  {
    question: "Does this guide support multiple languages and currencies?",
    answer: "This research site provides 24 language routes for easier navigation. Product displays use US-dollar reference prices where available, but exchange rates and checkout totals can change. Always confirm the live amount and currency in the transaction environment before paying.",
    source: "This site's language and price policy",
  },
  {
    question: "Which countries use PikoBuy the most?",
    answer: "PikoBuy does not publish an audited country-by-country customer table. This site therefore prioritises the United States, United Kingdom, Canada and large European markets based on Western search intent and public market signals, without presenting those signals as verified user-share statistics.",
    source: "Methodology note: no audited official country-share table found",
  },
  {
    question: "Where do product and category links on this site go?",
    answer: "Product discovery, category and search links are designed to lead only to FindSpreadsheet. Research pages, sources and FAQs stay inside this independent site. This prevents the guide from sending visitors to unrelated spreadsheet or product-discovery websites.",
    source: "This site's outbound-link policy",
  },
];

const headings: Record<string, string> = {
  en: "Frequently asked questions", de: "Häufig gestellte Fragen", fr: "Questions fréquentes", es: "Preguntas frecuentes",
  pl: "Najczęściej zadawane pytania", it: "Domande frequenti", pt: "Perguntas frequentes", nl: "Veelgestelde vragen",
  cs: "Časté dotazy", sk: "Často kladené otázky", ro: "Întrebări frecvente", hu: "Gyakori kérdések",
  sv: "Vanliga frågor", da: "Ofte stillede spørgsmål", no: "Ofte stilte spørsmål", fi: "Usein kysytyt kysymykset",
  el: "Συχνές ερωτήσεις", tr: "Sık sorulan sorular", hr: "Česta pitanja", bg: "Често задавани въпроси",
  uk: "Поширені запитання", lt: "Dažniausiai užduodami klausimai", sl: "Pogosta vprašanja", et: "Korduma kippuvad küsimused",
};

export default function FaqArticle({ locale }: { locale: Locale }) {
  const ui=getUi(locale.code);
  const topics=["sources","guides","search","qc-photos","qc-photos","shipping","shipping","shipping","shipping","tracking","shipping","guides","sources","categories"];
  return <section className="faq-page-shell v3-wrap">
    <div className="faq-page-head">
      <p className="faq-page-kicker">05 / {locale.name.toUpperCase()}</p>
      <h1>{headings[locale.code] ?? headings.en}</h1>
      <p>{locale.code === "en" ? "Clear answers before you choose a product, inspect warehouse evidence or submit a parcel." : locale.intro}</p>
    </div>
    <div className="faq-page-rule" />
    <div className="faq-page-list">
      {faqItems.map((item, index) => <details key={item.question} open={index === 0}>
        <summary><span>{String(index + 1).padStart(2, "0")}</span><b>{locale.code==="en"?item.question:`${ui.question} ${index+1}: ${getLocalizedGuideTitle(locale.code,topics[index])}`}</b></summary>
        <div className="faq-answer"><p>{locale.code==="en"?item.answer:`${locale.intro} ${locale.independent}. ${ui.recheck}`}</p><small className="faq-source-note">{locale.code==="en"?item.source:locale.sourcesLabel}</small>{locale.code!=="en"&&<details className="faq-original"><summary>{ui.originalEnglish}</summary><p lang="en"><b>{item.question}</b><br/>{item.answer}</p><small lang="en">{item.source}</small></details>}</div>
      </details>)}
    </div>
  </section>;
}
