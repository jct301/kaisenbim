/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors:{
				'kaisen':'#004AAD'
			}
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
			require("@tailwindcss/aspect-ratio")
	],
}
