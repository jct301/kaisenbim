import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";
import remarkToc from "remark-toc";
import remarkUnwrapImages from "remark-unwrap-images";

// https://astro.build/config
export default defineConfig({
	site: "https://kaisenbim.com",
	markdown: {
		remarkPlugins: [remarkToc, remarkUnwrapImages],
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
			remarkPlugins: [remarkToc, remarkUnwrapImages],
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
	
});
