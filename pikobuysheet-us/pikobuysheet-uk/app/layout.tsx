import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LoloBuy Sheet | Buyer Research Preview",
  description: "Independent LoloBuy research hub preview for FindSpreadsheet.",
  other: {
    "codex-preview": "development",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
