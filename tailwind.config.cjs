/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-env node */
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const daisyui = require('daisyui');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
