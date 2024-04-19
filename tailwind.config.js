/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'btncolor-900': '#453e90',
        'btncolor-800': '#685dd8',
        'btncolor-main': '#7367f0',
        'btncolor-600': '#8f85f3',
        'btncolor-500': '#9d95f5',
        'btncolor-400': '#b9b3f8',
        'btncolor-300': '#d5d1fb',
        'btncolor-100': '#f1f0fe',
        'green-main': '#28c76f',
        'green-500': '#69d89a',
        'green-300': '#a9e9c5',
        'green-100': '#d4f4e2'
      },
    },
  },
  plugins: [],
};
