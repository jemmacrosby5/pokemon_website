/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'ui-sans-serif', 'system-ui', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      },
      colors: {
        'custom-gray': '#1f2937',
        'custom-red': '#d62828',
        'custom-orange': '#f77f00',
        'custom-yellow': '#fcbf49',
        'custom-beige': '#eae2b7'
      },
    },
  },
  plugins: [],
}


