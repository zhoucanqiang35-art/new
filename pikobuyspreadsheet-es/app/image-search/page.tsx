import { imageSearchCopy } from "../image-search-copy";
import { pageMetadata } from "../seo";
import { ImageSearchPage } from "../site-components";

const copy = imageSearchCopy("en-US");
export const metadata = pageMetadata("en-US", "image-search", copy.title, copy.drop);

export default function Page() {
  return <ImageSearchPage/>;
}
