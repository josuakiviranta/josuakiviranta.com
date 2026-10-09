/**
 * Logo strip — no heading, no claim (wayfinder brand-dossier map, 2026-09-11).
 * Set like a figure: centred, black, no caption.
 *
 * Rule: a logo goes up only after a signed contract and the company's ok.
 * Hidden until then (assets stay in public/):
 * - EPS, Energia per lo Sviluppo (NGO, energiaperlosviluppo.org): conversations.
 * - Chelli Energy Solutions (energy company): conversations.
 * - Dream Italia (environment consultancy, dream-italia.it): platform build,
 *   budget allocated, not signed.
 */
const HIDDEN_UNTIL_SIGNED = [
  { src: "/eps-logo.png", alt: "EPS — Energia per lo Sviluppo", h: "h-16" },
  { src: "/chelli-logo.png", alt: "Chelli Energy Solutions", h: "h-14" },
  { src: "/dream-italia-logo.png", alt: "Dream Italia", h: "h-12" },
];

const LOGOS = [
  { src: "/hakawood-logo.svg", alt: "Hakawood", h: "h-14" },
];

export const ClientsSection = () => {
  void HIDDEN_UNTIL_SIGNED;
  return (
    <section id="clients" className="mt-14 sm:mt-16">
      <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
        {LOGOS.map((l) => (
          <img
            key={l.src}
            src={l.src}
            alt={l.alt}
            className={`${l.h} w-auto [filter:brightness(0)]`}
          />
        ))}
      </div>
    </section>
  );
};
