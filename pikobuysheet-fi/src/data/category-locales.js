const translations={
 en:['Shoes','Hoodies & sweaters','T-shirts','Jackets','Pants & shorts','Accessories','Jerseys','Electronics','Headwear','Short sets','Other finds','All finds'],
 de:['Schuhe','Hoodies & Pullover','T-Shirts','Jacken','Hosen & Shorts','Accessoires','Trikots','Elektronik','Kopfbedeckungen','Shorts-Sets','Weitere Funde','Alle Produkte'],
 fr:['Chaussures','Sweats & pulls','T-shirts','Vestes','Pantalons & shorts','Accessoires','Maillots','Électronique','Couvre-chefs','Ensembles courts','Autres trouvailles','Tous les produits'],
 es:['Calzado','Sudaderas y jerséis','Camisetas','Chaquetas','Pantalones y shorts','Accesorios','Equipaciones','Electrónica','Gorras y sombreros','Conjuntos cortos','Otros hallazgos','Todos los productos'],
 it:['Scarpe','Felpe e maglioni','T-shirt','Giacche','Pantaloni e shorts','Accessori','Maglie sportive','Elettronica','Cappelli','Completi corti','Altre scoperte','Tutti i prodotti'],
 pt:['Calçados','Moletons e suéteres','Camisetas','Jaquetas','Calças e shorts','Acessórios','Camisas esportivas','Eletrônicos','Bonés e chapéus','Conjuntos curtos','Outros achados','Todos os produtos'],
 nl:['Schoenen','Hoodies en truien','T-shirts','Jassen','Broeken en shorts','Accessoires','Sportshirts','Elektronica','Hoofddeksels','Korte sets','Andere vondsten','Alle producten'],
 pl:['Buty','Bluzy i swetry','Koszulki','Kurtki','Spodnie i szorty','Akcesoria','Koszulki sportowe','Elektronika','Nakrycia głowy','Krótkie komplety','Inne znaleziska','Wszystkie produkty'],
 fi:['Kengät','Hupparit ja neuleet','T-paidat','Takit','Housut ja shortsit','Asusteet','Pelipaidat','Elektroniikka','Päähineet','Shortsiasut','Muut löydöt','Kaikki tuotteet']
};
export function categoryNames(lang){return translations[lang]||translations.en}
