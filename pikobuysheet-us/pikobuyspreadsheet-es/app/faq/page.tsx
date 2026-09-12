import { FaqPage } from "../site-components";
import { pageMetadata } from "../seo";

export const metadata=pageMetadata("en-US","faq","PikoBuy FAQ","Fact-checked answers about payments, warehouse photos, returns, shipping and tracking.");

export default function Page() {
  return <FaqPage/>;
}
