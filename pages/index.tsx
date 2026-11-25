import Head from "next/head";
import type { NextPage } from "next";
import { useRouter } from "next/router";
// The homepage B3 from the brand plan (2026-11-16; was the dossier page).
import { HomepageVariant } from "../components/prototype/HomepageVariants";
import { LANGS, type Lang } from "../components/prototype/homepageCopy";

// Link-preview tags need absolute URLs; the apex domain redirects to www.
const SITE_URL = "https://www.josuakiviranta.com";
// The first screen's English words (owner, 2026-11-16); previews read the
// page without ?lang=, so they are in English.
const SHARE_DESCRIPTION =
  "Before deciding, people ask AI. I help you show up in AI answers.";

const Home: NextPage = () => {
  const router = useRouter();
  const lang = (LANGS as string[]).includes(router.query.lang as string) ? (router.query.lang as Lang) : "en";
  return (
    <>
      <Head>
        <title>Josua Kiviranta — GEO and branding for AI</title>
        <meta name="description" content={SHARE_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Link previews (LinkedIn, WhatsApp, Slack, iMessage). The card is
            built from og/card.html by og/generate-card.sh. */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/`} />
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
      </Head>
      <HomepageVariant variant="B3" lang={lang} />
    </>
  );
};

export default Home;
