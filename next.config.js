/** @type {import('next').NextConfig} */

// The old addresses (?lang=, ?page=privacy), shared before each language and
// the privacy notice had its own path (ticket 20, 2026-11-25). Only the bare
// "/" matches (locale: false), so a redirect never lands on its own source;
// the page drops the query left over.
const old = (query, destination) =>
  ["/", "/en"].map((source) => ({
    source,
    has: Object.entries(query).map(([key, value]) => ({ type: "query", key, value })),
    destination,
    locale: false,
    permanent: true,
  }));

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // English at "/", Finnish at "/fi", Italian at "/it", each its own HTML
  // for crawlers, which run no JavaScript. The language follows the address,
  // never the browser's setting.
  i18n: { locales: ["en", "fi", "it"], defaultLocale: "en", localeDetection: false },
  async redirects() {
    return [
      ...old({ page: "privacy", lang: "fi" }, "/fi/privacy"),
      ...old({ page: "privacy", lang: "it" }, "/it/privacy"),
      ...old({ page: "privacy" }, "/privacy"),
      ...old({ lang: "fi" }, "/fi"),
      ...old({ lang: "it" }, "/it"),
    ];
  },
}

module.exports = nextConfig
