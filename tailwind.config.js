/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Slate design language (site restyle, 2026-07 — see
           wayfinder/site-restyle/tickets/assets/design-conventions.md) */
        "slate-field-1": "#1e242c", // dark field gradient start / raised panel surface
        "slate-field-2": "#090b0e", // dark field gradient end / page base surface
        "slate-base": "#7e8894", // wireframe strokes, hairlines, muted labels
        "slate-text": "#e8ebef", // primary text on dark surfaces
        "slate-dim": "rgba(232,235,239,0.48)", // dimmed text on dark (no /opacity modifier)
        "slate-cta": "#e6eaef", // light CTA/pill + light band surface
        "slate-ink": "#12161b", // dark text on light surfaces
      },
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "system-ui", "sans-serif"],
        "ibm-plex-mono": ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
}
