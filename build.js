import { mkdir, rm, readdir, readFile, writeFile, copyFile } from "node:fs/promises";
import { join } from "node:path";

const SRC = "src";
const OUT = "dist";

const stamp = (process.env.GITHUB_SHA ?? "local").slice(0, 7);

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

for (const file of await readdir(SRC)) {
  if (file.endsWith(".test.js")) continue;          // tests don't ship

  if (file.endsWith(".html")) {
    const html = await readFile(join(SRC, file), "utf8");
    await writeFile(join(OUT, file), html.replaceAll("__BUILD__", stamp));
  } else {
    await copyFile(join(SRC, file), join(OUT, file));
  }
}

console.log(`built ${OUT}/ (build ${stamp})`);
