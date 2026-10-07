const locales=[['en','English'],['de','Deutsch'],['fr','Français'],['es','Español'],['it','Italiano'],['pt','Português'],['nl','Nederlands'],['pl','Polski'],['sv','Svenska']];
const localeCodes=new Set(locales.map(([code])=>code));
const routes={Hoodies:'https://findspreadsheet.com/hoodies-sweaters/',Pants:'https://findspreadsheet.com/pants-shorts/',Hats:'https://findspreadsheet.com/headwear/',Watches:'https://findspreadsheet.com/search.html?channelid=2&keywords=watches',Electronics:'https://findspreadsheet.com/electronics/',Socks:'https://findspreadsheet.com/search.html?channelid=2&keywords=socks',Accessories:'https://findspreadsheet.com/accessories/',Shoes:'https://findspreadsheet.com/shoes/',Jackets:'https://findspreadsheet.com/jackets/','Other stuff':'https://findspreadsheet.com/search.html?channelid=2&keywords=other'};
const icon='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 8h12l-1 11H7L6 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>';

function currentLanguage(){const first=location.pathname.split('/').filter(Boolean)[0];return localeCodes.has(first)?first:'en'}
function routeForLanguage(code){const parts=location.pathname.split('/').filter(Boolean);if(localeCodes.has(parts[0]))parts.shift();const route='/'+parts.join('/')+(parts.length?'/':'');return code==='en'?route:'/'+code+route}
function tileCategories(){
  document.querySelectorAll('.categories').forEach(grid=>{grid.classList.remove('grid','categories');grid.classList.add('category-list');grid.querySelectorAll('a.card').forEach(card=>{const title=card.dataset.category||card.querySelector('h3')?.textContent.trim()||'',heading=card.querySelector('h3')?.innerHTML||'',copy=card.querySelector('p')?.textContent.trim()||'';if(routes[title])card.href=routes[title];card.className='category-tile';card.innerHTML='<span class="category-icon">'+icon+'</span><h3>'+heading+'</h3><p>'+copy+'</p>'})});
  document.querySelectorAll('.category-list .category-row').forEach(card=>{const title=card.dataset.category||card.querySelector('h3')?.textContent.trim()||'',heading=card.querySelector('h3')?.innerHTML||'',copy=card.querySelector('p')?.textContent.trim()||'';if(routes[title])card.href=routes[title];card.className='category-tile';card.innerHTML='<span class="category-icon">'+icon+'</span><h3>'+heading+'</h3><p>'+copy+'</p>'});
}
function compactMobileReading(){
  if(!window.matchMedia('(max-width:600px)').matches)return;
  const article=document.querySelector('.article');
  if(article&&!article.dataset.compact){
    let section=null,number=0;
    Array.from(article.children).forEach(node=>{
      if(node.tagName==='H2'){
        const details=document.createElement('details');
        details.className='reading-section';
        if(number++===0)details.open=true;
        const summary=document.createElement('summary');
        summary.append(node);
        details.append(summary);
        article.append(details);
        section=details;
      }else if(section){section.append(node)}
    });
    article.dataset.compact='true';
  }
  if(/\/(?:[a-z]{2}\/)?faq\//.test(location.pathname)){
    document.querySelectorAll('.list article').forEach((card,index)=>{
      if(card.dataset.compact)return;
      const title=card.querySelector('h3');
      if(!title)return;
      const details=document.createElement('details');
      details.className='faq-section';
      if(index===0)details.open=true;
      const summary=document.createElement('summary');
      summary.append(title);
      details.append(summary);
      Array.from(card.children).forEach(node=>{if(node!==details)details.append(node)});
      card.append(details);card.dataset.compact='true';
    });
  }
}
document.querySelectorAll('.nav a[href^="/seo-articles/"]').forEach(link=>link.href='/seo-articles/');
const pageLanguage=currentLanguage();
if(pageLanguage!=='en')document.querySelectorAll('a[href^="/"]').forEach(link=>{const href=link.getAttribute('href');if(href&&!href.startsWith('/'+pageLanguage+'/'))link.setAttribute('href','/'+pageLanguage+href)});
tileCategories();
compactMobileReading();
document.querySelectorAll('[data-search]').forEach(form=>form.addEventListener('submit',event=>{event.preventDefault();const value=form.querySelector('input')?.value.trim();if(value)location.href='https://findspreadsheet.com/search.html?channelid=2&keywords='+encodeURIComponent(value)}));
document.querySelectorAll('.header-row').forEach(header=>{const select=document.createElement('select');select.className='language-select';select.setAttribute('aria-label','Select language');locales.forEach(([code,label])=>select.add(new Option(label,code)));select.value=currentLanguage();select.addEventListener('change',()=>{location.href=routeForLanguage(select.value)});header.append(select)});
