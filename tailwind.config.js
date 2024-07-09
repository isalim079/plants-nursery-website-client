/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "playWrite": "'Playwrite DE Grund', cursive",
        "poppins": "'Poppins', sans-serif"
      }
    },
    colors: {
      "textGreen": "#4A5F4B",
      "backgroundLightGreen": "#EDF2E6",
    }
  },
  plugins: [
    daisyui
  ],
}

