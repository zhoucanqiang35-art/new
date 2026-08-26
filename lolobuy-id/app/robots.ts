import type { MetadataRoute } from "next";
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:"*",allow:"/"},sitemap:"https://lolobuy-id.pages.dev/sitemap.xml"};}
