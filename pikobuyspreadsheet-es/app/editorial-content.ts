export const editorialSources = {
  guide: "https://www.pikobuy.com/guide",
  estimate: "https://www.pikobuy.com/shipping-cost",
  returns: "https://www.pikobuy.com/protocol/returns",
  forwarding: "https://www.pikobuy.com/protocol/shipping",
  terms: "https://www.pikobuy.com/protocol/terms",
  support: "https://www.pikobuy.com/contact",
  vat: "https://taxation-customs.ec.europa.eu/taxation/vat/vat-directive/taxable-transactions_en",
  territories: "https://taxation-customs.ec.europa.eu/buying-online-other-territories_en",
} as const;

type Source = keyof typeof editorialSources;
type FaqEntry = readonly [string, string, Source?];
export const faqEn: readonly FaqEntry[] = [
  ["What is this PikoBuy spreadsheet?", "It is an independent catalog that helps you find and compare listings from FindSpreadsheet. You can search here, open an item, and follow its PikoBuy purchase link where available. The subsite does not take payments, operate a warehouse or handle returns."],
  ["How do I find a specific item?", "Enter a name, Weidian item number or the original link in the search box. Use the category menu for a wider browse. When two items look alike, compare the seller item number and options before choosing."],
  ["Where do I find the original product link?", "Open the item page and use the copy button where an original Weidian link is available. Save the link and the selected color, size and quantity together. Some listings only provide a link back to FindSpreadsheet."],
  ["How do I open the same item on PikoBuy?", "Use Buy on PikoBuy from the product page, then verify the title, seller item number and current options on PikoBuy. If the link no longer resolves, search PikoBuy with the original seller URL or ask its support desk to check it.", "guide"],
  ["Does my choice on the spreadsheet carry over to PikoBuy?", "Use the spreadsheet selection to review photos and prices. Repeat the choice on the actual PikoBuy listing and inspect the order summary before paying. Save the exact option label if numbered or translated options look similar."],
  ["Which seller sites does PikoBuy list in its guide?", "The guide names Taobao, Tmall, 1688, Weidian and Yupoo. A particular seller link may still be unavailable or require assistance. Ask support about that exact link before relying on it.", "guide"],
  ["Why are there two payments?", "The first covers the merchandise and the purchasing stage, which may include delivery from the seller to the warehouse. International freight is quoted separately when you assemble the parcel. Keep a budget for both stages.", "guide"],
  ["Why does the price differ from the spreadsheet?", "The spreadsheet shows a reference price in your selected currency. The live price can vary by seller, option, quantity or exchange rate. Use the PikoBuy order total and check which charges it includes.", "terms"],
  ["What happens if the seller runs out of stock?", "The official buying guide says out-of-stock orders are refunded. Check the status and refund record for your individual order. Contact support with the order number if the record is unclear.", "guide"],
  ["What should I save after paying for the item?", "Save the PikoBuy order number, item URL, selected options, payment record and any notes sent to the seller. These are the references you will need if the warehouse photos show a discrepancy."],
  ["When can I review warehouse QC photos?", "Review photos after the item has checked in and inspection photos are available on your order. Compare them with the listing, including color, model, quantity, labels and any obvious damage.", "guide"],
  ["Are the photos on this site from my order?", "Check the caption. Seller photos show the listing and can be used as a reference, while warehouse photos tied to your order show what arrived. For a disputed item, keep the order-specific evidence."],
  ["Can warehouse photos prove authenticity or functionality?", "Photos can show visible details such as a model sticker or a torn seam. They cannot establish authenticity, battery health or hidden defects. For a measurement or detail you cannot see, ask about an extra photo before submitting the parcel.", "forwarding"],
  ["What measurements should I request?", "For clothing, name the measurement and show where the tape should start and end. For shoes, ask for the insole length or the label, as appropriate. For electronics, request the model and visible markings you need to verify."],
  ["When does the warehouse return window start?", "PikoBuy's policy says eligible items can be submitted for return within 120 hours from the hour after the status changes to In Warehouse. Check the timestamp and submit early. Seller eligibility and item condition still apply.", "returns"],
  ["Which items may be excluded from warehouse returns?", "The published exclusions include some customized, second-hand or intimate items and certain opened packages. Special rules apply to some shoes and electronics. Keep tags, seals and accessories until you have made your decision.", "returns"],
  ["How much can a change-of-mind return cost?", "The policy lists possible original domestic freight, return freight and a RMB 5 service charge for an unconditional return. A seller's initial free-shipping offer can still result in an original freight charge on return. Review the amount on your case.", "returns"],
  ["What if the item is damaged or the seller sent the wrong variant?", "Save the order summary and warehouse images, then report the discrepancy before submitting international shipment. Show exactly which size, color, quantity or defect is involved. Responsibility and fees depend on the investigation and seller agreement.", "returns"],
  ["What inputs does the shipping estimator need?", "Choose the destination and product type, then enter packed weight in kilograms and length, width and height in centimeters. For a pre-purchase estimate, note which values you guessed and rerun it after packing.", "estimate"],
  ["Why can a light parcel cost more than a heavier one?", "A bulky parcel may be rated by a route's volumetric-weight rule or moved to a higher billing bracket. Compare quotes using the same packed dimensions and read the route's own rate and rounding rules.", "estimate"],
  ["Can I consolidate items from different sellers?", "PikoBuy describes combining purchases into one parcel. Compare the consolidated estimate with separate parcels using the same level of protection. Some goods, sizes and route limits may make a single parcel impractical.", "guide"],
  ["What should I check for liquids, batteries or fragile goods?", "Describe the actual contents and product type, then verify the carrier and destination rules. If the estimator offers no valid route, ask support before buying. PikoBuy terms also prohibit infringing or illegal goods.", "terms"],
  ["Does a shipping quote to Spain include import taxes?", "Check the exact quote and invoice for what is included. Imports into the EU are generally subject to VAT, and duties or handling may also apply. For the Canary Islands, Ceuta or Melilla, check destination-specific treatment before selecting a route.", "vat"],
  ["Can I order today and have delivery by a fixed date?", "Allow time for seller dispatch, domestic delivery, warehouse review, packing, international transit and customs. A quoted transit time usually covers only part of that chain. Confirm the milestones and allow a margin.", "estimate"],
  ["When should tracking appear?", "The official guide says tracking should become available within three days of dispatch. If there is still no number, confirm the parcel really shipped and ask support with the parcel ID. Check the last carrier event if you already have a number.", "guide"],
  ["Is forwarding the same as buying through PikoBuy?", "If you bought the goods yourself and forwarded them to PikoBuy, the forwarding terms direct after-sales issues back to the original seller or sender. PikoBuy can help ship the item back. Identify your order type before requesting a return.", "forwarding"],
  ["What should I keep for support or a claim?", "Keep the order and parcel IDs, tracking history, screenshots of the quote, receipts and packaging photos. If a delivery is damaged, document the exterior and contents before discarding packing materials. Check your route's claim deadlines and coverage.", "support"],
];

export const faqEs: readonly FaqEntry[] = [
  ["¿Qué es este spreadsheet de PikoBuy?", "Es un catálogo independiente para buscar y comparar fichas de FindSpreadsheet. Puedes localizar un artículo y abrir su enlace de compra de PikoBuy cuando exista. Esta web no cobra pedidos, gestiona almacenes ni tramita devoluciones."],
  ["¿Cómo encuentro un producto concreto?", "Busca por nombre, número de artículo de Weidian o enlace original. Usa el selector para ver una categoría completa. Si dos resultados se parecen, compara el número de vendedor y las variantes antes de decidir."],
  ["¿Dónde encuentro el enlace original?", "Abre la ficha y usa el botón de copiar cuando esté disponible el enlace de Weidian. Guarda el vínculo con el color, la talla y la cantidad. Algunas fichas solo tienen un enlace a FindSpreadsheet."],
  ["¿Cómo abro el mismo artículo en PikoBuy?", "Pulsa Comprar en PikoBuy y revisa en la plataforma el título, el número de artículo y las variantes vigentes. Si la ficha ya no carga, prueba con el enlace original en el buscador de PikoBuy o consulta a su soporte.", "guide"],
  ["¿Se transfiere automáticamente la talla al pedido?", "La selección del spreadsheet sirve para revisar fotos y precios. Elige la variante de nuevo en PikoBuy y comprueba el resumen antes de pagar. Guarda el nombre exacto de la opción si hay varias numeradas o traducidas."],
  ["¿Qué plataformas menciona PikoBuy?", "La guía cita Taobao, Tmall, 1688, Weidian y Yupoo. Un enlace concreto puede haber caducado o necesitar asistencia. Confirma la disponibilidad del enlace con soporte antes de depender de él.", "guide"],
  ["¿Por qué hay dos pagos?", "El primero corresponde al artículo y a la fase de compra, en la que puede figurar el transporte nacional al almacén. El flete internacional se cotiza al preparar el paquete. Reserva presupuesto para ambas fases.", "guide"],
  ["¿Por qué cambia el precio?", "La cifra de la ficha es una referencia en la moneda elegida. El precio vigente depende del vendedor, la variante, la cantidad y el cambio. Usa el total del pedido oficial y revisa sus conceptos.", "terms"],
  ["¿Qué pasa si el vendedor se queda sin stock?", "La guía oficial indica que se reembolsan los pedidos sin stock. Consulta el estado y el registro de reembolso de tu pedido. Si el movimiento es confuso, facilita el número de pedido al soporte.", "guide"],
  ["¿Qué guardo después de pagar el artículo?", "Conserva el número de pedido de PikoBuy, el enlace, las variantes, el justificante y las notas enviadas al vendedor. Necesitarás esos datos si las fotos del almacén revelan una discrepancia."],
  ["¿Cuándo puedo revisar las fotos QC?", "Cuando el artículo figure en almacén y estén disponibles las fotos de inspección. Compáralas con la ficha: modelo, color, cantidad, etiquetas y daños visibles.", "guide"],
  ["¿Las fotos de esta web corresponden a mi pedido?", "Comprueba el texto de la galería. Las fotos del vendedor son una referencia. Las imágenes del almacén vinculadas a tu pedido muestran lo que llegó. Ante una incidencia, guarda esas pruebas específicas."],
  ["¿Las fotos demuestran autenticidad o funcionamiento?", "Una foto puede mostrar una etiqueta o una costura rota. No acredita autenticidad, salud de la batería ni defectos internos. Si te falta una medida o un detalle visible, pide información sobre una foto adicional antes de enviar.", "forwarding"],
  ["¿Qué medida debo pedir?", "En ropa, indica la medida y los dos puntos entre los que debe colocarse la cinta. En calzado, solicita la longitud de la plantilla o la etiqueta según el caso. En electrónica, pide una imagen del modelo y de las marcas que necesites comprobar."],
  ["¿Cuándo empieza el plazo de devolución en almacén?", "La política indica 120 horas desde la hora siguiente al cambio al estado In Warehouse para artículos elegibles. Comprueba el momento del cambio y presenta la solicitud pronto. Siguen contando las condiciones del vendedor y del producto.", "returns"],
  ["¿Qué productos pueden quedar fuera de una devolución?", "La política contempla exclusiones para personalizados, productos usados, ciertas prendas íntimas y determinados paquetes abiertos. Algunas zapatillas y aparatos tienen requisitos especiales. Conserva precintos, etiquetas y accesorios.", "returns"],
  ["¿Qué cuesta devolver por cambio de opinión?", "La política contempla el envío de vuelta, el envío nacional original y una comisión de 5 RMB en devoluciones sin causa. Incluso con envío inicial anunciado como gratuito, puede cobrarse ese flete al devolver. Verifica tu importe.", "returns"],
  ["¿Qué hago si llega una variante equivocada o dañada?", "Guarda el resumen y las fotos del almacén. Informa de la discrepancia antes de preparar el envío internacional y señala el color, talla, cantidad o defecto concreto. Los gastos dependen del motivo y de la respuesta del vendedor.", "returns"],
  ["¿Qué pide la calculadora de envío?", "Selecciona país o región y tipo de producto. Introduce el peso embalado en kilos y largo, ancho y alto en centímetros. Si aún no tienes las medidas finales, anota tus supuestos y repite el cálculo después.", "estimate"],
  ["¿Por qué un paquete ligero puede salir más caro?", "Una caja voluminosa puede computar por peso volumétrico o entrar en otro tramo. Compara con las mismas medidas y revisa las reglas de volumen y redondeo de cada línea.", "estimate"],
  ["¿Puedo consolidar artículos de distintos vendedores?", "PikoBuy describe la opción de reunir compras. Compara un paquete único con varios usando medidas y protección equivalentes. Una limitación de tamaño o de contenido puede hacer inviable la consolidación.", "guide"],
  ["¿Qué reviso si llevo baterías, líquidos o artículos frágiles?", "Identifica el contenido real y consulta las reglas de la línea y el destino. Si no aparece una ruta compatible, confirma con soporte antes de comprar. Las condiciones de PikoBuy también prohíben artículos ilícitos o infractores.", "terms"],
  ["¿La cotización a España incluye IVA?", "Consulta la cotización y la factura para saber qué cubre el importe. Las importaciones a la UE están generalmente sujetas a IVA y pueden generar aranceles o gastos de gestión. Canarias, Ceuta y Melilla requieren una comprobación específica.", "vat"],
  ["¿Puedo garantizar que el paquete llegará antes de una fecha?", "Cuenta el despacho del vendedor, transporte nacional, recepción, inspección, embalaje, tránsito y aduanas. La estimación de una línea no abarca necesariamente todas esas fases. Deja margen si tienes una fecha importante.", "estimate"],
  ["¿Cuándo aparece el seguimiento?", "La guía indica hasta tres días tras el despacho para disponer de seguimiento. Si no aparece, verifica si el paquete ya salió y consulta con el identificador del envío. Si ya hay número, revisa el último evento del transportista.", "guide"],
  ["¿Reenvío y compra asistida tienen el mismo servicio posventa?", "Si compraste por tu cuenta y enviaste la mercancía al almacén, las condiciones de reenvío remiten el posventa al vendedor o remitente. PikoBuy puede ayudar a enviarla de vuelta. Confirma primero el tipo de pedido.", "forwarding"],
  ["¿Qué guardo si tengo que reclamar?", "Conserva identificadores, historial del transportista, capturas de la cotización, justificantes y fotos del embalaje. Ante daños, documenta exterior y contenido antes de desechar el paquete y revisa los plazos de la línea.", "support"],
];

type Step = readonly [title: string, action: string, check: string];
export const stepsEn: readonly Step[] = [
  ["Search this PikoBuy spreadsheet", "Start on our homepage. Enter a product name, category keyword, original URL or Weidian item number. The screenshot uses 7672372225 so you can repeat the search.", "A short keyword is useful for browsing. The exact seller number is better when you already know which listing you want."],
  ["Open and compare the matching result", "Open the card in the subsite results. Check the name, picture, seller item number and reference price on the detail page. You can switch currency without changing the product.", "Do not infer that two similar photographs belong to the same listing. Match the listing ID and the options."],
  ["Open the purchase page", "Use Buy on PikoBuy to open the official record. For public records without a direct seller ID, the source link opens FindSpreadsheet. The copy button, when present, gives you the seller URL to paste into PikoBuy.", "Keep the product number and the original URL together. If the agent cannot resolve the item, ask about the exact link."],
  ["Select the live variant and pay for the item", "On PikoBuy, choose the actual color or model, size and quantity. Compare the summary with the listing you saved, then review the merchandise and seller-to-warehouse charges before submitting the first payment.", "Your selection on the subsite is a reference. Confirm the options, availability and amount on PikoBuy."],
  ["Review the warehouse inspection", "After check-in, open the order's warehouse photos. Compare the labels, color, quantity and visible condition with your saved order. Ask for a specific measurement or close-up if it would change your decision.", "Use your order's photos. The seller pictures shown in our catalog are useful comparison material."],
  ["Resolve any issue before dispatch", "For a wrong variant, damage or an eligible return, keep the tags and packaging, save the order and warehouse photos, and raise the issue before submitting a parcel.", "PikoBuy's returns page describes a 120-hour eligibility window. Verify the status timestamp, seller terms and estimated fees."],
  ["Estimate with the packed weight and size", "Open the official estimator. Choose the destination and the actual product type, then enter packed weight in kilograms and dimensions in centimeters. Compare available routes using the same inputs.", "Run the estimate again after the warehouse packs your parcel. Compare billing weight, restrictions and what the quote includes."],
  ["Submit the parcel and pay international shipping", "Select the warehouse items to ship and verify the delivery address, route, packaging and final breakdown. Pay the international charge only after you have finished checking the order.", "Keep the parcel ID, route name and payment confirmation. The merchandise payment and parcel payment have separate records."],
  ["Track the parcel and save delivery evidence", "Check the tracking number and latest carrier event once dispatched. PikoBuy's guide says tracking becomes available within three days of shipment. Verify the last-mile carrier if there is a handoff.", "If damaged or incomplete on delivery, keep the carton, label and photos and contact support with the parcel ID."],
];

export const stepsEs: readonly Step[] = [
  ["Busca en este spreadsheet de PikoBuy", "En nuestra portada, escribe un nombre, una categoría, la URL original o el número de Weidian. La captura usa 7672372225 para que puedas repetir la búsqueda.", "Usa palabras cortas para explorar y el número exacto si ya conoces el artículo."],
  ["Abre y compara el resultado", "Abre la tarjeta en los resultados del subdominio. Comprueba el nombre, la foto, el número de artículo y el precio orientativo. Puedes cambiar de moneda sin cambiar de producto.", "Si dos resultados se parecen, coteja el identificador y las opciones antes de elegir."],
  ["Abre la ficha de compra", "Pulsa Comprar en PikoBuy para abrir la ficha oficial. Si falta un identificador directo, el enlace de origen lleva a FindSpreadsheet. Cuando esté disponible, copia la URL del vendedor para pegarla en PikoBuy.", "Guarda el número de artículo junto con la URL. Si PikoBuy no puede abrirlo, consulta a soporte con ese enlace."],
  ["Elige la variante real y paga el artículo", "En PikoBuy, selecciona el color o modelo, la talla y la cantidad. Compara el resumen con la ficha guardada y revisa el importe del artículo y el trayecto al almacén antes del primer pago.", "La selección del spreadsheet es orientativa. Confirma la variante, la disponibilidad y el importe en PikoBuy."],
  ["Revisa la inspección en almacén", "Tras la entrada, abre las fotos del pedido. Compara etiquetas, color, cantidad y estado visible con lo que pediste. Solicita una medida o un primer plano específico si puede cambiar tu decisión.", "Utiliza las fotos de tu pedido. Las imágenes del vendedor del catálogo sirven para comparar."],
  ["Resuelve cualquier incidencia antes del despacho", "Ante una variante equivocada, un daño o una devolución elegible, conserva etiquetas y embalaje, guarda el pedido y las fotos, y presenta la incidencia antes de preparar el paquete.", "La política de PikoBuy describe una ventana de 120 horas. Revisa el momento del cambio de estado, condiciones y gastos estimados."],
  ["Estima con el peso y las medidas embaladas", "Abre la calculadora oficial. Elige el destino y el tipo de artículo real e indica el peso embalado en kilos y las medidas en centímetros. Compara rutas con los mismos datos.", "Repite la estimación tras el embalaje. Comprueba el peso facturable, las restricciones y los conceptos incluidos."],
  ["Envía el paquete y paga el transporte internacional", "Marca los artículos en almacén, verifica dirección, ruta, embalaje y desglose. Completa el segundo pago cuando hayas terminado de comprobar el pedido.", "Guarda el número de paquete, la línea y el justificante. El pago del artículo y el del paquete se registran por separado."],
  ["Sigue el paquete y guarda las pruebas de entrega", "Consulta el número y el último evento tras el despacho. La guía de PikoBuy indica hasta tres días para disponer de seguimiento. Revisa el operador de última milla cuando cambie el transportista.", "Si llega dañado o incompleto, conserva la caja, la etiqueta y las fotos. Facilita a soporte el identificador del paquete."],
];

type ArticleCopy = {
  title: string;
  intro: string;
  sections: readonly (readonly [heading: string, ...paragraphs: string[]])[];
  sources: readonly Source[];
};

const articles: Record<string, readonly [ArticleCopy, ArticleCopy]> = {
  "how-pikobuy-works": [{
    title: "How to buy with the PikoBuy spreadsheet: from product link to delivery",
    intro: "Follow an actual listing from the PikoBuy ES catalog to the agent, then check the two payments, warehouse inspection and delivery milestones.",
    sections: [
      ["Start with a precise listing", "Match a result by Weidian item number or original URL before comparing price. Save the exact variant, size, quantity and seller pictures. The catalog can show reference prices for more than one option, so confirm the actual choice again on PikoBuy."],
      ["Review the first payment", "Open the official product page using the subsite button, then compare seller, title and available options. Read the first order total line by line. Save both the original URL and the payment confirmation so you can connect any later warehouse evidence to the right variant."],
      ["Use the warehouse as your decision point", "Check the label, count, color and visible condition on the photos attached to the order. If the measurements matter, request one image with a visible tape from a specified start to end. Leave tags and packaging in place if you may need a return."],
      ["Submit and track the parcel", "After QC, compare routes using the destination, packed dimensions and actual contents. Save the second payment receipt, parcel ID and tracking number. Distinguish a created label from a carrier acceptance scan when deciding whether to ask for help."],
      ["Keep a short transaction record", "For one item, a useful record has the seller link, selected options, first-payment total, check-in time, QC decision, route and final parcel charge. For multiple sellers, keep one line per item and one separate entry for each parcel."],
    ], sources: ["guide", "returns", "estimate"],
  }, {
    title: "Cómo comprar con el spreadsheet de PikoBuy: del enlace a la entrega",
    intro: "Sigue una ficha del catálogo de PikoBuy ES hasta el agente y revisa los dos pagos, la inspección y los eventos de entrega.",
    sections: [
      ["Identifica la ficha exacta", "Busca por número de Weidian o URL original. Guarda la variante, talla, cantidad y fotos del vendedor. El catálogo puede mostrar referencias para varias opciones, así que vuelve a confirmar la elección en PikoBuy."],
      ["Revisa el primer pago", "Abre la página oficial desde el botón de la ficha. Coteja vendedor, nombre y opciones disponibles. Lee el desglose y guarda tanto el enlace original como el justificante para relacionarlos con las fotos de almacén."],
      ["Toma la decisión en el almacén", "Comprueba etiqueta, cantidad, color y estado visible en las imágenes de tu pedido. Si una medida es decisiva, pide una foto con la cinta situada entre dos puntos concretos. Conserva etiquetas y embalaje si podrías devolverlo."],
      ["Prepara y sigue el paquete", "Tras la inspección, compara rutas según el destino, las dimensiones embaladas y el contenido real. Guarda el segundo justificante, el número de paquete y el seguimiento. Distingue la etiqueta creada del primer escaneo de aceptación."],
      ["Guarda un registro por artículo", "Anota enlace, variante, importe inicial, hora de entrada al almacén, decisión sobre QC, ruta y cargo final. Para varios vendedores, conserva una línea por artículo y otra por cada paquete enviado."],
    ], sources: ["guide", "returns", "estimate"],
  }],
  "pikobuy-shipping-cost-guide": [{
    title: "PikoBuy shipping calculator: compare packed weight, volume and total cost",
    intro: "Use the official estimator consistently and keep a budget for merchandise, freight and destination charges.",
    sections: [
      ["Collect the five inputs", "Start with the exact destination, real product type, packed weight, and the three outside dimensions. A garment weight without a box is suitable only for an early estimate. Record the source of each number so you can replace assumptions with warehouse measurements."],
      ["Compare actual and volumetric weight", "Consider two parcels that both weigh 1.8 kg. One is 28 × 20 × 12 cm, the other 45 × 32 × 25 cm. Enter each set of dimensions separately. A route may use parcel volume, different rounding or a minimum billing bracket, so equal scale weights can produce different charges."],
      ["Read the details behind the price", "For every route, write down the rate, billed weight, delivery estimate, product and size limits, tracking and optional coverage. Compare at the same delivery address. A smaller displayed quote can still have different restrictions or a different final carrier."],
      ["Calculate the delivered budget", "Keep separate lines for the item, domestic delivery, optional warehouse services, international freight and applicable destination taxes or fees. Mark which amounts are confirmed and which remain estimates. Rerun the quote after packing and review the final charge at parcel submission."],
      ["Compare one box with two", "If consolidation creates a bulky carton or combines goods with different route limits, price two smaller parcels under equivalent protection. Check duplicated minimum charges and delivery fees before deciding whether a split saves money."],
    ], sources: ["estimate", "guide", "terms"],
  }, {
    title: "Calculadora de envío de PikoBuy: peso, volumen y coste total",
    intro: "Usa la calculadora oficial con datos comparables y presupuesta mercancía, flete y cargos de destino.",
    sections: [
      ["Reúne los datos de partida", "Anota el destino exacto, el tipo real de producto, el peso embalado y las tres medidas exteriores. El peso de una prenda sin caja solo sirve para una primera estimación. Sustituye cada supuesto cuando tengas los datos del almacén."],
      ["Compara peso real y volumen", "Imagina dos paquetes de 1,8 kg. Uno mide 28 × 20 × 12 cm y otro 45 × 32 × 25 cm. Haz las dos simulaciones. Según la línea pueden cambiar el peso volumétrico, los redondeos y el mínimo facturable."],
      ["Lee las condiciones de cada resultado", "Guarda precio, peso facturado, plazo orientativo, restricciones, seguimiento y cobertura opcional. Usa el mismo destino y comprueba si cambia el operador final. Un importe menor puede venir con condiciones distintas."],
      ["Calcula el presupuesto de entrega", "Separa artículo, trayecto nacional, servicios de almacén, flete internacional y posibles tributos o gestión. Identifica las cifras definitivas y las estimadas. Repite el cálculo una vez embalado antes del pago del paquete."],
      ["Compara una caja con dos", "Si un solo paquete resulta muy voluminoso o combina artículos con restricciones distintas, simula dos cajas con protección equivalente. Comprueba si duplicas mínimos o cargos de reparto antes de elegir."],
    ], sources: ["estimate", "guide", "terms"],
  }],
  "pikobuy-qc-photo-checklist": [{
    title: "PikoBuy warehouse QC photos: a checklist for the exact item you ordered",
    intro: "Use order-specific warehouse images to check what arrived and ask for evidence you can act on.",
    sections: [
      ["Identify the photo source", "The seller gallery records what was advertised. A warehouse image attached to an order records that particular arrival. Compare the two and keep the item number visible in your notes if multiple products have similar packaging."],
      ["Check identity and quantities first", "Make sure the model, color, size label, left and right items and included parts match the order. For a set, count each piece. For electronics, check the visible model number and connector without assuming the photo proves operation."],
      ["Focus on measurements that change your decision", "Ask for an inside shoe length, flat chest width or a close-up of a disputed seam. Specify both measurement endpoints and ask that the full scale be visible. A generic request for more photos may not show the disputed detail."],
      ["Document damage with context", "Save one wide image that identifies the product and one close-up of the defect. Record the label and packaging condition. If a mark may come from lighting, ask for the same area under neutral light before reaching a conclusion."],
      ["Choose what to do before parcel submission", "If the evidence is clear, keep the images and continue with route checks. If there is a mismatch, collect the order record and contact support promptly. Photos show visible condition. Authentication and performance require different evidence."],
    ], sources: ["guide", "forwarding", "returns"],
  }, {
    title: "Fotos QC de PikoBuy: lista de comprobación para el producto recibido",
    intro: "Revisa las fotos del almacén del pedido y pide pruebas concretas antes de enviar el paquete.",
    sections: [
      ["Identifica el origen de la imagen", "La galería del vendedor muestra lo anunciado. Las fotos asociadas al pedido muestran esa recepción concreta. Si dos productos se parecen, anota el número de artículo junto a las pruebas."],
      ["Comprueba identidad y cantidades", "Revisa modelo, color, etiqueta de talla, piezas izquierda y derecha y accesorios. En un conjunto, cuenta todas las prendas. En electrónica, contrasta el número de modelo y el conector visible."],
      ["Pide medidas que cambien tu decisión", "Solicita la longitud interior del calzado, el ancho de pecho en plano o un primer plano de una costura. Detalla los dos extremos y pide que se vea la escala completa."],
      ["Documenta daños con contexto", "Guarda una imagen general y otra de cerca. Registra el estado de la etiqueta y del embalaje. Si una marca podría deberse a la luz, pide otra toma en iluminación neutra."],
      ["Decide antes de preparar el paquete", "Si todo coincide, guarda las fotos y revisa la ruta. Si hay una discrepancia, reúne el pedido y contacta con soporte pronto. La condición visible, la autenticidad y el funcionamiento requieren pruebas diferentes."],
    ], sources: ["guide", "forwarding", "returns"],
  }],
  "pikobuy-return-policy-guide": [{
    title: "PikoBuy returns: check eligibility, the 120-hour warehouse window and fees",
    intro: "Work out when to ask for a return, which evidence to attach and what the policy says about costs.",
    sections: [
      ["Record the status-change time", "The PikoBuy returns page says an eligible warehouse request can be made within 120 hours counted from the hour after the item status changes to In Warehouse. Check the timestamp on the affected order. The shipping date and when you first opened the photo gallery are different milestones."],
      ["Check the seller and condition rules", "The policy requires a seller return guarantee and the condition required for resale. It lists exclusions and special packaging rules for some goods. Preserve security tags, seals, labels and included accessories while you decide."],
      ["Use the real reason for the request", "If a size arrived incorrectly, include the order option and a readable warehouse photo of the label. If the issue is a personal preference, choose that reason. A concise record helps distinguish a seller mismatch from an item that matches the order."],
      ["Separate the possible charges", "The official unconditional-return formula includes freight back, original domestic freight and a RMB 5 service charge. A seller's initial free-shipping offer may still leave an original transport charge for a return. Confirm the exact amount and seller outcome for your request."],
      ["Distinguish forwarding and purchasing", "For an item bought independently and forwarded to the warehouse, read the forwarding terms. They refer after-sales matters to the original seller or sender. Keep the return confirmation, cost breakdown and refund record with the original order."],
    ], sources: ["returns", "forwarding", "support"],
  }, {
    title: "Devoluciones en PikoBuy: elegibilidad, 120 horas y gastos",
    intro: "Comprueba cuándo solicitar la devolución, qué adjuntar y cuáles son los posibles costes.",
    sections: [
      ["Anota el cambio de estado", "La política de PikoBuy establece 120 horas a partir de la hora siguiente al cambio a In Warehouse para artículos elegibles. Verifica el momento en el pedido afectado. La fecha del envío o el día en que viste las fotos son datos diferentes."],
      ["Consulta las reglas del vendedor", "La política requiere que el vendedor ofrezca garantía y que el artículo mantenga las condiciones de reventa. Hay exclusiones y requisitos especiales de embalaje. Conserva precintos, etiquetas y accesorios mientras decides."],
      ["Explica el motivo real", "Si llegó otra talla, adjunta la opción elegida y una imagen legible de la etiqueta. Si cambiaste de opinión, elige ese motivo. Guarda una prueba concreta de la diferencia entre el pedido y lo recibido."],
      ["Distingue los gastos posibles", "La fórmula publicada para devoluciones sin causa incluye flete de vuelta, flete nacional original y 5 RMB de servicio. Una oferta de envío gratuito puede generar gastos al devolver. Confirma el importe y la decisión del vendedor para tu solicitud."],
      ["Diferencia reenvío y compra", "Para mercancía comprada por tu cuenta y reenviada al almacén, las condiciones remiten el posventa al vendedor o remitente original. Guarda la decisión, el desglose y el registro de reembolso."],
    ], sources: ["returns", "forwarding", "support"],
  }],
  "pikobuy-tracking-guide": [{
    title: "PikoBuy parcel tracking: dispatch, customs and carrier handoffs",
    intro: "Read tracking as a sequence of events and keep the timestamps needed for a useful support request.",
    sections: [
      ["Use the parcel record", "One purchase order can contain several items and a parcel can combine orders. Track the parcel number and carrier number associated with that shipment. Confirm that the line name, destination and most recent timestamp match the parcel you are asking about."],
      ["Distinguish label creation from carrier acceptance", "A created label can appear before the carrier scans the carton. Record the dispatch time and first acceptance scan separately. PikoBuy's guide says tracking information is available within three days of shipment, which is different from transit or delivery time."],
      ["Read customs and transit events in context", "A customs processing event may precede a release, a request for documents or a handoff. Check the latest dated event on the official carrier channel. Use secure carrier or platform channels if the shipment requires an invoice or recipient information."],
      ["Confirm the last-mile carrier", "An international route can hand the parcel to a domestic delivery carrier. Verify that any new tracking number belongs to the same parcel. After delivery, keep the label and outer packaging if the shipment is incomplete or damaged."],
      ["Send a support message with enough evidence", "Provide parcel ID, carrier, tracking number, last dated event and the action you need confirmed. For a damaged parcel attach photos showing both the carton and contents. Compare the claim deadline and conditions with the route that was actually paid."],
    ], sources: ["guide", "forwarding", "support"],
  }, {
    title: "Seguimiento de PikoBuy: despacho, aduana y cambios de transportista",
    intro: "Interpreta los eventos en orden y guarda las fechas necesarias para consultar una incidencia.",
    sections: [
      ["Usa el registro del paquete", "Un pedido puede tener varios artículos y un paquete puede reunir varios pedidos. Usa el identificador de ese envío y el número del transportista. Comprueba que ruta, destino y última fecha correspondan al mismo paquete."],
      ["Distingue etiqueta y aceptación", "La etiqueta puede crearse antes de que el transportista escanee la caja. Registra despacho y primer escaneo por separado. La guía señala que el seguimiento estará disponible dentro de tres días del despacho, un plazo diferente al de entrega."],
      ["Lee los eventos de aduana en contexto", "Un evento de aduana puede preceder a un levante, a una solicitud de documentos o a un cambio de operador. Consulta el canal oficial. Si solicita una factura o datos del destinatario, usa los canales seguros del operador o agente."],
      ["Confirma el operador de última milla", "La empresa de reparto final puede usar otro número. Comprueba que corresponda al mismo paquete. Tras la entrega, guarda la etiqueta y el embalaje exterior si hay daños o faltantes."],
      ["Incluye pruebas en la consulta", "Envía identificador, operador, número de seguimiento, último evento fechado y qué necesitas confirmar. Si hay daños, adjunta fotos de la caja y el contenido. Comprueba plazos y cobertura de la línea pagada."],
    ], sources: ["guide", "forwarding", "support"],
  }],
  "pikobuy-restricted-items-guide": [{
    title: "PikoBuy restricted items: how to check batteries, liquids and route limits",
    intro: "Check the real contents against the platform, carrier and destination requirements before buying.",
    sections: [
      ["Describe the item accurately", "Record the actual contents and material. Distinguish a device with a fitted battery from a separate battery or power bank, and a sealed liquid from a dry accessory. Use the correct category in the estimator and keep the original listing as evidence."],
      ["Check three sets of restrictions", "Begin with PikoBuy's rules, then read the selected carrier's route conditions and the destination's import requirements. The conditions can differ even when two routes go to the same country. The platform terms explicitly prohibit unlawful and rights-infringing goods."],
      ["Verify the limits for the packed parcel", "Weight, dimensions and the combination of objects can change eligibility. Check whether consolidation adds a product type the line cannot carry. Ask support with the exact goods and measurements if the route description is ambiguous."],
      ["Treat an empty estimate as unresolved", "If no line is shown, review the destination, item type, units and dimensions. If the entries are correct, ask support to identify whether the constraint comes from the item or parcel. Do not change the declaration to make a quote appear."],
      ["Avoid costs before confirming a route", "Confirm handling, packaging needs and what happens if the seller sends a different item. Keep the route requirements with the order record. If an item cannot be carried on a compliant route, resolve it with the seller or platform while it is still at the warehouse."],
    ], sources: ["terms", "estimate", "forwarding"],
  }, {
    title: "Artículos restringidos en PikoBuy: baterías, líquidos y límites de ruta",
    intro: "Comprueba el contenido real frente a las reglas del agente, operador y destino antes de pagar.",
    sections: [
      ["Describe el artículo con precisión", "Anota el contenido y material reales. Distingue un aparato con batería integrada de una batería suelta, y un líquido sellado de un accesorio seco. Usa el tipo correcto en la calculadora y guarda la ficha original."],
      ["Consulta tres grupos de reglas", "Revisa las condiciones de PikoBuy, las de la línea elegida y los requisitos de importación del destino. Dos rutas al mismo país pueden admitir contenidos distintos. El agente prohíbe mercancías ilícitas o que infringen derechos."],
      ["Verifica el paquete embalado", "Peso, medidas y combinación de artículos pueden cambiar la elegibilidad. Comprueba si consolidar añade un tipo que la línea no lleva. Consulta con el contenido y las medidas exactas si las condiciones son ambiguas."],
      ["Investiga si no aparece ninguna ruta", "Revisa destino, tipo, unidades y dimensiones. Si son correctos, pregunta si el límite se debe a un artículo o a la caja. Declara siempre el contenido real."],
      ["Confirma la ruta antes de gastar", "Pregunta por el embalaje y qué hacer si el vendedor manda otra variante. Guarda las condiciones junto al pedido. Si no existe una ruta compatible, resuelve el caso con el vendedor o agente mientras siga en almacén."],
    ], sources: ["terms", "estimate", "forwarding"],
  }],
  "pikobuy-spain-guide": [{
    title: "PikoBuy Spain: shipping, VAT and parcel planning for your postcode",
    intro: "Prepare a Spain-bound parcel with a destination-specific quote, an itemized budget and records for delivery.",
    sections: [
      ["Check your delivery region", "Start with the real postcode and delivery location. Verify that the carrier serves it and whether its quote covers any island, regional or remote-delivery surcharge. The Canary Islands, Ceuta and Melilla can have different tax treatment from mainland Spain."],
      ["Estimate the final packed size", "Use the official estimator with the product type, packed weight and external dimensions. Compare routes using the same inputs, then repeat with real warehouse measurements. Save a dated screenshot of the selected quote and included services."],
      ["Check VAT, duties and carrier fees separately", "EU import VAT generally applies. Determine what the invoice or route quote has already collected and which amounts might be collected on import or delivery. Duties and brokerage or handling are separate concepts. Check current official guidance for your destination and transaction."],
      ["Keep accurate documents", "Save invoices for the goods and parcel, an accurate description, the carrier and payment records. If a carrier needs evidence, use its secure official channel. Compare a requested amount with the charge breakdown before paying."],
      ["Plan timing from first purchase to receipt", "Allow for seller dispatch, China domestic delivery, warehouse review, repacking, international transit, customs and final-mile delivery. Use your parcel ID to locate the latest event. If the package arrives with visible damage, retain the packaging and report it through the official route."],
    ], sources: ["estimate", "vat", "territories", "terms"],
  }, {
    title: "PikoBuy España: envío, IVA y planificación del paquete por código postal",
    intro: "Prepara la compra desde España con una cotización para tu destino, un presupuesto desglosado y documentación.",
    sections: [
      ["Comprueba la zona de entrega", "Parte del código postal real y verifica si el operador presta servicio. Revisa recargos insulares o de zonas remotas. Canarias, Ceuta y Melilla pueden tener un tratamiento fiscal diferente al de la península."],
      ["Calcula la caja final", "Usa tipo de artículo, peso embalado y medidas externas en la calculadora. Compara rutas con los mismos datos y repite cuando tengas las medidas reales. Guarda una captura fechada de la cotización y los servicios incluidos."],
      ["Separa IVA, aranceles y gestión", "En general, las importaciones en la UE están sujetas a IVA. Consulta lo cobrado en la factura y las cantidades que podrían exigirse al importar o entregar. Aranceles y gastos del operador son conceptos distintos. Revisa las reglas vigentes para el destino y la operación."],
      ["Conserva documentos exactos", "Guarda facturas de artículos y transporte, descripción correcta, identificadores y justificantes de pago. Si el transportista pide documentos, usa su canal seguro. Comprueba el desglose antes de atender un cargo."],
      ["Planifica todos los plazos", "Cuenta el despacho del vendedor, transporte nacional, inspección, embalaje, tránsito, aduana y reparto final. Usa el número del paquete para seguir el último evento. Si llega dañado, guarda el embalaje para informar por el canal oficial."],
    ], sources: ["estimate", "vat", "territories", "terms"],
  }],
};

const workedExamples: Record<string, readonly [ArticleCopy["sections"], ArticleCopy["sections"]]> = {
  "how-pikobuy-works": [[
    ["Worked example: a shoe with similar options", "Suppose two variants show the same color but one is labeled with an EU size and another with a model code. Keep the seller item ID and screenshot the model and the size you select. On the official order review screen, compare each field and the quantity. If the labels differ between the seller and PikoBuy, contact support while both listings are available."],
    ["Stop before paying when a key detail is missing", "Decide which facts are essential before you start: the item and size, a usable shipping route and a budget for the parcel. If the seller link cannot resolve or the estimate has no route for the actual contents, resolve it before buying. If a photo is unclear after check-in, resolve that issue before submitting international dispatch."],
  ], [
    ["Ejemplo práctico: calzado con variantes parecidas", "Si dos variantes muestran el mismo color pero una usa tallaje EU y otra un código de modelo, guarda el identificador y captura modelo y talla. En el resumen oficial coteja cada campo y la cantidad. Si la etiqueta del vendedor difiere de la del agente, consulta mientras tengas acceso a ambas fichas."],
    ["Cuándo conviene parar antes de pagar", "Identifica previamente los datos esenciales: artículo y talla, ruta compatible y presupuesto del paquete. Si el enlace no abre o la calculadora no admite el contenido real, resuélvelo antes de la compra. Si una foto en almacén es dudosa, acláralo antes del despacho."],
  ]],
  "pikobuy-shipping-cost-guide": [[
    ["Build a comparison with a dated quote", "For Route A, record the total shown, billed parcel weight and delivery conditions. For Route B, keep the same destination and inputs, then record the same columns. Keep the currency with each quote and normalize to the same currency before comparing. Record whether protection, taxes or handling appear as separate lines."],
    ["Understand why the amount can move", "The initial estimate may use a seller's stated weight or a rough box size. Repacking and adding protection can change both. If a confirmed total differs, compare the recorded dimensions and billing bracket before asking the agent for clarification. Keep the route name and date with both quotes."],
  ], [
    ["Compara con una cotización fechada", "Para la ruta A, anota el importe, peso facturado y condiciones de entrega. Repite con los mismos datos para la ruta B. Guarda la moneda y convierte a una base común antes de comparar. Anota si la protección, impuestos o gestión aparecen como conceptos separados."],
    ["Comprende por qué cambia el importe", "La estimación inicial puede partir del peso declarado por el vendedor o de una caja supuesta. Embalar y añadir protección cambia ambos. Si el importe final varía, compara dimensiones y tramo facturable antes de consultar. Conserva ruta y fecha en los dos cálculos."],
  ]],
  "pikobuy-qc-photo-checklist": [[
    ["Check one item at a time", "For a hoodie and trousers sold as a set, compare the count and labels for both pieces. Ask for a single image with the full set if individual close-ups leave the quantity unclear. If something is missing, record which component was advertised and where it appears on the listing."],
    ["Write a request the warehouse can complete", "A useful request identifies the order and one action, such as photographing the size tag and measuring the chest flat from armpit to armpit. Include a marked listing image when useful. Keep the original pictures and the follow-up in chronological order for a potential return review."],
  ], [
    ["Revisa un artículo cada vez", "En un conjunto de sudadera y pantalón, compara la cantidad y las etiquetas de ambas prendas. Pide una foto del conjunto si los primeros planos no aclaran cuántas piezas hay. Si falta algo, indica qué se anunciaba y dónde consta en la ficha."],
    ["Redacta una solicitud concreta", "Identifica el pedido y una acción, como fotografiar la talla y medir el ancho de pecho en plano de axila a axila. Adjunta una imagen de referencia marcada si ayuda. Guarda las tomas originales y adicionales en orden cronológico para una posible devolución."],
  ]],
  "pikobuy-return-policy-guide": [[
    ["Example: the label differs from your order", "If you selected EU 42 and the warehouse label shows EU 41, save the original option, order record and clear label photo. Take the request to the order page while the item remains in the warehouse. Leave packaging and seals intact and wait for the case outcome before adding it to a parcel."],
    ["Reconcile the final refund record", "Compare the actual amount paid with the amount approved and any fees. Check whether a payment record shows a balance credit, refund notice or pending adjustment. If the amounts differ, ask support to identify each deduction with the order number and your saved case evidence."],
  ], [
    ["Ejemplo: la etiqueta difiere del pedido", "Si elegiste EU 42 y la etiqueta muestra EU 41, guarda opción, pedido y foto legible. Presenta el caso en el pedido mientras el artículo siga en almacén. Conserva precintos y embalaje y espera la resolución antes de añadirlo a un paquete."],
    ["Comprueba el registro final", "Compara el importe pagado con el aprobado y sus posibles gastos. Revisa si consta un abono en saldo, aviso de devolución o ajuste pendiente. Si hay diferencia, pide el desglose con el número de pedido y las pruebas del caso."],
  ]],
  "pikobuy-tracking-guide": [[
    ["Example: a long gap between scans", "Record the last carrier and timestamp, then compare the same tracking number on the carrier's site and PikoBuy. If one screen updates later, use the most recent dated event. If support says a local carrier took over, ask for its name and the number that works in its system."],
    ["Example: delivered status but no parcel", "Check the official carrier record for any proof of delivery, pickup location or attempted delivery message. Compare the delivery address with your parcel confirmation. If unresolved, report the discrepancy promptly with both the parcel number and the carrier reference."],
  ], [
    ["Ejemplo: varios días sin escaneos", "Anota operador y hora del último evento, y contrasta el mismo número en el sitio del operador y en PikoBuy. Si un canal se actualiza más tarde, usa el evento fechado más reciente. Si cambió de operador, pide su nombre y el número válido para su sistema."],
    ["Ejemplo: figura entregado pero no está", "Comprueba si el operador ofrece justificante, punto de recogida o aviso de intento. Coteja la dirección con la confirmación. Si sigue sin aclararse, avisa pronto con el identificador del paquete y la referencia del transportista."],
  ]],
  "pikobuy-restricted-items-guide": [[
    ["Example: an accessory and a powered device", "An empty phone case and a powered device may look like similar accessories in a product search, yet the shipping line can treat them differently. Check the seller record for the actual components, then ask the carrier or agent whether the exact configuration and quantity fit the route."],
    ["Check sensitive and fragile goods individually", "A leak-prone container and a breakable item can each change your packaging and route choices. Ask whether the packed contents are accepted and what protection or documentation the carrier requires. Keep a written record of the answer before buying or submitting the parcel."],
  ], [
    ["Ejemplo: accesorio y aparato con batería", "Una funda vacía y un aparato con alimentación pueden aparecer juntos como accesorios, pero tener condiciones distintas. Coteja los componentes del anuncio y pregunta si la configuración y la cantidad exactas cumplen los requisitos."],
    ["Revisa por separado artículos sensibles o frágiles", "Un recipiente con riesgo de fuga o un artículo frágil pueden cambiar embalaje y ruta. Consulta si se acepta el contenido y qué protección o documentación se exige. Guarda la respuesta antes de comprar o pagar el paquete."],
  ]],
  "pikobuy-spain-guide": [[
    ["Example: the same goods going to different destinations", "A quote to a mainland postcode does not answer the cost or availability for an island or for Ceuta or Melilla. Make separate estimates with the actual destination and verify each carrier's terms. Ask for the breakdown of any surcharge or tax collection you see."],
    ["Make an order record you can use at delivery", "Keep the item invoice, parcel receipt, tracking number, delivery address and any evidence of tax already collected. If you receive an unexpected charge, compare the notice with those records and confirm the request through the carrier's or authority's official channel."],
  ], [
    ["Ejemplo: la misma compra para dos destinos", "Una cotización peninsular no indica coste ni disponibilidad para una isla, Ceuta o Melilla. Calcula con cada destino real y consulta las condiciones del operador. Pide el detalle de recargos o cobros de impuestos que aparezcan."],
    ["Organiza la documentación para la entrega", "Guarda factura, recibo del paquete, seguimiento, dirección y pruebas de impuestos ya cobrados. Ante un cargo inesperado, coteja el aviso con esos registros y confirma la solicitud por el canal oficial del operador o la autoridad."],
  ]],
};

export function getEditorialArticle(locale: string, slug: string) {
  if (locale !== "en-US" && locale !== "es-ES") return undefined;
  const language = locale === "en-US" ? 0 : 1;
  const article = articles[slug]?.[language];
  return article && { ...article, sections: [...article.sections, ...workedExamples[slug][language]] };
}
