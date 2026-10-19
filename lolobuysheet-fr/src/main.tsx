import { createRoot } from "react-dom/client";
import Site from "../app/page";
import "../app/globals.css";

const locales = ["en", "de", "fr", "es", "it", "pt", "nl", "pl", "sv"] as const;
type Locale = (typeof locales)[number];

function normalizePathname() {
  const parts = window.location.pathname.split("/").filter(Boolean);
  if (!locales.includes(parts[0] as Locale)) return ["en", ...parts] as string[];
  return parts;
}

function App() {
  const parts = normalizePathname();
  return <Site locale={parts[0] as Locale} section={parts[1]} slug={parts[2]} />;
}

createRoot(document.getElementById("root")!).render(<App />);
