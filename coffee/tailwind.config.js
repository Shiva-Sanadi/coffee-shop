/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./public/index.html"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        espresso: "#2b1d0e",
        mocha: "#4b2e1f",
        latte: "#c9a24d",
        cream: "#f5f1e8",
        coffeeBg: "#081a14"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"]
      }
    }
  },
  plugins: [],
};
