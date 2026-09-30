import { cpSync, readdirSync } from 'node:fs';

for (const name of readdirSync('dist')) {
  cpSync(`dist/${name}`, name, { recursive: true, force: true });
}
