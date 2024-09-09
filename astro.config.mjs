import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: 'https://papito.dev',
  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), sitemap(), mdx(), svelte()],
  output: "hybrid",
  adapter: netlify()
});