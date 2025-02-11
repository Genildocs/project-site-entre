/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },
      colors: {
        primary: "#5A189A",
        secondary: "#FFAA3B",
        tertiary: "#F3E6FF",
      },
    },
  },
  plugins: [require("tailwindcss-primeui")],
};
