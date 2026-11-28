import { getCopy, getExtra, localPath } from "./i18n";
import { getLocalizedFaq, getLocalizedContent } from "./localized-content";
import { getShippingCopy } from "./shipping-copy";

const officialGuide = "https://www.pikobuy.com/guide";
const estimator = "https://www.pikobuy.com/shipping-cost";

const steps: Record<string, string> = {
  en: "Find an item on the spreadsheet|Check the listing and open PikoBuy|Choose options and pay for the item|Review the warehouse inspection|Estimate shipping to your country|Submit and pay for the parcel|Track delivery",
  sv: "Hitta en vara i katalogen|Kontrollera annonsen och öppna PikoBuy|Välj variant och betala varan|Granska lagerkontrollen|Beräkna frakt till ditt land|Skicka in och betala paketet|Spåra leveransen",
  de: "Artikel im Katalog finden|Angebot prüfen und PikoBuy öffnen|Variante auswählen und Artikel bezahlen|Lagerprüfung ansehen|Versandkosten ins Zielland schätzen|Paket anmelden und bezahlen|Lieferung verfolgen",
  fr: "Trouver un article dans le catalogue|Vérifier l’annonce et ouvrir PikoBuy|Choisir la variante et payer l’article|Examiner le contrôle en entrepôt|Estimer la livraison vers votre pays|Soumettre et payer le colis|Suivre la livraison",
  es: "Busca un artículo en el catálogo|Revisa el anuncio y abre PikoBuy|Elige la variante y paga el artículo|Revisa la inspección del almacén|Estima el envío a tu país|Envía la solicitud y paga el paquete|Sigue la entrega",
  it: "Trova un articolo nel catalogo|Verifica l’inserzione e apri PikoBuy|Scegli la variante e paga l’articolo|Controlla l’ispezione in magazzino|Stima la spedizione nel tuo paese|Invia e paga il pacco|Segui la consegna",
  nl: "Zoek een artikel in de catalogus|Controleer de aanbieding en open PikoBuy|Kies een variant en betaal het artikel|Bekijk de magazijncontrole|Schat de verzendkosten naar je land|Meld het pakket aan en betaal|Volg de levering",
  pl: "Znajdź produkt w katalogu|Sprawdź ofertę i otwórz PikoBuy|Wybierz wariant i zapłać za produkt|Sprawdź kontrolę magazynową|Oszacuj wysyłkę do swojego kraju|Zgłoś i opłać paczkę|Śledź dostawę",
  pt: "Encontre um artigo no catálogo|Verifique o anúncio e abra o PikoBuy|Escolha a variante e pague o artigo|Confira a inspeção no armazém|Estime o envio para o seu país|Submeta e pague a encomenda|Acompanhe a entrega",
  da: "Find en vare i kataloget|Tjek annoncen, og åbn PikoBuy|Vælg variant, og betal for varen|Se lagerkontrollen|Beregn fragt til dit land|Indsend og betal pakken|Følg leveringen",
  nb: "Finn en vare i katalogen|Sjekk annonsen og åpne PikoBuy|Velg variant og betal varen|Se lagerkontrollen|Beregn frakt til landet ditt|Send inn og betal for pakken|Spor leveringen",
  fi: "Etsi tuote luettelosta|Tarkista ilmoitus ja avaa PikoBuy|Valitse vaihtoehto ja maksa tuote|Tarkista varastotarkastus|Arvioi toimitus maahasi|Lähetä pakettipyyntö ja maksa|Seuraa toimitusta",
  cs: "Najděte zboží v katalogu|Zkontrolujte nabídku a otevřete PikoBuy|Vyberte variantu a zaplaťte zboží|Prohlédněte skladovou kontrolu|Odhadněte cenu dopravy do své země|Odešlete požadavek a zaplaťte zásilku|Sledujte doručení",
  ro: "Găsește un articol în catalog|Verifică oferta și deschide PikoBuy|Alege varianta și plătește articolul|Verifică inspecția din depozit|Estimează transportul spre țara ta|Trimite cererea și plătește coletul|Urmărește livrarea",
  hu: "Keress terméket a katalógusban|Ellenőrizd az ajánlatot és nyisd meg a PikoBuyt|Válassz változatot és fizess a termékért|Nézd át a raktári ellenőrzést|Becsüld meg a szállítást az országodba|Add le és fizesd ki a csomagküldést|Kövesd a szállítást",
  el: "Βρες προϊόν στον κατάλογο|Έλεγξε την καταχώριση και άνοιξε το PikoBuy|Διάλεξε παραλλαγή και πλήρωσε το προϊόν|Έλεγξε την επιθεώρηση αποθήκης|Υπολόγισε τα μεταφορικά προς τη χώρα σου|Υπόβαλε και πλήρωσε το δέμα|Παρακολούθησε την παράδοση",
  bg: "Намерете артикул в каталога|Проверете офертата и отворете PikoBuy|Изберете вариант и платете артикула|Прегледайте складовата проверка|Изчислете доставката до вашата държава|Заявете и платете пратката|Проследете доставката",
  hr: "Pronađite artikl u katalogu|Provjerite oglas i otvorite PikoBuy|Odaberite varijantu i platite artikl|Pregledajte skladišnu kontrolu|Procijenite dostavu u svoju državu|Podnesite zahtjev i platite paket|Pratite dostavu",
  sk: "Nájdite položku v katalógu|Skontrolujte ponuku a otvorte PikoBuy|Vyberte variant a zaplaťte tovar|Pozrite si kontrolu v sklade|Odhadnite dopravu do svojej krajiny|Podajte žiadosť a zaplaťte balík|Sledujte doručenie",
  sl: "Poiščite izdelek v katalogu|Preverite ponudbo in odprite PikoBuy|Izberite različico in plačajte izdelek|Preglejte skladiščni pregled|Ocenite dostavo v svojo državo|Oddajte zahtevek in plačajte paket|Spremljajte dostavo",
  et: "Leia toode kataloogist|Kontrolli pakkumist ja ava PikoBuy|Vali variant ja maksa toote eest|Vaata laokontrolli|Hinda saatmist oma riiki|Esita pakitaotlus ja maksa|Jälgi kohaletoimetamist",
  lt: "Raskite prekę kataloge|Patikrinkite skelbimą ir atverkite PikoBuy|Pasirinkite variantą ir sumokėkite už prekę|Peržiūrėkite sandėlio patikrą|Įvertinkite siuntimą į savo šalį|Pateikite siuntos užsakymą ir sumokėkite|Sekite pristatymą",
};

const figures = [
  ["official-step-1.jpg", [[85, 59]]], ["official-step-2.jpg", [[47, 53]]],
  ["official-step-3.jpg", [[49, 20], [26, 69]]],
  ["official-step-4.jpg", [[47, 85]]],
  ["official-estimator.jpg", [[94, 27], [94, 49], [22, 71]]],
  ["official-step-5.jpg", [[44, 45], [44, 78]]],
  ["official-step-6.jpg", [[64, 46]]],
] as const;

export function BuyingGuide({locale}: {locale: string}) {
  const copy = getCopy(locale), extra = getExtra(locale);
  const titles = (steps[locale.split("-")[0]] ?? steps.en).split("|");
  const facts = getLocalizedFaq(locale, extra.independent);
  const localized = getLocalizedContent(locale);
  const shipping = getShippingCopy(locale);
  const paragraphs = [
    facts[1].answer, facts[0].answer, facts[3].answer, facts[4].answer,
    shipping.calloutBody, facts[2].answer, facts[8].answer,
  ];
  if (locale === "en-US") {
    paragraphs[0] = "Type a product name, Weidian ID or seller URL in the search box. Select Search and open the matching result.";
    paragraphs[1] = "Check the gallery and available options on the item page. Select Buy on PikoBuy to open the matching listing.";
    paragraphs[2] = "On PikoBuy, choose the variant, size and quantity. Review the item and domestic delivery charges before submitting the order.";
  }
  if (locale === "sv-SE") {
    paragraphs[0] = "Skriv produktnamnet, Weidian-ID eller säljarens länk i sökfältet. Välj Sök och öppna rätt träff.";
    paragraphs[1] = "Kontrollera bilderna och tillgängliga alternativ. Välj Köp via PikoBuy för att öppna samma annons.";
    paragraphs[2] = "Välj variant, storlek och antal på PikoBuy. Kontrollera varans pris och den inhemska frakten innan du skickar beställningen.";
  }
  const sources = [localPath(locale, "products"), localPath(locale, "product/271"), officialGuide, officialGuide, estimator, officialGuide, officialGuide];
  return <section>
    <h1>{copy.workflow}</h1>
    <p className="lead">{extra.workflowIntro}</p>
    <ol className="guide-index">{titles.map((title, i) =>
      <li key={title}><a href={`#step-${i + 1}`}>{title}</a></li>)}</ol>
    {titles.map((title, i) => {
      const [file, markers] = figures[i];
      return <section className="buy-step" id={`step-${i + 1}`} key={title}>
        <h2>{i + 1}. {title}</h2>
        <p>{paragraphs[i]}</p>
        <figure>
          <a className="guide-image" href={`/guide/${file}`}>
            <img src={`/guide/${file}`} alt={title} loading="lazy"/>
            {markers.map(([left, top]) => <span key={top} className="guide-marker" style={{left: `${left}%`, top: `${top}%`}} aria-hidden="true">←</span>)}
          </a>
          <figcaption>
            {i < 2 && <><a href={sources[i]}>{extra.viewPage} · pikobuyspreadsheet.se</a> · </>}
            <a href={i === 4 ? estimator : officialGuide}>PikoBuy · {localized.guide}</a>
          </figcaption>
        </figure>
      </section>;
    })}
  </section>;
}
