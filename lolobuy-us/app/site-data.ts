import { seoGuidePages } from "./seo-articles";

export type Category = {
  name: string;
  lens: string;
  number: string;
  icon: "shoes" | "hoodie" | "tshirt" | "jacket" | "pants" | "headwear" | "accessories" | "jersey" | "electronics" | "other";
  image: string;
  imageAlt: string;
  href: string;
};

export type ProductHighlight = {
  name: string;
  category: string;
  sourcePriceCny: string;
  priceUsd: string;
  productId: string;
  image: string;
  href: string;
  reviewLens: string;
};

// Representative imagery was selected from results returned by LoloBuy's public
// product-search interface on 10 Aug 2026. The underlying listings come from
// third-party marketplaces; the images are category cues, not LoloBuy product
// recommendations, quality checks, authenticity claims or popularity rankings.
export const categories: Category[] = [
  { name: "Shoes", lens: "Sole / shape / sizing", number: "01", icon: "shoes", image: "/categories/shoes.webp", imageAlt: "Assorted casual sneakers shown in LoloBuy public search results", href: "https://findspreadsheet.com/shoes/" },
  { name: "Hoodies / Sweaters", lens: "Weight / cuffs / fit", number: "02", icon: "hoodie", image: "/categories/hoodies-sweaters.webp", imageAlt: "Assorted blank hoodies shown in LoloBuy public search results", href: "https://findspreadsheet.com/hoodies-sweaters/" },
  { name: "T-Shirts", lens: "Print / fabric / fit", number: "03", icon: "tshirt", image: "/categories/t-shirts.webp", imageAlt: "Short-sleeve T-shirt shown in LoloBuy public search results", href: "https://findspreadsheet.com/t-shirts/" },
  { name: "Jackets", lens: "Build / lining / zip", number: "04", icon: "jacket", image: "/categories/jackets.webp", imageAlt: "Outdoor jacket shown in LoloBuy public search results", href: "https://findspreadsheet.com/jackets/" },
  { name: "Pants / Shorts", lens: "Measure / cut / finish", number: "05", icon: "pants", image: "/categories/pants-shorts.webp", imageAlt: "Loose-fit trousers shown in LoloBuy public search results", href: "https://findspreadsheet.com/pants-shorts/" },
  { name: "Headwear", lens: "Shape / brim / sizing", number: "06", icon: "headwear", image: "/categories/headwear.webp", imageAlt: "Assorted baseball caps shown in LoloBuy public search results", href: "https://findspreadsheet.com/headwear/" },
  { name: "Accessories", lens: "Finish / scale / use", number: "07", icon: "accessories", image: "/categories/accessories.webp", imageAlt: "Black handbag shown in LoloBuy public search results", href: "https://findspreadsheet.com/accessories/" },
  { name: "Jersey", lens: "Print / badge / fit", number: "08", icon: "jersey", image: "/categories/jersey.webp", imageAlt: "Assorted football jerseys shown in LoloBuy public search results", href: "https://findspreadsheet.com/jersey/" },
  { name: "Electronics", lens: "Spec / plug / region", number: "09", icon: "electronics", image: "/categories/electronics.webp", imageAlt: "Wireless earphones shown in LoloBuy public search results", href: "https://findspreadsheet.com/electronics/" },
  { name: "Other Stuff", lens: "Size / packing / material", number: "10", icon: "other", image: "/categories/other-stuff.webp", imageAlt: "Assorted plush toys shown in LoloBuy public search results", href: "https://findspreadsheet.com/other-stuff/" },
];

// The order mirrors the public "Latest Products" section on FindSpreadsheet.
// CNY source prices and item IDs were checked on the linked product pages on 10 Aug 2026.
// USD display estimates use 1 CNY = US$0.1482, the 10 Aug 2026 market rate.
// Inclusion is not a quality, authenticity, stock or popularity guarantee.
export const productHighlights: ProductHighlight[] = [
  {
    name: "Gallery Short",
    category: "Pants / Shorts",
    sourcePriceCny: "145",
    priceUsd: "21.49",
    productId: "7711437541",
    image: "/products/gallery-short.webp",
    href: "https://findspreadsheet.com/pants-shorts/gallery-short-3003.html",
    reviewLens: "Compare waist, inseam and visible finishing.",
  },
  {
    name: "Burberry Jacket listing",
    category: "Jackets",
    sourcePriceCny: "148",
    priceUsd: "21.93",
    productId: "7714490692",
    image: "/products/burberry-jacket.webp",
    href: "https://findspreadsheet.com/jackets/high-quality-burberry-jacket-3131.html",
    reviewLens: "Check lining, zipper, measurements and construction.",
  },
  {
    name: "37-colour sock listing",
    category: "Other Stuff",
    sourcePriceCny: "20",
    priceUsd: "2.96",
    productId: "7714498572",
    image: "/products/socks.webp",
    href: "https://findspreadsheet.com/other-stuff/sock-37-colores-top-3001.html",
    reviewLens: "Confirm colour, quantity and material claim before ordering.",
  },
  {
    name: "T-shirt / Hoodie listing",
    category: "Hoodies / Sweaters",
    sourcePriceCny: "85",
    priceUsd: "12.60",
    productId: "7711391539",
    image: "/products/dior-hoodie.webp",
    href: "https://findspreadsheet.com/hoodies-sweaters/dior-t-shirthoodie-39-style-top-3000.html",
    reviewLens: "Match the selected style, print placement and size chart.",
  },
  {
    name: "C.P. Company T-shirt listing",
    category: "T-Shirts",
    sourcePriceCny: "118",
    priceUsd: "17.49",
    productId: "7714478764",
    image: "/products/cp-tshirt.webp",
    href: "https://findspreadsheet.com/t-shirts/cp-company-t-shirt-2999.html",
    reviewLens: "Review chest width, body length and visible graphics.",
  },
  {
    name: "Outdoor Jacket listing",
    category: "Jackets",
    sourcePriceCny: "145",
    priceUsd: "21.49",
    productId: "7711524403",
    image: "/products/outdoor-jacket.webp",
    href: "https://findspreadsheet.com/jackets/the-north-face-outdoorjacket-2998.html",
    reviewLens: "Inspect shell, closures, seams and stated measurements.",
  },
  {
    name: "Multi-style Hat listing",
    category: "Headwear",
    sourcePriceCny: "50",
    priceUsd: "7.41",
    productId: "7711557651",
    image: "/products/hats.webp",
    href: "https://findspreadsheet.com/headwear/prada-hatfendi-hatstone-island-hatbalenciaga-hatgucci-hat-2997.html",
    reviewLens: "Confirm the exact style, crown shape and brim details.",
  },
  {
    name: "Lacoste Swim Shorts listing",
    category: "Pants / Shorts",
    sourcePriceCny: "121",
    priceUsd: "17.93",
    productId: "7714520304",
    image: "/products/swim-shorts.webp",
    href: "https://findspreadsheet.com/pants-shorts/lacoste-swim-shorts-2996.html",
    reviewLens: "Check sizing, waistband, lining and visible finishing.",
  },
  {
    name: "Supreme Wallet listing",
    category: "Accessories",
    sourcePriceCny: "52.8",
    priceUsd: "7.82",
    productId: "7714549654",
    image: "/products/wallet.webp",
    href: "https://findspreadsheet.com/accessories/supreme-wallet-2995.html",
    reviewLens: "Review dimensions, closure, edges and interior layout.",
  },
  {
    name: "Valentino Tees listing",
    category: "T-Shirts",
    sourcePriceCny: "165",
    priceUsd: "24.45",
    productId: "7711512553",
    image: "/products/valentino-tees.webp",
    href: "https://findspreadsheet.com/t-shirts/valentino-tees-2994.html",
    reviewLens: "Compare selected style, graphic scale and measurements.",
  },
];

export const locales = [
  ["en", "English"], ["de", "Deutsch"], ["fr", "Français"], ["es", "Español"],
  ["it", "Italiano"], ["nl", "Nederlands"], ["pt", "Português"], ["pl", "Polski"],
  ["sv", "Svenska"], ["da", "Dansk"], ["no", "Norsk"], ["fi", "Suomi"],
  ["cs", "Čeština"], ["ro", "Română"], ["hu", "Magyar"], ["el", "Ελληνικά"],
  ["tr", "Türkçe"], ["uk", "Українська"], ["ru", "Русский"], ["ja", "日本語"],
  ["ko", "한국어"], ["zh", "中文"], ["ar", "العربية"], ["id", "Bahasa Indonesia"],
] as const;

export type LocaleUiCopy = {
  nav: readonly [string, string, string, string, string, string, string];
  menu: string;
  homeLabel: string;
  brandLine: string;
  primaryNavLabel: string;
  languageLabel: string;
  searchLabel: string;
  searchPlaceholder: string;
  searchAction: string;
  footerGroups: readonly [string, string, string];
  footerLinks: readonly [string, string, string, string, string, string, string, string, string];
  footerDisclosure: string;
  footerStatus: string;
};

export const localeUiCopy: Record<string, LocaleUiCopy> = {
  en: { nav: ["Spreadsheet", "Beginner guide", "QC guide", "Shipping", "SEO articles", "Updates", "FAQ"], menu: "MENU", homeLabel: "LoloBuy US home", brandLine: "INDEPENDENT RESEARCH EDITION", primaryNavLabel: "Primary navigation", languageLabel: "Choose language", searchLabel: "Search the FindSpreadsheet product database", searchPlaceholder: "Try: shoes, hoodies, jackets…", searchAction: "SEARCH INDEX", footerGroups: ["DISCOVER", "RESEARCH", "LEGAL"], footerLinks: ["Spreadsheet", "Product database", "FAQ", "Methodology", "Sources", "Updates", "Disclosure", "Privacy", "Contact"], footerDisclosure: "LoloBuy.us is an independent product-discovery and education site. It is not affiliated with, endorsed by or the official website of LoloBuy.", footerStatus: "PUBLIC INSPECTION VERSION • NOINDEX • DETAILS MAY CHANGE" },
  de: { nav: ["Tabelle", "Einsteigerleitfaden", "QC-Leitfaden", "Versand", "SEO-Artikel", "Aktuelles", "FAQ"], menu: "MENÜ", homeLabel: "LoloBuy US Startseite", brandLine: "UNABHÄNGIGE RECHERCHE", primaryNavLabel: "Hauptnavigation", languageLabel: "Sprache wählen", searchLabel: "FindSpreadsheet-Produktdatenbank durchsuchen", searchPlaceholder: "Zum Beispiel: Schuhe, Hoodies, Jacken…", searchAction: "INDEX SUCHEN", footerGroups: ["ENTDECKEN", "RECHERCHE", "RECHTLICHES"], footerLinks: ["Tabelle", "Produktdatenbank", "FAQ", "Methodik", "Quellen", "Aktuelles", "Offenlegung", "Datenschutz", "Kontakt"], footerDisclosure: "LoloBuy.us ist eine unabhängige Website für Produktsuche und Information. Sie ist weder mit LoloBuy verbunden noch von LoloBuy empfohlen oder die offizielle LoloBuy-Website.", footerStatus: "ÖFFENTLICHE PRÜFVERSION • NOINDEX • DETAILS KÖNNEN SICH ÄNDERN" },
  fr: { nav: ["Tableau", "Guide débutant", "Guide QC", "Expédition", "Articles SEO", "Mises à jour", "FAQ"], menu: "MENU", homeLabel: "Accueil LoloBuy US", brandLine: "ÉDITION DE RECHERCHE INDÉPENDANTE", primaryNavLabel: "Navigation principale", languageLabel: "Choisir la langue", searchLabel: "Rechercher dans la base FindSpreadsheet", searchPlaceholder: "Ex. : chaussures, sweats, vestes…", searchAction: "RECHERCHER", footerGroups: ["DÉCOUVRIR", "RECHERCHE", "MENTIONS"], footerLinks: ["Tableau", "Base produits", "FAQ", "Méthodologie", "Sources", "Mises à jour", "Divulgation", "Confidentialité", "Contact"], footerDisclosure: "LoloBuy.us est un site indépendant de découverte de produits et d'information. Il n'est ni affilié, ni approuvé, ni exploité par LoloBuy.", footerStatus: "VERSION PUBLIQUE DE CONTRÔLE • NOINDEX • INFORMATIONS SUSCEPTIBLES D'ÉVOLUER" },
  es: { nav: ["Hoja", "Guía inicial", "Guía QC", "Envíos", "Artículos SEO", "Actualizaciones", "FAQ"], menu: "MENÚ", homeLabel: "Inicio de LoloBuy US", brandLine: "EDICIÓN DE INVESTIGACIÓN INDEPENDIENTE", primaryNavLabel: "Navegación principal", languageLabel: "Elegir idioma", searchLabel: "Buscar en la base de productos FindSpreadsheet", searchPlaceholder: "Prueba: zapatos, sudaderas, chaquetas…", searchAction: "BUSCAR ÍNDICE", footerGroups: ["DESCUBRIR", "INVESTIGAR", "LEGAL"], footerLinks: ["Hoja", "Base de productos", "FAQ", "Metodología", "Fuentes", "Actualizaciones", "Divulgación", "Privacidad", "Contacto"], footerDisclosure: "LoloBuy.us es un sitio independiente de descubrimiento de productos e información. No está afiliado, respaldado ni es el sitio oficial de LoloBuy.", footerStatus: "VERSIÓN PÚBLICA DE REVISIÓN • NOINDEX • LOS DETALLES PUEDEN CAMBIAR" },
  it: { nav: ["Foglio", "Guida iniziale", "Guida QC", "Spedizione", "Articoli SEO", "Aggiornamenti", "FAQ"], menu: "MENU", homeLabel: "Home LoloBuy US", brandLine: "EDIZIONE DI RICERCA INDIPENDENTE", primaryNavLabel: "Navigazione principale", languageLabel: "Scegli la lingua", searchLabel: "Cerca nel database prodotti FindSpreadsheet", searchPlaceholder: "Prova: scarpe, felpe, giacche…", searchAction: "CERCA INDICE", footerGroups: ["SCOPRI", "RICERCA", "NOTE LEGALI"], footerLinks: ["Foglio", "Database prodotti", "FAQ", "Metodologia", "Fonti", "Aggiornamenti", "Informativa", "Privacy", "Contatti"], footerDisclosure: "LoloBuy.us è un sito indipendente di scoperta prodotti e informazione. Non è affiliato, approvato né il sito ufficiale di LoloBuy.", footerStatus: "VERSIONE PUBBLICA DI CONTROLLO • NOINDEX • I DETTAGLI POSSONO CAMBIARE" },
  nl: { nav: ["Spreadsheet", "Beginnersgids", "QC-gids", "Verzending", "SEO-artikelen", "Updates", "FAQ"], menu: "MENU", homeLabel: "LoloBuy US startpagina", brandLine: "ONAFHANKELIJKE ONDERZOEKSEDITIE", primaryNavLabel: "Hoofdnavigatie", languageLabel: "Kies taal", searchLabel: "Doorzoek de FindSpreadsheet-productdatabase", searchPlaceholder: "Probeer: schoenen, hoodies, jassen…", searchAction: "ZOEK INDEX", footerGroups: ["ONTDEKKEN", "ONDERZOEK", "JURIDISCH"], footerLinks: ["Spreadsheet", "Productdatabase", "FAQ", "Methodologie", "Bronnen", "Updates", "Openbaarmaking", "Privacy", "Contact"], footerDisclosure: "LoloBuy.us is een onafhankelijke site voor productontdekking en informatie. De site is niet verbonden met, goedgekeurd door of de officiële website van LoloBuy.", footerStatus: "OPENBARE CONTROLEVERSIE • NOINDEX • DETAILS KUNNEN WIJZIGEN" },
  pt: { nav: ["Planilha", "Guia inicial", "Guia QC", "Envio", "Artigos SEO", "Atualizações", "FAQ"], menu: "MENU", homeLabel: "Página inicial LoloBuy US", brandLine: "EDIÇÃO DE PESQUISA INDEPENDENTE", primaryNavLabel: "Navegação principal", languageLabel: "Escolher idioma", searchLabel: "Pesquisar na base de produtos FindSpreadsheet", searchPlaceholder: "Tente: calçado, hoodies, casacos…", searchAction: "PESQUISAR", footerGroups: ["DESCOBRIR", "PESQUISA", "LEGAL"], footerLinks: ["Planilha", "Base de produtos", "FAQ", "Metodologia", "Fontes", "Atualizações", "Divulgação", "Privacidade", "Contacto"], footerDisclosure: "LoloBuy.us é um site independente de descoberta de produtos e informação. Não é afiliado, aprovado nem o site oficial da LoloBuy.", footerStatus: "VERSÃO PÚBLICA DE REVISÃO • NOINDEX • OS DETALHES PODEM MUDAR" },
  pl: { nav: ["Arkusz", "Poradnik startowy", "Poradnik QC", "Wysyłka", "Artykuły SEO", "Aktualizacje", "FAQ"], menu: "MENU", homeLabel: "Strona główna LoloBuy US", brandLine: "NIEZALEŻNE OPRACOWANIE", primaryNavLabel: "Nawigacja główna", languageLabel: "Wybierz język", searchLabel: "Przeszukaj bazę produktów FindSpreadsheet", searchPlaceholder: "Spróbuj: buty, bluzy, kurtki…", searchAction: "SZUKAJ", footerGroups: ["ODKRYWAJ", "BADANIA", "INFORMACJE PRAWNE"], footerLinks: ["Arkusz", "Baza produktów", "FAQ", "Metodologia", "Źródła", "Aktualizacje", "Ujawnienie", "Prywatność", "Kontakt"], footerDisclosure: "LoloBuy.us to niezależny serwis do odkrywania produktów i zdobywania informacji. Nie jest powiązany z LoloBuy, przez LoloBuy polecany ani nie jest jego oficjalną witryną.", footerStatus: "PUBLICZNA WERSJA KONTROLNA • NOINDEX • SZCZEGÓŁY MOGĄ SIĘ ZMIENIĆ" },
  sv: { nav: ["Kalkylark", "Nybörjarguide", "QC-guide", "Frakt", "SEO-artiklar", "Uppdateringar", "FAQ"], menu: "MENY", homeLabel: "LoloBuy US startsida", brandLine: "OBEROENDE FORSKNINGSUTGÅVA", primaryNavLabel: "Huvudnavigering", languageLabel: "Välj språk", searchLabel: "Sök i FindSpreadsheets produktdatabas", searchPlaceholder: "Prova: skor, hoodies, jackor…", searchAction: "SÖK INDEX", footerGroups: ["UPPTÄCK", "FORSKNING", "JURIDIK"], footerLinks: ["Kalkylark", "Produktdatabas", "FAQ", "Metod", "Källor", "Uppdateringar", "Information", "Integritet", "Kontakt"], footerDisclosure: "LoloBuy.us är en oberoende webbplats för produktupptäckt och information. Den är inte ansluten till, godkänd av eller LoloBuys officiella webbplats.", footerStatus: "OFFENTLIG GRANSKNINGSVERSION • NOINDEX • UPPGIFTER KAN ÄNDRAS" },
  da: { nav: ["Regneark", "Begynderguide", "QC-guide", "Forsendelse", "SEO-artikler", "Opdateringer", "FAQ"], menu: "MENU", homeLabel: "LoloBuy US forside", brandLine: "UAFHÆNGIG RESEARCHUDGAVE", primaryNavLabel: "Primær navigation", languageLabel: "Vælg sprog", searchLabel: "Søg i FindSpreadsheet-produktdatabasen", searchPlaceholder: "Prøv: sko, hoodies, jakker…", searchAction: "SØG I INDEKS", footerGroups: ["OPDAG", "RESEARCH", "JURIDISK"], footerLinks: ["Regneark", "Produktdatabase", "FAQ", "Metode", "Kilder", "Opdateringer", "Oplysning", "Privatliv", "Kontakt"], footerDisclosure: "LoloBuy.us er et uafhængigt site til produktopdagelse og information. Det er ikke tilknyttet, godkendt af eller LoloBuys officielle website.", footerStatus: "OFFENTLIG KONTROLVERSION • NOINDEX • DETALJER KAN ÆNDRES" },
  no: { nav: ["Regneark", "Nybegynnerguide", "QC-guide", "Frakt", "SEO-artikler", "Oppdateringer", "FAQ"], menu: "MENY", homeLabel: "LoloBuy US forside", brandLine: "UAVHENGIG FORSKNINGSUTGAVE", primaryNavLabel: "Hovednavigasjon", languageLabel: "Velg språk", searchLabel: "Søk i FindSpreadsheet-produktdatabasen", searchPlaceholder: "Prøv: sko, hettegensere, jakker…", searchAction: "SØK I INDEKS", footerGroups: ["OPPDAG", "FORSKNING", "JURIDISK"], footerLinks: ["Regneark", "Produktdatabase", "FAQ", "Metode", "Kilder", "Oppdateringer", "Informasjon", "Personvern", "Kontakt"], footerDisclosure: "LoloBuy.us er et uavhengig nettsted for produktoppslag og informasjon. Det er ikke tilknyttet, godkjent av eller LoloBuys offisielle nettsted.", footerStatus: "OFFENTLIG KONTROLLVERSJON • NOINDEX • DETALJER KAN ENDRES" },
  fi: { nav: ["Taulukko", "Aloittelijan opas", "QC-opas", "Toimitus", "SEO-artikkelit", "Päivitykset", "UKK"], menu: "VALIKKO", homeLabel: "LoloBuy US etusivu", brandLine: "RIIPPUMATON TUTKIMUSJULKAISU", primaryNavLabel: "Päänavigointi", languageLabel: "Valitse kieli", searchLabel: "Hae FindSpreadsheet-tuotetietokannasta", searchPlaceholder: "Kokeile: kengät, hupparit, takit…", searchAction: "HAE INDEKSISTÄ", footerGroups: ["LÖYDÄ", "TUTKIMUS", "OIKEUDELLINEN"], footerLinks: ["Taulukko", "Tuotetietokanta", "UKK", "Menetelmä", "Lähteet", "Päivitykset", "Ilmoitus", "Tietosuoja", "Yhteys"], footerDisclosure: "LoloBuy.us on riippumaton tuotehaku- ja tietosivusto. Se ei ole LoloBuyn kumppani, hyväksymä eikä virallinen verkkosivusto.", footerStatus: "JULKINEN TARKISTUSVERSIO • NOINDEX • TIEDOT VOIVAT MUUTTUA" },
  cs: { nav: ["Tabulka", "Průvodce pro začátečníky", "Průvodce QC", "Doprava", "SEO články", "Aktualizace", "FAQ"], menu: "MENU", homeLabel: "Domovská stránka LoloBuy US", brandLine: "NEZÁVISLÁ VÝZKUMNÁ EDICE", primaryNavLabel: "Hlavní navigace", languageLabel: "Zvolit jazyk", searchLabel: "Hledat v databázi FindSpreadsheet", searchPlaceholder: "Zkuste: boty, mikiny, bundy…", searchAction: "HLEDAT", footerGroups: ["OBJEVOVAT", "VÝZKUM", "PRÁVNÍ"], footerLinks: ["Tabulka", "Databáze produktů", "FAQ", "Metodika", "Zdroje", "Aktualizace", "Prohlášení", "Soukromí", "Kontakt"], footerDisclosure: "LoloBuy.us je nezávislý web pro vyhledávání produktů a informace. Není přidružený k LoloBuy, schválený společností LoloBuy ani jejím oficiálním webem.", footerStatus: "VEŘEJNÁ KONTROLNÍ VERZE • NOINDEX • ÚDAJE SE MOHOU MĚNIT" },
  ro: { nav: ["Tabel", "Ghid pentru începători", "Ghid QC", "Livrare", "Articole SEO", "Actualizări", "FAQ"], menu: "MENIU", homeLabel: "Pagina principală LoloBuy US", brandLine: "EDIȚIE DE CERCETARE INDEPENDENTĂ", primaryNavLabel: "Navigare principală", languageLabel: "Alege limba", searchLabel: "Caută în baza de produse FindSpreadsheet", searchPlaceholder: "Încearcă: pantofi, hanorace, jachete…", searchAction: "CAUTĂ", footerGroups: ["DESCOPERĂ", "CERCETARE", "LEGAL"], footerLinks: ["Tabel", "Bază de produse", "FAQ", "Metodologie", "Surse", "Actualizări", "Dezvăluire", "Confidențialitate", "Contact"], footerDisclosure: "LoloBuy.us este un site independent de descoperire a produselor și informare. Nu este afiliat, aprobat sau site-ul oficial LoloBuy.", footerStatus: "VERSIUNE PUBLICĂ DE VERIFICARE • NOINDEX • DETALIILE SE POT SCHIMBA" },
  hu: { nav: ["Táblázat", "Kezdő útmutató", "QC útmutató", "Szállítás", "SEO cikkek", "Frissítések", "GYIK"], menu: "MENÜ", homeLabel: "LoloBuy US kezdőlap", brandLine: "FÜGGETLEN KUTATÁSI KIADÁS", primaryNavLabel: "Fő navigáció", languageLabel: "Nyelv kiválasztása", searchLabel: "Keresés a FindSpreadsheet termékadatbázisban", searchPlaceholder: "Próbáld: cipők, pulóverek, kabátok…", searchAction: "KERESÉS", footerGroups: ["FELFEDEZÉS", "KUTATÁS", "JOGI"], footerLinks: ["Táblázat", "Termékadatbázis", "GYIK", "Módszertan", "Források", "Frissítések", "Tájékoztató", "Adatvédelem", "Kapcsolat"], footerDisclosure: "A LoloBuy.us független termékkereső és tájékoztató oldal. Nem áll kapcsolatban a LoloBuy-jal, nem annak jóváhagyásával működik, és nem a hivatalos webhelye.", footerStatus: "NYILVÁNOS ELLENŐRZŐ VERZIÓ • NOINDEX • A RÉSZLETEK VÁLTOZHATNAK" },
  el: { nav: ["Φύλλο", "Οδηγός αρχαρίων", "Οδηγός QC", "Αποστολή", "Άρθρα SEO", "Ενημερώσεις", "Συχνές ερωτήσεις"], menu: "ΜΕΝΟΥ", homeLabel: "Αρχική LoloBuy US", brandLine: "ΑΝΕΞΑΡΤΗΤΗ ΕΡΕΥΝΗΤΙΚΗ ΕΚΔΟΣΗ", primaryNavLabel: "Κύρια πλοήγηση", languageLabel: "Επιλογή γλώσσας", searchLabel: "Αναζήτηση στη βάση FindSpreadsheet", searchPlaceholder: "Δοκιμάστε: παπούτσια, φούτερ, μπουφάν…", searchAction: "ΑΝΑΖΗΤΗΣΗ", footerGroups: ["ΑΝΑΚΑΛΥΨΗ", "ΕΡΕΥΝΑ", "ΝΟΜΙΚΑ"], footerLinks: ["Φύλλο", "Βάση προϊόντων", "Συχνές ερωτήσεις", "Μεθοδολογία", "Πηγές", "Ενημερώσεις", "Γνωστοποίηση", "Απόρρητο", "Επικοινωνία"], footerDisclosure: "Το LoloBuy.us είναι ανεξάρτητος ιστότοπος ανακάλυψης προϊόντων και ενημέρωσης. Δεν συνδέεται, δεν εγκρίνεται και δεν αποτελεί τον επίσημο ιστότοπο της LoloBuy.", footerStatus: "ΔΗΜΟΣΙΑ ΕΚΔΟΣΗ ΕΛΕΓΧΟΥ • NOINDEX • ΟΙ ΛΕΠΤΟΜΕΡΕΙΕΣ ΜΠΟΡΕΙ ΝΑ ΑΛΛΑΞΟΥΝ" },
  tr: { nav: ["Tablo", "Başlangıç rehberi", "QC rehberi", "Kargo", "SEO makaleleri", "Güncellemeler", "SSS"], menu: "MENÜ", homeLabel: "LoloBuy US ana sayfa", brandLine: "BAĞIMSIZ ARAŞTIRMA SÜRÜMÜ", primaryNavLabel: "Ana gezinme", languageLabel: "Dil seç", searchLabel: "FindSpreadsheet ürün veritabanında ara", searchPlaceholder: "Deneyin: ayakkabı, kapüşonlu, ceket…", searchAction: "İNDEKSTE ARA", footerGroups: ["KEŞFET", "ARAŞTIRMA", "YASAL"], footerLinks: ["Tablo", "Ürün veritabanı", "SSS", "Yöntem", "Kaynaklar", "Güncellemeler", "Açıklama", "Gizlilik", "İletişim"], footerDisclosure: "LoloBuy.us bağımsız bir ürün keşfi ve bilgi sitesidir. LoloBuy ile bağlantılı, LoloBuy tarafından onaylanmış veya LoloBuy'ın resmî sitesi değildir.", footerStatus: "KAMUYA AÇIK KONTROL SÜRÜMÜ • NOINDEX • AYRINTILAR DEĞİŞEBİLİR" },
  uk: { nav: ["Таблиця", "Посібник для початківців", "QC-посібник", "Доставка", "SEO-статті", "Оновлення", "FAQ"], menu: "МЕНЮ", homeLabel: "Головна LoloBuy US", brandLine: "НЕЗАЛЕЖНЕ ДОСЛІДНИЦЬКЕ ВИДАННЯ", primaryNavLabel: "Головна навігація", languageLabel: "Обрати мову", searchLabel: "Пошук у базі FindSpreadsheet", searchPlaceholder: "Спробуйте: взуття, худі, куртки…", searchAction: "ШУКАТИ", footerGroups: ["ЗНАЙТИ", "ДОСЛІДЖЕННЯ", "ПРАВОВЕ"], footerLinks: ["Таблиця", "База товарів", "FAQ", "Методологія", "Джерела", "Оновлення", "Розкриття", "Конфіденційність", "Контакт"], footerDisclosure: "LoloBuy.us — незалежний сайт для пошуку товарів та інформації. Він не пов'язаний із LoloBuy, не схвалений нею і не є її офіційним сайтом.", footerStatus: "ПУБЛІЧНА КОНТРОЛЬНА ВЕРСІЯ • NOINDEX • ДЕТАЛІ МОЖУТЬ ЗМІНЮВАТИСЯ" },
  ru: { nav: ["Таблица", "Руководство новичка", "QC-руководство", "Доставка", "SEO-статьи", "Обновления", "FAQ"], menu: "МЕНЮ", homeLabel: "Главная LoloBuy US", brandLine: "НЕЗАВИСИМОЕ ИССЛЕДОВАТЕЛЬСКОЕ ИЗДАНИЕ", primaryNavLabel: "Основная навигация", languageLabel: "Выбрать язык", searchLabel: "Поиск в базе FindSpreadsheet", searchPlaceholder: "Например: обувь, худи, куртки…", searchAction: "ИСКАТЬ", footerGroups: ["НАЙТИ", "ИССЛЕДОВАНИЯ", "ПРАВОВАЯ ИНФОРМАЦИЯ"], footerLinks: ["Таблица", "База товаров", "FAQ", "Методика", "Источники", "Обновления", "Раскрытие", "Конфиденциальность", "Контакты"], footerDisclosure: "LoloBuy.us — независимый сайт для поиска товаров и информации. Он не связан с LoloBuy, не одобрен ею и не является её официальным сайтом.", footerStatus: "ПУБЛИЧНАЯ ПРОВЕРОЧНАЯ ВЕРСИЯ • NOINDEX • ДАННЫЕ МОГУТ МЕНЯТЬСЯ" },
  ja: { nav: ["商品表", "初心者ガイド", "QCガイド", "配送", "SEO記事", "更新情報", "FAQ"], menu: "メニュー", homeLabel: "LoloBuy US ホーム", brandLine: "独立調査版", primaryNavLabel: "メインナビゲーション", languageLabel: "言語を選択", searchLabel: "FindSpreadsheetの商品データベースを検索", searchPlaceholder: "例：靴、パーカー、ジャケット…", searchAction: "商品表を検索", footerGroups: ["探す", "調査", "法的情報"], footerLinks: ["商品表", "商品データベース", "FAQ", "調査方法", "情報源", "更新情報", "開示", "プライバシー", "お問い合わせ"], footerDisclosure: "LoloBuy.usは独立した商品検索・情報サイトです。LoloBuyとの提携、承認、またはLoloBuy公式サイトではありません。", footerStatus: "公開確認版 • NOINDEX • 情報は変更される場合があります" },
  ko: { nav: ["상품표", "초보자 가이드", "QC 가이드", "배송", "SEO 글", "업데이트", "FAQ"], menu: "메뉴", homeLabel: "LoloBuy US 홈", brandLine: "독립 조사 에디션", primaryNavLabel: "주요 탐색", languageLabel: "언어 선택", searchLabel: "FindSpreadsheet 상품 데이터베이스 검색", searchPlaceholder: "예: 신발, 후드, 재킷…", searchAction: "상품표 검색", footerGroups: ["찾기", "조사", "법적 정보"], footerLinks: ["상품표", "상품 데이터베이스", "FAQ", "조사 방법", "출처", "업데이트", "고지", "개인정보", "문의"], footerDisclosure: "LoloBuy.us는 독립적인 상품 검색 및 정보 사이트입니다. LoloBuy와 제휴하거나 승인을 받은 공식 사이트가 아닙니다.", footerStatus: "공개 검토 버전 • NOINDEX • 세부 정보는 변경될 수 있음" },
  zh: { nav: ["商品表格", "新手指南", "质检指南", "国际运输", "SEO文章", "更新记录", "常见问题"], menu: "菜单", homeLabel: "LoloBuy US 首页", brandLine: "独立研究版", primaryNavLabel: "主导航", languageLabel: "选择语言", searchLabel: "搜索 FindSpreadsheet 商品数据库", searchPlaceholder: "例如：鞋类、卫衣、夹克……", searchAction: "搜索商品", footerGroups: ["发现商品", "研究资料", "法律信息"], footerLinks: ["商品表格", "商品数据库", "常见问题", "编辑方法", "资料来源", "更新记录", "独立声明", "隐私政策", "联系我们"], footerDisclosure: "LoloBuy.us 是独立的商品发现与购物知识网站，不隶属于 LoloBuy，也未获得其背书，更不是 LoloBuy 官方网站。", footerStatus: "公开检查版本 • 禁止索引 • 具体信息可能发生变化" },
  ar: { nav: ["جدول المنتجات", "دليل المبتدئين", "دليل الفحص", "الشحن", "مقالات SEO", "التحديثات", "الأسئلة"], menu: "القائمة", homeLabel: "الصفحة الرئيسية LoloBuy US", brandLine: "إصدار بحثي مستقل", primaryNavLabel: "التنقل الرئيسي", languageLabel: "اختر اللغة", searchLabel: "البحث في قاعدة منتجات FindSpreadsheet", searchPlaceholder: "جرّب: أحذية، هوديز، سترات…", searchAction: "بحث", footerGroups: ["اكتشف", "البحث", "قانوني"], footerLinks: ["جدول المنتجات", "قاعدة المنتجات", "الأسئلة", "المنهجية", "المصادر", "التحديثات", "الإفصاح", "الخصوصية", "اتصل بنا"], footerDisclosure: "LoloBuy.us موقع مستقل لاكتشاف المنتجات والمعلومات. لا يتبع LoloBuy ولا يحظى بتأييدها وليس موقعها الرسمي.", footerStatus: "نسخة مراجعة عامة • NOINDEX • قد تتغير التفاصيل" },
  id: { nav: ["Spreadsheet", "Panduan pemula", "Panduan QC", "Pengiriman", "Artikel SEO", "Pembaruan", "FAQ"], menu: "MENU", homeLabel: "Beranda LoloBuy US", brandLine: "EDISI RISET INDEPENDEN", primaryNavLabel: "Navigasi utama", languageLabel: "Pilih bahasa", searchLabel: "Cari database produk FindSpreadsheet", searchPlaceholder: "Coba: sepatu, hoodie, jaket…", searchAction: "CARI INDEKS", footerGroups: ["TEMUKAN", "RISET", "HUKUM"], footerLinks: ["Spreadsheet", "Database produk", "FAQ", "Metodologi", "Sumber", "Pembaruan", "Pengungkapan", "Privasi", "Kontak"], footerDisclosure: "LoloBuy.us adalah situs independen untuk penemuan produk dan informasi. Situs ini tidak berafiliasi, didukung, atau merupakan situs resmi LoloBuy.", footerStatus: "VERSI PEMERIKSAAN PUBLIK • NOINDEX • DETAIL DAPAT BERUBAH" },
};

export const localeCopy: Record<string, { title: string; accent: string; lede: string; browse: string; source: string }> = {
  en: { title: "Find the signal.", accent: "Check the detail.", lede: "An independent LoloBuy spreadsheet, QC and parcel-planning guide for shoppers in the United States and Europe.", browse: "Browse the spreadsheet", source: "Official process checked" },
  de: { title: "Finde das Signal.", accent: "Prüfe die Details.", lede: "Ein unabhängiger LoloBuy-Spreadsheet-, QC- und Paketplanungsleitfaden für Käufer in den USA und Europa.", browse: "Spreadsheet durchsuchen", source: "Offiziellen Ablauf geprüft" },
  fr: { title: "Trouvez le signal.", accent: "Vérifiez le détail.", lede: "Un guide indépendant LoloBuy pour les produits, le contrôle qualité et la préparation des colis aux États-Unis et en Europe.", browse: "Parcourir le tableau", source: "Processus officiel vérifié" },
  es: { title: "Encuentra la señal.", accent: "Comprueba el detalle.", lede: "Una guía independiente de LoloBuy para productos, control de calidad y planificación de paquetes en Estados Unidos y Europa.", browse: "Explorar la hoja", source: "Proceso oficial revisado" },
  it: { title: "Trova il segnale.", accent: "Controlla i dettagli.", lede: "Una guida indipendente LoloBuy per prodotti, controllo qualità e pianificazione dei pacchi negli Stati Uniti e in Europa.", browse: "Esplora il foglio", source: "Procedura ufficiale verificata" },
  nl: { title: "Vind het signaal.", accent: "Controleer het detail.", lede: "Een onafhankelijke LoloBuy-gids voor producten, kwaliteitscontrole en pakketplanning in de VS en Europa.", browse: "Bekijk de spreadsheet", source: "Officieel proces gecontroleerd" },
  pt: { title: "Encontre o sinal.", accent: "Verifique os detalhes.", lede: "Um guia independente de LoloBuy para produtos, controlo de qualidade e planeamento de encomendas nos EUA e na Europa.", browse: "Explorar a planilha", source: "Processo oficial verificado" },
  pl: { title: "Znajdź sygnał.", accent: "Sprawdź szczegóły.", lede: "Niezależny przewodnik LoloBuy po produktach, kontroli jakości i planowaniu przesyłek w USA i Europie.", browse: "Przeglądaj arkusz", source: "Sprawdzono oficjalny proces" },
  sv: { title: "Hitta signalen.", accent: "Kontrollera detaljerna.", lede: "En oberoende LoloBuy-guide för produkter, kvalitetskontroll och paketplanering i USA och Europa.", browse: "Utforska kalkylarket", source: "Officiell process kontrollerad" },
  da: { title: "Find signalet.", accent: "Tjek detaljen.", lede: "En uafhængig LoloBuy-guide til produkter, kvalitetskontrol og pakkeplanlægning i USA og Europa.", browse: "Udforsk regnearket", source: "Officiel proces kontrolleret" },
  no: { title: "Finn signalet.", accent: "Sjekk detaljene.", lede: "En uavhengig LoloBuy-guide for produkter, kvalitetskontroll og pakkeplanlegging i USA og Europa.", browse: "Utforsk regnearket", source: "Offisiell prosess kontrollert" },
  fi: { title: "Löydä signaali.", accent: "Tarkista yksityiskohdat.", lede: "Riippumaton LoloBuy-opas tuotteisiin, laaduntarkastukseen ja pakettien suunnitteluun Yhdysvalloissa ja Euroopassa.", browse: "Selaa taulukkoa", source: "Virallinen prosessi tarkistettu" },
  cs: { title: "Najděte signál.", accent: "Prověřte detail.", lede: "Nezávislý průvodce LoloBuy pro produkty, kontrolu kvality a plánování zásilek v USA a Evropě.", browse: "Procházet tabulku", source: "Oficiální proces ověřen" },
  ro: { title: "Găsește semnalul.", accent: "Verifică detaliul.", lede: "Un ghid independent LoloBuy pentru produse, controlul calității și planificarea coletelor în SUA și Europa.", browse: "Explorează tabelul", source: "Proces oficial verificat" },
  hu: { title: "Találd meg a jelet.", accent: "Ellenőrizd a részleteket.", lede: "Független LoloBuy útmutató termékekhez, minőségellenőrzéshez és csomagtervezéshez az USA-ban és Európában.", browse: "Táblázat böngészése", source: "Hivatalos folyamat ellenőrizve" },
  el: { title: "Βρείτε το σήμα.", accent: "Ελέγξτε τη λεπτομέρεια.", lede: "Ένας ανεξάρτητος οδηγός LoloBuy για προϊόντα, ποιοτικό έλεγχο και σχεδιασμό δεμάτων στις ΗΠΑ και την Ευρώπη.", browse: "Περιήγηση στο φύλλο", source: "Ελέγχθηκε η επίσημη διαδικασία" },
  tr: { title: "Sinyali bulun.", accent: "Ayrıntıyı kontrol edin.", lede: "ABD ve Avrupa'daki kullanıcılar için bağımsız LoloBuy ürün, kalite kontrol ve paket planlama rehberi.", browse: "Tabloyu keşfet", source: "Resmî süreç kontrol edildi" },
  uk: { title: "Знайдіть сигнал.", accent: "Перевірте деталі.", lede: "Незалежний довідник LoloBuy про товари, контроль якості та планування посилок у США та Європі.", browse: "Переглянути таблицю", source: "Офіційний процес перевірено" },
  ru: { title: "Найдите сигнал.", accent: "Проверьте детали.", lede: "Независимый гид LoloBuy по товарам, проверке качества и планированию посылок для США и Европы.", browse: "Открыть таблицу", source: "Официальный процесс проверен" },
  ja: { title: "シグナルを見つける。", accent: "細部を確認する。", lede: "米国と欧州の利用者向けに、商品、品質確認、荷物計画をまとめた独立系LoloBuyガイドです。", browse: "スプレッドシートを見る", source: "公式プロセス確認済み" },
  ko: { title: "신호를 찾으세요.", accent: "세부 사항을 확인하세요.", lede: "미국과 유럽 사용자를 위한 독립적인 LoloBuy 상품, 품질 확인 및 배송 계획 가이드입니다.", browse: "스프레드시트 둘러보기", source: "공식 절차 확인 완료" },
  zh: { title: "找到有效信息。", accent: "核对每个细节。", lede: "面向美国和欧洲用户的独立 LoloBuy 商品表格、质检与包裹规划指南。", browse: "浏览商品表格", source: "已核对官方流程" },
  ar: { title: "اعثر على الإشارة.", accent: "تحقق من التفاصيل.", lede: "دليل مستقل لمنتجات LoloBuy وفحص الجودة وتخطيط الشحنات للمستخدمين في الولايات المتحدة وأوروبا.", browse: "تصفح الجدول", source: "تمت مراجعة العملية الرسمية" },
  id: { title: "Temukan sinyalnya.", accent: "Periksa detailnya.", lede: "Panduan independen LoloBuy untuk produk, pemeriksaan kualitas, dan perencanaan paket di AS dan Eropa.", browse: "Jelajahi spreadsheet", source: "Proses resmi telah diperiksa" },
};

export type HomeSectionCopy = {
  labels: readonly [string, string, string, string, string, string];
  product: readonly [string, string, string];
  intelligence: string;
  categories: readonly [string, string];
  flow: readonly [string, string, string];
  journal: readonly [string, string, string];
  languages: readonly [string, string];
};

export const homeSectionCopy: Record<string, HomeSectionCopy> = {
  en: { labels: ["LIVE PRODUCT DETAILS", "PRODUCT INTELLIGENCE", "THE TEN-DEPARTMENT EDIT", "FROM LINK TO PARCEL", "THE FIELD NOTE", "GLOBAL STRUCTURE"], product: ["Latest from FindSpreadsheet.", "The main site currently labels these products “Latest.” Price and item ID come from each linked detail page; this is not a sales, authenticity or quality ranking.", "VIEW ALL PRODUCTS"], intelligence: "A spreadsheet should answer more than “where is the link?”", categories: ["Browse by what you need to inspect.", "Each department opens its matching FindSpreadsheet category. The review lens highlights details to check before an item reaches a parcel."], flow: ["Four stages. The decision at each one.", "Checked against LoloBuy's public pages on 10 Aug 2026. Each stage separates the platform's published workflow from the checks you should make yourself. Live account details control current fees, routes, restrictions and parcel estimates.", "READ THE COMPLETE BEGINNER GUIDE"], journal: ["How to read warehouse photos without overclaiming what they prove.", "12 minute guide • QC methodology • Reviewed Aug 2026", "READ THE GUIDE"], languages: ["One premium layout. Twenty-four locale routes.", "Every locale uses the same sections, order and responsive layout as English. Only the language changes."] },
  de: { labels: ["AKTUELLE PRODUKTDETAILS", "PRODUKTWISSEN", "ZEHN PRODUKTBEREICHE", "VOM LINK ZUM PAKET", "PRAXISNOTIZ", "GLOBALE STRUKTUR"], product: ["Neu bei FindSpreadsheet.", "Die Hauptseite kennzeichnet diese Produkte als „Neu“. Preis und Artikel-ID stammen von der jeweiligen Detailseite; dies ist keine Verkaufs-, Echtheits- oder Qualitätsrangliste.", "ALLE PRODUKTE"], intelligence: "Eine Tabelle sollte mehr beantworten als nur: „Wo ist der Link?“", categories: ["Nach Prüfbedarf auswählen.", "Jeder Bereich öffnet die passende FindSpreadsheet-Kategorie. Der Prüfhinweis zeigt, welche Details vor dem Paketversand wichtig sind."], flow: ["Vier Momente. Vier Entscheidungen.", "Bedingungen, Gebühren und Versandlinien können sich ändern. Zeitabhängige Angaben sind datiert und mit Primärquellen verknüpft.", "VOLLSTÄNDIGEN EINSTEIGERLEITFADEN LESEN"], journal: ["Lagerfotos lesen, ohne mehr zu behaupten, als sie zeigen.", "12-Minuten-Leitfaden • QC-Methode • geprüft August 2026", "LEITFADEN LESEN"], languages: ["Ein Premium-Layout. Vierundzwanzig Sprachrouten.", "Alle Sprachen verwenden dieselben Bereiche, dieselbe Reihenfolge und dasselbe responsive Layout wie Englisch. Nur der Text ändert sich."] },
  fr: { labels: ["DÉTAILS PRODUITS RÉCENTS", "INTELLIGENCE PRODUIT", "DIX CATÉGORIES", "DU LIEN AU COLIS", "NOTE PRATIQUE", "STRUCTURE MONDIALE"], product: ["Nouveautés FindSpreadsheet.", "Le site principal présente ces produits comme « récents ». Le prix et l'identifiant viennent de chaque fiche liée ; il ne s'agit pas d'un classement de ventes, d'authenticité ou de qualité.", "VOIR TOUS LES PRODUITS"], intelligence: "Un tableau doit répondre à plus que « où est le lien ? »", categories: ["Parcourir selon les points à contrôler.", "Chaque catégorie ouvre la rubrique FindSpreadsheet correspondante. Le repère de contrôle indique les détails à examiner avant la mise en colis."], flow: ["Quatre moments. Quatre décisions.", "Les conditions, frais et lignes d'expédition peuvent changer. Les informations variables sont datées et reliées à des sources primaires.", "LIRE LE GUIDE DÉBUTANT COMPLET"], journal: ["Lire les photos d'entrepôt sans leur faire dire plus qu'elles ne prouvent.", "Guide de 12 min • méthode QC • vérifié en août 2026", "LIRE LE GUIDE"], languages: ["Une mise en page premium. Vingt-quatre langues.", "Chaque langue conserve les mêmes sections, le même ordre et la même mise en page responsive que l'anglais. Seul le texte change."] },
  es: { labels: ["DETALLES DE PRODUCTOS RECIENTES", "INTELIGENCIA DE PRODUCTO", "DIEZ CATEGORÍAS", "DEL ENLACE AL PAQUETE", "NOTA PRÁCTICA", "ESTRUCTURA GLOBAL"], product: ["Lo último de FindSpreadsheet.", "El sitio principal marca estos productos como «recientes». El precio y el ID proceden de cada ficha enlazada; no es una clasificación de ventas, autenticidad o calidad.", "VER TODOS LOS PRODUCTOS"], intelligence: "Una hoja debe responder más que «¿dónde está el enlace?»", categories: ["Explora según lo que necesitas revisar.", "Cada categoría abre la sección correspondiente de FindSpreadsheet. La guía de revisión señala qué detalles comprobar antes de preparar el paquete."], flow: ["Cuatro momentos. Cuatro decisiones.", "Las condiciones, tarifas y líneas de envío pueden cambiar. Las afirmaciones variables tienen fecha y fuente primaria.", "LEER LA GUÍA COMPLETA PARA PRINCIPIANTES"], journal: ["Cómo leer fotos de almacén sin afirmar más de lo que demuestran.", "Guía de 12 min • método QC • revisada en agosto de 2026", "LEER LA GUÍA"], languages: ["Un diseño premium. Veinticuatro idiomas.", "Todos los idiomas conservan las mismas secciones, orden y diseño adaptable que el inglés. Solo cambia el texto."] },
  it: { labels: ["DETTAGLI PRODOTTI RECENTI", "INTELLIGENZA DI PRODOTTO", "DIECI CATEGORIE", "DAL LINK AL PACCO", "NOTA PRATICA", "STRUTTURA GLOBALE"], product: ["Le novità di FindSpreadsheet.", "Il sito principale indica questi prodotti come “recenti”. Prezzo e ID provengono dalla scheda collegata; non è una classifica di vendite, autenticità o qualità.", "VEDI TUTTI I PRODOTTI"], intelligence: "Un foglio deve rispondere a più di “dov'è il link?”", categories: ["Esplora in base a ciò che devi controllare.", "Ogni categoria apre la sezione FindSpreadsheet corrispondente. Il criterio di verifica evidenzia i dettagli da controllare prima del pacco."], flow: ["Quattro momenti. Quattro decisioni.", "Condizioni, costi e linee di spedizione possono cambiare. Le informazioni variabili sono datate e collegate a fonti primarie.", "LEGGI LA GUIDA COMPLETA"], journal: ["Come leggere le foto di magazzino senza attribuire loro prove che non offrono.", "Guida di 12 min • metodo QC • verificata agosto 2026", "LEGGI LA GUIDA"], languages: ["Un layout premium. Ventiquattro lingue.", "Ogni lingua mantiene sezioni, ordine e layout responsive dell'inglese. Cambia soltanto il testo."] },
  nl: { labels: ["NIEUWSTE PRODUCTDETAILS", "PRODUCTINZICHT", "TIEN CATEGORIEËN", "VAN LINK TOT PAKKET", "PRAKTIJKNOTITIE", "WERELDWIJDE STRUCTUUR"], product: ["Nieuw op FindSpreadsheet.", "De hoofdsite noemt deze producten ‘Nieuw’. Prijs en artikel-ID komen van de gekoppelde detailpagina; dit is geen ranglijst voor verkoop, echtheid of kwaliteit.", "ALLE PRODUCTEN"], intelligence: "Een spreadsheet moet meer beantwoorden dan ‘waar is de link?’", categories: ["Blader op wat je wilt controleren.", "Elke categorie opent de overeenkomstige FindSpreadsheet-rubriek. De controlelens toont welke details vóór verzending aandacht verdienen."], flow: ["Vier momenten. Vier beslissingen.", "Voorwaarden, kosten en verzendlijnen kunnen wijzigen. Tijdgevoelige beweringen zijn gedateerd en gekoppeld aan primaire bronnen.", "LEES DE VOLLEDIGE BEGINNERSGIDS"], journal: ["Magazijnfoto's lezen zonder meer te claimen dan ze aantonen.", "Gids van 12 min • QC-methode • bekeken augustus 2026", "LEES DE GIDS"], languages: ["Eén premium lay-out. Vierentwintig talen.", "Elke taal gebruikt dezelfde secties, volgorde en responsieve lay-out als Engels. Alleen de tekst verandert."] },
  pt: { labels: ["DETALHES DE PRODUTOS RECENTES", "INTELIGÊNCIA DE PRODUTO", "DEZ CATEGORIAS", "DO LINK À ENCOMENDA", "NOTA PRÁTICA", "ESTRUTURA GLOBAL"], product: ["Novidades da FindSpreadsheet.", "O site principal identifica estes produtos como “recentes”. Preço e ID vêm da página ligada; não é uma classificação de vendas, autenticidade ou qualidade.", "VER TODOS OS PRODUTOS"], intelligence: "Uma planilha deve responder a mais do que “onde está o link?”", categories: ["Explore pelo que precisa de verificar.", "Cada categoria abre a secção correspondente da FindSpreadsheet. A nota de verificação destaca os detalhes a rever antes do envio."], flow: ["Quatro momentos. Quatro decisões.", "Condições, taxas e linhas de envio podem mudar. Informações variáveis são datadas e ligadas a fontes primárias.", "LER O GUIA COMPLETO PARA INICIANTES"], journal: ["Como ler fotos de armazém sem afirmar mais do que demonstram.", "Guia de 12 min • método QC • revisto em agosto de 2026", "LER O GUIA"], languages: ["Um layout premium. Vinte e quatro idiomas.", "Todos os idiomas mantêm as mesmas secções, ordem e layout responsivo do inglês. Apenas o texto muda."] },
  pl: { labels: ["NAJNOWSZE SZCZEGÓŁY PRODUKTÓW", "WIEDZA O PRODUKTACH", "DZIESIĘĆ KATEGORII", "OD LINKU DO PACZKI", "NOTATKA PRAKTYCZNA", "STRUKTURA GLOBALNA"], product: ["Nowości z FindSpreadsheet.", "Strona główna oznacza te produkty jako „Najnowsze”. Cena i ID pochodzą z podlinkowanych kart; nie jest to ranking sprzedaży, autentyczności ani jakości.", "WSZYSTKIE PRODUKTY"], intelligence: "Arkusz powinien odpowiadać na więcej niż „gdzie jest link?”", categories: ["Przeglądaj według tego, co chcesz sprawdzić.", "Każda kategoria otwiera odpowiedni dział FindSpreadsheet. Wskazówka kontroli pokazuje, co sprawdzić przed wysyłką."], flow: ["Cztery momenty. Cztery decyzje.", "Warunki, opłaty i linie wysyłkowe mogą się zmieniać. Zmienne informacje mają datę i źródło pierwotne.", "PRZECZYTAJ PEŁNY PORADNIK"], journal: ["Jak czytać zdjęcia magazynowe bez nadinterpretacji.", "Poradnik 12 min • metoda QC • sprawdzono w sierpniu 2026", "CZYTAJ PORADNIK"], languages: ["Jeden układ premium. Dwadzieścia cztery języki.", "Każdy język zachowuje te same sekcje, kolejność i układ responsywny co angielski. Zmienia się tylko tekst."] },
  sv: { labels: ["SENASTE PRODUKTDETALJER", "PRODUKTKUNSKAP", "TIO KATEGORIER", "FRÅN LÄNK TILL PAKET", "PRAKTISK NOT", "GLOBAL STRUKTUR"], product: ["Senast på FindSpreadsheet.", "Huvudsidan märker dessa produkter som ”Senaste”. Pris och artikel-ID kommer från den länkade detaljsidan; detta är ingen ranking av försäljning, äkthet eller kvalitet.", "VISA ALLA PRODUKTER"], intelligence: "Ett kalkylark ska svara på mer än ”var är länken?”", categories: ["Bläddra efter vad du behöver kontrollera.", "Varje kategori öppnar motsvarande avdelning på FindSpreadsheet. Kontrolltipset visar vilka detaljer som bör granskas före paketering."], flow: ["Fyra ögonblick. Fyra beslut.", "Villkor, avgifter och fraktlinjer kan ändras. Tidskänsliga uppgifter är daterade och kopplade till primärkällor.", "LÄS HELA NYBÖRJARGUIDEN"], journal: ["Så läser du lagerfoton utan att påstå mer än de visar.", "12 min guide • QC-metod • granskad augusti 2026", "LÄS GUIDEN"], languages: ["En premiumlayout. Tjugofyra språk.", "Alla språk använder samma sektioner, ordning och responsiva layout som engelska. Endast texten ändras."] },
  da: { labels: ["SENESTE PRODUKTDETALJER", "PRODUKTINDSIGT", "TI KATEGORIER", "FRA LINK TIL PAKKE", "PRAKTISK NOTE", "GLOBAL STRUKTUR"], product: ["Seneste fra FindSpreadsheet.", "Hovedsitet mærker disse produkter som “Seneste”. Pris og vare-ID kommer fra den linkede detaljeside; det er ikke en rangering af salg, ægthed eller kvalitet.", "SE ALLE PRODUKTER"], intelligence: "Et regneark bør besvare mere end “hvor er linket?”", categories: ["Se efter det, du skal kontrollere.", "Hver kategori åbner den tilsvarende FindSpreadsheet-afdeling. Kontrolnotatet fremhæver detaljer, der bør gennemgås før pakning."], flow: ["Fire øjeblikke. Fire beslutninger.", "Vilkår, gebyrer og fragtruter kan ændres. Tidsfølsomme oplysninger er dateret og knyttet til primærkilder.", "LÆS HELE BEGYNDERGUIDEN"], journal: ["Sådan læser du lagerfotos uden at påstå mere, end de viser.", "12 min guide • QC-metode • gennemgået august 2026", "LÆS GUIDEN"], languages: ["Ét premiumlayout. Fireogtyve sprog.", "Alle sprog bruger de samme sektioner, rækkefølge og responsive layout som engelsk. Kun teksten ændres."] },
  no: { labels: ["SISTE PRODUKTDETALJER", "PRODUKTINNSIKT", "TI KATEGORIER", "FRA LENKE TIL PAKKE", "PRAKTISK NOTAT", "GLOBAL STRUKTUR"], product: ["Siste fra FindSpreadsheet.", "Hovedsiden merker disse produktene som «Siste». Pris og vare-ID kommer fra detaljsiden; dette er ikke en rangering av salg, ekthet eller kvalitet.", "SE ALLE PRODUKTER"], intelligence: "Et regneark bør svare på mer enn «hvor er lenken?»", categories: ["Bla etter det du må kontrollere.", "Hver kategori åpner tilsvarende FindSpreadsheet-avdeling. Kontrolltipset fremhever detaljer som bør vurderes før pakking."], flow: ["Fire øyeblikk. Fire beslutninger.", "Vilkår, gebyrer og fraktruter kan endres. Tidsfølsomme opplysninger er datert og knyttet til primærkilder.", "LES HELE NYBEGYNNERGUIDEN"], journal: ["Slik leser du lagerbilder uten å hevde mer enn de viser.", "12 min guide • QC-metode • gjennomgått august 2026", "LES GUIDEN"], languages: ["Én premiumlayout. Tjuefire språk.", "Alle språk bruker de samme delene, rekkefølgen og det responsive oppsettet som engelsk. Bare teksten endres."] },
  fi: { labels: ["UUSIMMAT TUOTETIEDOT", "TUOTETIETO", "KYMMENEN LUOKKAA", "LINKISTÄ PAKETIKSI", "KÄYTÄNNÖN MUISTIO", "GLOBAALI RAKENNE"], product: ["Uusinta FindSpreadsheetissa.", "Pääsivusto merkitsee nämä tuotteet uusiksi. Hinta ja tuotetunnus tulevat linkitetyltä sivulta; tämä ei ole myynnin, aitouden tai laadun sijoitus.", "KAIKKI TUOTTEET"], intelligence: "Taulukon pitää vastata muuhunkin kuin ”missä linkki on?”", categories: ["Selaa tarkistettavan asian mukaan.", "Jokainen luokka avaa vastaavan FindSpreadsheet-osaston. Tarkistusvihje kertoo, mihin yksityiskohtiin kannattaa kiinnittää huomiota ennen pakkaamista."], flow: ["Neljä hetkeä. Neljä päätöstä.", "Ehdot, maksut ja kuljetuslinjat voivat muuttua. Aikaherkät tiedot on päivätty ja liitetty ensisijaisiin lähteisiin.", "LUE KOKO ALOITTELIJAN OPAS"], journal: ["Näin luet varastokuvia väittämättä enempää kuin ne osoittavat.", "12 min opas • QC-menetelmä • tarkistettu elokuussa 2026", "LUE OPAS"], languages: ["Yksi premium-ulkoasu. Kaksikymmentäneljä kieltä.", "Kaikissa kielissä on samat osiot, järjestys ja responsiivinen ulkoasu kuin englannissa. Vain teksti vaihtuu."] },
  cs: { labels: ["NEJNOVĚJŠÍ DETAILY PRODUKTŮ", "PRODUKTOVÉ INFORMACE", "DESET KATEGORIÍ", "OD ODKAZU K BALÍKU", "PRAKTICKÁ POZNÁMKA", "GLOBÁLNÍ STRUKTURA"], product: ["Novinky z FindSpreadsheet.", "Hlavní web označuje tyto produkty jako „Nejnovější“. Cena a ID pocházejí z propojené stránky; nejde o žebříček prodeje, pravosti ani kvality.", "VŠECHNY PRODUKTY"], intelligence: "Tabulka má odpovědět na víc než jen „kde je odkaz?“", categories: ["Procházejte podle toho, co potřebujete zkontrolovat.", "Každá kategorie otevře odpovídající oddělení FindSpreadsheet. Kontrolní tip upozorňuje na detaily před zabalením."], flow: ["Čtyři okamžiky. Čtyři rozhodnutí.", "Podmínky, poplatky a přepravní linky se mohou měnit. Časově citlivé údaje jsou datované a propojené s primárními zdroji.", "PŘEČÍST CELÝ PRŮVODCE"], journal: ["Jak číst skladové fotografie bez přehnaných závěrů.", "Průvodce 12 min • metoda QC • kontrola srpen 2026", "PŘEČÍST PRŮVODCE"], languages: ["Jeden prémiový vzhled. Dvacet čtyři jazyků.", "Každý jazyk zachovává stejné sekce, pořadí a responzivní vzhled jako angličtina. Mění se pouze text."] },
  ro: { labels: ["CELE MAI NOI DETALII DE PRODUS", "INFORMAȚII DESPRE PRODUSE", "ZECE CATEGORII", "DE LA LINK LA COLET", "NOTĂ PRACTICĂ", "STRUCTURĂ GLOBALĂ"], product: ["Noutăți din FindSpreadsheet.", "Site-ul principal marchează aceste produse ca „Noi”. Prețul și ID-ul provin din pagina conectată; nu este un clasament de vânzări, autenticitate sau calitate.", "VEZI TOATE PRODUSELE"], intelligence: "Un tabel trebuie să răspundă la mai mult decât „unde este linkul?”", categories: ["Navighează după ceea ce trebuie verificat.", "Fiecare categorie deschide departamentul FindSpreadsheet corespunzător. Indicația de control evidențiază detaliile de revizuit înainte de colet."], flow: ["Patru momente. Patru decizii.", "Condițiile, taxele și liniile de transport se pot schimba. Informațiile sensibile la timp sunt datate și legate de surse primare.", "CITEȘTE GHIDUL COMPLET"], journal: ["Cum citești fotografiile de depozit fără concluzii exagerate.", "Ghid de 12 min • metodă QC • verificat august 2026", "CITEȘTE GHIDUL"], languages: ["Un singur layout premium. Douăzeci și patru de limbi.", "Toate limbile păstrează aceleași secțiuni, ordine și aspect adaptiv ca engleza. Se schimbă doar textul."] },
  hu: { labels: ["LEGÚJABB TERMÉKADATOK", "TERMÉKISMERET", "TÍZ KATEGÓRIA", "A LINKTŐL A CSOMAGIG", "GYAKORLATI JEGYZET", "GLOBÁLIS STRUKTÚRA"], product: ["Újdonságok a FindSpreadsheeten.", "A főoldal ezeket „Legújabb” termékként jelöli. Az ár és az azonosító a kapcsolt termékoldalról származik; ez nem eladási, eredetiségi vagy minőségi rangsor.", "ÖSSZES TERMÉK"], intelligence: "Egy táblázatnak többre kell válaszolnia, mint hogy „hol a link?”", categories: ["Böngéssz az ellenőrizendő részletek szerint.", "Minden kategória a megfelelő FindSpreadsheet-részlegre vezet. Az ellenőrzési szempont megmutatja, mit érdemes átnézni csomagolás előtt."], flow: ["Négy pillanat. Négy döntés.", "A feltételek, díjak és szállítási útvonalak változhatnak. Az időérzékeny állítások dátummal és elsődleges forrással szerepelnek.", "TELJES KEZDŐ ÚTMUTATÓ"], journal: ["Raktári fotók olvasása túlzó következtetések nélkül.", "12 perces útmutató • QC módszer • ellenőrizve: 2026. augusztus", "ÚTMUTATÓ OLVASÁSA"], languages: ["Egy prémium elrendezés. Huszonnégy nyelv.", "Minden nyelv az angol változattal azonos szakaszokat, sorrendet és reszponzív elrendezést használja. Csak a szöveg változik."] },
  el: { labels: ["ΝΕΟΤΕΡΑ ΣΤΟΙΧΕΙΑ ΠΡΟΪΟΝΤΩΝ", "ΓΝΩΣΗ ΠΡΟΪΟΝΤΩΝ", "ΔΕΚΑ ΚΑΤΗΓΟΡΙΕΣ", "ΑΠΟ ΤΟΝ ΣΥΝΔΕΣΜΟ ΣΤΟ ΔΕΜΑ", "ΠΡΑΚΤΙΚΗ ΣΗΜΕΙΩΣΗ", "ΠΑΓΚΟΣΜΙΑ ΔΟΜΗ"], product: ["Νέα στο FindSpreadsheet.", "Ο κύριος ιστότοπος χαρακτηρίζει αυτά τα προϊόντα «Νέα». Τιμή και ID προέρχονται από τη συνδεδεμένη σελίδα· δεν είναι κατάταξη πωλήσεων, γνησιότητας ή ποιότητας.", "ΟΛΑ ΤΑ ΠΡΟΪΟΝΤΑ"], intelligence: "Ένα φύλλο πρέπει να απαντά σε περισσότερα από το «πού είναι ο σύνδεσμος;»", categories: ["Περιηγηθείτε με βάση όσα πρέπει να ελέγξετε.", "Κάθε κατηγορία ανοίγει το αντίστοιχο τμήμα του FindSpreadsheet. Η σημείωση ελέγχου δείχνει τις λεπτομέρειες πριν τη συσκευασία."], flow: ["Τέσσερις στιγμές. Τέσσερις αποφάσεις.", "Όροι, χρεώσεις και γραμμές αποστολής μπορεί να αλλάξουν. Οι χρονικά ευαίσθητες πληροφορίες φέρουν ημερομηνία και πρωτογενή πηγή.", "ΔΙΑΒΑΣΤΕ ΤΟΝ ΠΛΗΡΗ ΟΔΗΓΟ"], journal: ["Πώς να διαβάζετε φωτογραφίες αποθήκης χωρίς υπερβολικά συμπεράσματα.", "Οδηγός 12 λεπτών • μέθοδος QC • έλεγχος Αύγουστος 2026", "ΔΙΑΒΑΣΤΕ ΤΟΝ ΟΔΗΓΟ"], languages: ["Μία premium διάταξη. Είκοσι τέσσερις γλώσσες.", "Κάθε γλώσσα διατηρεί τις ίδιες ενότητες, σειρά και responsive διάταξη με τα αγγλικά. Αλλάζει μόνο το κείμενο."] },
  tr: { labels: ["EN YENİ ÜRÜN DETAYLARI", "ÜRÜN BİLGİSİ", "ON KATEGORİ", "BAĞLANTIDAN PAKETE", "PRATİK NOT", "KÜRESEL YAPI"], product: ["FindSpreadsheet'teki yeniler.", "Ana site bu ürünleri “En Yeni” olarak işaretliyor. Fiyat ve ürün kimliği bağlı detay sayfasından gelir; bu bir satış, orijinallik veya kalite sıralaması değildir.", "TÜM ÜRÜNLER"], intelligence: "Bir tablo “bağlantı nerede?” sorusundan fazlasını yanıtlamalıdır.", categories: ["Kontrol etmeniz gereken noktaya göre göz atın.", "Her kategori ilgili FindSpreadsheet bölümünü açar. Kontrol notu, paketlenmeden önce bakılacak ayrıntıları vurgular."], flow: ["Dört an. Dört karar.", "Koşullar, ücretler ve kargo hatları değişebilir. Zamana bağlı bilgiler tarihli ve birincil kaynaklara bağlıdır.", "TAM BAŞLANGIÇ REHBERİNİ OKU"], journal: ["Depo fotoğraflarını kanıtladığından fazlasını söylemeden okuma.", "12 dk rehber • QC yöntemi • Ağustos 2026'da incelendi", "REHBERİ OKU"], languages: ["Tek premium düzen. Yirmi dört dil.", "Her dil İngilizceyle aynı bölümleri, sırayı ve duyarlı düzeni kullanır. Yalnızca metin değişir."] },
  uk: { labels: ["НАЙНОВІШІ ДАНІ ТОВАРІВ", "ЗНАННЯ ПРО ТОВАРИ", "ДЕСЯТЬ КАТЕГОРІЙ", "ВІД ПОСИЛАННЯ ДО ПОСИЛКИ", "ПРАКТИЧНА НОТАТКА", "ГЛОБАЛЬНА СТРУКТУРА"], product: ["Новинки FindSpreadsheet.", "Головний сайт позначає ці товари як «Нові». Ціна й ID взяті з пов'язаної сторінки; це не рейтинг продажів, справжності чи якості.", "УСІ ТОВАРИ"], intelligence: "Таблиця має відповідати не лише на запитання «де посилання?»", categories: ["Переглядайте за тим, що потрібно перевірити.", "Кожна категорія відкриває відповідний розділ FindSpreadsheet. Підказка виділяє деталі для перевірки перед пакуванням."], flow: ["Чотири моменти. Чотири рішення.", "Умови, тарифи й лінії доставки можуть змінюватися. Чутливі до часу дані датовані та пов'язані з першоджерелами.", "ЧИТАТИ ПОВНИЙ ПОСІБНИК"], journal: ["Як читати складські фото без перебільшених висновків.", "Посібник 12 хв • метод QC • перевірено в серпні 2026", "ЧИТАТИ ПОСІБНИК"], languages: ["Один преміальний макет. Двадцять чотири мови.", "Усі мови використовують ті самі розділи, порядок і адаптивний макет, що й англійська. Змінюється лише текст."] },
  ru: { labels: ["НОВЫЕ ДАННЫЕ О ТОВАРАХ", "ЗНАНИЯ О ТОВАРАХ", "ДЕСЯТЬ КАТЕГОРИЙ", "ОТ ССЫЛКИ ДО ПОСЫЛКИ", "ПРАКТИЧЕСКАЯ ЗАМЕТКА", "ГЛОБАЛЬНАЯ СТРУКТУРА"], product: ["Новинки FindSpreadsheet.", "Главный сайт отмечает эти товары как «Новые». Цена и ID взяты с соответствующей страницы; это не рейтинг продаж, подлинности или качества.", "ВСЕ ТОВАРЫ"], intelligence: "Таблица должна отвечать не только на вопрос «где ссылка?»", categories: ["Выбирайте по тому, что нужно проверить.", "Каждая категория открывает соответствующий раздел FindSpreadsheet. Подсказка выделяет детали для проверки до упаковки."], flow: ["Четыре момента. Четыре решения.", "Условия, тарифы и линии доставки могут меняться. Чувствительные ко времени данные датированы и связаны с первоисточниками.", "ЧИТАТЬ ПОЛНОЕ РУКОВОДСТВО"], journal: ["Как читать складские фото без преувеличенных выводов.", "Руководство 12 мин • метод QC • проверено в августе 2026", "ЧИТАТЬ РУКОВОДСТВО"], languages: ["Один премиальный макет. Двадцать четыре языка.", "Все языки используют те же разделы, порядок и адаптивный макет, что и английский. Меняется только текст."] },
  ja: { labels: ["最新の商品詳細", "商品リサーチ", "10カテゴリー", "リンクから荷物まで", "実践ノート", "グローバル構成"], product: ["FindSpreadsheetの新着商品。", "メインサイトで「新着」と表示されている商品です。価格と商品IDはリンク先の商品ページから取得しており、売上・真贋・品質の順位ではありません。", "すべての商品を見る"], intelligence: "商品表は「リンクはどこ？」以上の疑問に答えるべきです。", categories: ["確認したいポイントから選ぶ。", "各カテゴリーはFindSpreadsheetの対応する売り場に移動します。確認ポイントは、荷物にまとめる前に見るべき項目を示します。"], flow: ["4つの場面。4つの判断。", "条件、手数料、配送ルートは変わる場合があります。時期で変わる情報には確認日と一次情報源を付けています。", "初心者ガイドをすべて読む"], journal: ["倉庫写真が示す範囲を超えて判断しない読み方。", "12分ガイド • QC調査方法 • 2026年8月確認", "ガイドを読む"], languages: ["ひとつのプレミアムレイアウト。24言語。", "すべての言語で英語版と同じセクション、順序、レスポンシブ配置を使用します。変わるのは文字だけです。"] },
  ko: { labels: ["최신 상품 상세", "상품 리서치", "10개 카테고리", "링크에서 소포까지", "실전 노트", "글로벌 구조"], product: ["FindSpreadsheet의 최신 상품.", "메인 사이트에서 ‘최신’으로 표시한 상품입니다. 가격과 상품 ID는 연결된 상세 페이지에서 가져오며 판매량·정품·품질 순위가 아닙니다.", "모든 상품 보기"], intelligence: "상품표는 ‘링크가 어디에 있나요?’보다 더 많은 질문에 답해야 합니다.", categories: ["확인할 항목을 기준으로 둘러보세요.", "각 카테고리는 FindSpreadsheet의 해당 분류로 이동합니다. 검토 포인트는 포장 전에 살펴볼 세부 사항을 안내합니다."], flow: ["네 순간. 네 번의 결정.", "조건, 수수료, 배송 노선은 바뀔 수 있습니다. 시기에 따라 달라지는 정보에는 날짜와 1차 출처를 표시합니다.", "초보자 가이드 전체 읽기"], journal: ["창고 사진이 보여 주는 범위를 넘어서 단정하지 않는 방법.", "12분 가이드 • QC 방법론 • 2026년 8월 검토", "가이드 읽기"], languages: ["하나의 프리미엄 레이아웃. 24개 언어.", "모든 언어는 영어판과 동일한 섹션, 순서, 반응형 배치를 사용합니다. 바뀌는 것은 텍스트뿐입니다."] },
  zh: { labels: ["最新商品详情", "商品研究方法", "十大商品分类", "从链接到国际包裹", "实用检查笔记", "全球多语言结构"], product: ["FindSpreadsheet 最新收录商品。", "主站目前将这些商品标记为“最新”。价格与商品 ID 均来自对应详情页；这里不代表销量、真伪或质量排名。", "查看全部商品"], intelligence: "商品表格不应只回答“链接在哪里？”", categories: ["按照需要检查的重点浏览商品。", "每个分类都会打开 FindSpreadsheet 对应的真实分类页。检查提示用于说明商品进入包裹前应重点核对的细节。"], flow: ["四个处理阶段，每一步都要做出明确判断。", "内容已按 2026 年 8 月 10 日可见的 LoloBuy 官方公开页面核对。每一步都把平台公开流程与用户应自行检查的事项分开说明；当前费用、线路、限制和包裹估算仍以实时账户为准。", "阅读完整新手指南"], journal: ["怎样查看仓库照片，并避免作出照片无法支持的结论。", "12 分钟指南 • 质检方法 • 2026 年 8 月复核", "阅读完整指南"], languages: ["统一的高端版面，覆盖 24 种语言。", "所有语言版本都沿用英语版相同的板块、顺序和响应式布局，只更换文字，不改变页面结构。"] },
  ar: { labels: ["أحدث تفاصيل المنتجات", "بحث المنتجات", "عشر فئات", "من الرابط إلى الطرد", "ملاحظة عملية", "هيكل عالمي"], product: ["الأحدث في FindSpreadsheet.", "يصنّف الموقع الرئيسي هذه المنتجات ضمن «الأحدث». السعر ومعرّف المنتج مأخوذان من صفحة التفاصيل المرتبطة؛ وليس هذا ترتيبًا للمبيعات أو الأصالة أو الجودة.", "عرض كل المنتجات"], intelligence: "يجب أن يجيب الجدول عن أكثر من سؤال «أين الرابط؟»", categories: ["تصفح وفق ما تحتاج إلى فحصه.", "تفتح كل فئة قسم FindSpreadsheet المطابق. وتوضح ملاحظة الفحص التفاصيل المهمة قبل تجهيز الطرد."], flow: ["أربع لحظات. أربعة قرارات.", "قد تتغير الشروط والرسوم وخطوط الشحن. المعلومات الحساسة للوقت مؤرخة ومرتبطة بمصادر أولية.", "قراءة دليل المبتدئين الكامل"], journal: ["كيفية قراءة صور المستودع دون ادعاء ما لا تثبته.", "دليل 12 دقيقة • منهج QC • روجع في أغسطس 2026", "قراءة الدليل"], languages: ["تصميم مميز واحد. أربع وعشرون لغة.", "تستخدم جميع اللغات الأقسام والترتيب والتخطيط المتجاوب نفسه في النسخة الإنجليزية. يتغير النص فقط."] },
  id: { labels: ["DETAIL PRODUK TERBARU", "RISET PRODUK", "SEPULUH KATEGORI", "DARI TAUTAN KE PAKET", "CATATAN PRAKTIS", "STRUKTUR GLOBAL"], product: ["Terbaru dari FindSpreadsheet.", "Situs utama menandai produk ini sebagai “Terbaru”. Harga dan ID berasal dari halaman detail terkait; ini bukan peringkat penjualan, keaslian, atau kualitas.", "LIHAT SEMUA PRODUK"], intelligence: "Spreadsheet harus menjawab lebih dari sekadar “di mana tautannya?”", categories: ["Telusuri berdasarkan hal yang perlu diperiksa.", "Setiap kategori membuka bagian FindSpreadsheet yang sesuai. Catatan pemeriksaan menyoroti detail yang perlu ditinjau sebelum pengemasan."], flow: ["Empat momen. Empat keputusan.", "Ketentuan, biaya, dan jalur pengiriman dapat berubah. Informasi yang peka waktu diberi tanggal dan terhubung ke sumber utama.", "BACA PANDUAN PEMULA LENGKAP"], journal: ["Cara membaca foto gudang tanpa menyimpulkan lebih dari yang dibuktikan.", "Panduan 12 menit • metode QC • ditinjau Agustus 2026", "BACA PANDUAN"], languages: ["Satu tata letak premium. Dua puluh empat bahasa.", "Semua bahasa memakai bagian, urutan, dan tata letak responsif yang sama dengan bahasa Inggris. Hanya teks yang berubah."] },
};

export type HomeDetailCopy = {
  heroKicker: string;
  proof: readonly [string, string, string];
  productBadge: string;
  productOpen: string;
  productNote: string;
  productReview: string;
  categoryNames: readonly string[];
  categoryLenses: readonly string[];
  visual: readonly [string, string, string, string, string, string];
  cards: readonly [
    readonly [string, string, string, string],
    readonly [string, string, string, string],
    readonly [string, string, string, string],
    readonly [string, string, string]
  ];
  flowSteps: readonly [
    readonly [string, string, string, string],
    readonly [string, string, string, string],
    readonly [string, string, string, string],
    readonly [string, string, string, string]
  ];
  journalItems: readonly [
    readonly [string, string],
    readonly [string, string],
    readonly [string, string],
    readonly [string, string]
  ];
};

export const homeDetailCopy: Record<string, HomeDetailCopy> = {
  en: {
    heroKicker: "THE INDEPENDENT LOLOBUY SPREADSHEET • 2026",
    proof: ["product departments", "locale routes", "unsupported guarantees"],
    productBadge: "MAIN-SITE LATEST",
    productOpen: "OPEN DETAILS",
    productNote: "AUTO-ROLLS · PAUSES ON HOVER OR FOCUS · SWIPE / SCROLL MANUALLY · CLICKS OPEN THE MATCHING MAIN-SITE PRODUCT PAGE",
    productReview: "",
    categoryNames: ["Shoes", "Hoodies / Sweaters", "T-Shirts", "Jackets", "Pants / Shorts", "Headwear", "Accessories", "Jersey", "Electronics", "Other Stuff", "All Products"],
    categoryLenses: ["Sole / shape / sizing", "Weight / cuffs / fit", "Print / fabric / fit", "Build / lining / zip", "Measure / cut / finish", "Shape / brim / sizing", "Finish / scale / use", "Print / badge / fit", "Spec / plug / region", "Size / packing / material", "Complete FindSpreadsheet index"],
    visual: ["QC GUIDE", "Read warehouse photos", "Seven checks for visible evidence", "SOURCE-LED", "QC RESEARCH / 001", "OPEN THE COMPLETE QC GUIDE"],
    cards: [
      ["01 / FIND", "Start with intent.", "Search by category or product phrase, then compare similar rows instead of saving everything.", "OPEN THE COMPLETE PRODUCT INDEX"],
      ["02 / VERIFY", "Look for visible evidence.", "Photos can help with visible construction, shape and flaws. They cannot prove every material or seller claim.", "OPEN QC GUIDE"],
      ["03 / ROUTE", "Plan the parcel.", "Packaging, chargeable weight and available lines affect the final shipping decision.", "OPEN SHIPPING GUIDE"],
      ["OFFICIAL PROCESS", "LoloBuy publicly describes a flow from a submitted product link to warehouse receipt, inspection photos, storage and international parcel handling.", "VIEW SOURCES"],
    ],
    flowSteps: [
      ["PRODUCT LINK & ORDER", "LoloBuy's public process starts with a product link and a purchase request.", "Before paying, verify the seller, exact variant, color, size or measurements, quantity and listing photos. A spreadsheet row is a discovery route—not proof that every listing claim is correct.", "ORDER"],
      ["DOMESTIC DELIVERY & WAREHOUSE", "After purchase, the merchant sends the item to LoloBuy's warehouse for processing.", "Treat seller delivery to the warehouse separately from international shipping. When the item is received, match the product, quantity and selected variant against the order record.", "RECEIVE"],
      ["WAREHOUSE INSPECTION & PHOTOS", "LoloBuy says warehouse quality inspection and photographs are part of its public workflow.", "Use the images to check visible color, shape, seams, print placement, quantity and measurements. Photos do not prove authenticity, hidden condition, exact material composition or long-term durability.", "CHECK"],
      ["STORAGE, PARCEL & TRACKING", "LoloBuy currently advertises up to 90 days of free storage, parcel submission from stored items, global shipping and tracking.", "Before submitting, recheck the live account for packaging, chargeable weight, restrictions, destination eligibility, available lines and current price. Keep the parcel number until delivery is complete.", "SHIP"],
    ],
    journalItems: [
      ["Chargeable weight, explained", "Parcel planning • 9 min"],
      ["Tracking events: a plain-language map", "Shipping • 8 min"],
      ["How our product index is reviewed", "Methodology • 6 min"],
      ["Source checks and corrections", "Update register"],
    ],
  },
  zh: {
    heroKicker: "独立 LOLOBUY 商品表格 • 2026",
    proof: ["个商品分类", "种语言路径", "项无依据保证"],
    productBadge: "主站最新收录",
    productOpen: "打开商品详情",
    productNote: "自动滚动 · 鼠标悬停或键盘聚焦时暂停 · 可手动滑动 · 点击直接打开主站对应商品详情页",
    productReview: "进入主站详情页核对款式、尺寸、图片和当前商品信息。",
    categoryNames: ["鞋类", "卫衣 / 毛衣", "T恤", "夹克外套", "长裤 / 短裤", "帽子", "配饰", "球衣", "电子产品", "其他商品", "全部商品"],
    categoryLenses: ["鞋底 / 版型 / 尺码", "克重 / 袖口 / 合身度", "印花 / 面料 / 尺码", "做工 / 内衬 / 拉链", "尺寸 / 剪裁 / 收边", "帽型 / 帽檐 / 尺码", "表面 / 比例 / 用途", "印花 / 徽章 / 合身度", "规格 / 插头 / 使用地区", "尺寸 / 包装 / 材质", "打开完整 FindSpreadsheet 商品索引"],
    visual: ["质检指南", "如何检查仓库照片", "七项可见细节核对方法", "依据资料核查", "质检研究 / 001", "打开完整质检指南"],
    cards: [
      ["01 / 查找", "先明确自己的需求。", "按照分类或商品关键词搜索，再对比相近商品，不要看到什么就全部收藏。", "打开完整商品索引"],
      ["02 / 核对", "只根据看得见的证据判断。", "仓库照片可以帮助检查外观、版型和明显瑕疵，但不能证明所有材质、真伪或卖家描述。", "打开质检指南"],
      ["03 / 运输", "提前规划国际包裹。", "包装方式、计费重量和当前可用线路都会影响最终运输选择。", "打开运输指南"],
      ["官方公开流程", "LoloBuy 公开说明的流程包括提交商品链接、商家发货到仓、仓库检查与拍照、存储，以及国际包裹处理。", "查看资料依据"],
    ],
    flowSteps: [
      ["商品链接与下单", "LoloBuy 的公开流程从提交商品链接和采购请求开始。", "付款前核对卖家、准确款式、颜色、尺码或测量数据、数量和商品图片。商品表格只是发现商品的入口，不能证明卖家描述全部正确。", "下单"],
      ["境内运输与仓库收货", "购买后由商家把商品寄送到 LoloBuy 仓库处理。", "把商家送仓时间与国际运输时间分开理解。仓库收货后，应按订单记录核对商品、数量和所选款式。", "收货"],
      ["仓库检查与照片", "LoloBuy 公开说明仓库检查和拍照属于其处理流程。", "利用照片检查看得见的颜色、版型、缝线、印花位置、数量和尺寸。照片不能证明真伪、隐藏部位状态、准确材质或长期耐用性。", "核对"],
      ["仓储、提交包裹与追踪", "LoloBuy 目前公开宣传最长 90 天免费仓储，并说明可选择仓库商品提交包裹，之后进行国际运输和追踪。", "提交前回到实时账户核对包装、计费重量、限制、目的地可用性、当前线路和价格；妥善保留包裹编号直到签收。", "运输"],
    ],
    journalItems: [
      ["计费重量如何计算", "包裹规划 • 9 分钟"],
      ["物流节点的通俗解释", "国际运输 • 8 分钟"],
      ["商品索引的审核方法", "编辑方法 • 6 分钟"],
      ["资料核查与内容更正", "更新记录"],
    ],
  },
};

export type ContentSection = { id?: string; heading: string; paragraphs: string[]; bullets?: string[] };
export type ContentSource = { label: string; href: string; note: string };
export type ContentPage = {
  kicker: string;
  title: string;
  summary: string;
  readTime?: string;
  visual?: "workflow" | "qc" | "shipping" | "tracking" | "cost";
  sections: ContentSection[];
  sources?: ContentSource[];
  cta?: { label: string; href: string };
};

export const contentPages: Record<string, ContentPage> = {
  "guides/how-lolobuy-works": {
    kicker: "BEGINNER GUIDE / OFFICIAL WORKFLOW",
    title: "How LoloBuy works, from product link to parcel",
    summary: "A source-led walkthrough of the public LoloBuy process, with a clear line between platform facts and independent shopping advice.",
    readTime: "10 min read • reviewed 10 Aug 2026",
    sections: [
      { heading: "Start with a product link", paragraphs: ["LoloBuy describes itself as a purchasing service for products from online and offline channels in China. Its public homepage says a shopper can paste a product link to begin an order. Before paying, independently review the seller, variant, color, size, measurements and listing photos. A spreadsheet row is a discovery route, not proof that every seller statement is correct."] },
      { heading: "Purchase and domestic delivery", paragraphs: ["After an order is placed, the merchant sends the item to LoloBuy's warehouse. Domestic delivery time depends on the seller and is separate from international shipping. If a listing, variant or seller message is unclear, resolve it before the item reaches the parcel stage."] },
      { heading: "Warehouse inspection photos", paragraphs: ["LoloBuy's homepage says it conducts a quality inspection and takes photos after the merchant sends goods to the warehouse. Use those images to compare visible shape, color, seams, print placement, accessories and measurements with the listing. Photos cannot authenticate a product or prove every material claim."], bullets: ["Compare the received color and variant with your order.", "Look at front, back, side and detail views.", "Check measurements against your own size requirements.", "Ask about visible damage before international dispatch."] },
      { heading: "Storage, consolidation and parcel submission", paragraphs: ["The official homepage currently advertises up to 90 days of free storage. Treat that as time-sensitive platform information and confirm the current rule in your account before relying on it. Once items are ready, parcel decisions can include consolidation, packaging and available shipping lines." ] },
      { heading: "International shipping and tracking", paragraphs: ["Review the current line, estimated chargeable weight, restrictions, destination coverage and tracking expectations shown at submission. Estimates are not guarantees; customs, carrier handoffs and local delivery conditions can change the timeline. Keep the parcel number and platform order record until delivery is complete."] },
      { heading: "What we verify", paragraphs: ["Our process facts come from LoloBuy's public website and are dated when checked. Editorial checklists are clearly separated from official claims. Fees, payment methods, return rules, coupons, shipping routes and app availability can change, so the live platform remains the final source for any transaction."] },
    ],
    cta: { label: "Continue to the FindSpreadsheet homepage", href: "https://findspreadsheet.com/" },
  },
  "guides/qc-photos": {
    kicker: "QC FIELD GUIDE / VISIBLE EVIDENCE",
    title: "How to read LoloBuy warehouse photos without overclaiming",
    summary: "A practical visual checklist for deciding what a warehouse image can show, what it cannot prove, and when to request clarification.",
    readTime: "12 min read • methodology reviewed 10 Aug 2026",
    sections: [
      { heading: "Begin with order accuracy", paragraphs: ["First confirm the basic match: product type, color, variant, size and quantity. Compare the warehouse set with the original listing while it is still accessible. If the seller changed or removed the listing, save your order details before making a parcel decision."] },
      { heading: "Read the silhouette before the details", paragraphs: ["A full front, back and side view reveals proportion, symmetry and obvious deformation more effectively than a tight detail crop. For footwear, compare toe shape, side profile and heel alignment. For clothing, look at shoulder line, sleeve length, hem and overall cut. For bags, check whether panels and handles sit evenly."], bullets: ["Zoom out: overall shape and proportions.", "Zoom in: seams, edges, print and hardware.", "Compare pairs: left versus right and front versus back.", "Use a reference: listing images and stated measurements."] },
      { heading: "Use measurements, not visual guesses", paragraphs: ["Camera distance and lens angle can distort size. When fit matters, a measurement photo is more useful than a visual impression. Compare the photographed measurement with a garment you already own rather than relying only on a size label."] },
      { heading: "What photos cannot prove", paragraphs: ["Warehouse photos do not reliably establish authenticity, long-term durability, exact fiber composition, internal electronics condition, waterproofing, scent or comfort. A photo may reveal a visible issue but cannot guarantee the absence of hidden issues. We do not label an item 'verified' merely because images exist."] },
      { heading: "When to request clarification", paragraphs: ["Ask for clarification when the received variant appears wrong, a key area is not visible, measurements are missing, packaging shows damage or two angles seem inconsistent. Make the request specific: name the area, the angle and the comparison you need."] },
      { heading: "Record your decision", paragraphs: ["Keep the order page, warehouse photos and any support messages together until delivery. This creates a clear record of what was visible and what decision you made before international shipping."] },
    ],
  },
  "guides/shipping": {
    kicker: "PARCEL GUIDE / SHIPPING",
    title: "Plan a LoloBuy parcel before you choose a shipping line",
    summary: "A decision framework for packaging, chargeable weight, restrictions and delivery expectations without inventing rates or promising arrival dates.",
    readTime: "11 min read • reviewed 10 Aug 2026",
    sections: [
      { heading: "Separate product cost from parcel cost", paragraphs: ["The price of an item is not the final landed cost. Domestic delivery to the warehouse, platform charges shown at checkout, packaging, international transport, insurance options and destination taxes may all affect the total. Use the live parcel screen for current prices."] },
      { heading: "Understand chargeable weight", paragraphs: ["Carriers may price a parcel using actual weight, dimensional weight or another line-specific rule. Bulky lightweight packaging can therefore matter. The platform's current estimate and the line's calculation rule are more useful than a rate copied from an old review."] },
      { heading: "Treat route availability as dynamic", paragraphs: ["Available lines can differ by destination, parcel contents, weight, dimensions and carrier restrictions. Batteries, liquids, branded goods and oversized items may face special limits. Check what the platform actually offers for your prepared parcel rather than assuming every route is available." ] },
      { heading: "Compare the right fields", paragraphs: ["When two lines appear, compare more than the lowest displayed price."], bullets: ["Destination and content eligibility.", "Chargeable-weight method and parcel limits.", "Tracking coverage and carrier handoffs.", "Declared estimate and any current notices.", "Insurance or compensation terms shown for that line."] },
      { heading: "Build time buffers", paragraphs: ["Processing, pickup, export handling, customs, carrier transfer and last-mile delivery are separate events. A stated delivery estimate should be treated as a planning range, not a guarantee. Avoid deadlines that depend on the fastest possible outcome."] },
    ],
    cta: { label: "Continue to the FindSpreadsheet homepage", href: "https://findspreadsheet.com/" },
  },
  "guides/tracking": {
    kicker: "PARCEL GUIDE / TRACKING",
    title: "Read parcel tracking as a sequence, not a promise",
    summary: "A plain-language map of common shipment stages and the questions to ask when tracking appears quiet.",
    readTime: "8 min read • reviewed 10 Aug 2026",
    sections: [
      { heading: "Start with the platform record", paragraphs: ["Keep the parcel number, submitted line and destination details. A label-created event may mean data was transmitted before the carrier physically scanned the parcel. The first visible event is not always the first operational step."] },
      { heading: "Expect handoffs", paragraphs: ["International parcels can move between a warehouse, export carrier, airline or line-haul operator, customs process, destination carrier and local delivery network. Tracking wording may change at each handoff and events can appear out of order when systems synchronize."] },
      { heading: "A quiet scan is not automatically a lost parcel", paragraphs: ["No update can mean the parcel is moving between scan points, waiting for a flight, undergoing customs processing or awaiting data exchange. Compare the silence with the current estimate and platform notices before assuming loss."] },
      { heading: "When to contact support", paragraphs: ["Contact the relevant platform or carrier when the address is wrong, delivery is marked complete but missing, customs requests information, a parcel is returned, or tracking remains unchanged beyond the current guidance for that route. Include the parcel number and the last visible event rather than sending only a screenshot."] },
    ],
  },
  "guides/fees-and-weight": {
    kicker: "COST GUIDE / NO STATIC RATE CLAIMS",
    title: "Map the real order cost before international shipping",
    summary: "A reusable cost worksheet covering the components that matter while leaving changing rates to the live checkout.",
    readTime: "9 min read • reviewed 10 Aug 2026",
    sections: [
      { heading: "Build a cost stack", paragraphs: ["Track the item price, domestic seller delivery, platform charges displayed for the order, optional services, packaging, international shipping and destination taxes or duties. Not every component applies to every order, but ignoring them makes product comparisons misleading."] },
      { heading: "Use estimates as estimates", paragraphs: ["An early parcel estimate may change after warehouse measurement, packaging choices or line selection. Record both estimated and final values so future comparisons are based on what actually happened rather than memory."] },
      { heading: "Weight is not always the only variable", paragraphs: ["Dimensions, restricted contents, destination and the chosen route can change price or eligibility. Removing packaging may reduce volume but can also reduce protection. The cheapest option is not automatically the lowest-risk option."] },
      { heading: "Do not copy old fee tables", paragraphs: ["Fees, exchange rates, coupons and route prices are time-sensitive. LoloBuy.us will date any future rate observation and link to the primary source. Before a transaction, the live LoloBuy account and checkout remain authoritative."] },
    ],
  },
  methodology: {
    kicker: "EDITORIAL STANDARD / METHOD",
    title: "How LoloBuy.us verifies facts and reviews spreadsheet links",
    summary: "A practical, claim-by-claim method for checking LoloBuy workflow statements, spreadsheet links and warehouse photos—showing what the official site confirms, what must be rechecked live and what the evidence cannot prove.",
    readTime: "9 min read • official pages checked 11 Aug 2026",
    sections: [
      {
        heading: "Primary sources first",
        paragraphs: [
          "Platform workflow claims begin with LoloBuy's own public pages. Product discovery links point to FindSpreadsheet. When an official page cannot confirm a claim, we either label it as editorial guidance, cite a different first-party source or leave it out.",
          "LoloBuy describes itself as a purchasing service for products from online and offline channels in China. Its public homepage says a shopper can paste a product link to begin an order. Before paying, independently review the seller, variant, color, size, measurements and listing photos. A spreadsheet row is a discovery route, not proof that every seller statement is correct.",
          "LoloBuy's public website states that after a merchant sends purchased goods to the warehouse, the warehouse carries out a quality inspection and takes photographs. This supports the factual statement that inspection photos are part of the public workflow. It does not establish how many photographs every order receives, guarantee that every hidden area is shown, authenticate a product, or prove exact material composition and long-term durability.",
          "LoloBuy's public website currently advertises up to 90 days of free storage and describes selecting products stored in the warehouse to submit them together as a parcel. It also presents global shipping and tracking as later stages of the process. These statements support a general warehouse-to-parcel workflow, but they are not a permanent quotation for every account, destination, product type or future date.",
        ],
        bullets: [
          "Supported claim: warehouse quality inspection and inspection feedback are described in LoloBuy's public process.",
          "Not supported: authenticity, perfect condition, a fixed photo count, or a universal inspection guarantee.",
          "Recheck live: route eligibility, current fees, packaging, chargeable weight, restrictions and tracking details.",
        ],
      },
      {
        heading: "Every changing claim gets a date",
        paragraphs: [
          "Storage terms, fees, payment options, shipping lines, coupons, returns and app availability can change. We attach a review date to these claims and avoid turning a temporary observation into a permanent promise.",
          "The price of an item is not the final landed cost. Domestic delivery to the warehouse, platform charges shown at checkout, packaging, international transport, insurance options and destination taxes may all affect the total. Use the live parcel screen for current prices.",
          "Available lines can differ by destination, parcel contents, weight, dimensions and carrier restrictions. Batteries, liquids, branded goods and oversized items may face special limits. Check what the platform actually offers for your prepared parcel rather than assuming every route is available.",
          "Fees, exchange rates, coupons and route prices are time-sensitive. LoloBuy.us will date any future rate observation and link to the primary source. Before a transaction, the live LoloBuy account and checkout remain authoritative.",
        ],
        bullets: [
          "Destination and content eligibility.",
          "Chargeable-weight method and parcel limits.",
          "Tracking coverage and carrier handoffs.",
          "Declared estimate and any current notices.",
          "Insurance or compensation terms shown for that line.",
        ],
      },
      {
        heading: "Spreadsheet review",
        paragraphs: [
          "A product row is reviewed for destination, category fit, readable naming, working link and obvious duplication. Inclusion does not authenticate a product, guarantee seller performance or certify quality. Rows that cannot be checked should be corrected or removed.",
          "First confirm the basic match: product type, color, variant, size and quantity. Compare the warehouse set with the original listing while it is still accessible. If the seller changed or removed the listing, save your order details before making a parcel decision.",
          "The practical question is not whether a row looks complete, but whether it still takes a reader to the product it describes. We check the final destination after redirects, compare the visible title and category with the row, and remove links that are dead, duplicated or materially mismatched.",
        ],
        bullets: [
          "Open the final destination, not only the spreadsheet cell.",
          "Confirm the product title, category, source, variant options and current visible price.",
          "Remove duplicates, dead links, unexpected redirects and pages that no longer match the row.",
          "Treat the row as a discovery lead—not an authenticity, stock, seller or quality certificate.",
        ],
      },
      {
        heading: "QC language",
        paragraphs: [
          "We describe what is visible: alignment, measurements, color, surface, shape and damage. We do not infer authenticity, material composition or durability from a photograph alone.",
          "A full front, back and side view reveals proportion, symmetry and obvious deformation more effectively than a tight detail crop. For footwear, compare toe shape, side profile and heel alignment. For clothing, look at shoulder line, sleeve length, hem and overall cut. For bags, check whether panels and handles sit evenly.",
          "Camera distance and lens angle can distort size. When fit matters, a measurement photo is more useful than a visual impression. Compare the photographed measurement with a garment you already own rather than relying only on a size label.",
          "Warehouse photos do not reliably establish authenticity, long-term durability, exact fiber composition, internal electronics condition, waterproofing, scent or comfort. A photo may reveal a visible issue but cannot guarantee the absence of hidden issues. We do not label an item 'verified' merely because images exist.",
          "Ask for clarification when the received variant appears wrong, a key area is not visible, measurements are missing, packaging shows damage or two angles seem inconsistent. Make the request specific: name the area, the angle and the comparison you need.",
        ],
        bullets: [
          "Zoom out: overall shape and proportions.",
          "Zoom in: seams, edges, print and hardware.",
          "Compare pairs: left versus right and front versus back.",
          "Use a reference: listing images and stated measurements.",
        ],
      },
      {
        heading: "Corrections",
        paragraphs: [
          "If a source changes or a link stops matching its description, the page should be updated with a new review date. Material corrections belong in the update log so readers can see what changed.",
          "Our process facts come from LoloBuy's public website and are dated when checked. Editorial checklists are clearly separated from official claims. Fees, payment methods, return rules, coupons, shipping routes and app availability can change, so the live platform remains the final source for any transaction.",
          "Keep the order page, warehouse photos and any support messages together until delivery. This creates a clear record of what was visible and what decision you made before international shipping.",
        ],
        bullets: [
          "Trigger a correction when an official page changes, a link dies, a redirect changes destination, or a row no longer matches its description.",
          "Record material edits in Updates with the date, affected page and a plain-language reason.",
          "If the evidence is incomplete, mark the point as unknown or time-sensitive instead of filling the gap with a guess.",
        ],
      },
    ],
  },
  sources: {
    kicker: "SOURCE REGISTER / LAST CHECKED 11 AUG 2026",
    title: "Primary sources behind this preview",
    summary: "A short, transparent register of what supports the current site—and what remains editorial advice.",
    sections: [
      { id: "warehouse-inspection", heading: "Warehouse inspection and photo evidence", paragraphs: ["LoloBuy's public website states that after a merchant sends purchased goods to the warehouse, the warehouse carries out a quality inspection and takes photographs. This supports the factual statement that inspection photos are part of the public workflow. It does not establish how many photographs every order receives, guarantee that every hidden area is shown, authenticate a product, or prove exact material composition and long-term durability.", "For that reason, the QC guide treats the images as visible evidence only. Its seven-frame checklist—order match, silhouette, symmetry, construction, colour and surface, measurements, and packaging—is independent editorial guidance rather than a service promise made by LoloBuy. The official LoloBuy process page checked on 10 August 2026 is linked below."], bullets: ["Supported claim: warehouse quality inspection and inspection feedback are described in LoloBuy's public process.", "Not supported: authenticity, perfect condition, a fixed photo count, or a universal inspection guarantee."] },
      { id: "storage-and-parcel", heading: "Storage, consolidation and parcel-handling evidence", paragraphs: ["LoloBuy's public website currently advertises up to 90 days of free storage and describes selecting products stored in the warehouse to submit them together as a parcel. It also presents global shipping and tracking as later stages of the process. These statements support a general warehouse-to-parcel workflow, but they are not a permanent quotation for every account, destination, product type or future date.", "Storage eligibility, packaging choices, shipping-line availability, chargeable weight, restrictions, prices and delivery estimates are transaction-specific or time-sensitive. The guides therefore direct readers back to the live account before parcel submission and do not publish an undated 'best route' or fixed shipping price. The official public reference checked on 10 August 2026 is linked below."], bullets: ["Supported claim: up to 90 days of free storage is currently advertised; stored products can be selected for parcel submission.", "Recheck live: route eligibility, current fees, packaging, chargeable weight, restrictions and tracking details."] },
      { heading: "FindSpreadsheet", paragraphs: ["Used as the destination product database for search and category links. LoloBuy.us provides the research and decision layer; FindSpreadsheet provides the wider product-discovery index."] },
      { heading: "Editorial guidance", paragraphs: ["QC, parcel planning and tracking checklists are independent editorial guidance. They are not statements made by LoloBuy and are written to avoid guarantees."] },
    ],
  },
  disclosure: {
    kicker: "INDEPENDENCE / DISCLOSURE",
    title: "LoloBuy.us is independent",
    summary: "This site is not LoloBuy's official website and does not speak for the platform.",
    sections: [
      { heading: "Relationship", paragraphs: ["LoloBuy.us is an independent product-discovery and education project. It is not affiliated with, operated by, endorsed by or the official website of LoloBuy. LoloBuy names and marks belong to their respective owners."] },
      { heading: "Outbound links", paragraphs: ["Category, search and product-discovery links can lead to FindSpreadsheet.com. Official-process links can lead to LoloBuy.com. Readers should verify the destination and current transaction terms before acting."] },
      { heading: "No guarantee", paragraphs: ["A spreadsheet entry, guide, photograph or outbound link does not guarantee authenticity, legality, seller performance, quality, delivery time, customs outcome or product suitability. Users remain responsible for local laws and purchasing decisions."] },
    ],
  },
  about: {
    kicker: "ABOUT / WHY THIS SITE EXISTS",
    title: "A better decision layer for LoloBuy product discovery",
    summary: "LoloBuy.us connects search intent with practical research instead of publishing a wall of unexplained links.",
    sections: [
      { heading: "The problem", paragraphs: ["Many spreadsheet pages answer only where a link goes. Shoppers still need to understand the platform flow, what warehouse photos can show, how to think about parcel cost and which details are time-sensitive."] },
      { heading: "The model", paragraphs: ["LoloBuy.us provides independent guides, source dates, category-specific review lenses and transparent limitations. FindSpreadsheet.com provides the broader product index. The two sites have different jobs and should remain useful on their own."] },
      { heading: "The standard", paragraphs: ["We prefer a smaller number of checkable claims over unsupported superlatives. No invented discounts, no fake customer reviews and no promise of Google ranking or delivery performance."] },
    ],
  },
  contact: {
    kicker: "CONTACT / CORRECTIONS",
    title: "Report a broken link or factual issue",
    summary: "Useful reports identify the exact page, the incorrect detail and a source that supports the correction.",
    sections: [
      { heading: "What to include", paragraphs: ["Send the page URL, the text or link in question, what you believe is wrong and—when available—the official source showing the current information. Do not send passwords, payment information, identity documents or private order data."] },
      { heading: "Preview note", paragraphs: ["This inspection version does not yet publish a public contact address. A dedicated corrections address and privacy-safe contact form will be added before the formal domain is connected."] },
    ],
  },
  privacy: {
    kicker: "PRIVACY / PREVIEW POLICY",
    title: "A minimal-data approach",
    summary: "The current preview does not offer accounts, checkout or a contact form.",
    sections: [
      { heading: "Current preview", paragraphs: ["This preview is informational. Search submissions open FindSpreadsheet.com and are governed by the destination site's policies. External official links open LoloBuy.com. No user account or order information is collected by this preview interface."] },
      { heading: "Before launch", paragraphs: ["The production privacy notice will document hosting logs, analytics, cookies, contact submissions and retention only if those systems are actually enabled. It will not claim data practices that have not been implemented."] },
    ],
  },
  ...seoGuidePages,
};

export const faqs = [
  ["Is LoloBuy.us the official LoloBuy website?", "No. LoloBuy.us is an independent research and product-discovery site. Official platform information should be confirmed at LoloBuy.com."],
  ["What is the LoloBuy spreadsheet?", "It is a categorized product-discovery index. On this site, each department also includes a review lens so a link is paired with useful questions rather than presented as a guarantee."],
  ["How does LoloBuy describe its buying process?", "Its public website says users can paste a product link, after which the merchant sends the purchased item to the warehouse for processing."],
  ["Does LoloBuy provide warehouse photos?", "LoloBuy's public homepage says it conducts quality inspection and takes photos after goods arrive from the merchant."],
  ["Do QC photos prove authenticity or quality?", "No. They can help assess visible characteristics and damage, but cannot prove authenticity, exact materials, internal condition or durability."],
  ["How long is free warehouse storage?", "The LoloBuy homepage currently advertises up to 90 days of free storage. This is time-sensitive and should be confirmed in the live platform before relying on it."],
  ["Can this site quote exact shipping prices?", "Not responsibly as a permanent fact. Prices and routes can vary by parcel, destination, dimensions, content and time. Use the live parcel screen for current options."],
  ["Why do category links open FindSpreadsheet.com?", "LoloBuy.us provides the independent research layer while FindSpreadsheet.com hosts the broader product-discovery database."],
  ["Are products in the spreadsheet guaranteed?", "No. Inclusion is not an authentication, seller-performance or quality guarantee. Review the listing, warehouse evidence and current platform terms yourself."],
  ["Will every language keep the same layout?", "Yes. The locale structure is designed to preserve the same components and page order. The inspection version currently demonstrates localized home routes before full editorial translation."],
] as const;
