import type { DummyResolvedConfig } from '../config/types';

export interface DummyRuntime {
	config: DummyResolvedConfig;
	startedAt: number;
}

export function createRuntime(config: DummyResolvedConfig): DummyRuntime {
	return {
		config,
		startedAt: Date.now()
	};
}
