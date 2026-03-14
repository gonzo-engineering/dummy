import fs from "fs-extra";
import path from "path";
import { execa } from "execa";
import { loadConfig } from "./loadConfig.js";
import { fileURLToPath } from "url";
import { SiteConfig } from "./types/index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function prepareProject() {
  const config: SiteConfig = await loadConfig();
  const tempDir = path.join(process.cwd(), ".dummy");

  // Ensure .dummy is clean
  await fs.ensureDir(tempDir);
  const templateDir = path.join(__dirname, "template");

  await fs.ensureDir(tempDir);

  if (!(await fs.pathExists(path.join(tempDir, "src")))) {
    await fs.copy(templateDir, tempDir);
  }

  // Write package.json
  await fs.writeJSON(
    path.join(tempDir, "package.json"),
    {
      name: "dummy-site",
      private: true,
      type: "module",
      dependencies: {
        astro: "^6.0.4",
      },
    },
    { spaces: 2 },
  );

  // Write siteConfig
  await fs.writeJSON(path.join(tempDir, "src", "siteConfig.json"), config, {
    spaces: 2,
  });

  // Write site content
  await fs.copy(
    path.join(process.cwd(), "content"),
    path.join(tempDir, "content"),
  );

  // Minimal astro config
  await fs.writeFile(
    path.join(tempDir, "astro.config.mjs"),
    `
import { defineConfig } from 'astro/config'

export default defineConfig({})
`,
  );

  return tempDir;
}

async function ensureAstroInstalled(tempDir: string) {
  const astroPath = path.join(tempDir, "node_modules", "astro", "package.json");

  if (await fs.pathExists(astroPath)) {
    console.log("Using cached Astro install");
    return;
  }

  console.log("Installing Astro in .dummy...");
  await execa("npm", ["install"], {
    cwd: tempDir,
    stdio: "inherit",
  });
}

async function runAstro(tempDir: string, command: string) {
  console.log(`Running Astro ${command} in .dummy...`);
  await execa("npx", ["astro", command], {
    cwd: tempDir,
    stdio: "inherit",
  });
}

export async function dev() {
  const tempDir = await prepareProject();
  await ensureAstroInstalled(tempDir);
  await runAstro(tempDir, "dev");
}

export async function build() {
  const tempDir = await prepareProject();
  await ensureAstroInstalled(tempDir);
  await runAstro(tempDir, "build");
}
