import path from 'node:path';
import fs from 'node:fs';

const CONFIG_FILES = ['dummy.config.ts', 'dummy.config.js', 'dummy.config.json'];

export async function loadConfig(): Promise<any> {
	for (const file of CONFIG_FILES) {
		const fullPath = path.resolve(process.cwd(), file);
		if (!fs.existsSync(fullPath)) continue;

		const mod = await import(fullPath);
		return mod.default ?? mod;
	}

	throw new Error('[dummy] No dummy.config file found');
}
