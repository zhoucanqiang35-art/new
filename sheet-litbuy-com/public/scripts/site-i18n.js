/* Static, in-site locale layer. Product source fields intentionally stay untouched. */
(() => {
  const locales = ['en', 'de', 'fr', 'es', 'it', 'pt', 'nl', 'pl', 'sv'];
  const names = { en: 'English', de: 'Deutsch', fr: 'Français', es: 'Español', it: 'Italiano', pt: 'Português', nl: 'Nederlands', pl: 'Polski', sv: 'Svenska' };
  const requested = new URLSearchParams(location.search).get('lang');
  // English is always the default for a fresh direct visit. A selected locale
  // remains with the visitor through internal links via ?lang=, rather than
  // silently changing a later direct page visit from English.
  const lang = locales.includes(requested) ? requested : 'en';
  const code = lang.toUpperCase();
  const strings = {
    de: { Home:'Startseite', 'Product Categories':'Produktkategorien', 'Product Details':'Produktdetails', 'SEO Articles':'SEO-Artikel', FAQ:'FAQ', Language:'Sprache', Register:'Registrieren', 'All Products':'Alle Produkte', 'Search all product sheets':'Alle Produktlisten durchsuchen', 'Title, category or product ID':'Titel, Kategorie oder Produkt-ID', 'Loading the FindSpreadsheet catalogue…':'FindSpreadsheet-Katalog wird geladen…', 'QC / source photos +':'QC- / Quellfotos +', 'View details →':'Details ansehen →', 'See source':'Quelle ansehen', 'source price':'Quellpreis', '← Previous':'← Zurück', 'Next →':'Weiter →', 'All product details':'Alle Produktdetails', 'Loading source product…':'Quellprodukt wird geladen…', 'Continue to LitBuy ↗':'Weiter zu LitBuy ↗', 'Product Categories':'Produktkategorien', 'Frequently Asked Questions':'Häufig gestellte Fragen', 'SEO Articles':'SEO-Artikel', 'Read guides':'Leitfäden lesen', 'Browse all products':'Alle Produkte ansehen', 'Create LitBuy account ↗':'LitBuy-Konto erstellen ↗', 'Navigate':'Navigation', Source:'Quelle' },
    fr: { Home:'Accueil', 'Product Categories':'Catégories de produits', 'Product Details':'Détails du produit', 'SEO Articles':'Articles SEO', FAQ:'FAQ', Language:'Langue', Register:'S’inscrire', 'All Products':'Tous les produits', 'Search all product sheets':'Rechercher toutes les fiches produit', 'Title, category or product ID':'Titre, catégorie ou ID produit', 'Loading the FindSpreadsheet catalogue…':'Chargement du catalogue FindSpreadsheet…', 'QC / source photos +':'Photos QC / source +', 'View details →':'Voir les détails →', 'See source':'Voir la source', 'source price':'prix source', '← Previous':'← Précédent', 'Next →':'Suivant →', 'All product details':'Tous les détails produit', 'Loading source product…':'Chargement du produit source…', 'Continue to LitBuy ↗':'Continuer vers LitBuy ↗', 'Frequently Asked Questions':'Questions fréquentes', 'Read guides':'Lire les guides', 'Browse all products':'Parcourir tous les produits', 'Create LitBuy account ↗':'Créer un compte LitBuy ↗', 'Navigate':'Navigation', Source:'Source' },
    es: { Home:'Inicio', 'Product Categories':'Categorías de productos', 'Product Details':'Detalles del producto', 'SEO Articles':'Artículos SEO', FAQ:'Preguntas frecuentes', Language:'Idioma', Register:'Registrarse', 'All Products':'Todos los productos', 'Search all product sheets':'Buscar todas las fichas de producto', 'Title, category or product ID':'Título, categoría o ID de producto', 'Loading the FindSpreadsheet catalogue…':'Cargando el catálogo de FindSpreadsheet…', 'QC / source photos +':'Fotos QC / fuente +', 'View details →':'Ver detalles →', 'See source':'Ver fuente', 'source price':'precio de origen', '← Previous':'← Anterior', 'Next →':'Siguiente →', 'All product details':'Todos los detalles del producto', 'Loading source product…':'Cargando producto de origen…', 'Continue to LitBuy ↗':'Continuar a LitBuy ↗', 'Frequently Asked Questions':'Preguntas frecuentes', 'Read guides':'Leer guías', 'Browse all products':'Ver todos los productos', 'Create LitBuy account ↗':'Crear cuenta LitBuy ↗', 'Navigate':'Navegación', Source:'Fuente' },
    it: { Home:'Home', 'Product Categories':'Categorie prodotti', 'Product Details':'Dettagli prodotto', 'SEO Articles':'Articoli SEO', FAQ:'FAQ', Language:'Lingua', Register:'Registrati', 'All Products':'Tutti i prodotti', 'Search all product sheets':'Cerca tutte le schede prodotto', 'Title, category or product ID':'Titolo, categoria o ID prodotto', 'Loading the FindSpreadsheet catalogue…':'Caricamento catalogo FindSpreadsheet…', 'QC / source photos +':'Foto QC / fonte +', 'View details →':'Vedi dettagli →', 'See source':'Vedi fonte', 'source price':'prezzo fonte', '← Previous':'← Precedente', 'Next →':'Successivo →', 'All product details':'Tutti i dettagli prodotto', 'Loading source product…':'Caricamento prodotto sorgente…', 'Continue to LitBuy ↗':'Continua a LitBuy ↗', 'Frequently Asked Questions':'Domande frequenti', 'Read guides':'Leggi le guide', 'Browse all products':'Sfoglia tutti i prodotti', 'Create LitBuy account ↗':'Crea account LitBuy ↗', 'Navigate':'Navigazione', Source:'Fonte' },
    pt: { Home:'Início', 'Product Categories':'Categorias de produtos', 'Product Details':'Detalhes do produto', 'SEO Articles':'Artigos SEO', FAQ:'Perguntas frequentes', Language:'Idioma', Register:'Registar', 'All Products':'Todos os produtos', 'Search all product sheets':'Pesquisar todas as fichas de produto', 'Title, category or product ID':'Título, categoria ou ID do produto', 'Loading the FindSpreadsheet catalogue…':'A carregar o catálogo FindSpreadsheet…', 'QC / source photos +':'Fotos QC / fonte +', 'View details →':'Ver detalhes →', 'See source':'Ver fonte', 'source price':'preço de origem', '← Previous':'← Anterior', 'Next →':'Seguinte →', 'All product details':'Todos os detalhes do produto', 'Loading source product…':'A carregar produto de origem…', 'Continue to LitBuy ↗':'Continuar para LitBuy ↗', 'Frequently Asked Questions':'Perguntas frequentes', 'Read guides':'Ler guias', 'Browse all products':'Ver todos os produtos', 'Create LitBuy account ↗':'Criar conta LitBuy ↗', 'Navigate':'Navegação', Source:'Fonte' },
    nl: { Home:'Home', 'Product Categories':'Productcategorieën', 'Product Details':'Productdetails', 'SEO Articles':'SEO-artikelen', FAQ:'Veelgestelde vragen', Language:'Taal', Register:'Registreren', 'All Products':'Alle producten', 'Search all product sheets':'Doorzoek alle productbladen', 'Title, category or product ID':'Titel, categorie of product-ID', 'Loading the FindSpreadsheet catalogue…':'FindSpreadsheet-catalogus laden…', 'QC / source photos +':'QC- / bronfoto’s +', 'View details →':'Details bekijken →', 'See source':'Bron bekijken', 'source price':'bronprijs', '← Previous':'← Vorige', 'Next →':'Volgende →', 'All product details':'Alle productdetails', 'Loading source product…':'Bronproduct laden…', 'Continue to LitBuy ↗':'Verder naar LitBuy ↗', 'Frequently Asked Questions':'Veelgestelde vragen', 'Read guides':'Gidsen lezen', 'Browse all products':'Alle producten bekijken', 'Create LitBuy account ↗':'LitBuy-account maken ↗', 'Navigate':'Navigatie', Source:'Bron' },
    pl: { Home:'Strona główna', 'Product Categories':'Kategorie produktów', 'Product Details':'Szczegóły produktu', 'SEO Articles':'Artykuły SEO', FAQ:'FAQ', Language:'Język', Register:'Zarejestruj się', 'All Products':'Wszystkie produkty', 'Search all product sheets':'Przeszukaj wszystkie karty produktów', 'Title, category or product ID':'Tytuł, kategoria lub ID produktu', 'Loading the FindSpreadsheet catalogue…':'Ładowanie katalogu FindSpreadsheet…', 'QC / source photos +':'Zdjęcia QC / źródłowe +', 'View details →':'Zobacz szczegóły →', 'See source':'Zobacz źródło', 'source price':'cena źródłowa', '← Previous':'← Poprzednia', 'Next →':'Następna →', 'All product details':'Wszystkie szczegóły produktu', 'Loading source product…':'Ładowanie produktu źródłowego…', 'Continue to LitBuy ↗':'Przejdź do LitBuy ↗', 'Frequently Asked Questions':'Najczęściej zadawane pytania', 'Read guides':'Czytaj przewodniki', 'Browse all products':'Przeglądaj produkty', 'Create LitBuy account ↗':'Utwórz konto LitBuy ↗', 'Navigate':'Nawigacja', Source:'Źródło' },
    sv: { Home:'Hem', 'Product Categories':'Produktkategorier', 'Product Details':'Produktdetaljer', 'SEO Articles':'SEO-artiklar', FAQ:'Vanliga frågor', Language:'Språk', Register:'Registrera', 'All Products':'Alla produkter', 'Search all product sheets':'Sök i alla produktblad', 'Title, category or product ID':'Titel, kategori eller produkt-ID', 'Loading the FindSpreadsheet catalogue…':'Läser in FindSpreadsheet-katalogen…', 'QC / source photos +':'QC- / källbilder +', 'View details →':'Visa detaljer →', 'See source':'Visa källa', 'source price':'källpris', '← Previous':'← Föregående', 'Next →':'Nästa →', 'All product details':'Alla produktdetaljer', 'Loading source product…':'Läser in källprodukt…', 'Continue to LitBuy ↗':'Fortsätt till LitBuy ↗', 'Frequently Asked Questions':'Vanliga frågor', 'Read guides':'Läs guider', 'Browse all products':'Bläddra bland produkter', 'Create LitBuy account ↗':'Skapa LitBuy-konto ↗', 'Navigate':'Navigera', Source:'Källa' }
  };
  const pack = strings[lang] || {};
  const commonLabels = {
    de: ['Registrieren ↗','10 Themen','10 ausführliche Artikel','eine vollständige Leseseite'],
    fr: ["S’inscrire ↗",'10 sujets','10 articles détaillés','une page de lecture complète'],
    es: ['Registrarse ↗','10 temas','10 artículos detallados','una página de lectura completa'],
    it: ['Registrati ↗','10 argomenti','10 articoli approfonditi','un’unica pagina di lettura'],
    pt: ['Registar ↗','10 temas','10 artigos detalhados','uma página de leitura completa'],
    nl: ['Registreren ↗','10 onderwerpen','10 uitgebreide artikelen','één complete leespagina'],
    pl: ['Zarejestruj się ↗','10 tematów','10 szczegółowych artykułów','jedna kompletna strona do czytania'],
    sv: ['Registrera ↗','10 ämnen','10 utförliga artiklar','en komplett lässida']
  };
  if (commonLabels[lang]) ['Register ↗','10 topics','10 long-form articles','one complete reading page'].forEach((key,i)=>pack[key]=commonLabels[lang][i]);
  const t = (value) => pack[value] || value;
  const internal = (href) => {
    if (!href || href.startsWith('#') || /^(https?:|mailto:|tel:)/.test(href)) return href;
    const url = new URL(href, location.origin); url.searchParams.set('lang', lang); return `${url.pathname}${url.search}${url.hash}`;
  };
  window.__sheetI18n = { lang, code, t, internal };
  const textNodes = (root = document) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode(node) {
      if (!node.nodeValue.trim() || node.parentElement?.closest('script,style,[data-source-content]')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }});
    const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => { const value=node.nodeValue.trim(); if (pack[value]) node.nodeValue=node.nodeValue.replace(value, pack[value]); });
  };
  const links = (root=document) => root.querySelectorAll('a[href]').forEach(a => { const href=a.getAttribute('href'); if (href && !/^(https?:|mailto:|tel:)/.test(href) && !href.startsWith('#')) a.setAttribute('href', internal(href)); });
  const decorate = (root=document) => { textNodes(root); links(root); };
  const updateLangLinks = () => document.querySelectorAll('[data-language-option]').forEach(a => { const target=a.dataset.languageOption; const url=new URL(location.href); url.searchParams.set('lang', target); a.href=`${url.pathname}${url.search}${url.hash}`; a.addEventListener('click', () => localStorage.setItem('sheet-litbuy-language', target)); });
  const editorial = async () => {
    if (lang === 'en') return;
    const body=document.body;
    if (!body.dataset.page) body.dataset.page = location.pathname.startsWith('/seo-articles') ? 'seo' : (location.pathname.startsWith('/faq') ? 'faq' : '');
    if (!['seo','faq'].includes(body.dataset.page)) return;
    const edition=await fetch(`/data/editorial/${lang}.json?v=20261104`).then(r=>r.ok?r.json():null).catch(()=>null);
    if(!edition) return;
    const editorialLabels = {
      de:{guides:'10 RECHERCHIERTE LITBUY-LEITFÄDEN',seoLead:'Zehn ausführliche Leitfäden stehen auf dieser Seite. Sie orientieren sich an praktischen LitBuy-Suchen, nutzen öffentliche LitBuy-Materialien als Faktenbasis und trennen Recherche von Versprechen über Bestand, Qualität, Preise oder Lieferung.',label:'AUSFÜHRLICHER LEITFADEN',note:'Redaktioneller Hinweis: Dieser unabhängige Leitfaden wird nicht von LitBuy betrieben. Richtlinien, Preise, Bestand, Verfügbarkeit und Ziellandregeln können sich ändern; prüfen Sie aktuelle Informationen vor Zahlung oder Versand.',faqLead:'Ein einfacher Überblick: Produkt finden, Lagernachweise prüfen und dann über das Paket entscheiden. Jede Karte nennt zuerst die Antwort und dann den wichtigen Vorbehalt.',answer:'BEACHTEN SIE:'},
      fr:{guides:'10 GUIDES LITBUY DOCUMENTÉS',seoLead:'Dix guides détaillés figurent sur cette page. Ils suivent une intention de recherche LitBuy concrète, s’appuient sur les informations publiques de LitBuy et distinguent la recherche des promesses de stock, qualité, prix ou livraison.',label:'GUIDE DÉTAILLÉ',note:'Note éditoriale : ce guide indépendant n’est pas géré par LitBuy. Les politiques, tarifs, stocks, disponibilité et règles de destination peuvent changer ; vérifiez les informations en direct avant paiement ou expédition.',faqLead:'Un aperçu simple : trouver un produit, examiner les preuves de l’entrepôt, puis décider pour le colis. Chaque carte donne la réponse puis la réserve importante.',answer:'À RETENIR :'},
      es:{guides:'10 GUÍAS LITBUY INVESTIGADAS',seoLead:'Esta página reúne diez guías extensas. Siguen una intención de búsqueda práctica de LitBuy, usan los materiales públicos de LitBuy como límite factual y distinguen la investigación de promesas sobre stock, calidad, precios o entrega.',label:'GUÍA EXTENSA',note:'Nota editorial: esta guía independiente no está gestionada por LitBuy. Las políticas, tarifas, existencias, disponibilidad y reglas de destino pueden cambiar; confirma la información actual antes de pagar o enviar.',faqLead:'Una visión simple: encuentra un producto, revisa la evidencia del almacén y después decide sobre el paquete. Cada tarjeta da primero la respuesta y luego la advertencia importante.',answer:'TEN EN CUENTA:'},
      it:{guides:'10 GUIDE LITBUY DOCUMENTATE',seoLead:'Questa pagina contiene dieci guide approfondite. Seguono una concreta intenzione di ricerca LitBuy, usano i materiali pubblici di LitBuy come limite fattuale e distinguono la ricerca dalle promesse su disponibilità, qualità, prezzi o consegna.',label:'GUIDA APPROFONDITA',note:'Nota editoriale: questa guida indipendente non è gestita da LitBuy. Politiche, tariffe, disponibilità e regole di destinazione possono cambiare; verifica le informazioni aggiornate prima di pagare o spedire.',faqLead:'Una panoramica semplice: trova un prodotto, esamina le prove di magazzino e poi decidi il pacco. Ogni scheda dà prima la risposta e poi la cautela importante.',answer:'DA RICORDARE:'},
      pt:{guides:'10 GUIAS LITBUY PESQUISADOS',seoLead:'Esta página reúne dez guias longos. Seguem uma intenção de pesquisa prática sobre LitBuy, usam os materiais públicos da LitBuy como limite factual e distinguem pesquisa de promessas sobre stock, qualidade, preço ou entrega.',label:'GUIA DETALHADO',note:'Nota editorial: este guia independente não é operado pela LitBuy. Políticas, tarifas, stock, disponibilidade e regras de destino podem mudar; confirme a informação atual antes de pagar ou enviar.',faqLead:'Uma visão simples: encontre um produto, reveja a evidência do armazém e depois decida sobre a encomenda. Cada cartão dá primeiro a resposta e depois a ressalva importante.',answer:'TENHA EM MENTE:'},
      nl:{guides:'10 ONDERZOCHTE LITBUY-GIDSEN',seoLead:'Op deze pagina staan tien uitgebreide gidsen. Ze volgen een praktische LitBuy-zoekintentie, gebruiken openbare LitBuy-materialen als feitelijke grens en onderscheiden onderzoek van beloften over voorraad, kwaliteit, prijzen of levering.',label:'UITGEBREIDE GIDS',note:'Redactionele opmerking: deze onafhankelijke gids wordt niet beheerd door LitBuy. Beleid, tarieven, voorraad, beschikbaarheid en bestemmingsregels kunnen veranderen; controleer actuele informatie vóór betaling of verzending.',faqLead:'Een eenvoudig overzicht: zoek een product, bekijk magazijnbewijs en beslis daarna over het pakket. Elke kaart geeft eerst het antwoord en daarna de belangrijke kanttekening.',answer:'ONTHOUD:'},
      pl:{guides:'10 ZBADANYCH PRZEWODNIKÓW LITBUY',seoLead:'Ta strona zawiera dziesięć długich przewodników. Kierują się praktyczną intencją wyszukiwania LitBuy, opierają się na publicznych materiałach LitBuy i odróżniają badanie od obietnic dotyczących dostępności, jakości, cen lub dostawy.',label:'DŁUGI PRZEWODNIK',note:'Uwaga redakcyjna: ten niezależny przewodnik nie jest prowadzony przez LitBuy. Zasady, stawki, dostępność i reguły kraju docelowego mogą się zmienić; potwierdź aktualne informacje przed płatnością lub wysyłką.',faqLead:'Prosty przegląd: znajdź produkt, sprawdź dowody magazynowe, a potem zdecyduj o paczce. Każda karta najpierw podaje odpowiedź, a potem ważne zastrzeżenie.',answer:'PAMIĘTAJ:'},
      sv:{guides:'10 RESEARCHADE LITBUY-GUIDER',seoLead:'Den här sidan innehåller tio praktiska guider om LitBuy. De skiljer research från löften om lager, kvalitet, priser och leverans.',label:'UTFÖRLIG GUIDE',note:'Redaktionell anmärkning: Den här oberoende guiden drivs inte av LitBuy. Villkor, avgifter, lagerstatus och destinationsregler kan ändras; kontrollera aktuella uppgifter före betalning eller leverans.',faqLead:'En enkel översikt: hitta en produkt, granska lagerbilder och besluta sedan om paketet. Varje kort ger ett svar och en viktig reservation.',answer:'TÄNK PÅ:'}
    };
    const labels = editorialLabels[lang];
    if (body.dataset.page === 'seo') {
      const seoRoot = document.querySelector('.editorial');
      if (seoRoot && labels) { const bits=seoRoot.children; if(bits[0])bits[0].textContent=labels.guides; if(bits[2])bits[2].textContent=labels.seoLead; }
      const copies=edition.articles || [];
      document.querySelectorAll('.long-article').forEach((article,index) => {
        const copy=copies[index]; if(!copy) return;
        const h=article.querySelector('h2'); const d=article.querySelector('.article-dek'); const k=article.querySelector('.keyword-line'); const eyebrow=article.querySelector('.eyebrow'); const note=article.querySelector('.editor-note');
        if(h)h.textContent=copy.title; if(d)d.textContent=copy.description;
        // Keep the complete keyword string in every locale.  It is editorial
        // content, not a page-name label: replacing it with “SEO Articles”
        // removed the primary keyword and all related search terms.
        if(k){
          const sourceKeywords=k.dataset.sourceKeywords||k.textContent.trim();
          k.dataset.sourceKeywords=sourceKeywords;
          const keywordLabels={
            de:['Hauptkeyword','Verwandte Suchbegriffe'],fr:['Mot-clé principal','Recherches associées'],
            es:['Palabra clave principal','Búsquedas relacionadas'],it:['Parola chiave principale','Ricerche correlate'],
            pt:['Palavra-chave principal','Pesquisas relacionadas'],nl:['Hoofdzoekwoord','Gerelateerde zoekopdrachten'],
            pl:['Główne słowo kluczowe','Powiązane wyszukiwania'],sv:['Huvudnyckelord','Relaterade sökningar']
          }[lang];
          if(keywordLabels){
            const [primary,related='']=sourceKeywords.split(' · Related: ');
            const primaryTerms=primary.replace(/^Primary keyword:\s*/i,'');
            k.textContent=`${keywordLabels[0]}: ${primaryTerms}${related ? ` · ${keywordLabels[1]}: ${related}` : ''}`;
          }
        }
        if(eyebrow && labels) eyebrow.textContent=`${String(index+1).padStart(2,'0')} · ${labels.label}`; if(note && labels) note.textContent=labels.note;
        const bodyCopy=article.querySelector('.article-body');
        if(bodyCopy && Array.isArray(copy.paragraphs)) {
          const fragment=document.createDocumentFragment();
          copy.paragraphs.forEach(paragraph=>{const p=document.createElement('p');p.textContent=paragraph;fragment.appendChild(p);});
          bodyCopy.replaceChildren(fragment);
        }
      });
      document.querySelectorAll('.article-index a').forEach((a,index)=>{const copy=copies[index];if(copy)a.textContent=`${String(index+1).padStart(2,'0')} · ${copy.title}`;});
    }
    if (body.dataset.page === 'faq') {
      const faqRoot=document.querySelector('.faq-page');
      if(faqRoot && labels) { const lead=faqRoot.querySelector('.lead');if(lead)lead.textContent=labels.faqLead; }
      const topics=edition.faqs || [];
      document.querySelectorAll('.faq-jump a').forEach((a,index)=>{if(topics[index])a.textContent=`${String(index+1).padStart(2,'0')} · ${topics[index].title}`;});
      document.querySelectorAll('.faq-topic').forEach((section,index)=>{
        const topic=topics[index];if(!topic)return;
        const heading=section.querySelector('header h2');const intro=section.querySelector('header .eyebrow');
        if(heading)heading.textContent=topic.title;
        if(intro)intro.textContent=`${String(index+1).padStart(2,'0')} · ${topic.intro}`;
        section.querySelectorAll('.faq-answer-card').forEach((card,i)=>{
          const copy=topic.items?.[i];if(!copy||copy.length!==3)return;
          const heading=card.querySelector('h3');const ps=card.querySelectorAll('p');const strong=card.querySelector('strong');
          if(heading)heading.textContent=copy[0];if(ps[0])ps[0].textContent=copy[1];
          if(strong&&labels)strong.textContent=labels.answer;
          if(ps[1]){if(strong)ps[1].replaceChildren(strong,document.createTextNode(` ${copy[2]}`));else ps[1].textContent=copy[2];}
        });
      });
    }
  };
  const start=()=>{document.documentElement.lang=lang;document.documentElement.dataset.locale=lang;document.body.dataset.locale=lang;localStorage.setItem('sheet-litbuy-language',lang);document.querySelectorAll('[data-current-language]').forEach(el=>el.textContent=code);decorate();updateLangLinks();editorial();new MutationObserver(records=>records.forEach(r=>r.addedNodes.forEach(node=>{if(node.nodeType===1)decorate(node)}))).observe(document.body,{childList:true,subtree:true});};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();

