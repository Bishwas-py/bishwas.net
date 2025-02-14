import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$item: './src/item',
			$fonts: './src/fonts',
			$utils: './src/utils',
			$styles: './src/styles',
			$icons: './src/icons'
		}
	},
	plugins: [],
	compilerOptions: {
		runes: true
	}
};

export default config;
