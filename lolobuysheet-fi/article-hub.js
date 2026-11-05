/* Localised cards for the two additional buyer guides. */
(function () {
  const copy = {
    en:[['Spreadsheet guide','Find and check products before ordering','Compare live listings, options, measurements and QC evidence.','Read article'],['Shipping costs','Plan a realistic parcel budget','Review weight, dimensions, route conditions and destination costs.','Read article']],
    de:[['Spreadsheet-Leitfaden','Produkte vor der Bestellung finden und prüfen','Aktuelle Angebote, Varianten, Maße und QC-Hinweise vergleichen.','Artikel lesen'],['Versandkosten','Ein realistisches Paketbudget planen','Gewicht, Maße, Routenbedingungen und Kosten am Zielort prüfen.','Artikel lesen']],
    fr:[['Guide du tableur','Trouver et vérifier les produits avant de commander','Comparez annonces actuelles, options, mesures et éléments QC.','Lire l’article'],['Frais de livraison','Préparer un budget de colis réaliste','Vérifiez poids, dimensions, conditions des lignes et frais à destination.','Lire l’article']],
    es:[['Guía de la hoja de cálculo','Busca y revisa productos antes de pedir','Compara ofertas actuales, opciones, medidas y pruebas QC.','Leer artículo'],['Costes de envío','Planifica un presupuesto realista','Revisa peso, dimensiones, condiciones de ruta y costes en destino.','Leer artículo']],
    it:[['Guida allo spreadsheet','Trova e controlla i prodotti prima di ordinare','Confronta annunci attuali, opzioni, misure e prove QC.','Leggi l’articolo'],['Costi di spedizione','Pianifica un budget realistico per il pacco','Controlla peso, dimensioni, condizioni delle linee e costi a destinazione.','Leggi l’articolo']],
    pt:[['Guia da planilha','Encontre e confira produtos antes de encomendar','Compare anúncios atuais, opções, medidas e evidências QC.','Ler artigo'],['Custos de envio','Planeje um orçamento realista para o pacote','Confira peso, dimensões, condições da rota e custos no destino.','Ler artigo']],
    nl:[['Spreadsheetgids','Vind en controleer producten vóór je bestelt','Vergelijk actuele aanbiedingen, opties, maten en QC-bewijs.','Lees artikel'],['Verzendkosten','Plan een realistisch pakketbudget','Controleer gewicht, afmetingen, routevoorwaarden en kosten op bestemming.','Lees artikel']],
    pl:[['Poradnik arkusza','Znajdź i sprawdź produkty przed zamówieniem','Porównaj aktualne oferty, opcje, wymiary i dowody QC.','Czytaj artykuł'],['Koszty wysyłki','Zaplanuj realny budżet paczki','Sprawdź wagę, wymiary, warunki tras i koszty w miejscu docelowym.','Czytaj artykuł']],
    sv:[['Kalkylbladsguide','Hitta och kontrollera produkter före beställning','Jämför aktuella annonser, alternativ, mått och QC-underlag.','Läs artikeln'],['Fraktkostnader','Planera en realistisk paketbudget','Kontrollera vikt, mått, ruttvillkor och destinationskostnader.','Läs artikeln']]
  };
  function render() {
    const home = location.pathname === '/';
    const hub = /^\/seo-articles\/?$/.test(location.pathname);
    if (!home && !hub) return;
    const target = document.querySelector(home ? '.article-grid' : 'main.page .grid');
    if (!target) return;
    target.querySelectorAll('[data-extra-guide]').forEach(card => card.remove());
    const selected = new URLSearchParams(location.search).get('lang') || localStorage.getItem('lsfi-lang') || 'en';
    const lang = copy[selected] ? selected : 'en';
    const urls = ['/seo-articles/spreadsheet-guide/', '/seo-articles/shipping-costs-guide/'];
    copy[lang].forEach((item, i) => {
      const card=document.createElement('article'); card.className=home?'article':'card'; card.dataset.extraGuide='true';
      const tag=document.createElement('span');tag.className='tag';tag.textContent=item[0];
      const heading=document.createElement(home?'h3':'h2');heading.textContent=item[1];
      const description=document.createElement('p');description.textContent=item[2];
      const link=document.createElement('a');const url=new URL(urls[i],location.origin);url.searchParams.set('lang',lang);link.href=url.pathname+url.search;link.textContent=item[3]+' ↗';
      card.append(tag,heading,description,link);target.append(card);
    });
  }
  document.addEventListener('DOMContentLoaded', render);
}());
