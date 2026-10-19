import { createRoot } from "react-dom/client";
import Home from "../app/page";
import RoutePage from "../app/route-page";
import { languages, type Locale } from "../app/site-i18n";
import "../app/globals.css";

function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const parts = path.split("/").filter(Boolean);
  const locale = (languages.some((item) => item.id === parts[0] as Locale) ? parts.shift() : "en") as Locale;

  if (parts[0] === "categories") {
    return <RoutePage kind={parts[1] ? "category" : "categories"} slug={parts[1]} initialLocale={locale} />;
  }
  if (["shoes", "hoodies", "t-shirts", "jackets", "pants", "bags", "watches", "electronics"].includes(parts[0])) {
    return <RoutePage kind="category" slug={parts[0]} initialLocale={locale} />;
  }
  if (parts[0] === "accessories") return <RoutePage kind="accessories" initialLocale={locale} />;
  if (parts[0] === "find-system" || parts[0] === "shipping-calculator") {
    return <RoutePage kind="tool" slug={parts[0]} initialLocale={locale} />;
  }
  if (parts[0] === "products") return <RoutePage kind="products" initialLocale={locale} />;
  if (parts[0] === "articles") {
    return <RoutePage kind={parts[1] ? "article" : "articles"} slug={parts[1]} initialLocale={locale} />;
  }
  if (parts[0] === "faq") return <RoutePage kind="faq" initialLocale={locale} />;
  return <Home initialLocale={locale} />;
}

createRoot(document.getElementById("root")!).render(<App />);
