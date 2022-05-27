const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: 'class',
  'main-bg': {

  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-img': "url('./public/main-bg.jpg')",
        'main-img-dark': "url('./public/main-bg-dark.jpg')"
      }
    },
  },
  plugins: [
    plugin(function ({addComponents, theme}){
      addComponents({
        '.main-bg': {
          position: 'relative',
        }
      })
    })
  ],
}