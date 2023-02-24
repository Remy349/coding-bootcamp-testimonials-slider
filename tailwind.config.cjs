/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'hsl(240, 38%, 20%)',
        'grayish-blue': 'hsl(240, 18%, 77%)'
      }
    }
  },
  plugins: []
}
