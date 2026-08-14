import { translationCatalog } from "./translations.generated";
import type { Locale, TranslationDictionary } from "./i18n-config";

const titleOverrides: Partial<Record<Locale, TranslationDictionary>> = {
  es: { "Shipping": "Envío", "PikoBuy QC Photos: Three Evidence Tests That Change a Warehouse Decision": "Fotos de QC de PikoBuy: tres pruebas de evidencia que cambian una decisión en el almacén" },
  de: {
    "Shipping": "Versand",
    "PikoBuy Shipping: Weight, Packaging, Route Choice and Total Delivery Cost": "PikoBuy Versand: Gewicht, Verpackung, Routenwahl und Gesamtlieferkosten",
    "PikoBuy Shipping Cost: Three Worked Parcel Budgets Before the Second Payment": "PikoBuy Versandkosten: Drei durchgerechnete Paketbudgets vor der zweiten Zahlung",
  },
  fr: { "Shipping": "Expédition", "PikoBuy Shipping: Weight, Packaging, Route Choice and Total Delivery Cost": "Expédition PikoBuy : poids, emballage, choix de l’itinéraire et coût total de livraison" },
  it: { "Shipping": "Spedizione" },
  pt: { "Shipping": "Envio" },
  nl: { "Shipping": "Verzending" },
  pl: { "Shipping": "Wysyłka", "PikoBuy Shipping Cost: Three Worked Parcel Budgets Before the Second Payment": "Koszt wysyłki PikoBuy: trzy przykładowe budżety paczki przed drugą płatnością" },
  cs: { "Shipping": "Doprava" },
  sv: { "Shipping": "Frakt", "PikoBuy Shipping: Weight, Packaging, Route Choice and Total Delivery Cost": "PikoBuy-frakt: vikt, emballage, ruttval och total leveranskostnad" },
  da: { "Shipping": "Forsendelse", "PikoBuy Shipping: Weight, Packaging, Route Choice and Total Delivery Cost": "PikoBuy-forsendelse: vægt, emballage, rutevalg og samlet leveringsomkostning" },
  nb: { "Shipping": "Frakt" },
  fi: { "Shipping": "Toimitus" },
  el: { "Shipping": "Αποστολή", "PikoBuy Shipping: Weight, Packaging, Route Choice and Total Delivery Cost": "Αποστολή PikoBuy: βάρος, συσκευασία, επιλογή διαδρομής και συνολικό κόστος παράδοσης" },
  ro: {
    "Shipping": "Livrare",
    "PikoBuy Shipping: Weight, Packaging, Route Choice and Total Delivery Cost": "Livrare PikoBuy: greutate, ambalare, alegerea rutei și costul total de livrare",
    "PikoBuy QC Photos: Three Evidence Tests That Change a Warehouse Decision": "Fotografii QC PikoBuy: trei verificări care schimbă decizia din depozit",
  },
  hu: { "Shipping": "Szállítás" },
  tr: { "Shipping": "Kargo", "PikoBuy QC Photos: Three Evidence Tests That Change a Warehouse Decision": "PikoBuy QC Fotoğrafları: Depo kararını değiştiren üç kanıt testi" },
  ar: { "Shipping": "الشحن" },
  ru: { "Shipping": "Доставка", "PikoBuy QC Photos: Three Evidence Tests That Change a Warehouse Decision": "Фотографии QC PikoBuy: три проверки, меняющие решение на складе" },
  uk: { "Shipping": "Доставка" },
  ja: {
    "Shipping": "配送",
    "PikoBuy Shipping: Weight, Packaging, Route Choice and Total Delivery Cost": "PikoBuy配送：重量・梱包・ルート選択・総配送料",
    "PikoBuy Shipping Cost: Three Worked Parcel Budgets Before the Second Payment": "PikoBuy送料：2回目の支払い前に比較する3つの荷物予算",
    "PikoBuy QC Photos: Three Evidence Tests That Change a Warehouse Decision": "PikoBuyのQC写真：倉庫での判断を変える3つの確認ポイント",
  },
  hi: { "Shipping": "शिपिंग" },
  id: { "Shipping": "Pengiriman", "PikoBuy Shipping Cost: Three Worked Parcel Budgets Before the Second Payment": "Biaya Pengiriman PikoBuy: Tiga Contoh Anggaran Paket Sebelum Pembayaran Kedua" },
  vi: { "Shipping": "Vận chuyển" },
};

export function getDictionary(locale: Locale): TranslationDictionary {
  return locale === "en" ? {} : { ...(translationCatalog[locale] ?? {}), ...(titleOverrides[locale] ?? {}) };
}

export function localizeValue<T>(value: T, dictionary: TranslationDictionary, preserveKeys = new Set(["slug", "url", "published"])): T {
  if (typeof value === "string") return (dictionary[value] ?? value) as T;
  if (Array.isArray(value)) return value.map((item) => localizeValue(item, dictionary, preserveKeys)) as T;
  if (value && typeof value === "object") {
    const output: Record<string, unknown> = {};
    for (const [key, item] of Object.entries(value as Record<string, unknown>)) {
      output[key] = preserveKeys.has(key) ? item : localizeValue(item, dictionary, preserveKeys);
    }
    return output as T;
  }
  return value;
}
