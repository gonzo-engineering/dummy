import type { DummyResolvedConfig } from '../../config/types';

export async function buildSite(config: DummyResolvedConfig) {
	console.log(`[dummy] (build) Building static site`);
	console.log(`[dummy] Output dir: ${config.build.output}`);

	// Later:
	// - clean output dir
	// - run SvelteKit build
	// - emit static files
}
