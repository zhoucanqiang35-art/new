import { ContentLayout, PageSearchParams, SourceNote } from "../content-layout";
import { normalizeLanguage } from "../i18n";
import { createPageMetadata } from "../seo";

const faqs = [
  {
    question: "What is a PikoBuy spreadsheet?",
    answer: "It is an independent product-discovery index that groups candidate seller links and product details. It can shorten the first search, but it does not freeze price, availability, seller options or product condition. Reopen the live listing and compare the actual PikoBuy order before paying.",
  },
  {
    question: "Does PikoBuy sell the products shown in the spreadsheet?",
    answer: "PikoBuy’s User Agreement says its search and display service surfaces seller links and that PikoBuy is not the actual seller or sales platform. Product claims, seller performance and current options still need to be checked against the third-party listing.",
  },
  {
    question: "How does the PikoBuy buying process work?",
    answer: "The official beginner guide describes six stages: choose the item, search by link or keywords, select options and make the first payment, wait for warehouse inspection and photos, select a shipping route and pay freight, then wait for tracking and delivery.",
  },
  {
    question: "Is the price in a PikoBuy spreadsheet guaranteed?",
    answer: "No. PikoBuy’s beginner guide says prices are subject to the actual purchase. Seller changes, option-specific pricing, currency conversion and settlement timing can change the amount. Spreadsheet prices should be treated as dated research references rather than checkout promises.",
  },
  {
    question: "What should I check in PikoBuy QC photos?",
    answer: "First match the photographed item to the submitted color, size, quantity and variant. Then request category-specific evidence, such as clothing measurements, shoe profiles and insole length, accessory dimensions or an electronics model label. Photos show visible evidence; they do not prove authenticity, internal performance or long-term durability.",
  },
  {
    question: "Can I request extra warehouse photos?",
    answer: "PikoBuy’s shipping terms say buyers can use the inspection photos or purchase additional detailed photos. Ask for one precise angle, close-up or measurement that could change the decision. The same policy warns that special and professional products may not receive professional inspection.",
  },
  {
    question: "How long is the PikoBuy warehouse return window?",
    answer: "The current Returns & Exchanges page says an eligible request can be submitted within five days after the status changes to In Warehouse. It counts from the next hour and defines the period as 120 hours. Timing alone does not guarantee acceptance; seller agreement, eligibility and product condition still matter.",
  },
  {
    question: "What does an unconditional warehouse return cost?",
    answer: "PikoBuy currently publishes the formula as return shipping to the seller, the seller’s original domestic shipping fee and a RMB 5 service fee. The page says the first domestic shipping fee can still apply when the seller originally advertised free shipping. Use the live policy when making a request.",
  },
  {
    question: "What information is needed to estimate PikoBuy shipping?",
    answer: "PikoBuy’s public estimator asks for destination country or region, product type, weight, length, width and height. Use realistic packed values. The live parcel screen remains the place to check current route eligibility, billing method, delivery estimate and total.",
  },
  {
    question: "Does PikoBuy guarantee international delivery or customs clearance?",
    answer: "No. PikoBuy’s shipping terms say international parcels use third-party logistics providers and identify customs, confiscation, damage, loss and peak-season delay as risks. Buyers must check destination laws, prohibited items and live route terms before dispatch.",
  },
];

export const metadata = createPageMetadata({
  title: "PikoBuy Spreadsheet FAQ: QC, Shipping, Fees & Returns",
  description: "Clear, source-linked answers about PikoBuy spreadsheets, prices, warehouse QC photos, the 120-hour return window, shipping inputs and logistics risk.",
  path: "/faq",
});

export default async function FaqPage({ searchParams }: PageSearchParams) {
  const language = normalizeLanguage((await searchParams).lang);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return <ContentLayout language={language} pathname="/faq" extraSchema={faqSchema} kicker="FAQ / SOURCE-CHECKED ANSWERS" title="PikoBuy spreadsheet questions, answered without shortcuts." intro="These answers separate PikoBuy’s published rules from independent buying judgment. Route availability, prices and policies can change, so important claims link back to their primary source." tone="pink">
    <section className="content-section">
      <div className="faq-list">{faqs.map(({ question, answer }, index) => <details key={question} open={index === 0}><summary><span>{String(index + 1).padStart(2, "0")}</span><h2>{question}</h2><i aria-hidden="true">+</i></summary><p>{answer}</p></details>)}</div>
      <SourceNote><a href="https://www.pikobuy.com/guide" target="_blank" rel="noopener noreferrer">PikoBuy Beginner’s Guide</a>, <a href="https://www.pikobuy.com/protocol/returns" target="_blank" rel="noopener noreferrer">Returns &amp; Exchanges</a>, <a href="https://www.pikobuy.com/protocol/shipping" target="_blank" rel="noopener noreferrer">Shipping terms</a> and <a href="https://www.pikobuy.com/protocol/user" target="_blank" rel="noopener noreferrer">User Agreement</a>, rechecked 10 August 2026.</SourceNote>
    </section>
  </ContentLayout>;
}
