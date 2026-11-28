"use client";

import { useSyncExternalStore } from "react";
import { currencies, defaultCurrency, formatPrice, type Currency } from "./currency-data";

const storageKey = "pikobuy-currency";
const changeEvent = "pikobuy-currency-change";
let selectedCurrency: Currency | undefined;

function readCurrency() {
  if (selectedCurrency) return selectedCurrency;
  try {
    const stored = localStorage.getItem(storageKey);
    if (currencies.includes(stored as Currency)) return stored as Currency;
  } catch {
    // Currency selection still works when browser storage is blocked.
  }
  return defaultCurrency;
}

function subscribe(callback: () => void) {
  function onStorage(event: StorageEvent) {
    if (event.key !== storageKey && event.key !== null) return;
    selectedCurrency = undefined;
    callback();
  }
  window.addEventListener(changeEvent, callback);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(changeEvent, callback);
    window.removeEventListener("storage", onStorage);
  };
}

export function useCurrency() {
  return useSyncExternalStore(subscribe, readCurrency, () => defaultCurrency);
}

export function selectCurrency(currency: Currency) {
  selectedCurrency = currency;
  try {
    localStorage.setItem(storageKey, currency);
  } catch {
    // Keep the in-memory selection for this visit.
  }
  window.dispatchEvent(new Event(changeEvent));
}

export function Price({ cny, locale }: { cny: number; locale: string }) {
  const currency = useCurrency();
  return <>{currency !== "CNY" && "≈ "}{formatPrice(cny, currency, locale)}</>;
}
