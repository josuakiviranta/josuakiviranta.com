/**
 * Logo strip — no heading, no claim (wayfinder brand-dossier map, 2026-09-11).
 *
 * Rule: a logo goes up only after a signed contract and the company's ok.
 * Hidden until then (assets stay in public/):
 * - EPS, Energia per lo Sviluppo (NGO, energiaperlosviluppo.org): conversations.
 * - Chelli Energy Solutions (energy company): conversations.
 * - Dream Italia (environment consultancy, dream-italia.it): platform build,
 *   budget allocated, not signed.
 */
const HIDDEN_UNTIL_SIGNED = [
  { src: "/eps-logo.png", alt: "EPS — Energia per lo Sviluppo", h: "h-24" },
  { src: "/chelli-logo.png", alt: "Chelli Energy Solutions", h: "h-20" },
  { src: "/dream-italia-logo.png", alt: "Dream Italia", h: "h-16" },
];

const LOGOS = [
  { src: "/hakawood-logo.svg", alt: "Hakawood", h: "h-20" },
];

export const ClientsSection = () => {
  void HIDDEN_UNTIL_SIGNED;
  return (
    <section
      id="clients"
      className="bg-slate-field-2 text-slate-text scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 py-16 lg:py-20">
        <div className="flex flex-wrap items-center gap-x-16 gap-y-10">
          {LOGOS.map((l) => (
            <img
              key={l.src}
              src={l.src}
              alt={l.alt}
              className={`${l.h} w-auto opacity-[0.48] [filter:brightness(0)_invert(1)]`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
