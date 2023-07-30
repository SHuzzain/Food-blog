/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      width: {
        100: "1170px",
      },
      maxWidth: {
        100: "1170px",
      },
      minWidth: {
        auto: "auto",
      },
      backgroundColor: {
        navPopBg: "#1a1a1a",
      },
      fontSize: {
        clamp_1: "clamp(14px, 2vw, 34px)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
  ],
};
