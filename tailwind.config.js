/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  safelist: [{
    pattern: /hljs+/,
  }],
  theme: {
    extend: {
      fontFamily: {
        mplus: ["'M PLUS Rounded 1c'", 'Verdana', 'sans-serif']
      }
    },
    hljs: {
      theme: 'atom-one-dark',
    },
  },
  plugins: [require('tailwind-highlightjs')]
}
