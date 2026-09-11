import type { Metadata } from "next";
import { ArticleLayout } from "../article-layout";
import { articles } from "../article-data";

const article=articles["lolobuy-refund-cancel-return-guide"];

export const metadata:Metadata={
  title:"LoloBuy Refund Guide: Cancel or Return an Order",
  description:article.description,
  alternates:{
    canonical:"/articles/lolobuy-refund-cancel-return-guide",
    languages:{en:"/articles/lolobuy-refund-cancel-return-guide"}
  },
  openGraph:{
    type:"article",
    title:article.title,
    description:article.description,
    url:"/articles/lolobuy-refund-cancel-return-guide",
    images:[{url:article.heroImage!.src,width:article.heroImage!.width,height:article.heroImage!.height,alt:article.heroImage!.alt}]
  }
};

export default function Page(){return <ArticleLayout article={article}/>}
