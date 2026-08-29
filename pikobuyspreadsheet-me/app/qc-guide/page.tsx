import type { Metadata } from "next";
import GuidePage from "../guide-page";
import { localizedAlternates } from "../seo-metadata";

export const metadata: Metadata = {
  title: "PikoBuy QC Photo Guide 2026 | What to Check",
  description: "A practical 2026 guide to PikoBuy warehouse inspection photos, measurements, category checks and return decisions.",
  alternates: localizedAlternates("qc-guide"),
};

export default function Page(){return <GuidePage pageId="qc-guide" kicker="QUALITY CONTROL" title="PikoBuy QC photos: what to inspect before parcel submission" intro="PikoBuy says items are checked in, photographed and inspected after they reach its China warehouse. These images are useful, but they are limited evidence. A good QC review starts with the order and asks clear, category-specific questions." sections={[
  {heading:"What PikoBuy publicly says about inspection",paragraphs:[
    "PikoBuy’s homepage describes quality inspection and repacking when goods arrive at its China warehouse. Its beginner guide adds three practical actions: warehouse check-in, photo confirmation and a defect check. For forwarded goods, the shipping terms state that items must be unpacked and inspected, and that customers can view inspection photos or buy additional detailed photos.",
    "Those statements explain the service, but they do not make every photo set complete. A standard image may confirm that an item arrived and show its general condition. It may not show every seam, measurement, label, accessory or functional detail. Professional inspection may also be unavailable for specialised products. Read the images as evidence of what is visible, not proof of everything that matters."
  ]},
  {heading:"First question: is it the item you ordered?",paragraphs:[
    "Many QC mistakes happen because the reviewer starts by looking for small defects and forgets the basic identity check. Compare the warehouse photos with the current source page and your saved order. Confirm the product type, colour, pattern, size, quantity and visible option label. If the seller changed the listing after purchase, use your order record and saved screenshots as the comparison point.",
    "Check all pieces that should be included. A set may be missing one part. A pair of shoes may show only one size label. An electronic product may arrive without the expected cable or plug. A bag may have a removable strap that is not visible. If the order is wrong, a perfect close-up of one detail does not solve the larger problem.",
    "Write down the mismatch in plain language: “ordered navy, received black,” or “ordered size 42, visible label says 41.” Precise notes are easier for support to understand than general comments such as “not right.”"
  ]},
  {heading:"Shoes and sneakers",paragraphs:[
    "Ask for a balanced set of views: both outer sides, both inner sides, toes, heels, outsoles and size labels. Put both shoes in the same frame when possible so you can compare shape, height, colour and alignment. Look for obvious glue marks, damaged material, uneven stitching, a distorted sole or a missing accessory.",
    "Size needs more than a box label. Compare the visible shoe label with the ordered option. If fit is important, look for an insole or outsole measurement, then compare it with a pair you own. Different brands and sellers can use different size conversions. A familiar number does not guarantee the same internal length.",
    "Packaging can add volume. Decide whether the retail box matters to you before parcel submission. Removing it may reduce space, while keeping it may offer structure and protection. The correct choice depends on the product and your priorities."
  ]},
  {heading:"T-shirts, hoodies, sweaters and jackets",paragraphs:[
    "For clothing, start with full front and back views. Then check print or embroidery placement, collar shape, cuffs, hem, pockets, zippers, buttons, lining and visible stitching. A close-up should answer a specific question. A large logo photo is not useful if the overall placement cannot be seen.",
    "Use measurements instead of trusting S, M, L or XL. Compare chest width, body length, shoulder width and sleeve length with a garment you already own. Make sure the tape is straight and the endpoints are visible. Note whether the garment is laid flat and whether stretchy fabric can affect the result.",
    "Jackets and thick hoodies deserve extra attention because they can be heavier and bulkier than a spreadsheet photo suggests. Record the warehouse weight and think about packaging volume before combining them with other items."
  ]},
  {heading:"Pants and shorts",paragraphs:[
    "Useful views include the front, back, waistband, pockets, closures, hems and fabric surface. Check waist width, rise, inseam and leg opening when those measurements affect fit. Compare the measurement method with your own reference garment. A seller’s size chart and a warehouse measurement can differ because of how the item is laid out.",
    "Look for obvious stains, tears, damaged hardware and uneven construction. Distressing or washed finishes can be intentional, so compare them with the ordered listing rather than treating every irregular mark as a defect. If a decorative treatment should appear in a specific place, use the original product image as the reference."
  ]},
  {heading:"Bags, accessories, jewelry and watches",paragraphs:[
    "For bags, request the front, back, base, sides, interior, closure, strap, handles and hardware. Dimensions matter because product photos can make a small bag look larger. Confirm whether removable straps, pouches or other listed accessories are present. Check the shape after packing because soft bags may look different when empty.",
    "For jewelry and watches, use clear close-ups of the face or dial, clasp, crown, links, finish and visible markings. Record the dimensions. Photos can show scratches, colour differences or missing parts, but they cannot prove the metal composition, movement accuracy, water resistance, authenticity or long-term durability. Avoid claims that exceed the evidence.",
    "Small accessories are easy to overlook in a parcel. Confirm quantity and visible variants before submission. If an item is sealed and opening it could affect return eligibility, check the applicable rules before asking for packaging to be removed."
  ]},
  {heading:"Electronics and specialised products",paragraphs:[
    "Confirm the model or specification label, plug type, included accessories and any battery information. Compare the visible model code with the source page and order. A power-on photo may show that a screen lights up, but it is not a full technical test. Internal condition, battery health, network compatibility and long-term performance may remain unknown.",
    "PikoBuy’s forwarding terms say professional inspection cannot be provided for special and professional products. Its return rules also set special packaging conditions for several digital and electronic categories. Do not ask for seals to be removed without understanding how that could affect return eligibility.",
    "Electronics may face shipping restrictions depending on batteries, product type and route. QC and shipping are separate decisions. A product can look correct in the warehouse and still be ineligible for a particular line."
  ]},
  {heading:"When to request an extra photo",paragraphs:[
    "Request more evidence when a critical angle is missing, a measurement is unclear, an option label cannot be read, an accessory is not shown or a possible defect needs a close-up. Keep the request narrow: “show the size label,” “measure chest width from armpit to armpit,” or “photograph the inside pocket and zipper.” A precise request produces more useful evidence than “take more photos.”",
    "Prioritise questions that can change your decision. Extra images of details you already understand add cost and noise. One clear measurement can be more valuable than ten decorative photos."
  ]},
  {heading:"QC and the return clock",paragraphs:[
    "PikoBuy’s published return rules describe a five-day warehouse return window for eligible goods. The page explains that the period is 120 hours after the order status changes to “In Warehouse,” counted from the next hour. Eligibility also depends on the seller’s return support, the product remaining resalable and the category rules. Some goods are not eligible or have special sealed-packaging requirements.",
    "Review photos promptly. If you find a mismatch or visible problem, use the official order process and select the accurate reason. The return outcome can depend on seller agreement and responsibility. Costs can also apply for customer-choice returns. Do not wait until parcel submission to examine evidence that was available when the item entered the warehouse."
  ]},
  {heading:"A simple pass, question or stop decision",bullets:[
    "Pass: the item identity matches, key views are clear, measurements are usable and no important visible issue remains.",
    "Question: one decision-changing detail is missing or unclear; request focused evidence before acting.",
    "Stop: the item, option, quantity or visible condition does not match the order; use the official after-sales process promptly.",
    "Remember: passing a photo review means the visible evidence is acceptable. It is not a guarantee of authenticity, hidden condition or future performance."
  ]}
]} />}
