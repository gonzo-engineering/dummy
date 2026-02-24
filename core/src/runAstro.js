import fs from "fs-extra";
import path from "path";
import { execa } from "execa";
import { loadConfig } from "./loadConfig.js";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function prepareProject() {
  const config = await loadConfig();
  const tempDir = path.join(process.cwd(), ".dummy");

  // Clean old folder
  await fs.remove(tempDir);
  await fs.copy(path.join(__dirname, "template"), tempDir);

  // Write siteConfig
  await fs.writeFile(
    path.join(tempDir, "src", "siteConfig.mjs"),
    `export const siteName = ${JSON.stringify(config.siteName)};
         export const siteDescription = ${JSON.stringify(config.siteDescription)};`,
  );

  // Import astro package.json as JSON with assertion
  const astroPkg = await import(
    path.join(__dirname, "../node_modules/astro/package.json"),
    { with: { type: "json" } }
  );
  const astroVersion = astroPkg.default.version;

  // Generate package.json for .dummy
  await fs.writeFile(
    path.join(tempDir, "package.json"),
    JSON.stringify(
      {
        name: "dummy-site",
        private: true,
        type: "module",
        dependencies: {
          astro: astroVersion,
        },
      },
      null,
      2,
    ),
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

async function installAstro(tempDir) {
  console.log("Installing Astro in .dummy...");
  await execa("npm", ["install"], {
    cwd: tempDir,
    stdio: "inherit",
  });
}

async function runAstro(tempDir, command) {
  console.log(`Running Astro ${command} in .dummy...`);
  await execa("npx", ["astro", command], {
    cwd: tempDir,
    stdio: "inherit",
  });
}

export async function dev() {
  const tempDir = await prepareProject();
  await installAstro(tempDir);
  await runAstro(tempDir, "dev");
}

export async function build() {
  const tempDir = await prepareProject();
  await installAstro(tempDir);
  await runAstro(tempDir, "build");
  console.log("\nBuild complete.");
}
