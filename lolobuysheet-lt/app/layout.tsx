import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lolobuysheet.lt"),
  title: { default: "LoloBuy Sheet 2026 | Independent Product Research", template: "%s | LoloBuy Sheet" },
  description: "An independent LoloBuy spreadsheet research hub with product categories, QC guidance, shipping context and official source links for US and European buyers.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/" },
  openGraph: { title: "LoloBuy Sheet 2026", description: "Independent product research for global buyers", url: "https://lolobuysheet.lt/", siteName: "LoloBuy Sheet", images: [{ url: "/og.png", width: 1731, height: 909, alt: "LoloBuy Sheet 2026 — independent product research for global buyers" }], type: "website" },
  twitter: { card: "summary_large_image", title: "LoloBuy Sheet 2026", description: "Independent product research for global buyers", images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"><body>{children}</body></html>
  );
}
