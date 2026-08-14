export type LocaleDictionary = Record<string, string>;

const loaders: Record<string, () => Promise<{ default: LocaleDictionary }>> = {
  de: () => import("./locales/de.json"),
  fr: () => import("./locales/fr.json"),
  es: () => import("./locales/es.json"),
  it: () => import("./locales/it.json"),
  nl: () => import("./locales/nl.json"),
  pl: () => import("./locales/pl.json"),
  pt: () => import("./locales/pt.json"),
  sv: () => import("./locales/sv.json"),
  no: () => import("./locales/no.json"),
  da: () => import("./locales/da.json"),
  fi: () => import("./locales/fi.json"),
  cs: () => import("./locales/cs.json"),
  ro: () => import("./locales/ro.json"),
  hu: () => import("./locales/hu.json"),
  el: () => import("./locales/el.json"),
  tr: () => import("./locales/tr.json"),
  ru: () => import("./locales/ru.json"),
  uk: () => import("./locales/uk.json"),
  ar: () => import("./locales/ar.json"),
  ja: () => import("./locales/ja.json"),
  ko: () => import("./locales/ko.json"),
  id: () => import("./locales/id.json"),
  vi: () => import("./locales/vi.json"),
};

const interfaceOverrides: Record<string, LocaleDictionary> = {
  de: { "06 dated records · source price retained": "06 datierte Einträge · Quellpreis beibehalten", "Each category opens the matching product collection on FindSpreadsheet.": "Jede Kategorie öffnet die passende Produktsammlung auf FindSpreadsheet.", "Open category on FindSpreadsheet": "Kategorie auf FindSpreadsheet öffnen" },
  fr: { "06 dated records · source price retained": "06 fiches datées · prix source conservé", "Each category opens the matching product collection on FindSpreadsheet.": "Chaque catégorie ouvre la collection de produits correspondante sur FindSpreadsheet.", "Open category on FindSpreadsheet": "Ouvrir la catégorie sur FindSpreadsheet" },
  es: { "06 dated records · source price retained": "06 fichas fechadas · precio de origen conservado", "Each category opens the matching product collection on FindSpreadsheet.": "Cada categoría abre la colección de productos correspondiente en FindSpreadsheet.", "Open category on FindSpreadsheet": "Abrir categoría en FindSpreadsheet" },
  it: { "06 dated records · source price retained": "06 schede datate · prezzo originale conservato", "Each category opens the matching product collection on FindSpreadsheet.": "Ogni categoria apre la raccolta di prodotti corrispondente su FindSpreadsheet.", "Open category on FindSpreadsheet": "Apri la categoria su FindSpreadsheet" },
  nl: { "06 dated records · source price retained": "06 gedateerde records · bronprijs behouden", "Each category opens the matching product collection on FindSpreadsheet.": "Elke categorie opent de bijbehorende productcollectie op FindSpreadsheet.", "Open category on FindSpreadsheet": "Categorie openen op FindSpreadsheet" },
  pl: { "06 dated records · source price retained": "06 wpisów z datą · zachowano cenę źródłową", "Each category opens the matching product collection on FindSpreadsheet.": "Każda kategoria otwiera odpowiednią kolekcję produktów w FindSpreadsheet.", "Open category on FindSpreadsheet": "Otwórz kategorię w FindSpreadsheet" },
  pt: { "06 dated records · source price retained": "06 registos datados · preço de origem mantido", "Each category opens the matching product collection on FindSpreadsheet.": "Cada categoria abre a coleção de produtos correspondente no FindSpreadsheet.", "Open category on FindSpreadsheet": "Abrir categoria no FindSpreadsheet" },
  sv: { "06 dated records · source price retained": "06 daterade poster · källpriset behållet", "Each category opens the matching product collection on FindSpreadsheet.": "Varje kategori öppnar motsvarande produktsamling på FindSpreadsheet.", "Open category on FindSpreadsheet": "Öppna kategorin på FindSpreadsheet" },
  no: { "06 dated records · source price retained": "06 daterte oppføringer · kildepris beholdt", "Each category opens the matching product collection on FindSpreadsheet.": "Hver kategori åpner den tilsvarende produktsamlingen på FindSpreadsheet.", "Open category on FindSpreadsheet": "Åpne kategorien på FindSpreadsheet" },
  da: { "06 dated records · source price retained": "06 daterede poster · kildepris bevaret", "Each category opens the matching product collection on FindSpreadsheet.": "Hver kategori åbner den tilsvarende produktsamling på FindSpreadsheet.", "Open category on FindSpreadsheet": "Åbn kategorien på FindSpreadsheet" },
  fi: { "06 dated records · source price retained": "06 päivättyä tietuetta · lähdehinta säilytetty", "Each category opens the matching product collection on FindSpreadsheet.": "Jokainen kategoria avaa vastaavan tuotekokoelman FindSpreadsheetissä.", "Open category on FindSpreadsheet": "Avaa kategoria FindSpreadsheetissä" },
  cs: { "06 dated records · source price retained": "06 datovaných záznamů · zdrojová cena zachována", "Each category opens the matching product collection on FindSpreadsheet.": "Každá kategorie otevře odpovídající kolekci produktů na FindSpreadsheet.", "Open category on FindSpreadsheet": "Otevřít kategorii na FindSpreadsheet" },
  ro: { "06 dated records · source price retained": "06 înregistrări datate · prețul sursă păstrat", "Each category opens the matching product collection on FindSpreadsheet.": "Fiecare categorie deschide colecția de produse corespunzătoare pe FindSpreadsheet.", "Open category on FindSpreadsheet": "Deschide categoria pe FindSpreadsheet" },
  hu: { "06 dated records · source price retained": "06 dátumozott rekord · forrásár megőrizve", "Each category opens the matching product collection on FindSpreadsheet.": "Minden kategória a megfelelő termékgyűjteményt nyitja meg a FindSpreadsheet oldalon.", "Open category on FindSpreadsheet": "Kategória megnyitása a FindSpreadsheet oldalon" },
  el: { "06 dated records · source price retained": "06 καταχωρίσεις με ημερομηνία · διατηρείται η τιμή πηγής", "Each category opens the matching product collection on FindSpreadsheet.": "Κάθε κατηγορία ανοίγει την αντίστοιχη συλλογή προϊόντων στο FindSpreadsheet.", "Open category on FindSpreadsheet": "Άνοιγμα κατηγορίας στο FindSpreadsheet" },
  tr: { "06 dated records · source price retained": "06 tarihli kayıt · kaynak fiyatı korundu", "Each category opens the matching product collection on FindSpreadsheet.": "Her kategori FindSpreadsheet'teki eşleşen ürün koleksiyonunu açar.", "Open category on FindSpreadsheet": "Kategoriyi FindSpreadsheet'te aç" },
  ru: { "06 dated records · source price retained": "06 записей с датой · исходная цена сохранена", "Each category opens the matching product collection on FindSpreadsheet.": "Каждая категория открывает соответствующую подборку товаров на FindSpreadsheet.", "Open category on FindSpreadsheet": "Открыть категорию на FindSpreadsheet" },
  uk: { "06 dated records · source price retained": "06 датованих записів · вихідну ціну збережено", "Each category opens the matching product collection on FindSpreadsheet.": "Кожна категорія відкриває відповідну добірку товарів на FindSpreadsheet.", "Open category on FindSpreadsheet": "Відкрити категорію на FindSpreadsheet" },
  ar: { "06 dated records · source price retained": "06 سجلات مؤرخة · تم الاحتفاظ بسعر المصدر", "Each category opens the matching product collection on FindSpreadsheet.": "تفتح كل فئة مجموعة المنتجات المطابقة على FindSpreadsheet.", "Open category on FindSpreadsheet": "فتح الفئة على FindSpreadsheet" },
  ja: { "06 dated records · source price retained": "日付付き記録6件・元の価格を保持", "Each category opens the matching product collection on FindSpreadsheet.": "各カテゴリーからFindSpreadsheetの該当商品コレクションを開きます。", "Open category on FindSpreadsheet": "FindSpreadsheetでカテゴリーを開く" },
  ko: { "06 dated records · source price retained": "날짜가 있는 기록 6개 · 원본 가격 유지", "Each category opens the matching product collection on FindSpreadsheet.": "각 카테고리는 FindSpreadsheet의 해당 상품 모음을 엽니다.", "Open category on FindSpreadsheet": "FindSpreadsheet에서 카테고리 열기" },
  id: { "06 dated records · source price retained": "06 catatan bertanggal · harga sumber dipertahankan", "Each category opens the matching product collection on FindSpreadsheet.": "Setiap kategori membuka koleksi produk yang sesuai di FindSpreadsheet.", "Open category on FindSpreadsheet": "Buka kategori di FindSpreadsheet" },
  vi: { "06 dated records · source price retained": "06 bản ghi có ngày · giữ nguyên giá nguồn", "Each category opens the matching product collection on FindSpreadsheet.": "Mỗi danh mục mở bộ sưu tập sản phẩm tương ứng trên FindSpreadsheet.", "Open category on FindSpreadsheet": "Mở danh mục trên FindSpreadsheet" },
};

const navigationOverrides: Record<string, LocaleDictionary> = {
  de: { "SEO Articles": "SEO-Artikel", "Shipping": "Versand" },
  fr: { "SEO Articles": "Articles SEO", "Shipping": "Expédition" },
  es: { "SEO Articles": "Artículos SEO", "Shipping": "Envío" },
  it: { "SEO Articles": "Articoli SEO", "Shipping": "Spedizione" },
  nl: { "SEO Articles": "SEO-artikelen", "Shipping": "Verzending" },
  pl: { "SEO Articles": "Artykuły SEO", "Shipping": "Wysyłka" },
  pt: { "SEO Articles": "Artigos de SEO", "Shipping": "Envio" },
  sv: { "SEO Articles": "SEO-artiklar", "Shipping": "Frakt" },
  no: { "SEO Articles": "SEO-artikler", "Shipping": "Frakt" },
  da: { "SEO Articles": "SEO-artikler", "Shipping": "Forsendelse" },
  fi: { "SEO Articles": "SEO-artikkelit", "Shipping": "Toimitus" },
  cs: { "SEO Articles": "SEO články", "Shipping": "Doprava" },
  ro: { "SEO Articles": "Articole SEO", "Shipping": "Livrare" },
  hu: { "SEO Articles": "SEO-cikkek", "Shipping": "Szállítás" },
  el: { "SEO Articles": "Άρθρα SEO", "Shipping": "Αποστολή" },
  tr: { "SEO Articles": "SEO Makaleleri", "Shipping": "Kargo" },
  ru: { "SEO Articles": "SEO-статьи", "Shipping": "Доставка" },
  uk: { "SEO Articles": "SEO-статті", "Shipping": "Доставка" },
  ar: { "SEO Articles": "مقالات تحسين محركات البحث", "Shipping": "الشحن" },
  ja: { "SEO Articles": "SEO記事", "Shipping": "配送" },
  ko: { "SEO Articles": "SEO 문서", "Shipping": "배송" },
  id: { "SEO Articles": "Artikel SEO", "Shipping": "Pengiriman" },
  vi: { "SEO Articles": "Bài viết SEO", "Shipping": "Vận chuyển" },
};

export async function getDictionary(locale: string): Promise<LocaleDictionary> {
  const loader = loaders[locale];
  return loader ? { ...(await loader()).default, ...(interfaceOverrides[locale] || {}), ...(navigationOverrides[locale] || {}) } : {};
}

export function translate(dictionary: LocaleDictionary, value: string) {
  return dictionary[value] || value;
}
