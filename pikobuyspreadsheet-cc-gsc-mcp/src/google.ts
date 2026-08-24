import {
  GOOGLE_SCOPE,
  GOOGLE_TOKEN_AUDIENCE,
  PROPERTY,
  SITEMAP_URL
} from "./constants";

export interface ServiceAccountCredentials {
  client_email: string;
  private_key: string;
  token_uri?: string;
  type: "service_account";
}

export interface Env {
  GOOGLE_SERVICE_ACCOUNT_JSON: string;
  MCP_AUTH_TOKEN: string;
}

function encodeBase64Url(value: string | Uint8Array): string {
  const bytes =
    typeof value === "string" ? new TextEncoder().encode(value) : value;
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary)
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replace(/=+$/u, "");
}

function pemToBytes(pem: string): Uint8Array {
  const body = pem
    .replace("-----BEGIN PRIVATE KEY-----", "")
    .replace("-----END PRIVATE KEY-----", "")
    .replace(/\s+/gu, "");
  const binary = atob(body);
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

function asArrayBuffer(bytes: Uint8Array): ArrayBuffer {
  return bytes.buffer.slice(
    bytes.byteOffset,
    bytes.byteOffset + bytes.byteLength
  ) as ArrayBuffer;
}

function parseCredentials(raw: string): ServiceAccountCredentials {
  let credentials: ServiceAccountCredentials;
  try {
    credentials = JSON.parse(raw) as ServiceAccountCredentials;
  } catch {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON is not valid JSON");
  }

  if (
    credentials.type !== "service_account" ||
    !credentials.client_email ||
    !credentials.private_key
  ) {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON is missing required fields");
  }
  return credentials;
}

async function getAccessToken(rawCredentials: string): Promise<string> {
  const credentials = parseCredentials(rawCredentials);
  const issuedAt = Math.floor(Date.now() / 1000);
  const tokenUri = credentials.token_uri ?? GOOGLE_TOKEN_AUDIENCE;
  if (tokenUri !== GOOGLE_TOKEN_AUDIENCE) {
    throw new Error("Unexpected Google token endpoint");
  }

  const header = encodeBase64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = encodeBase64Url(
    JSON.stringify({
      aud: GOOGLE_TOKEN_AUDIENCE,
      exp: issuedAt + 3600,
      iat: issuedAt,
      iss: credentials.client_email,
      scope: GOOGLE_SCOPE
    })
  );
  const unsigned = `${header}.${claims}`;
  const key = await crypto.subtle.importKey(
    "pkcs8",
    asArrayBuffer(pemToBytes(credentials.private_key)),
    { hash: "SHA-256", name: "RSASSA-PKCS1-v1_5" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    key,
    new TextEncoder().encode(unsigned)
  );

  const response = await fetch(GOOGLE_TOKEN_AUDIENCE, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      assertion: `${unsigned}.${encodeBase64Url(new Uint8Array(signature))}`,
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer"
    }),
    signal: AbortSignal.timeout(15_000)
  });
  const body = (await response.json()) as {
    access_token?: string;
    error?: string;
    error_description?: string;
  };
  if (!response.ok || !body.access_token) {
    throw new Error(
      `Google token exchange failed (${response.status}): ${body.error ?? "unknown error"}`
    );
  }
  return body.access_token;
}

async function googleRequest<T>(
  rawCredentials: string,
  url: string,
  init: RequestInit = {}
): Promise<T> {
  const accessToken = await getAccessToken(rawCredentials);
  const response = await fetch(url, {
    ...init,
    headers: {
      authorization: `Bearer ${accessToken}`,
      ...(init.body ? { "content-type": "application/json" } : {}),
      ...init.headers
    },
    signal: AbortSignal.timeout(20_000)
  });

  if (!response.ok) {
    const error = (await response.json().catch(() => ({}))) as {
      error?: { message?: string };
    };
    throw new Error(
      `Google Search Console API failed (${response.status}): ${error.error?.message ?? "unknown error"}`
    );
  }

  if (response.status === 204) return {} as T;
  return (await response.json()) as T;
}

const propertyPath = encodeURIComponent(PROPERTY);
const sitemapPath = encodeURIComponent(SITEMAP_URL);

export async function getSitemapStatus(rawCredentials: string): Promise<unknown> {
  return googleRequest(
    rawCredentials,
    `https://www.googleapis.com/webmasters/v3/sites/${propertyPath}/sitemaps/${sitemapPath}`
  );
}

export async function submitSitemap(rawCredentials: string): Promise<void> {
  await googleRequest(
    rawCredentials,
    `https://www.googleapis.com/webmasters/v3/sites/${propertyPath}/sitemaps/${sitemapPath}`,
    { method: "PUT" }
  );
}

export async function inspectUrl(
  rawCredentials: string,
  inspectionUrl: string
): Promise<unknown> {
  return googleRequest(
    rawCredentials,
    "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect",
    {
      method: "POST",
      body: JSON.stringify({
        inspectionUrl,
        languageCode: "en-US",
        siteUrl: PROPERTY
      })
    }
  );
}

export async function querySearchAnalytics(
  rawCredentials: string,
  startDate: string,
  endDate: string,
  rowLimit: number
): Promise<unknown> {
  return googleRequest(
    rawCredentials,
    `https://www.googleapis.com/webmasters/v3/sites/${propertyPath}/searchAnalytics/query`,
    {
      method: "POST",
      body: JSON.stringify({
        dataState: "final",
        dimensions: ["query", "page"],
        endDate,
        rowLimit,
        startDate
      })
    }
  );
}
