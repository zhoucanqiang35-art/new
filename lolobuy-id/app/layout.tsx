import type { Metadata } from "next";
import "./globals.css";
import "./locales.css";
const siteUrl="https://lolobuy.id";
export const metadata: Metadata = {metadataBase:new URL(siteUrl),title:"FindSpreadsheet Agent Research Guide",description:"Independent product discovery, QC and parcel research for FindSpreadsheet users in Europe and North America.",robots:{index:true,follow:true},alternates:{canonical:"/"},openGraph:{title:"FindSpreadsheet Agent Research Guide",description:"Independent product discovery, QC and parcel research",type:"website",url:siteUrl,images:[{url:"/og.webp",width:1732,height:908,alt:"FindSpreadsheet Agent Research Guide editorial research card"}]},twitter:{card:"summary_large_image",title:"FindSpreadsheet Agent Research Guide",description:"Independent product discovery, QC and parcel research",images:["/og.webp"]},icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>;}
