import type { Guide } from "./guides";

export const guidePartTwo = {
  "shipping-costs": {
    title: "How to estimate the real cost of a LoloBuy order",
    deck: "A transparent budget method that separates product price, China-side costs, inspection choices, international freight and destination charges.",
    label: "COST CONTROL", read: "15 MIN READ",
    sections: [
      {
        heading: "Start with what the official pages do—and do not—promise",
        paragraphs: [
          "LoloBuy's official app listings promote shopping guidance, payment support, multi-currency use and international shipping. The website also advertises quality inspection and inspection feedback. Those statements confirm categories of service; they do not publish a universal service-fee table, a permanent freight rate, a guaranteed exchange rate or a fixed delivery cost for every country. Any page that claims one all-in LoloBuy price without a dated live quote is therefore simplifying a parcel-specific calculation.",
          "The right way to budget is to separate stages. Record the item purchase first, then China-side delivery and platform-related costs, then warehouse or inspection choices, then international freight, and finally destination-side tax or handling when applicable. Some amounts are known when the order is submitted; others remain estimates until the warehouse has measured the product or completed parcel. Marking that difference prevents a low product price from being mistaken for the delivered cost."
        ]
      },
      {
        heading: "Build a layered order worksheet",
        paragraphs: [
          "Layer one is the marketplace item: unit price multiplied by quantity, plus any seller-side domestic delivery shown for the order. Layer two covers payment conversion and any platform service amount displayed before confirmation. Layer three includes optional requests, packaging or other warehouse services when actually selected. Layer four is international freight for the completed parcel, including any clearly displayed surcharge or insurance choice. Layer five is destination exposure: import tax, duty, carrier handling or other lawful charge that may be assessed after dispatch.",
          "Use separate columns rather than one total cell. Add a status column with labels such as quoted, paid, estimated and final. The product price may be paid while international shipping is still unknown. A freight estimate may change after actual measurement or repacking. Destination charges may remain unknown until customs or the carrier processes the parcel. A layered worksheet shows which number changed and why. It also allows you to compare products fairly: a bulky low-cost item can be more expensive to deliver than a smaller higher-priced item."
        ],
        checklist: ["Marketplace item price", "Seller domestic delivery", "Displayed platform or payment cost", "Optional inspection or packaging choices", "International freight", "Possible destination charges"]
      },
      {
        heading: "Understand the weight that is actually billed",
        paragraphs: [
          "Actual weight is the scale weight of the parcel. Dimensional or volumetric weight represents the space it occupies and is normally calculated from parcel dimensions under a carrier-specific formula. A service may charge using the greater value or another stated method. This is why a large puffer jacket, shoe boxes or protective packaging can cost more than a simple per-kilogram guess suggests. Do not insert a divisor copied from a forum unless it matches the live route terms displayed for your parcel.",
          "Before warehouse measurement, use a range rather than a single freight prediction. After measurement, save the weight, dimensions, selected service and date of quote. If removing a box reduces dimensions, compare the saving with the loss of protection or packaging value. If consolidation reduces repeated base charges, remember that it also combines value and risk. There is no universally optimal parcel size. The practical target is a parcel whose contents, dimensions and protection produce an acceptable complete quote under a route that serves the destination."
        ]
      },
      {
        heading: "Account for currency and payment differences",
        paragraphs: [
          "Multi-currency support, mentioned in the official app description, improves accessibility but does not mean the displayed conversion will equal the final amount charged by every card or payment provider. Record the source currency, displayed conversion, account charge and date. Your bank or payment method may apply its own exchange rate or fee. A small difference on one product can become material when repeated across several purchases and an international freight payment.",
          "Use one reporting currency in your worksheet, but keep the original-currency amount beside it. This prevents later exchange-rate movement from rewriting the historical price. If a refund occurs, compare the original payment and returned amount in both currencies; timing and provider conversion can produce a difference. The correct delivered-cost record is the amount actually charged and refunded, not a rate remembered from the day you first discovered the product."
        ]
      },
      {
        heading: "Compare routes by delivered value, not headline price",
        paragraphs: [
          "A cheaper displayed freight amount can come with different size limits, content restrictions, tracking detail, handling time or compensation terms. Read the full service card or terms shown at checkout. Compare the amount charged for your exact parcel, the delivery estimate, tracking coverage, accepted contents, insurance or compensation conditions and destination hand-off. The official LoloBuy public pages reviewed do not promise that one route is permanently fastest or cheapest, so route recommendations must be tied to a date and parcel rather than published as timeless facts.",
          "Delivery estimates are planning information. Export processing, carrier capacity, weather, holidays, customs and final-mile delivery can change the actual outcome. Paying more may buy a different service scope, but it does not remove customs authority or every delay. Keep a contingency amount instead of spending the entire budget on the product price. A modest buffer for remeasurement, currency movement, packaging or destination charges is more realistic than a worksheet engineered to show the lowest possible total."
        ]
      },
      {
        heading: "Turn delivered orders into better future estimates",
        paragraphs: [
          "After delivery, replace every estimate with the amount actually paid. Allocate shared international freight across items using a consistent method, such as measured weight, chargeable volume or a simple value-based rule. No allocation method is perfect, but consistency lets you compare later orders. Record the destination, parcel weight, dimensions, product types, service, dispatch date, delivery date and any destination fee. Your own completed parcels become a more relevant reference than a viral screenshot with no date or context.",
          "Review the variance between estimated and actual cost. If freight was higher, identify whether weight, dimensions, packaging, route choice or currency was responsible. If destination charges appeared, record them without assuming the same treatment applies to every future parcel. This method respects what LoloBuy publicly offers—cross-border shopping support and international shipping—while refusing to invent fixed prices. The result is not a promise of the cheapest order; it is a budget you can explain, update and improve."
        ],
        checklist: ["Save every live quote with its date", "Separate estimates from paid amounts", "Record final parcel dimensions and service", "Replace estimates after delivery", "Use your own history for future planning"]
      },
      {
        heading: "Use scenarios instead of one optimistic total",
        paragraphs: [
          "Create a low, expected and high scenario before committing to several products. Keep the item price constant, then vary the uncertain lines: international freight, packaging, conversion and possible destination charges. The low case is not a promise; it is the result if estimates remain favourable. The expected case uses the most defensible live information, and the high case adds a reasonable buffer. If the purchase is only affordable in the low case, the budget is not ready. Scenario planning is especially useful before warehouse measurement because it shows how much uncertainty the order can absorb without forcing an unwanted shipping decision later.",
          "Do not hide uncertainty by rounding every variable downward. Write the source and date beside each estimate: seller listing, payment screen, warehouse measurement or live parcel quote. When a number changes, update the scenario instead of deleting the earlier figure. This audit trail makes the final cost understandable and helps you decide whether to remove an item, change packaging, split a parcel or wait for a different live option without pretending that a future rate is already known."
        ]
      }
    ]
  },
  "tracking-status": {
    title: "How to read LoloBuy parcel tracking without turning estimates into promises",
    deck: "A practical method for reading parcel references, carrier scans, customs events and quiet periods after an international shipment is submitted.",
    label: "TRACKING", read: "14 MIN READ",
    sections: [
      {
        heading: "Know what is confirmed before tracking begins",
        paragraphs: [
          "LoloBuy's official public materials confirm international or global shipping in broad terms. The app-store descriptions reviewed do not publish a universal scan sequence, carrier list or delivery guarantee. Tracking language can therefore differ by route and carrier. Before dispatch, save the parcel number, selected service, accepted delivery estimate, declared recipient address and any carrier reference shown. These records are the baseline for interpreting later events and for contacting the correct support channel.",
          "A parcel reference and a carrier tracking number may serve different systems. The platform reference identifies the order inside LoloBuy, while a logistics partner or final-mile carrier may use another number. Keep both when provided. Do not treat creation of a number as proof that a parcel has already boarded an aircraft or entered the destination network. Labels and electronic data can be created before physical collection, sorting or transfer, so the first visible scan may follow later."
        ]
      },
      {
        heading: "Read each status literally and in sequence",
        paragraphs: [
          "Tracking messages are short operational summaries. A phrase such as information received may indicate electronic data, while accepted or collected normally suggests a later physical event. Export processing, departure, line-haul transit, arrival and hand-off describe different stages, but their exact meaning depends on the named service. Avoid converting one translated phrase into a precise location or guaranteed next date. Read the latest event together with the previous event and the time between them.",
          "Create a simple timeline with date, displayed status and source. Use the platform record, the named carrier and the destination postal operator when applicable. Unofficial trackers can be convenient, but they may repeat delayed or translated data and should not overrule the underlying carrier. If two sources disagree, record the difference and ask the official service channel which reference is current. Screenshots are useful when a status later changes or disappears."
        ],
        checklist: ["Platform parcel number saved", "Carrier reference saved", "Accepted estimate archived", "Latest events recorded with dates", "Official source identified"]
      },
      {
        heading: "Understand why tracking can be quiet",
        paragraphs: [
          "International parcels can move between facilities, partners or countries without a customer-facing scan at every hand-off. A quiet period can occur before collection, during export processing, between line-haul updates, during customs presentation or while a final-mile partner imports data. Silence is not proof that the parcel is safe, but it is also not proof that it is lost. The route's stated support window and the last meaningful event provide better context than a universal rule copied from another shipment.",
          "Weekends, public holidays, weather, flight capacity, data transfer and local delivery workload can affect when an event appears. Compare elapsed time with the estimate accepted for the specific service, while remembering that an estimate is not a guarantee. Do not repeatedly submit duplicate support cases during a normal window; that can fragment the record. Prepare one clear request containing the parcel references, destination, last status, last status date and the action you want confirmed."
        ]
      },
      {
        heading: "Separate transit delay from data delay",
        paragraphs: [
          "A parcel can be moving while the public record is quiet, and a scan can also be uploaded after the event occurred. Compare the event timestamp, the time it appeared and the facility or partner named. A late data upload can make several events appear together. Conversely, repeated electronic-information messages without physical acceptance may indicate that the carrier has not yet scanned the parcel. The distinction matters because the correct question changes from 'Where is the parcel?' to 'Has the carrier physically accepted it?'",
          "Do not estimate position by drawing a straight line between countries or by relying on a flight rumour. International routes can include consolidation hubs and partner networks not shown to the customer. Use only locations stated in the official record. When the latest event is ambiguous, quote its exact wording and date to support. This is more useful than translating it into a confident story that the available data does not prove."
        ]
      },
      {
        heading: "Treat customs as a decision stage, not a verdict",
        paragraphs: [
          "A customs-related status can mean presentation, data review, tax assessment, request for information, physical inspection, release or another destination-specific process. Arrival at customs does not automatically mean seizure, and carrier acceptance does not guarantee customs release. Customs authorities act under destination law. If a verified carrier or authority requests information or payment, confirm the request through an official channel before responding and retain the notice.",
          "Avoid anyone promising guaranteed clearance or advising a false product description or value. Accurate records of contents, price and payment are more useful when a lawful query occurs. This guide cannot determine the import status of a particular item. For restricted, branded, electrical, battery-containing or otherwise controlled products, destination rules should be checked before purchase, not after a customs scan appears. The safest tracking problem is the one prevented during product and parcel planning."
        ]
      },
      {
        heading: "Escalate with a complete evidence packet",
        paragraphs: [
          "Escalate when the parcel exceeds the support window applicable to the chosen service, the carrier explicitly reports an exception, the recipient address is wrong, customs or the carrier requests action, or the parcel is marked delivered but cannot be located after immediate local checks. Use the official LoloBuy support channel for the platform parcel and the named carrier for carrier-level events. Keep the case number and avoid changing the explanation between messages.",
          "Your evidence packet should include the platform parcel number, carrier number, recipient country and postal code, dispatch date, last event, screenshot, selected service and exact question. If compensation or insurance may apply, read the accepted terms and deadlines rather than assuming a universal refund. LoloBuy's official materials support the fact of international shipping, but they do not eliminate third-party logistics uncertainty. Calm tracking means using dated evidence, the correct reference and the correct channel—not treating every pause as a loss or every estimate as a promise."
        ],
        checklist: ["Read the accepted service window", "Use the correct platform and carrier references", "Capture the last event and date", "Verify customs requests independently", "Keep one complete support timeline"]
      },
      {
        heading: "Handle a delivered scan that does not match reality",
        paragraphs: [
          "When tracking says delivered but the parcel is not present, check the exact address, delivery time, safe places, building reception and household members immediately. Confirm which final-mile carrier made the scan and whether proof of delivery is available. Contact the carrier and the platform through official channels without waiting for the tracking page to change. Record the case numbers, names and timestamps. Do not publish personal address details while asking for help. A delivered scan is important evidence, but it is not a substitute for locating the parcel; prompt, documented local checks create the clearest basis for any carrier investigation or claim under the accepted terms.",
          "If the parcel arrives damaged or incomplete, photograph the external packaging, shipping label, seals, internal protection and contents before discarding anything. Compare the received contents with the saved parcel record. Report the issue within the applicable service deadline and ask what evidence is required. Avoid assuming that platform, carrier and seller responsibilities are identical; each may control a different stage. A complete arrival record helps the correct party assess what may have happened after warehouse approval."
        ]
      }
    ]
  },
  "safety-checklist": {
    title: "A safer LoloBuy buying checklist for product links, payments, QC and shipping",
    deck: "A practical risk-control guide that tests official platform claims against the exact product, transaction, warehouse evidence and destination rules.",
    label: "RISK CONTROL", read: "15 MIN READ",
    sections: [
      {
        heading: "Separate the product index, seller and buying platform",
        paragraphs: [
          "This website is an independent guide and links product discovery to FindSpreadsheet. FindSpreadsheet is a separate product index. The original marketplace seller supplies the listing, and LoloBuy is the cross-border platform discussed here. LoloBuy's official app listings describe shopping guidance and services, product discovery and purchase support, payment, multilingual or multi-currency support and international shipping. Keeping these roles separate helps you understand who controls each claim and prevents an informational page from being mistaken for the official platform.",
          "Verify the domain before signing in or paying. A copied product card, spreadsheet row or social post should never collect your platform credentials. Open the official service independently and confirm the destination before entering an account, payment information or one-time code. Be cautious with look-alike names, invitation links and urgent messages. This site deliberately sends outbound product traffic only to FindSpreadsheet; it does not ask for LoloBuy credentials or represent itself as LoloBuy."
        ]
      },
      {
        heading: "Test product claims before submitting an order",
        paragraphs: [
          "A product title and attractive image do not prove stock, material, authenticity, safety or fit. Record the original marketplace URL, selected variation, size, quantity, displayed price and seller notes. Treat badges such as verified, trusted, best quality or community approved as claims unless a named source, date and method support them. A spreadsheet can improve discovery, but it cannot independently inspect the seller's inventory or guarantee that the received item will match a photograph.",
          "Check whether the product can lawfully and practically reach the destination. Branded goods, batteries, liquids, magnets, cosmetics, food, electrical items and oversized products may face legal, safety, carrier or customs restrictions. Rules vary and change. Do not rely on a seller's willingness to accept an order as proof of import eligibility. Use official destination guidance for questions that affect legality, tax or safety. If a listing requires you to ignore a warning or misdescribe the contents, do not proceed."
        ],
        checklist: ["Original product URL saved", "Exact option and quantity recorded", "Unsupported quality badges ignored", "Destination restrictions checked", "No false description planned"]
      },
      {
        heading: "Protect payment and account evidence",
        paragraphs: [
          "Official LoloBuy app-store copy refers to secure payments, but that marketing description does not replace transaction checks. Review the payee context, amount, currency, conversion, selected item and any displayed service or domestic-delivery cost before confirmation. Use the official account environment and available account-security controls. Never send a password, full card record or verification code to a person claiming that manual action is required outside the normal interface.",
          "Save the order number, payment confirmation, product record and any support conversation. A complete record helps distinguish payment, seller acceptance, dispatch and warehouse arrival. If a refund or substitution is proposed, confirm the amount and destination inside the official account. Do not assume that a screenshot of a balance movement proves completion. The purpose of record-keeping is not distrust for its own sake; it is to give every later question a precise amount, date and reference."
        ]
      },
      {
        heading: "Recognise unsupported marketing and fake certainty",
        paragraphs: [
          "Be cautious with claims such as zero risk, guaranteed delivery, guaranteed customs clearance, permanent lowest price, authentic by default or every item fully inspected. The official LoloBuy materials reviewed advertise broad services but do not support those absolute outcomes. Ask what evidence, date, sample and conditions sit behind a claim. A coupon image or isolated review may describe one campaign or experience, not the current terms for your order.",
          "The same discipline applies to this independent site. Advice should identify when it comes from official LoloBuy wording and when it is a general checking method. No invented user counts, country percentages or delivery success rates should be used to create authority. If a fact can change—fees, routes, storage, delivery estimates, return terms or promotions—verify it in the live account before acting. Honest uncertainty is more useful than a confident number with no source."
        ]
      },
      {
        heading: "Use QC evidence without overclaiming",
        paragraphs: [
          "The LoloBuy website publicly states that it conducts comprehensive quality inspection and sends inspection feedback. Use that stage to compare the received item with the saved order. Inspect the overall shape, variation, visible size or model label, obvious damage, key construction details, requested measurements and included components. Ask a focused question when a decisive area is not shown. Do not approve merely because the item reached a warehouse or because the first photograph looks acceptable.",
          "Visible inspection cannot normally prove fibre composition, internal electronics, chemical safety, long-term durability or authenticity. Lighting can alter colour, and perspective can distort dimensions. Treat QC as valuable evidence within its proper boundary. Save the images and approval reason. If a later issue was not visible in the photographs, say so accurately rather than rewriting the earlier evidence. Honest separation between visible and hidden qualities makes product reviews more credible and future purchases safer."
        ]
      },
      {
        heading: "Review the exact parcel and reject guarantees",
        paragraphs: [
          "Before international shipping, verify the complete address, contents, packaging, measured weight and dimensions, selected service, live quote, declared information and current compensation or insurance terms. LoloBuy's official pages advertise international shipping but do not publish one universal rate, delivery time or customs outcome. Anyone promising zero seizure, guaranteed clearance, permanent routes or a fixed all-in price is claiming more than the public evidence supports.",
          "Save the parcel and carrier references after dispatch. Read delivery dates as estimates and use official channels for exceptions. Never pay an unexpected customs or redelivery request through an unverified message link; confirm it with the named carrier or authority. A safer LoloBuy purchase is not created by one badge or one perfect photograph. It comes from a chain of small, documented checks: correct site, correct product, correct payment, useful QC evidence, lawful contents, accurate address and a live shipping decision you understand."
        ],
        checklist: ["Official domain verified", "Product and payment records saved", "QC evidence reviewed", "Live parcel terms accepted", "Address and declaration checked", "Unsupported guarantees rejected"]
      },
      {
        heading: "Use the delivered item to improve the next decision",
        paragraphs: [
          "After delivery, compare the item in hand with the original listing, QC images and your approval note. Record which visible checks were reliable and which important qualities could not be judged remotely. Replace estimated cost and delivery dates with actual figures, and note any support or customs event without generalising one parcel into a platform-wide success rate. If you publish a review, state the product, date, destination context and evidence you personally observed. This produces a more credible account than a universal recommendation and helps future buyers distinguish one documented experience from an unsupported claim about every LoloBuy order.",
          "Protect personal information when sharing evidence. Remove names, addresses, phone numbers, order identifiers, payment references and tracking numbers from public screenshots. Keep unredacted originals privately in case official support needs them. A useful community review can show the decision process, visible QC strengths, cost categories and delivery timeline without exposing account data or claiming that one experience predicts every order. Privacy is part of transaction safety, not an afterthought once the parcel has arrived.",
          "Finally, review any lesson against current information before using it again. Platform screens, fees, routes, promotions and seller terms can change. Keep the checking method, but refresh every changeable fact. This prevents a good record from becoming an outdated rule and keeps future decisions tied to the order that actually exists."
        ]
      }
    ]
  }
} satisfies Record<string, Guide>;
