import {frenchGuides} from './guide-fr.js';
import {spanishGuides} from './guide-es.js';
import {portugueseGuides} from './guide-pt.js';
import {italianGuides} from './guide-it.js';
import {dutchGuides} from './guide-nl.js';
import {polishGuides} from './guide-pl.js';
// Localized copies retain the complete section order of the source guides.
export const guideTranslations={
fi:{
w2c:{ey:'MISTÄ OSTAA',title:'Löydöstä alkuperäiseen tuotesivuun',intro:'W2C tarkoittaa ”where to cop”: markkinapaikan linkkiä tuotteeseen, jota haluat tutkia tai ostaa.',sections:[
['1. Aloita tuotteesta','Hae taulukosta nimellä, kategorialla tai tuotetunnuksella. Avaa tuote ja vertaa sen myyjän kuvaa, hintaa ja lähdetietoja ennen jatkamista.'],
['2. Tarkista alkuperäinen tuote','Lähdetieto voi muuttua tai kadota. Vahvista valittu väri, koko, myyjän tiedot ja kotimaan toimitus ajantasaisesta ilmoituksesta. Pelkkä kuvakaappaus ei vahvista saatavuutta.'],
['3. Avaa tuote Pikobuyssa','Käytä Pikobuy-ostolinkkiä, kun tuotteella on Weidian-tunnus. Pikobuy näyttää ajantasaiset vaihtoehdot ja kassahinnan. Muut lähteet on tarkistettava erikseen.'],
['4. Tallenna hyödylliset muistiinpanot','Kirjaa valitsemasi vaihtoehto, kokotaulukko ja varastotarkastuksen kysymykset. Hyödyllinen W2C on tunnistettava lähdelinkki, ei laadun tai aitouden tae.'],
['Tunnista linkin kohde ennen avaamista','Hyödyllinen W2C-tieto yksilöi markkinapaikan, myyjän ja tuotteen, ei vain kuvakaappausta. Tarkista, että kohde ja tuotteen nimi vastaavat toisiaan, ja vertaa vaihtoehtoja haluamaasi väriin ja kokoon. Kopioitu linkki voi olla vanhentunut tai johtaa kuvassa olevan tuotteen sijaan lisävarusteeseen.'],
['Kun linkki muuttuu tai ei ole käytettävissä','Hae tarkalla nimellä, näkyvillä tuotetiedoilla tai lähdetunnuksella. Vertaa tulosta useisiin kuviin ja vaihtoehtoluetteloon. Jos vastaavuutta ei voi luotettavasti vahvistaa, jätä tuote pois valikoimasta äläkä esitä samankaltaista tulosta varmistettuna.'],
['Erota lähdetuotteen tunnus luettelotunnuksesta','FindSpreadsheet-tunnus yksilöi sen oman tietueen. Markkinapaikan tuotetunnus yksilöi alkuperäisen ilmoituksen; niitä ei voi käyttää toistensa sijasta. Vientiin sisältyvä kelvollinen Weidian-tunnus yksilöi alkuperäisen ilmoituksen. Käytä muilla markkinapaikoilla alkuperäistä kokonaista tuote-URL-osoitetta ja tarkista kohde huolellisesti.']]},
qc:{ey:'LAADUNVALVONTA',title:'Tarkastele QC-kuvia suunnitelmallisesti',intro:'Varastokuvat auttavat vertaamaan tuotetta tilaukseen ennen kansainvälisen toimituksen järjestämistä.',sections:[
['Vertaa tilaukseen','Tarkista tuote, väri, kokomerkintä ja määrä valitsemaasi vaihtoehtoa vasten. Tutki molemmat puolet ja yleismuoto sekä vertaa yksityiskohtia ilmoitukseen.'],
['Tutki yksityiskohdat','Tarkista vaatteista saumat, painatus, kirjailut, kiinnikkeet ja mitat. Vertaa kengistä paria, pohjakuvioita, kärjen muotoa ja sisäpohjan pituutta. Pyydä välittäjältä lisäkuvia, jos tärkeä yksityiskohta on epäselvä.'],
['Päätä ennen lähettämistä','Ilmoita poikkeamista Pikobuyhyn tuotteen ollessa vielä varastossa. Palautuskelpoisuus, määräajat ja myyjän ehdot vaihtelevat; tarkista ajantasaiset viralliset ehdot.'],
['Mitä kuvat eivät todista','Valokuva ei todista aitoutta, pitkäaikaista kestävyyttä tai elektroniikan toimintaa. Tämä tarkistusvienti ei sisällä QC-kuvasyötettä, joten myyjän tuotekuvia ei merkitä QC-kuviksi.'],
['Tee tarkistuslista ennen tuotteen saapumista','Kirjaa valittu väri, koko ja määrä sekä kaksi tai kolme tuoteryhmälle tärkeää kysymystä. Jos istuvuus on tärkeä, pyydä hupparista rinnanleveys ja pituus; laukusta sisäpuoli, suljin ja mitat. Tarkasti rajattu pyyntö on helpompi arvioida kuin yleinen laatukysymys.'],
['Pyydä tarvittaessa lähikuva','Jos tärkeä yksityiskohta peittyy, pyydä selkeä kuva tai mittaus ennen lähetyspäätöstä. Tarkista lisäpalvelun ajantasainen hinta ja vastaako kuva kysymykseen. Pikobuyn toimitusehdoissa mainitaan rajoituksia erikoistuotteiden ammattimaiselle tarkastukselle.'],
['Tallenna todisteet ja ota yhteys tukeen','Säilytä valittu vaihtoehto, varastotila ja asiaankuuluva kuva yhdessä. Kuvaile poikkeama tarkasti, esimerkiksi tilatun värin ja näkyvän tuotteen ero, ja kysy vaihtoehdoista ja maksuista. Virallinen palautussivu kuvaa ehdot täyttäville tuotteille viiden päivän hakuaikaa, mutta kelpoisuus ja myyjän suostumus ovat edelleen tärkeitä.']]},
shipping:{ey:'TOIMITUSOPAS',title:'Suunnittele kaikki kulut, älä vain tuotteen hintaa',intro:'Ensin maksetaan yleensä tuote ja kotimaan toimitus; kansainvälinen toimitus maksetaan varastotarkastuksen ja pakkaamisen jälkeen.',sections:[
['Arvioi ennen tilaamista','Aloita kohdemaasta, tuotetyypistä sekä arvioidusta painosta ja mitoista. Käytä virallista Pikobuyn toimituslaskuria viitteenä; lopullinen pakattu paino ja reittisäännöt voivat muuttaa hintaa.'],
['Yhdistä tuotteet harkiten','Kun tuotteet ovat saapuneet ja olet hyväksynyt QC-tarkastuksen, valitse yhdistettävät tuotteet. Pakkaus voi vaikuttaa todelliseen ja tilavuuspainoon. Särkyvät tuotteet, akut ja rajoitetut tavarat voivat vaatia eri reitin.'],
['Vertaa reittejä','Tarkista lopullinen hinta, arvioitu toimitusaika, seuranta, vakuutusehdot ja kohdemaan rajoitukset. Halvempi reitti ei automaattisesti ole paras jokaiselle paketille.'],
['Lähetyksen jälkeen','Säilytä seurantanumero ja anna seurantatapahtumille aikaa ilmestyä. Tullaus, tullit ja paikalliset verot riippuvat kohdemaasta ja lähetyksestä; tarkista ajantasaiset viralliset ohjeet kiinteän lupauksen sijaan.'],
['Vertaa todellista painoa ja tilavuuspainoa','Todellinen paino mitataan vaa’alla. Reitti voi huomioida myös paketin mitat laskutettavaa painoa määrittäessään. Älä oleta kaikkien reittien käyttävän samaa kaavaa: syötä pakatun paketin mitat laskuriin ja lue kohdemaallesi näytetyn reitin ehdot.'],
['Tarkista tuotetyyppi ja reittirajoitukset','Kengät, vaatteet, elektroniikka, nesteet ja akut eivät välttämättä sovi samoihin palveluihin. Valitse virallisessa laskurissa oikea tuotetyyppi ja tarkista kunkin reitin rajoitukset, seuranta ja suojaehdot ennen paketin lähettämistä.'],
['Varaa budjettiin kohdemaan kulut','Kansainvälinen rahti on vain osa toimituksen kokonaishintaa. Verot, tullit, tullaus- ja kuljetusyhtiön käsittelymaksut voivat riippua kohdemaasta ja lähetyksestä. Tarkista kohdemaan ajantasaiset viralliset säännöt äläkä pidä taulukon arviota tullitakuuna.']]}
},
de:{
w2c:{ey:'WO KAUFEN',title:'Vom Fund zum ursprünglichen Angebot',intro:'W2C bedeutet „where to cop“: der Marktplatzlink zu dem Artikel, den du recherchieren oder kaufen möchtest.',sections:[
['1. Mit einem Produkt beginnen','Suche im Spreadsheet nach Name, Kategorie oder Artikel-ID. Öffne ein Produkt und vergleiche Angebotsfoto, Preis und Quellenangaben, bevor du fortfährst.'],
['2. Den ursprünglichen Artikel prüfen','Ein Quelldatensatz kann sich ändern oder verschwinden. Bestätige gewählte Farbe, Größe, Verkäuferangaben und Inlandsversand im aktuellen Angebot. Ein Screenshot allein bestätigt keine Verfügbarkeit.'],
['3. In Pikobuy öffnen','Nutze den Pikobuy-Kauflink, wenn eine Weidian-Artikel-ID vorhanden ist. Pikobuy zeigt aktuelle Optionen und den Preis an der Kasse. Andere Quellen müssen separat geprüft werden.'],
['4. Nützliche Notizen aufbewahren','Notiere die gewählte Variante, Größentabelle und Fragen für die Lagerprüfung. Ein nützlicher W2C ist ein identifizierbarer Quelllink, keine Garantie für Qualität oder Echtheit.'],
['Das Ziel vor dem Öffnen erkennen','Ein nützlicher W2C-Datensatz identifiziert Marktplatz, Verkäufer und Artikel statt nur eines Screenshots. Prüfe, ob Ziel und Produktname übereinstimmen, und vergleiche die Optionen mit gewünschter Farbe und Größe. Ein kopierter Link kann veraltet sein oder zu Zubehör statt zum abgebildeten Artikel führen.'],
['Wenn ein Link verändert oder nicht verfügbar ist','Suche mit einem konkreten Namen, sichtbaren Produktdetails oder der Quell-ID. Vergleiche das Ergebnis mit mehreren Fotos und der Optionsliste. Ist keine zuverlässige Zuordnung möglich, lass den Artikel aus deiner Auswahl, statt einen ähnlichen Treffer als bestätigt auszugeben.'],
['Quellartikel-ID und Katalog-ID unterscheiden','Eine FindSpreadsheet-ID bezeichnet den eigenen Datensatz. Die Marktplatz-Artikel-ID bezeichnet das zugrunde liegende Angebot; beide sind nicht austauschbar. Eine gültige Weidian-ID im Export identifiziert das Originalangebot. Verwende bei anderen Marktplätzen die vollständige ursprüngliche Angebots-URL und prüfe das Ziel sorgfältig.']]},
qc:{ey:'QUALITÄTSKONTROLLE',title:'QC-Fotos mit einem Plan prüfen',intro:'Lagerfotos helfen, einen Artikel vor der internationalen Versandplanung mit deiner Bestellung zu vergleichen.',sections:[
['Mit der Bestellung abgleichen','Prüfe Artikel, Farbe, Größenetikett und Menge anhand der gewählten Option. Betrachte beide Seiten und die Gesamtform und vergleiche Details mit dem Angebot.'],
['Genauer hinsehen','Prüfe bei Kleidung Nähte, Druck, Stickerei, Verschlüsse und Maße. Vergleiche bei Schuhen das Paar, Sohlenmuster, Zehenform und Innensohlenlänge. Frage den Agenten nach weiteren Fotos, wenn ein wichtiger Punkt unklar ist.'],
['Vor dem Versand entscheiden','Melde Abweichungen bei Pikobuy, solange der Artikel im Lager ist. Rückgabeberechtigung, Fristen und Verkäuferbedingungen variieren; prüfe die aktuellen offiziellen Bedingungen.'],
['Was Fotos nicht beweisen','Ein Foto belegt weder Echtheit noch langfristige Haltbarkeit oder die Funktion von Elektronik. Dieser Prüfdatenexport enthält keinen QC-Fotofeed; Angebotsbilder werden daher nicht als QC-Fotos bezeichnet.'],
['Vor Ankunft eine Prüfliste erstellen','Notiere gewählte Farbe, Größe und Menge sowie zwei oder drei produktspezifische Fragen. Bitte bei wichtiger Passform um Brust- und Längenmaße eines Hoodies; bei einer Tasche um Innenraum, Verschluss und Maße. Eine konkrete Anfrage lässt sich leichter prüfen als eine allgemeine Qualitätsfrage.'],
['Bei Bedarf ein Detailfoto anfordern','Ist ein wichtiger Punkt verdeckt, bitte vor der Versandentscheidung um ein klares Foto oder Maß. Prüfe die aktuelle Gebühr für Zusatzleistungen und ob das Bild deine Frage beantwortet. Die Pikobuy-Versandbedingungen nennen Grenzen für professionelle Prüfungen spezialisierter Produkte.'],
['Nachweise sichern und Support kontaktieren','Bewahre gewählte Angebotsoption, Lagerstatus und relevantes Bild zusammen auf. Beschreibe die Abweichung konkret, etwa bestellte Farbe gegenüber dem sichtbaren Artikel, und frage nach Optionen und Gebühren. Die offizielle Rückgabeseite beschreibt für berechtigte Artikel ein fünftägiges Antragsfenster; Berechtigung und Zustimmung des Verkäufers bleiben entscheidend.']]},
shipping:{ey:'VERSANDLEITFADEN',title:'Die Gesamtkosten planen, nicht nur den Artikel',intro:'Üblicherweise fallen zuerst Artikel und Inlandsversand an, danach der internationale Versand nach Lagerprüfung und Verpackung.',sections:[
['Vor der Bestellung schätzen','Beginne mit Zielort, Produktart, geschätztem Gewicht und Abmessungen. Nutze den offiziellen Pikobuy-Versandrechner als Orientierung; endgültiges Paketgewicht und Routenregeln können das Angebot ändern.'],
['Artikel überlegt zusammenfassen','Nach Ankunft und Freigabe der QC-Prüfung wähle, welche Artikel du kombinierst. Verpackung kann tatsächliches und Volumengewicht beeinflussen. Zerbrechliche Artikel, Batterien und eingeschränkte Waren können eine andere Route erfordern.'],
['Routen vergleichen','Prüfe Endpreis, geschätzte Lieferzeit, Tracking, Versicherungsbedingungen und Einschränkungen für dein Ziel. Eine günstigere Route ist nicht automatisch für jedes Paket die beste.'],
['Nach dem Versand','Bewahre die Trackingnummer auf und gib den Scans Zeit zu erscheinen. Zoll, Abgaben und lokale Steuern hängen von Ziel und Sendung ab; prüfe aktuelle offizielle Hinweise statt dich auf feste Zusagen zu verlassen.'],
['Tatsächliches und Volumengewicht vergleichen','Das tatsächliche Gewicht wird auf der Waage gemessen. Eine Route kann auch die Paketmaße für das abrechenbare Gewicht berücksichtigen. Gehe nicht von derselben Formel für jede Linie aus: Gib die gepackten Maße in den Rechner ein und lies die Bedingungen der für dein Ziel angezeigten Route.'],
['Produktart und Routenbeschränkungen prüfen','Schuhe, Kleidung, Elektronik, Flüssigkeiten und Batterien sind möglicherweise nicht für dieselben Dienste zugelassen. Wähle die richtige Produktart im offiziellen Rechner und prüfe vor der Paketaufgabe die Einschränkungen sowie Tracking- und Schutzbedingungen jeder Route.'],
['Kosten am Zielort einplanen','Internationale Fracht ist nur ein Teil der Gesamtkosten. Steuern, Zölle, Zollabfertigung oder Bearbeitungsgebühren des Transporteurs können von Ziel und Sendung abhängen. Prüfe die aktuellen offiziellen Regeln des Zielorts und behandle eine Spreadsheet-Schätzung nicht als Zollgarantie.']]}
}
};
guideTranslations.fr=frenchGuides;
guideTranslations.es=spanishGuides;
guideTranslations.pt=portugueseGuides;
guideTranslations.it=italianGuides;
guideTranslations.nl=dutchGuides;
guideTranslations.pl=polishGuides;
