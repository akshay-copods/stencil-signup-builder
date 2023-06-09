/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        geekblue: {
          100: '#f0f5ff',
          200: '#d6e4ff',
          300: '#adc6ff',
          400: '#85a5ff',
          500: '#597ef7',
          600: '#2f54eb',
          700: '#1d39c4',
          800: '#10239e',
          900: '#061178',
          1000: '#061178',
        },
        sunsetOrange: {
          200: '#ffe7ba',
        },
        customBlack: {
          400: '#00000073',
          500:'#00000099',
          600: '#000000D9',
        },
      },
      fontSize: {
        h1: '2.375rem',
        h2: '1.875rem',
        h3: '1.5rem',
        h4: '1.25rem',
      },
      borderColor:{
        100:'#D9D9D9'
      }
      ,
      padding:{
        15:'60px'
      }
    },
  },
  plugins: [],
};
