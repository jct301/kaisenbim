import svelte from "@astrojs/svelte";
import tailwind from '@astrojs/tailwind';
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
  site: 'https://kaisenbim.com',
  integrations: [tailwind(),vercel(),svelte()],
  output:'server' 
});