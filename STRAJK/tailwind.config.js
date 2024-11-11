/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'WorkSans': ['Work Sans', 'sans-serif'],
        'BebasNeune': ['Bebas Neue', 'sans-serif']
      },
      colors: {
        'custom-red': '#EC315A',
        'custom-purple': '#441D81',
        'custom-black': '#1C1919'
      }
    },
  },
  plugins: [],
}

