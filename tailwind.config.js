/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow:{
        'glow':'0 0 10px rgba(11, 216, 28, 1)'
      },
      colors: {
        'verde': '#6FD81C',
        'morado': '#D914DB',
        'normal':'#A8A8A8',
        'moradoOscuro': '#8D008F'

      },
    },
    fontFamily: {
      'roboto': 'Roboto, sans-serif'
    }
  },
  plugins: [],

  
}

