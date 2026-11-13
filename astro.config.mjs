// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

export default defineConfig({
  site: 'https://informatik-otter.wi7.net',
  integrations: [vue()],
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  // per checkout, so parallel worktrees sharing node_modules do not share a content cache
  cacheDir: './.astro-cache',
});
