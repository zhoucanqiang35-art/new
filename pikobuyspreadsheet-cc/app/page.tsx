import { ResearchSite } from "./components/research-site";
import { pageMetadata } from "./lib/seo";

export const metadata = pageMetadata("en", {});

export default function Home() {
  return <ResearchSite locale="en" dictionary={{}} />;
}
