import Link from "next/link";
import { editorialSources, stepsEn, stepsEs } from "./editorial-content";
import { getCopy, getExtra, localPath } from "./i18n";

const stepImages = [
  ["search.webp", 1220, 385, 450],
  ["results.webp", 1180, 547, 547],
  ["buy.webp", 1172, 638, 638],
] as const;

export function BuyingGuide({ locale }: { locale: string }) {
  const spanish = locale === "es-ES";
  const steps = spanish ? stepsEs : stepsEn;
  const language = spanish ? "es" : "en";
  const t = getCopy(locale), e = getExtra(locale);
  const captions = spanish
    ? ["Introduce el número o enlace original", "Abre el resultado que coincide", "Pulsa Comprar en PikoBuy"]
    : ["Enter the item number or seller link", "Open the matching result", "Select Buy on PikoBuy"];
  return <div className="prose illustrated-guide" lang={spanish ? "es-ES" : "en-US"}>
    <nav aria-label={spanish ? "Pasos de compra" : "Buying steps"} className="guide-index">
      {steps.map(([title], i) => <a key={title} href={`#buy-step-${i+1}`}>{i + 1}. {title}</a>)}
    </nav>
    {steps.map(([title, action, check], i) => {
      const image = stepImages[i];
      return <section id={`buy-step-${i+1}`} key={title} className="guide-step">
        <h2>{i + 1}. {title}</h2>
        <p>{action}</p>
        {image && <GuideFigure src={`/guide/${language}-${image[0]}`} width={image[1]} height={image[spanish ? 3 : 2]} caption={captions[i]}/>}
        {i === 3 && <OfficialGuidePhoto step={3} caption={spanish ? "Ejemplo de selección y pedido publicado por PikoBuy" : "PikoBuy’s published selection and ordering example"}/>}
        {i === 4 && <OfficialGuidePhoto step={4} caption={spanish ? "Ejemplo de inspección en almacén publicado por PikoBuy" : "PikoBuy’s published warehouse inspection example"}/>}
        {i === 6 && <GuideFigure src="/guide/official-estimator.jpg" width={1110} height={400}
          caption={spanish ? "Calculadora oficial de PikoBuy: destino, tipo de artículo, peso y medidas" : "PikoBuy’s official calculator: destination, product type, weight and dimensions"}
          source={editorialSources.estimate} arrows={[[98, 27], [98, 49], [22, 71]]}/>}
        {i === 7 && <OfficialGuidePhoto step={5} caption={spanish ? "Ejemplo de preparación y pago del paquete publicado por PikoBuy" : "PikoBuy’s published parcel submission and payment example"}/>}
        {i === 8 && <OfficialGuidePhoto step={6} caption={spanish ? "Ejemplo de seguimiento publicado por PikoBuy" : "PikoBuy’s published tracking example"}/>}
        <p className="guide-check">{check}</p>
        {i === 0 && <Link href={localPath(locale, "products")}>{e.productDetails}</Link>}
        {i === 5 && <a href={editorialSources.returns} target="_blank" rel="noopener noreferrer">{spanish ? "Política de devoluciones de PikoBuy" : "PikoBuy return policy"}</a>}
      </section>;
    })}
    <div className="guide-next">
      <Link href={localPath(locale, "faq")}>FAQ</Link>
      <Link href={localPath(locale, "shipping")}>{t.navShipping}</Link>
      <a href={editorialSources.guide} target="_blank" rel="noopener noreferrer">{spanish ? "Guía oficial de PikoBuy" : "Official PikoBuy guide"}</a>
    </div>
  </div>;
}

const officialMarkers: Record<number, [number, number][]> = {
  3: [[49, 20], [26, 69]],
  4: [[47, 85]],
  5: [[44, 45], [44, 78]],
  6: [[64, 46]],
};

function OfficialGuidePhoto({ step, caption }: { step: number; caption: string }) {
  return <GuideFigure src={`/guide/official-step-${step}.jpg`} width={step === 5 ? 1358 : 1319}
    height={630} caption={caption} source={editorialSources.guide} arrows={officialMarkers[step]}/>;
}

function GuideFigure({ src, width, height, caption, source, arrows }: {
  src: string; width: number; height: number; caption: string; source?: string; arrows?: [number, number][];
}) {
  return <figure className="guide-figure">
    <a href={src} target="_blank" rel="noopener noreferrer">
      <img src={src} width={width} height={height} alt={caption} loading="lazy" decoding="async"/>
      {arrows?.map(([left, top]) => <span className="guide-arrow" style={{ left: `${left}%`, top: `${top}%` }} key={top} aria-hidden="true">←</span>)}
    </a>
    <figcaption>{caption}{source && <> · <a href={source} target="_blank" rel="noopener noreferrer">PikoBuy</a></>}</figcaption>
  </figure>;
}
