(() => {
  if (document.body.dataset.page !== 'home') return;
  // site.js rebuilds the homepage when the locale changes.  Re-apply the
  // original homepage product treatment after each rebuild so a locale change
  // cannot bring back a different product image/layout.
  function restoreOriginalHomeImage() {
    const product = document.querySelector('#product .product');
    const image = product?.querySelector('img');
    if (image) image.remove();
    if (product) product.classList.add('product-summary');
  }

  restoreOriginalHomeImage();
  document.addEventListener('usfans-rendered', restoreOriginalHomeImage);
})();
