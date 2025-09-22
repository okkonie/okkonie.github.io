/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "var(--font-poppins)",
        zalando: "Var(--font-zalando)"
      },
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        sep: "rgb(var(--sep) / <alpha-value>)",
        text: "rgb(var(--text) / <alpha-value>)",
        text2: "rgb(var(--text2) / <alpha-value>)",
      }
    },
  },
  plugins: [],
}