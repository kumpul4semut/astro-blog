import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://kumpul4semut.github.io/astro-blog',
  base: '/astro-blog/',
  integrations: [mdx(), sitemap(), tailwind(), react()]
});