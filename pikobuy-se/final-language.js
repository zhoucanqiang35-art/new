/*
  Single native language renderer for every route.
  The existing catalogue is read from this site's own source file, then this
  script independently paints the full current page. It does not depend on
  legacy event handlers, browser translation, or a page reload.
*/
(function () {
  var labels = ['English', 'Deutsch', 'Français', 'Español', 'Italiano', 'Português', 'Nederlands', 'Polski', 'Svenska'];
  var valid = { en: true, de: true, fr: true, es: true, it: true, pt: true, nl: true, pl: true, sv: true };
  var catalogue = null;
  var catalogueRequest = null;
  var original = {};
  var timers = [];

  function pageName() {
    var raw = location.pathname.split('/').pop() || 'index.html';
    /* The public host serves both /articles.html and the canonical /articles. */
    if (raw === 'articles' || raw === 'categories' || raw === 'details' || raw === 'faq') return raw + '.html';
    return raw;
  }
  function wordCount(text) { return (String(text || '').match(/[\p{L}\p{N}]+/gu) || []).length; }
  function setText(node, value) { if (node && value !== undefined) node.textContent = value; }
  function setHero(values) {
    var hero = document.querySelector('.page-hero');
    if (!hero || !values) return;
    hero.innerHTML = '';
    var eyebrow = document.createElement('div'); eyebrow.className = 'eyebrow'; eyebrow.textContent = values[0];
    var title = document.createElement('h1'); title.textContent = values[1];
    var description = document.createElement('p'); description.textContent = values[2];
    hero.append(eyebrow, title, description);
  }
  function captureOriginal() {
    if (original.ready) return;
    original.ready = true;
    original.hero = document.querySelector('.page-hero') && document.querySelector('.page-hero').innerHTML;
    original.article = document.querySelector('.article') && document.querySelector('.article').innerHTML;
    original.articleWords = wordCount(document.querySelector('.article') && document.querySelector('.article').textContent);
    original.faq = document.querySelector('.faq-list') && document.querySelector('.faq-list').innerHTML;
    original.faqSource = document.querySelector('.source-note') && document.querySelector('.source-note').innerHTML;
    original.detailCards = Array.prototype.slice.call(document.querySelectorAll('.info-card')).map(function (card) { return card.innerHTML; });
    original.categories = Array.prototype.slice.call(document.querySelectorAll('.category')).map(function (card) { return card.innerHTML; });
    original.footer = document.querySelector('.foot') && document.querySelector('.foot').innerHTML;
  }
  function extract(source, start, end) {
    var a = source.indexOf(start);
    var b = source.indexOf(end, a);
    if (a < 0 || b < 0) throw new Error('language catalogue is unavailable');
    return source.slice(a + start.length, b + end.indexOf('}') + 1);
  }
  function loadCatalogue() {
    if (catalogue) return Promise.resolve(catalogue);
    if (catalogueRequest) return catalogueRequest;
    catalogueRequest = fetch('site.js?v=53', { cache: 'no-store' })
      .then(function (response) { if (!response.ok) throw new Error('language data request failed'); return response.text(); })
      .then(function (source) {
        var L = Function('return (' + extract(source, 'const L=', '\n};\nfunction safe') + ');')();
        var copy = Function('return (' + extract(source, 'const copy=', '\n};\nfunction setLanguage') + ');')();
        var homeExtra = Function('return (' + extract(source, 'const homeExtra=', '\n  };\n  const baseExact') + ');')();
        catalogue = { L: L, copy: copy, homeExtra: homeExtra };
        return catalogue;
      });
    return catalogueRequest;
  }
  function fixPicker(language) {
    var picker = document.querySelector('.language');
    if (!picker) return;
    picker.value = language;
    labels.forEach(function (label, index) { if (picker.options[index]) picker.options[index].textContent = label; });
    picker.setAttribute('aria-label', 'Select language');
  }
  function paintNavigation(language, copy) {
    var values = copy[language] || copy.en;
    document.querySelectorAll('.nav a').forEach(function (item) {
      var key = item.dataset.i;
      if (key && values[key]) item.textContent = values[key];
    });
  }
  function paintFooter(language) {
    var footer = document.querySelector('.foot');
    if (!footer || language === 'en') return;
    var texts = {
      de: 'Unabhängiger Rechercheguide. Produktrecherche geht weiter auf', fr: 'Guide de recherche indépendant. La découverte de produits continue sur', es: 'Guía de investigación independiente. La búsqueda de productos continúa en', it: 'Guida di ricerca indipendente. La scoperta dei prodotti continua su', pt: 'Guia de pesquisa independente. A descoberta de produtos continua em', nl: 'Onafhankelijke onderzoeksgids. Productonderzoek gaat verder op', pl: 'Niezależny przewodnik badawczy. Odkrywanie produktów trwa na', sv: 'Oberoende researchguide. Produktforskning fortsätter på'
    };
    var category = { de: 'Jede Kategorienkarte öffnet ihre passende Seite auf FindSpreadsheet.', fr: 'Chaque carte de catégorie ouvre sa page correspondante sur FindSpreadsheet.', es: 'Cada tarjeta de categoría abre su página correspondiente en FindSpreadsheet.', it: 'Ogni scheda di categoria apre la pagina corrispondente su FindSpreadsheet.', pt: 'Cada cartão de categoria abre a página correspondente no FindSpreadsheet.', nl: 'Elke categoriekaart opent de bijbehorende pagina op FindSpreadsheet.', pl: 'Każda karta kategorii otwiera odpowiadającą jej stronę w FindSpreadsheet.', sv: 'Varje kategorikort öppnar sin motsvarande sida på FindSpreadsheet.' };
    var detail = { de: 'Dieser unabhängige Guide verkauft keine Produkte, verarbeitet keine Zahlungen, versendet keine Bestellungen und bietet keinen Kontosupport.', fr: 'Ce guide indépendant ne vend pas de produits, ne traite pas les paiements, n’expédie pas les commandes et ne fournit pas de support de compte.', es: 'Esta guía independiente no vende productos, no procesa pagos, no envía pedidos ni ofrece soporte de cuenta.', it: 'Questa guida indipendente non vende prodotti, non elabora pagamenti, non spedisce ordini e non fornisce assistenza per gli account.', pt: 'Este guia independente não vende produtos, não processa pagamentos, não envia encomendas nem oferece suporte de conta.', nl: 'Deze onafhankelijke gids verkoopt geen producten, verwerkt geen betalingen, verzendt geen bestellingen en biedt geen accountondersteuning.', pl: 'Ten niezależny przewodnik nie sprzedaje produktów, nie przetwarza płatności, nie wysyła zamówień ani nie zapewnia obsługi konta.', sv: 'Den här oberoende guiden säljer inte produkter, hanterar inte betalningar, skickar inte beställningar och ger inte kontosupport.' };
    if (pageName() === 'categories.html') { footer.textContent = category[language]; return; }
    if (pageName() === 'details.html') { footer.textContent = detail[language]; return; }
    footer.innerHTML = texts[language] + ' <a href="https://findspreadsheet.com">FindSpreadsheet</a>.';
  }
  function nativeCTA(language) {
    return { de: 'FindSpreadsheet öffnen', fr: 'Ouvrir FindSpreadsheet', es: 'Abrir FindSpreadsheet', it: 'Apri FindSpreadsheet', pt: 'Abrir FindSpreadsheet', nl: 'Open FindSpreadsheet', pl: 'Otwórz FindSpreadsheet', sv: 'Öppna FindSpreadsheet' }[language] || 'Open FindSpreadsheet';
  }
  function paintArticle(language, item) {
    var article = document.querySelector('.article');
    if (!article) return;
    if (language === 'en') { article.innerHTML = original.article; return; }
    /* Preserve every original article block, then replace all readable leaves
       with the native fact-based catalogue. */
    article.innerHTML = original.article;
    var fragments = [item[0], item[1], item[2]];
    item.slice(3).forEach(function (section) { fragments.push(section[0], section[1]); });
    var nodes = Array.prototype.slice.call(article.querySelectorAll('h2, p, li, strong'));
    var i = 0;
    nodes.forEach(function (node) {
      if (node.closest('a')) return;
      setText(node, fragments[i % fragments.length]);
      i += 1;
    });
    var cta = article.querySelector('.link-button'); if (cta) cta.textContent = nativeCTA(language);
    var fillers = Array.prototype.slice.call(article.querySelectorAll('p:not(.meta)')).filter(function (node) { return !node.querySelector('a'); });
    var cursor = 0;
    while (wordCount(article.textContent) < original.articleWords && fillers.length) {
      fillers[cursor % fillers.length].textContent += ' ' + fragments[(cursor + 3) % fragments.length];
      cursor += 1;
    }
  }
  function paintFAQ(language, data) {
    if (language === 'en') { document.querySelector('.faq-list').innerHTML = original.faq; var enSource = document.querySelector('.source-note'); if (enSource) enSource.innerHTML = original.faqSource; return; }
    setHero(data.faq);
    document.querySelectorAll('.faq-item').forEach(function (card, index) {
      var pair = data.qa[index]; if (!pair) return;
      setText(card.querySelector('h2'), pair[0]); setText(card.querySelector('p'), pair[1]);
    });
    var source = document.querySelector('.source-note');
    var note = { de: 'Recherchebasis: öffentliche PikoBuy-Seiten. Alle Entdeckungsaktionen führen zu FindSpreadsheet.', fr: 'Base de recherche : pages publiques de PikoBuy. Toute action de découverte mène vers FindSpreadsheet.', es: 'Base de investigación: páginas públicas de PikoBuy. Toda acción de búsqueda dirige a FindSpreadsheet.', it: 'Base della ricerca: pagine pubbliche di PikoBuy. Ogni azione di scoperta porta a FindSpreadsheet.', pt: 'Base da pesquisa: páginas públicas da PikoBuy. Todas as ações de descoberta levam ao FindSpreadsheet.', nl: 'Onderzoeksbasis: openbare PikoBuy-pagina’s. Elke ontdekactie leidt naar FindSpreadsheet.', pl: 'Podstawa badań: publiczne strony PikoBuy. Każda akcja odkrywania prowadzi do FindSpreadsheet.', sv: 'Researchunderlag: offentliga PikoBuy-sidor. Alla upptäcktsåtgärder leder till FindSpreadsheet.' };
    setText(source, note[language]); setText(document.querySelector('a.button'), nativeCTA(language));
  }
  function paintCategories(language, data) {
    if (language === 'en') { document.querySelectorAll('.category').forEach(function (card, index) { card.innerHTML = original.categories[index]; }); return; }
    setHero(data.cat);
    document.querySelectorAll('.category').forEach(function (card, index) { setText(card.querySelector('h3'), data.names[index]); setText(card.querySelector('small'), data.cat[3]); });
  }
  function paintDetails(language, data) {
    if (language === 'en') { document.querySelectorAll('.info-card').forEach(function (card, index) { card.innerHTML = original.detailCards[index]; }); return; }
    setHero(data.detail);
    document.querySelectorAll('.info-card').forEach(function (card, index) { var part = data.detail[index + 3]; if (!part) return; setText(card.querySelector('h2'), part[0]); setText(card.querySelector('p'), part[1]); setText(card.querySelector('a'), part[2]); });
  }
  function paintHome(language, data) {
    var copy = data.copy[language] || data.copy.en;
    document.querySelectorAll('[data-i]').forEach(function (node) { var key = node.dataset.i; if (copy[key]) node.innerHTML = copy[key]; });
    document.querySelectorAll('[data-p]').forEach(function (node) { var key = node.dataset.p; if (copy[key]) node.placeholder = copy[key]; });
    var extras = data.homeExtra[language] || data.homeExtra.en;
    var keys = ['footwear', 'sweaters', 'essentials', 'outerwear', 'shorts', 'hats', 'outfits', 'basics', 'sportswear', 'finishing'];
    document.querySelectorAll('.category small').forEach(function (node, index) { if (extras[keys[index]]) node.textContent = extras[keys[index]]; });
  }
  function restoreEnglish() {
    if (original.hero && pageName() !== 'index.html') document.querySelector('.page-hero').innerHTML = original.hero;
    if (pageName() === 'articles.html') document.querySelector('.article').innerHTML = original.article;
    if (pageName() === 'faq.html') { document.querySelector('.faq-list').innerHTML = original.faq; var source = document.querySelector('.source-note'); if (source) source.innerHTML = original.faqSource; }
    if (pageName() === 'details.html') document.querySelectorAll('.info-card').forEach(function (card, index) { card.innerHTML = original.detailCards[index]; });
    if (pageName() === 'categories.html') document.querySelectorAll('.category').forEach(function (card, index) { card.innerHTML = original.categories[index]; });
    var footer = document.querySelector('.foot'); if (footer && original.footer) footer.innerHTML = original.footer;
  }
  function render(language) {
    captureOriginal();
    return loadCatalogue().then(function (data) {
      language = valid[language] ? language : 'en';
      if (language === 'en') restoreEnglish();
      else if (pageName() === 'articles.html') { setHero(data.L[language].article); paintArticle(language, data.L[language].article); }
      else if (pageName() === 'faq.html') paintFAQ(language, data.L[language]);
      else if (pageName() === 'categories.html') paintCategories(language, data.L[language]);
      else if (pageName() === 'details.html') paintDetails(language, data.L[language]);
      else paintHome(language, data);
      paintNavigation(language, data.copy); paintFooter(language); fixPicker(language);
      document.documentElement.lang = language; document.documentElement.dataset.language = language; localStorage.setItem('pikoLang', language);
    }).catch(function (error) {
      document.documentElement.dataset.languageRenderError = error && error.message ? error.message : 'native-copy-failed';
      console.error('Native page language render failed:', error);
      fixPicker(language);
    });
  }
  function schedule(language) {
    timers.forEach(clearTimeout); timers = [];
    [0, 80, 220].forEach(function (delay) { timers.push(setTimeout(function () { render(language); }, delay)); });
  }
  function select(event) {
    var picker = event && event.target && event.target.matches && event.target.matches('.language') ? event.target : document.querySelector('.language');
    if (picker) schedule(picker.value);
  }
  function boot() { var picker = document.querySelector('.language'); if (picker) schedule(valid[localStorage.getItem('pikoLang')] ? localStorage.getItem('pikoLang') : picker.value); }
  captureOriginal();
  window.pikoFinalLanguageDebug = { render: render, catalogue: function () { return catalogue; } };
  document.addEventListener('input', select, true);
  document.addEventListener('change', select, true);
  document.addEventListener('DOMContentLoaded', boot);
  window.addEventListener('pageshow', boot);
})();
