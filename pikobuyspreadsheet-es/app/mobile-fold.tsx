"use client";

import { useState } from "react";

export function MobileFold({ label, children, defaultOpen = false, allScreens = false, openLabel = "Open +", closeLabel = "Close −" }: { label: string; children: React.ReactNode; defaultOpen?: boolean; allScreens?: boolean; openLabel?: string; closeLabel?: string }) {
  const [open, setOpen] = useState(defaultOpen);

  return <div className={`mobile-fold${open ? " is-open" : ""}${allScreens ? " all-screens-fold" : ""}`}>
    <button className="mobile-fold-toggle" type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
      <span>{label}</span><b>{open ? closeLabel : openLabel}</b>
    </button>
    <div className="mobile-fold-body">{children}</div>
  </div>;
}
