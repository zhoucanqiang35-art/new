import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lolobuy.fr"),
  title: "LoloBuy France — Independent Spreadsheet Guide",
  description: "An independent LoloBuy spreadsheet guide for Europe and North America: product discovery, QC education and practical international shipping checks.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
