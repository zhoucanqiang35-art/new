import { LoloSite } from "./lolo-site";
import { localeMetadata } from "./locale-metadata";

export const metadata = localeMetadata.en;

export default function Home() {
  return <LoloSite locale="en" />;
}
