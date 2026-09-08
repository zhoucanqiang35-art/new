import { ArrowRight, Camera, ExternalLink, PackageCheck, Ruler } from "lucide-react";

type Locale = "en"|"de"|"fr"|"es"|"it"|"pt"|"nl"|"pl";
type ProductItem = readonly [string, string, string];

const copy: Record<Locale,{inspect:string;source:string;sourceText:string;qc:string;qcText:string;parcel:string;parcelText:string;live:string;view:string}> = {
  en:{inspect:"PRODUCT-SPECIFIC CHECKS",source:"Source & option",sourceText:"Save the source page, selected variant and live price.",qc:"QC decision",qcText:"Match the received item to the selected option and request any missing view.",parcel:"Parcel record",parcelText:"Record warehouse weight and packed dimensions before choosing a route.",live:"Check current product data",view:"View products"},
  de:{inspect:"PRODUKTSPEZIFISCHE PRÜFUNGEN",source:"Quelle & Variante",sourceText:"Quellseite, gewählte Variante und aktuellen Preis speichern.",qc:"QC-Entscheidung",qcText:"Lagerartikel mit der Auswahl abgleichen und fehlende Ansicht anfordern.",parcel:"Paketdaten",parcelText:"Lagergewicht und Paketmaße vor der Routenwahl dokumentieren.",live:"Aktuelle Produktdaten prüfen",view:"Produkte ansehen"},
  fr:{inspect:"CONTRÔLES PROPRES AU PRODUIT",source:"Source et option",sourceText:"Conserver la page source, l’option choisie et le prix actuel.",qc:"Décision QC",qcText:"Comparer l’article reçu à l’option choisie et demander toute vue manquante.",parcel:"Données du colis",parcelText:"Noter le poids d’entrepôt et les dimensions emballées avant la route.",live:"Vérifier les données actuelles",view:"Voir les produits"},
  es:{inspect:"CONTROLES ESPECÍFICOS",source:"Fuente y opción",sourceText:"Guarda la fuente, la variante elegida y el precio actual.",qc:"Decisión QC",qcText:"Compara el artículo recibido con la opción elegida y pide la vista que falte.",parcel:"Datos del paquete",parcelText:"Anota peso de almacén y medidas embaladas antes de elegir ruta.",live:"Revisar datos actuales",view:"Ver productos"},
  it:{inspect:"CONTROLLI SPECIFICI",source:"Fonte e opzione",sourceText:"Salva la fonte, la variante scelta e il prezzo attuale.",qc:"Decisione QC",qcText:"Confronta l’articolo ricevuto con l’opzione scelta e chiedi le viste mancanti.",parcel:"Dati del pacco",parcelText:"Registra peso e misure imballate prima di scegliere la rotta.",live:"Controlla i dati attuali",view:"Vedi prodotti"},
  pt:{inspect:"VERIFICAÇÕES DO PRODUTO",source:"Fonte e opção",sourceText:"Guarde a fonte, a variante escolhida e o preço atual.",qc:"Decisão QC",qcText:"Compare o artigo recebido com a opção escolhida e peça a vista em falta.",parcel:"Dados do pacote",parcelText:"Registe peso e dimensões embaladas antes de escolher a rota.",live:"Verificar dados atuais",view:"Ver produtos"},
  nl:{inspect:"PRODUCTSPECIFIEKE CONTROLES",source:"Bron en optie",sourceText:"Bewaar bronpagina, gekozen variant en actuele prijs.",qc:"QC-besluit",qcText:"Vergelijk het ontvangen artikel met de keuze en vraag ontbrekende beelden.",parcel:"Pakketgegevens",parcelText:"Noteer magazijngewicht en verpakte maten vóór de routekeuze.",live:"Controleer actuele gegevens",view:"Bekijk producten"},
  pl:{inspect:"KONTROLE WŁAŚCIWE DLA PRODUKTU",source:"Źródło i wariant",sourceText:"Zapisz stronę źródłową, wybrany wariant i aktualną cenę.",qc:"Decyzja QC",qcText:"Porównaj otrzymany produkt z wyborem i poproś o brakujące ujęcie.",parcel:"Dane paczki",parcelText:"Zapisz wagę magazynową i wymiary paczki przed wyborem trasy.",live:"Sprawdź aktualne dane",view:"Zobacz produkty"}
};

export default function ProductDetailCards({items,lang="en"}:{items:readonly ProductItem[];lang?:Locale}){
  const t=copy[lang];
  return <div className="product-detail-grid">{items.map(([name,checks,route],index)=><article className="product-detail-card" key={name}>
    <div className="detail-card-head"><div className="detail-number">{String(index+1).padStart(2,"0")}</div><div><span>{t.inspect}</span><h3>{name}</h3></div></div>
    <div className="detail-tags">{checks.split(",").map(item=><span key={item}>{item.trim()}</span>)}</div>
    <div className="detail-facts">
      <div><ExternalLink/><p><b>{t.source}</b>{t.sourceText}</p></div>
      <div><Camera/><p><b>{t.qc}</b>{t.qcText}</p></div>
      <div><Ruler/><p><b>{t.parcel}</b>{t.parcelText}</p></div>
    </div>
    <div className="detail-card-foot"><span><PackageCheck size={15}/>{t.live}</span><a href={`https://findspreadsheet.com/${route}/`} target="_blank" rel="noopener noreferrer">{t.view}<ArrowRight size={15}/></a></div>
  </article>)}</div>;
}
