window.pikobuyPurchaseMarkup = function(product) {
  const translations={en:['Buy on Pikobuy ↗','Purchase link unavailable'],de:['Bei Pikobuy kaufen ↗','Kauflink nicht verfügbar'],fr:['Acheter sur Pikobuy ↗','Lien d’achat indisponible'],es:['Comprar en Pikobuy ↗','Enlace de compra no disponible'],it:['Acquista su Pikobuy ↗','Link di acquisto non disponibile'],pt:['Comprar no Pikobuy ↗','Link de compra indisponível'],nl:['Koop via Pikobuy ↗','Kooplink niet beschikbaar'],pl:['Kup w Pikobuy ↗','Link do zakupu niedostępny'],fi:['Osta Pikobuysta ↗','Ostolinkki ei ole saatavilla']};
  const labels=translations[document.documentElement.lang]||translations.en;
  const id = String(product.weidianId || '');
  if (!/^\d+$/.test(id)) return `<span class="purchase-unavailable">${labels[1]}</span>`;
  const original = `https://weidian.com/item.html?itemID=${id}`;
  const link = `https://www.pikobuy.com/product/detail?productUrl=${encodeURIComponent(original)}`;
  return `<a class="buy" href="${link}" target="_blank" rel="noopener noreferrer">${labels[0]}</a>`;
};
