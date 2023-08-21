/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html", "./src/index.html"],
  theme: {
    extend: {
      fontFamily: {
        main: ['Montserrat'],
      }
    },
  },
  plugins: [],
}

