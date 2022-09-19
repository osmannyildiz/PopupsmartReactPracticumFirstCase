import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const envPrefix = "FRONTEND_";
	const env = loadEnv(mode, process.cwd(), envPrefix);

	return {
		plugins: [
			react(),
			createHtmlPlugin({
				minify: true,
				inject: {
					data: {
						appBrand: env.FRONTEND_APP_BRAND,
					},
				},
			}),
		],
		envPrefix: envPrefix,
	};
});
