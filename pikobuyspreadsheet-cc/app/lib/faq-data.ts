import { sourceRegistry } from "./source-registry";

export const faqItems = [
  {
    question: "Is this the official PikoBuy website?",
    answer: "No. This is an independent research and product-discovery site. It explains public PikoBuy pages and links product research to FindSpreadsheet, but it cannot access a PikoBuy account, place an order, inspect a warehouse item, change a parcel or approve a refund. Use the official PikoBuy account and support channels for any private order, payment, return or tracking case.",
    sources: [sourceRegistry.contact, sourceRegistry.home],
  },
  {
    question: "What are the main stages of buying through PikoBuy?",
    answer: "PikoBuy’s beginner guide describes six stages: select an item, search by link or keyword, submit the purchasing order and make the first payment, review warehouse inspection, choose a shipping route and pay international freight, then wait for the parcel. Keep each stage separate because the evidence, cost and responsible party change as the order moves forward.",
    sources: [sourceRegistry.guide],
  },
  {
    question: "Does a working PikoBuy product link mean the item is verified?",
    answer: "No. The official guide says PikoBuy can search a pasted product link or keywords. A successful import shows that a listing can be located or read; it does not independently prove the seller, exact option, current stock, material, authenticity or product quality. Compare the raw source URL, item identifier, images, options and current price before submitting a purchasing order.",
    sources: [sourceRegistry.guide],
  },
  {
    question: "Why are product cost and international shipping shown separately?",
    answer: "The official workflow places them at different stages. The first payment follows option selection and submission of the purchasing order. International freight is chosen and paid later, after warehouse arrival and parcel preparation. Source price, actual purchase amount, domestic seller delivery, payment conversion and international freight should therefore be kept in separate fields rather than combined into one misleading delivered-price estimate.",
    sources: [sourceRegistry.guide],
  },
  {
    question: "What can PikoBuy warehouse photos actually prove?",
    answer: "The official workflow describes check-in, photo confirmation and defect checking. Forwarding terms also say users may view inspection photographs or purchase additional detailed photos, while specialist products may not receive professional inspection. Photographs can support visible observations such as colour, labels, measurements or damage, but they cannot reliably prove internal electronics, fibre composition, long-term durability, fit or authenticity.",
    sources: [sourceRegistry.guide, sourceRegistry.shipping],
  },
  {
    question: "Which inputs does the PikoBuy shipping estimator require?",
    answer: "The public estimator asks for the destination country or region, product type, weight in kilograms, length, width and height in centimetres. Those are planning inputs for a parcel, not a guaranteed quote for an unpacked product. Re-run the comparison when the warehouse has final packed measurements and check the live route conditions shown for the destination and product type.",
    sources: [sourceRegistry.estimate],
  },
  {
    question: "Is volumetric weight always calculated with one universal formula?",
    answer: "The estimator’s use of three dimensions shows that parcel volume can matter as well as scale weight, but the public page does not establish one universal divisor for every route. Billing methods can differ. Record the actual packed dimensions, kilograms, route and date, then apply only the chargeable-weight rule published for the route you are actually considering.",
    sources: [sourceRegistry.estimate, sourceRegistry.guide],
  },
  {
    question: "Does PikoBuy promise delivery within three days?",
    answer: "No. The beginner guide says tracking information will be available within three days after the parcel is shipped. That statement concerns logistics visibility after dispatch; it is not a three-day delivery promise and should not be counted from purchase or warehouse arrival. Shipping terms also identify third-party carriers, customs action, damage, loss and peak-season delay as cross-border risks.",
    sources: [sourceRegistry.guide, sourceRegistry.shipping],
  },
  {
    question: "How does the 120-hour warehouse return window work?",
    answer: "PikoBuy’s return policy says an application should be made within five days after the order status becomes In Warehouse, counting from the next hour after that status change; five days equals 120 hours. The deadline does not make every product returnable. Seller participation, resale condition, packaging requirements, exclusions and seller consent still determine whether the standard process applies.",
    sources: [sourceRegistry.returns],
  },
  {
    question: "What fees can apply to an unconditional return?",
    answer: "The current return policy lists shipping back to the seller, the seller’s original shipping fee and an RMB 5 service fee for an unconditional return. It also says the first-delivery cost may still be charged even when the seller advertised free shipping. Responsibility and product condition matter, so use the live account return flow for the actual allocation and refund amount.",
    sources: [sourceRegistry.returns],
  },
  {
    question: "Are forwarded products handled like PikoBuy-purchased products?",
    answer: "Not completely. PikoBuy’s forwarding terms describe a separate four-step process and say forwarded goods must be unpacked and inspected. The same terms state that after-sales service for forwarded products remains with the sender or seller; PikoBuy can assist with shipping an item back. Preserve sender tracking, the forwarding form, received photographs and the sender-side return route.",
    sources: [sourceRegistry.shipping],
  },
  {
    question: "Where should I ask about an account, payment, refund or parcel?",
    answer: "Use PikoBuy’s official contact routes. Its contact page publishes Support@pikobuy.com, recommends submitting a ticket and links Discord and Reddit. Include the relevant order or parcel reference, current status, a concise expected resolution and screenshots that do not expose passwords or private credentials. An independent spreadsheet site cannot inspect or change the private record.",
    sources: [sourceRegistry.contact],
  },
  {
    question: "Should I remove retail packaging before deciding whether to return an item?",
    answer: "Be cautious. PikoBuy’s return policy lists product-condition and packaging standards, and some goods can become non-returnable when seals, labels, accessories or protective elements are removed. Minimal packaging may reduce later parcel volume, but that decision belongs after warehouse review. Preserve decisive packaging photographs and read the rule for the actual category before authorizing removal or opening.",
    sources: [sourceRegistry.returns, sourceRegistry.guide],
  },
  {
    question: "Are the USD prices on this research site final checkout prices?",
    answer: "No. They are dated editorial conversions of the CNY source price recorded by FindSpreadsheet. They exclude option changes, seller adjustments, domestic delivery, payment-provider conversion, agent charges, return costs and international freight. The live source and PikoBuy purchasing order control the actual product amount; final parcel data and the selected route control international shipping.",
    sources: [sourceRegistry.finds, sourceRegistry.guide],
  },
  {
    question: "How often are product records and policy pages updated?",
    answer: "The update date changes only after a defined check. Product refreshes read the current FindSpreadsheet Latest Products section and preserve the source URL, CNY price, image and check date. Policy reviews open the exact PikoBuy guide, estimator, shipping, return or contact page. A template deployment alone is not treated as a factual update, and unavailable records should retain a transparent status history. Higher-risk pages such as returns, shipping and support should be rechecked before lower-impact editorial wording. When a source changes materially, the update log should name the affected statement instead of silently replacing the earlier date. The refresh record should also identify the retrieval method and exchange-rate assumption so another editor can repeat the check. If a product disappears from the source, its previous evidence may remain in history, but it must not keep a current or recently verified badge. Failed retrievals should preserve the last successful check date and raise a review task instead of silently re-dating the old snapshot.",
    sources: [sourceRegistry.finds, sourceRegistry.guide, sourceRegistry.shipping, sourceRegistry.returns],
  },
] as const;
