import Head from "next/head";
import { COPY, LANGS, type Lang } from "./prototype/homepageCopy";

// Absolute URLs for previews, canonical and language links; the apex domain
// redirects to www.
export const SITE_URL = "https://www.josuakiviranta.com";

// The address of `path` ("/" or "/privacy") in `lang`: English has no prefix.
export const localePath = (lang: Lang, path: string) =>
  lang === "en" ? path : path === "/" ? `/${lang}` : `/${lang}${path}`;

// The first screen's English words (owner, 2026-11-16) for link previews.
const SHARE_DESCRIPTION =
  "Before deciding, people ask AI. I help you show up in AI answers.";

// What search results and AI search summaries show: the name and the service
// in one line (ticket 20). EN the owner's (2026-11-25); FI and IT the agent's
// drafts.
const SEARCH_DESCRIPTION: Record<Lang, string> = {
  en: "Josua Kiviranta: helping companies and individuals show up in AI answers (GEO) and measuring visibility against competitors.",
  fi: "Josua Kiviranta: autan yrityksiä ja henkilöitä näkymään tekoälyn vastauksissa (GEO) ja mittaan näkyvyyttä kilpailijoihin verrattuna.",
  it: "Josua Kiviranta: aiutare aziende e persone a comparire nelle risposte dell’IA (GEO) e misurarne la visibilità rispetto ai concorrenti.",
};

const OG_LOCALE: Record<Lang, string> = { en: "en_GB", fi: "fi_FI", it: "it_IT" };

// Who is behind the site, as the page shows it (header, contact, footer).
const structuredData = (lang: Lang) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#josua`,
      name: "Josua Kiviranta",
      jobTitle: COPY[lang].role.replace(/\.$/, ""),
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/profile-photo.jpg`,
      email: "josua.kiviranta@gmail.com",
      telephone: "+358415242441",
      sameAs: ["https://www.linkedin.com/in/josuakiviranta/"],
      worksFor: { "@id": `${SITE_URL}/#company` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#company`,
      name: "Sassosa Consulting",
      url: `${SITE_URL}/`,
      founder: { "@id": `${SITE_URL}/#josua` },
      identifier: { "@type": "PropertyValue", propertyID: "Y-tunnus", value: "3127895-3" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#site`,
      name: "Josua Kiviranta",
      url: `${SITE_URL}/`,
      inLanguage: LANGS,
      publisher: { "@id": `${SITE_URL}/#josua` },
    },
  ],
});

/* The head of every page: title, descriptions, the icons, the address of
   this page and its other languages, link previews and structured data. */
export const SiteHead = ({ lang, path }: { lang: Lang; path: "/" | "/privacy" }) => {
  const c = COPY[lang];
  const role = c.role.replace(/\.$/, "");
  const title = path === "/" ? `Josua Kiviranta — ${role}` : `${c.privacy.title} — Josua Kiviranta`;
  const description = path === "/" ? SEARCH_DESCRIPTION[lang] : c.privacy.intro;
  const url = `${SITE_URL}${localePath(lang, path)}`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {LANGS.map((l) => (
        <link key={l} rel="alternate" hrefLang={l} href={`${SITE_URL}${localePath(l, path)}`} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${path}`} />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      {/* Link previews (LinkedIn, WhatsApp, Slack, iMessage). The card is
          built from og/card.html by og/generate-card.sh, in English. */}
      <meta property="og:type" content="website" />
      {/* AI answers label their links with the site name (eduskuntaan #36). */}
      <meta property="og:site_name" content="Josua Kiviranta" />
      <meta property="og:locale" content={OG_LOCALE[lang]} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content="Josua Kiviranta" />
      <meta property="og:description" content={SHARE_DESCRIPTION} />
      <meta property="og:image" content={`${SITE_URL}/og-card.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="The top of josuakiviranta.com: Josua Kiviranta, GEO and branding for AI. Before deciding, people ask AI."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(lang)) }} />
    </Head>
  );
};
