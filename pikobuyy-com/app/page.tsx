import { HomePage } from "./home-page";
import { homeMetadata } from "./seo";

export const metadata = homeMetadata("en");

export default function Home() {
  return <HomePage />;
}
