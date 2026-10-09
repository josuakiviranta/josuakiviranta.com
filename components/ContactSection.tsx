import dynamic from "next/dynamic";
import { SectionHeading } from "./Section";

const OfficeMap = dynamic(() => import("./OfficeMap"), { ssr: false });

/* Contact = the map plus one legend row beneath it, set like a figure
   caption. The two place items read as a legend for the two markers on
   the map. */
const PLACES = [
  { city: "Florence", role: "office", tz: "CET" },
  { city: "Helsinki", role: "invoicing", tz: "EET" },
];

const Dot = () => (
  <span aria-hidden="true" className="mx-1.5">
    ·
  </span>
);

export const ContactSection = () => {
  return (
    <section id="contact" className="doc-anchor">
      <SectionHeading id="contact" />

      <div className="relative h-80 w-full overflow-hidden border border-ink sm:h-96">
        <OfficeMap />
      </div>

      <div className="mt-3 flex flex-wrap items-baseline gap-x-8 gap-y-1 text-[0.88em]">
        <a className="doc-link" href="mailto:josua.kiviranta@gmail.com">
          josua.kiviranta@gmail.com
        </a>
        <a className="doc-link" href="tel:+358415242441">
          +358 41 524 2441
        </a>
        {PLACES.map((p) => (
          <span key={p.city}>
            {p.city}
            <Dot />
            {p.role}
            <Dot />
            {p.tz}
          </span>
        ))}
      </div>
    </section>
  );
};
