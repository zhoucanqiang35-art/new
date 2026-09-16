#!/usr/bin/env python3
"""Generate complete, same-structure localized static pages from the English source."""
from pathlib import Path
from lxml import html
import argostranslate.translate
import sys

ROOT=Path(__file__).resolve().parents[1]
LANG=sys.argv[1]
SOURCE_PAGES=[ROOT/'dist/index.html',ROOT/'dist/categories/index.html',ROOT/'dist/product-details/index.html',ROOT/'dist/seo-articles/index.html',ROOT/'dist/seo-articles/lolobuy-order-checklist/index.html',ROOT/'dist/faq/index.html',ROOT/'dist/qc-tool/index.html',ROOT/'dist/tools/haul-planner/index.html']
SKIP={'script','style','svg','path','option'}
ATTRS=('title','placeholder','aria-label')
def trans(tr,values):
    """Translate independent DOM strings as a model batch, keeping one output per DOM node."""
    engine=tr.underlying
    engine.translate('init')
    pkg=engine.pkg
    results=[]
    for start in range(0,len(values),64):
        group=values[start:start+64]
        batches=engine.translator.translate_batch(
            [pkg.tokenizer.encode(value.strip()) for value in group],
            beam_size=1,num_hypotheses=1,max_batch_size=512,batch_type='tokens',
            replace_unknowns=True,return_scores=True)
        results.extend(pkg.tokenizer.decode(item.hypotheses[0]).strip() for item in batches)
    return results

def localize_page(path,tr):
    doc=html.parse(str(path)); root=doc.getroot(); root.set('lang',LANG)
    elements=[]; values=[]
    for el in root.iter():
        if not isinstance(el.tag,str) or el.tag.lower() in SKIP: continue
        if el.tag.lower()=='a' and 'database' in (el.get('class') or ''): continue
        if el.text and el.text.strip(): elements.append((el,'text')); values.append(el.text)
        if el.tail and el.tail.strip() and el.getparent() is not None and el.getparent().tag.lower() not in SKIP: elements.append((el,'tail')); values.append(el.tail)
        for attr in ATTRS:
            value=el.get(attr)
            if value and value.strip(): elements.append((el,attr)); values.append(value)
        if el.tag.lower()=='a' and 'card' in (el.get('class') or '').split() and not el.get('data-category'):
            title=el.find('.//h3')
            if title is not None and title.text: el.set('data-category',title.text.strip())
    for (el,kind),value in zip(elements,trans(tr,values)):
        if kind=='text': el.text=value
        elif kind=='tail': el.tail=value
        else: el.set(kind,value)
    target=ROOT/'dist'/LANG/path.relative_to(ROOT/'dist'); target.parent.mkdir(parents=True,exist_ok=True)
    target.write_bytes(html.tostring(doc,encoding='utf-8',method='html',doctype='<!doctype html>'))

tr=argostranslate.translate.get_translation_from_codes('en',LANG)
if not tr: raise SystemExit(f'Missing translation model for {LANG}')
for page in SOURCE_PAGES: localize_page(page,tr)
