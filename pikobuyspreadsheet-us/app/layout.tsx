import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PikoBuy Spreadsheet US",
  description: "Independent PikoBuy spreadsheet research for US and European shoppers.",
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
