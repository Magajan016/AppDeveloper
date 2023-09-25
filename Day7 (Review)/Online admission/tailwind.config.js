const { purple } = require('@mui/material/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
       " dark-purple":"081",
       "light-white":"rgba(255,255,255,0.18)"
      }
    },
  },
  plugins: [],
}

