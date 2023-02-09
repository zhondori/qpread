import { describe, expect, it } from "vitest";
import pkg from "../src/index";

describe("main package tests", () => {
  it("toObject", () => {
    expect(pkg.toObject("https://google.com?q=qpread&id=12")).toStrictEqual({
      q: "qpread",
      id: 12,
    });
  });

  it("toUrl", () => {
    expect(pkg.toUrl({ city: "bukhara", area: 143, units: "metric" })).toBe(
      "city=bukhara&area=143&units=metric"
    );
  });

  it("find", () => {
    expect(pkg.find("https://example.com?data=test", "data")).toBe("test");
    expect(pkg.find("https://example.com?n=12", "n")).toBe(12);
    expect(pkg.find("https://example.com?boolean=true", "boolean")).toBe(1);
  });
});
