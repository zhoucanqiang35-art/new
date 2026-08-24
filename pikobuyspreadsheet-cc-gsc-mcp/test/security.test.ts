import { describe, expect, it } from "vitest";
import { assertCanonicalUrl, authorized } from "../src/security";

describe("authorization", () => {
  it("accepts only the exact bearer token", () => {
    expect(
      authorized(
        new Request("https://example.com/mcp", {
          headers: { authorization: "Bearer correct" }
        }),
        "correct"
      )
    ).toBe(true);
    expect(
      authorized(
        new Request("https://example.com/mcp", {
          headers: { authorization: "Bearer wrong" }
        }),
        "correct"
      )
    ).toBe(false);
  });
});

describe("URL allowlist", () => {
  it("accepts the canonical origin", () => {
    expect(assertCanonicalUrl("https://pikobuyspreadsheet.cc/guides/test#part"))
      .toBe("https://pikobuyspreadsheet.cc/guides/test");
  });

  it("rejects other origins and deceptive hostnames", () => {
    expect(() => assertCanonicalUrl("https://www.pikobuyspreadsheet.cc/")).toThrow();
    expect(() => assertCanonicalUrl("https://pikobuyspreadsheet.cc.evil.example/")).toThrow();
  });
});

