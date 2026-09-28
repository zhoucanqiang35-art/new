/* Joyagoo Sheet: page-local language switcher */
(()=>{
  const languages={en:'English',de:'Deutsch',fr:'Français',es:'Español',it:'Italiano',pt:'Português',nl:'Nederlands',pl:'Polski'};
  const nav={
    en:['Home','Product categories','Product details','SEO articles','QC','FAQ'],
    de:['Startseite','Produktkategorien','Produktdetails','SEO-Artikel','QC','FAQ'],
    fr:['Accueil','Catégories de produits','Détails des produits','Articles SEO','CQ','FAQ'],
    es:['Inicio','Categorías de productos','Detalles de productos','Artículos SEO','CC','Preguntas frecuentes'],
    it:['Home','Categorie di prodotti','Dettagli prodotto','Articoli SEO','CQ','FAQ'],
    pt:['Início','Categorias de produtos','Detalhes dos produtos','Artigos SEO','CQ','FAQ'],
    nl:['Home','Productcategorieën','Productdetails','SEO-artikelen','QC','FAQ'],
    pl:['Strona główna','Kategorie produktów','Szczegóły produktów','Artykuły SEO','QC','FAQ']
  };
  const style=document.createElement('style');
  style.textContent='.lang-switch{position:relative;z-index:30;flex:0 0 auto}.lang-trigger{appearance:none;border:1px solid #fff!important;background:#000!important;color:#fff!important;padding:10px 12px;cursor:pointer;font:11px ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.04em;white-space:nowrap}.lang-menu{position:absolute;right:0;top:calc(100% + 8px);display:none;width:154px;padding:5px;background:#000;border:1px solid #fff;box-shadow:0 14px 35px rgba(0,0,0,.45)}.lang-switch.open .lang-menu{display:grid}.lang-menu button{appearance:none;border:0;background:#000;color:#fff;text-align:left;padding:10px;cursor:pointer;font:12px Arial,Helvetica,sans-serif}.lang-menu button:hover,.lang-menu button[aria-current=true]{background:#fff;color:#000}@media(max-width:760px){.lang-trigger{padding:8px 10px}.lang-menu{right:0}}';
  document.head.append(style);
  function makeSwitcher(){
    const old=document.querySelector('.lang,.lang-switch'); if(!old)return;
    const box=document.createElement('div');box.className='lang-switch';
    box.innerHTML='<button class="lang-trigger" type="button" aria-haspopup="true" aria-expanded="false"></button><div class="lang-menu" role="menu">'+Object.entries(languages).map(([code,name])=>'<button type="button" role="menuitem" data-code="'+code+'">'+code.toUpperCase()+' / '+name+'</button>').join('')+'</div>';
    old.replaceWith(box);
    box.querySelector('.lang-trigger').addEventListener('click',()=>{const open=box.classList.toggle('open');box.querySelector('.lang-trigger').setAttribute('aria-expanded',open);});
    box.querySelectorAll('[data-code]').forEach(b=>b.addEventListener('click',()=>{box.classList.remove('open');setLanguage(b.dataset.code);}));
    document.addEventListener('click',e=>{if(!box.contains(e.target))box.classList.remove('open')});
  }
  function safeNodes(){
    return [...document.querySelectorAll('main h1,main h2,main h3,main p,main b,main strong,main .mono,main .eyebrow,main .price,main .open,main .button,main .cta,main .lead,main .note,main li')].filter(el=>!el.closest('.nav,.lang-switch,.brand')&&!el.dataset.noTranslate&&el.textContent.trim());
  }
  function updateFixed(lang){
    document.documentElement.lang=lang;
    document.querySelectorAll('.nav a').forEach((a,i)=>{if(nav[lang]&&nav[lang][i])a.textContent=nav[lang][i]});
    document.querySelectorAll('.lang-trigger').forEach(x=>x.textContent=lang.toUpperCase()+' / '+languages[lang]);
    document.querySelectorAll('.lang-menu [data-code]').forEach(x=>x.setAttribute('aria-current',String(x.dataset.code===lang)));
  }
  async function translateText(text,lang){
    const key='jg-i18n-'+lang+'-'+btoa(unescape(encodeURIComponent(text))).slice(0,300);
    const cached=localStorage.getItem(key);if(cached)return cached;
    const url='https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl='+encodeURIComponent(lang)+'&dt=t&q='+encodeURIComponent(text);
    const response=await fetch(url);if(!response.ok)throw new Error('translation unavailable');
    const data=await response.json();const translated=data[0].map(part=>part[0]).join('');
    localStorage.setItem(key,translated);return translated;
  }
  async function translatePage(lang){
    if(lang==='en'){location.reload();return}
    const nodes=safeNodes();
    for(const node of nodes){if(!node.dataset.enText)node.dataset.enText=node.textContent;try{node.textContent=await translateText(node.dataset.enText,lang)}catch(e){node.textContent=node.dataset.enText}}
  }
  function setLanguage(lang){
    localStorage.setItem('joyagoo-sheet-language',lang);updateFixed(lang);translatePage(lang);
  }
  makeSwitcher();
  const initial=localStorage.getItem('joyagoo-sheet-language')||'en';updateFixed(initial);if(initial!=='en')translatePage(initial);
})();