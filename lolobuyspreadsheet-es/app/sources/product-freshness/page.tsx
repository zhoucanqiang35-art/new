import type { Metadata } from "next";
import ArticleShell from "../../article-shell";

export const metadata: Metadata = {
  title: "Product Link, Image and Price Freshness Record | FindSpreadsheet",
  description:
    "A dated record of the FindSpreadsheet product links, images, CNY observations and editorial USD conversions used by this LoloBuy research site.",
};

const observations = [
  ["Gallery Short", "¥145", "$21.39", "https://findspreadsheet.com/pants-shorts/gallery-short-3003.html"],
  ["High Quality Jacket", "¥148", "$21.83", "https://findspreadsheet.com/jackets/high-quality-burberry-jacket-3131.html"],
  ["37-Colour Socks", "¥20", "$2.95", "https://findspreadsheet.com/other-stuff/sock-37-colores-top-3001.html"],
  ["T-Shirt / Hoodie Selection", "¥85", "$12.54", "https://findspreadsheet.com/hoodies-sweaters/dior-t-shirthoodie-39-style-top-3000.html"],
  ["C.P. Company T-Shirt", "¥118", "$17.40", "https://findspreadsheet.com/t-shirts/cp-company-t-shirt-2999.html"],
  ["Outdoor Jacket", "¥145", "$21.39", "https://findspreadsheet.com/jackets/the-north-face-outdoorjacket-2998.html"],
  ["Multi-Style Headwear", "¥50", "$7.37", "https://findspreadsheet.com/headwear/prada-hatfendi-hatstone-island-hatbalenciaga-hatgucci-hat-2997.html"],
  ["Swim Shorts", "¥121", "$17.85", "https://findspreadsheet.com/pants-shorts/lacoste-swim-shorts-2996.html"],
  ["Compact Wallet", "¥52.80", "$7.79", "https://findspreadsheet.com/accessories/supreme-wallet-2995.html"],
  ["Graphic Tee Selection", "¥165", "$24.34", "https://findspreadsheet.com/t-shirts/valentino-tees-2994.html"],
  ["C.P. Company Tee", "¥118", "$17.40", "https://findspreadsheet.com/t-shirts/cp-company-t-shirt-2993.html"],
  ["Versatile Short Sleeves", "¥135", "$19.91", "https://findspreadsheet.com/t-shirts/dior-versatile-short-sleeves-2992.html"],
] as const;

export default function ProductFreshnessPage() {
  return (
    <ArticleShell
      eyebrow="Database evidence file · Checked 13 August 2026"
      title="The product row is a dated observation, not a live-price promise"
      lead="Every product card on the homepage keeps the original CNY observation, an editorial USD estimate, a source product page and a review date so readers can see exactly where the display came from."
      ctaTitle="Open the maintained product database"
      ctaText="Recheck the live product page, options and current price before using any observation in a purchase decision."
      ctaHref="https://findspreadsheet.com/AllProducts/"
      ctaLabel="Browse current products ↗"
    >
      <div className="article-meta"><span>12 product links checked</span><span>All returned HTTP 200</span><span>Checked 13 Aug 2026</span></div>
      <div className="article-note"><strong>Price rule:</strong> USD figures are editorial comparisons calculated as observed CNY price ÷ 6.78 and rounded to two decimals. The 6.78 benchmark is a rounded snapshot based on OFX’s historical USD/CNY figure of 6.78046 dated 26 July 2026. It is not a live exchange service or checkout price.</div>

      <h2>Homepage product observations</h2>
      <table className="evidence-table"><thead><tr><th>Product label</th><th>CNY observed</th><th>Editorial USD</th><th>Source</th></tr></thead><tbody>
        {observations.map(([title, cny, usd, href]) => (
          <tr key={href}><td>{title}</td><td>{cny}</td><td>{usd}</td><td><a href={href} target="_blank" rel="noopener noreferrer">Product page ↗</a></td></tr>
        ))}
      </tbody></table>

      <h2>What was checked</h2>
      <p>On 13 August 2026, the twelve homepage product destinations and eleven category or all-products destinations were requested directly. All twenty-three returned a successful HTTP 200 response at the time of the check. For the product cards, the visible source page, first product image used by this site, displayed CNY observation and destination URL were reviewed as one record.</p>
      <p>A successful response does not prove current stock, purchase acceptance, seller performance, authenticity or future page stability. It only shows that the destination responded when tested. A page can remain available while its options, price or contents change.</p>

      <h2>Why the CNY amount remains visible</h2>
      <p>The source observation is the CNY amount displayed by the product page when reviewed. Keeping it next to the USD estimate lets a reader reconstruct the calculation and avoids presenting the converted amount as if it were the seller’s own dollar price. The formula is simple: observed CNY ÷ 6.78, rounded to two decimal places.</p>
      <p>Exchange rates move, card issuers or payment providers may use different rates, and checkout can include option pricing, domestic seller freight or other charges. Therefore the homepage says “estimate,” preserves the rate date and does not describe the converted amount as a final total.</p>

      <h2>Freshness rules for the product carousel</h2>
      <ol>
        <li>Recheck every product and category destination before a formal release.</li>
        <li>Update the visible review date only after links, images and CNY observations are actually rechecked.</li>
        <li>Recalculate all USD estimates from one documented benchmark rather than mixing rates.</li>
        <li>Remove a card when the destination no longer identifies the expected item.</li>
        <li>Mark a retained historical item as archived when the source is intentionally kept for evidence.</li>
        <li>Record material changes in the public update log.</li>
      </ol>

      <h2>How an individual product should be rechecked</h2>
      <p>Open the product page and confirm the destination still represents the expected item. Compare the first image, title, category, displayed base price and available options. A base price can represent only one variation, so do not imply that every size, colour or model costs the same. If the page redirects, record the final destination rather than preserving a misleading old URL.</p>
      <p>The carousel intentionally gives only enough information to decide whether to open the real product page. It is not a substitute for seller-page research, variant selection, warehouse inspection or the final purchase quote.</p>

      <h2>Source boundaries</h2>
      <table className="evidence-table"><thead><tr><th>Observation</th><th>Supports</th><th>Does not support</th></tr></thead><tbody>
        <tr><td>Product page returned 200</td><td>The link responded on the recorded date.</td><td>Future availability or unchanged contents.</td></tr>
        <tr><td>First image matched</td><td>The carousel image corresponded to the reviewed page.</td><td>The exact warehouse item’s condition.</td></tr>
        <tr><td>CNY amount displayed</td><td>A dated base-price observation.</td><td>Every variant price or final checkout total.</td></tr>
        <tr><td>USD calculation</td><td>A transparent editorial comparison under one benchmark.</td><td>A live financial quote or payment-provider rate.</td></tr>
      </tbody></table>

      <div className="source-footnotes"><h2>Sources reviewed</h2><ol><li><a href="https://findspreadsheet.com/AllProducts/" target="_blank" rel="noopener noreferrer">FindSpreadsheet product database</a> and the twelve product-detail destinations listed above, reviewed 13 August 2026.</li><li><a href="https://www.ofx.com/en-gb/exchange-rates/usd-to-cny/" target="_blank" rel="noopener noreferrer">OFX USD/CNY historical-rate page</a>, showing a historical figure of 6.78046 dated 26 July 2026; this site uses the rounded 6.78 benchmark only for editorial comparison.</li></ol></div>
    </ArticleShell>
  );
}
