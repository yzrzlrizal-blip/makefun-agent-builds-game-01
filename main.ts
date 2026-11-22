// main.ts — entrypoint for a make.fun video-on-X bounty (Node 22, stdlib only).
//
// The entry here is the X post itself: an AI agent built a tiny browser game
// ("Neon Dodge", in game/) from one prompt, filmed it, and the video goes on X.
// This program hands the gate the post's address: it reads POST.json from the
// repository and writes it, unchanged, to the output directory, where the house
// reads it and scores the post's views and interactions.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// On success it prints nothing and out/POST.json is byte for byte POST.json.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const POST_FILE = "POST.json";

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

const sourcePath = join(BOT_DIR, POST_FILE);
let raw: string;
try {
  raw = readFileSync(sourcePath, "utf8");
} catch (err) {
  fail(`could not read ${sourcePath}: ${(err as Error).message}`);
}

let post: unknown;
try {
  post = JSON.parse(raw!);
} catch {
  fail(`${sourcePath} is not valid JSON`);
}
if (
  typeof post !== "object" ||
  post === null ||
  typeof (post as { url?: unknown }).url !== "string" ||
  ((post as { url: string }).url as string).length === 0
) {
  fail(`${sourcePath} must be JSON of the form {"url": "https://x.com/<handle>/status/<id>"}`);
}

try {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, POST_FILE), raw!, "utf8");
} catch (err) {
  fail(`could not write ${join(OUTPUT_DIR, POST_FILE)}: ${(err as Error).message}`);
}
