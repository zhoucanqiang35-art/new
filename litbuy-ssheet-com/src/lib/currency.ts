export const CNY_PER_USD_REFERENCE = 6.6814;

export const formatUsd = (price: string | number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(price) / CNY_PER_USD_REFERENCE);

export const currencyReferenceNote = `Market reference: ¥${CNY_PER_USD_REFERENCE.toFixed(4)} per US$1`;
