(()=>{
  const key='hipo-language';
  const path=location.pathname.includes('/categories/')?'../':'';
  const clean=s=>s.replace(/\s+/g,' ').trim();
  const translateNode=(node,dict)=>{
    if(['SCRIPT','STYLE','OPTION'].includes(node.parentElement?.tagName)||node.parentElement?.closest('[data-guide-local]'))return;
    const raw=node.nodeValue, text=clean(raw), translated=dict[text];
    if(!text||!translated)return;
    const leading=raw.match(/^\s*/)[0], trailing=raw.match(/\s*$/)[0];
    node.nodeValue=leading+translated+trailing;
  };
  async function apply(){
    const lang=localStorage.getItem(key)||'en';
    document.documentElement.lang=lang;
    if(lang==='en')return;
    try{
      const response=await fetch(path+'translations.json');
      if(!response.ok)throw new Error('translation file unavailable');
      const dict=(await response.json())[lang];
      if(!dict)return;
      const walker=document.createTreeWalker(document.getElementById('app'),NodeFilter.SHOW_TEXT);
      while(walker.nextNode())translateNode(walker.currentNode,dict);
      for(const el of document.querySelectorAll('[placeholder],[aria-label],[alt]')){
        if(el.closest('[data-guide-local]'))continue;
        for(const attr of ['placeholder','aria-label','alt']){
          if(!el.hasAttribute(attr))continue;
          const value=el.getAttribute(attr), translated=dict[clean(value||'')];
          if(translated)el.setAttribute(attr,translated);
        }
      }
    }catch(error){console.error('Unable to load local translations:',error)}
  }
  document.addEventListener('change',e=>{
    if(e.target?.id==='language'){
      localStorage.setItem(key,e.target.value);
      location.reload();
    }
  },true);
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});
  else apply();
})();
