import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import fs from "fs";
import remarkUnwrapImages from "remark-unwrap-images";
import rehypeExternalLinks from "rehype-external-links";
import { remarkReadingTime } from "./src/utils/remark-reading-time";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
	site: "https://kaisenbim.com",
	markdown: {
		remarkPlugins: [remarkToc, remarkUnwrapImages, remarkReadingTime],
		rehypePlugins: [
			[
				rehypeExternalLinks,
				{
					target: "_blank",
					rel: ["nofollow, noopener, noreferrer"],
				},
			],
		],
		remarkRehype: {
			footnoteLabelProperties: {
				className: [""],
			},
		},
		shikiConfig: {
			theme: "dracula",
			wrap: true,
		},
	},
	integrations: [
		tailwind(),
		preact(),
		svelte(),
		mdx({
			remarkPlugins: [remarkToc, remarkUnwrapImages, remarkReadingTime],
			rehypePlugins: [
				[
					rehypeExternalLinks,
					{
						target: "_blank",
						rel: ["nofollow, noopener, noreferrer"],
					},
				],
			],
			remarkRehype: {
				footnoteLabelProperties: {
					className: [""],
				},
			},
			shikiConfig: {
				theme: "dracula",
				wrap: true,
			},
			optimize: true,
		}),
		sitemap(),
	],
	output: "static",
	vite: {
		ssr: {
			external: ["@resvg/resvg-js"],
		},
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"],
		},
	},
});
