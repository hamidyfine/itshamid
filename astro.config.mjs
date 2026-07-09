// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://itshamid.me',
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'github-dark', wrap: false },
    }),
    sitemap(),
  ],
  markdown: {
    shikiConfig: { theme: 'github-dark' },
  },
});
