const fs = require('fs');
const path = require('path');

const out = path.join(__dirname, 'dist');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

for (const file of [
  'index.html',
  'finds.html',
  'categories.html',
  'product-details.html',
  'guides.html',
  'articles.html',
  'faq.html',
  'styles.css',
  'content.js',
  'app.js',
  'sitemap.xml',
  'robots.txt'
]) {
  fs.copyFileSync(path.join(__dirname, file), path.join(out, file));
}

fs.copyFileSync(
  path.join(__dirname, 'public', 'pikobuy.svg'),
  path.join(out, 'pikobuy.svg')
);
