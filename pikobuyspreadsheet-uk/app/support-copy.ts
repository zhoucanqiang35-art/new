import english from "./support-en.json";
import localized from "./support-translations.json";

export const buyingRoutes = ["buying-search", "buying-order", "buying-qc", "buying-shipping",
  "buying-register", "buying-agents", "buying-currency",
];
export const officialSources = [
  ["guide", "https://www.pikobuy.com/guide"],
  ["estimate", "https://www.pikobuy.com/shipping-cost"],
  ["shipping", "https://www.pikobuy.com/protocol/shipping"],
  ["returns", "https://www.pikobuy.com/protocol/returns"],
  ["terms", "https://www.pikobuy.com/protocol/terms"],
  ["contact", "https://www.pikobuy.com/contact"],
] as const;
export const supportCopy = (locale: string) =>
  (localized as Record<string, typeof english | undefined>)[locale] ?? english;
