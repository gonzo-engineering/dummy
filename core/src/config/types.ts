export interface DummyUserConfig {
	site?: {
		name?: string;
		url?: string;
		description?: string;
		language?: string;
	};

	brand?: {
		logo?: string;
		primaryColor?: string;
		accentColor?: string;
	};

	content?: {
		provider?: 'filesystem';
		articles?: {
			path?: string;
		};
		pages?: {
			path?: string;
		};
	};

	cms?: {
		enabled?: boolean;
		provider?: 'decap';
		path?: string;
	};

	build?: {
		output?: string;
		basePath?: string;
		clean?: boolean;
	};
}

export interface DummyResolvedConfig {
	site: {
		name: string;
		url: string;
		description: string;
		language: string;
	};

	brand: {
		logo: string;
		primaryColor: string;
		accentColor: string;
	};

	content: {
		provider: 'filesystem';
		articlesPath: string;
		pagesPath: string;
	};

	cms: {
		enabled: boolean;
		provider: 'decap';
		path: string;
	};

	build: {
		output: string;
		basePath: string;
		clean: boolean;
	};
}
