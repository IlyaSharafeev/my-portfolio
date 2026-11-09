import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://ilyasharafeev.github.io',
  base: '/my-portfolio',
  output: 'static',
  integrations: [vue(), tailwind()],
});
