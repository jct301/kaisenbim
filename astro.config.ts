import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";
import remarkToc from "remark-toc";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://kaisenbim.com",
  markdown: {
    remarkPlugins: [remarkToc],
    rehypePlugins: [[rehypeExternalLinks, {
      target: "_blank",
      rel: ["nofollow, noopener, noreferrer"]
    }]],
    remarkRehype: {
      footnoteLabelProperties: {
        className: [""]
      }
    },
    shikiConfig: {
      theme: "dracula",
      wrap: true
    }
  },
  integrations: [tailwind(), mdx({}), sitemap(), react()],
  output: "static"
});