"use client";

import { FormEvent, useRef } from "react";

type Props = {
  buttonLabel: string;
  emptyMessage: string;
  placeholder: string;
};

export function SearchForm({ buttonLabel, emptyMessage, placeholder }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const input = inputRef.current;
    const keywords = input?.value.trim() ?? "";

    if (!input || !keywords) {
      input?.setCustomValidity(emptyMessage);
      input?.reportValidity();
      return;
    }

    input.setCustomValidity("");
    const url = new URL("https://findspreadsheet.com/search.html");
    url.searchParams.set("keywords", keywords);
    url.searchParams.set("channelid", "2");
    window.open(url.toString(), "_blank", "noopener,noreferrer");
  }

  return <form action="https://findspreadsheet.com/search.html" method="get" target="_blank" onSubmit={submit}>
    <input ref={inputRef} name="keywords" aria-label={buttonLabel} placeholder={placeholder} required onInput={(event) => event.currentTarget.setCustomValidity("")}/>
    <input type="hidden" name="channelid" value="2"/>
    <button type="submit">{buttonLabel} ↗</button>
  </form>;
}
