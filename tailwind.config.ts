import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif']
      }
    }
  },

  plugins: []
} as Config;
