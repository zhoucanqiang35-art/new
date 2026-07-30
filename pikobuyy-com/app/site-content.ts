export const languages = [
  { code: "en", label: "English", short: "EN", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", short: "DE", flag: "🇩🇪" },
  { code: "fr", label: "Français", short: "FR", flag: "🇫🇷" },
  { code: "es", label: "Español", short: "ES", flag: "🇪🇸" },
  { code: "it", label: "Italiano", short: "IT", flag: "🇮🇹" },
  { code: "pl", label: "Polski", short: "PL", flag: "🇵🇱" },
  { code: "nl", label: "Nederlands", short: "NL", flag: "🇳🇱" },
  { code: "pt", label: "Português", short: "PT", flag: "🇵🇹" },
] as const;

export type Locale = (typeof languages)[number]["code"];
export type Section = "categories" | "guides" | "articles" | "updates" | "faq";

export const sections: Section[] = ["categories", "guides", "articles", "updates", "faq"];

export const categorySlugs = [
  "shoes",
  "hoodies-sweaters",
  "t-shirts",
  "jackets",
  "pants-shorts",
  "headwear",
  "accessories",
  "jersey",
  "electronics",
  "other-stuff",
] as const;

export type CategorySlug = (typeof categorySlugs)[number];

export const categoryLinks: Record<CategorySlug, string> = {
  shoes: "https://findspreadsheet.com/shoes/",
  "hoodies-sweaters": "https://findspreadsheet.com/hoodies-sweaters/",
  "t-shirts": "https://findspreadsheet.com/t-shirts/",
  jackets: "https://findspreadsheet.com/jackets/",
  "pants-shorts": "https://findspreadsheet.com/pants-shorts/",
  headwear: "https://findspreadsheet.com/headwear/",
  accessories: "https://findspreadsheet.com/accessories/",
  jersey: "https://findspreadsheet.com/Jersey/",
  electronics: "https://findspreadsheet.com/electronics/",
  "other-stuff": "https://findspreadsheet.com/other-stuff/",
};

export const sectionItemSlugs: Record<Exclude<Section, "categories">, string[]> = {
  guides: ["beginner-research-workflow", "qc-photo-checklist", "shipping-cost-planning", "product-link-verification"],
  articles: ["what-is-a-pikobuy-spreadsheet", "how-to-use-pikobuy-spreadsheet-2026", "pikobuy-qc-photo-guide", "pikobuy-shipping-cost"],
  updates: ["category-structure-refreshed", "current-link-checks-clarified", "qc-guide-expanded", "language-pages-introduced"],
  faq: ["what-is-a-pikobuy-spreadsheet", "does-pikobuyy-sell-products", "how-to-use-qc-photos", "what-affects-shipping-cost", "how-often-links-change", "where-the-live-directory-opens"],
};

export type Product = {
  slug: string;
  name: string;
  category: CategorySlug;
  priceCny: number;
  priceUsd: string;
  image: string;
  mainUrl: string;
  productId: string;
  note: string;
};

export const products: Product[] = [
  {
    slug: "balenciaga-3-0-shoes",
    name: "Balenciaga 3.0 Shoes",
    category: "shoes",
    priceCny: 400,
    priceUsd: "59.13",
    image: "https://findspreadsheet.com/uploads/allimg/20260318/1-26031PS443146.webp",
    mainUrl: "https://findspreadsheet.com/shoes/balenciaga-3-0-shoes-2831.html",
    productId: "7712270212",
    note: "Compare the full shape, outsole, heel profile, panel alignment and visible size details.",
  },
  {
    slug: "fendi-slides",
    name: "Fendi Slides",
    category: "shoes",
    priceCny: 125,
    priceUsd: "18.48",
    image: "https://findspreadsheet.com/uploads/allimg/20260310/1-260310143342B2.webp",
    mainUrl: "https://findspreadsheet.com/shoes/fendi-slides-2272.html",
    productId: "7704350127",
    note: "Review the footbed, strap shape, edge finish, outsole texture and current size options.",
  },
  {
    slug: "bape-splatter-ape-head-hoodie",
    name: "Bape Splatter Ape Head Hoodie",
    category: "hoodies-sweaters",
    priceCny: 186,
    priceUsd: "27.50",
    image: "https://findspreadsheet.com/uploads/allimg/20260306/1-260306095929105.webp",
    mainUrl: "https://findspreadsheet.com/hoodies-sweaters/bape-splatter-ape-head-hoodie-40-styles-1938.html",
    productId: "7701602753",
    note: "Check print placement, fabric weight, cuff finish, measurements and the current style selection.",
  },
  {
    slug: "mertra-puffer",
    name: "Mertra Puffer",
    category: "jackets",
    priceCny: 544,
    priceUsd: "80.41",
    image: "https://findspreadsheet.com/uploads/allimg/20260314/1-2603141419262V.webp",
    mainUrl: "https://findspreadsheet.com/jackets/mertra-puffer-2594.html",
    productId: "7710301776",
    note: "Compare the fill distribution, silhouette, zipper line, cuffs, labels and available measurements.",
  },
  {
    slug: "qatar-short-sleeve-suits",
    name: "Qatar Short Sleeve Suits",
    category: "jersey",
    priceCny: 99,
    priceUsd: "14.63",
    image: "https://findspreadsheet.com/uploads/allimg/20260310/1-260310111F4C4.webp",
    mainUrl: "https://findspreadsheet.com/Jersey/qatar-short-sleeve-suits-2249.html",
    productId: "7704304729",
    note: "Review badge placement, print alignment, fabric texture, collar construction and size information.",
  },
  {
    slug: "gallery-short",
    name: "Gallery Short",
    category: "pants-shorts",
    priceCny: 145,
    priceUsd: "21.43",
    image: "https://findspreadsheet.com/uploads/allimg/20260319/1-260319153159600.webp",
    mainUrl: "https://findspreadsheet.com/pants-shorts/gallery-short-3003.html",
    productId: "7711437541",
    note: "Check the waistband, drawstring, pocket shape, hem finish, measurements and current color options.",
  },
];

export const productSlugs = products.map((product) => product.slug);

type LocaleCopy = {
  nav: Record<Section, string>;
  open: string;
  language: string;
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  explore: string;
  cards: Record<Section, { title: string; text: string }>;
  independent: string;
  footerTag: string;
  itemCta: string;
  categoryDetail: {
    eyebrow: string;
    back: string;
    checkTitle: string;
    checks: string[];
  };
};

export const localeCopy: Record<Locale, LocaleCopy> = {
  en: {
    nav: { categories: "Finds", guides: "Guides", articles: "SEO Articles", updates: "Updates", faq: "FAQ" },
    open: "Open all finds",
    language: "Language",
    eyebrow: "Independent spreadsheet resource · 2026",
    title: "Pikobuy Spreadsheet",
    accent: "without the noise.",
    intro: "Browse organized product finds, compare categories and learn what to check before opening the current listing.",
    explore: "Explore the directory",
    cards: {
      categories: { title: "Product finds", text: "Start with ten practical shopping categories and move to the live directory." },
      guides: { title: "Buying guides", text: "Use simple research, QC-photo and shipping checklists before you decide." },
      articles: { title: "SEO articles", text: "Read in-depth Pikobuy Spreadsheet articles organized around real search questions." },
      updates: { title: "Latest updates", text: "Follow link reviews, guide changes and new research notes." },
      faq: { title: "Clear answers", text: "Understand what the directory does, what it does not do and what to verify." },
    },
    independent: "Independent shopping-research resource. We do not sell products or process orders.",
    footerTag: "Research first.",
    itemCta: "Read this content",
    categoryDetail: {
      eyebrow: "Pikobuyy category guide",
      back: "Back to all categories",
      checkTitle: "What to check in this category",
      checks: ["Compare the current listing details", "Review photos from more than one angle", "Confirm size, variant and availability", "Estimate shipping after warehouse measurements"],
    },
  },
  de: {
    nav: { categories: "Funde", guides: "Ratgeber", articles: "SEO-Artikel", updates: "Aktuelles", faq: "FAQ" },
    open: "Alle Funde öffnen",
    language: "Sprache",
    eyebrow: "Unabhängige Spreadsheet-Ressource · 2026",
    title: "Pikobuy Spreadsheet",
    accent: "ohne unnötigen Ballast.",
    intro: "Durchsuche sortierte Produktfunde, vergleiche Kategorien und erfahre, was du vor dem Öffnen eines aktuellen Angebots prüfen solltest.",
    explore: "Verzeichnis entdecken",
    cards: {
      categories: { title: "Produktfunde", text: "Starte mit zehn praktischen Kategorien und öffne anschließend das aktuelle Verzeichnis." },
      guides: { title: "Einkaufsratgeber", text: "Nutze einfache Checklisten für Recherche, QC-Fotos und Versand." },
      articles: { title: "SEO-Artikel", text: "Lies ausführliche Artikel zum Pikobuy Spreadsheet, geordnet nach echten Suchfragen." },
      updates: { title: "Neueste Updates", text: "Verfolge Linkprüfungen, Ratgeber-Änderungen und neue Recherchen." },
      faq: { title: "Klare Antworten", text: "Erfahre, was das Verzeichnis leistet und was du selbst prüfen solltest." },
    },
    independent: "Unabhängige Einkaufsrecherche. Wir verkaufen keine Produkte und bearbeiten keine Bestellungen.",
    footerTag: "Erst recherchieren.",
    itemCta: "Inhalt lesen",
    categoryDetail: {
      eyebrow: "Pikobuyy-Kategorieratgeber",
      back: "Zurück zu allen Kategorien",
      checkTitle: "Was du in dieser Kategorie prüfen solltest",
      checks: ["Aktuelle Angebotsdetails vergleichen", "Fotos aus mehreren Blickwinkeln prüfen", "Größe, Variante und Verfügbarkeit bestätigen", "Versand nach der Lagermessung schätzen"],
    },
  },
  fr: {
    nav: { categories: "Trouvailles", guides: "Guides", articles: "Articles SEO", updates: "Actualités", faq: "FAQ" },
    open: "Voir toutes les trouvailles",
    language: "Langue",
    eyebrow: "Ressource indépendante · 2026",
    title: "Pikobuy Spreadsheet",
    accent: "sans bruit inutile.",
    intro: "Parcourez des trouvailles classées, comparez les catégories et découvrez les points à vérifier avant d’ouvrir l’annonce actuelle.",
    explore: "Explorer le répertoire",
    cards: {
      categories: { title: "Trouvailles produits", text: "Commencez par dix catégories pratiques puis consultez le répertoire actuel." },
      guides: { title: "Guides d’achat", text: "Utilisez des listes simples pour la recherche, les photos QC et l’expédition." },
      articles: { title: "Articles SEO", text: "Lisez des articles approfondis sur Pikobuy Spreadsheet répondant aux vraies recherches." },
      updates: { title: "Dernières actualités", text: "Suivez les liens vérifiés, les guides révisés et les nouvelles recherches." },
      faq: { title: "Réponses claires", text: "Comprenez le rôle du répertoire et les éléments à vérifier vous-même." },
    },
    independent: "Ressource indépendante de recherche. Nous ne vendons aucun produit et ne traitons aucune commande.",
    footerTag: "Recherchez avant de choisir.",
    itemCta: "Lire ce contenu",
    categoryDetail: {
      eyebrow: "Guide de catégorie Pikobuyy",
      back: "Retour à toutes les catégories",
      checkTitle: "Points à vérifier dans cette catégorie",
      checks: ["Comparer les détails de l’annonce actuelle", "Examiner les photos sous plusieurs angles", "Confirmer la taille, la variante et la disponibilité", "Estimer l’expédition après les mesures en entrepôt"],
    },
  },
  es: {
    nav: { categories: "Hallazgos", guides: "Guías", articles: "Artículos SEO", updates: "Novedades", faq: "Preguntas" },
    open: "Abrir todos los hallazgos",
    language: "Idioma",
    eyebrow: "Recurso independiente · 2026",
    title: "Pikobuy Spreadsheet",
    accent: "sin ruido innecesario.",
    intro: "Explora productos organizados, compara categorías y aprende qué revisar antes de abrir el anuncio actual.",
    explore: "Explorar el directorio",
    cards: {
      categories: { title: "Productos encontrados", text: "Empieza con diez categorías prácticas y accede al directorio actualizado." },
      guides: { title: "Guías de compra", text: "Usa listas sencillas para investigar, revisar fotos QC y calcular envíos." },
      articles: { title: "Artículos SEO", text: "Lee artículos detallados sobre Pikobuy Spreadsheet basados en búsquedas reales." },
      updates: { title: "Últimas novedades", text: "Consulta revisiones de enlaces, cambios en las guías y nuevas notas." },
      faq: { title: "Respuestas claras", text: "Entiende qué hace el directorio y qué debes comprobar por tu cuenta." },
    },
    independent: "Recurso independiente de investigación. No vendemos productos ni gestionamos pedidos.",
    footerTag: "Investiga antes de elegir.",
    itemCta: "Leer este contenido",
    categoryDetail: {
      eyebrow: "Guía de categoría Pikobuyy",
      back: "Volver a todas las categorías",
      checkTitle: "Qué revisar en esta categoría",
      checks: ["Comparar los datos del anuncio actual", "Revisar fotos desde varios ángulos", "Confirmar talla, variante y disponibilidad", "Calcular el envío tras las medidas del almacén"],
    },
  },
  it: {
    nav: { categories: "Prodotti", guides: "Guide", articles: "Articoli SEO", updates: "Novità", faq: "Domande" },
    open: "Apri tutti i prodotti",
    language: "Lingua",
    eyebrow: "Risorsa indipendente · 2026",
    title: "Pikobuy Spreadsheet",
    accent: "senza confusione.",
    intro: "Sfoglia prodotti organizzati, confronta le categorie e scopri cosa controllare prima di aprire l’inserzione aggiornata.",
    explore: "Esplora la directory",
    cards: {
      categories: { title: "Prodotti selezionati", text: "Parti da dieci categorie pratiche e passa alla directory aggiornata." },
      guides: { title: "Guide all’acquisto", text: "Usa checklist semplici per ricerca, foto QC e spedizione." },
      articles: { title: "Articoli SEO", text: "Leggi approfondimenti su Pikobuy Spreadsheet basati su ricerche reali." },
      updates: { title: "Ultimi aggiornamenti", text: "Segui revisioni dei link, modifiche alle guide e nuove ricerche." },
      faq: { title: "Risposte chiare", text: "Scopri cosa offre la directory e cosa devi verificare personalmente." },
    },
    independent: "Risorsa indipendente di ricerca. Non vendiamo prodotti e non gestiamo ordini.",
    footerTag: "Prima la ricerca.",
    itemCta: "Leggi il contenuto",
    categoryDetail: {
      eyebrow: "Guida alla categoria Pikobuyy",
      back: "Torna a tutte le categorie",
      checkTitle: "Cosa controllare in questa categoria",
      checks: ["Confronta i dettagli dell’inserzione attuale", "Esamina foto da più angolazioni", "Conferma taglia, variante e disponibilità", "Stima la spedizione dopo le misure in magazzino"],
    },
  },
  pl: {
    nav: { categories: "Znaleziska", guides: "Poradniki", articles: "Artykuły SEO", updates: "Aktualizacje", faq: "Pytania" },
    open: "Otwórz wszystkie znaleziska",
    language: "Język",
    eyebrow: "Niezależny katalog · 2026",
    title: "Pikobuy Spreadsheet",
    accent: "bez zbędnego chaosu.",
    intro: "Przeglądaj uporządkowane znaleziska, porównuj kategorie i sprawdzaj najważniejsze informacje przed otwarciem aktualnej oferty.",
    explore: "Przeglądaj katalog",
    cards: {
      categories: { title: "Znaleziska produktów", text: "Zacznij od dziesięciu praktycznych kategorii i przejdź do aktualnego katalogu." },
      guides: { title: "Poradniki zakupowe", text: "Korzystaj z prostych list kontroli wyszukiwania, zdjęć QC i wysyłki." },
      articles: { title: "Artykuły SEO", text: "Czytaj rozbudowane artykuły o Pikobuy Spreadsheet oparte na prawdziwych pytaniach." },
      updates: { title: "Najnowsze aktualizacje", text: "Śledź weryfikacje linków, zmiany poradników i nowe notatki." },
      faq: { title: "Jasne odpowiedzi", text: "Dowiedz się, jak działa katalog i co trzeba sprawdzić samodzielnie." },
    },
    independent: "Niezależne źródło informacji. Nie sprzedajemy produktów ani nie obsługujemy zamówień.",
    footerTag: "Najpierw sprawdź.",
    itemCta: "Przeczytaj treść",
    categoryDetail: {
      eyebrow: "Poradnik kategorii Pikobuyy",
      back: "Wróć do wszystkich kategorii",
      checkTitle: "Co sprawdzić w tej kategorii",
      checks: ["Porównaj szczegóły aktualnej oferty", "Obejrzyj zdjęcia z kilku stron", "Potwierdź rozmiar, wariant i dostępność", "Oszacuj wysyłkę po pomiarach magazynowych"],
    },
  },
  nl: {
    nav: { categories: "Vondsten", guides: "Gidsen", articles: "SEO-artikelen", updates: "Updates", faq: "Vragen" },
    open: "Alle vondsten openen",
    language: "Taal",
    eyebrow: "Onafhankelijke spreadsheetbron · 2026",
    title: "Pikobuy Spreadsheet",
    accent: "zonder overbodige ruis.",
    intro: "Bekijk geordende productvondsten, vergelijk categorieën en lees wat je controleert voordat je de actuele aanbieding opent.",
    explore: "Verken de directory",
    cards: {
      categories: { title: "Productvondsten", text: "Begin met tien praktische categorieën en ga door naar de actuele directory." },
      guides: { title: "Koopgidsen", text: "Gebruik eenvoudige checklists voor onderzoek, QC-foto’s en verzending." },
      articles: { title: "SEO-artikelen", text: "Lees uitgebreide artikelen over Pikobuy Spreadsheet op basis van echte zoekvragen." },
      updates: { title: "Laatste updates", text: "Volg linkcontroles, aangepaste gidsen en nieuwe onderzoeksnotities." },
      faq: { title: "Duidelijke antwoorden", text: "Lees wat de directory doet en wat je zelf nog moet controleren." },
    },
    independent: "Onafhankelijke onderzoeksbron. We verkopen geen producten en verwerken geen bestellingen.",
    footerTag: "Eerst onderzoeken.",
    itemCta: "Lees deze inhoud",
    categoryDetail: {
      eyebrow: "Pikobuyy-categoriegids",
      back: "Terug naar alle categorieën",
      checkTitle: "Wat je in deze categorie controleert",
      checks: ["Vergelijk de actuele aanbiedingsgegevens", "Bekijk foto’s vanuit meerdere hoeken", "Bevestig maat, variant en beschikbaarheid", "Schat verzending na magazijnmetingen"],
    },
  },
  pt: {
    nav: { categories: "Descobertas", guides: "Guias", articles: "Artigos SEO", updates: "Atualizações", faq: "Perguntas" },
    open: "Abrir todas as descobertas",
    language: "Idioma",
    eyebrow: "Recurso independente · 2026",
    title: "Pikobuy Spreadsheet",
    accent: "sem ruído desnecessário.",
    intro: "Explore produtos organizados, compare categorias e saiba o que verificar antes de abrir o anúncio atual.",
    explore: "Explorar o diretório",
    cards: {
      categories: { title: "Produtos encontrados", text: "Comece por dez categorias práticas e avance para o diretório atualizado." },
      guides: { title: "Guias de compra", text: "Use listas simples para pesquisa, fotos QC e envio." },
      articles: { title: "Artigos SEO", text: "Leia artigos aprofundados sobre Pikobuy Spreadsheet baseados em pesquisas reais." },
      updates: { title: "Últimas atualizações", text: "Acompanhe revisões de links, alterações nos guias e novas notas." },
      faq: { title: "Respostas claras", text: "Entenda o que o diretório oferece e o que deve verificar por conta própria." },
    },
    independent: "Recurso independente de pesquisa. Não vendemos produtos nem processamos encomendas.",
    footerTag: "Pesquise primeiro.",
    itemCta: "Ler este conteúdo",
    categoryDetail: {
      eyebrow: "Guia de categoria Pikobuyy",
      back: "Voltar a todas as categorias",
      checkTitle: "O que verificar nesta categoria",
      checks: ["Comparar os detalhes do anúncio atual", "Rever fotos de vários ângulos", "Confirmar tamanho, variante e disponibilidade", "Estimar o envio após as medições do armazém"],
    },
  },
};

export const sectionItemTitles: Record<Locale, Record<Section, string[]>> = {
  en: {
    categories: ["Shoes", "Hoodies / Sweaters", "T-Shirts", "Jackets", "Pants & Shorts", "Headwear", "Accessories", "Jersey", "Electronics", "Other Stuff"],
    guides: ["Beginner research workflow", "QC photo checklist", "Shipping cost planning", "Product-link verification"],
    articles: ["What is a Pikobuy Spreadsheet?", "How to use a Pikobuy Spreadsheet in 2026", "Pikobuy QC photos: a practical review guide", "Pikobuy shipping cost: what changes the final quote"],
    updates: ["Category structure refreshed", "Current-link checks clarified", "QC guide expanded", "Language pages introduced"],
    faq: ["What is a Pikobuy spreadsheet?", "Does Pikobuyy sell products?", "How should QC photos be used?", "What affects shipping cost?", "How often can product links change?", "Where does the live directory open?"],
  },
  de: {
    categories: ["Schuhe", "Hoodies / Pullover", "T-Shirts", "Jacken", "Hosen & Shorts", "Kopfbedeckungen", "Accessoires", "Trikots", "Elektronik", "Sonstiges"],
    guides: ["Recherche für Einsteiger", "Checkliste für QC-Fotos", "Versandkosten planen", "Produktlinks prüfen"],
    articles: ["Was ist ein Pikobuy Spreadsheet?", "So nutzt du ein Pikobuy Spreadsheet 2026", "Pikobuy-QC-Fotos richtig prüfen", "Pikobuy-Versandkosten verständlich erklärt"],
    updates: ["Kategoriestruktur überarbeitet", "Linkprüfung genauer erklärt", "QC-Ratgeber erweitert", "Sprachseiten hinzugefügt"],
    faq: ["Was ist ein Pikobuy Spreadsheet?", "Verkauft Pikobuyy Produkte?", "Wie nutzt man QC-Fotos?", "Was beeinflusst die Versandkosten?", "Wie oft ändern sich Produktlinks?", "Wo öffnet sich das aktuelle Verzeichnis?"],
  },
  fr: {
    categories: ["Chaussures", "Sweats / pulls", "T-shirts", "Vestes", "Pantalons et shorts", "Couvre-chefs", "Accessoires", "Maillots", "Électronique", "Autres produits"],
    guides: ["Méthode de recherche débutant", "Liste de contrôle des photos QC", "Prévoir les frais d’expédition", "Vérifier les liens produits"],
    articles: ["Qu’est-ce qu’un Pikobuy Spreadsheet ?", "Comment utiliser un Pikobuy Spreadsheet en 2026", "Photos QC Pikobuy : guide de vérification", "Frais d’expédition Pikobuy : comprendre le devis"],
    updates: ["Structure des catégories révisée", "Vérification des liens clarifiée", "Guide QC enrichi", "Pages linguistiques ajoutées"],
    faq: ["Qu’est-ce qu’un Pikobuy Spreadsheet ?", "Pikobuyy vend-il des produits ?", "Comment utiliser les photos QC ?", "Qu’est-ce qui influence l’expédition ?", "Les liens produits changent-ils souvent ?", "Où s’ouvre le répertoire actuel ?"],
  },
  es: {
    categories: ["Zapatillas", "Sudaderas / jerséis", "Camisetas", "Chaquetas", "Pantalones y shorts", "Gorras y sombreros", "Accesorios", "Camisetas deportivas", "Electrónica", "Otros productos"],
    guides: ["Método de investigación para principiantes", "Lista de revisión de fotos QC", "Planificar el coste de envío", "Verificar enlaces de productos"],
    articles: ["¿Qué es una hoja Pikobuy?", "Cómo usar una hoja Pikobuy en 2026", "Fotos QC de Pikobuy: guía práctica", "Coste de envío de Pikobuy: qué cambia el precio"],
    updates: ["Categorías reorganizadas", "Revisión de enlaces aclarada", "Guía QC ampliada", "Páginas de idiomas añadidas"],
    faq: ["¿Qué es una hoja Pikobuy?", "¿Pikobuyy vende productos?", "¿Cómo se usan las fotos QC?", "¿Qué afecta al coste de envío?", "¿Con qué frecuencia cambian los enlaces?", "¿Dónde se abre el directorio actual?"],
  },
  it: {
    categories: ["Scarpe", "Felpe / maglioni", "T-shirt", "Giacche", "Pantaloni e shorts", "Cappelli", "Accessori", "Maglie sportive", "Elettronica", "Altri prodotti"],
    guides: ["Metodo di ricerca per principianti", "Checklist delle foto QC", "Pianificare i costi di spedizione", "Verificare i link dei prodotti"],
    articles: ["Che cos’è un Pikobuy Spreadsheet?", "Come usare un Pikobuy Spreadsheet nel 2026", "Foto QC Pikobuy: guida pratica", "Spedizione Pikobuy: cosa cambia il preventivo"],
    updates: ["Categorie riorganizzate", "Controllo dei link chiarito", "Guida QC ampliata", "Pagine linguistiche aggiunte"],
    faq: ["Che cos’è un Pikobuy Spreadsheet?", "Pikobuyy vende prodotti?", "Come si usano le foto QC?", "Cosa incide sulla spedizione?", "Quanto spesso cambiano i link?", "Dove si apre la directory attuale?"],
  },
  pl: {
    categories: ["Buty", "Bluzy / swetry", "T-shirty", "Kurtki", "Spodnie i szorty", "Nakrycia głowy", "Akcesoria", "Koszulki sportowe", "Elektronika", "Inne produkty"],
    guides: ["Wyszukiwanie dla początkujących", "Lista kontroli zdjęć QC", "Planowanie kosztów wysyłki", "Weryfikacja linków produktów"],
    articles: ["Czym jest Pikobuy Spreadsheet?", "Jak korzystać z Pikobuy Spreadsheet w 2026 roku", "Zdjęcia QC Pikobuy: praktyczny poradnik", "Koszt wysyłki Pikobuy: co wpływa na wycenę"],
    updates: ["Odświeżono kategorie", "Wyjaśniono kontrolę linków", "Rozszerzono poradnik QC", "Dodano wersje językowe"],
    faq: ["Czym jest Pikobuy Spreadsheet?", "Czy Pikobuyy sprzedaje produkty?", "Jak korzystać ze zdjęć QC?", "Co wpływa na koszt wysyłki?", "Jak często zmieniają się linki?", "Gdzie otwiera się aktualny katalog?"],
  },
  nl: {
    categories: ["Schoenen", "Hoodies / truien", "T-shirts", "Jassen", "Broeken en shorts", "Hoofddeksels", "Accessoires", "Sportshirts", "Elektronica", "Overige producten"],
    guides: ["Onderzoek voor beginners", "Checklist voor QC-foto’s", "Verzendkosten plannen", "Productlinks controleren"],
    articles: ["Wat is een Pikobuy Spreadsheet?", "Een Pikobuy Spreadsheet gebruiken in 2026", "Pikobuy QC-foto’s: praktische controlegids", "Pikobuy-verzendkosten: wat bepaalt de prijs"],
    updates: ["Categoriestructuur vernieuwd", "Linkcontrole verduidelijkt", "QC-gids uitgebreid", "Taalpagina’s toegevoegd"],
    faq: ["Wat is een Pikobuy Spreadsheet?", "Verkoopt Pikobuyy producten?", "Hoe gebruik je QC-foto’s?", "Wat beïnvloedt verzendkosten?", "Hoe vaak veranderen productlinks?", "Waar opent de actuele directory?"],
  },
  pt: {
    categories: ["Calçado", "Sweatshirts / camisolas", "T-shirts", "Casacos", "Calças e calções", "Chapéus e bonés", "Acessórios", "Camisolas desportivas", "Eletrónica", "Outros produtos"],
    guides: ["Pesquisa para principiantes", "Lista de verificação de fotos QC", "Planear custos de envio", "Verificar ligações de produtos"],
    articles: ["O que é uma Pikobuy Spreadsheet?", "Como usar uma Pikobuy Spreadsheet em 2026", "Fotos QC Pikobuy: guia prático", "Envio Pikobuy: o que altera o orçamento"],
    updates: ["Categorias reorganizadas", "Verificação de ligações esclarecida", "Guia QC ampliado", "Páginas de idiomas adicionadas"],
    faq: ["O que é uma Pikobuy Spreadsheet?", "A Pikobuyy vende produtos?", "Como usar fotos QC?", "O que afeta o custo de envio?", "Com que frequência mudam as ligações?", "Onde abre o diretório atual?"],
  },
};

export function isLocale(value: string): value is Locale {
  return languages.some((language) => language.code === value);
}

export function isSection(value: string): value is Section {
  return sections.includes(value as Section);
}

export function isCategorySlug(value: string): value is CategorySlug {
  return categorySlugs.includes(value as CategorySlug);
}

export function routeFor(locale: Locale, section?: Section) {
  const suffix = section ? `/${section}` : "";
  return locale === "en" ? suffix || "/" : `/${locale}${suffix}`;
}
