import type { GuideSection } from "./guide-page";

export type ArticleLocale="en"|"de"|"fr"|"es"|"it"|"pt"|"nl"|"pl";
export type ArticlePage="how-pikobuy-works"|"qc-guide"|"shipping-guide"|"buyer-checklist"|"faq";

const sectionTargets:Record<ArticlePage,number>={
 "how-pikobuy-works":8,
 "qc-guide":10,
 "shipping-guide":10,
 "buyer-checklist":12,
 faq:18,
};

const support:Record<ArticleLocale,{paragraphs:[string,string];checks:[string,string,string,string]}>= {
 en:{paragraphs:["Keep the current source, selected option, visible price and review date beside this decision. Mark any missing evidence instead of treating an old spreadsheet entry as live information.","Recheck the live product, warehouse or parcel record before paying or submitting a request. If the evidence conflicts, choose one clear outcome: accept it, request a specific check, or stop."],checks:["Match the current source and selected option","Use visible photos, measurements or parcel data","Record what is still unknown or may change","Make an accept, question or stop decision"]},
 de:{paragraphs:["Speichern Sie aktuelle Quelle, gewählte Variante, sichtbaren Preis und Prüfdatum direkt bei dieser Entscheidung. Fehlende Belege bleiben offen und werden nicht durch alte Tabellendaten ersetzt.","Prüfen Sie Produkt-, Lager- oder Paketdaten vor Zahlung oder Anfrage erneut. Bei Widersprüchen gilt eine klare Entscheidung: akzeptieren, gezielt nachfragen oder stoppen."],checks:["Aktuelle Quelle und Variante abgleichen","Sichtbare Fotos, Maße oder Paketdaten nutzen","Offene oder veränderliche Punkte notieren","Akzeptieren, nachfragen oder stoppen"]},
 fr:{paragraphs:["Conservez la source actuelle, l’option choisie, le prix visible et la date du contrôle avec cette décision. Une preuve manquante reste ouverte au lieu d’être remplacée par une ancienne ligne du tableau.","Vérifiez de nouveau le produit, l’entrepôt ou le colis avant de payer ou d’envoyer une demande. En cas de contradiction, choisissez clairement : accepter, demander une preuve précise ou arrêter."],checks:["Comparer la source et l’option actuelles","Utiliser photos, mesures ou données du colis","Noter ce qui manque ou peut changer","Accepter, questionner ou arrêter"]},
 es:{paragraphs:["Guarda la fuente actual, la opción elegida, el precio visible y la fecha de revisión junto a esta decisión. Una prueba que falta queda pendiente y no se sustituye por una fila antigua.","Vuelve a comprobar el producto, almacén o paquete antes de pagar o enviar una solicitud. Si hay contradicciones, elige con claridad: aceptar, pedir una prueba concreta o parar."],checks:["Comparar la fuente y opción actuales","Usar fotos, medidas o datos del paquete","Anotar lo que falta o puede cambiar","Aceptar, preguntar o parar"]},
 it:{paragraphs:["Conserva fonte attuale, opzione scelta, prezzo visibile e data del controllo insieme alla decisione. Una prova mancante resta aperta e non viene sostituita da una vecchia riga.","Ricontrolla prodotto, magazzino o pacco prima di pagare o inviare una richiesta. In caso di contrasto scegli chiaramente: accettare, chiedere una prova precisa o fermarti."],checks:["Confrontare fonte e opzione attuali","Usare foto, misure o dati del pacco","Annotare ciò che manca o può cambiare","Accettare, chiedere o fermarsi"]},
 pt:{paragraphs:["Guarde a fonte atual, a opção escolhida, o preço visível e a data da verificação junto desta decisão. Uma prova em falta continua pendente e não é substituída por uma linha antiga.","Volte a verificar o produto, armazém ou pacote antes de pagar ou enviar um pedido. Se houver contradição, escolha claramente: aceitar, pedir uma prova específica ou parar."],checks:["Comparar fonte e opção atuais","Usar fotos, medidas ou dados do pacote","Registar o que falta ou pode mudar","Aceitar, perguntar ou parar"]},
 nl:{paragraphs:["Bewaar de actuele bron, gekozen optie, zichtbare prijs en controledatum bij deze beslissing. Ontbrekend bewijs blijft open en wordt niet vervangen door een oude spreadsheetregel.","Controleer product-, magazijn- of pakketgegevens opnieuw voordat je betaalt of een verzoek indient. Kies bij tegenspraak duidelijk: accepteren, gericht bewijs vragen of stoppen."],checks:["Actuele bron en optie vergelijken","Foto’s, maten of pakketgegevens gebruiken","Noteren wat ontbreekt of kan veranderen","Accepteren, vragen of stoppen"]},
 pl:{paragraphs:["Zapisz aktualne źródło, wybrany wariant, widoczną cenę i datę kontroli obok tej decyzji. Brakujący dowód pozostaje otwarty i nie jest zastępowany starym wierszem arkusza.","Sprawdź ponownie produkt, magazyn lub paczkę przed płatnością albo wysłaniem prośby. Przy sprzeczności wybierz jasno: zaakceptuj, poproś o konkretny dowód albo zatrzymaj proces."],checks:["Porównać aktualne źródło i wariant","Użyć zdjęć, wymiarów lub danych paczki","Zapisać braki i zmienne informacje","Zaakceptować, zapytać lub zatrzymać"]},
};

function exactlyThreeParagraphs(section:GuideSection,lang:ArticleLocale){
 const source=[...(section.paragraphs||[])];
 const additions=support[lang].paragraphs;
 while(source.length<3)source.push(additions[source.length%2]);
 if(source.length>3)return [source[0],source[1],source.slice(2).join(" ")];
 return source;
}

function exactlyFourChecks(section:GuideSection,lang:ArticleLocale){
 const original=[...(section.bullets||[]),...(section.steps||[]).map(step=>`${step.title}: ${step.text}`)];
 const items=[...original];
 for(const fallback of support[lang].checks){if(items.length>=4)break;items.push(fallback);}
 if(items.length>4)return [items[0],items[1],items[2],items.slice(3).join(" · ")];
 return items;
}

export function normalizeArticleSections(sections:GuideSection[],lang:ArticleLocale,page:ArticlePage):GuideSection[]{
 const expected=sectionTargets[page];
 if(sections.length!==expected)throw new Error(`SEO article parity failed: ${lang}/${page} has ${sections.length} sections; expected ${expected}.`);
 return sections.map(section=>({heading:section.heading,paragraphs:exactlyThreeParagraphs(section,lang),bullets:exactlyFourChecks(section,lang)}));
}
