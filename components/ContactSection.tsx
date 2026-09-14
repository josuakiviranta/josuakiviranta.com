import dynamic from "next/dynamic";

const OfficeMap = dynamic(() => import("./OfficeMap"), { ssr: false });

/* Contact = the map plus one legend row beneath it. No card, no stacked
   label/value pairs (2026-09-14). The two place items read as a legend for
   the two markers on the map. */
const PLACES = [
  { city: "Florence", role: "office", tz: "CET" },
  { city: "Helsinki", role: "invoicing", tz: "EET" },
];

const Dot = () => (
  <span aria-hidden="true" className="mx-2 text-slate-base">
    ·
  </span>
);

export const ContactSection = () => {
  return (
    <div id="contact" className="bg-slate-field-2 text-slate-text scroll-mt-20">
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 py-20 lg:py-28">
        <p className="pb-6 font-ibm-plex-mono text-xs uppercase tracking-[0.2em] text-slate-base">
          Contact
        </p>

        <div className="relative h-96 w-full rounded-lg overflow-hidden border border-slate-base/20 bg-slate-field-1">
          <svg width="0" height="0" className="absolute">
            <defs>
              <filter id="map-duotone" colorInterpolationFilters="sRGB">
                <feColorMatrix
                  type="matrix"
                  values="0.299 0.587 0.114 0 0  0.299 0.587 0.114 0 0  0.299 0.587 0.114 0 0  0 0 0 1 0"
                />
                <feComponentTransfer>
                  <feFuncR type="table" tableValues="0.118 0.118 0.118 0.118 0.776" />
                  <feFuncG type="table" tableValues="0.141 0.141 0.141 0.141 0.804" />
                  <feFuncB type="table" tableValues="0.173 0.173 0.173 0.173 0.843" />
                </feComponentTransfer>
              </filter>
            </defs>
          </svg>
          <OfficeMap />
        </div>

        <div className="mt-6 flex flex-wrap items-baseline gap-x-10 gap-y-3 lg:justify-between font-space-grotesk text-sm font-light tracking-wide text-slate-text">
          <a
            className="group inline-flex items-baseline gap-2"
            href="mailto:josua.kiviranta@gmail.com"
          >
            <span className="border-b border-transparent pb-0.5 transition-colors duration-300 group-hover:border-slate-text/55">
              josua.kiviranta@gmail.com
            </span>
            <span aria-hidden="true">→</span>
          </a>
          <a
            className="group inline-flex items-baseline gap-2"
            href="tel:+358415242441"
          >
            <span className="border-b border-transparent pb-0.5 transition-colors duration-300 group-hover:border-slate-text/55">
              +358 41 524 2441
            </span>
            <span aria-hidden="true">→</span>
          </a>
          {PLACES.map((p) => (
            <span key={p.city} className="text-slate-text/70">
              <span className="text-slate-text">{p.city}</span>
              <Dot />
              {p.role}
              <Dot />
              {p.tz}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
