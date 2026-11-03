(()=>{
  const paths=['/seo-articles/usfans-spreadsheet-guide/','/seo-articles/usfans-tracking-guide/'];
  const labels={en:['Read guide','Related guides','Browse FindSpreadsheet'],de:['Leitfaden lesen','Weitere Leitfäden','FindSpreadsheet durchsuchen'],fr:['Lire le guide','Guides associés','Explorer FindSpreadsheet'],es:['Leer la guía','Guías relacionadas','Explorar FindSpreadsheet'],it:['Leggi la guida','Guide correlate','Esplora FindSpreadsheet'],pt:['Ler o guia','Guias relacionados','Explorar FindSpreadsheet'],nl:['Lees de gids','Verwante gidsen','Bekijk FindSpreadsheet'],pl:['Przeczytaj poradnik','Powiązane poradniki','Przeglądaj FindSpreadsheet'],sv:['Läs guiden','Relaterade guider','Utforska FindSpreadsheet']};
  const pageLabels={en:['Independent research guide · November 2026','QC and shipping','Product categories'],de:['Unabhängiger Rechercheleitfaden · November 2026','QC und Versand','Produktkategorien'],fr:['Guide de recherche indépendant · novembre 2026','QC et expédition','Catégories de produits'],es:['Guía de investigación independiente · noviembre de 2026','QC y envío','Categorías de productos'],it:['Guida indipendente · novembre 2026','QC e spedizione','Categorie di prodotti'],pt:['Guia de pesquisa independente · novembro de 2026','QC e envio','Categorias de produtos'],nl:['Onafhankelijke onderzoeksgids · november 2026','QC en verzending','Productcategorieën'],pl:['Niezależny poradnik · listopad 2026','QC i wysyłka','Kategorie produktów'],sv:['Oberoende guide · november 2026','QC och frakt','Produktkategorier']};
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const selected=()=>{let lang=new URLSearchParams(location.search).get('lang')||localStorage.getItem('usfans-guide-language')||'en';return window.usfansGuides[lang]?lang:'en'};
  function link(i,lang){return paths[i]+(lang==='en'?'':'?lang='+encodeURIComponent(lang))}
  function run(){
    const lang=selected(),data=window.usfansGuides[lang],copy=labels[lang];
    const current=paths.indexOf(location.pathname);
    if(current!==-1){
      const body=document.getElementById('guide-body');
      if(body&&lang!=='en')body.innerHTML=data[current].map(p=>p.startsWith('## ')?'<h2>'+esc(p.slice(3))+'</h2>':p.startsWith('# ')?'<h1 class="title">'+esc(p.slice(2))+'</h1>':'<p>'+esc(p)+'</p>').join('');
      document.documentElement.lang=lang;
      document.title=data[current][0].slice(2);
      document.querySelector('main .eyebrow').textContent=pageLabels[lang][0];
      document.querySelector('.button').textContent=copy[2];
      const related=document.querySelector('.guide-related');
      if(related){related.innerHTML='<a href="/seo-articles/'+(lang==='en'?'':'?lang='+lang)+'">'+esc(copy[1])+'</a> · <a href="/seo-articles/usfans-qc-parcel-guide/'+(lang==='en'?'':'?lang='+lang)+'">'+esc(pageLabels[lang][1])+'</a> · <a href="/categories/'+(lang==='en'?'':'?lang='+lang)+'">'+esc(pageLabels[lang][2])+'</a>';}
    }
    if(location.pathname==='/seo-articles/'){
      const grid=document.querySelector('main .grid');
      if(grid)paths.forEach((p,i)=>{let a=grid.querySelector('[data-new-guide="'+i+'"]');if(!a){a=document.createElement('a');a.className='card';a.dataset.newGuide=i;grid.appendChild(a)} a.href=link(i,lang);a.innerHTML='<div class="tag">'+esc(copy[0])+'</div><h2>'+esc(data[i][0].slice(2))+'</h2><p>'+esc(data[i][1].split(/(?<=[.!?])\s/)[0])+'</p>';});
    }
    if(location.pathname==='/'||location.pathname==='/seo-articles/usfans-qc-parcel-guide/'){
      const host=location.pathname==='/'?document.querySelector('#articles .article-grid'):document.querySelector('main.article');
      if(host){let box=document.getElementById('new-guide-links');if(!box){box=document.createElement('p');box.id='new-guide-links';box.style.cssText='line-height:1.7;margin:22px 0';if(location.pathname==='/')host.after(box);else host.appendChild(box)}box.innerHTML='<strong>'+esc(copy[1])+':</strong> '+paths.map((p,i)=>'<a style="color:inherit" href="'+link(i,lang)+'">'+esc(data[i][0].slice(2))+'</a>').join(' · ');}
    }
  }
  if(document.readyState==='complete')run();else window.addEventListener('load',run,{once:true});
  const switcher=document.querySelector('.site-language');
  if(switcher)switcher.addEventListener('change',()=>setTimeout(run,0));
})();
