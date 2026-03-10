import { pathToFileURL } from "url";
import path from "path";

export async function loadConfig() {
  const configPath = path.join(process.cwd(), "dummy.config.mjs");
  const configModule = await import(pathToFileURL(configPath).href);
  return configModule.default;
}
