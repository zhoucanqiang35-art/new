import type { Metadata } from "next";
import ArticleShell from "../../article-shell";

export const metadata: Metadata = {
  title: "LoloBuy Size Chart Guide | Measure Clothing Before Ordering",
  description:
    "Learn how to read LoloBuy product size charts, separate body and garment measurements, convert inches and centimetres, compare ease and record a defensible size decision.",
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "LoloBuy Size Chart Guide: Measure the Product, Not the Letter",
  description:
    "An evidence-led method for reading product size charts, comparing body and garment measurements and documenting a LoloBuy size decision.",
  datePublished: "2026-08-14",
  dateModified: "2026-08-14",
  inLanguage: "en",
  mainEntityOfPage: "https://lolobuyspreadsheet.es/seo-articles/lolobuy-size-chart-guide/",
  author: { "@type": "Organization", name: "LoloBuy Spreadsheet Research Hub" },
};

export default function LoloBuySizeChartGuidePage() {
  return (
    <ArticleShell
      eyebrow="SEO research article · Reviewed 14 August 2026"
      title="LoloBuy Size Chart Guide: Measure the Product, Not the Letter"
      lead="A familiar label such as M, XL or EU 42 is not enough to choose a product from a changing marketplace listing. A defensible decision starts by identifying what the seller measured, comparing it with the same measurement on your body or a garment that already fits, and recording every assumption before the link is pasted into LoloBuy."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <span className="word-count">Long-form guide · approximately 1,600 words</span>
      <div className="article-note"><strong>Evidence boundary:</strong> LoloBuy’s current public application supports link-led and manual product requests with specification or SKU information. The measurement workflow below is independent editorial guidance. It does not replace the seller’s current chart, LoloBuy’s transaction interface or professional fitting advice.</div>

      <h2>Why the size letter is the weakest part of the evidence</h2>
      <p>Letter and regional sizes are convenient labels, but they do not tell you where a product was measured, whether the numbers describe a body or a finished garment, or how much room the maker intended. Two listings can both call an item “large” while publishing different chest, waist, length or shoulder figures. A spreadsheet that copies only the letter preserves the least useful information and hides the measurements that could be checked later.</p>
      <p>LoloBuy’s current application provides structured product-request fields, including a specification or SKU. That helps identify the requested option, but it does not make an external seller’s size system universal. Confirm that the chosen variation and live chart belong to the same product before submitting the request.</p>

      <h2>First identify what the chart measures</h2>
      <p>Start by classifying the chart as <strong>body measurements</strong>, <strong>finished-garment measurements</strong> or <strong>unclear</strong>. This distinction changes the comparison. ISO 8559-1 describes anthropometric measurements used in clothing work, while ISO 8559-2:2025 establishes clothing size designations around body dimensions. A seller chart, however, may publish the physical width and length of the finished item instead. Do not compare the two columns as if they were interchangeable.</p>
      <p>A body chest value normally describes a circumference around the person. A flat garment “chest” value may describe the distance from one underarm to the other; if so, it may need to be doubled before it can be compared with a circumference. But never double a number automatically. Look for a diagram, labels such as half-chest or pit-to-pit, and the relationship between the values. If the chart does not define the point, classify it as unclear and ask for clarification.</p>

      <figure className="evidence-figure"><div className="decision-flow"><div><small>01 / DEFINE</small><strong>Name the chart</strong><p>Body, finished garment, shoe, accessory or unclear.</p></div><div><small>02 / MATCH</small><strong>Use identical points</strong><p>Compare chest with chest, inseam with inseam and foot length with foot length.</p></div><div><small>03 / CONVERT</small><strong>Normalize the units</strong><p>Keep centimetres and convert carefully without early rounding.</p></div><div><small>04 / RECORD</small><strong>Save the decision</strong><p>Listing, option, chart date, measurements, tolerance and unresolved questions.</p></div></div><figcaption>A size decision is auditable only when the reference and seller values describe the same physical quantity.</figcaption></figure>

      <h2>Build two references: your body and a product that fits</h2>
      <p>Body measurements and garment measurements answer different questions, so preserve both where possible. Measure the relevant body dimensions in a consistent posture without pulling the tape tight. Then select a similar item you already wear comfortably and measure it using the seller’s apparent points. A favourite fitted T-shirt is a better reference for another T-shirt than a bulky coat; a high-rise trouser is a poor reference for a low-rise design unless the rise difference is recorded.</p>
      <p>Lay the reference garment flat without stretching it. Record only relevant values and define their start and end points. A photograph or sketch makes the record repeatable; a number without a measurement point creates false precision because two people can report the same sleeve label while measuring from different locations.</p>

      <h2>Convert units without changing the quantity</h2>
      <p>Many marketplace charts use centimetres, while a buyer may think in inches. NIST’s current conversion guidance lists 1 inch as 2.54 centimetres and explains that conversion requires the correct factor, sensible significant digits and rounding. Multiply inches by 2.54 to obtain centimetres; divide centimetres by 2.54 to obtain inches. Keep the unrounded result while comparing and round only the displayed note.</p>
      <p>A 22-inch flat chest converts to 55.88 cm. Reporting 56 cm is readable, but rounding before later calculations introduces error. Conversion also cannot solve ambiguity: a precise value remains unusable when the seller and buyer used different measurement points.</p>

      <h2>Calculate room, but do not invent a universal allowance</h2>
      <p>For a non-stretch finished garment, the difference between garment circumference and body circumference indicates available room, often called ease. The preferred amount varies with garment type, fabric, cut, layering and personal preference. A fitted knit, relaxed hoodie and insulated jacket should not be evaluated with one universal number. The existing garment reference shows the amount of room you already accept for a similar product.</p>
      <p>Stretch complicates the calculation: a knit can measure smaller than the body, while a rigid woven item may need room for movement. Descriptions such as “oversized” or “slim” are context, not measurements, and cannot replace the chart.</p>

      <h2>Use category-specific measurement priorities</h2>
      <table className="evidence-table"><thead><tr><th>Product</th><th>Priority comparisons</th><th>Common ambiguity</th></tr></thead><tbody>
        <tr><td>T-shirts and hoodies</td><td>Flat chest, shoulder, body length and sleeve point</td><td>Half-chest versus circumference; drop shoulder changes sleeve reference</td></tr>
        <tr><td>Jackets and coats</td><td>Chest, shoulder, sleeve, length and intended layering room</td><td>Outer measurement includes construction bulk; lining and insulation affect usable space</td></tr>
        <tr><td>Trousers</td><td>Waist, rise, hip, thigh, inseam and hem opening</td><td>Elastic range, garment waist position and outseam versus inseam</td></tr>
        <tr><td>Shoes</td><td>Foot length against the exact chart definition and selected model</td><td>Foot length, insole length and regional labels are not the same quantity</td></tr>
        <tr><td>Hats and accessories</td><td>Relevant circumference plus adjustability or opening dimensions</td><td>One-size claims without a numeric range</td></tr>
      </tbody></table>
      <p>When a chart supplies many values, prioritise the dimension most likely to make the product unusable. Shoulder width may be decisive for a structured jacket; inseam may be alterable while rise is not; foot length may be more useful than a familiar shoe label. The right priority follows the product construction and the buyer’s requirements, not whichever number is easiest to compare.</p>

      <h2>Read ranges and stated tolerances honestly</h2>
      <p>A seller may publish an elastic range or a manual-measurement tolerance. Preserve the wording and source rather than turning it into a guarantee that every unit can vary by the maximum amount in the convenient direction. A tolerance describes possible measurement variation, not extra fit room. If a critical value sits at the edge of the acceptable range, the chart does not support a confident selection.</p>
      <p>Do not create a tolerance when none is stated. Assigning a convenient “plus or minus” figure is speculation. Mark the risk, seek order-specific clarification and choose only when the documented range works for you.</p>

      <h2>Connect the chart to warehouse measurement evidence</h2>
      <p>Save the chart before ordering because a seller may later replace the image or edit the listing. If warehouse photographs include a tape measurement, compare the photographed points with the saved chart and your reference. Check where the tape begins, whether the garment is flat, whether a curve is being followed and whether the full value is visible. A tape in the photograph does not automatically prove that the intended dimension was measured correctly.</p>
      <p>If an important point is missing, identify the item, measurement, start point, end point and garment position. “Measure the chest” is weaker than “Lay the closed jacket flat and measure straight from underarm seam to underarm seam.” Request another image only if it can change the decision.</p>

      <h2>Red flags that should stop an automatic size choice</h2>
      <ul><li>The selected colour or model opens a different chart from the default listing.</li><li>The chart mixes body and garment values without identifying them.</li><li>A width is compared with a circumference without checking the diagram.</li><li>The listing uses only S–XL or regional labels and publishes no numeric dimensions.</li><li>Units are absent, or centimetres and inches appear to be copied incorrectly.</li><li>The reference garment and target product have different cuts, rises or measurement points.</li><li>The lowest-priced variation belongs to a different product or size system.</li><li>A spreadsheet recommends a size but does not show the source chart or review date.</li></ul>

      <h2>What a spreadsheet should publish about sizing</h2>
      <p>A responsible spreadsheet row should link the current product, name the exact variation, record whether the chart contains body or garment measurements, save the chart review date and describe any conversion. It may explain a comparison example, but it should not promise that one size will fit every reader. Personal measurements, preferred room and the seller’s current data remain necessary.</p>
      <p>When a link changes, recheck the chart. Do not carry a recommendation to a visually similar replacement: its pattern, measurement method or options may differ. Updating only the URL preserves evidence that no longer belongs to the product.</p>

      <h2>Final pre-order size checklist</h2>
      <ol><li>Confirm the live product and exact selected variation.</li><li>Classify the chart as body, finished garment or unclear.</li><li>Define every measurement point used in the decision.</li><li>Compare with both your body and a similar product that fits.</li><li>Normalize units using 1 inch = 2.54 cm and avoid early rounding.</li><li>Account for cut, stretch, layering and personal preference without inventing a universal allowance.</li><li>Save the chart, source URL, option and review date.</li><li>Write down any unresolved ambiguity before submitting the product request.</li></ol>
      <p>The best size decision is not the one that sounds most certain. It is the one another person can reproduce from the same source, measurements and assumptions. LoloBuy can carry the selected product specification into the purchasing workflow; the buyer’s job is to make that specification evidence-based before it is submitted.</p>

      <div className="source-footnotes"><h2>Primary sources and scope</h2><ol>
        <li><a href="https://www.lolobuy.com/" target="_blank" rel="noopener noreferrer">LoloBuy official web application</a>, product-request and specification/SKU surfaces reviewed 14 August 2026.</li>
        <li><a href="https://www.iso.org/standard/61686.html" target="_blank" rel="noopener noreferrer">ISO 8559-1:2017</a>, official abstract and current confirmation status reviewed 14 August 2026; used only for the distinction and role of anthropometric measurements.</li>
        <li><a href="https://www.iso.org/standard/85590.html" target="_blank" rel="noopener noreferrer">ISO 8559-2:2025</a>, official abstract reviewed 14 August 2026; used for the body-dimension basis of clothing size designation.</li>
        <li><a href="https://www.nist.gov/pml/owm/metric-si/unit-conversion/approximate-conversions-us-customary-measures-metric" target="_blank" rel="noopener noreferrer">NIST Metric (SI) Program conversion guidance</a>, updated 6 February 2026; used for inch-to-centimetre conversion and rounding guidance.</li>
      </ol><p>The comparison sequence, risk labels and spreadsheet publishing recommendations are independent editorial methods, not official LoloBuy or ISO procedures.</p></div>
    </ArticleShell>
  );
}
