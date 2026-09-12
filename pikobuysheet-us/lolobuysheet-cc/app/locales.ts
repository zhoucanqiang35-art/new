export const languageOptions = [
  { code: "en", label: "EN · English" },
  { code: "es", label: "ES · Español" },
  { code: "de", label: "DE · Deutsch" },
  { code: "fr", label: "FR · Français" },
  { code: "it", label: "IT · Italiano" },
  { code: "pt", label: "PT · Português" },
  { code: "nl", label: "NL · Nederlands" },
  { code: "pl", label: "PL · Polski" },
  { code: "sv", label: "SV · Svenska" },
  { code: "no", label: "NO · Norsk" },
  { code: "da", label: "DA · Dansk" },
  { code: "fi", label: "FI · Suomi" },
] as const;

export type LocaleCode = typeof languageOptions[number]["code"];

type LocaleCopy = {
  nav: [string, string, string, string, string, string, string];
  heroKicker: string;
  heroTitle: string;
  heroAccent: string;
  heroText: string;
  categories: string;
  products: string;
  openCategory: string;
  openProduct: string;
  liveDatabase: string;
  verify: string;
};

export const localeCopy: Record<LocaleCode, LocaleCopy> = {
  en: { nav:["Home","Spreadsheet","QC Guide","Shipping Guide","Guides","SEO Articles","FAQ"], heroKicker:"LoloBuy spreadsheet guide · 2026", heroTitle:"Find smarter.", heroAccent:"Ship with fewer surprises.", heroText:"Independent product discovery, QC and parcel-planning guidance for international buyers.", categories:"Product categories", products:"Product research cards", openCategory:"Open category", openProduct:"View product details", liveDatabase:"Browse live database", verify:"Verify price, variant and source before ordering." },
  es: { nav:["Inicio","Hoja de cálculo","Guía QC","Guía de envío","Guías","Artículos SEO","Preguntas"], heroKicker:"Guía de LoloBuy · 2026", heroTitle:"Encuentra mejor.", heroAccent:"Envía con menos sorpresas.", heroText:"Descubrimiento independiente de productos, control de calidad y planificación de paquetes para compradores internacionales.", categories:"Categorías de productos", products:"Fichas de investigación", openCategory:"Abrir categoría", openProduct:"Ver detalles", liveDatabase:"Explorar base de datos", verify:"Comprueba el precio, la variante y la fuente antes de comprar." },
  de: { nav:["Startseite","Tabelle","QC-Leitfaden","Versand","Ratgeber","SEO-Artikel","FAQ"], heroKicker:"LoloBuy-Tabellenleitfaden · 2026", heroTitle:"Besser finden.", heroAccent:"Mit weniger Überraschungen versenden.", heroText:"Unabhängige Produktsuche, Qualitätskontrolle und Paketplanung für internationale Käufer.", categories:"Produktkategorien", products:"Produkt-Recherchekarten", openCategory:"Kategorie öffnen", openProduct:"Details ansehen", liveDatabase:"Live-Datenbank öffnen", verify:"Preis, Variante und Quelle vor der Bestellung prüfen." },
  fr: { nav:["Accueil","Tableur","Guide QC","Expédition","Guides","Articles SEO","FAQ"], heroKicker:"Guide LoloBuy · 2026", heroTitle:"Trouvez mieux.", heroAccent:"Expédiez avec moins de surprises.", heroText:"Recherche indépendante de produits, contrôle qualité et planification des colis pour les acheteurs internationaux.", categories:"Catégories de produits", products:"Fiches de recherche", openCategory:"Ouvrir la catégorie", openProduct:"Voir les détails", liveDatabase:"Parcourir la base", verify:"Vérifiez le prix, la variante et la source avant l'achat." },
  it: { nav:["Home","Foglio","Guida QC","Spedizione","Guide","Articoli SEO","FAQ"], heroKicker:"Guida LoloBuy · 2026", heroTitle:"Trova meglio.", heroAccent:"Spedisci con meno sorprese.", heroText:"Ricerca indipendente dei prodotti, controllo qualità e pianificazione dei pacchi per acquirenti internazionali.", categories:"Categorie di prodotti", products:"Schede di ricerca", openCategory:"Apri categoria", openProduct:"Vedi dettagli", liveDatabase:"Sfoglia il database", verify:"Verifica prezzo, variante e fonte prima dell'ordine." },
  pt: { nav:["Início","Planilha","Guia QC","Envio","Guias","Artigos SEO","FAQ"], heroKicker:"Guia LoloBuy · 2026", heroTitle:"Encontre melhor.", heroAccent:"Envie com menos surpresas.", heroText:"Pesquisa independente de produtos, controlo de qualidade e planeamento de encomendas para compradores internacionais.", categories:"Categorias de produtos", products:"Cartões de pesquisa", openCategory:"Abrir categoria", openProduct:"Ver detalhes", liveDatabase:"Explorar base de dados", verify:"Verifique preço, variante e fonte antes de comprar." },
  nl: { nav:["Home","Spreadsheet","QC-gids","Verzending","Gidsen","SEO-artikelen","FAQ"], heroKicker:"LoloBuy spreadsheetgids · 2026", heroTitle:"Vind slimmer.", heroAccent:"Verzend met minder verrassingen.", heroText:"Onafhankelijke productontdekking, kwaliteitscontrole en pakketplanning voor internationale kopers.", categories:"Productcategorieën", products:"Productonderzoek", openCategory:"Categorie openen", openProduct:"Details bekijken", liveDatabase:"Database bekijken", verify:"Controleer prijs, variant en bron vóór bestelling." },
  pl: { nav:["Start","Arkusz","Kontrola QC","Wysyłka","Poradniki","Artykuły SEO","FAQ"], heroKicker:"Przewodnik LoloBuy · 2026", heroTitle:"Szukaj mądrzej.", heroAccent:"Wysyłaj bez niespodzianek.", heroText:"Niezależne wyszukiwanie produktów, kontrola jakości i planowanie przesyłek dla kupujących międzynarodowych.", categories:"Kategorie produktów", products:"Karty produktów", openCategory:"Otwórz kategorię", openProduct:"Zobacz szczegóły", liveDatabase:"Przeglądaj bazę", verify:"Sprawdź cenę, wariant i źródło przed zamówieniem." },
  sv: { nav:["Hem","Kalkylblad","QC-guide","Fraktguide","Guider","SEO-artiklar","FAQ"], heroKicker:"LoloBuy kalkylbladsguide · 2026", heroTitle:"Hitta smartare.", heroAccent:"Skicka med färre överraskningar.", heroText:"Oberoende produktsökning, kvalitetskontroll och paketplanering för internationella köpare.", categories:"Produktkategorier", products:"Produktkort", openCategory:"Öppna kategori", openProduct:"Visa detaljer", liveDatabase:"Bläddra i databasen", verify:"Kontrollera pris, variant och källa före beställning." },
  no: { nav:["Hjem","Regneark","QC-guide","Fraktguide","Guider","SEO-artikler","FAQ"], heroKicker:"LoloBuy regnearkguide · 2026", heroTitle:"Finn smartere.", heroAccent:"Send med færre overraskelser.", heroText:"Uavhengig produktsøk, kvalitetskontroll og pakkeplanlegging for internasjonale kjøpere.", categories:"Produktkategorier", products:"Produktkort", openCategory:"Åpne kategori", openProduct:"Se detaljer", liveDatabase:"Bla i databasen", verify:"Kontroller pris, variant og kilde før bestilling." },
  da: { nav:["Hjem","Regneark","QC-guide","Forsendelse","Guider","SEO-artikler","FAQ"], heroKicker:"LoloBuy regnearksguide · 2026", heroTitle:"Find smartere.", heroAccent:"Send med færre overraskelser.", heroText:"Uafhængig produktsøgning, kvalitetskontrol og pakkeplanlægning for internationale købere.", categories:"Produktkategorier", products:"Produktkort", openCategory:"Åbn kategori", openProduct:"Se detaljer", liveDatabase:"Gennemse databasen", verify:"Kontrollér pris, variant og kilde før bestilling." },
  fi: { nav:["Etusivu","Taulukko","QC-opas","Toimitus","Oppaat","SEO-artikkelit","UKK"], heroKicker:"LoloBuy-taulukko-opas · 2026", heroTitle:"Löydä fiksummin.", heroAccent:"Lähetä ilman yllätyksiä.", heroText:"Riippumaton tuotehaku, laadunvalvonta ja pakettisuunnittelu kansainvälisille ostajille.", categories:"Tuoteryhmät", products:"Tuotekortit", openCategory:"Avaa kategoria", openProduct:"Näytä tiedot", liveDatabase:"Selaa tietokantaa", verify:"Tarkista hinta, vaihtoehto ja lähde ennen tilausta." },
};

export const localeCodes = languageOptions.map((item) => item.code);

export function withLocale(locale: LocaleCode, path: string) {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return locale === "en" ? (clean || "/") : `/${locale}${clean}`;
}
