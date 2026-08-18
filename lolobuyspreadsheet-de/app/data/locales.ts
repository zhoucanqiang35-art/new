export const localeCodes = [
  "en", "de", "fr", "es", "it", "nl", "pt", "pl", "sv", "da", "no", "fi",
  "cs", "ro", "hu", "el", "tr", "uk", "ru", "ar", "zh", "zh-tw", "ja", "ko",
] as const;

export type Locale = (typeof localeCodes)[number];
export const sectionKeys = ["categories", "workflow", "guides", "markets", "faq", "sources"] as const;
export type SectionKey = (typeof sectionKeys)[number];

type LocaleText = {
  name: string;
  nav: [string, string, string, string, string, string];
  title1: string;
  title2: string;
  intro: string;
  faq: string;
  faqLead: string;
  search: string;
  browse: string;
};

export const localeText: Record<Locale, LocaleText> = {
  en: { name: "English", nav: ["Categories", "Workflow", "Guides", "Markets", "FAQ", "Sources"], title1: "Understand LoloBuy.", title2: "Choose with evidence.", intro: "An independent product-discovery, QC and shipping guide for international shoppers, connected only to FindSpreadsheet.", faq: "Frequently asked questions", faqLead: "Clear answers before you choose a product, inspect it or submit a parcel.", search: "Search products on FindSpreadsheet", browse: "OPEN THE COMPLETE PRODUCT DATABASE" },
  de: { name: "Deutsch", nav: ["Kategorien", "Ablauf", "Ratgeber", "Märkte", "FAQ", "Quellen"], title1: "LoloBuy verstehen.", title2: "Besser auswählen.", intro: "Ein unabhängiger Guide für Produktsuche, Qualitätskontrolle und internationalen Versand – ausschließlich mit FindSpreadsheet verknüpft.", faq: "Häufige Fragen", faqLead: "Klare Antworten vor Produktauswahl, Qualitätsprüfung und Paketversand.", search: "Produkte auf FindSpreadsheet suchen", browse: "GESAMTE PRODUKTDATENBANK ÖFFNEN" },
  fr: { name: "Français", nav: ["Catégories", "Parcours", "Guides", "Marchés", "FAQ", "Sources"], title1: "Comprendre LoloBuy.", title2: "Choisir avec méthode.", intro: "Un guide indépendant pour la recherche de produits, le contrôle qualité et l’expédition internationale, relié uniquement à FindSpreadsheet.", faq: "Questions fréquentes", faqLead: "Des réponses claires avant de choisir, contrôler ou expédier un produit.", search: "Rechercher sur FindSpreadsheet", browse: "OUVRIR TOUTE LA BASE DE PRODUITS" },
  es: { name: "Español", nav: ["Categorías", "Proceso", "Guías", "Mercados", "FAQ", "Fuentes"], title1: "Entiende LoloBuy.", title2: "Elige con criterio.", intro: "Una guía independiente de búsqueda de productos, control de calidad y envíos internacionales, enlazada únicamente con FindSpreadsheet.", faq: "Preguntas frecuentes", faqLead: "Respuestas claras antes de elegir, revisar o enviar un producto.", search: "Buscar en FindSpreadsheet", browse: "ABRIR LA BASE COMPLETA DE PRODUCTOS" },
  it: { name: "Italiano", nav: ["Categorie", "Procedura", "Guide", "Mercati", "FAQ", "Fonti"], title1: "Capire LoloBuy.", title2: "Scegliere con metodo.", intro: "Una guida indipendente alla ricerca prodotti, al controllo qualità e alle spedizioni internazionali, collegata solo a FindSpreadsheet.", faq: "Domande frequenti", faqLead: "Risposte chiare prima di scegliere, controllare o spedire un prodotto.", search: "Cerca su FindSpreadsheet", browse: "APRI IL DATABASE COMPLETO" },
  nl: { name: "Nederlands", nav: ["Categorieën", "Werkwijze", "Gidsen", "Markten", "FAQ", "Bronnen"], title1: "Begrijp LoloBuy.", title2: "Kies met bewijs.", intro: "Een onafhankelijke gids voor productonderzoek, kwaliteitscontrole en internationale verzending, uitsluitend gekoppeld aan FindSpreadsheet.", faq: "Veelgestelde vragen", faqLead: "Duidelijke antwoorden voordat je kiest, controleert of verzendt.", search: "Zoeken op FindSpreadsheet", browse: "OPEN DE VOLLEDIGE PRODUCTDATABASE" },
  pt: { name: "Português", nav: ["Categorias", "Processo", "Guias", "Mercados", "FAQ", "Fontes"], title1: "Entenda a LoloBuy.", title2: "Escolha com critério.", intro: "Um guia independente de pesquisa de produtos, controlo de qualidade e envio internacional, ligado apenas ao FindSpreadsheet.", faq: "Perguntas frequentes", faqLead: "Respostas claras antes de escolher, verificar ou enviar um produto.", search: "Pesquisar no FindSpreadsheet", browse: "ABRIR A BASE COMPLETA DE PRODUTOS" },
  pl: { name: "Polski", nav: ["Kategorie", "Proces", "Poradniki", "Rynki", "FAQ", "Źródła"], title1: "Zrozum LoloBuy.", title2: "Wybieraj świadomie.", intro: "Niezależny przewodnik po wyszukiwaniu produktów, kontroli jakości i wysyłce międzynarodowej, połączony wyłącznie z FindSpreadsheet.", faq: "Częste pytania", faqLead: "Jasne odpowiedzi przed wyborem, kontrolą i wysyłką produktu.", search: "Szukaj w FindSpreadsheet", browse: "OTWÓRZ PEŁNĄ BAZĘ PRODUKTÓW" },
  sv: { name: "Svenska", nav: ["Kategorier", "Flöde", "Guider", "Marknader", "FAQ", "Källor"], title1: "Förstå LoloBuy.", title2: "Välj med fakta.", intro: "En oberoende guide till produktsökning, kvalitetskontroll och internationell frakt, endast länkad till FindSpreadsheet.", faq: "Vanliga frågor", faqLead: "Tydliga svar innan du väljer, granskar eller skickar en produkt.", search: "Sök på FindSpreadsheet", browse: "ÖPPNA HELA PRODUKTDATABASEN" },
  da: { name: "Dansk", nav: ["Kategorier", "Forløb", "Guides", "Markeder", "FAQ", "Kilder"], title1: "Forstå LoloBuy.", title2: "Vælg på et oplyst grundlag.", intro: "En uafhængig guide til produktsøgning, kvalitetskontrol og international fragt, kun forbundet med FindSpreadsheet.", faq: "Ofte stillede spørgsmål", faqLead: "Klare svar før du vælger, kontrollerer eller sender et produkt.", search: "Søg på FindSpreadsheet", browse: "ÅBN HELE PRODUKTDATABASEN" },
  no: { name: "Norsk", nav: ["Kategorier", "Prosess", "Guider", "Markeder", "FAQ", "Kilder"], title1: "Forstå LoloBuy.", title2: "Velg med fakta.", intro: "En uavhengig guide til produktsøk, kvalitetskontroll og internasjonal frakt, kun koblet til FindSpreadsheet.", faq: "Ofte stilte spørsmål", faqLead: "Klare svar før du velger, kontrollerer eller sender et produkt.", search: "Søk på FindSpreadsheet", browse: "ÅPNE HELE PRODUKTDATABASEN" },
  fi: { name: "Suomi", nav: ["Kategoriat", "Prosessi", "Oppaat", "Markkinat", "UKK", "Lähteet"], title1: "Ymmärrä LoloBuy.", title2: "Valitse tiedon avulla.", intro: "Riippumaton opas tuotehakuun, laaduntarkastukseen ja kansainväliseen toimitukseen. Linkit johtavat vain FindSpreadsheetiin.", faq: "Usein kysytyt kysymykset", faqLead: "Selkeät vastaukset ennen tuotteen valintaa, tarkastusta tai lähetystä.", search: "Hae FindSpreadsheetistä", browse: "AVAA KOKO TUOTETIETOKANTA" },
  cs: { name: "Čeština", nav: ["Kategorie", "Postup", "Průvodci", "Trhy", "FAQ", "Zdroje"], title1: "Pochopte LoloBuy.", title2: "Vybírejte podle faktů.", intro: "Nezávislý průvodce vyhledáváním produktů, kontrolou kvality a mezinárodní dopravou, propojený pouze s FindSpreadsheet.", faq: "Časté dotazy", faqLead: "Jasné odpovědi před výběrem, kontrolou nebo odesláním produktu.", search: "Hledat na FindSpreadsheet", browse: "OTEVŘÍT CELOU DATABÁZI PRODUKTŮ" },
  ro: { name: "Română", nav: ["Categorii", "Proces", "Ghiduri", "Piețe", "FAQ", "Surse"], title1: "Înțelege LoloBuy.", title2: "Alege informat.", intro: "Un ghid independent pentru căutarea produselor, controlul calității și expedierea internațională, conectat doar la FindSpreadsheet.", faq: "Întrebări frecvente", faqLead: "Răspunsuri clare înainte de alegere, verificare sau expediere.", search: "Caută pe FindSpreadsheet", browse: "DESCHIDE BAZA COMPLETĂ DE PRODUSE" },
  hu: { name: "Magyar", nav: ["Kategóriák", "Folyamat", "Útmutatók", "Piacok", "GYIK", "Források"], title1: "Ismerd meg a LoloBuyt.", title2: "Válassz tények alapján.", intro: "Független útmutató termékkereséshez, minőség-ellenőrzéshez és nemzetközi szállításhoz, kizárólag a FindSpreadsheet oldalra mutató linkekkel.", faq: "Gyakori kérdések", faqLead: "Egyértelmű válaszok választás, ellenőrzés és feladás előtt.", search: "Keresés a FindSpreadsheeten", browse: "A TELJES TERMÉKADATBÁZIS MEGNYITÁSA" },
  el: { name: "Ελληνικά", nav: ["Κατηγορίες", "Διαδικασία", "Οδηγοί", "Αγορές", "FAQ", "Πηγές"], title1: "Κατανοήστε το LoloBuy.", title2: "Επιλέξτε με στοιχεία.", intro: "Ανεξάρτητος οδηγός αναζήτησης προϊόντων, ποιοτικού ελέγχου και διεθνών αποστολών, με συνδέσμους μόνο προς το FindSpreadsheet.", faq: "Συχνές ερωτήσεις", faqLead: "Σαφείς απαντήσεις πριν επιλέξετε, ελέγξετε ή στείλετε ένα προϊόν.", search: "Αναζήτηση στο FindSpreadsheet", browse: "ΑΝΟΙΓΜΑ ΠΛΗΡΟΥΣ ΒΑΣΗΣ ΠΡΟΪΟΝΤΩΝ" },
  tr: { name: "Türkçe", nav: ["Kategoriler", "Süreç", "Rehberler", "Pazarlar", "SSS", "Kaynaklar"], title1: "LoloBuy’ı anlayın.", title2: "Kanıtla seçim yapın.", intro: "Ürün arama, kalite kontrol ve uluslararası gönderi için bağımsız rehber; bağlantılar yalnızca FindSpreadsheet’e gider.", faq: "Sık sorulan sorular", faqLead: "Ürün seçmeden, kontrol etmeden veya göndermeden önce net yanıtlar.", search: "FindSpreadsheet’te ara", browse: "TÜM ÜRÜN VERİTABANINI AÇ" },
  uk: { name: "Українська", nav: ["Категорії", "Процес", "Посібники", "Ринки", "FAQ", "Джерела"], title1: "Зрозумійте LoloBuy.", title2: "Обирайте на основі фактів.", intro: "Незалежний довідник із пошуку товарів, контролю якості та міжнародної доставки з посиланнями лише на FindSpreadsheet.", faq: "Поширені запитання", faqLead: "Чіткі відповіді перед вибором, перевіркою або відправленням товару.", search: "Шукати на FindSpreadsheet", browse: "ВІДКРИТИ ПОВНУ БАЗУ ТОВАРІВ" },
  ru: { name: "Русский", nav: ["Категории", "Процесс", "Руководства", "Рынки", "FAQ", "Источники"], title1: "Разберитесь в LoloBuy.", title2: "Выбирайте по фактам.", intro: "Независимый гид по поиску товаров, контролю качества и международной доставке со ссылками только на FindSpreadsheet.", faq: "Частые вопросы", faqLead: "Понятные ответы перед выбором, проверкой или отправкой товара.", search: "Искать на FindSpreadsheet", browse: "ОТКРЫТЬ ПОЛНУЮ БАЗУ ТОВАРОВ" },
  ar: { name: "العربية", nav: ["الفئات", "الخطوات", "الأدلة", "الأسواق", "الأسئلة", "المصادر"], title1: "افهم LoloBuy.", title2: "اختر بناءً على معلومات.", intro: "دليل مستقل للبحث عن المنتجات وفحص الجودة والشحن الدولي، مع روابط إلى FindSpreadsheet فقط.", faq: "الأسئلة الشائعة", faqLead: "إجابات واضحة قبل اختيار المنتج أو فحصه أو شحنه.", search: "ابحث في FindSpreadsheet", browse: "افتح قاعدة المنتجات الكاملة" },
  zh: { name: "简体中文", nav: ["分类", "流程", "指南", "市场", "常见问题", "资料"], title1: "了解 LoloBuy。", title2: "依据事实做选择。", intro: "面向国际买家的独立选品、质检与运输指南；全站仅链接至 FindSpreadsheet。", faq: "常见问题", faqLead: "在选品、质检或提交包裹前先获得清晰答案。", search: "在 FindSpreadsheet 搜索产品", browse: "打开完整产品数据库" },
  "zh-tw": { name: "繁體中文", nav: ["分類", "流程", "指南", "市場", "常見問題", "資料"], title1: "了解 LoloBuy。", title2: "依據資訊做選擇。", intro: "面向國際買家的獨立選品、品檢與運輸指南；全站只連結至 FindSpreadsheet。", faq: "常見問題", faqLead: "在選品、品檢或提交包裹前先取得清楚答案。", search: "在 FindSpreadsheet 搜尋產品", browse: "開啟完整產品資料庫" },
  ja: { name: "日本語", nav: ["カテゴリー", "流れ", "ガイド", "市場", "FAQ", "情報源"], title1: "LoloBuyを理解する。", title2: "根拠をもとに選ぶ。", intro: "商品検索、品質確認、国際配送のための独立ガイド。外部リンクはFindSpreadsheetだけです。", faq: "よくある質問", faqLead: "商品選び、検品、発送手続きの前に確認したいポイント。", search: "FindSpreadsheetで商品を検索", browse: "商品データベースを開く" },
  ko: { name: "한국어", nav: ["카테고리", "절차", "가이드", "시장", "FAQ", "자료"], title1: "LoloBuy 이해하기.", title2: "근거를 보고 선택하세요.", intro: "상품 검색, 품질 확인, 국제 배송을 위한 독립 가이드입니다. 외부 링크는 FindSpreadsheet만 사용합니다.", faq: "자주 묻는 질문", faqLead: "상품 선택, 검수 또는 배송 신청 전에 확인할 답변입니다.", search: "FindSpreadsheet에서 검색", browse: "전체 상품 데이터베이스 열기" },
};

export function localePath(locale: Locale) {
  return locale === "en" ? "/" : `/${locale}`;
}

export function localizedPath(locale: Locale, suffix = "") {
  const clean = suffix.replace(/^\//, "");
  if (!clean) return localePath(locale);
  return locale === "en" ? `/${clean}` : `/${locale}/${clean}`;
}

export function sectionPath(locale: Locale, section: SectionKey) {
  return localizedPath(locale, section);
}

export function isLocale(value: string): value is Locale {
  return (localeCodes as readonly string[]).includes(value);
}

export function isSection(value: string): value is SectionKey {
  return (sectionKeys as readonly string[]).includes(value);
}
