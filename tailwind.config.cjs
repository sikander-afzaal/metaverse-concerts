const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        overlayHero:
          "linear-gradient(0deg,rgba(0,0,0,.8) 0,transparent 60%,rgba(0,0,0,.8))",
      },
      colors: {
        gray: "#333",
        red: "#e50914",
        hoverRed: "#f40612",
      },
      fontFamily: {
        sans: ["Netflix-Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
