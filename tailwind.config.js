/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['"Poppins", "sans-serif"'],
      },
      colors: {
        'regal-blue': '#43c6ac',
        'regal-black': '#191645',
        'regal-deep': '#2c917d',
        'regal-deeps': '#43c6b7',
      },
    },
  },
  plugins: [require("daisyui")],
}
