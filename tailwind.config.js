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
      keyframes:{
        heartBeat:{
            '0%':{transform:'scale(1);opacity:1;'},
            '50%':{transform:'scale(1.2);opacity:1;'},
            '100%':{transform:'scale(1);opacity:1;'},
        }
      },
      animation:{
        heartBeat:'heartBeat 3s infinite'
      }
    },
    fontFamily: {
      'roboto': 'Roboto, sans-serif'
    }
  },
  plugins: [],

  
}

