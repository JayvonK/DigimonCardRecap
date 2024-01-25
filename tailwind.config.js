/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",

    //root index files add this
    "./*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],

  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

