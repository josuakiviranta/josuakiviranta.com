import { BackgroundSection } from "../components/BackgroundSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import Head from "next/head";
import { HelloSection } from "../components/HelloSection";
import type { NextPage } from "next";
import { NavBar } from "../components/NavBar";

// Link-preview tags need absolute URLs; the apex domain redirects to www.
const SITE_URL = "https://www.josuakiviranta.com";
const SHARE_DESCRIPTION =
  "Research, briefings and AI work for Finnish and Italian clients.";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Josua Kiviranta — Advisor and engineer, Florence</title>
        <meta
          name="description"
          content="Josua Kiviranta. Advisor and engineer in Pontassieve, Florence. Research, briefings and AI work for Finnish and Italian clients."
        />
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
          content="The top of josuakiviranta.com: Josua Kiviranta, Florence – Helsinki, and section 1, Current work."
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <NavBar />
      {/* One text column, about the measure of an A4 page at 2.5 cm margins. */}
      <main className="doc mx-auto w-full max-w-[42rem] px-4 sm:px-6">
        <HelloSection />
        <BackgroundSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Home;
