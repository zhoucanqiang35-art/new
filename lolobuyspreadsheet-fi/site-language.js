const extraStyles=document.createElement('link');
extraStyles.rel='stylesheet';
extraStyles.href='/overrides.css?v=language-ui-3';
document.head.append(extraStyles);

const mobileStyles=document.createElement('link');
mobileStyles.rel='stylesheet';
mobileStyles.href='/mobile.css';
document.head.append(mobileStyles);

/* Language state is part of the current route so every page reads the same selection. */
const languages=[
  ['en','EN · English'],['de','DE · Deutsch'],['fr','FR · Français'],['es','ES · Español'],
  ['it','IT · Italiano'],['pt','PT · Português'],['nl','NL · Nederlands'],['pl','PL · Polski'],['sv','SV · Svenska']
];
const validLanguages=new Set(languages.map(([code])=>code));
const routeLanguage=new URLSearchParams(location.search).get('lang');
/* The URL is the only language source.  A previous browser selection must never
   override the language requested for the current page. */
const selectedLanguage=validLanguages.has(routeLanguage) ? routeLanguage : 'en';

/* Shared interface copy lives with this site.  It is intentionally local: the
   selector never calls another website and the current URL is the source of
   truth for both a page and its category parameter. */
const locale={
  en:{home:'Home',categories:'Categories',details:'Product details',guide:'Buyer guide',articles:'SEO articles',faq:'FAQ',notice:'Inspection preview — this version is not published on lolobuyspreadsheet.fi',search:'Search database',searchPlaceholder:'Search the FindSpreadsheet database',database:'Open FindSpreadsheet ↗',back:'← Back to all categories'},
  de:{home:'Startseite',categories:'Kategorien',details:'Produktdetails',guide:'Käuferleitfaden',articles:'SEO-Artikel',faq:'FAQ',notice:'Prüfvorschau — diese Version ist nicht auf lolobuyspreadsheet.fi veröffentlicht',search:'Datenbank durchsuchen',searchPlaceholder:'FindSpreadsheet-Datenbank durchsuchen',database:'FindSpreadsheet öffnen ↗',back:'← Zurück zu allen Kategorien'},
  fr:{home:'Accueil',categories:'Catégories',details:'Détails produit',guide:'Guide d’achat',articles:'Articles SEO',faq:'FAQ',notice:'Version de contrôle — cette version n’est pas publiée sur lolobuyspreadsheet.fi',search:'Chercher la base',searchPlaceholder:'Rechercher dans la base FindSpreadsheet',database:'Ouvrir FindSpreadsheet ↗',back:'← Retour aux catégories'},
  es:{home:'Inicio',categories:'Categorías',details:'Detalles del producto',guide:'Guía de compra',articles:'Artículos SEO',faq:'Preguntas frecuentes',notice:'Vista previa de revisión — esta versión no está publicada en lolobuyspreadsheet.fi',search:'Buscar en la base',searchPlaceholder:'Buscar en la base FindSpreadsheet',database:'Abrir FindSpreadsheet ↗',back:'← Volver a las categorías'},
  it:{home:'Home',categories:'Categorie',details:'Dettagli prodotto',guide:'Guida all’acquisto',articles:'Articoli SEO',faq:'Domande frequenti',notice:'Anteprima di controllo — questa versione non è pubblicata su lolobuyspreadsheet.fi',search:'Cerca nel database',searchPlaceholder:'Cerca nel database FindSpreadsheet',database:'Apri FindSpreadsheet ↗',back:'← Torna alle categorie'},
  pt:{home:'Início',categories:'Categorias',details:'Detalhes do produto',guide:'Guia de compra',articles:'Artigos SEO',faq:'Perguntas frequentes',notice:'Pré-visualização de revisão — esta versão não está publicada em lolobuyspreadsheet.fi',search:'Pesquisar na base',searchPlaceholder:'Pesquisar na base FindSpreadsheet',database:'Abrir FindSpreadsheet ↗',back:'← Voltar às categorias'},
  nl:{home:'Home',categories:'Categorieën',details:'Productdetails',guide:'Koopgids',articles:'SEO-artikelen',faq:'Veelgestelde vragen',notice:'Controleversie — deze versie is niet gepubliceerd op lolobuyspreadsheet.fi',search:'Zoek in de database',searchPlaceholder:'Zoek in de FindSpreadsheet-database',database:'Open FindSpreadsheet ↗',back:'← Terug naar alle categorieën'},
  pl:{home:'Strona główna',categories:'Kategorie',details:'Szczegóły produktu',guide:'Poradnik kupującego',articles:'Artykuły SEO',faq:'Najczęstsze pytania',notice:'Wersja kontrolna — ta wersja nie jest opublikowana na lolobuyspreadsheet.fi',search:'Szukaj w bazie',searchPlaceholder:'Szukaj w bazie FindSpreadsheet',database:'Otwórz FindSpreadsheet ↗',back:'← Wróć do wszystkich kategorii'},
  sv:{home:'Hem',categories:'Kategorier',details:'Produktdetaljer',guide:'Köpguide',articles:'SEO-artiklar',faq:'Vanliga frågor',notice:'Granskningsversion — denna version är inte publicerad på lolobuyspreadsheet.fi',search:'Sök i databasen',searchPlaceholder:'Sök i FindSpreadsheet-databasen',database:'Öppna FindSpreadsheet ↗',back:'← Tillbaka till alla kategorier'}
};
const copy=locale[selectedLanguage];

document.querySelectorAll('.brand-label').forEach((label)=>label.remove());
document.documentElement.lang=selectedLanguage;
document.documentElement.dataset.language=selectedLanguage;
window.LoloBuyLocale={code:selectedLanguage,copy};

const navCopy=[copy.home,copy.categories,copy.details,copy.guide,copy.articles,copy.faq];
document.querySelectorAll('header nav a').forEach((link,index)=>{
  if(navCopy[index]) link.textContent=navCopy[index];
});
document.querySelectorAll('.notice').forEach((notice)=>{notice.textContent='● '+copy.notice;});
document.querySelectorAll('#search-input').forEach((input)=>{input.placeholder=copy.searchPlaceholder;});
document.querySelectorAll('#product-search button[type="submit"]').forEach((button)=>{button.textContent=copy.search;});
document.querySelectorAll('.category-back').forEach((link)=>{link.textContent=copy.back;});
document.querySelectorAll('footer a[href="https://findspreadsheet.com/"]').forEach((link)=>{link.textContent=copy.database;});

if(!document.querySelector('#language-switcher')){
  const header=document.querySelector('header');
  if(header){
    const language=document.createElement('label');
    language.className='language';
    language.innerHTML=`<select id="language-switcher" aria-label="Choose language">${languages.map(([code,label])=>`<option value="${code}">${label}</option>`).join('')}</select>`;
    header.append(language);
  }
}

const languageSwitcher=document.querySelector('#language-switcher');
if(languageSwitcher){
  languageSwitcher.value=selectedLanguage;
}

/*
 * Full-page language rendering
 * --------------------------
 * The language menu owns the current route, while the page translator renders
 * every visible page section in that language.  It leaves URLs, categories,
 * search destinations, images and layout untouched, so a visitor remains on
 * the same page with the same amount of content.
 */
const translatorMount=document.createElement('div');
translatorMount.id='page-language-renderer';
translatorMount.className='notranslate';
translatorMount.setAttribute('aria-hidden','true');
document.body.append(translatorMount);

/* Use the translator's own select control.  Its change event is a real user
   action, which keeps the selected page in place instead of falling back to
   English through a synthetic event or a reload. */
const keepLanguageInCurrentRoute=(code)=>{
  const languageCode=validLanguages.has(code) ? code : 'en';
  const currentUrl=new URL(location.href);
  currentUrl.searchParams.set('lang',languageCode);
  history.replaceState(null,'',currentUrl.pathname+currentUrl.search+currentUrl.hash);
  document.documentElement.lang=languageCode;
  document.documentElement.dataset.language=languageCode;
  document.querySelectorAll('a[href]').forEach((link)=>{
    const href=link.getAttribute('href');
    if(!href || href.startsWith('#') || /^(https?:|mailto:|tel:)/i.test(href)) return;
    const target=new URL(href,location.origin);
    target.searchParams.set('lang',languageCode);
    link.setAttribute('href',target.pathname+target.search+target.hash);
  });
};

window.lolobuyFullPageLanguageReady=()=>{
  if(!window.google?.translate?.TranslateElement) return;
  new window.google.translate.TranslateElement({
    pageLanguage:'en',
    includedLanguages:languages.map(([code])=>code).filter((code)=>code!=='en').join(','),
    autoDisplay:false,
    multilanguagePage:false
  },'page-language-renderer');
  const attachGoogleLanguageControl=()=>{
  const googleCombo=document.querySelector('.goog-te-combo');
  const languageControl=document.querySelector('header .language');
  const oldControl=document.querySelector('#language-switcher');
  if(!googleCombo || !languageControl){
    window.setTimeout(attachGoogleLanguageControl,80);
    return;
  }
  if(googleCombo.dataset.lolobuyAttached==='true') return;
  if(oldControl) oldControl.remove();
  googleCombo.id='language-switcher';
  googleCombo.setAttribute('aria-label','Choose language');
  const normalizeLanguageNames=()=>{
    /* Google rebuilds its option list after it has loaded.  Put English back
       on every rebuild so the source-language return is always available. */
    if(!googleCombo.querySelector('option[value="en"]')){
      const englishOption=document.createElement('option');
      englishOption.value='en';
      englishOption.text='EN · English';
      googleCombo.insertBefore(englishOption,googleCombo.firstChild);
    }
    /* Google calls the empty option “Choose language” in the browser's own
       language.  It is not a site language, so never show it to visitors. */
    [...googleCombo.options].filter((option)=>!option.value).forEach((option)=>option.remove());
    [...googleCombo.options].forEach((option)=>{
      const match=languages.find(([code])=>code===option.value);
      if(match && option.text!==match[1]) option.text=match[1];
    });
    if(!googleCombo.value || !validLanguages.has(googleCombo.value)) googleCombo.value=selectedLanguage;
  };
  normalizeLanguageNames();
  new MutationObserver(normalizeLanguageNames).observe(googleCombo,{childList:true,subtree:true,characterData:true});
  window.setTimeout(normalizeLanguageNames,300);
  window.setTimeout(normalizeLanguageNames,1200);
  languageControl.append(googleCombo);
  googleCombo.addEventListener('change',()=>{
    const nextLanguage=googleCombo.value || 'en';
    if(nextLanguage==='en'){
      document.cookie='googtrans=; Max-Age=0; Path=/; SameSite=Lax';
      const englishUrl=new URL(location.href);
      englishUrl.searchParams.set('lang','en');
      location.assign(englishUrl.toString());
      return;
    }
    keepLanguageInCurrentRoute(nextLanguage);
    document.documentElement.dataset.pageTranslated=nextLanguage;
  });
  googleCombo.dataset.lolobuyAttached='true';
  document.documentElement.dataset.pageTranslated=googleCombo.value || 'en';
  };
  attachGoogleLanguageControl();
};

/* Google injects a helper frame after this file has run.  Keep that frame
   alive because it performs the page translation, but move it out of view so
   it never becomes a visible top banner. */
const hideGoogleTranslationChrome=()=>{
  document.documentElement.style.setProperty('top','0','important');
  document.body.style.setProperty('top','0','important');
  document.body.style.setProperty('margin-top','0','important');
};
hideGoogleTranslationChrome();
new MutationObserver(hideGoogleTranslationChrome).observe(document.documentElement,{childList:true,subtree:true});
window.setInterval(hideGoogleTranslationChrome,500);

const googleLanguageScript=document.createElement('script');
googleLanguageScript.src='https://translate.google.com/translate_a/element.js?cb=lolobuyFullPageLanguageReady';
googleLanguageScript.async=true;
document.head.append(googleLanguageScript);

/* Let page-specific scripts (for example category details) read exactly the
   same locale after they render their own content. */
document.dispatchEvent(new CustomEvent('lolobuy:locale-ready',{detail:window.LoloBuyLocale}));

/* Keep the selected language on every internal page. External product links remain unchanged. */
document.querySelectorAll('a[href]').forEach((link)=>{
  const href=link.getAttribute('href');
  if(!href || href.startsWith('#') || /^(https?:|mailto:|tel:)/i.test(href)) return;
  const target=new URL(href,location.origin);
  target.searchParams.set('lang',selectedLanguage);
  link.setAttribute('href',target.pathname+target.search+target.hash);
});

document.querySelector('#product-search')?.addEventListener('submit',(event)=>{
  event.preventDefault();
  const query=document.querySelector('#search-input').value.trim();
  location.href=query
    ? 'https://findspreadsheet.com/search.html?keywords='+encodeURIComponent(query)+'&channelid=2'
    : 'https://findspreadsheet.com/AllProducts/';
});
