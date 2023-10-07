/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        'bg-loading': '#4b4b4b',
        'darkBackground': '#241F2B',
      }
    },
  },
  plugins: [],
}
