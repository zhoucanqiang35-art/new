import { ArticleShell, SourcesBlock } from "../site-components";
import { pageMetadata } from "../seo";

export const metadata=pageMetadata("en-US","qc","PikoBuy Warehouse QC Checklist","Use warehouse photos to verify variations, measurements and visible condition.");

const checks = [
  ["Shoes", "Selected size and colour, size label, outsole, profile, stitching and visible glue."],
  ["Clothing", "Measurements, fabric description, print or embroidery placement, seams, zips and labels."],
  ["Bags & accessories", "Dimensions, hardware finish, closures, symmetry, stitching and included pieces."],
  ["Electronics", "Exact model, configuration, plugs or voltage, battery status, accessories and route restrictions."],
] as const;

export default function QcPage() { return <ArticleShell eyebrow="Warehouse QC / checklist" title="Photos reduce uncertainty. They do not certify a product." intro="Use warehouse images to confirm the order you actually received, catch visible defects and decide whether to request a return before international shipping.">
  <div className="article-body"><div className="prose"><h2>Four category checklists</h2>{checks.map(([name, text]) => <div className="callout" key={name}><strong>{name}</strong>{text}</div>)}<h2>What photos usually cannot prove</h2><p>Images cannot reliably establish hidden construction, long-term durability, material composition, battery health, exact colour under different lighting or authenticity. Treat a QC photo as a visual record of the warehouse item, not an independent certification.</p><h2>Compare in a fixed order</h2><ol><li>Verify product, colour, size and quantity.</li><li>Compare the overall silhouette and dimensions.</li><li>Inspect high-risk details specific to the category.</li><li>Read the current return policy before the stated window closes.</li><li>Only then combine approved items into an international parcel.</li></ol><h2>Ask for evidence that changes the decision</h2><p>If an extra photo is available, request a measurable or specific view: a tape measurement, size label, outsole, hardware close-up or serial/model label. “More photos” is less useful than a precise question.</p></div><SourcesBlock/></div>
</ArticleShell>; }
