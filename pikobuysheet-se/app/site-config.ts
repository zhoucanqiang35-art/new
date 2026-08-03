export type PageKey = "home" | "spreadsheet" | "categories" | "guides" | "method" | "updates" | "seo-articles";

export type LocaleCopy = {
  code: string;
  name: string;
  nativeName: string;
  nav: Record<Exclude<PageKey, "home">, string>;
  eyebrow: string;
  homeTitle: string;
  homeIntro: string;
  browse: string;
  research: string;
  independent: string;
  language: string;
};

const englishNav = {
  spreadsheet: "Spreadsheet",
  categories: "Categories",
  guides: "Guides",
  method: "Method",
  updates: "Updates",
  "seo-articles": "SEO Articles",
};

export const localeCopies: LocaleCopy[] = [
  { code: "en", name: "English", nativeName: "English", nav: englishNav, eyebrow: "Independent PikoBuy research guide", homeTitle: "The PikoBuy spreadsheet, rebuilt for smarter finds.", homeIntro: "Find source pages faster, review QC checkpoints, and understand PikoBuy's published buying flow before you place an order.", browse: "Browse researched finds", research: "How research works", independent: "Independent informational site. Not affiliated with PikoBuy.", language: "Language" },
  { code: "es", name: "Spanish", nativeName: "Español", nav: { spreadsheet: "Hoja de cálculo", categories: "Categorías", guides: "Guías", method: "Método", updates: "Actualizaciones", "seo-articles": "Artículos SEO" }, eyebrow: "Guía independiente de investigación sobre PikoBuy", homeTitle: "La hoja de cálculo de PikoBuy, reconstruida para encontrar mejor.", homeIntro: "Encuentra páginas de origen, revisa puntos de control de calidad y comprende el proceso publicado por PikoBuy antes de comprar.", browse: "Ver productos investigados", research: "Cómo investigamos", independent: "Sitio informativo independiente. No afiliado a PikoBuy.", language: "Idioma" },
  { code: "de", name: "German", nativeName: "Deutsch", nav: { spreadsheet: "Tabelle", categories: "Kategorien", guides: "Ratgeber", method: "Methode", updates: "Aktuelles", "seo-articles": "SEO-Artikel" }, eyebrow: "Unabhängiger PikoBuy-Rechercheleitfaden", homeTitle: "Die PikoBuy-Tabelle – neu gedacht für bessere Funde.", homeIntro: "Finde Quellseiten schneller, prüfe QC-Punkte und verstehe den veröffentlichten PikoBuy-Ablauf vor einer Bestellung.", browse: "Recherchierte Funde", research: "So funktioniert die Recherche", independent: "Unabhängige Informationsseite. Nicht mit PikoBuy verbunden.", language: "Sprache" },
  { code: "fr", name: "French", nativeName: "Français", nav: { spreadsheet: "Tableur", categories: "Catégories", guides: "Guides", method: "Méthode", updates: "Mises à jour", "seo-articles": "Articles SEO" }, eyebrow: "Guide de recherche PikoBuy indépendant", homeTitle: "Le tableur PikoBuy, repensé pour de meilleures trouvailles.", homeIntro: "Retrouvez les pages sources, vérifiez les points QC et comprenez le parcours publié par PikoBuy avant de commander.", browse: "Voir les trouvailles", research: "Notre méthode", independent: "Site d'information indépendant. Non affilié à PikoBuy.", language: "Langue" },
  { code: "it", name: "Italian", nativeName: "Italiano", nav: { spreadsheet: "Foglio", categories: "Categorie", guides: "Guide", method: "Metodo", updates: "Aggiornamenti", "seo-articles": "Articoli SEO" }, eyebrow: "Guida di ricerca PikoBuy indipendente", homeTitle: "Il foglio PikoBuy, riprogettato per trovare meglio.", homeIntro: "Trova le pagine fonte, controlla i punti QC e comprendi il processo pubblicato da PikoBuy prima di ordinare.", browse: "Sfoglia i prodotti", research: "Come ricerchiamo", independent: "Sito informativo indipendente. Non affiliato a PikoBuy.", language: "Lingua" },
  { code: "pt", name: "Portuguese", nativeName: "Português", nav: { spreadsheet: "Planilha", categories: "Categorias", guides: "Guias", method: "Método", updates: "Atualizações", "seo-articles": "Artigos SEO" }, eyebrow: "Guia independente de pesquisa PikoBuy", homeTitle: "A planilha PikoBuy, refeita para encontrar melhor.", homeIntro: "Encontre páginas de origem, reveja pontos de QC e entenda o processo publicado pela PikoBuy antes de comprar.", browse: "Ver produtos pesquisados", research: "Como pesquisamos", independent: "Site informativo independente. Não afiliado à PikoBuy.", language: "Idioma" },
  { code: "pl", name: "Polish", nativeName: "Polski", nav: { spreadsheet: "Arkusz", categories: "Kategorie", guides: "Poradniki", method: "Metoda", updates: "Aktualizacje", "seo-articles": "Artykuły SEO" }, eyebrow: "Niezależny przewodnik badawczy PikoBuy", homeTitle: "Arkusz PikoBuy przebudowany dla lepszych znalezisk.", homeIntro: "Szybciej znajduj źródła, sprawdzaj punkty QC i poznaj opublikowany proces PikoBuy przed zamówieniem.", browse: "Przeglądaj znaleziska", research: "Jak badamy", independent: "Niezależna strona informacyjna. Bez powiązania z PikoBuy.", language: "Język" },
  { code: "nl", name: "Dutch", nativeName: "Nederlands", nav: { spreadsheet: "Spreadsheet", categories: "Categorieën", guides: "Gidsen", method: "Methode", updates: "Updates", "seo-articles": "SEO-artikelen" }, eyebrow: "Onafhankelijke PikoBuy-onderzoeksgids", homeTitle: "De PikoBuy-spreadsheet, opnieuw gemaakt voor betere vondsten.", homeIntro: "Vind bronpagina's sneller, controleer QC-punten en begrijp het gepubliceerde PikoBuy-proces vóór je bestelt.", browse: "Bekijk onderzochte vondsten", research: "Hoe het onderzoek werkt", independent: "Onafhankelijke informatiesite. Niet verbonden aan PikoBuy.", language: "Taal" },
  { code: "sv", name: "Swedish", nativeName: "Svenska", nav: { spreadsheet: "Kalkylblad", categories: "Kategorier", guides: "Guider", method: "Metod", updates: "Uppdateringar", "seo-articles": "SEO-artiklar" }, eyebrow: "Oberoende PikoBuy-guide", homeTitle: "PikoBuy-kalkylbladet, ombyggt för smartare fynd.", homeIntro: "Hitta källsidor snabbare, kontrollera QC-punkter och förstå PikoBuys publicerade flöde innan du beställer.", browse: "Utforska fynd", research: "Så fungerar granskningen", independent: "Oberoende informationssida. Inte ansluten till PikoBuy.", language: "Språk" },
  { code: "da", name: "Danish", nativeName: "Dansk", nav: { spreadsheet: "Regneark", categories: "Kategorier", guides: "Guider", method: "Metode", updates: "Opdateringer", "seo-articles": "SEO-artikler" }, eyebrow: "Uafhængig PikoBuy-guide", homeTitle: "PikoBuy-regnearket, genopbygget til bedre fund.", homeIntro: "Find kildesider hurtigere, tjek QC-punkter og forstå PikoBuys offentliggjorte proces før bestilling.", browse: "Se undersøgte fund", research: "Sådan undersøger vi", independent: "Uafhængig informationsside. Ikke tilknyttet PikoBuy.", language: "Sprog" },
  { code: "no", name: "Norwegian", nativeName: "Norsk", nav: { spreadsheet: "Regneark", categories: "Kategorier", guides: "Guider", method: "Metode", updates: "Oppdateringer", "seo-articles": "SEO-artikler" }, eyebrow: "Uavhengig PikoBuy-guide", homeTitle: "PikoBuy-regnearket, bygget på nytt for smartere funn.", homeIntro: "Finn kildesider raskere, sjekk QC-punkter og forstå PikoBuys publiserte prosess før du bestiller.", browse: "Se undersøkte funn", research: "Slik undersøker vi", independent: "Uavhengig informasjonsside. Ikke tilknyttet PikoBuy.", language: "Språk" },
  { code: "fi", name: "Finnish", nativeName: "Suomi", nav: { spreadsheet: "Taulukko", categories: "Kategoriat", guides: "Oppaat", method: "Menetelmä", updates: "Päivitykset", "seo-articles": "SEO-artikkelit" }, eyebrow: "Riippumaton PikoBuy-tutkimusopas", homeTitle: "PikoBuy-taulukko, rakennettu uudelleen parempia löytöjä varten.", homeIntro: "Löydä lähdesivut, tarkista QC-kohdat ja ymmärrä PikoBuyn julkaistu prosessi ennen tilaamista.", browse: "Selaa tutkittuja löytöjä", research: "Näin tutkimme", independent: "Riippumaton tietosivusto. Ei yhteyttä PikoBuyhin.", language: "Kieli" },
  { code: "cs", name: "Czech", nativeName: "Čeština", nav: { spreadsheet: "Tabulka", categories: "Kategorie", guides: "Průvodci", method: "Metoda", updates: "Aktualizace", "seo-articles": "SEO články" }, eyebrow: "Nezávislý výzkumný průvodce PikoBuy", homeTitle: "Tabulka PikoBuy, přepracovaná pro chytřejší hledání.", homeIntro: "Najděte zdrojové stránky, zkontrolujte QC a pochopte zveřejněný postup PikoBuy před objednávkou.", browse: "Procházet nálezy", research: "Jak probíhá výzkum", independent: "Nezávislý informační web. Není spojen s PikoBuy.", language: "Jazyk" },
  { code: "ro", name: "Romanian", nativeName: "Română", nav: { spreadsheet: "Foaie", categories: "Categorii", guides: "Ghiduri", method: "Metodă", updates: "Actualizări", "seo-articles": "Articole SEO" }, eyebrow: "Ghid independent de cercetare PikoBuy", homeTitle: "Foaia PikoBuy, refăcută pentru descoperiri mai bune.", homeIntro: "Găsește paginile sursă, verifică punctele QC și înțelege procesul publicat de PikoBuy înainte de comandă.", browse: "Vezi produsele cercetate", research: "Cum cercetăm", independent: "Site informativ independent. Neafiliat cu PikoBuy.", language: "Limbă" },
  { code: "hu", name: "Hungarian", nativeName: "Magyar", nav: { spreadsheet: "Táblázat", categories: "Kategóriák", guides: "Útmutatók", method: "Módszer", updates: "Frissítések", "seo-articles": "SEO-cikkek" }, eyebrow: "Független PikoBuy kutatási útmutató", homeTitle: "A PikoBuy táblázat, újragondolva jobb találatokhoz.", homeIntro: "Találd meg gyorsabban a forrásokat, ellenőrizd a QC-pontokat és ismerd meg a PikoBuy közzétett folyamatát rendelés előtt.", browse: "Kutatott találatok", research: "Kutatási módszer", independent: "Független információs oldal. Nem kapcsolódik a PikoBuyhoz.", language: "Nyelv" },
  { code: "el", name: "Greek", nativeName: "Ελληνικά", nav: { spreadsheet: "Υπολογιστικό φύλλο", categories: "Κατηγορίες", guides: "Οδηγοί", method: "Μέθοδος", updates: "Ενημερώσεις", "seo-articles": "Άρθρα SEO" }, eyebrow: "Ανεξάρτητος οδηγός έρευνας PikoBuy", homeTitle: "Το φύλλο PikoBuy, ξανασχεδιασμένο για καλύτερες επιλογές.", homeIntro: "Βρείτε πηγές, ελέγξτε σημεία QC και κατανοήστε τη δημοσιευμένη διαδικασία της PikoBuy πριν παραγγείλετε.", browse: "Περιήγηση ευρημάτων", research: "Πώς γίνεται η έρευνα", independent: "Ανεξάρτητος ενημερωτικός ιστότοπος. Δεν συνδέεται με την PikoBuy.", language: "Γλώσσα" },
  { code: "uk", name: "Ukrainian", nativeName: "Українська", nav: { spreadsheet: "Таблиця", categories: "Категорії", guides: "Посібники", method: "Метод", updates: "Оновлення", "seo-articles": "SEO-статті" }, eyebrow: "Незалежний дослідницький гід PikoBuy", homeTitle: "Таблиця PikoBuy, перебудована для кращого пошуку.", homeIntro: "Швидше знаходьте джерела, перевіряйте QC та розумійте опублікований процес PikoBuy до замовлення.", browse: "Переглянути знахідки", research: "Як ми досліджуємо", independent: "Незалежний інформаційний сайт. Не пов’язаний із PikoBuy.", language: "Мова" },
  { code: "tr", name: "Turkish", nativeName: "Türkçe", nav: { spreadsheet: "Tablo", categories: "Kategoriler", guides: "Rehberler", method: "Yöntem", updates: "Güncellemeler", "seo-articles": "SEO Makaleleri" }, eyebrow: "Bağımsız PikoBuy araştırma rehberi", homeTitle: "PikoBuy tablosu, daha akıllı bulgular için yeniden tasarlandı.", homeIntro: "Kaynak sayfaları bulun, QC noktalarını inceleyin ve siparişten önce PikoBuy'un yayımlanan sürecini anlayın.", browse: "Araştırılan ürünler", research: "Araştırma yöntemi", independent: "Bağımsız bilgi sitesi. PikoBuy ile bağlantılı değildir.", language: "Dil" },
  { code: "ru", name: "Russian", nativeName: "Русский", nav: { spreadsheet: "Таблица", categories: "Категории", guides: "Руководства", method: "Методика", updates: "Обновления", "seo-articles": "SEO-статьи" }, eyebrow: "Независимый исследовательский гид PikoBuy", homeTitle: "Таблица PikoBuy, созданная заново для более умного поиска.", homeIntro: "Быстрее находите источники, проверяйте QC и изучайте опубликованный процесс PikoBuy до заказа.", browse: "Смотреть находки", research: "Как мы проверяем", independent: "Независимый информационный сайт. Не связан с PikoBuy.", language: "Язык" },
  { code: "bg", name: "Bulgarian", nativeName: "Български", nav: { spreadsheet: "Таблица", categories: "Категории", guides: "Ръководства", method: "Метод", updates: "Актуализации", "seo-articles": "SEO статии" }, eyebrow: "Независим изследователски гид за PikoBuy", homeTitle: "Таблицата PikoBuy, преработена за по-добри находки.", homeIntro: "Намирайте източници, проверявайте QC и разберете публикувания процес на PikoBuy преди поръчка.", browse: "Разгледайте находките", research: "Как изследваме", independent: "Независим информационен сайт. Не е свързан с PikoBuy.", language: "Език" },
  { code: "ar", name: "Arabic", nativeName: "العربية", nav: { spreadsheet: "جدول البيانات", categories: "الفئات", guides: "الأدلة", method: "المنهج", updates: "التحديثات", "seo-articles": "مقالات SEO" }, eyebrow: "دليل بحث مستقل عن PikoBuy", homeTitle: "جدول PikoBuy، أُعيد بناؤه لاختيارات أذكى.", homeIntro: "اعثر على صفحات المصدر، وراجع نقاط فحص الجودة، وافهم المسار المنشور من PikoBuy قبل الطلب.", browse: "تصفح النتائج", research: "كيف نبحث", independent: "موقع معلومات مستقل وغير تابع لـ PikoBuy.", language: "اللغة" },
  { code: "ja", name: "Japanese", nativeName: "日本語", nav: { spreadsheet: "スプレッドシート", categories: "カテゴリー", guides: "ガイド", method: "調査方法", updates: "更新情報", "seo-articles": "SEO記事" }, eyebrow: "独立したPikoBuyリサーチガイド", homeTitle: "より賢く探すために再構築したPikoBuyスプレッドシート。", homeIntro: "出典ページ、QC確認点、PikoBuyが公開する購入手順を注文前に確認できます。", browse: "調査済み商品を見る", research: "調査方法", independent: "独立した情報サイトです。PikoBuyとは提携していません。", language: "言語" },
  { code: "ko", name: "Korean", nativeName: "한국어", nav: { spreadsheet: "스프레드시트", categories: "카테고리", guides: "가이드", method: "조사 방법", updates: "업데이트", "seo-articles": "SEO 글" }, eyebrow: "독립 PikoBuy 리서치 가이드", homeTitle: "더 나은 검색을 위해 다시 만든 PikoBuy 스프레드시트.", homeIntro: "주문 전에 출처 페이지, QC 확인점, PikoBuy가 공개한 구매 절차를 확인하세요.", browse: "조사한 상품 보기", research: "조사 방법", independent: "독립 정보 사이트이며 PikoBuy와 제휴하지 않습니다.", language: "언어" },
  { code: "zh", name: "Chinese", nativeName: "中文", nav: { spreadsheet: "商品表格", categories: "分类", guides: "指南", method: "研究方法", updates: "更新记录", "seo-articles": "SEO文章" }, eyebrow: "独立 PikoBuy 研究指南", homeTitle: "重新构建的 PikoBuy 商品表格，让查找更聪明。", homeIntro: "更快找到来源页面，核对 QC 检查重点，并在下单前了解 PikoBuy 已公开的购买流程。", browse: "浏览已研究商品", research: "查看研究方法", independent: "独立资讯网站，与 PikoBuy 无隶属关系。", language: "语言" },
];

export const localeCodes = localeCopies.map((locale) => locale.code);

export function getLocaleCopy(code: string) {
  return localeCopies.find((locale) => locale.code === code) ?? localeCopies[0];
}

export function localPath(locale: string, page: PageKey | string = "home") {
  const suffix = page === "home" ? "" : `/${page}`;
  return locale === "en" ? (suffix || "/") : `/${locale}${suffix}`;
}

export const navKeys: Exclude<PageKey, "home">[] = ["spreadsheet", "categories", "guides", "method", "updates", "seo-articles"];

export const mainSiteCategories = [
  { key: "shoes", href: "https://findspreadsheet.com/shoes/", icon: "shoes" },
  { key: "hoodies", href: "https://findspreadsheet.com/hoodies-sweaters/", icon: "hoodie" },
  { key: "tshirts", href: "https://findspreadsheet.com/t-shirts/", icon: "shirt" },
  { key: "jackets", href: "https://findspreadsheet.com/jackets/", icon: "jacket" },
  { key: "bottoms", href: "https://findspreadsheet.com/pants-shorts/", icon: "shorts" },
  { key: "headwear", href: "https://findspreadsheet.com/headwear/", icon: "cap" },
  { key: "accessories", href: "https://findspreadsheet.com/accessories/", icon: "bag" },
  { key: "jerseys", href: "https://findspreadsheet.com/Jersey/", icon: "jersey" },
  { key: "electronics", href: "https://findspreadsheet.com/electronics/", icon: "headphones" },
  { key: "other", href: "https://findspreadsheet.com/other-stuff/", icon: "box" },
] as const;

const categoryNames: Record<string, string[]> = {
  en: ["Shoes", "Hoodies", "T-Shirts", "Jackets", "Pants / Shorts", "Headwear", "Accessories", "Jerseys", "Electronics", "Other Stuff"],
  es: ["Calzado", "Sudaderas", "Camisetas", "Chaquetas", "Pantalones / Shorts", "Gorras y sombreros", "Accesorios", "Camisetas deportivas", "Electrónica", "Otros"],
  de: ["Schuhe", "Hoodies", "T-Shirts", "Jacken", "Hosen / Shorts", "Kopfbedeckungen", "Accessoires", "Trikots", "Elektronik", "Sonstiges"],
  fr: ["Chaussures", "Sweats à capuche", "T-shirts", "Vestes", "Pantalons / Shorts", "Couvre-chefs", "Accessoires", "Maillots", "Électronique", "Autres"],
  it: ["Scarpe", "Felpe", "T-shirt", "Giacche", "Pantaloni / Shorts", "Copricapi", "Accessori", "Maglie sportive", "Elettronica", "Altro"],
  pt: ["Calçado", "Moletons", "Camisetas", "Jaquetas", "Calças / Shorts", "Chapéus e bonés", "Acessórios", "Camisas esportivas", "Eletrónica", "Outros"],
  pl: ["Buty", "Bluzy z kapturem", "T-shirty", "Kurtki", "Spodnie / Szorty", "Nakrycia głowy", "Akcesoria", "Koszulki sportowe", "Elektronika", "Inne"],
  nl: ["Schoenen", "Hoodies", "T-shirts", "Jassen", "Broeken / Shorts", "Hoofddeksels", "Accessoires", "Sportshirts", "Elektronica", "Overig"],
  sv: ["Skor", "Huvtröjor", "T-shirts", "Jackor", "Byxor / Shorts", "Huvudbonader", "Accessoarer", "Matchtröjor", "Elektronik", "Övrigt"],
  da: ["Sko", "Hættetrøjer", "T-shirts", "Jakker", "Bukser / Shorts", "Hovedbeklædning", "Tilbehør", "Spilletrøjer", "Elektronik", "Andet"],
  no: ["Sko", "Hettegensere", "T-skjorter", "Jakker", "Bukser / Shorts", "Hodeplagg", "Tilbehør", "Drakter", "Elektronikk", "Annet"],
  fi: ["Kengät", "Hupparit", "T-paidat", "Takit", "Housut / Shortsit", "Päähineet", "Asusteet", "Pelipaidat", "Elektroniikka", "Muut"],
  cs: ["Boty", "Mikiny", "Trička", "Bundy", "Kalhoty / Kraťasy", "Pokrývky hlavy", "Doplňky", "Dresy", "Elektronika", "Ostatní"],
  ro: ["Încălțăminte", "Hanorace", "Tricouri", "Jachete", "Pantaloni / Pantaloni scurți", "Articole pentru cap", "Accesorii", "Tricouri sportive", "Electronice", "Altele"],
  hu: ["Cipők", "Kapucnis pulóverek", "Pólók", "Dzsekik", "Nadrágok / Rövidnadrágok", "Fejfedők", "Kiegészítők", "Mezek", "Elektronika", "Egyéb"],
  el: ["Παπούτσια", "Φούτερ", "Μπλουζάκια", "Μπουφάν", "Παντελόνια / Σορτς", "Καπέλα", "Αξεσουάρ", "Φανέλες", "Ηλεκτρονικά", "Άλλα"],
  uk: ["Взуття", "Худі", "Футболки", "Куртки", "Штани / Шорти", "Головні убори", "Аксесуари", "Спортивні футболки", "Електроніка", "Інше"],
  tr: ["Ayakkabı", "Kapüşonlular", "Tişörtler", "Ceketler", "Pantolon / Şort", "Şapka", "Aksesuarlar", "Formalar", "Elektronik", "Diğer"],
  ru: ["Обувь", "Худи", "Футболки", "Куртки", "Брюки / Шорты", "Головные уборы", "Аксессуары", "Спортивные майки", "Электроника", "Другое"],
  bg: ["Обувки", "Суитшърти", "Тениски", "Якета", "Панталони / Шорти", "Шапки", "Аксесоари", "Спортни фланелки", "Електроника", "Други"],
  ar: ["أحذية", "سترات بغطاء رأس", "قمصان قصيرة", "سترات", "بناطيل / شورتات", "قبعات", "إكسسوارات", "قمصان رياضية", "إلكترونيات", "أخرى"],
  ja: ["シューズ", "パーカー", "Tシャツ", "ジャケット", "パンツ／ショーツ", "帽子", "アクセサリー", "ユニフォーム", "電子機器", "その他"],
  ko: ["신발", "후드", "티셔츠", "재킷", "바지 / 반바지", "모자", "액세서리", "유니폼", "전자제품", "기타"],
  zh: ["鞋类", "连帽衫", "T恤", "夹克", "长裤 / 短裤", "帽子", "配饰", "球衣", "电子产品", "其他商品"],
};

export function getMainSiteCategories(locale: string) {
  const copy = getLocaleCopy(locale);
  const names = categoryNames[locale] ?? categoryNames.en;
  return mainSiteCategories.map((category, index) => ({
    ...category,
    name: names[index],
    note: `${copy.browse} · ${names[index]}`,
  }));
}

export type InterfaceLabels = {
  liveFeed: string;
  latestPopular: string;
  viewAll: string;
  verticalAutoplay: string;
  refreshes: string;
  directCategories: string;
  officialSources: string;
  sourceChecked: string;
  ready: string;
  questions: string;
  evidence: string;
  languageNote: string;
};

const interfaceLabelRows: Record<string, string[]> = {
  en: ["LIVE MAIN-SITE FEED", "Latest & popular finds", "VIEW ALL", "Vertical autoplay", "Refreshes every 30 minutes", "DIRECT CATEGORIES", "OFFICIAL SOURCES", "SOURCE CHECKED", "READY TO EXPLORE?", "CLEAR ANSWERS", "EVIDENCE STANDARD", "Every language keeps the current page and translates the interface."],
  es: ["CATÁLOGO EN DIRECTO DEL SITIO PRINCIPAL", "Novedades y productos populares", "VER TODO", "Reproducción vertical", "Se actualiza cada 30 minutos", "CATEGORÍAS DIRECTAS", "FUENTES OFICIALES", "FUENTE COMPROBADA", "¿LISTO PARA EXPLORAR?", "RESPUESTAS CLARAS", "CRITERIO DE EVIDENCIA", "Cada idioma conserva la página actual y traduce toda la interfaz."],
  de: ["LIVE-KATALOG DER HAUPTSEITE", "Neueste und beliebte Funde", "ALLE ANZEIGEN", "Vertikaler Autolauf", "Aktualisierung alle 30 Minuten", "DIREKTE KATEGORIEN", "OFFIZIELLE QUELLEN", "QUELLE GEPRÜFT", "BEREIT ZUM ENTDECKEN?", "KLARE ANTWORTEN", "NACHWEISSTANDARD", "Jede Sprache behält die aktuelle Seite bei und übersetzt die gesamte Oberfläche."],
  fr: ["FLUX EN DIRECT DU SITE PRINCIPAL", "Nouveautés et trouvailles populaires", "TOUT VOIR", "Défilement vertical automatique", "Actualisation toutes les 30 minutes", "CATÉGORIES DIRECTES", "SOURCES OFFICIELLES", "SOURCE VÉRIFIÉE", "PRÊT À EXPLORER ?", "RÉPONSES CLAIRES", "NORME DE PREUVE", "Chaque langue conserve la page actuelle et traduit toute l’interface."],
  it: ["FEED LIVE DEL SITO PRINCIPALE", "Novità e prodotti popolari", "VEDI TUTTO", "Scorrimento verticale automatico", "Aggiornamento ogni 30 minuti", "CATEGORIE DIRETTE", "FONTI UFFICIALI", "FONTE CONTROLLATA", "PRONTO A ESPLORARE?", "RISPOSTE CHIARE", "STANDARD DELLE PROVE", "Ogni lingua mantiene la pagina corrente e traduce l’intera interfaccia."],
  pt: ["FEED AO VIVO DO SITE PRINCIPAL", "Novidades e produtos populares", "VER TUDO", "Reprodução vertical automática", "Atualiza a cada 30 minutos", "CATEGORIAS DIRETAS", "FONTES OFICIAIS", "FONTE VERIFICADA", "PRONTO PARA EXPLORAR?", "RESPOSTAS CLARAS", "PADRÃO DE EVIDÊNCIA", "Cada idioma mantém a página atual e traduz toda a interface."],
  pl: ["KATALOG GŁÓWNEJ STRONY NA ŻYWO", "Najnowsze i popularne znaleziska", "ZOBACZ WSZYSTKO", "Automatyczne przewijanie pionowe", "Odświeżanie co 30 minut", "BEZPOŚREDNIE KATEGORIE", "OFICJALNE ŹRÓDŁA", "ŹRÓDŁO SPRAWDZONE", "GOTOWY DO PRZEGLĄDANIA?", "JASNE ODPOWIEDZI", "STANDARD DOWODÓW", "Każdy język zachowuje bieżącą stronę i tłumaczy cały interfejs."],
  nl: ["LIVE-FEED VAN DE HOOFDSITE", "Nieuwste en populaire vondsten", "ALLES BEKIJKEN", "Verticaal automatisch afspelen", "Vernieuwt elke 30 minuten", "DIRECTE CATEGORIEËN", "OFFICIËLE BRONNEN", "BRON GECONTROLEERD", "KLAAR OM TE ONTDEKKEN?", "DUIDELIJKE ANTWOORDEN", "BEWIJSNORM", "Elke taal behoudt de huidige pagina en vertaalt de volledige interface."],
  sv: ["LIVEFLÖDE FRÅN HUVUDSIDAN", "Senaste och populära fynd", "VISA ALLA", "Vertikal automatisk uppspelning", "Uppdateras var 30:e minut", "DIREKTA KATEGORIER", "OFFICIELLA KÄLLOR", "KÄLLA KONTROLLERAD", "REDO ATT UTFORSKA?", "TYDLIGA SVAR", "BEVISSTANDARD", "Varje språk behåller aktuell sida och översätter hela gränssnittet."],
  da: ["LIVEFEED FRA HOVEDSIDEN", "Nyeste og populære fund", "SE ALLE", "Lodret automatisk afspilning", "Opdateres hvert 30. minut", "DIREKTE KATEGORIER", "OFFICIELLE KILDER", "KILDE KONTROLLERET", "KLAR TIL AT UDFORSKE?", "KLARE SVAR", "DOKUMENTATIONSSTANDARD", "Hvert sprog bevarer den aktuelle side og oversætter hele brugerfladen."],
  no: ["DIREKTESTRØM FRA HOVEDSIDEN", "Nyeste og populære funn", "VIS ALLE", "Vertikal automatisk avspilling", "Oppdateres hvert 30. minutt", "DIREKTE KATEGORIER", "OFFISIELLE KILDER", "KILDE KONTROLLERT", "KLAR TIL Å UTFORSKE?", "TYDELIGE SVAR", "DOKUMENTASJONSSTANDARD", "Hvert språk beholder gjeldende side og oversetter hele grensesnittet."],
  fi: ["PÄÄSIVUSTON LIVE-SYÖTE", "Uusimmat ja suositut löydöt", "NÄYTÄ KAIKKI", "Pystysuora automaattitoisto", "Päivittyy 30 minuutin välein", "SUORAT KATEGORIAT", "VIRALLISET LÄHTEET", "LÄHDE TARKISTETTU", "VALMIS TUTKIMAAN?", "SELVÄT VASTAUKSET", "NÄYTTÖSTANDARDI", "Jokainen kieli säilyttää nykyisen sivun ja kääntää koko käyttöliittymän."],
  cs: ["ŽIVÝ KATALOG HLAVNÍHO WEBU", "Nejnovější a oblíbené nálezy", "ZOBRAZIT VŠE", "Svislé automatické přehrávání", "Obnova každých 30 minut", "PŘÍMÉ KATEGORIE", "OFICIÁLNÍ ZDROJE", "ZDROJ OVĚŘEN", "PŘIPRAVENI PROZKOUMÁVAT?", "JASNÉ ODPOVĚDI", "STANDARD DŮKAZŮ", "Každý jazyk zachová aktuální stránku a přeloží celé rozhraní."],
  ro: ["FLUX LIVE DIN SITE-UL PRINCIPAL", "Produse noi și populare", "VEZI TOT", "Redare verticală automată", "Se actualizează la 30 de minute", "CATEGORII DIRECTE", "SURSE OFICIALE", "SURSĂ VERIFICATĂ", "GATA DE EXPLORARE?", "RĂSPUNSURI CLARE", "STANDARD DE DOVEZI", "Fiecare limbă păstrează pagina curentă și traduce întreaga interfață."],
  hu: ["A FŐOLDAL ÉLŐ KATALÓGUSA", "Legújabb és népszerű találatok", "ÖSSZES MEGTEKINTÉSE", "Függőleges automatikus lejátszás", "30 percenként frissül", "KÖZVETLEN KATEGÓRIÁK", "HIVATALOS FORRÁSOK", "FORRÁS ELLENŐRIZVE", "KÉSZ A FELFEDEZÉSRE?", "EGYÉRTELMŰ VÁLASZOK", "BIZONYÍTÉKI SZABVÁNY", "Minden nyelv megtartja az aktuális oldalt, és lefordítja a teljes felületet."],
  el: ["ΖΩΝΤΑΝΗ ΡΟΗ ΚΥΡΙΟΥ ΙΣΤΟΤΟΠΟΥ", "Νεότερα και δημοφιλή ευρήματα", "ΠΡΟΒΟΛΗ ΟΛΩΝ", "Αυτόματη κάθετη κύλιση", "Ανανέωση κάθε 30 λεπτά", "ΑΜΕΣΕΣ ΚΑΤΗΓΟΡΙΕΣ", "ΕΠΙΣΗΜΕΣ ΠΗΓΕΣ", "ΕΛΕΓΜΕΝΗ ΠΗΓΗ", "ΕΤΟΙΜΟΙ ΓΙΑ ΕΞΕΡΕΥΝΗΣΗ;", "ΣΑΦΕΙΣ ΑΠΑΝΤΗΣΕΙΣ", "ΠΡΟΤΥΠΟ ΑΠΟΔΕΙΞΕΩΝ", "Κάθε γλώσσα διατηρεί την τρέχουσα σελίδα και μεταφράζει όλο το περιβάλλον."],
  uk: ["ЖИВА СТРІЧКА ГОЛОВНОГО САЙТУ", "Нові та популярні знахідки", "ПЕРЕГЛЯНУТИ ВСЕ", "Вертикальне автовідтворення", "Оновлення кожні 30 хвилин", "ПРЯМІ КАТЕГОРІЇ", "ОФІЦІЙНІ ДЖЕРЕЛА", "ДЖЕРЕЛО ПЕРЕВІРЕНО", "ГОТОВІ ДО ПЕРЕГЛЯДУ?", "ЧІТКІ ВІДПОВІДІ", "СТАНДАРТ ДОКАЗІВ", "Кожна мова зберігає поточну сторінку й перекладає весь інтерфейс."],
  tr: ["ANA SİTE CANLI AKIŞI", "En yeni ve popüler bulgular", "TÜMÜNÜ GÖR", "Dikey otomatik oynatma", "30 dakikada bir yenilenir", "DOĞRUDAN KATEGORİLER", "RESMÎ KAYNAKLAR", "KAYNAK KONTROL EDİLDİ", "KEŞFETMEYE HAZIR MISINIZ?", "NET YANITLAR", "KANIT STANDARDI", "Her dil mevcut sayfayı korur ve tüm arayüzü çevirir."],
  ru: ["ЖИВАЯ ЛЕНТА ОСНОВНОГО САЙТА", "Новые и популярные находки", "ПОКАЗАТЬ ВСЕ", "Вертикальное автовоспроизведение", "Обновление каждые 30 минут", "ПРЯМЫЕ КАТЕГОРИИ", "ОФИЦИАЛЬНЫЕ ИСТОЧНИКИ", "ИСТОЧНИК ПРОВЕРЕН", "ГОТОВЫ К ПОИСКУ?", "ПОНЯТНЫЕ ОТВЕТЫ", "СТАНДАРТ ДОКАЗАТЕЛЬСТВ", "Каждый язык сохраняет текущую страницу и переводит весь интерфейс."],
  bg: ["ЖИВА ЕМИСИЯ ОТ ОСНОВНИЯ САЙТ", "Нови и популярни находки", "ВИЖТЕ ВСИЧКИ", "Вертикално автоматично възпроизвеждане", "Обновяване на всеки 30 минути", "ДИРЕКТНИ КАТЕГОРИИ", "ОФИЦИАЛНИ ИЗТОЧНИЦИ", "ИЗТОЧНИКЪТ Е ПРОВЕРЕН", "ГОТОВИ ЗА РАЗГЛЕЖДАНЕ?", "ЯСНИ ОТГОВОРИ", "СТАНДАРТ ЗА ДОКАЗАТЕЛСТВА", "Всеки език запазва текущата страница и превежда целия интерфейс."],
  ar: ["البث المباشر للموقع الرئيسي", "أحدث المنتجات وأكثرها شعبية", "عرض الكل", "تشغيل رأسي تلقائي", "يتجدد كل 30 دقيقة", "فئات مباشرة", "مصادر رسمية", "تم فحص المصدر", "هل أنت مستعد للاستكشاف؟", "إجابات واضحة", "معيار الأدلة", "تحافظ كل لغة على الصفحة الحالية وتترجم الواجهة كاملة."],
  ja: ["メインサイトのライブ商品情報", "最新・人気の商品", "すべて見る", "縦方向の自動再生", "30分ごとに更新", "直接カテゴリー", "公式情報源", "出典確認済み", "商品を探しますか？", "明確な回答", "証拠基準", "どの言語でも現在のページを保ち、画面全体を翻訳します。"],
  ko: ["메인 사이트 실시간 피드", "최신 및 인기 상품", "전체 보기", "세로 자동 재생", "30분마다 새로고침", "직접 카테고리", "공식 출처", "출처 확인됨", "둘러볼 준비가 되셨나요?", "명확한 답변", "근거 기준", "모든 언어에서 현재 페이지를 유지하고 전체 인터페이스를 번역합니다."],
  zh: ["主站实时商品流", "最新与热门商品", "查看全部", "纵向自动播放", "每 30 分钟刷新", "直达分类", "官方来源", "来源已核对", "准备开始浏览？", "清晰解答", "证据标准", "切换任何语言都会保留当前页面，并翻译完整界面。"],
};

export function getInterfaceLabels(locale: string): InterfaceLabels {
  const row = interfaceLabelRows[locale] ?? interfaceLabelRows.en;
  return {
    liveFeed: row[0], latestPopular: row[1], viewAll: row[2], verticalAutoplay: row[3],
    refreshes: row[4], directCategories: row[5], officialSources: row[6], sourceChecked: row[7],
    ready: row[8], questions: row[9], evidence: row[10], languageNote: row[11],
  };
}

export const officialSources = {
  guide: "https://www.pikobuy.com/guide",
  about: "https://www.pikobuy.com/About",
  shipping: "https://www.pikobuy.com/shipping-cost",
  shippingPolicy: "https://www.pikobuy.com/protocol/shipping",
  returns: "https://www.pikobuy.com/protocol/returns",
};
