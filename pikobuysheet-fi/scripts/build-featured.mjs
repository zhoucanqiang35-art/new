import {readFile,writeFile} from 'node:fs/promises';
const source=JSON.parse(await readFile(new URL('../public/data/catalog.json',import.meta.url),'utf8'));
const order=['shoes','hoodies-sweaters','t-shirts','jackets','pants-shorts','accessories','jersey','electronics','headwear','ShortSets','other-stuff'];
const groups=order.map(c=>{const matches=source.products.filter(p=>p.category===c&&p.image&&p.id!=='6250');if(c==='shoes'){const index=matches.findIndex(p=>p.id==='1029');if(index>0)matches.unshift(...matches.splice(index,1));}return matches});
const products=[],seen=new Set();for(let i=0;products.length<100&&groups.some(g=>g.length);i++){for(const group of groups){let p;while(group.length&&!p){const candidate=group.shift();if(!seen.has(candidate.image)){p=candidate;seen.add(candidate.image)}}if(p)products.push(p);if(products.length===100)break}}
await writeFile(new URL('../public/data/featured.json',import.meta.url),JSON.stringify({source:source.source,exportedAt:source.exportedAt,products}));
