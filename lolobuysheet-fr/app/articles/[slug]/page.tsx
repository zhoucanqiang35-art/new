import RoutePage from "../../route-page";
import { qcPhotoArticle } from "../../qc-photo-decision-framework";

export async function generateMetadata({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params;
  if(slug===qcPhotoArticle.slug) return {
    title:"LoloBuy QC Photos Guide | LoloFind",
    description:"Learn how to prepare, compare, and act on LoloBuy QC photos without treating warehouse images as guarantees."
  };
  return {
    title:"LoloBuy First-Order Research Guide | LoloFind",
    description:"A fact-led guide to researching a LoloBuy order before payment."
  };
}

export default async function ArticlePage({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; return <RoutePage kind="article" slug={slug}/>; }
