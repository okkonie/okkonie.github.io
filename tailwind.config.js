/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        onest: ["Onest", "sans-serif"],
        funnel: ["Funnel Display", "sans-serif"]
      },
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        sep: "rgb(var(--sep) / <alpha-value>)",
        text: "rgb(var(--text) / <alpha-value>)",
        text2: "rgb(var(--text2) / <alpha-value>)",
      },
      padding: {
        p: "var(--p)"
      }
    },
  },
  plugins: [],
}