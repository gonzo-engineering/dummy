import { loadConfig } from "./config/load";
import { validateConfig } from "./config/validate";
import { resolveConfig } from "./config/resolve";
import { createRuntime } from "./runtime";
import type { DummyUserConfig, DummyResolvedConfig } from "./config/types";

/**
 * Create a Dummy runtime from a user config object.
 * This is mostly for internal use and testing.
 */
export function createDummy(userConfig: DummyUserConfig) {
  validateConfig(userConfig);
  const resolved = resolveConfig(userConfig);
  return createRuntime(resolved);
}

/**
 * Load dummy.config from disk and return a runtime.
 * Used by the CLI.
 */
export async function loadDummy() {
  const userConfig = await loadConfig();
  validateConfig(userConfig);
  const resolved = resolveConfig(userConfig);
  return createRuntime(resolved);
}

export type { DummyUserConfig, DummyResolvedConfig };
