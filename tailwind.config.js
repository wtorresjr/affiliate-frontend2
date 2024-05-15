const autoprefixer = require("autoprefixer");

module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",

  theme: {
    screens: {
      xs: { max: "475px" },
      sm: { max: "640px" },
      md: { max: "768px" },
      lg: { max: "1024px" },
      xl: { max: "1464px" },
      xxl: { max: "1668px" },
    },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        gray: { 100: "#f0f4ff", 500: "#8f8f8f" },
        black: { 900: "#030024", "900_01": "#000000" },
        yellow: { 900: "#fb7e10" },
        indigo: { 50: "#e7ebf8", 300: "#7e7ece" },
        red: { "500_01": "#ff3b2e" },
        blue_gray: { 100: "#d8d8d8" },
        green: { 200: "#94e8b4" },
        light_green: { 100: "#d3fad6" },
        gradient_red: ["#ff3b2e", "#fa372c", "#d31d20", "#bb0c19", "#b30717"],
        bodygray: { 212: "#e7ebf8" },
      },
      boxShadow: {
        xs: "1px 1px 50px 0px #0000000c",
        sm: "1px 1px 10px 0px #0000000c",
      },
      fontFamily: { inter: "Inter" },
      backgroundImage: (theme) => ({
        "gradient-red": `linear-gradient(90deg, ${theme("colors.gradient_red").join(", ")})`,
      }),
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
