import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const [projectRoot, distRoot] = process.argv.slice(2);
if (!projectRoot || !distRoot) throw new Error('Expected project and output directories.');

const catalogSource = await readFile(join(projectRoot, 'worker/catalog-data.js'), 'utf8');
const catalogMatch = catalogSource.match(/^const SNAPSHOT_PRODUCTS = (\[[\s\S]*\]);\s*$/m);
if (!catalogMatch) throw new Error('Could not read the product catalogue.');

// Keep source chunks small enough for the Pages Functions compiler.
const encoded = Buffer.from(catalogMatch[1], 'utf8').toString('base64');
const chunks = encoded.match(/.{1,60000}/g) || [];
const catalogModule = `const SNAPSHOT_PRODUCTS = JSON.parse(atob(${chunks.map((chunk) => JSON.stringify(chunk)).join(' + ')}));\n`;
const workerSource = await readFile(join(projectRoot, 'worker/index.js'), 'utf8');
const functionSource = workerSource.replace('export default {', 'const APP = {');
if (functionSource === workerSource) throw new Error('Could not create the Pages Functions entrypoint.');

// Pages Functions avoids the Advanced Mode wrapper that rejects a large
// generated Worker in the deployment stage. The catch-all function retains
// the exact same request handler and routes as the original Worker.
const functionsRoot = join(projectRoot, 'functions');
await rm(functionsRoot, { recursive: true, force: true });
await mkdir(functionsRoot, { recursive: true });
await writeFile(join(functionsRoot, '[[path]].js'), `${catalogModule}${functionSource}\nexport async function onRequest(context) { return APP.fetch(context.request); }\n`);

// Pages requires an asset directory alongside the Functions entrypoint.
await writeFile(join(distRoot, 'index.html'), '<!doctype html><title>PikoBuy Spreadsheet</title><meta http-equiv="refresh" content="0;url=/">');
