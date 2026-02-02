import { loadConfig } from '../config/load';
import { resolveConfig } from '../config/resolve';
import { validateConfig } from '../config/validate';
import { buildSite } from '../renderer/svelte/build';

export async function runBuild() {
	const userConfig = await loadConfig();
	validateConfig(userConfig);
	const config = resolveConfig(userConfig);

	console.log(`[dummy] Building ${config.site.name}`);

	await buildSite(config);
}
