(() => {
  const mobile=document.createElement('link');mobile.rel='stylesheet';mobile.href='mobile.css?v=1';document.head.appendChild(mobile);
  const labels = {
    en:{home:'Home',categories:'Categories',products:'Product Details',seo:'SEO Articles',faq:'FAQ',new:'NEW',language:'Language'},
    de:{home:'Startseite',categories:'Kategorien',products:'Produktdetails',seo:'SEO-Artikel',faq:'FAQ',new:'NEU',language:'Sprache'},
    fr:{home:'Accueil',categories:'Catégories',products:'Détails produit',seo:'Articles SEO',faq:'FAQ',new:'NOUVEAU',language:'Langue'},
    es:{home:'Inicio',categories:'Categorías',products:'Detalles',seo:'Artículos SEO',faq:'FAQ',new:'NUEVO',language:'Idioma'},
    it:{home:'Home',categories:'Categorie',products:'Dettagli',seo:'Articoli SEO',faq:'FAQ',new:'NUOVO',language:'Lingua'},
    pt:{home:'Início',categories:'Categorias',products:'Detalhes',seo:'Artigos SEO',faq:'FAQ',new:'NOVO',language:'Idioma'},
    nl:{home:'Home',categories:'Categorieën',products:'Productdetails',seo:'SEO-artikelen',faq:'FAQ',new:'NIEUW',language:'Taal'},
    pl:{home:'Start',categories:'Kategorie',products:'Szczegóły',seo:'Artykuły SEO',faq:'FAQ',new:'NOWE',language:'Język'}
  };
  const names={en:'English',de:'Deutsch',fr:'Français',es:'Español',it:'Italiano',pt:'Português',nl:'Nederlands',pl:'Polski'};
  const head={
    products:{en:['PRODUCT<br>DETAILS.','Sixteen distinct products from ten FindSpreadsheet categories. Each card opens that exact product.'],de:['PRODUKT<br>DETAILS.','Sechzehn unterschiedliche Produkte aus zehn FindSpreadsheet-Kategorien. Jede Karte öffnet genau dieses Produkt.'],fr:['DÉTAILS<br>PRODUIT.','Seize produits distincts issus de dix catégories FindSpreadsheet. Chaque carte ouvre le produit exact.'],es:['DETALLES<br>DEL PRODUCTO.','Dieciséis productos distintos de diez categorías de FindSpreadsheet. Cada tarjeta abre ese producto.'],it:['DETTAGLI<br>PRODOTTO.','Sedici prodotti distinti da dieci categorie FindSpreadsheet. Ogni scheda apre il prodotto esatto.'],pt:['DETALHES<br>DO PRODUTO.','Dezasseis produtos distintos de dez categorias FindSpreadsheet. Cada cartão abre o produto exato.'],nl:['PRODUCT<br>DETAILS.','Zestien verschillende producten uit tien FindSpreadsheet-categorieën. Elke kaart opent precies dat product.'],pl:['SZCZEGÓŁY<br>PRODUKTU.','Szesnaście różnych produktów z dziesięciu kategorii FindSpreadsheet. Każda karta otwiera dokładnie ten produkt.']}
  };
  const nav=document.querySelector('.site-nav');
  if(!nav)return;
  let chooser=nav.querySelector('.language');
  if(!chooser){
    chooser=document.createElement('div'); chooser.className='language'; chooser.id='language';
    chooser.innerHTML='<button type="button" aria-label="Choose language"><span class="language-word">Language</span> · <span id="code">EN</span></button><div class="menu" id="menu"></div>';
    nav.appendChild(chooser);
  }
  const button=chooser.querySelector('button'); const menu=chooser.querySelector('.menu'); const isHome=Boolean(document.querySelector('.mast'));
  if(!isHome){button.onclick=()=>chooser.classList.toggle('open');menu.innerHTML=Object.entries(names).map(([key,name])=>`<button type="button" data-lang="${key}">${name}</button>`).join('');}
  else{[...menu.querySelectorAll('button')].forEach((item,index)=>{item.dataset.lang=Object.keys(names)[index];item.removeAttribute('onclick');item.onclick=null;});}
  const render=(lang)=>{
    const d=labels[lang]||labels.en; document.documentElement.lang=lang;
    nav.querySelectorAll('a').forEach(a=>{const key=({"index.html":"home","categories.html":"categories","products.html":"products","seo.html":"seo","faq.html":"faq","new.html":"new"})[a.getAttribute('href')]; if(key)a.textContent=d[key];});
    const word=chooser.querySelector('.language-word'); if(word)word.textContent=d.language;
    chooser.querySelector('#code').textContent=lang.toUpperCase(); chooser.classList.remove('open');
    const page=document.body.dataset.page; if(page&&head[page]){const copy=head[page][lang]||head[page].en; const h=document.querySelector('[data-page-title]'); const p=document.querySelector('[data-page-deck]'); if(h)h.innerHTML=copy[0]; if(p)p.textContent=copy[1];}
    if (typeof window.render === 'function') window.render(lang);
    localStorage.setItem('joyagooLanguage',lang);
    document.dispatchEvent(new CustomEvent('joyagoo:language',{detail:{lang}}));
  };
  menu.onclick=(event)=>{const b=event.target.closest('[data-lang]');if(b)render(b.dataset.lang)};
  const remembered=localStorage.getItem('joyagooLanguage')||'en';
  render(remembered);
  if(document.querySelector('.mast')){const theme=document.createElement('style');theme.textContent=':root{--paper:#f7f7ef!important;--ink:#477b70!important;--red:#719989!important;--rule:#c9ddd4!important}.index .section-label,.index-list a span{color:#cfe4d8!important}.index-list a:hover,.hero-action:hover span{color:#dcece1!important}.hero-action{background:#477b70!important}';document.head.appendChild(theme);}
  if(document.querySelector('.outro')){const homeReading=document.createElement('script');homeReading.src='home-reading.js';document.body.appendChild(homeReading);}
  const localeContent=document.createElement('script');localeContent.src='locale-content.js?v=13';document.body.appendChild(localeContent);
})();
