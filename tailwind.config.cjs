/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9C69E2",
        secondary: "#212353",
        tertiary: "#4B5D68",
      },
    },
    fontFamily: {
      helvetica: ["Helvetica", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      avenir: ["Avenir", "sans-serif"],
    },
  },
  plugins: [],
};
