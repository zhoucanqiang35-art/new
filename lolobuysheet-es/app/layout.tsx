import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LoloBuy Spreadsheet 2026 — Finds, QC & Shipping Guides",
  description:
    "Independent LoloBuy spreadsheet, product discovery, QC checklists and practical shipping guides for shoppers in Europe and North America.",
  robots: {
    index: false,
    follow: false,
  },
  other: {
    "codex-preview": "review-only",
    "theme-color": "#1d6b4d",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
