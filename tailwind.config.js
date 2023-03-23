/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#10192D',
      },
      screens: {
        xs: '391px',
        sm: '426px',
        md: '769px',
        lg: '1025px',
        xl: '1281px',
        '2xl': '1441px',
      },
    },
  },
  plugins: [],
};
