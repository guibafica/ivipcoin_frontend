/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Dosis", "Inter", "Nunito", "sans-serif"],
        sans: ["Dosis", "sans-serif"],
      },
      colors: {
        "main-yellow": "#ffe100",
      },
    },
  },
  plugins: [],
};
