/* Translates every rendered text node in place. It deliberately does not load a
   widget, iframe, toolbar or overlay, so the page geometry always remains ours. */
(() => {
  const supported=new Set(['en','de','fr','es','it','pt','nl','pl','sv']);
  let sequence=0;
  const ignored=new Set(['SCRIPT','STYLE','NOSCRIPT','TEXTAREA','OPTION','CODE','PRE']);
  const cacheKey=(locale,text)=>`usfans-text-v2:${locale}:${btoa(unescape(encodeURIComponent(text))).slice(0,220)}`;
  function textNodes(root){
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode(node){
      if(!node.nodeValue.trim()||ignored.has(node.parentElement?.tagName)||node.parentElement?.closest('[data-no-translate]'))return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }});const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);return nodes;
  }
  async function request(text,locale){
    const key=cacheKey(locale,text),stored=sessionStorage.getItem(key);if(stored)return stored;
    const url=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${encodeURIComponent(locale)}&dt=t&q=${encodeURIComponent(text)}`;
    const response=await fetch(url,{credentials:'omit',cache:'force-cache'});if(!response.ok)throw new Error('translation unavailable');
    const data=await response.json(),translated=(data?.[0]||[]).map(part=>part?.[0]||'').join('');if(!translated)throw new Error('empty translation');
    sessionStorage.setItem(key,translated);return translated;
  }
  async function translate(locale){
    if(!supported.has(locale)||locale==='en')return;
    const id=++sequence,root=document.querySelector('#app');if(!root)return;
    const byText=new Map();textNodes(root).forEach(node=>{const text=node.nodeValue;if(!byText.has(text))byText.set(text,[]);byText.get(text).push(node)});
    const jobs=[...byText.entries()],workers=[];let cursor=0;
    const staged=new Map();
    async function worker(){while(cursor<jobs.length){const [text,nodes]=jobs[cursor++];try{staged.set(nodes,await request(text,locale))}catch{ /* retain the exact source text if offline */ }}}
    for(let i=0;i<5;i++)workers.push(worker());await Promise.all(workers);
    if(id!==sequence)return;
    staged.forEach((output,nodes)=>nodes.forEach(node=>node.nodeValue=output));
  }
  window.usfansTranslatePage=translate;
  const saved=localStorage.getItem('usfans-lang');if(saved&&saved!=='en')setTimeout(()=>translate(saved),0);
})();
