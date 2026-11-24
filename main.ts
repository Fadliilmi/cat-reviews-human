// Cat Reviews Its Human — make.fun entry
// "Make the AI Judge Laugh: Cat Reviews Its Human"
// Writes one funny single-line one-star review, written by a house cat
// about its human, to /output/entry.txt (1-200 chars, single line).

import { mkdirSync, writeFileSync } from "node:fs";

const review =
  "One star. He talks to me in a baby voice, then wonders why I don't respect him. I knocked his laptop off the table, and he apologised to me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
