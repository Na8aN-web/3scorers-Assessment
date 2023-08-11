/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'bgGreen': '#008F8F',
        'secGreen': '#51FFFF'
      },
      textColor: {
        'textGreen': '#008F8F'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'custom': '2px 8px 20px 0px rgba(181, 181, 181, 0.2)',
      },
      components: {
        'active-nav-link': {
          backgroundColor: '#51FFFF',
        },
      }
    },
  },
  plugins: [],
}
