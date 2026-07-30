import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-chrome";
import {
  categoryLinks,
  categorySlugs,
  localeCopy,
  products,
  routeFor,
  sectionItemSlugs,
  sectionItemTitles,
  type Locale,
} from "./site-content";

const categoryNames: Record<Locale, string[]> = {
  en: ["Shoes", "Hoodies / Sweaters", "T-Shirts", "Jackets", "Pants / Shorts", "Headwear", "Accessories", "Jersey", "Electronics", "Other Stuff"],
  de: ["Schuhe", "Hoodies / Pullover", "T-Shirts", "Jacken", "Hosen / Shorts", "Kopfbedeckungen", "Accessoires", "Trikots", "Elektronik", "Weitere Funde"],
  fr: ["Chaussures", "Sweats / Pulls", "T-shirts", "Vestes", "Pantalons / Shorts", "Couvre-chefs", "Accessoires", "Maillots", "Électronique", "Autres trouvailles"],
  es: ["Calzado", "Sudaderas / Jerséis", "Camisetas", "Chaquetas", "Pantalones / Shorts", "Gorras y sombreros", "Accesorios", "Camisetas deportivas", "Electrónica", "Otros productos"],
  it: ["Scarpe", "Felpe / Maglioni", "T-shirt", "Giacche", "Pantaloni / Shorts", "Cappelli", "Accessori", "Maglie sportive", "Elettronica", "Altri prodotti"],
  pl: ["Buty", "Bluzy / Swetry", "Koszulki", "Kurtki", "Spodnie / Szorty", "Nakrycia głowy", "Akcesoria", "Koszulki sportowe", "Elektronika", "Pozostałe"],
  nl: ["Schoenen", "Hoodies / Truien", "T-shirts", "Jassen", "Broeken / Shorts", "Hoofddeksels", "Accessoires", "Sportshirts", "Elektronica", "Overige vondsten"],
  pt: ["Calçado", "Hoodies / Camisolas", "T-shirts", "Casacos", "Calças / Calções", "Chapéus", "Acessórios", "Camisolas desportivas", "Eletrónica", "Outros produtos"],
};

type HomeCopy = {
  searchPlaceholder: string;
  search: string;
  featured: string;
  viewProduct: string;
  categoryEyebrow: string;
  categoryTitle: string;
  allCategories: string;
  productEyebrow: string;
  productTitle: string;
  workflowEyebrow: string;
  workflowTitle: string;
  workflowText: string;
  steps: [string, string][];
  guideEyebrow: string;
  guideTitle: string;
  guideCta: string;
  qcEyebrow: string;
  qcTitle: string;
  qcChecks: [string, string][];
  shippingEyebrow: string;
  shippingTitle: string;
  shippingText: string;
  updatesEyebrow: string;
  updatesTitle: string;
  faqEyebrow: string;
  faqTitle: string;
  finalEyebrow: string;
  finalTitle: string;
  finalCta: string;
};

type ResearchCopy = {
  officialFact: string;
  sourceLabel: string;
  workflowTitle: string;
  workflowText: string;
  workflowSteps: [string, string][];
  guideDescriptions: string[];
  qcBoundary: string;
  shippingFacts: [string, string][];
  shippingNote: string;
  calculatorCta: string;
};

type EvidenceCopy = {
  qcImageCaption: string;
  shippingImageCaption: string;
  deadlineLabel: string;
  deadlineText: string;
  qcGuideCta: string;
  verifiedLabel: string;
  implicationLabel: string;
  readMore: string;
  updatesIntro: string;
  notes: [string, string, string, string][];
};

const homeCopy: Record<Locale, HomeCopy> = {
  en: {
    searchPlaceholder: "Search shoes, hoodies, QC, shipping…", search: "Search finds", featured: "Featured main-site find", viewProduct: "View full product details",
    categoryEyebrow: "Start with a category", categoryTitle: "Find the right lane faster.", allCategories: "View all categories",
    productEyebrow: "Product details", productTitle: "Review the find before opening the main site.",
    workflowEyebrow: "A clearer research workflow", workflowTitle: "From a long list to a short decision.", workflowText: "Narrow the field, understand what matters in the photos, and verify the current listing before moving on.",
    steps: [["Choose a category", "Start narrow and use the checklist that fits the product."], ["Compare useful details", "Review price, measurements, materials and visible construction."], ["Check photos and status", "Confirm the current link, options and availability."]],
    guideEyebrow: "Practical guides", guideTitle: "Know what to check next.", guideCta: "Read the full guide",
    qcEyebrow: "QC photo checklist", qcTitle: "Four checks before you keep a find.", qcChecks: [["Ordered option", "Match model, color, size and quantity to the order."], ["Visible defects", "Check stains, holes, tears, edges, seams and symmetry."], ["Size evidence", "Use labels or tape measurements when the photos show them."], ["Missing decisive view", "Buy one useful detail photo if a missing angle changes the decision."]],
    shippingEyebrow: "Shipping reality check", shippingTitle: "The item price is only one part.", shippingText: "Destination, route, product type, parcel weight, dimensions and packaging can all change the final quote.",
    updatesEyebrow: "Latest research notes", updatesTitle: "Built to stay useful.", faqEyebrow: "Clear answers", faqTitle: "Pikobuy Spreadsheet FAQ",
    finalEyebrow: "Ready to explore?", finalTitle: "Find less noise. Make a better shortlist.", finalCta: "Browse all product finds",
  },
  de: {
    searchPlaceholder: "Schuhe, Hoodies, QC, Versand suchen…", search: "Funde suchen", featured: "Fund aus dem Hauptverzeichnis", viewProduct: "Produktdetails ansehen",
    categoryEyebrow: "Mit einer Kategorie beginnen", categoryTitle: "Schneller die passende Auswahl finden.", allCategories: "Alle Kategorien",
    productEyebrow: "Produktdetails", productTitle: "Prüfe den Fund, bevor du die Hauptseite öffnest.",
    workflowEyebrow: "Ein klarer Rechercheablauf", workflowTitle: "Von der langen Liste zur kurzen Auswahl.", workflowText: "Grenze die Auswahl ein, prüfe Fotos gezielt und bestätige das aktuelle Angebot.",
    steps: [["Kategorie wählen", "Beginne gezielt mit der passenden Produktgruppe."], ["Details vergleichen", "Prüfe Preis, Maße, Material und Verarbeitung."], ["Fotos und Status prüfen", "Bestätige Link, Varianten und Verfügbarkeit."]],
    guideEyebrow: "Praktische Ratgeber", guideTitle: "Wisse, was du als Nächstes prüfst.", guideCta: "Vollständigen Ratgeber lesen",
    qcEyebrow: "QC-Foto-Checkliste", qcTitle: "Vier Prüfungen vor der Auswahl.", qcChecks: [["Bestellte Variante", "Modell, Farbe, Größe und Menge mit der Bestellung abgleichen."], ["Sichtbare Mängel", "Flecken, Löcher, Risse, Kanten, Nähte und Symmetrie prüfen."], ["Größennachweis", "Etiketten oder Maßband nutzen, wenn sie im Bild zu sehen sind."], ["Entscheidende Ansicht fehlt", "Ein Detailfoto nur kaufen, wenn der fehlende Winkel die Entscheidung ändert."]],
    shippingEyebrow: "Versand realistisch planen", shippingTitle: "Der Artikelpreis ist nur ein Teil.", shippingText: "Ziel, Route, Produkttyp, Gewicht, Maße und Verpackung beeinflussen den Endpreis.",
    updatesEyebrow: "Neueste Recherchen", updatesTitle: "Dauerhaft nützlich.", faqEyebrow: "Klare Antworten", faqTitle: "Pikobuy-Spreadsheet-FAQ",
    finalEyebrow: "Bereit zum Entdecken?", finalTitle: "Weniger Ablenkung. Bessere Auswahl.", finalCta: "Alle Produktfunde öffnen",
  },
  fr: {
    searchPlaceholder: "Rechercher chaussures, sweats, QC, livraison…", search: "Rechercher", featured: "Produit du répertoire principal", viewProduct: "Voir la fiche complète",
    categoryEyebrow: "Commencer par une catégorie", categoryTitle: "Trouvez plus vite la bonne sélection.", allCategories: "Voir toutes les catégories",
    productEyebrow: "Fiches produits", productTitle: "Vérifiez le produit avant d’ouvrir le site principal.",
    workflowEyebrow: "Une méthode de recherche plus claire", workflowTitle: "D’une longue liste à une sélection courte.", workflowText: "Réduisez les options, analysez les photos utiles et vérifiez l’annonce actuelle.",
    steps: [["Choisir une catégorie", "Commencez par le groupe de produits adapté."], ["Comparer les détails", "Vérifiez prix, mesures, matières et fabrication."], ["Contrôler photos et statut", "Confirmez le lien, les variantes et la disponibilité."]],
    guideEyebrow: "Guides pratiques", guideTitle: "Sachez quoi vérifier ensuite.", guideCta: "Lire le guide complet",
    qcEyebrow: "Liste de contrôle QC", qcTitle: "Quatre vérifications avant de retenir un produit.", qcChecks: [["Variante commandée", "Comparez modèle, couleur, taille et quantité à la commande."], ["Défauts visibles", "Cherchez taches, trous, déchirures, bords, coutures et symétrie."], ["Preuve de taille", "Utilisez étiquette ou mètre ruban lorsqu’ils apparaissent."], ["Vue décisive absente", "Achetez une photo détaillée seulement si l’angle manquant change la décision."]],
    shippingEyebrow: "Réalité de l’expédition", shippingTitle: "Le prix du produit n’est qu’une partie.", shippingText: "Destination, ligne, type de produit, poids, dimensions et emballage modifient le devis final.",
    updatesEyebrow: "Dernières notes de recherche", updatesTitle: "Conçu pour rester utile.", faqEyebrow: "Réponses claires", faqTitle: "FAQ Pikobuy Spreadsheet",
    finalEyebrow: "Prêt à explorer ?", finalTitle: "Moins de bruit. Une meilleure sélection.", finalCta: "Voir tous les produits",
  },
  es: {
    searchPlaceholder: "Buscar calzado, sudaderas, QC, envío…", search: "Buscar", featured: "Producto del directorio principal", viewProduct: "Ver detalles completos",
    categoryEyebrow: "Empieza por una categoría", categoryTitle: "Encuentra antes la selección adecuada.", allCategories: "Ver todas las categorías",
    productEyebrow: "Detalles de producto", productTitle: "Revisa el producto antes de abrir el sitio principal.",
    workflowEyebrow: "Un proceso de búsqueda más claro", workflowTitle: "De una lista larga a una selección corta.", workflowText: "Reduce opciones, analiza las fotos y confirma el anuncio actual.",
    steps: [["Elige una categoría", "Empieza por el grupo de producto correcto."], ["Compara detalles", "Revisa precio, medidas, materiales y acabado."], ["Comprueba fotos y estado", "Confirma enlace, variantes y disponibilidad."]],
    guideEyebrow: "Guías prácticas", guideTitle: "Descubre qué revisar después.", guideCta: "Leer la guía completa",
    qcEyebrow: "Lista de fotos QC", qcTitle: "Cuatro revisiones antes de guardar un producto.", qcChecks: [["Variante pedida", "Compara modelo, color, talla y cantidad con el pedido."], ["Defectos visibles", "Busca manchas, agujeros, roturas, bordes, costuras y simetría."], ["Prueba de talla", "Usa etiquetas o cinta métrica cuando aparezcan en las fotos."], ["Falta una vista decisiva", "Compra una foto de detalle solo si ese ángulo cambia la decisión."]],
    shippingEyebrow: "Coste real del envío", shippingTitle: "El precio del artículo es solo una parte.", shippingText: "Destino, ruta, tipo, peso, dimensiones y embalaje pueden cambiar el presupuesto final.",
    updatesEyebrow: "Últimas notas", updatesTitle: "Diseñado para seguir siendo útil.", faqEyebrow: "Respuestas claras", faqTitle: "Preguntas sobre Pikobuy Spreadsheet",
    finalEyebrow: "¿Listo para explorar?", finalTitle: "Menos ruido. Una mejor selección.", finalCta: "Ver todos los productos",
  },
  it: {
    searchPlaceholder: "Cerca scarpe, felpe, QC, spedizione…", search: "Cerca", featured: "Prodotto dalla directory principale", viewProduct: "Vedi dettagli completi",
    categoryEyebrow: "Inizia da una categoria", categoryTitle: "Trova più rapidamente la selezione giusta.", allCategories: "Vedi tutte le categorie",
    productEyebrow: "Dettagli prodotto", productTitle: "Controlla il prodotto prima di aprire il sito principale.",
    workflowEyebrow: "Un percorso di ricerca più chiaro", workflowTitle: "Da una lunga lista a una scelta breve.", workflowText: "Riduci le opzioni, interpreta le foto e verifica l’inserzione aggiornata.",
    steps: [["Scegli una categoria", "Inizia dal gruppo di prodotto corretto."], ["Confronta i dettagli", "Controlla prezzo, misure, materiali e finiture."], ["Verifica foto e stato", "Conferma link, varianti e disponibilità."]],
    guideEyebrow: "Guide pratiche", guideTitle: "Scopri cosa controllare dopo.", guideCta: "Leggi la guida completa",
    qcEyebrow: "Checklist foto QC", qcTitle: "Quattro controlli prima di salvare un prodotto.", qcChecks: [["Variante ordinata", "Confronta modello, colore, taglia e quantità con l’ordine."], ["Difetti visibili", "Cerca macchie, fori, strappi, bordi, cuciture e simmetria."], ["Prova della taglia", "Usa etichette o metro quando compaiono nelle foto."], ["Manca una vista decisiva", "Compra una foto di dettaglio solo se l’angolo cambia la decisione."]],
    shippingEyebrow: "Spedizione reale", shippingTitle: "Il prezzo dell’articolo è solo una parte.", shippingText: "Destinazione, rotta, tipo, peso, dimensioni e imballaggio cambiano il preventivo.",
    updatesEyebrow: "Ultime note", updatesTitle: "Pensato per restare utile.", faqEyebrow: "Risposte chiare", faqTitle: "FAQ Pikobuy Spreadsheet",
    finalEyebrow: "Pronto a esplorare?", finalTitle: "Meno rumore. Una scelta migliore.", finalCta: "Apri tutti i prodotti",
  },
  pl: {
    searchPlaceholder: "Szukaj butów, bluz, QC, wysyłki…", search: "Szukaj", featured: "Produkt z głównego katalogu", viewProduct: "Zobacz pełne szczegóły",
    categoryEyebrow: "Zacznij od kategorii", categoryTitle: "Szybciej znajdź właściwy wybór.", allCategories: "Wszystkie kategorie",
    productEyebrow: "Szczegóły produktów", productTitle: "Sprawdź produkt przed otwarciem głównej strony.",
    workflowEyebrow: "Jaśniejszy proces wyszukiwania", workflowTitle: "Od długiej listy do krótkiego wyboru.", workflowText: "Ogranicz opcje, oceń zdjęcia i potwierdź aktualną ofertę.",
    steps: [["Wybierz kategorię", "Zacznij od właściwej grupy produktów."], ["Porównaj szczegóły", "Sprawdź cenę, wymiary, materiał i wykonanie."], ["Sprawdź zdjęcia i status", "Potwierdź link, warianty i dostępność."]],
    guideEyebrow: "Praktyczne poradniki", guideTitle: "Wiedz, co sprawdzić dalej.", guideCta: "Czytaj pełny poradnik",
    qcEyebrow: "Lista zdjęć QC", qcTitle: "Cztery kontrole przed zapisaniem produktu.", qcChecks: [["Zamówiony wariant", "Porównaj model, kolor, rozmiar i ilość z zamówieniem."], ["Widoczne wady", "Sprawdź plamy, dziury, rozdarcia, krawędzie, szwy i symetrię."], ["Dowód rozmiaru", "Użyj metki lub taśmy pomiarowej widocznej na zdjęciu."], ["Brak kluczowego ujęcia", "Kup zdjęcie szczegółowe tylko wtedy, gdy brakujący kąt zmienia decyzję."]],
    shippingEyebrow: "Realny koszt wysyłki", shippingTitle: "Cena produktu to tylko jedna część.", shippingText: "Kraj, trasa, typ, waga, wymiary i opakowanie wpływają na końcową wycenę.",
    updatesEyebrow: "Najnowsze notatki", updatesTitle: "Zaprojektowane, by pozostać użyteczne.", faqEyebrow: "Jasne odpowiedzi", faqTitle: "FAQ Pikobuy Spreadsheet",
    finalEyebrow: "Gotowy do przeglądania?", finalTitle: "Mniej chaosu. Lepszy wybór.", finalCta: "Otwórz wszystkie produkty",
  },
  nl: {
    searchPlaceholder: "Zoek schoenen, hoodies, QC, verzending…", search: "Zoeken", featured: "Product uit de hoofddirectory", viewProduct: "Bekijk volledige details",
    categoryEyebrow: "Begin met een categorie", categoryTitle: "Vind sneller de juiste selectie.", allCategories: "Alle categorieën",
    productEyebrow: "Productdetails", productTitle: "Controleer de vondst vóór je de hoofdsite opent.",
    workflowEyebrow: "Een duidelijker onderzoeksproces", workflowTitle: "Van een lange lijst naar een korte keuze.", workflowText: "Beperk opties, beoordeel foto’s en controleer de actuele aanbieding.",
    steps: [["Kies een categorie", "Begin met de juiste productgroep."], ["Vergelijk details", "Controleer prijs, maten, materiaal en afwerking."], ["Controleer foto’s en status", "Bevestig link, varianten en beschikbaarheid."]],
    guideEyebrow: "Praktische gidsen", guideTitle: "Weet wat je hierna controleert.", guideCta: "Lees de volledige gids",
    qcEyebrow: "QC-fotochecklist", qcTitle: "Vier controles voordat je een product bewaart.", qcChecks: [["Bestelde variant", "Vergelijk model, kleur, maat en aantal met de bestelling."], ["Zichtbare gebreken", "Controleer vlekken, gaten, scheuren, randen, naden en symmetrie."], ["Maatbewijs", "Gebruik labels of meetlint als die op de foto staan."], ["Beslissend beeld ontbreekt", "Koop alleen een detailfoto als de ontbrekende hoek je beslissing verandert."]],
    shippingEyebrow: "Realistische verzending", shippingTitle: "De productprijs is maar één deel.", shippingText: "Bestemming, route, type, gewicht, afmetingen en verpakking beïnvloeden de eindprijs.",
    updatesEyebrow: "Laatste onderzoeksnotities", updatesTitle: "Gemaakt om nuttig te blijven.", faqEyebrow: "Duidelijke antwoorden", faqTitle: "Pikobuy Spreadsheet FAQ",
    finalEyebrow: "Klaar om te verkennen?", finalTitle: "Minder ruis. Een betere selectie.", finalCta: "Bekijk alle producten",
  },
  pt: {
    searchPlaceholder: "Pesquisar calçado, hoodies, QC, envio…", search: "Pesquisar", featured: "Produto do diretório principal", viewProduct: "Ver detalhes completos",
    categoryEyebrow: "Comece por uma categoria", categoryTitle: "Encontre mais depressa a seleção certa.", allCategories: "Ver todas as categorias",
    productEyebrow: "Detalhes de produto", productTitle: "Analise o produto antes de abrir o site principal.",
    workflowEyebrow: "Um processo de pesquisa mais claro", workflowTitle: "De uma lista longa a uma seleção curta.", workflowText: "Reduza opções, analise fotografias e confirme o anúncio atual.",
    steps: [["Escolha uma categoria", "Comece pelo grupo de produto correto."], ["Compare detalhes", "Verifique preço, medidas, materiais e acabamento."], ["Confirme fotos e estado", "Valide ligação, variantes e disponibilidade."]],
    guideEyebrow: "Guias práticos", guideTitle: "Saiba o que verificar a seguir.", guideCta: "Ler o guia completo",
    qcEyebrow: "Lista de fotos QC", qcTitle: "Quatro verificações antes de guardar um produto.", qcChecks: [["Variante encomendada", "Compare modelo, cor, tamanho e quantidade com a encomenda."], ["Defeitos visíveis", "Procure manchas, furos, rasgos, margens, costuras e simetria."], ["Prova de tamanho", "Use etiquetas ou fita métrica quando visíveis nas fotos."], ["Falta uma vista decisiva", "Compre uma foto detalhada apenas se o ângulo alterar a decisão."]],
    shippingEyebrow: "Realidade do envio", shippingTitle: "O preço do artigo é apenas uma parte.", shippingText: "Destino, rota, tipo, peso, dimensões e embalagem alteram o orçamento final.",
    updatesEyebrow: "Últimas notas", updatesTitle: "Criado para continuar útil.", faqEyebrow: "Respostas claras", faqTitle: "FAQ Pikobuy Spreadsheet",
    finalEyebrow: "Pronto para explorar?", finalTitle: "Menos ruído. Uma seleção melhor.", finalCta: "Ver todos os produtos",
  },
};

const researchCopy: Record<Locale, ResearchCopy> = {
  en: {
    officialFact: "Verified from Pikobuy",
    sourceLabel: "Official source",
    workflowTitle: "Four decisions—not another long checklist.",
    workflowText: "Pikobuy's official guide describes six platform steps. For research, those steps become four decisions you can make before money or a return window is wasted.",
    workflowSteps: [
      ["Confirm the exact listing", "Save the seller or store, then confirm style, color and size before pasting the link or keywords into Pikobuy."],
      ["Separate the two payments", "The first payment covers the product order. International shipping is selected and paid only after the item reaches the warehouse."],
      ["Use the warehouse evidence", "Pikobuy says the warehouse checks in the item, looks for visible defects and takes photos. Compare those photos with the option you ordered."],
      ["Decide before the clock runs out", "If the seller and product qualify, the return request window is 120 hours after the order becomes “Warehoused,” counted from the next hour."],
    ],
    guideDescriptions: [
      "Follow the official six-step path: select, search, pay, warehouse inspection, international shipping, then tracking.",
      "Use warehouse photos for visible condition and ordered options; request a paid detail photo when a missing angle changes the decision.",
      "Estimate with destination, product type, weight and parcel dimensions—the exact fields used by Pikobuy's calculator.",
      "Verify the live source listing, variant and seller information; Pikobuy says the final price follows the actual purchase.",
    ],
    qcBoundary: "QC photos are evidence of visible condition, not proof of authenticity, material composition, comfort or durability. Pikobuy also says special and professional products cannot receive professional inspection.",
    shippingFacts: [
      ["Destination + product type", "These are required inputs in Pikobuy's estimator."],
      ["Weight + L × W × H", "The calculator asks for kilograms and centimetres, so parcel size matters alongside weight."],
      ["Route + billing method", "Pikobuy says routes differ in delivery time and how they are billed."],
      ["Tracking + carrier risk", "The guide says tracking may appear within three days after dispatch; third-party logistics and customs risks still remain."],
    ],
    shippingNote: "Useful rule: estimate before buying, then recalculate after warehouse packing. A pre-purchase estimate is not the final parcel quote.",
    calculatorCta: "Open Pikobuy's official estimator",
  },
  de: {
    officialFact: "Mit Pikobuy abgeglichen", sourceLabel: "Offizielle Quelle",
    workflowTitle: "Vier Entscheidungen statt einer langen Checkliste.",
    workflowText: "Der offizielle Leitfaden nennt sechs Plattformschritte. Für die Recherche werden daraus vier Entscheidungen, bevor Geld oder Rückgabefrist verloren gehen.",
    workflowSteps: [
      ["Exaktes Angebot bestätigen", "Shop oder Verkäufer speichern und Stil, Farbe sowie Größe prüfen, bevor Link oder Suchbegriff bei Pikobuy eingefügt werden."],
      ["Zwei Zahlungen trennen", "Die erste Zahlung betrifft den Artikel. Internationaler Versand wird erst nach Wareneingang ausgewählt und bezahlt."],
      ["Lagerfotos auswerten", "Pikobuy prüft beim Einlagern sichtbare Mängel und erstellt Fotos. Diese mit der bestellten Variante vergleichen."],
      ["Vor Fristablauf entscheiden", "Wenn Verkäufer und Ware berechtigt sind, gilt ab der nächsten Stunde nach „Warehoused“ ein Zeitfenster von 120 Stunden."],
    ],
    guideDescriptions: [
      "Der offizielle Ablauf: auswählen, suchen, zahlen, Lagerprüfung, internationaler Versand und Sendungsverfolgung.",
      "Lagerfotos für sichtbaren Zustand und Variante nutzen; bei entscheidender fehlender Ansicht ein Detailfoto anfordern.",
      "Mit Ziel, Produkttyp, Gewicht und Paketmaßen kalkulieren – genau diesen Feldern des Pikobuy-Rechners.",
      "Live-Angebot, Variante und Verkäufer prüfen; laut Pikobuy richtet sich der Endpreis nach dem tatsächlichen Einkauf.",
    ],
    qcBoundary: "QC-Fotos zeigen sichtbaren Zustand, beweisen aber weder Echtheit noch Material, Komfort oder Haltbarkeit. Spezial- und Fachprodukte werden laut Pikobuy nicht professionell geprüft.",
    shippingFacts: [["Ziel + Produkttyp", "Pflichtfelder im Pikobuy-Rechner."], ["Gewicht + L × B × H", "Kilogramm und Zentimeter zeigen: Paketgröße zählt mit."], ["Route + Abrechnung", "Routen unterscheiden sich bei Laufzeit und Abrechnung."], ["Tracking + Risiko", "Tracking kann binnen drei Tagen erscheinen; Drittanbieter- und Zollrisiken bleiben."]],
    shippingNote: "Vor dem Kauf schätzen und nach dem Verpacken neu rechnen. Die frühe Schätzung ist kein endgültiges Angebot.",
    calculatorCta: "Offiziellen Pikobuy-Rechner öffnen",
  },
  fr: {
    officialFact: "Vérifié auprès de Pikobuy", sourceLabel: "Source officielle",
    workflowTitle: "Quatre décisions, pas une longue liste de plus.",
    workflowText: "Le guide officiel décrit six étapes. Pour la recherche, elles deviennent quatre décisions à prendre avant de perdre de l'argent ou le délai de retour.",
    workflowSteps: [
      ["Confirmer l'annonce exacte", "Enregistrez vendeur ou boutique, puis vérifiez modèle, couleur et taille avant de coller le lien ou les mots-clés."],
      ["Séparer les deux paiements", "Le premier paiement couvre l'article. Le transport international est choisi et payé après l'arrivée à l'entrepôt."],
      ["Exploiter les preuves d'entrepôt", "Pikobuy indique contrôler les défauts visibles et prendre des photos. Comparez-les à la variante commandée."],
      ["Décider avant l'échéance", "Si vendeur et produit sont éligibles, la demande de retour doit être faite dans les 120 heures suivant « Warehoused », dès l'heure suivante."],
    ],
    guideDescriptions: [
      "Suivez les six étapes officielles : choisir, rechercher, payer, contrôle, expédition internationale et suivi.",
      "Utilisez les photos pour l'état visible et la variante ; demandez un détail supplémentaire si un angle manque.",
      "Estimez avec destination, type, poids et dimensions : les champs exacts du calculateur Pikobuy.",
      "Vérifiez l'annonce active, la variante et le vendeur ; le prix final dépend de l'achat réel selon Pikobuy.",
    ],
    qcBoundary: "Les photos QC montrent l'état visible, mais ne prouvent ni authenticité, ni composition, confort ou durabilité. Pikobuy exclut aussi l'inspection professionnelle des produits spéciaux.",
    shippingFacts: [["Destination + type", "Champs obligatoires du calculateur."], ["Poids + L × l × H", "Kilogrammes et centimètres : le volume compte aussi."], ["Ligne + facturation", "Les lignes diffèrent en délai et méthode de facturation."], ["Suivi + risques", "Le suivi peut apparaître sous trois jours ; transporteurs tiers et douanes restent des risques."]],
    shippingNote: "Estimez avant l'achat, puis recalculez après emballage. L'estimation initiale n'est pas le devis final.",
    calculatorCta: "Ouvrir le calculateur officiel",
  },
  es: {
    officialFact: "Verificado con Pikobuy", sourceLabel: "Fuente oficial",
    workflowTitle: "Cuatro decisiones, no otra lista interminable.",
    workflowText: "La guía oficial describe seis pasos. Para investigar, se convierten en cuatro decisiones antes de perder dinero o el plazo de devolución.",
    workflowSteps: [
      ["Confirma el anuncio exacto", "Guarda vendedor o tienda y confirma modelo, color y talla antes de pegar el enlace o las palabras clave."],
      ["Separa los dos pagos", "El primer pago cubre el producto. El envío internacional se elige y paga cuando llega al almacén."],
      ["Usa la evidencia del almacén", "Pikobuy indica que revisa defectos visibles y toma fotos. Compáralas con la variante comprada."],
      ["Decide antes del límite", "Si vendedor y producto cumplen, la devolución dispone de 120 horas desde la hora siguiente al estado «Warehoused»."],
    ],
    guideDescriptions: [
      "Sigue los seis pasos oficiales: elegir, buscar, pagar, inspección, envío internacional y seguimiento.",
      "Usa las fotos para estado visible y variante; pide una foto de detalle si falta una vista decisiva.",
      "Calcula con destino, tipo, peso y dimensiones: los campos reales del estimador de Pikobuy.",
      "Verifica anuncio, variante y vendedor; Pikobuy indica que el precio final depende de la compra real.",
    ],
    qcBoundary: "Las fotos QC muestran el estado visible, pero no prueban autenticidad, composición, comodidad o duración. Pikobuy tampoco ofrece inspección profesional de productos especiales.",
    shippingFacts: [["Destino + tipo", "Campos obligatorios del estimador."], ["Peso + L × An × Al", "Kilogramos y centímetros: también importa el volumen."], ["Ruta + cobro", "Las rutas varían en plazo y método de facturación."], ["Seguimiento + riesgo", "El seguimiento puede aparecer en tres días; persisten riesgos de terceros y aduanas."]],
    shippingNote: "Estima antes de comprar y recalcula tras el embalaje. La estimación previa no es el precio final.",
    calculatorCta: "Abrir el estimador oficial",
  },
  it: {
    officialFact: "Verificato con Pikobuy", sourceLabel: "Fonte ufficiale",
    workflowTitle: "Quattro decisioni, non un'altra lista infinita.",
    workflowText: "La guida ufficiale descrive sei passaggi. Per la ricerca diventano quattro decisioni da prendere prima di perdere denaro o la finestra di reso.",
    workflowSteps: [
      ["Conferma l'annuncio esatto", "Salva venditore o negozio e verifica modello, colore e taglia prima di incollare link o parole chiave."],
      ["Separa i due pagamenti", "Il primo pagamento copre l'articolo. La spedizione internazionale si sceglie e paga dopo l'arrivo in magazzino."],
      ["Usa le prove del magazzino", "Pikobuy dichiara di verificare difetti visibili e scattare foto. Confrontale con la variante ordinata."],
      ["Decidi entro la scadenza", "Se venditore e prodotto sono idonei, la richiesta di reso ha 120 ore dall'ora successiva allo stato «Warehoused»."],
    ],
    guideDescriptions: [
      "Segui i sei passaggi ufficiali: scelta, ricerca, pagamento, controllo, spedizione internazionale e tracking.",
      "Usa le foto per stato visibile e variante; richiedi un dettaglio se manca un'angolazione decisiva.",
      "Stima con destinazione, tipo, peso e dimensioni: i campi reali del calcolatore Pikobuy.",
      "Verifica annuncio, variante e venditore; secondo Pikobuy il prezzo finale segue l'acquisto reale.",
    ],
    qcBoundary: "Le foto QC mostrano condizioni visibili, ma non provano autenticità, composizione, comfort o durata. Pikobuy esclude anche l'ispezione professionale dei prodotti speciali.",
    shippingFacts: [["Destinazione + tipo", "Campi obbligatori del calcolatore."], ["Peso + L × P × A", "Chilogrammi e centimetri: conta anche il volume."], ["Rotta + tariffazione", "Le rotte cambiano per tempi e metodo di addebito."], ["Tracking + rischio", "Il tracking può apparire entro tre giorni; restano rischi di terzi e dogana."]],
    shippingNote: "Stima prima dell'acquisto e ricalcola dopo l'imballaggio. La prima stima non è il preventivo finale.",
    calculatorCta: "Apri il calcolatore ufficiale",
  },
  pl: {
    officialFact: "Zweryfikowano z Pikobuy", sourceLabel: "Oficjalne źródło",
    workflowTitle: "Cztery decyzje zamiast kolejnej długiej listy.",
    workflowText: "Oficjalny poradnik opisuje sześć etapów. W praktyce to cztery decyzje, które warto podjąć przed utratą pieniędzy lub terminu zwrotu.",
    workflowSteps: [
      ["Potwierdź dokładną ofertę", "Zapisz sprzedawcę lub sklep i sprawdź model, kolor oraz rozmiar przed wklejeniem linku albo słów kluczowych."],
      ["Rozdziel dwie płatności", "Pierwsza płatność dotyczy produktu. Wysyłkę międzynarodową wybiera się i opłaca po przyjęciu do magazynu."],
      ["Wykorzystaj zdjęcia magazynowe", "Pikobuy deklaruje kontrolę widocznych wad i wykonanie zdjęć. Porównaj je z zamówionym wariantem."],
      ["Zdecyduj przed końcem terminu", "Jeśli sprzedawca i produkt się kwalifikują, wniosek o zwrot ma limit 120 godzin od następnej godziny po „Warehoused”."],
    ],
    guideDescriptions: [
      "Oficjalne sześć kroków: wybór, wyszukiwanie, płatność, kontrola, wysyłka międzynarodowa i śledzenie.",
      "Zdjęcia służą do oceny widocznego stanu i wariantu; przy brakującym ujęciu poproś o zdjęcie szczegółowe.",
      "Podaj kraj, typ, wagę i wymiary – dokładnie te pola zawiera kalkulator Pikobuy.",
      "Sprawdź aktywną ofertę, wariant i sprzedawcę; cena końcowa zależy od faktycznego zakupu.",
    ],
    qcBoundary: "Zdjęcia QC pokazują widoczny stan, ale nie dowodzą autentyczności, składu, wygody ani trwałości. Produkty specjalistyczne nie otrzymują profesjonalnej kontroli.",
    shippingFacts: [["Kraj + typ", "Wymagane pola kalkulatora."], ["Waga + D × S × W", "Kilogramy i centymetry: objętość też ma znaczenie."], ["Trasa + rozliczenie", "Trasy różnią się czasem i sposobem naliczania."], ["Tracking + ryzyko", "Tracking może pojawić się do trzech dni; pozostają ryzyka przewoźnika i celne."]],
    shippingNote: "Oszacuj przed zakupem i przelicz po spakowaniu. Wstępny wynik nie jest końcową wyceną.",
    calculatorCta: "Otwórz oficjalny kalkulator",
  },
  nl: {
    officialFact: "Gecontroleerd bij Pikobuy", sourceLabel: "Officiële bron",
    workflowTitle: "Vier beslissingen, geen nieuwe lange checklist.",
    workflowText: "De officiële gids beschrijft zes stappen. Voor onderzoek worden dat vier beslissingen voordat geld of de retourtermijn verloren gaat.",
    workflowSteps: [
      ["Bevestig de exacte aanbieding", "Bewaar verkoper of winkel en controleer model, kleur en maat voordat je link of zoekwoorden plakt."],
      ["Scheid de twee betalingen", "De eerste betaling is voor het artikel. Internationale verzending kies en betaal je na aankomst in het magazijn."],
      ["Gebruik magazijnbewijs", "Pikobuy zegt zichtbare gebreken te controleren en foto's te maken. Vergelijk ze met de bestelde variant."],
      ["Beslis voor de deadline", "Als verkoper en product geschikt zijn, geldt 120 uur vanaf het volgende uur na de status ‘Warehoused’."],
    ],
    guideDescriptions: [
      "Volg zes officiële stappen: kiezen, zoeken, betalen, magazijncontrole, internationaal verzenden en volgen.",
      "Gebruik foto's voor zichtbare staat en variant; vraag een detailfoto als een beslissend beeld ontbreekt.",
      "Schat met bestemming, type, gewicht en afmetingen: de echte velden van Pikobuy's calculator.",
      "Controleer live aanbod, variant en verkoper; de eindprijs volgt volgens Pikobuy de werkelijke aankoop.",
    ],
    qcBoundary: "QC-foto's tonen zichtbare staat, maar bewijzen geen echtheid, samenstelling, comfort of duurzaamheid. Speciale producten krijgen geen professionele inspectie.",
    shippingFacts: [["Bestemming + type", "Verplichte velden in de calculator."], ["Gewicht + L × B × H", "Kilogrammen en centimeters: volume telt mee."], ["Route + facturatie", "Routes verschillen in tijd en berekening."], ["Tracking + risico", "Tracking kan binnen drie dagen verschijnen; vervoerder- en douanerisico blijft."]],
    shippingNote: "Schat voor aankoop en herbereken na verpakking. De eerste schatting is niet de definitieve prijs.",
    calculatorCta: "Open de officiële calculator",
  },
  pt: {
    officialFact: "Verificado com a Pikobuy", sourceLabel: "Fonte oficial",
    workflowTitle: "Quatro decisões, não outra lista interminável.",
    workflowText: "O guia oficial descreve seis etapas. Para pesquisa, tornam-se quatro decisões antes de perder dinheiro ou o prazo de devolução.",
    workflowSteps: [
      ["Confirme o anúncio exato", "Guarde vendedor ou loja e confirme modelo, cor e tamanho antes de colar a ligação ou palavras-chave."],
      ["Separe os dois pagamentos", "O primeiro pagamento cobre o artigo. O envio internacional é escolhido e pago após a chegada ao armazém."],
      ["Use a prova do armazém", "A Pikobuy diz verificar defeitos visíveis e tirar fotos. Compare-as com a variante encomendada."],
      ["Decida antes do limite", "Se vendedor e produto forem elegíveis, o pedido de devolução tem 120 horas desde a hora seguinte a «Warehoused»."],
    ],
    guideDescriptions: [
      "Siga seis etapas oficiais: escolher, pesquisar, pagar, inspeção, envio internacional e rastreio.",
      "Use fotos para estado visível e variante; peça uma foto de detalhe se faltar um ângulo decisivo.",
      "Estime com destino, tipo, peso e dimensões: os campos reais da calculadora Pikobuy.",
      "Verifique anúncio, variante e vendedor; o preço final segue a compra efetiva segundo a Pikobuy.",
    ],
    qcBoundary: "As fotos QC mostram o estado visível, mas não provam autenticidade, composição, conforto ou durabilidade. Produtos especiais não recebem inspeção profissional.",
    shippingFacts: [["Destino + tipo", "Campos obrigatórios da calculadora."], ["Peso + C × L × A", "Quilogramas e centímetros: o volume também conta."], ["Rota + cobrança", "As rotas variam em prazo e método de faturação."], ["Rastreio + risco", "O rastreio pode surgir em três dias; persistem riscos de terceiros e alfândega."]],
    shippingNote: "Estime antes da compra e recalcule após a embalagem. A estimativa inicial não é o orçamento final.",
    calculatorCta: "Abrir a calculadora oficial",
  },
};

const evidenceCopy: Record<Locale, EvidenceCopy> = {
  en: {
    qcImageCaption: "Pikobuy’s official warehouse-inspection step: check-in, visible-defect review and photos before international shipping.",
    shippingImageCaption: "Pikobuy’s official shipping illustration. The route is chosen after the warehouse stage—not from the product price alone.",
    deadlineLabel: "Decision window",
    deadlineText: "For an eligible seller and item, Pikobuy says a return request can be submitted within 120 hours, counted from the next hour after the order becomes “Warehoused.” Seller rules and resale condition still apply.",
    qcGuideCta: "Read the complete QC guide",
    verifiedLabel: "Official rule",
    implicationLabel: "What it means for you",
    readMore: "Open the full explanation",
    updatesIntro: "Three verified rules that change how a buyer should compare a listing, read warehouse photos and plan a parcel.",
    notes: [
      ["ORDER FLOW", "The first payment covers the product order. International shipping is selected and paid after warehouse inspection.", "Keep product cost and international shipping as separate budget lines; a low listing price is not the landed cost.", "Beginner’s Guide"],
      ["QC + RETURNS", "Warehouse photos show the received item’s visible condition. Eligible returns use a 120-hour window after “Warehoused,” counted from the next hour.", "Review the photos promptly. Check the ordered option, visible damage and decisive measurements before packaging or tags are altered.", "Returns & Exchanges"],
      ["SHIPPING QUOTE", "Pikobuy’s estimator asks for destination, product type, weight, length, width and height. Routes also differ in delivery time and billing method.", "Estimate before ordering, then calculate again after the warehouse has measured and packed the real parcel.", "Shipping Cost Estimation"],
    ],
  },
  de: {
    qcImageCaption: "Offizieller Pikobuy-Schritt im Lager: Einlagerung, Prüfung sichtbarer Mängel und Fotos vor dem internationalen Versand.",
    shippingImageCaption: "Offizielle Versandgrafik von Pikobuy. Die Route wird nach dem Lagerstadium gewählt, nicht allein anhand des Artikelpreises.",
    deadlineLabel: "Entscheidungsfenster",
    deadlineText: "Bei berechtigtem Verkäufer und Artikel nennt Pikobuy 120 Stunden ab der nächsten Stunde nach „Warehoused“. Verkäuferregeln und wiederverkaufsfähiger Zustand bleiben Voraussetzung.",
    qcGuideCta: "Vollständigen QC-Ratgeber lesen",
    verifiedLabel: "Offizielle Regel",
    implicationLabel: "Was das für dich bedeutet",
    readMore: "Vollständige Erklärung öffnen",
    updatesIntro: "Drei geprüfte Regeln, die den Angebotsvergleich, die Lagerfotoprüfung und die Paketplanung verändern.",
    notes: [
      ["BESTELLABLAUF", "Die erste Zahlung betrifft den Artikel; internationalen Versand wählt und bezahlt man nach der Lagerprüfung.", "Artikel und internationalen Versand getrennt budgetieren. Ein niedriger Angebotspreis ist nicht der Endpreis.", "Einsteigerleitfaden"],
      ["QC + RÜCKGABE", "Lagerfotos zeigen den sichtbaren Zustand. Berechtigte Rückgaben haben 120 Stunden ab der nächsten Stunde nach „Warehoused“.", "Fotos sofort prüfen: Variante, sichtbare Schäden und entscheidende Maße kontrollieren, bevor Verpackung oder Etiketten verändert werden.", "Rückgabe & Umtausch"],
      ["VERSANDANGEBOT", "Der Rechner fragt Ziel, Produkttyp, Gewicht sowie Länge, Breite und Höhe ab; Routen unterscheiden sich bei Zeit und Abrechnung.", "Vor dem Kauf schätzen und nach Messung und Verpackung im Lager erneut rechnen.", "Versandkostenrechner"],
    ],
  },
  fr: {
    qcImageCaption: "Étape officielle de contrôle en entrepôt : réception, défauts visibles et photos avant l’expédition internationale.",
    shippingImageCaption: "Illustration officielle Pikobuy. La ligne est choisie après l’entrepôt, pas à partir du seul prix du produit.",
    deadlineLabel: "Fenêtre de décision",
    deadlineText: "Pour un vendeur et un article éligibles, Pikobuy indique 120 heures à compter de l’heure suivant le statut « Warehoused ». Les règles du vendeur et l’état revendable restent obligatoires.",
    qcGuideCta: "Lire le guide QC complet",
    verifiedLabel: "Règle officielle",
    implicationLabel: "Ce que cela change pour vous",
    readMore: "Ouvrir l’explication complète",
    updatesIntro: "Trois règles vérifiées qui changent la comparaison d’une annonce, la lecture des photos et la préparation du colis.",
    notes: [
      ["PARCOURS DE COMMANDE", "Le premier paiement couvre l’article. Le transport international est choisi et payé après le contrôle en entrepôt.", "Séparez prix du produit et transport international ; un prix bas n’est pas le coût rendu.", "Guide débutant"],
      ["QC + RETOURS", "Les photos montrent l’état visible. Un retour éligible dispose de 120 heures dès l’heure suivant « Warehoused ».", "Contrôlez vite variante, dégâts visibles et mesures décisives avant de modifier emballage ou étiquettes.", "Retours et échanges"],
      ["DEVIS D’EXPÉDITION", "Le calculateur demande destination, type, poids, longueur, largeur et hauteur ; lignes et facturation varient.", "Estimez avant l’achat, puis recalculez après mesure et emballage du colis réel.", "Estimation des frais"],
    ],
  },
  es: {
    qcImageCaption: "Paso oficial de inspección en almacén: entrada, revisión de defectos visibles y fotos antes del envío internacional.",
    shippingImageCaption: "Ilustración oficial de Pikobuy. La ruta se elige después del almacén, no solo con el precio del producto.",
    deadlineLabel: "Plazo para decidir",
    deadlineText: "Para vendedor y artículo elegibles, Pikobuy indica 120 horas desde la hora siguiente a «Warehoused». Siguen aplicándose las reglas del vendedor y el estado apto para reventa.",
    qcGuideCta: "Leer la guía QC completa",
    verifiedLabel: "Regla oficial",
    implicationLabel: "Qué significa para ti",
    readMore: "Abrir la explicación completa",
    updatesIntro: "Tres reglas verificadas que cambian cómo comparar un anuncio, revisar fotos y planificar el paquete.",
    notes: [
      ["FLUJO DEL PEDIDO", "El primer pago cubre el producto. El envío internacional se elige y paga después de la inspección del almacén.", "Separa producto y envío internacional en el presupuesto; un precio bajo no es el coste final.", "Guía para principiantes"],
      ["QC + DEVOLUCIONES", "Las fotos muestran el estado visible. Las devoluciones elegibles tienen 120 horas desde la hora siguiente a «Warehoused».", "Revisa pronto variante, daños visibles y medidas clave antes de alterar embalaje o etiquetas.", "Devoluciones y cambios"],
      ["PRESUPUESTO DE ENVÍO", "El estimador pide destino, tipo, peso, largo, ancho y alto; las rutas varían en plazo y facturación.", "Estima antes de comprar y recalcula tras medir y embalar el paquete real.", "Estimación de envío"],
    ],
  },
  it: {
    qcImageCaption: "Fase ufficiale di controllo in magazzino: accettazione, difetti visibili e foto prima della spedizione internazionale.",
    shippingImageCaption: "Illustrazione ufficiale Pikobuy. La rotta si sceglie dopo il magazzino, non dal solo prezzo dell’articolo.",
    deadlineLabel: "Finestra decisionale",
    deadlineText: "Per venditore e articolo idonei, Pikobuy indica 120 ore dall’ora successiva allo stato «Warehoused». Restano validi regole del venditore e stato rivendibile.",
    qcGuideCta: "Leggi la guida QC completa",
    verifiedLabel: "Regola ufficiale",
    implicationLabel: "Cosa significa per te",
    readMore: "Apri la spiegazione completa",
    updatesIntro: "Tre regole verificate che cambiano confronto dell’annuncio, lettura delle foto e pianificazione del pacco.",
    notes: [
      ["FLUSSO D’ORDINE", "Il primo pagamento copre l’articolo; la spedizione internazionale si sceglie e paga dopo il controllo in magazzino.", "Separa articolo e spedizione nel budget: il prezzo basso non è il costo finale.", "Guida per principianti"],
      ["QC + RESI", "Le foto mostrano condizioni visibili. I resi idonei hanno 120 ore dall’ora successiva a «Warehoused».", "Controlla subito variante, danni visibili e misure decisive prima di cambiare imballo o etichette.", "Resi e cambi"],
      ["PREVENTIVO SPEDIZIONE", "Il calcolatore chiede destinazione, tipo, peso, lunghezza, larghezza e altezza; rotte e addebiti variano.", "Stima prima dell’acquisto e ricalcola dopo misura e imballaggio del pacco reale.", "Stima costi di spedizione"],
    ],
  },
  pl: {
    qcImageCaption: "Oficjalny etap kontroli magazynowej: przyjęcie, widoczne wady i zdjęcia przed wysyłką międzynarodową.",
    shippingImageCaption: "Oficjalna ilustracja Pikobuy. Trasę wybiera się po etapie magazynowym, nie na podstawie samej ceny produktu.",
    deadlineLabel: "Czas na decyzję",
    deadlineText: "Dla kwalifikującego się sprzedawcy i produktu Pikobuy podaje 120 godzin od następnej godziny po „Warehoused”. Nadal obowiązują zasady sprzedawcy i stan umożliwiający odsprzedaż.",
    qcGuideCta: "Przeczytaj pełny poradnik QC",
    verifiedLabel: "Oficjalna zasada",
    implicationLabel: "Co to oznacza dla Ciebie",
    readMore: "Otwórz pełne wyjaśnienie",
    updatesIntro: "Trzy sprawdzone zasady zmieniające ocenę oferty, zdjęć magazynowych i planowanie paczki.",
    notes: [
      ["PRZEBIEG ZAMÓWIENIA", "Pierwsza płatność dotyczy produktu; wysyłkę międzynarodową wybiera się i opłaca po kontroli magazynowej.", "Oddziel koszt produktu od wysyłki. Niska cena oferty nie jest kosztem końcowym.", "Poradnik dla początkujących"],
      ["QC + ZWROTY", "Zdjęcia pokazują widoczny stan. Kwalifikujący się zwrot ma 120 godzin od następnej godziny po „Warehoused”.", "Szybko sprawdź wariant, uszkodzenia i kluczowe wymiary przed zmianą opakowania lub metek.", "Zwroty i wymiany"],
      ["WYCENA WYSYŁKI", "Kalkulator wymaga kraju, typu, wagi, długości, szerokości i wysokości; trasy różnią się czasem i rozliczeniem.", "Oszacuj przed zakupem i przelicz po zmierzeniu oraz spakowaniu prawdziwej paczki.", "Kalkulator wysyłki"],
    ],
  },
  nl: {
    qcImageCaption: "Officiële magazijnstap: ontvangst, controle van zichtbare gebreken en foto’s vóór internationale verzending.",
    shippingImageCaption: "Officiële Pikobuy-afbeelding. De route wordt na het magazijn gekozen, niet alleen op basis van de productprijs.",
    deadlineLabel: "Beslistermijn",
    deadlineText: "Voor een geschikte verkoper en artikel noemt Pikobuy 120 uur vanaf het volgende uur na ‘Warehoused’. Verkopersregels en verkoopbare staat blijven voorwaarden.",
    qcGuideCta: "Lees de volledige QC-gids",
    verifiedLabel: "Officiële regel",
    implicationLabel: "Wat dit voor jou betekent",
    readMore: "Open de volledige uitleg",
    updatesIntro: "Drie geverifieerde regels voor het vergelijken van een aanbieding, magazijnfoto’s en een pakket.",
    notes: [
      ["BESTELPROCES", "De eerste betaling is voor het product; internationale verzending kies en betaal je na magazijncontrole.", "Begroot product en internationale verzending apart. Een lage productprijs is niet de totaalprijs.", "Beginnersgids"],
      ["QC + RETOUR", "Foto’s tonen de zichtbare staat. Een geschikte retour heeft 120 uur vanaf het volgende uur na ‘Warehoused’.", "Controleer snel variant, zichtbare schade en beslissende maten voordat verpakking of labels veranderen.", "Retourneren en ruilen"],
      ["VERZENDOFFERTE", "De calculator vraagt bestemming, type, gewicht, lengte, breedte en hoogte; routes verschillen in tijd en berekening.", "Schat vóór aankoop en herbereken na meten en verpakken van het echte pakket.", "Verzendkostencalculator"],
    ],
  },
  pt: {
    qcImageCaption: "Etapa oficial no armazém: entrada, verificação de defeitos visíveis e fotos antes do envio internacional.",
    shippingImageCaption: "Ilustração oficial da Pikobuy. A rota é escolhida após o armazém, não apenas pelo preço do produto.",
    deadlineLabel: "Janela de decisão",
    deadlineText: "Para vendedor e artigo elegíveis, a Pikobuy indica 120 horas desde a hora seguinte a «Warehoused». Aplicam-se ainda regras do vendedor e condição de revenda.",
    qcGuideCta: "Ler o guia QC completo",
    verifiedLabel: "Regra oficial",
    implicationLabel: "O que significa para si",
    readMore: "Abrir a explicação completa",
    updatesIntro: "Três regras verificadas que mudam a comparação do anúncio, das fotos e o planeamento do pacote.",
    notes: [
      ["FLUXO DA ENCOMENDA", "O primeiro pagamento cobre o artigo; o envio internacional é escolhido e pago após a inspeção no armazém.", "Separe produto e envio no orçamento. Um preço baixo não é o custo final.", "Guia para iniciantes"],
      ["QC + DEVOLUÇÕES", "As fotos mostram o estado visível. Uma devolução elegível tem 120 horas desde a hora seguinte a «Warehoused».", "Verifique cedo variante, danos e medidas decisivas antes de alterar embalagem ou etiquetas.", "Devoluções e trocas"],
      ["COTAÇÃO DE ENVIO", "A calculadora pede destino, tipo, peso, comprimento, largura e altura; rotas variam em prazo e cobrança.", "Estime antes de comprar e recalcule após medir e embalar o pacote real.", "Estimativa de envio"],
    ],
  },
};

const faqAnswers: Record<Locale, string[]> = {
  en: ["An organized directory of product finds with categories, photos, price context and research notes.", "No. Pikobuyy is an independent research resource and does not sell products or process orders.", "Not always. Confirm the current product page and use available photos only as research material.", "Destination, route, actual or volumetric weight, packaging and restrictions can all affect cost.", "Listings can change at any time, so the current destination page remains the final source.", "Category cards open the corresponding live category on findspreadsheet.com."],
  de: ["Ein geordnetes Verzeichnis mit Kategorien, Fotos, Preisangaben und Recherchehinweisen.", "Nein. Pikobuyy ist eine unabhängige Recherchequelle und verkauft keine Produkte.", "Nicht immer. Prüfe die aktuelle Produktseite und nutze Fotos nur zur Recherche.", "Ziel, Route, Gewicht, Verpackung und Einschränkungen beeinflussen die Kosten.", "Angebote können sich jederzeit ändern; maßgeblich ist die aktuelle Zielseite.", "Kategoriekarten öffnen die entsprechende Live-Kategorie auf findspreadsheet.com."],
  fr: ["Un répertoire classé avec catégories, photos, prix indicatifs et notes de recherche.", "Non. Pikobuyy est une ressource indépendante et ne vend aucun produit.", "Pas toujours. Vérifiez la fiche actuelle et utilisez les photos comme éléments de recherche.", "Destination, ligne, poids, emballage et restrictions peuvent modifier le coût.", "Les annonces peuvent changer à tout moment ; la page actuelle reste la référence.", "Les cartes ouvrent la catégorie correspondante sur findspreadsheet.com."],
  es: ["Un directorio organizado con categorías, fotos, precios orientativos y notas.", "No. Pikobuyy es un recurso independiente y no vende ni tramita pedidos.", "No siempre. Comprueba la ficha actual y usa las fotos solo como material de investigación.", "Destino, ruta, peso, embalaje y restricciones pueden modificar el coste.", "Los anuncios cambian; la página de destino actual es la referencia final.", "Las tarjetas abren la categoría correspondiente en findspreadsheet.com."],
  it: ["Una directory organizzata con categorie, foto, contesto prezzi e note.", "No. Pikobuyy è una risorsa indipendente e non vende né gestisce ordini.", "Non sempre. Verifica la pagina attuale e usa le foto solo per la ricerca.", "Destinazione, rotta, peso, imballaggio e restrizioni cambiano il costo.", "Le inserzioni possono cambiare; la pagina attuale resta la fonte finale.", "Le schede aprono la categoria corrispondente su findspreadsheet.com."],
  pl: ["Uporządkowany katalog z kategoriami, zdjęciami, cenami i notatkami.", "Nie. Pikobuyy to niezależne źródło informacji i nie sprzedaje produktów.", "Nie zawsze. Sprawdź bieżącą stronę i traktuj zdjęcia jako materiał pomocniczy.", "Kraj, trasa, waga, opakowanie i ograniczenia wpływają na koszt.", "Oferty mogą się zmieniać; aktualna strona docelowa jest źródłem końcowym.", "Karty otwierają odpowiednią kategorię na findspreadsheet.com."],
  nl: ["Een geordende directory met categorieën, foto’s, prijscontext en notities.", "Nee. Pikobuyy is een onafhankelijke onderzoeksbron en verkoopt niets.", "Niet altijd. Controleer de actuele productpagina en gebruik foto’s als onderzoeksmateriaal.", "Bestemming, route, gewicht, verpakking en beperkingen beïnvloeden de kosten.", "Aanbiedingen kunnen veranderen; de actuele bestemmingspagina is leidend.", "Categoriekaarten openen de juiste categorie op findspreadsheet.com."],
  pt: ["Um diretório organizado com categorias, fotografias, preços e notas.", "Não. Pikobuyy é um recurso independente e não vende nem processa encomendas.", "Nem sempre. Confirme a página atual e use as fotografias apenas para pesquisa.", "Destino, rota, peso, embalagem e restrições podem alterar o custo.", "Os anúncios mudam; a página de destino atual continua a ser a fonte final.", "Os cartões abrem a categoria correspondente em findspreadsheet.com."],
};

export function HomePage({ locale = "en" }: { locale?: Locale }) {
  const copy = localeCopy[locale];
  const home = homeCopy[locale];
  const research = researchCopy[locale];
  const evidence = evidenceCopy[locale];
  const prefix = locale === "en" ? "" : `/${locale}`;
  const faqTitles = sectionItemTitles[locale].faq;
  const guideTitles = sectionItemTitles[locale].guides;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": "https://pikobuyy.com/#website", name: "Pikobuyy Spreadsheet", url: `https://pikobuyy.com${prefix}/`, description: copy.intro },
      { "@type": "FAQPage", mainEntity: faqTitles.map((question, index) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: faqAnswers[locale][index] } })) },
    ],
  };

  return (
    <main className="home-page" lang={locale}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteHeader locale={locale} />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> {copy.eyebrow}</p>
          <h1>{copy.title}<br /><em>{copy.accent}</em></h1>
          <p className="hero-text">{copy.intro}</p>
          <Link className="pillar-link" href="/pikobuy-spreadsheet/">
            Pikobuy Spreadsheet 2026 — complete guide <span>→</span>
          </Link>
          <form
            className="search-box"
            action="https://findspreadsheet.com/search.html"
            method="get"
            target="_blank"
          >
            <label className="sr-only" htmlFor={`find-search-${locale}`}>{home.search}</label>
            <span aria-hidden="true">⌕</span>
            <input
              id={`find-search-${locale}`}
              name="keywords"
              placeholder={home.searchPlaceholder}
              required
            />
            <input type="hidden" name="channelid" value="2" />
            <button type="submit">{home.search}</button>
          </form>
          <div className="proof-row">
            <div><strong>6</strong><span>{home.productEyebrow}</span></div>
            <div><strong>10</strong><span>{copy.cards.categories.title}</span></div>
            <div><strong>2026</strong><span>{copy.cards.updates.title}</span></div>
          </div>
        </div>
        <a className="hero-product" href={`${prefix}/products/${products[0].slug}`} aria-label={`${home.viewProduct}: ${products[0].name}`}>
          <div className="hero-product-image"><Image src={products[0].image} alt={products[0].name} width={800} height={600} priority /><span>{home.featured}</span></div>
          <div className="hero-product-info"><div><p>{categoryNames[locale][0]}</p><h2>{products[0].name}</h2></div><strong>${products[0].priceUsd} <small>USD</small></strong></div>
          <p>{copy.cards.categories.text}</p><b>{home.viewProduct} <span>→</span></b>
        </a>
      </section>

      <section className="category-strip" id="categories">
        <div className="section-heading"><div><p className="eyebrow"><span /> {home.categoryEyebrow}</p><h2>{home.categoryTitle}</h2></div><a href={routeFor(locale, "categories")}>{home.allCategories} →</a></div>
        <div className="category-grid">
          {categorySlugs.map((slug, index) => <a className="category-card" href={categoryLinks[slug]} target="_blank" rel="noopener noreferrer" key={slug}><span className="category-number">{String(index + 1).padStart(2, "0")}</span><div><h3>{categoryNames[locale][index]}</h3><p>{copy.cards.categories.text}</p></div><b>↗</b></a>)}
        </div>
      </section>

      <section className="featured-products home-products" id="products">
        <div className="section-heading"><div><p className="eyebrow"><span /> {home.productEyebrow}</p><h2>{home.productTitle}</h2></div><a href={routeFor(locale, "categories")}>{home.allCategories} →</a></div>
        <div className="product-grid">
          {products.map((product) => <a className="product-card" href={`${prefix}/products/${product.slug}`} key={product.slug}><div className="product-image"><Image src={product.image} alt={product.name} width={640} height={480} /></div><div className="product-meta"><span>{categoryNames[locale][categorySlugs.indexOf(product.category)]}</span><b>${product.priceUsd}</b></div><h3>{product.name}</h3><p>{copy.cards.categories.text}</p><strong>{home.viewProduct} →</strong></a>)}
        </div>
      </section>

      <section className="how-section" id="guides">
        <div className="how-intro"><p className="eyebrow"><span /> {home.workflowEyebrow}</p><h2>{research.workflowTitle}</h2><p>{research.workflowText}</p><div className="fact-stamp"><b>{research.officialFact}</b><span>Guide + Returns policy</span></div><a className="text-link" href={routeFor(locale, "guides")}>{copy.nav.guides} <span>→</span></a></div>
        <div className="steps">{research.workflowSteps.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="guide-grid-section">
        <div className="section-heading"><div><p className="eyebrow"><span /> {home.guideEyebrow}</p><h2>{home.guideTitle}</h2></div></div>
        <div className="guide-grid">{guideTitles.map((title, index) => <article className={index === 0 ? "guide-feature" : ""} key={title}><span className="guide-index">{String(index + 1).padStart(2, "0")}</span><p>{research.officialFact}</p><h3>{title}</h3><span className="guide-summary">{research.guideDescriptions[index]}</span><a href={`${routeFor(locale, "guides")}/${sectionItemSlugs.guides[index]}`}>{home.guideCta} →</a></article>)}</div>
      </section>

      <section className="checklist-section" id="qc-shipping" aria-label={`${home.qcEyebrow} and ${home.shippingEyebrow}`}>
        <article className="checklist-card dark-card">
          <div className="evidence-body">
            <p className="eyebrow"><span /> {home.qcEyebrow}</p>
            <h2>{home.qcTitle}</h2>
            <ul>{home.qcChecks.map(([title, text], index) => <li key={title}><b>{String(index + 1).padStart(2, "0")}</b><span><strong>{title}</strong>{text}</span></li>)}</ul>
            <div className="deadline-box"><b>{evidence.deadlineLabel}</b><p>{evidence.deadlineText}</p></div>
            <p className="boundary-note">{research.qcBoundary}</p>
            <div className="evidence-links"><a className="source-link" href={`${routeFor(locale, "guides")}/${sectionItemSlugs.guides[1]}`}>{evidence.qcGuideCta} →</a><span className="source-link muted-source">{research.sourceLabel}: pikobuy.com/protocol/returns</span></div>
          </div>
        </article>
        <article className="checklist-card shipping-card">
          <div className="evidence-body">
            <p className="eyebrow"><span /> {home.shippingEyebrow}</p>
            <h2>{home.shippingTitle}</h2>
            <p>{home.shippingText}</p>
            <div className="shipping-facts">{research.shippingFacts.map(([title, text]) => <div key={title}><strong>{title}</strong><span>{text}</span></div>)}</div>
            <p className="shipping-note">{research.shippingNote}</p>
            <Link className="calculator-link" href="/pikobuy-shipping-guide/">{home.guideCta} →</Link>
          </div>
        </article>
      </section>

      <section className="updates-section" id="research-notes">
        <div className="updates-heading">
          <div className="updates-title"><p className="eyebrow"><span /> {home.updatesEyebrow}</p><h2>{home.updatesTitle}</h2></div>
          <div className="updates-summary"><p>{evidence.updatesIntro}</p><div className="fact-stamp"><b>{research.officialFact}</b><span>29 Jul 2026</span></div></div>
        </div>
        <div className="research-note-list">
          {evidence.notes.map(([topic, fact, implication, source], index) => {
            const destinations = [
              `${routeFor(locale, "guides")}/${sectionItemSlugs.guides[0]}`,
              `${routeFor(locale, "guides")}/${sectionItemSlugs.guides[1]}`,
              `${routeFor(locale, "articles")}/${sectionItemSlugs.articles[3]}`,
            ];
            return <a className="research-note" href={destinations[index]} key={topic}><div className="research-note-top"><span>{topic}</span><time dateTime="2026-07-29">29.07.2026</time></div><h3>{evidence.verifiedLabel}</h3><p>{fact}</p><div className="research-impact"><b>{evidence.implicationLabel}</b><p>{implication}</p></div><div className="research-note-footer"><span>{source}</span><b>{evidence.readMore} →</b></div></a>;
          })}
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-heading"><p className="eyebrow"><span /> {home.faqEyebrow}</p><h2>{home.faqTitle}</h2><p>{copy.cards.faq.text}</p></div>
        <div className="faq-list">{faqTitles.map((question, index) => <details key={question} open={index === 0}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<b>+</b></summary><p>{faqAnswers[locale][index]}</p></details>)}</div>
      </section>

      <section className="final-cta"><p className="eyebrow"><span /> {home.finalEyebrow}</p><h2>{home.finalTitle}</h2><a href="https://findspreadsheet.com/" target="_blank" rel="noopener noreferrer">{home.finalCta} <span>↗</span></a></section>
      <SiteFooter locale={locale} />
    </main>
  );
}
