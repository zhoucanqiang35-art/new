(function(){
  var languages={EN:'en',DE:'de',FR:'fr',ES:'es',IT:'it',PT:'pt',NL:'nl',PL:'pl'};
  var selected=localStorage.getItem('hipobuy-language')||'EN';
  var cachePrefix='hipobuy-page-translation-v2:';
  function safeStore(key,value){try{localStorage.setItem(key,value)}catch(error){}}
  function safeRead(key){try{return localStorage.getItem(key)}catch(error){return null}}
  function clearOldTranslator(){
    document.cookie='googtrans=;path=/;max-age=0';
    document.cookie='googtrans=;domain='+location.hostname+';path=/;max-age=0';
    document.querySelectorAll('iframe.goog-te-banner-frame,.goog-te-banner-frame,#google_translate_element,body>.skiptranslate,.goog-te-spinner-pos').forEach(function(node){node.remove()});
    document.documentElement.style.marginTop='0';
    document.body.style.top='0';
    document.documentElement.classList.remove('translated-ltr','translated-rtl');
  }
  function updateControl(){
    document.querySelectorAll('.langs button,.lang-options button').forEach(function(button){button.toggleAttribute('aria-current',button.textContent.trim()===selected)});
    document.querySelectorAll('.language summary,.lang-menu summary').forEach(function(summary){summary.textContent='Language · '+selected});
  }
  function shouldTranslate(node){
    var parent=node&&node.parentElement;
    if(!node||!node.nodeValue.trim()||!parent)return false;
    if(/^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA|OPTION|CODE|PRE)$/.test(parent.tagName))return false;
    return !parent.closest('.language,.lang-menu,#google_translate_element,[data-no-translate]');
  }
  function targetNodes(root){
    var nodes=[];
    var walker=document.createTreeWalker(root||document.body,NodeFilter.SHOW_TEXT,{acceptNode:function(node){return shouldTranslate(node)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});
    while(walker.nextNode())nodes.push(walker.currentNode);
    return nodes;
  }
  function cacheKey(text,language){return cachePrefix+language+':'+text}
  function request(text,language){
    var key=cacheKey(text,language),cached=safeRead(key);
    if(cached!==null)return Promise.resolve(cached);
    var url='https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl='+language+'&dt=t&q='+encodeURIComponent(text);
    return fetch(url,{credentials:'omit'}).then(function(response){if(!response.ok)throw new Error('Translation unavailable');return response.json()}).then(function(data){
      var result=data[0].map(function(part){return part[0]}).join('');
      if(result){safeStore(key,result)}
      return result;
    });
  }
  function translateText(nodes,language){
    var queue=nodes.slice(),active=0;
    return new Promise(function(resolve){function next(){
      if(!queue.length&&!active){resolve();return}
      while(active<4&&queue.length){(function(node){var original=node.nodeValue;active++;request(original,language).then(function(result){if(result&&node.parentNode)node.nodeValue=result}).catch(function(){}).finally(function(){active--;next()})})(queue.shift());}
    }next()});
  }
  function translateOne(node,language){var original=node.nodeValue;return request(original,language).then(function(result){if(result&&node.parentNode)node.nodeValue=result}).catch(function(){})}
  function translateAttributes(language){
    var items=[].slice.call(document.querySelectorAll('input[placeholder],button[title],a[title],[aria-label]'));
    return Promise.all(items.map(function(element){
      var attribute=element.hasAttribute('placeholder')?'placeholder':element.hasAttribute('title')?'title':'aria-label';
      var original=element.getAttribute(attribute);
      if(!original||element.closest('.language,.lang-menu'))return Promise.resolve();
      return request(original,language).then(function(result){if(result)element.setAttribute(attribute,result)}).catch(function(){});
    }));
  }
  function observeLater(language){
    new MutationObserver(function(records){records.forEach(function(record){[].slice.call(record.addedNodes).forEach(function(node){
      if(node.nodeType===Node.TEXT_NODE&&shouldTranslate(node))translateOne(node,language);
      if(node.nodeType===Node.ELEMENT_NODE)translateText(targetNodes(node),language);
    })})}).observe(document.body,{childList:true,subtree:true});
  }
  function translateCurrentPage(){
    document.documentElement.lang=languages[selected]||'en';
    if(selected==='EN')return;
    document.documentElement.setAttribute('data-language-loading','true');
    var title=document.title;
    Promise.all([translateText(targetNodes(),languages[selected]),translateAttributes(languages[selected]),request(title,languages[selected]).then(function(result){if(result)document.title=result}).catch(function(){})]).finally(function(){document.documentElement.removeAttribute('data-language-loading')});
    observeLater(languages[selected]);
  }
  function choose(label){selected=label;safeStore('hipobuy-language',label);location.reload()}
  clearOldTranslator();
  updateControl();
  document.querySelectorAll('.langs button,.lang-options button').forEach(function(button){button.addEventListener('click',function(){choose(button.textContent.trim())})});
  translateCurrentPage();
})();
