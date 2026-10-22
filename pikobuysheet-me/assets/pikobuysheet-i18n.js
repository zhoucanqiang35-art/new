/* Static UI localisation for PikoBuySheet.  No visitor text is sent to a third party. */
(() => {
  'use strict';

  const phraseSets = {
    en: {},
    de: {
      'Language':'Sprache','Menu':'Menü','Categories':'Kategorien','Brands':'Marken','Styles':'Stile','Guides':'Leitfäden',
      'Independent product research':'Unabhängige Produktrecherche','Start with intent':'Mit einer Absicht beginnen',
      'Browse product categories':'Produktkategorien durchsuchen','View all categories':'Alle Kategorien anzeigen',
      'Shoes':'Schuhe','Hoodies & jackets':'Hoodies & Jacken','Accessories':'Accessoires','Watches':'Uhren',
      'Useful before checkout':'Nützlich vor dem Bezahlen','Research by brand or style':'Nach Marke oder Stil recherchieren',
      'Browse brands':'Marken durchsuchen','Browse styles':'Stile durchsuchen','Use the original listing':'Die ursprüngliche Produktseite verwenden',
      'Practical guides':'Praktische Leitfäden','Read all guides':'Alle Leitfäden lesen','Search current product research':'Aktuelle Produktrecherche suchen',
      'Open FindSpreadsheet':'FindSpreadsheet öffnen','FAQ':'FAQ','Answers before action':'Antworten vor dem Handeln',
      'PikoBuy Research FAQ':'PikoBuy-Recherche: FAQ','Product-link guide':'Leitfaden zu Produktlinks',
      'QC photo guide':'Leitfaden zu QC-Fotos','Shipping-route guide':'Leitfaden zur Versandroute',
      'Search product research':'Produktrecherche suchen','Search FindSpreadsheet':'FindSpreadsheet durchsuchen',
      'Search continues on FindSpreadsheet.':'Die Suche wird auf FindSpreadsheet fortgesetzt.',
      'Ready to continue your product research?':'Bereit, Ihre Produktrecherche fortzusetzen?',
      'Independent product-research guide.':'Unabhängiger Leitfaden zur Produktrecherche.'
    },
    fr: {
      'Language':'Langue','Menu':'Menu','Categories':'Catégories','Brands':'Marques','Styles':'Styles','Guides':'Guides',
      'Independent product research':'Recherche indépendante de produits','Start with intent':'Commencez avec un objectif',
      'Browse product categories':'Parcourir les catégories de produits','View all categories':'Voir toutes les catégories',
      'Shoes':'Chaussures','Hoodies & jackets':'Sweats et vestes','Accessories':'Accessoires','Watches':'Montres',
      'Useful before checkout':'Utile avant le paiement','Research by brand or style':'Rechercher par marque ou par style',
      'Browse brands':'Parcourir les marques','Browse styles':'Parcourir les styles','Use the original listing':'Utilisez l’annonce d’origine',
      'Practical guides':'Guides pratiques','Read all guides':'Lire tous les guides','Search current product research':'Rechercher des produits actuels',
      'Open FindSpreadsheet':'Ouvrir FindSpreadsheet','FAQ':'FAQ','Answers before action':'Des réponses avant d’agir',
      'PikoBuy Research FAQ':'FAQ sur la recherche PikoBuy','Product-link guide':'Guide des liens produit',
      'QC photo guide':'Guide des photos QC','Shipping-route guide':'Guide des itinéraires d’expédition',
      'Search product research':'Rechercher des produits','Search FindSpreadsheet':'Rechercher dans FindSpreadsheet',
      'Search continues on FindSpreadsheet.':'La recherche continue sur FindSpreadsheet.',
      'Ready to continue your product research?':'Prêt à poursuivre votre recherche produit ?',
      'Independent product-research guide.':'Guide indépendant de recherche produit.'
    },
    es: {
      'Language':'Idioma','Menu':'Menú','Categories':'Categorías','Brands':'Marcas','Styles':'Estilos','Guides':'Guías',
      'Independent product research':'Investigación independiente de productos','Start with intent':'Empieza con una intención',
      'Browse product categories':'Explorar categorías de productos','View all categories':'Ver todas las categorías',
      'Shoes':'Zapatos','Hoodies & jackets':'Sudaderas y chaquetas','Accessories':'Accesorios','Watches':'Relojes',
      'Useful before checkout':'Útil antes de pagar','Research by brand or style':'Investiga por marca o estilo',
      'Browse brands':'Explorar marcas','Browse styles':'Explorar estilos','Use the original listing':'Usa el anuncio original',
      'Practical guides':'Guías prácticas','Read all guides':'Leer todas las guías','Search current product research':'Buscar productos actuales',
      'Open FindSpreadsheet':'Abrir FindSpreadsheet','FAQ':'Preguntas frecuentes','Answers before action':'Respuestas antes de actuar',
      'PikoBuy Research FAQ':'Preguntas frecuentes de investigación PikoBuy','Product-link guide':'Guía de enlaces de productos',
      'QC photo guide':'Guía de fotos QC','Shipping-route guide':'Guía de rutas de envío',
      'Search product research':'Buscar productos','Search FindSpreadsheet':'Buscar en FindSpreadsheet',
      'Search continues on FindSpreadsheet.':'La búsqueda continúa en FindSpreadsheet.',
      'Ready to continue your product research?':'¿Listo para continuar tu investigación de productos?',
      'Independent product-research guide.':'Guía independiente de investigación de productos.'
    },
    it: {
      'Language':'Lingua','Menu':'Menu','Categories':'Categorie','Brands':'Marchi','Styles':'Stili','Guides':'Guide',
      'Independent product research':'Ricerca indipendente sui prodotti','Start with intent':'Inizia con un obiettivo',
      'Browse product categories':'Esplora le categorie di prodotti','View all categories':'Vedi tutte le categorie',
      'Shoes':'Scarpe','Hoodies & jackets':'Felpe e giacche','Accessories':'Accessori','Watches':'Orologi',
      'Useful before checkout':'Utile prima del pagamento','Research by brand or style':'Ricerca per marchio o stile',
      'Browse brands':'Esplora i marchi','Browse styles':'Esplora gli stili','Use the original listing':'Usa l’inserzione originale',
      'Practical guides':'Guide pratiche','Read all guides':'Leggi tutte le guide','Search current product research':'Cerca prodotti attuali',
      'Open FindSpreadsheet':'Apri FindSpreadsheet','FAQ':'FAQ','Answers before action':'Risposte prima di agire',
      'PikoBuy Research FAQ':'FAQ sulla ricerca PikoBuy','Product-link guide':'Guida ai link dei prodotti',
      'QC photo guide':'Guida alle foto QC','Shipping-route guide':'Guida ai percorsi di spedizione',
      'Search product research':'Cerca prodotti','Search FindSpreadsheet':'Cerca su FindSpreadsheet',
      'Search continues on FindSpreadsheet.':'La ricerca continua su FindSpreadsheet.',
      'Ready to continue your product research?':'Pronto a continuare la tua ricerca di prodotti?',
      'Independent product-research guide.':'Guida indipendente alla ricerca di prodotti.'
    },
    pt: {
      'Language':'Idioma','Menu':'Menu','Categories':'Categorias','Brands':'Marcas','Styles':'Estilos','Guides':'Guias',
      'Independent product research':'Pesquisa independente de produtos','Start with intent':'Comece com uma intenção',
      'Browse product categories':'Explorar categorias de produtos','View all categories':'Ver todas as categorias',
      'Shoes':'Calçados','Hoodies & jackets':'Moletons e jaquetas','Accessories':'Acessórios','Watches':'Relógios',
      'Useful before checkout':'Útil antes do pagamento','Research by brand or style':'Pesquise por marca ou estilo',
      'Browse brands':'Explorar marcas','Browse styles':'Explorar estilos','Use the original listing':'Use o anúncio original',
      'Practical guides':'Guias práticos','Read all guides':'Ler todos os guias','Search current product research':'Pesquisar produtos atuais',
      'Open FindSpreadsheet':'Abrir FindSpreadsheet','FAQ':'Perguntas frequentes','Answers before action':'Respostas antes de agir',
      'PikoBuy Research FAQ':'Perguntas frequentes sobre a pesquisa PikoBuy','Product-link guide':'Guia de links de produtos',
      'QC photo guide':'Guia de fotos QC','Shipping-route guide':'Guia de rotas de envio',
      'Search product research':'Pesquisar produtos','Search FindSpreadsheet':'Pesquisar no FindSpreadsheet',
      'Search continues on FindSpreadsheet.':'A pesquisa continua no FindSpreadsheet.',
      'Ready to continue your product research?':'Pronto para continuar sua pesquisa de produtos?',
      'Independent product-research guide.':'Guia independente de pesquisa de produtos.'
    },
    nl: {
      'Language':'Taal','Menu':'Menu','Categories':'Categorieën','Brands':'Merken','Styles':'Stijlen','Guides':'Gidsen',
      'Independent product research':'Onafhankelijk productonderzoek','Start with intent':'Begin met een doel',
      'Browse product categories':'Productcategorieën bekijken','View all categories':'Alle categorieën bekijken',
      'Shoes':'Schoenen','Hoodies & jackets':'Hoodies en jassen','Accessories':'Accessoires','Watches':'Horloges',
      'Useful before checkout':'Nuttig vóór het afrekenen','Research by brand or style':'Onderzoek per merk of stijl',
      'Browse brands':'Merken bekijken','Browse styles':'Stijlen bekijken','Use the original listing':'Gebruik de oorspronkelijke aanbieding',
      'Practical guides':'Praktische gidsen','Read all guides':'Alle gidsen lezen','Search current product research':'Huidig productonderzoek zoeken',
      'Open FindSpreadsheet':'FindSpreadsheet openen','FAQ':'Veelgestelde vragen','Answers before action':'Antwoorden vóór u handelt',
      'PikoBuy Research FAQ':'PikoBuy-onderzoeks-FAQ','Product-link guide':'Gids voor productlinks',
      'QC photo guide':'Gids voor QC-foto’s','Shipping-route guide':'Gids voor verzendroutes',
      'Search product research':'Productonderzoek zoeken','Search FindSpreadsheet':'Zoeken in FindSpreadsheet',
      'Search continues on FindSpreadsheet.':'De zoekopdracht gaat verder op FindSpreadsheet.',
      'Ready to continue your product research?':'Klaar om uw productonderzoek voort te zetten?',
      'Independent product-research guide.':'Onafhankelijke gids voor productonderzoek.'
    },
    pl: {
      'Language':'Język','Menu':'Menu','Categories':'Kategorie','Brands':'Marki','Styles':'Style','Guides':'Poradniki',
      'Independent product research':'Niezależne badanie produktów','Start with intent':'Zacznij od celu',
      'Browse product categories':'Przeglądaj kategorie produktów','View all categories':'Zobacz wszystkie kategorie',
      'Shoes':'Buty','Hoodies & jackets':'Bluzy i kurtki','Accessories':'Akcesoria','Watches':'Zegarki',
      'Useful before checkout':'Przydatne przed płatnością','Research by brand or style':'Szukaj według marki lub stylu',
      'Browse brands':'Przeglądaj marki','Browse styles':'Przeglądaj style','Use the original listing':'Użyj oryginalnej oferty',
      'Practical guides':'Praktyczne poradniki','Read all guides':'Przeczytaj wszystkie poradniki','Search current product research':'Szukaj aktualnych produktów',
      'Open FindSpreadsheet':'Otwórz FindSpreadsheet','FAQ':'FAQ','Answers before action':'Odpowiedzi przed działaniem',
      'PikoBuy Research FAQ':'FAQ dotyczące badań PikoBuy','Product-link guide':'Poradnik dotyczący linków do produktów',
      'QC photo guide':'Poradnik dotyczący zdjęć QC','Shipping-route guide':'Poradnik dotyczący tras wysyłki',
      'Search product research':'Szukaj produktów','Search FindSpreadsheet':'Szukaj w FindSpreadsheet',
      'Search continues on FindSpreadsheet.':'Wyszukiwanie będzie kontynuowane w FindSpreadsheet.',
      'Ready to continue your product research?':'Gotowy, aby kontynuować badanie produktów?',
      'Independent product-research guide.':'Niezależny przewodnik po badaniu produktów.'
    },
    sv: {
      'Language':'Språk','Menu':'Meny','Categories':'Kategorier','Brands':'Varumärken','Styles':'Stilar','Guides':'Guider',
      'Independent product research':'Oberoende produktundersökning','Start with intent':'Börja med ett syfte',
      'Browse product categories':'Bläddra bland produktkategorier','View all categories':'Visa alla kategorier',
      'Shoes':'Skor','Hoodies & jackets':'Hoodies och jackor','Accessories':'Tillbehör','Watches':'Klockor',
      'Useful before checkout':'Bra före betalning','Research by brand or style':'Undersök efter varumärke eller stil',
      'Browse brands':'Bläddra bland varumärken','Browse styles':'Bläddra bland stilar','Use the original listing':'Använd den ursprungliga annonsen',
      'Practical guides':'Praktiska guider','Read all guides':'Läs alla guider','Search current product research':'Sök aktuell produktinformation',
      'Open FindSpreadsheet':'Öppna FindSpreadsheet','FAQ':'Vanliga frågor','Answers before action':'Svar före handling',
      'PikoBuy Research FAQ':'Vanliga frågor om PikoBuy-undersökning','Product-link guide':'Guide till produktlänkar',
      'QC photo guide':'Guide till QC-foton','Shipping-route guide':'Guide till fraktrutter',
      'Search product research':'Sök produktinformation','Search FindSpreadsheet':'Sök i FindSpreadsheet',
      'Search continues on FindSpreadsheet.':'Sökningen fortsätter på FindSpreadsheet.',
      'Ready to continue your product research?':'Redo att fortsätta din produktundersökning?',
      'Independent product-research guide.':'Oberoende guide för produktundersökning.'
    }
  };

  const originals = new WeakMap();
  const attrOriginals = new WeakMap();
  const normalise = value => value.replace(/\s+/g, ' ').trim();

  function replaceText(language) {
    const translations = phraseSets[language] || {};
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return node.parentElement && !node.parentElement.closest('script,style,option')
          ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    let node;
    while ((node = walker.nextNode())) {
      if (!originals.has(node)) originals.set(node, node.nodeValue);
      const source = originals.get(node);
      const key = normalise(source);
      node.nodeValue = translations[key] ? source.replace(key, translations[key]) : source;
    }
    document.querySelectorAll('[placeholder],[aria-label]').forEach(element => {
      if (!attrOriginals.has(element)) attrOriginals.set(element, {
        placeholder: element.getAttribute('placeholder'),
        ariaLabel: element.getAttribute('aria-label')
      });
      const source = attrOriginals.get(element);
      if (source.placeholder) element.setAttribute('placeholder', translations[source.placeholder] || source.placeholder);
      if (source.ariaLabel) element.setAttribute('aria-label', translations[source.ariaLabel] || source.ariaLabel);
    });
  }

  function apply(language) {
    replaceText(language || 'en');
  }

  window.addEventListener('pikobuysheet-language-change', event => apply(event.detail.language));
  window.addEventListener('pikobuysheet-language-ready', event => apply(event.detail.language));
  const initialLanguage = () => document.documentElement.dataset.language || 'en';
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => apply(initialLanguage()), { once: true });
  } else {
    apply(initialLanguage());
  }
})();
