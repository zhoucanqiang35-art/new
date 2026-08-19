"use client";

import { useMemo, useState } from "react";

const checks = [
  ["Category fit", "The item belongs in the product group you are comparing."],
  ["Useful photos", "Images show the angles and details that matter for this category."],
  ["Sizing evidence", "Measurements, size chart or fit notes are visible when needed."],
  ["Source match", "The original listing still matches the spreadsheet row."],
  ["Price context", "The price has been compared with similar finds—not viewed alone."],
  ["Weight context", "Likely parcel weight will not erase the apparent value."],
  ["Clear reason", "You can explain in one sentence why this row deserves a shortlist."],
] as const;

export default function ResearchScore() {
  const [selected, setSelected] = useState<boolean[]>(checks.map(() => false));
  const score = selected.filter(Boolean).length;
  const result = useMemo(() => {
    if (score >= 6) return { label: "Strong shortlist", note: "Enough visible evidence to justify a closer look.", tone: "strong" };
    if (score >= 4) return { label: "Research more", note: "Promising, but the missing checks still matter.", tone: "research" };
    if (score >= 2) return { label: "Weak row", note: "Do not open more tabs until the evidence improves.", tone: "weak" };
    return { label: "Not ready", note: "Start with the category and source link before saving.", tone: "empty" };
  }, [score]);

  return <div className="v3-score-card">
    <div className="v3-score-head"><div><span>LIVE RESEARCH TOOL</span><h3>Should this row stay?</h3></div><div className={`v3-score-number ${result.tone}`}><b>{score}</b><small>/ 7</small></div></div>
    <div className="v3-score-list">{checks.map(([label, note], index) => <label key={label} className={selected[index] ? "checked" : ""}><input type="checkbox" checked={selected[index]} onChange={() => setSelected(current => current.map((value, i) => i === index ? !value : value))} /><i>{selected[index] ? "✓" : String(index + 1).padStart(2, "0")}</i><span><b>{label}</b><small>{note}</small></span></label>)}</div>
    <div className={`v3-score-result ${result.tone}`}><div><small>CURRENT RESULT</small><b>{result.label}</b><p>{result.note}</p></div><button type="button" onClick={() => setSelected(checks.map(() => false))}>Reset</button></div>
  </div>;
}
