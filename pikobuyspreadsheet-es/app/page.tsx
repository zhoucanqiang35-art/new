import { HomePage } from "./site-components";
import { homepageDescription, homepageTitle, pageMetadata } from "./seo";
export const metadata=pageMetadata("en-US","",homepageTitle,homepageDescription);
export default function Home() { return <HomePage/>; }
