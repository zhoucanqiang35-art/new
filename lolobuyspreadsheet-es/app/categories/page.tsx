import type { Metadata } from "next";
import ArticleShell from "../article-shell";

export const metadata: Metadata = {
  title: "LoloBuy Spreadsheet Categories | Independent Product Research",
  description: "Browse ten category-specific LoloBuy spreadsheet research paths with practical sizing, QC and listing checks before opening current product data.",
};

const categories = [
  ["T-Shirts", "https://findspreadsheet.com/t-shirts/", "Compare garment width and length—not only a letter size. Check print placement, fabric description, neck ribbing and photographed measurements."],
  ["Shoes", "https://findspreadsheet.com/shoes/", "Confirm the selected size system, insole or foot-length guidance, paired symmetry, outsole shape and whether packaging affects parcel size."],
  ["Hoodies & Sweaters", "https://findspreadsheet.com/hoodies-sweaters/", "Check chest width, body length, sleeve length, fabric weight claims, ribbing, hood shape, zip alignment and care information."],
  ["Jackets", "https://findspreadsheet.com/jackets/", "Review shoulder width, chest width, lining, closures, pocket placement and whether the listed material suits the intended weather."],
  ["Pants & Shorts", "https://findspreadsheet.com/pants-shorts/", "Prioritise waist, rise, hip, thigh and inseam measurements. A labelled waist size does not necessarily equal the finished garment measurement."],
  ["Headwear", "https://findspreadsheet.com/headwear/", "Look for circumference or adjustment range, crown depth, brim shape, embroidery alignment and visible interior construction."],
  ["Accessories", "https://findspreadsheet.com/accessories/", "Record exact dimensions, materials, included pieces and hardware. Small items can still have restricted-material or declaration considerations."],
  ["Jerseys", "https://findspreadsheet.com/jersey/", "Check the specific sport and season, player or blank version, name and number application, badge placement and garment measurements."],
  ["Electronics", "https://findspreadsheet.com/electronics/", "Verify model, voltage, plug type and included parts. A listing photo cannot establish electrical safety, battery health or regulatory compliance."],
  ["Other Finds", "https://findspreadsheet.com/other-stuff/", "Use a custom checklist: identify the item, selected variant, dimensions, materials, fragile points, restrictions and evidence still missing."],
] as const;

export default function CategoriesPage() {
  return (
    <ArticleShell eyebrow="Independent category directory · Reviewed 12 August 2026" title="Ten product categories, each with a different research job" lead="A useful spreadsheet is not just a wall of links. Every item type creates different sizing, photo, packaging and shipping questions. Start with the category, apply the right checks, then open the corresponding maintained product route.">
      <div className="article-note"><strong>Official fact boundary:</strong> LoloBuy’s public homepage says users can paste a product link to complete an order. The category-specific checks below are this site’s independent research framework; they are not LoloBuy guarantees or policies.</div>
      <h2>Why the category comes before the product link</h2>
      <p>A row can tell you where a product was found, but it cannot decide whether the evidence is sufficient. Shoes depend heavily on size-system clarity and paired symmetry. Jackets require construction, lining and closure checks. Electronics introduce compatibility and safety questions that a photograph cannot settle. Treating every category with the same generic “looks good” test hides the issues most likely to matter after purchase.</p>
      <div className="directory-grid">
        {categories.map(([name, href, note], index) => (
          <a className="directory-card" href={href} target="_blank" rel="noopener noreferrer" key={name}>
            <small>{String(index + 1).padStart(2, "0")} / Category</small><h3>{name} ↗</h3><p>{note}</p>
          </a>
        ))}
      </div>
      <h2>The minimum evidence to save for any category</h2>
      <p>Before a listing changes, save the source URL, visible title, chosen variant, displayed price and date checked. Record the seller’s size or specification information separately from your own notes. If a spreadsheet includes a thumbnail, treat it as an orientation aid—not proof that the live listing still uses the same image, variation or price.</p>
      <table className="evidence-table"><thead><tr><th>Field</th><th>What it can establish</th><th>What it cannot establish</th></tr></thead><tbody>
        <tr><td>Source URL</td><td>The page intended for the purchase route</td><td>Current stock, seller performance or future page stability</td></tr>
        <tr><td>Visible price</td><td>A dated price observation</td><td>The final amount after options, domestic delivery or later changes</td></tr>
        <tr><td>Size chart</td><td>The seller’s stated measurements or sizing system</td><td>Guaranteed fit or measurement accuracy</td></tr>
        <tr><td>Listing photos</td><td>How the seller presents the product</td><td>The exact warehouse item’s condition</td></tr>
        <tr><td>Warehouse photos</td><td>Visible details under the provided angles and lighting</td><td>Hidden construction, long-term durability or authenticity</td></tr>
      </tbody></table>
      <h2>How to move from a category page to a decision</h2>
      <ol><li>Open the matching category and shortlist products by intended use—not by thumbnail alone.</li><li>Open the individual source page and confirm that it still resolves to the expected item.</li><li>Identify the exact option, colour, size or model you would select.</li><li>Write down the category-specific questions that the listing does not answer.</li><li>Compare the available evidence with your risk tolerance before continuing.</li></ol>
      <p>The links above go to precise FindSpreadsheet categories rather than sending every visitor to a generic homepage. That preserves the searcher’s context and makes it easier to compare current rows without pretending this independent research site controls seller stock or platform rules.</p>
    </ArticleShell>
  );
}
