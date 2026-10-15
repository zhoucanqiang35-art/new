import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { runInNewContext } from 'node:vm';

const [projectRoot, distRoot] = process.argv.slice(2);
if (!projectRoot || !distRoot) throw new Error('Expected project and output directories.');

const catalogSource = await readFile(join(projectRoot, 'worker/catalog-data.js'), 'utf8');
// The catalogue is valid JavaScript but may contain seller text that is not
// valid JSON verbatim. Evaluate only this local data file, then serialize a
// clean same-origin JSON asset for Pages Functions.
const catalogJson = runInNewContext(`${catalogSource}\nJSON.stringify(SNAPSHOT_PRODUCTS);`, {}, { timeout: 5_000 });
if (typeof catalogJson !== 'string' || !Array.isArray(JSON.parse(catalogJson))) {
  throw new Error('Could not create a valid product catalogue asset.');
}

const catalogModule = `let SNAPSHOT_PRODUCTS = [];
let catalogPromise;
async function ensureCatalog(request, assets) {
  if (SNAPSHOT_PRODUCTS.length) return;
  if (!assets?.fetch) return;
  if (!catalogPromise) {
    catalogPromise = assets.fetch(new URL('/catalog-data/products.json', request.url))
      .then((response) => response.ok ? response.json() : [])
      .then((products) => { SNAPSHOT_PRODUCTS = Array.isArray(products) ? products : []; })
      .catch(() => { SNAPSHOT_PRODUCTS = []; })
      .finally(() => { catalogPromise = null; });
  }
  await catalogPromise;
}
`;
const workerSource = await readFile(join(projectRoot, 'worker/index.js'), 'utf8');
let functionSource = workerSource.replace('export default {', 'const APP = {');
functionSource = functionSource.replace('async fetch(request) {', 'async fetch(request, env = {}) {');
functionSource = functionSource.replace(
  "const url = new URL(request.url);\n    const lang = langOf(url.searchParams.get('lang'));",
  "const url = new URL(request.url);\n    await ensureCatalog(request, env.ASSETS);\n    const lang = langOf(url.searchParams.get('lang'));",
);
if (functionSource === workerSource || !functionSource.includes('await ensureCatalog(request, env.ASSETS);')) {
  throw new Error('Could not create the Pages Functions entrypoint.');
}

const functionsRoot = join(projectRoot, 'functions');
await rm(functionsRoot, { recursive: true, force: true });
await rm(distRoot, { recursive: true, force: true });
await mkdir(functionsRoot, { recursive: true });
await mkdir(join(distRoot, 'catalog-data'), { recursive: true });
await writeFile(join(functionsRoot, '[[path]].js'), `${catalogModule}${functionSource}\nexport async function onRequest(context) {\n  try { return await APP.fetch(context.request, context.env); }\n  catch (error) { return new Response(\`PikoBuy Spreadsheet runtime error: \${error?.message || String(error)}\`, { status: 500, headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store' } }); }\n}\n`);
await writeFile(join(distRoot, 'catalog-data', 'products.json'), catalogJson);
await writeFile(join(distRoot, 'index.html'), '<!doctype html><title>PikoBuy Spreadsheet</title><meta http-equiv="refresh" content="0;url=/">');
