import type { SeoArticle } from "@/lib/seo-article-content";

/** Retained editorial notes; not rendered as outbound links on the article. */
export const shipCareClaimEditorialSourceNotes = [
  "LoloBuy public homepage and current English application bundle, reviewed 17 October 2026 (release v1.0.1, site build time 16 October 2026).",
  "The current parcel interface can display a parcel-specific ShipCare record with a policy number, enrolment date, maximum compensation field, claim-filing period, rules, service range, and File Claim action.",
  "The current claim form obtains the permitted claim types from the live policy record; visible type labels can include parcel loss, item damage or loss, customs seizure, and parcel delay, but this article does not assert that every type is available for every parcel.",
  "The current form includes a required loss description, affected-item and quantity fields where applicable, evidence upload, and a parcel-linked submission record. The current upload control accepts JPG/JPEG, PNG, PDF, and video, with up to ten files, images up to 2 MB each, and videos up to 20 MB each.",
  "The current claim area exposes a claim number, submission time, status, progress logs, and a route for supplying requested documents.",
  "No universal coverage, premium, compensation amount, filing window, review time, eligibility, approval, payout, or outcome is asserted in this article.",
] as const;

export const shipCareClaimArticle: SeoArticle = {
  slug: "lolobuy-shipcare-claim-guide",
  title: "LoloBuy ShipCare Claim Guide: Build a Parcel Evidence File",
  description:
    "A practical method for verifying a parcel-specific LoloBuy ShipCare record, selecting an available claim type, organising evidence, and tracking the case without assuming an outcome.",
  primaryKeyword: "LoloBuy ShipCare claim",
  researchDate: "17 October 2026",
  sections: [
    {
      heading: "Start with the parcel-specific ShipCare record",
      paragraphs: [
        "A LoloBuy ShipCare claim should begin with the policy information attached to the actual parcel, not with a general assumption that every shipment is insured in the same way. The current parcel interface can show a ShipCare protection record containing a policy number, enrolment date, rules, service range, maximum-compensation field, claim-filing period, and a File Claim action. Treat those live fields as the controlling research record for that parcel.",
        "Save the parcel number, policy number, enrolment record, visible service range, and research date before drafting anything. Read the current rules and record the filing period exactly as displayed, because this guide does not publish a universal deadline. If the parcel does not show an active claim action or the expected policy record, do not copy terms from another shipment. Investigate the specific parcel instead of treating ShipCare as a blanket promise.",
      ],
    },
    {
      heading: "Separate a tracking concern from a claim event",
      paragraphs: [
        "A quiet tracking page is a reason to research, but it is not automatically proof of parcel loss or delay under a policy. Reconcile the waybill number, dispatch date, latest carrier event, destination, and parcel status first. Preserve screenshots with visible dates and copy the event text accurately. This creates a timeline without converting an unclear scan into a conclusion that the evidence does not yet support.",
        "Compare the timeline with the live ShipCare rules and the claim types presently offered for the parcel. A carrier scan, delivery record, customs notice, or photographs of a received package may change which evidence is relevant. Keep tracking observations separate from policy conclusions: one file describes what happened to the shipment, while the policy record determines whether and how the account currently allows a claim to be filed.",
      ],
    },
    {
      heading: "Use only the claim types offered in the live form",
      paragraphs: [
        "The current claim interface retrieves the permitted claim types for the selected policy. Labels visible in the public application can include parcel loss, item damage or loss, customs seizure, and parcel delay. That list describes the interface, not universal eligibility. The types available to a particular buyer can depend on the parcel and policy record, so select only a type that the live form actually offers for the case.",
        "Choose the narrowest accurate category and preserve a screenshot of the selection. Do not use parcel loss merely because an update is late, damage merely because packaging looks worn, or customs seizure without an official event or notice that supports it. If the facts do not match an available type, save the evidence and check the live rules rather than forcing the situation into a more dramatic label. Precision makes later review easier.",
      ],
    },
    {
      heading: "Link the claim to the exact parcel and items",
      paragraphs: [
        "Before completing the narrative, reconcile the claim with the parcel ID, waybill, included order numbers, stored-item references, and quantities. For an item damage or loss case, the current form can ask the buyer to select affected items and claim quantities. Work from the packed parcel record rather than memory. Similar product names and thumbnails are not enough when several variants or orders were consolidated together.",
        "Create a simple item ledger with one line per affected item: order reference, warehouse reference, ordered specification, packed quantity, received quantity, and observed issue. The claim quantity should not exceed what the evidence can support. Keep unaffected items out of the loss description except where they help explain the package condition. A focused ledger prevents the parcel-level event and the item-level impact from becoming mixed or duplicated.",
      ],
    },
    {
      heading: "Write a factual loss description",
      paragraphs: [
        "The current form requires a loss description and limits the field to 2,000 characters. Draft it as a short chronology: when the parcel was dispatched, the last confirmed event, what was received or not received, the visible condition, and which items or quantities are affected. Use dates, identifiers, and direct observations. Avoid emotional language, accusations, estimates presented as facts, or copied text that refers to a different shipment.",
        "A useful description lets a reviewer match each sentence to a record. For example, connect a torn corner to a photograph number, a missing item to the packing list and received count, or a customs event to the notice date. State what is unknown as unknown. Do not claim authenticity, hidden damage, carrier responsibility, or a compensation value unless the submitted record establishes it. Concision is stronger than filling every available character.",
      ],
    },
    {
      heading: "Photograph the parcel's chain of custody",
      paragraphs: [
        "When a parcel arrives, document it before discarding packaging or rearranging contents. Photograph the shipping label and waybill, every side of the outer package, seals, tears or compression, internal packing layers, and the complete group of received items. Then make close views of each affected item. If an unboxing video already exists, preserve the original file rather than editing it into a sequence that removes context.",
        "Evidence should show scale and orientation without staging a new condition. Keep labels readable but redact private details from any working copy that does not need them. Do not alter timestamps, add damage for emphasis, or reuse another buyer's images. If the issue is a missing item, the most helpful record often combines the unopened-package condition, continuous opening evidence where available, packing material, all received contents, and the parcel's recorded item list.",
      ],
    },
    {
      heading: "Prepare an upload set the form can accept",
      paragraphs: [
        "As reviewed on 17 October 2026, the current evidence control accepts JPG or JPEG, PNG, PDF, and video, with no more than ten files. The interface displays a 2 MB limit for each image and a 20 MB limit for each video. These are current technical form constraints, not permanent policy terms. Recheck the live control before submission in case the accepted formats or limits have changed.",
        "Use descriptive filenames such as 01-waybill, 02-outer-front, 03-torn-corner, 04-packing-list, and 05-item-order-reference. Compress copies only enough to meet the displayed limit while keeping text and damage visible; retain the originals separately. Combine related pages into a readable PDF when appropriate, but do not hide dates or crop away context. Ten organised files are more useful than ten repetitive close-ups with no parcel identity.",
      ],
    },
    {
      heading: "Build an evidence index before submission",
      paragraphs: [
        "Make a one-page index that maps each claim statement to its supporting file. Include the parcel and policy numbers, selected claim type, affected order references, quantities, event dates, and filenames. Check that the form selection, description, item ledger, and uploads all describe the same case. Contradictions such as different quantities or dates create avoidable uncertainty even when each individual file is genuine.",
        "Review the live policy fields one final time, then submit only when the record is complete enough to reproduce. Save the confirmation view, claim number, submission time, selected type, description, file list, and visible status. The submission record is part of the evidence trail. This guide does not predict acceptance or compensation; it helps preserve what was actually sent so later requests can be answered without rebuilding the case from memory.",
      ],
    },
    {
      heading: "Track status and supply requested documents",
      paragraphs: [
        "The current claim area can display a claim number, submission time, status, progress logs, and claim details. Use those fields as the case timeline. Record each status change with its date and any accompanying message. Do not translate a processing label into an approval, payment, or rejection before the interface says so, and do not publish a fixed review time based on a single screen or individual experience.",
        "If the case requests supplementary material, answer the exact gap described. Add the requested document or clearer evidence, update the index, and preserve the new upload and timestamp. Do not replace the original history or submit unrelated files simply to increase volume. A supplement should explain what it adds, such as a clearer waybill, a carrier notice, a full-package photograph, or an item reference that links the damage to the packed parcel.",
      ],
    },
    {
      heading: "Close the claim record without assuming the outcome",
      paragraphs: [
        "When the claim reaches a final state, save the final status, progress log, decision text, and any amount or account movement actually displayed. Reconcile those fields with the original parcel and policy record. Do not describe a pending balance entry as settled compensation, and do not generalise one result into a promise for another parcel. The live decision and policy terms remain authoritative for that individual case.",
        "Keep the complete file together: policy screenshot, parcel timeline, tracking evidence, packing record, item ledger, original media, uploaded copies, description, evidence index, claim number, supplements, and final status. A disciplined LoloBuy ShipCare claim is not built by exaggerating uncertainty. It is built by connecting a parcel-specific policy to a dated, consistent evidence trail that another person can follow from the reported event to the recorded outcome.",
      ],
    },
  ],
  sourceNote:
    "Research date: 17 October 2026. Source notes retained in the editorial record: LoloBuy public homepage and current public English parcel, ShipCare policy, claim-form, claim-list, claim-detail, progress-log, and supplementary-document interfaces. Verified fields include a parcel-linked policy number, enrolment date, rules, service range, maximum-compensation field, claim-filing period, live permitted claim types, a required description limited to 2,000 characters, affected-item and quantity selection where applicable, evidence upload, claim number, submission time, status, logs, and document supplementation. The current upload control accepts JPG/JPEG, PNG, PDF, and video, with up to ten files, images up to 2 MB each, and videos up to 20 MB each. This independent article is not affiliated with LoloBuy and does not assert universal coverage, a premium, a compensation amount, a filing window, review time, eligibility, approval, payout, or outcome.",
};
