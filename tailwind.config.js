/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        source: '"Source Sans 3", "sans-serif"',
      },
      maxWidth: {
        'custom': '1140px',
      },
    },
  },
  plugins: [],
}