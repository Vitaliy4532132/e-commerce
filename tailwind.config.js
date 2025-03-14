/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      textShadow: {
        default: "4px 4px 0px rgba(0, 0, 0, 0.6)", // Основна тінь
        md: "6px 6px 2px rgba(0, 0, 0, 0.6)", // Більш розмита тінь
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        montserrat_alternates: ["Montserrat Alternates", "sans-serif"],
      },
      fontSize: {
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        24: "24px",
        32: "32px",
        36: "36px",
        40: "40px",
        48: "48px",
        52: "52px",
        64: "64px",
        72: "72px",
        82: "82px",
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      colors: {
        white: "#ffffff", // 185×
        yellow: {
          DEFAULT: "#ffc700", // 179×
          light: "#ffd43b", // 5×
          dark: "#ffc90d", // 6×
        },
        gray: {
          100: "#f0f0f0", // 77×
          200: "#b8b8b8", // 67×
          300: "#b5b5b5", // 10×
          400: "#a8a8a8", // 6×
          500: "#a6a6a6", // 5×
          600: "#9c9c9c", // 2×
          700: "#949494", // 12×
          800: "#858585", // 8×
        },
        black: {
          DEFAULT: "#000000", // 60×
          50: "#363636", // 7×
          100: "#262626", // 13×
          200: "#1a1a1a", // 13×
          300: "#171717", // 18×
          400: "#1c1c1c", // 8×
          500: "#141414", // 9×
          600: "#121212", // 20×
          700: "#0f0f0f", // 22×
          800: "#0d0d0d", // 18×
          900: "#080808", // 18×
        },
      },
    },
  },
  plugins: [],
};
