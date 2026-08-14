import type { Metadata } from "next";
import { Manrope, Newsreader, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { GoogleTranslateRuntime } from "./language-switcher";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const newsreader = Newsreader({ variable: "--font-newsreader", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://lolobuyspreadsheet.es"),
  title: "LoloBuy Spreadsheet Research Hub",
  description:
    "An independent research-led guide to LoloBuy spreadsheet discovery, QC checks, shipping weight and source verification.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${newsreader.variable} ${spaceGrotesk.variable}`}>
        <GoogleTranslateRuntime />
        {children}
      </body>
    </html>
  );
}
