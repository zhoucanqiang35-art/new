import SiteHome from "../components/SiteHome";
import type { Metadata } from "next";
import { localeCodes, localePath } from "../data/locales";

export const metadata: Metadata = {
  title: "LoloBuy Spreadsheet Deutschland — QC, Lager & Versand Guide",
  description: "Unabhängiger LoloBuy Spreadsheet Ratgeber für Deutschland: Produktsuche, QC-Fotos, Lagerablauf, Kosten und internationaler Versand.",
  alternates: { canonical: "/de", languages: { ...Object.fromEntries(localeCodes.map(code => [code, localePath(code)])), "x-default": "/" } },
};

export default function GermanHome() {
  return <SiteHome locale="de" />;
}
