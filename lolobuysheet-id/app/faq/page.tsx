import { FactPage } from "@/components/multilingual-facts";
const questions=[
["What does LoloBuy say it does?","On its public homepage, LoloBuy describes a service that assists with purchasing products from Chinese online and offline channels."],
["Can I start with a product link?","LoloBuy’s homepage says a visitor can paste a product link to start an order. Check the current listing and selected option first."],
["Where does the platform say goods are sent?","The official homepage says goods are shipped to the LoloBuy China warehouse. This is not the same as delivery to the final destination."],
["Does a pasted link guarantee availability?","No. A link identifies a listing; stock, options, seller response and later details can change. Confirm the current listing."],
["Is the displayed product price the final cost?","Not necessarily. A listing price is separate from possible domestic movement, service choices, international shipping and destination-country charges."],
["Can this site promise a delivery date or customs outcome?","No. Delivery and customs depend on destination, carrier, parcel details, local rules and other changing factors."],
["Do warehouse or QC-style images prove quality or authenticity?","No. Images can help compare visible details, but cannot guarantee material, fit, durability, authenticity or final delivery."],
["Does this guide process orders, payments or returns?","No. This is an independent research guide. It does not take orders, process payments or make decisions for LoloBuy."],
["What should I record before placing an order?","Save the original URL, title, selected variant, price and currency, seller, date checked, measurements or specifications, and open questions."],
["Where can I continue product research?","Use FindSpreadsheet to continue the product search, then review the current source listing before making a decision."]
];
export default function FaqPage(){return <FactPage kind="faq"/>}
