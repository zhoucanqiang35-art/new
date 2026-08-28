import type { Metadata } from "next";
import { ArticleLayout } from "../article-layout";
import { articles } from "../article-data";

const article=articles["lolobuy-fees-exchange-rate-ledger"];

export const metadata:Metadata={
  title:"LoloBuy Fees and Exchange Rates | Practical Cost Ledger",
  description:article.description,
  alternates:{
    canonical:"/articles/lolobuy-fees-exchange-rate-ledger",
    languages:{en:"/articles/lolobuy-fees-exchange-rate-ledger"}
  }
};

export default function Page(){return <ArticleLayout article={article}/>}
