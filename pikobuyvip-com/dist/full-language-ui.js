(() => {
  const languages = new Set(['en','de','fr','es','it','pt','nl','pl','sv']);
  const params = new URLSearchParams(location.search);
  const route = location.pathname.split('/').filter(Boolean)[0];
  let lang = languages.has(params.get('lang')) ? params.get('lang') : (languages.has(route) ? route : 'en');

  const ui = {
    de:{nav:['Startseite','Kategorien','QC-Leitfaden','Versand','SEO-Artikel','FAQ'],button:'Kategorie ansehen →',search:'In FindSpreadsheet suchen',db:'FindSpreadsheet öffnen',cats:[['Schuhe','Hochwertige Schuhkollektionen und aktuelle Neuheiten.'],['Hoodies/Pullover','Bequeme Hoodies und stilvolle Pullover für jede Saison.'],['T-Shirts','Modische Print-Shirts und unverzichtbare Basics.'],['Jacken','Oberbekleidung von Bomberjacken bis Parkas.'],['Hosen/Shorts','Von Cargohosen bis Sportshorts.'],['Kopfbedeckung','Caps, Mützen und Hüte für den Look.'],['Sets','Abgestimmte Outfits für einen mühelosen Stil.'],['Unterwäsche','Komfort-Basics und hochwertige Unterwäsche.'],['Trikots','Sporttrikots und Performance-Bekleidung.'],['Accessoires','Taschen, Schmuck und die passenden Details.']]},
    fr:{nav:['Accueil','Catégories','Guide QC','Livraison','Articles SEO','FAQ'],button:'Explorer la catégorie →',search:'Rechercher sur FindSpreadsheet',db:'Ouvrir FindSpreadsheet',cats:[['Chaussures','Collections de chaussures et dernières sorties.'],['Sweats à capuche/Pulls','Sweats confortables et pulls élégants pour chaque saison.'],['T-shirts','T-shirts graphiques tendance et essentiels.'],['Vestes','Vêtements d’extérieur, des bombers aux parkas.'],['Pantalons/Shorts','Des pantalons cargo aux shorts de sport.'],['Couvre-chefs','Casquettes, bonnets et chapeaux pour compléter le look.'],['Ensembles','Tenues coordonnées pour un style naturel.'],['Sous-vêtements','Essentiels confortables et sous-vêtements de qualité.'],['Maillots','Maillots de sport et vêtements de performance.'],['Accessoires','Sacs, bijoux et détails de finition.']]},
    es:{nav:['Inicio','Categorías','Guía QC','Envío','Artículos SEO','FAQ'],button:'Explorar categoría →',search:'Buscar en FindSpreadsheet',db:'Abrir FindSpreadsheet',cats:[['Zapatos','Colecciones de calzado y últimos lanzamientos.'],['Sudaderas/Suéteres','Sudaderas cómodas y suéteres elegantes para cada temporada.'],['Camisetas','Camisetas gráficas modernas y básicos esenciales.'],['Chaquetas','Prendas exteriores, de bombers a parkas.'],['Pantalones/Shorts','De pantalones cargo a shorts deportivos.'],['Sombreros','Gorras, gorros y sombreros para completar el look.'],['Conjuntos','Conjuntos coordinados para un estilo sencillo.'],['Ropa interior','Básicos cómodos y ropa interior de calidad.'],['Camisetas deportivas','Camisetas deportivas y ropa de rendimiento.'],['Accesorios','Bolsos, joyas y detalles de acabado.']]},
    it:{nav:['Home','Categorie','Guida QC','Spedizione','Articoli SEO','FAQ'],button:'Esplora categoria →',search:'Cerca su FindSpreadsheet',db:'Apri FindSpreadsheet',cats:[['Scarpe','Collezioni di calzature e novità recenti.'],['Felpe/Maglioni','Felpe comode e maglioni eleganti per ogni stagione.'],['T-shirt','T-shirt grafiche di tendenza e capi essenziali.'],['Giacche','Capispalla dai bomber ai parka.'],['Pantaloni/Shorts','Dai cargo agli shorts sportivi.'],['Copricapo','Cappellini, berretti e cappelli per completare il look.'],['Completi','Outfit coordinati per uno stile naturale.'],['Intimo','Capi essenziali comodi e intimo di qualità.'],['Maglie sportive','Maglie sportive e abbigliamento tecnico.'],['Accessori','Borse, gioielli e dettagli finali.']]},
    pt:{nav:['Início','Categorias','Guia QC','Envio','Artigos SEO','FAQ'],button:'Explorar categoria →',search:'Pesquisar no FindSpreadsheet',db:'Abrir FindSpreadsheet',cats:[['Calçado','Coleções de calçado e lançamentos recentes.'],['Hoodies/Camisolas','Hoodies confortáveis e camisolas elegantes para cada estação.'],['T-shirts','T-shirts gráficas modernas e essenciais.'],['Casacos','Roupa exterior, de bombers a parkas.'],['Calças/Calções','De calças cargo a calções desportivos.'],['Chapelaria','Bonés, gorros e chapéus para completar o visual.'],['Conjuntos','Conjuntos coordenados para um estilo simples.'],['Roupa interior','Essenciais confortáveis e roupa interior de qualidade.'],['Camisolas desportivas','Camisolas desportivas e roupa de desempenho.'],['Acessórios','Malas, joias e detalhes de acabamento.']]},
    nl:{nav:['Home','Categorieën','QC-gids','Verzending','SEO-artikelen','FAQ'],button:'Categorie bekijken →',search:'Zoeken in FindSpreadsheet',db:'FindSpreadsheet openen',cats:[['Schoenen','Schoenencollecties en de nieuwste uitgaven.'],['Hoodies/Truien','Comfortabele hoodies en stijlvolle truien voor elk seizoen.'],['T-shirts','Trendy grafische T-shirts en essentiële basics.'],['Jassen','Bovenkleding van bombers tot parka’s.'],['Broeken/Shorts','Van cargobroeken tot sportshorts.'],['Hoofddeksels','Petjes, mutsen en hoeden voor de complete look.'],['Sets','Gecoördineerde outfits voor een moeiteloze stijl.'],['Ondergoed','Comfortabele essentials en kwalitatief ondergoed.'],['Sportshirts','Sportshirts en performancekleding.'],['Accessoires','Tassen, sieraden en afwerkende details.']]},
    pl:{nav:['Strona główna','Kategorie','Przewodnik QC','Wysyłka','Artykuły SEO','FAQ'],button:'Zobacz kategorię →',search:'Szukaj w FindSpreadsheet',db:'Otwórz FindSpreadsheet',cats:[['Buty','Kolekcje obuwia i najnowsze premiery.'],['Bluzy/Swetry','Wygodne bluzy i stylowe swetry na każdą porę roku.'],['T-shirty','Modne koszulki z nadrukiem i podstawowe fasony.'],['Kurtki','Odzież wierzchnia od bomberów po parki.'],['Spodnie/Szorty','Od spodni cargo po sportowe szorty.'],['Nakrycia głowy','Czapki z daszkiem, czapki i kapelusze dopełniające styl.'],['Zestawy','Dopasowane zestawy dla swobodnego stylu.'],['Bielizna','Wygodne podstawy i wysokiej jakości bielizna.'],['Koszulki sportowe','Koszulki sportowe i odzież treningowa.'],['Akcesoria','Torby, biżuteria i detale wykończenia.']]},
    sv:{nav:['Hem','Kategorier','QC-guide','Frakt','SEO-artiklar','FAQ'],button:'Utforska kategori →',search:'Sök i FindSpreadsheet',db:'Öppna FindSpreadsheet',cats:[['Skor','Skokollektioner och de senaste lanseringarna.'],['Hoodies/Tröjor','Bekväma hoodies och stilrena tröjor för varje säsong.'],['T-shirts','Trendiga grafiska T-shirts och viktiga basplagg.'],['Jackor','Ytterplagg från bomberjackor till parkas.'],['Byxor/Shorts','Från cargobyxor till sportshorts.'],['Huvudbonader','Kepsar, mössor och hattar som kompletterar looken.'],['Set','Matchade outfits för en enkel stil.'],['Underkläder','Bekväma basplagg och underkläder av hög kvalitet.'],['Sporttröjor','Sporttröjor och funktionskläder.'],['Accessoarer','Väskor, smycken och sista detaljer.']]}
  };
  ui.en={nav:['Home','Categories','QC guide','Shipping','SEO Articles','FAQ'],button:'Explore →',search:'Search FindSpreadsheet',db:'Open FindSpreadsheet',cats:[['Shoes','Premium footwear collections and latest releases.'],['Hoodies/Sweaters','Cozy hoodies and stylish sweaters for every season.'],['T-Shirts','Trendy graphic tees and essential basics.'],['Jackets','Outerwear from bombers to parkas for all weather.'],['Pants/Shorts','Bottoms from cargo pants to athletic shorts.'],['Headwear','Caps, beanies and hats to complete your look.'],['Sets','Coordinated outfit sets for effortless style.'],['Underwear/Underpants','Comfort essentials and premium undergarments.'],['Jersey','Sports jerseys and athletic performance wear.'],['Accessories','Bags, jewelry and finishing touches for any outfit.']]};
  const categoryLinks=[
    'https://findspreadsheet.com/shoes/','https://findspreadsheet.com/hoodies-sweaters/','https://findspreadsheet.com/t-shirts/','https://findspreadsheet.com/jackets/','https://findspreadsheet.com/pants-shorts/','https://findspreadsheet.com/headwear/','https://findspreadsheet.com/ShortSets/','https://findspreadsheet.com/other-stuff/','https://findspreadsheet.com/jersey/','https://findspreadsheet.com/accessories/'
  ];
  const navPages=['home','categories','qc','shipping','articles','faq'];
  function applyLanguage(next){
    const t=ui[next]||ui.en;
    lang=next;
    const beforeY=window.scrollY;
    document.documentElement.lang=next;
    document.querySelectorAll('.links a').forEach((a,i)=>{
      if(t.nav[i]) a.textContent=t.nav[i];
      const url=new URL(location.href);
      if(next==='en') url.searchParams.delete('lang'); else url.searchParams.set('lang',next);
      const page=navPages[i]||'home';
      if(page==='home') url.searchParams.delete('page'); else url.searchParams.set('page',page);
      a.href=url.pathname+(url.search||'');
    });
    document.querySelectorAll('[data-i="searchBtn"]').forEach(x=>x.textContent=t.search);
    document.querySelectorAll('[data-i="db"]').forEach(x=>x.textContent=t.db);
    document.querySelectorAll('[data-p="search"]').forEach(x=>x.placeholder=t.search);
    const cards=t.cats.map(([name,detail],i)=>`<a class="category" href="${categoryLinks[i]}" aria-label="${t.button}: ${name}"><div class="category-icon" aria-hidden="true">${['◉','⌂','✦','▣','═','◌','≋','□','◉','⌂'][i]}</div><div class="category-copy"><h3>${name}</h3><p>${detail}</p></div><span class="category-button">${t.button}</span></a>`).join('');
    document.querySelectorAll('#categories,#categories2').forEach(node=>{node.innerHTML=cards;});
    const url=new URL(location.href);
    if(next==='en') url.searchParams.delete('lang'); else url.searchParams.set('lang',next);
    history.replaceState(null,'',url.pathname+(url.search||''));
    window.dispatchEvent(new CustomEvent('pikobuyvip:language',{detail:{lang:next}}));
    requestAnimationFrame(()=>window.scrollTo({top:beforeY,left:window.scrollX,behavior:'instant'}));
  }
  const previousSelect=document.querySelector('#lang');
  const select=previousSelect&&previousSelect.cloneNode(true);
  if(select){
    previousSelect.replaceWith(select);
    select.value=lang;
    select.addEventListener('change',event=>applyLanguage(event.target.value));
  }
  applyLanguage(lang);
})();
