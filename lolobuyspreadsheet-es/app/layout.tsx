import type { Metadata } from "next";
import { Manrope, Newsreader, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { GoogleTranslateRuntime } from "./language-switcher";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const newsreader = Newsreader({ variable: "--font-newsreader", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LoloBuy Spreadsheet Research Hub",
  description:
    "An independent research-led guide to LoloBuy spreadsheet discovery, QC checks, shipping weight and source verification.",
  robots: { index: false, follow: false },
  other: {
    "codex-preview": "development",
    "googlebot": "noindex, nofollow",
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
