/* Reassembles the catalog source from repository-safe chunks before catalog-ui.js runs. */
(() => {
  const parts = [
    "catalog-data-part-aa.js",
    "catalog-data-part-ab.js",
    "catalog-data-part-ac.js",
    "catalog-data-part-ad.js",
    "catalog-data-part-ae.js",
    "catalog-data-part-af.js",
    "catalog-data-part-ag.js",
  ];
  for (const part of parts) document.write('<script src="' + part + '"><\\/script>');
  document.write('<script>eval(atob(window.__litbuyCatalogBase64));<\\/script>');
})();
