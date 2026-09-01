import type { ReactNode } from "react";
export function MainLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return <a href={href} className={className} target="_blank" rel="noreferrer">{children}</a>;
}
