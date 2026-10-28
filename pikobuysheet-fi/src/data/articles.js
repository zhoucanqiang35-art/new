import batchTranslations from './batch-article-translations.json' with { type: 'json' };
import {categoriesArticlePt} from './categories-article-pt.js';
import {categoriesArticleEs} from './categories-article-es.js';
import {categoriesArticleFr} from './categories-article-fr.js';
import {categoriesArticleDe} from './categories-article-de.js';
import {categoriesArticleFi} from './categories-article-fi.js';
import {trackingFi} from './tracking-fi.js';
import {productLinksFi} from './product-links-fi.js';
import {warehouseFi} from './warehouse-fi.js';
import {totalCostFi} from './total-cost-fi.js';
import prior from './prior-articles.json' with { type: 'json' };
import additional from './additional-articles.json' with { type: 'json' };
import verifiedTranslations from './verified-article-translations.json' with { type: 'json' };
import {primaryArticleFi} from './primary-article-fi.js';
import {primaryArticleDe} from './primary-article-de.js';
import {primaryArticleFr} from './primary-article-fr.js';
import {primaryArticleEs} from './primary-article-es.js';
import {primaryArticlePt} from './primary-article-pt.js';
import {primaryArticleIt} from './primary-article-it.js';
import {primaryArticleNl} from './primary-article-nl.js';
import {primaryArticlePl} from './primary-article-pl.js';
import {articleUsFi} from './article-us-fi.js';
import {articleEuropeFi} from './article-europe-fi.js';
import {articleQcFi} from './article-qc-fi.js';
import {postOrderFi} from './post-order-fi-de.js';
import {postOrderDe} from './post-order-de.js';
import {postOrderFr} from './post-order-fr.js';
import {postOrderEs} from './post-order-es.js';
import {postOrderIt} from './post-order-it.js';
import {postOrderPt} from './post-order-pt.js';
import {postOrderNl} from './post-order-nl.js';
import {postOrderPl} from './post-order-pl.js';
const selected=['pikobuy-shipping-to-us-real-estimate','pikobuy-shipping-europe-vat-routes','pikobuy-qc-photos-category-checklist','how-to-find-pikobuy-product-links','pikobuy-spreadsheet-categories-guide'];
const additions=additional.filter(a=>selected.includes(a.slug)).map(a=>({slug:a.slug,title:a.title,deck:a.description,sections:[{title:'Where to start',paragraphs:a.intro},...a.sections.map(s=>({title:s.heading,paragraphs:s.paragraphs,bullets:s.checklist}))]}));
const category=additions.find(a=>a.slug==='pikobuy-spreadsheet-categories-guide');
category.sections.push(
{title:'Compare clothing using measurements and purpose',paragraphs:['Before comparing hoodies, T-shirts, jackets or trousers, decide what the garment is for and choose a similar piece you already own as a reference. A lightweight layering piece and a winter jacket can share a title but require different checks. Record chest width, body length, sleeves and the seller’s measurement method; for trousers note waist, rise, inseam and leg opening. A size label alone is not a reliable cross-seller measurement.', 'When the listing has multiple colours or styles, confirm that the measurements apply to the specific variant selected. Save the size chart and chosen option before payment, then compare the warehouse item and label with that record. If the fit is especially important, request a useful measurement rather than relying only on a wide photo.']},
{title:'Plan footwear and accessories separately',paragraphs:['Footwear deserves a separate shortlist because a size label, sole construction and the fit of a particular model can all matter. Compare the available size chart, note the intended size and ask for an insole measurement where appropriate. During QC check both shoes, outsole, heel, toe shape and whether the box is necessary for your shipment.', 'For bags, belts and other accessories, focus on dimensions, compartments, closures and hardware. Listing images may be styled to suggest a size without showing scale. Write down a maximum acceptable width or length before ordering and ask for a clear measurement when it will affect your decision. A picture can reveal visible shape but cannot establish the material’s long-term performance.']},
{title:'Electronics and fragile products need a different decision',paragraphs:['For electronics, verify the exact model, accessories, voltage, plug and regional compatibility rather than assuming that similarly named options are equivalent. Ask the agent about the inspection scope and route restrictions before placing an order. Ordinary warehouse images may show the outside and packaging but cannot establish that a device is electrically safe or will work over time.', 'Fragile or battery-containing goods may require different packaging or have fewer eligible routes. Enter the correct product type in the official shipping estimator, then confirm current route rules after the item reaches the warehouse. Keep the seller’s return conditions and any relevant warranty limitations in mind before approving international dispatch.']},
{title:'Turn the category shortlist into a final decision',paragraphs:['A practical comparison can fit into a small table: item and link, desired variant, source price, size evidence, estimated weight, inspection questions and the next action. Keep the observations separate from conclusions. For example, “the warehouse photo shows the front seam” is evidence; “the item will last a year” is not something a photo can prove.', 'Once the selected items arrive, compare them against the saved records and check the official return policy promptly. Only after accepting the warehouse evidence should you combine products, review actual weight and dimensions, and compare the available parcel routes. A useful category page makes this sequence easier; it does not guarantee that a seller, item or shipping line will remain available.']});
export const articles=[...prior.map(a=>({slug:a.slug,title:a.title,deck:a.deck,sections:a.sections})),...additions];
const introTitles={de:'Einführung',fr:'Introduction',es:'Introducción',it:'Introduzione',pt:'Introdução',nl:'Inleiding',pl:'Wprowadzenie'};
const postOrderTranslations={fi:postOrderFi,de:postOrderDe,fr:postOrderFr,es:postOrderEs,it:postOrderIt,pt:postOrderPt,nl:postOrderNl,pl:postOrderPl};
export function articlesFor(lang){
  const translated=verifiedTranslations[lang] || {};
  return articles.map(article=>{
    if (batchTranslations[lang]?.[article.slug]) return {...batchTranslations[lang][article.slug],translated:true};
    if(postOrderTranslations[lang]?.slug===article.slug)return {...postOrderTranslations[lang],translated:true};
    if(lang==='pt' && article.slug===categoriesArticlePt.slug)return {...categoriesArticlePt,translated:true};
    if(lang==='es' && article.slug===categoriesArticleEs.slug)return {...categoriesArticleEs,translated:true};
    if(lang==='fr' && article.slug===categoriesArticleFr.slug)return {...categoriesArticleFr,translated:true};
    if(lang==='de' && article.slug===categoriesArticleDe.slug)return {...categoriesArticleDe,translated:true};
    if(lang==='fi' && article.slug===categoriesArticleFi.slug)return {...categoriesArticleFi,translated:true};
    if(lang==='fi' && article.slug===trackingFi.slug)return {...trackingFi,translated:true};
    if(lang==='fi' && article.slug===productLinksFi.slug)return {...productLinksFi,translated:true};
    if(lang==='fi' && article.slug===warehouseFi.slug)return {...warehouseFi,translated:true};
    if(lang==='fi' && article.slug===totalCostFi.slug)return {...totalCostFi,translated:true};
    if(lang==='fi' && article.slug===primaryArticleFi.slug)return {...primaryArticleFi,translated:true};
    if(lang==='fi' && article.slug===articleUsFi.slug)return {...articleUsFi,translated:true};
    if(lang==='fi' && article.slug===articleEuropeFi.slug)return {...articleEuropeFi,translated:true};
    if(lang==='fi' && article.slug===articleQcFi.slug)return {...articleQcFi,translated:true};
    if(lang==='de' && article.slug===primaryArticleDe.slug)return {...primaryArticleDe,translated:true};
    if(lang==='fr' && article.slug===primaryArticleFr.slug)return {...primaryArticleFr,translated:true};
    if(lang==='es' && article.slug===primaryArticleEs.slug)return {...primaryArticleEs,translated:true};
    if(lang==='pt' && article.slug===primaryArticlePt.slug)return {...primaryArticlePt,translated:true};
    if(lang==='it' && article.slug===primaryArticleIt.slug)return {...primaryArticleIt,translated:true};
    if(lang==='nl' && article.slug===primaryArticleNl.slug)return {...primaryArticleNl,translated:true};
    if(lang==='pl' && article.slug===primaryArticlePl.slug)return {...primaryArticlePl,translated:true};
    const a=translated[article.slug];
    if(!a)return {...article,translated:lang==='en'};
    return {slug:article.slug,title:a.title,deck:a.description,translated:true,sections:[{title:introTitles[lang],paragraphs:a.intro},...a.sections.map(s=>({title:s.heading,paragraphs:s.paragraphs,bullets:s.checklist}))]};
  });
}
export const officialSources=[['Pikobuy shopping guide','https://www.pikobuy.com/guide'],['Pikobuy shipping estimator','https://www.pikobuy.com/shipping-cost'],['Pikobuy returns and exchanges','https://www.pikobuy.com/protocol/returns'],['Pikobuy shipping terms','https://www.pikobuy.com/protocol/shipping']];
