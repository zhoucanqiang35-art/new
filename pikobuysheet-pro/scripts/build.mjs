import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const [projectRoot, distRoot] = process.argv.slice(2);
if (!projectRoot || !distRoot) throw new Error('Expected project and output directories.');

const catalogSource = await readFile(join(projectRoot, 'worker/catalog-data.js'), 'utf8');
const catalogMatch = catalogSource.match(/^const SNAPSHOT_PRODUCTS = (\[[\s\S]*\]);\s*$/m);
if (!catalogMatch) throw new Error('Could not read the product catalogue.');

// Keep the full catalogue as a static Pages asset. Embedding it in the
// Function source makes Cloudflare's publishing wrapper reject the deploy.
// The Function loads this same-origin asset through the built-in ASSETS
// binding, so no product data or visitor navigation leaves this project.
const catalogModule = `let SNAPSHOT_PRODUCTS = [];
let catalogPromise;
async function ensureCatalog(request, assets) {
  if (SNAPSHOT_PRODUCTS.length) return;
  if (!assets?.fetch) throw new Error('Pages static asset binding is unavailable.');
  if (!catalogPromise) {
    catalogPromise = assets.fetch(new URL('/catalog-data/products.json', request.url))
      .then((response) => {
        if (!response.ok) throw new Error('Product catalogue asset is unavailable.');
        return response.json();
      })
      .then((products) => { SNAPSHOT_PRODUCTS = Array.isArray(products) ? products : []; })
      .finally(() => { catalogPromise = null; });
  }
  await catalogPromise;
}
`;
const workerSource = await readFile(join(projectRoot, 'worker/index.js'), 'utf8');
let functionSource = workerSource.replace('export default {', 'const APP = {');
functionSource = functionSource.replace('async fetch(request) {', 'async fetch(request, env = {}) {');
functionSource = functionSource.replace(
  'const url = new URL(request.url);\n    const lang = langOf(url.searchParams.get(\'lang\'));',
  'const url = new URL(request.url);\n    await ensureCatalog(request, env.ASSETS);\n    const lang = langOf(url.searchParams.get(\'lang\'));',
);
if (functionSource === workerSource || !functionSource.includes('await ensureCatalog(request, env.ASSETS);')) {
  throw new Error('Could not create the Pages Functions entrypoint.');
}

// Pages Functions avoids the Advanced Mode wrapper that rejects a large
// generated Worker in the deployment stage. The catch-all function retains
// the exact same request handler and routes as the original Worker.
const functionsRoot = join(projectRoot, 'functions');
await rm(functionsRoot, { recursive: true, force: true });
await mkdir(functionsRoot, { recursive: true });
await writeFile(join(functionsRoot, '[[path]].js'), `${catalogModule}${functionSource}\nexport async function onRequest(context) { return APP.fetch(context.request, context.env); }\n`);

// Pages requires an asset directory alongside the Functions entrypoint.
await mkdir(join(distRoot, 'catalog-data'), { recursive: true });
await writeFile(join(distRoot, 'catalog-data', 'products.json'), catalogMatch[1]);
await writeFile(join(distRoot, 'index.html'), '<!doctype html><title>PikoBuy Spreadsheet</title><meta http-equiv="refresh" content="0;url=/">');
