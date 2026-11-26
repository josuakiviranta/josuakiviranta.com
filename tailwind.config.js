/** @type {import('tailwindcss').Config} */
/* Every value comes from styles/theme.css (ticket 24). */
const color = (name) => `rgb(var(--color-${name}) / <alpha-value>)`;

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: color("paper"), // the page
        ink: color("ink"), // text, rules, active nav
        muted: color("muted"), // quiet text
        rule: color("rule"), // hairlines
        faint: color("faint"), // graph fills not reached, axis rules
        passed: color("passed"), // graph columns passed
        line: color("line"), // thin pointer lines
      },
      fontFamily: {
        body: ["var(--font-body)"],
        display: ["var(--font-display)"],
      },
      fontWeight: {
        strong: "var(--weight-strong)",
      },
      fontSize: {
        small: "var(--size-small)",
        nav: "var(--size-nav)",
        lead: "var(--size-lead)",
        h3: "var(--size-h3)",
        sub: "var(--size-sub)",
        figure: "var(--size-figure)",
      },
    },
  },
  plugins: [],
}
