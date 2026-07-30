import { SectionPage } from "../localized-pages";
import { sectionMetadata } from "../seo";

export const metadata = sectionMetadata("en", "updates");
export default function Page() { return <SectionPage section="updates" />; }
