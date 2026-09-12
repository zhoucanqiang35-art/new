(function () {
  var copy = {
    en: ['Focused research routes', 'Shoes', 'Hoodies & jackets', 'Budget finds', 'Designer products', 'QC photo guide'],
    de: ['Gezielte Recherchewege', 'Schuhe', 'Hoodies & Jacken', 'Preisbewusste Produkte', 'Designerprodukte', 'QC-Fotoleitfaden'],
    fr: ['Parcours de recherche ciblés', 'Chaussures', 'Sweats et vestes', 'Produits à petit budget', 'Produits créateurs', 'Guide des photos QC'],
    es: ['Rutas de investigación específicas', 'Calzado', 'Sudaderas y chaquetas', 'Productos económicos', 'Productos de diseño', 'Guía de fotos QC'],
    it: ['Percorsi di ricerca mirati', 'Scarpe', 'Felpe e giacche', 'Prodotti economici', 'Prodotti firmati', 'Guida alle foto QC'],
    pt: ['Rotas de pesquisa focadas', 'Calçado', 'Hoodies e casacos', 'Produtos económicos', 'Produtos de design', 'Guia de fotos QC'],
    nl: ['Gerichte onderzoeksroutes', 'Schoenen', 'Hoodies en jassen', 'Budgetproducten', 'Designerproducten', 'QC-fotogids'],
    pl: ['Ukierunkowane ścieżki badawcze', 'Obuwie', 'Bluzy i kurtki', 'Produkty budżetowe', 'Produkty designerskie', 'Przewodnik po zdjęciach QC'],
    sv: ['Fokuserade researchvägar', 'Skor', 'Hoodies och jackor', 'Budgetprodukter', 'Designerprodukter', 'Guide för QC-bilder']
  };
  var links = ['shoes-spreadsheet/', 'hoodies-jackets/', 'budget-finds/', 'designer-finds/', 'qc-guide/'];
  function paint(language) {
    var values = copy[language] || copy.en;
    var hub = document.querySelector('.topic-hub');
    if (!hub) return;
    hub.querySelector('h2').textContent = values[0];
    hub.querySelectorAll('a').forEach(function (link, index) { link.querySelector('h3').textContent = values[index + 1]; });
  }
  document.addEventListener('DOMContentLoaded', function () {
    if (!location.pathname.endsWith('/') && !location.pathname.endsWith('index.html')) return;
    var hub = document.createElement('section');
    hub.className = 'topic-hub category-panel';
    hub.innerHTML = '<div class="category-top"><div><div class="eyebrow">SEO TOPIC MAP</div><h2></h2></div></div><div class="categories"></div>';
    var list = hub.querySelector('.categories');
    links.forEach(function (href) { var link = document.createElement('a'); link.className = 'category'; link.href = href; link.innerHTML = '<div class="category-icon">↗</div><h3></h3>'; list.appendChild(link); });
    var footer = document.querySelector('.foot');
    footer.parentNode.insertBefore(hub, footer);
    paint(localStorage.getItem('pikoLang') || 'en');
  });
  document.addEventListener('change', function (event) { if (event.target.matches('.language')) paint(event.target.value); });
  window.addEventListener('piko-language-render', function (event) { paint((event.detail && event.detail.language) || localStorage.getItem('pikoLang') || 'en'); });
}());
