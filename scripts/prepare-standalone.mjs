import { cpSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const standalone = join(root, ".next", "standalone");
const publicDir = join(root, "public");
const staticDir = join(root, ".next", "static");

if (!existsSync(standalone)) {
  throw new Error("Standalone output missing. Did next build run with output: 'standalone'?");
}

if (existsSync(publicDir)) {
  cpSync(publicDir, join(standalone, "public"), { recursive: true });
}

if (existsSync(staticDir)) {
  const dest = join(standalone, ".next", "static");
  mkdirSync(dirname(dest), { recursive: true });
  cpSync(staticDir, dest, { recursive: true });
}

console.log("Standalone server ready (public + static copied).");
