import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opening FindSpreadsheet Search",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://findspreadsheet.com/AllProducts/" },
};

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return children;
}
