import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pikobuysheet.us"),
  title: {
    default: "PikoBuy Sheet | Better finds, clearer checks",
    template: "%s | PikoBuy Sheet",
  },
  description:
    "An independent research hub for comparing product categories, QC details, and buying routes before continuing to FindSpreadsheet.",
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
