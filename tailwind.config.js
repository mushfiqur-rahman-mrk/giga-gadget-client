/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['"Poppins", "sans-serif"'],
      },
      colors: {
        'regal-blue': '#43c6ac',
        'regal-black': '#191645',
      },
    },
  },
  plugins: [require("daisyui")],
}
