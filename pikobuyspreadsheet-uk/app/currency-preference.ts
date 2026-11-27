import languages from "./locales.json";
import currencyData from "./currency-rates.json";

export const currencyChanged = "piko-uk-currency-change";
export const currencyStorageKey = (locale: string) => `piko-uk-currency-${locale}`;
export const defaultCurrency = (locale: string) => languages.find((item) => item.code === locale)?.currency ?? "USD";
export const isCurrency = (code: string): code is keyof typeof currencyData.rates => Object.hasOwn(currencyData.rates, code);

export function preferredCurrency(locale: string) {
  try {
    const saved = window.localStorage.getItem(currencyStorageKey(locale));
    if (saved && isCurrency(saved)) return saved;
  } catch {
    // Currency preferences still work when browser storage is unavailable.
  }
  return defaultCurrency(locale);
}

export function formatCatalogPrice(amount: number, currency: string, locale: string) {
  const rate = isCurrency(currency) ? currencyData.rates[currency] : currencyData.rates.USD;
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(amount * rate);
}
