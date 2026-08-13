import type { Metadata } from "next";
import ArticleShell from "../article-shell";

export const metadata: Metadata = {
  title: "Privacy and External-Link Notice | LoloBuy Spreadsheet Research",
  description:
    "A plain-language notice covering this inspection site's forms, translation service, external product links and third-party privacy boundaries.",
};

export default function PrivacyPage() {
  return (
    <ArticleShell
      eyebrow="Site notice · Effective 13 August 2026"
      title="A plain-language privacy and external-link notice"
      lead="This inspection site is designed as a public reading experience. It does not provide user accounts, accept payments or ask visitors to submit order, address or identification information."
      ctaTitle="Review the editorial standard"
      ctaText="See how sources, corrections, product observations and independence are handled."
      ctaHref="/editorial-policy/"
      ctaLabel="Read the editorial policy →"
    >
      <h2>Information visitors submit to this site</h2>
      <p>The current inspection copy has no registration, checkout, comment, upload or contact form. The product-search field sends the entered keywords directly to FindSpreadsheet when the visitor submits the form; the search is not processed as an on-site product database query.</p>
      <p>Do not enter personal data, addresses, account credentials, order numbers or payment information into the search field. Use it only for product names or category terms.</p>

      <h2>Language translation</h2>
      <p>The inspection copy uses a Google translation component to let reviewers test multiple languages while keeping the selected design. When the translation feature loads or is used, the visitor’s browser may connect to Google services. Those services operate under their own terms and privacy practices.</p>
      <p>The formal multilingual site is planned around dedicated translated routes rather than relying only on runtime translation. That architecture will receive a separate review before indexing is enabled.</p>

      <h2>External destinations</h2>
      <p>Category, product and search actions can open FindSpreadsheet, while source references can open LoloBuy and other cited websites. Once a visitor follows an external link, that destination controls its own collection, cookies, accounts, purchases and privacy practices. This site does not receive or control an order placed on another website.</p>
      <p>External links are checked as dated observations, but a successful link test does not endorse every product, seller, policy or third-party practice. Visitors should review the destination’s current terms before submitting personal or payment information.</p>

      <h2>Technical service information</h2>
      <p>Like most hosted websites, the hosting and network providers may process technical request information needed to deliver and secure the site, such as an IP address, browser information, requested route and request time. This notice does not claim that third-party infrastructure collects nothing; it limits the claim to what this site itself asks visitors to submit.</p>

      <h2>Children and sensitive information</h2>
      <p>This site is a general shopping-research resource and is not designed to collect information from children. It should not be used to transmit passwords, identity documents, payment details, private addresses or other sensitive information.</p>

      <h2>Changes to this notice</h2>
      <p>If forms, analytics, accounts, advertising or other data-processing features are introduced, this notice must be revised before those features are treated as complete. Material changes will be recorded in the site’s dated update log.</p>
    </ArticleShell>
  );
}
