export type Locale = {
  code: string; name: string; region: string; lang: string;
  headline: string; intro: string; guidesLabel: string; sourcesLabel: string;
  browse: string; independent: string; checked: string;
};

export type FeatureKey = "productCategories" | "productDetails" | "seoArticles";

export const locales: Locale[] = [
  {code:"en",name:"English",region:"US · UK · CA · AU",lang:"en",headline:"A clearer way to use a PikoBuy spreadsheet.",intro:"Compare product links, warehouse evidence and shipping variables before you save a find.",guidesLabel:"Decision guides",sourcesLabel:"Official sources",browse:"Browse product finds",independent:"Independent guide — not operated by PikoBuy",checked:"Last fact-check: 18 August 2026"},
  {code:"de",name:"Deutsch",region:"DE · AT · CH",lang:"de",headline:"PikoBuy-Tabellen klarer und sicherer prüfen.",intro:"Vergleiche Produktlinks, Lagerfotos und Versandvariablen, bevor du einen Fund speicherst.",guidesLabel:"Entscheidungshilfen",sourcesLabel:"Offizielle Quellen",browse:"Produktfunde ansehen",independent:"Unabhängiger Leitfaden — nicht von PikoBuy betrieben",checked:"Fakten geprüft: 18. August 2026"},
  {code:"fr",name:"Français",region:"FR · BE · CA",lang:"fr",headline:"Une méthode plus claire pour utiliser un tableau PikoBuy.",intro:"Comparez les liens, les preuves de l’entrepôt et les variables d’expédition avant d’enregistrer un article.",guidesLabel:"Guides de décision",sourcesLabel:"Sources officielles",browse:"Explorer les produits",independent:"Guide indépendant — non exploité par PikoBuy",checked:"Vérifié le 18 août 2026"},
  {code:"es",name:"Español",region:"ES · US",lang:"es",headline:"Una forma más clara de usar una hoja de PikoBuy.",intro:"Compara enlaces, pruebas del almacén y variables de envío antes de guardar un producto.",guidesLabel:"Guías de decisión",sourcesLabel:"Fuentes oficiales",browse:"Explorar productos",independent:"Guía independiente — no gestionada por PikoBuy",checked:"Datos revisados: 18 de agosto de 2026"},
  {code:"pl",name:"Polski",region:"PL",lang:"pl",headline:"Przejrzysty sposób korzystania z arkusza PikoBuy.",intro:"Porównaj linki, zdjęcia magazynowe i zmienne wysyłki, zanim zapiszesz produkt.",guidesLabel:"Poradniki decyzyjne",sourcesLabel:"Oficjalne źródła",browse:"Przeglądaj produkty",independent:"Niezależny poradnik — nie jest prowadzony przez PikoBuy",checked:"Sprawdzono: 18 sierpnia 2026"},
  {code:"it",name:"Italiano",region:"IT",lang:"it",headline:"Un modo più chiaro per usare un foglio PikoBuy.",intro:"Confronta link, foto del magazzino e variabili di spedizione prima di salvare un prodotto.",guidesLabel:"Guide decisionali",sourcesLabel:"Fonti ufficiali",browse:"Sfoglia i prodotti",independent:"Guida indipendente — non gestita da PikoBuy",checked:"Verificato il 18 agosto 2026"},
  {code:"pt",name:"Português",region:"PT · BR",lang:"pt",headline:"Uma forma mais clara de usar uma planilha PikoBuy.",intro:"Compare links, provas do armazém e variáveis de envio antes de guardar um produto.",guidesLabel:"Guias de decisão",sourcesLabel:"Fontes oficiais",browse:"Explorar produtos",independent:"Guia independente — não operado pela PikoBuy",checked:"Verificado em 18 de agosto de 2026"},
  {code:"nl",name:"Nederlands",region:"NL · BE",lang:"nl",headline:"Een duidelijkere manier om een PikoBuy-spreadsheet te gebruiken.",intro:"Vergelijk productlinks, magazijnfoto’s en verzendvariabelen voordat je een vondst bewaart.",guidesLabel:"Beslisgidsen",sourcesLabel:"Officiële bronnen",browse:"Producten bekijken",independent:"Onafhankelijke gids — niet beheerd door PikoBuy",checked:"Gecontroleerd op 18 augustus 2026"},
  {code:"cs",name:"Čeština",region:"CZ",lang:"cs",headline:"Přehlednější způsob používání tabulky PikoBuy.",intro:"Před uložením produktu porovnejte odkazy, fotografie ze skladu a přepravní údaje.",guidesLabel:"Průvodci rozhodováním",sourcesLabel:"Oficiální zdroje",browse:"Procházet produkty",independent:"Nezávislý průvodce — neprovozuje PikoBuy",checked:"Ověřeno 18. srpna 2026"},
  {code:"sk",name:"Slovenčina",region:"SK",lang:"sk",headline:"Prehľadnejší spôsob používania tabuľky PikoBuy.",intro:"Pred uložením produktu porovnajte odkazy, fotografie zo skladu a údaje o doprave.",guidesLabel:"Sprievodcovia rozhodovaním",sourcesLabel:"Oficiálne zdroje",browse:"Prehliadať produkty",independent:"Nezávislý sprievodca — neprevádzkuje PikoBuy",checked:"Overené 18. augusta 2026"},
  {code:"ro",name:"Română",region:"RO",lang:"ro",headline:"Un mod mai clar de a folosi un tabel PikoBuy.",intro:"Compară linkurile, fotografiile din depozit și variabilele de transport înainte de a salva un produs.",guidesLabel:"Ghiduri de decizie",sourcesLabel:"Surse oficiale",browse:"Explorează produsele",independent:"Ghid independent — nu este operat de PikoBuy",checked:"Verificat la 18 august 2026"},
  {code:"hu",name:"Magyar",region:"HU",lang:"hu",headline:"Átláthatóbb módszer a PikoBuy táblázat használatához.",intro:"Mentés előtt hasonlítsd össze a linkeket, a raktári fotókat és a szállítási változókat.",guidesLabel:"Döntési útmutatók",sourcesLabel:"Hivatalos források",browse:"Termékek böngészése",independent:"Független útmutató — nem a PikoBuy üzemelteti",checked:"Ellenőrizve: 2026. augusztus 18."},
  {code:"sv",name:"Svenska",region:"SE",lang:"sv",headline:"Ett tydligare sätt att använda ett PikoBuy-kalkylblad.",intro:"Jämför produktlänkar, lagerbilder och fraktvariabler innan du sparar ett fynd.",guidesLabel:"Beslutsguider",sourcesLabel:"Officiella källor",browse:"Bläddra bland produkter",independent:"Oberoende guide — drivs inte av PikoBuy",checked:"Faktagranskad 18 augusti 2026"},
  {code:"da",name:"Dansk",region:"DK",lang:"da",headline:"En tydeligere måde at bruge et PikoBuy-regneark på.",intro:"Sammenlign produktlinks, lagerfotos og fragtvariabler, før du gemmer et fund.",guidesLabel:"Beslutningsguider",sourcesLabel:"Officielle kilder",browse:"Se produkter",independent:"Uafhængig guide — drives ikke af PikoBuy",checked:"Faktatjekket 18. august 2026"},
  {code:"no",name:"Norsk",region:"NO",lang:"no",headline:"En tydeligere måte å bruke et PikoBuy-regneark på.",intro:"Sammenlign produktlenker, lagerbilder og fraktvariabler før du lagrer et funn.",guidesLabel:"Beslutningsguider",sourcesLabel:"Offisielle kilder",browse:"Se produkter",independent:"Uavhengig guide — drives ikke av PikoBuy",checked:"Faktasjekket 18. august 2026"},
  {code:"fi",name:"Suomi",region:"FI",lang:"fi",headline:"Selkeämpi tapa käyttää PikoBuy-taulukkoa.",intro:"Vertaa tuotelinkkejä, varastokuvia ja toimitusmuuttujia ennen löydön tallentamista.",guidesLabel:"Päätösoppaat",sourcesLabel:"Viralliset lähteet",browse:"Selaa tuotteita",independent:"Riippumaton opas — ei PikoBuyn ylläpitämä",checked:"Tarkistettu 18. elokuuta 2026"},
  {code:"el",name:"Ελληνικά",region:"GR",lang:"el",headline:"Ένας πιο σαφής τρόπος χρήσης ενός φύλλου PikoBuy.",intro:"Συγκρίνετε συνδέσμους, φωτογραφίες αποθήκης και στοιχεία αποστολής πριν αποθηκεύσετε ένα προϊόν.",guidesLabel:"Οδηγοί αποφάσεων",sourcesLabel:"Επίσημες πηγές",browse:"Περιήγηση προϊόντων",independent:"Ανεξάρτητος οδηγός — δεν λειτουργεί από την PikoBuy",checked:"Ελέγχθηκε στις 18 Αυγούστου 2026"},
  {code:"tr",name:"Türkçe",region:"TR",lang:"tr",headline:"PikoBuy tablosunu kullanmanın daha açık bir yolu.",intro:"Bir ürünü kaydetmeden önce bağlantıları, depo fotoğraflarını ve kargo değişkenlerini karşılaştırın.",guidesLabel:"Karar rehberleri",sourcesLabel:"Resmî kaynaklar",browse:"Ürünleri incele",independent:"Bağımsız rehber — PikoBuy tarafından işletilmez",checked:"18 Ağustos 2026’da kontrol edildi"},
  {code:"hr",name:"Hrvatski",region:"HR",lang:"hr",headline:"Jasniji način korištenja PikoBuy tablice.",intro:"Usporedite poveznice, fotografije skladišta i varijable dostave prije spremanja proizvoda.",guidesLabel:"Vodiči za odluke",sourcesLabel:"Službeni izvori",browse:"Pregledaj proizvode",independent:"Neovisni vodič — ne upravlja ga PikoBuy",checked:"Provjereno 18. kolovoza 2026."},
  {code:"bg",name:"Български",region:"BG",lang:"bg",headline:"По-ясен начин за използване на таблица PikoBuy.",intro:"Сравнете връзките, складовите снимки и данните за доставка, преди да запазите продукт.",guidesLabel:"Ръководства за решения",sourcesLabel:"Официални източници",browse:"Разгледайте продуктите",independent:"Независим наръчник — не се управлява от PikoBuy",checked:"Проверено на 18 август 2026 г."},
  {code:"uk",name:"Українська",region:"UA",lang:"uk",headline:"Зрозуміліший спосіб користуватися таблицею PikoBuy.",intro:"Порівняйте посилання, фото зі складу та параметри доставки, перш ніж зберегти товар.",guidesLabel:"Посібники з вибору",sourcesLabel:"Офіційні джерела",browse:"Переглянути товари",independent:"Незалежний посібник — не керується PikoBuy",checked:"Перевірено 18 серпня 2026 року"},
  {code:"lt",name:"Lietuvių",region:"LT",lang:"lt",headline:"Aiškesnis būdas naudotis PikoBuy lentele.",intro:"Prieš išsaugodami prekę palyginkite nuorodas, sandėlio nuotraukas ir siuntimo kintamuosius.",guidesLabel:"Sprendimų vadovai",sourcesLabel:"Oficialūs šaltiniai",browse:"Naršyti produktus",independent:"Nepriklausomas vadovas — jo nevaldo PikoBuy",checked:"Patikrinta 2026 m. rugpjūčio 18 d."},
  {code:"sl",name:"Slovenščina",region:"SI",lang:"sl",headline:"Jasnejši način uporabe preglednice PikoBuy.",intro:"Pred shranjevanjem izdelka primerjajte povezave, fotografije skladišča in podatke o dostavi.",guidesLabel:"Vodniki za odločanje",sourcesLabel:"Uradni viri",browse:"Preglej izdelke",independent:"Neodvisni vodnik — ne upravlja ga PikoBuy",checked:"Preverjeno 18. avgusta 2026"},
  {code:"et",name:"Eesti",region:"EE",lang:"et",headline:"Selgem viis PikoBuy tabeli kasutamiseks.",intro:"Enne toote salvestamist võrdle linke, laopilte ja saatmise muutujaid.",guidesLabel:"Otsustusjuhendid",sourcesLabel:"Ametlikud allikad",browse:"Sirvi tooteid",independent:"Sõltumatu juhend — ei ole PikoBuy hallatav",checked:"Kontrollitud 18. augustil 2026"},
];

export const guideDefs = [
  {slug:"search",title:"Search product finds",kicker:"Main-site product search",source:"https://findspreadsheet.com/search.html",sourceName:"FindSpreadsheet Product Search",summary:"Search the main FindSpreadsheet catalog by product name, category or source keyword without leaving this research path."},
  {slug:"guides",title:"Decision guide index",kicker:"All research routes",source:"https://findspreadsheet.com/",sourceName:"FindSpreadsheet Research Hub",summary:"Choose the right research route for product links, QC photos, shipping, returns, tracking, categories and source checks."},
  {slug:"how-to-use",title:"How to use PikoBuy",kicker:"Six-step order flow",source:"https://findspreadsheet.com/",sourceName:"Research notes",summary:"Move from a marketplace listing to warehouse review and international dispatch without skipping the decision points."},
  {slug:"qc-photos",title:"PikoBuy QC photos",kicker:"Warehouse evidence",source:"https://findspreadsheet.com/",sourceName:"Research notes",summary:"Use check-in photos to inspect visible condition, options and defects—but do not treat photos as proof of material or long-term performance."},
  {slug:"shipping",title:"PikoBuy shipping cost",kicker:"Weight, size and routes",source:"https://findspreadsheet.com/",sourceName:"Research notes",summary:"Understand how destination, product type, weight and parcel dimensions affect available route estimates."},
  {slug:"returns",title:"PikoBuy returns",kicker:"Five-day warehouse window",source:"https://findspreadsheet.com/",sourceName:"Research notes",summary:"Check eligibility, responsibility, fees and the published 120-hour application window before the deadline passes."},
  {slug:"tracking",title:"PikoBuy tracking",kicker:"Dispatch to updates",source:"https://findspreadsheet.com/",sourceName:"Research notes",summary:"Separate warehouse order status from international parcel tracking and know when official support is required."},
  {slug:"categories",title:"PikoBuy categories",kicker:"Compare like with like",source:"https://findspreadsheet.com/AllProducts/",sourceName:"FindSpreadsheet Product Database",summary:"Start with product type so the right photo, sizing, source and shipping checks stay visible."},
  {slug:"faq",title:"PikoBuy spreadsheet FAQ",kicker:"Direct answers",source:"https://findspreadsheet.com/",sourceName:"Research notes",summary:"Clear answers about independence, ordering, QC photos, shipping estimates, returns, tracking and spreadsheet limits."},
  {slug:"sources",title:"Sources and methodology",kicker:"Reopen every claim",source:"https://findspreadsheet.com/",sourceName:"Research methodology",summary:"See how time-sensitive claims are checked and how this independent guide distinguishes facts, estimates and editorial judgment."},
];

const translatedGuideTitles: Record<string, string[]> = {
  en:["Search product finds","Decision guide index","How to use PikoBuy","PikoBuy QC photos","PikoBuy shipping cost","PikoBuy returns","PikoBuy tracking","PikoBuy categories","PikoBuy spreadsheet FAQ","Sources and methodology"],
  de:["Produkte suchen","Entscheidungshilfen","PikoBuy verwenden","PikoBuy QC-Fotos","PikoBuy Versandkosten","PikoBuy Rückgaben","PikoBuy Sendungsverfolgung","PikoBuy Kategorien","PikoBuy-Tabellen FAQ","Quellen und Methodik"],
  fr:["Rechercher des produits","Guides de décision","Utiliser PikoBuy","Photos QC PikoBuy","Frais d’expédition PikoBuy","Retours PikoBuy","Suivi PikoBuy","Catégories PikoBuy","FAQ tableau PikoBuy","Sources et méthodologie"],
  es:["Buscar productos","Guías de decisión","Cómo usar PikoBuy","Fotos QC de PikoBuy","Coste de envío PikoBuy","Devoluciones PikoBuy","Seguimiento PikoBuy","Categorías PikoBuy","Preguntas sobre hojas PikoBuy","Fuentes y metodología"],
  pl:["Szukaj produktów","Poradniki decyzyjne","Jak używać PikoBuy","Zdjęcia QC PikoBuy","Koszt wysyłki PikoBuy","Zwroty PikoBuy","Śledzenie PikoBuy","Kategorie PikoBuy","FAQ arkusza PikoBuy","Źródła i metodologia"],
  it:["Cerca prodotti","Guide decisionali","Come usare PikoBuy","Foto QC PikoBuy","Costo spedizione PikoBuy","Resi PikoBuy","Tracciamento PikoBuy","Categorie PikoBuy","FAQ foglio PikoBuy","Fonti e metodologia"],
  pt:["Pesquisar produtos","Guias de decisão","Como usar PikoBuy","Fotos QC PikoBuy","Custo de envio PikoBuy","Devoluções PikoBuy","Rastreamento PikoBuy","Categorias PikoBuy","FAQ da planilha PikoBuy","Fontes e metodologia"],
  nl:["Producten zoeken","Beslisgidsen","PikoBuy gebruiken","PikoBuy QC-foto’s","PikoBuy verzendkosten","PikoBuy retouren","PikoBuy tracking","PikoBuy categorieën","PikoBuy-spreadsheet FAQ","Bronnen en methode"],
  cs:["Hledat produkty","Průvodci rozhodováním","Jak používat PikoBuy","QC fotografie PikoBuy","Cena dopravy PikoBuy","Vrácení PikoBuy","Sledování PikoBuy","Kategorie PikoBuy","FAQ tabulky PikoBuy","Zdroje a metodika"],
  sk:["Hľadať produkty","Sprievodcovia rozhodovaním","Ako používať PikoBuy","QC fotografie PikoBuy","Cena dopravy PikoBuy","Vrátenie PikoBuy","Sledovanie PikoBuy","Kategórie PikoBuy","FAQ tabuľky PikoBuy","Zdroje a metodika"],
  ro:["Caută produse","Ghiduri de decizie","Cum se folosește PikoBuy","Fotografii QC PikoBuy","Cost transport PikoBuy","Retururi PikoBuy","Urmărire PikoBuy","Categorii PikoBuy","Întrebări despre tabelul PikoBuy","Surse și metodologie"],
  hu:["Termékkeresés","Döntési útmutatók","A PikoBuy használata","PikoBuy QC-fotók","PikoBuy szállítási költség","PikoBuy visszaküldések","PikoBuy nyomkövetés","PikoBuy kategóriák","PikoBuy táblázat GYIK","Források és módszertan"],
  sv:["Sök produkter","Beslutsguider","Så använder du PikoBuy","PikoBuy QC-bilder","PikoBuy fraktkostnad","PikoBuy-returer","PikoBuy-spårning","PikoBuy-kategorier","Vanliga frågor om PikoBuy-ark","Källor och metod"],
  da:["Søg produkter","Beslutningsguider","Sådan bruges PikoBuy","PikoBuy QC-fotos","PikoBuy fragtpris","PikoBuy-returneringer","PikoBuy-sporing","PikoBuy-kategorier","FAQ om PikoBuy-regneark","Kilder og metode"],
  no:["Søk produkter","Beslutningsguider","Slik bruker du PikoBuy","PikoBuy QC-bilder","PikoBuy fraktkostnad","PikoBuy-returer","PikoBuy-sporing","PikoBuy-kategorier","Vanlige spørsmål om PikoBuy-ark","Kilder og metode"],
  fi:["Hae tuotteita","Päätösoppaat","PikoBuyn käyttö","PikoBuy QC-kuvat","PikoBuy toimituskulut","PikoBuy palautukset","PikoBuy seuranta","PikoBuy kategoriat","PikoBuy-taulukon UKK","Lähteet ja menetelmät"],
  el:["Αναζήτηση προϊόντων","Οδηγοί αποφάσεων","Πώς χρησιμοποιείται το PikoBuy","Φωτογραφίες QC PikoBuy","Κόστος αποστολής PikoBuy","Επιστροφές PikoBuy","Παρακολούθηση PikoBuy","Κατηγορίες PikoBuy","Συχνές ερωτήσεις φύλλου PikoBuy","Πηγές και μεθοδολογία"],
  tr:["Ürün ara","Karar rehberleri","PikoBuy nasıl kullanılır","PikoBuy QC fotoğrafları","PikoBuy kargo ücreti","PikoBuy iadeleri","PikoBuy takip","PikoBuy kategorileri","PikoBuy tablo SSS","Kaynaklar ve yöntem"],
  hr:["Pretraži proizvode","Vodiči za odluke","Kako koristiti PikoBuy","PikoBuy QC fotografije","Cijena dostave PikoBuy","PikoBuy povrati","PikoBuy praćenje","PikoBuy kategorije","FAQ PikoBuy tablice","Izvori i metodologija"],
  bg:["Търсене на продукти","Ръководства за решения","Как се използва PikoBuy","QC снимки PikoBuy","Цена за доставка PikoBuy","Връщания PikoBuy","Проследяване PikoBuy","Категории PikoBuy","ЧЗВ за таблицата PikoBuy","Източници и методология"],
  uk:["Пошук товарів","Посібники з вибору","Як користуватися PikoBuy","QC-фото PikoBuy","Вартість доставки PikoBuy","Повернення PikoBuy","Відстеження PikoBuy","Категорії PikoBuy","FAQ таблиці PikoBuy","Джерела та методологія"],
  lt:["Ieškoti produktų","Sprendimų vadovai","Kaip naudotis PikoBuy","PikoBuy QC nuotraukos","PikoBuy siuntimo kaina","PikoBuy grąžinimai","PikoBuy sekimas","PikoBuy kategorijos","PikoBuy lentelės DUK","Šaltiniai ir metodika"],
  sl:["Iskanje izdelkov","Vodniki za odločanje","Kako uporabljati PikoBuy","PikoBuy QC fotografije","Cena pošiljanja PikoBuy","Vračila PikoBuy","Sledenje PikoBuy","Kategorije PikoBuy","Pogosta vprašanja o preglednici PikoBuy","Viri in metodologija"],
  et:["Otsi tooteid","Otsustusjuhendid","Kuidas kasutada PikoBuyd","PikoBuy QC-fotod","PikoBuy saatmiskulu","PikoBuy tagastused","PikoBuy jälgimine","PikoBuy kategooriad","PikoBuy tabeli KKK","Allikad ja metoodika"],
};

const searchLabels: Record<string,string> = {en:"Search",de:"Suche",fr:"Rechercher",es:"Buscar",pl:"Szukaj",it:"Cerca",pt:"Pesquisar",nl:"Zoeken",cs:"Hledat",sk:"Hľadať",ro:"Caută",hu:"Keresés",sv:"Sök",da:"Søg",no:"Søk",fi:"Haku",el:"Αναζήτηση",tr:"Ara",hr:"Pretraži",bg:"Търсене",uk:"Пошук",lt:"Paieška",sl:"Iskanje",et:"Otsi"};
const categoryLabels: Record<string,string> = {en:"Categories",de:"Kategorien",fr:"Catégories",es:"Categorías",pl:"Kategorie",it:"Categorie",pt:"Categorias",nl:"Categorieën",cs:"Kategorie",sk:"Kategórie",ro:"Categorii",hu:"Kategóriák",sv:"Kategorier",da:"Kategorier",no:"Kategorier",fi:"Kategoriat",el:"Κατηγορίες",tr:"Kategoriler",hr:"Kategorije",bg:"Категории",uk:"Категорії",lt:"Kategorijos",sl:"Kategorije",et:"Kategooriad"};
const homeLabels: Record<string,string> = {en:"Home",de:"Startseite",fr:"Accueil",es:"Inicio",pl:"Strona główna",it:"Home",pt:"Início",nl:"Home",cs:"Domů",sk:"Domov",ro:"Acasă",hu:"Kezdőlap",sv:"Hem",da:"Forside",no:"Hjem",fi:"Etusivu",el:"Αρχική",tr:"Ana sayfa",hr:"Početna",bg:"Начало",uk:"Головна",lt:"Pradžia",sl:"Domov",et:"Avaleht"};
const featureLabels: Record<string, Record<FeatureKey,string>> = {
  en:{productCategories:"Product categories",productDetails:"Product details",seoArticles:"SEO articles"},
  de:{productCategories:"Produktkategorien",productDetails:"Produktdetails",seoArticles:"SEO-Artikel"},
  fr:{productCategories:"Catégories de produits",productDetails:"Fiches produits",seoArticles:"Articles SEO"},
  es:{productCategories:"Categorías de productos",productDetails:"Detalles de productos",seoArticles:"Artículos SEO"},
  pl:{productCategories:"Kategorie produktów",productDetails:"Szczegóły produktów",seoArticles:"Artykuły SEO"},
  it:{productCategories:"Categorie prodotti",productDetails:"Dettagli prodotti",seoArticles:"Articoli SEO"},
  pt:{productCategories:"Categorias de produtos",productDetails:"Detalhes dos produtos",seoArticles:"Artigos SEO"},
  nl:{productCategories:"Productcategorieën",productDetails:"Productdetails",seoArticles:"SEO-artikelen"},
  cs:{productCategories:"Kategorie produktů",productDetails:"Detaily produktů",seoArticles:"SEO články"},
  sk:{productCategories:"Kategórie produktov",productDetails:"Detaily produktov",seoArticles:"SEO články"},
  ro:{productCategories:"Categorii de produse",productDetails:"Detalii produse",seoArticles:"Articole SEO"},
  hu:{productCategories:"Termékkategóriák",productDetails:"Termékadatok",seoArticles:"SEO-cikkek"},
  sv:{productCategories:"Produktkategorier",productDetails:"Produktdetaljer",seoArticles:"SEO-artiklar"},
  da:{productCategories:"Produktkategorier",productDetails:"Produktdetaljer",seoArticles:"SEO-artikler"},
  no:{productCategories:"Produktkategorier",productDetails:"Produktdetaljer",seoArticles:"SEO-artikler"},
  fi:{productCategories:"Tuoteluokat",productDetails:"Tuotetiedot",seoArticles:"SEO-artikkelit"},
  el:{productCategories:"Κατηγορίες προϊόντων",productDetails:"Λεπτομέρειες προϊόντων",seoArticles:"Άρθρα SEO"},
  tr:{productCategories:"Ürün kategorileri",productDetails:"Ürün detayları",seoArticles:"SEO makaleleri"},
  hr:{productCategories:"Kategorije proizvoda",productDetails:"Detalji proizvoda",seoArticles:"SEO članci"},
  bg:{productCategories:"Категории продукти",productDetails:"Подробности за продукти",seoArticles:"SEO статии"},
  uk:{productCategories:"Категорії товарів",productDetails:"Деталі товарів",seoArticles:"SEO-статті"},
  lt:{productCategories:"Produktų kategorijos",productDetails:"Produktų informacija",seoArticles:"SEO straipsniai"},
  sl:{productCategories:"Kategorije izdelkov",productDetails:"Podrobnosti izdelkov",seoArticles:"SEO članki"},
  et:{productCategories:"Tootekategooriad",productDetails:"Tooteandmed",seoArticles:"SEO-artiklid"},
};

export function getLocale(code: string) { return locales.find((item) => item.code === code); }
export function getGuide(slug: string) { return guideDefs.find((item) => item.slug === slug); }
export function getLocalizedGuideTitle(code: string, slug: string) {
  const index = guideDefs.findIndex((item) => item.slug === slug);
  return translatedGuideTitles[code]?.[index] ?? guideDefs[index]?.title ?? slug;
}
export function getSearchLabel(code: string) { return searchLabels[code] ?? searchLabels.en; }
export function getCategoryLabel(code: string) { return categoryLabels[code] ?? categoryLabels.en; }
export function getHomeLabel(code: string) { return homeLabels[code] ?? homeLabels.en; }
export function getFeatureLabel(code: string, key: FeatureKey) { return featureLabels[code]?.[key] ?? featureLabels.en[key]; }
