(function () {
  'use strict';
  var codes = {EN:'en',DE:'de',FR:'fr',ES:'es',IT:'it',PT:'pt',NL:'nl',PL:'pl'};
  var selected = 'EN';
  try { selected = localStorage.getItem('hipobuy-language') || 'EN'; } catch (_) {}
  if (!codes[selected]) selected = 'EN';
  var originals = new WeakMap();
  var originalAttrs = new WeakMap();
  var labels = {de:['Öffnen','Kategorie','auf FindSpreadsheet'],fr:['Ouvrir','catégorie','sur FindSpreadsheet'],es:['Abrir','categoría','en FindSpreadsheet'],it:['Apri','categoria','su FindSpreadsheet'],pt:['Abrir','categoria','no FindSpreadsheet'],nl:['Open','categorie','op FindSpreadsheet'],pl:['Otwórz','kategorię','w FindSpreadsheet']};
  function translated(text, lang) {
    if (lang === 'EN') return text;
    var lexicon = (window.HIPO_TRANSLATIONS || {})[codes[lang]] || {};
    if (Object.prototype.hasOwnProperty.call(lexicon, text)) return lexicon[text];
    var match = text.match(/^PRODUCT (\d+)$/);
    if (match && lexicon.PRODUCT) return lexicon.PRODUCT+' '+match[1];
    var category = text.match(/^Open (.+) category$/);
    if (category && lexicon[category[1]]) return labels[codes[lang]][0]+' '+lexicon[category[1]]+' '+labels[codes[lang]][1];
    var product = text.match(/^Open (.+) on FindSpreadsheet$/);
    if (product && lexicon[product[1]]) return labels[codes[lang]][0]+' '+lexicon[product[1]]+' '+labels[codes[lang]][2];
    return text;
  }
  function excluded(node) {
    var p = node.parentElement;
    return !p || /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA|OPTION|CODE|PRE)$/.test(p.tagName) || p.closest('.language,.lang-menu,[data-no-translate]');
  }
  function applyText(root) {
    if (root.nodeType === Node.TEXT_NODE) { translateNode(root); return; }
    if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(translateNode);
    var elements=[];
    if (root.nodeType===Node.ELEMENT_NODE && root.matches('[placeholder],[title],[aria-label],img[alt]')) elements.push(root);
    root.querySelectorAll('[placeholder],[title],[aria-label],img[alt]').forEach(function (el) { elements.push(el); });
    elements.forEach(function(el){
      if(el.closest('.language,.lang-menu,[data-no-translate]'))return;
      var saved=originalAttrs.get(el)||{};
      ['placeholder','title','aria-label','alt'].forEach(function(attr){
        if(!el.hasAttribute(attr))return;
        if(!(attr in saved))saved[attr]=el.getAttribute(attr);
        var value=translated(saved[attr],selected);if(el.getAttribute(attr)!==value)el.setAttribute(attr,value);
      });
      originalAttrs.set(el,saved);
    });
  }
  function translateNode(node) {
    if (excluded(node)) return;
    if (!originals.has(node)) originals.set(node,node.nodeValue);
    var original=originals.get(node), core=original.trim();
    if (!core) return;
    var next=original.replace(core,translated(core,selected));
    if(node.nodeValue!==next) node.nodeValue=next;
  }
  function updateControl(){
    document.documentElement.lang=codes[selected];
    document.querySelectorAll('.langs button,.lang-options button').forEach(function(button){
      if(button.textContent.trim()===selected)button.setAttribute('aria-current','true');else button.removeAttribute('aria-current');
    });
    document.querySelectorAll('.language summary,.lang-menu summary').forEach(function(summary){summary.textContent='Language · '+selected;});
  }
  function choose(lang){
    if(!codes[lang])return;
    selected=lang;try{localStorage.setItem('hipobuy-language',lang);}catch(_){}
    updateControl();applyText(document.body);
    document.querySelectorAll('.language[open],.lang-menu[open]').forEach(function(menu){menu.removeAttribute('open')});
  }
  document.querySelectorAll('.langs button,.lang-options button').forEach(function(button){button.addEventListener('click',function(){choose(button.textContent.trim())})});
  updateControl();applyText(document.body);
  new MutationObserver(function(records){records.forEach(function(record){record.addedNodes.forEach(function(node){if(node.isConnected)applyText(node)})})}).observe(document.body,{childList:true,subtree:true});
})();
