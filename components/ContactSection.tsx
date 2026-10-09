import { MAP_ASPECT, MAP_LABELS, MAP_PINS } from "./officeMapLabels";
import { SectionHeading } from "./Section";

/* Contact = a static map plus one legend row beneath it, set like a
   caption. The map is public/office-map.png, a frozen copy of the old
   interactive map's default view (built by map/generate-map.mjs); pins and
   labels are HTML on top so they use the page's font. Solid pin:
   Pontassieve, where Josua works. Hollow ring: Helsinki, the invoicing
   address. */
const PLACES = [
  { city: "Florence", role: "office", tz: "CET", primary: true },
  { city: "Helsinki", role: "invoicing", tz: "EET", primary: false },
];

const CHANNELS = [
  { label: "Email", value: "josua.kiviranta@gmail.com", href: "mailto:josua.kiviranta@gmail.com" },
  { label: "Phone", value: "+358 41 524 2441", href: "tel:+358415242441" },
];

/* The map's two pin styles, at text size, so the place rows read as the
   map's legend. */
const Pin = ({ primary }: { primary: boolean }) => (
  <span
    aria-hidden="true"
    className={`inline-block h-[0.6em] w-[0.6em] rounded-full ${
      primary ? "bg-ink" : "border-[1.5px] border-ink"
    }`}
  />
);

export const ContactSection = () => {
  return (
    <section id="contact" className="doc-anchor">
      <SectionHeading id="contact" />

      <figure
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: `${MAP_ASPECT}` }}
      >
        <img
          src="/office-map.png"
          alt="Map of Europe with pins at Florence and Helsinki."
          className="absolute inset-0 h-full w-full"
        />
        {MAP_PINS.map((p) => (
          <span
            key={p.name}
            aria-hidden="true"
            className={`absolute h-[14px] w-[14px] -translate-x-1/2 -translate-y-1/2 rounded-full ${
              p.primary ? "bg-ink" : "border-2 border-ink bg-white"
            }`}
            style={{ left: `${p.left}%`, top: `${p.top}%` }}
          />
        ))}
        {MAP_LABELS.map((l) => (
          <span
            key={l.text}
            aria-hidden="true"
            className={
              l.kind === "city"
                ? "absolute whitespace-nowrap text-[14px] [transform:translate(-50%,calc(-100%-14px))]"
                : "absolute whitespace-nowrap font-display text-[13px] font-bold tracking-[0.18em] [transform:translate(-50%,-50%)]"
            }
            style={{ left: `${l.left}%`, top: `${l.top}%` }}
          >
            {l.text}
          </span>
        ))}
      </figure>

      {/* Under the map, two columns like a letter's footer: how to reach
          Josua on the left, the map legend on the right. */}
      <div className="mt-6 grid gap-y-5 text-[0.94em] sm:grid-cols-2 sm:gap-x-10">
        <dl className="grid grid-cols-[4.5em_1fr] gap-y-1.5">
          {CHANNELS.map((c) => (
            <div key={c.label} className="contents">
              <dt className="italic text-muted">{c.label}</dt>
              <dd>
                <a className="doc-link" href={c.href}>
                  {c.value}
                </a>
              </dd>
            </div>
          ))}
        </dl>
        <ul className="grid grid-cols-[1.4em_5.5em_1fr] items-baseline gap-y-1.5 sm:border-l sm:border-ink/25 sm:pl-10">
          {PLACES.map((p) => (
            <li key={p.city} className="contents">
              <Pin primary={p.primary} />
              <span>{p.city}</span>
              <span className="italic text-muted">
                {p.role}, {p.tz}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
