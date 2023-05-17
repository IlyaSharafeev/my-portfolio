import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [vue(), tailwind()],
  build: {
    transpile: ['maz-ui']
  },
  output: "server",
  adapter: netlify(),
});
