/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'custom-navy': '#003049',
        'custom-red': '#d62828',
        'custom-orange': '#f77f00',
        'custom-yellow': '#fcbf49',
        'custom-beige': '#eae2b7'
      },
    },
  },
  plugins: [],
}

