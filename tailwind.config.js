/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      Backcolor: {
        bgColor:"#000000",
      }
    },
  },
  plugins: [],
}

