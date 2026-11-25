import type { NextPage } from "next";
import { useRouter } from "next/router";
// The homepage B3 from the brand plan (2026-11-16; was the dossier page).
import { HomepageVariant } from "../components/prototype/HomepageVariants";
import type { Lang } from "../components/prototype/homepageCopy";
import { SiteHead } from "../components/SiteHead";

// "/", "/fi" and "/it": the language is the address's (next.config.js).
const Home: NextPage = () => {
  const lang = (useRouter().locale ?? "en") as Lang;
  return (
    <>
      <SiteHead lang={lang} path="/" />
      <HomepageVariant variant="B3" lang={lang} />
    </>
  );
};

export default Home;
