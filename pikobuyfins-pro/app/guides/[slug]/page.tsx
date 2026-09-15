import ResearchShell from "../../research-shell";
export default async function GuideArticlePage({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; return <ResearchShell page="article" slug={slug}/>; }
