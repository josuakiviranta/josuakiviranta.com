import type { NextPage } from "next";
import { useRouter } from "next/router";
import { HomepageVariant } from "../components/prototype/HomepageVariants";
import type { Lang } from "../components/prototype/homepageCopy";
import { SiteHead } from "../components/SiteHead";

// The privacy notice at "/privacy", "/fi/privacy" and "/it/privacy" (was
// "/?page=privacy", which now redirects here).
const Privacy: NextPage = () => {
  const lang = (useRouter().locale ?? "en") as Lang;
  return (
    <>
      <SiteHead lang={lang} path="/privacy" />
      <HomepageVariant variant="B3" lang={lang} route="privacy" />
    </>
  );
};

export default Privacy;
