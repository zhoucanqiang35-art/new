"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { getFaqItems, getUiCopy } from "./i18n";
import {
  latestCarouselFallback,
  mainCategories,
  products,
  type Product,
} from "./product-data";
import { officialUpdates } from "./update-data";

const languages = [
  ["EN", "English"], ["ES", "Español"], ["DE", "Deutsch"], ["FR", "Français"],
  ["IT", "Italiano"], ["PT", "Português"], ["NL", "Nederlands"], ["PL", "Polski"],
  ["SV", "Svenska"], ["DA", "Dansk"], ["NO", "Norsk"], ["FI", "Suomi"],
  ["CS", "Čeština"], ["RO", "Română"], ["HU", "Magyar"], ["EL", "Ελληνικά"],
  ["UK", "Українська"], ["TR", "Türkçe"], ["RU", "Русский"], ["BG", "Български"],
  ["JA", "日本語"], ["KO", "한국어"], ["AR", "العربية"], ["ZH", "中文"],
];

type PageCopy = {
  preview: string;
  nav: string[];
  database: string;
  eyebrow: string;
  title: string;
  accent: string;
  lead: string;
  explore: string;
  buyerGuide: string;
  proof: [string, string, string];
  panel: [string, string, string, string, string, string];
  trust: [string, string, string, string, string];
  categories: [string, string, string];
  sheet: [string, string, string, string, string];
  education: [string, string, string, string];
  updates: [string, string, string];
  faq: [string, string, string];
  closing: [string, string, string, string, string];
};

const englishCopy: PageCopy = {
  preview: "Review mode — not yet connected to lolobuysheet.es",
  nav: ["Spreadsheet", "Categories", "Guides", "SEO Articles", "Updates", "FAQ"],
  database: "Full database",
  eyebrow: "Independent LoloBuy research hub",
  title: "Find better LoloBuy picks.",
  accent: "Shop with context.",
  lead: "A searchable spreadsheet, practical QC checklists and shipping guides—built for shoppers across Europe and North America.",
  explore: "Explore the spreadsheet",
  buyerGuide: "Start with the buyer guide",
  proof: ["curated categories", "language routes", "research framework"],
  panel: ["LIVE RESEARCH VIEW", "Fresh finds, clearly labelled", "Updated", "Search verified listings…", "Transparent by design", "We show when links were checked and separate official facts from editorial advice."],
  trust: ["Built around the questions shoppers actually ask", "QC PHOTO CHECKS", "SHIPPING EXPLAINERS", "OFFICIAL UPDATE SOURCES", "COUNTRY GUIDES"],
  categories: ["Browse by category", "Start with what you're looking for.", "See all finds"],
  sheet: ["Curated spreadsheet", "Useful finds, without the clutter.", "Prices are reference values in USD. Confirm the current listing before purchase.", "Search products or categories", "All"],
  education: ["Buyer education", "Know what happens before you click buy.", "Independent, source-conscious explainers for the steps that usually cause confusion—from warehouse QC to volumetric weight.", "Read common questions"],
  updates: ["Research & updates", "Official changes, translated into practical next steps.", "Platform information can change by destination, order and account. Our update centre records what was checked, links back to the source, and flags what shoppers should verify again before paying."],
  faq: ["Common questions", "Clear answers. No sales spin.", "These answers explain our site and general process. Your checkout page and official platform terms remain the final source for any order."],
  closing: ["Ready to explore?", "Use research here.", "Search wider on the main database.", "Browse LoloBuy finds", "Open findspreadsheet.com"],
};

const localizedCopy: Record<string, Partial<PageCopy>> = {
  es: {
    preview: "Modo de revisión — todavía no conectado a lolobuysheet.es", nav: ["Hoja", "Categorías", "Guías", "Novedades", "Preguntas"], database: "Base completa",
    eyebrow: "Centro independiente de investigación LoloBuy", title: "Encuentra mejores productos LoloBuy.", accent: "Compra con contexto.", lead: "Una hoja de cálculo consultable, listas prácticas de QC y guías de envío para compradores de Europa y Norteamérica.", explore: "Explorar la hoja", buyerGuide: "Empezar con la guía",
    proof: ["categorías seleccionadas", "rutas de idioma", "marco de investigación"], panel: ["VISTA DE INVESTIGACIÓN", "Nuevos hallazgos, bien etiquetados", "Actualizado", "Buscar listados revisados…", "Transparencia por diseño", "Mostramos cuándo se revisaron los enlaces y separamos los datos oficiales del consejo editorial."],
    trust: ["Creado en torno a las dudas reales de los compradores", "CONTROL DE FOTOS QC", "GUÍAS DE ENVÍO", "FUENTES OFICIALES", "GUÍAS POR PAÍS"], categories: ["Explorar por categoría", "Empieza por lo que estás buscando.", "Ver todos"],
    sheet: ["Hoja seleccionada", "Hallazgos útiles, sin ruido.", "Los precios son referencias en USD. Confirma el anuncio actual antes de comprar.", "Buscar productos o categorías", "Todo"], education: ["Formación para compradores", "Conoce el proceso antes de comprar.", "Guías independientes y basadas en fuentes, desde el QC del almacén hasta el peso volumétrico.", "Leer preguntas frecuentes"],
    updates: ["Investigación y novedades", "Cambios oficiales convertidos en pasos prácticos.", "La información puede variar por destino, pedido y cuenta. Registramos qué se revisó y qué debes volver a confirmar."], faq: ["Preguntas frecuentes", "Respuestas claras. Sin presión comercial.", "Estas respuestas explican el sitio y el proceso general. El pago y las condiciones oficiales son la fuente final."],
    closing: ["¿Listo para explorar?", "Investiga aquí.", "Amplía la búsqueda en la base principal.", "Ver hallazgos LoloBuy", "Abrir findspreadsheet.com"],
  },
  de: {
    preview: "Prüfmodus — noch nicht mit lolobuysheet.es verbunden", nav: ["Tabelle", "Kategorien", "Ratgeber", "Updates", "FAQ"], database: "Gesamte Datenbank",
    eyebrow: "Unabhängiges LoloBuy-Recherchezentrum", title: "Finde bessere LoloBuy-Produkte.", accent: "Kaufe mit Kontext.", lead: "Eine durchsuchbare Tabelle, praktische QC-Checklisten und Versandratgeber für Käufer in Europa und Nordamerika.", explore: "Tabelle entdecken", buyerGuide: "Mit dem Kaufratgeber starten",
    proof: ["kuratierte Kategorien", "Sprachrouten", "Recherchemodell"], panel: ["LIVE-RECHERCHE", "Neue Funde, klar gekennzeichnet", "Aktualisiert", "Geprüfte Einträge suchen…", "Transparenz als Prinzip", "Wir zeigen das Prüfdatum und trennen offizielle Fakten von redaktionellen Tipps."],
    trust: ["Für die echten Fragen von Käufern gebaut", "QC-FOTOCHECKS", "VERSANDRATGEBER", "OFFIZIELLE QUELLEN", "LÄNDERGUIDES"], categories: ["Nach Kategorie suchen", "Starte mit dem, was du suchst.", "Alle Funde"],
    sheet: ["Kuratierte Tabelle", "Nützliche Funde ohne Ballast.", "Preise sind USD-Richtwerte. Prüfe vor dem Kauf den aktuellen Eintrag.", "Produkte oder Kategorien suchen", "Alle"], education: ["Käuferwissen", "Kenne den Ablauf vor dem Kauf.", "Unabhängige, quellenbewusste Erklärungen von Lager-QC bis Volumengewicht.", "Häufige Fragen lesen"],
    updates: ["Recherche & Updates", "Offizielle Änderungen als praktische Schritte.", "Informationen können je nach Ziel, Bestellung und Konto variieren. Wir dokumentieren Prüfung, Quelle und erneut zu bestätigende Punkte."], faq: ["Häufige Fragen", "Klare Antworten. Kein Verkaufsdruck.", "Diese Antworten erklären Website und Ablauf. Checkout und offizielle Bedingungen bleiben maßgeblich."],
    closing: ["Bereit zum Entdecken?", "Hier recherchieren.", "In der Hauptdatenbank weiter suchen.", "LoloBuy-Funde ansehen", "findspreadsheet.com öffnen"],
  },
  fr: {
    preview: "Mode révision — pas encore relié à lolobuysheet.es", nav: ["Tableau", "Catégories", "Guides", "Actualités", "FAQ"], database: "Base complète",
    eyebrow: "Centre de recherche LoloBuy indépendant", title: "Trouvez de meilleurs produits LoloBuy.", accent: "Achetez avec du contexte.", lead: "Un tableau consultable, des listes QC pratiques et des guides de livraison pour l’Europe et l’Amérique du Nord.", explore: "Explorer le tableau", buyerGuide: "Commencer par le guide",
    proof: ["catégories sélectionnées", "routes linguistiques", "cadre de recherche"], panel: ["RECHERCHE EN DIRECT", "Nouveautés clairement étiquetées", "Mis à jour", "Rechercher des fiches vérifiées…", "Transparent par conception", "Nous indiquons la date de vérification et séparons les faits officiels des conseils éditoriaux."],
    trust: ["Conçu autour des vraies questions des acheteurs", "CONTRÔLES PHOTO QC", "GUIDES DE LIVRAISON", "SOURCES OFFICIELLES", "GUIDES PAR PAYS"], categories: ["Explorer par catégorie", "Commencez par ce que vous cherchez.", "Voir tout"],
    sheet: ["Tableau sélectionné", "Des trouvailles utiles, sans bruit.", "Les prix sont indicatifs en USD. Vérifiez la fiche avant l’achat.", "Rechercher produits ou catégories", "Tout"], education: ["Information acheteur", "Comprenez le parcours avant d’acheter.", "Des explications indépendantes et sourcées, du QC en entrepôt au poids volumétrique.", "Lire les questions"],
    updates: ["Recherche et actualités", "Les changements officiels transformés en actions.", "Les informations varient selon la destination, la commande et le compte. Nous indiquons ce qui a été vérifié et ce qui doit l’être à nouveau."], faq: ["Questions fréquentes", "Des réponses claires. Sans discours commercial.", "Ces réponses expliquent le site et le processus. Le paiement et les conditions officielles restent la référence."],
    closing: ["Prêt à explorer ?", "Recherchez ici.", "Élargissez sur la base principale.", "Voir les trouvailles LoloBuy", "Ouvrir findspreadsheet.com"],
  },
  it: {
    preview: "Modalità revisione — non ancora collegato a lolobuysheet.es", nav: ["Foglio", "Categorie", "Guide", "Aggiornamenti", "FAQ"], database: "Database completo",
    eyebrow: "Centro di ricerca LoloBuy indipendente", title: "Trova prodotti LoloBuy migliori.", accent: "Acquista con più contesto.", lead: "Un foglio ricercabile, checklist QC pratiche e guide di spedizione per Europa e Nord America.", explore: "Esplora il foglio", buyerGuide: "Inizia dalla guida",
    proof: ["categorie selezionate", "percorsi linguistici", "metodo di ricerca"], panel: ["RICERCA DAL VIVO", "Nuovi articoli, etichette chiare", "Aggiornato", "Cerca inserzioni verificate…", "Trasparenza integrata", "Mostriamo quando i link sono stati controllati e separiamo fatti ufficiali e consigli editoriali."],
    trust: ["Pensato per le vere domande degli acquirenti", "CONTROLLO FOTO QC", "GUIDE SPEDIZIONE", "FONTI UFFICIALI", "GUIDE PER PAESE"], categories: ["Sfoglia per categoria", "Parti da ciò che stai cercando.", "Vedi tutto"],
    sheet: ["Foglio selezionato", "Scoperte utili, senza confusione.", "I prezzi sono riferimenti in USD. Controlla l’inserzione prima dell’acquisto.", "Cerca prodotti o categorie", "Tutto"], education: ["Informazioni per chi compra", "Conosci il processo prima di acquistare.", "Spiegazioni indipendenti e basate sulle fonti, dal QC in magazzino al peso volumetrico.", "Leggi le domande"],
    updates: ["Ricerca e aggiornamenti", "Cambiamenti ufficiali tradotti in azioni pratiche.", "Le informazioni possono variare per destinazione, ordine e account. Registriamo controllo, fonte e punti da riconfermare."], faq: ["Domande frequenti", "Risposte chiare. Nessuna pressione.", "Queste risposte spiegano il sito e il processo. Checkout e condizioni ufficiali restano la fonte finale."],
    closing: ["Pronto a esplorare?", "Fai ricerca qui.", "Cerca più a fondo nel database principale.", "Sfoglia prodotti LoloBuy", "Apri findspreadsheet.com"],
  },
  pt: {
    preview: "Modo de revisão — ainda não ligado a lolobuysheet.es", nav: ["Planilha", "Categorias", "Guias", "Atualizações", "FAQ"], database: "Base completa",
    eyebrow: "Centro independente de pesquisa LoloBuy", title: "Encontre produtos LoloBuy melhores.", accent: "Compre com contexto.", lead: "Uma planilha pesquisável, checklists de QC e guias de envio para a Europa e América do Norte.", explore: "Explorar a planilha", buyerGuide: "Começar pelo guia",
    proof: ["categorias selecionadas", "rotas de idioma", "modelo de pesquisa"], panel: ["PESQUISA AO VIVO", "Novidades claramente identificadas", "Atualizado", "Pesquisar itens verificados…", "Transparência por padrão", "Mostramos quando os links foram verificados e separamos fatos oficiais de orientações editoriais."],
    trust: ["Feito para as dúvidas reais de quem compra", "VERIFICAÇÃO DE FOTOS QC", "GUIAS DE ENVIO", "FONTES OFICIAIS", "GUIAS POR PAÍS"], categories: ["Explorar por categoria", "Comece pelo que procura.", "Ver tudo"],
    sheet: ["Planilha selecionada", "Itens úteis, sem ruído.", "Os preços são referências em USD. Confirme o anúncio antes da compra.", "Pesquisar produtos ou categorias", "Tudo"], education: ["Educação do comprador", "Entenda o processo antes de comprar.", "Guias independentes e baseados em fontes, do QC no armazém ao peso volumétrico.", "Ler perguntas comuns"],
    updates: ["Pesquisa e atualizações", "Mudanças oficiais transformadas em próximos passos.", "As informações variam por destino, pedido e conta. Registramos o que foi verificado e o que deve ser confirmado novamente."], faq: ["Perguntas comuns", "Respostas claras. Sem pressão de venda.", "Estas respostas explicam o site e o processo. O checkout e os termos oficiais continuam sendo a fonte final."],
    closing: ["Pronto para explorar?", "Pesquise aqui.", "Amplie a busca na base principal.", "Ver produtos LoloBuy", "Abrir findspreadsheet.com"],
  },
  nl: {
    preview: "Beoordelingsmodus — nog niet gekoppeld aan lolobuysheet.es", nav: ["Spreadsheet", "Categorieën", "Gidsen", "Updates", "FAQ"], database: "Volledige database",
    eyebrow: "Onafhankelijk LoloBuy-onderzoekscentrum", title: "Vind betere LoloBuy-producten.", accent: "Shop met context.", lead: "Een doorzoekbare spreadsheet, praktische QC-checklists en verzendgidsen voor Europa en Noord-Amerika.", explore: "Spreadsheet bekijken", buyerGuide: "Begin met de koopgids",
    proof: ["geselecteerde categorieën", "taalroutes", "onderzoeksmodel"], panel: ["LIVE ONDERZOEK", "Nieuwe vondsten, helder gelabeld", "Bijgewerkt", "Zoek gecontroleerde items…", "Transparant ontworpen", "We tonen wanneer links zijn gecontroleerd en scheiden officiële feiten van redactioneel advies."],
    trust: ["Gebouwd rond echte vragen van shoppers", "QC-FOTOCONTROLE", "VERZENDGIDSEN", "OFFICIËLE BRONNEN", "LANDENGIDSEN"], categories: ["Blader per categorie", "Begin met wat je zoekt.", "Alles bekijken"],
    sheet: ["Geselecteerde spreadsheet", "Nuttige vondsten zonder ruis.", "Prijzen zijn USD-referenties. Controleer de actuele vermelding vóór aankoop.", "Zoek producten of categorieën", "Alles"], education: ["Kopersinformatie", "Ken het proces vóór je koopt.", "Onafhankelijke uitleg met bronnen, van magazijn-QC tot volumegewicht.", "Veelgestelde vragen"],
    updates: ["Onderzoek & updates", "Officiële wijzigingen vertaald naar praktische stappen.", "Informatie kan verschillen per bestemming, bestelling en account. We leggen vast wat is gecontroleerd en wat opnieuw moet worden bevestigd."], faq: ["Veelgestelde vragen", "Duidelijke antwoorden. Geen verkooppraat.", "Deze antwoorden leggen de site en het proces uit. Checkout en officiële voorwaarden blijven leidend."],
    closing: ["Klaar om te ontdekken?", "Onderzoek hier.", "Zoek verder in de hoofddatabase.", "Bekijk LoloBuy-vondsten", "Open findspreadsheet.com"],
  },
  pl: {
    preview: "Tryb przeglądu — jeszcze bez połączenia z lolobuysheet.es", nav: ["Arkusz", "Kategorie", "Poradniki", "Aktualizacje", "FAQ"], database: "Pełna baza",
    eyebrow: "Niezależne centrum badań LoloBuy", title: "Znajdź lepsze produkty LoloBuy.", accent: "Kupuj ze świadomością.", lead: "Przeszukiwalny arkusz, praktyczne listy QC i poradniki wysyłkowe dla Europy i Ameryki Północnej.", explore: "Przeglądaj arkusz", buyerGuide: "Zacznij od poradnika",
    proof: ["wybrane kategorie", "wersje językowe", "model badań"], panel: ["BADANIA NA ŻYWO", "Nowe pozycje, jasne oznaczenia", "Zaktualizowano", "Szukaj sprawdzonych ofert…", "Przejrzystość od podstaw", "Pokazujemy datę sprawdzenia linków i oddzielamy fakty oficjalne od porad redakcyjnych."],
    trust: ["Odpowiedzi na prawdziwe pytania kupujących", "KONTROLA ZDJĘĆ QC", "PORADNIKI WYSYŁKOWE", "OFICJALNE ŹRÓDŁA", "PORADNIKI KRAJOWE"], categories: ["Przeglądaj kategorie", "Zacznij od tego, czego szukasz.", "Zobacz wszystko"],
    sheet: ["Wybrany arkusz", "Przydatne pozycje bez chaosu.", "Ceny są orientacyjne w USD. Sprawdź aktualną ofertę przed zakupem.", "Szukaj produktów lub kategorii", "Wszystko"], education: ["Wiedza kupującego", "Poznaj proces przed zakupem.", "Niezależne wyjaśnienia oparte na źródłach — od QC w magazynie po wagę objętościową.", "Czytaj pytania"],
    updates: ["Badania i aktualizacje", "Oficjalne zmiany przełożone na praktyczne kroki.", "Informacje zależą od miejsca, zamówienia i konta. Zapisujemy, co sprawdzono i co trzeba potwierdzić."], faq: ["Częste pytania", "Jasne odpowiedzi. Bez sprzedażowej presji.", "Te odpowiedzi wyjaśniają stronę i proces. Checkout oraz oficjalne warunki są ostatecznym źródłem."],
    closing: ["Gotowy do przeglądania?", "Sprawdzaj tutaj.", "Szukaj szerzej w głównej bazie.", "Zobacz produkty LoloBuy", "Otwórz findspreadsheet.com"],
  },
  zh: {
    preview: "独立公开检查版——尚未连接 lolobuysheet.es 正式域名", nav: ["精选表格", "产品分类", "购买指南", "最新动态", "常见问题"], database: "完整数据库",
    eyebrow: "独立 LoloBuy 研究中心", title: "发现更值得参考的 LoloBuy 商品。", accent: "先了解，再下单。", lead: "面向欧美买家的可搜索精选表格、实用 QC 检查清单和国际运输指南。", explore: "浏览精选表格", buyerGuide: "从购买指南开始",
    proof: ["精选分类", "独立语言页面", "研究框架"], panel: ["实时研究视图", "最新发现，标注清晰", "已更新", "搜索已核对商品…", "透明是设计的一部分", "展示链接核对时间，并明确区分官方事实与编辑建议。"],
    trust: ["围绕买家真正关心的问题建立", "QC 图片检查", "运输说明", "官方更新来源", "国家指南"], categories: ["按分类浏览", "从你正在寻找的商品开始。", "查看全部"],
    sheet: ["精选商品表格", "保留有用信息，减少干扰。", "价格为美元参考值，购买前请再次确认当前商品页面。", "搜索商品或分类", "全部"], education: ["买家知识中心", "下单前先了解完整流程。", "从仓库 QC 到体积重量，以独立且注明来源的方式解释容易混淆的步骤。", "阅读常见问题"],
    updates: ["研究与更新", "把官方变化转化为可执行步骤。", "平台信息会因目的地、订单和账户而变化。更新中心记录核对内容、官方来源及付款前需再次确认的项目。"], faq: ["常见问题", "答案清楚，不做强推销。", "这里解释本站和一般流程；实际结账页面与官方条款始终是订单的最终依据。"],
    closing: ["准备开始浏览？", "在这里完成研究。", "到主数据库继续扩大搜索。", "浏览 LoloBuy 商品", "打开 findspreadsheet.com"],
  },
};

const compactLocales: Record<string, Pick<PageCopy, "preview" | "nav" | "database" | "eyebrow" | "title" | "accent" | "lead" | "explore" | "buyerGuide">> = {
  sv: { preview: "Granskningsläge — ännu inte ansluten till lolobuysheet.es", nav: ["Kalkylblad", "Kategorier", "Guider", "Uppdateringar", "FAQ"], database: "Hela databasen", eyebrow: "Oberoende LoloBuy-forskning", title: "Hitta bättre LoloBuy-produkter.", accent: "Handla med sammanhang.", lead: "Ett sökbart kalkylblad, praktiska QC-listor och fraktguider för Europa och Nordamerika.", explore: "Utforska kalkylbladet", buyerGuide: "Börja med köpguiden" },
  da: { preview: "Gennemgang — endnu ikke forbundet til lolobuysheet.es", nav: ["Regneark", "Kategorier", "Guides", "Opdateringer", "FAQ"], database: "Hele databasen", eyebrow: "Uafhængigt LoloBuy-videncenter", title: "Find bedre LoloBuy-produkter.", accent: "Køb med kontekst.", lead: "Et søgbart regneark, praktiske QC-tjeklister og fragtguides til Europa og Nordamerika.", explore: "Udforsk regnearket", buyerGuide: "Start med købsguiden" },
  no: { preview: "Kontrollmodus — ikke koblet til lolobuysheet.es ennå", nav: ["Regneark", "Kategorier", "Guider", "Oppdateringer", "FAQ"], database: "Hele databasen", eyebrow: "Uavhengig LoloBuy-kunnskapssenter", title: "Finn bedre LoloBuy-produkter.", accent: "Handle med kontekst.", lead: "Et søkbart regneark, praktiske QC-sjekklister og fraktguider for Europa og Nord-Amerika.", explore: "Utforsk regnearket", buyerGuide: "Start med kjøpsguiden" },
  fi: { preview: "Tarkistustila — ei vielä yhdistetty lolobuysheet.es-osoitteeseen", nav: ["Taulukko", "Kategoriat", "Oppaat", "Päivitykset", "UKK"], database: "Koko tietokanta", eyebrow: "Riippumaton LoloBuy-tietokeskus", title: "Löydä parempia LoloBuy-tuotteita.", accent: "Osta taustatiedon avulla.", lead: "Haettava taulukko, käytännön QC-listat ja toimitusoppaat Eurooppaan ja Pohjois-Amerikkaan.", explore: "Tutustu taulukkoon", buyerGuide: "Aloita osto-oppaasta" },
  cs: { preview: "Režim kontroly — zatím nepřipojeno k lolobuysheet.es", nav: ["Přehled", "Kategorie", "Průvodci", "Aktualizace", "FAQ"], database: "Celá databáze", eyebrow: "Nezávislé centrum výzkumu LoloBuy", title: "Najděte lepší produkty LoloBuy.", accent: "Nakupujte s kontextem.", lead: "Prohledávatelný přehled, praktické QC seznamy a průvodci dopravou pro Evropu a Severní Ameriku.", explore: "Prozkoumat přehled", buyerGuide: "Začít průvodcem" },
  ro: { preview: "Mod de verificare — încă neconectat la lolobuysheet.es", nav: ["Tabel", "Categorii", "Ghiduri", "Actualizări", "FAQ"], database: "Baza completă", eyebrow: "Centru independent de cercetare LoloBuy", title: "Găsește produse LoloBuy mai bune.", accent: "Cumpără informat.", lead: "Un tabel ușor de căutat, liste QC practice și ghiduri de transport pentru Europa și America de Nord.", explore: "Explorează tabelul", buyerGuide: "Începe cu ghidul" },
  hu: { preview: "Ellenőrzési mód — még nincs összekapcsolva a lolobuysheet.es oldallal", nav: ["Táblázat", "Kategóriák", "Útmutatók", "Frissítések", "GYIK"], database: "Teljes adatbázis", eyebrow: "Független LoloBuy kutatóközpont", title: "Találj jobb LoloBuy-termékeket.", accent: "Vásárolj háttérismerettel.", lead: "Kereshető táblázat, gyakorlati QC-listák és szállítási útmutatók Európához és Észak-Amerikához.", explore: "Táblázat megnyitása", buyerGuide: "Kezdés az útmutatóval" },
  el: { preview: "Λειτουργία ελέγχου — δεν έχει συνδεθεί ακόμη με το lolobuysheet.es", nav: ["Πίνακας", "Κατηγορίες", "Οδηγοί", "Ενημερώσεις", "FAQ"], database: "Πλήρης βάση", eyebrow: "Ανεξάρτητο κέντρο έρευνας LoloBuy", title: "Βρείτε καλύτερα προϊόντα LoloBuy.", accent: "Αγοράστε με ενημέρωση.", lead: "Αναζητήσιμος πίνακας, πρακτικές λίστες QC και οδηγοί αποστολής για Ευρώπη και Βόρεια Αμερική.", explore: "Εξερεύνηση πίνακα", buyerGuide: "Έναρξη με τον οδηγό" },
  uk: { preview: "Режим перевірки — ще не підключено до lolobuysheet.es", nav: ["Таблиця", "Категорії", "Посібники", "Оновлення", "FAQ"], database: "Повна база", eyebrow: "Незалежний центр досліджень LoloBuy", title: "Знаходьте кращі товари LoloBuy.", accent: "Купуйте з розумінням.", lead: "Пошукова таблиця, практичні списки QC та посібники з доставки для Європи й Північної Америки.", explore: "Переглянути таблицю", buyerGuide: "Почати з посібника" },
  tr: { preview: "İnceleme modu — henüz lolobuysheet.es alanına bağlı değil", nav: ["Tablo", "Kategoriler", "Rehberler", "Güncellemeler", "SSS"], database: "Tam veritabanı", eyebrow: "Bağımsız LoloBuy araştırma merkezi", title: "Daha iyi LoloBuy ürünleri bulun.", accent: "Bilgiyle alışveriş yapın.", lead: "Avrupa ve Kuzey Amerika için aranabilir tablo, pratik QC listeleri ve kargo rehberleri.", explore: "Tabloyu keşfet", buyerGuide: "Satın alma rehberiyle başla" },
  ru: { preview: "Режим проверки — ещё не подключено к lolobuysheet.es", nav: ["Таблица", "Категории", "Руководства", "Обновления", "FAQ"], database: "Вся база", eyebrow: "Независимый центр исследований LoloBuy", title: "Находите лучшие товары LoloBuy.", accent: "Покупайте осознанно.", lead: "Таблица с поиском, практические QC-листы и руководства по доставке для Европы и Северной Америки.", explore: "Открыть таблицу", buyerGuide: "Начать с руководства" },
  bg: { preview: "Режим за преглед — още не е свързан с lolobuysheet.es", nav: ["Таблица", "Категории", "Ръководства", "Актуализации", "FAQ"], database: "Пълна база", eyebrow: "Независим изследователски център LoloBuy", title: "Намерете по-добри LoloBuy продукти.", accent: "Пазарувайте информирано.", lead: "Таблица с търсене, практични QC списъци и ръководства за доставка за Европа и Северна Америка.", explore: "Разгледайте таблицата", buyerGuide: "Започнете с ръководството" },
  ja: { preview: "確認用プレビュー — lolobuysheet.es にはまだ接続されていません", nav: ["商品表", "カテゴリー", "ガイド", "更新情報", "FAQ"], database: "全データベース", eyebrow: "独立LoloBuyリサーチハブ", title: "より良いLoloBuy商品を見つけよう。", accent: "情報を確認してから購入。", lead: "欧州と北米向けの検索可能な商品表、実用的なQCチェックリスト、配送ガイドです。", explore: "商品表を見る", buyerGuide: "購入ガイドから始める" },
  ko: { preview: "검토용 미리보기 — 아직 lolobuysheet.es에 연결되지 않았습니다", nav: ["상품표", "카테고리", "가이드", "업데이트", "FAQ"], database: "전체 데이터베이스", eyebrow: "독립 LoloBuy 리서치 허브", title: "더 나은 LoloBuy 상품을 찾아보세요.", accent: "정보를 확인하고 쇼핑하세요.", lead: "유럽과 북미 사용자를 위한 검색 가능한 상품표, 실용적인 QC 체크리스트와 배송 가이드입니다.", explore: "상품표 보기", buyerGuide: "구매 가이드 시작" },
  ar: { preview: "وضع المراجعة — لم يتم ربط lolobuysheet.es بعد", nav: ["الجدول", "الفئات", "الأدلة", "التحديثات", "الأسئلة"], database: "قاعدة البيانات الكاملة", eyebrow: "مركز أبحاث LoloBuy مستقل", title: "اعثر على منتجات LoloBuy أفضل.", accent: "تسوّق بمعلومات أوضح.", lead: "جدول قابل للبحث وقوائم فحص QC وأدلة شحن لأوروبا وأمريكا الشمالية.", explore: "استكشف الجدول", buyerGuide: "ابدأ بدليل الشراء" },
};

Object.assign(localizedCopy, compactLocales);

const guides = [
  ["01", "How LoloBuy works", "A plain-language walkthrough from product link to international delivery.", "6 min"],
  ["02", "Read QC photos with confidence", "A practical checklist for color, measurements, stitching and visible defects.", "8 min"],
  ["03", "Estimate shipping before you buy", "Understand actual weight, volumetric weight, packing and route differences.", "7 min"],
  ["04", "Returns, refunds & after-sales", "What to document, when to act and what can change by seller or order status.", "5 min"],
];

export function Home({ locale = "en" }: { locale?: string }) {
  const normalizedLocale = locale.toLowerCase();
  const copy: PageCopy = { ...englishCopy, ...(localizedCopy[normalizedLocale] || {}) };
  const ui = getUiCopy(normalizedLocale);
  const activeLanguage = languages.find(([code]) => code.toLowerCase() === normalizedLocale) || languages[0];
  const localeRoot = normalizedLocale === "en" ? "/" : `/${normalizedLocale}/`;
  const pageHref = (slug: string) => normalizedLocale === "en" ? `/${slug}` : `/${normalizedLocale}/${slug}`;
  const navLabels = ui.nav;
  const [query, setQuery] = useState("");
  const [carouselProducts, setCarouselProducts] = useState<Product[]>(latestCarouselFallback);
  const [carouselSyncedAt, setCarouselSyncedAt] = useState<string | null>(null);
  const [carouselPaused, setCarouselPaused] = useState(false);
  const [panelPaused, setPanelPaused] = useState(false);
  const [panelIndex, setPanelIndex] = useState(0);
  const productCarousel = useRef<HTMLDivElement>(null);
  const faqList = useRef<HTMLDivElement>(null);
  const mainSearchAction = "https://findspreadsheet.com/search.html";

  const visibleProducts = carouselProducts;

  const carouselCategories = useMemo(
    () => ["All", ...Array.from(new Set(carouselProducts.map((product) => product.category)))],
    [carouselProducts],
  );

  const categoryHref = (category: string) => {
    if (category === "All") return "https://findspreadsheet.com/AllProducts/";
    return mainCategories.find((item) => item.name === category)?.href
      || "https://findspreadsheet.com/AllProducts/";
  };

  const panelProducts = useMemo(
    () => Array.from({ length: 3 }, (_, offset) => products[(panelIndex + offset) % products.length]),
    [panelIndex],
  );

  const moveCarousel = (direction: 1 | -1) => {
    const viewport = productCarousel.current;
    if (!viewport) return;
    const card = viewport.querySelector<HTMLElement>(".product-card");
    if (!card) return;
    const gap = Number.parseFloat(getComputedStyle(viewport).columnGap || "14") || 14;
    const step = card.offsetWidth + gap;
    const atEnd = viewport.scrollLeft + viewport.clientWidth >= viewport.scrollWidth - step / 2;
    const atStart = viewport.scrollLeft <= step / 2;

    if (direction === 1 && atEnd) {
      viewport.scrollTo({ left: 0, behavior: "smooth" });
    } else if (direction === -1 && atStart) {
      viewport.scrollTo({ left: viewport.scrollWidth, behavior: "smooth" });
    } else {
      viewport.scrollBy({ left: direction * step, behavior: "smooth" });
    }
  };

  useEffect(() => {
    productCarousel.current?.scrollTo({ left: 0 });
  }, [visibleProducts]);

  useEffect(() => {
    let active = true;
    const recommendedUrls = new Set(products.map((product) => product.sourceUrl));

    const refreshLatestProducts = async () => {
      try {
        const response = await fetch("/api/latest-products", { cache: "no-store" });
        if (!response.ok) return;
        const payload = (await response.json()) as {
          products?: Product[];
          syncedAt?: string | null;
        };
        const unique = Array.from(
          new Map(
            (payload.products || [])
              .filter((product) => !recommendedUrls.has(product.sourceUrl))
              .map((product) => [product.sourceUrl, product]),
          ).values(),
        );
        if (active && unique.length > 1) {
          setCarouselProducts(unique);
          setCarouselSyncedAt(payload.syncedAt || null);
        }
      } catch {
        // Keep the verified, non-duplicating fallback products visible.
      }
    };

    refreshLatestProducts();
    const timer = window.setInterval(refreshLatestProducts, 30 * 60 * 1000);
    return () => {
      active = false;
      window.clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (
      carouselPaused ||
      visibleProducts.length < 2 ||
      window.matchMedia("(max-width: 620px)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;
    const viewport = productCarousel.current;
    if (!viewport) return;

    let frame = 0;
    let previousTime = 0;
    const pixelsPerSecond = 42;

    const animate = (time: number) => {
      if (previousTime) {
        viewport.scrollLeft += ((time - previousTime) / 1000) * pixelsPerSecond;
        const loopWidth = viewport.scrollWidth / 2;
        if (loopWidth > 0 && viewport.scrollLeft >= loopWidth) {
          viewport.scrollLeft -= loopWidth;
        }
      }
      previousTime = time;
      frame = window.requestAnimationFrame(animate);
    };

    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, [carouselPaused, visibleProducts.length]);

  useEffect(() => {
    if (
      panelPaused ||
      products.length < 2 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;
    const timer = window.setInterval(
      () => setPanelIndex((current) => (current + 1) % products.length),
      2800,
    );
    return () => window.clearInterval(timer);
  }, [panelPaused]);

  useEffect(() => {
    if (!window.matchMedia("(max-width: 620px)").matches) return;
    faqList.current
      ?.querySelectorAll<HTMLDetailsElement>("details[open]")
      .forEach((item) => { item.open = false; });
  }, []);

  return (
    <main dir={normalizedLocale === "ar" ? "rtl" : "ltr"}>
      <div className="preview-ribbon">
        <span>{ui.previewBadge}</span>
        <p>{copy.preview}</p>
      </div>

      <header className="site-header">
        <a className="brand" href={`${localeRoot}#top`} aria-label="LoloBuy Sheet home">
          <img className="brand-logo" src="/lolobuy.webp" alt="" width="44" height="44" />
          <span>LoloBuy <b>Sheet</b></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href={pageHref("spreadsheet")}>{navLabels[0]}</a>
          <a href={pageHref("categories")}>{navLabels[1]}</a>
          <a href={pageHref("guides")}>{navLabels[2]}</a>
          <a href={pageHref("seo-articles")}>{navLabels[3]}</a>
          <a href={pageHref("updates")}>{navLabels[4]}</a>
          <a href={pageHref("faq")}>{navLabels[5]}</a>
        </nav>
        <div className="header-actions">
          <details className="mobile-pages">
            <summary aria-label={ui.pages}>{ui.pages} <span>⌄</span></summary>
            <div className="mobile-pages-menu">
              {["spreadsheet", "categories", "guides", "seo-articles", "updates", "faq"].map((slug, index) => (
                <a href={pageHref(slug)} key={slug}>{navLabels[index]}</a>
              ))}
            </div>
          </details>
          <details className="language-menu">
            <summary aria-label={ui.chooseLanguage}>{activeLanguage[0]} <span>⌄</span></summary>
            <div className="language-grid">
              {languages.map(([code, name]) => (
                <a
                  className={code.toLowerCase() === normalizedLocale ? "current" : ""}
                  href={code === "EN" ? "/" : `/${code.toLowerCase()}/`}
                  onClick={(event) => {
                    if (window.location.hash) {
                      event.preventDefault();
                      window.location.href = `${code === "EN" ? "/" : `/${code.toLowerCase()}/`}${window.location.hash}`;
                    }
                  }}
                  key={code}
                >
                  <b>{code}</b><span>{name}</span>
                </a>
              ))}
            </div>
          </details>
          <a className="button small" href="https://findspreadsheet.com" target="_blank" rel="noreferrer">
            {copy.database} <span>↗</span>
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> {copy.eyebrow}</div>
          <h1>{copy.title}<br /><em>{copy.accent}</em></h1>
          <p className="hero-lead">{copy.lead}</p>
          <div className="hero-actions">
            <a className="button primary" href={pageHref("spreadsheet")}>{copy.explore} <span>→</span></a>
            <a className="text-link" href={pageHref("guides")}>{copy.buyerGuide} <span>→</span></a>
          </div>
          <div className="proof-row">
            <span><b>10</b> {copy.proof[0]}</span>
            <span><b>24</b> {copy.proof[1]}</span>
            <span><b>2026</b> {copy.proof[2]}</span>
          </div>
        </div>

        <div
          className="hero-panel"
          aria-label="LoloBuy research preview"
          onMouseEnter={() => setPanelPaused(true)}
          onMouseLeave={() => setPanelPaused(false)}
          onFocusCapture={() => setPanelPaused(true)}
          onBlurCapture={() => setPanelPaused(false)}
        >
          <div className="panel-head">
            <div>
              <small>{copy.panel[0]}</small>
              <strong>{copy.panel[1]}</strong>
            </div>
            <span className="status">● {copy.panel[2]}</span>
          </div>
          <form className="mini-search" action={mainSearchAction} method="get" target="_blank" rel="noopener noreferrer">
            <span aria-hidden="true">⌕</span>
            <input
              name="keywords"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={copy.panel[3]}
              aria-label={copy.panel[3]}
            />
            <input type="hidden" name="channelid" value="2" />
            <input type="hidden" name="method" value="1" />
            <button type="submit" aria-label={ui.mainDatabase} title={ui.mainDatabase}>→</button>
          </form>
          <div className="mini-list" aria-live="off">
            {panelProducts.map((product) => (
              <a className="mini-item" href={product.sourceUrl} target="_blank" rel="noreferrer" key={product.name}>
                <span className="product-art"><img src={product.image} alt="" /></span>
                <span><b>{product.name}</b><small>{product.category} · {product.checked}</small></span>
                <strong>{product.usdPrice}</strong>
              </a>
            ))}
          </div>
          <div className="panel-note"><span>✓</span><p><b>{copy.panel[4]}</b><br />{copy.panel[5]}</p></div>
        </div>
      </section>

      <section className="trust-bar">
        <p>{copy.trust[0]}</p>
        <div>{copy.trust.slice(1).map((item) => <span key={item}>{item}</span>)}</div>
      </section>

      <section className="section" id="categories">
        <div className="section-heading">
          <div><p className="kicker">{copy.categories[0]}</p><h2>{copy.categories[1]}</h2></div>
          <a href={pageHref("categories")}>{copy.categories[2]} <span>→</span></a>
        </div>
        <div className="category-grid">
          {mainCategories.map((category) => (
            <a href={category.href} target="_blank" rel="noreferrer" key={category.name}>
              <span className="category-icon">{category.icon}</span>
              <span><b>{category.name}</b><small>{category.note}</small></span>
              <i>↗</i>
            </a>
          ))}
        </div>
      </section>

      <section className="sheet-section" id="spreadsheet">
        <div className="section-heading light">
          <div><p className="kicker">{copy.sheet[0]}</p><h2>{copy.sheet[1]}</h2></div>
          <p className="section-note">{copy.sheet[2]}</p>
        </div>
        <div className="sheet-toolbar">
          <div className="filter-row">
            {carouselCategories.map((category, index) => (
              <a
                className={index === 0 ? "active" : ""}
                href={categoryHref(category)}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${category} products on findspreadsheet.com`}
                key={category}
              >
                {index === 0 ? copy.sheet[4] : category}
              </a>
            ))}
          </div>
        </div>
        <div className="carousel-heading">
          <p>
            <span className="carousel-live-dot" />
            Main-site latest + popular · auto-updated
            {carouselSyncedAt ? ` · ${new Date(carouselSyncedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}` : ""}
          </p>
          <div>
            <button type="button" onClick={() => moveCarousel(-1)} aria-label="Show previous products">←</button>
            <button type="button" onClick={() => moveCarousel(1)} aria-label="Show next products">→</button>
          </div>
        </div>
        <div
          className="product-carousel"
          ref={productCarousel}
          role="region"
          aria-label="Auto-rotating product showcase"
          onMouseEnter={() => setCarouselPaused(true)}
          onMouseLeave={() => setCarouselPaused(false)}
          onFocusCapture={() => setCarouselPaused(true)}
          onBlurCapture={() => setCarouselPaused(false)}
          onTouchStart={() => setCarouselPaused(true)}
          onTouchEnd={() => setCarouselPaused(false)}
        >
          <div className="product-grid">
            {[0, 1].map((setIndex) => (
              <div className="product-loop-set" aria-hidden={setIndex === 1} key={setIndex}>
                {visibleProducts.map((product) => (
                  <article className="product-card" key={`${setIndex}-${product.name}`}>
                    <a className="product-visual" href={product.sourceUrl} target="_blank" rel="noreferrer" tabIndex={setIndex === 1 ? -1 : undefined}>
                      <img
                        src={product.image}
                        alt={setIndex === 0 ? `Main product image for ${product.name} from findspreadsheet.com` : ""}
                        loading="lazy"
                        decoding="async"
                      />
                      <span>{product.category}</span>
                    </a>
                    <div className="product-meta"><small>{product.category}</small><span className="checked">↻ {product.checked}</span></div>
                    <h3>{product.name}</h3>
                    <p className="product-price-note">¥{product.sourcePriceCny.toFixed(product.sourcePriceCny % 1 ? 1 : 0)} · converted reference</p>
                    <div className="product-foot"><b>{product.usdPrice}</b><a href={product.sourceUrl} target="_blank" rel="noreferrer" tabIndex={setIndex === 1 ? -1 : undefined} aria-label={`Open ${product.name} on findspreadsheet.com`}>Main site <span>↗</span></a></div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
        {!visibleProducts.length && <p className="empty-state">No sample listings match that search yet.</p>}
      </section>

      <section className="section guide-section" id="guides">
        <div className="guide-intro">
          <p className="kicker">{copy.education[0]}</p>
          <h2>{copy.education[1]}</h2>
          <p>{copy.education[2]}</p>
          <a className="button dark" href={pageHref("faq")}>{copy.education[3]} <span>→</span></a>
        </div>
        <div className="guide-list">
          {guides.map(([number, title, description, time], index) => (
            <a href={pageHref(`seo-articles/${["how-lolobuy-works", "lolobuy-qc-photos-guide", "lolobuy-shipping-cost-guide", "lolobuy-returns-refunds"][index]}`)} className="guide-item" id={`guide-${number}`} key={number}>
              <span>{number}</span><div><h3>{title}</h3><p>{description}</p><small>{time} read</small></div><i>↗</i>
            </a>
          ))}
        </div>
      </section>

      <section className="updates section" id="updates">
        <div className="update-feature">
          <p className="kicker">{copy.updates[0]}</p>
          <h2>{copy.updates[1]}</h2>
          <p>{copy.updates[2]}</p>
          <div className="source-rule"><span>✓</span><div><b>{ui.sourcePolicy}</b><p>{ui.sourceNote}</p></div></div>
        </div>
        <div className="timeline">
          {officialUpdates.slice(0, 3).map((update) => (
            <article key={update.slug}>
              <small>{update.category.toUpperCase()} · {update.date.toUpperCase()}</small>
              <h3>{update.title}</h3>
              <p>{update.summary}</p>
              <a href={pageHref(`updates/${update.slug}`)}>Read complete update →</a>
            </article>
          ))}
          <a className="timeline-all" href={pageHref("updates")}>View all dated updates →</a>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="faq-heading"><p className="kicker">{copy.faq[0]}</p><h2>{copy.faq[1]}</h2><p>{copy.faq[2]}</p></div>
        <div className="faq-list" ref={faqList}>
          {getFaqItems(normalizedLocale).slice(0, 5).map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.question}<i>+</i></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="closing">
        <p className="kicker">{copy.closing[0]}</p>
        <h2>{copy.closing[1]}<br />{copy.closing[2]}</h2>
        <div><a className="button primary" href={pageHref("spreadsheet")}>{copy.closing[3]} <span>→</span></a><a className="button ghost" href="https://findspreadsheet.com" target="_blank" rel="noreferrer">{copy.closing[4]} <span>↗</span></a></div>
      </section>

      <footer>
        <div className="footer-brand"><a className="brand" href="#top"><img className="brand-logo" src="/lolobuy.webp" alt="" width="44" height="44" /><span>LoloBuy <b>Sheet</b></span></a><p>{ui.footerIntro}</p></div>
        <div><b>{ui.explore}</b><a href={pageHref("spreadsheet")}>{navLabels[0]}</a><a href={pageHref("categories")}>{navLabels[1]}</a><a href={pageHref("guides")}>{navLabels[2]}</a></div>
        <div><b>{ui.research}</b><a href={pageHref("seo-articles")}>{navLabels[3]}</a><a href={pageHref("updates")}>{navLabels[4]}</a><a href={pageHref("faq")}>{navLabels[5]}</a></div>
        <div><b>{ui.sources}</b><a href="https://findspreadsheet.com/" target="_blank" rel="noreferrer">{ui.mainDatabase} ↗</a></div>
        <p className="legal">{ui.legal}</p>
      </footer>
    </main>
  );
}

export default function EnglishHome() {
  return <Home locale="en" />;
}
