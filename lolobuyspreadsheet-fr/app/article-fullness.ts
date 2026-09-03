import type { Locale } from "./site-i18n";

// These additions keep every translated article at the same full reading depth as
// the English source. Each one expands the matching section without adding claims.
export const articleAdditions: Record<Exclude<Locale,"en">, readonly string[]> = {
fr:[
"Avant de comparer, fixez aussi un budget total et le pays de destination. Cette préparation n’ajoute aucune certitude au prix final, mais elle empêche de confondre le prix affiché avec une décision complète. Si une information essentielle manque, notez-la comme inconnue au lieu de la remplacer par une supposition.",
"Une annonce claire permet de contrôler plus tard ce qui a été choisi. Conservez le titre, la variante, les mesures et les photos qui ont motivé votre sélection. Vous pourrez alors comparer la preuve d’entrepôt au même article, plutôt qu’à un souvenir ou à une image partagée sans contexte.",
"L’objectif n’est pas de demander une certitude impossible, mais de disposer d’éléments suffisamment précis pour continuer ou s’arrêter. Gardez les dates et le statut de chaque article. Lorsque des articles n’avancent pas au même rythme, cette liste montre ce qui est prêt et ce qui exige encore une décision.",
"Les chiffres ne sont utiles que si leurs hypothèses restent visibles. Un montant précis peut sembler rassurant tout en cachant des mesures ou des lignes inconnues. Une estimation honnête doit donc indiquer ce qui est connu, ce qui dépend du colis réel et ce qui doit être vérifié au moment de l’envoi.",
"Cette méthode ne promet pas un résultat sans risque. Elle donne au lecteur un ordre de vérification reproductible : identifier, conserver la preuve, contrôler, puis choisir avec les informations alors disponibles. C’est plus utile qu’une règle universelle, car les options affichées et le pays de destination restent déterminants."
],
de:[
"Legen Sie vor dem Vergleich außerdem Gesamtbudget und Zielland fest. Das macht aus einem Preis keine Endzusage, verhindert aber die Verwechslung von Listenpreis und vollständiger Entscheidung. Fehlt eine wesentliche Information, halten Sie sie als unbekannt fest, statt sie durch eine Annahme zu ersetzen.",
"Ein klar gelesenes Listing lässt sich später überprüfen. Speichern Sie Titel, Variante, Maße und die Fotos, die Ihre Auswahl begründet haben. So vergleichen Sie Lagerbelege mit genau diesem Artikel und nicht mit einer Erinnerung oder einem Bild ohne Zusammenhang.",
"Ziel ist keine unmögliche Sicherheit, sondern genug konkrete Hinweise für Weitergehen oder Anhalten. Notieren Sie Datum und Status jedes Artikels. Wenn Artikel unterschiedlich schnell vorankommen, zeigt diese Liste, was bereit ist und worüber noch entschieden werden muss.",
"Zahlen helfen nur, wenn ihre Annahmen sichtbar bleiben. Ein genauer Betrag kann beruhigend wirken und trotzdem unbekannte Maße oder Linien verbergen. Eine ehrliche Schätzung nennt daher Bekanntes, Abhängigkeiten vom realen Paket und Punkte, die erst beim Versand geprüft werden können.",
"Diese Methode verspricht kein risikofreies Ergebnis. Sie liefert eine wiederholbare Reihenfolge: identifizieren, Beleg sichern, prüfen und dann mit den verfügbaren Informationen entscheiden. Das ist hilfreicher als eine allgemeine Regel, denn sichtbare Optionen und Zielland bleiben ausschlaggebend."
],
es:[
"Antes de comparar, fija también el presupuesto total y el país de destino. Eso no convierte un precio en una certeza final, pero evita confundir el importe mostrado con una decisión completa. Si falta un dato esencial, anótalo como desconocido en lugar de rellenarlo con una suposición.",
"Un anuncio leído con claridad puede comprobarse después. Guarda título, variante, medidas y fotos que justificaron la elección. Así compararás la evidencia del almacén con ese mismo artículo, no con un recuerdo o una imagen compartida sin contexto.",
"El objetivo no es exigir una certeza imposible, sino reunir pruebas concretas suficientes para continuar o parar. Guarda fecha y estado de cada artículo. Cuando los artículos avanzan a ritmos distintos, esta lista muestra qué está listo y qué todavía necesita una decisión.",
"Las cifras solo sirven si sus supuestos siguen visibles. Una cantidad exacta puede tranquilizar y al mismo tiempo ocultar medidas o líneas desconocidas. Una estimación honesta debe indicar lo conocido, lo que depende del paquete real y lo que se revisará al enviar.",
"Este método no promete un resultado sin riesgo. Ofrece una secuencia repetible: identificar, conservar pruebas, comprobar y decidir con la información disponible. Es más útil que una regla universal, porque las opciones visibles y el país de destino siguen siendo decisivos."
],
it:[
"Prima di confrontare, fissa anche il budget totale e il paese di destinazione. Questo non trasforma un prezzo in una certezza finale, ma evita di confondere l’importo mostrato con una decisione completa. Se manca un dato essenziale, segnalo come sconosciuto invece di sostituirlo con un’ipotesi.",
"Un annuncio letto con attenzione può essere verificato in seguito. Conserva titolo, variante, misure e foto che hanno motivato la scelta. In questo modo confronterai la prova del magazzino con lo stesso articolo, non con un ricordo o una foto condivisa senza contesto.",
"Lo scopo non è chiedere una certezza impossibile, ma raccogliere elementi concreti sufficienti per proseguire o fermarsi. Annota data e stato di ogni articolo. Quando gli articoli avanzano a velocità diverse, l’elenco mostra cosa è pronto e cosa richiede ancora una decisione.",
"I numeri aiutano solo se le loro ipotesi restano visibili. Un importo preciso può rassicurare e nascondere misure o linee sconosciute. Una stima onesta indica ciò che è noto, ciò che dipende dal pacco reale e ciò che va ricontrollato al momento della spedizione.",
"Questo metodo non promette un esito senza rischi. Offre una sequenza ripetibile: identificare, conservare prove, verificare e decidere con le informazioni disponibili. È più utile di una regola universale, perché opzioni visibili e paese di destinazione restano determinanti."
],
pt:[
"Antes de comparar, defina também o orçamento total e o país de destino. Isto não torna um preço numa certeza final, mas evita confundir o valor apresentado com uma decisão completa. Se faltar uma informação essencial, registe-a como desconhecida em vez de a substituir por uma suposição.",
"Um anúncio lido com clareza pode ser confirmado mais tarde. Guarde título, variante, medidas e fotos que justificaram a escolha. Assim compara a evidência do armazém com esse mesmo artigo, e não com uma memória ou uma imagem partilhada sem contexto.",
"O objetivo não é exigir certeza impossível, mas reunir elementos concretos suficientes para avançar ou parar. Anote data e estado de cada artigo. Quando os artigos avançam a ritmos diferentes, a lista mostra o que está pronto e o que ainda precisa de decisão.",
"Os números só ajudam se os pressupostos continuarem visíveis. Um valor exato pode parecer tranquilizador e esconder medidas ou linhas desconhecidas. Uma estimativa honesta deve indicar o que se sabe, o que depende do pacote real e o que será confirmado no envio.",
"Este método não promete um resultado sem risco. Oferece uma sequência repetível: identificar, guardar provas, verificar e decidir com a informação disponível. É mais útil do que uma regra universal, porque as opções visíveis e o país de destino continuam decisivos."
],
nl:[
"Leg vóór je vergelijkt ook het totale budget en bestemmingsland vast. Dat maakt een prijs niet definitief, maar voorkomt dat je het getoonde bedrag met een volledige beslissing verwart. Ontbreekt essentiële informatie, noteer die dan als onbekend in plaats van een aanname te gebruiken.",
"Een zorgvuldig gelezen listing kun je later controleren. Bewaar titel, variant, maten en foto’s die je keuze ondersteunden. Zo vergelijk je magazijnbewijs met precies dat artikel, niet met een herinnering of een gedeelde foto zonder context.",
"Het doel is niet om onmogelijke zekerheid te eisen, maar om genoeg concrete informatie te verzamelen om door te gaan of te stoppen. Noteer datum en status per artikel. Als artikelen in verschillend tempo verdergaan, toont deze lijst wat klaar is en waar nog een beslissing nodig is.",
"Getallen helpen alleen als de aannames zichtbaar blijven. Een exact bedrag kan geruststellen en tegelijk onbekende maten of lijnen verbergen. Een eerlijke schatting vermeldt dus wat bekend is, wat van het werkelijke pakket afhangt en wat bij verzending opnieuw moet worden gecontroleerd.",
"Deze methode belooft geen risicoloze uitkomst. Zij biedt een herhaalbare volgorde: identificeren, bewijs bewaren, controleren en beslissen met de beschikbare informatie. Dat is nuttiger dan een universele regel, omdat zichtbare opties en bestemmingsland doorslaggevend blijven."
],
pl:[
"Przed porównaniem ustal również całkowity budżet i kraj przeznaczenia. Nie zmienia to ceny w pewność końcową, ale zapobiega myleniu pokazanej kwoty z pełną decyzją. Gdy brakuje istotnej informacji, zapisz ją jako nieznaną zamiast zastępować przypuszczeniem.",
"Ofertę przeczytaną uważnie można później sprawdzić. Zachowaj tytuł, wariant, wymiary i zdjęcia, które uzasadniły wybór. Dzięki temu porównasz dowód z magazynu z tym samym produktem, a nie ze wspomnieniem lub zdjęciem bez kontekstu.",
"Celem nie jest żądanie niemożliwej pewności, lecz zebranie dość konkretnych informacji, by kontynuować albo się zatrzymać. Zapisuj datę i status każdego produktu. Gdy produkty postępują w różnym tempie, lista pokazuje co jest gotowe, a co nadal wymaga decyzji.",
"Liczby pomagają tylko wtedy, gdy ich założenia pozostają widoczne. Dokładna kwota może uspokajać, a jednocześnie ukrywać nieznane wymiary lub linie. Uczciwa wycena powinna podawać to, co znane, zależności od prawdziwej paczki i elementy do sprawdzenia przy wysyłce.",
"Ta metoda nie obiecuje wyniku bez ryzyka. Daje powtarzalną kolejność: zidentyfikować, zachować dowody, sprawdzić i zdecydować na podstawie dostępnych informacji. Jest użyteczniejsza niż uniwersalna reguła, ponieważ widoczne opcje i kraj przeznaczenia nadal decydują."
],
sv:[
"Bestäm också total budget och destinationsland innan du jämför. Det gör inte ett pris till ett slutligt löfte, men hindrar att visat belopp förväxlas med ett komplett beslut. Saknas viktig information ska den noteras som okänd, inte fyllas i med ett antagande.",
"En annons som lästs noggrant kan kontrolleras senare. Spara titel, variant, mått och bilder som låg bakom valet. Då jämför du lagerbevis med just samma vara, inte med ett minne eller en delad bild utan sammanhang.",
"Målet är inte att kräva omöjlig säkerhet utan att samla tillräckligt konkreta underlag för att fortsätta eller stanna. Skriv datum och status för varje vara. När varor går framåt i olika takt visar listan vad som är klart och vad som fortfarande kräver beslut.",
"Siffror hjälper bara när antagandena syns. Ett exakt belopp kan kännas tryggt och samtidigt dölja okända mått eller linjer. En ärlig uppskattning bör därför ange det kända, det som beror på verkligt paket och det som måste kontrolleras vid frakt.",
"Metoden lovar inte ett riskfritt resultat. Den ger en upprepbar ordning: identifiera, spara bevis, kontrollera och besluta med tillgänglig information. Det är mer användbart än en universell regel, eftersom synliga alternativ och destinationsland fortfarande avgör."
]
};
