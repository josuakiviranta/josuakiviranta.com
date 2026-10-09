import type { ReactNode } from "react";
import { SectionHeading } from "./Section";

/**
 * Background — dossier list (wayfinder brand-dossier map, 2026-09-11).
 * Replaces the Services and Case Studies sections. Facts only, no verbs,
 * no method, no "we". The one quote is attributed and closes the section,
 * set apart like a LaTeX quote block; it is the only adjective-bearing line
 * on the page, and it is not ours.
 *
 * Client logos sit under the fact that names the client, linked to their
 * site (2026-10-09; replaces the logo strip). Rule: a logo goes up only after a
 * signed contract and the company's ok. Hidden until then (assets stay in
 * public/):
 * - EPS, Energia per lo Sviluppo (NGO, energiaperlosviluppo.org): conversations.
 * - Chelli Energy Solutions (energy company): conversations.
 * - Dream Italia (environment consultancy, dream-italia.it): platform build,
 *   budget allocated, not signed.
 */

/* A client logo under its fact, linked to the client's site. Framed with
   the same 1px rule as the map; the arrow in the frame's top-right corner
   marks an external link and nudges toward it on hover. The SVG viewBox is
   cropped to the artwork. */
const ClientLogo = ({ src, alt, href }: { src: string; alt: string; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group mt-2.5 inline-flex items-start gap-2 border border-ink py-2 pl-3 pr-2"
  >
    <img src={src} alt={alt} className="h-[1.8em] w-auto [filter:brightness(0)]" />
    <svg
      width="11"
      height="11"
      viewBox="0 0 12 12"
      aria-hidden="true"
      className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    >
      <path
        d="M3 9 9 3M4 3h5v5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="square"
      />
    </svg>
  </a>
);

const FACTS: ReactNode[] = [
  "3 years building LLM agents and putting them into daily use.",
  "10 years of software engineering in Finland. Led project teams and delivered AI solutions for more than ten large enterprises.",
  <>
    Haka-Wood, 2026: sawmill maintenance software. Live for end users in two
    weeks, then six weeks of iteration on live feedback.
    <span className="block">
      <ClientLogo
        src="/hakawood-logo.svg"
        alt="Haka-Wood"
        href="https://www.haka-wood.fi/"
      />
    </span>
  </>,
  "M.Sc. in Industrial Engineering and B.Sc. in Computer Science, Aalto University.",
];

const QUOTE = {
  text: "A useful sparring partner in strategic discussions related to emerging technologies and transformation.",
  source: "Vesa Syrjäkari, former VP, Innofactor",
};

export const BackgroundSection = () => {
  return (
    <section id="background" className="doc-anchor">
      <SectionHeading id="background" />
      <ol className="clauses">
        {FACTS.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ol>

      <figure className="mx-[1.8em] mt-6">
        <blockquote>
          <p>“{QUOTE.text}”</p>
        </blockquote>
        <figcaption className="mt-1 text-right italic">{QUOTE.source}</figcaption>
      </figure>
    </section>
  );
};
