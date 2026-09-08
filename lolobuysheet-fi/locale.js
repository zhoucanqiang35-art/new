/* Full-page locale controller.  It deliberately never uses an outside translation service. */
(function () {
  const locales = {
    en:{name:'EN · English',nav:['Home','Product Categories','Product Details','SEO Articles','FAQ'],footer:'Independent research preview. Not affiliated with LoloBuy.'},
    de:{name:'DE · Deutsch',nav:['Startseite','Produktkategorien','Produktdetails','SEO-Artikel','FAQ'],footer:'Unabhängige Recherchevorschau. Nicht mit LoloBuy verbunden.'},
    fr:{name:'FR · Français',nav:['Accueil','Catégories de produits','Détails du produit','Articles SEO','FAQ'],footer:'Aperçu de recherche indépendant. Non affilié à LoloBuy.'},
    es:{name:'ES · Español',nav:['Inicio','Categorías de productos','Detalles del producto','Artículos SEO','Preguntas frecuentes'],footer:'Vista previa de investigación independiente. Sin afiliación con LoloBuy.'},
    it:{name:'IT · Italiano',nav:['Home','Categorie di prodotti','Dettagli del prodotto','Articoli SEO','FAQ'],footer:'Anteprima di ricerca indipendente. Non affiliata a LoloBuy.'},
    pt:{name:'PT · Português',nav:['Início','Categorias de produtos','Detalhes do produto','Artigos SEO','Perguntas frequentes'],footer:'Pré-visualização de pesquisa independente. Sem afiliação à LoloBuy.'},
    nl:{name:'NL · Nederlands',nav:['Home','Productcategorieën','Productgegevens','SEO-artikelen','Veelgestelde vragen'],footer:'Onafhankelijke onderzoeksvoorbeeld. Niet verbonden aan LoloBuy.'},
    pl:{name:'PL · Polski',nav:['Strona główna','Kategorie produktów','Szczegóły produktu','Artykuły SEO','FAQ'],footer:'Niezależny podgląd badawczy. Brak powiązania z LoloBuy.'},
    sv:{name:'SV · Svenska',nav:['Hem','Produktkategorier','Produktdetaljer','SEO-artiklar','Vanliga frågor'],footer:'Oberoende forskningsförhandsvisning. Inte ansluten till LoloBuy.'}
  };
  const label = {en:'Language',de:'Sprache',fr:'Langue',es:'Idioma',it:'Lingua',pt:'Idioma',nl:'Taal',pl:'Język',sv:'Språk'};
  function current(){ return new URLSearchParams(location.search).get('lang') || localStorage.getItem('lsfi-lang') || 'en'; }
  function escapeHtml(value){return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));}
  function renderLocalizedArticle(lang){
    if(lang==='en' || !location.pathname.includes('/seo-articles/') || location.pathname==='/seo-articles/') return;
    const corpus=window.LoloEditorial;
    const article=corpus&&corpus.localizedArticles&&corpus.localizedArticles[lang];
    if(!article) return;
    const continuations=corpus.localizedArticleContinuations&&corpus.localizedArticleContinuations[lang]||[];
    const additions=corpus.localizedArticleDetailAdditions&&corpus.localizedArticleDetailAdditions[lang]||[];
    const main=document.querySelector('main.prose'); if(!main) return;
    const sections=article.sections.map((section,index)=>{
      const paragraphs=[...section.paragraphs,continuations[index],additions[index]].filter(Boolean);
      return '<h2>'+escapeHtml(section.heading)+'</h2>'+paragraphs.map(p=>'<p>'+escapeHtml(p)+'</p>').join('');
    }).join('');
    main.innerHTML='<p class="crumb">'+escapeHtml(article.reviewed)+'</p><h1>'+escapeHtml(article.title)+'</h1><p class="intro">'+escapeHtml(article.intro)+'</p>'+sections+'<div class="panel"><h2>FindSpreadsheet</h2><p>Independent product research guide.</p><a class="button" href="https://findspreadsheet.com/">Open FindSpreadsheet</a></div>';
  }
  function wire(lang){
    const set = locales[lang] || locales.en;
    document.documentElement.lang=lang;
    document.querySelectorAll('.locale').forEach(select=>{
      select.innerHTML=Object.entries(locales).map(([code,v])=>'<option value="'+code+'">'+v.name+'</option>').join('');
      select.value=lang; select.setAttribute('aria-label',label[lang]);
      select.onchange=()=>{const u=new URL(location.href);u.searchParams.set('lang',select.value);localStorage.setItem('lsfi-lang',select.value);location.href=u.toString();};
    });
    document.querySelectorAll('.navlinks').forEach(nav=>nav.querySelectorAll('a').forEach((a,i)=>a.textContent=set.nav[i]));
    document.querySelectorAll('a[href^="/"]').forEach(a=>{ const u=new URL(a.getAttribute('href'),location.origin); u.searchParams.set('lang',lang); a.href=u.pathname+u.search+u.hash; });
    document.querySelectorAll('[data-locale-footer]').forEach(el=>el.textContent=set.footer);
    renderLocalizedArticle(lang);
  }
  window.LoloLocale={current,wire,locales};
  document.addEventListener('DOMContentLoaded',()=>wire(current()));
}());
