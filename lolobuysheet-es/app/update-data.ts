export type UpdateSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type OfficialUpdate = {
  slug: string;
  category: string;
  date: string;
  title: string;
  summary: string;
  takeaway: string;
  sources: { label: string; href: string }[];
  sections: UpdateSection[];
};

export const officialUpdates: OfficialUpdate[] = [
  {
    slug: "lolobuy-android-app-launch",
    category: "Platform",
    date: "July 28, 2026",
    title: "LoloBuy Android app launched: a practical install and account-safety check",
    summary:
      "LoloBuy’s official homepage says the Android version is live. The useful next step is not simply downloading an app—it is confirming the publisher, store destination, account details and live checkout before placing an order.",
    takeaway:
      "Use the store link reached from LoloBuy’s own website, confirm the publisher and version, and treat the app as another interface to the same live order and warehouse data.",
    sources: [
      { label: "LoloBuy official homepage", href: "https://www.lolobuy.com/" },
      { label: "LoloBuy official notice centre", href: "https://www.lolobuy.com/noticeCenter" },
    ],
    sections: [
      {
        heading: "What the official update confirms",
        paragraphs: [
          "LoloBuy’s official homepage currently states that the Android version is live. That is the claim this update can safely confirm. It does not by itself prove that every similarly named app, APK mirror or advertisement belongs to LoloBuy.",
          "Install from the store destination opened by LoloBuy’s own domain. Before signing in, compare the app name, publisher, icon, privacy information and most recent version. A search result or third-party APK page is not equivalent to an official store link.",
        ],
      },
      {
        heading: "What to check before using the app for an order",
        bullets: [
          "Confirm that the login leads to the same account balance, order history and warehouse items shown on the official website.",
          "Read the exact product variation, quantity, Chinese domestic delivery charge and payment fee on the final screen.",
          "Do not assume a saved address is current; verify the recipient name, phone number, country and postal code before parcel submission.",
          "Review warehouse photos at full size. A small mobile preview can hide label, measurement or visible-defect details.",
          "Save the order number and parcel number outside the app so a support request is not dependent on one device.",
        ],
      },
      {
        heading: "What the launch does not guarantee",
        paragraphs: [
          "An official app does not turn estimated freight into a fixed quote, guarantee a seller’s stock, authenticate a product or guarantee customs clearance. The seller, warehouse, carrier and destination customs authority still control different parts of the process.",
          "Payment methods, fees and shipping routes may also vary by country, currency, account and parcel contents. The live app screen is evidence for the transaction in front of you; an old screenshot or a review written for another country is not.",
        ],
      },
      {
        heading: "A safer first mobile order",
        paragraphs: [
          "For a first app order, keep the basket small and use a product with clear options. Save the original marketplace link, compare the selected size and colour, and take a screenshot of the amount immediately before payment. After warehouse arrival, make the keep-or-return decision before requesting irreversible packaging services.",
        ],
      },
    ],
  },
  {
    slug: "lolobuy-ios-app-launch",
    category: "Platform",
    date: "July 20, 2026",
    title: "LoloBuy iOS app launched: how to verify the correct App Store listing",
    summary:
      "LoloBuy announced an iOS release and linked users to Apple’s App Store. Buyers should still verify the listing reached from the official site and review every order, warehouse and payment field before confirming.",
    takeaway:
      "Open the App Store through LoloBuy’s official notice or homepage, verify the publisher and permissions, then compare the app’s order data with the website before paying.",
    sources: [
      { label: "LoloBuy official homepage", href: "https://www.lolobuy.com/" },
      { label: "LoloBuy official notice centre", href: "https://www.lolobuy.com/noticeCenter" },
    ],
    sections: [
      {
        heading: "What was announced",
        paragraphs: [
          "LoloBuy’s July announcement says its iOS app is available and directs users to Apple’s App Store. The later Android announcement confirms that the platform now presents both mobile systems as available.",
          "The important fact is the official route to the listing. App names and icons can be copied, so the safest path is LoloBuy’s own website or notice centre rather than an advertisement, message link or unrelated download directory.",
        ],
      },
      {
        heading: "Five checks on the App Store page",
        bullets: [
          "Check the publisher shown on the listing and compare it with the destination opened from LoloBuy’s official domain.",
          "Read the version history and update date instead of assuming a search result is the newest listing.",
          "Review the privacy disclosure and requested permissions before entering account or payment information.",
          "Confirm that in-app support links return to LoloBuy-controlled pages.",
          "Avoid configuration profiles, enterprise certificates or downloads outside Apple’s App Store.",
        ],
      },
      {
        heading: "Ordering on a small screen needs extra care",
        paragraphs: [
          "A mobile interface makes it easy to miss a long variation name, seller remark, domestic shipping line or percentage payment fee. Expand collapsed totals and compare the exact amount and currency before authorising payment.",
          "At the warehouse stage, zoom into every QC image and compare it with the saved source listing. Standard photos can show visible colour, size labels, quantity and obvious external issues; they do not prove authenticity, hidden material quality or electronic functionality.",
        ],
      },
      {
        heading: "Keep a browser fallback",
        paragraphs: [
          "Keep access to the official website even if the app becomes your main interface. If an order status, balance or parcel measurement looks different, stop and compare both views before paying. Record the order number and use LoloBuy’s support channel for a specific discrepancy rather than creating a duplicate order.",
        ],
      },
    ],
  },
  {
    slug: "lolobuy-packaging-removal-rules",
    category: "Warehouse service",
    date: "July 14, 2026",
    title: "LoloBuy packaging-removal rules: save volume only after the return decision",
    summary:
      "LoloBuy says package and shoe-box removal can reduce parcel weight or volume, but warns that items whose original packaging has been removed cannot be returned or exchanged.",
    takeaway:
      "Finish QC, request any decision-critical photos and resolve a possible return before asking the warehouse to remove original packaging or a shoe box.",
    sources: [
      { label: "LoloBuy official notice centre", href: "https://www.lolobuy.com/noticeCenter" },
      {
        label: "LoloBuy official packaging guidance",
        href: "https://www.lolobuy.com/helpCenter/1242300751675537",
      },
      {
        label: "LoloBuy official weight explanation",
        href: "https://www.lolobuy.com/helpCenter/1242300798075086",
      },
    ],
    sections: [
      {
        heading: "The official rule that changes the order of operations",
        paragraphs: [
          "The July service announcement promotes package-removal and shoe-box-removal options as ways to reduce parcel weight or volume. The same announcement warns that a product cannot be returned or exchanged after its original packaging is removed.",
          "That restriction matters more than the visual neatness of a parcel. Packaging removal should be a shipping decision made after the item has passed inspection—not a default warehouse instruction applied on arrival.",
        ],
      },
      {
        heading: "Use this sequence for every item",
        bullets: [
          "Save the original listing and the exact colour, size, quantity and included accessories.",
          "Review standard QC photos and compare labels, measurements, visible marks and packaging condition.",
          "Request extra photos if the existing evidence cannot answer a keep-or-return question.",
          "Confirm that the seller return window is still open and resolve any return or exchange request.",
          "Only then decide whether the retail box or original packing is worth its effect on chargeable weight or volume.",
        ],
      },
      {
        heading: "When removal may reduce cost",
        paragraphs: [
          "A large shoe box or loose retail carton can increase parcel dimensions. On a route that charges by volumetric weight, reducing length, width or height can matter even when the scale weight changes very little. On an actual-weight route, removal only helps when the removed material has meaningful mass.",
          "Do not calculate the saving from product price. Compare the packed dimensions, actual weight, route divisor and billing increment shown for the parcel. A box removed from one item may not change the chargeable band at all.",
        ],
      },
      {
        heading: "When keeping packaging is rational",
        paragraphs: [
          "Keep protective or retail packaging when the item is fragile, the box is part of what you bought, accessories could be lost, or the packaging helps prove condition. Ask the warehouse which layer will be removed: a domestic express carton, protective filler, retail box and branded shoe box are not interchangeable terms.",
          "If a particular shoe box must remain, leave a clear warehouse remark and identify the exact item. Do not rely on a general account note for a mixed parcel.",
        ],
      },
    ],
  },
  {
    slug: "lolobuy-mybank-italy-payment",
    category: "Payment",
    date: "July 7, 2026",
    title: "LoloBuy MyBank payments for Italy: fees, scope and checkout checks",
    summary:
      "LoloBuy announced MyBank for eligible users in Italy paying in euros. The launch notice stated a 1.65% transaction fee plus a fixed CNY 1.71 processing fee.",
    takeaway:
      "Treat the published numbers as a dated launch reference. Confirm MyBank availability, the payment currency, percentage fee, fixed fee and final debit on the live checkout screen.",
    sources: [
      { label: "LoloBuy official notice centre", href: "https://www.lolobuy.com/noticeCenter" },
      {
        label: "LoloBuy official purchase process",
        href: "https://www.lolobuy.com/helpCenter/1242296499766165",
      },
    ],
    sections: [
      {
        heading: "What the July 7 notice says",
        paragraphs: [
          "The notice introduced MyBank for users in Italy making euro payments. At launch, it listed a 1.65% transaction fee and a fixed processing charge of CNY 1.71.",
          "This is a country- and payment-method-specific announcement. It should not be rewritten as a universal LoloBuy fee or a promise that every Italian bank, account or transaction will be accepted.",
        ],
      },
      {
        heading: "Calculate the payment you are actually making",
        paragraphs: [
          "LoloBuy’s published buying process separates the product order from the later international parcel. The first payment can include the item price and Chinese domestic delivery. After warehouse arrival and parcel submission, the user pays international freight and any selected parcel services.",
          "A payment-method fee can therefore appear at more than one stage if the same channel is used twice. Record each base amount, currency conversion, percentage charge and fixed charge separately rather than treating the first checkout as the complete delivered cost.",
        ],
      },
      {
        heading: "Checkout checklist for an Italian buyer",
        bullets: [
          "Confirm that the payment method is shown inside your own LoloBuy checkout, not only in an old announcement.",
          "Check that the account and checkout country are Italy and that the transaction currency is EUR.",
          "Read the displayed percentage fee and fixed fee; do not assume the July launch figures are permanent.",
          "Compare the amount LoloBuy says it will credit with the amount your bank says it will debit.",
          "Keep the payment reference, order number and timestamp until the balance or order status is confirmed.",
          "If the payment remains pending, contact support with those records before attempting a duplicate payment.",
        ],
      },
      {
        heading: "What MyBank does not settle",
        paragraphs: [
          "Using a local bank-payment channel does not guarantee seller stock, warehouse acceptance, a fixed international freight quote or customs clearance. It changes how a payment is made, not the responsibilities of the seller, warehouse, carrier or customs authority.",
          "The most reliable rule is simple: use the live checkout for current availability and fees, and keep the dated notice only as evidence of what LoloBuy announced on July 7, 2026.",
        ],
      },
    ],
  },
];

export function getOfficialUpdate(slug: string) {
  return officialUpdates.find((update) => update.slug === slug);
}
