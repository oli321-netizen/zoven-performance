import { cpSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const standalone = join(root, ".next/standalone");

if (!existsSync(standalone)) {
  console.warn("Standalone output not found; skip copy.");
  process.exit(0);
}

cpSync(join(root, "public"), join(standalone, "public"), { recursive: true });
cpSync(
  join(root, ".next/static"),
  join(standalone, ".next/static"),
  { recursive: true },
);

console.log("Copied public/ and .next/static into standalone output.");
