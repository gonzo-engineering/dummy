import { loadConfig } from '../config/load';
import { resolveConfig } from '../config/resolve';
import { validateConfig } from '../config/validate';
import { startDevServer } from '../renderer/svelte/dev';

export async function runDev() {
	const userConfig = await loadConfig();
	validateConfig(userConfig);
	const config = resolveConfig(userConfig);

	console.log(`[dummy] Starting dev server for ${config.site.name}`);

	await startDevServer(config);
}
