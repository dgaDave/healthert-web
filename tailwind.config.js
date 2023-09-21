/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'verde': '#6FD81C',
        'morado': '#D914DB',
        'moradoOscuro': '#8D008F'

      },
    },
    fontFamily: {
      'roboto': 'Roboto, sans-serif'
    }
  },
  plugins: [],

  
}

