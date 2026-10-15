// Standalone catalogue renderer: version 27 source rebuild.
const SOURCE_ORIGIN = 'https://findspreadsheet.com';
const SOURCE_HOST = new URL(SOURCE_ORIGIN).hostname;
const PIKOBUY_REGISTER = 'https://www.pikobuy.com/register?invitedCode=KPNJVF&inviteUserId=1109716';
// Source catalog prices are CNY. Display an estimated USD equivalent at a clear, consistent rate.
const CNY_PER_USD = 7.2;
// Eight-card desktop rows keep imported product images readable while local
// pagination preserves access to every product.
// while preserving access to every product through local pagination.
const CATALOG_PAGE_SIZE = 184;
let completeLiveProductsPromise;
const sourceHtmlMemory = new Map();
const SOURCE_PAGE_HEADERS = {
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'accept-language': 'en-US,en;q=0.9',
  // FindSpreadsheet serves the purchase controls in the normal document
  // response.  Keep a stable, descriptive request identity so the same
  // source record is returned for detail, category and fallback lookups.
  'user-agent': 'Mozilla/5.0 (compatible; PikoBuySpreadsheet/1.0; +https://findspreadsheet.com/)',
};

const LANGUAGE_OPTIONS = [['en', 'English'], ['de', 'Deutsch'], ['fr', 'Français'], ['es', 'Español'], ['it', 'Italiano'], ['pt', 'Português'], ['nl', 'Nederlands'], ['pl', 'Polski'], ['sv', 'Svenska']];
const NAV_LABELS = {
  en: ['Home', 'Product categories', 'Product details', 'SEO articles', 'FAQ', 'Register on PikoBuy ↗', 'Language'],
  de: ['Startseite', 'Produktkategorien', 'Produktdetails', 'SEO-Artikel', 'FAQ', 'Bei PikoBuy registrieren ↗', 'Sprache'],
  fr: ['Accueil', 'Catégories', 'Détails produits', 'Articles SEO', 'FAQ', 'S’inscrire sur PikoBuy ↗', 'Langue'],
  es: ['Inicio', 'Categorías', 'Detalles del producto', 'Artículos SEO', 'Preguntas frecuentes', 'Registrarse en PikoBuy ↗', 'Idioma'],
  it: ['Home', 'Categorie', 'Dettagli prodotto', 'Articoli SEO', 'FAQ', 'Registrati su PikoBuy ↗', 'Lingua'],
  pt: ['Início', 'Categorias', 'Detalhes do produto', 'Artigos SEO', 'FAQ', 'Registrar no PikoBuy ↗', 'Idioma'],
  nl: ['Start', 'Productcategorieën', 'Productdetails', 'SEO-artikelen', 'Veelgestelde vragen', 'Registreren bij PikoBuy ↗', 'Taal'],
  pl: ['Strona główna', 'Kategorie produktów', 'Szczegóły produktu', 'Artykuły SEO', 'FAQ', 'Zarejestruj się w PikoBuy ↗', 'Język'],
  sv: ['Hem', 'Produktkategorier', 'Produktdetaljer', 'SEO-artiklar', 'Vanliga frågor', 'Registrera hos PikoBuy ↗', 'Språk'],
};
// Site-owned copy is stored locally.  The original seller catalogue fields are
// deliberately not in this table: titles, IDs, prices and supplied images stay
// exactly as imported from the source record.
const SITE_COPY = {
  de: { hero:'Besser finden, bevor du kaufst.', lead:'Suche, Produktdaten, Bilder und QC-Kontext bleiben beim Stöbern in dieser PikoBuy-Spreadsheet-Website.', search:'Live-Katalog durchsuchen', placeholder:'Produkt, Stil, Verkäufer oder Kategorie', browse:'Katalog durchsuchen', guide:'Leitfaden öffnen', categories:'Produktdaten ohne Seitenwechsel durchsuchen.', categoryLead:'Jede Kategorie öffnet eine eigene durchsuchbare und sortierbare Ansicht in dieser Website.', checkout:'Hast du eine Weidian-Produkt-ID?', checkoutLead:'Gib die numerische ID ein. Erst der abschließende Kauf führt zu PikoBuy.', workflow:'Einmal recherchieren. Zweimal prüfen. Dann den offiziellen Weg nutzen.', steps:['Intern suchen','Produktdatensatz öffnen','Offiziell kaufen'], seo:'So recherchierst du Produkte, prüfst QC-Bilder und planst internationalen Versand.', seoLead:'Ein praxisnaher Leitfaden für überprüfbare Entscheidungen vor dem Kauf.', faq:'Antworten, bevor du einen Artikel zur Kasse sendest.', faqLead:'Diese Hinweise beziehen sich auf die öffentliche PikoBuy-Abfolge aus Produktsuche, Kaufhilfe, Lagerprüfung und Versand.', open:'Öffnen', back:'Zurück zu allen Produkten', record:'Produktdatensatz', source:'Live-Produktdaten aus dem gepflegten Katalog.', converted:'Umgerechnet aus CNY zum angegebenen Vergleichskurs.', before:'Vor dem Kauf:', note:'Prüfe QC-Bilder und die originalen Weidian-Bilder, bevor du den offiziellen PikoBuy-Weg öffnest.' },
  fr: { hero:'Mieux trouver avant d’acheter.', lead:'La recherche, les fiches produits, les images et le contexte QC restent sur ce site PikoBuy Spreadsheet.', search:'Rechercher le catalogue en direct', placeholder:'Produit, style, vendeur ou catégorie', browse:'Parcourir le catalogue', guide:'Ouvrir le guide', categories:'Parcourez les données produits sans quitter ce site.', categoryLead:'Chaque catégorie ouvre une vue recherchable et triable dans ce site.', checkout:'Vous avez un identifiant produit Weidian ?', checkoutLead:'Saisissez l’identifiant numérique. Seul l’achat final ouvre PikoBuy.', workflow:'Recherchez une fois. Vérifiez deux fois. Puis utilisez la voie officielle.', steps:['Rechercher ici','Ouvrir la fiche produit','Acheter officiellement'], seo:'Rechercher un produit, examiner les photos QC et préparer l’expédition internationale.', seoLead:'Un guide pratique fondé sur des faits avant la demande d’achat.', faq:'Des réponses avant d’envoyer un article au paiement.', faqLead:'Ces réponses suivent le parcours public PikoBuy : découverte, aide à l’achat, contrôle en entrepôt et expédition.', open:'Ouvrir', back:'Retour à tous les produits', record:'Fiche produit', source:'Données produit en direct du catalogue maintenu.', converted:'Conversion depuis le CNY au taux de comparaison indiqué.', before:'Avant l’achat :', note:'Examinez les photos QC et les images Weidian originales avant d’ouvrir la voie officielle PikoBuy.' },
  es: { hero:'Encuentra mejor antes de comprar.', lead:'La búsqueda, los registros, las imágenes y el contexto QC permanecen en este sitio PikoBuy Spreadsheet.', search:'Buscar en el catálogo en directo', placeholder:'Producto, estilo, vendedor o categoría', browse:'Explorar el catálogo', guide:'Abrir la guía', categories:'Explora datos de productos sin salir de este sitio.', categoryLead:'Cada categoría abre una vista propia con búsqueda y ordenación dentro del sitio.', checkout:'¿Tienes un ID de producto de Weidian?', checkoutLead:'Introduce el ID numérico. Solo la compra final abre PikoBuy.', workflow:'Investiga una vez. Comprueba dos veces. Después usa la ruta oficial.', steps:['Buscar internamente','Abrir el registro del producto','Comprar oficialmente'], seo:'Cómo investigar productos, revisar fotos QC y planificar el envío internacional.', seoLead:'Una guía práctica basada en hechos para decidir antes de solicitar una compra.', faq:'Respuestas antes de enviar un artículo al pago.', faqLead:'Estas respuestas siguen el flujo público de PikoBuy: descubrimiento, ayuda de compra, inspección en almacén y envío.', open:'Abrir', back:'Volver a todos los productos', record:'Registro del producto', source:'Datos del artículo en directo desde el catálogo mantenido.', converted:'Convertido desde CNY al tipo comparativo indicado.', before:'Antes de comprar:', note:'Revisa las fotos QC y las imágenes originales de Weidian antes de abrir la ruta oficial de PikoBuy.' },
  it: { hero:'Trova meglio prima di acquistare.', lead:'Ricerca, schede prodotto, immagini e contesto QC restano in questo sito PikoBuy Spreadsheet.', search:'Cerca nel catalogo live', placeholder:'Prodotto, stile, venditore o categoria', browse:'Sfoglia il catalogo', guide:'Apri la guida', categories:'Esplora i dati prodotto senza lasciare questo sito.', categoryLead:'Ogni categoria apre una vista ricercabile e ordinabile all’interno del sito.', checkout:'Hai un ID prodotto Weidian?', checkoutLead:'Inserisci l’ID numerico. Solo l’acquisto finale apre PikoBuy.', workflow:'Cerca una volta. Controlla due volte. Poi usa il percorso ufficiale.', steps:['Cerca internamente','Apri la scheda prodotto','Acquista ufficialmente'], seo:'Come ricercare prodotti, controllare foto QC e pianificare la spedizione internazionale.', seoLead:'Una guida pratica basata sui fatti per decidere prima della richiesta di acquisto.', faq:'Risposte prima di inviare un articolo al pagamento.', faqLead:'Le risposte seguono il flusso pubblico PikoBuy: scoperta, assistenza all’acquisto, controllo in magazzino e spedizione.', open:'Apri', back:'Torna a tutti i prodotti', record:'Scheda prodotto', source:'Dati articolo live dal catalogo mantenuto.', converted:'Convertito da CNY al tasso comparativo indicato.', before:'Prima dell’acquisto:', note:'Controlla le foto QC e le immagini Weidian originali prima di aprire il percorso ufficiale PikoBuy.' },
  pt: { hero:'Encontre melhor antes de comprar.', lead:'Pesquisa, registos de produto, imagens e contexto QC permanecem neste site PikoBuy Spreadsheet.', search:'Pesquisar catálogo ao vivo', placeholder:'Produto, estilo, vendedor ou categoria', browse:'Explorar catálogo', guide:'Abrir guia', categories:'Explore dados de produtos sem sair deste site.', categoryLead:'Cada categoria abre uma vista pesquisável e ordenável dentro do site.', checkout:'Tem um ID de produto Weidian?', checkoutLead:'Introduza o ID numérico. Apenas a compra final abre o PikoBuy.', workflow:'Pesquise uma vez. Verifique duas vezes. Depois use a rota oficial.', steps:['Pesquisar internamente','Abrir registo do produto','Comprar oficialmente'], seo:'Como pesquisar produtos, verificar fotos QC e planear o envio internacional.', seoLead:'Um guia prático baseado em factos para decidir antes de pedir a compra.', faq:'Respostas antes de enviar um artigo para pagamento.', faqLead:'As respostas seguem o fluxo público PikoBuy: descoberta, assistência de compra, inspeção em armazém e envio.', open:'Abrir', back:'Voltar a todos os produtos', record:'Registo do produto', source:'Dados do artigo ao vivo do catálogo mantido.', converted:'Convertido de CNY à taxa comparativa indicada.', before:'Antes de comprar:', note:'Verifique fotos QC e imagens Weidian originais antes de abrir a rota oficial PikoBuy.' },
  nl: { hero:'Vind beter voordat je koopt.', lead:'Zoeken, productrecords, beelden en QC-context blijven binnen deze PikoBuy Spreadsheet-site.', search:'Live-catalogus doorzoeken', placeholder:'Product, stijl, verkoper of categorie', browse:'Catalogus bekijken', guide:'Gids openen', categories:'Bekijk productgegevens zonder deze site te verlaten.', categoryLead:'Elke categorie opent een eigen doorzoekbare en sorteerbare weergave op deze site.', checkout:'Heb je een Weidian-product-ID?', checkoutLead:'Voer de numerieke ID in. Alleen de laatste aankoopstap opent PikoBuy.', workflow:'Onderzoek één keer. Controleer twee keer. Gebruik dan de officiële route.', steps:['Intern zoeken','Productrecord openen','Officieel kopen'], seo:'Producten onderzoeken, QC-foto’s controleren en internationale verzending plannen.', seoLead:'Een praktische gids met feiten voor beslissingen vóór je een aankoop aanvraagt.', faq:'Antwoorden voordat je een artikel naar de kassa stuurt.', faqLead:'Deze antwoorden volgen de openbare PikoBuy-stappen: ontdekken, koophulp, magazijncontrole en verzending.', open:'Openen', back:'Terug naar alle producten', record:'Productrecord', source:'Live artikelgegevens uit de beheerde catalogus.', converted:'Omgerekend uit CNY tegen de aangegeven vergelijkingskoers.', before:'Vóór aankoop:', note:'Controleer QC-foto’s en de oorspronkelijke Weidian-afbeeldingen voordat je de officiële PikoBuy-route opent.' },
  pl: { hero:'Znajdź lepiej, zanim kupisz.', lead:'Wyszukiwanie, rekordy produktów, obrazy i kontekst QC pozostają w tej witrynie PikoBuy Spreadsheet.', search:'Przeszukaj katalog na żywo', placeholder:'Produkt, styl, sprzedawca lub kategoria', browse:'Przeglądaj katalog', guide:'Otwórz poradnik', categories:'Przeglądaj dane produktów bez opuszczania tej witryny.', categoryLead:'Każda kategoria otwiera własny widok z wyszukiwaniem i sortowaniem w tej witrynie.', checkout:'Masz identyfikator produktu Weidian?', checkoutLead:'Wpisz numeryczny identyfikator. Tylko końcowy zakup otwiera PikoBuy.', workflow:'Zbadaj raz. Sprawdź dwa razy. Potem użyj oficjalnej ścieżki.', steps:['Szukaj wewnętrznie','Otwórz rekord produktu','Kup oficjalnie'], seo:'Jak badać produkty, sprawdzać zdjęcia QC i planować wysyłkę międzynarodową.', seoLead:'Praktyczny poradnik oparty na faktach przed zleceniem zakupu.', faq:'Odpowiedzi przed wysłaniem artykułu do płatności.', faqLead:'Odpowiedzi opisują publiczny proces PikoBuy: odkrywanie, pomoc w zakupie, kontrolę magazynową i wysyłkę.', open:'Otwórz', back:'Wróć do wszystkich produktów', record:'Rekord produktu', source:'Dane produktu na żywo z utrzymywanego katalogu.', converted:'Przeliczono z CNY po podanym kursie porównawczym.', before:'Przed zakupem:', note:'Sprawdź zdjęcia QC i oryginalne obrazy Weidian przed otwarciem oficjalnej ścieżki PikoBuy.' },
  sv: { hero:'Hitta bättre innan du köper.', lead:'Sökning, produktposter, bilder och QC-sammanhang stannar på denna PikoBuy Spreadsheet-webbplats.', search:'Sök i livekatalogen', placeholder:'Produkt, stil, säljare eller kategori', browse:'Bläddra i katalogen', guide:'Öppna guiden', categories:'Bläddra bland produktdata utan att lämna webbplatsen.', categoryLead:'Varje kategori öppnar en egen sökbar och sorterbar vy på webbplatsen.', checkout:'Har du ett Weidian-produkt-ID?', checkoutLead:'Ange det numeriska ID:t. Endast det slutliga köpet öppnar PikoBuy.', workflow:'Undersök en gång. Kontrollera två gånger. Använd sedan den officiella vägen.', steps:['Sök internt','Öppna produktposten','Köp officiellt'], seo:'Så undersöker du produkter, granskar QC-bilder och planerar internationell frakt.', seoLead:'En praktisk faktabaserad guide före en köpförfrågan.', faq:'Svar innan du skickar en vara till kassan.', faqLead:'Svaren följer PikoBuys offentliga flöde: upptäckt, köphjälp, lagerkontroll och frakt.', open:'Öppna', back:'Tillbaka till alla produkter', record:'Produktpost', source:'Liveproduktdata från den underhållna katalogen.', converted:'Omräknat från CNY enligt angiven jämförelsekurs.', before:'Före köp:', note:'Granska QC-bilder och ursprungliga Weidian-bilder innan du öppnar den officiella PikoBuy-vägen.' },
};
function siteCopy(lang) { return SITE_COPY[langOf(lang)] || null; }
function langOf(value) { return NAV_LABELS[value] ? value : 'en'; }
function withLang(path, lang = 'en') {
  const local = new URL(path, 'https://local.invalid');
  if (lang === 'en') local.searchParams.delete('lang'); else local.searchParams.set('lang', lang);
  return `${local.pathname}${local.search}${local.hash}`;
}
const catalogPath = (path, lang = 'en') => withLang(`/catalog?path=${encodeURIComponent(path)}`, lang);
// Keep both the canonical source path and the seller/item ID in local links.
// A source path is the preferred lookup key, while the ID makes old links and
// source URLs with a changed slug resolve to the same internal product record.
const productPath = (path, lang = 'en', productId = '') => {
  const query = new URLSearchParams({ path });
  if (productId) query.set('productId', productId);
  return withLang(`/product?${query.toString()}`, lang);
};

function languagePicker(lang, currentPath) {
  const options = LANGUAGE_OPTIONS.map(([code, name]) => `<option value="${escapeHtml(withLang(currentPath, code))}"${code === lang ? ' selected' : ''}>${escapeHtml(name)}</option>`).join('');
  return `<label class="language-menu"><span>${escapeHtml(NAV_LABELS[lang][6])}</span><select aria-label="${escapeHtml(NAV_LABELS[lang][6])}" onchange="window.location.assign(this.value)">${options}</select></label>`;
}

function mainNav(lang = 'en', currentPath = '/', active = '') {
  const labels = NAV_LABELS[langOf(lang)];
  const links = [['home', '/', labels[0]], ['categories', '/categories', labels[1]], ['details', '/product-details', labels[2]], ['seo', '/seo-articles', labels[3]], ['faq', '/faq', labels[4]]]
    .map(([id, href, label]) => `<a${id === active ? ' aria-current="page"' : ''} href="${withLang(href, lang)}">${escapeHtml(label)}</a>`).join('');
  return `<header class="nav"><a class="brand" href="${withLang('/', lang)}"><img src="https://www.pikobuy.com/images/header/pikobuy-logo-figma.png" alt="PikoBuy"><span>SPREADSHEET</span></a><nav class="navlinks">${links}</nav><div class="nav-actions">${languagePicker(lang, currentPath)}<a class="register" href="${PIKOBUY_REGISTER}" target="_blank" rel="noopener">${escapeHtml(labels[5])}</a></div></header>`;
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
  }[character]));
}

function shell(body, title = 'PikoBuy Spreadsheet', requestedLang = 'en') {
  const lang = langOf(requestedLang);
  return `<!doctype html><html lang="${escapeHtml(lang)}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(title)}</title><meta name="description" content="PikoBuy product discovery with live FindSpreadsheet catalog data served within this site."><link rel="icon" href="https://www.pikobuy.com/images/common/pikobuy-icon-192.png"><style>
  :root{--ink:#081a38;--paper:#edf2ff;--surface:#ffffff;--blue:#3157ff;--orange:#ff7448;--line:#cbd5f3;--muted:#5e6d8d;--soft:#dfe7ff}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:radial-gradient(circle at 84% -10%,#d7e0ff 0,transparent 31rem),var(--paper);color:var(--ink);font:15px/1.55 Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}a{color:inherit}.nav{display:flex;align-items:center;justify-content:space-between;gap:14px;margin:15px max(16px,4vw) 0;padding:12px 14px 12px 18px;border:1px solid rgba(203,213,243,.9);border-radius:999px;background:rgba(255,255,255,.82);box-shadow:0 8px 30px rgba(27,59,128,.08);backdrop-filter:blur(14px)}.brand{display:flex;align-items:center;font-weight:900;font-size:20px;letter-spacing:-.05em;text-decoration:none;white-space:nowrap}.brand img{width:auto;height:27px}.brand span{font:10px ui-monospace,SFMono-Regular,monospace;letter-spacing:.12em;color:var(--muted);margin-left:8px}.navlinks{display:flex;gap:3px;font-size:12px;white-space:nowrap}.navlinks a{padding:8px 9px;border-radius:999px;text-decoration:none}.navlinks a:hover,.navlinks a[aria-current="page"]{background:var(--soft);color:var(--blue)}.nav-actions{display:flex;align-items:center;gap:8px}.language-menu{display:flex;align-items:center;gap:5px;margin:0;font:700 10px ui-monospace,SFMono-Regular,monospace;letter-spacing:.04em;color:var(--muted)}.language-menu select{border:1px solid var(--line);border-radius:999px;background:#fff;color:var(--ink);padding:8px 21px 8px 9px;font:700 11px Inter,ui-sans-serif,sans-serif;cursor:pointer}.register{background:var(--orange);color:#fff;border-radius:999px;padding:10px 14px;text-decoration:none;font-size:12px;font-weight:800;box-shadow:0 6px 15px rgba(255,116,72,.25);transition:transform .2s,box-shadow .2s;white-space:nowrap}.register:hover{transform:translateY(-2px);box-shadow:0 10px 20px rgba(255,116,72,.34)}.wrap{max-width:1200px;margin:auto;padding:72px 24px}.eyebrow{font:700 11px ui-monospace,SFMono-Regular,monospace;letter-spacing:.13em;color:var(--blue)}.hero{display:grid;grid-template-columns:1.15fr .85fr;gap:60px;align-items:center;min-height:510px}.hero h1{max-width:820px;font-size:clamp(45px,7vw,92px);line-height:.92;letter-spacing:-.084em;margin:13px 0 26px}.hero h1 em{color:var(--blue);font-family:Georgia,serif;font-weight:normal;letter-spacing:-.07em}.lede{font-size:17px;max-width:640px;color:#455675}.searchbox{position:relative;overflow:hidden;background:linear-gradient(145deg,#142c5f 0%,#0b1c3b 65%,#132d68 100%);padding:32px;color:#fff;border-radius:28px;box-shadow:0 23px 50px rgba(18,46,106,.25)}.searchbox:after{content:"";position:absolute;width:180px;height:180px;right:-80px;bottom:-90px;border:34px solid rgba(255,116,72,.95);border-radius:50%}.searchbox>*{position:relative;z-index:1}label{display:block;font:11px ui-monospace,SFMono-Regular,monospace;letter-spacing:.08em;margin-bottom:9px}.row{display:flex;gap:8px}.row input{min-width:0;flex:1;padding:15px 16px;border:1px solid transparent;border-radius:12px;font-size:14px;outline:none}.row input:focus{border-color:var(--blue);box-shadow:0 0 0 3px rgba(49,87,255,.16)}.row button{border:0;border-radius:12px;background:var(--orange);color:#fff;padding:0 17px;font-weight:800;cursor:pointer;transition:transform .2s}.row button:hover{transform:translateY(-2px)}.tools{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:26px}.tools a{border:1px solid rgba(255,255,255,.23);border-radius:14px;padding:13px;color:white;text-decoration:none;font-size:12px;background:rgba(255,255,255,.07)}.tools a:hover{background:rgba(255,255,255,.15)}.quick-links{display:grid;grid-template-columns:repeat(5,1fr);gap:12px}.quick-links a{min-height:118px;padding:16px;border:1px solid var(--line);border-radius:18px;background:rgba(255,255,255,.75);box-shadow:0 7px 18px rgba(24,54,120,.05);text-decoration:none;display:flex;flex-direction:column;justify-content:space-between;transition:transform .2s,background .2s}.quick-links a:hover{transform:translateY(-4px);background:var(--blue);color:#fff}.quick-links small{font:700 10px ui-monospace,SFMono-Regular,monospace;letter-spacing:.07em;color:var(--blue)}.quick-links a:hover small{color:#dfe7ff}.section{border-top:1px solid var(--line);padding:67px 0}.section h2{max-width:730px;font-size:clamp(31px,4vw,56px);letter-spacing:-.07em;line-height:.97;margin:8px 0 20px}.section>p:not(.eyebrow){max-width:700px;color:#526382}.categories{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:32px}.categories a{min-height:148px;border:1px solid var(--line);border-radius:20px;padding:16px;background:rgba(255,255,255,.74);text-decoration:none;display:flex;flex-direction:column;justify-content:end;font-weight:850;box-shadow:0 7px 18px rgba(24,54,120,.05);transition:transform .2s,background .2s,border .2s}.categories a:hover{background:var(--blue);color:white;border-color:var(--blue);transform:translateY(-4px)}.categories small{font:11px ui-monospace,SFMono-Regular,monospace;font-weight:normal;margin-top:6px;color:var(--muted)}.categories a:hover small{color:#d9e1ff}.flow{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.flow div{border:1px solid var(--line);border-radius:18px;padding:21px;background:rgba(255,255,255,.68)}.flow span{display:inline-grid;place-items:center;width:31px;height:31px;border-radius:50%;background:var(--soft);font:700 11px ui-monospace,SFMono-Regular,monospace;color:var(--blue)}.flow h3{font-size:20px;letter-spacing:-.04em;margin:24px 0 6px}.flow p{color:#586887}.panel{border:1px solid var(--line);border-radius:24px;padding:28px;background:linear-gradient(120deg,#fff 0%,#e2e9ff 100%);box-shadow:0 13px 31px rgba(24,54,120,.06)}.proxy{min-height:100vh;background:#fff}.proxy-top{display:flex;justify-content:space-between;gap:15px;align-items:center;background:var(--ink);color:#fff;padding:12px 24px;font-size:12px}.proxy-top a{color:var(--orange);font-weight:bold}.proxy main,.proxy body{max-width:none}.proxy img{max-width:100%}@media(max-width:980px){.navlinks{display:none}.quick-links{grid-template-columns:repeat(3,1fr)}}@media(max-width:760px){.nav{margin:10px 12px 0;padding-left:14px}.language-menu span{display:none}.hero{grid-template-columns:1fr;gap:34px;min-height:auto}.wrap{padding:49px 20px}.categories{grid-template-columns:repeat(2,1fr);gap:10px}.flow{grid-template-columns:1fr}.tools{grid-template-columns:1fr}.searchbox{padding:25px;border-radius:23px}}@media(max-width:480px){.brand span{display:none}.register{padding:9px 10px;font-size:11px}.nav-actions{gap:4px}.language-menu select{padding:7px 16px 7px 7px}.quick-links{grid-template-columns:repeat(2,1fr);gap:9px}.hero h1{font-size:45px}}
  </style><style>.notranslate{unicode-bidi:isolate}@media(max-width:540px){body{font-size:13px;line-height:1.42}.wrap{padding:28px 14px}.nav{margin:7px 8px 0;padding:8px 9px 8px 12px}.brand img{height:23px}.register{padding:8px 9px;font-size:10px}.hero{gap:18px}.hero h1{font-size:38px;margin:8px 0 12px}.lede{font-size:14px}.searchbox{padding:18px;border-radius:18px}.searchbox:after{width:110px;height:110px;border-width:21px;right:-54px;bottom:-60px}.row input{padding:11px;font-size:13px}.row button{padding:0 12px;font-size:12px}.tools{grid-template-columns:1fr 1fr;gap:7px;margin-top:14px}.tools a{padding:9px;font-size:10px}.section{padding:28px 0}.section h2{font-size:28px;margin:6px 0 11px}.section>p:not(.eyebrow){font-size:13px;margin:0}.quick-links{grid-template-columns:repeat(3,1fr);gap:7px}.quick-links a{min-height:76px;padding:10px;border-radius:13px;font-size:12px}.quick-links small{font-size:8px}.categories{margin-top:15px;gap:7px}.categories a{min-height:86px;padding:10px;border-radius:13px;font-size:13px}.categories small{font-size:9px;margin-top:3px}.panel{padding:17px;border-radius:17px;font-size:12px}.panel p{margin:7px 0}.flow{grid-template-columns:repeat(3,1fr);gap:7px}.flow div{padding:11px;border-radius:13px;font-size:11px}.flow span{width:23px;height:23px;font-size:9px}.flow h3{font-size:14px;margin:11px 0 3px}.flow p{font-size:10px;line-height:1.35;margin:0}.buy-piko{padding:10px 12px;font-size:12px}.language-menu select{max-width:94px}.language-menu{margin:0}#home-seo .panel,#home-faq .panel{font-size:12px;line-height:1.35}#home-seo .panel p{margin:6px 0}#home-faq details{padding:7px 0;border-bottom:1px solid var(--line)}#home-faq details:last-of-type{border-bottom:0}#home-faq summary{font-size:12px;line-height:1.25}#home-faq details p{font-size:11px;line-height:1.35}.eyebrow{font-size:9px}.proxy{min-height:auto}}</style></head><body>${body}</body></html>`;
}

// Every non-English editorial page is backed by a fixed, local fact set.  It
// is intentionally not generated from short UI labels or a third-party widget:
// language changes keep the same research, price, QC, shipping and policy
// points as the English article.
const EDITORIAL_FACTS = {
  de: ['Halte Link oder Artikel-ID, gewählte Variante, Preis, Bilder und offene Fragen in einem Datensatz fest.', 'PikoBuy nennt Taobao, Weidian und 1688 als Marktplätze; ein direkter Link ist klarer als eine bloße Vermutung.', 'Vergleiche Titel, Optionen, Material, Größentabelle und Bilder miteinander; fehlende Angaben bleiben offene Fragen.', 'Der angezeigte CNY-Preis und die Umrechnung zum Vergleichskurs von ¥7,20 pro USD sind keine Zusage für den Endbetrag.', 'Ausgewählte Varianten, Verkäuferänderungen, Zahlung, Gewicht, Volumen und Versand können den endgültigen Betrag verändern.', 'PikoBuy beschreibt Qualitätsprüfung und Umpacken nach Ankunft im chinesischen Lager als einen wichtigen Kontrollpunkt.', 'Prüfe QC-Informationen gegen genau die gewählte Größe, Farbe, Teile und Variante statt gegen ein allgemeines Werbebild.', 'Wähle Versand erst mit dem tatsächlichen Paket; Ziel, Paketgrenzen, Schätzung und aktuelle Richtlinien können sich ändern.'],
  fr: ['Conservez dans une même fiche le lien ou l’identifiant, la variante choisie, le prix, les images et les questions restantes.', 'PikoBuy cite Taobao, Weidian et 1688 comme places de marché ; un lien direct est plus clair qu’une simple supposition.', 'Comparez le titre, les options, la matière, le guide des tailles et les images ; une information absente reste une question ouverte.', 'Le prix CNY affiché et la conversion comparative de ¥7,20 pour 1 USD ne constituent pas une promesse du montant final.', 'La variante choisie, les changements du vendeur, le paiement, le poids, le volume et l’expédition peuvent modifier le total final.', 'PikoBuy indique qu’une inspection qualité et un reconditionnement interviennent après l’arrivée au dépôt chinois : c’est un contrôle utile.', 'Comparez les informations QC avec la taille, la couleur, les pièces et la variante réellement sélectionnées, pas avec une image publicitaire générale.', 'Choisissez l’expédition à partir du colis réel ; destination, limites, estimation et règles en vigueur peuvent changer.'],
  es: ['Guarda en una sola ficha el enlace o ID, la variante elegida, el precio, las imágenes y las preguntas pendientes.', 'PikoBuy menciona Taobao, Weidian y 1688 como mercados; un enlace directo es más claro que una simple suposición.', 'Compara título, opciones, material, tabla de tallas e imágenes; una información ausente sigue siendo una pregunta abierta.', 'El precio mostrado en CNY y la conversión comparativa de ¥7,20 por 1 USD no prometen el importe final.', 'La variante elegida, cambios del vendedor, pago, peso, volumen y envío pueden modificar el total final.', 'PikoBuy indica que los artículos pasan por inspección de calidad y reembalaje al llegar al almacén chino; es un punto de control útil.', 'Compara la información QC con la talla, el color, las piezas y la variante realmente elegida, no con una imagen publicitaria genérica.', 'Elige el envío con el paquete real; destino, límites, estimación y reglas vigentes pueden cambiar.'],
  it: ['Conserva nella stessa scheda link o ID, variante scelta, prezzo, immagini e domande ancora aperte.', 'PikoBuy indica Taobao, Weidian e 1688 come marketplace; un link diretto è più chiaro di una semplice supposizione.', 'Confronta titolo, opzioni, materiale, tabella taglie e immagini; un’informazione assente resta una domanda aperta.', 'Il prezzo CNY mostrato e la conversione comparativa di ¥7,20 per 1 USD non sono una promessa dell’importo finale.', 'Variante scelta, modifiche del venditore, pagamento, peso, volume e spedizione possono cambiare il totale finale.', 'PikoBuy indica controllo qualità e reimballaggio dopo l’arrivo al magazzino cinese: è un utile punto di controllo.', 'Confronta le informazioni QC con taglia, colore, parti e variante realmente selezionati, non con una generica immagine pubblicitaria.', 'Scegli la spedizione quando conosci il pacco reale; destinazione, limiti, stima e regole correnti possono cambiare.'],
  pt: ['Guarde no mesmo registo o link ou ID, a variante escolhida, o preço, as imagens e as questões em aberto.', 'A PikoBuy indica Taobao, Weidian e 1688 como marketplaces; um link direto é mais claro do que uma suposição.', 'Compare título, opções, material, tabela de tamanhos e imagens; informação ausente continua a ser uma questão em aberto.', 'O preço em CNY apresentado e a conversão comparativa de ¥7,20 por 1 USD não prometem o valor final.', 'A variante escolhida, alterações do vendedor, pagamento, peso, volume e envio podem alterar o total final.', 'A PikoBuy informa que há inspeção de qualidade e reembalagem após a chegada ao armazém chinês; é um controlo útil.', 'Compare a informação QC com tamanho, cor, peças e variante realmente selecionados, não com uma imagem publicitária genérica.', 'Escolha o envio com base no pacote real; destino, limites, estimativa e regras atuais podem mudar.'],
  nl: ['Bewaar link of artikel-ID, gekozen variant, prijs, afbeeldingen en open vragen in één productrecord.', 'PikoBuy noemt Taobao, Weidian en 1688 als marktplaatsen; een directe link is duidelijker dan een veronderstelling.', 'Vergelijk titel, opties, materiaal, maattabel en afbeeldingen; ontbrekende informatie blijft een open vraag.', 'De getoonde CNY-prijs en de vergelijkingsomrekening van ¥7,20 per USD beloven geen definitief bedrag.', 'Gekozen variant, wijzigingen door de verkoper, betaling, gewicht, volume en verzending kunnen het totaal veranderen.', 'PikoBuy meldt kwaliteitsinspectie en herverpakken na aankomst in het Chinese magazijn; dat is een nuttig controlemoment.', 'Vergelijk QC-informatie met exact de gekozen maat, kleur, onderdelen en variant, niet met een algemene reclameafbeelding.', 'Kies verzending op basis van het werkelijke pakket; bestemming, limieten, schatting en actuele regels kunnen veranderen.'],
  pl: ['Zapisz w jednym rekordzie link lub ID produktu, wybrany wariant, cenę, obrazy i pytania bez odpowiedzi.', 'PikoBuy wymienia Taobao, Weidian i 1688 jako platformy; bezpośredni link jest jaśniejszy niż przypuszczenie.', 'Porównaj tytuł, opcje, materiał, tabelę rozmiarów i obrazy; brak informacji nadal jest otwartym pytaniem.', 'Widoczna cena CNY i porównawcze przeliczenie ¥7,20 za 1 USD nie stanowią obietnicy końcowej kwoty.', 'Wybrany wariant, zmiany sprzedawcy, płatność, waga, objętość i wysyłka mogą zmienić ostateczny koszt.', 'PikoBuy informuje o kontroli jakości i przepakowaniu po przyjęciu do chińskiego magazynu; to użyteczny punkt kontroli.', 'Porównaj informacje QC z faktycznie wybranym rozmiarem, kolorem, częściami i wariantem, a nie z ogólnym zdjęciem reklamowym.', 'Wybierz wysyłkę po poznaniu rzeczywistej paczki; kraj, limity, wycena i bieżące zasady mogą się zmieniać.'],
  sv: ['Spara länk eller artikel-ID, vald variant, pris, bilder och öppna frågor i samma produktpost.', 'PikoBuy nämner Taobao, Weidian och 1688 som marknadsplatser; en direktlänk är tydligare än ett antagande.', 'Jämför titel, alternativ, material, storlekstabell och bilder; saknad information är fortfarande en öppen fråga.', 'Det visade CNY-priset och jämförelseomräkningen ¥7,20 per USD är inget löfte om slutbeloppet.', 'Vald variant, säljarändringar, betalning, vikt, volym och frakt kan ändra den slutliga kostnaden.', 'PikoBuy uppger kvalitetskontroll och ompackning efter ankomst till det kinesiska lagret; det är en användbar kontrollpunkt.', 'Jämför QC-information med exakt vald storlek, färg, delar och variant, inte med en allmän reklambild.', 'Välj frakt utifrån det faktiska paketet; destination, gränser, uppskattning och aktuella regler kan ändras.'],
};

const FAQ_QUESTIONS = {
  de: ['Was sagt PikoBuy über seinen Dienst?', 'Welche Marktplätze nennt PikoBuy?', 'Kann ich einen Produktlink oder ein Bild einreichen?', 'Prüft PikoBuy Artikel?', 'Wie funktioniert internationaler Versand?', 'Ist der USD-Preis der Endpreis?', 'Wo prüfe ich Rückgabe- und Versandregeln?', 'Öffnet die Suche FindSpreadsheet?', 'Kann ich eine Weidian-ID direkt verwenden?'],
  fr: ['Que dit PikoBuy de son service ?', 'Quelles places de marché PikoBuy cite-t-il ?', 'Puis-je envoyer un lien produit ou une image ?', 'PikoBuy inspecte-t-il les articles ?', 'Comment fonctionne l’expédition internationale ?', 'Le prix USD est-il le prix final ?', 'Où vérifier les règles de retour et d’expédition ?', 'La recherche ouvre-t-elle FindSpreadsheet ?', 'Puis-je utiliser directement un ID Weidian ?'],
  es: ['¿Qué dice PikoBuy sobre su servicio?', '¿Qué mercados menciona PikoBuy?', '¿Puedo enviar un enlace o una imagen?', '¿PikoBuy inspecciona los artículos?', '¿Cómo funciona el envío internacional?', '¿El precio en USD es el precio final?', '¿Dónde reviso devoluciones y envíos?', '¿La búsqueda abre FindSpreadsheet?', '¿Puedo usar directamente un ID de Weidian?'],
  it: ['Cosa dice PikoBuy del suo servizio?', 'Quali marketplace cita PikoBuy?', 'Posso inviare un link prodotto o un’immagine?', 'PikoBuy ispeziona gli articoli?', 'Come funziona la spedizione internazionale?', 'Il prezzo in USD è il prezzo finale?', 'Dove verifico resi e regole di spedizione?', 'La ricerca apre FindSpreadsheet?', 'Posso usare direttamente un ID Weidian?'],
  pt: ['O que a PikoBuy diz sobre o serviço?', 'Que marketplaces a PikoBuy indica?', 'Posso enviar um link de produto ou imagem?', 'A PikoBuy inspeciona os artigos?', 'Como funciona o envio internacional?', 'O preço em USD é o preço final?', 'Onde verifico devoluções e regras de envio?', 'A pesquisa abre o FindSpreadsheet?', 'Posso usar diretamente um ID Weidian?'],
  nl: ['Wat zegt PikoBuy over zijn service?', 'Welke marktplaatsen noemt PikoBuy?', 'Kan ik een productlink of afbeelding indienen?', 'Inspecteert PikoBuy artikelen?', 'Hoe werkt internationale verzending?', 'Is de USD-prijs de uiteindelijke prijs?', 'Waar controleer ik retour- en verzendregels?', 'Opent zoeken FindSpreadsheet?', 'Kan ik een Weidian-ID direct gebruiken?'],
  pl: ['Co PikoBuy mówi o swojej usłudze?', 'Jakie platformy wymienia PikoBuy?', 'Czy mogę przesłać link do produktu lub obraz?', 'Czy PikoBuy sprawdza produkty?', 'Jak działa wysyłka międzynarodowa?', 'Czy cena USD jest ceną końcową?', 'Gdzie sprawdzić zwroty i zasady wysyłki?', 'Czy wyszukiwanie otwiera FindSpreadsheet?', 'Czy mogę bezpośrednio użyć ID Weidian?'],
  sv: ['Vad säger PikoBuy om sin tjänst?', 'Vilka marknadsplatser nämner PikoBuy?', 'Kan jag skicka en produktlänk eller bild?', 'Inspekterar PikoBuy varor?', 'Hur fungerar internationell frakt?', 'Är USD-priset slutpriset?', 'Var kontrollerar jag retur- och fraktregler?', 'Öppnar sökning FindSpreadsheet?', 'Kan jag använda ett Weidian-ID direkt?'],
};

// Full, fixed editorial copy for every language is kept in this Worker.  These
// are not runtime translations and are deliberately not assembled by repeating
// a short fact list.  Each language follows the fifteen-paragraph structure of
// the English guide: two opening paragraphs, two paragraphs for each of the
// first six steps, and one scoped policy conclusion.
const LOCALIZED_SEO_ARTICLES = {
  de: { headings: ['1. Artikel vor der Suche definieren', '2. Ein Angebot als Beleg lesen', '3. Artikelpreis und Endkosten trennen', '4. Die Lagerprüfung als Kontrollpunkt nutzen', '5. Versand nach dem tatsächlichen Paket planen', '6. Den Entscheidungsweg dokumentieren', 'Was PikoBuy beantworten kann – und was nicht'], paragraphs: [
    'Beim Einkauf auf chinesischen Marktplätzen ist die Schwierigkeit selten die fehlende Auswahl. Schwieriger sind sehr ähnliche Treffer: ein fast gleiches Foto, ein verkürzter Verkäufertitel, ein anderes Material, eine unklare Größentabelle oder ein Basispreis, bei dem die wichtige Variante nicht enthalten ist. Beginne deshalb vor der Zahlung mit einem prüfbaren Datensatz: genauer Link oder Artikel-ID, gewählte Variante, Preis, Bilder und offene Fragen.',
    'PikoBuy beschreibt sich als chinesischen Einkaufs- und Weiterleitungsdienst. Auf der öffentlichen Website nennt der Dienst direkte Suche sowie Produktlinks, Bilder und Beschaffungsanfragen und verweist auf Taobao, Weidian und 1688. Ein direkter Link ist in der Regel die sauberste Grundlage, wenn der Verkäufer bereits bekannt ist. Eine Bild- oder Sourcing-Anfrage hilft bei der Recherche, ersetzt aber nicht die Prüfung der Produktdetails.',
    'Notiere zuerst die Entscheidung, die du wirklich treffen willst. „Schwarze Jacke“ ist eine Suchidee; „schwarze Nylonjacke, Größe M, Reißverschluss, ohne Logo-Vorgabe, Budget vor Versand“ lässt sich vergleichen. Ergänze Kriterien, bei denen du ablehnen würdest: falscher Stoff, fehlende Maße, andere Farbe, unklare Bilder oder ein Preis ohne Spielraum für Versand. So wird ein attraktives Vorschaubild nicht vorschnell zur Kaufentscheidung.',
    'Suche über mehrere Hinweise: Produkttyp, Verkäufermerkmal, Material oder Konstruktionsdetail und – wenn vorhanden – die exakte Artikel-ID. Entscheidend ist nicht eine einzige Suche, sondern eine kleine Vergleichsmenge. Speichere zwei oder drei plausible Datensätze und prüfe, ob Titel, sichtbare Varianten, Preis und Galerie wirklich denselben Artikel meinen. Wenn nicht, behandle sie als unterschiedliche Kandidaten und nicht als bloß billigere Versionen.',
    'Fotos sind nützlich, aber allein kein ausreichender Beleg. Vergleiche Titel, Optionen, Materialbeschreibung und Bildfolge. Bestimme die unverzichtbaren Punkte: Größe, Farbe, Stückzahl, enthaltenes Zubehör und genau ausgewählte Variante. Halte außerdem fest, was nicht genannt wird. Fehlt eine Maßtabelle, bleibt der Produktname vage oder zeigt kein Bild den entscheidenden Teil, ist das eine offene Frage – keine Tatsache.',
    'PikoBuy sagt, dass Produktdetails im Rahmen der Suche oder nach Einreichen eines Links, Bildes oder einer Beschaffungsanfrage bestätigt werden können. Nutze diesen Schritt für konkrete Fragen: Ist die ausgewählte Option verfügbar? Gilt der Preis für diese Variante? Enthält die Verkäuferbeschreibung die gewünschte Größe? Die Frage „Ist das gut?“ ist zu ungenau. Je präziser dein Datensatz, desto brauchbarer kann eine Bestätigung sein.',
    'Der sichtbare Listenpreis ist nur ein Teil der späteren Entscheidung. Diese Seite zeigt Quellpreise in CNY und einen USD-Vergleich zum offen genannten Kurs von ¥7,20 pro 1 USD. Das erleichtert den Vergleich, ist aber keine Zusage des endgültigen Betrags. Verkäufer können Preise ändern, gewählte Optionen können mehr kosten und beim Bezahlen oder Versenden können weitere Gebühren entstehen.',
    'Denke in Ebenen: Prüfe zuerst, ob der Artikel zum Listenpreis sinnvoll ist. Schätze dann seine Wirkung auf das Paket – Größe, Gewicht, Verpackungsvolumen und möglicher Schutz. Lasse schließlich Spielraum für die Versandart, die du später tatsächlich wählst. Gerade günstige, aber sperrige Produkte können unverhältnismäßig teuer werden. Mehrere passende Artikel können die Planung vereinfachen, aber nur bei akzeptablem Gesamtwert und Inhalt.',
    'Laut öffentlicher PikoBuy-Website werden Artikel nach Ankunft im chinesischen Lager geprüft und neu verpackt. Das ist ein sinnvoller Kontrollpunkt, aber keine Garantie dafür, dass jede persönliche Erwartung automatisch geklärt wird. Schreibe vor der Bestellung eine kurze Prüfliste: gewählte Größe oder Variante, Farbe, Position von Logo oder Druck, enthaltene Teile und jedes Merkmal, das ein einzelnes Verkäuferfoto nicht zuverlässig zeigt.',
    'Wenn QC-Bilder oder Prüfhinweise verfügbar sind, vergleiche sie mit der genau gewählten Option und nicht mit einem allgemeinen Werbebild. Frage, ob eine Abweichung wesentlich ist. Anderes Licht kann unwichtig sein; falsche Größe, fehlendes Zubehör, abweichende Konstruktion oder Farbe können entscheidend sein. Der Wert der Prüfung liegt darin, dass du diese Informationen erhältst, solange sich der Artikel noch im Lagerablauf befindet.',
    'PikoBuy beschreibt, dass Käufer eine Versandart wählen und Pakete vom chinesischen Lager an die Tür geliefert werden können. Praktisch bedeutet das: Entscheide erst, wenn du das reale Paket einschätzen kannst. Eine Linie, die für ein anderes Land, einen anderen Warenwert oder eine andere Paketform geeignet ist, muss nicht zu deinem Fall passen. Prüfe Ziel, aktuelle Schätzung, Paketgrenzen und benötigte Angaben unmittelbar vor dem Absenden.',
    'Halte Deklarationen und Zielanforderungen korrekt. Zollregeln, Einfuhrabgaben und Beschränkungen unterscheiden sich je nach Land und können sich ändern. Dieser Leitfaden ist keine Steuer- oder Rechtsberatung. Für eine echte Sendung haben die zum Zeitpunkt der Paketeinreichung angezeigten offiziellen Schätzungen und Richtlinien Vorrang. PikoBuy stellt Hinweise zu Versandpolitik und Schätzungen bereit; diese aktuellen Quellen sind wichtiger als alte Forenbeiträge.',
    'Der Nutzen einer internen Spreadsheet-Ansicht ist, dass die Recherche nicht auseinanderfällt. Bewahre Link, Artikel-ID, Option, Preis, Bilder oder Galerienotizen und offene Fragen zusammen auf. Wenn du zufrieden bist, verwendest du erst dann die offizielle PikoBuy-Route für den Kauf. Suche, Kategorien, Produktbilder und Preisvergleich bleiben auf dieser Unterseite; nur die bewusst gewählte Kaufaktion öffnet die passende offizielle Produktseite.',
    'Diese Trennung schafft Disziplin. Eine Recherche wird nicht automatisch zu einem Impulskauf, und ein Datensatz lässt sich später leichter erneut prüfen, mit einem anderen Verkäufer vergleichen oder aus dem Plan entfernen. Sorgfalt bedeutet nicht, niemals Fehler zu machen. Sie bedeutet, die wichtigen Entscheidungen – Artikelidentität, Variante, Preisrahmen, Prüfliste und Versandplan – zu treffen, bevor Änderungen schwierig werden.',
    'Die öffentliche PikoBuy-Website zeigt einen Ablauf aus Produktentdeckung, Einkaufsunterstützung, Lagerprüfung beziehungsweise Umpacken und internationalem Versand. Auf diesen Tatsachen beruht dieser Leitfaden. Er verspricht weder feste Lieferzeiten noch ein einheitliches Erstattungsresultat, eine bestimmte Zahl von QC-Fotos, ein Zollergebnis oder eine garantierte Verkäuferantwort. Solche Ergebnisse hängen von Artikel, Verkäufer, Ziel, Versandlinie und aktueller Richtlinie ab. Prüfe vor Bestellung oder Versand die aktuellen offiziellen Bedingungen.'
  ] },
  fr: { headings: ['1. Définir l’article avant la recherche', '2. Lire une fiche comme une preuve', '3. Séparer le prix article du coût final', '4. Utiliser le contrôle entrepôt comme point de décision', '5. Préparer l’expédition selon le colis réel', '6. Garder un dossier clair jusqu’au paiement', 'Ce que PikoBuy peut confirmer, et ce qu’il ne peut pas garantir'], paragraphs: [
    'Acheter sur des places de marché chinoises est rarement difficile faute de choix. La difficulté vient plutôt des quasi-doublons : photo semblable, titre vendeur raccourci, matière différente, guide des tailles imprécis ou prix de base qui exclut une option importante. Avant tout paiement, transformez donc l’idée d’un produit en fiche vérifiable : lien ou ID exact, variante choisie, prix, images disponibles et questions encore ouvertes.',
    'PikoBuy se présente comme un service d’achat et de réexpédition depuis la Chine. Son site public indique la recherche directe ainsi que l’envoi de liens, d’images ou de demandes de sourcing, et cite Taobao, Weidian et 1688. Un lien direct est généralement le point de départ le plus net lorsque le vendeur est connu. Une demande par image aide à explorer, mais ne remplace pas la vérification de la fiche.',
    'Écrivez la décision que vous cherchez réellement à prendre. « Veste noire » est une idée de navigation ; « veste noire en nylon, taille M, fermeture zippée, sans préférence de logo, budget avant expédition » est un brief comparable. Ajoutez les éléments éliminatoires : mauvais tissu, mesures absentes, autre coloris, image vendeur ambiguë ou prix sans marge pour l’envoi. Cela évite qu’une miniature séduisante devienne trop vite une décision.',
    'Utilisez plusieurs pistes : type de produit, indice sur le vendeur, matière ou détail de construction, puis ID exact lorsque vous l’avez. L’important n’est pas de chercher une seule fois, mais de constituer un petit ensemble de comparaison. Enregistrez deux ou trois fiches plausibles et vérifiez que le titre, les options visibles, le prix et la galerie désignent réellement le même article. Sinon, considérez-les comme des candidats distincts.',
    'Les photos sont utiles, mais elles ne suffisent pas seules. Cherchez la cohérence entre titre, options, description de matière et séquence d’images. Identifiez d’abord les non-négociables : taille, couleur, quantité, accessoires inclus et option exacte. Notez ensuite ce qui n’est pas précisé. Tableau absent, nom vague ou détail non photographié : ce sont des questions ouvertes, pas des faits à deviner.',
    'PikoBuy explique pouvoir aider à confirmer des détails lorsque l’acheteur recherche directement ou transmet un lien, une image ou une demande de sourcing. Servez-vous de cette étape pour des questions précises : l’option choisie est-elle disponible, le prix concerne-t-il cette variante, la description inclut-elle la taille demandée ? « Est-ce bien ? » ne permet pas une réponse fiable. Plus la fiche est précise, plus la confirmation peut être utile.',
    'Le prix visible de la fiche n’est qu’un élément du coût final. Ce site affiche les prix sources en CNY et une équivalence USD de comparaison à ¥7,20 pour 1 USD, explicitement indiquée. Elle facilite la comparaison dans une monnaie commune, mais ne promet pas le montant facturé. Le vendeur peut modifier le prix, l’option sélectionnée peut coûter davantage et le paiement ou l’expédition peuvent ajouter des frais distincts.',
    'Raisonnez par couches. Décidez d’abord si l’article vaut son prix affiché. Évaluez ensuite son effet sur le colis : taille, poids, volume d’emballage et éventuelle protection. Gardez enfin une marge pour la ligne d’expédition que vous choisirez réellement. Un produit peu cher mais volumineux peut être un mauvais choix. Regrouper des articles compatibles peut simplifier l’envoi, seulement si la valeur totale et le contenu vous conviennent.',
    'Selon le site public de PikoBuy, les articles font l’objet d’un contrôle qualité et d’un reconditionnement après leur arrivée à l’entrepôt chinois. C’est un vrai point de contrôle, non une garantie que toutes les préférences subjectives seront réglées automatiquement. Avant commande, préparez une courte liste : taille ou variante, couleur, placement d’un logo ou d’un imprimé, pièces incluses et tout élément qu’une seule image vendeur ne permet pas de vérifier.',
    'Quand les photos QC ou les informations de contrôle deviennent disponibles, comparez-les à l’option effectivement choisie, non à une publicité générique. Demandez-vous si la différence est importante. Une variation de lumière peut être mineure ; une mauvaise taille, un accessoire manquant, une construction différente ou une autre couleur peuvent compter beaucoup. Le contrôle a de la valeur parce que l’information arrive pendant le flux entrepôt, avant l’envoi international.',
    'PikoBuy indique que l’acheteur peut sélectionner une solution d’expédition et recevoir le colis depuis son entrepôt chinois. En pratique, choisissez après avoir compris le colis réel, pas avant. Une ligne adaptée à un autre pays, à une autre valeur ou à une autre forme de colis peut être inadéquate pour vous. Vérifiez destination, estimation actuelle, limites du paquet et informations nécessaires juste avant la soumission.',
    'Gardez les déclarations et exigences de destination exactes. Règles douanières, fiscalité à l’importation et restrictions transporteur diffèrent selon le pays et peuvent évoluer. Ce guide ne constitue pas un conseil juridique ou fiscal. Pour un envoi réel, privilégiez l’estimation et les règles officielles affichées lorsque vous soumettez le colis. Les ressources actuelles de PikoBuy sur les estimations et politiques priment sur une ancienne capture de forum.',
    'Une vue interne de type spreadsheet évite que la recherche se disperse. Gardez ensemble lien, ID, option, prix, captures ou notes de galerie et questions ouvertes. Lorsque vous êtes prêt, utilisez la route officielle PikoBuy pour l’étape d’achat finale. Recherche, catégories, photos et comparaison restent sur ce sous-site ; seul le choix explicite d’acheter ouvre la page produit officielle correspondante.',
    'Cette séparation impose une bonne discipline. Une session de recherche ne se transforme pas automatiquement en paiement impulsif, et vous pouvez revisiter une fiche, comparer un autre vendeur ou retirer un article sans perdre les éléments d’origine. Un acheteur soigneux ne prétend pas ne jamais se tromper. Il prend les décisions essentielles – identité, variante, tolérance de prix, liste de contrôle et plan d’envoi – avant qu’elles deviennent difficiles à modifier.',
    'Le site public de PikoBuy présente un parcours de découverte produit, assistance à l’achat, contrôle ou reconditionnement en entrepôt et expédition internationale. Ce sont les faits utilisés ici. Le guide ne promet ni délai fixe, ni résultat universel de remboursement, ni nombre déterminé de photos QC, ni résultat douanier, ni réponse vendeur garantie : tout dépend de l’article, du vendeur, de la destination, de la ligne et de la politique courante. Consultez toujours les règles officielles à jour avant de commander ou d’expédier.'
  ] },
  es: { headings: ['1. Definir el artículo antes de buscar', '2. Leer la ficha como evidencia', '3. Separar el precio del artículo del coste final', '4. Usar la inspección de almacén como control', '5. Planificar el envío con el paquete real', '6. Mantener un registro claro hasta el pago', 'Lo que PikoBuy puede confirmar y lo que no puede garantizar'], paragraphs: [
    'Comprar en mercados chinos rara vez es difícil por falta de opciones. Lo complicado son las coincidencias casi iguales: una foto similar, un título abreviado, otro material, una tabla de tallas poco clara o un precio base que no incluye una opción importante. Antes de pagar, convierte la idea en un registro comprobable: enlace o ID exacto, variante elegida, precio, imágenes disponibles y preguntas pendientes.',
    'PikoBuy se describe como un servicio de compra y reenvío desde China. Su sitio público menciona búsqueda directa, envío de enlaces, imágenes o solicitudes de búsqueda, y nombra Taobao, Weidian y 1688. Un enlace directo suele ser el punto de partida más claro cuando ya conoces al vendedor. Una solicitud mediante imagen ayuda a explorar, pero no sustituye revisar los datos de la ficha.',
    'Escribe la decisión que realmente quieres tomar. «Chaqueta negra» es una idea de navegación; «chaqueta negra de nailon, talla M, cremallera, sin preferencia de logo, presupuesto antes de envío» permite comparar. Añade motivos para descartar: tejido incorrecto, medidas ausentes, otro color, foto ambigua o precio sin margen de envío. Así una miniatura atractiva no se convierte demasiado pronto en decisión de compra.',
    'Busca mediante varias pistas: tipo de producto, señal del vendedor, material o detalle de construcción y, si la tienes, la ID exacta. Lo importante no es buscar una vez, sino crear un pequeño grupo de comparación. Guarda dos o tres registros plausibles y comprueba si título, opciones visibles, precio y galería se refieren al mismo artículo. Si no coinciden, trátalos como candidatos diferentes, no como una versión más barata.',
    'Las fotos son valiosas, pero no bastan solas. Busca coherencia entre título, opciones, descripción del material y secuencia de imágenes. Identifica primero lo irrenunciable: talla, color, cantidad, accesorios incluidos y opción exacta. Después anota lo que no aparece. Una tabla ausente, un nombre vago o una parte que no se muestra son preguntas abiertas, no hechos que debas completar con suposiciones.',
    'PikoBuy indica que puede ayudar a confirmar detalles cuando el comprador busca directamente o presenta un enlace, imagen o solicitud de búsqueda. Usa ese paso para preguntas concretas: ¿está disponible la opción elegida?, ¿el precio corresponde a esa variante?, ¿la descripción incluye la talla solicitada? «¿Es bueno?» no da una respuesta fiable. Cuanto más preciso sea tu registro, más útil puede ser la confirmación.',
    'El precio visible del anuncio es solo una parte de la decisión final. Este sitio muestra precios de origen en CNY y un equivalente comparativo en USD con la tasa declarada de ¥7,20 por 1 USD. Sirve para comparar, no promete el importe cobrado. El vendedor puede cambiar el precio, la variante puede costar más y el pago o envío pueden añadir cargos independientes.',
    'Piensa por capas. Primero decide si el artículo merece el precio de lista. Después estima su efecto sobre el paquete: tamaño, peso, volumen de embalaje y protección necesaria. Por último deja margen para la línea de envío que realmente elegirás. Un artículo barato pero voluminoso puede salir mal. Combinar artículos compatibles puede facilitar la planificación, siempre que aceptes el valor total y el contenido del paquete.',
    'El sitio público de PikoBuy señala que los artículos pasan por inspección de calidad y reempaque al llegar al almacén chino. Es un control útil, no una garantía de que se resuelvan automáticamente todas las preferencias subjetivas. Antes de pedir, prepara una lista breve: talla o variante, color, posición de logo o estampado, piezas incluidas y cualquier rasgo que una única foto del vendedor no permita comprobar con seguridad.',
    'Cuando haya fotos QC o información de inspección, compárala con la opción exacta elegida, no con una imagen promocional genérica. Pregunta si la diferencia es importante. Una variación de luz puede no importar; talla equivocada, accesorio faltante, construcción distinta o color diferente pueden importar mucho. La inspección vale porque aporta información mientras el artículo sigue en el proceso del almacén, antes de la salida internacional.',
    'PikoBuy indica que los compradores pueden elegir una opción de envío y recibir paquetes desde su almacén chino. La lección práctica es decidir cuando conoces el paquete real, no antes. Una línea que funciona para otro país, valor o forma puede no servirte. Revisa destino, estimación actual, límites del paquete y datos requeridos justo antes de enviarlo.',
    'Mantén correctas las declaraciones y requisitos de destino. Normas aduaneras, impuestos de importación y restricciones del transportista cambian según el país y pueden actualizarse. Esta guía no ofrece asesoramiento legal ni fiscal. Para un pedido real, da prioridad a la estimación y políticas oficiales mostradas al presentar el paquete. Las fuentes actuales de PikoBuy importan más que una captura antigua de un foro.',
    'Una vista interna de spreadsheet evita fragmentar la investigación. Conserva juntos enlace, ID, opción, precio, capturas o notas de galería y preguntas pendientes. Cuando estés conforme, usa la ruta oficial de PikoBuy para el paso de compra final. Búsqueda, categorías, fotos y comparación permanecen en este subsite; únicamente la acción consciente de comprar abre la página oficial correspondiente.',
    'Esta separación crea disciplina. Una sesión de búsqueda no termina automáticamente en una compra impulsiva y puedes volver a un registro, comparar otro vendedor o eliminar un artículo sin perder las pruebas originales. Un comprador cuidadoso no es quien nunca se equivoca. Es quien decide identidad del artículo, variante, margen de precio, lista de inspección y plan de envío antes de que modificarlo sea difícil.',
    'El sitio público de PikoBuy presenta un flujo de descubrimiento de productos, compra asistida, inspección o reempaque de almacén y envío global. Estos son los hechos en los que se basa esta guía. No promete plazo fijo, resultado universal de reembolso, número concreto de fotos QC, resultado aduanero ni respuesta garantizada del vendedor, porque dependen de artículo, vendedor, destino, línea elegida y política vigente. Consulta siempre los términos oficiales actuales antes de pedir o enviar.'
  ] },
  it: { headings: ['1. Definire l’articolo prima della ricerca', '2. Leggere la scheda come una prova', '3. Separare prezzo dell’articolo e costo finale', '4. Usare il controllo in magazzino come verifica', '5. Pianificare la spedizione sul pacco reale', '6. Conservare un record chiaro fino al pagamento', 'Cosa PikoBuy può confermare e cosa non può garantire'], paragraphs: [
    'Acquistare sui marketplace cinesi raramente è difficile per mancanza di scelta. La difficoltà nasce dai quasi duplicati: foto simile, titolo del venditore accorciato, materiale diverso, tabella taglie poco chiara o prezzo base che non include un’opzione importante. Prima del pagamento trasforma quindi l’idea in un record verificabile: link o ID preciso, variante scelta, prezzo, immagini disponibili e domande ancora aperte.',
    'PikoBuy si presenta come servizio cinese di acquisto e inoltro. Il suo sito pubblico indica ricerca diretta, invio di link, immagini o richieste di sourcing e cita Taobao, Weidian e 1688. Un link diretto è in genere il punto di partenza più pulito quando il venditore è già noto. Una richiesta da immagine aiuta a esplorare, ma non sostituisce il controllo della scheda prodotto.',
    'Scrivi la decisione che devi davvero prendere. «Giacca nera» è un’idea di ricerca; «giacca nera in nylon, taglia M, zip, nessuna preferenza logo, budget prima della spedizione» è un brief confrontabile. Aggiungi cosa renderebbe l’articolo inaccettabile: tessuto sbagliato, misure mancanti, colore diverso, immagini ambigue o prezzo senza margine per la spedizione. Così una miniatura attraente non diventa subito una decisione.',
    'Cerca attraverso più indizi: tipo di prodotto, traccia del venditore, materiale o dettaglio costruttivo e, se disponibile, ID esatto. Il punto non è cercare una sola volta, ma creare un piccolo gruppo di confronto. Salva due o tre record plausibili e verifica che titolo, opzioni visibili, prezzo e galleria riguardino davvero lo stesso articolo. Se non coincidono, trattali come candidati distinti, non come versioni più economiche.',
    'Le foto sono utili, ma non bastano da sole. Cerca coerenza fra titolo, opzioni, descrizione del materiale e sequenza immagini. Individua prima i punti non negoziabili: taglia, colore, quantità, accessori inclusi e opzione esatta. Poi annota ciò che non viene detto. Tabella assente, nome vago o parte non mostrata sono domande aperte, non fatti da completare con supposizioni.',
    'PikoBuy afferma di poter aiutare a confermare i dettagli quando si cerca direttamente o si invia un link, un’immagine o una richiesta di sourcing. Usa questo passaggio per domande concrete: l’opzione selezionata è disponibile, il prezzo vale per quella variante, la descrizione include la taglia richiesta? «È buono?» non produce una risposta affidabile. Più preciso è il record, più utile può risultare la conferma.',
    'Il prezzo visibile dell’annuncio è solo un elemento del costo finale. Questo sito mostra prezzi sorgente in CNY e un equivalente USD comparativo al tasso dichiarato di ¥7,20 per 1 USD. È utile per confrontare, ma non promette l’importo addebitato. Il venditore può cambiare prezzo, la variante scelta può costare di più e pagamento o spedizione possono aggiungere voci separate.',
    'Ragiona per livelli. Prima valuta se l’articolo vale il prezzo di listino. Poi stima il suo effetto sul pacco: dimensioni, peso, volume d’imballaggio ed eventuale protezione. Infine conserva margine per la linea di spedizione che sceglierai davvero. Un articolo economico ma ingombrante può essere una cattiva scelta. Unire articoli compatibili può semplificare il piano, solo se valore e contenuto complessivi sono accettabili.',
    'Secondo il sito pubblico di PikoBuy, gli articoli passano da controllo qualità e reimballaggio dopo l’arrivo al magazzino cinese. È un controllo significativo, non una garanzia che ogni preferenza soggettiva venga risolta automaticamente. Prima di ordinare prepara una lista breve: taglia o variante, colore, posizione di logo o stampa, parti incluse e ogni dettaglio che una sola foto del venditore non può mostrare con certezza.',
    'Quando sono disponibili foto QC o informazioni di controllo, confrontale con l’opzione realmente scelta, non con una pubblicità generica. Chiediti se la differenza è sostanziale. Una luce diversa può essere irrilevante; taglia errata, accessorio mancante, costruzione diversa o colore differente possono contare molto. Il controllo è prezioso perché fornisce informazioni mentre l’articolo è ancora nel flusso del magazzino, prima della spedizione internazionale.',
    'PikoBuy indica che l’acquirente può scegliere una soluzione di spedizione e ricevere il pacco dal magazzino cinese. La lezione pratica è decidere dopo aver capito il pacco reale, non prima. Una linea adatta a un altro paese, valore o formato potrebbe non essere adatta a te. Verifica destinazione, stima corrente, limiti del pacco e dati richiesti immediatamente prima dell’invio.',
    'Mantieni corrette dichiarazioni e requisiti della destinazione. Regole doganali, trattamento fiscale all’importazione e restrizioni del corriere differiscono per paese e possono cambiare. Questa guida non è consulenza legale o fiscale. Per un ordine reale, dai precedenza a stime e policy ufficiali mostrate quando invii il pacco. Le risorse PikoBuy aggiornate contano più di un vecchio screenshot di forum.',
    'Una visualizzazione interna tipo spreadsheet impedisce che la ricerca si frammenti. Conserva insieme link, ID, opzione, prezzo, screenshot o note della galleria e domande aperte. Quando sei soddisfatto, usa il percorso ufficiale PikoBuy per l’acquisto finale. Ricerca, categorie, foto e confronto rimangono in questo sottosito; solo la scelta consapevole di acquistare apre la corrispondente pagina ufficiale.',
    'Questa separazione crea disciplina. Una sessione di ricerca non diventa automaticamente un checkout impulsivo e puoi tornare su un record, confrontare un altro venditore o eliminare un articolo senza perdere le prove originali. Un acquirente attento non è chi non sbaglia mai. È chi decide identità dell’articolo, variante, tolleranza di prezzo, lista di controllo e piano di spedizione prima che cambiare diventi difficile.',
    'Il sito pubblico di PikoBuy presenta un flusso di scoperta prodotto, assistenza all’acquisto, controllo o reimballaggio in magazzino e spedizione globale. Sono i fatti su cui si fonda questa guida. Non promette tempi fissi, esito universale del rimborso, numero preciso di foto QC, risultato doganale o risposta garantita del venditore: dipendono da articolo, venditore, destinazione, linea e policy corrente. Controlla sempre le condizioni ufficiali aggiornate prima di ordinare o spedire.'
  ] },
  pt: { headings: ['1. Definir o artigo antes de pesquisar', '2. Ler a página como evidência', '3. Separar preço do artigo e custo final', '4. Usar a inspeção do armazém como controlo', '5. Planear o envio pelo pacote real', '6. Manter um registo claro até ao pagamento', 'O que a PikoBuy pode confirmar e o que não pode garantir'], paragraphs: [
    'Comprar em marketplaces chineses raramente é difícil por falta de escolha. A dificuldade está em resultados quase iguais: foto semelhante, título abreviado do vendedor, material diferente, tabela de tamanhos pouco clara ou preço base que exclui uma opção importante. Antes de pagar, transforme a ideia num registo verificável: link ou ID exato, variante escolhida, preço, imagens disponíveis e questões em aberto.',
    'A PikoBuy apresenta-se como um serviço chinês de compras e reencaminhamento. O site público refere pesquisa direta, envio de links, imagens ou pedidos de sourcing e cita Taobao, Weidian e 1688. Um link direto é normalmente o ponto de partida mais claro quando já conhece o vendedor. Um pedido por imagem ajuda a explorar, mas não substitui a verificação dos detalhes da página.',
    'Escreva a decisão que precisa realmente de tomar. «Casaco preto» é uma ideia de navegação; «casaco preto de nylon, tamanho M, fecho de correr, sem preferência de logótipo, orçamento antes do envio» permite comparar. Acrescente motivos de rejeição: tecido errado, medidas ausentes, cor diferente, foto ambígua ou preço sem margem para o transporte. Assim uma miniatura apelativa não se torna cedo demais numa decisão de compra.',
    'Pesquise por várias pistas: tipo de produto, indício do vendedor, material ou detalhe de construção e, quando existir, o ID exato. O importante não é pesquisar uma vez, mas criar um pequeno conjunto comparativo. Guarde dois ou três registos plausíveis e confirme se título, opções visíveis, preço e galeria identificam mesmo o mesmo artigo. Se não, trate-os como candidatos distintos e não como uma versão mais barata.',
    'As fotografias são úteis, mas não chegam por si só. Procure consistência entre título, opções, descrição do material e sequência de imagens. Identifique primeiro o que não é negociável: tamanho, cor, quantidade, acessórios incluídos e opção exata. Depois anote o que não é indicado. Tabela ausente, nome vago ou peça não mostrada são questões em aberto, não factos para preencher com suposições.',
    'A PikoBuy diz poder ajudar a confirmar detalhes quando o comprador pesquisa diretamente ou envia um link, imagem ou pedido de sourcing. Use essa etapa para perguntas concretas: a opção escolhida está disponível, o preço aplica-se a essa variante, a descrição inclui o tamanho pedido? «É bom?» não produz resposta segura. Quanto mais preciso for o registo, mais útil pode ser a confirmação.',
    'O preço visível da listagem é apenas um elemento do custo final. Este site mostra preços de origem em CNY e um equivalente comparativo em USD com a taxa divulgada de ¥7,20 por 1 USD. Ajuda a comparar, mas não promete o valor cobrado. O vendedor pode alterar o preço, a variante pode custar mais e pagamento ou envio podem acrescentar cobranças separadas.',
    'Pense por níveis. Primeiro decida se o artigo vale o preço indicado. Depois estime o efeito no pacote: tamanho, peso, volume da embalagem e eventual proteção. Por fim deixe margem para a linha de envio que de facto vai escolher. Um artigo barato mas volumoso pode ser má escolha. Juntar artigos compatíveis pode simplificar o planeamento, apenas se aceitar o valor e o conteúdo totais.',
    'Segundo o site público da PikoBuy, os artigos passam por inspeção de qualidade e reembalagem depois de chegarem ao armazém chinês. É um ponto de controlo útil, não uma garantia de que todas as preferências subjetivas sejam resolvidas automaticamente. Antes de encomendar, prepare uma lista curta: tamanho ou variante, cor, posição de logótipo ou estampado, peças incluídas e qualquer detalhe que uma única foto do vendedor não comprove bem.',
    'Quando surgirem fotos QC ou dados de inspeção, compare-os com a opção exatamente escolhida, não com uma imagem promocional genérica. Pergunte se a diferença é material. Iluminação diferente pode não importar; tamanho errado, acessório em falta, construção alterada ou cor diferente podem importar muito. A inspeção tem valor porque oferece informação enquanto o artigo ainda está no processo do armazém, antes do envio internacional.',
    'A PikoBuy informa que os compradores podem escolher uma opção de envio e receber pacotes do armazém chinês. Na prática, decida depois de compreender o pacote real, não antes. Uma linha adequada para outro país, valor ou forma de pacote pode não ser adequada para si. Confirme destino, estimativa atual, limites do pacote e informações exigidas imediatamente antes de submeter.',
    'Mantenha corretas as declarações e exigências do destino. Regras alfandegárias, impostos de importação e restrições do transportador variam por país e podem mudar. Este guia não é aconselhamento jurídico ou fiscal. Para uma encomenda real, dê prioridade às estimativas e políticas oficiais mostradas quando submete o pacote. Os recursos atuais da PikoBuy são mais relevantes do que uma captura antiga de fórum.',
    'Uma vista interna de spreadsheet evita fragmentar a pesquisa. Mantenha juntos link, ID, opção, preço, capturas ou notas de galeria e questões em aberto. Quando estiver satisfeito, use a rota oficial PikoBuy para a compra final. Pesquisa, categorias, fotos e comparação ficam neste subsite; apenas a ação consciente de comprar abre a página oficial correspondente.',
    'Esta separação cria disciplina. Uma pesquisa não se torna automaticamente num checkout impulsivo e pode rever um registo, comparar outro vendedor ou retirar um artigo sem perder as provas originais. Um comprador cuidadoso não é quem nunca comete erros. É quem toma as decisões importantes – identidade, variante, tolerância de preço, lista de inspeção e plano de envio – antes de ser difícil alterá-las.',
    'O site público da PikoBuy apresenta um fluxo de descoberta de produto, assistência de compra, inspeção ou reembalagem em armazém e envio global. São estes os factos usados neste guia. Não promete prazo fixo, resultado universal de reembolso, número específico de fotos QC, resultado aduaneiro ou resposta garantida do vendedor, porque dependem do artigo, vendedor, destino, linha escolhida e política atual. Consulte sempre os termos oficiais atualizados antes de encomendar ou enviar.'
  ] },
  nl: { headings: ['1. Bepaal het artikel vóór je zoekt', '2. Lees de productpagina als bewijs', '3. Scheid artikelprijs en eindkosten', '4. Gebruik magazijninspectie als controlemoment', '5. Plan verzending rond het echte pakket', '6. Houd het besluit traceerbaar tot afrekenen', 'Wat PikoBuy kan bevestigen en niet kan garanderen'], paragraphs: [
    'Kopen op Chinese marktplaatsen is zelden moeilijk door te weinig keuze. Het moeilijke zijn de bijna-gelijke resultaten: een vergelijkbare foto, een verkorte verkopertitel, ander materiaal, een onduidelijke maattabel of een basisprijs waarbij een belangrijke optie ontbreekt. Maak vóór betaling daarom een controleerbaar productrecord: exacte link of ID, gekozen variant, prijs, beschikbare afbeeldingen en open vragen.',
    'PikoBuy omschrijft zich als Chinese winkel- en doorstuurservice. De openbare site noemt direct zoeken, het indienen van productlinks, afbeeldingen of sourcingverzoeken en vermeldt Taobao, Weidian en 1688. Een directe link is meestal het duidelijkste vertrekpunt wanneer je de verkoper al kent. Een aanvraag met afbeelding helpt bij verkennen, maar vervangt controle van de productdetails niet.',
    'Schrijf op welke keuze je werkelijk wilt maken. „Zwarte jas” is een browse-idee; „zwarte nylon jas, maat M, rits, geen logovoorkeur, budget vóór verzending” is vergelijkbaar. Voeg afwijspunten toe: verkeerde stof, ontbrekende maten, andere kleur, onduidelijke verkopersfoto of een prijs zonder ruimte voor verzending. Zo wordt een aantrekkelijke thumbnail niet te snel een koopbeslissing.',
    'Zoek via meerdere signalen: producttype, verkopershint, materiaal of constructiedetail en, indien beschikbaar, de exacte artikel-ID. Het gaat niet om één zoekopdracht maar om een kleine vergelijkingsset. Bewaar twee of drie plausibele records en kijk of titel, zichtbare opties, prijs en galerij echt hetzelfde artikel aanduiden. Zo niet, behandel ze dan als verschillende kandidaten en niet als een goedkopere uitvoering.',
    'Foto’s zijn waardevol, maar niet voldoende op zichzelf. Zoek samenhang tussen titel, opties, materiaalbeschrijving en afbeeldingsreeks. Bepaal eerst de niet-onderhandelbare punten: maat, kleur, aantal, meegeleverde accessoires en exacte optie. Noteer daarna wat niet vermeld is. Een ontbrekende tabel, vage naam of niet getoond onderdeel is een open vraag, geen feit dat je met aannames moet invullen.',
    'PikoBuy zegt te kunnen helpen productdetails te bevestigen wanneer iemand rechtstreeks zoekt of een link, afbeelding of sourcingverzoek indient. Gebruik die stap voor concrete vragen: is de gekozen optie beschikbaar, geldt de prijs voor die variant, bevat de beschrijving de gevraagde maat? „Is dit goed?” levert geen betrouwbare reactie op. Hoe nauwkeuriger je record, hoe bruikbaarder een bevestiging kan zijn.',
    'De zichtbare aanbiedingsprijs is maar één onderdeel van het eindbesluit. Deze site toont bronprijzen in CNY en een USD-vergelijking tegen de expliciet genoemde koers van ¥7,20 per 1 USD. Dat maakt vergelijken makkelijker, maar belooft geen eindbedrag. Een verkoper kan prijzen wijzigen, een geselecteerde optie kan meer kosten en betaling of verzending kunnen losse kosten toevoegen.',
    'Denk in lagen. Bepaal eerst of het artikel de aanbiedingsprijs waard is. Schat daarna het effect op het pakket: formaat, gewicht, verpakkingsvolume en benodigde bescherming. Houd ten slotte ruimte over voor de verzendmethode die je werkelijk kiest. Een goedkoop maar volumineus product kan een slechte keuze zijn. Bijpassende artikelen combineren kan plannen vereenvoudigen, maar alleen als totale waarde en inhoud acceptabel zijn.',
    'Volgens de openbare PikoBuy-site krijgen artikelen na aankomst in het Chinese magazijn kwaliteitsinspectie en herverpakking. Dat is een nuttig controlemoment, geen garantie dat elke subjectieve voorkeur vanzelf wordt opgelost. Maak vóór bestelling een korte checklist: gekozen maat of variant, kleur, positie van logo of print, meegeleverde onderdelen en elk detail dat één verkopersfoto niet betrouwbaar laat zien.',
    'Wanneer QC-foto’s of inspectiegegevens beschikbaar worden, vergelijk ze dan met precies de gekozen optie, niet met een algemene reclameafbeelding. Vraag of een verschil wezenlijk is. Andere verlichting kan onbelangrijk zijn; verkeerde maat, ontbrekend accessoire, andere constructie of kleur kan veel uitmaken. Inspectie is waardevol omdat je informatie krijgt terwijl het artikel nog in de magazijnstroom zit, vóór internationale verzending.',
    'PikoBuy geeft aan dat kopers een verzendoptie kunnen kiezen en pakketten vanuit het Chinese magazijn kunnen ontvangen. De praktische les is pas te beslissen wanneer je het echte pakket begrijpt. Een lijn die voor een ander land, waarde of pakketvorm werkt, past mogelijk niet bij jou. Controleer bestemming, actuele schatting, pakketgrenzen en vereiste informatie vlak vóór je het pakket indient.',
    'Houd aangiften en bestemmingseisen correct. Douaneregels, invoerbelasting en vervoerdersbeperkingen verschillen per bestemming en kunnen wijzigen. Deze gids is geen fiscaal of juridisch advies. Geef bij een echte zending voorrang aan de officiële schatting en regels die op het moment van indienen worden getoond. Actuele PikoBuy-bronnen zijn belangrijker dan een oude forumpost of schermafbeelding.',
    'Een interne spreadsheetweergave voorkomt dat onderzoek versnipperd raakt. Bewaar link, artikel-ID, optie, prijs, screenshots of galerijnotities en open vragen samen. Als je tevreden bent, gebruik je pas dan de officiële PikoBuy-route voor de laatste aankoopstap. Zoeken, categorieën, afbeeldingen en vergelijking blijven op deze subsite; alleen de bewuste koopactie opent de bijbehorende officiële productpagina.',
    'Die scheiding zorgt voor discipline. Een browsesessie verandert niet automatisch in een impulsaankoop en je kunt een record later opnieuw bekijken, met een andere verkoper vergelijken of uit je plan verwijderen zonder de oorspronkelijke onderbouwing kwijt te raken. Een zorgvuldige koper maakt niet nooit fouten; hij beslist over identiteit, variant, prijsmarge, inspectiechecklist en verzendplan voordat veranderen moeilijk wordt.',
    'De openbare PikoBuy-site toont een stroom van productontdekking, aankoopondersteuning, magazijninspectie of herverpakking en wereldwijde verzending. Dit zijn de feiten waarop deze gids steunt. De gids belooft geen vaste levertijd, universeel restitutieresultaat, specifiek aantal QC-foto’s, douane-uitkomst of gegarandeerde verkopersreactie, omdat dat afhangt van artikel, verkoper, bestemming, gekozen lijn en huidig beleid. Controleer vóór bestellen of verzenden steeds de actuele officiële voorwaarden.'
  ] },
  pl: { headings: ['1. Określ produkt przed wyszukaniem', '2. Czytaj ofertę jak materiał dowodowy', '3. Oddziel cenę produktu od kosztu końcowego', '4. Traktuj kontrolę magazynową jako punkt sprawdzenia', '5. Planuj wysyłkę według rzeczywistej paczki', '6. Zachowaj czytelny zapis do płatności', 'Co PikoBuy może potwierdzić, a czego nie gwarantuje'], paragraphs: [
    'Zakupy na chińskich platformach rzadko są trudne z powodu zbyt małego wyboru. Problemem są niemal identyczne wyniki: podobne zdjęcie, skrócony tytuł sprzedawcy, inny materiał, niejasna tabela rozmiarów albo cena bazowa bez ważnego wariantu. Przed płatnością zamień więc pomysł w możliwy do sprawdzenia rekord: dokładny link lub ID, wybrany wariant, cena, dostępne obrazy i pytania bez odpowiedzi.',
    'PikoBuy opisuje się jako chińską usługę zakupową i przekierowania przesyłek. Publiczna strona podaje wyszukiwanie bezpośrednie, przesyłanie linków, obrazów lub zleceń sourcingowych oraz wymienia Taobao, Weidian i 1688. Bezpośredni link jest zwykle najczytelniejszym początkiem, gdy znasz sprzedawcę. Zapytanie oparte na obrazie pomaga w odkrywaniu, lecz nie zastępuje sprawdzenia szczegółów oferty.',
    'Zapisz decyzję, którą naprawdę chcesz podjąć. „Czarna kurtka” to pomysł na przeglądanie; „czarna kurtka nylonowa, rozmiar M, zamek, bez preferencji logo, budżet przed wysyłką” można porównać. Dodaj warunki odrzucenia: zły materiał, brak wymiarów, inny kolor, niejasne zdjęcie lub cena bez zapasu na wysyłkę. Dzięki temu atrakcyjna miniatura nie stanie się zbyt szybko decyzją zakupową.',
    'Szukaj przez kilka wskazówek: typ produktu, trop dotyczący sprzedawcy, materiał lub detal konstrukcji, a gdy go masz – dokładne ID. Nie chodzi o jedno wyszukanie, lecz o mały zestaw porównawczy. Zapisz dwa lub trzy prawdopodobne rekordy i sprawdź, czy tytuł, widoczne opcje, cena i galeria naprawdę dotyczą tego samego produktu. Jeśli nie, traktuj je jako różne kandydaty, a nie tańszą wersję.',
    'Zdjęcia są wartościowe, ale same nie wystarczą. Szukaj zgodności między tytułem, opcjami, opisem materiału i sekwencją obrazów. Najpierw wskaż elementy niepodlegające negocjacji: rozmiar, kolor, liczba sztuk, dołączone akcesoria i dokładnie wybrany wariant. Potem zanotuj, czego nie podano. Brak tabeli, ogólna nazwa lub niewidoczna część to otwarte pytania, a nie fakty do uzupełnienia założeniami.',
    'PikoBuy podaje, że może pomagać potwierdzać szczegóły produktu, gdy kupujący wyszukuje bezpośrednio albo przesyła link, obraz lub prośbę sourcingową. Użyj tego etapu do konkretnych pytań: czy wybrana opcja jest dostępna, czy cena dotyczy wariantu, czy opis obejmuje żądany rozmiar? „Czy to jest dobre?” nie da wiarygodnej odpowiedzi. Im dokładniejszy rekord, tym użyteczniejsze może być potwierdzenie.',
    'Widoczna cena oferty jest tylko jednym składnikiem decyzji końcowej. Ta strona pokazuje ceny źródłowe w CNY i porównawczy odpowiednik USD według ujawnionego kursu ¥7,20 za 1 USD. Ułatwia to porównanie, ale nie obiecuje kwoty końcowej. Sprzedawca może zmienić cenę, wybrany wariant może kosztować więcej, a płatność lub wysyłka mogą dodać odrębne opłaty.',
    'Myśl warstwowo. Najpierw zdecyduj, czy produkt jest wart ceny z oferty. Następnie oszacuj wpływ na paczkę: rozmiar, wagę, objętość opakowania i potrzebną ochronę. Na końcu zostaw margines na metodę wysyłki, którą rzeczywiście wybierzesz. Tani, lecz duży produkt może być słabym wyborem. Łączenie pasujących artykułów może uprościć plan, tylko jeśli akceptujesz łączną wartość i zawartość.',
    'Według publicznej strony PikoBuy artykuły przechodzą kontrolę jakości i przepakowanie po dotarciu do chińskiego magazynu. To użyteczny punkt kontroli, a nie gwarancja automatycznego rozwiązania każdej subiektywnej preferencji. Przed zamówieniem przygotuj krótką listę: rozmiar lub wariant, kolor, położenie logo albo nadruku, elementy w zestawie i każdą cechę, której jedno zdjęcie sprzedawcy nie pokazuje pewnie.',
    'Gdy pojawią się zdjęcia QC lub informacje z kontroli, porównaj je z dokładnie wybraną opcją, a nie z ogólną reklamą. Zapytaj, czy różnica jest istotna. Inne oświetlenie może nie mieć znaczenia; zły rozmiar, brak akcesorium, odmienna konstrukcja lub kolor mogą mieć duże znaczenie. Kontrola jest cenna, bo dostarcza informacji, gdy artykuł nadal znajduje się w procesie magazynowym, przed wysyłką międzynarodową.',
    'PikoBuy wskazuje, że kupujący mogą wybrać opcję wysyłki i otrzymać paczkę z chińskiego magazynu. Praktyczna lekcja: zdecyduj dopiero po zrozumieniu rzeczywistej paczki. Linia dobra dla innego kraju, wartości lub formatu paczki nie musi pasować do Ciebie. Sprawdź cel, bieżącą wycenę, limity paczki i wymagane dane tuż przed jej zgłoszeniem.',
    'Utrzymuj poprawne deklaracje i wymagania kraju docelowego. Przepisy celne, podatki importowe i ograniczenia przewoźników różnią się między krajami i mogą się zmieniać. Ten przewodnik nie jest poradą prawną ani podatkową. Przy rzeczywistym zamówieniu pierwszeństwo mają oficjalne wyceny i zasady wyświetlane przy zgłoszeniu paczki. Aktualne materiały PikoBuy są ważniejsze niż stary zrzut ekranu z forum.',
    'Wewnętrzny widok typu spreadsheet zapobiega rozproszeniu badań. Trzymaj razem link, ID produktu, opcję, cenę, zrzuty lub notatki z galerii oraz otwarte pytania. Gdy jesteś zadowolony, użyj oficjalnej ścieżki PikoBuy dopiero do ostatniego kroku zakupu. Wyszukiwanie, kategorie, zdjęcia i porównanie pozostają w tym subsite; jedynie świadoma akcja zakupu otwiera odpowiednią oficjalną stronę produktu.',
    'Taki podział tworzy dyscyplinę. Sesja przeglądania nie zamienia się automatycznie w impulsywne płacenie, a rekord można później ponownie sprawdzić, porównać z innym sprzedawcą lub usunąć z planu bez utraty pierwotnych dowodów. Ostrożny kupujący nie jest osobą, która nigdy się nie myli. To osoba, która rozstrzyga tożsamość produktu, wariant, tolerancję ceny, listę kontroli i plan wysyłki, zanim zmiana stanie się trudna.',
    'Publiczna strona PikoBuy przedstawia proces odkrywania produktów, wsparcia zakupu, kontroli lub przepakowania w magazynie oraz wysyłki globalnej. Na tych faktach opiera się ten przewodnik. Nie obiecuje on stałego terminu dostawy, uniwersalnego wyniku zwrotu, określonej liczby zdjęć QC, wyniku celnego ani gwarantowanej odpowiedzi sprzedawcy, bo zależą od produktu, sprzedawcy, kraju, wybranej linii i bieżącej polityki. Przed zamówieniem lub wysyłką zawsze sprawdź aktualne oficjalne warunki.'
  ] },
  sv: { headings: ['1. Definiera varan före sökning', '2. Läs produktsidan som bevis', '3. Separera varupris och slutkostnad', '4. Använd lagerkontroll som kontrollpunkt', '5. Planera frakten utifrån det faktiska paketet', '6. Behåll ett tydligt underlag fram till betalning', 'Vad PikoBuy kan bekräfta – och inte kan garantera'], paragraphs: [
    'Att köpa från kinesiska marknadsplatser är sällan svårt för att utbudet är för litet. Svårigheten är nästan lika träffar: liknande foto, förkortad säljartitel, annat material, oklar storlekstabell eller ett baspris där ett viktigt alternativ inte ingår. Gör därför idén till en kontrollerbar post före betalning: exakt länk eller artikel-ID, vald variant, pris, tillgängliga bilder och öppna frågor.',
    'PikoBuy beskriver sig som en kinesisk köp- och vidarebefordringstjänst. Den offentliga webbplatsen nämner direkt sökning, inskick av produktlänkar, bilder eller sourcingförfrågningar och anger Taobao, Weidian och 1688. En direktlänk är normalt den tydligaste utgångspunkten när säljaren redan är känd. En bildförfrågan hjälper till att utforska, men ersätter inte kontroll av produktinformationen.',
    'Skriv ned vilket beslut du faktiskt ska fatta. ”Svart jacka” är en bläddringsidé; ”svart nylonjacka, storlek M, dragkedja, ingen logopreferens, budget före frakt” går att jämföra. Lägg till vad som skulle få dig att avstå: fel tyg, saknade mått, annan färg, otydlig säljarbild eller ett pris utan utrymme för frakt. Då blir inte en lockande miniatyrbild för snabbt ett köpbeslut.',
    'Sök med flera ledtrådar: produkttyp, säljarspår, material eller konstruktionsdetalj och, när den finns, exakt artikel-ID. Poängen är inte att söka en gång utan att skapa en liten jämförelsegrupp. Spara två eller tre rimliga poster och kontrollera om titel, synliga alternativ, pris och galleri verkligen avser samma vara. Om de inte gör det ska de behandlas som olika kandidater, inte som en billigare version.',
    'Bilder är värdefulla, men räcker inte ensamma. Leta efter samstämmighet mellan titel, alternativ, materialbeskrivning och bildföljd. Identifiera först det som inte är förhandlingsbart: storlek, färg, antal, medföljande tillbehör och exakt valt alternativ. Notera sedan det som inte anges. En saknad tabell, ett vagt namn eller en ej visad del är en öppen fråga, inte ett faktum att fylla med antaganden.',
    'PikoBuy uppger att tjänsten kan hjälpa till att bekräfta produktuppgifter när köparen söker direkt eller skickar in länk, bild eller sourcingförfrågan. Använd steget för konkreta frågor: finns valt alternativ, gäller priset den varianten, innehåller beskrivningen begärd storlek? ”Är den bra?” ger inget tillförlitligt svar. Ju mer exakt din post är, desto mer användbar kan en bekräftelse bli.',
    'Det synliga annonspriset är bara en del av slutbeslutet. Denna webbplats visar källpriser i CNY och en jämförande USD-ekvivalent till den redovisade kursen ¥7,20 per 1 USD. Det underlättar jämförelse men lovar inte slutbeloppet. Säljaren kan ändra priset, vald variant kan kosta mer och betalning eller frakt kan lägga till separata avgifter.',
    'Tänk i lager. Avgör först om varan är värd listpriset. Bedöm sedan hur den påverkar paketet: storlek, vikt, förpackningsvolym och eventuellt skydd. Lämna slutligen utrymme för den fraktlinje du faktiskt väljer. En billig men skrymmande vara kan vara ett dåligt val. Att kombinera kompatibla varor kan förenkla planeringen, men bara om du är bekväm med det totala värdet och innehållet.',
    'Enligt PikoBuys offentliga webbplats genomgår varor kvalitetskontroll och ompackning efter ankomst till det kinesiska lagret. Det är en användbar kontrollpunkt, inte en garanti för att varje subjektiv önskan löses automatiskt. Gör en kort checklista före beställning: vald storlek eller variant, färg, placering av logotyp eller tryck, inkluderade delar och varje egenskap som ett enda säljarfoto inte säkert visar.',
    'När QC-bilder eller kontrollinformation finns tillgänglig, jämför dem med exakt valt alternativ och inte med en allmän reklambild. Fråga om avvikelsen är väsentlig. Annat ljus kan vara oviktigt; fel storlek, saknat tillbehör, förändrad konstruktion eller annan färg kan betyda mycket. Kontrollsteget är värdefullt eftersom du får information medan varan fortfarande är i lagerflödet, före internationell frakt.',
    'PikoBuy anger att köpare kan välja fraktalternativ och få paket levererade från det kinesiska lagret. Den praktiska lärdomen är att besluta efter att du förstår det verkliga paketet, inte före. En linje som fungerar för ett annat land, värde eller paketformat kanske inte passar dig. Kontrollera destination, aktuell uppskattning, paketgränser och nödvändig information precis innan du skickar in paketet.',
    'Håll deklarationer och destinationskrav korrekta. Tullregler, importskatt och transportörsbegränsningar skiljer sig mellan länder och kan ändras. Den här guiden är inte skatte- eller juridisk rådgivning. För en riktig order ska den officiella uppskattning och policy som visas vid paketinlämning prioriteras. Aktuella PikoBuy-resurser väger tyngre än en gammal forumskärmdump.',
    'En intern spreadsheetvy gör att research inte splittras. Behåll länk, artikel-ID, alternativ, pris, skärmbilder eller gallerianteckningar och öppna frågor tillsammans. När du är nöjd använder du den officiella PikoBuy-rutten för sista köpsteget. Sökning, kategorier, bilder och jämförelse stannar på denna subsite; bara den medvetna köphandlingen öppnar motsvarande officiella produktsida.',
    'Den uppdelningen skapar disciplin. En bläddringssession blir inte automatiskt ett impulsköp, och du kan återvända till en post, jämföra annan säljare eller ta bort en vara från planen utan att förlora ursprungliga bevis. En noggrann köpare är inte någon som aldrig gör fel. Det är någon som beslutar om varans identitet, variant, prisutrymme, kontrollista och fraktplan innan ändringar blir svåra.',
    'PikoBuys offentliga webbplats beskriver ett flöde med produktupptäckt, köphjälp, lagerkontroll eller ompackning och global frakt. Det är de fakta som denna guide bygger på. Den lovar inte fast leveranstid, universellt återbetalningsresultat, visst antal QC-bilder, tullutfall eller garanterat säljsvar, eftersom allt beror på vara, säljare, destination, vald linje och aktuell policy. Kontrollera alltid aktuella officiella villkor innan du beställer eller skickar.'
  ] },
};

// Additional local paragraphs keep the translated guides at least as substantial
// as the English original while adding distinct decision-making detail rather
// than padding with repeated sentences.
const LOCALIZED_SEO_APPENDIX = {
  de: [
    'Arbeite bei jeder Produktseite mit einer klaren Trennung zwischen sichtbaren Angaben und eigener Erwartung. Der Preis, die auswählbaren Varianten und die im Datensatz verfügbaren Bilder sind prüfbare Angaben. Ob ein Stoff sich hochwertig anfühlt, eine Größe persönlich passt oder eine Farbe im Alltag genauso wirkt, bleibt eine Einschätzung. Diese Trennung macht Rückfragen an Verkäufer oder Einkaufsservice präzise und verhindert, dass Vermutung später als zugesagte Eigenschaft gelesen wird.',
    'Bei Varianten ist der ausgewählte Eintrag wichtiger als ein Titelbild. Viele Listings bündeln mehrere Farben, Größen oder Ausführungen in einer Galerie. Prüfe daher vor dem nächsten Schritt, ob die Auswahl im Record steht und ob Bild, Preis und Option zueinander passen. Wenn es einen Konflikt gibt, speichere ihn als Frage. Eine nachvollziehbare Frage vor dem Kauf ist nützlicher als die Korrektur einer falschen Variante nach Lagerankunft.',
    'Auch Zeitangaben sollten als aktuelle Prozessinformationen gelesen werden, nicht als feste Zusage. Bearbeitung beim Verkäufer, Ankunft im Lager, QC, Umpacken und die gewählte Versandlinie haben jeweils eigene Abhängigkeiten. Plane keine Reise, ein Geschenk oder einen Weiterverkauf anhand einer allgemeinen Schätzung. Prüfe vor jeder verbindlichen Entscheidung die zu diesem Zeitpunkt sichtbaren Angaben und halte genug Zeitreserve für Änderungen beim Verkäufer oder beim Transport ein.',
    'Die sichere Abschlussroutine ist deshalb einfach: Produktrecord nochmals öffnen, Titel und gewählte Option lesen, CNY-Preis und USD-Vergleich einordnen, QC-Checkliste bereithalten und danach die offizielle PikoBuy-Kaufroute bewusst auslösen. So bleibt diese Seite ein Recherchewerkzeug und nicht eine Quelle für erfundene Garantien. Sie dokumentiert, was vorliegt, und verweist für Zahlung, Versand, Rückgaben und endgültige Bedingungen immer auf die aktuelle offizielle PikoBuy-Information.'
  ],
  fr: [
    'Pour chaque fiche, distinguez strictement les données visibles de votre attente personnelle. Prix, options sélectionnables et images disponibles dans le dossier sont vérifiables. La sensation d’une matière, l’ajustement d’une taille ou le rendu quotidien d’une couleur restent des appréciations. Cette distinction rend les questions au vendeur ou au service d’achat précises et évite de lire plus tard une supposition comme une caractéristique promise.',
    'Pour les variantes, l’option effectivement sélectionnée compte davantage que l’image de couverture. Beaucoup de fiches regroupent plusieurs couleurs, tailles ou versions dans une même galerie. Avant de poursuivre, vérifiez que le choix figure dans votre fiche et que photo, prix et option concordent. S’il y a conflit, notez-le comme question. Une question traçable avant l’achat vaut mieux que corriger une variante erronée après son arrivée à l’entrepôt.',
    'Les indications de délai doivent aussi être lues comme des informations de processus actuelles, non comme une promesse fixe. Traitement vendeur, arrivée à l’entrepôt, QC, reconditionnement et ligne d’expédition ont chacun leurs dépendances. Ne planifiez pas un voyage, un cadeau ou une revente sur une estimation générale. Avant toute décision ferme, vérifiez les informations visibles à ce moment et gardez une marge pour les changements vendeur ou transport.',
    'La routine finale est donc simple : ouvrez à nouveau la fiche, relisez titre et option choisie, situez le prix CNY et la comparaison USD, gardez la liste QC à portée de main, puis déclenchez consciemment la route d’achat officielle PikoBuy. Cette page reste ainsi un outil de recherche, non une source de garanties inventées. Elle documente les éléments disponibles et renvoie toujours aux informations officielles PikoBuy pour paiement, expédition, retours et conditions définitives.'
  ],
  es: [
    'Para cada ficha, separa claramente los datos visibles de tus expectativas personales. El precio, las opciones seleccionables y las imágenes disponibles en el registro se pueden comprobar. Que un tejido parezca premium, que una talla siente bien o que un color funcione igual a diario son valoraciones. Esta separación hace precisas las preguntas al vendedor o al servicio de compra y evita tratar después una suposición como una característica prometida.',
    'En variantes, la opción realmente seleccionada importa más que la imagen de portada. Muchas fichas reúnen colores, tallas o versiones en una misma galería. Antes de avanzar, comprueba que la selección está escrita en tu registro y que foto, precio y opción coinciden. Si hay conflicto, anótalo como pregunta. Una duda rastreable antes de comprar es mejor que corregir una variante equivocada tras llegar al almacén.',
    'Las referencias de tiempo también deben leerse como información actual del proceso, no como compromiso fijo. Procesamiento del vendedor, llegada al almacén, QC, reempaque y línea de envío tienen dependencias propias. No planifiques un viaje, regalo o reventa con una estimación general. Antes de una decisión vinculante, revisa los datos visibles en ese momento y deja margen suficiente para cambios del vendedor o del transporte.',
    'La rutina final segura es sencilla: abre otra vez el registro, lee título y opción elegida, interpreta el precio CNY y la comparación USD, ten lista la lista de QC y luego activa conscientemente la ruta oficial de compra de PikoBuy. Así esta página sigue siendo una herramienta de investigación, no una fuente de garantías inventadas. Documenta lo disponible y remite a la información oficial actual de PikoBuy para pago, envío, devoluciones y condiciones finales.'
  ],
  it: [
    'Per ogni scheda separa con chiarezza dati visibili e aspettativa personale. Prezzo, opzioni selezionabili e immagini disponibili nel record sono verificabili. Che un tessuto sembri pregiato, che una taglia calzi bene o che un colore renda allo stesso modo nella vita quotidiana sono valutazioni. Questa separazione rende precise le domande a venditore o servizio d’acquisto ed evita di leggere una supposizione come caratteristica promessa.',
    'Nelle varianti conta più l’opzione realmente selezionata dell’immagine di copertina. Molte schede raccolgono colori, taglie o versioni nella stessa galleria. Prima di procedere, verifica che la scelta sia scritta nel record e che immagine, prezzo e opzione coincidano. Se esiste conflitto, annotalo come domanda. Un dubbio tracciabile prima dell’acquisto è migliore della correzione di una variante errata dopo l’arrivo in magazzino.',
    'Anche i tempi vanno letti come informazioni attuali di processo, non come impegno fisso. Elaborazione del venditore, arrivo in magazzino, QC, reimballaggio e linea di spedizione hanno dipendenze proprie. Non programmare viaggio, regalo o rivendita su una stima generica. Prima di una decisione vincolante controlla i dati visibili in quel momento e conserva margine per cambiamenti del venditore o del trasporto.',
    'La routine finale sicura è semplice: riapri il record, leggi titolo e opzione scelta, inquadra prezzo CNY e confronto USD, tieni pronta la checklist QC e poi attiva consapevolmente la rotta ufficiale di acquisto PikoBuy. Così questa pagina resta uno strumento di ricerca, non una fonte di garanzie inventate. Documenta quanto disponibile e rimanda sempre alle informazioni ufficiali PikoBuy aggiornate per pagamento, spedizione, resi e condizioni definitive.'
  ],
  pt: [
    'Em cada página, separe claramente os dados visíveis da sua expectativa pessoal. Preço, opções selecionáveis e imagens disponíveis no registo são verificáveis. A sensação de qualidade de um tecido, o ajuste de um tamanho ou o resultado de uma cor no dia a dia continuam a ser avaliações. Esta separação torna precisas as perguntas ao vendedor ou ao serviço de compra e evita que uma suposição seja lida depois como característica prometida.',
    'Nas variantes, a opção efetivamente selecionada é mais importante do que a imagem de capa. Muitas páginas reúnem cores, tamanhos ou versões numa única galeria. Antes de avançar, confirme que a escolha está escrita no registo e que fotografia, preço e opção coincidem. Se houver conflito, anote-o como questão. Uma dúvida rastreável antes da compra é melhor do que corrigir uma variante errada depois da chegada ao armazém.',
    'As indicações de prazo também devem ser lidas como informação atual do processo, não como compromisso fixo. Processamento do vendedor, chegada ao armazém, QC, reembalagem e linha de envio têm dependências próprias. Não planeie viagem, presente ou revenda com base numa estimativa geral. Antes de qualquer decisão vinculativa, confirme os dados visíveis nesse momento e mantenha margem para alterações do vendedor ou do transporte.',
    'A rotina final segura é simples: abra novamente o registo, leia título e opção escolhida, enquadre o preço CNY e a comparação USD, tenha a lista QC pronta e só depois acione conscientemente a rota oficial de compra da PikoBuy. Assim esta página permanece uma ferramenta de pesquisa, não uma fonte de garantias inventadas. Documenta o que está disponível e remete sempre para informação oficial atual da PikoBuy sobre pagamento, envio, devoluções e condições finais.'
  ],
  nl: [
    'Houd bij elke productpagina zichtbare gegevens en persoonlijke verwachting strikt uit elkaar. Prijs, selecteerbare opties en afbeeldingen in het record zijn controleerbaar. Of stof luxe aanvoelt, een maat persoonlijk goed past of een kleur dagelijks hetzelfde oogt, blijven beoordelingen. Dat onderscheid maakt vragen aan verkoper of koopservice precies en voorkomt dat een aanname later als toegezegde eigenschap wordt gelezen.',
    'Bij varianten telt de werkelijk gekozen optie meer dan de omslagafbeelding. Veel pagina’s bundelen kleuren, maten of uitvoeringen in één galerij. Controleer vóór je doorgaat of de keuze in je record staat en of afbeelding, prijs en optie bij elkaar passen. Is er een conflict, noteer het als vraag. Een traceerbare vraag vóór aankoop is beter dan een verkeerde variant proberen te corrigeren na aankomst in het magazijn.',
    'Ook tijdsaanduidingen moeten worden gelezen als actuele procesinformatie, niet als vaste belofte. Verkopersverwerking, aankomst in het magazijn, QC, herverpakken en de gekozen verzendlijn hebben ieder eigen afhankelijkheden. Plan geen reis, cadeau of doorverkoop op een algemene schatting. Controleer vóór een bindende keuze de dan zichtbare gegevens en houd voldoende marge voor wijzigingen bij verkoper of transport.',
    'De veilige afsluitroutine is daarom eenvoudig: open het productrecord opnieuw, lees titel en gekozen optie, plaats CNY-prijs en USD-vergelijking in context, houd de QC-checklist klaar en activeer pas daarna bewust de officiële PikoBuy-kooproute. Zo blijft deze pagina een onderzoeksinstrument en geen bron van verzonnen garanties. Zij documenteert wat beschikbaar is en verwijst voor betaling, verzending, retouren en definitieve voorwaarden steeds naar actuele officiële PikoBuy-informatie.'
  ],
  pl: [
    'Na każdej stronie produktu wyraźnie oddziel dane widoczne od własnych oczekiwań. Cena, wybieralne opcje i obrazy dostępne w rekordzie są sprawdzalne. To, czy materiał wydaje się wysokiej jakości, rozmiar dobrze leży albo kolor wygląda tak samo na co dzień, pozostaje oceną. Taki podział czyni pytania do sprzedawcy lub usługi zakupowej precyzyjnymi i zapobiega późniejszemu traktowaniu założenia jako obiecanej cechy.',
    'Przy wariantach ważniejsza od zdjęcia okładkowego jest faktycznie wybrana opcja. Wiele ofert łączy kolory, rozmiary lub wersje w jednej galerii. Zanim przejdziesz dalej, sprawdź, czy wybór jest zapisany w rekordzie i czy obraz, cena oraz opcja są zgodne. Jeśli jest konflikt, zapisz go jako pytanie. Możliwe do prześledzenia pytanie przed zakupem jest lepsze niż korygowanie złego wariantu po przyjęciu do magazynu.',
    'Informacje o czasie również należy czytać jako aktualny stan procesu, a nie stałe zobowiązanie. Przetwarzanie przez sprzedawcę, przyjęcie do magazynu, QC, przepakowanie i wybrana linia wysyłki mają własne zależności. Nie planuj podróży, prezentu ani odsprzedaży według ogólnej estymacji. Przed wiążącą decyzją sprawdź widoczne wtedy dane i pozostaw zapas na zmiany po stronie sprzedawcy lub transportu.',
    'Bezpieczna rutina końcowa jest prosta: ponownie otwórz rekord, przeczytaj tytuł i wybraną opcję, umieść cenę CNY oraz porównanie USD we właściwym kontekście, przygotuj listę QC, a dopiero potem świadomie uruchom oficjalną ścieżkę zakupu PikoBuy. Dzięki temu strona pozostaje narzędziem badawczym, nie źródłem wymyślonych gwarancji. Dokumentuje dostępne dane i dla płatności, wysyłki, zwrotów oraz ostatecznych warunków zawsze odsyła do aktualnych oficjalnych informacji PikoBuy.'
  ],
  sv: [
    'På varje produktsida ska synliga uppgifter och egna förväntningar hållas tydligt åtskilda. Pris, valbara alternativ och bilder i posten går att kontrollera. Om ett tyg känns exklusivt, en storlek passar personligen eller en färg fungerar likadant i vardagen är bedömningar. Uppdelningen gör frågor till säljare eller köptjänst konkreta och hindrar att ett antagande senare läses som en utlovad egenskap.',
    'För varianter är det faktiskt valda alternativet viktigare än omslagsbilden. Många listningar samlar färger, storlekar eller utföranden i samma galleri. Kontrollera före nästa steg att valet står i din post och att bild, pris och alternativ stämmer ihop. Finns en konflikt, skriv ned den som fråga. En spårbar fråga före köp är bättre än att försöka rätta fel variant efter ankomst till lagret.',
    'Tidsuppgifter ska också läsas som aktuell processinformation, inte som ett fast löfte. Säljarhantering, ankomst till lager, QC, ompackning och vald fraktlinje har egna beroenden. Planera inte resa, gåva eller vidareförsäljning på en allmän uppskattning. Kontrollera före ett bindande beslut de uppgifter som syns då och lämna tillräcklig marginal för ändringar hos säljare eller transport.',
    'Den säkra slutrutinen är därför enkel: öppna produktposten igen, läs titel och valt alternativ, sätt CNY-priset och USD-jämförelsen i sammanhang, ha QC-checklistan klar och aktivera först därefter medvetet den officiella PikoBuy-köprutten. Då förblir sidan ett researchverktyg och inte en källa till påhittade garantier. Den dokumenterar det som finns och hänvisar för betalning, frakt, returer och slutliga villkor alltid till aktuell officiell PikoBuy-information.'
  ],
};

// This is the in-card editorial headline shown above the first paragraph.  It
// must remain present for every language; previously the English template had
// it while localized templates started directly with body copy.
const LOCALIZED_SEO_CARD_HEADLINES = {
  de: 'Beginne mit dem Produktdatensatz – und baue darauf eine fundierte Kaufentscheidung auf.',
  fr: 'Commencez par la fiche produit, puis construisez une décision d’achat solide autour d’elle.',
  es: 'Empieza por el registro del producto y construye una decisión de compra fundamentada.',
  it: 'Parti dalla scheda prodotto, poi costruisci attorno a essa una decisione d’acquisto consapevole.',
  pt: 'Comece pelo registo do produto e construa à volta dele uma decisão de compra fundamentada.',
  nl: 'Begin met het productrecord en bouw daar een onderbouwde koopbeslissing omheen.',
  pl: 'Zacznij od rekordu produktu, a następnie zbuduj na nim świadomą decyzję zakupową.',
  sv: 'Börja med produktposten och bygg sedan ett välgrundat köpbeslut kring den.',
};

function localGuideSections(copy, lang) {
  const article = LOCALIZED_SEO_ARTICLES[lang];
  if (article) {
    const paragraphs = [...article.paragraphs, ...(LOCALIZED_SEO_APPENDIX[lang] || [])];
    return [
      [null, paragraphs.slice(0, 2)],
      [article.headings[0], paragraphs.slice(2, 4)],
      [article.headings[1], paragraphs.slice(4, 6)],
      [article.headings[2], paragraphs.slice(6, 8)],
      [article.headings[3], paragraphs.slice(8, 10)],
      [article.headings[4], paragraphs.slice(10, 12)],
      [article.headings[5], paragraphs.slice(12, 14)],
      [article.headings[6], paragraphs.slice(14)],
    ];
  }
  const facts = EDITORIAL_FACTS[lang];
  // Each fact appears once only.  Do not recycle localized sentences merely to
  // imitate the word count of English: that produces duplicate copy and weakens
  // the guide.  The final paragraph is a policy guardrail, not another fact.
  return [
    [null, [facts[0], facts[1]]],
    [copy.steps[0], [facts[2]]],
    [copy.steps[1], [facts[3]]],
    [copy.steps[2], [facts[4]]],
    [copy.workflow, [facts[5]]],
    [copy.seo, [facts[6]]],
    [copy.categories, [facts[7]]],
    [copy.faq, [`${copy.faqLead} ${copy.note}`]],
  ];
}

function localFaqItems(copy, lang) {
  const facts = EDITORIAL_FACTS[lang];
  const questions = FAQ_QUESTIONS[lang];
  const answers = [
    `${copy.faqLead} ${facts[0]} ${facts[1]} ${copy.note}`,
    `${facts[1]} ${facts[2]} ${copy.note}`,
    `${copy.checkoutLead} ${facts[0]} ${facts[2]} ${copy.note}`,
    `${facts[5]} ${facts[6]} ${copy.note}`,
    `${facts[7]} ${facts[4]} ${copy.note}`,
    `${facts[3]} ${facts[4]} ${copy.note}`,
    `${copy.faqLead} ${facts[7]} ${copy.note}`,
    `${copy.lead} ${copy.categoryLead} ${copy.checkoutLead} ${copy.note}`,
    `${copy.checkoutLead} ${facts[0]} ${facts[6]} ${copy.note}`,
  ];
  return questions.map((question, index) => [question, answers[index]]);
}

function detailedEnglishFaqItems() {
  return [
    ['What does PikoBuy say it does?', 'PikoBuy describes itself as a China shopping and forwarding service. Its public site says shoppers can search products directly or submit a product link, image or sourcing request, then use its purchase and shipping workflow. This spreadsheet is a research layer: it helps keep the item record, images, price context and ID together before you decide whether to use that official workflow.'],
    ['Which marketplaces can I use with PikoBuy?', 'PikoBuy’s home page names Taobao, Weidian and 1688. That names the marketplaces it supports in its public description; it does not mean every listing is available in every situation. A particular item can still depend on the seller, the chosen option and the current order process, so retain the exact link or item ID when comparing records.'],
    ['Can I submit a product link or image instead of searching?', 'Yes. PikoBuy’s official home page says visitors can submit product links, images or sourcing requests. A useful submission identifies the exact variant, size, colour, quantity and question to be checked; an image or general product name alone may describe several different listings.'],
    ['Does PikoBuy inspect items?', 'PikoBuy states that items undergo quality inspection and repacking when they arrive at its China warehouse. Treat that as a checkpoint, not as a guarantee that every preference will be inferred for you. Before purchase, write down the size, colour, included parts and other non-negotiable details, then compare any QC evidence with that exact selection.'],
    ['How does international shipping work?', 'PikoBuy says shoppers can choose a shipping option and parcels are delivered from its China warehouse to the customer’s door. The practical choice should be made from the parcel you actually have: destination rules, route availability, parcel limits, dimensions and estimates can change. Use the current official estimate and policy when the parcel is ready rather than relying on an old price or another shopper’s route.'],
    ['Are the USD prices on this spreadsheet the final PikoBuy price?', 'No. This site converts the live CNY listing price at the disclosed comparison rate of ¥7.20 to $1.00 USD so similar records can be compared in one currency. It is not a checkout quote: seller price changes, selected variants, payment, parcel weight or volume and shipping can all change the final amount.'],
    ['Where can I check refunds, returns or shipping rules?', 'Use PikoBuy’s current official Shipping Policy and Refunds & Returns resources before making a decision. This guide deliberately does not claim a fixed refund window, delivery time or result because terms can depend on the item, seller, route, destination and the current policy. Keep the product record and selected option available when you read those official terms.'],
    ['Does browsing or searching on this site open FindSpreadsheet?', 'No. Search, category links, sorting, product data and image pages use internal routes on this subsite, even when live product information is read from the maintained source catalogue. The outward step is deliberately limited to the final, clearly labelled official PikoBuy purchase action created from the matching Weidian ID.'],
    ['Can I use a Weidian product ID directly?', 'Yes. A numeric Weidian ID identifies the matching product record and the final official PikoBuy item route. Before opening that final step, compare the item title, chosen option, Weidian product images and any available QC originals; an ID identifies a listing, but it does not by itself confirm the variant you intend to buy.'],
  ];
}

async function localizedHome(lang) {
  const copy = siteCopy(lang);
  const categories = (await liveCategories()).map(([name, path], index) => `<a href="${catalogPath(path, lang)}"><small>${String(index + 1).padStart(2, '0')}</small><span class="notranslate">${escapeHtml(name)}</span><small>${escapeHtml(copy.open)} →</small></a>`).join('');
  const quick = [['01', NAV_LABELS[lang][0], '/'], ['02', NAV_LABELS[lang][1], '/categories'], ['03', NAV_LABELS[lang][2], '/product-details'], ['04', NAV_LABELS[lang][3], '/seo-articles'], ['05', NAV_LABELS[lang][4], '/faq']]
    .map(([number, label, href]) => `<a href="${withLang(href, lang)}"><small>${number}</small><strong>${escapeHtml(label)}</strong><small>${escapeHtml(copy.open)} →</small></a>`).join('');
  const guideSections = localGuideSections(copy, lang);
  const guide = guideSections.map(([heading, paragraphs]) => `${heading ? `<h3>${escapeHtml(heading)}</h3>` : ''}${paragraphs.map((text) => `<p>${escapeHtml(text)}</p>`).join('')}`).join('');
  const faqs = localFaqItems(copy, lang).map(([question, answer]) => `<article style="padding:15px;border:1px solid var(--line);border-radius:14px;background:#fff"><strong>${escapeHtml(question)}</strong><p>${escapeHtml(answer)}</p></article>`).join('');
  return shell(`${mainNav(lang, '/', 'home')}<main class="wrap"><section class="hero"><div><p class="eyebrow">PIKOBUY SPREADSHEET</p><h1>PikoBuy Spreadsheet:<br><em>${escapeHtml(copy.hero)}</em></h1><p class="lede">${escapeHtml(copy.lead)}</p></div><div class="searchbox"><p class="eyebrow" style="color:#cbd6ff">${escapeHtml(copy.search)}</p><form action="/search" method="get"><input type="hidden" name="lang" value="${escapeHtml(lang)}"><label for="keywords">${escapeHtml(copy.placeholder)}</label><div class="row"><input id="keywords" name="keywords" placeholder="${escapeHtml(copy.placeholder)}" required><button>${escapeHtml(copy.search)} →</button></div></form><div class="tools"><a href="${catalogPath('/AllProducts/', lang)}"><b>${escapeHtml(copy.browse)}</b><br>${escapeHtml(copy.open)} →</a><a href="${withLang('/seo-articles', lang)}"><b>QC</b><br>${escapeHtml(copy.guide)} →</a></div></div></section><section class="section"><div class="quick-links">${quick}</div></section><section class="section"><p class="eyebrow">PIKOBUY SPREADSHEET</p><h2>${escapeHtml(copy.categories)}</h2><p>${escapeHtml(copy.categoryLead)}</p><div class="categories">${categories}</div></section><section class="section"><p class="eyebrow">PIKOBUY</p><h2>${escapeHtml(copy.checkout)}</h2><div class="panel"><p>${escapeHtml(copy.checkoutLead)}</p></div></section><section class="section"><p class="eyebrow">PIKOBUY SPREADSHEET</p><h2>${escapeHtml(copy.workflow)}</h2><div class="flow">${copy.steps.map((step, index) => `<div><span>0${index + 1}</span><h3>${escapeHtml(step)}</h3><p>${escapeHtml(guideSections[index + 1][1][0])}</p></div>`).join('')}</div></section><section class="section" id="home-seo"><p class="eyebrow">SEO</p><h2>${escapeHtml(copy.seo)}</h2><article class="panel"><div style="max-height:510px;overflow-y:auto;padding-right:12px;scrollbar-color:var(--blue) transparent">${guide}</div><p style="margin:20px 0 0"><a class="buy-piko" href="${withLang('/seo-articles', lang)}">${escapeHtml(copy.guide)} →</a></p></article></section><section class="section" id="home-faq"><p class="eyebrow">FAQ</p><h2>${escapeHtml(copy.faq)}</h2><div class="panel"><div style="max-height:510px;overflow-y:auto;padding-right:12px;scrollbar-color:var(--blue) transparent;display:grid;gap:10px">${faqs}</div><p style="margin:22px 0 0"><a class="buy-piko" href="${withLang('/faq', lang)}">FAQ →</a></p></div></section></main>`, 'PikoBuy Spreadsheet', lang);
}

async function localizedCategoriesPage(lang) {
  const copy = siteCopy(lang);
  const categories = await liveCategories();
  const cards = categories.map(([name, path], index) => `<a class="category-card" href="${catalogPath(path, lang)}" aria-label="${escapeHtml(copy.open)} ${escapeHtml(name)}"><span class="category-card-index">${String(index + 1).padStart(2, '0')}</span><h2 class="notranslate">${escapeHtml(name)}</h2><span class="category-card-cta">${escapeHtml(copy.open)} →</span></a>`).join('');
  const body = `<main class="catalog-wrap"><p class="catalog-kicker">PIKOBUY SPREADSHEET</p><h1 class="page-title">${escapeHtml(copy.categories)}</h1><p class="page-lede">${escapeHtml(copy.categoryLead)}</p><section class="category-card-grid">${cards}</section></main>`;
  return new Response(browsePage(body, `${NAV_LABELS[lang][1]} | PikoBuy Spreadsheet`, lang, '/categories', 'categories'), { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
}

function localizedSeoPage(lang) {
  const copy = siteCopy(lang);
  const sections = localGuideSections(copy, lang).map(([heading, paragraphs]) => `${heading ? `<h3>${escapeHtml(heading)}</h3>` : ''}${paragraphs.map((text) => `<p>${escapeHtml(text)}</p>`).join('')}`).join('');
  const cardHeadline = LOCALIZED_SEO_CARD_HEADLINES[lang] || copy.seo;
  const body = `<main class="catalog-wrap"><p class="catalog-kicker">SEO · PIKOBUY SPREADSHEET</p><h1 class="page-title">${escapeHtml(copy.seo)}</h1><p class="page-lede">${escapeHtml(copy.seoLead)}</p><article class="article-card"><p class="catalog-kicker">PIKOBUY SPREADSHEET · 8 MINUTE READ</p><h2>${escapeHtml(cardHeadline)}</h2>${sections}<a href="${catalogPath('/AllProducts/', lang)}">${escapeHtml(copy.browse)} →</a></article></main>`;
  return new Response(browsePage(body, `${NAV_LABELS[lang][3]} | PikoBuy Spreadsheet`, lang, '/seo-articles', 'seo'), { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
}

function localizedFaqPage(lang) {
  const copy = siteCopy(lang);
  const items = localFaqItems(copy, lang).map(([question, answer]) => `<details><summary>${escapeHtml(question)}</summary><p>${escapeHtml(answer)}</p></details>`).join('');
  const body = `<main class="catalog-wrap"><p class="catalog-kicker">FAQ · PIKOBUY SPREADSHEET</p><h1 class="page-title">${escapeHtml(copy.faq)}</h1><p class="page-lede">${escapeHtml(copy.faqLead)}</p><section class="faq-list" style="margin-top:32px">${items}</section></main>`;
  return new Response(browsePage(body, `FAQ | PikoBuy Spreadsheet`, lang, '/faq', 'faq'), { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
}

async function home(lang = 'en') {
  if (siteCopy(lang)) return localizedHome(lang);
  const labels = NAV_LABELS[langOf(lang)];
  const categories = (await liveCategories()).map(([name, path], index) => `<a href="${catalogPath(path, lang)}"><small>${String(index + 1).padStart(2, '0')}</small>${escapeHtml(name)}<small>Open live catalog →</small></a>`).join('');
  const quick = [['01', labels[0], '/', 'home'], ['02', labels[1], '/categories', 'categories'], ['03', labels[2], '/product-details', 'details'], ['04', labels[3], '/seo-articles', 'seo'], ['05', labels[4], '/faq', 'faq']]
    .map(([number, label, href]) => `<a href="${withLang(href, lang)}"><small>${number} · START HERE</small><strong>${escapeHtml(label)}</strong><small>Open page →</small></a>`).join('');
  const seoPreview = `<section class="section" id="home-seo"><p class="eyebrow">SEO ARTICLE · READ ON HOME</p><h2>How to use PikoBuy for product research, inspection and international shipping.</h2><article class="panel"><div aria-label="SEO article on homepage" style="max-height:510px;overflow-y:auto;padding-right:12px;scrollbar-color:var(--blue) transparent"><p><strong>Start with the product record, then build a buying decision around it.</strong></p><p>Buying from Chinese marketplaces is difficult because there are many near-matches: a similar photo, a shortened seller title, a different material, an unclear size chart, or a listing where an important option is not included. Keep the exact item ID, variant, price, gallery and open questions in one record before payment.</p><h3>1. Define the item before you search</h3><p>Write down the selected size, colour, quantity, material and any non-negotiable feature. Search the product type, seller clue and exact item ID where available. Treat two records as different candidates unless their title, visible options, price and gallery all match.</p><h3>2. Read the listing as evidence</h3><p>Compare the title, product options, material description and images. If an important measurement, accessory or selected option is not shown, record the question instead of assuming it is included. PikoBuy says visitors can submit a product link, image or sourcing request; use that workflow for a specific question.</p><h3>3. Separate item price from final cost</h3><p>This site converts CNY prices to USD at a disclosed comparison rate. It is not a final payment promise: seller changes, selected options, parcel volume, payment and shipping can affect the final total. Check the selected option and current shipping estimate at the time you submit a parcel.</p><h3>4. Use warehouse inspection as a checkpoint</h3><p>PikoBuy says items undergo quality inspection and repacking after arrival at its China warehouse. Compare QC evidence with the option you selected: size, colour, included parts and any visible detail that matters. Inspection is a checkpoint, not a substitute for knowing what you ordered.</p><h3>5. Plan around the parcel you actually have</h3><p>Choose shipping after you understand the parcel rather than relying on an old estimate. Destination rules, carrier restrictions, parcel dimensions and current line availability can change. Use current official policy and estimate information before submission.</p><h3>6. Keep the purchase decision traceable</h3><p>Keep the original product record, ID, selected option, price and image notes together. This homepage article is scrollable for reading; the standalone article remains available as its own page and does not replace this homepage section.</p></div><p style="margin:20px 0 0"><a class="buy-piko" href="${withLang('/seo-articles', lang)}">Open the standalone SEO article →</a></p></article></section>`;
  const homeFaqItems = detailedEnglishFaqItems();
  const faqPreview = `<section class="section" id="home-faq"><p class="eyebrow">FAQ · FULL CONTENT ON HOME</p><h2>Answers before you send an item to checkout.</h2><div class="panel"><div style="max-height:510px;overflow-y:auto;padding-right:12px;scrollbar-color:var(--blue) transparent;display:grid;gap:10px">${homeFaqItems.map(([question, answer]) => `<article style="padding:15px;border:1px solid var(--line);border-radius:14px;background:#fff"><strong>${escapeHtml(question)}</strong><p>${escapeHtml(answer)}</p></article>`).join('')}</div><p style="margin:22px 0 0"><a class="buy-piko" href="${withLang('/faq', lang)}">Open the standalone FAQ →</a></p></div></section>`;
  return shell(`${mainNav(lang, '/', 'home')}<main class="wrap"><section class="hero"><div><p class="eyebrow">PIKOBUY PRODUCT DISCOVERY</p><h1>PikoBuy Spreadsheet:<br><em>find better before you buy.</em></h1><p class="lede">Search, product records, images, QC context and catalog sorting are read live from FindSpreadsheet—but remain inside this PikoBuy Spreadsheet site while you browse.</p></div><div class="searchbox"><p class="eyebrow" style="color:#cbd6ff">SEARCH LIVE DATA</p><form action="/search" method="get"><input type="hidden" name="lang" value="${escapeHtml(lang)}"><label for="keywords">Product, style, seller clue or category</label><div class="row"><input id="keywords" name="keywords" placeholder="e.g. wide-leg denim" required><button>Search →</button></div></form><div class="tools"><a href="${catalogPath('/AllProducts/', lang)}"><b>Browse & sort</b><br>Live catalog in this site →</a><a href="${withLang('/seo-articles', lang)}"><b>QC & image context</b><br>Open the PikoBuy guide →</a></div></div></section><section class="section"><p class="eyebrow">START HERE</p><div class="quick-links">${quick}</div></section><section class="section" id="discover"><p class="eyebrow">LIVE CATEGORY ROUTES</p><h2>Browse product data without leaving this site.</h2><p>Each route loads the relevant, maintained FindSpreadsheet collection through this subsite.</p><div class="categories">${categories}</div></section><section class="section" id="workflow"><p class="eyebrow">OFFICIAL CHECKOUT ROUTE</p><h2>Have a Weidian product ID?</h2><div class="panel"><p>Enter a numeric ID to retain a precise product record while you research. Product pages, images, price conversion and category routes remain inside this site.</p></div></section><section class="section" id="guide"><p class="eyebrow">HOW THIS SITE WORKS</p><h2>Research once. Check twice. Then use the official route.</h2><div class="flow"><div><span>01</span><h3>Search internally</h3><p>Search requests stay on this domain and query the live source catalog server-side.</p></div><div><span>02</span><h3>Open product detail</h3><p>Category and product-detail links are rewritten to internal routes, so browsing remains here.</p></div><div><span>03</span><h3>Checkout officially</h3><p>Only the final purchase action goes to the PikoBuy product page created from your Weidian ID.</p></div></div></section>${seoPreview}${faqPreview}</main>`, 'PikoBuy Spreadsheet', lang);
}

function sourceUrl(path) {
  const candidate = new URL(path, SOURCE_ORIGIN);
  if (candidate.origin !== SOURCE_ORIGIN || candidate.hostname !== SOURCE_HOST) return null;
  return candidate;
}

function isProductPath(pathname) {
  return /^\/[^/]+\/(?:.+-)?\d+\.html$/i.test(pathname);
}

function routeForSource(candidate) {
  const sourcePath = candidate.pathname + candidate.search;
  if (candidate.pathname === '/search.html') return `/search${candidate.search}`;
  if (isProductPath(candidate.pathname)) return productPath(sourcePath);
  return catalogPath(sourcePath);
}

function itemIdFromUrl(value) {
  const match = String(value || '').match(/(?:itemID|productId|weidian)(?:%3D|=)(\d{4,})/i);
  if (match) return match[1];
  try {
    const external = new URL(value);
    const direct = external.searchParams.get('itemID');
    return direct && /^\d{5,}$/.test(direct) ? direct : null;
  } catch {
    return null;
  }
}

function localHref(value) {
  if (!value || value.startsWith('#')) return value || '#';
  if (/^(mailto:|tel:|javascript:)/i.test(value)) return '#';
  const candidate = sourceUrl(value);
  if (candidate) return routeForSource(candidate);
  const id = itemIdFromUrl(value);
  if (id) return `/buy?productId=${encodeURIComponent(id)}`;
  return '#';
}

function decodedValue(value = '') {
  let result = String(value || '').trim();
  for (let index = 0; index < 2; index += 1) {
    try {
      const decoded = decodeURIComponent(result);
      if (decoded === result) break;
      result = decoded;
    } catch {
      break;
    }
  }
  return result;
}

function snapshotProductForReference(...values) {
  const candidates = values.flatMap((value) => {
    const raw = decodedValue(value);
    if (!raw) return [];
    const paths = [raw];
    const source = sourceUrl(raw);
    if (source) paths.push(source.pathname);
    return paths;
  });
  const ids = new Set();
  for (const candidate of candidates) {
    const id = itemIdFromUrl(candidate) || (/^\d{4,}$/.test(candidate) ? candidate : '');
    if (id) ids.add(id);
  }
  return SNAPSHOT_PRODUCTS.find((product) => candidates.includes(product.path))
    || SNAPSHOT_PRODUCTS.find((product) => ids.has(String(product.weidian)) || ids.has(String(product.id)))
    || null;
}

function sourceProductUrlFromReference(...values) {
  for (const value of values) {
    const source = sourceUrl(decodedValue(value));
    if (source && isProductPath(source.pathname)) return source;
  }
  const saved = snapshotProductForReference(...values);
  return saved ? sourceUrl(saved.path) : null;
}

const browseCategories = [
  ['All products', '/AllProducts/'], ['Shoes', '/shoes/'], ['Sweatshirts', '/hoodies-sweaters/'], ['T-Shirts', '/t-shirts/'],
  ['Jackets', '/jackets/'], ['Pants/Shorts', '/pants-shorts/'], ['Headwear', '/headwear/'], ['Accessories', '/accessories/'], ['Jersey', '/jersey/'],
  ['Short Sets', '/ShortSets/'], ['Electronics', '/electronics/'], ['Other Stuff', '/other-stuff/'],
];

function cleanText(value = '') {
  return String(value).replace(/<[^>]*>/g, ' ').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
}

function usdPrice(value = '') {
  const cny = Number(String(value).replace(/[^0-9.]/g, ''));
  return Number.isFinite(cny) && cny > 0 ? (cny / CNY_PER_USD).toFixed(2) : '—';
}

function assetUrl(value = '') {
  const asset = sourceUrl(value);
  return asset ? asset.href : '';
}

function publicImageUrl(value = '') {
  const raw = String(value || '').trim();
  const internal = assetUrl(raw);
  if (internal) return internal;
  try {
    const external = new URL(raw);
    return external.protocol === 'https:' || external.protocol === 'http:' ? external.href : '';
  } catch {
    return '';
  }
}

function parseProducts(html) {
  const products = [];
  const matcher = /<div class="product-card[\s\S]*?data-id="([^"]+)"[\s\S]*?<a href="([^"]+)" class="product-image">[\s\S]*?data-src="([^"]+)" alt="([^"]*)"[\s\S]*?<h3 class="product-name">([\s\S]*?)<\/h3>[\s\S]*?<div class="product-price">([^<]+)</gi;
  for (const hit of html.matchAll(matcher)) {
    const source = sourceUrl(hit[2]);
    if (!source || !isProductPath(source.pathname)) continue;
    const productId = hit[1];
    const cardStart = html.indexOf(`data-id="${productId}"`);
    const cardEnd = html.indexOf('<div class="product-card', cardStart + 1);
    const card = html.slice(cardStart, cardEnd === -1 ? undefined : cardEnd);
    const weidian = cleanText((card.match(/data-cart-weidian="([^"]*)"/i) || [])[1]);
    products.push({
      id: productId, path: source.pathname, image: assetUrl(hit[3]), alt: cleanText(hit[4]), title: cleanText(hit[5]), price: cleanText(hit[6]), weidian,
    });
  }
  return products;
}

function galleryImages(html) {
  const gallerySource = (html.match(/<div class="product-gallery">([\s\S]*?)<!-- Right side product info -->/i) || [])[1] || html;
  const images = [];
  const seen = new Set();
  for (const hit of gallerySource.matchAll(/(?:data-src|src)="([^"]+)"/gi)) {
    const image = assetUrl(hit[1]);
    if (!image || seen.has(image)) continue;
    seen.add(image);
    images.push(image);
  }
  return images;
}

function qcImageUrl(image) {
  if (typeof image === 'string') return publicImageUrl(image);
  if (!image || typeof image !== 'object') return '';
  return publicImageUrl(image.url || image.src || image.imageUrl || image.image || image.originalUrl || image.mirrorUrl || image.path || '');
}

// The source has used more than one product-detail template.  Do not tie the
// buy route to a single visual markup shape: reconcile the visible ID, the
// cart metadata and the canonical Weidian URL from the *same* product page.
function verifiedWeidianIdFromProductHtml(html = '') {
  const source = String(html || '');
  const patterns = [
    // The product page's own purchase control is authoritative.  It is the
    // exact item ID used when the visitor clicks the source buy button.
    /<button\b[^>]*\bdata-cart-add\b[^>]*\bdata-cart-weidian=(?:"|')\s*(\d{5,})/i,
    /<a\b[^>]*\bhref=(?:"|')https?:\/\/(?:www\.)?weidian\.com\/item\.html\?[^"'\s<]*\bitemID=(\d{5,})[^>]*\bweidian-btn\b/i,
    // These retain compatibility with older source templates while still
    // resolving the ID from the same canonical product detail page.
    /data-cart-weidian=(?:"|')\s*(\d{5,})/i,
    /https?:\/\/(?:www\.)?weidian\.com\/item\.html\?[^"'\s<]*\bitemID=(\d{5,})/i,
    /<div[^>]*class=(?:"[^"]*\bproduct-id\b[^"]*"|'[^']*\bproduct-id\b[^']*')[^>]*>[\s\S]{0,240}?\b(?:product\s*)?id\s*[:#]?\s*(\d{5,})/i,
    /\bitemID(?:%3D|=)(\d{5,})/i,
  ];
  for (const pattern of patterns) {
    const match = source.match(pattern);
    if (match && /^\d{5,}$/.test(match[1])) return match[1];
  }
  return '';
}

function allProductPages(html, upstreamUrl) {
  const block = (html.match(/<div class="pagination">([\s\S]*?)<\/div>/i) || [])[1] || '';
  const pages = new Set();
  const sourcePath = upstreamUrl.pathname + upstreamUrl.search;
  const isAllProducts = /^\/AllProducts\/(?:list_\d+_\d+\/)?$/i.test(upstreamUrl.pathname);
  const basePath = upstreamUrl.pathname.replace(/list_\d+_\d+\/$/i, '');
  for (const hit of block.matchAll(/href="([^"]+)"/gi)) {
    const page = sourceUrl(decodeHtmlEntities(hit[1]));
    if (!page) continue;
    if (isAllProducts && /^\/AllProducts\/(?:list_\d+_\d+\/)?$/i.test(page.pathname)) pages.add(page.pathname + page.search);
    if (upstreamUrl.pathname === '/search.html' && page.pathname === '/search.html' && page.searchParams.get('keywords') === upstreamUrl.searchParams.get('keywords')) pages.add(page.pathname + page.search);
    if (!isAllProducts && upstreamUrl.pathname !== '/search.html' && page.pathname.startsWith(basePath) && /\/list_\d+_\d+\/$/i.test(page.pathname)) pages.add(page.pathname + page.search);
  }
  pages.delete(sourcePath);
  return [...pages];
}

function sourceCategoryForPath(path = '') {
  return (String(path).match(/^\/([^/]+)\//) || [])[1] || '';
}

function normalizedSearchText(value = '') {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function matchesSearch(path, keywords = '') {
  const terms = normalizedSearchText(keywords).split(' ').filter(Boolean);
  if (!terms.length) return true;
  const haystack = normalizedSearchText(String(path).replace(/^\//, '').replace(/\.html$/i, ''));
  return terms.every((term) => haystack.includes(term));
}

async function completeLiveProducts() {
  if (!completeLiveProductsPromise) {
    completeLiveProductsPromise = (async () => {
      const rootUrl = sourceUrl('/AllProducts/');
      const rootHtml = await sourceHtml(rootUrl);
      const liveProducts = rootHtml ? await allCatalogProducts(rootHtml, rootUrl) : [];
      // The public All Products page is a newest-items view.  Keep the full,
      // category-by-category imported catalogue as the baseline and layer any
      // currently visible source rows on top of it.  This means a temporary
      // source outage can never turn "All products" into a partial list.
      const byPath = new Map(SNAPSHOT_PRODUCTS.map((product) => [product.path, product]));
      for (const product of liveProducts) byPath.set(product.path, product);
      return [...byPath.values()];
    })();
  }
  return completeLiveProductsPromise;
}

function snapshotProductsForPath(path = '') {
  const category = sourceCategoryForPath(path).toLowerCase();
  if (!category || category === 'allproducts') return SNAPSHOT_PRODUCTS;
  return SNAPSHOT_PRODUCTS.filter((product) => sourceCategoryForPath(product.path).toLowerCase() === category);
}

function internalPageUrl(path, page, lang = 'en', keywords = '') {
  const query = new URLSearchParams();
  if (keywords) query.set('keywords', keywords); else query.set('path', path);
  if (page > 1) query.set('page', String(page));
  if (lang !== 'en') query.set('lang', lang);
  return `${keywords ? '/search' : '/catalog'}?${query.toString()}`;
}

function catalogPager(path, keywords, page, totalPages, lang) {
  if (totalPages < 2) return '';
  const start = Math.max(1, page - 1);
  const end = Math.min(totalPages, page + 1);
  const pages = [];
  if (page > 1) pages.push(`<a href="${internalPageUrl(path, page - 1, lang, keywords)}">←</a>`);
  for (let number = start; number <= end; number += 1) pages.push(`<a${number === page ? ' aria-current="page"' : ''} href="${internalPageUrl(path, number, lang, keywords)}">${number}</a>`);
  if (page < totalPages) pages.push(`<a href="${internalPageUrl(path, page + 1, lang, keywords)}">→</a>`);
  return `<nav class="catalog-pagination" aria-label="Catalog pages">${pages.join('')}</nav>`;
}

async function allCatalogProducts(html, upstreamUrl) {
  const seenPages = new Set([upstreamUrl.pathname + upstreamUrl.search]);
  const pageHtml = [html];
  const queue = allProductPages(html, upstreamUrl);
  while (queue.length && seenPages.size < 60) {
    const batch = queue.splice(0, 4).filter((path) => !seenPages.has(path));
    if (!batch.length) continue;
    batch.forEach((path) => seenPages.add(path));
    const loaded = await Promise.all(batch.map(async (path) => ({ path, html: await sourceHtml(sourceUrl(path)) })));
    for (const page of loaded) {
      if (!page.html) continue;
      pageHtml.push(page.html);
      const pageUrl = sourceUrl(page.path);
      for (const next of allProductPages(page.html, pageUrl)) if (!seenPages.has(next)) queue.push(next);
    }
  }
  // Item IDs are not a safe cross-page dedupe key in every source section.
  // The canonical product path is the stable identity and retains every row.
  const byPath = new Map();
  for (const product of pageHtml.flatMap(parseProducts)) byPath.set(product.path, product);
  return [...byPath.values()];
}

function categoryName(path = '') {
  const slug = String(path).replace(/^\/+|\/+$/g, '');
  const known = {
    'hoodies-sweaters': 'Hoodies & sweaters', 't-shirts': 'T-shirts', 'pants-shorts': 'Pants & shorts',
    jersey: 'Jerseys', AllProducts: 'All products',
  };
  if (known[slug]) return known[slug];
  return slug.split('-').filter(Boolean).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function categoriesFromProducts(products = []) {
  const paths = new Set();
  for (const product of products) {
    const match = String(product.path || '').match(/^\/([^/]+)\//);
    if (match && match[1] !== 'AllProducts') paths.add(match[1]);
  }
  const categories = [...paths]
    .sort((a, b) => categoryName(a).localeCompare(categoryName(b)))
    .map((slug) => [categoryName(slug), `/${slug}/`]);
  return [['All products', '/AllProducts/'], ...categories];
}

function categoriesFromSourceNavigation(html = '') {
  const categories = [];
  const seen = new Set();
  for (const hit of html.matchAll(/<button[^>]*onclick="window\.location\.href='([^']+)'"[^>]*>([\s\S]*?)<\/button>/gi)) {
    const url = sourceUrl(hit[1]);
    if (!url || !/^\/[A-Za-z0-9-]+\/$/.test(url.pathname) || seen.has(url.pathname)) continue;
    seen.add(url.pathname);
    const label = cleanText(hit[2]);
    categories.push([label.toLowerCase() === 'all' ? 'All products' : label, url.pathname]);
  }
  return categories;
}

async function liveCategories() {
  const rootUrl = sourceUrl('/AllProducts/');
  const rootHtml = await sourceHtml(rootUrl);
  if (!rootHtml) return browseCategories;
  const mainNavigation = categoriesFromSourceNavigation(rootHtml);
  if (mainNavigation.length) return mainNavigation;
  const products = await allCatalogProducts(rootHtml, rootUrl);
  const categories = categoriesFromProducts(products);
  return categories.length > 1 ? categories : browseCategories;
}

async function catalogProduct(path) {
  const rootUrl = sourceUrl('/AllProducts/');
  const rootHtml = await sourceHtml(rootUrl);
  if (!rootHtml) return SNAPSHOT_PRODUCTS.find((product) => product.path === path) || null;
  const products = await allCatalogProducts(rootHtml, rootUrl);
  return products.find((product) => product.path === path) || SNAPSHOT_PRODUCTS.find((product) => product.path === path) || null;
}

function browsePage(content, title, lang = 'en', currentPath = '/', active = '') {
  const style = `<style>
    .catalog-wrap{max-width:1240px;margin:auto;padding:56px 24px 78px}.catalog-kicker{font:700 11px ui-monospace,SFMono-Regular,monospace;letter-spacing:.13em;color:var(--blue)}.catalog-head{display:flex;justify-content:space-between;gap:24px;align-items:end;margin-bottom:24px}.catalog-head h1,.page-title{max-width:850px;font-size:clamp(40px,5.5vw,72px);line-height:.92;letter-spacing:-.078em;margin:10px 0}.catalog-head p,.page-lede{max-width:650px;color:#526382}.catalog-search{display:flex;max-width:640px;border:1px solid var(--line);border-radius:16px;background:#fff;padding:7px;box-shadow:0 15px 28px rgba(27,59,128,.1);margin:26px 0 30px}.catalog-search input{flex:1;min-width:0;border:0;padding:12px 13px;font-size:14px;outline:0}.catalog-search button{border:0;border-radius:11px;background:var(--blue);color:white;font-weight:800;padding:0 20px;cursor:pointer}.catalog-search button:hover{background:var(--orange)}.category-chips{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px}.category-chips a{border:1px solid var(--line);border-radius:999px;padding:8px 12px;background:rgba(255,255,255,.72);text-decoration:none;font-size:12px;transition:background .2s,color .2s}.category-chips a:hover{background:var(--blue);border-color:var(--blue);color:#fff}.catalog-sync-note{margin:-4px 0 28px;color:var(--muted);font-size:12px}.product-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}.product-card,.info-card{overflow:hidden;background:#fff;border:1px solid var(--line);border-radius:20px;display:flex;flex-direction:column;box-shadow:0 8px 21px rgba(24,54,120,.06);transition:transform .2s,box-shadow .2s}.product-card:hover,.info-card:hover{transform:translateY(-5px);box-shadow:0 17px 30px rgba(24,54,120,.12)}.product-card>a:first-child{display:block;overflow:hidden;background:#e6ecff}.product-card img{width:100%;aspect-ratio:1/1;object-fit:cover;background:#e6ecff;transition:transform .35s}.product-card:hover img{transform:scale(1.04)}.product-copy,.info-card{padding:15px;display:flex;flex:1;flex-direction:column}.product-copy h2,.info-card h2{font-size:16px;line-height:1.16;letter-spacing:-.038em;margin:0 0 14px}.info-card{min-height:210px;padding:22px}.info-card h2{font-size:22px}.info-card p{color:#586887}.info-card a,.article-card a{display:inline-flex;width:max-content;margin-top:auto;border-radius:11px;background:var(--blue);color:#fff;padding:10px 13px;font-size:13px;font-weight:800;text-decoration:none}.product-meta{display:flex;justify-content:space-between;gap:8px;color:#697897;font:11px ui-monospace,SFMono-Regular,monospace;margin-top:auto}.product-meta span:first-child{color:var(--blue);font-weight:800}.details-link{display:flex;justify-content:space-between;align-items:center;margin-top:15px;text-decoration:none;font-weight:850;border-top:1px solid var(--line);padding-top:11px}.details-link span{color:var(--orange);font-size:18px;line-height:1}.card-buy{display:flex;justify-content:center;align-items:center;margin-top:8px;border-radius:9px;background:var(--orange);color:#fff;padding:8px;text-decoration:none;font-size:10px;font-weight:900}.card-buy:hover{background:#e65c36}.empty{background:#fff;border:1px dashed #9dadd3;border-radius:20px;padding:30px}.detail-layout{display:grid;grid-template-columns:1.06fr .94fr;gap:46px;align-items:start}.detail-media{min-width:0}.media-section{border:1px solid var(--line);border-radius:22px;background:rgba(255,255,255,.74);padding:16px;margin-bottom:18px;box-shadow:0 9px 23px rgba(24,54,120,.05)}.media-section h2{font-size:20px;letter-spacing:-.04em;margin:2px 0 4px}.media-section p{margin:0 0 14px;color:var(--muted);font-size:12px}.listing-preview{margin-top:14px}.listing-main{height:min(66vh,650px);display:grid;place-items:center;overflow:hidden;border:1px solid var(--line);border-radius:16px;background:#f1f4ff}.listing-main-image{width:100%;height:100%;object-fit:contain;display:block}.listing-thumbnails{display:flex;gap:10px;overflow-x:auto;padding:12px 2px 3px;scroll-snap-type:x mandatory}.listing-thumbnails button{flex:0 0 76px;width:76px;height:76px;padding:0;border:2px solid transparent;border-radius:12px;background:#e6ecff;overflow:hidden;cursor:pointer;scroll-snap-align:start}.listing-thumbnails button:first-child{border-color:var(--blue)}.listing-thumbnails button:hover,.listing-thumbnails button:focus-visible{border-color:var(--orange);outline:0}.listing-thumbnails img{display:block;width:100%;height:100%;object-fit:cover}.product-image-scroll{margin-top:20px;padding-top:20px;border-top:1px solid var(--line)}.product-image-scroll h2{margin-bottom:4px}.product-image-stack{display:grid;gap:12px;margin-top:14px}.product-image-stack img{display:block;width:100%;height:auto;max-height:none;object-fit:contain;background:#eef2ff;border-radius:14px}.qc-scroll{display:flex;gap:11px;overflow-x:auto;scroll-snap-type:x mandatory;padding:2px 2px 12px;scrollbar-color:var(--blue) transparent}.qc-scroll figure{flex:0 0 min(76%,330px);margin:0;scroll-snap-align:start}.qc-scroll img{width:100%;aspect-ratio:1;object-fit:cover;background:#e6ecff;border-radius:14px;display:block}.qc-scroll figcaption{font:11px ui-monospace,SFMono-Regular,monospace;color:var(--muted);padding:7px 2px 0}.detail-copy{position:sticky;top:100px;background:rgba(255,255,255,.78);border:1px solid var(--line);border-radius:24px;padding:28px;box-shadow:0 14px 34px rgba(24,54,120,.07)}.detail-copy h1{font-size:clamp(38px,5vw,70px);line-height:.92;letter-spacing:-.075em;margin:8px 0 18px}.detail-copy>p{color:#536482}.price{font-size:31px;letter-spacing:-.05em;color:var(--blue);font-weight:900;margin:19px 0 4px}.buy-piko{display:inline-flex;background:var(--orange);color:#fff;padding:14px 18px;border-radius:12px;text-decoration:none;font-weight:850;box-shadow:0 8px 16px rgba(255,116,72,.24)}.buy-piko:hover{background:#e65c36}.data-note{margin-top:26px;padding:16px;border-radius:14px;background:var(--soft);font-size:13px;color:#50617f}.article-card{max-width:840px;margin:20px auto 0;padding:32px;border:1px solid var(--line);border-radius:24px;background:#fff;box-shadow:0 13px 31px rgba(24,54,120,.07)}.article-card h2{font-size:clamp(28px,4vw,46px);letter-spacing:-.07em;line-height:.98}.article-card p,.article-card li{color:#536482}.faq-list{max-width:900px;display:grid;gap:12px}.faq-list details{padding:18px 20px;border:1px solid var(--line);border-radius:17px;background:#fff}.faq-list summary{font-size:17px;font-weight:850;cursor:pointer}.faq-list p{color:#536482}@media(max-width:880px){.catalog-wrap{padding:36px 16px 55px}.product-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.detail-layout{grid-template-columns:1fr}.detail-copy{position:static}.catalog-head{display:block}}@media(max-width:480px){.product-grid{gap:10px}.product-copy{padding:11px}.product-copy h2{font-size:14px}.catalog-search button{padding:0 14px}.media-section{padding:12px}.listing-main{height:min(58vh,470px)}.listing-thumbnails button{flex-basis:63px;width:63px;height:63px}.qc-scroll figure{flex-basis:84%}}
    .catalog-pagination{display:flex;gap:8px;flex-wrap:wrap;margin:18px 0}.catalog-pagination a{min-width:38px;padding:8px 11px;border:1px solid var(--line);border-radius:10px;background:#fff;text-decoration:none;text-align:center;font-size:12px;font-weight:800}.catalog-pagination a:hover,.catalog-pagination a[aria-current="page"]{background:var(--blue);border-color:var(--blue);color:#fff}.product-grid{grid-template-columns:repeat(8,minmax(0,1fr));gap:8px}.product-card{border-radius:12px}.product-copy{padding:8px}.product-copy h2{font-size:11px;line-height:1.18;margin:0 0 7px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.product-meta{font-size:8px;display:block;line-height:1.35}.product-meta span{display:block}.details-link{font-size:9px;margin-top:7px;padding-top:7px}.details-link span{font-size:13px}@media(max-width:1080px){.product-grid{grid-template-columns:repeat(6,minmax(0,1fr))}}@media(max-width:880px){.product-grid{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(max-width:620px){.product-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.product-copy{padding:10px}.product-copy h2{font-size:13px}.product-meta{font-size:10px}.details-link{font-size:11px}}.media-continuous{padding:0;overflow:hidden}.media-continuous .product-gallery-title{font-size:clamp(26px,4vw,42px);letter-spacing:-.06em;line-height:1.02;margin:0;padding:22px 18px 8px}.media-continuous .product-gallery-source,.media-continuous .oc-title{margin:0;padding:0 18px 14px;color:var(--muted);font:700 10px ui-monospace,SFMono-Regular,monospace;letter-spacing:.11em}.media-continuous .listing-preview{margin:0}.media-continuous .listing-main{border-width:1px 0;border-radius:0}.media-continuous .listing-thumbnails{padding:12px 18px 16px}.media-continuous .qc-original-flow{margin:0;border-top:1px solid var(--line)}.media-continuous .qc-original-flow .oc-title{padding-top:18px;padding-bottom:18px;color:var(--blue);background:rgba(238,242,255,.66)}.media-continuous .product-image-stack{margin:0;gap:0}.media-continuous .product-image-stack img{border-radius:0;background:transparent;width:100%;height:auto;max-height:none;object-fit:contain}.media-continuous .empty{margin:0;border-width:1px 0 0;border-style:dashed;border-radius:0}.category-card-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-top:32px}.category-card{min-height:148px;padding:20px 16px;display:flex;flex-direction:column;justify-content:flex-end;border:1px solid var(--line);border-radius:20px;background:rgba(255,255,255,.9);box-shadow:0 8px 21px rgba(24,54,120,.06);color:var(--ink);text-decoration:none;transition:transform .2s,box-shadow .2s,border-color .2s}.category-card:hover,.category-card:focus-visible{transform:translateY(-3px);border-color:var(--blue);box-shadow:0 16px 28px rgba(24,54,120,.13);outline:0}.category-card-index{font:700 10px ui-monospace,SFMono-Regular,monospace;letter-spacing:.08em;color:var(--blue);margin-bottom:7px}.category-card h2{font-size:17px;letter-spacing:-.04em;line-height:1.08;margin:0}.category-card-cta{margin-top:8px;font:11px ui-monospace,SFMono-Regular,monospace;color:#536482}@media(max-width:880px){.category-card-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:480px){.category-card-grid{gap:10px;margin-top:22px}.category-card{min-height:132px;padding:16px 14px}.category-card h2{font-size:16px}}
  </style>`;
  return shell(`${style}${mainNav(lang, currentPath, active)}${content}`, title, lang);
}

function productCard(product, lang = 'en') {
  const copy = siteCopy(lang);
  const productDetail = productPath(product.path, lang, product.weidian || product.id);
  return `<article class="product-card"><a href="${productDetail}"><img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.alt || product.title)}" loading="lazy"></a><div class="product-copy"><h2 class="notranslate">${escapeHtml(product.title)}</h2><div class="product-meta notranslate"><span>$${usdPrice(product.price)} USD</span><span>${product.weidian ? `ID ${escapeHtml(product.weidian)}` : (copy ? escapeHtml(copy.record) : 'Open product record')}</span></div><a class="details-link" href="${productDetail}">${copy ? escapeHtml(copy.record) : 'View full record'} <span>→</span></a></div></article>`;
}

async function sourceHtml(upstreamUrl, { retry = true } = {}) {
  if (!upstreamUrl) return null;
  const href = upstreamUrl.href || String(upstreamUrl);
  if (sourceHtmlMemory.has(href)) return sourceHtmlMemory.get(href);

  // A transient upstream response must not turn a valid product into a page
  // without its purchase record. Retry once, then let the category fallback
  // recover the matching data-cart-weidian value from FindSpreadsheet.
  for (let attempt = 0; attempt < (retry ? 2 : 1); attempt += 1) {
    try {
      const upstream = await fetch(href, {
        headers: SOURCE_PAGE_HEADERS,
        cache: 'no-store',
      });
      if (!upstream.ok) continue;
      const html = await upstream.text();
      if (html) {
        sourceHtmlMemory.set(href, html);
        return html;
      }
    } catch {
      // The final fallback below keeps the product route usable.
    }
  }
  return null;
}

async function categoryFallbackProduct(upstreamUrl) {
  const saved = SNAPSHOT_PRODUCTS.find((product) => product.path === upstreamUrl.pathname) || null;
  const categorySlug = upstreamUrl.pathname.split('/').filter(Boolean)[0];
  const categoryUrl = categorySlug ? sourceUrl(`/${categorySlug}/`) : null;
  if (!categoryUrl) return saved;

  const categoryHtml = await sourceHtml(categoryUrl);
  if (!categoryHtml) return saved;
  const firstPageMatch = parseProducts(categoryHtml).find((product) => product.path === upstreamUrl.pathname);
  if (firstPageMatch?.weidian) return { ...saved, ...firstPageMatch };

  // Older records may be on a numbered source page.  This runs only after
  // the direct product record could not be loaded; regular detail pages stay
  // a single main-site lookup.
  const categoryProducts = await allCatalogProducts(categoryHtml, categoryUrl);
  const pagedMatch = categoryProducts.find((product) => product.path === upstreamUrl.pathname);
  return pagedMatch ? { ...saved, ...pagedMatch } : saved;
}

async function qcImages(itemId) {
  if (!/^\d{5,}$/.test(String(itemId))) return [];
  try {
    const response = await fetch(`${SOURCE_ORIGIN}/qcradar-qc.php?item=${encodeURIComponent(itemId)}`, { headers: { accept: 'application/json' } });
    if (!response.ok) return [];
    const data = await response.json();
    if (!Array.isArray(data?.images)) return [];
    const seen = new Set();
    // Keep every QC original returned for this exact Weidian item ID.  The
    // lower image record is intentionally not paged or truncated.
    return data.images.map(qcImageUrl).filter((image) => image && !seen.has(image) && seen.add(image));
  } catch {
    return [];
  }
}

function decodeHtmlEntities(value = '') {
  return String(value)
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number.parseInt(code, 10)))
    .replace(/&quot;/gi, '"').replace(/&amp;/gi, '&').replace(/&lt;/gi, '<').replace(/&gt;/gi, '>');
}

function weidianImagesFromHtml(html = '') {
  const encoded = (String(html).match(/id="__rocker-render-inject__"[^>]*data-obj="([^"]+)"/i) || [])[1];
  if (!encoded) return [];
  try {
    const data = JSON.parse(decodeHtmlEntities(encoded));
    const images = data?.result?.default_model?.item_info?.imgs;
    return Array.isArray(images) ? images.map(publicImageUrl).filter(Boolean).slice(0, 30) : [];
  } catch {
    return [];
  }
}

async function weidianProductImages(itemId) {
  if (!/^\d{5,}$/.test(String(itemId))) return [];
  try {
    const response = await fetch(`https://weidian.com/item.html?itemID=${encodeURIComponent(itemId)}`, {
      headers: {
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'accept-language': 'en-US,en;q=0.9',
        'user-agent': 'Mozilla/5.0 (compatible; PikoBuySpreadsheetImageReader/1.0; +https://findspreadsheet.com/)',
      },
    });
    if (!response.ok) return [];
    return weidianImagesFromHtml(await response.text());
  } catch {
    return [];
  }
}

async function renderCatalog(upstreamUrl, keywords = '', lang = 'en', currentPath = '/catalog', requestedPage = 1) {
  const copy = siteCopy(lang);
  const html = await sourceHtml(upstreamUrl);
  const isAllProducts = /^\/AllProducts\/(?:list_\d+_\d+\/)?$/i.test(upstreamUrl.pathname);
  const category = sourceCategoryForPath(upstreamUrl.pathname);
  const fallbackHeading = keywords
    ? `Search results for “${keywords}”`
    : isAllProducts ? 'All China spreadsheet product finds' : `${categoryName(category)} spreadsheet finds`;
  const sourceHeading = cleanText((html && html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1]) || fallbackHeading;
  const sourceDescription = cleanText((html && html.match(/<div class="page-header">[\s\S]*?<p>([\s\S]*?)<\/p>/i) || [])[1]) || 'Browse the complete imported main-site product catalogue, compare estimated USD prices and open the exact item record inside this site.';
  const heading = copy ? (keywords ? `${copy.search}: ${keywords}` : copy.categories) : sourceHeading;
  const description = copy ? copy.categoryLead : sourceDescription;
  let indexedProducts = [];
  if (!keywords) {
    if (isAllProducts) {
      indexedProducts = await completeLiveProducts();
    } else {
      // A category route must read its own complete source pagination.  It
      // must never fall back to a mixed All Products list.
      const categoryLiveProducts = html ? await allCatalogProducts(html, upstreamUrl) : [];
      const byPath = new Map(snapshotProductsForPath(upstreamUrl.pathname).map((product) => [product.path, product]));
      for (const product of categoryLiveProducts) byPath.set(product.path, product);
      indexedProducts = [...byPath.values()].filter((product) => sourceCategoryForPath(product.path).toLowerCase() === category.toLowerCase());
    }
  }
  if (keywords) {
    const sourceSearchProducts = html ? await allCatalogProducts(html, upstreamUrl) : [];
    const fallbackProducts = sourceSearchProducts.length ? [] : await completeLiveProducts();
    indexedProducts = sourceSearchProducts.length ? sourceSearchProducts : fallbackProducts.filter((product) => matchesSearch(`${product.title} ${product.id} ${product.path}`, keywords));
  }
  if (!indexedProducts.length && !keywords) indexedProducts = snapshotProductsForPath(upstreamUrl.pathname);
  const total = indexedProducts.length;
  const totalPages = Math.max(1, Math.ceil(total / CATALOG_PAGE_SIZE));
  const page = Math.min(Math.max(Number.parseInt(requestedPage, 10) || 1, 1), totalPages);
  const products = indexedProducts.slice((page - 1) * CATALOG_PAGE_SIZE, page * CATALOG_PAGE_SIZE);
  const cards = products.length ? products.map((product) => productCard(product, lang)).join('') : `<div class="empty">${escapeHtml(copy ? copy.categories : 'No matching products were found. Try another product name or browse a category.')}</div>`;
  const chips = (await liveCategories()).map(([name, path]) => `<a href="${catalogPath(path, lang)}">${escapeHtml(name)}</a>`).join('');
  const pager = catalogPager(upstreamUrl.pathname, keywords, page, totalPages, lang);
  const rangeNote = copy ? `${products.length ? ((page - 1) * CATALOG_PAGE_SIZE) + 1 : 0}–${Math.min(page * CATALOG_PAGE_SIZE, total)} / ${total}` : `All main-site pages are imported. Showing ${products.length ? ((page - 1) * CATALOG_PAGE_SIZE) + 1 : 0}–${Math.min(page * CATALOG_PAGE_SIZE, total)} on this internal page.`;
  const body = `<main class="catalog-wrap"><p class="catalog-kicker">PIKOBUY SPREADSHEET</p><section class="catalog-head"><div><h1>${escapeHtml(heading)}</h1><p>${escapeHtml(description)}</p></div></section><form class="catalog-search" action="/search" method="get"><input type="hidden" name="lang" value="${escapeHtml(lang)}"><input name="keywords" value="${escapeHtml(keywords)}" placeholder="${escapeHtml(copy ? copy.placeholder : 'Search a product name or product ID')}" required><button>${escapeHtml(copy ? copy.search : 'Search')} →</button></form><p class="catalog-kicker">¥${CNY_PER_USD.toFixed(2)} = $1.00 USD</p><nav class="category-chips">${chips}</nav><p class="catalog-sync-note">${escapeHtml(copy ? copy.categories : `${total} current product records imported from the complete public main-site catalogue.`)} · ${rangeNote}</p>${pager}<section class="product-grid">${cards}</section>${pager}</main>`;
  return new Response(browsePage(body, `${heading} | PikoBuy Spreadsheet`, lang, currentPath), { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
}

async function renderProduct(upstreamUrl, lang = 'en', currentPath = '/product', savedProduct = null) {
  const copy = siteCopy(lang);
  const html = await sourceHtml(upstreamUrl);
  // The direct source detail is authoritative.  If it has a short-lived
  // upstream failure, look up the same product in its source category, where
  // FindSpreadsheet exposes the exact purchase button metadata as well.
  const categoryFallback = !html && upstreamUrl ? await categoryFallbackProduct(upstreamUrl) : null;
  // The imported catalogue is a durable product-detail fallback.  It is used
  // for an unavailable source request and also fills any field an older live
  // detail template does not expose (notably its Weidian purchase ID).
  const fallback = { ...(savedProduct || {}), ...(categoryFallback || {}) };
  if (!html && !fallback.path && !fallback.weidian) return new Response(browsePage(`<main class="catalog-wrap"><div class="empty"><h1>${escapeHtml(copy ? copy.record : 'Product temporarily unavailable')}</h1></div></main>`, 'PikoBuy Spreadsheet', lang, currentPath), { status: 502, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
  const title = cleanText((html && html.match(/<h1 class="product-title">([\s\S]*?)<\/h1>/i) || [])[1]) || fallback?.title || 'Product details';
  const id = verifiedWeidianIdFromProductHtml(html) || fallback.weidian || '';
  const price = cleanText((html && html.match(/<div class="product-price">([^<]+)</i) || [])[1]) || fallback?.price || '';
  const listingImages = await weidianProductImages(id);
  const qc = await qcImages(id);
  const mainSiteImages = (html ? galleryImages(html) : [fallback.image]).filter(Boolean).slice(0, 24);
  // The top viewer is deliberately limited to the matching Weidian images.
  // If Weidian does not return public images, retain the source-gallery image
  // as an honest fallback instead of substituting QC images into that viewer.
  const topImages = listingImages.length ? listingImages : mainSiteImages;
  const weidianGallery = topImages.length
    ? `<h1 class="product-gallery-title notranslate">${escapeHtml(title)}</h1><p class="product-gallery-source">WEIDIAN PRODUCT IMAGES · SELECT A THUMBNAIL</p><div class="listing-preview" aria-label="Weidian product images"><div class="listing-main"><img class="listing-main-image" src="${escapeHtml(topImages[0])}" alt="${escapeHtml(title)} Weidian product image 1" loading="eager"></div><div class="listing-thumbnails" aria-label="Weidian product thumbnails">${topImages.map((image, index) => `<button type="button" aria-label="Weidian image ${index + 1}" data-image="${escapeHtml(image)}" onclick="const viewer=this.closest('.listing-preview').querySelector('.listing-main-image');viewer.src=this.dataset.image;viewer.alt=this.getAttribute('aria-label');this.parentElement.querySelectorAll('button').forEach((button)=>button.style.borderColor='transparent');this.style.borderColor='var(--blue)'"><img src="${escapeHtml(image)}" alt="" loading="${index ? 'lazy' : 'eager'}"></button>`).join('')}</div></div>`
    : `<h1 class="product-gallery-title notranslate">${escapeHtml(title)}</h1><div class="empty">${escapeHtml(copy ? copy.record : 'The public Weidian product images are temporarily unavailable for this item.')}</div>`;
  // The QC feed is queried by the exact Weidian item ID.  When that feed has
  // no separate record, retain this item's own Weidian image set below the
  // viewer instead of showing an empty QC section or mixing in other products.
  const lowerQcImages = qc.length ? qc : listingImages;
  const qcGallery = lowerQcImages.length
    ? `<section class="qc-original-flow" aria-label="OC image collection and QC originals"><p class="oc-title">OC IMAGE COLLECTION · QC ORIGINAL IMAGES</p><div class="product-image-stack">${lowerQcImages.map((image, index) => `<img src="${escapeHtml(image)}" alt="${escapeHtml(title)} QC original image ${index + 1}" loading="${index ? 'lazy' : 'eager'}">`).join('')}</div></section>`
    : `<section class="qc-original-flow"><p class="oc-title">OC IMAGE COLLECTION · QC ORIGINAL IMAGES</p><div class="empty">${escapeHtml(copy ? copy.record : 'No public QC images are currently linked to this exact item.')}</div></section>`;
  const purchase = /^\d{5,}$/.test(String(id)) ? `<p style="margin:20px 0 0"><a class="buy-piko" href="/buy?productId=${encodeURIComponent(id)}">Open official PikoBuy purchase ↗</a></p>` : '';
  const body = `<main class="catalog-wrap"><p class="catalog-kicker">${copy ? 'PIKOBUY SPREADSHEET · WEIDIAN · QC' : 'PRODUCT DETAIL · WEIDIAN & QC IMAGE RECORD'}</p><p><a href="${catalogPath('/AllProducts/', lang)}">← ${escapeHtml(copy ? copy.back : 'Back to all products')}</a></p><section class="detail-layout"><div class="detail-media"><section class="media-section media-continuous"><div class="product-image-continuum">${weidianGallery}${qcGallery}</div></section></div><div class="detail-copy"><p>${escapeHtml(copy ? copy.source : 'Live item data from the maintained catalog.')}</p><div class="price notranslate">$${usdPrice(price)} USD</div><p>${escapeHtml(copy ? copy.converted : 'Converted from')} ¥${escapeHtml(price)} CNY · ¥${CNY_PER_USD.toFixed(2)} = $1.00 USD.</p><p class="notranslate">ID: <strong>${escapeHtml(id || '—')}</strong></p><div class="data-note"><strong>${escapeHtml(copy ? copy.before : 'Before purchase:')}</strong> ${escapeHtml(copy ? copy.note : 'review the Weidian product images, then continue down the same image record through the QC originals before using the official PikoBuy route.')}</div>${purchase}</div></section></main>`;
  return new Response(browsePage(body, `${title} | PikoBuy Spreadsheet`, lang, currentPath), { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
}

async function categoriesPage(lang) {
  if (siteCopy(lang)) return localizedCategoriesPage(lang);
  const categories = await liveCategories();
  const cards = categories.map(([name, path], index) => `<a class="category-card" href="${catalogPath(path, lang)}" aria-label="Open ${escapeHtml(name)} catalog"><span class="category-card-index">${String(index + 1).padStart(2, '0')}</span><h2>${escapeHtml(name)}</h2><span class="category-card-cta">Open live catalog →</span></a>`).join('');
  const body = `<main class="catalog-wrap"><p class="catalog-kicker">PRODUCT CATEGORIES</p><h1 class="page-title">Browse every category from one internal catalogue.</h1><p class="page-lede">Choose a category to open its own searchable, sortable product view. Every category link stays inside PikoBuy Spreadsheet.</p><section class="category-card-grid">${cards}</section></main>`;
  return new Response(browsePage(body, 'Product categories | PikoBuy Spreadsheet', lang, '/categories', 'categories'), { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
}

async function productDetailsPage(lang) {
  // The navigation page is a real product index, not a static explanation.
  // Every card opens the matching complete product record; cards that already
  // carry the main-site purchase ID also expose the official purchase action.
  return renderCatalog(sourceUrl('/AllProducts/'), '', lang, '/product-details');
}

function seoArticlesPage(lang) {
  if (siteCopy(lang)) return localizedSeoPage(lang);
  const body = `<main class="catalog-wrap"><p class="catalog-kicker">SEO ARTICLES · BUYING GUIDE</p><h1 class="page-title">How to use PikoBuy for product research, inspection and international shipping.</h1><p class="page-lede">A practical, fact-checked guide to making better decisions before you submit a product for purchase.</p><article class="article-card"><p class="catalog-kicker">PIKOBUY SPREADSHEET · 8 MINUTE READ</p><h2>Start with the product record, then build a buying decision around it.</h2><p>Buying from Chinese marketplaces is rarely difficult because there are too few choices. It is difficult because there are too many near-matches: a similar product photo, a shortened seller title, a different material, an unclear size chart, or a listing that is cheap only because an important option is not included. A useful PikoBuy workflow begins before payment. The goal is to turn a product idea into a record you can check: the exact link or item ID, the variant, the price, the available images and the questions that still need an answer.</p><p>PikoBuy describes itself as a China shopping and forwarding service. Its official home page says shoppers can search products directly, submit product links, images or sourcing requests, and buy from marketplaces including Taobao, Weidian and 1688. That matters because each starting point requires a different level of certainty. A direct item link is normally the cleanest option when you already know the seller. An image or sourcing request is more exploratory; it can help when you know the look you want but do not yet have a verified listing. Neither route removes the need to check product details before an order is placed.</p><h3>1. Define the item before you search</h3><p>Write down the decision you are trying to make. “Black jacket” is a browsing idea, not a purchasing brief. “Black nylon jacket, men’s medium, zip closure, no logo preference, budget before shipping” is much easier to compare. Add the information that would make you reject a listing: wrong fabric, missing measurements, a different colourway, an unclear seller image, or a price that leaves no room for shipping. This prevents a familiar mistake: choosing an item from the first attractive thumbnail and discovering the key difference only after it reaches a warehouse.</p><p>Use several search paths. Search the product type, a seller clue, a distinctive material or construction detail, and the exact item ID if you have one. On a spreadsheet site, the important point is not to search once; it is to create a short comparison set. Save two or three plausible records and check whether the title, visible variants, price and gallery actually refer to the same thing. If they do not, treat them as different candidates rather than assuming one is a cheaper version of another.</p><h3>2. Read the listing as evidence, not advertising</h3><p>Photos are valuable, but they are not enough on their own. Look for consistency between the title, product options, material description and image sequence. A good habit is to identify the product’s non-negotiables first: size, colour, quantity, included accessories and the exact option selected. Then note what is not stated. If a measurement chart is missing, if the product name is vague, or if the photos do not show the part you care about, leave yourself a question rather than turning an assumption into a fact.</p><p>PikoBuy’s official site says it can help confirm product details and proceed with the purchase process after a shopper searches directly or submits a link, image or sourcing request. Use that step for concrete questions. A useful request is specific: ask whether a selected option is available, whether the listing price applies to the chosen variant, or whether the seller’s description includes a requested size. A weak request—“is this good?”—cannot produce a dependable answer. The more precise your item record is, the more useful the confirmation step can be.</p><h3>3. Separate the item price from the final cost</h3><p>An item’s visible listing price is only one input to the final decision. This site displays live source prices in CNY and shows an estimated USD equivalent using a disclosed ¥7.20 to $1.00 USD conversion. That conversion is useful for comparing records in one currency, but it is not a promise of the final charged amount. Sellers can change a price, the selected option can cost more than the base listing, and the payment or shipping stage can introduce separate charges.</p><p>Think in layers. First, decide whether the item itself is worth buying at the listing price. Second, estimate how it may affect the rest of the parcel: size, weight, packaging volume and whether it needs protection. Third, leave margin for the shipping option you eventually choose. This is especially useful for low-value but bulky products. A cheap item can still be a poor choice if it creates disproportionate parcel volume. Conversely, combining several compatible items can make the shipment easier to plan, but only if you are comfortable with the total value and contents of that parcel.</p><h3>4. Use warehouse inspection as a decision checkpoint</h3><p>According to PikoBuy’s official home page, items undergo quality inspection and repacking after they arrive at its China warehouse. That is a meaningful checkpoint, but it should not be treated as a guarantee that every subjective preference will be resolved automatically. Inspection can help reveal whether the received item appears to match the order, yet you should still know what you need to verify. Before ordering, write a compact checklist: selected size or variant, colour, visible logo or print placement if relevant, included parts, and any feature that cannot be inferred from a single seller image.</p><p>When photos or inspection information become available, compare them with the exact option you selected—not with a generic promotional image. Ask yourself whether the discrepancy is material. A small difference in lighting may not matter. A wrong size, missing accessory, altered construction or different colour may matter a great deal. The value of an inspection step is that it gives you information while the item is still in the warehouse workflow, rather than after an international shipment has already been sent.</p><h3>5. Plan shipping around the parcel you actually have</h3><p>PikoBuy says shoppers can choose a shipping option and have parcels delivered from its China warehouse to their door. The practical lesson is to make a shipping decision after you understand the parcel, not before. A line that works well for one country, value range or parcel shape may be a poor fit for another. Check the destination, current estimate, parcel limits and the information required for your order. Do not rely on an old forum screenshot or another shopper’s route as if it were a current quote.</p><p>Keep declarations and destination requirements accurate. Customs rules, import tax treatment and carrier restrictions differ by destination and can change. This guide does not give tax or legal advice. For a real order, use the current shipping estimate and policy information shown by PikoBuy at the time you submit the parcel. PikoBuy’s website provides shipping-policy and shipping-estimate resources; those current official pages should take priority over any general guidance.</p><h3>6. Keep a clean record from search to checkout</h3><p>The reason to use an internal spreadsheet view is simple: research should not fragment your attention. Keep the product link, item ID, option, price, screenshots or gallery notes, and any open question together. When you are satisfied, use the official PikoBuy product route for the final purchasing step. This site deliberately keeps search, category browsing, product photos and price comparison inside the subsite; the outward jump happens only when you decide to open the corresponding official PikoBuy product page.</p><p>That separation is good discipline. It stops a browse session from becoming an impulsive checkout session. It also makes it easier to revisit a record later, compare a different seller or remove an item from a plan without losing the original evidence. A careful buyer is not someone who never makes a mistake. It is someone who makes the important decisions—item identity, option, price tolerance, inspection checklist and shipping plan—before the purchase becomes hard to change.</p><h3>What PikoBuy can and cannot answer for you</h3><p>PikoBuy’s public site presents a workflow of product discovery, buy-for-me ordering, warehouse inspection/repacking and global shipping. Those are the facts this guide relies on. It does not claim a fixed delivery time, a universal refund outcome, a particular inspection-photo count, a customs result or a guaranteed seller response, because those outcomes depend on the item, seller, destination, selected line and the current policy. Use the official shipping, refund and returns resources for the latest terms before placing or shipping an order.</p><a href="${catalogPath('/AllProducts/', lang)}">Browse the internal catalogue →</a></article></main>`;
  return new Response(browsePage(body, 'SEO articles | PikoBuy Spreadsheet', lang, '/seo-articles', 'seo'), { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
}

function faqPage(lang) {
  if (siteCopy(lang)) return localizedFaqPage(lang);
  const faqs = detailedEnglishFaqItems().map(([question, answer]) => `<details><summary>${escapeHtml(question)}</summary><p>${escapeHtml(answer)}</p></details>`).join('');
  const body = `<main class="catalog-wrap"><p class="catalog-kicker">FAQ · FACT-CHECKED WORKFLOW</p><h1 class="page-title">Clear answers before you purchase.</h1><p class="page-lede">These answers use PikoBuy’s published workflow for product discovery, purchase assistance, warehouse inspection/repacking and international shipping. Where policy or price can change, the answer points you back to the current official resource.</p><section class="faq-list" style="margin-top:32px">${faqs}</section></main>`;
  return new Response(browsePage(body, 'FAQ | PikoBuy Spreadsheet', lang, '/faq', 'faq'), { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const lang = langOf(url.searchParams.get('lang'));
    if (url.pathname === '/') return new Response(await home(lang), { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
    if (url.pathname === '/categories') return categoriesPage(lang);
    if (url.pathname === '/product-details') return productDetailsPage(lang);
    if (url.pathname === '/seo-articles') return seoArticlesPage(lang);
    if (url.pathname === '/faq') return faqPage(lang);
    if (url.pathname === '/robots.txt') return new Response('User-agent: *\nAllow: /\nSitemap: https://pikobuysheet.pro/sitemap.xml\n', { headers: { 'content-type': 'text/plain; charset=utf-8' } });
    if (url.pathname === '/sitemap.xml') return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://pikobuysheet.pro/</loc><priority>1.0</priority></url><url><loc>https://pikobuysheet.pro/categories</loc><priority>0.9</priority></url><url><loc>https://pikobuysheet.pro/product-details</loc><priority>0.8</priority></url><url><loc>https://pikobuysheet.pro/seo-articles</loc><priority>0.8</priority></url><url><loc>https://pikobuysheet.pro/faq</loc><priority>0.7</priority></url><url><loc>https://pikobuysheet.pro/catalog?path=%2FAllProducts%2F</loc><priority>0.8</priority></url></urlset>', { headers: { 'content-type': 'application/xml; charset=utf-8' } });
    if (url.pathname === '/buy') {
      let productId = url.searchParams.get('productId') || '';
      const localProduct = snapshotProductForReference(productId, url.searchParams.get('path'), url.searchParams.get('productUrl'));
      if (localProduct?.weidian) productId = localProduct.weidian;
      if (!/^\d{5,}$/.test(productId)) {
        const upstream = sourceProductUrlFromReference(url.searchParams.get('path'), url.searchParams.get('productUrl'), productId);
        if (upstream && isProductPath(upstream.pathname)) {
          const detailHtml = await sourceHtml(upstream);
          const fallback = detailHtml ? snapshotProductForReference(upstream.pathname) : await categoryFallbackProduct(upstream);
          productId = verifiedWeidianIdFromProductHtml(detailHtml) || fallback?.weidian || '';
        }
      }
      if (!/^\d{5,}$/.test(productId)) return Response.redirect(new URL('/', url), 302);
      return Response.redirect(`https://www.pikobuy.com/product/detail?productUrl=https://weidian.com/item.html?itemID=${productId}`, 302);
    }
    if (url.pathname === '/search') {
      const keywords = url.searchParams.get('keywords') || '';
      const upstream = sourceUrl(`/search.html?keywords=${encodeURIComponent(keywords)}`);
      return renderCatalog(upstream, keywords, lang, `${url.pathname}${url.search}`, url.searchParams.get('page'));
    }
    if (url.pathname === '/catalog') {
      const upstream = sourceUrl(url.searchParams.get('path') || '/AllProducts/');
      if (!upstream) return new Response(home(lang), { status: 400, headers: { 'content-type': 'text/html; charset=utf-8' } });
      return renderCatalog(upstream, '', lang, `${url.pathname}${url.search}`, url.searchParams.get('page'));
    }
    if (url.pathname === '/product') {
      const path = url.searchParams.get('path') || url.searchParams.get('productPath') || '';
      const productUrl = url.searchParams.get('productUrl') || '';
      const productId = url.searchParams.get('productId') || url.searchParams.get('itemID') || url.searchParams.get('id') || '';
      const requestedItemId = itemIdFromUrl(productUrl) || (/^\d{5,}$/.test(productId) ? productId : '');
      const saved = snapshotProductForReference(path, productUrl, productId)
        || (requestedItemId ? { id: requestedItemId, weidian: requestedItemId, title: `Weidian item ${requestedItemId}`, price: '', image: '' } : null);
      const upstream = sourceProductUrlFromReference(path, productUrl, productId);
      if (!upstream || !isProductPath(upstream.pathname)) {
        // Preserve an internal detail page for a recognised seller record
        // even when an older link supplies only its numeric item ID.
        if (saved) return renderProduct(sourceUrl(saved.path), lang, `${url.pathname}${url.search}`, saved);
        return new Response(home(lang), { status: 400, headers: { 'content-type': 'text/html; charset=utf-8' } });
      }
      return renderProduct(upstream, lang, `${url.pathname}${url.search}`, saved);
    }
    return new Response('Not found', { status: 404 });
  },
};
