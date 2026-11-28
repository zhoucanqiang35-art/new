// ECB reference rates on 2026-11-27, quoted as units per EUR.
export const rateDate = "2026-11-27";

export const perEuro = {
  USD: 1.0957,
  EUR: 1,
  CNY: 7.2912,
  GBP: 0.83504,
  CAD: 1.5608,
  AUD: 1.6431,
  CHF: 0.9157,
  SEK: 11.2080,
  PLN: 4.4678,
  DKK: 7.4737,
  NOK: 10.6850,
  CZK: 24.435,
  RON: 5.3437,
  HUF: 369.73,
  BRL: 6.0246,
  MXN: 21.3794,
  JPY: 174.81,
  KRW: 1462.65,
  HKD: 8.5774,
  INR: 101.9040,
  NZD: 1.9990,
  SGD: 1.4132,
} as const;

export type Currency = keyof typeof perEuro;
export const currencies = Object.keys(perEuro) as Currency[];
export const defaultCurrency: Currency = "USD";

export function formatPrice(cny: number, currency: Currency, locale: string) {
  const value = cny * perEuro[currency] / perEuro.CNY;
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(value);
}
