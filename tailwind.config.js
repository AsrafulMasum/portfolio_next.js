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
        primary: '#FB7D2B',
        btn_color: '#4D1F01',
        dark_black: '#0D0A08',
        text_color: '#999999',
        card_bg: '#F5F5F5',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
