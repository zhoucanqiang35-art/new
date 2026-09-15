import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PikoBuyFins | Research-first Spreadsheet Guide",
  description: "Independent PikoBuy spreadsheet research guide for categories, QC checks, source links and shipping weight.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
