import { SectionPage } from "../localized-pages";
import { sectionMetadata } from "../seo";

export const metadata = sectionMetadata("en", "categories");
export default function Page() { return <SectionPage section="categories" />; }
