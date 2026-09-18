(() => {
  const root='https://findspreadsheet.com';
  const labels={
    de:{nav:['START','KATEGORIEN','PRODUKTDETAILS','SEO-ARTIKEL','FAQ'],browse:'DATENBANK ÖFFNEN',search:'In FindSpreadsheet suchen',go:'SUCHEN',category:'KATEGORIE ÖFFNEN',details:'Produktdetails prüfen',articles:'Rechercheartikel',more:'VOLLSTÄNDIGEN LEITFADEN LESEN',tag:'PRODUKTKATEGORIE',research:'UNABHÄNGIGE RECHERCHE',home:'START',guide:'PIKOBUY-RECHERCHELEITFADEN',faqTag:'GEPRÜFTE FAQ',source:'Unabhängige Recherchevorschau. Prüfen Sie vor einer Entscheidung das aktuelle Angebot, die gewählte Variante, Versandangaben und geltende Rückgabebedingungen.',footer:'Unabhängige Produktrecherche-Vorschau. Suche und Datenbank-Links öffnen',cats:['Schuhe','Hoodies','T-Shirts','Jacken','Hosen','Mützen','Uhren','Elektronik','Socken','Accessoires']},
    fr:{nav:['ACCUEIL','CATÉGORIES','DÉTAILS PRODUIT','ARTICLES SEO','FAQ'],browse:'OUVRIR LA BASE',search:'Rechercher dans FindSpreadsheet',go:'RECHERCHER',category:'OUVRIR LA CATÉGORIE',details:'Vérifier les détails produit',articles:'Articles de recherche',more:'LIRE LE GUIDE COMPLET',tag:'CATÉGORIE PRODUIT',research:'RECHERCHE INDÉPENDANTE',home:'ACCUEIL',guide:'GUIDE DE RECHERCHE PIKOBUY',faqTag:'FAQ VÉRIFIÉE',source:'Aperçu de recherche indépendant. Vérifiez l’annonce actuelle, l’option choisie, les données d’expédition et les conditions de retour applicables avant toute décision.',footer:'Aperçu de recherche produit indépendant. Les recherches et liens de base ouvrent',cats:['Chaussures','Sweats à capuche','T-shirts','Vestes','Pantalons','Chapeaux','Montres','Électronique','Chaussettes','Accessoires']},
    es:{nav:['INICIO','CATEGORÍAS','DETALLES DEL PRODUCTO','ARTÍCULOS SEO','FAQ'],browse:'ABRIR BASE DE DATOS',search:'Buscar en FindSpreadsheet',go:'BUSCAR',category:'ABRIR CATEGORÍA',details:'Revisar detalles del producto',articles:'Artículos de investigación',more:'LEER LA GUÍA COMPLETA',tag:'CATEGORÍA DE PRODUCTO',research:'INVESTIGACIÓN INDEPENDIENTE',home:'INICIO',guide:'GUÍA DE INVESTIGACIÓN PIKOBUY',faqTag:'PREGUNTAS VERIFICADAS',source:'Vista previa de investigación independiente. Revise el anuncio actual, la opción elegida, los datos de envío y las condiciones de devolución aplicables antes de decidir.',footer:'Vista previa de investigación de productos independiente. Las búsquedas y enlaces de base abren',cats:['Zapatos','Sudaderas con capucha','Camisetas','Chaquetas','Pantalones','Gorras','Relojes','Electrónica','Calcetines','Accesorios']},
    it:{nav:['HOME','CATEGORIE','DETTAGLI PRODOTTO','ARTICOLI SEO','FAQ'],browse:'APRI DATABASE',search:'Cerca in FindSpreadsheet',go:'CERCA',category:'APRI CATEGORIA',details:'Controlla i dettagli prodotto',articles:'Articoli di ricerca',more:'LEGGI LA GUIDA COMPLETA',tag:'CATEGORIA PRODOTTO',research:'RICERCA INDIPENDENTE',home:'HOME',guide:'GUIDA DI RICERCA PIKOBUY',faqTag:'FAQ VERIFICATE',source:'Anteprima di ricerca indipendente. Prima di decidere, controlla l’inserzione attuale, l’opzione selezionata, i dati di spedizione e i termini di reso applicabili.',footer:'Anteprima di ricerca prodotti indipendente. Ricerche e link al database aprono',cats:['Scarpe','Felpe con cappuccio','T-shirt','Giacche','Pantaloni','Cappelli','Orologi','Elettronica','Calze','Accessori']},
    pt:{nav:['INÍCIO','CATEGORIAS','DETALHES DO PRODUTO','ARTIGOS SEO','FAQ'],browse:'ABRIR BASE DE DADOS',search:'Pesquisar no FindSpreadsheet',go:'PESQUISAR',category:'ABRIR CATEGORIA',details:'Verificar detalhes do produto',articles:'Artigos de pesquisa',more:'LER GUIA COMPLETO',tag:'CATEGORIA DE PRODUTO',research:'PESQUISA INDEPENDENTE',home:'INÍCIO',guide:'GUIA DE PESQUISA PIKOBUY',faqTag:'FAQ VERIFICADAS',source:'Prévia de pesquisa independente. Reveja o anúncio atual, a opção escolhida, os dados de envio e os termos de devolução aplicáveis antes de decidir.',footer:'Prévia de pesquisa de produtos independente. Pesquisas e ligações da base abrem',cats:['Sapatos','Hoodies','Camisetas','Casacos','Calças','Chapéus','Relógios','Eletrónica','Meias','Acessórios']},
    nl:{nav:['HOME','CATEGORIEËN','PRODUCTDETAILS','SEO-ARTIKELEN','FAQ'],browse:'DATABASE OPENEN',search:'Zoeken in FindSpreadsheet',go:'ZOEKEN',category:'CATEGORIE OPENEN',details:'Productdetails controleren',articles:'Onderzoeksartikelen',more:'VOLLEDIGE GIDS LEZEN',tag:'PRODUCTCATEGORIE',research:'ONAFHANKELIJK ONDERZOEK',home:'HOME',guide:'PIKOBUY-ONDERZOEKSGIDS',faqTag:'GECONTROLEERDE FAQ',source:'Onafhankelijke onderzoekspreview. Controleer vóór een beslissing de actuele aanbieding, de gekozen optie, verzendgegevens en geldende retourvoorwaarden.',footer:'Onafhankelijke productonderzoekspreview. Zoekopdrachten en databaselinks openen',cats:['Schoenen','Hoodies','T-shirts','Jassen','Broeken','Hoeden','Horloges','Elektronica','Sokken','Accessoires']},
    pl:{nav:['START','KATEGORIE','SZCZEGÓŁY PRODUKTU','ARTYKUŁY SEO','FAQ'],browse:'OTWÓRZ BAZĘ',search:'Szukaj w FindSpreadsheet',go:'SZUKAJ',category:'OTWÓRZ KATEGORIĘ',details:'Sprawdź szczegóły produktu',articles:'Artykuły badawcze',more:'PRZECZYTAJ PEŁNY PORADNIK',tag:'KATEGORIA PRODUKTU',research:'NIEZALEŻNE BADANIE',home:'START',guide:'PRZEWODNIK BADAWCZY PIKOBUY',faqTag:'ZWERYFIKOWANE FAQ',source:'Niezależny podgląd badawczy. Przed podjęciem decyzji sprawdź aktualną ofertę, wybrany wariant, dane wysyłki i obowiązujące warunki zwrotu.',footer:'Niezależny podgląd badania produktów. Wyszukiwania i linki do bazy otwierają',cats:['Buty','Bluzy z kapturem','T-shirty','Kurtki','Spodnie','Czapki','Zegarki','Elektronika','Skarpety','Akcesoria']},
    sv:{nav:['HEM','KATEGORIER','PRODUKTDETALJER','SEO-ARTIKLAR','FAQ'],browse:'ÖPPNA DATABAS',search:'Sök i FindSpreadsheet',go:'SÖK',category:'ÖPPNA KATEGORI',details:'Kontrollera produktdetaljer',articles:'Researchartiklar',more:'LÄS HELA GUIDEN',tag:'PRODUKTKATEGORI',research:'OBEROENDE RESEARCH',home:'HEM',guide:'PIKOBUY RESEARCHGUIDE',faqTag:'FAKTAGRANSKAD FAQ',source:'Oberoende researchförhandsvisning. Kontrollera den aktuella annonsen, valt alternativ, fraktuppgifter och tillämpliga returvillkor innan du fattar ett beslut.',footer:'Oberoende produktresearchförhandsvisning. Sökningar och databaslänkar öppnar',cats:['Skor','Hoodies','T-shirts','Jackor','Byxor','Mössor','Klockor','Elektronik','Strumpor','Accessoarer']}
  };

  function page(){
    const p=location.pathname;
    if(p.includes('product-categories')) return 'categories';
    if(p.includes('product-details')) return 'details';
    if(p.includes('seo-articles')) return 'articles';
    if(p.includes('order-qc-shipping')) return 'guide';
    if(p.includes('faq')) return 'faq';
    return 'home';
  }
  function internal(path,lang){return lang==='en'?path:`${path}?lang=${encodeURIComponent(lang)}`}
  function searchForm(l){return `<form class="searchbox native-search"><input required aria-label="${l.search}" placeholder="${l.search}"><button class="button">${l.go}</button></form>`}
  function outbound(name,l){return `${root}/search.html?keywords=${encodeURIComponent(name)}&channelid=2`}
  function cards(d,l,count=3){return `<div class="cards">${Array.from({length:count},(_,i)=>`<article class="card"><small>PIKOBUY / ${String(i+1).padStart(2,'0')}</small><h2>${d.heads[i%d.heads.length]}</h2><p>${d.texts[i%d.texts.length]}</p><a class="button" href="${root}/">${l.browse}</a></article>`).join('')}</div>`}
  function categoryCards(d,l){return `<div class="cards">${l.cats.map((name,i)=>`<article class="card"><small>${l.tag}</small><h2>${name}</h2><p>${d.texts[i%d.texts.length]}</p><a class="button" href="${outbound(name,l)}">${l.category}</a></article>`).join('')}</div>`}
  function guide(d,l,s,lang){return `<section class="shell hero"><div class="eyebrow">${l.guide}</div><h1>${d.seo}</h1><p class="lead">${s.intro}</p></section><article class="shell section article-page">${Array.from({length:10},(_,i)=>`<h2>${d.heads[i%d.heads.length]}</h2><p>${d.texts[i%d.texts.length]}</p><p>${s.extra}</p><p>${d.texts[i%d.texts.length]}</p><p>${s.check}</p><p>${d.texts[i%d.texts.length]}</p>`).join('')}<h2>${s.bottom}</h2><p>${s.bottomText}</p><div class="source-note">${l.source}</div><a class="button" href="${root}/">${l.browse}</a></article>`}
  function faq(d,l,s,lang){const qs=[...d.qs,...d.qs.slice(0,3)],as=[...d.as,...d.as.slice(0,3)];return `<section class="shell hero"><div class="eyebrow">${l.faqTag}</div><h1>${d.faq}</h1><p class="lead">${s.intro}</p></section><section class="shell section">${qs.map((q,i)=>`<div class="faq"><h2>${q}</h2><p>${as[i]} ${s.faq}</p></div>`).join('')}<div class="note"><h2>${s.bottom}</h2><p>${s.bottomText}</p><a class="button" href="${internal('/pikobuy-order-qc-shipping-guide.html',lang)}">${l.more}</a></div></section>`}
  function standard(which,d,l,s){
    if(which==='categories') return `<section class="shell hero"><div class="eyebrow">${l.nav[1]}</div><h1>${d.heads[0]}</h1><p class="lead">${s.intro}</p></section><section class="shell section">${categoryCards(d,l)}</section>`;
    if(which==='details') return `<section class="shell hero"><div class="eyebrow">${l.nav[2]}</div><h1>${l.details}</h1><p class="lead">${s.intro}</p></section><section class="shell section">${cards(d,l,3)}<div class="note"><h2>${s.bottom}</h2><p>${s.bottomText}</p><a class="button" href="${root}/">${l.browse}</a></div></section>`;
    if(which==='articles') return `<section class="shell hero"><div class="eyebrow">${l.nav[3]}</div><h1>${d.seo}</h1><p class="lead">${s.intro}</p></section><section class="shell section">${cards(d,l,3)}</section>`;
    return `<section class="shell hero"><div class="eyebrow">${l.research}</div><h1>${d.seo}</h1><p class="lead">${s.intro}</p>${searchForm(l)}</section><section class="shell proof"><div><b>9</b><span>${d.heads[0]}</span></div><div><b>10</b><span>${d.heads[1]}</span></div><div><b>1</b><span>${d.heads[2]}</span></div><div><b>0</b><span>${d.heads[3]}</span></div></section><section class="shell homecard"><div class="homeicon">⌂</div><div><div class="kicker">${l.home}</div><h2>${d.heads[0]}</h2><p>${d.texts[0]}</p></div><a href="${internal('/',l.code)}">${l.nav[0]}</a></section><section class="band"><div class="shell"><div class="kicker">${l.research}</div><h2>${d.heads[1]}</h2><div class="steps">${d.heads.slice(0,3).map((heading,i)=>`<div class="step"><div class="num">0${i+1}</div><h3>${heading}</h3><p>${d.texts[i]}</p></div>`).join('')}</div></div></section><section class="shell section"><div class="sectionhead"><div><div class="kicker">${l.nav[1]}</div><h2>${d.heads[2]}</h2></div><p>${d.texts[2]}</p></div>${categoryCards(d,l)}</section><section class="shell section"><div class="market"><div><div class="kicker">${l.research}</div><h3>${d.heads[3]}</h3></div><div><p>${d.texts[3]}</p></div></div></section><section class="shell section"><div class="sectionhead"><div><div class="kicker">${l.nav[3]}</div><h2>${d.seo}</h2></div><p>${d.texts[4]}</p></div>${cards(d,l,3)}</section><section class="shell section"><div class="sectionhead"><div><div class="kicker">FAQ</div><h2>${d.faq}</h2></div></div><div class="faq">${d.qs.slice(0,4).map((q,i)=>`<div><b>${q}</b><p>${d.as[i]}</p></div>`).join('')}</div></section><section class="shell cta"><div class="kicker">${d.heads[5]}</div><h2>${s.bottom}</h2><a class="button" href="${root}/">${l.browse}</a></section>`;
  }
  function renderHome(target,originalMain,d,l,s){
    target.innerHTML=originalMain;
    const words={
      eyebrow:l.research,lead:s.intro,openDb:l.browse,searchTitle:d.heads[0],searchText:d.texts[0],searchPlaceholder:l.search,searchButton:l.go,
      proofLanguages:d.heads[0],proofCategories:d.heads[1],proofDestination:d.heads[2],proofCheckout:d.heads[3],
      homeCardKicker:l.home,homeCardTitle:d.heads[0],homeCardText:d.texts[0],homeCardButton:l.nav[0],
      methodKicker:l.research,methodTitle:d.heads[1],step1Title:d.heads[0],step1Text:d.texts[0],step2Title:d.heads[1],step2Text:d.texts[1],step3Title:d.heads[2],step3Text:d.texts[2],
      categoryKicker:l.nav[1],categoryTitle:d.heads[2],categoryText:d.texts[2],marketKicker:l.research,marketTitle:d.heads[3],marketText:d.texts[3],
      articleKicker:l.nav[3],articleTitle:d.seo,articleText:d.texts[4],a1Title:d.heads[0],a1Text:d.texts[0],a2Title:d.heads[1],a2Text:d.texts[1],a3Title:d.heads[2],a3Text:d.texts[2],
      faqTitle:d.faq,f1q:d.qs[0],f1a:d.as[0],f2q:d.qs[1],f2a:d.as[1],f3q:d.qs[2],f3a:d.as[2],f4q:d.qs[3],f4a:d.as[3],ctaKicker:d.heads[5],ctaTitle:s.bottom,foot:l.footer
    };
    Object.entries(words).forEach(([key,value])=>target.querySelectorAll(`[data-t="${key}"]`).forEach(node=>node.textContent=value));
    target.querySelectorAll('[data-t-html="hero"]').forEach(node=>node.textContent=d.seo);
    target.querySelectorAll('[data-ph="searchPlaceholder"]').forEach(node=>node.placeholder=l.search);
    const grid=target.querySelector('#cards');
    if(grid)grid.innerHTML=l.cats.map((name,i)=>`<article class="card"><div><small>${l.tag}</small><b>${name}</b></div><a href="${outbound(name,l)}">${l.category}</a></article>`).join('');
    const homeCard=target.querySelector('.homecard a'); if(homeCard)homeCard.href=internal('/',l.code);
  }
  function updateNav(l,lang){
    const nav=document.querySelectorAll('.links a,.navlinks a');
    const paths=['/','/product-categories.html','/product-details.html','/seo-articles.html','/faq.html'];
    nav.forEach((link,i)=>{if(l.nav[i]){link.textContent=l.nav[i];link.href=internal(paths[i],lang)}});
    const brand=document.querySelector('.brand'); if(brand) brand.href=internal('/',lang);
    const select=document.querySelector('.lang');
    if(select){select.value=localStorage.getItem('pikopro-language')||'en';}
  }
  function bindSearch(){document.querySelectorAll('.native-search,#search').forEach(form=>form.addEventListener('submit',event=>{event.preventDefault();const input=form.querySelector('input');const value=input?.value.trim();if(value) location.href=`${root}/search.html?keywords=${encodeURIComponent(value)}&channelid=2`;}))}
  function setup(){
    if(typeof window.setLang==='function') window.setLang('en');
    const original={title:document.title,main:document.querySelector('main')?.innerHTML,footer:document.querySelector('footer')?.innerHTML,nav:[...document.querySelectorAll('.links a,.navlinks a')].map(x=>({text:x.textContent,href:x.getAttribute('href')}),),brand:document.querySelector('.brand')?.getAttribute('href')};
    const select=document.querySelector('.lang'); if(!select) return;
    [...select.options].forEach(option=>{option.value=(option.value||option.textContent).trim().toLowerCase()});
    function render(lang){
      const locale=labels[lang], d=window.PBEditorial?.[lang], s=window.PBEditorialSupport?.[lang];
      localStorage.setItem('pikopro-language',lang);
      if(!locale||!d||!s){document.documentElement.lang='en';document.title=original.title;document.querySelector('main').innerHTML=original.main;const footer=document.querySelector('footer');if(footer)footer.innerHTML=original.footer;[...document.querySelectorAll('.links a,.navlinks a')].forEach((x,i)=>{x.textContent=original.nav[i].text;x.setAttribute('href',original.nav[i].href)});const brand=document.querySelector('.brand');if(brand)brand.setAttribute('href',original.brand);bindSearch();return;}
      const local={...locale,code:lang};
      document.documentElement.lang=lang;document.title=`PikoBuy · ${locale.articles}`;updateNav(local,lang);
      const target=document.querySelector('main'),current=page();
      if(current==='home')renderHome(target,original.main,d,local,s);else target.innerHTML=current==='guide'?guide(d,local,s,lang):current==='faq'?faq(d,local,s,lang):standard(current,d,local,s);
      const footer=document.querySelector('footer');if(footer)footer.innerHTML=`<div class="shell"><strong>PIKOPRO</strong> · ${local.footer} <a href="${root}/">FindSpreadsheet</a>.</div>`;
      bindSearch();
    }
    select.addEventListener('change',()=>{const lang=select.value;const url=new URL(location.href);if(lang==='en')url.searchParams.delete('lang');else url.searchParams.set('lang',lang);history.replaceState(null,'',url);render(lang)});
    const fromUrl=new URLSearchParams(location.search).get('lang');
    render((fromUrl||localStorage.getItem('pikopro-language')||localStorage.getItem('pikopro-lang')||'en').toLowerCase());
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup,{once:true});else setup();
})();
