// One-Line Office Jokes — a single line that makes office life funny,
// turning on a real detail (the printer) and landing the laugh last.
import * as fs from "node:fs";

const entry = "The printer jammed again, so I printed the error message — it jammed too.";

// Write the single joke line exactly as typed, UTF-8, no trailing newline.
function writeEntry(text: string): void {
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync("/output/entry.txt", text, { encoding: "utf8" });
}

writeEntry(entry);
