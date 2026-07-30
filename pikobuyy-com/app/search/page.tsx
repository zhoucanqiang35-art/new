import { redirect } from "next/navigation";

type SearchParams = Promise<{
  q?: string | string[];
  keywords?: string | string[];
}>;

export default async function SearchPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const rawValue = params.keywords ?? params.q;
  const rawQuery = Array.isArray(rawValue) ? rawValue[0] : rawValue;
  const query = (rawQuery ?? "").trim();

  if (!query) {
    redirect("https://findspreadsheet.com/AllProducts/");
  }

  const target = new URL("https://findspreadsheet.com/search.html");
  target.searchParams.set("keywords", query);
  target.searchParams.set("channelid", "2");
  redirect(target.toString());
}
