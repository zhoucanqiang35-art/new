import { t as getEditorial, n as getFaq } from "/assets/legacy-editorial.js";

const codes = new Set(["en", "de", "fr", "es", "it", "pt", "nl", "pl", "sv"]);
const chrome = {
  en: ["Home", "Categories", "Product details", "SEO articles", "FAQ", "Search products or brands", "Database", "Independent research guide."],
  de: ["Startseite", "Kategorien", "Produktdetails", "SEO-Artikel", "FAQ", "Produkte oder Marken suchen", "Datenbank", "Unabhängiger Rechercheleitfaden."],
  fr: ["Accueil", "Catégories", "Détails produit", "Articles SEO", "FAQ", "Rechercher des produits ou marques", "Base de données", "Guide de recherche indépendant."],
  es: ["Inicio", "Categorías", "Detalles de producto", "Artículos SEO", "FAQ", "Buscar productos o marcas", "Base de datos", "Guía de investigación independiente."],
  it: ["Home", "Categorie", "Dettagli prodotto", "Articoli SEO", "FAQ", "Cerca prodotti o marchi", "Database", "Guida di ricerca indipendente."],
  pt: ["Início", "Categorias", "Detalhes do produto", "Artigos SEO", "FAQ", "Pesquisar produtos ou marcas", "Base de dados", "Guia de pesquisa independente."],
  nl: ["Home", "Categorieën", "Productdetails", "SEO-artikelen", "FAQ", "Zoek producten of merken", "Database", "Onafhankelijke onderzoeksgids."],
  pl: ["Strona główna", "Kategorie", "Szczegóły produktu", "Artykuły SEO", "FAQ", "Szukaj produktów lub marek", "Baza", "Niezależny przewodnik badawczy."],
  sv: ["Hem", "Kategorier", "Produktdetaljer", "SEO-artiklar", "FAQ", "Sök produkter eller märken", "Databas", "Oberoende forskningsguide."]
};
const minor = {
  en: ["Clear product routes", "From category research to the database — without a dead-end spreadsheet.", "Preview / 01", "Built to be checked before a formal domain launch.", "Product details", "SEO article", "Open live records ↗", "Read the guide ↗"],
  de: ["Klare Produktrouten", "Von der Kategorienrecherche zur Datenbank — ohne Sackgasse.", "Vorschau / 01", "Zur Prüfung vor dem offiziellen Domainstart erstellt.", "Produktdetails", "SEO-Artikel", "Aktuelle Einträge öffnen ↗", "Leitfaden lesen ↗"],
  fr: ["Parcours produit clairs", "De la recherche par catégorie à la base, sans impasse.", "Aperçu / 01", "Conçu pour être vérifié avant le lancement officiel du domaine.", "Détails produit", "Article SEO", "Ouvrir les fiches actuelles ↗", "Lire le guide ↗"],
  es: ["Rutas de producto claras", "De la investigación por categoría a la base de datos, sin callejón sin salida.", "Vista previa / 01", "Creado para revisión antes del lanzamiento formal del dominio.", "Detalles de producto", "Artículo SEO", "Abrir fichas actuales ↗", "Leer la guía ↗"],
  it: ["Percorsi prodotto chiari", "Dalla ricerca per categoria al database, senza vicoli ciechi.", "Anteprima / 01", "Creato per la verifica prima del lancio formale del dominio.", "Dettagli prodotto", "Articolo SEO", "Apri le schede attuali ↗", "Leggi la guida ↗"],
  pt: ["Rotas de produto claras", "Da pesquisa por categoria à base de dados, sem becos sem saída.", "Pré-visualização / 01", "Criado para verificação antes do lançamento formal do domínio.", "Detalhes do produto", "Artigo SEO", "Abrir registos atuais ↗", "Ler o guia ↗"],
  nl: ["Duidelijke productroutes", "Van categorieonderzoek naar de database, zonder doodlopende weg.", "Voorbeeld / 01", "Gemaakt om te controleren vóór de formele domeinlancering.", "Productdetails", "SEO-artikel", "Open actuele records ↗", "Lees de gids ↗"],
  pl: ["Jasne ścieżki produktów", "Od badań kategorii do bazy danych — bez ślepej uliczki.", "Podgląd / 01", "Przygotowano do sprawdzenia przed formalnym uruchomieniem domeny.", "Szczegóły produktu", "Artykuł SEO", "Otwórz aktualne rekordy ↗", "Czytaj poradnik ↗"],
  sv: ["Tydliga produktvägar", "Från kategoriresearch till databasen — utan återvändsgränd.", "Förhandsvisning / 01", "Skapad för kontroll före formell domänlansering.", "Produktdetaljer", "SEO-artikel", "Öppna aktuella poster ↗", "Läs guiden ↗"]
};
const categoryExtras = {
  en: ["Watches", "Socks"], de: ["Uhren", "Socken"], fr: ["Montres", "Chaussettes"], es: ["Relojes", "Calcetines"], it: ["Orologi", "Calze"], pt: ["Relógios", "Meias"], nl: ["Horloges", "Sokken"], pl: ["Zegarki", "Skarpetki"], sv: ["Klockor", "Strumpor"]
};
const articleShell = {
  de: ["Hinweis zum Geltungsbereich", "Einfach erklärt"],
  fr: ["Note de périmètre", "En termes simples"],
  es: ["Nota sobre el alcance", "Explicación sencilla"],
  it: ["Nota sull’ambito", "In parole semplici"],
  pt: ["Nota de âmbito", "Em linguagem simples"],
  nl: ["Toelichting op de reikwijdte", "Eenvoudig uitgelegd"],
  pl: ["Uwaga dotycząca zakresu", "Prostym językiem"],
  sv: ["Anmärkning om omfattning", "Kort förklarat"]
};
const parcelFinalSection = {
  de: ["Die abschließende Prüfung", "Vor dem Absenden das gewählte Land, den sichtbaren Paketinhalt und die auf dem aktuellen Bildschirm angezeigten Optionen noch einmal zusammen lesen. Wenn etwas nicht klar ist, ist es besser, die Entscheidung aufzuschieben als eine allgemeine Aussage über weltweiten Versand als Antwort auf eine konkrete Paketfrage zu behandeln."],
  fr: ["La vérification finale", "Avant l’envoi, relire ensemble le pays choisi, le contenu visible du colis et les options affichées sur l’écran actuel. Si un point n’est pas clair, il vaut mieux reporter la décision que de prendre une phrase générale sur l’expédition mondiale pour une réponse à une question précise sur le colis."],
  es: ["La revisión final", "Antes de enviar, vuelva a leer juntos el país elegido, el contenido visible del paquete y las opciones que muestra la pantalla actual. Si algo no está claro, es mejor aplazar la decisión que tomar una frase general sobre envío global como respuesta a una pregunta concreta sobre el paquete."],
  it: ["Il controllo finale", "Prima dell’invio, rileggi insieme il paese scelto, il contenuto visibile del pacco e le opzioni mostrate nella schermata attuale. Se qualcosa non è chiaro, è meglio rimandare la decisione che usare una frase generale sulla spedizione globale come risposta a una domanda concreta sul pacco."],
  pt: ["A verificação final", "Antes de submeter, reveja em conjunto o país escolhido, o conteúdo visível da encomenda e as opções mostradas no ecrã atual. Se algo não estiver claro, é preferível adiar a decisão a usar uma frase geral sobre envio global como resposta a uma questão concreta sobre a encomenda."],
  nl: ["De laatste controle", "Lees vóór het versturen nog eens samen het gekozen land, de zichtbare inhoud van het pakket en de opties op het huidige scherm. Als iets niet duidelijk is, stel de beslissing dan liever uit dan een algemene zin over wereldwijde verzending als antwoord op een concrete pakketvraag te gebruiken."],
  pl: ["Ostateczna kontrola", "Przed wysłaniem ponownie przeczytaj razem wybrany kraj, widoczną zawartość paczki i opcje pokazane na bieżącym ekranie. Gdy coś nie jest jasne, lepiej odłożyć decyzję niż traktować ogólne zdanie o globalnej wysyłce jako odpowiedź na konkretne pytanie o paczkę."],
  sv: ["Den sista kontrollen", "Läs före inskick igenom valt land, paketets synliga innehåll och alternativen på den aktuella skärmen tillsammans. Om något är oklart är det bättre att vänta med beslutet än att använda en allmän formulering om global frakt som svar på en konkret fråga om paketet."]
};

// These are the three actual guides on the English page, not generic card copy.
// Each locale keeps the same three guide identities and the full eight-section body.
const seoFrames = {
  de: [["LEITFADEN 01 · GEPRÜFTER UMFANG", "Wie LoloBuys Beschreibung von Lagerkonsolidierung und weltweitem Versand einen Kaufplan prägen sollte", "Was die öffentliche Übersicht sagt, was sie nicht zusagt und wie man vor dem Erstellen eines Pakets bessere Entscheidungen trifft."], ["LEITFADEN 02 · BEDEUTUNG DES VERSANDS", "Was „weltweiter Versand“ in einem LoloBuy-Leitfaden bedeutet", "Die allgemeine Beschreibung von Zielland, Preis, Zeit und Zollfragen trennen, die erst live geprüft werden müssen."], ["LEITFADEN 03 · PAKETPLANUNG", "Ein faktenbasierter Workflow zur Planung eines LoloBuy-Pakets", "Eine Käufermethode, um Entscheidungen nachzuverfolgen, die Lagerphase bewusst zu nutzen und wechselnde Bedingungen vor der Zahlung zu prüfen."]],
  fr: [["GUIDE 01 · PÉRIMÈTRE VÉRIFIÉ", "Comment la description de la consolidation en entrepôt et de l’expédition mondiale de LoloBuy doit orienter un plan d’achat", "Ce que l’aperçu public affirme, ce qu’il ne promet pas et comment décider avant de créer un colis."], ["GUIDE 02 · SENS DE L’EXPÉDITION", "Ce que signifie « expédition mondiale » dans un guide LoloBuy", "Distinguer la description générale des questions de destination, prix, délai et douane à vérifier en direct."], ["GUIDE 03 · PLANIFICATION DU COLIS", "Un processus factuel de planification d’un colis LoloBuy", "Une méthode côté acheteur pour suivre les choix, utiliser l’étape entrepôt consciemment et vérifier les conditions avant paiement."]],
  es: [["GUÍA 01 · ALCANCE VERIFICADO", "Cómo la descripción de consolidación de almacén y envío global de LoloBuy debe orientar un plan de compra", "Lo que dice el resumen público, lo que no promete y cómo decidir mejor antes de crear un paquete."], ["GUÍA 02 · SIGNIFICADO DEL ENVÍO", "Qué significa « envío global » en una guía de LoloBuy", "Separar la descripción general de las preguntas de destino, precio, plazo y aduanas que deben verificarse en directo."], ["GUÍA 03 · PLANIFICACIÓN DEL PAQUETE", "Un flujo de trabajo factual para planificar un paquete de LoloBuy", "Un método para compradores que registra decisiones, utiliza deliberadamente la fase de almacén y comprueba las condiciones antes de pagar."]],
  it: [["GUIDA 01 · AMBITO VERIFICATO", "Come la descrizione di LoloBuy sul consolidamento in magazzino e sulla spedizione globale dovrebbe guidare un piano di acquisto", "Cosa dice la panoramica pubblica, cosa non promette e come decidere prima di creare un pacco."], ["GUIDA 02 · SIGNIFICATO DELLA SPEDIZIONE", "Cosa significa « spedizione globale » in una guida LoloBuy", "Separare la descrizione generale dalle domande su destinazione, prezzo, tempi e dogana da verificare dal vivo."], ["GUIDA 03 · PIANIFICAZIONE DEL PACCO", "Un flusso di lavoro basato sui fatti per pianificare un pacco LoloBuy", "Un metodo per l’acquirente per seguire le scelte, usare con intenzione la fase di magazzino e controllare le condizioni prima del pagamento."]],
  pt: [["GUIA 01 · ÂMBITO VERIFICADO", "Como a descrição da consolidação em armazém e do envio global da LoloBuy deve orientar um plano de compra", "O que a visão pública diz, o que não promete e como decidir melhor antes de criar uma encomenda."], ["GUIA 02 · SIGNIFICADO DO ENVIO", "O que « envio global » significa num guia da LoloBuy", "Separar a descrição geral das questões de destino, preço, prazo e alfândega que exigem verificação ao vivo."], ["GUIA 03 · PLANEAMENTO DA ENCOMENDA", "Um fluxo de trabalho baseado em factos para planear uma encomenda LoloBuy", "Um método do lado do comprador para acompanhar escolhas, usar deliberadamente a fase de armazém e verificar condições antes do pagamento."]],
  nl: [["GIDS 01 · GECONTROLEERDE REIKWIJDTE", "Hoe LoloBuy’s beschrijving van magazijnconsolidatie en wereldwijde verzending een koopplan moet sturen", "Wat het openbare overzicht zegt, wat het niet belooft en hoe je beter beslist vóór je een pakket aanmaakt."], ["GIDS 02 · BETEKENIS VAN VERZENDING", "Wat „wereldwijde verzending” betekent in een LoloBuy-gids", "De algemene beschrijving scheiden van vragen over bestemming, prijs, tijd en douane die live moeten worden gecontroleerd."], ["GIDS 03 · PAKKETPLANNING", "Een feitelijke workflow voor het plannen van een LoloBuy-pakket", "Een kopersmethode om keuzes te volgen, de magazijnfase bewust te gebruiken en veranderende voorwaarden vóór betaling te controleren."]],
  pl: [["PORADNIK 01 · ZWERYFIKOWANY ZAKRES", "Jak opis konsolidacji magazynowej i globalnej wysyłki LoloBuy powinien kształtować plan zakupu", "Co mówi publiczny opis, czego nie obiecuje i jak lepiej decydować przed utworzeniem paczki."], ["PORADNIK 02 · ZNACZENIE WYSYŁKI", "Co oznacza „globalna wysyłka” w poradniku LoloBuy", "Oddzielić ogólny opis od pytań o kraj docelowy, cenę, czas i odprawę celną, które trzeba sprawdzić na bieżąco."], ["PORADNIK 03 · PLANOWANIE PACZKI", "Oparty na faktach proces planowania paczki LoloBuy", "Metoda dla kupującego do śledzenia decyzji, świadomego korzystania z etapu magazynowego i sprawdzania warunków przed płatnością."]],
  sv: [["GUIDE 01 · VERIFIERAD OMFATTNING", "Hur LoloBuys beskrivning av lagerkonsolidering och global frakt bör forma en köpplan", "Vad den offentliga översikten säger, vad den inte lovar och hur du fattar bättre beslut innan du skapar ett paket."], ["GUIDE 02 · VAD FRAKTEN BETYDER", "Vad ”global frakt” betyder i en LoloBuy-guide", "Skilj den övergripande beskrivningen från frågor om destination, pris, tid och tull som måste kontrolleras live."], ["GUIDE 03 · PAKETPLANERING", "Ett faktabaserat arbetsflöde för att planera ett LoloBuy-paket", "En köparmetod för att följa val, använda lagersteget medvetet och kontrollera ändrade villkor före betalning."]]
};

function language() {
  const value = new URLSearchParams(location.search).get("lang") || localStorage.getItem("atlasLang") || "en";
  return codes.has(value) ? value : "en";
}

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" })[char]);
}

function button(label, href) {
  return `<a class="button" href="${href}">${esc(label)}</a>`;
}

function updateChrome(code) {
  const text = chrome[code];
  const extra = minor[code];
  const labels = { "/": text[0], "/categories/": text[1], "/product-details/": text[2], "/seo-articles/": text[3], "/faq/": text[4] };
  document.querySelectorAll(".nav a,.mobile-nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (labels[href]) link.textContent = labels[href];
  });
  document.querySelectorAll(".footer .links a").forEach((link) => {
    const href = link.getAttribute("href");
    if (labels[href]) link.textContent = labels[href];
  });
  const input = document.querySelector(".site-search input");
  if (input) input.placeholder = text[5];
  const database = document.querySelector(".database-button");
  if (database) database.textContent = text[6];
  document.querySelectorAll(".footer p").forEach((item) => {
    if (!item.hasAttribute("data-t")) item.textContent = text[7];
  });
  const signal = document.querySelector(".signal-main");
  if (signal) {
    const heading = signal.querySelector("b"), body = signal.querySelector("span");
    if (heading) heading.textContent = extra[0];
    if (body) body.textContent = extra[1];
  }
  const note = document.querySelector(".signal-note");
  if (note) {
    const heading = note.querySelector("b");
    if (heading) heading.textContent = extra[2];
    note.lastChild.textContent = extra[3];
  }
  document.querySelectorAll(".home-card").forEach((card, index) => {
    const meta = card.querySelector("span"), action = card.querySelector("em");
    if (meta) meta.textContent = `${String(index + 1).padStart(2, "0")} / ${index === 2 ? extra[5] : extra[4]}`;
    if (action) action.textContent = index === 2 ? extra[7] : extra[6];
  });
}

function categoryNames(copy, code) {
  const extra = categoryExtras[code];
  return [copy.cats[1], copy.cats[4], copy.cats[5], extra[0], copy.cats[8], extra[1], copy.cats[6], copy.cats[7], copy.cats[2], copy.cats[9]];
}

function categoryFocus(copy, code) {
  const extra = categoryExtras[code];
  return [copy.focus[1], copy.focus[4], copy.focus[5], `${extra[0]} · ${copy.focus[9]}`, copy.focus[8], `${extra[1]} · ${copy.focus[9]}`, copy.focus[6], copy.focus[7], copy.focus[2], copy.focus[9]];
}

function categories(copy, code) {
  const urls = [
    "https://findspreadsheet.com/hoodies-sweaters/", "https://findspreadsheet.com/pants-shorts/", "https://findspreadsheet.com/headwear/", "https://findspreadsheet.com/AllProducts/", "https://findspreadsheet.com/electronics/", "https://findspreadsheet.com/AllProducts/", "https://findspreadsheet.com/accessories/", "https://findspreadsheet.com/jersey/", "https://findspreadsheet.com/t-shirts/", "https://findspreadsheet.com/other-stuff/"
  ];
  const names = categoryNames(copy, code), focus = categoryFocus(copy, code);
  return `<div class="wrap crumb">LoloBuy Atlas / ${esc(copy.catKicker)}</div><section class="page-hero"><div class="wrap"><span class="kicker">${esc(copy.catKicker)}</span><h1>${esc(copy.catTitle)}</h1><p class="lead">${esc(copy.catIntro)}</p></div></section><section class="section"><div class="wrap"><div class="category-grid">${names.map((name, index) => `<a class="cat" href="${urls[index]}"><span>${esc(focus[index])}</span><b>${esc(name)}</b><span class="arrow">↗</span></a>`).join("")}</div></div></section>`;
}

function products(copy) {
  const cards = [...copy.steps, ["04", copy.panel[0], copy.panel[1]]];
  const urls = ["https://findspreadsheet.com/hoodies-sweaters/", "https://findspreadsheet.com/shoes/", "https://findspreadsheet.com/electronics/", "https://findspreadsheet.com/accessories/"];
  return `<div class="wrap crumb">LoloBuy Atlas / ${esc(copy.detailKicker)}</div><section class="page-hero"><div class="wrap"><span class="kicker">${esc(copy.detailKicker)}</span><h1>${esc(copy.detailTitle)}</h1><p class="lead">${esc(copy.detailIntro)}</p></div></section><section class="section alt"><div class="wrap content-list">${cards.map((card, index) => `<article class="content-card"><span class="kicker">${esc(card[0])}</span><h3>${esc(card[1])}</h3><p>${esc(card[2])}</p>${button(copy.open, urls[index])}</article>`).join("")}</div></section>`;
}

function guides(copy) {
  const cards = [...copy.steps, ["04", copy.panel[0], copy.panel[1]]];
  return `<div class="wrap crumb">LoloBuy Atlas / ${esc(copy.seoKicker)}</div><section class="page-hero"><div class="wrap"><span class="kicker">${esc(copy.seoKicker)}</span><h1>${esc(copy.articles[0][1])}</h1><p class="lead">${esc(copy.articles[0][2])}</p></div></section><section class="section alt"><div class="wrap content-list">${cards.map((card) => `<article class="content-card"><span class="kicker">${esc(card[0])}</span><h3>${esc(card[1])}</h3><p>${esc(card[2])}</p></article>`).join("")}</div></section>`;
}

function faq(copy, code) {
  const rows = getFaq(code);
  return `<div class="wrap crumb">LoloBuy Atlas / ${esc(copy.faqKicker)}</div><section class="page-hero"><div class="wrap"><span class="kicker">${esc(copy.faqKicker)}</span><h1>${esc(copy.faqTitle)}</h1><p class="lead">${esc(copy.faqIntro)}</p></div></section><section class="section alt"><div class="wrap faq">${rows.map((row, index) => `<details${index === 0 ? " open" : ""}><summary>${esc(row.question)}</summary><p>${esc(row.answer)}</p></details>`).join("")}</div></section>`;
}

function seo(copy, code) {
  const article = getEditorial(code);
  const expanded = window.LoloEditorial && window.LoloEditorial.localizedArticles && window.LoloEditorial.localizedArticles[code];
  const continuations = window.LoloEditorial && window.LoloEditorial.localizedArticleContinuations && window.LoloEditorial.localizedArticleContinuations[code] || [];
  const additions = window.LoloEditorial && window.LoloEditorial.localizedArticleDetailAdditions && window.LoloEditorial.localizedArticleDetailAdditions[code] || [];
  const anchors = ["warehouse-guide", "global-shipping-guide", "parcel-planning-guide"];
  const frames = seoFrames[code] || copy.articles;
  const shell = articleShell[code] || ["Scope note", "Plain-English answer"];
  const orders = [[0,1,2,3,4,5,6,7], [6,7,5,4,3,2,1,0], [5,4,7,6,3,2,1,0]];
  const articleSections = (articleIndex) => {
    const body = orders[articleIndex].map((sourceIndex) => {
    const section = article.sections[sourceIndex];
    const index = sourceIndex;
    const extra = expanded && expanded.sections && expanded.sections[index];
    const paragraphs = [...section.paragraphs, ...(extra ? extra.paragraphs : []), continuations[index], additions[index]].filter(Boolean);
    return `<section class="article-section"><h2 class="article-section-title">${esc(section.heading)}</h2>${paragraphs.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}</section>`;
    }).join("");
    const extra = articleIndex === 2 ? (parcelFinalSection[code] || ["The final review", "Before submitting, read the selected destination, visible parcel contents and options on the current screen together. If something is unclear, pause rather than treating a general shipping statement as an answer to a specific parcel question."]) : null;
    return body + (extra ? `<section class="article-section"><h2 class="article-section-title">${esc(extra[0])}</h2><p>${esc(extra[1])}</p></section>` : "");
  };
  return `<div class="wrap crumb">LoloBuy Atlas / ${esc(copy.seoKicker)}</div><section class="page-hero"><div class="wrap"><span class="kicker">${esc(copy.seoKicker)}</span><h1>${esc(copy.seoTitle)}</h1><p class="lead">${esc(copy.seoIntro)}</p></div></section>${frames.map((frame, articleIndex) => `<span class="article-anchor" id="${anchors[articleIndex]}"></span><article class="seo-full-article" aria-labelledby="localized-guide-${articleIndex}"><div class="wrap article-copy"><span class="kicker">${esc(frame[0])}</span><h2 id="localized-guide-${articleIndex}" class="article-title">${esc(frame[1])}</h2><p class="article-note"><strong>${esc(shell[0])}:</strong> ${esc(frame[2])}</p><section class="article-summary"><h2>${esc(shell[1])}</h2><p>${esc(copy.seoIntro)}</p></section>${articleSections(articleIndex)}<div class="signal"><span>${esc(frame[0])}</span><strong>${esc(copy.panel[0])}</strong>${button(copy.panel[2], "https://findspreadsheet.com/")}</div></div></article>`).join("")}`;
}

function localizePage(code) {
  if (code === "en") return;
  const copy = window.LoloPageLocales && window.LoloPageLocales[code];
  if (!copy) return;
  const main = document.querySelector("main");
  if (!main) return;
  const pathname = location.pathname.replace(/\/$/, "") || "/";
  if (pathname === "/") {
    const names = categoryNames(copy, code);
    document.querySelectorAll(".dynamic-cats .cat").forEach((card, index) => {
      const label = names[index];
      const short = card.querySelector("span"), heading = card.querySelector("b");
      if (short) short.textContent = label;
      if (heading) heading.textContent = label;
    });
  }
  if (pathname === "/categories") main.innerHTML = categories(copy, code);
  if (pathname === "/product-details") main.innerHTML = products(copy);
  if (pathname === "/guides") main.innerHTML = guides(copy);
  if (pathname === "/faq") main.innerHTML = faq(copy, code);
  if (pathname === "/seo-articles") main.innerHTML = seo(copy, code);
}

function keepLanguageOnInternalLinks(code) {
  document.querySelectorAll("a[href]").forEach((link) => {
    const raw = link.getAttribute("href");
    if (!raw || raw.startsWith("#")) return;
    const target = new URL(raw, location.origin);
    if (target.origin !== location.origin) return;
    target.searchParams.set("lang", code);
    link.setAttribute("href", target.pathname + target.search + target.hash);
  });
}

function run() {
  const code = language();
  document.documentElement.lang = code;
  updateChrome(code);
  localizePage(code);
  keepLanguageOnInternalLinks(code);
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
else run();
