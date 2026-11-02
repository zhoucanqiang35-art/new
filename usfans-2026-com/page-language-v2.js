/* Immediate language hand-off for long-form content: never leave the previous
   language visible while the complete new article is being prepared. */
(() => {
  const supported=new Set(['en','de','fr','es','it','pt','nl','pl','sv']);
  const labels={de:'Artikel wird auf Deutsch geladen…',fr:'Chargement de l’article en français…',es:'Cargando el artículo en español…',it:'Caricamento dell’articolo in italiano…',pt:'Carregando o artigo em português…',nl:'Artikel in het Nederlands laden…',pl:'Ładowanie artykułu po polsku…',sv:'Läser in artikeln på svenska…'};
  const ignored=new Set(['SCRIPT','STYLE','NOSCRIPT','TEXTAREA','OPTION','CODE','PRE']);
  let sequence=0;
  const cacheKey=(locale,text)=>`usfans-text-v4-en:${locale}:${btoa(unescape(encodeURIComponent(text)))}`;
  function nodes(root){const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode(node){if(!node.nodeValue.trim()||ignored.has(node.parentElement?.tagName)||node.parentElement?.closest('[data-no-translate]'))return NodeFilter.FILTER_REJECT;return NodeFilter.FILTER_ACCEPT}});const list=[];while(walker.nextNode())list.push(walker.currentNode);return list}
  function setPending(){return ()=>{}}
  async function requestPart(text,locale){const url=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${encodeURIComponent(locale)}&dt=t&q=${encodeURIComponent(text)}`;const response=await fetch(url,{credentials:'omit',cache:'force-cache'});if(!response.ok)throw new Error('translation unavailable');const data=await response.json();const translated=(data?.[0]||[]).map(part=>part?.[0]||'').join('');if(!translated)throw new Error('empty translation');return translated}
  async function request(text,locale){const key=cacheKey(locale,text);let stored;try{stored=sessionStorage.getItem(key)}catch{}if(stored)return stored;const parts=text.match(/.{1,2800}(?:\s|$)|.{1,2800}/g)||[text];const translated=(await Promise.all(parts.map(part=>requestPart(part,locale)))).join('');sessionStorage.setItem(key,translated);return translated}
  async function translate(locale){if(!supported.has(locale)||locale==='en')return;const id=++sequence,root=document.querySelector('#app');if(!root)return;const done=setPending(root,locale);const byText=new Map();nodes(root).forEach(node=>{const text=node.nodeValue;if(!byText.has(text))byText.set(text,[]);byText.get(text).push(node)});const jobs=[...byText.entries()],staged=new Map();let cursor=0;async function worker(){while(cursor<jobs.length){const [text,targets]=jobs[cursor++];try{staged.set(targets,await request(text,locale))}catch{/* Keep the source only if an individual service request fails. */}}}await Promise.all(Array.from({length:10},worker));if(id!==sequence)return;staged.forEach((output,targets)=>targets.forEach(node=>node.nodeValue=output));done()}

  window.usfansTranslatePage=translate;
  const saved=localStorage.getItem('usfans-lang');if(saved&&saved!=='en')setTimeout(()=>translate(saved),0);
})();

