/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkColor: {
          50: "#808080",
          100: "#262626",
          200: "#262626",
          300: "#1A1A1A",
          400: "#0D0D0D",
        },
      },
    },
  },
  plugins: [],
};