import { CANONICAL_ORIGIN } from "./constants";

export function authorized(request: Request, expectedToken: string): boolean {
  const presented = request.headers.get("authorization") ?? "";
  const expected = `Bearer ${expectedToken}`;
  if (presented.length !== expected.length) return false;

  let difference = 0;
  for (let index = 0; index < expected.length; index += 1) {
    difference |= presented.charCodeAt(index) ^ expected.charCodeAt(index);
  }
  return difference === 0;
}

export function assertCanonicalUrl(value: string): string {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new Error("url must be a valid absolute URL");
  }

  if (url.origin !== CANONICAL_ORIGIN) {
    throw new Error(`url must start with ${CANONICAL_ORIGIN}/`);
  }
  url.hash = "";
  return url.toString();
}

