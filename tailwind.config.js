/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          50: "#FAF6F1",
          100: "#E8DFD8",
          200: "#D4C3B9",
          300: "#BFA79A",
          400: "#AA8B7B",
          500: "#956F5C",
          600: "#7D5B4A",
          700: "#654737",
          800: "#4A321F",
          900: "#2E1810",
        },
      },
    },
  },
  plugins: [],
};
