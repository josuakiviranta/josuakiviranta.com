import { SectionHeading } from "./Section";

/**
 * Clients — client logos, linked to their sites (2026-10-09).
 *
 * Rule: a logo goes up only after a signed contract and the company's ok.
 * Hidden until then (assets stay in public/):
 * - EPS, Energia per lo Sviluppo (NGO, energiaperlosviluppo.org): conversations.
 * - Chelli Energy Solutions (energy company): conversations.
 * - Dream Italia (environment consultancy, dream-italia.it): platform build,
 *   budget allocated, not signed.
 */

/* One reference: the logo (linked to the client's site) beside a short
   caption, separated by a hairline rule. Stacks on narrow screens. The SVG
   viewBox is cropped to the artwork. */
type Reference = {
  src: string;
  alt: string;
  href: string;
  year: string;
  title: string;
  body: string;
};

const REFERENCES: Reference[] = [
  {
    src: "/hakawood-logo.svg",
    alt: "Haka-Wood",
    href: "https://www.haka-wood.fi/",
    year: "2026",
    title: "Sawmill maintenance software",
    body: "Live for end users in two weeks, then six weeks of iteration on live feedback.",
  },
];

const ReferenceEntry = ({ src, alt, href, year, title, body }: Reference) => (
  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="shrink-0 opacity-90 transition-opacity duration-300 hover:opacity-100 sm:w-[9.5rem]"
    >
      <img src={src} alt={alt} className="h-[2.1em] w-auto [filter:brightness(0)]" />
    </a>
    <div className="sm:border-l sm:border-ink/25 sm:pl-6">
      <p>
        <span className="italic">{title}</span>, {year}.
      </p>
      <p className="mt-0.5 text-[0.94em] leading-snug">{body}</p>
    </div>
  </div>
);

export const ClientsSection = () => {
  return (
    <section id="clients" className="doc-anchor">
      <SectionHeading id="clients" />
      <div className="space-y-6">
        {REFERENCES.map((r) => (
          <ReferenceEntry key={r.src} {...r} />
        ))}
      </div>
    </section>
  );
};
