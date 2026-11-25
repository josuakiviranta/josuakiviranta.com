import type { NextPage } from "next";
import { useRouter } from "next/router";
import { HomepageVariant } from "../components/prototype/HomepageVariants";
import type { Lang } from "../components/prototype/homepageCopy";
import { SiteHead } from "../components/SiteHead";

// The Eduskuntavaalit 2027 page (ticket 21): "/finnish-elections-2027",
// "/fi/eduskuntavaalit-2027" and "/it/elezioni-finlandesi-2027", the last
// two rewritten here by next.config.js.
const Elections: NextPage = () => {
  const lang = (useRouter().locale ?? "en") as Lang;
  return (
    <>
      <SiteHead lang={lang} path="/finnish-elections-2027" />
      <HomepageVariant variant="B3" lang={lang} route="elections" />
    </>
  );
};

export default Elections;
