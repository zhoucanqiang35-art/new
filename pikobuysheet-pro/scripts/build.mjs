import { readFile, writeFile } from 'node:fs/promises';
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

await writeFile(join(distRoot, '_worker.js'), `${catalogModule}${workerSource}`);

