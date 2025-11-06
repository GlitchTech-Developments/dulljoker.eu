import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindCss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://dulljoker.eu",
	integrations: [react(), sitemap()],
	vite: {
		plugins: [tailwindCss()],
	},
});
