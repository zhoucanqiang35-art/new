import type { Metadata } from "next";
import { LocaleHome } from "./locale-home";
export const metadata:Metadata={title:"LoloBuy Spreadsheet 2026 | Finds, QC Photos & Shipping Guide",description:"Use the LoloBuy spreadsheet to research current finds, verify live listings, check warehouse QC photos and plan a parcel with real shipping inputs.",alternates:{canonical:"/",languages:{en:"/en",de:"/de",fr:"/fr",es:"/es",it:"/it",pt:"/pt","x-default":"/en"}}};
export default function Home(){return <LocaleHome locale="en"/>;}
