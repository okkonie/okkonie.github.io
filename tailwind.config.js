/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gradzy: "var(--font-gradzy)",
        inter: "var(--font-inter)",
        lato: "var(--font-lato)",
        "open-sans": "var(--font-open-sans)",
        outfit: "var(--font-outfit)",
        sen: "var(--font-sen)",
        "bricolage-grotesque": "var(--font-bricolage-grotesque)",
      },
    },
  },
  plugins: [],
}

