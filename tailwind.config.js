/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/index.html", "./src/index.html", 
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['Montserrat'],
      },
      
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

