import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';

export default defineConfig({
  site: 'https://edoardoferrini.github.io',
  integrations: [mdx(), sitemap(), pagefind()],
});
