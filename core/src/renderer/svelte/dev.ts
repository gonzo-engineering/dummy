import type { DummyResolvedConfig } from '../../config/types';

export async function startDevServer(config: DummyResolvedConfig) {
	console.log(`[dummy] (dev) Svelte server would start here`);
	console.log(`[dummy] Site name: ${config.site.name}`);

	// Later:
	// - spin up SvelteKit dev server
	// - inject config into context
	// - mount CMS
}
