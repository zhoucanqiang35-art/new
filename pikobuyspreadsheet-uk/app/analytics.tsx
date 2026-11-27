"use client";

import { useEffect, useState } from "react";
import copy from "./analytics-languages.json";

const measurementId = "G-XS1WLM24K8";
const storageKey = "piko-uk-analytics";
const disableKey = `ga-disable-${measurementId}` as const;
const productionHosts = new Set(["pikobuyspreadsheet.uk", "www.pikobuyspreadsheet.uk"]);
type Choice = "allow" | "decline";
type AnalyticsWindow = Window & { dataLayer?: IArguments[]; [disableKey]?: boolean };

function startAnalytics() {
  const target = window as AnalyticsWindow;
  target[disableKey] = false;
  if (document.getElementById("piko-uk-google-tag")) return;

  const dataLayer = target.dataLayer ??= [];
  function gtag(...options: unknown[]) {
    if (options.length) dataLayer.push(arguments);
  }

  gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  gtag("js", new Date());
  gtag("config", measurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    page_location: window.location.origin + window.location.pathname,
  });

  const tag = document.createElement("script");
  tag.id = "piko-uk-google-tag";
  tag.async = true;
  tag.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(tag);
}

export function Analytics({ locale }: { locale: string }) {
  const [enabled, setEnabled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [title, description, allow, decline] = (copy as Record<string, string[]>)[locale] ?? copy.en;

  useEffect(() => {
    if (!productionHosts.has(window.location.hostname)) return;
    setEnabled(true);
    let choice: string | null = null;
    try { choice = window.localStorage.getItem(storageKey); } catch { /* Storage can be blocked. */ }
    if (choice === "allow") startAnalytics();
    else if (choice !== "decline") setExpanded(true);
  }, []);

  if (!enabled) return null;

  function save(choice: Choice) {
    try { window.localStorage.setItem(storageKey, choice); } catch { /* Keep this page's choice. */ }
    if (choice === "allow") startAnalytics();
    else (window as AnalyticsWindow)[disableKey] = true;
    setExpanded(false);
  }

  return (
    <div className="analytics-settings">
      <button type="button" aria-expanded={expanded} aria-controls="piko-analytics-settings"
        onClick={() => setExpanded(!expanded)}>{title}</button>
      {expanded && (
        <section id="piko-analytics-settings" className="analytics-panel" aria-label={title}>
          <p>{description}</p>
          <div>
            <button type="button" onClick={() => save("decline")}>{decline}</button>
            <button type="button" onClick={() => save("allow")}>{allow}</button>
          </div>
        </section>
      )}
    </div>
  );
}
