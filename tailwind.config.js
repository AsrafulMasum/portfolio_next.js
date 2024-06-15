/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F96302',
        btn_color: '#4D1F01',
        dark_black: '#0D0A08',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
