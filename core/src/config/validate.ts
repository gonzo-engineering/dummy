import type { DummyUserConfig } from './types';

export function validateConfig(config: DummyUserConfig) {
	if (!config.site?.name) {
		throw new Error('[dummy] site.name is required in dummy.config');
	}

	if (config.cms?.enabled && config.cms.provider !== 'decap') {
		throw new Error('[dummy] Only Decap CMS is supported in v0');
	}
}
