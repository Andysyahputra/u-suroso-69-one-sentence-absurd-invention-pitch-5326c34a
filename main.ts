// One-Sentence Absurd Invention Pitch
// Writes a single sentence pitching a ridiculous invention that fixes a
// tiny everyday annoyance, to /output/entry.txt.
//
// The pitch: a toaster that ritualises the burnt first slice instead of
// apologising for it — the laugh lives inside the invention itself, and
// the fix is silly yet weirdly plausible: sacrifice one slice on purpose
// and the second one comes out perfect every time.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "A toaster that burns the first slice as a sacrifice and serves the second one perfectly, so breakfast always starts with a small tragedy instead of a big one.";

// The gate: UTF-8 text of 1 to 220 characters, exactly one sentence.
function validate(pitch: string): void {
  const chars = [...pitch].length;
  if (chars < 1 || chars > 220) {
    throw new Error(`pitch is ${chars} characters, must be 1-220`);
  }
  if (pitch.trim().length === 0) {
    throw new Error("pitch must not be only whitespace");
  }
  const sentences = pitch.split(/[.!?]+/).filter((s) => s.trim().length > 0);
  if (sentences.length !== 1) {
    throw new Error(`pitch must be exactly one sentence, found ${sentences.length}`);
  }
}

validate(PITCH);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
