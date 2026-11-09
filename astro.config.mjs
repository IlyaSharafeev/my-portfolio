import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://ilya-sharafeev-portfolio.netlify.app',
  output: 'static',
  integrations: [vue(), tailwind()],
});
