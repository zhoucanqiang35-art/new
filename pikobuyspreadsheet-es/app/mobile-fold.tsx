"use client";

import { useState } from "react";

export function MobileFold({ label, children, defaultOpen = false, openLabel = "Open +", closeLabel = "Close −" }: { label: string; children: React.ReactNode; defaultOpen?: boolean; openLabel?: string; closeLabel?: string }) {
  const [open, setOpen] = useState(defaultOpen);

  return <div className={`mobile-fold${open ? " is-open" : ""}`}>
    <button className="mobile-fold-toggle" type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
      <span>{label}</span><b>{open ? closeLabel : openLabel}</b>
    </button>
    <div className="mobile-fold-body">{children}</div>
  </div>;
}
