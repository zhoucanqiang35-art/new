import { localePath, PageFrame } from "./site-shell";

export const trustPageContent = {
  about: {
    eyebrow: "Who we are",
    title: "About LoloBuy Sheet",
    lead: "An independent research site that helps shoppers evaluate product links, warehouse QC information and shipping decisions with clearer evidence boundaries.",
    sections: [
      ["Our purpose", "LoloBuy Sheet organizes product discovery, practical checklists and source-based explanations for shoppers using purchasing agents. We link to the broader findspreadsheet.com database while keeping research and shopping links clearly separated."],
      ["Independence", "This website is not LoloBuy and is not presented as an official LoloBuy service. Live account rules, checkout totals, warehouse deadlines and platform policies must always be confirmed on the relevant official page."],
      ["What we do not promise", "A listed product does not guarantee stock, authenticity, seller performance, customs clearance, delivery time or a refund. Product prices are dated references and can change."],
    ],
  },
  "editorial-methodology": {
    eyebrow: "How content is made",
    title: "Editorial Methodology",
    lead: "A public standard for sources, verification dates, corrections and the line between official facts and editorial advice.",
    sections: [
      ["Primary-source first", "Platform-process claims are checked against LoloBuy help-centre pages or official notices. Product records are checked against the corresponding source page on findspreadsheet.com."],
      ["Dates and conflicts", "Every guide or article shows when its sources were reviewed. When official pages conflict, both versions are described and readers are directed to the live account page rather than being given a false certainty."],
      ["Editorial boundaries", "Recommendations are labelled as practical guidance. We do not convert QC photos into authenticity claims, shipping estimates into guarantees, or a spreadsheet entry into a claim of permanent availability."],
      ["Corrections", "Material errors are corrected in the article and its verification date is updated. Time-sensitive prices, routes and policies are rechecked before they are presented as current."],
    ],
  },
  contact: {
    eyebrow: "Questions and corrections",
    title: "Contact",
    lead: "Use the public support channel below for factual corrections, source questions, product-link issues, rights requests or cooperation enquiries.",
    sections: [
      ["What to include", "Send the exact LoloBuy Sheet URL, the sentence or product record concerned, and a link or screenshot showing the corrected information. Do not send passwords, payment credentials, identity documents or private account data."],
      ["Public support channel", "The FindsSpreadsheet team provides its current WhatsApp contact on the main database homepage. Response time is not guaranteed, but clear source-backed correction requests are prioritized."],
    ],
    action: ["Open the published WhatsApp contact", "https://wa.me/8613348577706"],
  },
  privacy: {
    eyebrow: "Visitor information",
    title: "Privacy",
    lead: "A plain-language summary of what this informational site uses and what visitors should avoid sharing.",
    sections: [
      ["Basic technical data", "The hosting and security provider may process standard request information such as IP address, browser type, requested URL and security signals to deliver the site, prevent abuse and measure reliability."],
      ["No checkout or account collection", "LoloBuy Sheet does not ask for LoloBuy credentials, payment-card information or identity documents. Shopping and account actions take place on the linked external service, under that service’s own privacy terms."],
      ["External links", "Links to LoloBuy, findspreadsheet.com and other sources open third-party websites. Their privacy, cookies and data handling are controlled by those sites, not by LoloBuy Sheet."],
    ],
  },
  "affiliate-disclosure": {
    eyebrow: "Commercial transparency",
    title: "Affiliate Disclosure",
    lead: "How external product and platform links relate to this independent research site.",
    sections: [
      ["External links", "Some outbound product or platform links may support the broader site network through referral attribution or commercial cooperation. A referral relationship does not change the listed product price unless the destination explicitly says otherwise."],
      ["Editorial separation", "Commercial relationships do not turn promotional claims into facts. Official process claims still require an official source, and editorial recommendations must remain clearly identified."],
      ["Your decision", "You can use the research without clicking an outbound link. Always compare the live listing, checkout total, route restrictions and return terms before paying."],
    ],
  },
} as const;

export type TrustPageSlug = keyof typeof trustPageContent;

export function TrustPage({ slug, locale = "en" }: { slug: TrustPageSlug; locale?: string }) {
  const page = trustPageContent[slug];
  return (
    <PageFrame locale={locale} currentPath={`/${slug}`}>
      <section className="subpage-hero trust-hero">
        <p className="kicker">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p>{page.lead}</p>
      </section>
      <article className="content-shell trust-content">
        {page.sections.map(([heading, body]) => (
          <section key={heading}>
            <h2>{heading}</h2>
            <p>{body}</p>
          </section>
        ))}
        {"action" in page && page.action ? (
          <a className="button primary" href={page.action[1]} target="_blank" rel="noreferrer">
            {page.action[0]} <span>↗</span>
          </a>
        ) : null}
        <a className="trust-back" href={localePath(locale, "/")}>← Return to LoloBuy Sheet</a>
      </article>
    </PageFrame>
  );
}

