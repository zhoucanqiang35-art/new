const fs = require('fs');
const path = require('path');
const out = path.join(__dirname, 'dist');
const client = path.join(out, 'client');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(client, { recursive: true });
for (const file of ['index.html','finds.html','categories.html','product-details.html','guides.html','articles.html','faq.html','styles.css','content.js','app.js']) {
  fs.copyFileSync(path.join(__dirname, file), path.join(client, file));
}
fs.copyFileSync(path.join(__dirname, 'public', 'pikobuy.svg'), path.join(client, 'pikobuy.svg'));
fs.mkdirSync(path.join(out, 'server'), { recursive: true });
fs.writeFileSync(path.join(out, 'server', 'index.js'), `export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/') url.pathname = '/index.html';
    return env.ASSETS.fetch(new Request(url, request));
  }
};\n`);
