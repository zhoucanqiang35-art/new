import type {Metadata} from "next"; import "./globals.css";
export const metadata:Metadata={title:"PikoBuy Spreadsheet 2026 | Finds, QC, Shipping & Guides",description:"Independent PikoBuy spreadsheet guide with product categories, QC research, shipping guidance and FindSpreadsheet product routes.",robots:{index:false,follow:false},icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
