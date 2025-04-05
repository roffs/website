// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import { remarkAlert } from "remark-github-blockquote-alert";

import rehypeKatex from 'rehype-katex';


// https://astro.build/config
export default defineConfig({
  site: 'https://roffs.github.io',

  integrations: [
    react()
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    remarkPlugins: [remarkMath, remarkGfm, remarkAlert],
    rehypePlugins: [rehypeKatex],
  },


});