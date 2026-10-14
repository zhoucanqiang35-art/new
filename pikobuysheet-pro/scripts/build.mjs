import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const [projectRoot, distRoot] = process.argv.slice(2);
if (!projectRoot || !distRoot) throw new Error('Expected project and output directories.');

const [catalog, worker] = await Promise.all([
  readFile(join(projectRoot, 'worker/catalog-data.js'), 'utf8'),
  readFile(join(projectRoot, 'worker/index.js'), 'utf8'),
]);
if (!catalog.includes('const SNAPSHOT_PRODUCTS = [')) throw new Error('Product catalogue is invalid.');

// Keep the catalogue and renderer in one Pages Function.  The prior build
// loaded the catalogue through an ASSETS binding, which produced an empty
// catalogue at runtime.  This preserves the reference site's working data
// model without any cross-site or browser-side data request.
const app = worker
  .replace('export default {', 'const APP = {')
  .replace('async fetch(request) {', 'async fetch(request, env = {}) {');
if (!app.includes('const APP = {') || !app.includes('async fetch(request, env = {}) {')) {
  throw new Error('Could not convert the reference renderer to a Pages Function.');
}

await rm(join(projectRoot, 'functions'), { recursive: true, force: true });
await rm(distRoot, { recursive: true, force: true });
await mkdir(join(projectRoot, 'functions'), { recursive: true });
await mkdir(distRoot, { recursive: true });
await writeFile(
  join(projectRoot, 'functions', '[[path]].js'),
  `${catalog}\n${app}\nexport async function onRequest(context) { return APP.fetch(context.request, context.env); }\n`,
);
await writeFile(join(distRoot, 'index.html'), '<!doctype html><title>PikoBuy Spreadsheet</title>');
