/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#e1f16b",
          50: "#fdfee7",
          100: "#f8fbcc",
          200: "#eff89e",
          300: "#e1f16b",
          400: "#cee437",
          500: "#b0ca18",
          600: "#89a10f",
          700: "#677b10",
          800: "#526113",
          900: "#455215",
          950: "#242e05",
        },
        neutral: {
          DEFAULT: "#1A1D1F",
          50: "#f4f6f7",
          100: "#e4e8e9",
          200: "#ccd3d5",
          300: "#a8b4b8",
          400: "#7d8d93",
          500: "#627278",
          600: "#546166",
          700: "#485156",
          800: "#40474a",
          900: "#383d41",
          950: "#1a1d1f",
        },
      },
      screens: {
        xxs: "360px",
        xs: "480px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
