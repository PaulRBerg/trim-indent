export function trimIndent(text: string): string {
  if (text === "") return "";

  const lines = text.split("\n");

  // Find minimum indentation across non-empty lines
  let minIndent = Number.POSITIVE_INFINITY;
  for (const line of lines) {
    if (line.trim().length === 0) continue;
    const match = line.match(/^[ \t]*/);
    const indent = match ? match[0].length : 0;
    minIndent = Math.min(minIndent, indent);
  }

  // If no non-empty lines or no common indent, return as-is
  if (minIndent === 0 || minIndent === Number.POSITIVE_INFINITY) return text;

  // Remove the common indent from each line
  return lines.map((line) => (line.trim().length === 0 ? line : line.slice(minIndent))).join("\n");
}
