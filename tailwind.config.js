/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1E3A8A",
          dark: "#1D4ED8",
          deeper: "#1E3A8A",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        ticker: "ticker 20s linear infinite",
        pulseIn: "pulseIn 0.8s ease forwards",
        fadeUp: "fadeUp 0.7s ease forwards",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseIn: {
          from: { opacity: 0, transform: "scale(0.85)" },
          to: { opacity: 1, transform: "scale(1)" },
        },
        fadeUp: {
          from: { opacity: 0, transform: "translateY(30px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
