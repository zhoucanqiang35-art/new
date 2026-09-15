"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Database,
  Menu,
  Search,
  ShieldCheck,
  Truck,
  X,
} from "lucide-react";
import "./brand.css";

type View = "home" | "categories" | "products" | "guides" | "faq";
type Lang = "en" | "de" | "fr" | "es" | "it" | "pt" | "nl" | "pl" | "sv";
type Copy = {
  name: string;
  home: string;
  categories: string;
  products: string;
  guides: string;
  faq: string;
  badge: string;
  title: string;
  lead: string;
  search: string;
  database: string;
  independent: string;
  workflow: string;
  process: string;
  choose: string;
  evidence: string;
  open: string;
  browse: string;
  browseLead: string;
  catButton: string;
  check: string;
  detailTitle: string;
  detailLead: string;
  articles: string;
  articleLead: string;
  read: string;
  faqTitle: string;
  faqLead: string;
  questions: string[];
  answers: string[];
  categoriesList: string[];
};

const base: Record<Lang, Copy> = {
  en: {
    name: "English",
    home: "Home",
    categories: "Categories",
    products: "Product details",
    guides: "Guides & SEO",
    faq: "FAQ",
    badge: "Independent research guide",
    title: "Better PikoBuy rows start with better checks.",
    lead: "Compare source links, QC photos, sizing notes and parcel weight before opening a database result. Every product route goes directly to FindSpreadsheet.",
    search: "Search FindSpreadsheet",
    database: "Open database",
    independent:
      "Independent guide — not the official platform. We do not take payments, place orders or handle shipping.",
    workflow: "A calmer buying workflow",
    process:
      "The public PikoBuy journey moves from a product link or keyword through ordering, warehouse checks and international shipping. Use the same evidence before each decision.",
    choose: "Choose one category",
    evidence: "Check the evidence",
    open: "Open the matching result",
    browse: "Browse one category at a time",
    browseLead:
      "Compare similar items before opening FindSpreadsheet. Strong rows have a clear source, useful photos, size context and weight awareness.",
    catButton: "Browse on FindSpreadsheet",
    check: "Check source, photos, sizing and weight together.",
    detailTitle: "Product details should help a decision.",
    detailLead:
      "A title and price are not enough. Use a small evidence set before saving any find.",
    articles: "Practical guides for spreadsheet decisions",
    articleLead:
      "Research-led pages for the real questions buyers face before they use an official order channel.",
    read: "Read guide",
    faqTitle: "Direct answers, without pretending to be official support",
    faqLead:
      "Account, payment, tracking and refund questions belong in the official order channel.",
    questions: [
      "What is a PikoBuy spreadsheet?",
      "How should I review QC photos?",
      "Why does parcel weight matter?",
      "Can this site process my order?",
      "Should I trust every source link?",
      "Where do I ask about tracking or refunds?",
    ],
    answers: [
      "A list of possible items, links and notes. It helps only when it makes comparison easier.",
      "Check product-specific details: shape and sole for shoes; measurements and fabric for clothing; close-ups and dimensions for accessories.",
      "Packaging, material and shipping route can change the real cost. Estimates are planning context, not guarantees.",
      "No. This independent guide does not sell items, take payment, place orders or manage parcels.",
      "No. Confirm that the original item, options, photos and notes still match the row.",
      "Use the official channel connected to your account or order. We cannot access accounts, parcels or payments.",
    ],
    categoriesList: [
      "Shoes",
      "Hoodies",
      "T-Shirts",
      "Jackets",
      "Pants & Shorts",
      "Hats",
      "Watches",
      "Accessories",
      "Electronics",
      "Other Finds",
    ],
  },
  de: {
    name: "Deutsch",
    home: "Startseite",
    categories: "Kategorien",
    products: "Produktdetails",
    guides: "Ratgeber & SEO",
    faq: "FAQ",
    badge: "Unabhängiger Rechercheleitfaden",
    title: "Bessere PikoBuy-Einträge beginnen mit besseren Prüfungen.",
    lead: "Vergleiche Quelllinks, QC-Fotos, Größenangaben und Paketgewicht, bevor du ein Datenbankergebnis öffnest. Jede Produktroute führt direkt zu FindSpreadsheet.",
    search: "FindSpreadsheet durchsuchen",
    database: "Datenbank öffnen",
    independent:
      "Unabhängiger Leitfaden — keine offizielle Plattform. Keine Zahlungen, Bestellungen oder Versandabwicklung.",
    workflow: "Ein ruhigerer Einkaufsablauf",
    process:
      "Der öffentliche PikoBuy-Ablauf führt von Link oder Suchwort über Bestellung und Lagerprüfung zum internationalen Versand. Nutze vor jeder Entscheidung dieselben Nachweise.",
    choose: "Eine Kategorie wählen",
    evidence: "Nachweise prüfen",
    open: "Passendes Ergebnis öffnen",
    browse: "Eine Kategorie nach der anderen",
    browseLead:
      "Vergleiche ähnliche Artikel vor FindSpreadsheet. Starke Einträge haben Quelle, hilfreiche Fotos, Größenkontext und Gewicht.",
    catButton: "Auf FindSpreadsheet ansehen",
    check: "Quelle, Fotos, Größe und Gewicht zusammen prüfen.",
    detailTitle: "Produktdetails sollten eine Entscheidung ermöglichen.",
    detailLead:
      "Titel und Preis reichen nicht. Nutze klare Nachweise vor dem Speichern.",
    articles: "Praktische Leitfäden für Spreadsheet-Entscheidungen",
    articleLead:
      "Recherchebasierte Seiten zu echten Fragen vor dem offiziellen Bestellkanal.",
    read: "Leitfaden lesen",
    faqTitle: "Direkte Antworten ohne falschen Supportanspruch",
    faqLead:
      "Fragen zu Konto, Zahlung, Tracking und Erstattung gehören in den offiziellen Kanal.",
    questions: [
      "Was ist ein PikoBuy Spreadsheet?",
      "Wie prüfe ich QC-Fotos?",
      "Warum ist Paketgewicht wichtig?",
      "Kann diese Seite bestellen?",
      "Soll ich jedem Quelllink vertrauen?",
      "Wo frage ich zu Tracking oder Erstattung?",
    ],
    answers: [
      "Eine Liste möglicher Artikel, Links und Notizen. Sie hilft nur beim besseren Vergleichen.",
      "Prüfe passende Details: Form und Sohle bei Schuhen; Maße und Stoff bei Kleidung; Nahaufnahmen und Maße bei Accessoires.",
      "Verpackung, Material und Route verändern Endkosten. Schätzwerte sind Planung, keine Garantie.",
      "Nein. Dieser unabhängige Leitfaden verkauft nicht, nimmt keine Zahlung an und verwaltet keine Pakete.",
      "Nein. Prüfe, ob Originalartikel, Optionen, Fotos und Notizen noch übereinstimmen.",
      "Nutze den offiziellen Kanal deines Kontos oder deiner Bestellung. Wir sehen keine Konten, Pakete oder Zahlungen.",
    ],
    categoriesList: [
      "Schuhe",
      "Hoodies",
      "T-Shirts",
      "Jacken",
      "Hosen & Shorts",
      "Mützen",
      "Uhren",
      "Accessoires",
      "Elektronik",
      "Weitere Funde",
    ],
  },
  fr: {
    name: "Français",
    home: "Accueil",
    categories: "Catégories",
    products: "Détails produit",
    guides: "Guides & SEO",
    faq: "FAQ",
    badge: "Guide de recherche indépendant",
    title:
      "De meilleures lignes PikoBuy commencent par de meilleures vérifications.",
    lead: "Comparez liens source, photos QC, tailles et poids du colis avant d’ouvrir un résultat de base. Chaque route produit mène directement à FindSpreadsheet.",
    search: "Rechercher FindSpreadsheet",
    database: "Ouvrir la base",
    independent:
      "Guide indépendant — pas la plateforme officielle. Aucun paiement, ordre ou envoi n’est traité.",
    workflow: "Un parcours d’achat plus clair",
    process:
      "Le parcours public PikoBuy va du lien ou mot-clé à la commande, au contrôle en entrepôt et à l’expédition internationale. Utilisez les mêmes preuves à chaque décision.",
    choose: "Choisir une catégorie",
    evidence: "Vérifier les preuves",
    open: "Ouvrir le bon résultat",
    browse: "Une catégorie à la fois",
    browseLead:
      "Comparez des articles similaires avant FindSpreadsheet. Une bonne ligne montre source, photos, taille et poids.",
    catButton: "Voir sur FindSpreadsheet",
    check: "Vérifiez ensemble source, photos, taille et poids.",
    detailTitle: "Les détails produit doivent aider à décider.",
    detailLead:
      "Un titre et un prix ne suffisent pas. Vérifiez des preuves claires avant d’enregistrer.",
    articles: "Guides pratiques pour décider avec un spreadsheet",
    articleLead:
      "Pages de recherche sur les vraies questions avant d’utiliser le canal officiel.",
    read: "Lire le guide",
    faqTitle: "Réponses directes sans se faire passer pour le support",
    faqLead:
      "Les questions de compte, paiement, suivi et remboursement vont au canal officiel.",
    questions: [
      "Qu’est-ce qu’un spreadsheet PikoBuy ?",
      "Comment vérifier les photos QC ?",
      "Pourquoi le poids compte-t-il ?",
      "Ce site peut-il commander ?",
      "Puis-je faire confiance à chaque lien ?",
      "Où demander suivi ou remboursement ?",
    ],
    answers: [
      "Une liste d’articles possibles, liens et notes. Elle aide seulement si elle facilite la comparaison.",
      "Vérifiez les détails adaptés : forme et semelle pour chaussures ; mesures et tissu pour vêtements ; gros plans et dimensions pour accessoires.",
      "Emballage, matière et route peuvent modifier le coût final. Les estimations servent à planifier, sans garantie.",
      "Non. Ce guide indépendant ne vend rien, ne prend pas de paiement et ne gère pas de colis.",
      "Non. Confirmez que l’article d’origine, options, photos et notes correspondent encore.",
      "Utilisez le canal officiel de votre compte ou commande. Nous n’accédons ni aux comptes, ni colis, ni paiements.",
    ],
    categoriesList: [
      "Chaussures",
      "Hoodies",
      "T-shirts",
      "Vestes",
      "Pantalons & shorts",
      "Casquettes",
      "Montres",
      "Accessoires",
      "Électronique",
      "Autres trouvailles",
    ],
  },
  es: {
    name: "Español",
    home: "Inicio",
    categories: "Categorías",
    products: "Detalles del producto",
    guides: "Guías y SEO",
    faq: "FAQ",
    badge: "Guía de investigación independiente",
    title: "Mejores filas PikoBuy empiezan con mejores comprobaciones.",
    lead: "Compara enlaces fuente, fotos QC, tallas y peso del paquete antes de abrir un resultado de base. Cada ruta de producto lleva directamente a FindSpreadsheet.",
    search: "Buscar en FindSpreadsheet",
    database: "Abrir base de datos",
    independent:
      "Guía independiente — no es la plataforma oficial. No procesamos pagos, pedidos ni envíos.",
    workflow: "Un flujo de compra más claro",
    process:
      "El proceso público de PikoBuy va de enlace o palabra clave a pedido, revisión en almacén y envío internacional. Usa las mismas evidencias en cada decisión.",
    choose: "Elige una categoría",
    evidence: "Revisa evidencias",
    open: "Abre el resultado correcto",
    browse: "Una categoría cada vez",
    browseLead:
      "Compara artículos similares antes de FindSpreadsheet. Las buenas filas muestran fuente, fotos, talla y peso.",
    catButton: "Ver en FindSpreadsheet",
    check: "Revisa juntos fuente, fotos, talla y peso.",
    detailTitle: "Los detalles del producto deben ayudar a decidir.",
    detailLead:
      "Título y precio no bastan. Usa pruebas claras antes de guardar.",
    articles: "Guías prácticas para decisiones de spreadsheet",
    articleLead:
      "Páginas de investigación para preguntas reales antes de usar el canal oficial.",
    read: "Leer guía",
    faqTitle: "Respuestas directas sin fingir soporte oficial",
    faqLead:
      "Las preguntas de cuenta, pago, seguimiento y reembolso pertenecen al canal oficial.",
    questions: [
      "¿Qué es un spreadsheet PikoBuy?",
      "¿Cómo reviso fotos QC?",
      "¿Por qué importa el peso?",
      "¿Puede este sitio hacer mi pedido?",
      "¿Debo confiar en cada enlace?",
      "¿Dónde pregunto por seguimiento o reembolso?",
    ],
    answers: [
      "Una lista de posibles artículos, enlaces y notas. Solo ayuda si facilita comparar.",
      "Revisa detalles adecuados: forma y suela en zapatos; medidas y tejido en ropa; primeros planos y dimensiones en accesorios.",
      "Embalaje, material y ruta pueden cambiar el coste final. Las estimaciones ayudan a planificar, no garantizan.",
      "No. Esta guía independiente no vende, cobra, realiza pedidos ni gestiona paquetes.",
      "No. Confirma que artículo original, opciones, fotos y notas aún coincidan.",
      "Usa el canal oficial de tu cuenta o pedido. No accedemos a cuentas, paquetes ni pagos.",
    ],
    categoriesList: [
      "Zapatos",
      "Hoodies",
      "Camisetas",
      "Chaquetas",
      "Pantalones y shorts",
      "Gorras",
      "Relojes",
      "Accesorios",
      "Electrónica",
      "Otros hallazgos",
    ],
  },
  it: {
    name: "Italiano",
    home: "Home",
    categories: "Categorie",
    products: "Dettagli prodotto",
    guides: "Guide e SEO",
    faq: "FAQ",
    badge: "Guida di ricerca indipendente",
    title: "Righe PikoBuy migliori iniziano da controlli migliori.",
    lead: "Confronta link fonte, foto QC, misure e peso del pacco prima di aprire un risultato database. Ogni percorso prodotto porta direttamente a FindSpreadsheet.",
    search: "Cerca FindSpreadsheet",
    database: "Apri database",
    independent:
      "Guida indipendente — non è la piattaforma ufficiale. Non gestiamo pagamenti, ordini o spedizioni.",
    workflow: "Un percorso d’acquisto più chiaro",
    process:
      "Il processo pubblico PikoBuy passa da link o parola chiave a ordine, controllo in magazzino e spedizione internazionale. Usa le stesse prove per ogni decisione.",
    choose: "Scegli una categoria",
    evidence: "Controlla le prove",
    open: "Apri il risultato giusto",
    browse: "Una categoria alla volta",
    browseLead:
      "Confronta articoli simili prima di FindSpreadsheet. Le righe forti mostrano fonte, foto, taglia e peso.",
    catButton: "Vedi su FindSpreadsheet",
    check: "Controlla insieme fonte, foto, taglia e peso.",
    detailTitle: "I dettagli prodotto devono aiutare a decidere.",
    detailLead:
      "Titolo e prezzo non bastano. Usa prove chiare prima di salvare.",
    articles: "Guide pratiche per decisioni spreadsheet",
    articleLead:
      "Pagine di ricerca sulle domande reali prima del canale ufficiale.",
    read: "Leggi guida",
    faqTitle: "Risposte dirette senza fingere assistenza ufficiale",
    faqLead:
      "Domande su account, pagamento, tracking e rimborso vanno al canale ufficiale.",
    questions: [
      "Cos’è un PikoBuy spreadsheet?",
      "Come controllo le foto QC?",
      "Perché conta il peso?",
      "Questo sito può ordinare?",
      "Devo fidarmi di ogni link?",
      "Dove chiedo tracking o rimborso?",
    ],
    answers: [
      "Un elenco di possibili articoli, link e note. Aiuta solo se semplifica il confronto.",
      "Controlla dettagli adatti: forma e suola per scarpe; misure e tessuto per abbigliamento; primi piani e dimensioni per accessori.",
      "Imballo, materiale e rotta possono cambiare il costo finale. Le stime aiutano a pianificare, non garantiscono.",
      "No. Questa guida indipendente non vende, riceve pagamenti, ordina o gestisce pacchi.",
      "No. Conferma che articolo originale, opzioni, foto e note coincidano ancora.",
      "Usa il canale ufficiale del tuo account o ordine. Non accediamo a conti, pacchi o pagamenti.",
    ],
    categoriesList: [
      "Scarpe",
      "Hoodie",
      "T-shirt",
      "Giacche",
      "Pantaloni e shorts",
      "Cappelli",
      "Orologi",
      "Accessori",
      "Elettronica",
      "Altri articoli",
    ],
  },
  pt: {
    name: "Português",
    home: "Início",
    categories: "Categorias",
    products: "Detalhes do produto",
    guides: "Guias e SEO",
    faq: "FAQ",
    badge: "Guia de pesquisa independente",
    title: "Melhores linhas PikoBuy começam com melhores verificações.",
    lead: "Compare links de origem, fotos QC, tamanhos e peso da encomenda antes de abrir um resultado de base. Cada rota de produto leva diretamente ao FindSpreadsheet.",
    search: "Pesquisar FindSpreadsheet",
    database: "Abrir base de dados",
    independent:
      "Guia independente — não é a plataforma oficial. Não processamos pagamentos, pedidos ou envios.",
    workflow: "Um fluxo de compra mais claro",
    process:
      "O processo público PikoBuy vai de link ou palavra-chave a pedido, verificação no armazém e envio internacional. Use as mesmas evidências em cada decisão.",
    choose: "Escolha uma categoria",
    evidence: "Verifique evidências",
    open: "Abra o resultado certo",
    browse: "Uma categoria de cada vez",
    browseLead:
      "Compare itens semelhantes antes do FindSpreadsheet. Boas linhas mostram origem, fotos, tamanho e peso.",
    catButton: "Ver no FindSpreadsheet",
    check: "Verifique origem, fotos, tamanho e peso juntos.",
    detailTitle: "Os detalhes do produto devem ajudar a decidir.",
    detailLead:
      "Título e preço não bastam. Use evidências claras antes de guardar.",
    articles: "Guias práticos para decisões spreadsheet",
    articleLead:
      "Páginas de pesquisa para questões reais antes do canal oficial.",
    read: "Ler guia",
    faqTitle: "Respostas diretas sem fingir suporte oficial",
    faqLead:
      "Questões de conta, pagamento, rastreio e reembolso pertencem ao canal oficial.",
    questions: [
      "O que é uma spreadsheet PikoBuy?",
      "Como verifico fotos QC?",
      "Por que o peso importa?",
      "Este site pode fazer o meu pedido?",
      "Devo confiar em cada link?",
      "Onde pergunto sobre rastreio ou reembolso?",
    ],
    answers: [
      "Uma lista de itens possíveis, links e notas. Só ajuda se simplificar a comparação.",
      "Verifique detalhes adequados: forma e sola em sapatos; medidas e tecido em roupa; detalhes e dimensões em acessórios.",
      "Embalagem, material e rota podem mudar o custo final. Estimativas ajudam a planear, não garantem.",
      "Não. Este guia independente não vende, recebe pagamentos, faz pedidos ou gere encomendas.",
      "Não. Confirme que item original, opções, fotos e notas ainda correspondem.",
      "Use o canal oficial da sua conta ou pedido. Não acedemos a contas, encomendas ou pagamentos.",
    ],
    categoriesList: [
      "Sapatos",
      "Hoodies",
      "T-shirts",
      "Casacos",
      "Calças e shorts",
      "Bonés",
      "Relógios",
      "Acessórios",
      "Eletrónica",
      "Outros achados",
    ],
  },
  nl: {
    name: "Nederlands",
    home: "Home",
    categories: "Categorieën",
    products: "Productdetails",
    guides: "Gidsen & SEO",
    faq: "FAQ",
    badge: "Onafhankelijke onderzoeksgids",
    title: "Betere PikoBuy-regels beginnen met betere controles.",
    lead: "Vergelijk bronlinks, QC-foto’s, maten en pakketgewicht voordat je een databaseresultaat opent. Elke productroute leidt rechtstreeks naar FindSpreadsheet.",
    search: "Zoek FindSpreadsheet",
    database: "Database openen",
    independent:
      "Onafhankelijke gids — niet het officiële platform. We verwerken geen betalingen, orders of verzendingen.",
    workflow: "Een rustiger koopproces",
    process:
      "Het openbare PikoBuy-proces loopt van link of zoekwoord via bestelling en magazijncontrole naar internationale verzending. Gebruik bij elke beslissing hetzelfde bewijs.",
    choose: "Kies één categorie",
    evidence: "Controleer bewijs",
    open: "Open het juiste resultaat",
    browse: "Eén categorie tegelijk",
    browseLead:
      "Vergelijk gelijke artikelen vóór FindSpreadsheet. Sterke regels tonen bron, foto’s, maat en gewicht.",
    catButton: "Bekijk op FindSpreadsheet",
    check: "Controleer bron, foto’s, maat en gewicht samen.",
    detailTitle: "Productdetails moeten helpen kiezen.",
    detailLead:
      "Een titel en prijs zijn niet genoeg. Gebruik duidelijke bewijzen vóór je opslaat.",
    articles: "Praktische gidsen voor spreadsheet-beslissingen",
    articleLead:
      "Onderzoekspagina’s voor echte vragen vóór het officiële kanaal.",
    read: "Lees gids",
    faqTitle: "Directe antwoorden zonder officiële support te spelen",
    faqLead:
      "Vragen over account, betaling, tracking en terugbetaling horen bij het officiële kanaal.",
    questions: [
      "Wat is een PikoBuy spreadsheet?",
      "Hoe controleer ik QC-foto’s?",
      "Waarom telt pakketgewicht?",
      "Kan deze site bestellen?",
      "Moet ik elke bronlink vertrouwen?",
      "Waar vraag ik tracking of terugbetaling?",
    ],
    answers: [
      "Een lijst met mogelijke artikelen, links en notities. Het helpt alleen als vergelijken eenvoudiger wordt.",
      "Controleer passende details: vorm en zool voor schoenen; maten en stof voor kleding; close-ups en afmetingen voor accessoires.",
      "Verpakking, materiaal en route kunnen de eindkosten wijzigen. Schattingen helpen plannen, geen garantie.",
      "Nee. Deze onafhankelijke gids verkoopt niet, ontvangt geen betaling, bestelt niet en beheert geen pakketten.",
      "Nee. Bevestig dat oorspronkelijk artikel, opties, foto’s en notities nog overeenkomen.",
      "Gebruik het officiële kanaal van je account of bestelling. We hebben geen toegang tot accounts, pakketten of betalingen.",
    ],
    categoriesList: [
      "Schoenen",
      "Hoodies",
      "T-shirts",
      "Jassen",
      "Broeken & shorts",
      "Petjes",
      "Horloges",
      "Accessoires",
      "Elektronica",
      "Andere vondsten",
    ],
  },
  pl: {
    name: "Polski",
    home: "Strona główna",
    categories: "Kategorie",
    products: "Szczegóły produktu",
    guides: "Poradniki i SEO",
    faq: "FAQ",
    badge: "Niezależny przewodnik badawczy",
    title: "Lepsze wpisy PikoBuy zaczynają się od lepszej weryfikacji.",
    lead: "Porównuj linki źródłowe, zdjęcia QC, rozmiary i wagę paczki przed otwarciem wyniku w bazie. Każda trasa produktu prowadzi bezpośrednio do FindSpreadsheet.",
    search: "Szukaj w FindSpreadsheet",
    database: "Otwórz bazę",
    independent:
      "Niezależny przewodnik — nie jest oficjalną platformą. Nie obsługujemy płatności, zamówień ani wysyłek.",
    workflow: "Spokojniejszy proces zakupowy",
    process:
      "Publiczny proces PikoBuy prowadzi od linku lub słowa kluczowego przez zamówienie i kontrolę magazynową do wysyłki międzynarodowej. Używaj tych samych dowodów przy każdej decyzji.",
    choose: "Wybierz kategorię",
    evidence: "Sprawdź dowody",
    open: "Otwórz właściwy wynik",
    browse: "Jedna kategoria naraz",
    browseLead:
      "Porównaj podobne artykuły przed FindSpreadsheet. Mocne wpisy mają źródło, zdjęcia, rozmiar i wagę.",
    catButton: "Zobacz w FindSpreadsheet",
    check: "Sprawdź razem źródło, zdjęcia, rozmiar i wagę.",
    detailTitle: "Szczegóły produktu powinny pomóc zdecydować.",
    detailLead:
      "Tytuł i cena nie wystarczą. Użyj jasnych dowodów przed zapisaniem.",
    articles: "Praktyczne poradniki do decyzji spreadsheet",
    articleLead:
      "Strony badawcze o realnych pytaniach przed użyciem oficjalnego kanału.",
    read: "Czytaj poradnik",
    faqTitle: "Proste odpowiedzi bez udawania oficjalnego wsparcia",
    faqLead:
      "Pytania o konto, płatność, tracking i zwrot należy kierować przez oficjalny kanał.",
    questions: [
      "Czym jest PikoBuy spreadsheet?",
      "Jak sprawdzić zdjęcia QC?",
      "Dlaczego waga paczki ma znaczenie?",
      "Czy ta strona może zamówić produkt?",
      "Czy ufać każdemu linkowi?",
      "Gdzie pytać o tracking lub zwrot?",
    ],
    answers: [
      "To lista możliwych produktów, linków i notatek. Pomaga tylko, gdy ułatwia porównanie.",
      "Sprawdzaj właściwe szczegóły: kształt i podeszwę butów; wymiary i materiał odzieży; zbliżenia i wymiary akcesoriów.",
      "Opakowanie, materiał i trasa mogą zmienić koszt końcowy. Szacunki pomagają planować, nie gwarantują.",
      "Nie. Ten niezależny przewodnik nie sprzedaje, nie przyjmuje płatności, nie składa zamówień i nie obsługuje paczek.",
      "Nie. Potwierdź, że oryginalny produkt, opcje, zdjęcia i notatki nadal pasują.",
      "Użyj oficjalnego kanału konta lub zamówienia. Nie mamy dostępu do kont, paczek ani płatności.",
    ],
    categoriesList: [
      "Buty",
      "Bluzy",
      "T-shirty",
      "Kurtki",
      "Spodnie i szorty",
      "Czapki",
      "Zegarki",
      "Akcesoria",
      "Elektronika",
      "Inne znaleziska",
    ],
  },
  sv: {
    name: "Svenska",
    home: "Hem",
    categories: "Kategorier",
    products: "Produktdetaljer",
    guides: "Guider och SEO",
    faq: "FAQ",
    badge: "Oberoende forskningsguide",
    title: "Bättre PikoBuy-rader börjar med bättre kontroller.",
    lead: "Jämför källänkar, QC-bilder, storleksnoteringar och paketvikt innan du öppnar ett databasresultat. Varje produktrutt leder direkt till FindSpreadsheet.",
    search: "Sök FindSpreadsheet",
    database: "Öppna databas",
    independent:
      "Oberoende guide — inte den officiella plattformen. Vi hanterar inte betalningar, order eller frakt.",
    workflow: "Ett lugnare köpflöde",
    process:
      "PikoBuys offentliga process går från länk eller sökord via order och lagerkontroll till internationell frakt. Använd samma underlag före varje beslut.",
    choose: "Välj en kategori",
    evidence: "Kontrollera underlag",
    open: "Öppna rätt resultat",
    browse: "En kategori i taget",
    browseLead:
      "Jämför liknande artiklar före FindSpreadsheet. Starka rader visar källa, bilder, storlek och vikt.",
    catButton: "Se på FindSpreadsheet",
    check: "Kontrollera källa, bilder, storlek och vikt tillsammans.",
    detailTitle: "Produktdetaljer ska hjälpa ett beslut.",
    detailLead:
      "En titel och ett pris räcker inte. Använd tydligt underlag före du sparar.",
    articles: "Praktiska guider för spreadsheet-beslut",
    articleLead:
      "Forskningssidor för verkliga frågor före den officiella kanalen.",
    read: "Läs guide",
    faqTitle: "Direkta svar utan att låtsas vara officiell support",
    faqLead:
      "Frågor om konto, betalning, spårning och återbetalning hör hemma i den officiella kanalen.",
    questions: [
      "Vad är ett PikoBuy-spreadsheet?",
      "Hur granskar jag QC-bilder?",
      "Varför spelar paketvikt roll?",
      "Kan den här sidan beställa?",
      "Ska jag lita på varje källänk?",
      "Var frågar jag om spårning eller återbetalning?",
    ],
    answers: [
      "En lista med möjliga artiklar, länkar och anteckningar. Den hjälper bara om jämförelsen blir enklare.",
      "Kontrollera rätt detaljer: form och sula för skor; mått och tyg för kläder; närbilder och dimensioner för accessoarer.",
      "Förpackning, material och rutt kan ändra slutkostnaden. Uppskattningar hjälper planering men är ingen garanti.",
      "Nej. Den här oberoende guiden säljer inte, tar inte betalning, lägger inte order och hanterar inte paket.",
      "Nej. Bekräfta att originalartikel, alternativ, bilder och anteckningar fortfarande stämmer.",
      "Använd den officiella kanalen för ditt konto eller din order. Vi kan inte komma åt konton, paket eller betalningar.",
    ],
    categoriesList: [
      "Skor",
      "Hoodies",
      "T-shirts",
      "Jackor",
      "Byxor och shorts",
      "Kepsar",
      "Klockor",
      "Accessoarer",
      "Elektronik",
      "Andra fynd",
    ],
  },
};

const views: View[] = ["home", "categories", "products", "guides", "faq"];
const paths: Record<View, string> = {
  home: "/",
  categories: "/categories",
  products: "/products",
  guides: "/guides",
  faq: "/faq",
};
const categorySlugs = [
  "shoes",
  "hoodies",
  "t-shirts",
  "jackets",
  "pants-shorts",
  "hats",
  "watches",
  "accessories",
  "electronics",
  "other-finds",
] as const;
const find = (term = "") =>
  term
    ? `https://findspreadsheet.com/search.html?keywords=${encodeURIComponent(term)}&channelid=2`
    : "https://findspreadsheet.com";

export default function SiteApp({
  active,
  categorySlug,
}: {
  active: View;
  categorySlug?: string;
}) {
  const [lang, setLang] = useState<Lang>("en");
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const value = new URLSearchParams(location.search).get(
      "lang",
    ) as Lang | null;
    if (value && base[value]) setLang(value);
  }, []);
  const c = base[lang];
  const categoryIndex = categorySlug
    ? categorySlugs.indexOf(categorySlug as (typeof categorySlugs)[number])
    : -1;
  const currentCategory = c.categoriesList[Math.max(0, categoryIndex)];
  const currentPath =
    categoryIndex >= 0
      ? `/category/${categorySlugs[categoryIndex]}`
      : paths[active];
  const href = (view: View) => `${paths[view]}?lang=${lang}`;
  const navigateLanguage = (next: Lang) => {
    setLang(next);
    history.replaceState(null, "", `${currentPath}?lang=${next}`);
  };
  const categories = useMemo(
    () => c.categoriesList.map((name, i) => ({ name, n: i + 1 })),
    [c.categoriesList],
  );
  const nav = (
    <nav className={open ? "nav nav-open" : "nav"}>
      {views.map((view) => (
        <a
          className={view === active ? "active" : ""}
          onClick={() => setOpen(false)}
          href={href(view)}
          key={view}
        >
          {c[view]}
        </a>
      ))}
    </nav>
  );
  const categoryGrid =
    categoryIndex >= 0 ? (
      <section className="category-detail">
        <div>
          <p className="eyebrow">
            {c.categories} / 0{categoryIndex + 1}
          </p>
          <h2>{currentCategory}</h2>
          <p>{c.check}</p>
          <p>{c.detailLead}</p>
        </div>
        <a className="button-dark" href={find(`Pikobuy ${currentCategory}`)}>
          {c.catButton}
          <ArrowUpRight size={17} />
        </a>
      </section>
    ) : (
      <div className="category-grid">
        {categories.map(({ name, n }) => (
          <a
            className="category-link"
            href={`/category/${categorySlugs[n - 1]}?lang=${lang}`}
            key={name}
            aria-label={`${c.categories}: ${name}`}
          >
            <article className="category-card">
              <span>0{n}</span>
              <div>
                <h3>{name}</h3>
                <p>{c.check}</p>
              </div>
              <b>
                <ArrowUpRight size={18} />
              </b>
            </article>
          </a>
        ))}
      </div>
    );
  const cards = [
    [c.choose, c.check, Search],
    [c.evidence, c.check, ShieldCheck],
    [c.open, c.check, Truck],
  ];
  const body =
    active === "home" ? (
      <>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">{c.badge}</p>
            <h1>{c.title}</h1>
            <p>{c.lead}</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                location.href = find(query);
              }}
            >
              <Search size={18} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="hoodies, watches, electronics…"
                aria-label={c.search}
              />
              <button>{c.search}</button>
            </form>
            <div className="hero-actions">
              <a className="button-dark" href={find()}>
                <Database size={17} />
                {c.database}
              </a>
              <a className="text-link" href={href("categories")}>
                {c.categories}
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="/pikobuyfins-hero.webp"
              alt="Unbranded streetwear finds in a studio"
            />
            <div className="image-note">
              <span>{c.badge}</span>
              <p>{c.independent}</p>
            </div>
          </div>
        </section>
        <p className="trust">
          <ShieldCheck size={17} />
          {c.independent}
        </p>
        <section className="workflow">
          <div className="section-heading">
            <p className="eyebrow">01 / {c.guides}</p>
            <h2>{c.workflow}</h2>
            <p>{c.process}</p>
          </div>
          <div className="steps">
            {[
              [c.choose, "1"],
              [c.evidence, "2"],
              [c.open, "3"],
            ].map(([title, n]) => (
              <article key={title}>
                <span>0{n}</span>
                <h3>{title}</h3>
                <p>{c.check}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="home-categories">
          <div className="section-heading">
            <p className="eyebrow">02 / {c.categories}</p>
            <h2>{c.browse}</h2>
            <p>{c.browseLead}</p>
          </div>
          {categoryGrid}
        </section>
      </>
    ) : active === "categories" ? (
      <>
        <section className="page-intro">
          <p className="eyebrow">{c.badge}</p>
          <h1>{c.browse}</h1>
          <p>{c.browseLead}</p>
        </section>
        {categoryGrid}
      </>
    ) : active === "products" ? (
      <>
        <section className="page-intro">
          <p className="eyebrow">{c.badge}</p>
          <h1>{c.detailTitle}</h1>
          <p>{c.detailLead}</p>
        </section>
        <div className="detail-grid">
          {cards.map(([title, text, Icon]) => {
            const I = Icon as typeof Search;
            return (
              <article className="detail-card" key={title as string}>
                <I />
                <h2>{title}</h2>
                <p>{text}</p>
                <a href={find("Pikobuy spreadsheet")}>
                  {c.database}
                  <ArrowUpRight size={16} />
                </a>
              </article>
            );
          })}
        </div>
      </>
    ) : active === "guides" ? (
      <>
        <section className="page-intro">
          <p className="eyebrow">{c.badge}</p>
          <h1>{c.articles}</h1>
          <p>{c.articleLead}</p>
        </section>
        <div className="article-list">
          {[1, 2, 3, 4].map((i) => (
            <article key={i}>
              <span>0{i}</span>
              <div>
                <h2>
                  {c.articles} {i}
                </h2>
                <p>{c.articleLead}</p>
              </div>
              <a href={find("Pikobuy guide")}>
                {c.read}
                <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </>
    ) : (
      <>
        <section className="page-intro">
          <p className="eyebrow">{c.badge}</p>
          <h1>{c.faqTitle}</h1>
          <p>{c.faqLead}</p>
        </section>
        <div className="faq-list">
          {c.questions.map((q, i) => (
            <details open={i === 0} key={q}>
              <summary>
                {q}
                <span>+</span>
              </summary>
              <p>{c.answers[i]}</p>
            </details>
          ))}
        </div>
      </>
    );
  return (
    <>
      <header>
        <a className="brand" href={href("home")}>
          <span>PF</span>
          <strong>
            PikoBuyFins<em>.pro</em>
          </strong>
        </a>
        <div className="desktop-nav">{nav}</div>
        <div className="top-actions">
          <label className="language">
            <select
              value={lang}
              onChange={(e) => navigateLanguage(e.target.value as Lang)}
              aria-label="Language"
            >
              {(Object.keys(base) as Lang[]).map((key) => (
                <option value={key} key={key}>
                  {base[key].name}
                </option>
              ))}
            </select>
            <ChevronDown size={14} />
          </label>
          <a className="database" href={find()}>
            {c.database}
            <ArrowUpRight size={15} />
          </a>
          <button
            className="menu-button"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main>{body}</main>
      <footer>
        <div>
          <a className="brand" href={href("home")}>
            <span>PF</span>
            <strong>
              PikoBuyFins<em>.pro</em>
            </strong>
          </a>
          <p>{c.independent}</p>
        </div>
        <div className="footer-links">
          {views.map((view) => (
            <a href={href(view)} key={view}>
              {c[view]}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
