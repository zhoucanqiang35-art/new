"use client";

import { ReactNode, useEffect, useRef } from "react";

export default function MobileFold({ title, children }: { title: string; children: ReactNode }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (window.matchMedia("(max-width: 620px)").matches && detailsRef.current) {
      detailsRef.current.open = false;
    }
  }, []);

  return <details className="mobile-fold" open ref={detailsRef}>
    <summary><span>{title}</span><b>+</b></summary>
    <div className="mobile-fold-content">{children}</div>
  </details>;
}
