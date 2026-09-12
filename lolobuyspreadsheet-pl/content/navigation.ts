export const languageNames: Record<string,string> = {en:"English",de:"Deutsch",fr:"Français",es:"Español",it:"Italiano",nl:"Nederlands",pl:"Polski",pt:"Português",sv:"Svenska"};

export const navigationLabels: Record<string,string[]> = {
  en:["Home","Find products","Product details","How it works","QC checklist","Guides","FAQ","SEO articles"],
  de:["Startseite","Produkte finden","Produktdetails","So funktioniert es","QC-Checkliste","Ratgeber","FAQ","SEO-Artikel"],
  fr:["Accueil","Trouver des produits","Détails produits","Fonctionnement","Contrôle QC","Guides","FAQ","Articles SEO"],
  es:["Inicio","Buscar productos","Detalles","Cómo funciona","Lista QC","Guías","FAQ","Artículos SEO"],
  it:["Home","Trova prodotti","Dettagli prodotti","Come funziona","Checklist QC","Guide","FAQ","Articoli SEO"],
  nl:["Home","Producten zoeken","Productdetails","Zo werkt het","QC-checklist","Gidsen","FAQ","SEO-artikelen"],
  pl:["Strona główna","Znajdź produkty","Szczegóły produktów","Jak to działa","Lista QC","Poradniki","FAQ","Artykuły SEO"],
  pt:["Início","Encontrar produtos","Detalhes","Como funciona","Lista QC","Guias","FAQ","Artigos SEO"],
  sv:["Hem","Hitta produkter","Produktdetaljer","Så fungerar det","QC-checklista","Guider","FAQ","SEO-artiklar"]
};

export const sectionPaths = ["/","/products","/product-details","/how-it-works","/qc-checklist","/guides","/faq","/articles"];
export const sectionKeys = ["products","product-details","how-it-works","qc-checklist","guides","faq","articles"] as const;
export type SectionKey = typeof sectionKeys[number];

export const localizedPath = (lang:string,path:string) => lang === "en" ? path : `/${lang}${path === "/" ? "" : path}`;
