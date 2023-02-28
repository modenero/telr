/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/App.{js,jsx,ts,tsx}',
      './src/NavMenu.{js,jsx,ts,tsx}',
      './src/assets/svg/*.{js,jsx,ts,tsx}',
      './src/screens/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
