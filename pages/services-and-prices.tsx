import type { NextPage } from "next";
import { useRouter } from "next/router";
import { HomepageVariant } from "../components/prototype/HomepageVariants";
import type { Lang } from "../components/prototype/homepageCopy";
import { SiteHead } from "../components/SiteHead";

// The services and prices page (owner, 2026-11-26): "/services-and-prices",
// "/fi/palvelut-ja-hinnat" and "/it/servizi-e-prezzi", the last two
// rewritten here by next.config.js.
const Services: NextPage = () => {
  const lang = (useRouter().locale ?? "en") as Lang;
  return (
    <>
      <SiteHead lang={lang} path="/services-and-prices" />
      <HomepageVariant variant="B3" lang={lang} route="services" />
    </>
  );
};

export default Services;
