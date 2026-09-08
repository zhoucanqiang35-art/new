import { createRoot } from "react-dom/client";
import Home from "../app/page";
import RoutePage from "../app/route-page";
import "../app/globals.css";

function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const parts = path.split("/").filter(Boolean);

  if (parts[0] === "categories") {
    return <RoutePage kind={parts[1] ? "category" : "categories"} slug={parts[1]} />;
  }
  if (parts[0] === "products") return <RoutePage kind="products" />;
  if (parts[0] === "articles") {
    return <RoutePage kind={parts[1] ? "article" : "articles"} slug={parts[1]} />;
  }
  if (parts[0] === "faq") return <RoutePage kind="faq" />;
  return <Home />;
}

createRoot(document.getElementById("root")!).render(<App />);
