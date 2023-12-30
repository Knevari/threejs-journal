/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: {
          50: "#fef2f4",
          100: "#fde6ea",
          200: "#fbd0da",
          300: "#f8a9bc",
          400: "#f37999",
          500: "#ec5e87",
          600: "#d62862",
          700: "#b41c53",
          800: "#811a46",
          900: "#811a46",
          950: "#480922",
        },
      },
    },
  },
  plugins: [],
};
