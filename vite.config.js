import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import compression from 'compression';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		middleware: [compression()],
	  },
});
