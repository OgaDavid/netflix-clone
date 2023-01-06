/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey-nav': '#e5e5e5',
        'grey-hover': '#b3b3b3',
        'bg-black': '#141414'
      },

      transitionDuration: {
        '400': '.4s'
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ]
}