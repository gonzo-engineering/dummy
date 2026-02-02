import type { DummyUserConfig, DummyResolvedConfig } from './types';

export function resolveConfig(user: DummyUserConfig): DummyResolvedConfig {
	return {
		site: {
			name: user.site!.name!,
			url: user.site?.url ?? '',
			description: user.site?.description ?? '',
			language: user.site?.language ?? 'en'
		},

		brand: {
			logo: user.brand?.logo ?? '',
			primaryColor: user.brand?.primaryColor ?? '#111827',
			accentColor: user.brand?.accentColor ?? '#2563eb'
		},

		content: {
			provider: 'filesystem',
			articlesPath: user.content?.articles?.path ?? 'content/articles',
			pagesPath: user.content?.pages?.path ?? 'content/pages'
		},

		cms: {
			enabled: user.cms?.enabled ?? true,
			provider: 'decap',
			path: user.cms?.path ?? '/admin'
		},

		build: {
			output: user.build?.output ?? 'dist',
			basePath: user.build?.basePath ?? '/',
			clean: user.build?.clean ?? true
		}
	};
}
