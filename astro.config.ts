import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';
import remarkToc from 'remark-toc';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://kaisenbim.com',
  markdown: {
    remarkPlugins: [remarkToc],
    rehypePlugins: [[rehypeExternalLinks, {
      target: '_blank',
      rel: ['nofollow, noopener, noreferrer']
    }]],
    remarkRehype: {
      footnoteLabelProperties: {
        className: ['']
      }
    },
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  },
  integrations: [tailwind(), sitemap(), svelte(),vercel()],
  output:'server' 
});