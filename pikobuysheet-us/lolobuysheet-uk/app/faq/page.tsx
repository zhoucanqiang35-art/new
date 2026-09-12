"use client";
import { SiteHeader } from "@/components/site-header";
import { useSearchParams } from "next/navigation";
import { getLang, siteLabels, t } from "@/lib/site-language";
import { faqContent } from "@/lib/site-content";
const legacyFaqs = [
  [
    "Is this the official LoloBuy website?",
    "No. This is an independent research preview. It does not take orders, process payments or provide LoloBuy customer support.",
  ],
  [
    "What does LoloBuy publicly say it does?",
    "Its public homepage says it can assist with purchasing products from Chinese online and offline channels, offer warehouse storage, allow items to be submitted as one parcel, and provide global shipping. Check the platform directly for current account-level options.",
  ],
  [
    "Does warehouse consolidation guarantee lower shipping cost?",
    "No. Consolidation is a parcel choice, not a universal saving. Use the current checkout quote for your items, destination and chosen service; do not rely on old screenshots or another person’s order.",
  ],
  [
    "Can this site confirm product quality or authenticity?",
    "No. A listing image or note is not a guarantee. Review the current listing, options, measurements and any available evidence before deciding.",
  ],
  [
    "Can you promise delivery time or customs clearance?",
    "No. Delivery estimates, carrier operations and border processes can change and are outside this independent guide’s control.",
  ],
  [
    "Where does the database search go?",
    "Searches and database actions go only to FindSpreadsheet, using the words you enter. They open a research result, not a purchase confirmation.",
  ],
  [
    "What should I save before submitting a parcel?",
    "Keep the listing title or URL, selected option, size or variant, order details, parcel contents and the current shipping confirmation. Dated notes make later comparison easier.",
  ],
  [
    "Which languages does this preview support?",
    "The selector offers English, Dutch, German, French, Spanish, Italian, Polish, Portuguese and Swedish. Each route keeps the same page structure while you browse.",
  ],
];
export default function FAQ() {
  const lang = getLang(useSearchParams().get("lang"));
  const x = t(lang);
  const labels = siteLabels(lang);
  const faqs = faqContent(lang);
  return (
    <main>
      <SiteHeader />
      <section className="inner prose">
        <p className="eyebrow">{x.c[0].toUpperCase()}</p>
        <h1>{x.c[14]}</h1>
        <p>
          {x.c[2]}
        </p>
        <div className="faq">
          {faqs.map((item) => (
            <article key={item.question}>
              <h2>{item.question}</h2>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
        <p className="source-note">
          {labels.sourceNote}
        </p>
      </section>
    </main>
  );
}
