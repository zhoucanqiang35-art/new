import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const source = await readFile(resolve(root, 'functions/[[path]].js'), 'utf8');
assert.match(source, /const SNAPSHOT_PRODUCTS = \[/);
assert.match(source, /export async function onRequest/);
const moduleUrl = `data:text/javascript;base64,${Buffer.from(source).toString('base64')}`;
const module = await import(moduleUrl);
assert.equal(typeof module.onRequest, 'function');
console.log('Reference renderer and full catalogue are bundled into the Pages Function.');
