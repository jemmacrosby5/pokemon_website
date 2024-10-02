/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontWeight: {
      normal: '300', 
      bold: '700',
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', 'ui-sans-serif', 'system-ui', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      },
      colors: {
        'custom-gray': '#346073',
        'custom-red': '#1a3341',
        'custom-orange': '#f77f00',
        'custom-yellow': '#fcbf49',
        'custom-light-blue': '#4785a6',
        'custom-CM-colour': "rgb(75,192,192)",
        'custom-TCG-colour': "rgb(255,99,132)"
      },
    },
  },
  plugins: [],
}


