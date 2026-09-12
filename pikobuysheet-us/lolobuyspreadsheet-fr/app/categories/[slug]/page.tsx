import RoutePage from "../../route-page";
export default async function CategoryDetailPage({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; return <RoutePage kind="category" slug={slug}/>; }
