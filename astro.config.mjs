import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), vue(), tailwind(), image()],
  build: {
    transpile: ['maz-ui']
  },
  output: "server",
  adapter: vercel()
});