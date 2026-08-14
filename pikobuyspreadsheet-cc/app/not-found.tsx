import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="research-site theme-workbench" style={{ minHeight: "100vh", padding: "28px 5vw 72px" }}>
      <Link href="/" className="site-brand site-brand-logo" aria-label="PikoBuy Spreadsheet Research home">
        <Image unoptimized src="/pikobuy-logo.png" alt="PikoBuy" width={204} height={48} />
      </Link>
      <section style={{ maxWidth: 820, margin: "12vh auto 0", borderTop: "1px solid var(--line)", paddingTop: 36 }}>
        <p className="eyebrow">404 / ROUTE NOT FOUND</p>
        <h1 style={{ margin: 0, maxWidth: 760, fontSize: "clamp(44px, 8vw, 92px)", lineHeight: 0.96, letterSpacing: "-.06em" }}>
          This research record is not available.
        </h1>
        <p style={{ maxWidth: 680, color: "var(--muted)", fontSize: 18, lineHeight: 1.7 }}>
          The URL may be outdated or incomplete. Use the article centre for evidence-led guides, or open the category index for current FindSpreadsheet destinations.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 28 }}>
          <Link className="primary-cta" href="/articles">Browse all English articles <span>→</span></Link>
          <Link className="primary-cta" href="/categories">Open product categories <span>→</span></Link>
        </div>
      </section>
    </main>
  );
}
