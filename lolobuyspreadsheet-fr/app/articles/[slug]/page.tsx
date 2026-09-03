import RoutePage from "../../route-page";
export default async function ArticlePage({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; return <RoutePage kind="article" slug={slug}/>; }
