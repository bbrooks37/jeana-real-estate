/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'estate-blue': '#0f172a',
        'estate-gold': '#b45309',
      }
    },
  },
  plugins: [],
}
