import { describe, expect, it } from "vitest";
import { trimIndent } from "../trim-indent";

describe("trimIndent", () => {
  it("removes common leading whitespace", () => {
    const input = [
      "        if (isReady) {",
      '          console.log("Start");',
      "          if (hasWarnings) {",
      '            console.warn("Warnings detected");',
      "          }",
      "        }",
    ].join("\n");

    const expected = [
      "if (isReady) {",
      '  console.log("Start");',
      "  if (hasWarnings) {",
      '    console.warn("Warnings detected");',
      "  }",
      "}",
    ].join("\n");

    expect(trimIndent(input)).toBe(expected);
  });

  it("returns empty string for empty input", () => {
    expect(trimIndent("")).toBe("");
  });

  it("returns text unchanged when already at column 0", () => {
    const input = "foo\n  bar\n    baz";
    expect(trimIndent(input)).toBe(input);
  });

  it("ignores blank lines when computing indent", () => {
    const input = "    a\n\n    b\n\n    c";
    expect(trimIndent(input)).toBe("a\n\nb\n\nc");
  });

  it("ignores whitespace-only lines when computing indent", () => {
    const input = "    a\n   \n    b";
    expect(trimIndent(input)).toBe("a\n   \nb");
  });

  it("handles tabs", () => {
    const input = "\t\tif (x) {\n\t\t\treturn y;\n\t\t}";
    expect(trimIndent(input)).toBe("if (x) {\n\treturn y;\n}");
  });

  it("handles a single line", () => {
    expect(trimIndent("    hello")).toBe("hello");
  });

  it("handles all-whitespace lines only", () => {
    const input = "   \n  \n    ";
    expect(trimIndent(input)).toBe(input);
  });

  it("preserves trailing newline", () => {
    const input = "    a\n    b\n";
    expect(trimIndent(input)).toBe("a\nb\n");
  });
});
