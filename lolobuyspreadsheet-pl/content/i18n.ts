import generated from "@/content/generated-translations.json";
import articleDe from "@/content/article-translations/de.json";
import articleFr from "@/content/article-translations/fr.json";
import articleEs from "@/content/article-translations/es.json";
import articleIt from "@/content/article-translations/it.json";
import articleNl from "@/content/article-translations/nl.json";
import articlePl from "@/content/article-translations/pl.json";
import articlePt from "@/content/article-translations/pt.json";
import articleSv from "@/content/article-translations/sv.json";

type LanguageTable = Record<string, Record<string, string>>;
const tables = generated as LanguageTable;
const articleTables: LanguageTable = {
  de: articleDe,
  fr: articleFr,
  es: articleEs,
  it: articleIt,
  nl: articleNl,
  pl: articlePl,
  pt: articlePt,
  sv: articleSv,
};

const fixed: LanguageTable = {
  de:{"Browse product database":"Produktdatenbank öffnen","languages":"Sprachen","categories":"Kategorien","buyer checks":"Käuferprüfungen","CURATED DISCOVERY":"AUSGEWÄHLTE ENTDECKUNGEN","Compare first.":"Zuerst vergleichen.","Buy informed.":"Informiert kaufen.","Fact boundary":"Faktengrundlage","Open database":"Datenbank öffnen","Back to home":"Zurück zur Startseite","Open":"Öffnen","Continue to the product database":"Weiter zur Produktdatenbank","Open FindSpreadsheet":"FindSpreadsheet öffnen","Independent guide · No checkout or payment collection":"Unabhängiger Ratgeber · Kein Checkout und keine Zahlungsabwicklung"},
  fr:{"Browse product database":"Ouvrir la base de produits","languages":"langues","categories":"catégories","buyer checks":"contrôles acheteur","CURATED DISCOVERY":"SÉLECTION ORGANISÉE","Compare first.":"Comparez d’abord.","Buy informed.":"Achetez informé.","Fact boundary":"Cadre factuel","Open database":"Ouvrir la base","Back to home":"Retour à l’accueil","Open":"Ouvrir","Continue to the product database":"Continuer vers la base de produits","Open FindSpreadsheet":"Ouvrir FindSpreadsheet","Independent guide · No checkout or payment collection":"Guide indépendant · Aucun paiement ni passage en caisse"},
  es:{"Browse product database":"Abrir la base de productos","languages":"idiomas","categories":"categorías","buyer checks":"controles del comprador","CURATED DISCOVERY":"SELECCIÓN ORGANIZADA","Compare first.":"Compara primero.","Buy informed.":"Compra con información.","Fact boundary":"Base factual","Open database":"Abrir la base","Back to home":"Volver al inicio","Open":"Abrir","Continue to the product database":"Continuar a la base de productos","Open FindSpreadsheet":"Abrir FindSpreadsheet","Independent guide · No checkout or payment collection":"Guía independiente · Sin pagos ni proceso de compra"},
  it:{"Browse product database":"Apri il database prodotti","languages":"lingue","categories":"categorie","buyer checks":"controlli acquirente","CURATED DISCOVERY":"SELEZIONE CURATA","Compare first.":"Prima confronta.","Buy informed.":"Acquista informato.","Fact boundary":"Base dei fatti","Open database":"Apri il database","Back to home":"Torna alla home","Open":"Apri","Continue to the product database":"Continua al database prodotti","Open FindSpreadsheet":"Apri FindSpreadsheet","Independent guide · No checkout or payment collection":"Guida indipendente · Nessun checkout o pagamento"},
  nl:{"Browse product database":"Productdatabase openen","languages":"talen","categories":"categorieën","buyer checks":"koperscontroles","CURATED DISCOVERY":"ZORGVULDIG GESELECTEERD","Compare first.":"Vergelijk eerst.","Buy informed.":"Koop geïnformeerd.","Fact boundary":"Feitelijke basis","Open database":"Database openen","Back to home":"Terug naar home","Open":"Openen","Continue to the product database":"Verder naar de productdatabase","Open FindSpreadsheet":"FindSpreadsheet openen","Independent guide · No checkout or payment collection":"Onafhankelijke gids · Geen checkout of betalingen"},
  pl:{"Browse product database":"Otwórz bazę produktów","languages":"języków","categories":"kategorii","buyer checks":"kontrole kupującego","CURATED DISCOVERY":"STARANNIE WYBRANE","Compare first.":"Najpierw porównaj.","Buy informed.":"Kupuj świadomie.","Fact boundary":"Podstawa faktów","Open database":"Otwórz bazę","Back to home":"Wróć na stronę główną","Open":"Otwórz","Continue to the product database":"Przejdź do bazy produktów","Open FindSpreadsheet":"Otwórz FindSpreadsheet","Independent guide · No checkout or payment collection":"Niezależny poradnik · Bez koszyka i płatności"},
  pt:{"Browse product database":"Abrir a base de produtos","languages":"idiomas","categories":"categorias","buyer checks":"verificações do comprador","CURATED DISCOVERY":"SELEÇÃO CURADA","Compare first.":"Compare primeiro.","Buy informed.":"Compre informado.","Fact boundary":"Base factual","Open database":"Abrir base","Back to home":"Voltar ao início","Open":"Abrir","Continue to the product database":"Continuar para a base de produtos","Open FindSpreadsheet":"Abrir FindSpreadsheet","Independent guide · No checkout or payment collection":"Guia independente · Sem checkout ou pagamentos"},
  sv:{"Browse product database":"Öppna produktdatabasen","languages":"språk","categories":"kategorier","buyer checks":"köparkontroller","CURATED DISCOVERY":"NOGA UTVALT","Compare first.":"Jämför först.","Buy informed.":"Köp informerat.","Fact boundary":"Faktagrund","Open database":"Öppna databasen","Back to home":"Tillbaka till startsidan","Open":"Öppna","Continue to the product database":"Fortsätt till produktdatabasen","Open FindSpreadsheet":"Öppna FindSpreadsheet","Independent guide · No checkout or payment collection":"Oberoende guide · Ingen kassa eller betalningshantering"}
};

export const tr = (lang:string,text:string) => lang === "en" ? text : articleTables[lang]?.[text] || fixed[lang]?.[text] || tables[lang]?.[text] || text;
