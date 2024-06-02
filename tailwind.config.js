/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'CormorantSC':['Cormorant SC', 'serif'],
        'Poppins':['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

