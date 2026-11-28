type Props = { buttonLabel: string; placeholder: string; action: string; ariaLabel: string };

export function SearchForm({ buttonLabel, placeholder, action, ariaLabel }: Props) {
  return <form action={action} method="get">
    <input type="search" name="q" aria-label={ariaLabel} placeholder={placeholder} maxLength={200} required/>
    <button type="submit">{buttonLabel}</button>
  </form>;
}
