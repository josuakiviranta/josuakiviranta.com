/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Document palette (2026-10-09): black on white, as printed. */
        ink: "#111111", // text, rules, active nav
        muted: "#767676", // inactive nav items
        rule: "#d9d9d9", // hairlines behind active indicators
      },
      fontFamily: {
        serif: ["LM Roman 10", "Latin Modern Roman", "Georgia", "serif"],
        // Headings and title: the 12 pt bold optical size, as \Large\bfseries.
        display: ["LM Roman 12", "LM Roman 10", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
}
