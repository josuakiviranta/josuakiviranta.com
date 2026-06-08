/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vainamoinen: "#344128",
      },
      fontFamily: {
        "google-sans-flex": ["Inter", "system-ui", "sans-serif"],
        "ibm-plex-mono": ["IBM Plex Mono", "ui-monospace", "monospace"],
        caveat: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
}
