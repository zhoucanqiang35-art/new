import { LanguageSelect } from "../../components/language-select";

const sections = [
  {
    heading: "Start by separating the product decision from the shipping decision",
    body: [
      "The first useful question is not “which shipping line is cheapest?” It is “am I ready to buy this item?” PikoBuy’s own beginner guide starts with the product: choose an item on marketplaces such as Taobao, Tmall, 1688, Weidian or Yupoo, confirm the specification, colour and size, then paste a link or search with keywords. That order makes sense because a parcel cannot be planned well when the item choice is still uncertain.",
      "For a shopper, this means keeping one small record per item before the first payment: the source link, selected variant, stated measurements, seller price and the questions that remain unanswered. A spreadsheet or database is useful here because it forces a clean separation between evidence and assumption. A product image may suggest a material or a fit; it does not prove either. If a size chart is missing, write that down instead of silently treating a familiar size label as a measurement.",
      "PikoBuy says it can purchase from sellers according to the customer’s requirements and centrally manage orders from different sources. That can simplify the buying step, but it does not remove the need to check the exact variant before submitting the order. A “same product” listing may contain several colours, batches or sizes. The practical habit is to copy the chosen option into the order notes in plain language and save a screenshot of the listing before paying."
    ]
  },
  {
    heading: "Treat the first payment as an order request, not a finished purchase",
    body: [
      "PikoBuy’s guide describes a first payment after the shopper selects colour, size and quantity. It also states that prices are subject to the actual purchase and that an out-of-stock order is refunded. That is an important distinction: the original listing price is a planning reference, not a promise that stock and final purchase conditions will remain unchanged.",
      "This is where a realistic budget prevents frustration. Keep the item price, any domestic shipping shown by the seller, a small buffer for price movement, and international shipping as separate lines. Do not combine them into one number and call it “total” until the parcel is actually ready to send. The shipping estimator itself asks for destination, product type, weight, length, width and height—clear evidence that shipping cannot be estimated responsibly from the item price alone.",
      "If the product becomes unavailable, use the refund as a decision point. Review alternatives against the same checklist instead of rushing into the nearest replacement. A different listing can change the measurements, materials, seller conditions or return eligibility. Slow comparison at this point is usually cheaper than correcting the decision after the item reaches the warehouse."
    ]
  },
  {
    heading: "Use warehouse inspection for visible evidence, not as a blanket guarantee",
    body: [
      "PikoBuy says that items arriving at its China warehouse are checked in, photographed and inspected for defects; its homepage also describes quality inspection and repacking on arrival. Those steps are valuable because they turn an online listing into something that can be visually reviewed before international dispatch. The guide says shoppers may request services such as minimal or reinforced packaging, and the shipping terms say that extra detailed photos can be purchased.",
      "The disciplined way to use those photos is category-specific. For shoes, compare both lateral sides, the toe shape, heel alignment, outsole, size tag and any visible glue or stitching. For clothing, compare the garment label, print placement, seams, length and the displayed measurements when available. For bags and accessories, look at hardware, closures, straps, edges and included parts. For electronics, confirm model, plug, visible condition and whether the item type is appropriate for the intended shipping route. None of these checks establish authenticity, durability, fit or future availability; they simply help identify visible mismatches before you submit an international parcel.",
      "Write requests that can be answered by a photo. “Please check quality” is vague. “Please photograph the front, back, size label and left toe close-up” is useful. The goal is not to ask a warehouse worker to make a subjective buying decision. It is to obtain enough evidence for you to compare what arrived against what you ordered."
    ]
  },
  {
    heading: "Know the return window before the parcel leaves the warehouse",
    body: [
      "The most time-sensitive checkpoint is the warehouse stage. PikoBuy’s returns page says an eligible return request can be made within five days after the order becomes “In Warehouse,” counted as 120 hours from the next hour. Eligibility also depends on the seller offering the guarantee, the product remaining in the required resale condition and the category. The same policy lists exclusions or special restrictions for items including customised goods, second-hand goods, intimate apparel, food and certain opened or unsealed products.",
      "This is why inspection photos should be reviewed promptly, not saved for later. If you notice the wrong colour, incorrect size, visible damage or a mismatch with the order, collect the relevant evidence and use the platform’s return process as soon as possible. Waiting until several orders are consolidated can remove options. PikoBuy also explains that a customer-initiated, unconditional return may involve return shipping, the seller’s original shipping cost and an RMB 5 service fee. If a product is eligible, the eventual return still depends on the seller’s consent and conditions.",
      "A simple rule helps: do not remove requested packaging, labels or accessories before deciding whether the item is acceptable. The policy contains special standards for some product groups, including sealed products and new sneakers. Keeping the item in resalable condition protects the possibility of a return; opening or altering it may do the opposite."
    ]
  },
  {
    heading: "Build the parcel only after every item has a clear status",
    body: [
      "Once items are in the warehouse, create a short status list: keep, return, awaiting photos or awaiting clarification. Only items marked keep should move into parcel planning. PikoBuy lets customers choose a shipping route and pay the international shipping fee after submitting the parcel. Its guide notes that routes differ in delivery time and billing methods, so “best route” is not a universal label. It depends on the destination, what is inside the parcel, its final dimensions and the shopper’s tolerance for time and cost.",
      "Consolidation can be helpful because several approved orders can be managed together, but it is not automatically cheaper or safer. Larger parcels may change dimensional weight, route availability or customs exposure. Before selecting a route, use the estimate tool with the destination and the best available weight and dimensions. Treat the result as a planning estimate, then read the route conditions at checkout. Do not promise yourself a delivery date merely because another customer once received a similar parcel quickly.",
      "The official shipping terms are equally direct about risk: parcels are carried by third-party logistics providers, and cross-border shipping can be affected by customs policies, loss, damage and peak-season delays. That is not a reason to avoid planning. It is a reason to avoid overconfidence. Keep tracking records, understand any available protection before paying and make sure the recipient information is correct."
    ]
  },
  {
    heading: "After dispatch, track the parcel but keep expectations realistic",
    body: [
      "PikoBuy’s guide says tracking information will be available within three days after shipment. A missing tracking event on the first day is therefore not, by itself, proof that a parcel has failed. Give the stated window time, then check the parcel page and contact support with the order information if the promised status does not appear.",
      "International delivery has handoffs: warehouse dispatch, carrier acceptance, export processing, import processing and local delivery. Updates can be uneven around those handoffs. What matters is a documented sequence rather than a single static status. Keep the parcel number, selected route, address and any communication together. If a problem arises, precise records are more useful than a memory of what the order page looked like weeks earlier.",
      "The practical takeaway is simple. PikoBuy’s flow gives shoppers a structured path from source listing to warehouse review and international dispatch. The shopper still owns the decisions: choosing the exact item, reading the visible evidence, acting inside the return window, and selecting a route with a realistic view of cost and risk. That is how a research process stays useful—specific enough to reduce avoidable mistakes, but honest about what no platform can guarantee."
    ]
  }
];

export default function SeoArticles() {
  return <main className="route-shell"><Header />
    <section className="route-hero"><p className="eyebrow"><span></span> SEO ARTICLE · ORDER &amp; SHIPPING</p><h1>How the PikoBuy order flow works—<br /><em>and what to check at each step.</em></h1><p>Published as a practical buyer guide using PikoBuy’s current public beginner, shipping and returns information.</p></section>
    <article className="route-content longform-article">
      <p className="article-kicker">Independent research guide · approximately 1,520 words</p>
      <p className="article-lede">A buying agent’s workflow can look simple from the outside: choose an item, pay, wait for warehouse photos, then ship. The useful decisions sit inside those steps. This guide explains what PikoBuy publicly says it does and turns that information into a clear checklist for a shopper who wants fewer assumptions and better records.</p>
      {sections.map((section, index) => <section key={section.heading}><p className="article-number">0{index + 1}</p><h2>{section.heading}</h2>{section.body.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>)}
      <aside className="source-note"><strong>Research basis.</strong> This article reflects PikoBuy’s publicly available Beginner’s Guide, Shipping Terms, Returns &amp; Exchanges policy and shipping-estimate interface, reviewed September 5, 2026. Policies and route availability can change; verify the current terms before payment.</aside>
      <a className="article-database" href="https://findspreadsheet.com">Open the product database <span>↗</span></a>
    </article><Footer />
  </main>
}

function Header(){return <header className="site-header"><a className="brand" href="/"><img className="brand-logo" src="/pikobuy-logo.png" alt="PikoBuy" /></a><nav aria-label="Main navigation"><a href="/">Home</a><a href="/product-categories">Product Categories</a><a href="/product-details">Product Details</a><a href="/seo-articles">SEO Articles</a><a href="/faq">FAQ</a><a href="/qc-guide">QC Method</a><a href="/regions">Regions</a></nav><LanguageSelect /></header>}
function Footer(){return <footer className="route-footer"><a className="brand" href="/"><img className="brand-logo" src="/pikobuy-logo.png" alt="PikoBuy" /></a><p>Independent product-research preview. Not affiliated with PikoBuy.</p><span>© 2026</span></footer>}
