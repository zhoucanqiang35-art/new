const labels: Record<string, readonly [string, string, string, string, string, string, string, string, string]> = {
  "en-US": ["Buy on PikoBuy", "Other purchase platforms", "Copy product link", "Link copied", "Style", "Size", "Seller photos", "Confirm your selected style and size on the purchase page.", "Product link"],
  "de-DE": ["Bei PikoBuy kaufen", "Weitere Kaufplattformen", "Produktlink kopieren", "Link kopiert", "Variante", "Größe", "Verkäuferfotos", "Prüfe Variante und Größe auf der Kaufseite.", "Produktlink"],
  "fr-FR": ["Acheter sur PikoBuy", "Autres plateformes d’achat", "Copier le lien produit", "Lien copié", "Style", "Taille", "Photos du vendeur", "Vérifiez le style et la taille sur la page d’achat.", "Lien produit"],
  "es-ES": ["Comprar en PikoBuy", "Otras plataformas de compra", "Copiar enlace del producto", "Enlace copiado", "Estilo", "Talla", "Fotos del vendedor", "Confirma el estilo y la talla en la página de compra.", "Enlace del producto"],
  "it-IT": ["Acquista su PikoBuy", "Altre piattaforme di acquisto", "Copia il link del prodotto", "Link copiato", "Stile", "Taglia", "Foto del venditore", "Verifica stile e taglia sulla pagina d’acquisto.", "Link del prodotto"],
  "nl-NL": ["Kopen via PikoBuy", "Andere aankoopplatforms", "Productlink kopiëren", "Link gekopieerd", "Uitvoering", "Maat", "Verkopersfoto’s", "Controleer uitvoering en maat op de aankooppagina.", "Productlink"],
  "pl-PL": ["Kup w PikoBuy", "Inne platformy zakupowe", "Kopiuj link do produktu", "Skopiowano link", "Wariant", "Rozmiar", "Zdjęcia sprzedawcy", "Sprawdź wariant i rozmiar na stronie zakupu.", "Link do produktu"],
  "pt-PT": ["Comprar no PikoBuy", "Outras plataformas de compra", "Copiar ligação do produto", "Ligação copiada", "Estilo", "Tamanho", "Fotos do vendedor", "Confirme o estilo e o tamanho na página de compra.", "Ligação do produto"],
  "sv-SE": ["Köp via PikoBuy", "Andra köpplattformar", "Kopiera produktlänk", "Länken kopierad", "Variant", "Storlek", "Säljarens bilder", "Kontrollera variant och storlek på köpsidan.", "Produktlänk"],
  "da-DK": ["Køb via PikoBuy", "Andre købsplatforme", "Kopiér produktlink", "Link kopieret", "Variant", "Størrelse", "Sælgerens billeder", "Bekræft variant og størrelse på købssiden.", "Produktlink"],
  "nb-NO": ["Kjøp via PikoBuy", "Andre kjøpsplattformer", "Kopier produktlenken", "Lenken er kopiert", "Variant", "Størrelse", "Selgerens bilder", "Kontroller variant og størrelse på kjøpssiden.", "Produktlenke"],
  "fi-FI": ["Osta PikoBuyssa", "Muut ostoalustat", "Kopioi tuotteen linkki", "Linkki kopioitu", "Malli", "Koko", "Myyjän kuvat", "Tarkista malli ja koko ostosivulla.", "Tuotteen linkki"],
  "cs-CZ": ["Koupit přes PikoBuy", "Další nákupní platformy", "Zkopírovat odkaz na produkt", "Odkaz zkopírován", "Varianta", "Velikost", "Fotografie prodejce", "Ověřte variantu a velikost na stránce nákupu.", "Odkaz na produkt"],
  "ro-RO": ["Cumpără prin PikoBuy", "Alte platforme de cumpărare", "Copiază linkul produsului", "Link copiat", "Model", "Mărime", "Fotografiile vânzătorului", "Confirmă modelul și mărimea pe pagina de cumpărare.", "Linkul produsului"],
  "hu-HU": ["Vásárlás a PikoBuyon", "Egyéb vásárlási platformok", "Terméklink másolása", "Link másolva", "Változat", "Méret", "Eladói fotók", "Ellenőrizd a változatot és a méretet a vásárlási oldalon.", "Terméklink"],
  "el-GR": ["Αγορά μέσω PikoBuy", "Άλλες πλατφόρμες αγοράς", "Αντιγραφή συνδέσμου προϊόντος", "Ο σύνδεσμος αντιγράφηκε", "Επιλογή", "Μέγεθος", "Φωτογραφίες πωλητή", "Ελέγξτε την επιλογή και το μέγεθος στη σελίδα αγοράς.", "Σύνδεσμος προϊόντος"],
  "bg-BG": ["Купи през PikoBuy", "Други платформи за покупка", "Копирай линка към продукта", "Линкът е копиран", "Вариант", "Размер", "Снимки от продавача", "Провери варианта и размера на страницата за покупка.", "Линк към продукта"],
  "hr-HR": ["Kupi putem PikoBuya", "Druge platforme za kupnju", "Kopiraj poveznicu proizvoda", "Poveznica je kopirana", "Varijanta", "Veličina", "Fotografije prodavatelja", "Provjeri varijantu i veličinu na stranici kupnje.", "Poveznica proizvoda"],
  "sk-SK": ["Kúpiť cez PikoBuy", "Ďalšie nákupné platformy", "Skopírovať odkaz na produkt", "Odkaz skopírovaný", "Variant", "Veľkosť", "Fotografie predajcu", "Overte variant a veľkosť na stránke nákupu.", "Odkaz na produkt"],
  "sl-SI": ["Kupi prek PikoBuy", "Druge nakupne platforme", "Kopiraj povezavo do izdelka", "Povezava je kopirana", "Različica", "Velikost", "Fotografije prodajalca", "Preveri različico in velikost na strani za nakup.", "Povezava do izdelka"],
  "et-EE": ["Osta PikoBuy kaudu", "Teised ostuplatvormid", "Kopeeri tootelink", "Link kopeeritud", "Variant", "Suurus", "Müüja fotod", "Kontrolli varianti ja suurust ostulehel.", "Tootelink"],
  "lt-LT": ["Pirkti per PikoBuy", "Kitos pirkimo platformos", "Kopijuoti prekės nuorodą", "Nuoroda nukopijuota", "Variantas", "Dydis", "Pardavėjo nuotraukos", "Patikrink variantą ir dydį pirkimo puslapyje.", "Prekės nuoroda"],
};

export function getProductDetailCopy(locale: string) {
  const [buy, agents, copy, copied, style, size, sellerPhotos, confirm, productLink] = labels[locale] || labels["en-US"];
  return { buy, agents, copy, copied, style, size, sellerPhotos, confirm, productLink };
}
