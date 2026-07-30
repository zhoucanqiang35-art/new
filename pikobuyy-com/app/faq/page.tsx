import { SectionPage } from "../localized-pages";
import { sectionMetadata } from "../seo";

export const metadata = sectionMetadata("en", "faq");
export default function Page() { return <SectionPage section="faq" />; }
