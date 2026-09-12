(()=>{
  const dictionaries={
    de:{"Home":"Startseite","Product Categories":"Produktkategorien","Product Details":"Produktdetails","SEO Articles":"SEO-Artikel","PRODUCT RESEARCH":"PRODUKTRECHERCHE","QC PHOTO CONTEXT":"KONTEXT ZU QC-FOTOS","DATABASE DISCOVERY":"DATENBANK-ENTDECKUNG","SEARCH":"SUCHEN","Search products, brands or categories":"Produkte, Marken oder Kategorien suchen","EXPLORE BY CATEGORY":"NACH KATEGORIE ENTDECKEN","PRODUCT DETAILS":"PRODUKTDETAILS","DATABASE":"DATENBANK","PRODUCT CATEGORY":"PRODUKTKATEGORIE","PRODUCT CATEGORIES":"PRODUKTKATEGORIEN","EVIDENCE-LED GUIDES":"FAKTENGESTÜTZTE LEITFÄDEN","FACT-BASED FAQ":"FAKTENBASIERTES FAQ","READ GUIDE":"LEITFADEN LESEN","OPEN FINDS SPREADSHEET":"FINDS SPREADSHEET ÖFFNEN","Open FindSpreadsheet →":"FindSpreadsheet öffnen →","VIEW PRODUCT DETAILS":"PRODUKTDETAILS ANSEHEN","FAQ":"FAQ"},
    fr:{"Home":"Accueil","Product Categories":"Catégories de produits","Product Details":"Détails du produit","SEO Articles":"Articles SEO","PRODUCT RESEARCH":"RECHERCHE PRODUIT","QC PHOTO CONTEXT":"CONTEXTE DES PHOTOS QC","DATABASE DISCOVERY":"DÉCOUVERTE DE LA BASE","SEARCH":"RECHERCHER","Search products, brands or categories":"Rechercher des produits, marques ou catégories","EXPLORE BY CATEGORY":"EXPLORER PAR CATÉGORIE","PRODUCT DETAILS":"DÉTAILS DU PRODUIT","DATABASE":"BASE DE DONNÉES","PRODUCT CATEGORY":"CATÉGORIE DE PRODUIT","PRODUCT CATEGORIES":"CATÉGORIES DE PRODUITS","EVIDENCE-LED GUIDES":"GUIDES FONDÉS SUR DES FAITS","FACT-BASED FAQ":"FAQ FONDÉE SUR DES FAITS","READ GUIDE":"LIRE LE GUIDE","OPEN FINDS SPREADSHEET":"OUVRIR FINDS SPREADSHEET","Open FindSpreadsheet →":"Ouvrir FindSpreadsheet →","VIEW PRODUCT DETAILS":"VOIR LES DÉTAILS","FAQ":"FAQ"},
    es:{"Home":"Inicio","Product Categories":"Categorías de productos","Product Details":"Detalles del producto","SEO Articles":"Artículos SEO","FAQ":"Preguntas frecuentes","PRODUCT RESEARCH":"INVESTIGACIÓN DE PRODUCTOS","QC PHOTO CONTEXT":"CONTEXTO DE FOTOS QC","DATABASE DISCOVERY":"DESCUBRIMIENTO DE BASE DE DATOS","SEARCH":"BUSCAR","Search products, brands or categories":"Buscar productos, marcas o categorías","EXPLORE BY CATEGORY":"EXPLORAR POR CATEGORÍA","PRODUCT DETAILS":"DETALLES DEL PRODUCTO","DATABASE":"BASE DE DATOS","PRODUCT CATEGORY":"CATEGORÍA DE PRODUCTO","PRODUCT CATEGORIES":"CATEGORÍAS DE PRODUCTOS","EVIDENCE-LED GUIDES":"GUÍAS BASADAS EN HECHOS","FACT-BASED FAQ":"PREGUNTAS FRECUENTES BASADAS EN HECHOS","READ GUIDE":"LEER GUÍA","OPEN FINDS SPREADSHEET":"ABRIR FINDS SPREADSHEET","Open FindSpreadsheet →":"Abrir FindSpreadsheet →","VIEW PRODUCT DETAILS":"VER DETALLES"},
    it:{"Home":"Home","Product Categories":"Categorie di prodotti","Product Details":"Dettagli prodotto","SEO Articles":"Articoli SEO","PRODUCT RESEARCH":"RICERCA PRODOTTI","QC PHOTO CONTEXT":"CONTESTO FOTO QC","DATABASE DISCOVERY":"SCOPERTA DEL DATABASE","SEARCH":"CERCA","Search products, brands or categories":"Cerca prodotti, marchi o categorie","EXPLORE BY CATEGORY":"ESPLORA PER CATEGIA","PRODUCT DETAILS":"DETTAGLI PRODOTTO","DATABASE":"DATABASE","PRODUCT CATEGORY":"CATEGORIA PRODOTTO","PRODUCT CATEGORIES":"CATEGORIE PRODOTTI","EVIDENCE-LED GUIDES":"GUIDE BASATE SUI FATTI","FACT-BASED FAQ":"FAQ BASATE SUI FATTI","READ GUIDE":"LEGGI GUIDA","OPEN FINDS SPREADSHEET":"APRI FINDS SPREADSHEET","Open FindSpreadsheet →":"Apri FindSpreadsheet →","VIEW PRODUCT DETAILS":"VEDI DETTAGLI","FAQ":"FAQ"}
  };
  const originals=new WeakMap();
  const normalise=value=>value.replace(/\s+/g," ").trim();
  function translate(language){
    const map=dictionaries[language]||{};
    document.documentElement.lang=language;
    document.querySelectorAll(".lang").forEach(control=>control.value=language);
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
    let node;
    while(node=walker.nextNode()){
      if(!originals.has(node)) originals.set(node,node.nodeValue);
      const original=originals.get(node);
      const key=normalise(original);
      node.nodeValue=map[key]?original.replace(key,map[key]):original;
    }
    document.querySelectorAll("[placeholder]").forEach(field=>{
      const original=field.dataset.originalPlaceholder||field.getAttribute("placeholder");
      field.dataset.originalPlaceholder=original;
      field.setAttribute("placeholder",map[normalise(original)]||original);
    });
  }
  function addMissingPickers(){
    document.querySelectorAll("header.nav").forEach(header=>{
      if(header.querySelector(".lang")) return;
      const select=document.createElement("select");
      select.className="lang";
      select.setAttribute("aria-label","Language");
      select.innerHTML='<option value="en">EN</option><option value="de">DE</option><option value="fr">FR</option><option value="es">ES</option><option value="it">IT</option>';
      header.appendChild(select);
    });
  }
  document.addEventListener("DOMContentLoaded",()=>{
    addMissingPickers();
    const current=localStorage.getItem("piko-language")||"en";
    translate(current);
    document.querySelectorAll(".lang").forEach(control=>control.addEventListener("change",event=>{
      const language=event.target.value;
      localStorage.setItem("piko-language",language);
      translate(language);
    }));
  });
})();
