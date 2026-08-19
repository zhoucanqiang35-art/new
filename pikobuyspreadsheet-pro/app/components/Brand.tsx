export default function Brand({ href = "#top" }: { href?: string }) {
  return <a className="v3-brand" href={href} aria-label="PikoBuy Spreadsheet home">
    <img src="/pikobuy-logo.png" alt="PikoBuy" />
  </a>;
}
