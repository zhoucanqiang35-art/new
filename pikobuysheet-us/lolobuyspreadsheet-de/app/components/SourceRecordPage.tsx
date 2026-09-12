import Link from "next/link";
import SiteHeader from "./SiteHeader";
import { localizedPath, type Locale } from "../data/locales";
import { uiCopy } from "../data/ui-copy";
import { tr } from "../data/translate";

type RecordKey = "platform-materials" | "app-listing";

const records = {
  "platform-materials": {
    label: "SOURCE RECORD 01",
    title: "Platform materials review",
    deck: "How public platform descriptions are used without turning marketing language into unsupported promises.",
    sections: [
      ["What this record can support", "The LoloBuy public website states that products receive a comprehensive quality inspection, that inspection feedback is sent to customers and that the platform provides global shipping. These statements support cautious descriptions of an inspection-and-shipping workflow. The wording on this site stays general because the page does not establish parcel-specific prices, route availability or outcomes."],
      ["What this record cannot support", "A platform description does not prove a fixed shipping price, guaranteed delivery date, customs outcome, product authenticity, item quality or country-level user share. Those claims require different evidence and are not inferred here."],
      ["How the information is applied", "Editorial pages use platform statements only as a starting point. Practical advice—such as checking variants, reviewing QC images and verifying a live parcel quote—is clearly presented as an independent checking method."],
      ["Outbound-link decision", "The original third-party source is intentionally not linked. This preserves the site's traffic policy while keeping a transparent internal record of the evidence category that was reviewed."],
    ],
  },
  "app-listing": {
    label: "SOURCE RECORD 02",
    title: "App listing review",
    deck: "What an official storefront listing can establish, and where its evidential limits begin.",
    sections: [
      ["What storefront metadata can indicate", "The official LoloBuy listings on Google Play and Apple's App Store describe a cross-border e-commerce platform with shopping guidance, Chinese-product discovery and purchasing, payment support, multilingual or multi-currency support and international shipping. The records reviewed were updated on 29 July 2026."],
      ["Availability is not usage", "Storefront availability does not prove how many people in a country actively use the service. This site therefore does not convert country availability into invented traffic percentages or market rankings."],
      ["Descriptions are not guarantees", "Statements in an app description do not establish universal fees, permanent route availability, delivery performance or customs treatment. Parcel-level variables still need a live check before submission."],
      ["How this affects market pages", "Language and storefront signals help prioritize editorial coverage, but country pages must avoid unsupported claims. The Markets page explains the resulting rollout logic separately."],
    ],
  },
} satisfies Record<RecordKey, { label: string; title: string; deck: string; sections: string[][] }>;

export function isRecord(value: string): value is RecordKey { return value in records; }

export default function SourceRecordPage({ locale, record }: { locale: Locale; record: RecordKey }) {
  const data = records[record];
  const ui = uiCopy(locale);
  return <main lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
    <SiteHeader locale={locale} active="sources" suffix={`sources/${record}`} />
    <article className="record-shell section-shell">
      <div className="record-hero"><p className="eyebrow">{tr(locale, data.label)} · {tr(locale, "Reviewed 18 Aug 2026")}</p><h1>{tr(locale, data.title)}</h1><p>{tr(locale, data.deck)}</p></div>
      <div className="record-grid"><aside><p>{tr(locale, "Record status")}</p><strong>{tr(locale, "Editorial review")}</strong><p>{tr(locale, "Outbound source link")}</p><strong>{tr(locale, "Not provided")}</strong><p>{tr(locale, "Claim standard")}</p><strong>{tr(locale, "Cautious / attributed")}</strong></aside><div>{data.sections.map(([heading, text], i) => <section key={heading}><span>{String(i + 1).padStart(2, "0")}</span><h2>{tr(locale, heading)}</h2><p>{tr(locale, text)}</p></section>)}</div></div>
      <div className="record-actions"><Link href={localizedPath(locale, "sources")}>← {ui.backToSources}</Link><a href="https://findspreadsheet.com/" target="_blank" rel="noreferrer">{ui.openDatabase} ↗</a></div>
    </article>
    <footer><div className="section-shell footer-inner"><div><img className="footer-logo" src="/LolobuyLogo.svg" alt="LoloBuy" /></div><p>{ui.footer}</p><div><Link href={localizedPath(locale)}>{ui.home}</Link><Link href={localizedPath(locale, "sources")}>{ui.backToSources}</Link></div></div></footer>
  </main>;
}
