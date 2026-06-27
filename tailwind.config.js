/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "background": "#0a0a0a",
        "surface": "#111111",
        "surface-high": "#1a1a1a",
        "on-background": "#e2e2e2",
        "on-surface": "#e2e2e2",
        "on-surface-variant": "#888888",
        "outline": "#1a1a1a",
        "outline-variant": "#2a2a2a",
        "tertiary": "#e8292a",
        "tertiary-dim": "rgba(232,41,42,0.12)",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["Space Grotesk", "sans-serif"],
      },
      spacing: {
        "gutter": "2rem",
        "section": "5rem",
      },
    },
  },
  plugins: [],
}
