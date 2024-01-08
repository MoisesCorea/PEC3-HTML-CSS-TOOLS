/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Roboto",
        "Segoe UI",
        "Helvetica Neue",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
      serif: ["Georgia", "Times New Roman", "serif"],
    },
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        primary_color: "#1e3148",
        secondary_color: "#83894b",
      },
    },
  },
  plugins: [],
};
