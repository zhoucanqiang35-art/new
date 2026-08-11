import { ContentLayout, PageSearchParams, SourceNote } from "../../content-layout";
import { normalizeLanguage } from "../../i18n";
import { ProductShowcase } from "../../product-showcase";
import { createPageMetadata } from "../../seo";

export const metadata = createPageMetadata({
  title: "How to Read PikoBuy QC Photos: Complete Warehouse Checklist",
  description: "Use PikoBuy warehouse photos effectively with category-specific measurements, angles, defect checks, return safeguards and inspection limits.",
  path: "/guides/qc-photos",
});

const checks = [
  {
    number: "01",
    href: "#order-record",
    title: "Match the warehouse record to the submitted order",
    summary: "PikoBuy describes warehouse receipt as check-in, photo confirmation and a defect check. Start by proving that the photographed item is the one you ordered.",
    actions: ["Compare seller or item record, color, size, quantity and selected variant.", "Save the submitted option and original listing before either one changes."],
    limit: "A well-photographed wrong variant is still the wrong order.",
  },
  {
    number: "02",
    href: "#measurements",
    title: "Ask for a measurement that can be read",
    summary: "Camera distance and wide-angle perspective can distort apparent size. A useful measurement photograph shows the tape, its starting point and its endpoint.",
    actions: ["Name the exact dimension: chest, body length, waist, insole, bag width or another decision point.", "Ask for a flat or repeatable position instead of a loose tape placed somewhere on the item."],
    limit: "PikoBuy allows additional detailed photos, but the requested service still has to be available for the item.",
  },
  {
    number: "03",
    href: "#review-order",
    title: "Cover the angles that reveal symmetry and damage",
    summary: "One attractive front image is not enough for products whose condition depends on paired sides, rear alignment, edges or corners.",
    actions: ["For shoes, compare both profiles, heels, toe shape and outsole.", "For bags or fragile goods, request every face, corner, closure and high-stress attachment."],
    limit: "The official photo stage documents visible condition; it does not make unseen surfaces risk-free.",
  },
  {
    number: "04",
    href: "#category-examples",
    title: "Inspect the category's failure points first",
    summary: "Use the product type to decide where a defect would matter most instead of spending the review window on decorative details.",
    actions: ["Clothing: measurements, seams, print alignment, zippers and buttons.", "Footwear and bags: sole joins, heel line, hardware, strap anchors, closures and lining."],
    limit: "These priorities are our practical checklist, not a promise that PikoBuy automatically supplies every view.",
  },
  {
    number: "05",
    href: "#return-protection",
    title: "Preserve return eligibility while requesting evidence",
    summary: "PikoBuy's return policy requires an eligible item to remain in the seller's required resalable condition, with special standards for several categories.",
    actions: ["Keep tags, accessories, seals and required packaging intact while the decision is open.", "Do not request destructive opening or removal merely to obtain another photograph."],
    limit: "The published five-day window is 120 hours from the next hour after the status becomes In Warehouse; timing alone does not guarantee acceptance.",
  },
  {
    number: "06",
    href: "#photo-limits",
    title: "Separate visible evidence from claims photos cannot prove",
    summary: "PikoBuy warns that professional inspection may be unavailable for specialist goods and that staff may only check appearance and visible accessories.",
    actions: ["Use photos for visible color, dimensions, surface damage, alignment, accessories and packaging.", "Do not treat them as proof of authenticity, electrical safety, battery health, material composition or long-term performance."],
    limit: "If the purchase depends on an unobservable claim, warehouse photography is not a sufficient evidence standard.",
  },
];

const requestExamples = [
  {
    title: "Clothing",
    category: "T-shirts & hoodies",
    href: "https://findspreadsheet.com/t-shirts/",
    actions: ["Lay the garment flat and show readable chest and body-length measurements.", "Add straight-on print, collar, seam, zipper or button close-ups where relevant.", "Keep tags and packaging intact until the return decision is finished."],
  },
  {
    title: "Footwear",
    category: "Shoes",
    href: "https://findspreadsheet.com/shoes/",
    actions: ["Photograph both shoes together from front and rear, then both side profiles.", "Add outsole, size label, toe shape and removable insole length when available.", "Do not cut anti-theft or tamper elements needed by the published return standard."],
  },
  {
    title: "Bags & accessories",
    category: "Accessories",
    href: "https://findspreadsheet.com/accessories/",
    actions: ["Record width, height and depth with the measurement endpoints visible.", "Inspect closures, strap anchors, corners, edge paint, lining and included accessories.", "Compare the exact selected style when one listing contains many variants."],
  },
  {
    title: "Jerseys",
    category: "Jersey",
    href: "https://findspreadsheet.com/Jersey/",
    actions: ["Use a straight-on view for name, number, sponsor and patch placement.", "Add chest and body-length measurements plus collar and fabric close-ups.", "Check the ordered team, season, player option, size and sleeve version first."],
  },
  {
    title: "Electronics",
    category: "Electronics",
    href: "https://findspreadsheet.com/electronics/",
    actions: ["Show model label, plug, voltage marking, seals and visible accessories.", "Check route restrictions before asking for packaging changes.", "Treat performance, battery health and internal specification as unverified unless separately established."],
  },
];

export default async function QcPhotosPage({ searchParams }: PageSearchParams) {
  const language = normalizeLanguage((await searchParams).lang);
  return <ContentLayout language={language} pathname="/guides/qc-photos" kicker="FULL GUIDE / QC PHOTOS" title="Ask for photographs that can change the decision." intro="The goal is not to collect more images. It is to obtain the angle, scale and close-up that answer the highest-risk question for the exact product." tone="blue">
    <section className="content-section">
      <div className="content-section-heading"><div><span>QC REVIEW CHECKPOINTS</span><h2>Six checks with a clear purpose.</h2></div><p>These cards are a buyer-side review method, not six services PikoBuy promises automatically. Each card separates the official warehouse or return-policy basis from the action the buyer still has to take.</p></div>
      <div className="check-grid check-grid-rich">{checks.map((check) => <article key={check.number}><a className="check-card-link" href={check.href} aria-label={`Read the matching explanation: ${check.title}`}><span>{check.number}</span><h2>{check.title}</h2><p>{check.summary}</p><ul>{check.actions.map((action) => <li key={action}>{action}</li>)}</ul><small><b>LIMIT</b>{check.limit}</small><strong className="card-destination">Read the matching explanation ↓</strong></a></article>)}</div>
    </section>
    <section className="policy-visual policy-visual-detailed" aria-label="Buyer QC decision record">
      <a href="#order-record" aria-label="Go to the listing and order record guidance"><small>01 · LISTING + ORDER RECORD</small><b>Identify the exact item</b><p>Keep the source page, seller or item ID, submitted color, size, quantity and variant together.</p><ul><li>What was selected?</li><li>What would count as a mismatch?</li></ul><span>→</span><strong className="card-destination">Open matching guidance ↓</strong></a>
      <a href="#warehouse-official" aria-label="Go to the warehouse evidence guidance"><small>02 · WAREHOUSE EVIDENCE</small><b>Answer the deciding question</b><p>Use standard and additional detail photos for the angle, measurement or visible defect that could change the order.</p><ul><li>Is the evidence readable?</li><li>What remains unobservable?</li></ul><span>→</span><strong className="card-destination">Open matching guidance ↓</strong></a>
      <a href="#return-protection" aria-label="Go to the return decision guidance"><small>03 · TIME-BOUND DECISION</small><b>Approve, clarify or request return</b><p>Review promptly after warehouse stock-in, preserve packaging and submit a specific evidence record when a return may be needed.</p><ul><li>Is the item eligible?</li><li>Is the 120-hour window still open?</li></ul><strong className="card-destination">Open matching guidance ↓</strong></a>
    </section>

    <section className="content-section prose-body wide-prose">
      <h2 id="warehouse-official">What PikoBuy officially says happens at the warehouse</h2><p>The official beginner guide says staff check an arriving item in, take confirmation photographs and look for defects. For transferred goods, the shipping policy says packages are unpacked for inspection and buyers may review the inspection photographs or purchase extra detailed photos. These are useful commitments, but they are not the same as a laboratory, authenticity or performance test.</p><p>The same shipping policy says special and professional products cannot be provided with professional inspection. PikoBuy’s user agreement gives concrete examples: for some appliances, cards, models and other sealed or specialist goods, staff may only be able to check visible condition and whether accessories appear complete. That limitation should shape the product you are willing to buy, not merely the photo request you write.</p>

      <h2 id="order-record">Start with the order, not the photograph</h2><p>Before zooming into stitching, compare the warehouse record with the submitted order: seller, product, color, size, quantity and variant. A perfectly photographed wrong option is still the wrong order. If the listing has changed, use saved seller details and the submitted order record to explain the mismatch.</p><p>Next, decide what would make you reject the item. For footwear it may be an incorrect insole length. For a printed shirt it may be severe misalignment. For a fragile object it may be a chipped edge. A request that names the decision point—“show the removable insole beside a readable centimetre tape”—is more useful than “take more pictures.”</p>

      <h2 id="measurements">Measurements need scale and a repeatable position</h2><p>Wide-angle lenses and camera distance distort apparent size. Ask for the product to be laid flat or positioned consistently and ensure the tape markings and endpoints are visible. For clothing, a chest measurement should show where the tape begins and ends; for a bag, state whether width is measured at the base or widest point. A photograph of a tape lying somewhere on the product is not automatically evidence of the dimension you need.</p>

      <h2 id="review-order">Use a fixed review order so obvious problems are not missed</h2><p>Begin with identity: is this the correct product, color, size and quantity? Move next to overall shape and symmetry, then measurements, surface finish, high-stress construction points, accessories and packaging. This sequence prevents a common mistake—spending several minutes on a logo close-up while overlooking that the warehouse received the wrong size.</p><p>Compare like with like. Seller studio photographs may use a different sample, lens, lighting or styling, so they are useful for locating expected details but not for proving that every color and texture should look identical on a warehouse camera. If color is critical, ask for a neutral-light photograph or a reference within the same frame, while accepting that displays and lighting still change appearance.</p><p>For construction, follow the force path of the product. On a bag, inspect handle and strap anchors before decorative hardware. On trousers, inspect the waist closure, crotch seams and pocket openings before minor loose threads. On shoes, compare the heel line, outsole attachment and toe symmetry before judging the box. This priority comes from practical product risk, not from a PikoBuy guarantee of those checks.</p>

      <h2 id="return-protection">Protect the option to return</h2><p>PikoBuy’s returns page lists products whose packaging, tags or accessories were removed at the user’s request among the items that may be unavailable for the five-day return guarantee. It also lists special seal and packaging standards for sneakers, personal-care products, electronics, collectibles, books and other categories. Do not ask the warehouse to break a seal simply to obtain an interior photo unless you accept the possible effect on return eligibility.</p><p>Review warehouse evidence as soon as the order becomes Warehoused. The official page describes five days, calculated as 120 hours beginning from the next hour, for an eligible request. Seller acceptance and the product’s condition still matter.</p>

      <h2>Turn a suspected problem into a support-ready record</h2><p>If a photograph suggests an issue, do not rely on a vague label such as “bad quality.” Save the original listing, submitted option, warehouse photograph and a concise description of the visible mismatch. Point to the exact location: “left sleeve seam is open approximately two centimetres” is more useful than “stitching looks off.” When measurement is the issue, show the stated seller dimension and the readable warehouse measurement side by side.</p><p>The official returns table distinguishes customer reasons, seller errors and domestic-transport damage because responsibility affects fees. Evidence should therefore describe what happened without guessing who caused it. A crushed corner may have happened before or during domestic transport; a wrong color can be compared with the submitted order. Let the platform and seller determine responsibility from a clear record.</p><p>Request extra detail only when it could change the decision or document the case. Repeatedly ordering similar photographs wastes time inside a limited review window. If one angle is inconclusive, specify the missing angle, lighting or measurement instead of repeating the original request.</p>

      <h2 id="photo-limits">What photographs can and cannot establish</h2><p>They can show visible color, dimensions, alignment, external damage, missing visible accessories and packaging condition. They cannot reliably prove fibre content, electrical safety, battery health, waterproofing, authenticity or how an item will wear after repeated use. If the purchase only makes sense when one of those unobservable claims is guaranteed, warehouse photography is the wrong evidence standard.</p>

      <h2 id="category-examples">Category examples: the useful photo is rarely the prettiest one</h2><p>For hoodies and T-shirts, a flat garment with readable chest and length measurements usually contributes more than a styled photograph. Add close-ups for the collar, print edge, seams and any zipper or drawcord hardware. For trousers and shorts, request waist, rise and inseam evidence when fit matters, and check pockets, closure and fabric surface.</p><p>For footwear, pair-level symmetry matters. Ask for both shoes together from the front and rear, then side profiles, outsole, size label and removable insole length when possible. The returns policy’s sneaker standard is a reminder not to cut anti-theft or anti-damage elements merely to improve the view.</p><p>For jerseys, use a straight-on photograph for name, number and patch placement and combine it with chest and body-length measurements. For electronics, request model, voltage, plug, included accessories, seals and visible damage, but keep the inspection limit explicit: the user agreement says PikoBuy may be unable to perform professional checks and may only inspect appearance and accessories for some goods.</p><p>For glass, ceramics and irregular fragile goods, document every face and corner before dispatch and decide whether reinforced packaging is appropriate. PikoBuy warns that these goods may be damaged across multiple transport stages, so a clean warehouse photograph proves only pre-dispatch visible condition; it does not eliminate international logistics risk.</p>

      <SourceNote><a href="https://www.pikobuy.com/guide" target="_blank" rel="noopener noreferrer">Official Beginner’s Guide</a>, <a href="https://www.pikobuy.com/protocol/shipping" target="_blank" rel="noopener noreferrer">Shipping Policy</a>, <a href="https://www.pikobuy.com/protocol/returns" target="_blank" rel="noopener noreferrer">Returns & Exchanges</a> and <a href="https://www.pikobuy.com/protocol/user" target="_blank" rel="noopener noreferrer">User Agreement</a>, checked 06 August 2026.</SourceNote>
    </section>

    <section className="content-section">
      <div className="content-section-heading"><div><span>CATEGORY REQUEST LIBRARY</span><h2>Write the request around the actual product risk.</h2></div><p>These are independent, category-specific request examples. Each card links to the matching FindSpreadsheet category; it does not claim PikoBuy automatically supplies every angle or professional test.</p></div>
      <div className="evidence-table category-evidence-grid">{requestExamples.map((example, index) => <article key={example.title}><span>{String(index + 1).padStart(2, "0")} · {example.category}</span><h3>{example.title}</h3><ul>{example.actions.map((action) => <li key={action}>{action}</li>)}</ul><a href={example.href} target="_blank" rel="noopener noreferrer">Browse exact category on FindSpreadsheet ↗</a></article>)}</div>
    </section>

    <section className="content-section guide-product-section">
      <div className="content-section-heading"><div><span>REAL PRODUCT EXAMPLES</span><h2>Apply the checklist to live FindSpreadsheet rows.</h2></div><p>These six products were rechecked against their exact main-site detail pages on 06 August 2026. Click the image, title, USD reference price or card body to open the matching product—not a generic search page.</p></div>
      <ProductShowcase />
      <p className="guide-product-note">Source prices on the linked FindSpreadsheet pages are shown in CNY. USD references use 1 CNY = $0.14817 on 06 August 2026 and are planning figures only; the live option and checkout remain authoritative.</p>
    </section>
  </ContentLayout>;
}
