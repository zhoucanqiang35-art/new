import type { SeoArticle } from "@/lib/seo-article-content";

/** Retained editorial notes; not rendered as outbound links on the article. */
export const customPhotoRequestEditorialSourceNotes = [
  "LoloBuy public homepage and English application bundle, reviewed 15 October 2026 (release v1.0.1, site build time 9 October 2026).",
  "The current stored-item interface can expose a Fine Photo action separately from the standard QC report and QC photos.",
  "The current custom-photo form accepts repeatable Photo request cards; each card contains a required text instruction with a 256-character limit and one optional reference-image upload.",
  "The request quantity is derived from the number of photo cards, and the confirmation view calculates the displayed total from the live unit price and request count.",
  "No fixed fee, processing time, action availability, photo result, return eligibility, product quality, or shipping outcome is asserted in this article.",
] as const;

export const customPhotoRequestArticle: SeoArticle = {
  slug: "lolobuy-custom-photo-request-guide",
  title: "LoloBuy Custom Photo Request Guide: Ask for Evidence Before Shipping",
  description:
    "A practical method for turning a warehouse concern into clear LoloBuy custom photo instructions, reference images, review criteria, and a documented parcel decision.",
  primaryKeyword: "LoloBuy custom photo request",
  researchDate: "15 October 2026",
  sections: [
    {
      heading: "Use a custom photo to answer one unresolved question",
      paragraphs: [
        "A LoloBuy custom photo request is most useful after the standard warehouse evidence has been reviewed and a specific uncertainty remains. The current interface separates Fine Photo from the normal QC report and QC photos. That distinction matters: a buyer should not pay for extra images before checking what the existing record already proves. Start with the product identity, specification, quantity, visible condition, and any measurements already supplied.",
        "Write down the decision that the missing evidence affects. Perhaps a label is unreadable, a measurement was not shown, a seam needs a closer view, or a connector cannot be identified. If the answer would not change whether you keep, return, exchange, or ship the item, an additional image may add clutter rather than value. The strongest request connects one visible fact to one real warehouse decision.",
      ],
    },
    {
      heading: "Open the request from the correct stored item",
      paragraphs: [
        "The Fine Photo action is attached to a stored-item record. Before opening it, reconcile the warehouse item number with the original order, product link, selected specification, quantity, and existing QC set. Similar thumbnails are not sufficient. Two items can share a style while differing in size, colour, seller, or order reference, and a perfectly written request attached to the wrong record will not solve the intended problem.",
        "Keep the item reference and research date beside the request draft. If the action does not appear for the item, do not infer that every item includes it or that the interface is broken. Availability is linked to the live item state. Preserve the visible status and investigate that record rather than borrowing instructions from another product. This guide does not promise that the action will be offered in every account situation.",
      ],
    },
    {
      heading: "Turn a vague concern into a visual question",
      paragraphs: [
        "Requests such as 'check quality,' 'take more photos,' or 'show everything' are difficult to verify because they do not define a subject, angle, or pass condition. Replace them with a visual question: Does the inside label show the ordered size? What is the outsole length from heel to toe? Is the marked area a scratch or removable surface dust? Does the plug match the shape shown in the order reference?",
        "A good instruction names the exact feature, tells the photographer how to frame it, and states what must remain readable. For example: photograph the entire size label straight on, close enough that every printed line is legible. That wording is more actionable than asking for a close-up of the item. Avoid demanding conclusions about authenticity, material composition, fit, durability, or function when a photograph can only document appearance.",
      ],
    },
    {
      heading: "Use one request card for one required view",
      paragraphs: [
        "The current form supports repeatable cards labelled Photo 1, Photo 2, and onward. Each card represents a separate requested image and carries its own instruction. Use that structure deliberately. If you need a label view, a measurement view, and a damage close-up, create three separate cards. Do not compress three angles into one sentence and then expect one photograph to prove them all.",
        "Prioritise the smallest set of views that can resolve the decision. Give every card a short internal purpose in your notes, such as size label, left seam, or width measurement. The interface derives the request quantity from the number of cards, so unnecessary cards can affect the displayed total. More images are not automatically better; complete, non-overlapping coverage is the goal.",
      ],
    },
    {
      heading: "Write within the instruction field's limit",
      paragraphs: [
        "Each current photo instruction is required and limited to 256 characters. Draft outside the form first, then remove background story that the photographer cannot act on. Keep the item part, requested angle, framing, and evidence standard. A compact instruction might specify that a ruler must start at zero, remain flat against the garment, and show both endpoints in one frame.",
        "Use concrete nouns instead of pronouns. Name left sleeve, inner neck label, heel stitching, charging-port shape, or the highlighted scratch rather than saying 'this' or 'it.' If orientation matters, state it. If text must be readable, say so. Do not place account details, payment data, personal addresses, or unrelated order history in the instruction. The field should contain only what is needed to create the requested evidence.",
      ],
    },
    {
      heading: "Use a reference image as an instruction aid",
      paragraphs: [
        "The current request card can accept one reference image. Use it to point out the required angle, measurement method, or area of concern. A useful reference can contain a simple arrow or box, provided it does not hide the detail being discussed. Crop away unrelated content and remove personal information before upload. The purpose is to reduce ambiguity, not to decorate the request.",
        "A reference image is not proof that the warehouse item should look identical. It may come from a seller listing, an earlier QC frame, or your own annotated example, and each has limits. Explain in the text what the reference is meant to demonstrate. Never use an image alone to request authenticity verification, and do not assume that a visual match establishes material, origin, performance, or seller claims.",
      ],
    },
    {
      heading: "Make measurement photos reproducible",
      paragraphs: [
        "Measurement requests deserve extra precision because camera perspective and ruler placement can change what a photograph appears to show. State the measurement path, starting and ending points, unit, surface, and item condition. For clothing, say whether it should lie flat and whether the fabric should be relaxed. For shoes, distinguish outsole length from insole length. For bags or electronics, separate width, height, and depth.",
        "Ask for the complete measuring tool and both endpoints to remain visible in the same frame when practical. Do not convert a photographed dimension into a fit or shipping guarantee. It is one observed measurement of one stored item. Record the value with the photo date and compare it with the ordered specification, while keeping parcel dimensions and chargeable weight for the later packing workflow.",
      ],
    },
    {
      heading: "Reconcile request count and live total",
      paragraphs: [
        "Before confirming, count the request cards and compare that number with the distinct views in your plan. The current form calculates a displayed total from the live unit price and the number of cards. Record the currency, unit price if shown, quantity, and final total from that checkout. This article does not publish a fee because the value and availability must be verified in the current account.",
        "Remove duplicate requests before payment. Then review every instruction and reference image from top to bottom, confirming that each belongs to the same stored item. If the total changes after a card is added or deleted, save the final version rather than an earlier screenshot. Keep the payment or bill reference with the request so the resulting service record can be reconciled without guessing later.",
      ],
    },
    {
      heading: "Audit the returned photos against the request",
      paragraphs: [
        "When new photos appear, compare them card by card with the saved instructions. Mark each requirement answered, partly answered, or unanswered. Check that the image belongs to the correct item, contains the requested feature, uses the specified angle or measurement method, and is clear enough to read. Do not judge success simply because the account contains more images than before.",
        "Keep the original QC set separate from the added photos in your evidence log, even if the account displays both near the item. Record the observation date and the visible result, not a conclusion the image cannot support. If a requested view is missing or unclear, preserve the request and returned frame together. This guide does not promise a repeat photo, service remedy, response time, or refund outcome.",
      ],
    },
    {
      heading: "Convert the evidence into a parcel decision",
      paragraphs: [
        "The final step is not collecting the image; it is updating the item decision. If the custom photo resolves the concern and the rest of the warehouse record is consistent, mark the item ready for the next parcel-planning review. If it reveals a discrepancy, record the exact visible evidence and assess the live return or exchange options. If uncertainty remains, keep the item on hold rather than treating silence as approval.",
        "Retain the item reference, request text, reference image, request count, displayed total, bill reference, returned photos, and decision date. This creates an audit trail from concern to evidence to action. Used carefully, a LoloBuy custom photo request is not a promise of product quality. It is a focused research tool for closing a defined visual evidence gap before an item enters international parcel submission.",
      ],
    },
  ],
  sourceNote:
    "Research date: 15 October 2026. Source notes retained in the editorial record: LoloBuy public homepage and current public English stored-item, Fine Photo, custom-photo request, QC report, QC photo, value-added-service, bill, return, exchange, and parcel-submission interfaces. Verified request fields include repeatable Photo cards, a required instruction limited to 256 characters, one reference-image upload per card, request quantity based on card count, and a confirmation total calculated from the live unit price and quantity. This independent article is not affiliated with LoloBuy and does not assert a fixed fee, processing time, action availability, image result, remedy, product quality, or shipping outcome.",
};
