"use client";

import type { FormEvent } from "react";
import { categories, languages, products } from "./data";
import { routeCopy } from "./routeCopy";

const productAliases:Record<string,string[]>={
  "gallery-short":["gallery short","gallery shorts"],
  "outdoor-jacket":["outdoor jacket","north face jacket"],
  "embroidered-wallet":["embroidered wallet","supreme wallet","wallet"],
  "wireless-earbuds":["wireless earbuds","earbuds","beats studio buds","headphones"],
};

const categoryAliases:Record<string,string[]>={
  jackets:["jacket","jackets","outerwear"],
  "t-shirts":["t-shirt","t-shirts","tshirt","tshirts","tee","tees","shirt"],
  shoes:["shoe","shoes","sneaker","sneakers","slides"],
  "hoodies-sweaters":["hoodie","hoodies","sweater","sweaters","knitwear"],
  "pants-shorts":["pants","trousers","shorts","denim","cargos"],
  "short-sets":["short set","short sets","matching set","sets"],
  headwear:["headwear","cap","caps","hat","hats","beanie","beanies"],
  accessories:["accessory","accessories","bag","bags","wallet","wallets"],
  jerseys:["jersey","jerseys","football shirt","sports shirt"],
  electronics:["electronic","electronics","device","devices","earbuds","headphones"],
  "other-stuff":["other stuff","home decor","room decor","miscellaneous"],
};

function normalize(value:string){return value.toLowerCase().trim().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g," ");}
function exactOrContained(query:string,terms:string[]){return terms.some(term=>query===term||query.includes(term));}

export default function SearchRedirect({lang,categoryNames,productNames}:{lang?:string;categoryNames?:Record<string,string>;productNames?:Record<string,string>}={}){
  const language=lang?languages.find(item=>item.code===lang):undefined;
  const labels=lang?routeCopy[lang]:undefined;
  const prefix=lang?`/languages/${lang}`:"";

  function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    const form=new FormData(event.currentTarget);
    const raw=String(form.get("keywords")??"").trim();
    const query=normalize(raw);
    if(!query)return;
    const product=products.find(item=>exactOrContained(query,[normalize(item.name),normalize(productNames?.[item.slug]??""),...(productAliases[item.slug]??[])]));
    if(product){window.location.assign(`${prefix}/products/${product.slug}`);return;}
    const category=categories.find(item=>exactOrContained(query,[normalize(item.name),normalize(categoryNames?.[item.slug]??""),normalize(item.slug),...(categoryAliases[item.slug]??[])]));
    if(category){window.location.assign(`${prefix}/categories/${category.slug}`);return;}
    window.location.assign(`https://findspreadsheet.com/search.html?keywords=${encodeURIComponent(raw)}`);
  }

  return <form className="search" action="https://findspreadsheet.com/search.html" method="get" onSubmit={submit}>
    <label htmlFor={`keywords-${lang??"default"}`}>{language?.title??"Search every product on FindSpreadsheet"}</label>
    <div><input id={`keywords-${lang??"default"}`} name="keywords" placeholder={language?.cta??"Enter a product, brand or category — e.g. Supreme Wallet"} required autoComplete="off"/><button type="submit">{labels?.open??"View exact results"} ↗</button></div>
    <small>{labels?`${labels.products} · ${labels.categories}`:"Known product and category terms open the exact research page. Other searches continue to the main database."}</small>
    <div className="search-shortcuts">{categories.map(category=><a href={`${prefix}/categories/${category.slug}`} key={category.slug}>{categoryNames?.[category.slug]??category.name}</a>)}</div>
  </form>;
}
