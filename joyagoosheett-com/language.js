/* Joyagoo Sheet: page-local language switcher */
(()=>{
  const languages={en:'English',de:'Deutsch',fr:'Français',es:'Español',it:'Italiano',pt:'Português',nl:'Nederlands',pl:'Polski'};
  const nav={
    en:['Home','Product categories','Product details','SEO articles','QC','FAQ'],
    de:['Startseite','Produktkategorien','Produktdetails','SEO-Artikel','QC','FAQ'],
    fr:['Accueil','Catégories de produits','Détails des produits','Articles SEO','QC','FAQ'],
    es:['Inicio','Categorías de productos','Detalles de productos','Artículos SEO','QC','Preguntas frecuentes'],
    it:['Home','Categorie di prodotti','Dettagli prodotto','Articoli SEO','CQ','FAQ'],
    pt:['Início','Categorias de produtos','Detalhes dos produtos','Artigos SEO','CQ','FAQ'],
    nl:['Home','Productcategorieën','Productdetails','SEO-artikelen','QC','FAQ'],
    pl:['Strona główna','Kategorie produktów','Szczegóły produktów','Artykuły SEO','QC','FAQ']
  };
  const style=document.createElement('style');
  style.textContent='.nav{gap:8px!important}.nav a{margin:0!important;padding-left:2px!important;padding-right:2px!important}.lang-switch{position:relative;z-index:30;flex:0 0 auto}.lang-trigger{appearance:none;border:1px solid #fff!important;background:#000!important;color:#fff!important;padding:10px 12px;cursor:pointer;font:11px ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.04em;white-space:nowrap}.lang-menu{position:absolute;right:0;top:calc(100% + 8px);display:none;width:154px;padding:5px;background:#000;border:1px solid #fff;box-shadow:0 14px 35px rgba(0,0,0,.45)}.lang-switch.open .lang-menu{display:grid}.lang-menu button{appearance:none;border:0;background:#000;color:#fff;text-align:left;padding:10px;cursor:pointer;font:12px Arial,Helvetica,sans-serif}.lang-menu button:hover,.lang-menu button[aria-current=true]{background:#fff;color:#000}@media(max-width:760px){.nav{gap:6px!important}.lang-trigger{padding:8px 10px}.lang-menu{right:0}}';
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
  function splitForTranslation(text){
    const parts=[];let remaining=text;
    while(remaining.length>360){let cut=remaining.lastIndexOf(' ',360);if(cut<120)cut=360;parts.push(remaining.slice(0,cut));remaining=remaining.slice(cut)}
    if(remaining)parts.push(remaining);return parts;
  }
  async function translateText(text,lang){
    const key='jg-i18n-'+lang+'-'+btoa(unescape(encodeURIComponent(text))).slice(0,300);
    const cached=localStorage.getItem(key);if(cached)return cached;
    const translated=[];
    for(const piece of splitForTranslation(text)){const clean=piece.trim();if(!clean){translated.push(piece);continue}
      const url='https://api.mymemory.translated.net/get?q='+encodeURIComponent(clean)+'&langpair=en%7C'+encodeURIComponent(lang);
      const response=await fetch(url,{headers:{Accept:'application/json'}});if(!response.ok)throw new Error('translation unavailable');
      const data=await response.json();const value=data?.responseData?.translatedText;if(!value||data?.responseStatus!==200)throw new Error('translation unavailable');
      translated.push(piece.match(/^\s*/)[0]+value);
    }
    const joined=translated.join('');localStorage.setItem(key,joined);return joined;
  }
  async function translatePage(lang){
    const nodes=safeNodes();
    const jobs=nodes.map(async node=>{if(!node.dataset.enText)node.dataset.enText=node.textContent;if(lang==='en'){node.textContent=node.dataset.enText;return}try{node.textContent=await translateText(node.dataset.enText,lang)}catch(e){node.textContent=node.dataset.enText}});
    for(let i=0;i<jobs.length;i+=3)await Promise.all(jobs.slice(i,i+3));
  }
  function setLanguage(lang){
    localStorage.setItem('joyagoo-sheet-language',lang);updateFixed(lang);translatePage(lang);
  }
  makeSwitcher();
  const initial=localStorage.getItem('joyagoo-sheet-language')||'en';updateFixed(initial);if(initial!=='en')translatePage(initial);
})();