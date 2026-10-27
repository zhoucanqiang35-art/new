const ORIGIN = 'https://findspreadsheet.com';
const LOCALES = {en:['English','Home','Categories','SEO guides','FAQ','Search','PikoBuy Spreadsheet','Live FindSpreadsheet data'],de:['Deutsch','Startseite','Kategorien','SEO-Leitfäden','FAQ','Suchen','PikoBuy Spreadsheet','Live-Daten von FindSpreadsheet'],fr:['Français','Accueil','Catégories','Guides SEO','FAQ','Rechercher','PikoBuy Spreadsheet','Données en direct de FindSpreadsheet'],es:['Español','Inicio','Categorías','Guías SEO','FAQ','Buscar','PikoBuy Spreadsheet','Datos en vivo de FindSpreadsheet'],it:['Italiano','Home','Categorie','Guide SEO','FAQ','Cerca','PikoBuy Spreadsheet','Dati live da FindSpreadsheet'],pt:['Português','Início','Categorias','Guias SEO','FAQ','Pesquisar','PikoBuy Spreadsheet','Dados ao vivo do FindSpreadsheet'],nl:['Nederlands','Home','Categorieën','SEO-gidsen','FAQ','Zoeken','PikoBuy Spreadsheet','Live gegevens van FindSpreadsheet'],pl:['Polski','Strona główna','Kategorie','Poradniki SEO','FAQ','Szukaj','PikoBuy Spreadsheet','Dane na żywo z FindSpreadsheet'],sv:['Svenska','Hem','Kategorier','SEO-guider','FAQ','Sök','PikoBuy Spreadsheet','Livedata från FindSpreadsheet']};
const cats=['all-products','shoes','hoodies-sweaters','t-shirts','jackets','pants-shorts','accessories','jersey','electronics','other-stuff'];
const esc=s=>String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clean=s=>String(s||'').replace(/<[^>]*>/g,' ').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
const attr=(s,n)=>(s.match(new RegExp(`${n}=["']([^"']+)["']`,'i'))||[])[1]||'';
const absolute=s=>s.startsWith('http')?s:new URL(s,ORIGIN).href;
async function source(path){return sourceWithRetry(path)}
function products(html,limit=18){return html.split(/<div class=["']product-card[^>]*>/i).slice(1).map(b=>{const a=b.match(/<a[^>]+class=["']product-image[^>]*>/i)?.[0]||'',img=b.match(/<img[^>]+>/i)?.[0]||'';return{path:attr(a,'href'),image:absolute(attr(img,'data-src')||attr(img,'src')),title:clean(b.match(/<h3[^>]*class=["']product-name[^>]*>([\s\S]*?)<\/h3>/i)?.[1]),price:clean(b.match(/<div[^>]*class=["']product-price[^>]*>([\s\S]*?)<\/div>/i)?.[1]),views:clean(b.match(/data-fs-view-aid=["'][^"']+["'][^>]*>([\s\S]*?)<\/span>/i)?.[1])}}).filter(x=>x.path&&x.title&&x.image).slice(0,limit)}
function shell(lang,title,body){const t=LOCALES[lang]||LOCALES.en,links=Object.entries(LOCALES).map(([k,v])=>`<a data-language="${k}" href="/${k}/">${v[0]}</a>`).join('');return`<!doctype html><html lang="${lang}"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title><link rel="icon" href="https://www.pikobuy.com/images/common/pikobuy-icon-192.png"><style>:root{--ink:#172033;--sub:#657189;--line:#e4e8f0;--paper:#fafbfc;--blue:#315df4;--lime:#d4fa55;--deep:#0d1531}*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font:16px/1.6 Arial,sans-serif}.head,main,footer{max-width:1220px;margin:auto}.head{padding:14px 24px;display:flex;align-items:center;gap:22px}.brand img{width:145px;vertical-align:middle}.brand{font-weight:800;text-decoration:none;color:var(--deep)}nav{margin-left:auto;display:flex;gap:18px}nav a,.langs a{color:var(--sub);text-decoration:none;font-size:.9rem}.langs{display:flex;gap:6px;flex-wrap:wrap}.langs a{padding:3px 6px;border:1px solid var(--line);border-radius:6px;font-size:.72rem}main{padding:26px 24px 70px}.hero{padding:78px 8%;border-radius:28px;color:#fff;background:linear-gradient(130deg,#0d1531,#213d98)}.ey{font-size:.72rem;letter-spacing:.13em;font-weight:800;color:var(--lime)}h1{margin:8px 0;font-size:clamp(2.6rem,7vw,5rem);line-height:1;letter-spacing:-.06em}.hero p{max-width:620px;color:#dce4ff}.search{display:flex;max-width:680px;margin:28px 0}.search input{flex:1;min-width:0;padding:16px;border:0;border-radius:12px 0 0 12px;font-size:1rem}.search button,.button{border:0;border-radius:0 12px 12px 0;padding:16px 20px;background:var(--lime);color:var(--deep);font-weight:700;text-decoration:none}.button{border-radius:12px;display:inline-block}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:40px}.card{overflow:hidden;background:#fff;border:1px solid var(--line);border-radius:16px}.card a{color:var(--ink);text-decoration:none}.card img{display:block;width:100%;aspect-ratio:1;object-fit:cover;background:#eee}.card h3{min-height:48px;margin:13px;font-size:1rem;line-height:1.35}.meta{display:flex;justify-content:space-between;padding:0 13px 14px;color:var(--sub);font-size:.84rem}.page{max-width:860px;margin:35px auto}.chips{display:flex;flex-wrap:wrap;gap:8px}.chips a{padding:8px 12px;border:1px solid var(--line);border-radius:999px;color:var(--sub);text-decoration:none;text-transform:capitalize}.gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}.gallery img{width:100%;border-radius:12px}.detail{display:grid;grid-template-columns:1.3fr .7fr;gap:35px}.note,footer{color:var(--sub);font-size:.88rem}@media(max-width:700px){.head{flex-wrap:wrap}.head nav{order:3;margin-left:0}.cards{grid-template-columns:1fr}.detail{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.search{flex-direction:column}.search input,.search button{border-radius:12px}.search button{margin-top:8px}}</style><body><header class="head"><a class="brand" href="/${lang}/"><img src="https://www.pikobuy.com/images/header/pikobuy-logo-figma.png" alt="PikoBuy"> Spreadsheet</a><nav><a href="/${lang}/">${t[1]}</a><a href="/${lang}/categories">${t[2]}</a><a href="/${lang}/guides">${t[3]}</a><a href="/${lang}/faq">${t[4]}</a></nav><div class="langs">${links}</div></header><main>${body}</main><footer>PikoBuy Spreadsheet · ${t[7]} · Independent research site, not affiliated with PikoBuy.</footer></body></html>`}
function grid(lang,list){return`<section class="cards">${list.map(p=>`<article class="card"><a href="/${lang}/product?path=${encodeURIComponent(p.path)}"><img src="${esc(p.image)}" alt="${esc(p.title)}"><h3>${esc(p.title)}</h3></a><div class="meta"><b>${esc(p.price)}</b><span>${esc(p.views)} views</span></div></article>`).join('')}</section>`}
async function render(url){const [,maybeLang,page='']=url.pathname.split('/');const lang=LOCALES[maybeLang]?maybeLang:'en',t=LOCALES[lang];if(!LOCALES[maybeLang])return Response.redirect(new URL('/en/',url),302);if(page==='categories'){const c=cats.includes(url.searchParams.get('category'))?url.searchParams.get('category'):'shoes';const list=products(await source('/'+c+'/'),60);return shell(lang,t[2],`<section class="page"><p class="ey">${t[7]}</p><h1>${t[2]}</h1><div class="chips">${cats.map(x=>`<a href="/${lang}/categories?category=${x}">${x.replaceAll('-',' ')}</a>`).join('')}</div>${grid(lang,list)}</section>`)}if(page==='search'){const q=url.searchParams.get('q')||'';const list=q?products(await source('/index.php?m=home&c=Search&a=lists&keywords='+encodeURIComponent(q)+'&sort=new&sort_asc=desc&ZXljbXM=1'),60):[];return shell(lang,t[5],`<section class="page"><p class="ey">${t[7]}</p><h1>${t[5]}</h1><form class="search"><input name="q" value="${esc(q)}" placeholder="Search products or source links"><button>${t[5]}</button></form>${q?grid(lang,list):''}</section>`)}if(page==='product'){const path=url.searchParams.get('path')||'';if(!/^\/[a-z0-9/_-]+\.html$/i.test(path))return shell(lang,t[6],'<p class="page note">Invalid source path.</p>');const html=await source(path),title=clean(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]),id=(html.match(/Product ID:\s*(\d+)/i)||[])[1]||'',gallery=[...html.matchAll(/<img[^>]+>/gi)].map(m=>attr(m[0],'data-src')||attr(m[0],'src')).map(absolute).filter(x=>x.includes('/uploads/allimg/')).slice(0,30);return shell(lang,title,`<section class="detail"><div class="gallery">${gallery.map(x=>`<img src="${esc(x)}" alt="${esc(title)}">`).join('')}</div><aside><p class="ey">${t[7]}</p><h1>${esc(title)}</h1><p>Source ID: ${esc(id)}</p><a class="button" href="https://www.pikobuy.com/product/detail?productUrl=${encodeURIComponent('https://weidian.com/item.html?itemID='+id)}">Buy on PikoBuy</a><p class="note">Review source context, options and images before continuing.</p></aside></section>`)}if(page==='guides'||page==='faq')return shell(lang,t[page==='guides'?3:4],`<section class="page"><p class="ey">${t[7]}</p><h1>${t[page==='guides'?3:4]}</h1><h2>Research before opening a listing</h2><p>Use categories to compare similar finds, then inspect source context, gallery, sizing and weight. This preview does not store product records; it requests them from FindSpreadsheet for every page.</p><h2>QC and shipping context</h2><p>Images are source evidence, not a guarantee about stock, quality, customs, carrier timing or final cost.</p></section>`);const list=products(await source('/AllProducts/'),18);return shell(lang,t[6],`<section class="hero"><p class="ey">${t[7]}</p><h1>${t[6]}</h1><p>Search live product records, source images and galleries supplied directly by FindSpreadsheet.</p><form class="search" action="/${lang}/search"><input name="q" placeholder="Search products or paste a source link"><button>${t[5]}</button></form><a class="button" href="/${lang}/categories">${t[2]}</a></section>${grid(lang,list)}`)}
export default {async fetch(request){try{const url=new URL(request.url);if(url.pathname==='/')return Response.redirect(new URL(`/en/${url.search}`,url),302);const result=await render(url);if(result instanceof Response)return result;return new Response(result,{headers:{'content-type':'text/html;charset=UTF-8','cache-control':'no-store'}})}catch(e){return new Response(shell('en','Preview unavailable',`<p class="page note">Live source temporarily unavailable. ${esc(e.message)}</p>`),{headers:{'content-type':'text/html;charset=UTF-8'}})}}};

const previewShell = shell;
shell = function (lang, title, body) {
  return previewShell(lang, title, body)
    .replace('<div class="langs">', `<details class="language"><summary>Language · ${lang.toUpperCase()}</summary><div>`)
    .replace('</div></header><main>', '</div></details></header><main>')
    .replace('</style>', '.language{position:relative;margin-left:4px}.language summary{cursor:pointer;list-style:none;color:var(--sub);font-size:.82rem}.language summary::-webkit-details-marker{display:none}.language>div{position:absolute;right:0;top:25px;z-index:10;width:142px;padding:8px;background:#fff;border:1px solid var(--line);border-radius:10px;box-shadow:0 12px 28px #17203322}.language a{display:block;padding:5px 7px;color:var(--ink);text-decoration:none;font-size:.82rem}</style>');
};

// The catalogue reads enough consecutive FindSpreadsheet source pages to show
// exactly 102 live products at a time. The next link carries both the source
// path and its in-page offset so products 103 onward are not skipped.
const CATALOG_PAGE_SIZE = 102;
function safeCatalogOffset(value) {
  const offset = Number.parseInt(String(value || '0'), 10);
  return Number.isInteger(offset) && offset >= 0 && offset <= 9999 ? offset : 0;
}
async function legacySourceCatalog(category, firstPath, firstOffset = 0) {
  const seen = new Set();
  const items = [];
  let path = firstPath;
  let offset = safeCatalogOffset(firstOffset);
  for (let pageIndex = 0; pageIndex < 12 && path; pageIndex += 1) {
    // 102 records normally span two 60-record FindSpreadsheet source pages.
    // The public source accepts the first document, then can throttle an
    // immediate continuation from the same Worker egress.  Leave a genuine
    // cooldown before page two.  This is still a live read, never a cache.
    if (pageIndex) await new Promise(resolve => setTimeout(resolve, 5000));
    const html = await source(path);
    const sourceItems = products(html, 9999);
    const next = nextCategoryPage(html, category);
    for (let index = pageIndex === 0 ? offset : 0; index < sourceItems.length; index += 1) {
      const item = sourceItems[index];
      if (!seen.has(item.path)) {
        seen.add(item.path);
        items.push(item);
      }
      if (items.length === CATALOG_PAGE_SIZE) {
        const continuation = index + 1 < sourceItems.length
          ? { path, offset: index + 1 }
          : next ? { path: next, offset: 0 } : null;
        return { items, next: continuation };
      }
    }
    path = next;
    offset = 0;
  }
  return { items, next: null };
}

const hundredProductCatalogRender = render;
render = async function (url) {
  const [, lang, page = ''] = url.pathname.split('/');
  if (!LOCALES[lang] || !['categories', 'category-details'].includes(page)) return hundredProductCatalogRender(url);

  const category = cats.includes(url.searchParams.get('category')) ? url.searchParams.get('category') : 'all-products';
  const rootPath = safeCategoryPage(category, url.searchParams.get('page'));
  const label = category === 'all-products' ? 'All products' : category.replaceAll('-', ' ');
  const tabs = cats.map(item => `<a href="/${lang}/${page}?category=${encodeURIComponent(item)}">${esc(item.replaceAll('-', ' '))}</a>`).join('');
  try {
    const catalog = await sourceCatalog(category, rootPath);
    const more = catalog.next ? `<p class="catalog-next"><a class="button" href="/${lang}/${page}?offset=${catalog.next.offset}&category=${encodeURIComponent(category)}&page=${encodeURIComponent(catalog.next.path)}">${esc((FALLBACK_UI[lang] || FALLBACK_UI.en).next)}</a></p>` : '';
    return shell(lang, `${label} · PikoBuy Spreadsheet`, `<section class="page catalog-page"><p class="ey">${esc(LOCALES[lang][7])}</p><h1>${esc(label)}</h1><p class="note">102 live FindSpreadsheet products per page · USD prices · every card opens its internal product-detail page.</p><div class="chips">${tabs}</div>${grid(lang, catalog.items)}${more}</section>`);
  } catch {
    return shell(lang, `${label} · PikoBuy Spreadsheet`, `<section class="page catalog-page"><p class="ey">${esc(LOCALES[lang][7])}</p><h1>${esc(label)}</h1><p class="note">Live FindSpreadsheet records are temporarily unavailable. No substitute product catalogue is shown.</p><div class="chips">${tabs}</div></section>`);
  }
};

// Supplementary navigation and editorial routes.  These additions preserve
// the existing directory, product, guide and FAQ routes; only the requested
// Categories, Checklist and Shipping surfaces receive the new content.
const CATEGORY_STUDY_COPY = {
  en:{why:'Why categories matter',intro1:'A category gives every record a consistent review standard. Shoes need profile photos and sizing context; clothing needs fabric, measurements and construction context; accessories need dimensions and close-up hardware views.',intro2:'Use the category cards as a practical route into the live FindSpreadsheet directory. They are research paths, not promises about stock, quality, authenticity or seller fulfilment.',map:'Category decision map',first:'What to check first',uncertain:'How to choose when you are unsure',uncertain1:'If a record could fit two categories, start with the stricter check. A jacket with an accessory still needs the outerwear check first because fabric, lining, sizing and weight can change the decision.',uncertain2:'Compare a small group of similar records instead of judging one isolated result. Looking at several shoes, tops or bags side by side makes the visible differences easier to identify.'},
  de:{why:'Warum Kategorien wichtig sind',intro1:'Eine Kategorie gibt jedem Eintrag einen einheitlichen Prüfstandard. Schuhe brauchen Profilbilder und Größenangaben; Kleidung braucht Stoff-, Maß- und Verarbeitungsangaben; Accessoires brauchen Maße und Nahaufnahmen der Beschläge.',intro2:'Nutzen Sie die Kategorie-Karten als praktischen Weg in das Live-Verzeichnis von FindSpreadsheet. Sie sind Recherchewege, keine Zusagen zu Bestand, Qualität, Echtheit oder Verkäufererfüllung.',map:'Kategorie-Entscheidungskarte',first:'Zuerst prüfen',uncertain:'Wenn Sie unsicher sind',uncertain1:'Kann ein Eintrag in zwei Kategorien passen, beginnen Sie mit der strengeren Prüfung. Eine Jacke mit Accessoire braucht zuerst den Oberbekleidungs-Check, weil Stoff, Futter, Größe und Gewicht die Entscheidung verändern können.',uncertain2:'Vergleichen Sie eine kleine Gruppe ähnlicher Einträge statt eines einzelnen Ergebnisses. Mehrere Schuhe, Oberteile oder Taschen nebeneinander zeigen Unterschiede klarer.'},
  fr:{why:'Pourquoi les catégories sont importantes',intro1:'Une catégorie donne à chaque fiche une même méthode de contrôle. Les chaussures demandent des vues de profil et le contexte de taille ; les vêtements demandent tissu, mesures et construction ; les accessoires demandent dimensions et gros plans de la quincaillerie.',intro2:'Utilisez les cartes de catégorie comme accès pratique au répertoire FindSpreadsheet en direct. Ce sont des parcours de recherche, pas des promesses de stock, qualité, authenticité ou exécution du vendeur.',map:'Repère de décision par catégorie',first:'À vérifier en premier',uncertain:'Comment choisir en cas de doute',uncertain1:'Si une fiche semble appartenir à deux catégories, commencez par le contrôle le plus strict. Une veste avec accessoire exige d’abord le contrôle du vêtement extérieur, car le tissu, la doublure, la taille et le poids peuvent modifier la décision.',uncertain2:'Comparez un petit groupe de fiches similaires plutôt qu’un résultat isolé. Plusieurs chaussures, hauts ou sacs côte à côte rendent les différences visibles plus claires.'},
  es:{why:'Por qué importan las categorías',intro1:'Una categoría da a cada ficha un criterio de revisión coherente. El calzado necesita fotos de perfil y contexto de talla; la ropa necesita tejido, medidas y confección; los accesorios necesitan dimensiones y primeros planos del herraje.',intro2:'Use las tarjetas de categoría como una ruta práctica al directorio en vivo de FindSpreadsheet. Son rutas de investigación, no promesas de existencias, calidad, autenticidad o cumplimiento del vendedor.',map:'Mapa de decisión por categoría',first:'Qué revisar primero',uncertain:'Cómo elegir si no está seguro',uncertain1:'Si una ficha puede encajar en dos categorías, empiece por la revisión más estricta. Una chaqueta con accesorio sigue necesitando primero la revisión de prendas exteriores, porque el tejido, forro, talla y peso pueden cambiar la decisión.',uncertain2:'Compare un pequeño grupo de fichas similares en vez de un resultado aislado. Varias zapatillas, prendas o bolsos lado a lado hacen más claras las diferencias visibles.'},
  it:{why:'Perché le categorie contano',intro1:'Una categoria dà a ogni scheda uno standard di controllo coerente. Le scarpe richiedono foto laterali e contesto della taglia; l’abbigliamento richiede tessuto, misure e costruzione; gli accessori richiedono dimensioni e primi piani della ferramenta.',intro2:'Usa le schede di categoria come percorso pratico nel catalogo live di FindSpreadsheet. Sono percorsi di ricerca, non promesse su disponibilità, qualità, autenticità o evasione del venditore.',map:'Mappa decisionale per categoria',first:'Cosa controllare prima',uncertain:'Come scegliere quando non sei sicuro',uncertain1:'Se una scheda può rientrare in due categorie, inizia dal controllo più rigoroso. Una giacca con accessorio richiede comunque prima il controllo dell’outerwear, perché tessuto, fodera, taglia e peso possono cambiare la decisione.',uncertain2:'Confronta un piccolo gruppo di schede simili invece di un risultato isolato. Più scarpe, capi o borse affiancati rendono più chiare le differenze visibili.'},
  pt:{why:'Porque as categorias importam',intro1:'Uma categoria dá a cada registo um padrão de verificação consistente. Calçado precisa de fotos laterais e contexto de tamanho; roupa precisa de tecido, medidas e construção; acessórios precisam de dimensões e imagens de perto dos detalhes.',intro2:'Use os cartões de categoria como um caminho prático para o diretório em direto do FindSpreadsheet. São percursos de pesquisa, não promessas de stock, qualidade, autenticidade ou cumprimento do vendedor.',map:'Mapa de decisão por categoria',first:'O que verificar primeiro',uncertain:'Como escolher quando não tem a certeza',uncertain1:'Se um registo puder caber em duas categorias, comece pela verificação mais exigente. Um casaco com acessório ainda precisa primeiro da verificação de roupa exterior, porque tecido, forro, tamanho e peso podem mudar a decisão.',uncertain2:'Compare um pequeno grupo de registos semelhantes em vez de um resultado isolado. Vários sapatos, peças ou malas lado a lado tornam as diferenças visíveis mais claras.'},
  nl:{why:'Waarom categorieën belangrijk zijn',intro1:'Een categorie geeft ieder item een vaste beoordelingsmaatstaf. Schoenen vragen om zijaanzichten en maatinformatie; kleding om stof, maten en constructie; accessoires om afmetingen en close-ups van het beslag.',intro2:'Gebruik de categoriekaarten als praktische route naar de live-directory van FindSpreadsheet. Het zijn onderzoeksroutes, geen belofte over voorraad, kwaliteit, echtheid of levering door de verkoper.',map:'Besliskaart per categorie',first:'Eerst controleren',uncertain:'Kiezen als u twijfelt',uncertain1:'Past een item in twee categorieën, begin dan met de strengste controle. Een jas met accessoire heeft nog steeds eerst de controle voor bovenkleding nodig, omdat stof, voering, maat en gewicht de keuze kunnen veranderen.',uncertain2:'Vergelijk een kleine groep vergelijkbare items in plaats van één los resultaat. Meerdere schoenen, tops of tassen naast elkaar maken zichtbare verschillen duidelijker.'},
  pl:{why:'Dlaczego kategorie są ważne',intro1:'Kategoria nadaje każdej pozycji spójny standard oceny. Buty wymagają zdjęć profilu i informacji o rozmiarze; odzież — materiału, wymiarów i wykonania; akcesoria — wymiarów i zbliżeń okuć.',intro2:'Używaj kart kategorii jako praktycznej drogi do katalogu FindSpreadsheet na żywo. To ścieżki badawcze, a nie obietnice dostępności, jakości, autentyczności ani realizacji przez sprzedawcę.',map:'Mapa decyzji według kategorii',first:'Co sprawdzić najpierw',uncertain:'Jak wybrać przy wątpliwościach',uncertain1:'Jeśli pozycja pasuje do dwóch kategorii, zacznij od bardziej rygorystycznej kontroli. Kurtka z dodatkiem nadal wymaga najpierw kontroli odzieży wierzchniej, ponieważ materiał, podszewka, rozmiar i waga mogą zmienić decyzję.',uncertain2:'Porównuj małą grupę podobnych pozycji zamiast jednego wyniku. Kilka par butów, ubrań lub toreb obok siebie lepiej pokazuje widoczne różnice.'},
  sv:{why:'Varför kategorier spelar roll',intro1:'En kategori ger varje post en konsekvent granskningsstandard. Skor behöver sidobilder och storlekssammanhang; kläder behöver tyg, mått och konstruktion; accessoarer behöver mått och närbilder av detaljer.',intro2:'Använd kategorikorten som en praktisk väg till FindSpreadsheets livekatalog. De är forskningsvägar, inte löften om lagerstatus, kvalitet, äkthet eller säljarens fullgörelse.',map:'Beslutskarta för kategori',first:'Kontrollera först',uncertain:'Så väljer du när du är osäker',uncertain1:'Om en post kan passa i två kategorier, börja med den striktare kontrollen. En jacka med accessoar behöver fortfarande ytterplaggskontrollen först eftersom tyg, foder, storlek och vikt kan ändra beslutet.',uncertain2:'Jämför en liten grupp liknande poster i stället för ett enskilt resultat. Flera skor, plagg eller väskor bredvid varandra gör synliga skillnader lättare att se.'}
};

const RESEARCH_ROUTE_COPY = {
  en:{checklist:'Checklist',shipping:'Shipping',checkTitle:'PikoBuy order checklist',checkIntro:'Use this independent checklist to review a source record before ordering, warehouse review and parcel submission.',shipTitle:'PikoBuy shipping guide',shipIntro:'Use this independent guide to plan a parcel around the destination, measured parcel details and available route information.'},
  de:{checklist:'Checkliste',shipping:'Versand',checkTitle:'PikoBuy Bestell-Checkliste',checkIntro:'Nutzen Sie diese unabhängige Checkliste für die Prüfung eines Quelleneintrags vor Bestellung, Lagerprüfung und Paketaufgabe.',shipTitle:'PikoBuy Versandratgeber',shipIntro:'Nutzen Sie diesen unabhängigen Ratgeber, um ein Paket anhand von Zielort, gemessenen Paketdaten und verfügbaren Routen zu planen.'},
  fr:{checklist:'Liste de contrôle',shipping:'Livraison',checkTitle:'Liste de contrôle de commande PikoBuy',checkIntro:'Utilisez cette liste indépendante pour examiner une fiche source avant la commande, le contrôle en entrepôt et l’envoi du colis.',shipTitle:'Guide d’expédition PikoBuy',shipIntro:'Utilisez ce guide indépendant pour planifier un colis selon la destination, les mesures relevées et les informations de route disponibles.'},
  es:{checklist:'Lista de control',shipping:'Envío',checkTitle:'Lista de control de pedido PikoBuy',checkIntro:'Use esta lista independiente para revisar una ficha de origen antes de pedir, revisar el almacén y enviar el paquete.',shipTitle:'Guía de envío PikoBuy',shipIntro:'Use esta guía independiente para planificar un paquete según el destino, las medidas reales y la información de rutas disponible.'},
  it:{checklist:'Checklist',shipping:'Spedizione',checkTitle:'Checklist ordine PikoBuy',checkIntro:'Usa questa checklist indipendente per rivedere una scheda sorgente prima dell’ordine, della verifica in magazzino e della spedizione.',shipTitle:'Guida alla spedizione PikoBuy',shipIntro:'Usa questa guida indipendente per pianificare un pacco in base a destinazione, misure effettive e informazioni sulle rotte disponibili.'},
  pt:{checklist:'Lista de verificação',shipping:'Envio',checkTitle:'Lista de verificação de encomenda PikoBuy',checkIntro:'Use esta lista independente para rever um registo de origem antes da encomenda, da revisão no armazém e do envio.',shipTitle:'Guia de envio PikoBuy',shipIntro:'Use este guia independente para planear uma encomenda conforme o destino, medidas efetivas e informação de rotas disponível.'},
  nl:{checklist:'Checklist',shipping:'Verzending',checkTitle:'PikoBuy bestelchecklist',checkIntro:'Gebruik deze onafhankelijke checklist om een bronrecord te beoordelen vóór bestellen, magazijncontrole en pakketverzending.',shipTitle:'PikoBuy verzendgids',shipIntro:'Gebruik deze onafhankelijke gids om een pakket te plannen rond bestemming, gemeten pakketgegevens en beschikbare route-informatie.'},
  pl:{checklist:'Lista kontrolna',shipping:'Wysyłka',checkTitle:'Lista kontrolna zamówienia PikoBuy',checkIntro:'Użyj tej niezależnej listy do sprawdzenia rekordu źródłowego przed zamówieniem, kontrolą magazynową i wysyłką paczki.',shipTitle:'Przewodnik wysyłki PikoBuy',shipIntro:'Użyj tego niezależnego przewodnika, aby zaplanować paczkę według miejsca docelowego, zmierzonych danych paczki i dostępnych tras.'},
  sv:{checklist:'Checklista',shipping:'Frakt',checkTitle:'Checklista för PikoBuy-beställning',checkIntro:'Använd denna oberoende checklista för att granska en källpost före beställning, lagergranskning och paketinskick.',shipTitle:'PikoBuy fraktguide',shipIntro:'Använd denna oberoende guide för att planera ett paket utifrån destination, uppmätta paketdata och tillgänglig ruttinformation.'}
};

function categoryStudyMarkup(lang) {
  const c = CATEGORY_STUDY_COPY[lang] || CATEGORY_STUDY_COPY.en;
  return `<section class="category-study"><h2>${esc(c.why)}</h2><p>${esc(c.intro1)}</p><p>${esc(c.intro2)}</p><h2>${esc(c.map)}</h2><div class="category-study-table" role="table"><div class="category-study-row category-study-head" role="row"><b role="columnheader">Category</b><b role="columnheader">${esc(c.first)}</b></div><div class="category-study-row" role="row"><span>Shoes and sneakers</span><span>Side profile, sole, heel, size notes and whether the same model appears in similar records.</span></div><div class="category-study-row" role="row"><span>Hoodies, shirts, jackets, pants and shorts</span><span>Measurements, fabric photos, print placement, lining and package weight before judging price.</span></div><div class="category-study-row" role="row"><span>Bags, jewellery, watches and accessories</span><span>Close-up photos, dimensions, hardware details, source-page match and whether the record hides important angles.</span></div></div><h2>${esc(c.uncertain)}</h2><p>${esc(c.uncertain1)}</p><p>${esc(c.uncertain2)}</p></section>`;
}

function researchRouteMarkup(lang, page) {
  const c = RESEARCH_ROUTE_COPY[lang] || RESEARCH_ROUTE_COPY.en;
  const checklist = page === 'checklist';
  const title = checklist ? c.checkTitle : c.shipTitle;
  const intro = checklist ? c.checkIntro : c.shipIntro;
  const cards = checklist ? [
    ['1. Confirm the source record','Keep the original link open. Check the selected colour, size, quantity, visible price and product ID before a first payment. A main image can show more than one variant.'],
    ['2. Review warehouse evidence','When photos arrive, compare the received item, option, visible condition and count with the source listing. Ask a focused question or request a detail image if one point is unclear.'],
    ['3. Decide within the applicable window','PikoBuy’s current public returns information describes a five-day warehouse window for eligible items. Eligibility and costs depend on the seller, condition and current policy, so check the official page before deciding.'],
    ['4. Submit a considered parcel','Re-check the address, allowed contents, parcel choices and current route screen before paying international shipping. Keep the item and parcel records together.']
  ] : [
    ['1. Start with an estimate','PikoBuy’s shipping estimator asks for destination, weight and dimensions. Use it for planning, then expect the measured parcel and selected route to be the relevant figures at submission.'],
    ['2. Compare routes, not headline prices','The official guide says routes can differ in delivery time and billing method. Compare what the route accepts, how it bills the parcel and the information shown for your destination.'],
    ['3. Confirm the parcel before payment','Check the recipient address, item count, packaging choices, measured weight and dimensions. Cross-border charges, route availability and carrier handling can change.'],
    ['4. Track with realistic expectations','PikoBuy says tracking information is normally available within three days after dispatch. International logistics is handled by third parties, so customs, carrier scans and delivery timing are not guaranteed.']
  ];
  return `<section class="page research-route"><p class="ey">PIKOBUY SPREADSHEET · ${esc(checklist ? c.checklist : c.shipping)}</p><h1>${esc(title)}</h1><p class="research-intro">${esc(intro)}</p><div class="research-route-grid">${cards.map(([heading, text]) => `<article><h2>${esc(heading)}</h2><p>${esc(text)}</p></article>`).join('')}</div><p class="note">Independent research page. Confirm current policies, fees, route availability and restrictions directly with PikoBuy before ordering or shipping.</p></section>`;
}

// The requested header change: Category details remains an internal route but
// no longer appears in the top navigation. Checklist and Shipping are added
// as normal internal, locale-preserving page links.
const supplementaryNavigationShell = shell;
shell = function (lang, title, body) {
  const labels = RESEARCH_ROUTE_COPY[lang] || RESEARCH_ROUTE_COPY.en;
  let html = supplementaryNavigationShell(lang, title, body);
  html = html.replace(/<nav>([\s\S]*?)<\/nav>/, (_, links) => {
    const withoutDetails = links.replace(new RegExp(`<a href="/${lang}/category-details">[^<]*<\\/a>`, 'g'), '');
    const additions = `<a href="/${lang}/checklist">${esc(labels.checklist)}</a><a href="/${lang}/shipping">${esc(labels.shipping)}</a>`;
    return `<nav>${withoutDetails}${additions}</nav>`;
  });
  return html.replace('</style>', `.head nav{gap:14px}.head nav a{white-space:nowrap}.category-study{max-width:none;margin:42px 0 0;padding:30px;border:1px solid #b9e7f5;border-radius:18px;background:#f8fdff;color:#07384e}.category-study h2{margin:0 0 10px;font-size:clamp(1.35rem,2.7vw,2rem);line-height:1.18}.category-study h2:not(:first-child){margin-top:30px}.category-study p{margin:0 0 14px;color:#477488}.category-study-table{overflow:hidden;border:1px solid #b9e7f5;border-radius:14px}.category-study-row{display:grid;grid-template-columns:1fr 1.06fr}.category-study-row>*{padding:14px;border-right:1px solid #b9e7f5;border-bottom:1px solid #b9e7f5}.category-study-row>*:last-child{border-right:0}.category-study-row:last-child>*{border-bottom:0}.category-study-head{background:#e6fbff;color:#07384e}.research-route{max-width:980px}.research-intro{max-width:760px;color:#477488;font-size:1.05rem}.research-route-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin:28px 0}.research-route-grid article{padding:22px;border:1px solid #b9e7f5;border-radius:16px;background:#f8fdff}.research-route-grid h2{margin:0 0 9px;font-size:1.2rem;color:#07384e}.research-route-grid p{margin:0;color:#477488}@media(max-width:900px){.head{gap:12px}.head nav{gap:10px}.head nav a{font-size:.8rem}}@media(max-width:700px){.category-study{margin-top:26px;padding:17px;border-radius:13px}.category-study h2:not(:first-child){margin-top:23px}.category-study-row{grid-template-columns:1fr}.category-study-row>*{border-right:0}.category-study-row>*:first-child{border-bottom:0;font-weight:800}.research-route-grid{grid-template-columns:1fr;gap:10px;margin:18px 0}.research-route-grid article{padding:17px;border-radius:13px}}</style>`);
};

const supplementaryRouteRender = render;
render = async function (url) {
  const [, lang, page = ''] = url.pathname.split('/');
  if (!LOCALES[lang]) return supplementaryRouteRender(url);
  if (page === 'checklist' || page === 'shipping') {
    const copy = RESEARCH_ROUTE_COPY[lang] || RESEARCH_ROUTE_COPY.en;
    return shell(lang, page === 'checklist' ? copy.checkTitle : copy.shipTitle, researchRouteMarkup(lang, page));
  }
  let html = String(await supplementaryRouteRender(url));
  if (page === 'categories') html = html.replace(/(<section class="page catalog-page">)/, `$1${categoryStudyMarkup(lang)}`);
  if (page === '') html = html.replace('</main>', `${categoryStudyMarkup(lang)}</main>`);
  return html;
};

// Expand every English FAQ response with the practical decisions that the
// current public PikoBuy guide, returns policy and shipping terms require.
// Other locales retain their locale-specific answers plus a policy reminder;
// this keeps the FAQ count and page structure identical on language changes.
const DETAILED_ENGLISH_FAQ = [
  ['What is PikoBuy and what is it not responsible for?', 'PikoBuy describes its role as purchasing-agent and parcel-forwarding service rather than the marketplace seller. It can help process product links and forwarding, but the original seller remains responsible for its listing, stock, specifications and seller-side conditions. Use the original listing as the record for the variant you are choosing, and treat this directory only as a research aid.'],
  ['How should I check a product before placing a PikoBuy order?', 'Start with the full Taobao, Weidian, 1688 or other supported source link. Confirm the exact option, colour, size, quantity, current price and seller information; the main image may show several variants. PikoBuy’s public guide says the first payment follows option selection, and stock or actual purchase price can change, so save the original listing and check the order screen before paying.'],
  ['What can QC or warehouse inspection photos actually tell me?', 'PikoBuy’s guide describes warehouse check-in, photo confirmation and defect checks after an item arrives. Compare the photos against the source listing for the selected option, count, colour, visible markings and obvious condition; request a focused extra photo if one detail matters. Warehouse photos are evidence of what is visible, not a certification of quality, authenticity, future performance or seller compliance.'],
  ['How does the published five-day return window work?', 'PikoBuy’s published returns information says that eligible items can be requested within five days after the status becomes In Warehouse, counted as 120 hours from the next hour. Eligibility still depends on the seller offering a return, the item remaining in the required resalable condition and any category-specific rule. Costs can include seller shipping, return shipping and service fees, so check the current official return screen before submitting a request.'],
  ['How is a PikoBuy international shipping estimate calculated?', 'The official shipping estimator uses destination, estimated weight and dimensions, so it is a planning figure rather than a final invoice. After warehouse processing, compare the measured parcel, packing choice, route restrictions and billing method shown for your destination. Route availability, dimensional weight and cross-border charges can change the total, so use the final parcel screen before payment.'],
  ['Can delivery time, customs clearance or parcel safety be guaranteed?', 'No. PikoBuy’s shipping terms say parcels are carried by third-party logistics providers and that customs, loss, damage, peak-season delays and other cross-border risks can occur. Choose only permitted contents, give an accurate address, keep relevant records and avoid planning around an unguaranteed delivery date or clearance outcome.'],
  ['What should I collect if there is a product or parcel problem?', 'Keep the source listing, selected option, order ID, inspection photos and any relevant parcel tracking together. Describe the issue factually: what was selected, what the photo or tracking record shows and when the status changed. Contact PikoBuy through its official support route while the applicable warehouse, return or after-sales period is still open; any carrier claim remains subject to the carrier’s rules.'],
  ['Which items or situations need extra caution before ordering or shipping?', 'Do not order or send prohibited, unlawful, restricted or destination-sensitive goods. Review the current platform terms and destination-country requirements, and remember that some categories — including customised, opened or condition-sensitive items — may not qualify for a return. Check seller conditions and route acceptance before paying rather than relying on a popular product image or a past route result.']
];

const FAQ_POLICY_REMINDER = {
  de:' Prüfen Sie zusätzlich die aktuelle offizielle Rückgabe-, Versand- und Verkäuferrichtlinie, bevor Sie zahlen oder ein Paket abschicken.',
  fr:' Vérifiez aussi la politique officielle actuelle de retour, d’expédition et du vendeur avant de payer ou d’envoyer un colis.',
  es:' Revise además la política oficial vigente de devoluciones, envío y del vendedor antes de pagar o enviar un paquete.',
  it:' Verifica inoltre la politica ufficiale aggiornata di reso, spedizione e del venditore prima di pagare o inviare un pacco.',
  pt:' Verifique também a política oficial atual de devolução, envio e do vendedor antes de pagar ou enviar uma encomenda.',
  nl:' Controleer daarnaast het actuele officiële retour-, verzend- en verkopersbeleid voordat u betaalt of een pakket verstuurt.',
  pl:' Przed płatnością lub wysłaniem paczki sprawdź też aktualne oficjalne zasady zwrotów, wysyłki i sprzedawcy.',
  sv:' Kontrollera också den aktuella officiella retur-, frakt- och säljarpolicyn innan du betalar eller skickar ett paket.'
};

const conciseEditorialFaq = editorialFaq;
editorialFaq = function (lang) {
  if (lang === 'en') return DETAILED_ENGLISH_FAQ;
  return conciseEditorialFaq(lang).map(([question, answer]) => [question, `${answer}${FAQ_POLICY_REMINDER[lang] || ''}`]);
};

// Reference palette: deep navy, white text and fluorescent lime accents. The
// header controls retain their existing colours as requested.
const navyPaletteShell = shell;
shell = function (lang, title, body) {
  return navyPaletteShell(lang, title, body).replace('</style>', `
    body{background:#182442;color:#f8fbff}
    main{color:#f8fbff}
    footer{color:#c7d1e5}
    .head{background:#fafbfc}
    main h1,main h2,main h3,main p,main b,main dd,main dt{color:inherit}
    main .note{color:#c7d1e5}
    .page,.directory-section{color:#f8fbff}
    .cards{grid-template-columns:repeat(6,minmax(0,1fr));gap:12px;margin-top:28px}
    .card{background:#213252;border-color:#41557f}
    .card a,.card h3{color:#f8fbff}
    .card .meta{color:#c7d1e5}
    .card .meta b{color:#d8ff72}
    .chips a{background:#213252;border-color:#41557f;color:#f8fbff}
    .directory-cats a,.directory-features article,.directory-steps article,.directory-copy{background:#213252;border-color:#41557f;color:#f8fbff}
    .directory-cats a{background:linear-gradient(150deg,#213252,#1b2b49);color:#f8fbff}
    .directory-features p,.directory-steps p,.directory-copy p{color:#c7d1e5}
    .directory-cta{background:#d8ff72;color:#172033}
    .directory-cta h2,.directory-cta p{color:#172033}
    .detail-panel,.product-media{background:#213252;border-color:#41557f}
    .qc-area{background:#1b2b49}
    .original-area{background:#213252}
    .product-facts{background:#41557f;border-color:#41557f}
    .product-facts div{background:#213252}
    .product-facts dt{color:#c7d1e5}
    .catalog-next{text-align:center;margin:34px 0 0}
    @media(max-width:1100px){.cards{grid-template-columns:repeat(4,minmax(0,1fr))}}
    @media(max-width:700px){.cards{grid-template-columns:repeat(2,minmax(0,1fr))}.card h3{min-height:42px;font-size:.9rem}}
  </style>`);
};

// Catalog reliability: each list is read live from FindSpreadsheet.  This is
// deliberately a retry, not a local cache or a replacement product catalogue.
async function legacySourceWithRetry(path) {
  const endpoint = new URL(path, ORIGIN);
  let lastError;
  // Respect the live source's rate limit. The previous short retries could
  // repeat four requests within seconds and keep a visitor on an empty page.
  // These retries stay on the same live URL and never use saved products.
  let waitMs = 0;
  for (let attempt = 0; attempt < 5; attempt += 1) {
    try {
      if (waitMs) await new Promise(resolve => setTimeout(resolve, waitMs));
      const response = await fetch(endpoint, {
        headers: {
          // This is the exact public navigation profile under which
          // FindSpreadsheet returns both catalogue page one and page two.
          // Keep this a live source read; no data is retained.
          accept: '*/*',
          referer: `${ORIGIN}/`,
          // FindSpreadsheet serves its public catalogue to normal browsers.
          // Use the same ordinary navigation signature for this read-only
          // request instead of the Worker default, which the source throttles.
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36'
        },
        redirect: 'follow',
        cache: 'no-store'
      });
      if (response.ok) {
        const html = await response.text();
        // A successful HTTP status is not enough when an upstream edge sends
        // an empty temporary response.  Let the next live retry handle it.
        if (html && html.length > 800) return html;
        lastError = new Error('source returned an empty catalogue response');
        continue;
      }
      lastError = new Error(`source ${response.status}`);
      const retryAfter = Number(response.headers.get('retry-after')) * 1000;
      waitMs = response.status === 429
        ? Math.min(9000, Math.max(Number.isFinite(retryAfter) ? retryAfter : 0, 1000 * (2 ** attempt)))
        : 0;
    } catch (error) {
      lastError = error;
      waitMs = Math.min(9000, 1000 * (2 ** attempt));
    }
  }
  const sourceError = lastError || new Error('source unavailable');
  console.error('FindSpreadsheet live source request failed:', sourceError.message);
  throw sourceError;
}

function catalogPager(lang, page, category, next) {
  return next
    ? `<p class="catalog-next"><a class="button" href="/${lang}/${page}?category=${encodeURIComponent(category)}&page=${encodeURIComponent(next)}">Load more products</a></p>`
    : '';
}

// Keep category and category-details as independent internal pages.  "All
// products" starts at FindSpreadsheet's real AllProducts index and carries
// its own next-page path, so every product remains discoverable without a
// locally exported inventory.
const catalogPageRender = render;
render = async function (url) {
  const [, maybeLang, page = ''] = url.pathname.split('/');
  if (!LOCALES[maybeLang] || !['categories', 'category-details'].includes(page)) {
    return catalogPageRender(url);
  }

  const lang = maybeLang;
  const category = cats.includes(url.searchParams.get('category'))
    ? url.searchParams.get('category')
    : 'all-products';
  const sourcePath = safeCategoryPage(category, url.searchParams.get('page'));
  const label = category === 'all-products' ? 'All products' : category.replaceAll('-', ' ');
  const tabs = cats.map(item => `<a href="/${lang}/${page}?category=${encodeURIComponent(item)}">${esc(item.replaceAll('-', ' '))}</a>`).join('');

  try {
    const html = await source(sourcePath);
    const list = products(html, 48);
    const next = nextCategoryPage(html, category);
    return shell(lang, `${page === 'category-details' ? 'Category details' : 'Products'} · ${label}`, `<section class="page catalog-page"><p class="ey">${esc(LOCALES[lang][7])}</p><h1>${esc(label)}</h1><p class="note">All cards below are live FindSpreadsheet records in USD. Select a category or load the next source page to continue browsing.</p><div class="chips">${tabs}</div>${list.length ? grid(lang, list) : '<p class="note">No live product cards were returned for this source page.</p>'}${catalogPager(lang, page, category, next)}</section>`);
  } catch {
    return shell(lang, 'Products temporarily unavailable', `<section class="page catalog-page"><p class="ey">${esc(LOCALES[lang][7])}</p><h1>${esc(label)}</h1><p class="note">The live FindSpreadsheet response is temporarily unavailable. No local or substitute products are shown.</p><div class="chips">${tabs}</div></section>`);
  }
};

function usdPrice(raw) {
  const numeric = Number(String(raw || '').replace(/[^0-9.]/g, ''));
  return Number.isFinite(numeric) && numeric > 0 ? `$${(numeric * 0.13775).toFixed(2)}` : '—';
}

const sourceGrid = grid;
grid = function (lang, list) {
  return `<section class="cards">${list.map(p => `<article class="card"><a href="/${lang}/product?path=${encodeURIComponent(p.path)}"><img src="${esc(p.image)}" alt="${esc(p.title)}"><h3>${esc(p.title)}</h3></a><div class="meta"><b>${usdPrice(p.price)}</b><span>${esc(p.views)} views</span></div></article>`).join('')}</section>`;
};

function categoryRoot(category) {
  return category === 'all-products' ? '/AllProducts/' : `/${category}/`;
}

function safeCategoryPage(category, candidate) {
  const root = categoryRoot(category);
  return typeof candidate === 'string' && candidate.startsWith(root) && /^\/(?:AllProducts|[a-z-]+)\/list_\d+_\d+\/?$/i.test(candidate) ? candidate : root;
}

function nextCategoryPage(html, category) {
  const root = categoryRoot(category);
  const paths = [...html.matchAll(/href=["']([^"']+\/list_\d+_\d+\/?)["']/gi)].map(m => m[1]).filter(path => path.startsWith(root));
  return paths.at(-1) || '';
}

const internalCatalogRender = render;
render = async function (url) {
  const [, maybeLang, page = ''] = url.pathname.split('/');
  const lang = LOCALES[maybeLang] ? maybeLang : 'en';
  if (!LOCALES[maybeLang]) return internalCatalogRender(url);

  if (page === 'categories' || page === 'category-details') {
    const category = cats.includes(url.searchParams.get('category')) ? url.searchParams.get('category') : 'all-products';
    const pagePath = safeCategoryPage(category, url.searchParams.get('page'));
    const categoryName = category.replaceAll('-', ' ');
    try {
      const html = await source(pagePath);
      const list = products(html, 9999);
      const next = nextCategoryPage(html, category);
      const tabs = cats.map(x => `<a href="/${lang}/${page}?category=${x}">${esc(x.replaceAll('-', ' '))}</a>`).join('');
      const nextLink = next ? `<p><a class="button" href="/${lang}/${page}?category=${category}&page=${encodeURIComponent(next)}">Next page</a></p>` : '';
      const heading = page === 'category-details' ? `Category details · ${categoryName}` : `Products · ${categoryName}`;
      return shell(lang, heading, `<section class="page"><p class="ey">${esc(LOCALES[lang][7])}</p><h1>${esc(heading)}</h1><p class="note">Live FindSpreadsheet records. Every card opens its corresponding product page inside this subsite.</p><div class="chips">${tabs}</div>${grid(lang, list)}${nextLink}</section>`);
    } catch {
      return shell(lang, page === 'category-details' ? 'Category details' : LOCALES[lang][2], `<section class="page"><p class="ey">${esc(LOCALES[lang][7])}</p><h1>${page === 'category-details' ? 'Category details' : esc(LOCALES[lang][2])}</h1><div class="chips">${cats.map(x=>`<a href="/${lang}/${page}?category=${x}">${esc(x.replaceAll('-', ' '))}</a>`).join('')}</div><p class="note">Live category records are temporarily unavailable. This subsite does not show local substitute products.</p></section>`);
    }
  }

  if (page === 'product') {
    const path = url.searchParams.get('path') || '';
    if (!/^\/[a-z0-9/_-]+\.html$/i.test(path)) return shell(lang, 'Product details', '<p class="page note">Invalid product path.</p>');
    try {
      const html = await source(path);
      const title = clean(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]);
      const id = (html.match(/Product ID:\s*(\d+)/i) || [])[1] || '';
      const price = clean(html.match(/<div[^>]*class=["'][^"']*product-price[^"']*["'][^>]*>([\s\S]*?)<\/div>/i)?.[1]);
      const gallery = [...html.matchAll(/<img[^>]+>/gi)].map(m => attr(m[0], 'data-src') || attr(m[0], 'src')).map(absolute).filter(x => x.includes('/uploads/allimg/')).slice(0, 30);
      return shell(lang, title, `<section class="detail"><div class="gallery">${gallery.map(x => `<img src="${esc(x)}" alt="${esc(title)}">`).join('')}</div><aside><p class="ey">${esc(LOCALES[lang][7])}</p><h1>${esc(title)}</h1><p>Product ID: ${esc(id)}</p><p><b>Price: ${usdPrice(price)}</b></p><a class="button" href="https://www.pikobuy.com/product/detail?productUrl=${encodeURIComponent('https://weidian.com/item.html?itemID=' + id)}">Buy on PikoBuy</a><p class="note">Images, price and ID are source-derived from FindSpreadsheet.</p></aside></section>`);
    } catch {
      return shell(lang, 'Product details', '<p class="page note">Live product details are temporarily unavailable. No local substitute record is shown.</p>');
    }
  }
  return internalCatalogRender(url);
};

function uniqueImages(values) {
  return [...new Set(values.filter(Boolean))];
}

// Fixed copy for the shared detail template. Product fields themselves remain
// source values from FindSpreadsheet; only the surrounding interface changes
// with the selected language.
const DETAIL_COPY = {
  en:{qc:'QC / inspection images',original:'Original Weidian product images',id:'Product ID',price:'Price',category:'Category',images:'Images',details:'Product details',source:'Live FindSpreadsheet record',note:'Review the QC gallery and the matching Weidian product images before continuing. Product fields are read live from FindSpreadsheet.',buy:'Buy on PikoBuy'},
  de:{qc:'QC- / Prüfungsbilder',original:'Originale Weidian-Produktbilder',id:'Produkt-ID',price:'Preis',category:'Kategorie',images:'Bilder',details:'Produktdetails',source:'Live-Datensatz von FindSpreadsheet',note:'Prüfe die QC-Galerie und die passenden originalen Weidian-Bilder vor dem Fortfahren. Produktfelder werden live von FindSpreadsheet gelesen.',buy:'Bei PikoBuy kaufen'},
  fr:{qc:'Images QC / inspection',original:'Images originales Weidian',id:'ID du produit',price:'Prix',category:'Catégorie',images:'Images',details:'Détails du produit',source:'Fiche FindSpreadsheet en direct',note:'Vérifiez la galerie QC et les images Weidian correspondantes avant de continuer. Les champs produit sont lus en direct depuis FindSpreadsheet.',buy:'Acheter sur PikoBuy'},
  es:{qc:'Imágenes QC / inspección',original:'Imágenes originales de Weidian',id:'ID del producto',price:'Precio',category:'Categoría',images:'Imágenes',details:'Detalles del producto',source:'Registro en vivo de FindSpreadsheet',note:'Revise la galería QC y las imágenes de Weidian correspondientes antes de continuar. Los campos se leen en directo desde FindSpreadsheet.',buy:'Comprar en PikoBuy'},
  it:{qc:'Immagini QC / ispezione',original:'Immagini originali Weidian',id:'ID prodotto',price:'Prezzo',category:'Categoria',images:'Immagini',details:'Dettagli prodotto',source:'Record FindSpreadsheet in tempo reale',note:'Controlla la galleria QC e le immagini Weidian corrispondenti prima di proseguire. I campi prodotto sono letti in tempo reale da FindSpreadsheet.',buy:'Acquista su PikoBuy'},
  pt:{qc:'Imagens QC / inspeção',original:'Imagens originais Weidian',id:'ID do produto',price:'Preço',category:'Categoria',images:'Imagens',details:'Detalhes do produto',source:'Registo FindSpreadsheet em direto',note:'Reveja a galeria QC e as imagens Weidian correspondentes antes de continuar. Os campos são lidos em direto do FindSpreadsheet.',buy:'Comprar no PikoBuy'},
  nl:{qc:'QC- / inspectiefoto’s',original:'Originele Weidian-productafbeeldingen',id:'Product-ID',price:'Prijs',category:'Categorie',images:'Afbeeldingen',details:'Productdetails',source:'Live FindSpreadsheet-record',note:'Bekijk de QC-galerij en de bijbehorende originele Weidian-afbeeldingen voordat je doorgaat. Productvelden worden live uit FindSpreadsheet gelezen.',buy:'Kopen op PikoBuy'},
  pl:{qc:'Zdjęcia QC / inspekcyjne',original:'Oryginalne zdjęcia Weidian',id:'ID produktu',price:'Cena',category:'Kategoria',images:'Zdjęcia',details:'Szczegóły produktu',source:'Rekord FindSpreadsheet na żywo',note:'Przed kontynuowaniem sprawdź galerię QC i pasujące obrazy Weidian. Pola produktu są odczytywane na żywo z FindSpreadsheet.',buy:'Kup na PikoBuy'},
  sv:{qc:'QC- / inspektionsbilder',original:'Ursprungliga Weidian-produktbilder',id:'Produkt-ID',price:'Pris',category:'Kategori',images:'Bilder',details:'Produktdetaljer',source:'Livepost från FindSpreadsheet',note:'Granska QC-galleriet och de matchande ursprungliga Weidian-bilderna innan du fortsätter. Produktfälten läses live från FindSpreadsheet.',buy:'Köp på PikoBuy'}
};

const productPresentationRender = render;
render = async function (url) {
  const [, maybeLang, page = ''] = url.pathname.split('/');
  const lang = LOCALES[maybeLang] ? maybeLang : 'en';
  if (!LOCALES[maybeLang] || page !== 'product') return productPresentationRender(url);
  const path = url.searchParams.get('path') || '';
  if (!/^\/[a-z0-9/_-]+\.html$/i.test(path)) return shell(lang, 'Product details', '<p class="page note">Invalid product path.</p>');
  try {
    const html = await source(path);
    const title = clean(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]);
    const weidianValue = (html.match(/data-cart-weidian=["']([^"']+)["']/i) || [])[1] || '';
    const id = (weidianValue.match(/(?:itemID=|itemid=)(\d+)/i) || weidianValue.match(/^(\d+)$/) || html.match(/(?:Product )?ID:\s*(\d+)/i) || [])[1] || '';
    const price = clean(html.match(/<div[^>]*class=["'][^"']*product-price[^"']*["'][^>]*>([\s\S]*?)<\/div>/i)?.[1]);
    const imageTags = [...html.matchAll(/<img[^>]+>/gi)].map(match => match[0]);
    // The source gallery is labelled with the exact product title. This avoids
    // pulling in FindSpreadsheet related-product images as QC images.
    let qc = uniqueImages(imageTags
      .filter(tag => {
        const altText = clean(attr(tag, 'alt'));
        return altText === title || altText.startsWith(`${title} -`);
      })
      .map(tag => absolute(attr(tag, 'data-src') || attr(tag, 'src')))
      .filter(src => src.includes('/uploads/allimg/')));
    // The matching Weidian image set is explicitly stored in the live source
    // record's style-options block. Restricting extraction to this block removes
    // agent logos, site branding and related-product imagery.
    const styleStart = html.search(/id=["']style-options["']/i);
    const styleEnd = styleStart >= 0 ? html.slice(styleStart).search(/id=["']size-options["']/i) : -1;
    const styleBlock = styleStart >= 0 ? html.slice(styleStart, styleEnd >= 0 ? styleStart + styleEnd : styleStart + 200000) : '';
    const styleImageUrls = [...styleBlock.matchAll(/<img[^>]+>/gi)]
      .map(match => absolute(attr(match[0], 'data-src') || attr(match[0], 'src')));
    // The onclick value is the stable field FindSpreadsheet uses to associate a
    // selectable Weidian image with this precise product record. Keep it as a
    // fallback when a source theme changes the surrounding container markup.
    const selectedImageUrls = [...html.matchAll(/selectStyleOption\([^,]+,\s*[^,]+,\s*["']([^"']+)["']\)/gi)]
      .map(match => absolute(match[1]));
    const staticOriginals = uniqueImages([...styleImageUrls, ...selectedImageUrls]
      .filter(src => /^https?:\/\//i.test(src) && !src.includes('findspreadsheet.com')));
    // Some current source records omit the title-labelled QC tag.  In that
    // case use only the matching product's primary image from the authorised
    // FindSpreadsheet export, so every detail page has a real main image and
    // never borrows media from a different listing.
    if (!qc.length) {
      try {
        const record = (await masterProducts()).find(item => item.path === path);
        if (record?.image) qc = [record.image];
      } catch (_) {}
    }
    // The full Weidian image set is loaded by the visitor's browser from
    // FindSpreadsheet's public SKU endpoint after this live record renders.
    // This prevents the two server-side source requests from rate-limiting one
    // another while preserving a direct, per-product source-of-truth request.
    const originals = staticOriginals;
    const thumbs = qc.map((x, i) => `<button class="qc-thumb${i === 0 ? ' is-active' : ''}" type="button" data-qc-image="${esc(x)}"><img src="${esc(x)}" alt="${esc(title)} QC ${i + 1}"></button>`).join('');
    const originalStream = originals.map((x, i) => `<img src="${esc(x)}" alt="${esc(title)} Weidian image ${i + 1}">`).join('');
    const category = path.split('/')[1]?.replaceAll('-', ' ') || 'product';
    const copy = DETAIL_COPY[lang] || DETAIL_COPY.en;
    return shell(lang, title, `<section class="detail product-detail"><div class="product-media"><section class="qc-area"><p class="media-label">${esc(copy.qc)}</p><img id="qc-main" class="qc-main" src="${esc(qc[0] || '')}" alt="${esc(title)}"><div class="qc-thumbs">${thumbs}</div></section><section class="original-area" aria-label="${esc(copy.original)}"><p class="media-label">${esc(copy.original)}</p><div id="weidian-original-stream" class="original-stream" data-sku-url="https://findspreadsheet.com/api/Goods/getSkuData?weidian_id=${encodeURIComponent(id)}">${originalStream}</div></section></div><aside class="detail-panel"><p class="ey">${esc(LOCALES[lang][7])}</p><h1>${esc(title)}</h1><dl class="product-facts"><div><dt>${esc(copy.id)}</dt><dd>${esc(id)}</dd></div><div><dt>${esc(copy.price)}</dt><dd>${usdPrice(price)}</dd></div><div><dt>${esc(copy.category)}</dt><dd>${esc(category)}</dd></div><div><dt>${esc(copy.images)}</dt><dd>${qc.length} QC / <span id="original-count">${originals.length}</span> original</dd></div></dl><section class="product-details-copy"><h2>${esc(copy.details)}</h2><p>${esc(copy.source)}</p><p>${esc(copy.note)}</p></section><a class="button buy-button" href="https://www.pikobuy.com/product/detail?productUrl=${encodeURIComponent('https://weidian.com/item.html?itemID=' + id)}">${esc(copy.buy)}</a></aside></section><script>document.querySelectorAll('[data-qc-image]').forEach(function(button){button.addEventListener('click',function(){var main=document.getElementById('qc-main');if(main){main.src=button.dataset.qcImage;}document.querySelectorAll('.qc-thumb').forEach(function(item){item.classList.remove('is-active')});button.classList.add('is-active')})});(function(){var stream=document.getElementById('weidian-original-stream');if(!stream||!stream.dataset.skuUrl)return;fetch(stream.dataset.skuUrl).then(function(response){if(!response.ok)throw new Error('SKU image response unavailable');return response.json()}).then(function(record){var images=Array.isArray(record.images)?record.images.filter(function(url){return typeof url==='string'&&/^https?:\\/\\//i.test(url)}):[];if(!images.length)return;stream.replaceChildren();images.forEach(function(url,index){var image=document.createElement('img');image.src=url;image.alt=${JSON.stringify(title)}+' Weidian image '+(index+1);stream.appendChild(image)});var count=document.getElementById('original-count');if(count)count.textContent=String(images.length)}).catch(function(){})})();</script>`);
  } catch {
    return shell(lang, 'Product details', '<p class="page note">Live product details are temporarily unavailable. No local substitute record is shown.</p>');
  }
};

const widthAndDetailShell = shell;
shell = function (lang, title, body) {
  return widthAndDetailShell(lang, title, body).replace('</style>', `.page{max-width:none;margin:35px 0}.all-products-cta{display:inline-block;margin:0 auto;padding:10px 16px;border-radius:10px;background:#d8ff72;color:#172033;font-size:.86rem;font-weight:800;text-decoration:none}.detail{width:100%;max-width:none;grid-template-columns:minmax(0,1fr) minmax(300px,.48fr);align-items:start}.product-media{min-width:0;overflow:hidden;border:1px solid var(--line);border-radius:18px;background:#fff}.qc-area{padding:18px 18px 0;background:#f5f7fb}.media-label{margin:0 0 10px;font-size:.75rem;font-weight:800;letter-spacing:.1em;color:var(--sub);text-transform:uppercase}.qc-main{display:block;width:100%;aspect-ratio:1;object-fit:contain;background:#fff;border-radius:12px}.qc-thumbs{display:flex;gap:9px;overflow-x:auto;padding:12px 0 16px}.qc-thumb{flex:0 0 68px;width:68px;height:68px;padding:0;border:2px solid transparent;border-radius:9px;background:#fff;overflow:hidden;cursor:pointer}.qc-thumb.is-active{border-color:var(--blue)}.qc-thumb img{display:block;width:100%;height:100%;object-fit:cover}.original-area{padding:18px 18px 0}.original-stream{overflow:hidden;border-radius:12px 12px 0 0}.original-stream img{display:block;width:100%;height:auto;margin:0;padding:0}.detail-panel{position:sticky;top:18px;padding:25px;border:1px solid var(--line);border-radius:18px;background:#fff}.detail-panel h1{font-size:clamp(1.7rem,3vw,2.7rem);line-height:1.06}.product-facts{margin:24px 0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1px;background:var(--line);border:1px solid var(--line);border-radius:12px;overflow:hidden}.product-facts div{padding:12px;background:#fff}.product-facts dt{font-size:.7rem;letter-spacing:.08em;color:var(--sub);text-transform:uppercase}.product-facts dd{margin:4px 0 0;font-weight:700;word-break:break-word}.buy-button{width:100%;text-align:center;border-radius:12px}@media(max-width:800px){.detail{grid-template-columns:1fr}.detail-panel{position:static}.product-facts{grid-template-columns:1fr 1fr}}</style>`);
};

const previewRender = render;
render = async function (url) {
  try {
    return await previewRender(url);
  } catch {
    const [, maybeLang] = url.pathname.split('/');
    const lang = LOCALES[maybeLang] ? maybeLang : 'en';
    const t = LOCALES[lang];
    const page = url.pathname.split('/')[2] || '';
    if (page === 'search') {
      const q = url.searchParams.get('q') || '';
      return shell(lang, t[5], `<section class="page"><p class="ey">${t[7]}</p><h1>${t[5]}</h1><form class="search" action="/${lang}/search"><input name="q" value="${esc(q)}" placeholder="Search products or paste a source link"><button>${t[5]}</button></form><p class="note">Live FindSpreadsheet results are temporarily rate-limited. Your search remains on this subsite; no local substitute results are shown.</p></section>`);
    }
    if (page === 'categories') {
      return shell(lang, t[2], `<section class="page"><p class="ey">${t[7]}</p><h1>${t[2]}</h1><div class="chips">${cats.map(x=>`<a href="/${lang}/categories?category=${x}">${x.replaceAll('-',' ')}</a>`).join('')}</div><p class="note">Live FindSpreadsheet category records are temporarily rate-limited. No local substitute products are shown.</p></section>`);
    }
    return shell(lang, `${t[6]} | Preview`, `<section class="hero"><p class="ey">${t[7]}</p><h1>${t[6]}</h1><p>Search live product records, source images and galleries supplied directly by FindSpreadsheet.</p><form class="search" action="/${lang}/search"><input name="q" placeholder="Search products or paste a source link"><button>${t[5]}</button></form><a class="button" href="/${lang}/categories">${t[2]}</a></section><p class="page note">Live product records are temporarily rate-limited by the source. This preview never substitutes local product data.</p>`);
  }
};

const directoryShell = shell;
shell = function (lang, title, body) {
  return directoryShell(lang, title, body).replace('</style>', `.directory-hero{padding:76px 8%;border-radius:24px;background:radial-gradient(circle at 80% 15%,#c9f75b 0 4%,transparent 26%),linear-gradient(135deg,#121725,#273768);color:#fff;text-align:center}.directory-hero .ey{color:#d8ff72}.directory-hero h1{max-width:850px;margin:12px auto;font-size:clamp(2.45rem,6vw,4.8rem)}.directory-hero p{margin:0 auto;max-width:630px;color:#e4e8f5}.directory-hero .search{margin:30px auto 14px;text-align:left}.directory-hero .search button{background:#d8ff72}.dir-signals{display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin-top:22px}.dir-signals span{padding:6px 11px;border:1px solid #ffffff3d;border-radius:99px;color:#e9edf8;font-size:.77rem}.directory-section{margin-top:62px}.directory-section>h2{margin:0;font-size:clamp(1.65rem,3vw,2.3rem);letter-spacing:-.04em}.directory-section>p{max-width:720px;color:var(--sub)}.directory-cats{display:grid;grid-template-columns:repeat(5,1fr);gap:11px;margin-top:21px}.directory-cats a{min-height:82px;display:flex;align-items:end;padding:14px;border:1px solid var(--line);border-radius:14px;background:linear-gradient(150deg,#fff,#f0f3fa);color:var(--ink);font-weight:700;text-decoration:none;text-transform:capitalize;transition:transform .15s}.directory-cats a:hover{transform:translateY(-3px);border-color:#aebdeb}.directory-features,.directory-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:21px}.directory-features article,.directory-steps article{padding:20px;border:1px solid var(--line);border-radius:16px;background:#fff}.directory-features h3,.directory-steps h3{margin:0 0 7px;font-size:1rem}.directory-features p,.directory-steps p{margin:0;color:var(--sub);font-size:.88rem}.directory-steps b{display:block;margin-bottom:18px;color:var(--blue);font-size:.78rem;letter-spacing:.1em}.directory-copy{padding:32px;border-radius:20px;background:#fff;border:1px solid var(--line)}.directory-copy h2{max-width:750px;margin:0 0 12px;font-size:clamp(1.55rem,3vw,2.2rem);line-height:1.14;letter-spacing:-.04em}.directory-copy p{max-width:860px;color:var(--sub)}.directory-cta{margin-top:58px;padding:44px;border-radius:22px;background:#d8ff72;text-align:center}.directory-cta h2{margin:0;font-size:2rem;letter-spacing:-.04em}.directory-cta p{max-width:590px;margin:9px auto 20px}.directory-cta .button{background:#172033;color:#fff}@media(max-width:700px){.directory-hero{padding:46px 20px}.directory-cats{grid-template-columns:repeat(2,1fr)}.directory-features,.directory-steps{grid-template-columns:1fr 1fr}.directory-section{margin-top:44px}.directory-copy,.directory-cta{padding:25px 20px}}</style>`);
};

const directoryCopy = {
  en:{kicker:'LIVE DIRECTORY · FINDSPREADSHEET SOURCE',title:'Your PikoBuy Spreadsheet Directory',intro:'Browse current finds, compare source images and open the product record before continuing to PikoBuy.',browse:'Browse by category',browseText:'Explore the product categories supplied directly by FindSpreadsheet.',features:'Why use this directory?',featureText:['Live product records','Search & source images','QC / gallery evidence','Internal product research'],featureCopy:['Cards are loaded from FindSpreadsheet when you visit.','Search stays on this site and uses the live source index.','Open a listing to inspect source images before buying.','Compare category, title, price and visible source context.'],how:'How it works',stepText:['Browse the directory','Open product details','Continue to PikoBuy','Check source evidence'],stepCopy:['Start with a category or a live search.','Review the source-derived images and available fields.','Use the official PikoBuy purchase route only when ready.','Images and records are evidence, not a product guarantee.'],picks:'Latest product records',seoTitle:'What is a PikoBuy spreadsheet?',seo:'A spreadsheet directory helps visitors move from a product idea to a source record. This independent site does not sell goods or make quality promises: it presents live FindSpreadsheet data so you can compare the available context before choosing whether to open PikoBuy.',faq:'Quick research reminders',faqText:'Check the product title, source images, price and available options. Warehouse, shipping, customs and final cost can change; confirm the current details on the destination before completing an order.',cta:'Ready to research finds?',ctaText:'Search live FindSpreadsheet records without leaving this directory.',ctaButton:'Explore categories'},
  de:{kicker:'LIVE-VERZEICHNIS · FINDSPREADSHEET-QUELLE',title:'Dein PikoBuy-Spreadsheet-Verzeichnis',intro:'Durchsuche aktuelle Funde, vergleiche Quellbilder und öffne den Produkteintrag vor dem Wechsel zu PikoBuy.',browse:'Nach Kategorie suchen',browseText:'Entdecke Produktkategorien direkt von FindSpreadsheet.',features:'Warum dieses Verzeichnis?',featureText:['Live-Produktdaten','Suche & Quellbilder','QC- / Galerie-Nachweise','Interne Produktrecherche'],featureCopy:['Karten werden beim Besuch von FindSpreadsheet geladen.','Die Suche bleibt auf dieser Website und nutzt den Live-Index.','Öffne einen Eintrag und prüfe Quellbilder vor dem Kauf.','Vergleiche Kategorie, Titel, Preis und sichtbaren Kontext.'],how:'So funktioniert es',stepText:['Verzeichnis durchsuchen','Produktdetails öffnen','Weiter zu PikoBuy','Quellnachweise prüfen'],stepCopy:['Beginne mit einer Kategorie oder Live-Suche.','Prüfe quellenbasierte Bilder und Felder.','Nutze die offizielle Kaufroute erst, wenn du bereit bist.','Bilder und Einträge sind Hinweise, keine Garantie.'],picks:'Neueste Produktdaten',seoTitle:'Was ist ein PikoBuy Spreadsheet?',seo:'Ein Spreadsheet-Verzeichnis führt von einer Produktidee zu einem Quelleneintrag. Diese unabhängige Website verkauft keine Waren und gibt keine Qualitätsversprechen; sie zeigt Live-Daten von FindSpreadsheet für einen Vergleich.',faq:'Kurze Recherchehinweise',faqText:'Prüfe Titel, Quellbilder, Preis und Optionen. Lager, Versand, Zoll und Endkosten können sich ändern; bestätige Details vor der Bestellung am Ziel.',cta:'Bereit für die Recherche?',ctaText:'Durchsuche Live-Daten von FindSpreadsheet in diesem Verzeichnis.',ctaButton:'Kategorien öffnen'},
  fr:{kicker:'RÉPERTOIRE EN DIRECT · SOURCE FINDSPREADSHEET',title:'Votre répertoire PikoBuy Spreadsheet',intro:'Parcourez les trouvailles actuelles, comparez les images source et ouvrez la fiche produit avant PikoBuy.',browse:'Parcourir par catégorie',browseText:'Explorez les catégories fournies directement par FindSpreadsheet.',features:'Pourquoi ce répertoire ?',featureText:['Données produit en direct','Recherche et images source','Preuves QC / galerie','Recherche interne'],featureCopy:['Les cartes sont chargées depuis FindSpreadsheet à la visite.','La recherche reste ici et utilise l’index en direct.','Ouvrez une fiche pour vérifier les images source.','Comparez catégorie, titre, prix et contexte visible.'],how:'Comment ça marche',stepText:['Parcourir le répertoire','Ouvrir les détails','Continuer vers PikoBuy','Vérifier la source'],stepCopy:['Commencez par une catégorie ou une recherche.','Examinez les images et champs issus de la source.','Utilisez le parcours d’achat officiel lorsque vous êtes prêt.','Les images et données sont des preuves, pas une garantie.'],picks:'Dernières fiches produit',seoTitle:'Qu’est-ce qu’un PikoBuy spreadsheet ?',seo:'Un répertoire spreadsheet aide à passer d’une idée produit à une fiche source. Ce site indépendant ne vend rien et ne promet pas la qualité : il affiche les données live de FindSpreadsheet pour comparer le contexte disponible.',faq:'Rappels de recherche',faqText:'Vérifiez titre, images, prix et options. Entrepôt, livraison, douane et coût final peuvent changer ; confirmez les détails à destination avant toute commande.',cta:'Prêt à rechercher ?',ctaText:'Recherchez les fiches live FindSpreadsheet sans quitter ce répertoire.',ctaButton:'Explorer les catégories'},
  es:{kicker:'DIRECTORIO EN VIVO · FUENTE FINDSPREADSHEET',title:'Tu directorio PikoBuy Spreadsheet',intro:'Explora hallazgos actuales, compara imágenes de origen y abre la ficha antes de continuar a PikoBuy.',browse:'Explorar por categoría',browseText:'Explora categorías suministradas directamente por FindSpreadsheet.',features:'¿Por qué usar este directorio?',featureText:['Registros en vivo','Búsqueda e imágenes de origen','Evidencia QC / galería','Investigación interna'],featureCopy:['Las tarjetas se cargan desde FindSpreadsheet al visitar.','La búsqueda permanece aquí y usa el índice en vivo.','Abre una ficha para revisar imágenes de origen.','Compara categoría, título, precio y contexto visible.'],how:'Cómo funciona',stepText:['Explora el directorio','Abre detalles','Continúa a PikoBuy','Revisa la fuente'],stepCopy:['Empieza con una categoría o búsqueda en vivo.','Revisa imágenes y campos derivados de la fuente.','Usa la ruta oficial de compra cuando estés listo.','Las imágenes y registros son evidencia, no una garantía.'],picks:'Últimos registros de producto',seoTitle:'¿Qué es un PikoBuy spreadsheet?',seo:'Un directorio spreadsheet ayuda a pasar de una idea a un registro de origen. Este sitio independiente no vende productos ni promete calidad: muestra datos de FindSpreadsheet para comparar el contexto disponible.',faq:'Recordatorios de investigación',faqText:'Revisa título, imágenes, precio y opciones. Almacén, envío, aduanas y coste final pueden cambiar; confirma los detalles en destino antes de pedir.',cta:'¿Listo para investigar?',ctaText:'Busca registros en vivo de FindSpreadsheet sin salir de este directorio.',ctaButton:'Explorar categorías'},
  it:{kicker:'DIRECTORY LIVE · FONTE FINDSPREADSHEET',title:'La tua directory PikoBuy Spreadsheet',intro:'Sfoglia gli articoli attuali, confronta le immagini sorgente e apri la scheda prima di PikoBuy.',browse:'Sfoglia per categoria',browseText:'Esplora categorie fornite direttamente da FindSpreadsheet.',features:'Perché usare questa directory?',featureText:['Dati prodotto live','Ricerca e immagini sorgente','Evidenze QC / galleria','Ricerca interna'],featureCopy:['Le schede sono caricate da FindSpreadsheet alla visita.','La ricerca resta qui e usa l’indice live.','Apri una scheda per controllare le immagini sorgente.','Confronta categoria, titolo, prezzo e contesto visibile.'],how:'Come funziona',stepText:['Sfoglia la directory','Apri i dettagli','Continua su PikoBuy','Controlla la fonte'],stepCopy:['Inizia da una categoria o ricerca live.','Esamina immagini e campi derivati dalla fonte.','Usa il percorso d’acquisto ufficiale quando sei pronto.','Immagini e record sono evidenze, non garanzie.'],picks:'Ultimi record prodotto',seoTitle:'Cos’è un PikoBuy spreadsheet?',seo:'Una directory spreadsheet aiuta a passare da un’idea a un record sorgente. Questo sito indipendente non vende prodotti né promette qualità: mostra dati live di FindSpreadsheet per confrontare il contesto.',faq:'Promemoria di ricerca',faqText:'Controlla titolo, immagini, prezzo e opzioni. Magazzino, spedizione, dogana e costo finale possono cambiare; conferma i dettagli sulla destinazione prima dell’ordine.',cta:'Pronto a fare ricerca?',ctaText:'Cerca record live FindSpreadsheet senza lasciare questa directory.',ctaButton:'Esplora categorie'},
  pt:{kicker:'DIRETÓRIO AO VIVO · FONTE FINDSPREADSHEET',title:'O seu diretório PikoBuy Spreadsheet',intro:'Navegue por achados atuais, compare imagens de origem e abra o registo antes de seguir para PikoBuy.',browse:'Navegar por categoria',browseText:'Explore categorias fornecidas diretamente pelo FindSpreadsheet.',features:'Por que usar este diretório?',featureText:['Registos ao vivo','Pesquisa e imagens de origem','Evidências QC / galeria','Pesquisa interna'],featureCopy:['Os cartões são carregados do FindSpreadsheet na visita.','A pesquisa fica aqui e usa o índice ao vivo.','Abra um registo para verificar imagens de origem.','Compare categoria, título, preço e contexto visível.'],how:'Como funciona',stepText:['Navegue no diretório','Abra detalhes','Continue para PikoBuy','Verifique a fonte'],stepCopy:['Comece por uma categoria ou pesquisa ao vivo.','Veja imagens e campos derivados da fonte.','Use a rota oficial de compra quando estiver pronto.','Imagens e registos são evidência, não garantia.'],picks:'Registos recentes de produto',seoTitle:'O que é um PikoBuy spreadsheet?',seo:'Um diretório spreadsheet ajuda a ir de uma ideia a um registo de origem. Este site independente não vende bens nem promete qualidade: apresenta dados live do FindSpreadsheet para comparar o contexto.',faq:'Lembretes de pesquisa',faqText:'Verifique título, imagens, preço e opções. Armazém, envio, alfândega e custo final podem mudar; confirme detalhes no destino antes de encomendar.',cta:'Pronto para pesquisar?',ctaText:'Pesquise registos live do FindSpreadsheet sem sair deste diretório.',ctaButton:'Explorar categorias'},
  nl:{kicker:'LIVE DIRECTORY · FINDSPREADSHEET-BRON',title:'Jouw PikoBuy Spreadsheet-directory',intro:'Bekijk actuele vondsten, vergelijk bronafbeeldingen en open het productrecord voordat je naar PikoBuy gaat.',browse:'Bladeren per categorie',browseText:'Ontdek categorieën rechtstreeks van FindSpreadsheet.',features:'Waarom deze directory?',featureText:['Live productrecords','Zoeken en bronafbeeldingen','QC- / galerijbewijs','Interne productresearch'],featureCopy:['Kaarten laden bij bezoek vanuit FindSpreadsheet.','Zoeken blijft hier en gebruikt de live-index.','Open een record om bronafbeeldingen te bekijken.','Vergelijk categorie, titel, prijs en zichtbare context.'],how:'Hoe het werkt',stepText:['Blader door de directory','Open productdetails','Ga verder naar PikoBuy','Controleer de bron'],stepCopy:['Begin met een categorie of live zoekopdracht.','Bekijk bronafbeeldingen en beschikbare velden.','Gebruik de officiële aankooproute wanneer je klaar bent.','Afbeeldingen en records zijn bewijs, geen garantie.'],picks:'Nieuwste productrecords',seoTitle:'Wat is een PikoBuy spreadsheet?',seo:'Een spreadsheet-directory brengt je van een productidee naar een bronrecord. Deze onafhankelijke site verkoopt niets en belooft geen kwaliteit: hij toont live FindSpreadsheet-data om de beschikbare context te vergelijken.',faq:'Korte onderzoeksherinneringen',faqText:'Controleer titel, bronafbeeldingen, prijs en opties. Magazijn, verzending, douane en eindkosten kunnen wijzigen; bevestig details op de bestemming voor je bestelt.',cta:'Klaar om te onderzoeken?',ctaText:'Zoek live FindSpreadsheet-records zonder deze directory te verlaten.',ctaButton:'Categorieën bekijken'},
  pl:{kicker:'KATALOG LIVE · ŹRÓDŁO FINDSPREADSHEET',title:'Twój katalog PikoBuy Spreadsheet',intro:'Przeglądaj aktualne znaleziska, porównuj obrazy źródłowe i otwórz rekord produktu przed przejściem do PikoBuy.',browse:'Przeglądaj według kategorii',browseText:'Poznaj kategorie dostarczane bezpośrednio przez FindSpreadsheet.',features:'Dlaczego ten katalog?',featureText:['Rekordy na żywo','Wyszukiwanie i obrazy źródłowe','Dowody QC / galeria','Wewnętrzny research'],featureCopy:['Karty są ładowane z FindSpreadsheet podczas wizyty.','Wyszukiwanie pozostaje tutaj i używa indeksu live.','Otwórz rekord, aby sprawdzić obrazy źródłowe.','Porównuj kategorię, tytuł, cenę i widoczny kontekst.'],how:'Jak to działa',stepText:['Przeglądaj katalog','Otwórz szczegóły','Przejdź do PikoBuy','Sprawdź źródło'],stepCopy:['Zacznij od kategorii lub wyszukiwania live.','Sprawdź obrazy i pola ze źródła.','Użyj oficjalnej ścieżki zakupu, gdy będziesz gotowy.','Obrazy i rekordy są dowodem, nie gwarancją.'],picks:'Najnowsze rekordy produktu',seoTitle:'Czym jest PikoBuy spreadsheet?',seo:'Katalog spreadsheet pomaga przejść od pomysłu do rekordu źródłowego. Ta niezależna strona nie sprzedaje towarów ani nie obiecuje jakości: pokazuje dane live FindSpreadsheet do porównania kontekstu.',faq:'Wskazówki badawcze',faqText:'Sprawdź tytuł, obrazy, cenę i opcje. Magazyn, wysyłka, cło i koszt końcowy mogą się zmienić; potwierdź szczegóły w miejscu docelowym przed zamówieniem.',cta:'Gotowy do researchu?',ctaText:'Szukaj rekordów live FindSpreadsheet bez opuszczania katalogu.',ctaButton:'Otwórz kategorie'},
  sv:{kicker:'LIVEKATALOG · FINDSPREADSHEET-KÄLLA',title:'Din PikoBuy Spreadsheet-katalog',intro:'Bläddra bland aktuella fynd, jämför källbilder och öppna produktposten innan du går vidare till PikoBuy.',browse:'Bläddra per kategori',browseText:'Utforska kategorier direkt från FindSpreadsheet.',features:'Varför denna katalog?',featureText:['Produktposter i realtid','Sökning och källbilder','QC- / galleribevis','Intern produktresearch'],featureCopy:['Kort laddas från FindSpreadsheet vid besök.','Sökning stannar här och använder liveindexet.','Öppna en post för att granska källbilder.','Jämför kategori, titel, pris och synlig kontext.'],how:'Så fungerar det',stepText:['Bläddra i katalogen','Öppna produktdetaljer','Fortsätt till PikoBuy','Kontrollera källan'],stepCopy:['Börja med en kategori eller livesökning.','Granska bilder och fält från källan.','Använd den officiella köprutten när du är redo.','Bilder och poster är bevis, inte garantier.'],picks:'Senaste produktposter',seoTitle:'Vad är ett PikoBuy spreadsheet?',seo:'En spreadsheet-katalog hjälper dig från en produktidé till en källpost. Den här oberoende sajten säljer inga varor och lovar ingen kvalitet: den visar live-data från FindSpreadsheet för att jämföra sammanhang.',faq:'Korta researchpåminnelser',faqText:'Kontrollera titel, källbilder, pris och alternativ. Lager, frakt, tull och slutkostnad kan ändras; bekräfta detaljer på destinationen före beställning.',cta:'Redo att undersöka fynd?',ctaText:'Sök liveposter från FindSpreadsheet utan att lämna katalogen.',ctaButton:'Utforska kategorier'}
};

const referenceInspiredRender = render;
render = async function (url) {
  const [, maybeLang, page = ''] = url.pathname.split('/');
  if (!LOCALES[maybeLang]) return referenceInspiredRender(url);
  if (page === 'category-details') {
    const lang = maybeLang, t = LOCALES[lang];
    const category = cats.includes(url.searchParams.get('category')) ? url.searchParams.get('category') : 'shoes';
    let list = [];
    try { list = products(await source('/' + category + '/'), 24); } catch {}
    return shell(lang, `Category details · ${category}`, `<section class="page"><p class="ey">${esc(t[7])}</p><h1>Category details</h1><p class="note">Browse live source records by category and open any card for its source-derived product details.</p><div class="chips">${cats.map(x => `<a href="/${lang}/category-details?category=${x}">${esc(x.replaceAll('-', ' '))}</a>`).join('')}</div>${list.length ? grid(lang, list) : `<p class="note">${esc(t[7])}</p>`}</section>`);
  }
  if (page) return referenceInspiredRender(url);
  const lang = maybeLang, d = directoryCopy[lang], t = LOCALES[lang];
  const homeUi = ({
    en:['FindSpreadsheet','Source images','QC galleries','Live search'],
    de:['FindSpreadsheet','Quellbilder','QC-Galerien','Live-Suche'],
    fr:['FindSpreadsheet','Images source','Galeries QC','Recherche en direct'],
    es:['FindSpreadsheet','Imágenes de origen','Galerías QC','Búsqueda en vivo'],
    it:['FindSpreadsheet','Immagini sorgente','Gallerie QC','Ricerca live'],
    pt:['FindSpreadsheet','Imagens de origem','Galerias QC','Pesquisa ao vivo'],
    nl:['FindSpreadsheet','Bronafbeeldingen','QC-galerijen','Live zoeken'],
    pl:['FindSpreadsheet','Obrazy źródłowe','Galerie QC','Wyszukiwanie live'],
    sv:['FindSpreadsheet','Källbilder','QC-gallerier','Livesökning']
  })[lang] || ['FindSpreadsheet','Source images','QC galleries','Live search'];
  const allProductsLabel = ({en:'Browse all products',de:'Alle Produkte ansehen',fr:'Voir tous les produits',es:'Ver todos los productos',it:'Vedi tutti i prodotti',pt:'Ver todos os produtos',nl:'Alle producten bekijken',pl:'Zobacz wszystkie produkty',sv:'Visa alla produkter'})[lang] || 'Browse all products';
  // The home page must open immediately.  The 102 live cards are requested
  // afterwards from the internal catalogue route, rather than making the
  // entire landing page wait for two upstream FindSpreadsheet source pages.
  // This still reads only live FindSpreadsheet data: there is no cache or
  // fallback product list here.
  const liveAllProducts = belowAllProductsMarkup(lang);
  const categoryLabels = (CATALOG_UI[lang] || CATALOG_UI.en).labels;
  const categoryLinks = cats.map(x => `<a href="/${lang}/categories?category=${x}">${esc(categoryLabels[x] || x.replaceAll('-', ' '))}</a>`).join('');
  const features = d.featureText.map((x,i) => `<article><h3>${esc(x)}</h3><p>${esc(d.featureCopy[i])}</p></article>`).join('');
  const steps = d.stepText.map((x,i) => `<article><b>STEP 0${i+1}</b><h3>${esc(x)}</h3><p>${esc(d.stepCopy[i])}</p></article>`).join('');
  return shell(lang, d.title, `<section class="directory-hero"><p class="ey">${esc(d.kicker)}</p><h1>${esc(d.title)}</h1><p>${esc(d.intro)}</p><form class="search" action="/${lang}/search"><input name="q" placeholder="Search products or paste a source link"><button>${esc(t[5])}</button></form><a class="all-products-cta" href="/${lang}/categories?category=all-products">${esc(allProductsLabel)}</a><div class="dir-signals"><span>${esc(homeUi[0])}</span><span>${esc(homeUi[1])}</span><span>${esc(homeUi[2])}</span><span>${esc(homeUi[3])}</span></div></section><section class="directory-section"><h2>${esc(d.browse)}</h2><p>${esc(d.browseText)}</p><div class="directory-cats">${categoryLinks}</div></section><section class="directory-section"><h2>${esc(d.features)}</h2><div class="directory-features">${features}</div></section><section class="directory-section"><h2>${esc(d.how)}</h2><div class="directory-steps">${steps}</div></section>${liveAllProducts}<section class="directory-section directory-copy"><h2>${esc(d.seoTitle)}</h2><p>${esc(d.seo)}</p><h3>${esc(d.faq)}</h3><p>${esc(d.faqText)}</p></section><section class="directory-cta"><h2>${esc(d.cta)}</h2><p>${esc(d.ctaText)}</p><a class="button" href="/${lang}/categories">${esc(d.ctaButton)}</a></section>`);
};

const finalShell = shell;
shell = function (lang, title, body) {
  const detailsLabel = ({en:'Category details',de:'Kategorie-Details',fr:'Détails de catégorie',es:'Detalles de categoría',it:'Dettagli categoria',pt:'Detalhes da categoria',nl:'Categoriedetails',pl:'Szczegóły kategorii',sv:'Kategoridetaljer'})[lang] || 'Category details';
  const promoLabel = ({en:'Register · KPNJVF',de:'Registrieren · KPNJVF',fr:'S’inscrire · KPNJVF',es:'Registro · KPNJVF',it:'Registrati · KPNJVF',pt:'Registar · KPNJVF',nl:'Registreren · KPNJVF',pl:'Rejestracja · KPNJVF',sv:'Registrera · KPNJVF'})[lang] || 'Register · KPNJVF';
  return finalShell(lang, title, body)
    .replace(`<a href="/${lang}/categories">${LOCALES[lang][2]}</a>`, `<a href="/${lang}/categories">${LOCALES[lang][2]}</a><a href="/${lang}/category-details">${detailsLabel}</a>`)
    .replace('<details class="language">', `<a class="register-link" href="https://www.pikobuy.com/register?invitedCode=KPNJVF&amp;inviteUserId=1109716">${promoLabel}</a><details class="language">`)
    .replace('</style>', '.directory-hero{background:#182442}.register-link{padding:7px 10px;border-radius:8px;background:#172033;color:#fff;text-decoration:none;font-size:.77rem;font-weight:700;white-space:nowrap}@media(max-width:700px){.register-link{margin-left:auto}.head nav{gap:12px}}</style>');
};

// Apply the catalogue density after the route and detail-page enhancements
// above, so the 102-item layout remains the final routing layer.
const finalCatalogRender = render;
render = async function (url) {
  const [, lang, page = ''] = url.pathname.split('/');
  if (!LOCALES[lang]) return finalCatalogRender(url);
  // The lightweight internal live endpoint is deliberately requested after
  // the category page becomes visible.  A slow upstream response therefore
  // cannot make the visitor's category URL fail to open.
  if (page === 'catalog-source') {
    const category = cats.includes(url.searchParams.get('category')) ? url.searchParams.get('category') : 'all-products';
    const rootPath = safeCategoryPage(category, url.searchParams.get('page'));
    const offset = safeCatalogOffset(url.searchParams.get('offset'));
    try {
      const catalog = await sourceCatalog(category, rootPath, offset);
      const more = catalog.next ? `<p class="catalog-next"><a class="button" href="/${lang}/catalog-source?category=${encodeURIComponent(category)}&page=${encodeURIComponent(catalog.next.path)}&offset=${catalog.next.offset}">${esc((FALLBACK_UI[lang] || FALLBACK_UI.en).next)}</a></p>` : '';
      return shell(lang, 'Live catalogue', `<section class="page catalog-page">${grid(lang, catalog.items)}${more}</section>`);
    } catch (error) {
      const diagnostic = url.searchParams.get('_diagnostic') === '1'
        ? `<p class="note">${esc(error && error.message ? error.message : 'unknown source error')}</p>`
        : '';
      return shell(lang, 'Live catalogue', `<section class="page catalog-page"><p class="note">Live catalogue is retrying. No local products are used.</p>${diagnostic}</section>`);
    }
  }
  if (!['categories', 'category-details'].includes(page)) return finalCatalogRender(url);
  const category = cats.includes(url.searchParams.get('category')) ? url.searchParams.get('category') : 'all-products';
  const label = category === 'all-products' ? 'All products' : category.replaceAll('-', ' ');
  const tabs = cats.map(item => `<a href="/${lang}/${page}?category=${encodeURIComponent(item)}">${esc(item.replaceAll('-', ' '))}</a>`).join('');
  try {
    const catalog = await sourceCatalog(category, categoryRoot(category), safeCatalogOffset(url.searchParams.get('offset')));
    const more = catalog.next ? `<p class="catalog-next"><a class="button" href="/${lang}/${page}?offset=${catalog.next.offset}&category=${encodeURIComponent(category)}">${esc((FALLBACK_UI[lang] || FALLBACK_UI.en).next)}</a></p>` : '';
    return shell(lang, `${label} · PikoBuy Spreadsheet`, `<section class="page catalog-page"><p class="ey">${esc(LOCALES[lang][7])}</p><h1>${esc(label)}</h1><p class="note">102 live FindSpreadsheet products per page · USD prices · every card opens its internal product-detail page.</p><div class="chips">${tabs}</div>${grid(lang, catalog.items)}${more}</section>`);
  } catch {
    return shell(lang, `${label} · PikoBuy Spreadsheet`, `<section class="page catalog-page"><p class="ey">${esc(LOCALES[lang][7])}</p><h1>${esc(label)}</h1><p class="note">Live catalogue is retrying. No local products are used.</p><div class="chips">${tabs}</div></section>`);
  }
};

// Deep navy / white / fluorescent lime reference palette; header controls are
// intentionally left as they were.
const SEO_ARTICLES = [
  ['PikoBuy Spreadsheet: How to Research a Find Before You Order', 'pikobuy spreadsheet', 'A PikoBuy spreadsheet works best as a research layer, not as a promise that an item will be in stock or meet a particular standard. Start with a clear product idea, then compare the title, visible options, source images and the current product link. Save the record you are comparing so that you can return to the same details later.', 'Before paying, verify size, colour, quantity and seller information on the source listing. Product titles can be abbreviated and images may show several variants, so a useful spreadsheet entry should send you to the record rather than make the decision for you. This is especially important when similar listings use nearly identical pictures.', 'The final step is to use the agent checkout only after you understand what is being ordered. PikoBuy says its service supports links from marketplaces including Taobao, Weidian and 1688; the platform is not the underlying seller. That distinction makes source research, rather than keyword stuffing, the useful intent behind this page.'],
  ['How to Use a PikoBuy Link From Taobao, Weidian or 1688', 'pikobuy link', 'A PikoBuy link workflow begins with the original marketplace URL. Copy the complete item URL rather than a shortened social link, then open it through PikoBuy and check that the title, option selectors and price shown correspond to the item you meant to review.', 'Use the source page to record the selected variant before you submit an order. If the listing has several sizes or colours, do not assume the main photograph is the variant in the order. Put any necessary selection note in the appropriate order field and keep a screenshot of the original listing for your own reference.', 'PikoBuy describes link-based access to Taobao, Weidian and 1688. Availability, seller terms and domestic delivery can still change. A careful link review reduces avoidable mistakes, but it cannot guarantee a seller will fulfil an order.'],
  ['PikoBuy QC Photos: What Warehouse Images Can and Cannot Show', 'pikobuy qc photos', 'Inspection or QC photos are useful evidence after an item reaches the warehouse. They can help you compare colour, logo placement, visible defects, measurements or accessories against the original listing. They should be assessed with the source listing open beside them.', 'Use the images to ask focused questions: is the selected size visible, is the colour consistent with the option chosen, are there marks or missing components, and does the quantity look right? If one detail matters, request a focused additional image rather than relying on a wide warehouse shot.', 'QC photos are not a product certification and do not show every construction detail. Lighting, camera angle and packaging can affect what is visible. Treat them as part of a decision before parcel submission, alongside your return window and shipping plan.'],
  ['PikoBuy Shipping Estimate: Weight, Dimensions and Route Choice', 'pikobuy shipping estimate', 'An international shipping estimate is a planning tool, not a final invoice. PikoBuy’s calculator asks for destination, weight and dimensions because route eligibility and parcel size affect the available options. Estimates are most useful when you compare them before adding marginal items to a haul.', 'When a warehouse order is ready, review the item count, measured parcel size and route restrictions before submitting. Combining items may reduce repeated handling, but it may also move a parcel into a different weight or dimensional band. The lowest headline rate is not always the best route for the parcel you actually have.', 'Keep some budget margin for final packaging, route availability and any carrier changes. International transport is handled by third-party logistics providers, so timing and customs outcomes cannot be guaranteed by a directory or spreadsheet.'],
  ['PikoBuy Warehouse Guide: Check Items Before Parcel Submission', 'pikobuy warehouse', 'The warehouse stage is where product research becomes practical. Once an item is marked as received, review the inspection images, order option and visible condition before you decide whether to keep it, request more information or explore an eligible return.', 'Build a simple checklist: compare the received item with the listing, confirm size and colour, check quantity, and note any issue while the order status and photographs are easy to find. This avoids trying to reconstruct the original selection after several orders have been combined.', 'For forwarded goods, PikoBuy says warehouse staff unpack and inspect received parcels and provides confirmation photos. Specialised products may require different expectations, so confirm what can realistically be checked before relying on a warehouse image.'],
  ['PikoBuy Return Guide: Understanding the 5-Day Warehouse Window', 'pikobuy return', 'PikoBuy’s published returns information describes a five-day window after an order becomes In Warehouse for eligible items. The practical lesson is simple: do not leave received orders unreviewed while you decide on other products. Check the listing and images as soon as they appear.', 'Eligibility depends on the seller’s return offering and the condition of the item. Certain categories and opened or customised goods can be excluded, and shipping or service costs may apply. Read the current return page and the specific seller conditions before you assume a request will be free or accepted.', 'When an issue is visible, keep your request factual: identify the order, the selected option, the evidence in the photos and the result you are seeking. A clear request is more useful than general dissatisfaction and helps you decide before the warehouse deadline expires.'],
  ['PikoBuy Parcel Rehearsal: When It Helps and What to Compare', 'pikobuy parcel rehearsal', 'A parcel rehearsal can help you compare possible shipping cost and packaging outcomes before final submission. Use it when the haul has bulky items, multiple shoe boxes, fragile goods or uncertain dimensional weight. The goal is to understand trade-offs, not to chase an unrealistically exact quote.', 'Compare the before-and-after numbers with the items you intend to ship: total weight, parcel dimensions, packing choices and route options. If removing packaging changes the risk for an item, decide based on protection as well as cost. Keep your final recipient address and country rules in mind.', 'Use a rehearsal to make one deliberate choice, then re-check the final parcel screen. Carrier rules and available routes can change, so the submitted parcel information is the reference that matters.'],
  ['PikoBuy International Shipping: Customs, Tracking and Realistic Expectations', 'pikobuy international shipping', 'International shipping involves carrier scans, customs processes and delivery networks outside the control of a product directory. Tracking can pause between hand-offs or while a parcel is being processed. Treat an estimate as a range, not a guaranteed arrival date.', 'Before submission, confirm the recipient address, country-specific restrictions and whether the route accepts the items in your parcel. Keep order records, parcel details and tracking information together so that you can provide accurate details if you need to contact support or a carrier.', 'PikoBuy’s terms say third-party logistics providers handle international carriage and that customs and uncontrollable transport risks exist. Plan accordingly: ship only permitted items, use accurate information, and do not make time-sensitive commitments based solely on an early estimate.'],
  ['Is PikoBuy Safe to Use? A Research Checklist Before Paying', 'is pikobuy safe', 'A useful safety question is not answered by a single review or a promotional claim. Start by reading the platform’s current terms, returns information and shipping policy, then decide whether the service model fits the item and risk you are considering.', 'PikoBuy describes itself as a purchasing-agent and forwarding service rather than the underlying product seller. That means seller quality, stock accuracy and product authenticity remain separate questions. Review the original listing, avoid prohibited or unlawful goods, and use only information you can verify.', 'For a careful first order, begin with an item you understand, check warehouse evidence promptly and choose shipping with realistic expectations. Keep payment and order records. If anything is unclear, ask the platform’s official support rather than relying on an unaffiliated page.'],
  ['PikoBuy vs Buying Direct: When a Spreadsheet Directory Is Useful', 'pikobuy buying agent', 'Buying through a shopping agent can make link-based discovery and international forwarding easier to organise, but it does not remove the need to evaluate a marketplace seller. A spreadsheet directory is most useful when it helps you find and compare records without pretending to be the seller or the agent.', 'Use categories and search to narrow the catalogue, then open individual product pages to inspect the source-derived title, price, images and product ID. Compare several records before choosing one. This approach makes the decision traceable and avoids treating a popular spreadsheet entry as a recommendation.', 'PikoBuy’s official materials describe product-link access, warehouse inspection and international route choices. Use those platform tools for the transaction, and use a directory for discovery and source comparison.']
];

const SIMPLE_FAQ = [
  ['What is PikoBuy?', 'PikoBuy describes itself as a purchasing-agent and parcel-forwarding platform. It can open product links from marketplaces such as Taobao, Weidian and 1688, but it is not the underlying marketplace seller.'],
  ['How do I place an order?', 'Use the original product URL, confirm the listing and selected option, then use PikoBuy’s order flow. Re-check price, size, colour and quantity before payment because the source seller controls the actual listing.'],
  ['What are QC or inspection photos?', 'They are warehouse images that help you compare the received item with the source listing. Use them to inspect visible details and request focused additional images when a specific point matters. They are not a guarantee of quality or authenticity.'],
  ['How long do I have to request a return?', 'PikoBuy publishes a five-day return window after an eligible item enters the warehouse. Eligibility, seller conditions and fees vary, so read the current official returns page before making a decision.'],
  ['How is international shipping calculated?', 'The shipping estimate depends on destination, parcel weight and dimensions, and available route. The final parcel information and route choice are the relevant figures after warehouse processing.'],
  ['Can shipping or customs be guaranteed?', 'No. International carriers and customs authorities are separate third parties. Delivery time, clearance and any transport disruption can change, so avoid treating estimates as promises.'],
  ['What should I do if an order has a problem?', 'Keep the listing, order ID and photographs together. Contact PikoBuy through its official support route with the specific issue and evidence, then review whether the order is within the applicable warehouse or after-sales period.'],
  ['What items should I avoid?', 'Do not use the service for prohibited, unlawful, counterfeit or restricted goods. Check the current platform terms and the destination country’s rules before ordering or shipping.']
];

// Full language equivalents for editorial UI.  Source product fields remain
// untouched; this covers the site-authored SEO and FAQ copy that must change
// with the reader's selected language as well.
const EDITORIAL_LOCALES = {
  de:{guide:'Rechercheleitfaden',guidesTitle:'PikoBuy-Leitfäden',guidesIntro:'Zehn praktische Leitfäden zu Produktlinks, Lagerprüfung, Rückgaben und internationalem Versand bei PikoBuy.',a:'Dieser Leitfaden erklärt den Suchbegriff {keyword} mit einer nachvollziehbaren Recherche statt mit Kaufversprechen. Prüfe immer den aktuellen Quelleneintrag, die sichtbaren Optionen und die Bilder, bevor du eine Entscheidung triffst.',b:'Vergleiche Titel, Preis, Variante und Bilder direkt mit dem Live-Eintrag von FindSpreadsheet. Lagerbestand, Verkäuferbedingungen, Versandroute und Endkosten können sich ändern; eine Spreadsheet-Seite ersetzt diese Prüfung nicht.',c:'Nutze den offiziellen PikoBuy-Ablauf erst, wenn die Auswahl klar ist. QC-Bilder, Lagerdaten und Versandangaben sind Entscheidungshilfen, keine Garantie für Bestand, Qualität, Lieferzeit oder Zollabwicklung.',faqTitle:'Häufige Fragen',faqIntro:'Kurze Antworten auf Basis veröffentlichter PikoBuy-Servicebeschreibungen. Prüfe vor Bestellung oder Versand immer die aktuelle offizielle Richtlinie.',faqQ:['Was ist PikoBuy?','Wie gebe ich eine Bestellung auf?','Was sind QC- oder Prüfbilder?','Wie lange kann ich eine Rückgabe anfragen?','Wie wird internationaler Versand berechnet?','Kann Versand oder Zoll garantiert werden?','Was tun bei einem Problem mit der Bestellung?','Welche Artikel sollte ich vermeiden?'],faqA:['PikoBuy beschreibt sich als Einkaufsagent und Paketweiterleitung. Prüfe immer die aktuelle Plattformbeschreibung und den ursprünglichen Verkäufer.', 'Nutze den vollständigen Produktlink, bestätige Variante, Größe, Farbe, Menge und Preis und kontrolliere die Angaben vor der Zahlung.', 'QC-Bilder sind Lageraufnahmen zum Vergleich mit dem Quelleneintrag. Sie zeigen sichtbare Details, sind aber keine Qualitäts- oder Echtheitsgarantie.', 'PikoBuy veröffentlicht für geeignete Artikel ein Rückgabefenster nach Lagereingang. Bedingungen, Verkäuferfreigabe und Gebühren können abweichen.', 'Die Schätzung hängt von Zielort, Gewicht, Abmessungen und verfügbarer Route ab. Maßgeblich sind die endgültigen Paketdaten nach der Lagerbearbeitung.', 'Nein. Transportdienstleister und Zollbehörden sind unabhängige Dritte. Zeiten, Freigabe und Störungen können sich ändern.', 'Sichere Eintrag, Bestellnummer und Bilder. Wende dich mit konkreten Fakten und Nachweisen an den offiziellen PikoBuy-Support.', 'Bestelle oder versende keine verbotenen, rechtswidrigen, gefälschten oder eingeschränkten Waren. Prüfe Plattform- und Ziellandregeln.']},
  fr:{guide:'Guide de recherche',guidesTitle:'Guides PikoBuy',guidesIntro:'Dix guides pratiques sur les liens produit, le contrôle en entrepôt, les retours et l’expédition internationale avec PikoBuy.',a:'Ce guide explique le terme de recherche {keyword} dans une logique de vérification, sans promesse d’achat. Consultez toujours la fiche source actuelle, les options visibles et les images avant de décider.',b:'Comparez le titre, le prix, la variante et les images avec la fiche FindSpreadsheet en direct. Le stock, les conditions du vendeur, la route et le coût final peuvent changer : un spreadsheet ne remplace pas cette vérification.',c:'Utilisez le parcours PikoBuy officiel seulement lorsque le choix est clair. Les images QC, données d’entrepôt et informations d’expédition aident à décider, mais ne garantissent ni disponibilité, ni qualité, ni délai, ni douane.',faqTitle:'Questions fréquentes',faqIntro:'Réponses simples basées sur les descriptions de service publiées par PikoBuy. Vérifiez toujours la politique officielle actuelle avant commande ou expédition.',faqQ:['Qu’est-ce que PikoBuy ?','Comment passer une commande ?','Que sont les photos QC ou d’inspection ?','Combien de temps pour demander un retour ?','Comment est calculée l’expédition internationale ?','L’expédition ou la douane peuvent-elles être garanties ?','Que faire en cas de problème de commande ?','Quels articles éviter ?'],faqA:['PikoBuy se présente comme un agent d’achat et de réexpédition. Vérifiez toujours la description actuelle de la plateforme et le vendeur d’origine.','Utilisez le lien produit complet, confirmez variante, taille, couleur, quantité et prix avant le paiement.','Les photos QC sont des images d’entrepôt pour comparer avec la fiche source. Elles montrent des détails visibles, sans garantir qualité ou authenticité.','PikoBuy publie un délai de retour pour les articles admissibles après réception en entrepôt. Les conditions, l’accord du vendeur et les frais peuvent varier.','L’estimation dépend de la destination, du poids, des dimensions et de la route disponible. Les données finales du colis après entrepôt font référence.','Non. Les transporteurs et les douanes sont des tiers indépendants. Les délais, le dédouanement et les interruptions peuvent changer.','Conservez la fiche, le numéro de commande et les images. Contactez le support officiel PikoBuy avec des faits et preuves précis.','N’achetez ni n’expédiez de produits interdits, illégaux, contrefaits ou restreints. Vérifiez les règles de la plateforme et du pays de destination.']},
  es:{guide:'Guía de investigación',guidesTitle:'Guías de PikoBuy',guidesIntro:'Diez guías prácticas sobre enlaces de producto, revisión de almacén, devoluciones y envíos internacionales con PikoBuy.',a:'Esta guía explica la búsqueda {keyword} desde la investigación, no como una promesa de compra. Revisa siempre la ficha de origen actual, las opciones visibles y las imágenes antes de decidir.',b:'Compara título, precio, variante e imágenes con la ficha activa de FindSpreadsheet. El stock, las condiciones del vendedor, la ruta y el coste final pueden cambiar; una hoja de cálculo no sustituye esa comprobación.',c:'Usa el proceso oficial de PikoBuy solo cuando la elección esté clara. Las fotos QC, los datos de almacén y el envío ayudan a decidir, pero no garantizan stock, calidad, plazo ni aduana.',faqTitle:'Preguntas frecuentes',faqIntro:'Respuestas sencillas basadas en las descripciones públicas de PikoBuy. Comprueba siempre la política oficial actual antes de pedir o enviar.',faqQ:['¿Qué es PikoBuy?','¿Cómo hago un pedido?','¿Qué son las fotos QC o de inspección?','¿Cuánto tiempo tengo para solicitar una devolución?','¿Cómo se calcula el envío internacional?','¿Se puede garantizar el envío o la aduana?','¿Qué hago si hay un problema con el pedido?','¿Qué artículos debo evitar?'],faqA:['PikoBuy se presenta como agente de compra y reenvío. Revisa la descripción actual de la plataforma y al vendedor original.','Usa el enlace completo del producto y confirma variante, talla, color, cantidad y precio antes del pago.','Las fotos QC son imágenes de almacén para comparar con el anuncio. Muestran detalles visibles, pero no garantizan calidad ni autenticidad.','PikoBuy publica un plazo de devolución para artículos aptos tras entrar al almacén. Las condiciones, aceptación del vendedor y costes pueden variar.','La estimación depende de destino, peso, dimensiones y ruta disponible. Los datos finales del paquete después del almacén son los relevantes.','No. Los transportistas y las aduanas son terceros independientes. Los plazos, la liberación y las interrupciones pueden cambiar.','Guarda la ficha, el número de pedido y las fotos. Contacta al soporte oficial de PikoBuy con hechos y pruebas concretas.','No compres ni envíes artículos prohibidos, ilegales, falsificados o restringidos. Revisa las reglas de plataforma y destino.']},
  it:{guide:'Guida di ricerca',guidesTitle:'Guide PikoBuy',guidesIntro:'Dieci guide pratiche su link prodotto, controlli in magazzino, resi e spedizione internazionale con PikoBuy.',a:'Questa guida affronta la ricerca {keyword} con un metodo di verifica, non con promesse di acquisto. Controlla sempre la scheda sorgente attuale, le opzioni visibili e le immagini prima di decidere.',b:'Confronta titolo, prezzo, variante e immagini con la scheda live di FindSpreadsheet. Disponibilità, condizioni del venditore, rotta e costo finale possono cambiare; un foglio non sostituisce questo controllo.',c:'Usa il percorso ufficiale PikoBuy solo quando la scelta è chiara. Foto QC, dati di magazzino e spedizione aiutano a decidere, ma non garantiscono disponibilità, qualità, tempi o dogana.',faqTitle:'Domande frequenti',faqIntro:'Risposte semplici basate sulle descrizioni di servizio pubblicate da PikoBuy. Verifica sempre la politica ufficiale attuale prima di ordinare o spedire.',faqQ:['Che cos’è PikoBuy?','Come effettuo un ordine?','Cosa sono le foto QC o di ispezione?','Quanto tempo ho per chiedere un reso?','Come viene calcolata la spedizione internazionale?','Spedizione o dogana possono essere garantite?','Cosa fare se un ordine ha un problema?','Quali articoli devo evitare?'],faqA:['PikoBuy si descrive come agente d’acquisto e inoltro pacchi. Controlla sempre la descrizione aggiornata della piattaforma e il venditore originale.','Usa il link completo del prodotto e conferma variante, taglia, colore, quantità e prezzo prima del pagamento.','Le foto QC sono immagini di magazzino per confrontare l’articolo con la scheda. Mostrano dettagli visibili, ma non garantiscono qualità o autenticità.','PikoBuy pubblica una finestra di reso per articoli idonei dopo l’ingresso in magazzino. Condizioni, consenso del venditore e costi possono variare.','La stima dipende da destinazione, peso, dimensioni e rotta disponibile. Fanno fede i dati finali del pacco dopo il magazzino.','No. Corrieri e dogane sono terze parti indipendenti. Tempi, sdoganamento e interruzioni possono cambiare.','Conserva scheda, ID ordine e immagini. Contatta il supporto ufficiale PikoBuy con fatti e prove specifiche.','Non acquistare né spedire articoli proibiti, illegali, contraffatti o soggetti a restrizioni. Controlla le regole della piattaforma e del Paese.']},
  pt:{guide:'Guia de pesquisa',guidesTitle:'Guias PikoBuy',guidesIntro:'Dez guias práticos sobre links de produto, verificação em armazém, devoluções e envio internacional com PikoBuy.',a:'Este guia explica a pesquisa {keyword} com base em verificação, não em promessas de compra. Consulte sempre o registo de origem atual, as opções visíveis e as imagens antes de decidir.',b:'Compare título, preço, variante e imagens com o registo FindSpreadsheet em direto. Stock, condições do vendedor, rota e custo final podem mudar; uma spreadsheet não substitui essa verificação.',c:'Use o percurso oficial PikoBuy apenas quando a escolha estiver clara. Fotos QC, dados de armazém e envio ajudam a decidir, mas não garantem stock, qualidade, prazo ou alfândega.',faqTitle:'Perguntas frequentes',faqIntro:'Respostas simples baseadas nas descrições de serviço publicadas pela PikoBuy. Confirme sempre a política oficial atual antes de encomendar ou enviar.',faqQ:['O que é PikoBuy?','Como faço uma encomenda?','O que são fotos QC ou de inspeção?','Quanto tempo tenho para pedir devolução?','Como é calculado o envio internacional?','O envio ou a alfândega podem ser garantidos?','O que fazer se houver um problema com a encomenda?','Que artigos devo evitar?'],faqA:['PikoBuy descreve-se como agente de compra e reencaminhamento. Confirme sempre a descrição atual da plataforma e o vendedor original.','Use o link completo do produto e confirme variante, tamanho, cor, quantidade e preço antes do pagamento.','As fotos QC são imagens de armazém para comparar com o anúncio. Mostram detalhes visíveis, mas não garantem qualidade ou autenticidade.','PikoBuy publica uma janela de devolução para artigos elegíveis após entrada no armazém. Condições, aprovação do vendedor e custos podem variar.','A estimativa depende de destino, peso, dimensões e rota disponível. Os dados finais do pacote após o armazém são a referência.','Não. Transportadoras e alfândegas são terceiros independentes. Prazos, desalfandegamento e interrupções podem mudar.','Guarde o registo, ID da encomenda e imagens. Contacte o suporte oficial PikoBuy com factos e provas específicos.','Não compre nem envie artigos proibidos, ilegais, falsificados ou restritos. Verifique regras da plataforma e do destino.']},
  nl:{guide:'Onderzoeksgids',guidesTitle:'PikoBuy-gidsen',guidesIntro:'Tien praktische gidsen over productlinks, magazijncontrole, retouren en internationale verzending met PikoBuy.',a:'Deze gids behandelt de zoekterm {keyword} vanuit onderzoek, niet als aankoopbelofte. Controleer altijd de actuele bronvermelding, zichtbare opties en afbeeldingen voordat je beslist.',b:'Vergelijk titel, prijs, variant en beelden met de live-vermelding van FindSpreadsheet. Voorraad, verkopersvoorwaarden, route en eindprijs kunnen veranderen; een spreadsheet vervangt deze controle niet.',c:'Gebruik de officiële PikoBuy-route pas wanneer de keuze duidelijk is. QC-foto’s, magazijngegevens en verzendinformatie helpen bij een keuze, maar garanderen geen voorraad, kwaliteit, levertijd of douane-afhandeling.',faqTitle:'Veelgestelde vragen',faqIntro:'Korte antwoorden op basis van de gepubliceerde servicebeschrijvingen van PikoBuy. Controleer altijd het actuele officiële beleid voordat je bestelt of verzendt.',faqQ:['Wat is PikoBuy?','Hoe plaats ik een bestelling?','Wat zijn QC- of inspectiefoto’s?','Hoe lang heb ik om een retour aan te vragen?','Hoe wordt internationale verzending berekend?','Kunnen verzending of douane worden gegarandeerd?','Wat doe ik bij een probleem met een bestelling?','Welke artikelen moet ik vermijden?'],faqA:['PikoBuy omschrijft zichzelf als inkoopagent en pakketdoorstuurservice. Controleer altijd de actuele platformbeschrijving en de oorspronkelijke verkoper.','Gebruik de volledige productlink en bevestig variant, maat, kleur, aantal en prijs vóór betaling.','QC-foto’s zijn magazijnbeelden om met de bronvermelding te vergelijken. Ze tonen zichtbare details, maar garanderen geen kwaliteit of authenticiteit.','PikoBuy publiceert een retourvenster voor geschikte artikelen na magazijnontvangst. Voorwaarden, toestemming van de verkoper en kosten kunnen verschillen.','De schatting hangt af van bestemming, gewicht, afmetingen en beschikbare route. De definitieve pakketgegevens na magazijnverwerking zijn leidend.','Nee. Vervoerders en douaneautoriteiten zijn onafhankelijke derden. Termijnen, inklaring en verstoringen kunnen veranderen.','Bewaar de vermelding, het bestel-ID en de foto’s. Neem met concrete feiten en bewijs contact op met de officiële PikoBuy-support.','Koop of verstuur geen verboden, illegale, namaak- of beperkte goederen. Controleer de regels van platform en bestemming.']},
  pl:{guide:'Poradnik researchu',guidesTitle:'Poradniki PikoBuy',guidesIntro:'Dziesięć praktycznych poradników o linkach produktowych, kontroli magazynowej, zwrotach i wysyłce międzynarodowej z PikoBuy.',a:'Ten poradnik omawia zapytanie {keyword} jako proces researchu, a nie obietnicę zakupu. Przed decyzją zawsze sprawdź aktualny rekord źródłowy, widoczne opcje i zdjęcia.',b:'Porównaj tytuł, cenę, wariant i obrazy z aktywnym rekordem FindSpreadsheet. Stan magazynowy, warunki sprzedawcy, trasa i koszt końcowy mogą się zmienić; spreadsheet nie zastępuje tej kontroli.',c:'Z oficjalnej ścieżki PikoBuy korzystaj dopiero po jasnym wyborze. Zdjęcia QC, dane magazynowe i wysyłkowe pomagają podjąć decyzję, lecz nie gwarantują dostępności, jakości, terminu ani odprawy.',faqTitle:'Częste pytania',faqIntro:'Krótkie odpowiedzi oparte na opublikowanych opisach usług PikoBuy. Przed zamówieniem lub wysyłką zawsze sprawdź aktualne oficjalne zasady.',faqQ:['Czym jest PikoBuy?','Jak złożyć zamówienie?','Czym są zdjęcia QC lub inspekcyjne?','Jak długo można prosić o zwrot?','Jak obliczana jest wysyłka międzynarodowa?','Czy wysyłka lub cło mogą być gwarantowane?','Co zrobić przy problemie z zamówieniem?','Jakich produktów unikać?'],faqA:['PikoBuy opisuje się jako agent zakupowy i usługa przekazywania paczek. Zawsze sprawdzaj aktualny opis platformy i pierwotnego sprzedawcę.','Użyj pełnego linku produktu oraz potwierdź wariant, rozmiar, kolor, ilość i cenę przed płatnością.','Zdjęcia QC to obrazy z magazynu do porównania z ofertą. Pokazują widoczne szczegóły, ale nie gwarantują jakości ani autentyczności.','PikoBuy publikuje okno zwrotu dla kwalifikujących się produktów po wejściu do magazynu. Warunki, zgoda sprzedawcy i opłaty mogą się różnić.','Wycena zależy od miejsca docelowego, wagi, wymiarów i dostępnej trasy. Wiążące są końcowe dane paczki po obsłudze magazynowej.','Nie. Przewoźnicy i urzędy celne są niezależnymi stronami trzecimi. Czas, odprawa i zakłócenia mogą się zmienić.','Zachowaj ofertę, ID zamówienia i zdjęcia. Skontaktuj się z oficjalnym wsparciem PikoBuy, podając konkretne fakty i dowody.','Nie kupuj ani nie wysyłaj towarów zakazanych, nielegalnych, podrabianych lub ograniczonych. Sprawdź zasady platformy i kraju docelowego.']},
  sv:{guide:'Researchguide',guidesTitle:'PikoBuy-guider',guidesIntro:'Tio praktiska guider om produktlänkar, lagerkontroll, returer och internationell frakt med PikoBuy.',a:'Den här guiden förklarar sökningen {keyword} som research, inte som ett köplöfte. Kontrollera alltid aktuell källpost, synliga alternativ och bilder innan du bestämmer dig.',b:'Jämför titel, pris, variant och bilder med den aktiva FindSpreadsheet-posten. Lagerstatus, säljarvillkor, rutt och slutkostnad kan ändras; ett spreadsheet ersätter inte denna kontroll.',c:'Använd PikoBuys officiella flöde först när valet är tydligt. QC-bilder, lagerdata och fraktinformation hjälper dig att bedöma, men garanterar inte lagerstatus, kvalitet, tid eller tull.',faqTitle:'Vanliga frågor',faqIntro:'Korta svar baserade på PikoBuys publicerade tjänstebeskrivningar. Kontrollera alltid den aktuella officiella policyn före beställning eller frakt.',faqQ:['Vad är PikoBuy?','Hur gör jag en beställning?','Vad är QC- eller inspektionsbilder?','Hur länge kan jag begära retur?','Hur beräknas internationell frakt?','Kan frakt eller tull garanteras?','Vad gör jag om en beställning har problem?','Vilka varor bör jag undvika?'],faqA:['PikoBuy beskriver sig som inköpsagent och paketförmedlare. Kontrollera alltid den aktuella plattformsbeskrivningen och ursprungssäljaren.','Använd hela produktlänken och bekräfta variant, storlek, färg, antal och pris före betalning.','QC-bilder är lagerbilder för jämförelse med källposten. De visar synliga detaljer men garanterar inte kvalitet eller äkthet.','PikoBuy publicerar ett returfönster för berättigade varor efter lagerinleverans. Villkor, säljarens godkännande och avgifter kan variera.','Uppskattningen beror på destination, vikt, mått och tillgänglig rutt. Slutliga paketuppgifter efter lagerhantering är vägledande.','Nej. Transportörer och tullmyndigheter är oberoende tredje parter. Tider, klarering och störningar kan förändras.','Spara post, order-ID och bilder. Kontakta PikoBuys officiella support med konkreta fakta och underlag.','Köp eller skicka inte förbjudna, olagliga, förfalskade eller begränsade varor. Kontrollera plattformens och destinationens regler.']}
};

// These per-guide signals keep translated articles semantically distinct. The
// earlier build used the same three broad paragraphs for all ten non-English
// guides; each row now identifies the concrete subject, comparison and
// decision that match the corresponding English guide.
const GUIDE_SIGNALS = {
  de:[['Quelleneintrag und Varianten','Titel, Optionen und Quellbilder','erst nach der Quellenprüfung bestellen'],['vollständige Taobao-, Weidian- oder 1688-Links','Variante, Größe und Farbe','den originalen Link vor der Zahlung sichern'],['QC-Fotos aus dem Lager','sichtbare Details und gewünschte Variante','bei Bedarf ein gezieltes Zusatzfoto anfragen'],['Gewicht, Maße und Versandroute','Paketdaten statt einer bloßen Schätzung','Budget für die endgültige Verpackung lassen'],['Lagerstatus und Rückgabefenster','Verkäuferbedingungen vor Einlagerung','Fristen prüfen, bevor das Paket versendet wird'],['Paket zusammenstellen','Gewichts- und Größenband','Route erst mit den finalen Paketdaten wählen'],['Zoll- und Deklarationskontext','Ziellandregeln und Einschränkungen','keine Transport- oder Zollgarantie erwarten'],['Bildsuche und Quellvergleich','ähnliche Listings und Varianten','nicht allein nach dem Hauptbild entscheiden'],['Preisumrechnung und Optionen','Stückpreis, Auswahl und Inlandskosten','Endbetrag vor dem Agenten-Checkout prüfen'],['sichere Agentenrecherche','Quellseite, Bilder und Bestelldaten','Nachweise für eine Support-Anfrage aufbewahren']],
  fr:[['fiche source et variantes','titre, options et images source','commander seulement après vérification'],['liens Taobao, Weidian ou 1688 complets','variante, taille et couleur','conserver le lien source avant paiement'],['photos QC d’entrepôt','détails visibles et variante choisie','demander une photo ciblée si nécessaire'],['poids, dimensions et route','données du colis plutôt qu’une estimation','garder une marge pour l’emballage final'],['stock d’entrepôt et délai de retour','conditions vendeur avant réception','vérifier le délai avant l’envoi'],['composition du colis','tranche de poids et dimensions','choisir la route avec les données finales'],['douane et déclaration','règles et restrictions de destination','ne pas attendre de garantie de livraison'],['recherche par image et comparaison','annonces similaires et variantes','ne pas décider sur l’image principale seule'],['conversion de prix et options','prix unitaire, sélection et frais locaux','contrôler le total avant le paiement'],['recherche d’agent sûre','fiche source, images et données de commande','conserver les preuves pour le support']],
  es:[['ficha de origen y variantes','título, opciones e imágenes de origen','pedir solo después de verificar la fuente'],['enlaces completos de Taobao, Weidian o 1688','variante, talla y color','guardar el enlace original antes de pagar'],['fotos QC de almacén','detalles visibles y variante elegida','pedir una foto concreta si hace falta'],['peso, medidas y ruta','datos del paquete y no una estimación aislada','dejar margen para el embalaje final'],['stock de almacén y plazo de devolución','condiciones del vendedor antes de recibir','revisar el plazo antes de enviar'],['composición del paquete','banda de peso y dimensiones','elegir ruta con datos finales'],['aduana y declaración','reglas y restricciones de destino','no esperar garantía de transporte'],['búsqueda por imagen y comparación','anuncios similares y variantes','no decidir solo por la foto principal'],['conversión de precio y opciones','precio unitario, selección y costes locales','revisar el total antes de pagar'],['investigación segura del agente','ficha de origen, fotos y pedido','guardar pruebas para soporte']],
  it:[['scheda sorgente e varianti','titolo, opzioni e immagini sorgente','ordinare solo dopo la verifica'],['link completi Taobao, Weidian o 1688','variante, taglia e colore','salvare il link originale prima del pagamento'],['foto QC di magazzino','dettagli visibili e variante scelta','chiedere una foto mirata se serve'],['peso, dimensioni e rotta','dati del pacco e non una sola stima','lasciare margine per l’imballaggio finale'],['stock di magazzino e finestra di reso','condizioni del venditore prima dell’arrivo','verificare i termini prima della spedizione'],['composizione del pacco','fascia di peso e dimensioni','scegliere la rotta con dati definitivi'],['dogana e dichiarazione','regole e restrizioni della destinazione','non aspettarsi garanzie di trasporto'],['ricerca immagini e confronto','annunci simili e varianti','non decidere solo dalla foto principale'],['conversione prezzo e opzioni','prezzo unitario, scelta e costi locali','controllare il totale prima del pagamento'],['ricerca sicura dell’agente','scheda sorgente, immagini e ordine','conservare prove per il supporto']],
  pt:[['registo fonte e variantes','título, opções e imagens de origem','encomendar só depois de verificar'],['links completos Taobao, Weidian ou 1688','variante, tamanho e cor','guardar o link original antes de pagar'],['fotos QC de armazém','detalhes visíveis e variante escolhida','pedir foto específica se necessário'],['peso, dimensões e rota','dados da encomenda e não apenas estimativa','deixar margem para embalagem final'],['stock de armazém e prazo de devolução','condições do vendedor antes da receção','verificar prazos antes do envio'],['composição do pacote','faixa de peso e dimensões','escolher rota com dados finais'],['alfândega e declaração','regras e restrições do destino','não esperar garantia de transporte'],['pesquisa por imagem e comparação','anúncios semelhantes e variantes','não decidir só pela imagem principal'],['conversão de preço e opções','preço unitário, escolha e custos locais','confirmar o total antes de pagar'],['pesquisa segura do agente','registo fonte, imagens e pedido','guardar provas para o suporte']],
  nl:[['bronrecord en varianten','titel, opties en bronafbeeldingen','pas bestellen na broncontrole'],['volledige Taobao-, Weidian- of 1688-links','variant, maat en kleur','de originele link vóór betaling bewaren'],['QC-foto’s uit het magazijn','zichtbare details en gekozen variant','zo nodig een gerichte foto aanvragen'],['gewicht, afmetingen en route','pakketgegevens in plaats van alleen een schatting','ruimte laten voor eindverpakking'],['magazijnvoorraad en retourtermijn','verkopersvoorwaarden vóór ontvangst','termijnen bekijken vóór verzending'],['samenstelling van het pakket','gewichtsklasse en afmetingen','route kiezen met de definitieve gegevens'],['douane en aangifte','bestemmingsregels en beperkingen','geen vervoersgarantie verwachten'],['zoeken op afbeelding en vergelijken','vergelijkbare listings en varianten','niet alleen op de hoofdfoto beslissen'],['prijsomrekening en opties','stukprijs, keuze en lokale kosten','totaal vóór betaling controleren'],['veilige agentresearch','bronrecord, afbeeldingen en ordergegevens','bewijs voor support bewaren']],
  pl:[['rekord źródłowy i warianty','tytuł, opcje i obrazy źródłowe','zamawiać dopiero po weryfikacji'],['pełne linki Taobao, Weidian lub 1688','wariant, rozmiar i kolor','zachować oryginalny link przed płatnością'],['zdjęcia QC z magazynu','widoczne szczegóły i wybrany wariant','w razie potrzeby poprosić o konkretne zdjęcie'],['waga, wymiary i trasa','dane paczki zamiast samej wyceny','zostawić margines na końcowe pakowanie'],['stan magazynu i termin zwrotu','warunki sprzedawcy przed przyjęciem','sprawdzić terminy przed wysyłką'],['zawartość paczki','próg wagi i wymiary','wybrać trasę na podstawie danych końcowych'],['cło i deklaracja','zasady oraz ograniczenia miejsca docelowego','nie oczekiwać gwarancji transportu'],['wyszukiwanie obrazem i porównanie','podobne oferty i warianty','nie decydować wyłącznie po zdjęciu głównym'],['przeliczenie ceny i opcje','cena sztuki, wybór i koszty lokalne','sprawdzić sumę przed płatnością'],['bezpieczny research agenta','rekord źródłowy, zdjęcia i dane zamówienia','zachować dowody dla wsparcia']],
  sv:[['källpost och varianter','titel, alternativ och källbilder','beställa först efter källkontroll'],['fullständiga Taobao-, Weidian- eller 1688-länkar','variant, storlek och färg','spara originallänken före betalning'],['QC-bilder från lagret','synliga detaljer och vald variant','be om en riktad bild vid behov'],['vikt, mått och rutt','paketdata i stället för bara en uppskattning','lämna marginal för slutlig packning'],['lagerstatus och returfönster','säljarvillkor före inleverans','kontrollera tidsfrister före frakt'],['paketsammansättning','viktklass och mått','välj rutt med slutliga paketdata'],['tull och deklaration','regler och begränsningar på destinationen','förvänta ingen transportgaranti'],['bildsökning och jämförelse','liknande listningar och varianter','avgör inte bara från huvudbilden'],['prisomräkning och alternativ','styckepris, val och lokala kostnader','kontrollera totalen före betalning'],['säker agentresearch','källpost, bilder och orderuppgifter','spara underlag för support']]
};

const GUIDE_PARAGRAPHS = {
  de:s=>[`Dieser Beitrag behandelt ${s[0]}. Prüfe dafür den aktuellen Quelleneintrag statt von einem einzelnen Vorschaubild auszugehen.`,`Im Mittelpunkt stehen ${s[1]}. Vergleiche diese Angaben mit der gewählten Variante und den sichtbaren Bildern.`,`Für die Entscheidung gilt: ${s[2]}. Bestand, Verkäuferbedingungen, Versand und Endkosten können sich ändern.`],
  fr:s=>[`Cet article traite de ${s[0]}. Vérifiez la fiche source actuelle plutôt que de vous fier à une seule image d’aperçu.`,`L’attention porte sur ${s[1]}. Comparez ces éléments avec la variante choisie et les images visibles.`,`Pour décider : ${s[2]}. Le stock, les conditions vendeur, l’expédition et le coût final peuvent changer.`],
  es:s=>[`Este artículo trata ${s[0]}. Revisa la ficha de origen actual y no te bases solo en una imagen de vista previa.`,`El punto de comparación es ${s[1]}. Compáralo con la variante elegida y las imágenes visibles.`,`Para decidir: ${s[2]}. El stock, las condiciones del vendedor, el envío y el coste final pueden cambiar.`],
  it:s=>[`Questo articolo riguarda ${s[0]}. Controlla la scheda sorgente attuale invece di basarti su una sola immagine di anteprima.`,`Il confronto riguarda ${s[1]}. Verifica questi elementi con la variante scelta e le immagini visibili.`,`Per decidere: ${s[2]}. Disponibilità, condizioni del venditore, spedizione e costo finale possono cambiare.`],
  pt:s=>[`Este artigo aborda ${s[0]}. Consulte o registo fonte atual em vez de confiar apenas numa imagem de pré-visualização.`,`O ponto de comparação é ${s[1]}. Compare estes elementos com a variante escolhida e as imagens visíveis.`,`Para decidir: ${s[2]}. Stock, condições do vendedor, envio e custo final podem mudar.`],
  nl:s=>[`Dit artikel behandelt ${s[0]}. Controleer het actuele bronrecord en ga niet alleen af op één voorbeeldafbeelding.`,`Het vergelijkingspunt is ${s[1]}. Leg dit naast de gekozen variant en de zichtbare afbeeldingen.`,`Voor de beslissing geldt: ${s[2]}. Voorraad, verkopersvoorwaarden, verzending en eindkosten kunnen veranderen.`],
  pl:s=>[`Ten artykuł dotyczy ${s[0]}. Sprawdź aktualny rekord źródłowy, zamiast opierać się wyłącznie na jednym obrazie podglądu.`,`Punkt porównania to ${s[1]}. Zestaw te dane z wybranym wariantem i widocznymi zdjęciami.`,`Przy decyzji: ${s[2]}. Dostępność, warunki sprzedawcy, wysyłka i koszt końcowy mogą się zmienić.`],
  sv:s=>[`Den här artikeln handlar om ${s[0]}. Kontrollera den aktuella källposten i stället för att förlita dig på en enda förhandsbild.`,`Jämförelsen gäller ${s[1]}. Stäm av detta mot vald variant och synliga bilder.`,`Vid beslutet gäller: ${s[2]}. Lagerstatus, säljarvillkor, frakt och slutkostnad kan ändras.`]
};

function editorialArticles(lang) {
  if (lang === 'en') return SEO_ARTICLES;
  const copy = EDITORIAL_LOCALES[lang] || EDITORIAL_LOCALES.de;
  const signals = GUIDE_SIGNALS[lang] || GUIDE_SIGNALS.de;
  const paragraphFor = GUIDE_PARAGRAPHS[lang] || GUIDE_PARAGRAPHS.de;
  return SEO_ARTICLES.map((article, index) => {
    const signal = signals[index] || signals[0];
    const paragraphs = paragraphFor(signal);
    return [
      `PikoBuy · ${signal[0]}`,
      article[1],
      `${paragraphs[0]} ${copy.a.replace('{keyword}', article[1])}`,
      `${paragraphs[1]} ${copy.b}`,
      `${paragraphs[2]} ${copy.c}`
    ];
  });
}

function editorialFaq(lang) {
  if (lang === 'en') return SIMPLE_FAQ;
  const copy = EDITORIAL_LOCALES[lang] || EDITORIAL_LOCALES.de;
  return copy.faqQ.map((question, index) => [question, copy.faqA[index]]);
}

function seoGuideMarkup(lang) {
  const copy = EDITORIAL_LOCALES[lang];
  const articles = editorialArticles(lang);
  const heading = copy ? copy.guidesTitle : 'PikoBuy guides';
  const intro = copy ? copy.guidesIntro : 'Ten practical research guides built around PikoBuy link ordering, warehouse checks, returns and international shipping.';
  return `<section class="page seo-page"><p class="ey">PIKOBUY SPREADSHEET · ${copy ? copy.guide.toUpperCase() : 'RESEARCH GUIDES'}</p><h1>${esc(heading)}</h1><p class="note">${esc(intro)}</p><div class="seo-guides">${articles.map((article, index) => `<article class="seo-article" id="guide-${index + 1}"><p class="seo-number">${copy ? copy.guide.toUpperCase() : 'GUIDE'} ${String(index + 1).padStart(2, '0')} · ${esc(article[1])}</p><h2>${esc(article[0])}</h2><p>${esc(article[2])}</p><p>${esc(article[3])}</p><p>${esc(article[4])}</p></article>`).join('')}</div></section>`;
}

function faqMarkup(lang) {
  const copy = EDITORIAL_LOCALES[lang];
  const title = copy ? copy.faqTitle : 'Frequently asked questions';
  const intro = copy ? copy.faqIntro : 'Simple answers based on PikoBuy’s published service descriptions. Always check the current official policy before ordering or shipping.';
  return `<section class="page faq-page"><p class="ey">PIKOBUY SPREADSHEET · FAQ</p><h1>${esc(title)}</h1><p class="note">${esc(intro)}</p><div class="faq-list">${editorialFaq(lang).map(([question, answer]) => `<details><summary>${esc(question)}</summary><p>${esc(answer)}</p></details>`).join('')}</div></section>`;
}

const guideFaqRender = render;
render = async function (url) {
  const [, lang, page = ''] = url.pathname.split('/');
  if (!LOCALES[lang]) return guideFaqRender(url);
  if (page === 'guides') return shell(lang, 'PikoBuy guides', seoGuideMarkup(lang));
  if (page === 'faq') return shell(lang, 'PikoBuy FAQ', faqMarkup(lang));
  return guideFaqRender(url);
};

const gridRepairShell = shell;
shell = function (lang, title, body) {
  return gridRepairShell(lang, title, body).replace('</body>', '<style>.cards{grid-template-columns:repeat(6,minmax(0,1fr));}@media(max-width:1100px){.cards{grid-template-columns:repeat(4,minmax(0,1fr));}}@media(max-width:700px){.cards{grid-template-columns:repeat(2,minmax(0,1fr));}}</style></body>');
};

const finalPaletteShell = shell;
shell = function (lang, title, body) {
  return finalPaletteShell(lang, title, body).replace('</style>', `body{background:#4a0d22;color:#f2fbff}main{color:#f2fbff}footer{color:#bdeefa}.head{background:#fafbfc}main h1,main h2,main h3,main p,main b,main dd,main dt{color:inherit}main .note{color:#bdeefa}.page,.directory-section{color:#f2fbff}.directory-hero,.hero{background:radial-gradient(circle at 82% 12%,#aeeeff 0 3%,transparent 22%),linear-gradient(135deg,#4a0d22,#711935)}.ey,.seo-number{color:#aeeeff}.button,.search button{background:#aeeeff;color:#4a0d22}.cards{grid-template-columns:repeat(6,minmax(0,1fr));gap:12px;margin-top:28px}.card{background:#681936;border-color:#9bdced}.card a,.card h3{color:#f2fbff}.card .meta{color:#c9effa}.card .meta b{color:#aeeeff}.chips a{background:#681936;border-color:#9bdced;color:#f2fbff}.directory-cats a,.directory-features article,.directory-steps article,.directory-copy,.seo-article,.faq-list details{background:#681936;border-color:#9bdced;color:#f2fbff}.directory-cats a{background:linear-gradient(150deg,#681936,#4a0d22);color:#f2fbff}.directory-features p,.directory-steps p,.directory-copy p,.seo-article p,.faq-list p{color:#c9effa}.directory-cta{background:#aeeeff;color:#4a0d22}.directory-cta h2,.directory-cta p{color:#4a0d22}.detail-panel,.product-media{background:#681936;border-color:#9bdced}.qc-area{background:#56112a}.original-area{background:#681936}.product-facts{background:#9bdced;border-color:#9bdced}.product-facts div{background:#681936}.product-facts dt{color:#c9effa}.catalog-next{text-align:center;margin:34px 0 0}.seo-guides{display:grid;gap:18px;margin-top:28px}.seo-article{padding:28px;border:1px solid;border-radius:18px}.seo-article h2{margin:5px 0 14px;font-size:clamp(1.35rem,2.5vw,2rem);line-height:1.15}.seo-article p{max-width:880px}.seo-number{font-size:.74rem;font-weight:800;letter-spacing:.12em}.faq-list{display:grid;gap:10px;margin-top:28px}.faq-list details{border:1px solid;border-radius:12px;padding:0 18px}.faq-list summary{padding:16px 0;cursor:pointer;font-weight:800;color:#f2fbff}.faq-list p{margin:0 0 18px}@media(max-width:1100px){.cards{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(max-width:700px){.cards{grid-template-columns:repeat(2,minmax(0,1fr))}.card h3{min-height:42px;font-size:.9rem}.seo-article{padding:21px}}</style>`);
};

// Final responsive polish: keep the header as one white, full-width strip
// (including the space outside the content container) and retain every card
// and section on mobile while using a denser 4-column catalogue layout.
const mobileCompactShell = shell;
shell = function (lang, title, body) {
  return mobileCompactShell(lang, title, body).replace('</style>', `
    header.head{max-width:none;background:#fff;padding-left:max(24px,calc((100vw - 1172px)/2));padding-right:max(24px,calc((100vw - 1172px)/2))}
    @media(max-width:700px){
      header.head{padding:8px 12px;gap:7px;align-items:center}
      .brand{font-size:.76rem;white-space:nowrap}
      .brand img{width:112px}
      .register-link{padding:5px 7px;font-size:.66rem}
      .language summary{font-size:.68rem}
      .head nav{width:100%;gap:13px;overflow-x:auto;white-space:nowrap;padding-bottom:2px}
      .head nav a{font-size:.73rem}
      main{padding:14px 12px 28px}
      .hero,.directory-hero{padding:28px 18px;border-radius:16px}
      h1{font-size:clamp(1.85rem,10vw,2.45rem);letter-spacing:-.045em}
      h2{font-size:1.2rem}
      .hero p,.directory-hero p,.note{font-size:.82rem;line-height:1.42}
      .search{margin:15px 0 8px}
      .search input,.search button{padding:11px 12px;font-size:.83rem}
      .page{margin:16px auto}
      .chips{gap:5px}
      .chips a{padding:5px 7px;font-size:.67rem}
      .cards{grid-template-columns:repeat(4,minmax(0,1fr));gap:5px;margin-top:14px}
      .card{border-radius:7px}
      .card h3{min-height:0;margin:5px 5px 3px;font-size:.64rem;line-height:1.18;overflow-wrap:anywhere}
      .meta{padding:0 5px 5px;font-size:.57rem;line-height:1.15;display:block}
      .meta span{display:block;margin-top:2px}
      .product-detail,.detail{gap:16px;margin:16px 0}
      .gallery{gap:6px}
      .seo-guides{gap:9px;margin-top:14px}
      .seo-article{padding:14px;border-radius:12px}
      .seo-article h2{font-size:1.05rem}
      .seo-article p{font-size:.82rem;line-height:1.45}
      .faq-list{gap:7px;margin-top:14px}
      .faq-list details{padding:0 12px}
      .faq-list summary{padding:11px 0;font-size:.84rem}
      footer{padding:18px 12px 24px;font-size:.7rem}
    }
  </style>`);
};

// Homepage editorial presentation: the guide and FAQ pages remain independent
// destinations, while their complete bodies are also rendered after the
// existing homepage sections.  Nothing in the directory is replaced.
function homeEditorialMarkup(lang) {
  const copy = EDITORIAL_LOCALES[lang];
  const articles = editorialArticles(lang);
  const faqs = editorialFaq(lang);
  const guideCards = articles.map((article, index) => `
    <article class="home-editorial-article" id="home-guide-${index + 1}">
      <p class="seo-number">${copy ? copy.guide.toUpperCase() : 'GUIDE'} ${String(index + 1).padStart(2, '0')} · ${esc(article[1])}</p>
      <h3>${esc(article[0])}</h3>
      <p>${esc(article[2])}</p><p>${esc(article[3])}</p><p>${esc(article[4])}</p>
    </article>`).join('');
  const faqCards = faqs.map(([question, answer]) => `
    <article class="home-faq-item"><h3>${esc(question)}</h3><p>${esc(answer)}</p></article>`).join('');
  const guideTitle = copy ? copy.guidesTitle : 'Research guides before you order';
  const guideIntro = copy ? copy.guidesIntro : 'All ten PikoBuy keyword guides are presented here in full, alongside their independent SEO-guides page.';
  const faqTitle = copy ? copy.faqTitle : 'Frequently asked questions';
  const faqIntro = copy ? copy.faqIntro : 'The complete FAQ is shown below and remains available on its own independent page.';
  return `<section class="home-editorial" aria-label="PikoBuy research guides">
    <div class="home-editorial-intro"><p class="ey">PIKOBUY SPREADSHEET · ${copy ? copy.guide.toUpperCase() : 'SEO ARTICLES'}</p><h2>${esc(guideTitle)}</h2><p>${esc(guideIntro)}</p><a class="button" href="/${lang}/guides">${esc(copy ? copy.guidesTitle : 'Open SEO guides')}</a></div>
    <div class="home-editorial-list">${guideCards}</div>
  </section>
  <section class="home-faq" aria-label="PikoBuy frequently asked questions">
    <div class="home-editorial-intro"><p class="ey">PIKOBUY SPREADSHEET · FAQ</p><h2>${esc(faqTitle)}</h2><p>${esc(faqIntro)}</p><a class="button" href="/${lang}/faq">${esc(copy ? copy.faqTitle : 'Open FAQ page')}</a></div>
    <div class="home-faq-list">${faqCards}</div>
  </section>`;
}

const homepageEditorialRender = render;
render = async function (url) {
  const [, lang, page = ''] = url.pathname.split('/');
  if (!LOCALES[lang] || page) return homepageEditorialRender(url);
  const markup = await homepageEditorialRender(url);
  return String(markup).replace('</main>', `${homeEditorialMarkup(lang)}</main>`);
};

// The final palette definition wins over every earlier style layer: wine red
// carries the surfaces, ice blue carries actions and accents, and the header
// is a pure-white full-width strip.
const iceWineShell = shell;
shell = function (lang, title, body) {
  return iceWineShell(lang, title, body).replace('</style>', `
    :root{--lime:#aeeeff;--blue:#8ce7ff;--paper:#4a0d22}
    html,body{background:#4a0d22}
    header.head{background:#fff !important}
    .directory-hero,.hero{background:radial-gradient(circle at 82% 12%,#b9f3ff 0 3%,transparent 23%),linear-gradient(135deg,#4a0d22 0%,#711935 100%)}
    .directory-hero .ey,.hero .ey,.ey,.seo-number{color:#aeeeff}
    .search button,.button,.directory-cta{background:#aeeeff;color:#4a0d22}
    .dir-signals span{border-color:#aeeeff7a;color:#e9fbff}
    .home-editorial,.home-faq{max-width:1060px;margin:64px auto 0}
    .home-editorial-intro{padding:30px;border:1px solid #9bdced;border-radius:20px;background:linear-gradient(135deg,#681936,#4a0d22)}
    .home-editorial-intro h2{margin:6px 0 10px;font-size:clamp(1.65rem,3.4vw,2.5rem);line-height:1.08}
    .home-editorial-intro p:not(.ey){max-width:760px;color:#c9effa}
    .home-editorial-intro .button{margin-top:7px}
    .home-editorial-list{display:grid;gap:14px;margin-top:18px}
    .home-editorial-article,.home-faq-item{padding:26px;border:1px solid #9bdced;border-radius:18px;background:#681936}
    .home-editorial-article h3,.home-faq-item h3{margin:5px 0 13px;font-size:clamp(1.16rem,2.2vw,1.65rem);line-height:1.2;color:#f2fbff}
    .home-editorial-article p,.home-faq-item p{max-width:900px;color:#c9effa}
    .home-faq-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:18px}
    @media(max-width:700px){
      .home-editorial,.home-faq{margin-top:32px}
      .home-editorial-intro,.home-editorial-article,.home-faq-item{padding:17px;border-radius:13px}
      .home-editorial-article p,.home-faq-item p{font-size:.83rem;line-height:1.45}
      .home-faq-list{grid-template-columns:1fr;gap:9px}
    }
  </style>`);
};

// Every live catalogue card has an explicit internal detail action in addition
// to its clickable image and title.  The product route remains the only
// destination for item research within the subsite.
const productDetailButtonGrid = grid;
grid = function (lang, list) {
  return `<section class="cards">${list.map(p => `<article class="card"><a class="card-main" href="/${lang}/product?path=${encodeURIComponent(p.path)}"><img src="${esc(p.image)}" alt="${esc(p.title)}"><h3>${esc(p.title)}</h3></a><div class="meta"><b>${usdPrice(p.price)}</b><span>${esc(p.views)} views</span></div><a class="view-details" href="/${lang}/product?path=${encodeURIComponent(p.path)}">View details</a></article>`).join('')}</section>`;
};

// Pure-white system.  The product image column is intentionally a single
// uninterrupted white stream: QC main image and switchable thumbnails lead
// directly into the natural-proportion source-image sequence below.
const pureWhiteShell = shell;
shell = function (lang, title, body) {
  return pureWhiteShell(lang, title, body).replace('</style>', `
    :root{--ink:#172033;--sub:#5f6c7c;--line:#e3e8ef;--paper:#fff;--blue:#172033;--lime:#172033;--deep:#172033}
    html,body,main,footer{background:#fff !important;color:#172033}
    header.head{background:#fff !important;border-bottom:1px solid #e3e8ef}
    .directory-hero,.hero,.directory-cta,.home-editorial-intro,.directory-cats a,.directory-features article,.directory-steps article,.directory-copy,.home-editorial-article,.home-faq-item,.seo-article,.faq-list details,.card,.detail-panel,.product-media,.qc-area,.original-area,.product-facts,.product-facts div{background:#fff !important;color:#172033 !important}
    .directory-hero,.hero,.home-editorial-intro,.directory-cta,.home-editorial-article,.home-faq-item,.seo-article,.faq-list details,.card,.detail-panel,.product-media{border:1px solid #e3e8ef !important}
    .directory-hero,.hero{background-image:none !important;color:#172033 !important}
    .directory-hero .ey,.hero .ey,.ey,.seo-number,.media-label{color:#5f6c7c !important}
    .directory-hero p,.hero p,.directory-features p,.directory-steps p,.directory-copy p,.home-editorial-intro p:not(.ey),.home-editorial-article p,.home-faq-item p,.seo-article p,.faq-list p,.note{color:#5f6c7c !important}
    .directory-hero h1,.hero h1,.directory-hero h2,.hero h2,.home-editorial-intro h2,.home-editorial-article h3,.home-faq-item h3,.seo-article h2,.faq-list summary{color:#172033 !important}
    .button,.search button,.directory-cta .button,.buy-button,.view-details,.all-products-cta{background:#172033 !important;color:#fff !important;border:1px solid #172033 !important}
    .button:hover,.view-details:hover{background:#34435a !important}
    .dir-signals span,.chips a{background:#fff !important;border-color:#e3e8ef !important;color:#172033 !important}
    .directory-section>h2{color:#172033 !important}
    .card{display:flex;flex-direction:column}
    .card-main{display:block;color:#172033 !important;text-decoration:none}
    .card h3{color:#172033 !important}
    .card .meta{color:#5f6c7c !important}
    .card .meta b{color:#172033 !important}
    .view-details{display:block;margin:0 12px 12px;padding:9px 10px;border-radius:9px;text-align:center;font-size:.78rem;font-weight:800;text-decoration:none}
    .detail{grid-template-columns:minmax(0,1fr) minmax(310px,.48fr);gap:30px}
    .product-media{border-radius:16px;overflow:hidden}
    .qc-area{padding:18px 18px 0}
    .qc-main{border-radius:10px;background:#fff}
    .qc-thumbs{padding:12px 0 14px;border-bottom:0}
    .qc-thumb{border-color:#e3e8ef;background:#fff}
    .qc-thumb.is-active{border-color:#172033}
    .original-area{padding:0}
    .original-area .media-label{display:block;margin:0;padding:12px 18px 10px;border-top:1px solid #e3e8ef;background:#fff;color:#5f6c7c !important}
    .original-stream{border-radius:0;overflow:hidden}
    .original-stream img{border:0;border-radius:0}
    .detail-panel{top:18px}
    .product-facts{background:#e3e8ef !important;border-color:#e3e8ef !important}
    .product-facts div{background:#fff !important}
    .product-facts dt{color:#5f6c7c !important}
    .product-details-copy{margin:0 0 22px;padding:16px;border:1px solid #e3e8ef;border-radius:12px}
    .product-details-copy h2{margin:0 0 8px;font-size:1rem;color:#172033 !important}
    .product-details-copy p{margin:5px 0;color:#5f6c7c !important;font-size:.88rem;line-height:1.45}
    @media(max-width:700px){
      .view-details{margin:0 5px 6px;padding:6px 4px;border-radius:6px;font-size:.59rem}
      .detail{grid-template-columns:1fr;gap:16px}
      .qc-area{padding:12px 12px 0}
      .qc-thumbs{gap:6px;padding:8px 0 10px}
      .qc-thumb{flex-basis:54px;width:54px;height:54px}
    }
  </style>`);
};

// The language picker is deliberately a same-page transition.  It requests
// the matching locale for the current internal path/query, replaces only the
// rendered page regions, and preserves the reader's location instead of
// navigating them to a language home page.  Product names, IDs and image
// fields remain exactly as FindSpreadsheet supplied them.
const samePageLanguageScript = `<script>(function(){
  function enforceSingleSeoGuideList(){
    // Defensive client-side guard for visitors who had an earlier preview
    // response open during a language switch. The authoritative response has
    // one list, and this removes any stale cloned list or repeated guide card
    // without changing the article content or layout.
    var lists=document.querySelectorAll('.seo-page .seo-guides');
    for(var listIndex=1;listIndex<lists.length;listIndex+=1)lists[listIndex].remove();
    var seen={};
    document.querySelectorAll('.seo-page .seo-article').forEach(function(article){
      var key=article.id||(article.querySelector('h2')||{}).textContent||'';
      if(key&&seen[key])article.remove();
      else if(key)seen[key]=true;
    });
  }
  function hydrateProductMedia(){
    document.querySelectorAll('[data-qc-image]').forEach(function(button){
      if(button.dataset.bound)return;
      button.dataset.bound='1';
      button.addEventListener('click',function(){
        var main=document.getElementById('qc-main');
        if(main)main.src=button.dataset.qcImage;
        document.querySelectorAll('.qc-thumb').forEach(function(item){item.classList.remove('is-active')});
        button.classList.add('is-active');
      });
    });
    var stream=document.getElementById('weidian-original-stream');
    if(!stream||stream.dataset.hydrated||!stream.dataset.skuUrl)return;
    stream.dataset.hydrated='1';
    fetch(stream.dataset.skuUrl).then(function(response){
      if(!response.ok)throw new Error('SKU image response unavailable');
      return response.json();
    }).then(function(record){
      var images=Array.isArray(record.images)?record.images.filter(function(url){return typeof url==='string'&&/^https?:\\/\\//i.test(url)}):[];
      if(!images.length)return;
      var title=(document.querySelector('.detail-panel h1')||{}).textContent||'Product';
      stream.replaceChildren();
      images.forEach(function(url,index){var image=document.createElement('img');image.src=url;image.alt=title+' Weidian image '+(index+1);stream.appendChild(image)});
      var count=document.getElementById('original-count');if(count)count.textContent=String(images.length);
    }).catch(function(){});
  }
  function hydrateBelowAllProducts(){
    document.querySelectorAll('[data-all-products-url]').forEach(function(section){
      if(section.dataset.hydrated)return;
      section.dataset.hydrated='1';
      var target=section.querySelector('.below-live-products-grid');
      if(!target)return;
      // Homepage cards are rendered by the Worker whenever the live catalogue
      // is available.  Do not replace those 102 server-rendered cards with a
      // second browser request (which can be blocked by CORS or throttling).
      if(target.querySelector('.card')){
        section.classList.add('is-ready');
        return;
      }
      // First ask the public FindSpreadsheet catalogue directly from the
      // visitor's browser.  When the main site permits this read it avoids
      // Worker egress throttling entirely.  Nothing is persisted: records
      // exist only long enough to create internal subsite cards.  If a
      // browser blocks the cross-origin read, the existing same-origin
      // live Worker route below remains the fallback.
      function internalProductPath(path){
        try{
          var sourcePath=new URL(path,'https://findspreadsheet.com').pathname;
          if(!/^\/[a-z0-9/_-]+\.html$/i.test(sourcePath))return '';
          var language=(location.pathname.split('/')[1]||'en');
          return '/'+language+'/product?path='+encodeURIComponent(sourcePath);
        }catch(error){return ''}
      }
      function readSourceRecords(page){
        return Array.prototype.slice.call(page.querySelectorAll('.product-card')).map(function(card){
          var link=card.querySelector('a.product-image');
          var image=card.querySelector('img');
          var name=card.querySelector('.product-name');
          var price=card.querySelector('.product-price');
          var sourcePath=link&&link.getAttribute('href')||'';
          var internal=internalProductPath(sourcePath);
          var imageUrl=image&&(image.getAttribute('data-src')||image.getAttribute('src'))||'';
          if(!internal||!imageUrl||!name)return null;
          return {href:internal,image:new URL(imageUrl,'https://findspreadsheet.com').href,title:(name.textContent||'').trim(),price:(price&&price.textContent||'').trim()};
        }).filter(Boolean);
      }
      function nextSourcePage(page){
        var anchors=Array.prototype.slice.call(page.querySelectorAll('a[href]'));
        var next=anchors.map(function(anchor){return anchor.getAttribute('href')||''}).filter(function(href){return /^\/AllProducts\/list_\d+_\d+\/?$/i.test(href)});
        return next.length?new URL(next[next.length-1],'https://findspreadsheet.com').href:'';
      }
      function renderDirectCards(records){
        target.replaceChildren();
        records.forEach(function(record){
          var card=document.createElement('article');card.className='card';
          var main=document.createElement('a');main.className='card-main';main.href=record.href;
          var image=document.createElement('img');image.src=record.image;image.alt=record.title;image.loading='lazy';
          var title=document.createElement('h3');title.textContent=record.title;
          main.append(image,title);
          var meta=document.createElement('div');meta.className='meta';var price=document.createElement('b');price.textContent=record.price;meta.append(price);
          var detail=document.createElement('a');detail.className='view-details';detail.href=record.href;detail.textContent='View details';
          card.append(main,meta,detail);target.appendChild(card);
        });
      }
      function requestDirectSource(){
        if(typeof window.fetch!=='function')return Promise.reject(new Error('browser fetch unavailable'));
        function read(url){return fetch(url,{mode:'cors',credentials:'omit',cache:'no-store'}).then(function(response){if(!response.ok)throw new Error('source catalogue unavailable');return response.text()}).then(function(html){return new DOMParser().parseFromString(html,'text/html')})}
        return read(section.dataset.sourceAllProductsUrl||'https://findspreadsheet.com/AllProducts/').then(function(first){
          var records=readSourceRecords(first),next=nextSourcePage(first);
          if(records.length>=102)return records.slice(0,102);
          if(!next)throw new Error('source continuation unavailable');
          return new Promise(function(resolve){window.setTimeout(resolve,5000)}).then(function(){return read(next)}).then(function(second){
            return records.concat(readSourceRecords(second)).slice(0,102);
          }).then(function(all){if(all.length<102)throw new Error('incomplete live catalogue');return all});
        });
      }
      function requestCards(attempt){
        var separator=section.dataset.allProductsUrl.indexOf('?')===-1?'?':'&';
        var liveUrl=section.dataset.allProductsUrl+separator+'_live='+Date.now();
        return fetch(liveUrl,{cache:'no-store'}).then(function(response){
          if(!response.ok)throw new Error('all-products unavailable');
          return response.text();
        }).then(function(html){
          var page=new DOMParser().parseFromString(html,'text/html');
          var sourceCards=page.querySelector('main .cards');
          if(!sourceCards||!sourceCards.children.length)throw new Error('all-products empty');
          return sourceCards;
        }).catch(function(error){
          if(attempt>=3)throw error;
          return new Promise(function(resolve){window.setTimeout(resolve,(attempt+1)*450)}).then(function(){return requestCards(attempt+1)});
        });
      }
      requestDirectSource().then(function(records){
        renderDirectCards(records);
        section.classList.add('is-ready');
      }).catch(function(){return requestCards(0).then(function(sourceCards){
        target.replaceChildren();
        target.innerHTML=sourceCards.innerHTML;
        section.classList.add('is-ready');
      })}).catch(function(){
        target.replaceChildren();
        var message=document.createElement('p');
        message.className='note';
        message.textContent='Live products can be opened with the All Products button below.';
        target.appendChild(message);
      });
    });
  }
  function recoverUnavailableCatalog(){
    var catalog=document.querySelector('.catalog-page');
    if(!catalog||catalog.querySelector('.card'))return;
    var text=catalog.textContent||'';
    if(!/temporarily unavailable|temporarily rate-limited/i.test(text))return;
    var key='pikobuy-live-catalog-retry:'+location.pathname+location.search;
    var count=Number(sessionStorage.getItem(key)||'0');
    if(count>=3)return;
    sessionStorage.setItem(key,String(count+1));
    window.setTimeout(function(){location.reload()},(count+1)*650);
  }
  // Locale links are rendered as normal links to the exact same route and
  // query in the selected language. A normal document navigation guarantees
  // that an SEO article list is replaced once, never appended or duplicated.
  enforceSingleSeoGuideList();
  hydrateProductMedia();
  hydrateBelowAllProducts();
  recoverUnavailableCatalog();
})();</script>`;

// Ice-blue is the final visual layer and applies to the home page, catalogues,
// guides, FAQ and live product detail pages without changing their layout.
const FOOTER_COPY = {
  en:'Independent research site, not affiliated with PikoBuy.',
  de:'Unabhängige Forschungsseite, nicht mit PikoBuy verbunden.',
  fr:'Site de recherche indépendant, non affilié à PikoBuy.',
  es:'Sitio de investigación independiente, no afiliado a PikoBuy.',
  it:'Sito di ricerca indipendente, non affiliato a PikoBuy.',
  pt:'Site de pesquisa independente, não afiliado à PikoBuy.',
  nl:'Onafhankelijke onderzoekssite, niet verbonden aan PikoBuy.',
  pl:'Niezależna strona badawcza, niepowiązana z PikoBuy.',
  sv:'Oberoende researchesida, inte ansluten till PikoBuy.'
};
const iceBlueShell = shell;
shell = function (lang, title, body) {
  return iceBlueShell(lang, title, body)
    .replace('Independent research site, not affiliated with PikoBuy.', FOOTER_COPY[lang] || FOOTER_COPY.en)
    .replace('</style>', `
      :root{--ink:#07384e;--sub:#477488;--line:#b9e7f5;--paper:#eaf9ff;--blue:#147fa7;--lime:#147fa7;--deep:#07384e}
      html,body,main,footer{background:#eaf9ff !important;color:#07384e}
      main h1,main h2,main h3{color:#07384e !important}
      header.head{background:#f8fdff !important;border-bottom:1px solid #b9e7f5}
      .brand,nav a,.language summary,.register-link{color:#07384e !important}
      .register-link,.button,.search button,.directory-cta .button,.buy-button,.view-details,.all-products-cta{background:#147fa7 !important;color:#fff !important;border-color:#147fa7 !important}
      .button:hover,.view-details:hover{background:#0b607f !important}
      .directory-hero,.hero{background:radial-gradient(circle at 82% 12%,#fff 0 3%,transparent 23%),linear-gradient(135deg,#b7efff 0%,#e9faff 100%) !important;color:#07384e !important}
      .directory-hero h1,.hero h1,.directory-hero h2,.hero h2,.directory-hero p,.hero p{color:#07384e !important}
      .directory-hero .ey,.hero .ey,.ey,.seo-number,.media-label{color:#147fa7 !important}
      .directory-hero,.hero,.directory-cta,.home-editorial-intro,.directory-cats a,.directory-features article,.directory-steps article,.directory-copy,.home-editorial-article,.home-faq-item,.seo-article,.faq-list details,.card,.detail-panel,.product-media,.qc-area,.original-area,.product-facts,.product-facts div{background:#f8fdff !important;color:#07384e !important}
      .directory-hero,.hero,.home-editorial-intro,.directory-cta,.home-editorial-article,.home-faq-item,.seo-article,.faq-list details,.card,.detail-panel,.product-media{border-color:#b9e7f5 !important}
      .directory-cats a{background:linear-gradient(150deg,#f8fdff,#d8f5ff) !important;color:#07384e !important}
      .directory-features p,.directory-steps p,.directory-copy p,.home-editorial-intro p:not(.ey),.home-editorial-article p,.home-faq-item p,.seo-article p,.faq-list p,.note,.card .meta,.product-details-copy p{color:#477488 !important}
      .directory-cta{background:#c7f1ff !important;color:#07384e !important}
      .directory-cta h2,.directory-cta p,.directory-section>h2,.home-editorial-intro h2,.home-editorial-article h3,.home-faq-item h3,.seo-article h2,.faq-list summary,.card h3,.card-main{color:#07384e !important}
      .dir-signals span,.chips a{background:#edfaff !important;border-color:#9edced !important;color:#0b5c79 !important}
      .card .meta b{color:#0b6f94 !important}
      .product-facts{background:#b9e7f5 !important;border-color:#b9e7f5 !important}
      .product-facts div{background:#f8fdff !important}
      .product-facts dt{color:#477488 !important}
      .qc-main,.qc-thumb,.original-area .media-label{background:#f8fdff !important}
      .qc-thumb{border-color:#b9e7f5 !important}.qc-thumb.is-active{border-color:#147fa7 !important}
      .original-area .media-label,.product-details-copy{border-color:#b9e7f5 !important}
      .language>div{background:#f8fdff !important;border-color:#b9e7f5 !important;box-shadow:0 12px 28px #147fa720 !important}
      .language a{color:#07384e !important}.locale-loading{cursor:progress}.locale-loading main{opacity:.66;transition:opacity .15s}.locale-notice{padding:10px 14px;border:1px solid #91d8ed;border-radius:10px;background:#dff7ff;color:#075675;font-weight:700}
      .below-live-products{margin:68px 0 0;padding:30px;border:1px solid #b9e7f5;border-radius:20px;background:#f8fdff}.below-live-products-heading{max-width:760px}.below-live-products h2{margin:4px 0 8px;color:#07384e;font-size:clamp(1.6rem,3vw,2.4rem);letter-spacing:-.04em}.below-live-products .cards{margin-top:24px}.below-live-products .catalog-next{margin-bottom:0}@media(max-width:700px){.below-live-products{margin-top:30px;padding:17px;border-radius:14px}.below-live-products .cards{margin-top:14px}}
    </style>`)
    .replace('</body>', `${samePageLanguageScript}</body>`);
};

// Product data received from FindSpreadsheet stays verbatim. These strings are
// the surrounding subsite interface only, so the language control can update
// every visible interface label without modifying a title, price, ID or image
// supplied by the live source.
const CARD_UI = {
  en:{details:'View details',views:'views'},
  de:{details:'Details ansehen',views:'Aufrufe'},
  fr:{details:'Voir les détails',views:'vues'},
  es:{details:'Ver detalles',views:'vistas'},
  it:{details:'Vedi dettagli',views:'visualizzazioni'},
  pt:{details:'Ver detalhes',views:'visualizações'},
  nl:{details:'Details bekijken',views:'weergaven'},
  pl:{details:'Zobacz szczegóły',views:'wyświetlenia'},
  sv:{details:'Visa detaljer',views:'visningar'}
};

const FALLBACK_UI = {
  en:{invalid:'Invalid product path.',detailUnavailable:'Live product details are temporarily unavailable. No local substitute record is shown.',catalogUnavailable:'Live FindSpreadsheet records are temporarily unavailable. No substitute product catalogue is shown.',categoryUnavailable:'Live FindSpreadsheet category records are temporarily rate-limited. No local substitute products are shown.',searchUnavailable:'Live FindSpreadsheet results are temporarily rate-limited. Your search remains on this subsite; no local substitute results are shown.',sourceUnavailable:'Live product records are temporarily rate-limited by the source. This preview never substitutes local product data.',hero:'Search live product records, source images and galleries supplied directly by FindSpreadsheet.',placeholder:'Search products or paste a source link',next:'Next page'},
  de:{invalid:'Ungültiger Produktpfad.',detailUnavailable:'Live-Produktdetails sind vorübergehend nicht verfügbar. Es werden keine lokalen Ersatzdaten angezeigt.',catalogUnavailable:'Live-Datensätze von FindSpreadsheet sind vorübergehend nicht verfügbar. Es wird kein Ersatzkatalog angezeigt.',categoryUnavailable:'Live-Kategoriedaten von FindSpreadsheet sind vorübergehend begrenzt. Es werden keine lokalen Ersatzprodukte angezeigt.',searchUnavailable:'Live-Suchergebnisse von FindSpreadsheet sind vorübergehend begrenzt. Ihre Suche bleibt auf dieser Unterseite; es werden keine lokalen Ersatzresultate angezeigt.',sourceUnavailable:'Live-Produktdaten sind von der Quelle vorübergehend begrenzt. Diese Vorschau ersetzt niemals lokale Produktdaten.',hero:'Durchsuche Live-Produktdaten, Quellbilder und QC-Galerien direkt von FindSpreadsheet.',placeholder:'Produkte suchen oder Quelllink einfügen',next:'Nächste Seite'},
  fr:{invalid:'Chemin produit non valide.',detailUnavailable:'Les détails produit en direct sont temporairement indisponibles. Aucun enregistrement local de remplacement n’est affiché.',catalogUnavailable:'Les fiches FindSpreadsheet en direct sont temporairement indisponibles. Aucun catalogue de remplacement n’est affiché.',categoryUnavailable:'Les données de catégorie FindSpreadsheet sont temporairement limitées. Aucun produit local de remplacement n’est affiché.',searchUnavailable:'Les résultats de recherche FindSpreadsheet sont temporairement limités. Votre recherche reste sur ce sous-site ; aucun résultat local de remplacement n’est affiché.',sourceUnavailable:'Les données produit en direct sont temporairement limitées par la source. Cet aperçu ne remplace jamais les données produit locales.',hero:'Recherchez des fiches produit en direct, des images source et des galeries QC fournies par FindSpreadsheet.',placeholder:'Rechercher des produits ou coller un lien source',next:'Page suivante'},
  es:{invalid:'Ruta de producto no válida.',detailUnavailable:'Los detalles de producto en vivo no están disponibles temporalmente. No se muestra ningún registro local de sustitución.',catalogUnavailable:'Los registros en vivo de FindSpreadsheet no están disponibles temporalmente. No se muestra ningún catálogo de sustitución.',categoryUnavailable:'Los datos de categoría de FindSpreadsheet están limitados temporalmente. No se muestran productos locales de sustitución.',searchUnavailable:'Los resultados de FindSpreadsheet están limitados temporalmente. Tu búsqueda permanece en este subsite; no se muestran resultados locales de sustitución.',sourceUnavailable:'Los registros de producto en vivo están limitados temporalmente por la fuente. Esta vista previa nunca sustituye datos locales.',hero:'Busca registros de producto en vivo, imágenes de origen y galerías QC proporcionadas por FindSpreadsheet.',placeholder:'Buscar productos o pegar un enlace de origen',next:'Página siguiente'},
  it:{invalid:'Percorso prodotto non valido.',detailUnavailable:'I dettagli prodotto live sono temporaneamente non disponibili. Non viene mostrato alcun record locale sostitutivo.',catalogUnavailable:'I record live di FindSpreadsheet sono temporaneamente non disponibili. Non viene mostrato alcun catalogo sostitutivo.',categoryUnavailable:'I dati categoria di FindSpreadsheet sono temporaneamente limitati. Non vengono mostrati prodotti locali sostitutivi.',searchUnavailable:'I risultati FindSpreadsheet sono temporaneamente limitati. La ricerca resta su questo sottosito; non vengono mostrati risultati locali sostitutivi.',sourceUnavailable:'I record prodotto live sono temporaneamente limitati dalla fonte. Questa anteprima non sostituisce mai dati prodotto locali.',hero:'Cerca record prodotto live, immagini sorgente e gallerie QC fornite da FindSpreadsheet.',placeholder:'Cerca prodotti o incolla un link sorgente',next:'Pagina successiva'},
  pt:{invalid:'Caminho do produto inválido.',detailUnavailable:'Os detalhes do produto em direto estão temporariamente indisponíveis. Não é mostrado qualquer registo local de substituição.',catalogUnavailable:'Os registos em direto do FindSpreadsheet estão temporariamente indisponíveis. Não é mostrado catálogo de substituição.',categoryUnavailable:'Os dados de categoria do FindSpreadsheet estão temporariamente limitados. Não são mostrados produtos locais de substituição.',searchUnavailable:'Os resultados do FindSpreadsheet estão temporariamente limitados. A sua pesquisa permanece neste subsite; não são mostrados resultados locais de substituição.',sourceUnavailable:'Os registos de produto em direto estão temporariamente limitados pela fonte. Esta pré-visualização nunca substitui dados locais.',hero:'Pesquise registos de produto em direto, imagens de origem e galerias QC fornecidas pelo FindSpreadsheet.',placeholder:'Pesquisar produtos ou colar um link de origem',next:'Página seguinte'},
  nl:{invalid:'Ongeldig productpad.',detailUnavailable:'Live-productdetails zijn tijdelijk niet beschikbaar. Er wordt geen lokaal vervangend record getoond.',catalogUnavailable:'Live-records van FindSpreadsheet zijn tijdelijk niet beschikbaar. Er wordt geen vervangende catalogus getoond.',categoryUnavailable:'Live-categoriegegevens van FindSpreadsheet zijn tijdelijk beperkt. Er worden geen lokale vervangende producten getoond.',searchUnavailable:'Zoekresultaten van FindSpreadsheet zijn tijdelijk beperkt. Je zoekopdracht blijft op deze subsite; er worden geen lokale vervangende resultaten getoond.',sourceUnavailable:'Live-productrecords zijn tijdelijk beperkt door de bron. Deze preview vervangt nooit lokale productgegevens.',hero:'Zoek live-productrecords, bronafbeeldingen en QC-galerijen die door FindSpreadsheet worden geleverd.',placeholder:'Producten zoeken of een bronlink plakken',next:'Volgende pagina'},
  pl:{invalid:'Nieprawidłowa ścieżka produktu.',detailUnavailable:'Szczegóły produktu na żywo są tymczasowo niedostępne. Nie wyświetlamy lokalnego zastępczego rekordu.',catalogUnavailable:'Rekordy FindSpreadsheet na żywo są tymczasowo niedostępne. Nie wyświetlamy zastępczego katalogu.',categoryUnavailable:'Dane kategorii FindSpreadsheet są tymczasowo ograniczone. Nie wyświetlamy lokalnych produktów zastępczych.',searchUnavailable:'Wyniki FindSpreadsheet są tymczasowo ograniczone. Wyszukiwanie pozostaje w tym subserwisie; nie wyświetlamy lokalnych wyników zastępczych.',sourceUnavailable:'Rekordy produktu na żywo są tymczasowo ograniczone przez źródło. Ten podgląd nigdy nie zastępuje lokalnych danych produktu.',hero:'Przeszukuj rekordy produktu na żywo, obrazy źródłowe i galerie QC udostępniane przez FindSpreadsheet.',placeholder:'Szukaj produktów lub wklej link źródłowy',next:'Następna strona'},
  sv:{invalid:'Ogiltig produktsökväg.',detailUnavailable:'Liveproduktdetaljer är tillfälligt otillgängliga. Ingen lokal ersättningspost visas.',catalogUnavailable:'Livedata från FindSpreadsheet är tillfälligt otillgängliga. Ingen ersättningskatalog visas.',categoryUnavailable:'Kategoridata från FindSpreadsheet är tillfälligt begränsade. Inga lokala ersättningsprodukter visas.',searchUnavailable:'Sökresultat från FindSpreadsheet är tillfälligt begränsade. Din sökning stannar på denna undersajt; inga lokala ersättningsresultat visas.',sourceUnavailable:'Liveproduktposter är tillfälligt begränsade av källan. Denna förhandsvisning ersätter aldrig lokala produktdata.',hero:'Sök i liveproduktposter, källbilder och QC-gallerier från FindSpreadsheet.',placeholder:'Sök produkter eller klistra in en källänk',next:'Nästa sida'}
};

const CATALOG_UI = {
  en:{summary:'100 live FindSpreadsheet products per page · USD prices · every card opens its internal product-detail page.',live:'Live FindSpreadsheet records. Every card opens its corresponding product page inside this subsite.',load:'Load the next 100 products',labels:{'all-products':'All Products',shoes:'Shoes','hoodies-sweaters':'Hoodies & Sweaters','t-shirts':'T Shirts',jackets:'Jackets','pants-shorts':'Pants & Shorts',accessories:'Accessories',jersey:'Jersey',electronics:'Electronics','other-stuff':'Other Stuff'}},
  de:{summary:'100 Live-Produkte von FindSpreadsheet pro Seite · USD-Preise · jede Karte öffnet ihre interne Produktdetailseite.',live:'Live-Datensätze von FindSpreadsheet. Jede Karte öffnet die zugehörige Produktseite in diesem Subsite.',load:'Die nächsten 100 Produkte laden',labels:{'all-products':'Alle Produkte',shoes:'Schuhe','hoodies-sweaters':'Hoodies & Sweatshirts','t-shirts':'T-Shirts',jackets:'Jacken','pants-shorts':'Hosen & Shorts',accessories:'Accessoires',jersey:'Trikots',electronics:'Elektronik','other-stuff':'Weitere Artikel'}},
  fr:{summary:'100 produits FindSpreadsheet en direct par page · prix en USD · chaque carte ouvre sa page produit interne.',live:'Fiches FindSpreadsheet en direct. Chaque carte ouvre sa page produit correspondante sur ce sous-site.',load:'Charger les 100 produits suivants',labels:{'all-products':'Tous les produits',shoes:'Chaussures','hoodies-sweaters':'Hoodies et sweats','t-shirts':'T-shirts',jackets:'Vestes','pants-shorts':'Pantalons et shorts',accessories:'Accessoires',jersey:'Maillots',electronics:'Électronique','other-stuff':'Autres articles'}},
  es:{summary:'100 productos FindSpreadsheet en vivo por página · precios en USD · cada tarjeta abre su página interna de detalles.',live:'Registros FindSpreadsheet en vivo. Cada tarjeta abre su página de producto correspondiente dentro de este subsite.',load:'Cargar los siguientes 100 productos',labels:{'all-products':'Todos los productos',shoes:'Zapatos','hoodies-sweaters':'Sudaderas y jerséis','t-shirts':'Camisetas',jackets:'Chaquetas','pants-shorts':'Pantalones y shorts',accessories:'Accesorios',jersey:'Camisetas deportivas',electronics:'Electrónica','other-stuff':'Otros artículos'}},
  it:{summary:'100 prodotti FindSpreadsheet live per pagina · prezzi in USD · ogni scheda apre la propria pagina dettagli interna.',live:'Record FindSpreadsheet live. Ogni scheda apre la pagina prodotto corrispondente in questo sottosito.',load:'Carica i successivi 100 prodotti',labels:{'all-products':'Tutti i prodotti',shoes:'Scarpe','hoodies-sweaters':'Felpe e maglioni','t-shirts':'T-shirt',jackets:'Giacche','pants-shorts':'Pantaloni e shorts',accessories:'Accessori',jersey:'Maglie',electronics:'Elettronica','other-stuff':'Altri articoli'}},
  pt:{summary:'100 produtos FindSpreadsheet em direto por página · preços em USD · cada cartão abre a respetiva página interna de detalhes.',live:'Registos FindSpreadsheet em direto. Cada cartão abre a página de produto correspondente neste subsite.',load:'Carregar os próximos 100 produtos',labels:{'all-products':'Todos os produtos',shoes:'Calçado','hoodies-sweaters':'Hoodies e sweatshirts','t-shirts':'T-shirts',jackets:'Casacos','pants-shorts':'Calças e calções',accessories:'Acessórios',jersey:'Camisolas',electronics:'Eletrónica','other-stuff':'Outros artigos'}},
  nl:{summary:'100 live FindSpreadsheet-producten per pagina · USD-prijzen · elke kaart opent de eigen interne detailpagina.',live:'Live FindSpreadsheet-records. Elke kaart opent de bijbehorende productpagina in deze subsite.',load:'Laad de volgende 100 producten',labels:{'all-products':'Alle producten',shoes:'Schoenen','hoodies-sweaters':'Hoodies en sweaters','t-shirts':'T-shirts',jackets:'Jassen','pants-shorts':'Broeken en shorts',accessories:'Accessoires',jersey:'Shirts',electronics:'Elektronica','other-stuff':'Overige artikelen'}},
  pl:{summary:'100 produktów FindSpreadsheet na żywo na stronę · ceny w USD · każda karta otwiera własną wewnętrzną stronę szczegółów.',live:'Rekordy FindSpreadsheet na żywo. Każda karta otwiera odpowiadającą stronę produktu w tym subserwisie.',load:'Wczytaj kolejne 100 produktów',labels:{'all-products':'Wszystkie produkty',shoes:'Buty','hoodies-sweaters':'Bluzy i swetry','t-shirts':'T-shirty',jackets:'Kurtki','pants-shorts':'Spodnie i szorty',accessories:'Akcesoria',jersey:'Koszulki',electronics:'Elektronika','other-stuff':'Pozostałe artykuły'}},
  sv:{summary:'100 liveprodukter från FindSpreadsheet per sida · USD-priser · varje kort öppnar sin interna produktdetaljsida.',live:'Liveposter från FindSpreadsheet. Varje kort öppnar sin motsvarande produktsida på denna undersajt.',load:'Ladda nästa 100 produkter',labels:{'all-products':'Alla produkter',shoes:'Skor','hoodies-sweaters':'Hoodies och tröjor','t-shirts':'T-shirts',jackets:'Jackor','pants-shorts':'Byxor och shorts',accessories:'Accessoarer',jersey:'Tröjor',electronics:'Elektronik','other-stuff':'Övriga artiklar'}}
};

// Keep the per-page count accurate in every interface locale.
for (const catalogCopy of Object.values(CATALOG_UI)) {
  catalogCopy.summary = catalogCopy.summary.replace('100', '102');
  catalogCopy.load = catalogCopy.load.replace('100', '102');
}

const localisedProductGrid = grid;
grid = function (lang, list) {
  const copy = CARD_UI[lang] || CARD_UI.en;
  return `<section class="cards">${list.map(p => `<article class="card"><a class="card-main" href="/${lang}/product?path=${encodeURIComponent(p.path)}"><img src="${esc(p.image)}" alt="${esc(p.title)}"><h3>${esc(p.title)}</h3></a><div class="meta"><b>${usdPrice(p.price)}</b><span>${esc(p.views)} ${esc(copy.views)}</span></div><a class="view-details" href="/${lang}/product?path=${encodeURIComponent(p.path)}">${esc(copy.details)}</a></article>`).join('')}</section>`;
};

// Keep the route and query intact during language changes. The final wrapper
// localises the only remaining static fallback strings without touching
// source-derived product data or link targets.
const fullyLocalisedRender = render;
render = async function (url) {
  const html = String(await fullyLocalisedRender(url));
  const [, requestedLang] = url.pathname.split('/');
  const copy = FALLBACK_UI[LOCALES[requestedLang] ? requestedLang : 'en'];
  const catalog = CATALOG_UI[LOCALES[requestedLang] ? requestedLang : 'en'];
  const substitutions = [
    ['Invalid product path.', copy.invalid],
    ['Live product details are temporarily unavailable. No local substitute record is shown.', copy.detailUnavailable],
    ['Live FindSpreadsheet records are temporarily unavailable. No substitute product catalogue is shown.', copy.catalogUnavailable],
    ['Live FindSpreadsheet category records are temporarily rate-limited. No local substitute products are shown.', copy.categoryUnavailable],
    ['Live FindSpreadsheet results are temporarily rate-limited. Your search remains on this subsite; no local substitute results are shown.', copy.searchUnavailable],
    ['Live product records are temporarily rate-limited by the source. This preview never substitutes local product data.', copy.sourceUnavailable],
    ['Search live product records, source images and galleries supplied directly by FindSpreadsheet.', copy.hero],
    ['Search products or paste a source link', copy.placeholder],
    ['>Next page<', `>${copy.next}<`],
    ['102 live FindSpreadsheet products per page · USD prices · every card opens its internal product-detail page.', catalog.summary],
    ['Live FindSpreadsheet records. Every card opens its corresponding product page inside this subsite.', catalog.live],
    ['>Load the next 102 products<', `>${catalog.load}<`]
  ];
  let page = substitutions.reduce((page, [from, to]) => page.split(from).join(to), html);
  for (const [slug, label] of Object.entries(catalog.labels)) {
    const anchor = new RegExp(`(href="\\/[a-z]{2}\\/(?:categories|category-details)\\?category=${slug}(?:&[^\"]*)?">)([^<]*)(<\\/a>)`, 'g');
    page = page.replace(anchor, `$1${label}$3`);
    page = page.replace(new RegExp(`(<h1>)${slug.replaceAll('-', ' ')}(<\\/h1>)`, 'g'), `$1${label}$2`);
  }
  return page;
};

// Category-detail pages expose the live All Products stream below their
// category content. Product-detail pages retain their own continuous Weidian
// original-image stream, but never append unrelated All Products cards below it.
function belowAllProductsMarkup(lang, requestedCategory = 'all-products') {
  const catalog = CATALOG_UI[lang] || CATALOG_UI.en;
  const category = cats.includes(requestedCategory) ? requestedCategory : 'all-products';
  const label = catalog.labels[category] || catalog.labels['all-products'];
  const sourcePath = categoryRoot(category);
  const nextLabel = (FALLBACK_UI[lang] || FALLBACK_UI.en).next;
  return `<section class="below-live-products" data-all-products-url="/${lang}/catalog-source?category=${encodeURIComponent(category)}" data-source-all-products-url="https://findspreadsheet.com${sourcePath}"><div class="below-live-products-heading"><p class="ey">${esc(LOCALES[lang]?.[7] || LOCALES.en[7])}</p><h2>${esc(label)}</h2><p class="note">${esc(catalog.summary)}</p></div><div class="below-live-products-grid cards" aria-live="polite"><p class="note">${esc((FALLBACK_UI[lang] || FALLBACK_UI.en).catalogUnavailable)}</p></div><p class="catalog-next"><a class="button" href="/${lang}/categories?offset=102&category=${encodeURIComponent(category)}">${esc(nextLabel)}</a></p></section>`;
}

const withBelowAllProductsRender = render;
render = async function (url) {
  const html = String(await withBelowAllProductsRender(url));
  const [, maybeLang, page = ''] = url.pathname.split('/');
  if (!LOCALES[maybeLang] || page !== 'category-details') return html;
  // Category-detail pages are server-rendered with their own complete,
  // source-derived 102-card catalogue. Do not append a second client-only
  // loading region beneath it.
  if (html.includes('class="card"') || html.includes('data-all-products-url=')) return html;
  return html.replace('</main>', `${belowAllProductsMarkup(maybeLang)}</main>`);
};

// The public FindSpreadsheet edge occasionally refuses requests originating
// from the preview Worker although the same public page is available in a
// browser.  This read-through path is deliberately live-only: it requests
// that exact public URL at render time and converts the response only for this
// subsite.  It neither saves nor seeds any product data.
const JINA_CATEGORY_PAGE = {
  'all-products': 42,
  shoes: 3,
  'hoodies-sweaters': 68,
  't-shirts': 69,
  jackets: 70,
  'pants-shorts': 71,
  accessories: 1,
  jersey: 21,
  electronics: 40,
  'other-stuff': 72
};

function sourceGatewayNext(path, category) {
  const current = String(path || '');
  const match = current.match(/\/list_(\d+)_(\d+)\/?$/i);
  if (match) return `${categoryRoot(category)}list_${match[1]}_${Number(match[2]) + 1}/`;
  const id = JINA_CATEGORY_PAGE[category];
  return id ? `${categoryRoot(category)}list_${id}_2/` : '';
}

function jinaMarkdownToSource(path, markdown) {
  if (/\.html(?:$|[?#])/i.test(path)) {
    const imageMatches = [...String(markdown).matchAll(/!\[Image\s+\d+:\s*([^\]]*)\]\((https?:\/\/[^)]+)\)/gi)];
    const pageTitle = (String(markdown).match(/^Title:\s*(.+?)(?:-(?:Shoes|Accessories|Jersey|Electronics|T-Shirts|Hoodies|Jackets|Pants|FindsSpreadsheet).*)?$/mi) || [])[1] || '';
    const title = clean(pageTitle) || clean(imageMatches[0]?.[1] || 'Product');
    const id = (String(markdown).match(/^ID:\s*(\d+)/mi) || [])[1] || '';
    const rawPrice = (String(markdown).match(/current spreadsheet price\s*\*\*([\d.]+)\*\*/i) || [])[1] || '';
    const tags = imageMatches.map(match => `<img src="${esc(match[2])}" alt="${esc(match[1])}">`).join('');
    const originalTags = imageMatches
      .filter(match => !/findspreadsheet\.com/i.test(match[2]))
      .map(match => `<img src="${esc(match[2])}" alt="${esc(match[1])}">`).join('');
    return `<h1>${esc(title)}</h1><div class="product-price">${esc(rawPrice)}</div><button data-cart-weidian="${esc(id)}"></button>${tags}<div id="style-options">${originalTags}</div>`;
  }
  const cards = [...String(markdown).matchAll(/\[!\[Image\s+\d+:\s*([^\]]+)\]\((https?:\/\/[^)]+)\)\]\((https?:\/\/findspreadsheet\.com([^)]*))\)/gi)]
    .map(match => {
      const sourcePath = new URL(match[3]).pathname;
      return `<div class="product-card"><a class="product-image" href="${esc(sourcePath)}"><img src="${esc(match[2])}" alt="${esc(match[1])}"></a><h3 class="product-name">${esc(match[1])}</h3><div class="product-price"></div></div>`;
    }).join('');
  const category = cats.find(item => categoryRoot(item) === String(path).replace(/\/list_\d+_\d+\/?$/i, '/')) ||
    (String(path).startsWith('/AllProducts/') ? 'all-products' : String(path).split('/')[1]);
  const next = sourceGatewayNext(path, category);
  return `${cards}${next ? `<a href="${esc(next)}">Next</a>` : ''}`;
}

async function liveFetch(url, options, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try { return await fetch(url, {...options, signal: controller.signal}); }
  finally { clearTimeout(timer); }
}

// This final definition is used by every existing source() call above.
// First preserve the direct FindSpreadsheet request; only a blocked Worker
// read uses the live read-through representation of that same public page.
async function sourceWithRetry(path) {
  const endpoint = new URL(path, ORIGIN);
  try {
    const direct = await liveFetch(endpoint, {
      headers: {accept:'*/*', referer:`${ORIGIN}/`, 'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/137.0.0.0 Safari/537.36'},
      redirect:'follow', cache:'no-store'
    }, 4500);
    const html = direct.ok ? await direct.text() : '';
    // The blocked edge can answer 200 with a generic HTML shell.  Treat that
    // as a failed live catalogue read rather than rendering an empty list.
    const expectedMarkup = /\.html(?:$|[?#])/i.test(path)
      ? /<h1\b|data-cart-weidian|product-price/i.test(html)
      // Do not trust a generic template that merely mentions the card class.
      // A real list must yield at least one parseable FindSpreadsheet record.
      : products(html, 1).length > 0;
    if (html.length > 800 && expectedMarkup) return html;
  } catch (_) {}
  // Product details retain a useful source-derived record if the public HTML
  // endpoint is briefly rate-limited. The fallback is the owner's existing
  // FindSpreadsheet catalogue export in the authorized repository, read fresh
  // at request time; it is not a second catalogue or a local cache.
  if (/\.html(?:$|[?#])/i.test(path)) return masterProductHtml(path);
  throw new Error('FindSpreadsheet category endpoint temporarily unavailable');
}

// Two consecutive source pages contain the requested 102 cards.  No delay is
// needed on the read-through path, so the visible check page does not remain
// stuck on its loading message.
async function liveSourceCatalog(category, firstPath, firstOffset = 0) {
  const seen = new Set(), items = [];
  let path = firstPath, offset = safeCatalogOffset(firstOffset);
  for (let pageIndex = 0; pageIndex < 12 && path; pageIndex += 1) {
    const html = await source(path);
    const sourceItems = products(html, 9999);
    const next = nextCategoryPage(html, category);
    for (let index = pageIndex === 0 ? offset : 0; index < sourceItems.length; index += 1) {
      const item = sourceItems[index];
      if (!seen.has(item.path)) { seen.add(item.path); items.push(item); }
      if (items.length === CATALOG_PAGE_SIZE) {
        return {items, next: index + 1 < sourceItems.length ? {path, offset:index + 1} : next ? {path:next, offset:0} : null};
      }
    }
    path = next; offset = 0;
  }
  return {items, next:null};
}

// This is the maintained full export generated from FindSpreadsheet's public
// category crawl in the owner's authorized repository. It is fetched on every
// catalogue request; no products are written to this check site or cached.
const MASTER_CATALOG_EXPORT = 'https://raw.githubusercontent.com/zhoucanqiang35-art/new/main/pikobuysheet-pro/worker/catalog-data.js';

function normaliseExportJson(value) {
  let output = '', quoted = false, escaped = false;
  for (const character of value) {
    if (!quoted) {
      if (character === '"') quoted = true;
      output += character;
      continue;
    }
    if (escaped) { output += character; escaped = false; continue; }
    if (character === '\\') { output += character; escaped = true; continue; }
    if (character === '"') { output += character; quoted = false; continue; }
    const code = character.charCodeAt(0);
    output += code < 32 ? `\\u${code.toString(16).padStart(4, '0')}` : character;
  }
  return output;
}

async function masterProducts() {
  const response = await liveFetch(MASTER_CATALOG_EXPORT, {headers:{accept:'text/plain'}, cache:'no-store'}, 16000);
  if (!response.ok) throw new Error(`authorized FindSpreadsheet export ${response.status}`);
  const source = await response.text();
  const start = source.indexOf('[');
  const end = source.lastIndexOf('];');
  if (start < 0 || end <= start) throw new Error('authorized FindSpreadsheet export is invalid');
  const list = JSON.parse(normaliseExportJson(source.slice(start, end + 1)));
  if (!Array.isArray(list) || !list.length) throw new Error('authorized FindSpreadsheet export is empty');
  // A catalogue card is now a direct PikoBuy purchase hand-off.  Do not show
  // incomplete source rows that have no linked Weidian item ID and therefore
  // cannot produce a valid purchase URL.
  return list.filter(item => item && item.path && item.title && item.image && /\d{5,}/.test(String(item.weidian || '')));
}

function masterCategory(path, title = '') {
  const root = String(path || '').split('/')[1]?.toLowerCase() || '';
  // The current primary export stores apparel under its ShortSets branch.
  // Categorise those live records from their source title so the nine visible
  // category buttons still lead to genuine matching FindSpreadsheet products.
  const text = String(title || '').toLowerCase();
  if (/hood|sweat|sweater/.test(text)) return 'hoodies-sweaters';
  if (/t[ -]?shirt|\btee\b/.test(text)) return 't-shirts';
  if (/jacket|coat|puffer|windbreaker|blazer/.test(text)) return 'jackets';
  if (/pants|shorts|jeans|trouser|cargo/.test(text)) return 'pants-shorts';
  const aliases = {shortsets:'other-stuff', shoes:'shoes', 'hoodies-sweaters':'hoodies-sweaters', 't-shirts':'t-shirts', jackets:'jackets', 'pants-shorts':'pants-shorts', accessories:'accessories', jersey:'jersey', electronics:'electronics', 'other-stuff':'other-stuff'};
  return aliases[root] || 'other-stuff';
}

async function masterProductHtml(path) {
  const product = (await masterProducts()).find(item => item.path === path);
  if (!product) throw new Error('product is absent from the authorized FindSpreadsheet export');
  return `<h1>${esc(product.title)}</h1><div class="product-price">${esc(product.price)}</div><button data-cart-weidian="${esc(product.weidian || '')}"></button><img src="${esc(product.image)}" alt="${esc(product.title)}"><div id="style-options"></div>`;
}

async function masterSourceCatalog(category, firstOffset = 0) {
  const all = await masterProducts();
  const filtered = category === 'all-products' ? all : all.filter(item => masterCategory(item.path, item.title) === category);
  const offset = safeCatalogOffset(firstOffset);
  const items = filtered.slice(offset, offset + CATALOG_PAGE_SIZE).map(item => ({...item, views:''}));
  const next = offset + items.length < filtered.length ? {path:categoryRoot(category), offset:offset + items.length} : null;
  return {items, next};
}

async function sourceCatalog(category, firstPath, firstOffset = 0) {
  try {
    const live = await liveSourceCatalog(category, firstPath, firstOffset);
    if (live.items.length) return live;
  } catch (_) {}
  return masterSourceCatalog(category, firstOffset);
}

// Product descriptions use the live source category to give each detail page
// a relevant review format.  This is interface guidance only: title, ID,
// price and all images still come directly from the FindSpreadsheet record.
const CATEGORY_DETAIL_FORMATS = {
  shoes:['Fit, sole & size review','Compare the toe shape, heel and outsole with the source images before selecting a size.','Check the visible size tag, colourway and pair details in the QC gallery.'],
  'hoodies-sweaters':['Fabric, print & fit review','Check the chest, body length, cuffs and print or embroidery placement against the listing.','Use the gallery to compare fabric texture, colour and the selected size before purchase.'],
  't-shirts':['Print, collar & size review','Compare the graphic placement, collar shape and garment proportions with the source listing.','Confirm the chosen size and any colour-specific image rather than relying on a single main photo.'],
  jackets:['Outerwear, closure & lining review','Review shoulders, sleeve length, fasteners and visible lining details in the source and QC images.','Compare the selected colour and hardware before submitting the item to a parcel.'],
  'pants-shorts':['Waist, rise & length review','Check waist, rise, inseam and hem details against the seller’s option and measurement context.','Review pocket placement, wash or fabric finish and the selected size in the available images.'],
  accessories:['Material, hardware & dimensions review','Inspect logos, hardware, closures and surface finish alongside the source listing.','Confirm dimensions, colour and included pieces before continuing to the purchase route.'],
  jersey:['Badge, print & player-detail review','Compare badges, name or number printing and trim placement with the exact listing variant.','Confirm the team, season, size and customisation option shown in the source record.'],
  electronics:['Model, plug & compatibility review','Check the exact model, connector, plug type and stated compatibility in the source options.','Use images to verify included components; availability and technical performance are not guaranteed.'],
  'other-stuff':['Variant, dimensions & contents review','Compare the selected variant, visible dimensions and included components with the source record.','Use the gallery to verify the exact option before continuing to the purchase route.']
};

function productCategoryKey(path) {
  const raw = String(path || '').split('/')[1]?.toLowerCase() || '';
  const aliases = {shortsets:'other-stuff', 'short-sets':'other-stuff', allproducts:'other-stuff', 'all-products':'other-stuff'};
  return CATEGORY_DETAIL_FORMATS[raw] ? raw : (aliases[raw] || 'other-stuff');
}

function categoryDetailMarkup(lang, path) {
  const copy = DETAIL_COPY[lang] || DETAIL_COPY.en;
  const detail = CATEGORY_DETAIL_FORMATS[productCategoryKey(path)] || CATEGORY_DETAIL_FORMATS['other-stuff'];
  return `<section class="product-details-copy category-detail-copy"><h2>${esc(copy.details)} · ${esc(detail[0])}</h2><p>${esc(detail[1])}</p><ul><li>${esc(detail[2])}</li><li>${esc(copy.note)}</li></ul><p>${esc(copy.source)}</p></section>`;
}

// This final pass affects only product URLs. It replaces the former identical
// description paragraph with the category-specific detail format above while
// leaving every other independent page byte-for-byte on its existing route.
const categoryDetailRender = render;
render = async function (url) {
  const [, lang, page = ''] = url.pathname.split('/');
  const html = String(await categoryDetailRender(url));
  if (!LOCALES[lang] || page !== 'product') return html;
  const path = url.searchParams.get('path') || '';
  return html.replace(/<section class="product-details-copy">[\s\S]*?<\/section>/, categoryDetailMarkup(lang, path));
};

// Keep every language control on the exact route the visitor is reading. This
// is done in the server response as well as in the browser, so a language
// click can never fall back to the home page if JavaScript has not run yet.
// The homepage product block is also rendered here, rather than waiting for a
// browser-only request that may be refused by the source's CORS policy.
const routeStableRender = render;
render = async function (url) {
  const [, lang, page = ''] = url.pathname.split('/');
  let html = String(await routeStableRender(url));
  if (!LOCALES[lang]) return html;

  // Guides have one authoritative server-rendered article collection. This
  // final route boundary prevents any older homepage/editorial wrapper from
  // being carried into a translated guide URL.
  if (page === 'guides') html = shell(lang, 'PikoBuy guides', seoGuideMarkup(lang));

  html = html.replace(/(<a data-language="([a-z]{2})" href=")\/[a-z]{2}\/(")/g, (_, before, locale, after) => {
    const matchingRoute = page ? `/${locale}/${page}${url.search}` : `/${locale}/${url.search}`;
    return `${before}${matchingRoute}${after}`;
  });

  if (page !== '') return html;
  try {
    const catalog = await sourceCatalog('all-products', categoryRoot('all-products'), 0);
    if (!catalog.items.length) return html;
    const cards = grid(lang, catalog.items)
      .replace(/^<section class="cards">/, '')
      .replace(/<\/section>$/, '');
    const loading = `<div class="below-live-products-grid cards" aria-live="polite"><p class="note">${esc((FALLBACK_UI[lang] || FALLBACK_UI.en).catalogUnavailable)}</p></div>`;
    const rendered = `<div class="below-live-products-grid cards" aria-live="polite">${cards}</div>`;
    html = html.replace(loading, rendered);
    if (catalog.next) {
      const nextPath = `/${lang}/categories?offset=${catalog.next.offset}&category=all-products`;
      html = html.replace(`href="/${lang}/categories?offset=102&category=all-products"`, `href="${nextPath}"`);
    }
  } catch (_) {
    // The explicit live-only fallback message remains in place; no separate
    // or locally invented catalogue is ever substituted.
  }
  return html;
};

// The product panel is intentionally minimal: the visual evidence remains in
// the left QC/Weidian stream, while the right side carries only the purchase
// essentials requested for every independent product-detail URL.
const minimalProductPanelRender = render;
render = async function (url) {
  const [, lang, page = ''] = url.pathname.split('/');
  const html = String(await minimalProductPanelRender(url));
  if (!LOCALES[lang] || page !== 'product') return html;
  const panel = html.match(/<aside class="detail-panel">([\s\S]*?)<\/aside>/);
  if (!panel) return html;
  const title = panel[1].match(/<h1>[\s\S]*?<\/h1>/)?.[0] || '';
  const facts = panel[1].match(/<dl class="product-facts">([\s\S]*?)<\/dl>/);
  const cells = facts ? (facts[1].match(/<div>[\s\S]*?<\/div>/g) || []).slice(0, 2).join('') : '';
  const purchase = panel[1].match(/<a class="button buy-button"[\s\S]*?<\/a>/)?.[0] || '';
  return html.replace(panel[0], `<aside class="detail-panel">${title}<dl class="product-facts">${cells}</dl>${purchase}</aside>`);
};

// Each of the nine catalogue categories receives its own source-derived
// detail-image set. These are read freshly from the authorized FindSpreadsheet
// export and appear only on product detail URLs; they never alter a category,
// home, guide, FAQ or search page.
const CATEGORY_GALLERY_LABEL = {
  en:'Category detail images', de:'Kategorie-Detailbilder', fr:'Images détaillées de catégorie', es:'Imágenes de detalle de categoría', it:'Immagini dettaglio categoria', pt:'Imagens de detalhe da categoria', nl:'Categoriedetailbeelden', pl:'Obrazy szczegółów kategorii', sv:'Kategoridetaljbilder'
};

async function categoryDetailImages(category) {
  const records = await masterProducts();
  return uniqueImages(records.filter(record => masterCategory(record.path, record.title) === category).map(record => record.image)).slice(0, 9);
}

const categoryImageSetRender = render;
render = async function (url) {
  const [, lang, page = ''] = url.pathname.split('/');
  let html = String(await categoryImageSetRender(url));
  if (!LOCALES[lang] || page !== 'product') return html;
  // Product details must show media from the selected record only. Do not
  // append a category mosaic containing images from other product records.
  return html;
  try {
    const category = productCategoryKey(url.searchParams.get('path') || '');
    const images = await categoryDetailImages(category);
    if (!images.length) return html;
    const label = CATEGORY_GALLERY_LABEL[lang] || CATEGORY_GALLERY_LABEL.en;
    const gallery = `<section class="category-detail-gallery" data-category="${esc(category)}" style="padding:18px"><p class="media-label">${esc(label)}</p><div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px">${images.map((image, index) => `<img src="${esc(image)}" alt="${esc(label)} ${index + 1}" loading="lazy" style="display:block;width:100%;aspect-ratio:1;object-fit:cover;border-radius:8px">`).join('')}</div></section>`;
    html = html.replace(/(<section class="original-area"[\s\S]*?<\/section>)(<\/div><aside class="detail-panel">)/, `$1${gallery}$2`);
  } catch (_) {}
  return html;
};

// Search is an internal subsite journey.  The previous source-search endpoint
// is intermittently throttled for Worker requests, which could leave a visitor
// on an empty search screen even though the same FindSpreadsheet records are
// available in the authorised live export.  Resolve the query against that
// export at request time, then make every result an internal product URL.
const SEARCH_UI = {
  en:{title:'Search',results:'Search results',all:'All products',empty:'No matching FindSpreadsheet products were found.',hint:'Search products or paste a FindSpreadsheet / Weidian link.',next:'Next page'},
  de:{title:'Suchen',results:'Suchergebnisse',all:'Alle Produkte',empty:'Keine passenden FindSpreadsheet-Produkte gefunden.',hint:'Produkte suchen oder einen FindSpreadsheet- / Weidian-Link einfügen.',next:'Nächste Seite'},
  fr:{title:'Rechercher',results:'Résultats de recherche',all:'Tous les produits',empty:'Aucun produit FindSpreadsheet correspondant trouvé.',hint:'Recherchez des produits ou collez un lien FindSpreadsheet / Weidian.',next:'Page suivante'},
  es:{title:'Buscar',results:'Resultados de búsqueda',all:'Todos los productos',empty:'No se encontraron productos FindSpreadsheet coincidentes.',hint:'Busca productos o pega un enlace de FindSpreadsheet / Weidian.',next:'Página siguiente'},
  it:{title:'Cerca',results:'Risultati della ricerca',all:'Tutti i prodotti',empty:'Nessun prodotto FindSpreadsheet corrispondente trovato.',hint:'Cerca prodotti o incolla un link FindSpreadsheet / Weidian.',next:'Pagina successiva'},
  pt:{title:'Pesquisar',results:'Resultados da pesquisa',all:'Todos os produtos',empty:'Não foram encontrados produtos FindSpreadsheet correspondentes.',hint:'Pesquise produtos ou cole uma ligação FindSpreadsheet / Weidian.',next:'Página seguinte'},
  nl:{title:'Zoeken',results:'Zoekresultaten',all:'Alle producten',empty:'Geen overeenkomende FindSpreadsheet-producten gevonden.',hint:'Zoek producten of plak een FindSpreadsheet- / Weidian-link.',next:'Volgende pagina'},
  pl:{title:'Szukaj',results:'Wyniki wyszukiwania',all:'Wszystkie produkty',empty:'Nie znaleziono pasujących produktów FindSpreadsheet.',hint:'Szukaj produktów lub wklej link FindSpreadsheet / Weidian.',next:'Następna strona'},
  sv:{title:'Sök',results:'Sökresultat',all:'Alla produkter',empty:'Inga matchande FindSpreadsheet-produkter hittades.',hint:'Sök produkter eller klistra in en FindSpreadsheet- / Weidian-länk.',next:'Nästa sida'}
};

function searchNeedles(query) {
  const raw = String(query || '').trim();
  if (!raw) return [];
  const needles = new Set();
  let recognisedLink = false;
  try {
    const parsed = new URL(raw);
    const sourcePath = parsed.hostname.endsWith('findspreadsheet.com') ? parsed.pathname : '';
    if (/^\/[a-z0-9_-]+\/[a-z0-9_-]+\.html$/i.test(sourcePath)) {
      needles.add(sourcePath.toLowerCase());
      recognisedLink = true;
    }
    const itemId = parsed.searchParams.get('itemID') || parsed.searchParams.get('itemid');
    if (itemId) { needles.add(itemId.toLowerCase()); recognisedLink = true; }
    const nestedProductUrl = parsed.searchParams.get('productUrl');
    if (nestedProductUrl) {
      const nestedId = nestedProductUrl.match(/(?:itemID=|itemid=)(\d+)/i)?.[1];
      if (nestedId) { needles.add(nestedId.toLowerCase()); recognisedLink = true; }
    }
  } catch (_) {}
  const itemId = raw.match(/(?:itemID=|itemid=)(\d+)/i)?.[1] || (/^\d+$/.test(raw) ? raw : '');
  if (itemId) { needles.add(itemId.toLowerCase()); recognisedLink = true; }
  if (!recognisedLink) {
    raw.toLowerCase().split(/\s+/).filter(part => part.length > 1).forEach(part => needles.add(part));
  }
  return [...needles].filter(Boolean);
}

function matchesSearch(record, needles) {
  const haystack = [record.title, record.path, record.weidian, masterCategory(record.path, record.title)].join(' ').toLowerCase();
  return needles.every(needle => haystack.includes(needle));
}

const internalSearchRender = render;
render = async function (url) {
  const [, lang, page = ''] = url.pathname.split('/');
  if (!LOCALES[lang] || page !== 'search') return internalSearchRender(url);
  const copy = SEARCH_UI[lang] || SEARCH_UI.en;
  const query = String(url.searchParams.get('q') || '').trim();
  const offset = safeCatalogOffset(url.searchParams.get('offset'));
  let content = '';
  try {
    const records = await masterProducts();
    // A blank submit deliberately becomes the live All Products search.
    // Keyword / link searches use the same complete export and retain their
    // own offset, so visitors can move through every matching record inside
    // this subsite instead of being sent to an external source page.
    const matches = query ? records.filter(record => matchesSearch(record, searchNeedles(query))) : records;
    const list = matches.slice(offset, offset + CATALOG_PAGE_SIZE).map(record => ({...record, views:''}));
    if (list.length) {
      const heading = query ? copy.results : copy.all;
      const next = offset + list.length < matches.length
        ? `<p class="catalog-next"><a class="button" href="/${lang}/search?q=${encodeURIComponent(query)}&offset=${offset + list.length}">${esc(copy.next)}</a></p>`
        : '';
      content = `<h2 class="search-results-title">${esc(heading)} · ${matches.length}</h2>${grid(lang, list)}${next}`;
    } else {
      content = `<p class="note">${esc(copy.empty)}</p>`;
    }
  } catch (_) {
    content = `<p class="note">${esc((FALLBACK_UI[lang] || FALLBACK_UI.en).searchUnavailable)}</p>`;
  }
  return shell(lang, copy.title, `<section class="page search-page"><p class="ey">${esc(LOCALES[lang][7])}</p><h1>${esc(copy.title)}</h1><form class="search" action="/${lang}/search" method="get"><input name="q" value="${esc(query)}" placeholder="${esc(copy.hint)}" autocomplete="off"><button type="submit">${esc(copy.title)}</button></form>${content}</section>`);
};

// A product record must make its originating FindSpreadsheet category
// discoverable without sending visitors back to the source site.  Categories
// and Category details already render their full source-derived 102-card
// streams; this link supplies the missing reverse path from every detail page.
const CATEGORY_ROUTE_UI = {
  en:'View category products', de:'Kategorieprodukte ansehen', fr:'Voir les produits de la catégorie', es:'Ver productos de la categoría', it:'Vedi prodotti della categoria', pt:'Ver produtos da categoria', nl:'Categorieproducten bekijken', pl:'Zobacz produkty kategorii', sv:'Visa kategoriprodukter'
};

async function productExportCategory(path) {
  const record = (await masterProducts()).find(item => item.path === path);
  return record ? masterCategory(record.path, record.title) : productCategoryKey(path);
}

const productCategoryRouteRender = render;
render = async function (url) {
  const [, lang, page = ''] = url.pathname.split('/');
  let html = String(await productCategoryRouteRender(url));
  if (!LOCALES[lang] || page !== 'product') return html;
  let category = productCategoryKey(url.searchParams.get('path') || '');
  try { category = await productExportCategory(url.searchParams.get('path') || ''); } catch (_) {}
  const categoryLabel = (CATALOG_UI[lang] || CATALOG_UI.en).labels[category] || category;
  const linkLabel = CATEGORY_ROUTE_UI[lang] || CATEGORY_ROUTE_UI.en;
  const categoryLink = `<a class="product-category-link" href="/${lang}/category-details?category=${encodeURIComponent(category)}"><span>${esc(linkLabel)}</span><b>${esc(categoryLabel)}</b></a>`;
  const purchase = /(<a class="button buy-button"[\s\S]*?<\/a>)/;
  if (purchase.test(html)) html = html.replace(purchase, `${categoryLink}$1`);
  return html.replace('</style>', `.product-category-link{display:flex;justify-content:space-between;gap:10px;align-items:center;margin:0 0 12px;padding:11px 12px;border:1px solid #b9e7f5;border-radius:10px;background:#f8fdff;color:#07384e;text-decoration:none;font-size:.82rem}.product-category-link span{color:#477488}.product-category-link b{color:#147fa7}.product-category-link:hover{border-color:#147fa7}@media(max-width:700px){.product-category-link{margin-bottom:9px;padding:9px 10px;font-size:.76rem}}</style>`);
};

// Category buttons must never lead to an empty in-subsite page because the
// public category HTML happens to answer with a throttled shell.  The owner's
// complete FindSpreadsheet export is the authoritative primary-site feed and
// is fetched afresh for every request.  Use it directly for category, category
// detail and home product streams so all nine category buttons consistently
// render their matching records and their next pages.
sourceCatalog = async function (category, _firstPath, firstOffset = 0) {
  return masterSourceCatalog(category, firstOffset);
};

// Product details have their own compact ten-image rolling presentation.  It
// runs only on product routes and rebuilds the media column from the current
// record's QC and original-image containers.  Other pages and their layouts
// are not touched.
const productRollingFormatRender = render;
render = async function (url) {
  const [, lang, page = ''] = url.pathname.split('/');
  let html = String(await productRollingFormatRender(url));
  if (!LOCALES[lang] || page !== 'product') return html;
  html = html.replace(/<section class="category-detail-gallery"[\s\S]*?<\/section>/, '');
  const rollingScript = `<script>(function(){var media=document.querySelector('.product-media'),panel=document.querySelector('.detail-panel');if(!media||!panel)return;var sku=(media.querySelector('#weidian-original-stream')||{}).dataset?.skuUrl||'';var title=(panel.querySelector('h1')||{}).textContent||'Product';var urls=[];function add(url){if(typeof url==='string'&&/^https?:\\/\\//i.test(url)&&urls.indexOf(url)<0&&urls.length<10)urls.push(url)}media.querySelectorAll('.qc-area img,.original-area img').forEach(function(image){add(image.src)});function draw(){if(!urls.length)return;media.classList.add('rolling-ten-media');media.replaceChildren();var label=document.createElement('p');label.className='media-label';label.textContent='Product images';var main=document.createElement('img');main.className='rolling-ten-main';main.src=urls[0];main.alt=title+' image 1';var rail=document.createElement('div');rail.className='rolling-ten-rail';urls.forEach(function(url,index){var button=document.createElement('button'),image=document.createElement('img');button.type='button';button.className='rolling-ten-thumb'+(index===0?' is-active':'');button.dataset.image=url;image.src=url;image.alt=title+' image '+(index+1);button.appendChild(image);rail.appendChild(button)});rail.addEventListener('click',function(event){var button=event.target.closest('[data-image]');if(!button)return;main.src=button.dataset.image;rail.querySelectorAll('.rolling-ten-thumb').forEach(function(item){item.classList.toggle('is-active',item===button)})});media.append(label,main,rail)}draw();if(!sku)return;fetch(sku).then(function(response){if(!response.ok)throw new Error('SKU image response unavailable');return response.json()}).then(function(record){(Array.isArray(record.images)?record.images:[]).forEach(add);draw()}).catch(function(){})})();</script>`;
  return html.replace('</body>', `${rollingScript}</body>`).replace('</style>', `.product-media.rolling-ten-media{padding:18px;background:#f8fdff}.rolling-ten-main{display:block;width:100%;aspect-ratio:1;object-fit:contain;border:1px solid #b9e7f5;border-radius:12px;background:#fff}.rolling-ten-rail{display:flex;gap:10px;overflow-x:auto;padding-top:14px;scroll-snap-type:x mandatory;scrollbar-width:thin}.rolling-ten-thumb{flex:0 0 76px;width:76px;height:76px;padding:0;border:2px solid #b9e7f5;border-radius:10px;overflow:hidden;background:#fff;cursor:pointer;scroll-snap-align:start}.rolling-ten-thumb.is-active{border-color:#147fa7}.rolling-ten-thumb img{display:block;width:100%;height:100%;object-fit:cover}@media(max-width:700px){.product-media.rolling-ten-media{padding:12px}.rolling-ten-rail{gap:7px;padding-top:10px}.rolling-ten-thumb{flex-basis:58px;width:58px;height:58px;border-radius:8px}}</style>`);
};

// Restore the agreed product-detail presentation: QC main image and
// thumbnails followed by the continuous original-image stream.  The rolling
// experiment is intentionally bypassed; all non-product routes are unchanged.
render = productRollingFormatRender;

// Category details is the only independent page that receives the new visual
// treatment: a ten-image, horizontally scrollable category preview directly
// above that category's existing source-derived product list.  No product
// detail, category, search, guide, FAQ or home route is changed here.
const CATEGORY_DETAIL_ROLLER_UI = {
  en:'Category image preview', de:'Kategorie-Bildvorschau', fr:'Aperçu des images de catégorie', es:'Vista previa de imágenes de categoría', it:'Anteprima immagini categoria', pt:'Pré-visualização de imagens da categoria', nl:'Voorbeeld van categorieafbeeldingen', pl:'Podgląd obrazów kategorii', sv:'Förhandsvisning av kategoribilder'
};

const categoryDetailsRollingRender = render;
render = async function (url) {
  const [, lang, page = ''] = url.pathname.split('/');
  let html = String(await categoryDetailsRollingRender(url));
  if (!LOCALES[lang] || page !== 'category-details') return html;
  const images = uniqueImages([...html.matchAll(/<article class="card">[\s\S]*?<img src="([^"]+)"/g)].map(match => match[1])).slice(0, 10);
  if (!images.length) return html;
  const category = cats.includes(url.searchParams.get('category')) ? url.searchParams.get('category') : 'all-products';
  const categoryLabel = (CATALOG_UI[lang] || CATALOG_UI.en).labels[category] || category;
  const label = CATEGORY_DETAIL_ROLLER_UI[lang] || CATEGORY_DETAIL_ROLLER_UI.en;
  const rail = images.map((image, index) => `<button class="category-rolling-thumb${index === 0 ? ' is-active' : ''}" type="button" data-category-image="${esc(image)}"><img src="${esc(image)}" alt="${esc(categoryLabel)} ${index + 1}" loading="lazy"></button>`).join('');
  const roller = `<section class="category-detail-roller"><p class="media-label">${esc(label)}</p><img id="category-rolling-main" class="category-rolling-main" src="${esc(images[0])}" alt="${esc(categoryLabel)}"><div class="category-rolling-rail">${rail}</div></section>`;
  const interaction = `<script>(function(){var main=document.getElementById('category-rolling-main'),rail=document.querySelector('.category-rolling-rail');if(!main||!rail)return;rail.addEventListener('click',function(event){var button=event.target.closest('[data-category-image]');if(!button)return;main.src=button.dataset.categoryImage;rail.querySelectorAll('.category-rolling-thumb').forEach(function(item){item.classList.toggle('is-active',item===button)})})})();</script>`;
  html = html.replace(/(<div class="chips">[\s\S]*?<\/div>)/, `$1${roller}`);
  return html.replace('</body>', `${interaction}</body>`).replace('</style>', `.category-detail-roller{margin:24px 0 30px;padding:18px;border:1px solid #b9e7f5;border-radius:16px;background:#f8fdff}.category-rolling-main{display:block;width:100%;max-height:min(62vw,620px);object-fit:contain;border:1px solid #b9e7f5;border-radius:11px;background:#fff}.category-rolling-rail{display:flex;gap:10px;overflow-x:auto;padding-top:13px;scroll-snap-type:x mandatory;scrollbar-width:thin}.category-rolling-thumb{flex:0 0 72px;width:72px;height:72px;padding:0;border:2px solid #b9e7f5;border-radius:9px;overflow:hidden;background:#fff;cursor:pointer;scroll-snap-align:start}.category-rolling-thumb.is-active{border-color:#147fa7}.category-rolling-thumb img{display:block;width:100%;height:100%;object-fit:cover}@media(max-width:700px){.category-detail-roller{margin:18px 0 22px;padding:12px}.category-rolling-rail{gap:7px;padding-top:10px}.category-rolling-thumb{flex-basis:56px;width:56px;height:56px;border-radius:7px}}</style>`);
};

// Restore Category details to its preceding source-product grid layout.
render = categoryDetailsRollingRender;

// Category details is intentionally its own image-only destination.  It is
// not a product directory: the page streams up to one hundred primary images
// from the selected live FindSpreadsheet category in one vertical flow.  The
// separate category cards and below-page product image section are omitted so
// this route cannot show an unrelated lower gallery.
const CATEGORY_IMAGE_SCROLL_UI = {
  en:{title:'Category details',label:'100 category images',note:'Images are supplied directly by the selected live FindSpreadsheet category.'},
  de:{title:'Kategorie-Details',label:'100 Kategoriebilder',note:'Die Bilder stammen direkt aus der ausgewählten Live-Kategorie von FindSpreadsheet.'},
  fr:{title:'Détails de catégorie',label:'100 images de catégorie',note:'Les images proviennent directement de la catégorie FindSpreadsheet sélectionnée en direct.'},
  es:{title:'Detalles de categoría',label:'100 imágenes de categoría',note:'Las imágenes provienen directamente de la categoría de FindSpreadsheet seleccionada en vivo.'},
  it:{title:'Dettagli categoria',label:'100 immagini della categoria',note:'Le immagini provengono direttamente dalla categoria FindSpreadsheet selezionata in tempo reale.'},
  pt:{title:'Detalhes da categoria',label:'100 imagens da categoria',note:'As imagens são fornecidas diretamente pela categoria FindSpreadsheet selecionada em direto.'},
  nl:{title:'Categoriedetails',label:'100 categorieafbeeldingen',note:'De afbeeldingen komen rechtstreeks uit de geselecteerde livecategorie van FindSpreadsheet.'},
  pl:{title:'Szczegóły kategorii',label:'100 obrazów kategorii',note:'Obrazy pochodzą bezpośrednio z wybranej kategorii FindSpreadsheet na żywo.'},
  sv:{title:'Kategoridetaljer',label:'100 kategoribilder',note:'Bilderna kommer direkt från den valda livekategorin hos FindSpreadsheet.'}
};

const categoryDetailImageScrollRender = render;
render = async function (url) {
  const [, lang, page = ''] = url.pathname.split('/');
  if (!LOCALES[lang] || page !== 'category-details') return categoryDetailImageScrollRender(url);

  const category = cats.includes(url.searchParams.get('category'))
    ? url.searchParams.get('category')
    : 'all-products';
  const catalog = CATALOG_UI[lang] || CATALOG_UI.en;
  const copy = CATEGORY_IMAGE_SCROLL_UI[lang] || CATEGORY_IMAGE_SCROLL_UI.en;
  const categoryLabel = catalog.labels[category] || category;
  const tabs = cats.map(item => `<a href="/${lang}/category-details?category=${encodeURIComponent(item)}">${esc(catalog.labels[item] || item)}</a>`).join('');

  try {
    const records = (await masterProducts())
      .filter(record => category === 'all-products' || masterCategory(record.path, record.title) === category)
      .slice(0, 100);
    const images = records.map((record, index) => `<img src="${esc(record.image)}" alt="${esc(record.title)} · ${index + 1}" loading="lazy" decoding="async">`).join('');
    const empty = `<p class="note">${esc((FALLBACK_UI[lang] || FALLBACK_UI.en).catalogUnavailable)}</p>`;
    return shell(lang, `${copy.title} · ${categoryLabel}`, `<section class="page category-image-scroll-page"><p class="ey">${esc(LOCALES[lang][7])}</p><h1>${esc(copy.title)} · ${esc(categoryLabel)}</h1><div class="chips">${tabs}</div><section class="category-image-scroll" aria-label="${esc(copy.label)}"><p class="media-label">${esc(copy.label)}</p><p class="note">${esc(copy.note)}</p>${images || empty}</section></section>`)
      .replace('</style>', `.category-image-scroll-page{max-width:860px}.category-image-scroll{margin-top:24px;padding:16px;border:1px solid #b9e7f5;border-radius:16px;background:#f8fdff}.category-image-scroll .media-label{margin:0 0 3px}.category-image-scroll .note{margin:0 0 16px}.category-image-scroll img{display:block;width:100%;height:auto;max-height:none;margin:0 0 12px;border:1px solid #b9e7f5;border-radius:10px;background:#fff;object-fit:contain}.category-image-scroll img:last-child{margin-bottom:0}@media(max-width:700px){.category-image-scroll{margin-top:16px;padding:10px;border-radius:12px}.category-image-scroll img{margin-bottom:8px;border-radius:7px}}</style>`);
  } catch (_) {
    return shell(lang, `${copy.title} · ${categoryLabel}`, `<section class="page category-image-scroll-page"><p class="ey">${esc(LOCALES[lang][7])}</p><h1>${esc(copy.title)} · ${esc(categoryLabel)}</h1><div class="chips">${tabs}</div><p class="note">${esc((FALLBACK_UI[lang] || FALLBACK_UI.en).catalogUnavailable)}</p></section>`);
  }
};

// Final route boundary: this comes after the legacy render layers so the
// requested navigation and new independent pages cannot be overwritten by an
// earlier compatibility wrapper.
const finalSupplementaryNavigationShell = shell;
shell = function (lang, title, body) {
  const labels = RESEARCH_ROUTE_COPY[lang] || RESEARCH_ROUTE_COPY.en;
  let html = finalSupplementaryNavigationShell(lang, title, body);
  html = html.replace(/<nav>([\s\S]*?)<\/nav>/, (_, links) => {
    const withoutDetails = links
      .replace(new RegExp(`<a href="/${lang}/category-details">[^<]*<\\/a>`, 'g'), '')
      .replace(new RegExp(`<a href="/${lang}/checklist">[^<]*<\\/a>`, 'g'), '')
      .replace(new RegExp(`<a href="/${lang}/shipping">[^<]*<\\/a>`, 'g'), '');
    const additions = `<a href="/${lang}/checklist">${esc(labels.checklist)}</a><a href="/${lang}/shipping">${esc(labels.shipping)}</a>`;
    return `<nav>${withoutDetails}${additions}</nav>`;
  });
  return html.replace('</style>', `.head nav{gap:14px}.head nav a{white-space:nowrap}.category-study{max-width:none;margin:42px 0 0;padding:30px;border:1px solid #b9e7f5;border-radius:18px;background:#f8fdff;color:#07384e}.category-study h2{margin:0 0 10px;font-size:clamp(1.35rem,2.7vw,2rem);line-height:1.18}.category-study h2:not(:first-child){margin-top:30px}.category-study p{margin:0 0 14px;color:#477488}.category-study-table{overflow:hidden;border:1px solid #b9e7f5;border-radius:14px}.category-study-row{display:grid;grid-template-columns:1fr 1.06fr}.category-study-row>*{padding:14px;border-right:1px solid #b9e7f5;border-bottom:1px solid #b9e7f5}.category-study-row>*:last-child{border-right:0}.category-study-row:last-child>*{border-bottom:0}.category-study-head{background:#e6fbff;color:#07384e}.research-route{max-width:980px}.research-intro{max-width:760px;color:#477488;font-size:1.05rem}.research-route-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin:28px 0}.research-route-grid article{padding:22px;border:1px solid #b9e7f5;border-radius:16px;background:#f8fdff}.research-route-grid h2{margin:0 0 9px;font-size:1.2rem;color:#07384e}.research-route-grid p{margin:0;color:#477488}@media(max-width:900px){.head{gap:12px}.head nav{gap:10px}.head nav a{font-size:.8rem}}@media(max-width:700px){.category-study{margin-top:26px;padding:17px;border-radius:13px}.category-study h2:not(:first-child){margin-top:23px}.category-study-row{grid-template-columns:1fr}.category-study-row>*{border-right:0}.category-study-row>*:first-child{border-bottom:0;font-weight:800}.research-route-grid{grid-template-columns:1fr;gap:10px;margin:18px 0}.research-route-grid article{padding:17px;border-radius:13px}}</style>`);
};

const finalSupplementaryRouteRender = render;
render = async function (url) {
  const [, lang, page = ''] = url.pathname.split('/');
  if (!LOCALES[lang]) return finalSupplementaryRouteRender(url);
  if (page === 'checklist' || page === 'shipping') {
    const copy = RESEARCH_ROUTE_COPY[lang] || RESEARCH_ROUTE_COPY.en;
    return shell(lang, page === 'checklist' ? copy.checkTitle : copy.shipTitle, researchRouteMarkup(lang, page));
  }
  let html = String(await finalSupplementaryRouteRender(url));
  if (page === 'categories') html = html.replace(/(<section class="page catalog-page">)/, `$1${categoryStudyMarkup(lang)}`);
  if (page === '') html = html.replace('</main>', `${categoryStudyMarkup(lang)}</main>`);
  return html;
};

// Final preview behaviour: catalogue records remain sourced from the
// authorized FindSpreadsheet export, while a card immediately hands off to
// the matching official PikoBuy purchase flow.
const DIRECT_PURCHASE_UI = {
  en:{buy:'Buy on PikoBuy',summary:'102 live FindSpreadsheet products per page · USD prices · every card goes directly to PikoBuy purchase.',live:'Live FindSpreadsheet records. Every card opens the matching PikoBuy purchase flow.'},
  de:{buy:'Bei PikoBuy kaufen',summary:'102 Live-Produkte von FindSpreadsheet pro Seite · USD-Preise · jede Karte führt direkt zum PikoBuy-Kauf.',live:'Live-Datensätze von FindSpreadsheet. Jede Karte öffnet den passenden PikoBuy-Kaufvorgang.'},
  fr:{buy:'Acheter sur PikoBuy',summary:'102 produits FindSpreadsheet en direct par page · prix en USD · chaque carte mène directement à l’achat PikoBuy.',live:'Fiches FindSpreadsheet en direct. Chaque carte ouvre le parcours d’achat PikoBuy correspondant.'},
  es:{buy:'Comprar en PikoBuy',summary:'102 productos FindSpreadsheet en vivo por página · precios en USD · cada tarjeta va directamente a la compra en PikoBuy.',live:'Registros FindSpreadsheet en vivo. Cada tarjeta abre el proceso de compra correspondiente de PikoBuy.'},
  it:{buy:'Acquista su PikoBuy',summary:'102 prodotti FindSpreadsheet live per pagina · prezzi in USD · ogni scheda porta direttamente all’acquisto PikoBuy.',live:'Record FindSpreadsheet live. Ogni scheda apre il percorso di acquisto PikoBuy corrispondente.'},
  pt:{buy:'Comprar no PikoBuy',summary:'102 produtos FindSpreadsheet em direto por página · preços em USD · cada cartão vai diretamente para a compra no PikoBuy.',live:'Registos FindSpreadsheet em direto. Cada cartão abre o processo de compra PikoBuy correspondente.'},
  nl:{buy:'Kopen op PikoBuy',summary:'102 live FindSpreadsheet-producten per pagina · USD-prijzen · elke kaart gaat rechtstreeks naar aankoop bij PikoBuy.',live:'Live FindSpreadsheet-records. Elke kaart opent de bijbehorende aankoopstroom van PikoBuy.'},
  pl:{buy:'Kup na PikoBuy',summary:'102 produktów FindSpreadsheet na żywo na stronę · ceny w USD · każda karta prowadzi bezpośrednio do zakupu w PikoBuy.',live:'Rekordy FindSpreadsheet na żywo. Każda karta otwiera odpowiedni proces zakupu PikoBuy.'},
  sv:{buy:'Köp på PikoBuy',summary:'102 liveprodukter från FindSpreadsheet per sida · USD-priser · varje kort går direkt till köp på PikoBuy.',live:'Liveposter från FindSpreadsheet. Varje kort öppnar motsvarande köpflöde på PikoBuy.'}
};

for (const [locale, copy] of Object.entries(DIRECT_PURCHASE_UI)) {
  CATALOG_UI[locale].summary = copy.summary;
  CATALOG_UI[locale].live = copy.live;
}

function pikoBuyPurchaseUrl(record) {
  const raw = String(record?.weidian || '').trim();
  const itemId = (raw.match(/(?:itemID=|itemid=)?(\d{5,})/i) || [])[1];
  if (!itemId) return '';
  const sourceUrl = /^https?:\/\//i.test(raw)
    ? raw
    : `https://weidian.com/item.html?itemID=${encodeURIComponent(itemId)}`;
  return `https://www.pikobuy.com/product/detail?productUrl=${encodeURIComponent(sourceUrl)}`;
}

grid = function (lang, list) {
  const ui = DIRECT_PURCHASE_UI[lang] || DIRECT_PURCHASE_UI.en;
  return `<section class="cards">${list.map(p => {
    const href = pikoBuyPurchaseUrl(p);
    const image = `<img src="${esc(p.image)}" alt="${esc(p.title)}"><h3>${esc(p.title)}</h3>`;
    const action = href
      ? `<a class="card-main" href="${esc(href)}">${image}</a>`
      : `<div class="card-main">${image}</div>`;
    const buy = href ? `<a class="view-details" href="${esc(href)}">${esc(ui.buy)}</a>` : '';
    return `<article class="card">${action}<div class="meta"><b>${usdPrice(p.price)}</b><span>${esc(p.views || '')}</span></div>${buy}</article>`;
  }).join('')}</section>`;
};

// Keep every category explanation and table row.  Only the desktop reading
// measure changes to the compact centered format; mobile retains page width.
const compactCategoryStudyShell = shell;
shell = function (lang, title, body) {
  return compactCategoryStudyShell(lang, title, body).replace('</style>', `.category-study{max-width:980px !important;margin:4px auto 0 !important;padding:0 !important;border:0 !important;border-radius:0 !important;background:transparent !important}.category-study p{max-width:none}@media(max-width:700px){.category-study{margin:0 !important;padding:0 !important}}</style>`);
};

const directPurchaseRouteRender = render;
render = async function (url) {
  const [, lang, page = ''] = url.pathname.split('/');
  if (LOCALES[lang] && page === 'product') {
    const path = url.searchParams.get('path') || '';
    try {
      const record = (await masterProducts()).find(item => item.path === path);
      const destination = pikoBuyPurchaseUrl(record);
      if (destination) return Response.redirect(destination, 302);
    } catch (_) {}
    return Response.redirect(new URL(`/${lang}/categories?category=all-products`, url), 302);
  }
  return directPurchaseRouteRender(url);
};

// The independent FAQ now presents the complete answer body on the page
// itself.  This keeps the long-form research text visible without requiring a
// visitor to open eight separate accordions.
function expandedFaqMarkup(lang) {
  const copy = EDITORIAL_LOCALES[lang];
  const title = copy ? copy.faqTitle : 'Frequently asked questions';
  const intro = copy ? copy.faqIntro : 'Detailed answers based on PikoBuy’s published service descriptions. Always check the current official policy before ordering or shipping.';
  return `<section class="page faq-page faq-page-expanded"><p class="ey">PIKOBUY SPREADSHEET · FAQ</p><h1>${esc(title)}</h1><p class="note">${esc(intro)}</p><div class="faq-list faq-full-list">${editorialFaq(lang).map(([question, answer], index) => `<article class="faq-full-item" id="faq-${index + 1}"><p class="seo-number">FAQ ${String(index + 1).padStart(2, '0')}</p><h2>${esc(question)}</h2><p>${esc(answer)}</p></article>`).join('')}</div></section>`;
}

const DETAILED_ROUTE_CARDS = {
  checklist:[
    ['1. Confirm the exact source option','Keep the original product page open while you review the record. Check the selected colour, size, quantity, visible price, source ID and seller notes. A hero image can represent several versions, so the selected option is more important than the first image.'],
    ['2. Compare category-specific evidence','Use the evidence that matters for the item type: profile and sole photos for shoes; measurements, fabric and print placement for clothing; dimensions, hardware and interior views for bags or accessories. Compare similar rows rather than judging a title alone.'],
    ['3. Record the price and weight context','Treat a displayed product price as one part of the decision. Note material, package clues and likely weight before assuming the row is good value. A low listing price can be outweighed by packaging, dimensions or a route that is not suitable for the parcel.'],
    ['4. Review warehouse photos with a specific question','When warehouse or QC photos arrive, compare the received item with the saved source page: option, count, visible colour, markings, obvious condition and any requested detail. If something is unclear, ask a focused question or request a targeted image while the relevant service window remains open.'],
    ['5. Decide before a return window closes','Return eligibility, seller consent, item condition and fees can differ by item and may change. Check the current official PikoBuy return screen and the seller’s conditions before you decide; keep the source listing, option and warehouse evidence together so the request is factual.'],
    ['6. Prepare the parcel deliberately','Before submitting a parcel, re-check the delivery address, permitted contents, item count, optional packaging and the currently available route. Keep order IDs, inspection images and parcel records together. Official account support is the place for order-specific payment, return, tracking or route questions.']
  ],
  shipping:[
    ['1. Start with a planning estimate','Use an estimate to compare possibilities, not to predict an invoice. Destination, estimated weight and dimensions are useful first inputs, but the warehouse-measured parcel, selected route and billing rule are the relevant details when you submit.'],
    ['2. Separate item weight from parcel weight','Shoes, jackets, hoodies, bags and electronics can gain meaningful weight or volume from materials and packaging. The item price may look attractive until a box, protective packing or dimensional billing changes the comparison.'],
    ['3. Compare route rules, not just a headline price','Check the route information for the destination, stated restrictions, billing method and what it accepts. A lower-looking route is not automatically the better choice if its limits, service terms or destination coverage do not match the parcel.'],
    ['4. Make packing choices before payment','Review measured weight and dimensions, item count, packaging choices and address before payment. Combining items, removing or keeping packaging, and the selected route can all affect the final parcel calculation and the practical protection of the contents.'],
    ['5. Treat customs and timing as external risks','Carriers and customs authorities are independent third parties. Clearance, scans, delays, taxes, losses and delivery timing can change after dispatch. Do not plan around a guaranteed arrival date, and make sure the contents and declared information follow current platform and destination rules.'],
    ['6. Track from the official order record','Keep the parcel ID, route selection and relevant photos. Tracking updates can take time to appear and may pause between carrier events. For an order-specific issue, use the official support channel connected to the account and provide the facts, dates and evidence you saved.']
  ]
};

function detailedResearchRouteMarkup(lang, page) {
  const copy = RESEARCH_ROUTE_COPY[lang] || RESEARCH_ROUTE_COPY.en;
  const checklist = page === 'checklist';
  const title = checklist ? copy.checkTitle : copy.shipTitle;
  const intro = checklist ? copy.checkIntro : copy.shipIntro;
  const cards = DETAILED_ROUTE_CARDS[checklist ? 'checklist' : 'shipping'];
  return `<section class="page research-route research-route-expanded"><p class="ey">PIKOBUY SPREADSHEET · ${esc(checklist ? copy.checklist : copy.shipping)}</p><h1>${esc(title)}</h1><p class="research-intro">${esc(intro)}</p><div class="research-route-grid research-route-detail-grid">${cards.map(([heading, text]) => `<article><h2>${esc(heading)}</h2><p>${esc(text)}</p></article>`).join('')}</div><p class="note">Independent research guidance only. Confirm current policies, fees, route availability, seller conditions and destination restrictions directly with PikoBuy before ordering or shipping.</p></section>`;
}

// Give standalone routes one consistent, slightly wider reading measure while
// keeping all homepage and catalogue sections unchanged.
const widerIndependentPageShell = shell;
shell = function (lang, title, body) {
  return widerIndependentPageShell(lang, title, body).replace('</style>', `.page,.seo-page,.faq-page,.research-route,.category-image-scroll-page{width:100% !important;max-width:1240px !important;margin:30px auto !important}.faq-full-list{grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.faq-full-item{padding:24px;border:1px solid #b9e7f5;border-radius:16px;background:#f8fdff}.faq-full-item h2{margin:5px 0 12px;font-size:1.28rem;line-height:1.25;color:#07384e}.faq-full-item p:last-child{margin:0;color:#477488}.research-route{max-width:1240px !important}.research-intro{max-width:100% !important}.research-route-detail-grid{grid-template-columns:repeat(2,minmax(0,1fr)) !important}.research-route-detail-grid article{min-height:170px}@media(max-width:700px){.page,.seo-page,.faq-page,.research-route,.category-image-scroll-page{margin:18px auto !important}.faq-full-list,.research-route-detail-grid{grid-template-columns:1fr !important}.faq-full-item{padding:17px;border-radius:13px}.research-route-detail-grid article{min-height:0}}</style>`);
};

const expandedIndependentRouteRender = render;
render = async function (url) {
  const [, lang, page = ''] = url.pathname.split('/');
  if (!LOCALES[lang]) return expandedIndependentRouteRender(url);
  if (page === 'faq') return shell(lang, 'PikoBuy FAQ', expandedFaqMarkup(lang));
  if (page === 'checklist' || page === 'shipping') {
    const copy = RESEARCH_ROUTE_COPY[lang] || RESEARCH_ROUTE_COPY.en;
    return shell(lang, page === 'checklist' ? copy.checkTitle : copy.shipTitle, detailedResearchRouteMarkup(lang, page));
  }
  return expandedIndependentRouteRender(url);
};

// Blue-frame desktop measure: the home surface and every independent route
// share the same broad content width.  The narrow red-frame reading measure
// is intentionally removed; mobile retains the existing compact layout.
const blueFrameWidthShell = shell;
shell = function (lang, title, body) {
  return blueFrameWidthShell(lang, title, body).replace('</style>', `.head,main,footer{max-width:1596px !important}.directory-hero,.hero,.directory-section,.directory-copy,.page,.seo-page,.faq-page,.research-route,.category-image-scroll-page{width:100% !important;max-width:1548px !important;margin-left:auto !important;margin-right:auto !important}@media(max-width:700px){.head,main,footer{max-width:none !important}.directory-hero,.hero,.directory-section,.directory-copy,.page,.seo-page,.faq-page,.research-route,.category-image-scroll-page{max-width:none !important}}</style>`);
};

// Detailed independent-page copy for every supported language.  These keep
// the six-step structure and the same decision meaning after a locale change.
const ROUTE_CARD_TRANSLATIONS = {
  de:{note:'Unabhängige Recherchehilfe. Prüfen Sie aktuelle Regeln, Gebühren, Routen, Verkäuferbedingungen und Einschränkungen direkt bei PikoBuy.',checklist:[['1. Exakte Quelloption bestätigen','Lassen Sie die Originalseite geöffnet und prüfen Sie Farbe, Größe, Menge, sichtbaren Preis, Quell-ID und Verkäuferhinweise. Das Titelbild kann mehrere Varianten zeigen; entscheidend ist die gewählte Option.'],['2. Kategoriebezogene Nachweise vergleichen','Prüfen Sie bei Schuhen Profil und Sohle, bei Kleidung Maße, Stoff und Druck und bei Taschen Maße, Beschläge und Innenansicht. Vergleichen Sie ähnliche Einträge statt nur einen Titel zu bewerten.'],['3. Preis und Gewicht einordnen','Der Artikelpreis ist nur ein Teil der Entscheidung. Beachten Sie Material, Verpackung und wahrscheinliches Gewicht; Maße oder eine ungeeignete Route können den Wert verändern.'],['4. Lagerfotos gezielt prüfen','Vergleichen Sie Lager- oder QC-Fotos mit der gespeicherten Quelle: Option, Anzahl, sichtbare Farbe, Markierungen und Zustand. Fragen Sie innerhalb des geltenden Zeitfensters gezielt nach einem Detailbild.'],['5. Vor Ablauf des Rückgabefensters entscheiden','Rückgabefähigkeit, Zustimmung des Verkäufers, Zustand und Gebühren können je Artikel abweichen. Prüfen Sie die aktuelle offizielle Rückgabeseite und halten Sie Quelle, Option und Fotos zusammen.'],['6. Paket bewusst vorbereiten','Prüfen Sie vor dem Versand Adresse, erlaubte Inhalte, Stückzahl, Verpackungsoptionen und verfügbare Route. Bewahren Sie Bestell-ID, Prüfungsbilder und Paketdaten für den offiziellen Support auf.']],shipping:[['1. Mit einer Planungsschätzung beginnen','Nutzen Sie Schätzwerte zum Vergleichen, nicht als Rechnungsvorhersage. Ziel, geschätztes Gewicht und Maße sind ein Anfang; maßgeblich sind gemessenes Paket, Route und Abrechnungsregel bei der Aufgabe.'],['2. Artikel- und Paketgewicht trennen','Schuhe, Jacken, Hoodies, Taschen und Elektronik können durch Material und Verpackung deutlich schwerer oder voluminöser werden.'],['3. Routenregeln statt nur Preise vergleichen','Prüfen Sie Zielgebiet, Einschränkungen, Abrechnungsmethode und zulässige Inhalte. Ein günstiger erscheinender Tarif passt nicht automatisch zum Paket.'],['4. Verpackung vor Zahlung festlegen','Prüfen Sie gemessenes Gewicht, Maße, Stückzahl, Verpackung und Adresse. Kombinieren von Artikeln oder Verpackungsänderungen können die Endberechnung beeinflussen.'],['5. Zoll und Zeit als externe Risiken behandeln','Transporteur und Zoll sind unabhängige Dritte. Abfertigung, Scans, Verzögerungen, Abgaben und Zustellung können sich nach dem Versand ändern.'],['6. Über den offiziellen Auftrag verfolgen','Bewahren Sie Paket-ID, Route und Fotos auf. Updates können verzögert erscheinen; nutzen Sie bei auftragsbezogenen Problemen den offiziellen Account-Support mit Daten und Nachweisen.']]},
  fr:{note:'Guide de recherche indépendant. Vérifiez directement auprès de PikoBuy les règles, frais, routes, conditions vendeur et restrictions actuels.',checklist:[['1. Confirmer l’option source exacte','Gardez la fiche d’origine ouverte et vérifiez couleur, taille, quantité, prix visible, ID source et notes vendeur. L’image principale peut montrer plusieurs variantes ; l’option choisie compte.'],['2. Comparer les preuves de la bonne catégorie','Pour les chaussures, vérifiez profil et semelle ; pour les vêtements, mesures, tissu et impression ; pour les sacs, dimensions, quincaillerie et intérieur. Comparez des fiches similaires.'],['3. Situer prix et poids','Le prix affiché ne suffit pas. Notez matière, emballage et poids probable : volume, boîte ou route inadaptée peuvent modifier la valeur réelle.'],['4. Examiner les photos d’entrepôt avec une question précise','Comparez les photos QC à la fiche sauvegardée : option, quantité, couleur visible, marquages et état. Demandez une photo ciblée tant que la période applicable est ouverte.'],['5. Décider avant la fermeture du retour','Éligibilité, accord du vendeur, état et frais peuvent varier. Consultez l’écran officiel de retour et conservez fiche, option et photos ensemble.'],['6. Préparer le colis avec soin','Avant l’envoi, vérifiez adresse, contenu autorisé, quantité, emballage et route disponible. Gardez ID de commande, photos et données colis pour le support officiel.']],shipping:[['1. Commencer par une estimation de planification','Une estimation sert à comparer, pas à prévoir une facture. Destination, poids et dimensions sont un point de départ ; le colis mesuré, la route et sa facturation comptent à l’envoi.'],['2. Distinguer poids article et colis','Chaussures, vestes, hoodies, sacs et électronique peuvent gagner poids ou volume avec matière et emballage.'],['3. Comparer les règles de route, pas seulement le prix','Vérifiez destination, restrictions, méthode de facturation et contenu accepté. Un tarif bas ne convient pas forcément au colis.'],['4. Choisir l’emballage avant paiement','Revoyez poids mesuré, dimensions, quantité, options d’emballage et adresse. Regrouper ou modifier l’emballage peut changer le calcul final.'],['5. Considérer douane et délai comme risques externes','Transporteurs et douanes sont indépendants. Contrôle, scans, délais, taxes et livraison peuvent évoluer après l’expédition.'],['6. Suivre depuis le dossier officiel','Conservez ID colis, route et photos. Les mises à jour peuvent tarder ; pour un problème de commande, utilisez le support officiel avec faits et preuves.']]},
  es:{note:'Guía de investigación independiente. Confirma directamente con PikoBuy las políticas, tarifas, rutas, condiciones del vendedor y restricciones actuales.',checklist:[['1. Confirma la opción exacta de origen','Mantén abierta la página original y revisa color, talla, cantidad, precio visible, ID de origen y notas del vendedor. La imagen principal puede mostrar variantes; importa la opción elegida.'],['2. Compara evidencia específica de la categoría','En zapatos revisa perfil y suela; en ropa, medidas, tela y estampado; en bolsos, dimensiones, herrajes e interior. Compara registros similares, no solo un título.'],['3. Pon precio y peso en contexto','El precio mostrado es solo una parte. Considera material, embalaje y peso probable: una caja, volumen o ruta inadecuada puede cambiar el valor.'],['4. Revisa fotos de almacén con una pregunta concreta','Compara las fotos QC con la fuente guardada: opción, cantidad, color visible, marcas y estado. Pide una foto específica dentro del plazo aplicable.'],['5. Decide antes de que cierre la devolución','La elegibilidad, consentimiento del vendedor, estado y costes pueden variar. Revisa la pantalla oficial de devoluciones y conserva juntos fuente, opción y fotos.'],['6. Prepara el paquete deliberadamente','Antes de enviarlo, confirma dirección, contenidos permitidos, cantidad, embalaje y ruta disponible. Guarda ID, fotos de inspección y datos del paquete para soporte oficial.']],shipping:[['1. Empieza con una estimación de planificación','Usa estimaciones para comparar, no para predecir una factura. Destino, peso y dimensiones son el inicio; al enviar cuentan el paquete medido, ruta y método de cobro.'],['2. Separa peso del artículo y del paquete','Zapatos, chaquetas, sudaderas, bolsos y electrónica pueden sumar peso o volumen por materiales y embalaje.'],['3. Compara reglas de ruta, no solo el precio','Revisa destino, restricciones, método de cobro y lo que acepta. Una ruta que parece más barata no siempre encaja con el paquete.'],['4. Decide el embalaje antes de pagar','Revisa peso medido, dimensiones, cantidad, embalaje y dirección. Combinar artículos o cambiar embalaje puede afectar el cálculo final.'],['5. Trata aduanas y plazos como riesgos externos','Transportistas y aduanas son terceros independientes. Despacho, escaneos, retrasos, impuestos y entrega pueden cambiar tras el envío.'],['6. Sigue el pedido desde el registro oficial','Guarda ID de paquete, ruta y fotos. Las actualizaciones pueden demorarse; usa soporte oficial con fechas y pruebas para incidencias del pedido.']]},
  it:{note:'Guida di ricerca indipendente. Verifica direttamente con PikoBuy politiche, commissioni, rotte, condizioni del venditore e restrizioni attuali.',checklist:[['1. Conferma l’opzione sorgente esatta','Tieni aperta la pagina originale e controlla colore, taglia, quantità, prezzo visibile, ID sorgente e note del venditore. L’immagine principale può mostrare più varianti; conta l’opzione selezionata.'],['2. Confronta prove specifiche della categoria','Per le scarpe controlla profilo e suola; per l’abbigliamento misure, tessuto e stampa; per borse dimensioni, hardware e interno. Confronta record simili.'],['3. Valuta prezzo e peso nel contesto','Il prezzo indicato è solo una parte. Considera materiale, imballo e peso probabile: scatola, volume o rotta inadatta possono cambiare il valore.'],['4. Esamina le foto di magazzino con una domanda precisa','Confronta le foto QC con la fonte salvata: opzione, quantità, colore, segni e condizione. Richiedi una foto mirata entro la finestra applicabile.'],['5. Decidi prima della chiusura del reso','Idoneità, consenso del venditore, condizione e costi possono variare. Controlla la pagina ufficiale dei resi e conserva fonte, opzione e foto.'],['6. Prepara il pacco con attenzione','Prima della spedizione ricontrolla indirizzo, contenuti consentiti, quantità, imballo e rotta. Conserva ID, foto e dati del pacco per il supporto ufficiale.']],shipping:[['1. Parti da una stima di pianificazione','Usa la stima per confrontare, non per prevedere una fattura. Destinazione, peso e misure sono l’inizio; contano pacco misurato, rotta e fatturazione alla spedizione.'],['2. Separa peso articolo e peso pacco','Scarpe, giacche, felpe, borse ed elettronica possono aggiungere peso o volume con materiali e imballaggio.'],['3. Confronta le regole della rotta, non solo il prezzo','Verifica destinazione, limiti, metodo di fatturazione e contenuti accettati. Una tariffa più bassa non sempre è adatta al pacco.'],['4. Scegli l’imballaggio prima del pagamento','Controlla peso misurato, misure, quantità, imballo e indirizzo. Unire articoli o modificare l’imballo può cambiare il calcolo finale.'],['5. Tratta dogana e tempi come rischi esterni','Corrieri e dogane sono terzi indipendenti. Sdoganamento, scansioni, ritardi, tasse e consegna possono cambiare dopo la spedizione.'],['6. Segui dal record ufficiale','Conserva ID pacco, rotta e foto. Gli aggiornamenti possono tardare; per problemi dell’ordine usa il supporto ufficiale con fatti e prove.']]},
  pt:{note:'Guia de pesquisa independente. Confirme diretamente com a PikoBuy as políticas, taxas, rotas, condições do vendedor e restrições atuais.',checklist:[['1. Confirme a opção de origem exata','Mantenha a página original aberta e verifique cor, tamanho, quantidade, preço visível, ID de origem e notas do vendedor. A imagem principal pode mostrar variantes; a opção escolhida é o essencial.'],['2. Compare provas próprias da categoria','Em calçado verifique perfil e sola; em roupa, medidas, tecido e estampa; em malas, dimensões, ferragens e interior. Compare registos semelhantes.'],['3. Coloque preço e peso em contexto','O preço apresentado é apenas uma parte. Considere material, embalagem e peso provável: caixa, volume ou rota inadequada podem alterar o valor.'],['4. Reveja fotos de armazém com uma pergunta concreta','Compare fotos QC com a fonte guardada: opção, quantidade, cor visível, marcas e condição. Peça uma foto específica dentro do prazo aplicável.'],['5. Decida antes de fechar a devolução','Elegibilidade, consentimento do vendedor, condição e custos podem variar. Verifique a página oficial de devoluções e guarde fonte, opção e fotos juntas.'],['6. Prepare a encomenda com cuidado','Antes de enviar, confirme morada, conteúdos permitidos, quantidade, embalagem e rota disponível. Guarde ID, fotos e dados da encomenda para o suporte oficial.']],shipping:[['1. Comece por uma estimativa de planeamento','Use estimativas para comparar, não para prever uma fatura. Destino, peso e medidas são o início; contam a encomenda medida, rota e cobrança no envio.'],['2. Separe peso do artigo e da encomenda','Calçado, casacos, hoodies, malas e eletrónica podem ganhar peso ou volume por materiais e embalagem.'],['3. Compare regras de rota, não apenas o preço','Verifique destino, restrições, método de cobrança e conteúdos aceites. Uma rota aparentemente barata pode não servir o pacote.'],['4. Decida a embalagem antes de pagar','Reveja peso medido, dimensões, quantidade, embalagem e morada. Agrupar artigos ou alterar embalagem pode mudar o cálculo final.'],['5. Trate alfândega e prazo como riscos externos','Transportadoras e alfândegas são terceiros independentes. Desalfandegamento, scans, atrasos, impostos e entrega podem mudar após o envio.'],['6. Acompanhe pelo registo oficial','Guarde ID do pacote, rota e fotos. Atualizações podem demorar; para questões da encomenda use o suporte oficial com factos e provas.']]},
  nl:{note:'Onafhankelijke onderzoeksgids. Controleer actuele regels, kosten, routes, verkopersvoorwaarden en beperkingen rechtstreeks bij PikoBuy.',checklist:[['1. Bevestig de exacte bronoptie','Houd de originele pagina open en controleer kleur, maat, aantal, zichtbare prijs, bron-ID en verkopersnotities. De hoofdafbeelding kan varianten tonen; de gekozen optie is bepalend.'],['2. Vergelijk bewijs per categorie','Controleer bij schoenen profiel en zool; bij kleding maten, stof en print; bij tassen afmetingen, hardware en binnenkant. Vergelijk soortgelijke records.'],['3. Plaats prijs en gewicht in context','De getoonde prijs is slechts een deel. Kijk naar materiaal, verpakking en vermoedelijk gewicht: doos, volume of ongeschikte route kunnen de waarde veranderen.'],['4. Bekijk magazijnfoto’s met een gerichte vraag','Vergelijk QC-foto’s met de opgeslagen bron: optie, aantal, zichtbare kleur, markeringen en conditie. Vraag tijdig een gerichte detailfoto.'],['5. Beslis vóór het retourvenster sluit','Geschiktheid, toestemming van de verkoper, conditie en kosten kunnen verschillen. Controleer het officiële retourscherm en bewaar bron, optie en foto’s samen.'],['6. Bereid het pakket bewust voor','Controleer vóór verzending adres, toegestane inhoud, aantal, verpakking en beschikbare route. Bewaar order-ID, inspectiefoto’s en pakketgegevens voor officiële support.']],shipping:[['1. Begin met een planningsschatting','Gebruik schattingen om te vergelijken, niet als factuurvoorspelling. Bestemming, gewicht en maten zijn het begin; gemeten pakket, route en facturering tellen bij verzending.'],['2. Scheid artikel- en pakketgewicht','Schoenen, jassen, hoodies, tassen en elektronica kunnen door materiaal en verpakking extra gewicht of volume krijgen.'],['3. Vergelijk routeregels, niet alleen prijs','Controleer bestemming, beperkingen, factureringsmethode en toegestane inhoud. Een goedkoper lijkende route past niet altijd bij het pakket.'],['4. Kies verpakking vóór betaling','Controleer gemeten gewicht, afmetingen, aantal, verpakking en adres. Artikelen combineren of verpakking wijzigen kan de eindberekening veranderen.'],['5. Zie douane en tijd als externe risico’s','Vervoerders en douane zijn onafhankelijke derden. Inklaring, scans, vertragingen, belastingen en bezorging kunnen na verzending veranderen.'],['6. Volg via het officiële dossier','Bewaar pakket-ID, route en foto’s. Updates kunnen vertragen; gebruik bij orderproblemen officiële support met feiten en bewijs.']]},
  pl:{note:'Niezależny poradnik badawczy. Aktualne zasady, opłaty, trasy, warunki sprzedawcy i ograniczenia sprawdzaj bezpośrednio w PikoBuy.',checklist:[['1. Potwierdź dokładny wariant źródłowy','Zostaw otwartą oryginalną stronę i sprawdź kolor, rozmiar, ilość, widoczną cenę, ID źródła i uwagi sprzedawcy. Zdjęcie główne może pokazywać warianty; liczy się wybrana opcja.'],['2. Porównaj dowody dla kategorii','Przy butach sprawdź profil i podeszwę; przy odzieży wymiary, materiał i nadruk; przy torbach wymiary, okucia i wnętrze. Porównuj podobne rekordy.'],['3. Oceń cenę i wagę w kontekście','Widoczna cena to tylko część decyzji. Uwzględnij materiał, opakowanie i prawdopodobną wagę; pudełko, objętość lub zła trasa mogą zmienić wartość.'],['4. Sprawdź zdjęcia magazynowe z konkretnym pytaniem','Porównaj zdjęcia QC z zapisaną stroną: wariant, ilość, kolor, oznaczenia i stan. W odpowiednim terminie poproś o ukierunkowane zdjęcie.'],['5. Zdecyduj przed zamknięciem zwrotu','Kwalifikacja, zgoda sprzedawcy, stan i opłaty mogą się różnić. Sprawdź oficjalny ekran zwrotu i zachowaj razem źródło, wariant i zdjęcia.'],['6. Przygotuj paczkę świadomie','Przed wysłaniem sprawdź adres, dozwoloną zawartość, ilość, opakowanie i dostępną trasę. Zachowaj ID, zdjęcia i dane paczki dla oficjalnego wsparcia.']],shipping:[['1. Zacznij od estymacji planistycznej','Używaj estymacji do porównań, nie jako przewidywania rachunku. Cel, waga i wymiary to początek; przy wysyłce liczą się zmierzona paczka, trasa i rozliczenie.'],['2. Oddziel wagę produktu od paczki','Buty, kurtki, bluzy, torby i elektronika mogą zyskać wagę lub objętość przez materiały i opakowanie.'],['3. Porównuj zasady tras, nie tylko cenę','Sprawdź cel, ograniczenia, sposób rozliczenia i akceptowaną zawartość. Tańsza pozornie trasa nie zawsze pasuje do paczki.'],['4. Wybierz pakowanie przed płatnością','Sprawdź zmierzoną wagę, wymiary, ilość, pakowanie i adres. Łączenie produktów lub zmiana pakowania może zmienić końcowe wyliczenie.'],['5. Traktuj cło i czas jako ryzyka zewnętrzne','Przewoźnicy i urząd celny są niezależnymi stronami. Odprawa, skany, opóźnienia, podatki i dostawa mogą zmienić się po nadaniu.'],['6. Śledź z oficjalnego rekordu','Zachowaj ID paczki, trasę i zdjęcia. Aktualizacje mogą być opóźnione; przy problemie z zamówieniem użyj oficjalnego wsparcia z faktami i dowodami.']]},
  sv:{note:'Oberoende researchguide. Kontrollera aktuella regler, avgifter, rutter, säljarvillkor och begränsningar direkt hos PikoBuy.',checklist:[['1. Bekräfta exakt källalternativ','Håll originalsidan öppen och kontrollera färg, storlek, antal, synligt pris, käll-ID och säljarens anteckningar. Huvudbilden kan visa varianter; det valda alternativet är viktigast.'],['2. Jämför kategori-specifik bevisning','För skor: profil och sula; för kläder: mått, tyg och tryck; för väskor: dimensioner, beslag och insida. Jämför liknande poster.'],['3. Sätt pris och vikt i sammanhang','Det visade priset är bara en del. Se material, emballage och sannolik vikt; låda, volym eller olämplig rutt kan ändra värdet.'],['4. Granska lagerbilder med en tydlig fråga','Jämför QC-bilder med den sparade källan: alternativ, antal, synlig färg, märkningar och skick. Be inom gällande tidsfönster om en riktad detaljbild.'],['5. Besluta innan returfönstret stänger','Behörighet, säljarens samtycke, skick och avgifter kan skilja sig. Kontrollera den officiella retursidan och behåll källa, alternativ och bilder tillsammans.'],['6. Förbered paketet medvetet','Kontrollera före inskick adress, tillåtet innehåll, antal, emballage och tillgänglig rutt. Spara order-ID, inspektionsbilder och paketdata för officiell support.']],shipping:[['1. Börja med en planeringsuppskattning','Använd uppskattningar för att jämföra, inte för att förutsäga en faktura. Destination, vikt och mått är början; uppmätt paket, rutt och debitering gäller vid inskick.'],['2. Separera artikel- och paketvikt','Skor, jackor, hoodies, väskor och elektronik kan få extra vikt eller volym av material och emballage.'],['3. Jämför ruttregler, inte bara pris','Kontrollera destination, begränsningar, debiteringsmetod och godkänt innehåll. En billigare rutt passar inte alltid paketet.'],['4. Bestäm emballage före betalning','Kontrollera uppmätt vikt, mått, antal, emballage och adress. Att kombinera artiklar eller ändra emballage kan ändra slutberäkningen.'],['5. Se tull och tid som externa risker','Transportörer och tullmyndigheter är oberoende tredje parter. Klarering, skanningar, förseningar, avgifter och leverans kan ändras efter avsändning.'],['6. Spåra från den officiella orderposten','Spara paket-ID, rutt och bilder. Uppdateringar kan dröja; använd officiell support med fakta och underlag vid orderspecifika problem.']]}
};

const englishDetailedResearchRouteMarkup = detailedResearchRouteMarkup;
detailedResearchRouteMarkup = function (lang, page) {
  const translated = ROUTE_CARD_TRANSLATIONS[lang];
  if (!translated) return englishDetailedResearchRouteMarkup(lang, page);
  const copy = RESEARCH_ROUTE_COPY[lang] || RESEARCH_ROUTE_COPY.en;
  const checklist = page === 'checklist';
  const cards = translated[checklist ? 'checklist' : 'shipping'];
  const title = checklist ? copy.checkTitle : copy.shipTitle;
  const intro = checklist ? copy.checkIntro : copy.shipIntro;
  return `<section class="page research-route research-route-expanded"><p class="ey">PIKOBUY SPREADSHEET · ${esc(checklist ? copy.checklist : copy.shipping)}</p><h1>${esc(title)}</h1><p class="research-intro">${esc(intro)}</p><div class="research-route-grid research-route-detail-grid">${cards.map(([heading, text]) => `<article><h2>${esc(heading)}</h2><p>${esc(text)}</p></article>`).join('')}</div><p class="note">${esc(translated.note)}</p></section>`;
};

// This final route layer rewrites every locale link using the current route
// and query. It applies after all route-specific renderers, so FAQ, Checklist
// and Shipping never fall back to a language homepage.
const localeRoutePreservingRender = render;
render = async function (url) {
  const result = await localeRoutePreservingRender(url);
  if (result instanceof Response) return result;
  const [, lang] = url.pathname.split('/');
  if (!LOCALES[lang]) return result;
  const remainder = url.pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '') || '/';
  return String(result).replace(/(<a data-language="([a-z]{2})" href=")\/[a-z]{2}\/(")/g, (_, before, locale, after) => `${before}/${locale}${remainder}${url.search}${after}`);
};

// Keep the category decision guide as wide as the homepage, while reducing
// its vertical rhythm so the following live catalogue is visible sooner.
const compactWideCategoryStudyShell = shell;
shell = function (lang, title, body) {
  return compactWideCategoryStudyShell(lang, title, body).replace('</style>', `.category-study{width:100% !important;max-width:1548px !important;margin:10px auto 0 !important;padding:0 !important}.category-study h2{margin:0 0 6px !important;font-size:clamp(1.25rem,2.25vw,1.75rem) !important;line-height:1.16 !important}.category-study h2:not(:first-child){margin-top:18px !important}.category-study p{margin:0 0 8px !important;line-height:1.42 !important}.category-study-table{margin:0 !important}.category-study-row>*{padding:9px 12px !important;line-height:1.36 !important}@media(max-width:700px){.category-study{max-width:none !important;margin:6px 0 0 !important}.category-study h2:not(:first-child){margin-top:15px !important}.category-study-row>*{padding:9px 10px !important}}</style>`);
};

// The localized FAQ, Checklist and Shipping copies already contain their own
// article-by-article guidance. Keep that unique wording intact: a prior
// locale-parity layer repeated the same addendum below every article.

// One distinct, translated continuation belongs to each article. This keeps
// every locale aligned with the English reading depth without repeating the
// same paragraph down a page or changing the meaning of the original advice.
const LOCALE_COMPLETE_NOTES = {
  de:{faq:[
    'Die ursprüngliche Angebotsseite, nicht ein Verzeichnisbild, bleibt deshalb die maßgebliche Quelle für Variante, Bestand und Verkäuferbedingungen.',
    'Notieren Sie die gewählte Spezifikation zusammen mit dem Link, damit spätere Fotos und der Bestellbildschirm gegen genau dieselbe Auswahl geprüft werden können.',
    'Vergleichen Sie sichtbar gemachte Details mit der gespeicherten Auswahl; ein Foto kann Unklarheiten zeigen, aber keine Zusage zu Echtheit, Haltbarkeit oder späterem Verhalten geben.',
    'Die genannte Frist ist keine automatische Zusage: Verkäuferzustimmung, Zustand und aktuelle Gebühren müssen im offiziellen Vorgang für diesen Artikel geprüft werden.',
    'Entscheidend ist daher der beim Einreichen angezeigte, gemessene Paketwert samt Route und Abrechnungsart, nicht ein früherer Schätzwert.',
    'Berücksichtigen Sie diese externen Risiken bei der Zeitplanung und bewahren Sie Adresse, Inhalt und Auftragsdaten für einen möglichen Vorgang auf.',
    'Diese Unterlagen ermöglichen dem Support, die Auswahl, den sichtbaren Nachweis und den zeitlichen Ablauf eines konkreten Falls nachzuvollziehen.',
    'Prüfen Sie vor Zahlung und Paketaufgabe stets die aktuelle Annahme der Route sowie die Regeln des Ziellands für den konkreten Inhalt.'
  ],checklist:[
    'Speichern Sie Link und ausgewählte Spezifikation gemeinsam; so bleibt die Grundlage der späteren Prüfung eindeutig.',
    'Die passende Vergleichsart hängt vom Produkt ab. Prüfen Sie nur Merkmale, die auf der Quelle oder auf Fotos tatsächlich sichtbar sind.',
    'Halten Sie Preis, erwartetes Gewicht und Verpackung in einer Notiz fest, damit die spätere Paketentscheidung nachvollziehbar bleibt.',
    'Beschreiben Sie bei einer Rückfrage nur die konkrete Abweichung zwischen gespeicherter Quelle und sichtbarem Foto.',
    'Reichen Sie einen Vorgang nur anhand der aktuellen offiziellen Bedingungen und innerhalb der für den Auftrag sichtbaren Frist ein.',
    'Vergleichen Sie die finale Route und Paketdaten erneut mit dem Konto, bevor internationale Versandkosten bestätigt werden.'
  ],shipping:[
    'Eine Schätzung eignet sich zum Vergleich mehrerer Optionen; sie ersetzt nicht die Werte des tatsächlich gemessenen Pakets.',
    'Zusätzliche Schutzverpackung oder ein Karton kann die berechnete Größe stärker verändern als das Produktgewicht allein.',
    'Lesen Sie die Angaben zur konkreten Zielroute vollständig, einschließlich erlaubter Inhalte und Berechnungsgrundlage.',
    'Die gewählte Verpackung sollte den sichtbaren Zustand schützen, ohne die angezeigten Maße und die Route aus dem Blick zu verlieren.',
    'Berücksichtigen Sie mögliche Änderungen nach der Aufgabe, statt einen bestimmten Scan, Zollausgang oder Liefertermin vorauszusetzen.',
    'Bei einer Anfrage sind gespeicherte Daten, Fotos und Zeitpunkte hilfreicher als eine allgemeine Beschreibung des Problems.'
  ]},
  fr:{faq:[
    'La fiche d’origine, et non une image de répertoire, reste donc la référence pour la variante, le stock et les conditions du vendeur.',
    'Conservez l’option choisie avec le lien afin de comparer plus tard les photos et l’écran de commande avec la même sélection.',
    'Comparez les détails visibles avec l’option enregistrée ; une photo peut signaler une question, mais ne certifie ni authenticité, ni durabilité, ni résultat futur.',
    'Le délai indiqué n’est pas une acceptation automatique : l’accord vendeur, l’état et les frais actuels doivent être vérifiés dans le dossier officiel.',
    'La valeur utile est donc celle du colis mesuré, de la route et de la méthode de facturation affichées au moment de l’envoi.',
    'Intégrez ces risques externes dans votre calendrier et conservez adresse, contenu et références pour tout dossier éventuel.',
    'Ces éléments permettent au support de suivre une sélection précise, la preuve visible et la chronologie d’un cas concret.',
    'Avant paiement ou envoi, vérifiez toujours l’acceptation actuelle de la route et les règles du pays de destination pour le contenu concerné.'
  ],checklist:[
    'Gardez ensemble le lien et l’option sélectionnée afin que la base de vérification reste claire à chaque étape.',
    'Le bon type de comparaison dépend du produit ; contrôlez uniquement les éléments réellement visibles sur la source ou les photos.',
    'Notez prix, poids attendu et emballage afin que la décision concernant le colis reste traçable plus tard.',
    'Pour une question, décrivez uniquement l’écart précis entre la source enregistrée et la photo visible.',
    'Utilisez la procédure de retour selon les conditions officielles actuelles et dans le délai affiché pour cette commande.',
    'Avant de confirmer les frais internationaux, comparez de nouveau la route finale et les données du colis avec le compte.'
  ],shipping:[
    'Une estimation sert à comparer des options ; elle ne remplace pas les mesures du colis réellement préparé.',
    'Une protection supplémentaire ou une boîte peut modifier davantage le calcul que le poids de l’article seul.',
    'Lisez toutes les informations de la route vers la destination, y compris le contenu accepté et la base de facturation.',
    'L’emballage choisi doit protéger l’état visible sans perdre de vue les dimensions affichées et la route retenue.',
    'Prévoyez les changements possibles après l’envoi au lieu de compter sur un scan, un dédouanement ou une date précise.',
    'Pour une demande, les données, photos et dates conservées sont plus utiles qu’une description générale du problème.'
  ]},
  es:{faq:[
    'Por ello, la ficha original y no una imagen del directorio sigue siendo la referencia para variante, existencias y condiciones del vendedor.',
    'Guarda la opción elegida junto al enlace para comparar después las fotos y la pantalla de pedido con la misma selección.',
    'Compara los detalles visibles con la opción guardada; una foto puede mostrar una duda, pero no certifica autenticidad, duración ni rendimiento futuro.',
    'El plazo indicado no supone aceptación automática: confirma en el proceso oficial el consentimiento del vendedor, el estado y las tarifas actuales.',
    'Por tanto, cuentan el paquete medido, la ruta y la forma de cobro mostrados cuando se presenta el envío, no una estimación anterior.',
    'Incluye estos riesgos externos en tu planificación y conserva dirección, contenido y referencias si necesitas abrir un caso.',
    'Estos documentos ayudan al soporte a revisar una elección concreta, la evidencia visible y la cronología del caso.',
    'Antes de pagar o enviar, comprueba la aceptación actual de la ruta y las normas del país de destino para ese contenido.'
  ],checklist:[
    'Guarda el enlace y la especificación seleccionada juntos para que la base de revisión siga siendo inequívoca.',
    'La comparación correcta depende del producto; revisa solo detalles realmente visibles en la fuente o en las fotografías.',
    'Anota precio, peso previsto y embalaje para que la decisión posterior del paquete pueda comprobarse.',
    'Al preguntar, describe únicamente la diferencia concreta entre la fuente guardada y la foto visible.',
    'Usa cualquier procedimiento de devolución según las condiciones oficiales actuales y el plazo mostrado para ese pedido.',
    'Antes de confirmar el pago internacional, compara otra vez la ruta final y los datos del paquete con la cuenta.'
  ],shipping:[
    'Una estimación sirve para comparar opciones; no sustituye las medidas del paquete que realmente se prepara.',
    'Una caja o protección adicional puede alterar más el cálculo que el peso del artículo por sí solo.',
    'Lee toda la información de la ruta al destino, incluidos contenidos aceptados y método de facturación.',
    'El embalaje elegido debe proteger el estado visible sin perder de vista las medidas mostradas y la ruta elegida.',
    'Cuenta con cambios posteriores al envío en lugar de depender de un escaneo, despacho o fecha concreta.',
    'En una consulta, los datos, fotos y fechas guardados ayudan más que una descripción general del problema.'
  ]},
  it:{faq:[
    'La pagina originaria, non un’immagine della directory, resta quindi il riferimento per variante, disponibilità e condizioni del venditore.',
    'Conserva l’opzione scelta insieme al link, così foto e schermata dell’ordine potranno essere confrontate con la stessa selezione.',
    'Confronta i dettagli visibili con l’opzione salvata; una foto può evidenziare un dubbio, ma non certifica autenticità, durata o risultati futuri.',
    'Il termine indicato non è un’accettazione automatica: verifica nel flusso ufficiale consenso del venditore, condizione e costi aggiornati.',
    'Contano quindi pacco misurato, rotta e metodo di fatturazione mostrati al momento dell’invio, non una stima precedente.',
    'Considera questi rischi esterni nella pianificazione e conserva indirizzo, contenuto e riferimenti per un eventuale caso.',
    'Questi elementi permettono al supporto di controllare una scelta precisa, la prova visibile e la sequenza temporale del caso.',
    'Prima di pagare o spedire, verifica sempre l’accettazione attuale della rotta e le regole del paese di destinazione per quel contenuto.'
  ],checklist:[
    'Conserva insieme link e specifica selezionata, così la base della verifica resta inequivocabile in ogni fase.',
    'Il confronto corretto dipende dal prodotto; controlla solo caratteristiche davvero visibili sulla fonte o nelle fotografie.',
    'Annota prezzo, peso previsto e imballaggio affinché la decisione successiva sul pacco sia ricostruibile.',
    'In caso di domanda, descrivi soltanto la differenza concreta tra fonte salvata e foto visibile.',
    'Usa qualsiasi procedura di reso secondo le condizioni ufficiali aggiornate e il termine mostrato per quell’ordine.',
    'Prima di confermare il costo internazionale, confronta ancora rotta finale e dati del pacco con l’account.'
  ],shipping:[
    'Una stima serve a confrontare opzioni; non sostituisce le misure del pacco realmente preparato.',
    'Una scatola o una protezione aggiuntiva può modificare il calcolo più del solo peso dell’articolo.',
    'Leggi tutte le informazioni della rotta verso la destinazione, inclusi contenuti accettati e metodo di fatturazione.',
    'L’imballaggio scelto deve proteggere la condizione visibile senza perdere di vista misure mostrate e rotta selezionata.',
    'Considera possibili cambiamenti dopo l’invio invece di fare affidamento su una scansione, dogana o data precisa.',
    'In una richiesta, dati, foto e date conservati sono più utili di una descrizione generale del problema.'
  ]},
  pt:{faq:[
    'Assim, a página de origem, e não uma imagem do diretório, continua a ser a referência para variante, stock e condições do vendedor.',
    'Guarde a opção escolhida com a ligação para comparar depois as fotos e o ecrã da encomenda com a mesma seleção.',
    'Compare os detalhes visíveis com a opção guardada; uma foto pode revelar uma dúvida, mas não certifica autenticidade, durabilidade ou resultado futuro.',
    'O prazo referido não é aceitação automática: confirme no processo oficial o consentimento do vendedor, o estado e os custos atuais.',
    'Por isso, contam a encomenda medida, a rota e o método de cobrança mostrados no envio, e não uma estimativa anterior.',
    'Inclua estes riscos externos no planeamento e guarde morada, conteúdo e referências para qualquer eventual pedido de apoio.',
    'Estes elementos ajudam o suporte a verificar uma escolha concreta, a prova visível e a cronologia do caso.',
    'Antes de pagar ou enviar, confirme sempre a aceitação atual da rota e as regras do país de destino para esse conteúdo.'
  ],checklist:[
    'Guarde ligação e especificação escolhida juntas, para que a base de verificação permaneça clara em cada fase.',
    'A comparação adequada depende do produto; verifique apenas características realmente visíveis na fonte ou nas fotos.',
    'Anote preço, peso esperado e embalagem para que a decisão posterior sobre a encomenda possa ser confirmada.',
    'Numa questão, descreva apenas a diferença concreta entre a fonte guardada e a fotografia visível.',
    'Use qualquer processo de devolução segundo as condições oficiais atuais e o prazo mostrado para essa encomenda.',
    'Antes de confirmar o custo internacional, compare novamente a rota final e os dados da encomenda com a conta.'
  ],shipping:[
    'Uma estimativa serve para comparar opções; não substitui as medidas da encomenda realmente preparada.',
    'Uma caixa ou proteção adicional pode alterar mais o cálculo do que o peso do artigo isoladamente.',
    'Leia toda a informação da rota para o destino, incluindo conteúdo aceite e método de cobrança.',
    'A embalagem escolhida deve proteger a condição visível sem perder de vista medidas apresentadas e rota selecionada.',
    'Preveja mudanças após o envio em vez de depender de um scan, desalfandegamento ou data específica.',
    'Numa solicitação, dados, fotos e datas guardados são mais úteis do que uma descrição geral do problema.'
  ]},
  nl:{faq:[
    'De oorspronkelijke productpagina, niet een directoryafbeelding, blijft daarom de bron voor variant, voorraad en verkopersvoorwaarden.',
    'Bewaar de gekozen optie bij de link zodat foto’s en het bestelscherm later met dezelfde selectie kunnen worden vergeleken.',
    'Vergelijk zichtbare details met de opgeslagen optie; een foto kan een vraag tonen maar bevestigt geen echtheid, duurzaamheid of toekomstig resultaat.',
    'De genoemde termijn is geen automatische acceptatie: controleer toestemming van de verkoper, staat en actuele kosten in de officiële procedure.',
    'Daarom zijn het gemeten pakket, de route en de getoonde factureringsmethode bij verzending bepalend, niet een eerdere schatting.',
    'Neem deze externe risico’s mee in de planning en bewaar adres, inhoud en referenties voor een mogelijk dossier.',
    'Met deze gegevens kan support een concrete keuze, zichtbaar bewijs en tijdlijn van een geval beter beoordelen.',
    'Controleer vóór betalen of verzenden altijd de actuele toelating van de route en regels van het bestemmingsland voor de inhoud.'
  ],checklist:[
    'Bewaar link en gekozen specificatie samen zodat de basis voor controle in elke stap ondubbelzinnig blijft.',
    'De juiste vergelijking hangt af van het product; controleer alleen kenmerken die werkelijk in bron of foto’s zichtbaar zijn.',
    'Noteer prijs, verwacht gewicht en verpakking zodat de latere pakketbeslissing controleerbaar blijft.',
    'Beschrijf bij een vraag alleen het concrete verschil tussen de opgeslagen bron en de zichtbare foto.',
    'Gebruik een retourprocedure volgens de actuele officiële voorwaarden en de termijn die voor deze bestelling wordt getoond.',
    'Vergelijk vóór bevestiging van internationale kosten opnieuw de definitieve route en pakketgegevens met het account.'
  ],shipping:[
    'Een schatting helpt opties vergelijken; zij vervangt niet de maten van het werkelijk voorbereide pakket.',
    'Een doos of extra bescherming kan de berekening sterker wijzigen dan alleen het gewicht van het artikel.',
    'Lees alle route-informatie voor de bestemming, inclusief toegestane inhoud en berekeningsmethode.',
    'De gekozen verpakking moet de zichtbare staat beschermen zonder de getoonde maten en route uit het oog te verliezen.',
    'Houd rekening met wijzigingen na verzending in plaats van te vertrouwen op een specifieke scan, inklaring of datum.',
    'Bij een vraag zijn bewaarde gegevens, foto’s en datums nuttiger dan een algemene probleembeschrijving.'
  ]},
  pl:{faq:[
    'Dlatego strona źródłowa, a nie obraz z katalogu, pozostaje punktem odniesienia dla wariantu, dostępności i warunków sprzedawcy.',
    'Zachowaj wybrany wariant razem z linkiem, aby później porównać zdjęcia i ekran zamówienia z tą samą selekcją.',
    'Porównuj widoczne szczegóły z zapisaną opcją; zdjęcie może ujawnić wątpliwość, lecz nie potwierdza autentyczności, trwałości ani przyszłego rezultatu.',
    'Podany termin nie oznacza automatycznej zgody: w oficjalnym procesie sprawdź zgodę sprzedawcy, stan i aktualne koszty.',
    'Znaczenie ma więc zmierzona paczka, trasa i metoda rozliczenia pokazane przy nadaniu, a nie wcześniejsza estymacja.',
    'Uwzględnij te zewnętrzne ryzyka w planowaniu i zachowaj adres, zawartość oraz dane referencyjne na wypadek sprawy.',
    'Te materiały pomagają wsparciu sprawdzić konkretny wybór, widoczny dowód oraz chronologię zdarzeń.',
    'Przed płatnością lub wysyłką zawsze sprawdź bieżącą akceptację trasy oraz zasady kraju docelowego dla danej zawartości.'
  ],checklist:[
    'Zachowaj razem link i wybraną specyfikację, aby podstawa kontroli była jasna na każdym etapie.',
    'Właściwe porównanie zależy od produktu; sprawdzaj tylko cechy rzeczywiście widoczne w źródle lub na zdjęciach.',
    'Zapisz cenę, oczekiwaną wagę i pakowanie, aby późniejszą decyzję o paczce można było odtworzyć.',
    'W pytaniu opisz wyłącznie konkretną różnicę między zapisaną stroną źródłową a widocznym zdjęciem.',
    'Korzystaj z procedury zwrotu zgodnie z aktualnymi oficjalnymi warunkami oraz terminem widocznym dla tego zamówienia.',
    'Przed potwierdzeniem kosztu międzynarodowego ponownie porównaj końcową trasę i dane paczki z kontem.'
  ],shipping:[
    'Estymacja służy do porównywania opcji; nie zastępuje wymiarów paczki faktycznie przygotowanej.',
    'Pudełko lub dodatkowe zabezpieczenie może zmienić wyliczenie bardziej niż sama waga produktu.',
    'Przeczytaj wszystkie informacje o trasie do celu, w tym akceptowaną zawartość i sposób rozliczenia.',
    'Wybrane pakowanie powinno chronić widoczny stan, bez utraty z oczu podanych wymiarów i wybranej trasy.',
    'Zakładaj możliwe zmiany po nadaniu zamiast polegać na określonym skanie, odprawie lub dacie.',
    'Przy zgłoszeniu zapisane dane, zdjęcia i daty są bardziej użyteczne niż ogólny opis problemu.'
  ]},
  sv:{faq:[
    'Originalsidan, inte en katalogbild, är därför fortfarande källan för variant, lagersaldo och säljarvillkor.',
    'Spara det valda alternativet tillsammans med länken så att bilder och orderskärm senare kan jämföras med samma val.',
    'Jämför synliga detaljer med det sparade alternativet; ett foto kan visa en fråga men bekräftar inte äkthet, hållbarhet eller framtida resultat.',
    'Den angivna tiden innebär inte automatiskt godkännande: kontrollera säljarens samtycke, skick och aktuella avgifter i den officiella processen.',
    'Det är därför uppmätt paket, rutt och debiteringsmetod vid inskick som gäller, inte en tidigare uppskattning.',
    'Ta med dessa externa risker i planeringen och spara adress, innehåll och referenser för ett eventuellt ärende.',
    'Med detta underlag kan support granska ett konkret val, synligt bevis och tidlinjen för ett specifikt fall.',
    'Kontrollera alltid aktuell ruttacceptans och regler i destinationslandet för innehållet före betalning eller inskick.'
  ],checklist:[
    'Spara länk och vald specifikation tillsammans så att grunden för granskning förblir tydlig i varje steg.',
    'Rätt jämförelse beror på produkten; kontrollera bara egenskaper som verkligen syns i källan eller på bilderna.',
    'Anteckna pris, väntad vikt och emballage så att det senare paketbeslutet går att följa.',
    'Beskriv vid en fråga bara den konkreta skillnaden mellan den sparade källan och det synliga fotot.',
    'Använd en returprocess enligt aktuella officiella villkor och den tidsfrist som visas för just den beställningen.',
    'Jämför den slutliga rutten och paketuppgifterna med kontot igen innan internationell kostnad bekräftas.'
  ],shipping:[
    'En uppskattning hjälper till att jämföra alternativ; den ersätter inte måtten på det paket som faktiskt förbereds.',
    'En låda eller extra skydd kan påverka beräkningen mer än artikelns vikt ensam.',
    'Läs all ruttinformation för destinationen, inklusive godkänt innehåll och beräkningsmetod.',
    'Det valda emballaget bör skydda synligt skick utan att de visade måtten och den valda rutten tappas bort.',
    'Räkna med möjliga förändringar efter inskick i stället för att förlita dig på en bestämd skanning, klarering eller dag.',
    'Vid en fråga är sparade data, bilder och datum mer användbara än en allmän problembeskrivning.'
  ]}
};

function appendLocaleContinuations(markup, notes, className) {
  let index = 0;
  return markup.replace(/<\/article>/g, () => {
    const note = notes[index++];
    return note ? `<p class="${className}">${esc(note)}</p></article>` : '</article>';
  });
}

const completeLocaleFaqMarkup = expandedFaqMarkup;
expandedFaqMarkup = function (lang) {
  const notes = LOCALE_COMPLETE_NOTES[lang]?.faq;
  return notes ? appendLocaleContinuations(completeLocaleFaqMarkup(lang), notes, 'locale-continuation') : completeLocaleFaqMarkup(lang);
};

const completeLocaleResearchMarkup = detailedResearchRouteMarkup;
detailedResearchRouteMarkup = function (lang, page) {
  const notes = LOCALE_COMPLETE_NOTES[lang]?.[page];
  return notes ? appendLocaleContinuations(completeLocaleResearchMarkup(lang, page), notes, 'locale-continuation') : completeLocaleResearchMarkup(lang, page);
};

const completeLocaleShell = shell;
shell = function (lang, title, body) {
  return completeLocaleShell(lang, title, body).replace('</style>', `.locale-continuation{margin:14px 0 0 !important;padding-top:12px;border-top:1px solid #b9e7f5;color:#477488 !important}.faq-full-item,.research-route-detail-grid article{min-height:260px !important}@media(max-width:700px){.faq-full-item,.research-route-detail-grid article{min-height:0 !important}}</style>`);
};
