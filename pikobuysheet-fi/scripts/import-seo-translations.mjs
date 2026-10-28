import {readFile, writeFile} from 'node:fs/promises';
import {articles, articlesFor} from '../src/data/articles.js';
const file=process.argv[2];
if (!file) throw new Error('Usage: node scripts/import-seo-translations.mjs <translated-batch.json>');
const rows=JSON.parse(await readFile(file,'utf8'));
if (!Array.isArray(rows) || !rows.length) throw new Error('Expected a nonempty array of translated article objects.');
const outputPath=new URL('../src/data/batch-article-translations.json',import.meta.url);
const output=JSON.parse(await readFile(outputPath,'utf8'));
const allowed=new Set(['fi','de','fr','es','pt','it','nl','pl']);
const seen=new Set();
function check(source,target,path) {
  if (typeof target!=='string' || !target.trim()) throw new Error(`${path}: missing translation`);
  if (target.trim()===source.trim()) throw new Error(`${path}: identical to English source`);
}
for (const row of rows) {
  if (!allowed.has(row.lang)) throw new Error(`Invalid language: ${row.lang}`);
  const source=articles.find(x=>x.slug===row.slug);
  if (!source) throw new Error(`Unknown article: ${row.slug}`);
  const key=`${row.lang}/${row.slug}`;
  if (seen.has(key)) throw new Error(`Duplicate: ${key}`);
  seen.add(key);
  if (articlesFor(row.lang).find(x=>x.slug===row.slug)?.translated && !output[row.lang]?.[row.slug]) throw new Error(`Already translated: ${key}`);
  check(source.title,row.title,`${key}/title`);
  check(source.deck,row.deck,`${key}/deck`);
  if (!Array.isArray(row.sections) || row.sections.length!==source.sections.length) throw new Error(`${key}: wrong section count`);
  source.sections.forEach((section,i)=>{
    const target=row.sections[i], path=`${key}/section ${i+1}`;
    check(section.title,target?.title,`${path}/title`);
    if (!Array.isArray(target?.paragraphs) || target.paragraphs.length!==section.paragraphs.length) throw new Error(`${path}: wrong paragraph count`);
    section.paragraphs.forEach((text,j)=>check(text,target.paragraphs[j],`${path}/paragraph ${j+1}`));
    if ((section.bullets?.length||0)!==(target.bullets?.length||0)) throw new Error(`${path}: wrong checklist count`);
    section.bullets?.forEach((text,j)=>check(text,target.bullets[j],`${path}/checklist ${j+1}`));
  });
  const {lang,...article}=row;
  (output[lang] ||= {})[row.slug]=article;
}
await writeFile(outputPath,JSON.stringify(output,null,2)+'\n');
console.log(`Imported ${rows.length} structurally complete translations. Review linguistic quality before publishing.`);
