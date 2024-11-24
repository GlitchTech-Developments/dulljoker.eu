import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://dulljoker.eu",
	integrations: [
		tailwind({
			configFile: "tailwind.config.ts",
			applyBaseStyles: false,
			nesting: true,
		}),
		react(),
		sitemap(),
	],
});
