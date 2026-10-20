import { FaqPage } from "../site-components";
import { pageMetadata } from "../seo";

export const metadata=pageMetadata("en-US","faq","What Is PikoBuy? FAQ on QC, Returns, Shipping & Tracking","Clear answers on how PikoBuy works, two payments, warehouse QC photos, the return window, parcel shipping and tracking.");

export default function Page() {
  return <FaqPage/>;
}
