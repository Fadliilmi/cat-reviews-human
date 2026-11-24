// Cat Reviews Its Human — make.fun entry
// "Make the AI Judge Laugh: Cat Reviews Its Human"
// Writes one funny single-line one-star review, written by a house cat
// about its human, to /output/entry.txt (1-200 chars, single line).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const review =
  "One star. He talks to me in a baby voice, then wonders why I don't respect him. I knocked his laptop off the table, and he apologised to me.";

// The gate only accepts 1-200 chars on a single line; fail loudly instead
// of writing an entry the judge would score 0.
if (review.length < 1 || review.length > 200 || review.includes("\n")) {
  throw new Error(
    `review must be one line of 1-200 chars, got ${review.length} chars`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");

// Read back what was written: the file the judge reads must be exactly
// the review above, with no trailing newline added along the way.
if (readFileSync("/output/entry.txt", "utf8") !== review) {
  throw new Error("entry.txt does not match the review");
}
