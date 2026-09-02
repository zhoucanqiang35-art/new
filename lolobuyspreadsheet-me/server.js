const routeList = [
  ["/", "Home"],
  ["/#categories", "Categories"],
  ["/product-details", "Product Details"],
  ["/how-lolobuy-works", "How It Works"],
  ["/shipping-guide", "Shipping"],
  ["/buyer-checklist", "Checklist"],
  ["/faq", "FAQ"],
  ["/seo-articles", "SEO Articles"],
];
const locales = {
  en: "EN",
  de: "DE",
  fr: "FR",
  es: "ES",
  it: "IT",
  pt: "PT",
  nl: "NL",
  pl: "PL",
  sv: "SV",
};
const languageNames = {
  en: "Choose language", de: "Sprache wählen", fr: "Choisir la langue",
  es: "Elegir idioma", it: "Scegli lingua", pt: "Escolher idioma",
  nl: "Taal kiezen", pl: "Wybierz język", sv: "Välj språk",
};
const languageLabels = {
  en: "EN · English", de: "DE · Deutsch", fr: "FR · Français", es: "ES · Español",
  it: "IT · Italiano", pt: "PT · Português", nl: "NL · Nederlands", pl: "PL · Polski", sv: "SV · Svenska",
};
const navLabels = {
  en: ["Home", "Categories", "Product Details", "How It Works", "Shipping", "Checklist", "FAQ", "SEO Articles"],
  de: ["Startseite", "Kategorien", "Produktdetails", "So funktioniert es", "Versand", "Checkliste", "FAQ", "SEO-Artikel"],
  fr: ["Accueil", "Catégories", "Détails produit", "Comment ça marche", "Livraison", "Checklist", "FAQ", "Articles SEO"],
  es: ["Inicio", "Categorías", "Detalles del producto", "Cómo funciona", "Envío", "Lista de control", "FAQ", "Artículos SEO"],
  it: ["Home", "Categorie", "Dettagli prodotto", "Come funziona", "Spedizione", "Checklist", "FAQ", "Articoli SEO"],
  pt: ["Início", "Categorias", "Detalhes do produto", "Como funciona", "Envio", "Checklist", "FAQ", "Artigos SEO"],
  nl: ["Home", "Categorieën", "Productdetails", "Hoe het werkt", "Verzending", "Checklist", "FAQ", "SEO-artikelen"],
  pl: ["Strona główna", "Kategorie", "Szczegóły produktu", "Jak to działa", "Wysyłka", "Lista kontrolna", "FAQ", "Artykuły SEO"],
  sv: ["Hem", "Kategorier", "Produktdetaljer", "Så fungerar det", "Frakt", "Checklista", "FAQ", "SEO-artiklar"],
};
const categories = [
  ["Shoes", "◌", "/shoes/"],
  ["Hoodies / Sweaters", "⌂", "/hoodies-sweaters/"],
  ["T-Shirts", "▣", "/t-shirts/"],
  ["Jackets", "♧", "/jackets/"],
  ["Pants / Shorts", "◢", "/pants-shorts/"],
  ["Headwear", "♙", "/headwear/"],
  ["Sets", "▱", "/ShortSets/"],
  ["Underwear", "⌄", "/other-stuff/"],
  ["Jersey", "◉", "/jersey/"],
  ["Accessories", "▰", "/accessories/"],
];
const action = `<ul class="actions"><li>Match the current source and selected option</li><li>Use visible photos, measurements or parcel data</li><li>Record what is still unknown or may change</li><li>Make an accept, question or stop decision</li></ul>`;
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
function href(path, lang) {
  return path === "/#categories"
    ? `/?lang=${lang}#categories`
    : `${path}?lang=${lang}`;
}
const pageTitles = {
  en: "LoloBuy Spreadsheet Guide | Product Research & QC Checks",
  de: "LoloBuy Spreadsheet Guide | Produktrecherche und QC-Prüfungen",
  fr: "Guide LoloBuy Spreadsheet | Recherche produit et contrôles QC",
  es: "Guía de hojas LoloBuy | Investigación de productos y controles QC",
  it: "Guida LoloBuy Spreadsheet | Ricerca prodotti e controlli QC",
  pt: "Guia LoloBuy Spreadsheet | Pesquisa de produtos e verificações QC",
  nl: "LoloBuy Spreadsheet-gids | Productonderzoek en QC-controles",
  pl: "Przewodnik LoloBuy Spreadsheet | Badanie produktów i kontrola QC",
  sv: "LoloBuy Spreadsheet-guide | Produktresearch och QC-kontroller",
};
// Every page is rendered from the same complete source structure.  The copy pack
// runs on text nodes only, so language changes never remove cards, FAQ entries,
// article paragraphs, links, or search controls.  It is deliberately local: no
// browser translation widget and no text is sent to another service.
const copyPacks = {
  de: {
    phrases: {
      "Browse the complete product database": "Vollständige Produktdatenbank durchsuchen",
      "Search products, brands or styles...": "Produkte, Marken oder Styles suchen...",
      Search: "Suchen", "Read guide →": "Leitfaden lesen →", "Read article →": "Artikel lesen →",
      "Check current product data →": "Aktuelle Produktdaten prüfen →", "Independent notice": "Unabhängiger Hinweis",
      "Next step": "Nächster Schritt", "Research boundary": "Recherche-Grenze", "SEO article": "SEO-Artikel",
      "SEO articles": "SEO-Artikel", "Research guide": "Recherche-Leitfaden", Explore: "Entdecken", Guides: "Leitfäden",
      "Product Details": "Produktdetails", "How It Works": "So funktioniert es", Shipping: "Versand",
      "Back to research desk": "Zurück zur Recherche", "Buyer checklist": "Käufer-Checkliste",
      "Frequently asked questions": "Häufig gestellte Fragen", "QC photo guide": "QC-Fotoleitfaden",
      "Product detail directory": "Produktdetail-Verzeichnis", "Shipping guide": "Versandleitfaden",
      "Beginner guide": "Einsteiger-Leitfaden", "Official-process facts checked": "Offizielle Prozessangaben geprüft",
      "No “verified seller” claims": "Keine Aussagen zu „verifizierten Verkäufern“", "Built for US, UK, Canada & Europe": "Für USA, UK, Kanada und Europa",
      "Independent research for clearer spreadsheet decisions.": "Unabhängige Recherche für klarere Spreadsheet-Entscheidungen.",
      "This guide is not LoloBuy and does not process orders, payments, refunds or shipments.": "Dieser Leitfaden ist nicht LoloBuy und bearbeitet keine Bestellungen, Zahlungen, Erstattungen oder Sendungen.",
    },
    words: {the:"der",and:"und",or:"oder",for:"für",with:"mit",from:"von",to:"zu",before:"vor",after:"nach",in:"in",on:"auf",of:"von",a:"ein",an:"ein",is:"ist",are:"sind",can:"kann",not:"nicht",no:"keine",use:"nutzen",check:"prüfen",product:"Produkt",products:"Produkte",parcel:"Paket",parcels:"Pakete",shipping:"Versand",warehouse:"Lager",quality:"Qualität",inspection:"Prüfung",evidence:"Nachweise",source:"Quelle",sources:"Quellen",price:"Preis",prices:"Preise",size:"Größe",colour:"Farbe",color:"Farbe",photos:"Fotos",photo:"Foto",item:"Artikel",items:"Artikel",route:"Route",routes:"Routen",account:"Konto",guide:"Leitfaden",research:"Recherche",decision:"Entscheidung",decisions:"Entscheidungen",live:"aktuell",current:"aktuell",details:"Details",weight:"Gewicht",measurements:"Maße",link:"Link",links:"Links",order:"Bestellung",orders:"Bestellungen",buyer:"Käufer",buyers:"Käufer",claim:"Anspruch",claims:"Ansprüche",coverage:"Schutz",support:"Support",information:"Informationen",available:"verfügbar",available:"verfügbar" },
  },
  fr: {
    phrases: {"Browse the complete product database":"Parcourir la base complète de produits","Search products, brands or styles...":"Rechercher des produits, marques ou styles...",Search:"Rechercher","Read guide →":"Lire le guide →","Read article →":"Lire l’article →","Check current product data →":"Vérifier les données produit actuelles →","Independent notice":"Avis indépendant","Next step":"Étape suivante","Research boundary":"Limite de recherche","SEO article":"Article SEO","SEO articles":"Articles SEO","Research guide":"Guide de recherche",Explore:"Explorer",Guides:"Guides","Product Details":"Détails produit","How It Works":"Comment ça marche",Shipping:"Livraison","Back to research desk":"Retour au bureau de recherche","Buyer checklist":"Checklist acheteur","Frequently asked questions":"Questions fréquentes","QC photo guide":"Guide photos QC","Product detail directory":"Répertoire des détails produit","Shipping guide":"Guide de livraison","Beginner guide":"Guide débutant","Official-process facts checked":"Faits du processus officiel vérifiés","No “verified seller” claims":"Aucune affirmation de « vendeur vérifié »","Built for US, UK, Canada & Europe":"Conçu pour les États-Unis, le Royaume-Uni, le Canada et l’Europe","Independent research for clearer spreadsheet decisions.":"Recherche indépendante pour des décisions de tableur plus claires.","This guide is not LoloBuy and does not process orders, payments, refunds or shipments.":"Ce guide n’est pas LoloBuy et ne traite ni commandes, ni paiements, ni remboursements, ni expéditions."},
    words: {the:"le",and:"et",or:"ou",for:"pour",with:"avec",from:"de",to:"à",before:"avant",after:"après",in:"dans",on:"sur",of:"de",a:"un",an:"un",is:"est",are:"sont",can:"peut",not:"pas",no:"aucun",use:"utiliser",check:"vérifier",product:"produit",products:"produits",parcel:"colis",parcels:"colis",shipping:"livraison",warehouse:"entrepôt",quality:"qualité",inspection:"inspection",evidence:"preuves",source:"source",sources:"sources",price:"prix",prices:"prix",size:"taille",colour:"couleur",color:"couleur",photos:"photos",photo:"photo",item:"article",items:"articles",route:"itinéraire",routes:"itinéraires",account:"compte",guide:"guide",research:"recherche",decision:"décision",decisions:"décisions",live:"actuel",current:"actuel",details:"détails",weight:"poids",measurements:"mesures",link:"lien",links:"liens",order:"commande",orders:"commandes",buyer:"acheteur",buyers:"acheteurs",claim:"réclamation",claims:"réclamations",coverage:"protection",support:"assistance",information:"informations",available:"disponible"},
  },
  es: {
    phrases: {"Browse the complete product database":"Explorar la base completa de productos","Search products, brands or styles...":"Buscar productos, marcas o estilos...",Search:"Buscar","Read guide →":"Leer guía →","Read article →":"Leer artículo →","Check current product data →":"Comprobar datos actuales del producto →","Independent notice":"Aviso independiente","Next step":"Siguiente paso","Research boundary":"Límite de investigación","SEO article":"Artículo SEO","SEO articles":"Artículos SEO","Research guide":"Guía de investigación",Explore:"Explorar",Guides:"Guías","Product Details":"Detalles del producto","How It Works":"Cómo funciona",Shipping:"Envío","Back to research desk":"Volver al centro de investigación","Buyer checklist":"Lista de control del comprador","Frequently asked questions":"Preguntas frecuentes","QC photo guide":"Guía de fotos QC","Product detail directory":"Directorio de detalles del producto","Shipping guide":"Guía de envío","Beginner guide":"Guía para principiantes","Official-process facts checked":"Datos del proceso oficial comprobados","No “verified seller” claims":"Sin afirmaciones de «vendedor verificado»","Built for US, UK, Canada & Europe":"Creado para EE. UU., Reino Unido, Canadá y Europa","Independent research for clearer spreadsheet decisions.":"Investigación independiente para decisiones de hoja de cálculo más claras.","This guide is not LoloBuy and does not process orders, payments, refunds or shipments.":"Esta guía no es LoloBuy y no procesa pedidos, pagos, reembolsos ni envíos."},
    words: {the:"el",and:"y",or:"o",for:"para",with:"con",from:"de",to:"a",before:"antes",after:"después",in:"en",on:"en",of:"de",a:"un",an:"un",is:"es",are:"son",can:"puede",not:"no",no:"ningún",use:"usar",check:"comprobar",product:"producto",products:"productos",parcel:"paquete",parcels:"paquetes",shipping:"envío",warehouse:"almacén",quality:"calidad",inspection:"inspección",evidence:"pruebas",source:"fuente",sources:"fuentes",price:"precio",prices:"precios",size:"talla",colour:"color",color:"color",photos:"fotos",photo:"foto",item:"artículo",items:"artículos",route:"ruta",routes:"rutas",account:"cuenta",guide:"guía",research:"investigación",decision:"decisión",decisions:"decisiones",live:"actual",current:"actual",details:"detalles",weight:"peso",measurements:"medidas",link:"enlace",links:"enlaces",order:"pedido",orders:"pedidos",buyer:"comprador",buyers:"compradores",claim:"reclamación",claims:"reclamaciones",coverage:"cobertura",support:"soporte",information:"información",available:"disponible"},
  },
  it: {
    phrases: {"Browse the complete product database":"Sfoglia il database completo dei prodotti","Search products, brands or styles...":"Cerca prodotti, marchi o stili...",Search:"Cerca","Read guide →":"Leggi guida →","Read article →":"Leggi articolo →","Check current product data →":"Controlla dati prodotto attuali →","Independent notice":"Avviso indipendente","Next step":"Passo successivo","Research boundary":"Limite della ricerca","SEO article":"Articolo SEO","SEO articles":"Articoli SEO","Research guide":"Guida alla ricerca",Explore:"Esplora",Guides:"Guide","Product Details":"Dettagli prodotto","How It Works":"Come funziona",Shipping:"Spedizione","Back to research desk":"Torna alla ricerca","Buyer checklist":"Checklist dell’acquirente","Frequently asked questions":"Domande frequenti","QC photo guide":"Guida foto QC","Product detail directory":"Elenco dettagli prodotto","Shipping guide":"Guida alla spedizione","Beginner guide":"Guida per principianti","Official-process facts checked":"Fatti del processo ufficiale verificati","No “verified seller” claims":"Nessuna affermazione su «venditori verificati»","Built for US, UK, Canada & Europe":"Per USA, Regno Unito, Canada ed Europa","Independent research for clearer spreadsheet decisions.":"Ricerca indipendente per decisioni di foglio di calcolo più chiare.","This guide is not LoloBuy and does not process orders, payments, refunds or shipments.":"Questa guida non è LoloBuy e non gestisce ordini, pagamenti, rimborsi o spedizioni."},
    words: {the:"il",and:"e",or:"o",for:"per",with:"con",from:"da",to:"a",before:"prima",after:"dopo",in:"in",on:"su",of:"di",a:"un",an:"un",is:"è",are:"sono",can:"può",not:"non",no:"nessun",use:"usare",check:"controllare",product:"prodotto",products:"prodotti",parcel:"pacco",parcels:"pacchi",shipping:"spedizione",warehouse:"magazzino",quality:"qualità",inspection:"ispezione",evidence:"prove",source:"fonte",sources:"fonti",price:"prezzo",prices:"prezzi",size:"taglia",colour:"colore",color:"colore",photos:"foto",photo:"foto",item:"articolo",items:"articoli",route:"rotta",routes:"rotte",account:"account",guide:"guida",research:"ricerca",decision:"decisione",decisions:"decisioni",live:"attuale",current:"attuale",details:"dettagli",weight:"peso",measurements:"misure",link:"link",links:"link",order:"ordine",orders:"ordini",buyer:"acquirente",buyers:"acquirenti",claim:"reclamo",claims:"reclami",coverage:"copertura",support:"supporto",information:"informazioni",available:"disponibile"},
  },
  pt: {
    phrases: {"Browse the complete product database":"Explorar a base completa de produtos","Search products, brands or styles...":"Pesquisar produtos, marcas ou estilos...",Search:"Pesquisar","Read guide →":"Ler guia →","Read article →":"Ler artigo →","Check current product data →":"Ver dados atuais do produto →","Independent notice":"Aviso independente","Next step":"Próximo passo","Research boundary":"Limite da pesquisa","SEO article":"Artigo SEO","SEO articles":"Artigos SEO","Research guide":"Guia de pesquisa",Explore:"Explorar",Guides:"Guias","Product Details":"Detalhes do produto","How It Works":"Como funciona",Shipping:"Envio","Back to research desk":"Voltar à pesquisa","Buyer checklist":"Lista do comprador","Frequently asked questions":"Perguntas frequentes","QC photo guide":"Guia de fotos QC","Product detail directory":"Diretório de detalhes do produto","Shipping guide":"Guia de envio","Beginner guide":"Guia para iniciantes","Official-process facts checked":"Fatos do processo oficial verificados","No “verified seller” claims":"Sem alegações de «vendedor verificado»","Built for US, UK, Canada & Europe":"Feito para EUA, Reino Unido, Canadá e Europa","Independent research for clearer spreadsheet decisions.":"Pesquisa independente para decisões de planilha mais claras.","This guide is not LoloBuy and does not process orders, payments, refunds or shipments.":"Este guia não é a LoloBuy e não processa pedidos, pagamentos, reembolsos ou envios."},
    words: {the:"o",and:"e",or:"ou",for:"para",with:"com",from:"de",to:"para",before:"antes",after:"depois",in:"em",on:"em",of:"de",a:"um",an:"um",is:"é",are:"são",can:"pode",not:"não",no:"nenhum",use:"usar",check:"verificar",product:"produto",products:"produtos",parcel:"encomenda",parcels:"encomendas",shipping:"envio",warehouse:"armazém",quality:"qualidade",inspection:"inspeção",evidence:"provas",source:"fonte",sources:"fontes",price:"preço",prices:"preços",size:"tamanho",colour:"cor",color:"cor",photos:"fotos",photo:"foto",item:"item",items:"itens",route:"rota",routes:"rotas",account:"conta",guide:"guia",research:"pesquisa",decision:"decisão",decisions:"decisões",live:"atual",current:"atual",details:"detalhes",weight:"peso",measurements:"medidas",link:"link",links:"links",order:"pedido",orders:"pedidos",buyer:"comprador",buyers:"compradores",claim:"reclamação",claims:"reclamações",coverage:"cobertura",support:"suporte",information:"informações",available:"disponível"},
  },
  nl: {
    phrases: {"Browse the complete product database":"Doorzoek de volledige productdatabase","Search products, brands or styles...":"Zoek producten, merken of stijlen...",Search:"Zoeken","Read guide →":"Gids lezen →","Read article →":"Artikel lezen →","Check current product data →":"Actuele productgegevens bekijken →","Independent notice":"Onafhankelijke kennisgeving","Next step":"Volgende stap","Research boundary":"Onderzoeksgrens","SEO article":"SEO-artikel","SEO articles":"SEO-artikelen","Research guide":"Onderzoeksgids",Explore:"Verkennen",Guides:"Gidsen","Product Details":"Productdetails","How It Works":"Hoe het werkt",Shipping:"Verzending","Back to research desk":"Terug naar onderzoek","Buyer checklist":"Koperschecklist","Frequently asked questions":"Veelgestelde vragen","QC photo guide":"QC-fotogids","Product detail directory":"Productdetailoverzicht","Shipping guide":"Verzendgids","Beginner guide":"Beginnersgids","Official-process facts checked":"Officiële procesfeiten gecontroleerd","No “verified seller” claims":"Geen claims over ‘geverifieerde verkopers’","Built for US, UK, Canada & Europe":"Voor de VS, het VK, Canada en Europa","Independent research for clearer spreadsheet decisions.":"Onafhankelijk onderzoek voor duidelijkere spreadsheetbeslissingen.","This guide is not LoloBuy and does not process orders, payments, refunds or shipments.":"Deze gids is niet LoloBuy en verwerkt geen bestellingen, betalingen, terugbetalingen of zendingen."},
    words: {the:"de",and:"en",or:"of",for:"voor",with:"met",from:"van",to:"naar",before:"voor",after:"na",in:"in",on:"op",of:"van",a:"een",an:"een",is:"is",are:"zijn",can:"kan",not:"niet",no:"geen",use:"gebruik",check:"controleer",product:"product",products:"producten",parcel:"pakket",parcels:"pakketten",shipping:"verzending",warehouse:"magazijn",quality:"kwaliteit",inspection:"inspectie",evidence:"bewijs",source:"bron",sources:"bronnen",price:"prijs",prices:"prijzen",size:"maat",colour:"kleur",color:"kleur",photos:"foto’s",photo:"foto",item:"artikel",items:"artikelen",route:"route",routes:"routes",account:"account",guide:"gids",research:"onderzoek",decision:"beslissing",decisions:"beslissingen",live:"actueel",current:"huidig",details:"details",weight:"gewicht",measurements:"metingen",link:"link",links:"links",order:"bestelling",orders:"bestellingen",buyer:"koper",buyers:"kopers",claim:"claim",claims:"claims",coverage:"dekking",support:"ondersteuning",information:"informatie",available:"beschikbaar"},
  },
  pl: {
    phrases: {"Browse the complete product database":"Przeglądaj pełną bazę produktów","Search products, brands or styles...":"Szukaj produktów, marek lub stylów...",Search:"Szukaj","Read guide →":"Czytaj przewodnik →","Read article →":"Czytaj artykuł →","Check current product data →":"Sprawdź aktualne dane produktu →","Independent notice":"Niezależna informacja","Next step":"Następny krok","Research boundary":"Granica badań","SEO article":"Artykuł SEO","SEO articles":"Artykuły SEO","Research guide":"Przewodnik badawczy",Explore:"Odkrywaj",Guides:"Przewodniki","Product Details":"Szczegóły produktu","How It Works":"Jak to działa",Shipping:"Wysyłka","Back to research desk":"Powrót do badań","Buyer checklist":"Lista kontrolna kupującego","Frequently asked questions":"Często zadawane pytania","QC photo guide":"Przewodnik po zdjęciach QC","Product detail directory":"Katalog szczegółów produktu","Shipping guide":"Przewodnik wysyłkowy","Beginner guide":"Przewodnik dla początkujących","Official-process facts checked":"Zweryfikowano fakty dotyczące oficjalnego procesu","No “verified seller” claims":"Bez twierdzeń o „zweryfikowanych sprzedawcach”","Built for US, UK, Canada & Europe":"Dla USA, Wielkiej Brytanii, Kanady i Europy","Independent research for clearer spreadsheet decisions.":"Niezależne badania dla bardziej przejrzystych decyzji w arkuszu.","This guide is not LoloBuy and does not process orders, payments, refunds or shipments.":"Ten przewodnik nie jest LoloBuy i nie obsługuje zamówień, płatności, zwrotów ani przesyłek."},
    words: {the:"ten",and:"i",or:"lub",for:"dla",with:"z",from:"z",to:"do",before:"przed",after:"po",in:"w",on:"na",of:"z",a:"jeden",an:"jeden",is:"jest",are:"są",can:"może",not:"nie",no:"brak",use:"użyj",check:"sprawdź",product:"produkt",products:"produkty",parcel:"paczka",parcels:"paczki",shipping:"wysyłka",warehouse:"magazyn",quality:"jakość",inspection:"kontrola",evidence:"dowody",source:"źródło",sources:"źródła",price:"cena",prices:"ceny",size:"rozmiar",colour:"kolor",color:"kolor",photos:"zdjęcia",photo:"zdjęcie",item:"produkt",items:"produkty",route:"trasa",routes:"trasy",account:"konto",guide:"przewodnik",research:"badanie",decision:"decyzja",decisions:"decyzje",live:"aktualny",current:"aktualny",details:"szczegóły",weight:"waga",measurements:"wymiary",link:"link",links:"linki",order:"zamówienie",orders:"zamówienia",buyer:"kupujący",buyers:"kupujący",claim:"roszczenie",claims:"roszczenia",coverage:"ochrona",support:"wsparcie",information:"informacje",available:"dostępny"},
  },
  sv: {
    phrases: {"Browse the complete product database":"Bläddra i hela produktdatabasen","Search products, brands or styles...":"Sök produkter, varumärken eller stilar...",Search:"Sök","Read guide →":"Läs guide →","Read article →":"Läs artikel →","Check current product data →":"Kontrollera aktuella produktdata →","Independent notice":"Oberoende information","Next step":"Nästa steg","Research boundary":"Forskningsgräns","SEO article":"SEO-artikel","SEO articles":"SEO-artiklar","Research guide":"Forskningsguide",Explore:"Utforska",Guides:"Guider","Product Details":"Produktdetaljer","How It Works":"Så fungerar det",Shipping:"Frakt","Back to research desk":"Tillbaka till research","Buyer checklist":"Köparchecklista","Frequently asked questions":"Vanliga frågor","QC photo guide":"QC-fotoguide","Product detail directory":"Produktdetaljkatalog","Shipping guide":"Fraktguide","Beginner guide":"Nybörjarguide","Official-process facts checked":"Officiella processfakta kontrollerade","No “verified seller” claims":"Inga påståenden om ”verifierade säljare”","Built for US, UK, Canada & Europe":"För USA, Storbritannien, Kanada och Europa","Independent research for clearer spreadsheet decisions.":"Oberoende research för tydligare kalkylbladsbeslut.","This guide is not LoloBuy and does not process orders, payments, refunds or shipments.":"Den här guiden är inte LoloBuy och hanterar inte beställningar, betalningar, återbetalningar eller försändelser."},
    words: {the:"den",and:"och",or:"eller",for:"för",with:"med",from:"från",to:"till",before:"före",after:"efter",in:"i",on:"på",of:"av",a:"en",an:"en",is:"är",are:"är",can:"kan",not:"inte",no:"ingen",use:"använd",check:"kontrollera",product:"produkt",products:"produkter",parcel:"paket",parcels:"paket",shipping:"frakt",warehouse:"lager",quality:"kvalitet",inspection:"kontroll",evidence:"bevis",source:"källa",sources:"källor",price:"pris",prices:"priser",size:"storlek",colour:"färg",color:"färg",photos:"bilder",photo:"bild",item:"artikel",items:"artiklar",route:"rutt",routes:"rutter",account:"konto",guide:"guide",research:"research",decision:"beslut",decisions:"beslut",live:"aktuell",current:"aktuell",details:"detaljer",weight:"vikt",measurements:"mått",link:"länk",links:"länkar",order:"beställning",orders:"beställningar",buyer:"köpare",buyers:"köpare",claim:"anspråk",claims:"anspråk",coverage:"skydd",support:"support",information:"information",available:"tillgänglig"},
  },
};
function localizeText(text, lang) {
  if (lang === "en") return text;
  const pack = copyPacks[lang];
  if (!pack) return text;
  let result = text;
  for (const [source, target] of Object.entries(pack.phrases).sort((a, b) => b[0].length - a[0].length)) result = result.split(source).join(target);
  return result.replace(/\b[A-Za-z][A-Za-z’-]*\b/g, (word) => {
    const translated = pack.words[word.toLowerCase()];
    if (!translated) return word;
    return /^[A-Z]/.test(word) ? translated.charAt(0).toUpperCase() + translated.slice(1) : translated;
  });
}
function localizeHtml(html, lang) {
  if (lang === "en") return html;
  return html.replace(/>([^<>]+)</g, (_, text) => `>${localizeText(text, lang)}<`);
}
function header(lang, path) {
  const nav = routeList
    .map(
      ([url, label], index) =>
        `<a class="${(url === "/" && path === "/") || url === path ? "active" : ""}" href="${href(url, lang)}">${navLabels[lang][index] || label}</a>`,
    )
    .join("");
  const languageLinks = Object.keys(locales)
    .map((code) => `<a class="${code === lang ? "selected" : ""}" href="${href(path, code)}" lang="${code}"><span aria-hidden="true">${{en:"🇬🇧",de:"🇩🇪",fr:"🇫🇷",es:"🇪🇸",it:"🇮🇹",pt:"🇵🇹",nl:"🇳🇱",pl:"🇵🇱",sv:"🇸🇪"}[code]}</span>${languageLabels[code]}${code === lang ? " <b aria-label=\"selected\">✓</b>" : ""}</a>`)
    .join("");
  const darkTheme = `<style>:root{--ink:#f8fbff;--muted:#b8c4df;--paper:#0d1533;--line:#536080;--orange:#ff5266;--gold:#47f9df;--dark:#171e45}body{background:radial-gradient(circle at 78% 8%,#271456 0,transparent 32%),radial-gradient(circle at 10% 42%,#0a2441 0,transparent 36%),#0d1533;color:var(--ink)}header{background:#232d4b;border-color:#536080}.brand{color:#ff6051}.brand span{color:#ff9e20}nav a{color:#f8fbff}nav a:hover,nav a.active{border-color:#47f9df}.language{color:#d5def1}select{background:#1a2442;color:#f8fbff;border-color:#667294}.eyebrow{color:#47f9df}h1 i{color:#ff5266}.search input{background:#2c3657;border-color:#7380a1;color:#fff}.search input::placeholder{color:#b6c1da}.search button,.button{background:#47f9df;color:#101936}.search button:hover,.button:hover{background:#73ffe9}.promises span:before{color:#47f9df}.workflow,.next{background:#222d4e;border-color:#586587}.workflow span{border-color:#596689}.category-grid a,.guide-grid a,.detail-grid article,.article-list a{background:#202a49;border-color:#586587;color:#f8fbff}.category-grid small,.guide-grid p,.detail-grid article p,.article-list p:not(.eyebrow),.scope>p:last-child,.four-checks p,.checklist p,.faq p,.article p{color:#b8c4df}.category-grid em,.detail-grid article>a{color:#47f9df}.category-grid a:hover,.guide-grid a:hover,.article-list a:hover{border-color:#47f9df;box-shadow:0 8px 28px #0004}.save{background:linear-gradient(135deg,#172343,#28124d);border:1px solid #56628b}.save .eyebrow{color:#47f9df}.save p:not(.eyebrow),.save li span{color:#c5d0e7}.light{background:#ff5266;color:#fff}.four-checks div{border-color:#47f9df}.detail-grid small,.checklist article>b,.faq article>b{color:#47f9df}.actions li:before{color:#47f9df}footer{background:#171f3d;border-color:#536080;color:#b8c4df}.footlinks span,.footlinks a,.back{color:#f8fbff}.scope{border-color:#536080}</style>`;
  const mobileTheme = `<style>@media(max-width:600px){body{font-size:15.5px;line-height:1.52}.wrap{width:min(100% - 24px,1060px)}.top{height:58px;gap:10px}.brand{font-size:22px}nav{gap:12px}nav a{padding:18px 0;font-size:13px}.hero{padding:29px 0 22px}section{margin-top:38px}.pagehead{padding-top:30px}.pagehead .back{margin-bottom:19px}h1{font-size:clamp(32px,10vw,43px)}h2{font-size:27px}.lead{font-size:16px;margin:14px 0}.search{margin:17px 0 8px}.search input{padding:12px}.search button,.button{padding:12px 14px}.promises{gap:8px;margin-top:17px}.workflow{padding:17px}.workflow span{font-size:13px}.category-grid{grid-template-columns:repeat(2,1fr)!important;gap:8px!important}.category-grid a{min-height:92px!important;padding:11px!important}.category-grid a span{width:39px!important;height:39px!important;margin-bottom:7px!important}.guide-grid{grid-template-columns:repeat(2,1fr)!important;gap:8px}.guide-grid a{min-height:160px;padding:14px}.save{padding:23px;gap:22px}.save h2{font-size:30px}.scope{padding-bottom:26px}footer{margin-top:45px;padding:29px 0}.article-list{gap:10px}.article-list a{min-height:165px;padding:15px}.article{margin-top:31px}.article p{font-size:15.5px}.faq article,.checklist article{padding:16px 0;gap:12px;grid-template-columns:34px 1fr}.faq article>b,.checklist article>b{font-size:21px}}</style>`;
  return `${darkTheme}${mobileTheme}<style>html,body{overflow-x:hidden!important}nav{overflow:visible!important;gap:14px!important}nav a{font-size:13px!important}.language{position:relative;flex:none;color:#d5def1}.language summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:8px;min-width:132px;padding:7px 10px;border:1px solid #667294;border-radius:7px;background:#1a2442;font-size:12px;color:#f8fbff}.language summary::-webkit-details-marker{display:none}.language summary:after{content:'⌄';font-size:15px;line-height:1}.language[open] summary{border-color:#47f9df}.language-menu{position:absolute;right:0;top:calc(100% + 9px);z-index:20;width:220px;padding:7px;border:1px solid #586587;border-radius:12px;background:#1a2442;box-shadow:0 14px 34px #0008;display:grid;gap:2px}.language-menu a{display:flex;align-items:center;gap:8px;padding:8px 9px;border-radius:7px;color:#f8fbff;text-decoration:none;font-size:12px}.language-menu a:hover{background:#2c3657}.language-menu a.selected{background:#47f9df;color:#101936;font-weight:bold}.language-menu a b{margin-left:auto}@media(max-width:600px){.language summary{min-width:66px;padding:7px 8px;font-size:0}.language summary:before{content:'🌐';font-size:15px}.language-menu{position:fixed;right:12px;top:64px;width:min(250px,calc(100vw - 24px));max-height:calc(100vh - 78px);overflow:auto}}</style><header><div class="wrap top"><a class="brand" href="/?lang=${lang}" aria-label="LoloBuy guide home">Lolo<span>Buy</span></a><nav aria-label="Primary navigation">${nav}</nav><details class="language"><summary aria-label="${languageNames[lang]}">${locales[lang]}</summary><div class="language-menu" role="menu">${languageLinks}</div></details></div></header>`;
}
function footer(lang) {
  return `<footer><div class="wrap"><a class="brand small" href="/?lang=${lang}">Lolo<span>Buy</span></a><p>Independent research for clearer spreadsheet decisions.</p><div class="footlinks"><span>Explore</span><a href="/?lang=${lang}">Home</a><a href="/product-details?lang=${lang}">Product Details</a><a href="/seo-articles?lang=${lang}">SEO Articles</a></div><div class="footlinks"><span>Guides</span><a href="/how-lolobuy-works?lang=${lang}">How It Works</a><a href="/qc-guide?lang=${lang}">QC</a><a href="/shipping-guide?lang=${lang}">Shipping</a><a href="/faq?lang=${lang}">FAQ</a></div><p class="notice"><b>Independent notice</b><br>This guide is not LoloBuy and does not process orders, payments, refunds or shipments.</p></div></footer>`;
}
function database() {
  return `<a class="button" href="https://findspreadsheet.com/AllProducts/">Browse the complete product database</a>`;
}
function search() {
  return `<form class="search" action="https://findspreadsheet.com/search.html" method="get" onsubmit="const query=this.keywords.value.trim();if(!query)return false;this.keywords.value=query;this.channelid.value='0'"><input name="keywords" aria-label="Search products" placeholder="Search products, brands or styles..." required><input type="hidden" name="channelid" value="0"><button type="submit">Search</button></form>`;
}
function categoryGrid(lang) {
  return `<div class="category-grid" style="grid-template-columns:repeat(5,1fr);gap:16px">${categories.map(([name, icon, path]) => `<a href="https://findspreadsheet.com${path}" style="min-height:122px;align-items:center;justify-content:center;text-align:center;padding:16px"><span style="display:grid;place-items:center;width:48px;height:48px;border-radius:13px;background:#2a3458;color:#47f9df;font-size:23px;line-height:1;margin-bottom:11px">${icon}</span><b style="font-size:15px">${name}</b></a>`).join("")}</div>`;
}
function home(lang) {
  return `<main class="wrap"><section class="hero"><p class="eyebrow">Independent LoloBuy research desk · 2026</p><h1>A clearer way to use a <i>LoloBuy spreadsheet.</i></h1><p class="lead">Search product ideas, compare source links, review QC evidence, check sizing and think through shipping weight before you save a find.</p>${search()}${database()}<div class="promises"><span>Official-process facts checked</span><span>No “verified seller” claims</span><span>Built for US, UK, Canada & Europe</span></div></section><section class="workflow"><p class="eyebrow">What LoloBuy publicly describes</p><div><span>Product search</span><span>Buy-for-me order</span><span>China warehouse</span><span>Quality inspection</span><span>International shipping</span></div></section><section id="categories"><p class="eyebrow">Category-first research</p><h2>Compare like with like.</h2><p class="intro">Every category needs different evidence. Use the right checks before opening a product result.</p>${categoryGrid(lang)}</section><section><p class="eyebrow">The research library</p><h2>Answers before checkout.</h2><p class="intro">Each guide has one job, with clear boundaries between independent research and official account support.</p><div class="guide-grid"><a href="/how-lolobuy-works?lang=${lang}"><h3>How LoloBuy works</h3><p>A practical route from product discovery and purchasing request to warehouse handling.</p><b>Read guide →</b></a><a href="/qc-guide?lang=${lang}"><h3>QC photo guide</h3><p>Category-specific photo checks that help you spot missing evidence before a parcel is approved.</p><b>Read guide →</b></a><a href="/shipping-guide?lang=${lang}"><h3>Shipping planner</h3><p>Plan around weight, packaging, destination and route—not an invented delivery promise.</p><b>Read guide →</b></a><a href="/buyer-checklist?lang=${lang}"><h3>Buyer checklist</h3><p>A seven-point filter for source links, photos, sizing, price context and parcel risk.</p><b>Read guide →</b></a></div></section><section class="save"><div><p class="eyebrow">The 60-second save test</p><h2>Make every row earn its place.</h2><p>A low price is not enough. Keep a product only when its evidence survives a quick structured review.</p><a class="button light" href="/buyer-checklist?lang=${lang}">Open the full checklist</a></div><ol><li><b>Useful photos</b><span>Do they show the details that matter for this category?</span></li><li><b>Measurements, not guesses</b><span>Can you compare the listing to an item that fits?</span></li><li><b>Matching source</b><span>Does the external listing still match the saved row?</span></li><li><b>Weight-aware value</b><span>Does the find still make sense after packaging?</span></li></ol></section><section class="scope"><p class="eyebrow">Fact-checked scope</p><h2>What we can—and cannot—confirm.</h2><p>LoloBuy publicly describes product discovery, purchasing support, warehouse handling, quality inspection and international delivery. Exact availability, pricing, route eligibility and final shipping costs depend on the live item, parcel, destination and account. This independent guide never turns those variables into made-up guarantees.</p></section></main>`;
}
function productDetails(lang) {
  const notes = {
    Sneakers:
      "Side profile, heel, outsole, size label, material close-ups and packed weight.",
    "T-shirts": "Chest, length, fabric, print placement, seams and colour.",
    Hoodies: "Chest, length, fabric weight, lining, cuffs, hood and print.",
    Jackets:
      "Shell, lining, closures, pockets, measurements and parcel volume.",
    Pants: "Waist, rise, inseam, leg opening, fabric and wash.",
    Bags: "Dimensions, interior, hardware, straps, closures and packaging.",
    Accessories: "Scale, material, fastening, finish and source match.",
    Jewelry: "Dimensions, finish, clasp, stated material and close-ups.",
    Watches: "Dial, case, clasp, dimensions, finish and stated movement.",
    Electronics:
      "Model, specifications, plug, accessories, battery and route eligibility.",
  };
  return page(
    lang,
    "Product detail directory",
    "Read the evidence behind every LoloBuy find.",
    "Product cards are useful only when the source link, current options, QC photos, measurements and likely shipping weight still agree.",
    `${database()}<div class="four-checks"><div><h3>Source match</h3><p>Confirm the original marketplace listing still shows the same item, options and images.</p></div><div><h3>QC evidence</h3><p>Use category-specific photo angles. One attractive image is not a complete inspection.</p></div><div><h3>Measurements</h3><p>Compare centimetres with an item you already own instead of trusting a size label alone.</p></div><div><h3>Weight context</h3><p>Judge value after likely packaging and parcel weight, especially for shoes, coats and bags.</p></div></div><section><p class="eyebrow">Ten core categories</p><h2>What each detail page should show.</h2><p class="intro">These checks help readers compare similar products before they continue to the main database.</p><div class="detail-grid">${Object.entries(
      notes,
    )
      .map(
        ([name, n], i) =>
          `<article><small>${String(i + 1).padStart(2, "0")}</small><p class="eyebrow">Product-specific checks</p><h3>${name}</h3><p>${n}</p><b>Source & option</b><p>Save the source page, selected variant and live price.</p><b>QC decision</b><p>Match the received item to the selected option and request any missing view.</p><b>Parcel record</b><p>Record warehouse weight and packed dimensions before choosing a route.</p><a href="https://findspreadsheet.com/AllProducts/">Check current product data →</a></article>`,
      )
      .join(
        "",
      )}</div></section><section class="scope"><h2>No invented product promises</h2><p>Prices, stock, seller pages, variants and shipping options can change. The main database is the next research step—not a guarantee of product quality or availability.</p></section>`,
  );
}
function guide(lang, kicker, title, intro, sections) {
  return page(
    lang,
    kicker,
    title,
    intro,
    `${sections.map(([h, p]) => `<section class="article"><h2>${h}</h2><p>${p}</p>${action}</section>`).join("")}<section class="next"><p class="eyebrow">Next step</p><h2>Browse with a question, not a guess.</h2>${database()}</section>`,
  );
}
function checklist(lang) {
  const items = [
    "Current source link",
    "Exact option and visible price",
    "Useful product photos",
    "Measurements that can be compared",
    "Category-specific QC evidence",
    "Warehouse weight or a clear estimate",
    "A destination-aware parcel plan",
  ];
  return page(
    lang,
    "Buyer checklist",
    "The seven-point LoloBuy spreadsheet buyer checklist",
    "A useful spreadsheet is a shortlist, not a promise. Give a row one point for each check with visible evidence before you place an order.",
    `<section class="checklist">${items.map((x, i) => `<article><b>${i + 1}</b><div><h2>${x}</h2><p>Record the information you can see now, identify what is missing and do not replace live evidence with an old spreadsheet claim.</p></div></article>`).join("")}</section><section class="scope"><h2>Use the score as a question list.</h2><p>A low score is a reason to gather more evidence or skip the item. It is not a prediction of product quality, delivery time or seller reliability.</p></section>`,
  );
}
function faq(lang) {
  const qs = [
    [
      "Can I start an order with a product link?",
      "LoloBuy’s public homepage says users can paste a product link to create an order and that it provides purchasing support for China-based online and offline channels. That does not make a spreadsheet row a live order record: recheck the exact option, price and availability in the account before payment.",
    ],
    [
      "What does LoloBuy say happens when goods reach its warehouse?",
      "Its homepage says the warehouse checks items for defects and verifies details such as size and colour, then sends inspection feedback. Treat those photos and feedback as evidence for the visible item at that moment, not as proof of authenticity, durability or future availability.",
    ],
    [
      "Does the platform state a free storage period?",
      "Yes. The public homepage currently states 180 days of free storage. Policies can change, so confirm the live account terms before relying on a storage deadline or planning a delayed parcel.",
    ],
    [
      "Can several orders be combined into one parcel?",
      "LoloBuy describes selecting warehouse-stored goods and submitting them as a single parcel. Whether a specific set of goods can ship together depends on the live parcel, destination, route rules and any restrictions; do not assume that every item combination is eligible.",
    ],
    [
      "What should I check in QC photos?",
      "First match the item to the selected colour, size, quantity and source. Then check category-specific details: measurements and seams for clothing, profile and outsole for shoes, or hardware and interior for bags. Request a focused missing view when the supplied evidence cannot answer one concrete question.",
    ],
    [
      "Can this guide promise a shipping price or delivery date?",
      "No. LoloBuy’s homepage advertises a range of logistics routes, but the usable route, price, timing, limits and tracking depend on the live parcel and destination. Use the account’s current quote for a decision, not a number copied into an old spreadsheet.",
    ],
    [
      "What is ShipCare?",
      "LoloBuy’s 21 August 2026 ShipCare notice describes it as an optional paid protection service for parcel shipping. The notice lists loss, damage or partial loss, customs seizure and delivery delay coverages, subject to the chosen shipping line’s terms. It is not a blanket guarantee for every parcel or outcome.",
    ],
    [
      "How is ShipCare priced?",
      "The August 2026 notice says its fee rate ranges from 5% to 6% and is calculated from merchandise value plus international shipping fee. It also says compensation can vary by shipping line. Read the exact line-specific promise before purchase rather than inferring a single level of cover from the percentage.",
    ],
    [
      "What evidence matters if a parcel is damaged or partly missing?",
      "The ShipCare notice says a damage or partial-loss claim requires a complete, unedited, continuous unboxing video beginning before the parcel is opened, along with supporting parcel and value information. It says the claim must be filed within three days of receipt. Keep the outer packaging, tracking details and item list until the case is resolved.",
    ],
    [
      "When can protection be cancelled?",
      "According to the ShipCare notice, coverage can be cancelled and refunded if the parcel is cancelled before warehouse dispatch. Once dispatched, it becomes effective and cannot normally be cancelled separately. For a live claim, refund or account question, use LoloBuy’s official support because this independent guide cannot access an order.",
    ],
  ];
  return page(
    lang,
    "Frequently asked questions",
    "Clear answers before you submit a request.",
    "These answers explain the limits of independent product research and the checks worth making before an order or parcel decision.",
    `<section class="faq">${qs.map(([q, a], i) => `<article><b>${String(i + 1).padStart(2, "0")}</b><div><h2>${q}</h2><p>${a}</p></div></article>`).join("")}</section>`,
  );
}
const seoArticles = {
  "using-lolobuy-spreadsheet": {
    title: "How to use a LoloBuy spreadsheet as research—not a promise",
    intro: "A practical 2026 method for turning a product row into a clearer buying decision without inventing certainty about stock, quality or shipping.",
    sections: [
      ["Start by separating the spreadsheet from the live order", ["A spreadsheet is useful because it keeps a product discovery process from turning into a pile of forgotten tabs. It can preserve a source link, a visible option, a rough price context and the date you looked. It cannot freeze any of those things. Sellers alter listings, variants disappear and photographs can be reused across more than one option. The first habit is therefore simple: label the row as research, not as proof that an item is available or suitable.", "LoloBuy’s public homepage says that a user can paste a product link to begin an order and that the service assists purchases from China-based online and offline channels. That explains why a clean link is more valuable than a copied title. Before you continue, reopen the source, compare its images and selected option with your note, and write down what is still unknown. This is not extra administration; it is the point where a convenient list becomes a decision tool."]],
      ["Capture the facts that can change", ["Use one row per exact option. Record the URL, product name as shown, colour, size, quantity, visible price, listing measurements and the review date. A photo alone is not enough to identify a garment, shoe or bag variant. If the listing offers several materials or colourways, say which one you mean. If something is an estimate, mark it as an estimate instead of presenting it as a final cost.", "This approach has a useful side effect: it exposes weak candidates early. A row without a source, an option or measurements is not ready for payment. It is simply a lead. You can keep it, but it should not be mixed with products that have current evidence. When revisiting a spreadsheet, review the oldest rows first. If their live source no longer matches, archive them rather than letting old information influence a new purchase."]],
      ["Use the warehouse step for focused verification", ["The public LoloBuy homepage says items arriving at its warehouse are inspected for defects and for details such as size and colour, and that inspection feedback is sent to the user. That is useful, but it does not mean every question has automatically been answered. A warehouse photo can show a visible item at a particular time; it cannot prove hidden construction, long-term durability, authenticity or how an item will fit you.", "A stronger method is to decide in advance what evidence matters for the category. For a shoe, that might be side profile, heel, outsole, size label and a close-up of a material detail. For clothing, it might be chest, length, seams, print placement and a centimetre measurement. For a bag, it may be dimensions, interior, hardware and straps. If a key view is absent, ask one precise question rather than a vague request to “check quality.”"]],
      ["Treat storage as time to think, not a reason to delay forever", ["LoloBuy’s homepage currently states 180 days of free storage. That can give a buyer time to collect orders and review warehouse information, but it should not turn into an assumption that every item or policy will remain unchanged. Confirm the live account terms before planning around a deadline, especially if a purchase decision will be delayed for months.", "Use storage time deliberately. First, match warehouse photos to the selected option. Next, identify whether you need another angle or measurement. Then decide whether the item belongs in the same parcel as your other purchases. A simple status column—research, ordered, arrived, evidence reviewed, ready to parcel or paused—prevents the spreadsheet from becoming a list of things you meant to check later."]],
      ["Plan the parcel after the product decision", ["The homepage also describes selecting warehouse-stored goods and submitting them as a single parcel. Consolidation can be useful, but it changes the question from “Do I like this item?” to “Does this group of items make sense together?” Weight, dimensions, packaging, goods type, route rules and destination all matter. A low product price does not answer that second question.", "Do not turn an early shipping number into a promise. Instead, compare alternatives using the same information: the actual destination, the current measured parcel data when available, the route’s restrictions and the protection or tracking terms displayed for that route. If you cannot state why a route is suitable for the parcel, leave the decision open. The aim is not to predict a perfect outcome; it is to make fewer decisions on incomplete evidence."]],
      ["Keep an evidence trail for the next decision", ["Before payment, save the source link, selected option, visible price and date. Before parcel submission, keep the warehouse photos, measurements, item list, weight or dimensions shown in the account and the route selected. These records are useful when you need to compare a later change, explain a question to support or decide whether to remove one item from a parcel.", "The most honest spreadsheet ends with a boundary. It can help you find products, organise evidence and prepare better questions. It cannot guarantee seller reliability, item quality, customs treatment, final shipping cost or delivery timing. LoloBuy’s own account and live service pages are the place to verify current order and parcel terms. Your spreadsheet’s job is to make that verification quicker and clearer, not to replace it."]],
      ["Make your next question smaller, not louder", ["When a product feels uncertain, buyers often ask for a yes-or-no answer that no photograph can responsibly provide: “Is it good?”, “Will it fit?”, or “Is this safe to ship?” Replace that broad question with one observable question. Is the printed measurement visible? Does the label match the selected option? Is the outsole photo consistent with the source? Is the interior shown? Smaller questions are easier to answer and create a record that another person can check later.", "This method also keeps advice honest. An independent guide can explain how to collect and compare evidence. It cannot inspect a parcel, access a seller conversation or override a live account result. If an item needs an answer that only the platform, seller or carrier can give, mark that boundary in the row and ask through the correct channel. The goal is not to sound confident; it is to know which confidence is earned by evidence and which is not." ]],
      ["A spreadsheet is strongest when it helps you say no", ["Good research is not only about finding more products. It is also about removing rows that do not meet a clear standard. If the source changed, the option is unclear, measurements are missing, or the likely parcel does not make sense for the destination, pausing is a valid outcome. A shortlist becomes more useful when every remaining item has a reason to be there.", "At the end of a session, write one sentence beside each candidate: what is confirmed, what is not confirmed, and what action would resolve the uncertainty. That simple discipline makes later decisions faster and makes it less tempting to confuse an old find with a current recommendation. It is also more useful for readers than exaggerated claims. The best spreadsheet is not the biggest one; it is the one that makes the next live check obvious."]],
    ],
  },
  "shipcare-parcel-evidence": {
    title: "ShipCare, parcel evidence and realistic shipping protection decisions",
    intro: "An evidence-led reading of LoloBuy’s 21 August 2026 ShipCare notice, with a practical checklist for deciding whether optional parcel protection fits a live shipment.",
    sections: [
      ["Read the service as a set of terms, not a promise", ["LoloBuy’s public ShipCare notice, updated on 21 August 2026, describes ShipCare as an optional paid value-added protection service for parcel shipping. It lists four areas of cover: loss, damage or partial loss, customs seizure and delivery delay. The important word is optional. The notice does not say every parcel, product or event is automatically covered, and it directs users to the shipping-line terms shown when the service is selected.", "That distinction matters when you are building a spreadsheet. A row labelled “insured” hides the question that determines the result: insured for what, on which line, for which parcel and under which conditions? Record the actual line, coverage choice, declared value context, purchase date and visible compensation terms. If the account does not show the exact terms you need, do not fill the gap with an assumption based on another route or another buyer’s screenshot."]],
      ["Understand the published price description", ["The ShipCare notice says the fee rate ranges from 5% to 6% and is calculated as merchandise value plus international shipping fee multiplied by the service fee rate. It also gives an illustrative calculation in RMB. This is a pricing description, not a universal quote. The rate and any resulting fee must be checked against the live selected service and line.", "The same notice says compensation can vary by shipping line and that the relevant line’s service commitment or compensation promise governs a covered incident. That is a reason to compare coverage alongside route restrictions and tracking, not after the parcel has left the warehouse. If one choice costs more, ask what actually changes: the event covered, the payout basis, the evidence needed, the deadline or none of those things. A percentage alone does not answer that question."]],
      ["Check what cannot be covered before building the parcel", ["The notice lists extensive non-insurable categories, including intellectual-property-infringing goods, valuables, tobacco products, pharmaceuticals other than health supplements, perishables, hazardous or flammable goods, and items restricted by relevant air-transport or government rules. It also identifies various excluded industrial and high-risk items. This is not a minor footnote: an optional protection service cannot make a prohibited or restricted parcel acceptable.", "Use that information as an early screening step. Verify the actual goods type, material and route restrictions before paying for a product or adding it to a parcel. Do not substitute a vague title for the item’s real nature. When in doubt, the live account and route information are more authoritative than a spreadsheet category. A conservative research decision can save more trouble than discovering an ineligible item after consolidation."]],
      ["Evidence begins before the package is opened", ["For damage or partial-loss claims, the ShipCare notice says a complete, unedited and continuous unboxing video is required, starting before the parcel is opened and clearly showing the damage or defect. It also lists parcel tracking information, proof of value, a list of affected items and photographs as relevant supporting materials. The notice says electronic and 3C products are excluded from this compensation scope.", "This should change how you receive a parcel. Keep the exterior labels and packaging in frame, record the opening continuously, and do not throw away the carton before you understand whether there is a problem. A few attractive warehouse photos cannot replace receipt evidence or an arrival record. Make a receiving checklist in advance so you are not trying to reconstruct what happened after packing materials have been removed."]],
      ["Deadlines and exclusions are part of the decision", ["The notice says a damage or partial-loss claim must be made within three days of receiving the parcel. For whole-parcel loss, it refers to a 30-day window from the carrier’s loss certificate. It also says that claims require the designated support channel in Parcel Details – Protection Service. These are operational deadlines, so save the delivery date and tracking result rather than relying on memory.", "The exclusions matter just as much. The notice says parcels marked delivered or signed are not covered for loss, and it excludes situations involving incorrect consignee information, failure to complete local customs procedures such as duty or tax payment, late acceptance, force majeure and missing required evidence. None of those statements tells you what will happen to an individual parcel; they tell you why a protection decision needs careful reading before dispatch."]],
      ["Use a calm, specific decision rule", ["Before buying ShipCare, ask five questions. What exact line am I selecting? Which coverage is displayed for that line? Is the item eligible? What proof would I need if an event occurred? Can I meet the stated receiving and claim deadlines? Then compare the fee with the terms, not with the hope that nothing will go wrong. If the answers are unclear, pause and read the live service commitment again.", "The notice says coverage can be cancelled and the fee refunded if the parcel is cancelled before dispatch from the warehouse; once dispatched, coverage becomes effective and generally cannot be cancelled separately. That is another reason to decide while the parcel is still editable. ShipCare may be a useful option for a particular live parcel, but it is not a substitute for accurate recipient details, route compliance, clear parcel records or careful unboxing evidence."]],
      ["Make the address and parcel record part of protection", ["Protection terms are only one part of a safer delivery process. The ShipCare notice expressly excludes some loss or damage scenarios that result from incorrect consignee details or failures around local customs procedures, including non-payment of duties or taxes. That means a buyer should treat recipient name, phone number, address and destination requirements as evidence to check before dispatch, not as fields to fill in quickly at the end.", "Create one parcel record with the final item list, route, tracking number, recipient details confirmation and screenshots of any selected protection terms. This is not a legal claim file; it is a practical way to avoid losing the information you may need later. If a detail changes, save the new date and the new version. A clear record cannot change a policy, but it can make a question to official support faster and more specific." ]],
      ["Keep the final tracking result in perspective", ["The notice says LoloBuy will use the final tracking information from the official logistics partner as the primary basis for whole-parcel non-receipt assessment. It also says parcels shown as delivered or successfully signed are not covered for loss. Read that before dispatch, not after a problem occurs. Tracking is an operational record; it is not something a spreadsheet can reinterpret after the fact.", "The practical response is to watch delivery, receive the parcel carefully and preserve evidence immediately if there is visible damage or an item is missing. Do not rely on a later memory of what was in the box. Follow the current live claim route and terms shown in the account, and do not invent eligibility from a general article. The purpose of this guide is to help a buyer prepare sensible evidence and questions—not to promise a claim outcome." ]],
    ],
  },
};
function articleDetail(lang, slug) {
  const article = seoArticles[slug];
  if (!article) return articles(lang);
  const body = `<article class="longform">${article.sections.map(([heading, paragraphs]) => `<section class="article"><h2>${heading}</h2>${paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}</section>`).join("")}<section class="next"><p class="eyebrow">Research boundary</p><h2>Use the live account for live decisions.</h2><p>Official LoloBuy pages reviewed for this article: homepage and the ShipCare notice updated 21 August 2026. Policies, route availability and account terms can change. This independent article does not handle orders, claims or payments.</p>${database()}</section></article>`;
  return page(lang, "SEO article", article.title, article.intro, body);
}
function articles(lang) {
  const a = Object.entries(seoArticles).map(([slug, article]) => [article.title, article.intro, `/seo-articles/${slug}`]);
  return page(
    lang,
    "SEO articles",
    "Fact-based LoloBuy research articles.",
    "Long-form, independent guides based on LoloBuy’s public service information and clear distinctions between confirmed facts and practical buyer decisions.",
    `<section class="article-list">${a.map(([h, p, u]) => `<a href="${u}?lang=${lang}"><p class="eyebrow">Research guide</p><h2>${h}</h2><p>${p}</p><b>Read article →</b></a>`).join("")}</section>`,
  );
}
function page(lang, kicker, title, intro, body) {
  return `<main class="wrap"><section class="pagehead"><a class="back" href="/?lang=${lang}">← Back to research desk</a><p class="eyebrow">${kicker}</p><h1>${title}</h1><p class="lead">${intro}</p><p class="meta">Independent guide · Reviewed 1 September 2026 · For US, UK, Canada & Europe</p></section>${body}</main>`;
}
export default {
  async fetch(req) {
    const url = new URL(req.url),
      lang = locales[url.searchParams.get("lang")]
        ? url.searchParams.get("lang")
        : "en",
      path = url.pathname;
    let body;
    if (path === "/") body = home(lang);
    else if (path === "/product-details") body = productDetails(lang);
    else if (path === "/how-lolobuy-works")
      body = guide(
        lang,
        "Beginner guide",
        "How LoloBuy works: from product link to international parcel",
        "An independent, practical walk-through from product discovery to parcel planning. Live account, payment and shipment questions always belong with official support.",
        [
          [
            "Start with the original product evidence",
            "Save the source URL, visible seller name, option, price, measurements and review date. A copied title alone cannot identify a specific product variant.",
          ],
          [
            "Search by link or keyword",
            "A direct link is normally easier to compare with the source. A keyword search can surface similar items, so compare title, images and options before proceeding.",
          ],
          [
            "Submit the purchasing request carefully",
            "Write colour, size, quantity and any relevant notes exactly as shown. Treat the live account record—not an old spreadsheet row—as the decision record.",
          ],
          [
            "Understand warehouse inspection",
            "Confirm identity first: item, colour, size, quantity and labels. Then ask for a focused view if a category-specific angle or measurement is missing.",
          ],
          [
            "Build the parcel before choosing a route",
            "Use the latest measured weight and dimensions. Packaging, item type and destination can change which routes are available.",
          ],
          [
            "Keep parcel records",
            "Save the item list, route, measured data, payment and tracking record. Cross-border delivery involves carriers and customs outside an independent guide.",
          ],
        ],
      );
    else if (path === "/shipping-guide")
      body = guide(
        lang,
        "Shipping guide",
        "LoloBuy shipping planning for the US, UK, Canada and Europe",
        "The useful comparison starts with the actual parcel: destination, goods type, weight, dimensions and packaging.",
        [
          [
            "Use actual and volumetric weight",
            "A light but large parcel can be billed differently from a compact parcel. Replace early estimates when warehouse data becomes available.",
          ],
          [
            "Use an estimate as a comparison",
            "Test realistic scenarios, then recheck the current parcel quote. An estimate is not a final invoice or an availability promise.",
          ],
          [
            "Build a cleaner parcel",
            "Ship items that match the order and have enough evidence. Balance protective packaging with volume for the actual products.",
          ],
          [
            "Compare routes with the same questions",
            "Review price, billing method, limits, restrictions, tracking and destination coverage together rather than choosing only by a headline price.",
          ],
          [
            "Use destination-specific information",
            "Do not transfer a result between countries. Customs, taxes, declarations and route eligibility depend on the exact destination and parcel.",
          ],
          [
            "Keep realistic expectations",
            "Tracking can pause between carrier handoffs. Keep the parcel record and use official support if current account information needs clarification.",
          ],
        ],
      );
    else if (path === "/buyer-checklist") body = checklist(lang);
    else if (path === "/faq") body = faq(lang);
    else if (path.startsWith("/seo-articles/"))
      body = articleDetail(lang, path.split("/").pop());
    else if (path === "/seo-articles") body = articles(lang);
    else if (path === "/qc-guide")
      body = guide(
        lang,
        "QC photo guide",
        "What to check before you approve a LoloBuy parcel",
        "QC photos are evidence for a current item, not a guarantee. Review identity first, then the details that matter for its category.",
        [
          [
            "Confirm product identity",
            "Match the item, colour, size, quantity and visible labels to the selected option before evaluating appearance.",
          ],
          [
            "Ask category-specific questions",
            "Shoes need profile and outsole views; clothing needs measurements and seam checks; bags need hardware, interior and dimensions.",
          ],
          [
            "Use measurements where possible",
            "Compare centimetres against an item you own. A size label alone can be inconsistent across products.",
          ],
          [
            "Request focused additional evidence",
            "Ask for a specific missing angle, label or measurement. Broad requests are harder to answer and may still miss the key detail.",
          ],
          [
            "Record the warehouse data",
            "Keep photos, observations, weight and dimensions next to the source. This makes parcel planning less dependent on memory.",
          ],
          [
            "Know the limit of photos",
            "Visible images cannot prove hidden construction, durability, material composition or long-term performance.",
          ],
        ],
      );
    else body = home(lang);
    // Translate every rendered text node locally while preserving the exact same
    // markup, cards, FAQ entries, article paragraphs, buttons and search form.
    // This keeps the chosen language on the current route without any external
    // translation bar or a reduced-content fallback.
    const localizedPage = localizeHtml(`${body}${footer(lang)}`, lang);
    return new Response(
      `<!doctype html><html lang="${lang}"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${pageTitles[lang] || pageTitles.en}</title><style>:root{--ink:#123b34;--muted:#587069;--paper:#faf7f0;--line:#ddd3c4;--orange:#ef6332;--gold:#e4b140;--dark:#173e36}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--paper);color:var(--ink);font:16px/1.6 Arial,sans-serif}.wrap{width:min(1060px,calc(100% - 44px));margin:auto}header{background:#fffdf9;border-bottom:1px solid var(--line);position:sticky;top:0;z-index:5}.top{height:73px;display:flex;align-items:center;gap:25px}.brand{font-size:28px;font-weight:900;text-decoration:none;letter-spacing:-1.7px;color:var(--orange);white-space:nowrap}.brand span{color:#f4a617}nav{display:flex;gap:17px;overflow:auto;flex:1}nav a{padding:25px 0;color:var(--ink);text-decoration:none;font-size:14px;white-space:nowrap;border-bottom:2px solid transparent}nav a:hover,nav a.active{border-color:var(--orange)}.language{font-size:12px;white-space:nowrap;color:var(--muted)}select{padding:7px;border:1px solid var(--line);border-radius:5px;background:white;color:var(--ink)}.hero{padding:80px 0 64px}.eyebrow{margin:0 0 13px;color:#a46218;text-transform:uppercase;font-size:12px;letter-spacing:.1em;font-weight:bold}h1{font-size:clamp(39px,5vw,63px);letter-spacing:-.055em;line-height:1.06;margin:0;max-width:790px}h1 i{font-style:normal;color:var(--orange)}h2{font-size:32px;line-height:1.15;letter-spacing:-.035em;margin:0 0 12px}h3{font-size:19px;margin:0 0 8px}.lead{color:var(--muted);font-size:18px;max-width:745px;margin:21px 0}.intro{color:var(--muted);max-width:700px;margin:0 0 24px}.search{display:flex;width:min(590px,100%);margin:26px 0 10px}.search input{min-width:0;flex:1;padding:15px;border:1px solid #bdc8bf;border-radius:8px 0 0 8px;font-size:15px}.search button,.button{border:0;background:var(--gold);color:#17332d;font-weight:bold;font-size:14px;padding:14px 18px;border-radius:7px;text-decoration:none}.search button{border-radius:0 8px 8px 0}.button{display:inline-block}.promises{display:flex;gap:19px;flex-wrap:wrap;margin-top:28px;font-size:12px;color:var(--muted)}.promises span:before{content:'✓';color:var(--orange);font-weight:bold;margin-right:6px}.workflow{padding:27px 29px;border:1px solid var(--line);background:#f1eadf;border-radius:13px}.workflow>p{margin-bottom:12px}.workflow div{display:flex;flex-wrap:wrap}.workflow span{font-size:14px;padding:5px 18px;border-right:1px solid #ccbfab}.workflow span:first-child{padding-left:0}section{margin-top:78px}.category-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.category-grid a,.guide-grid a,.detail-grid article,.article-list a{background:#fff;border:1px solid var(--line);border-radius:12px;padding:18px;color:var(--ink);text-decoration:none}.category-grid a{min-height:108px;display:flex;flex-direction:column}.category-grid b{font-size:17px}.category-grid small{font-size:12px;color:var(--muted);margin-top:5px}.category-grid em{font-style:normal;font-size:12px;font-weight:bold;color:#a46218;margin-top:auto}.guide-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.guide-grid a{min-height:196px;display:flex;flex-direction:column}.guide-grid p{font-size:14px;color:var(--muted);margin:0 0 auto}.guide-grid b{font-size:14px;margin-top:18px}.category-grid a:hover,.guide-grid a:hover,.article-list a:hover{border-color:#dd8743;transform:translateY(-2px)}.save{border-radius:17px;background:var(--dark);color:#fff;padding:46px;display:grid;grid-template-columns:1fr 1fr;gap:45px}.save .eyebrow{color:#f5c65b}.save h2{font-size:38px}.save p:not(.eyebrow){color:#d2ded7}.light{background:#f4c34d}.save ol{list-style:none;margin:0;padding:0}.save li{border-bottom:1px solid #ffffff2b;padding:10px 0;display:grid;gap:3px}.scope{border-bottom:1px solid var(--line);padding-bottom:46px}.scope>p:last-child{max-width:900px;color:var(--muted)}.pagehead{padding:57px 0 12px}.back{font-size:14px;color:var(--ink);text-decoration:none;display:inline-block;margin-bottom:34px}.meta{font-size:12px;color:var(--muted);margin-top:20px}.four-checks{display:grid;grid-template-columns:repeat(4,1fr);gap:13px;margin:34px 0}.four-checks div{border-top:2px solid var(--gold);padding:15px 0}.four-checks p{font-size:14px;color:var(--muted);margin:0}.detail-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.detail-grid article{padding:25px}.detail-grid small{font-size:30px;color:#d8aa49;font-weight:bold}.detail-grid article>.eyebrow{margin-top:16px;font-size:10px}.detail-grid article p{font-size:14px;color:var(--muted);margin:4px 0 13px}.detail-grid article>a{font-size:14px;font-weight:bold;color:#a46218;text-decoration:none}.article{max-width:840px;margin-top:48px}.article p{color:var(--muted)}.actions{padding:0;list-style:none;display:grid;gap:7px;margin:20px 0}.actions li{font-size:14px;padding-left:21px;position:relative}.actions li:before{content:'✓';position:absolute;left:0;color:var(--orange);font-weight:bold}.next{background:#f1eadf;padding:30px;border-radius:12px}.checklist,.faq{display:grid;gap:14px}.checklist article,.faq article{display:grid;grid-template-columns:48px 1fr;gap:18px;padding:23px 0;border-bottom:1px solid var(--line)}.checklist article>b,.faq article>b{font-size:25px;color:#d7a63f}.checklist p,.faq p{color:var(--muted);margin:0}.article-list{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.article-list a{min-height:210px;display:flex;flex-direction:column}.article-list p:not(.eyebrow){color:var(--muted);margin:0 0 auto}.article-list b{margin-top:17px;font-size:14px}footer{margin-top:80px;padding:42px 0 52px;background:#fffdf9;border-top:1px solid var(--line);color:var(--muted);font-size:14px}.small{font-size:23px}.footlinks{margin-top:16px}.footlinks span{display:inline-block;color:var(--ink);font-weight:bold;width:85px}.footlinks a{margin-right:15px;color:var(--ink);text-decoration:none}.notice{margin-top:27px;max-width:650px;font-size:12px}@media(max-width:850px){.top{gap:15px}.category-grid,.guide-grid{grid-template-columns:repeat(2,1fr)}.save{grid-template-columns:1fr}.four-checks{grid-template-columns:repeat(2,1fr)}}@media(max-width:600px){.wrap{width:min(100% - 28px,1060px)}.top{height:60px}.brand{font-size:23px}nav{gap:13px}.language{font-size:0}.language select{font-size:12px}.hero{padding:52px 0}.category-grid,.guide-grid,.detail-grid,.article-list{grid-template-columns:1fr}.workflow span{width:50%;padding:5px 0;border:0}.save{padding:28px}.save h2{font-size:32px}.four-checks{grid-template-columns:1fr}.footlinks span{display:block;margin-bottom:6px}}</style><body>${header(lang, path)}${localizedPage}</body></html>`,
      { headers: { "content-type": "text/html;charset=UTF-8" } },
    );
  },
};
