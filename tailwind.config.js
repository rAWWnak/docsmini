/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      sage:{
        100: "#99BC85",
        200: "#BFD8AF",
        300: "#D4E7C5",
        400: "#E1F0DA",
        500: "#9fbe8f",
        600: "#E7F0DC",
        700: "#597445",
        800: "#658147",
        900: "#987654"

      },
    },},
  },
  plugins: [],
}

