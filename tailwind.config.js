/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
        'black': '#000000',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
};


