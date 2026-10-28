import {writeFile} from 'node:fs/promises';
import {articles, articlesFor} from '../src/data/articles.js';

const languages=['fi','de','fr','es','pt','it','nl','pl'];
const missing=[];
let incomplete=0;
for (const lang of languages) {
  const translated=articlesFor(lang);
  for (const [index, source] of articles.entries()) {
    const result=translated[index];
    if (!result.translated) { missing.push({lang, ...source}); continue; }
    const issues=[];
    if (result.sections.length!==source.sections.length) issues.push('section count');
    for (const [i, section] of source.sections.entries()) {
      const candidate=result.sections[i];
      if (!candidate || candidate.paragraphs.length!==section.paragraphs.length) issues.push(`section ${i+1} paragraphs`);
      if ((candidate?.bullets?.length || 0)!==(section.bullets?.length || 0)) issues.push(`section ${i+1} list`);
    }
    if (issues.length) {incomplete++; console.error(`${lang}/${source.slug}: ${issues.join(', ')}`);}
  }
}
const counts=Object.fromEntries(languages.map(lang=>[lang,missing.filter(x=>x.lang===lang).length]));
console.log('Missing full-article translations:',JSON.stringify(counts));
console.log(`Missing: ${missing.length}; translated articles with structural issues: ${incomplete}`);
if (process.argv[2]==='--export') {
  if (!process.argv[3]) throw new Error('Usage: node scripts/seo-translation-audit.mjs --export <path>');
  await writeFile(process.argv[3],JSON.stringify(missing,null,2)+'\n');
  console.log(`Exported source articles to ${process.argv[3]}`);
}
if (incomplete || (process.argv.includes('--require-complete') && missing.length)) process.exitCode=1;
