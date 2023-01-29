const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        btnBg:
          "linear-gradient(163deg, rgba(220,246,253,1) 0%, rgba(230,240,250,1) 36%, rgba(251,218,241,1) 60%, rgba(166,129,244,1) 92%)",
        overlayHero:
          "linear-gradient(0deg,rgba(0,0,0,.8) 0,transparent 60%,rgba(0,0,0,.8))",
      },
      colors: {
        gray: "#333",
        red: "#e50914",
        hoverRed: "#f40612",
        faqGray: "#303030",
      },
      fontFamily: {
        sans: ["Netflix-Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
