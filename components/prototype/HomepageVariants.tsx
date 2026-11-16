/* PROTOTYPE (2026-11-09): layout B3 ("problem first") for the brand plan.
   Owner's notes: keep the current site's map,
   simplicity and text size. Open with ?variant=B3 and ?lang=en|fi|it; the
   earlier layouts B1 and B2 and the comparison switches were removed at
   the clean-up (owner, 2026-11-16). */

import { useRouter } from "next/router";
import { Fragment, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { MAP_ASPECT, MAP_PINS } from "../officeMapLabels";
import { COPY, LANGS, type Copy, type Lang, type OfferCopy } from "./homepageCopy";

const PHONE = { display: "+358 41 524 2441", href: "tel:+358415242441" };
/* The owner's Google Calendar booking page (owner, 2026-11-12). */
const BOOKING = "https://calendar.app.google/vQtX41PcY1mnrfJZ6";

const LangSwitch = ({ lang }: { lang: Lang }) => {
  const router = useRouter();
  return (
    <div className="text-[0.85em] tracking-[0.08em]">
      {LANGS.map((l, i) => (
        <span key={l}>
          {i > 0 && <span className="mx-1.5 text-muted">·</span>}
          <button
            onClick={() => router.replace({ query: { ...router.query, lang: l } }, undefined, { shallow: true })}
            className={l === lang ? "font-bold" : "text-muted hover:text-ink"}
          >
            {l.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
};

/* Josua's photo, cropped to its box with the face kept in view; one photo
   everywhere, profile-photo.jpg (owner, 2026-11-15; was josua-photo.jpg). */
const Photo = ({ className = "" }: { className?: string }) => (
  <img
    src="/profile-photo.jpg"
    alt="Josua Kiviranta"
    className={`object-cover object-[50%_35%] ${className}`}
  />
);

/* Yhteystiedot's map in the page's graphics style (owner picked B on a
   throwaway ?page=map, 2026-11-15, with Finland and Italy light grey
   rather than striped): public/office-map-outline.png, made from
   public/office-map.png, is white with the coast as a thin grey line and
   Finland and Italy filled #d9d9d9. Each office gets a black caps label
   with a thin grey line to its ink pin, like the long tail's; the line is
   shorter on a phone's small map. */
const OFFICES = (c: Copy) => {
  const [north, south] = c.places.split(" – ");
  return [
    { name: north, x: MAP_PINS[1].left, y: MAP_PINS[1].top, down: true },
    { name: south, x: MAP_PINS[0].left, y: MAP_PINS[0].top, down: false },
  ];
};
const MapPins = ({ c }: { c: Copy }) => (
  <>
    {OFFICES(c).map((o) => (
      <Fragment key={o.name}>
        <span
          aria-hidden="true"
          className="absolute w-px bg-[#9a9a9a]"
          style={{ left: `${o.x}%`, top: o.down ? `${o.y}%` : `calc(${o.y}% - var(--line))`, height: "var(--line)" }}
        />
        <span
          className="absolute whitespace-nowrap pl-2 text-[0.85em] uppercase tracking-[0.2em] text-ink"
          style={{
            left: `${o.x}%`,
            top: o.down ? `calc(${o.y}% + var(--line))` : `calc(${o.y}% - var(--line))`,
            transform: `translate(-0.5rem, ${o.down ? "0" : "-100%"})`,
          }}
        >
          {o.name}
        </span>
        <span
          aria-hidden="true"
          className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-ink"
          style={{ left: `${o.x}%`, top: `${o.y}%` }}
        />
      </Fragment>
    ))}
  </>
);
const OfficeMapOutline = ({ c }: { c: Copy }) => (
  <figure className="relative w-full [--line:1.25rem] sm:[--line:2.5rem]" style={{ aspectRatio: `${MAP_ASPECT}` }}>
    <img src="/office-map-outline.png" alt="" className="absolute inset-0 h-full w-full" />
    <MapPins c={c} />
  </figure>
);
const Dashes = ({ items }: { items: ReactNode[] }) => (
  <ul className="dashes">
    {items.map((it, i) => (
      <li key={i}>{it}</li>
    ))}
  </ul>
);

const backgroundItems = (c: Copy) => [
  ...c.background,
  <>
    “{c.quote.text}”<span className="block italic">{c.quote.source}</span>
  </>,
];

/* The facts without a link, on one line: "Helsinki – Firenze · Y-tunnus
   3127895-3 · Sassosa Consulting". */
const placesLine = (c: Copy) =>
  c.facts
    .filter((f) => !f.href)
    .map((f, i) => (i === 0 ? f.value : `${f.label} ${f.value}`))
    .join(" · ");

/* `places`: B3 also shows the place and the business ID here, moved from
   Yhteystiedot (owner, 2026-11-15). */
const Footer = ({ c, places }: { c: Copy; places?: boolean }) => (
  <footer className="mt-20 border-t border-ink pt-5 text-[0.85em] text-muted">
    {/* One line, the places before the year (owner, 2026-11-15). */}
    Josua Kiviranta · {c.role.replace(/\.$/, "")} · {places && `${placesLine(c)} · `}© 2026
  </footer>
);

/* A full-width band with no hairline (owner, 2026-11-10). Elections 2027,
   Background and the case are their own pages (?page=background,
   ?page=case), linked from nothing since 2026-11-16. */
const Band = ({ children, tight, id, className = "" }: { children: ReactNode; tight?: boolean; id?: string; className?: string }) => (
  <section id={id} className={`${tight ? "py-10" : "py-14"} ${className}`}>{children}</section>
);

const PAGES = ["home", "background", "case"] as const;
type Page = (typeof PAGES)[number];

const usePage = () => {
  const router = useRouter();
  const page: Page = (PAGES as readonly string[]).includes(router.query.page as string) ? (router.query.page as Page) : "home";
  const go = (p: Page) => {
    const { page: _drop, ...rest } = router.query;
    router.replace({ query: p === "home" ? rest : { ...rest, page: p } }, undefined, { shallow: true });
    window.scrollTo(0, 0);
  };
  return { page, go };
};

/* True once the reader has scrolled past most of the first screen. */
const useScrolledPast = (share = 0.6) => {
  const [past, setPast] = useState(false);
  useEffect(() => {
    const update = () => setPast(window.scrollY > share * window.innerHeight);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [share]);
  return past;
};

/* Scrolls to the offer's section (owner, 2026-11-16: the nav's
   "Palvelut"): its held piece centred, the section above out of sight under
   the header, and the label not yet filling (`OFFER_FILL` starts after
   `OFFER_LAND`, the furthest this stops into the hold). */
const SERVICES_ID = "palvelut-ja-hinnat";
const scrollToServices = () => {
  const sec = document.getElementById(SERVICES_ID);
  if (!sec) return;
  const sticky = sec.querySelector("div.sticky") as HTMLElement | null;
  const head = (document.querySelector("[data-b3-header]") as HTMLElement | null)?.offsetHeight ?? 0;
  const start = sticky ? parseFloat(sticky.style.top) : head;
  const top = sec.getBoundingClientRect().top + window.scrollY - start;
  const above = sec.previousElementSibling?.getBoundingClientRect().bottom;
  const clear = above === undefined ? top : above + window.scrollY - head + 8;
  const land = Math.min(Math.max(top, clear), top + OFFER_LAND * OFFER_HOLD * window.innerHeight);
  window.scrollTo({ top: land, behavior: "smooth" });
};

const B3Header = ({ c, lang, page, go }: { c: Copy; lang: Lang; page: Page; go: (p: Page) => void }) => {
  // On phones, once scrolled, one compact row: photo, name, languages; the
  // role comes back at the top (owner, 2026-11-14). The nav sits behind a
  // burger button on phones (owner, 2026-11-16).
  const compact = useScrolledPast();
  const phoneHide = compact ? "hidden sm:block" : "block";
  const [menu, setMenu] = useState(false);
  const services = () => {
    setMenu(false);
    if (page !== "home") {
      go("home");
      setTimeout(scrollToServices, 400);
    } else scrollToServices();
  };
  return (
  /* Sticky while scrolling (owner, 2026-11-13); white so content passes under it.
     `data-b3-header`: Pinned centres held sections in the space below it. */
  <header
    data-b3-header
    className={`sticky top-0 z-30 -mx-5 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 bg-white px-5 sm:-mx-8 sm:px-8 sm:py-6 ${compact ? "py-3" : "py-6"}`}
  >
    <button onClick={() => go("home")} className="flex items-center gap-3 text-left">
      <Photo className={`shrink-0 rounded-full sm:h-11 sm:w-11 sm:text-[0.45em] ${compact ? "h-8 w-8 text-[0.35em]" : "h-11 w-11 text-[0.45em]"}`} />
      <span className="leading-tight">
        <span className="block font-bold">Josua Kiviranta</span>
        <span className={`${phoneHide} text-[0.85em] text-muted`}>{c.role.replace(/\.$/, "")}</span>
      </span>
    </button>
    <div className="flex items-center gap-6">
      {/* One link, to the offer (owner, 2026-11-16; "Eduskuntavaalit 2027"
          and "Tausta" hidden, their pages kept). */}
      <nav className="hidden gap-5 text-[0.9em] sm:flex">
        <button onClick={services} className="hover:underline">
          {c.navServices}
        </button>
      </nav>
      {/* On phones the languages move into the menu, so the header keeps
          one row (2026-11-16). */}
      <div className="hidden sm:block">
        <LangSwitch lang={lang} />
      </div>
      <button onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label="Menu" className="-mr-1 p-1 sm:hidden">
        <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
          {menu ? (
            <path d="M5 5 L17 17 M17 5 L5 17" stroke="#111111" strokeWidth="1.6" />
          ) : (
            <path d="M3 6 H19 M3 11 H19 M3 16 H19" stroke="#111111" strokeWidth="1.6" />
          )}
        </svg>
      </button>
    </div>
    {menu && (
      <nav className="absolute inset-x-0 top-full border-b border-rule bg-white px-5 pb-5 pt-2 sm:hidden">
        <button onClick={services} className="block py-2 font-display text-[1.3em] font-bold">
          {c.navServices}
        </button>
        <div className="mt-3">
          <LangSwitch lang={lang} />
        </div>
      </nav>
    )}
  </header>
  );
};

const Caps = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  // Bigger, every caps text the same (owner, 2026-11-15; was 0.72em).
  <span className={`text-[0.85em] uppercase tracking-[0.2em] text-muted ${className}`}>{children}</span>
);

/* The MP case's link on the first screen, hidden (owner, 2026-11-16); its
   page stays at ?page=case. */
const SHOW_CASE = false;

/* The references under the first screen, the "logo strip" (owner, 2026-11-10):
   small caps label over the Haka-Wood logo, which is not a link; with
   SHOW_CASE a thin line and the MP case's link beside it. */
const RefSection = ({ c, go }: { c: Copy; go: (p: Page) => void }) => {
  const logoClient = c.clients.find((cl) => cl.logo);
  const caseClient = c.clients.find((cl) => cl.findings);
  const logo = logoClient?.logo ? (
    <img src={logoClient.logo.src} alt={logoClient.name} style={{ height: "1.5em" }} className="w-auto shrink-0 [filter:brightness(0)]" />
  ) : null;
  return (
    <section className="pt-14 text-center">
      <Caps>{c.clientsHeading}</Caps>
      {SHOW_CASE && caseClient ? (
        // Equal side columns keep the divider exactly under the label.
        <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-x-5 sm:gap-x-8">
          <div className="flex justify-end">{logo}</div>
          <span aria-hidden="true" className="h-8 w-px bg-rule" />
          <div className="flex justify-start">
            <button onClick={() => go("case")} className="group text-left">
              <span className="block font-display font-bold leading-tight">{caseClient.name}</span>
              <span className="block text-[0.85em] text-muted">
                <span className="tabular-nums">{caseClient.year}</span> · <span className="group-hover:underline">{c.caseStudy.cardLink}</span>
              </span>
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-5 flex justify-center">{logo}</div>
      )}
    </section>
  );
};

/* `lines` (owner, 2026-11-10): hairlines above and below the steps, like the
   MYÖS list; between the steps a vertical hairline on wide screens (each step
   after the first gets 2rem padding left of its line), a horizontal one on
   phones. The vertical lines run into the horizontal ones. */
/* `items` replaces the shared steps; `twoDigit` sets "01" on its own line
   over the title (the service page's next step, owner 2026-11-12). */
/* The first call's three topics, laid out like the first screen's
   references: no rules above or below, a short thin line between the items
   (owner, 2026-11-14). Phones stack them without lines. */
const B3Steps = ({ items }: { items: { title: string; body: string; price?: string }[] }) => (
  <div className="flex flex-col gap-4 sm:grid sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-start sm:gap-x-8">
    {items.map((s, i) => (
      <Fragment key={s.title}>
        {i > 0 && <span aria-hidden="true" className="hidden h-8 w-px self-center bg-rule sm:block" />}
        <div className="flex flex-col sm:self-stretch">
          {/* Phones put the number beside the title, so held pieces fit
              the screen (owner, 2026-11-16). */}
          <div className="flex items-baseline justify-center gap-[0.5em] sm:block">
            <div className="text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</div>
            <div className="font-display text-[1.1em] font-bold sm:mt-1">{s.title}</div>
          </div>
          <p className="mt-1 leading-snug">{s.body}</p>
          {/* The offer's steps carry their price, on one shared line on wide
              screens (owner, 2026-11-15). */}
          {s.price && <p className="mt-2 whitespace-nowrap tabular-nums sm:mt-auto sm:pt-2">{s.price}</p>}
        </div>
      </Fragment>
    ))}
  </div>
);

const B3Home = ({ c, go }: { c: Copy; go: (p: Page) => void }) => {
  return (
  <>
    {/* First screen (owner, 2026-11-10): headline, offer, phone and the
        references as one group, centred in the space under the navbar. */}
    <div className="flex min-h-[calc(100svh-9rem)] flex-col justify-center py-16">
      <section className="text-center">
        {/* Bigger (owner, 2026-11-13; was 2.3em). */}
        <h1 className="mx-auto max-w-[44rem] font-display text-[2.7em] font-bold leading-[1.08] sm:text-[3.4em]">{c.problem}</h1>
        <p className="mx-auto mt-4 max-w-[32rem] text-[1.15em]">{c.offer}</p>
        {/* The free conversation in place of the phone link (owner, 2026-11-15). */}
        <a href={BOOKING} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block bg-ink px-5 py-3 font-bold text-white hover:bg-ink/90">
          {c.visibility.request?.label}&nbsp;→
        </a>
      </section>

      {/* Named, dated proof right under the promise. */}
      <RefSection c={c} go={go} />
    </div>
    <VisibilitySection c={c} />

    <Band>
      <ContactCentred c={c} />
    </Band>
  </>
  );
};

/* Yhteystiedot in the sales section's style (owner picked B on a throwaway
   ?page=contact, 2026-11-15; was the photo beside a list of facts): a
   centred header at 2.1em, the photo, the facts with a link as caps labels
   over their values split by thin vertical lines, then the map at the
   sales section's width. The other facts are in the footer (owner,
   2026-11-15). */
const ContactCentred = ({ c }: { c: Copy }) => {
  const links = c.facts.filter((f) => f.href);
  return (
    <section className="pb-8 text-center">
      <h2 className="font-display text-[2.1em] font-bold leading-[1.15]">{c.contactHeading}</h2>
      <Photo className="mx-auto mt-10 aspect-[4/5] w-40" />
      <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:items-start sm:justify-center sm:gap-x-8">
        {links.map((f, i) => (
          <Fragment key={f.label}>
            {i > 0 && <span aria-hidden="true" className="hidden h-8 w-px self-center bg-rule sm:block" />}
            <div className="flex flex-col items-center">
              <Caps>{f.label}</Caps>
              <a className="doc-link mt-1 whitespace-nowrap" href={f.href}>
                {f.value}
              </a>
            </div>
          </Fragment>
        ))}
      </div>
      <div className="mx-auto mt-12 max-w-[40rem]">
        <OfficeMapOutline c={c} />
      </div>
    </section>
  );
};


const B3Background = ({ c }: { c: Copy }) => (
  <section className="pt-12 pb-8">
    <h1 className="mb-8 font-display text-[2.3em] font-bold leading-[1.1]">{c.backgroundHeading}</h1>
    <div className="max-w-[40rem]"><Dashes items={backgroundItems(c)} /></div>
  </section>
);

/* Marks a section whose facts the owner has not supplied yet. */
const Pending = ({ label, text }: { label: string; text: string }) => (
  <p className="border border-dashed border-rule px-4 py-3 italic text-muted">
    {label}: {text}
  </p>
);

/* Case-page prose (owner, 2026-11-11): a blank line starts a new paragraph. */
const Prose = ({ text }: { text: string }) => (
  <div className="space-y-4 leading-relaxed">
    {text.split("\n\n").map((t) => <p key={t}>{t}</p>)}
  </div>
);

/* Section heading on the case and service pages. */
const PageH2 = ({ children }: { children: ReactNode }) => (
  <h2 className="mt-12 mb-4 font-display text-[1.3em] font-bold">{children}</h2>
);

/* The offer block (owner, 2026-11-11): a dark block with the question, a line
   under it, price and length, and two buttons. Price and length show a
   placeholder until they are set. */
const Offer = ({ c, offer, centred }: { c: Copy; offer: OfferCopy; centred?: boolean }) => {
  const email = c.facts.find((f) => f.href?.startsWith("mailto:"));
  return (
    <section className={`mt-14 bg-ink px-6 py-8 text-white sm:px-10 sm:py-10 ${centred ? "text-center" : ""}`}>
      <p className="font-display text-[1.5em] font-bold leading-tight">{offer.cta}</p>
      <p className="mt-2 text-white/75">{offer.urgency}</p>
      {offer.terms.length > 0 ? (
        <dl className={`mt-6 grid gap-x-6 gap-y-1 ${centred ? "mx-auto w-fit grid-cols-[auto_auto] text-left" : "grid-cols-[auto_1fr]"}`}>
          {offer.terms.map((t) => (
            <div key={t.label} className="contents">
              <dt className="text-white/60">{t.label}</dt>
              <dd className="whitespace-nowrap font-bold tabular-nums">{t.value}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <p className="mt-6 border border-dashed border-white/40 px-4 py-3 italic text-white/60">{offer.termsPending}</p>
      )}
      {offer.assurance && <p className="mt-4 text-white/75">{offer.assurance}</p>}
      {offer.request ? (
        <div className={`mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 ${centred ? "justify-center" : ""}`}>
          <a href={BOOKING} target="_blank" rel="noopener noreferrer" className="bg-white px-5 py-3 font-bold text-ink hover:bg-white/90">
            {offer.request.label}&nbsp;→
          </a>
          <a href={PHONE.href} className="text-white/75 underline underline-offset-4 hover:text-white">
            {offer.callLabel} {PHONE.display}
          </a>
        </div>
      ) : (
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={PHONE.href} className="bg-white px-5 py-3 font-bold text-ink hover:bg-white/90">
            {offer.callLabel} {PHONE.display} →
          </a>
          {email && (
            <a href={email.href} className="border border-white/60 px-5 py-3 hover:border-white">
              {offer.emailLabel} →
            </a>
          )}
        </div>
      )}
    </section>
  );
};


/* Measured in a Helsinki Round (5–7.11.2026) over the 71 Candidates with
   an own website and at least one talking point. `combined`: mentions per
   Candidate, OpenAI and Claude joined, sorted high to low. */
const MEASURED = {
  combined: [26.27, 20.91, 19.82, 16.18, 15.91, 13.82, 13.45, 12.82, 12.09, 10.55, 10.45, 9.27, 9.27, 7.91, 7.91, 7.82, 6, 6, 5.82, 5.18, 4.91, 4.82, 4.36, 4, 3.82, 3.82, 3.73, 3.45, 3.45, 3.27, 3.09, 3.09, 2.82, 2.73, 2.73, 2.73, 2.64, 2.64, 2.27, 2.18, 2, 1.91, 1.82, 1.82, 1.82, 1.82, 1.73, 1.73, 1.64, 1.64, 1.55, 1.45, 0.91, 0.91, 0.91, 0.91, 0.91, 0.64, 0.36, 0.36, 0.36, 0.27, 0.27, 0.09, 0.09, ...Array(6).fill(0)],
};

/* Keeps a number and its "%" (with any case ending), and any two words
   joined by a no-break space, on one line; the font draws no-break spaces
   too wide, so the pair gets an ordinary one. */
const KeepPct = ({ text }: { text: string }) => (
  <>{text.split(/(\d+ %\S*|\S+\u00a0\S+)/).map((t, i) => (i % 2 ? <span key={i} className="whitespace-nowrap">{t.replace("\u00a0", " ")}</span> : t))}</>
);

type M = Copy["visibility"]["measured"];
/* Thin columns, one per name, sorted by mentions (owner, 2026-11-12: show
   how the mentions land per player); `shade` gives each column's fill class. */
const Spread = ({ counts, className = "h-14", shade }: { counts: number[]; className?: string; shade: (i: number) => string }) => {
  const max = Math.max(...counts);
  const w = 4.5;
  const gap = 1;
  const h = 48;
  return (
    <svg viewBox={`0 0 ${counts.length * (w + gap)} ${h + 2}`} preserveAspectRatio="none" className={`block w-full ${className}`} aria-hidden>
      {counts.map((x, i) => {
        // Never named: a column 1 px high (owner, 2026-11-12); the graph is
        // 64 px (h-16) for 50 units, so 0.8 units ≈ 1 px.
        const bh = x === 0 ? 0.8 : Math.max(2, (x / max) * h);
        return (
          <rect
            key={i}
            x={i * (w + gap)}
            y={h + 2 - bh}
            width={w}
            height={bh}
            className={`transition-[fill] duration-150 motion-reduce:transition-none ${shade(i)}`}
          />
        );
      })}
    </svg>
  );
};


/* The answers per AI behind `MEASURED.combined`. */
const PAGE_ANSWERS = 92;
/* The long tail, drawn as an idea, not data (owner, 2026-11-12: explain
   simply how players get named, one smooth long-tail curve; the measured
   numbers go into the case study under it). */
/* Where the curve's animation ends in its hold: before the study box under
   the curve rises into view in the hold's last part (owner, 2026-11-13). */
const TAIL_DONE = 0.86;

const TailCurve = ({ m, p }: { m: M; p: number }) => {
  const W = 600;
  const H = 200;
  const y = (x: number) => H - 8 - (H - 16) / (1 + (x / 70) ** 2.2);
  const pts = Array.from({ length: 121 }, (_, i) => [(i / 120) * W, y((i / 120) * W)] as const);
  const line = pts.map(([px, py], i) => `${i ? "L" : "M"}${px.toFixed(1)},${py.toFixed(1)}`).join(" ");
  // Players as dots: one at the top, the rest evenly along the tail (owner,
  // 2026-11-12). HTML, not SVG, so the stretched viewBox keeps them round.
  const dots = [6, ...Array.from({ length: 6 }, (_, i) => W * (0.16 + (i * 0.8) / 5))];
  // The stripes on the long tail, its arrow and "Useimmat vaihtoehdot
  // mainitaan harvoin" show from the start (owner, 2026-11-14). As `p` (the
  // section's hold) runs, the stripes slide on to the head, between the
  // first two dots, and a second arrow draws to it with its words, the
  // first staying, all by `TAIL_DONE`. Scrolling back undoes it.
  const [x0, x1] = [dots[0], dots[1]];
  const area = `M${x0},${H} ${pts.filter(([px]) => px >= x0).map(([px, py]) => `L${px.toFixed(1)},${py.toFixed(1)}`).join(" ")} L${W},${H} Z`;
  // The second arrow and its words move with the stripes (owner, 2026-11-14).
  const slide = seg(p, 0.1, TAIL_DONE);
  const clipX = x1 + slide * (x0 - x1);
  const clipW = W - x1 + slide * (x1 - x0 - (W - x1));
  // Each label sits over its area, a thin vertical line dropping from it to
  // touch the curve, in place of the arrows (owner picked C of three on
  // ?page=arrows, 2026-11-15; no ring at the end). `tx`: where the line
  // meets the curve; `low`: the words' bottom edge, where the line starts.
  const labels = [
    { tx: 230, low: 148, draw: 1, words: 1, text: m.tail.most },
    { tx: 80, low: 80, draw: seg(p, 0.1, 0.7), words: seg(p, 0.2, TAIL_DONE), text: m.tail.here },
  ] as const;
  return (
    <figure className="text-left text-[0.8em] text-muted">
      {/* Axis words in black, spelled out; "Harvat" / "Useimmat" dropped (owner, 2026-11-13). */}
      {/* "↑": up means more mentions (owner, 2026-11-13). */}
      {/* Grey like the election example's axis (owner, 2026-11-15; was black). */}
      {/* Grey caps (owner, 2026-11-16; were plain words). */}
      <span className="text-[1.0625em] uppercase tracking-[0.2em]">↑ {m.tail.y}</span>
      <div className="relative mt-1">
        {/* Taller on phones so the two wrapped labels have room (2026-11-14; 17.5 rem since the caps grew, 2026-11-15). */}
        <svg viewBox={`0 0 ${W} ${H}`} className="block h-[17.5rem] w-full sm:h-auto" preserveAspectRatio="none" aria-hidden>
          <defs>
            <pattern id="tail-stripes" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="9" stroke="#111111" strokeWidth="2.5" />
            </pattern>
            <clipPath id="tail-reveal">
              <rect
                x={clipX}
                y="0"
                width={clipW}
                height={H}
                style={{ transformBox: "fill-box", transformOrigin: "right", transform: "scaleX(1)" }}
              />
            </clipPath>
          </defs>
          <path d={area} fill="url(#tail-stripes)" clipPath="url(#tail-reveal)" />
          {/* The line grey, ink only over the striped area, moving with it
              (owner, 2026-11-15). */}
          <path d={line} fill="none" stroke="#bdbdbd" strokeWidth={2} vectorEffect="non-scaling-stroke" />
          <path d={line} fill="none" stroke="#111111" strokeWidth={2} vectorEffect="non-scaling-stroke" clipPath="url(#tail-reveal)" />
          {labels.map((a) => (
            <path
              key={a.text}
              d={`M${a.tx},${a.low + 3} L${a.tx},${y(a.tx)}`}
              pathLength={1}
              fill="none"
              stroke="#9a9a9a"
              strokeWidth={0.9}
              strokeDasharray="1"
              style={{ strokeDashoffset: 1 - a.draw }}
            />
          ))}
        </svg>
        {labels.map((a) => (
          <span
            key={a.text}
            /* Plain text at the body's size, in ink (owner, 2026-11-16;
               were black caps); both wrap. */
            className="absolute max-w-[55%] pl-2 text-[1.25em] leading-snug text-ink sm:max-w-[50%]"
            style={{ left: `${(a.tx / W) * 100}%`, top: `${(a.low / H) * 100}%`, transform: "translate(-0.5rem, -100%)", opacity: a.words }}
          >
            {a.text}
          </span>
        ))}
        {dots.map((x) => (
          <span
            key={x}
            className={`absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${x >= clipX - 1 && x <= clipX + clipW + 1 ? "bg-ink" : "bg-[#bdbdbd]"}`}
            style={{ left: `${(x / W) * 100}%`, top: `${(y(x) / H) * 100}%` }}
          />
        ))}
      </div>
      {/* Words at both ends (owner, 2026-11-14; was one line on the right). */}
      <div className="flex justify-between border-t border-[#bdbdbd] pt-2 text-[1.0625em] uppercase tracking-[0.2em]">
        <span>{m.tail.left}</span>
        <span>{m.tail.right}</span>
      </div>
    </figure>
  );
};

/* The gap between the sales section's blocks: the same white space as
   between the home page's sections, offer to Yhteystiedot (owner, 2026-11-13). */
const SECTION_GAP = "mt-[10rem] sm:mt-[13rem]";

/* Holds its content still, centred on the screen, for `length` screen
   heights of scrolling, and passes how far through that hold the reader is,
   0 to 1; then the page moves on. Each animation plays while its section
   holds, forwards and back (owner, 2026-11-13: the page stops at a section
   until its animation has finished). With reduced motion progress is 1 at
   once and nothing holds. */
/* `align`: when given, sets the held content's top from progress itself,
   given `centre` (the top that centres a part of height h whose top sits
   `off` below the content's top); the hold then still ends at progress 1. */
type Centre = (h: number, off?: number) => number;
const Pinned = ({ length, align, children }: { length: number; align?: (p: number, centre: Centre) => number; children: (p: number) => ReactNode }) => {
  const alignRef = useRef(align);
  alignRef.current = align;
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const [st, setSt] = useState({ p: 0, top: 0, h: 0, hold: 0, moving: false });
  // The top at the moment the hold starts: progress is measured from it, so
  // content that grows while held (the study box) does not move it.
  const start = useRef(0);
  useEffect(() => {
    const o = outer.current;
    const el = inner.current;
    if (!o || !el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSt({ p: 1, top: 0, h: 0, hold: 0, moving: false });
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const h = el.offsetHeight;
      // Centred in the space below the sticky header.
      const head = (document.querySelector("[data-b3-header]") as HTMLElement | null)?.offsetHeight ?? 0;
      const room = vh - head;
      const centre: Centre = (ch, off = 0) => (ch <= room - 32 ? head + (room - ch) / 2 : vh - ch - 16) - off;
      // Taller than that space (short phones), it starts with its top under
      // the header and moves up while held until its bottom shows, so every
      // line is seen (owner, 2026-11-16).
      const slide = h > room - 32 ? (p: number) => head + 16 + p * (vh - h - 32 - head) : undefined;
      const fit = slide ?? alignRef.current;
      const top0 = fit ? fit(0, centre) : centre(h);
      const hold = length * vh;
      const at = o.getBoundingClientRect().top;
      if (!start.current || start.current - at <= 0) start.current = top0;
      const p = seg(start.current - at, 0, hold);
      const top = fit ? fit(p, centre) : top0;
      // Moving up while held would stretch the hold; shorten it by as much.
      setSt({ p, top, h, hold: hold - (start.current - top), moving: !!fit });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    // Content that grows while held (a box opening) moves `align`'s top.
    const grow = new ResizeObserver(onScroll);
    grow.observe(el);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      grow.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [length]);
  return (
    <div ref={outer} style={st.hold ? { height: st.h + st.hold } : undefined}>
      <div ref={inner} className={st.hold ? `sticky ${st.moving ? "" : "transition-[top] duration-500 ease-out"}` : undefined} style={st.hold ? { top: st.top } : undefined}>
        {children(st.p)}
      </div>
    </div>
  );
};

/* The part of progress `p` between `a` and `b`, as 0 to 1. */
const seg = (p: number, a: number, b: number) => Math.min(1, Math.max(0, (p - a) / (b - a)));

/* The election box's body (owner, 2026-11-14), as `p` runs 0 to 1: the
   sentence, the 71 grey columns over "71 ehdokasta" and the squares at 0;
   a stop; then one ink column slides from the least mentioned Candidate
   on the right to the most mentioned on the left. The columns it has
   passed turn a darker grey; the sentence and the squares show the ink
   column's own mentions per 10 answers. No arrows. */
const StudyBody = ({ m, p }: { m: M; p: number }) => {
  const counts = MEASURED.combined;
  const n = counts.length;
  const pos = (n - 1) * (1 - seg(p, 0.15, 0.85));
  const at = Math.round(pos);
  // The Candidates named once or more in 10 answers (13 of 71 now).
  const few = counts.filter((v) => (v / PAGE_ANSWERS) * 10 >= 1).length;
  return (
    <figure className="space-y-3">
      {/* A quiet caps label like the other sections' (owner, 2026-11-15;
          was a sentence at 1.1em). 1.25 rem over the graph. */}
      {/* In ink, unlike the quiet labels (owner, 2026-11-15). */}
      {/* Plain text (owner, 2026-11-16; was a black caps label). */}
      <p className="leading-snug">
        <KeepPct text={m.study.intro.replace("{n}", String(ASKED))} />
      </p>
      <div className="pt-2">
        <Spread counts={counts} className="h-24 sm:h-28" shade={(i) => (i < at ? "fill-[#bdbdbd]" : i === at ? "fill-ink" : "fill-[#7a7a7a]")} />
        {/* Grey caps like the long tail's axis words (owner, 2026-11-16). */}
        <div className="mt-1 border-t border-[#bdbdbd] pt-2 text-center"><Caps>{m.study.players.replace("{n}", String(n))}</Caps></div>
      </div>
      {/* The ink column waits on the last place through the stop, so the
          sentence always names a place (owner, 2026-11-14). */}
      <AvgTen m={m} rank={at + 1} v={(counts[at] / PAGE_ANSWERS) * 10} />
      {/* What the slide shows (owner, 2026-11-15): the Candidates named
          under once in 10 answers, as soon as the ink column has passed
          them all; then, once it reaches place 1, place 1's count rounded. */}
      <div className="space-y-1 pt-4 tabular-nums leading-snug sm:pt-6">
        <p style={{ opacity: seg(few - 0.5 - pos, 0, 1.5) }}>
          <Bolded text={m.own.most.replace("{n}", String(n - few)).replace("{all}", String(n))} />
        </p>
        <p style={{ opacity: seg(p, 0.86, 0.95) }}>
          <Bolded text={m.own.first.replace("{n}", String(Math.round((counts[0] / PAGE_ANSWERS) * 10)))} />
        </p>
      </div>
    </figure>
  );
};

/* Text with its **…** spans in bold. */
const Bolded = ({ text }: { text: string }) => (
  <>{text.split(/\*\*(.+?)\*\*/).map((part, i) => (i % 2 ? <b key={i}>{part}</b> : part))}</>
);

/* 10 squares, one per question asked; ink fills `v` of them, a fraction
   filling part of a square. One sentence over them says the same, its
   number following the animation; no label, count or key (owner,
   2026-11-14). */
const AvgTen = ({ m, rank, v }: { m: M; rank: number; v: number }) => {
  const shown = Math.round(v * 10) / 10;
  const fill: Record<string, string> = { "{rank}": String(rank), "{n}": shown ? shown.toFixed(1).replace(".", m.dist.decimal) : "0" };
  return (
    <div className="space-y-3 pt-4 sm:pt-6">
      {/* The body's size like all plain text (owner, 2026-11-16); the place
          and the count bold (owner, 2026-11-15). */}
      <p className="tabular-nums leading-snug">
        {m.own.live.split(/(\{rank\}|\{n\})/).map((part, i) => (part in fill ? <b key={i}>{fill[part]}</b> : part))}
      </p>
      <div className="flex justify-center gap-[3px]">
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i} className="relative h-6 w-6 bg-[#bdbdbd]">
            <span className="absolute inset-y-0 left-0 bg-ink" style={{ width: `${Math.min(1, Math.max(0, v - i)) * 100}%` }} />
          </span>
        ))}
      </div>
    </div>
  );
};

/* The threat over the long-tail curve, then our own measurement of one
   field, the election example, as its own section (owner, 2026-11-15). */
const Measured = ({ c }: { c: Copy }) => {
  const m = c.visibility.measured;
  // Two sections since 2026-11-15 (owner; the curve and the election box were
  // held as one piece): the curve held while it animates, then the election
  // example under its own big header, held while its ink column slides.
  return (
    <>
      <section>
        <Pinned length={STUDY.curve}>
          {(p) => (
            <>
              {/* The threat as the long-tail section's header (owner, 2026-11-13). */}
              <h2 className="font-display text-[1.75em] font-bold leading-[1.15] sm:text-[2.1em]">{c.visibility.summary}</h2>
              <div className="mt-8">
                <TailCurve m={m} p={p} />
              </div>
            </>
          )}
        </Pinned>
      </section>

      <section className={SECTION_GAP}>
        <Pinned length={STUDY.body}>
          {(p) => (
            <>
              {/* Its own header, the size of the others (owner, 2026-11-15;
                  was the title of a box that opened under the curve). */}
              <h2 className="font-display text-[1.75em] font-bold leading-[1.15] sm:text-[2.1em]">{m.study.title}</h2>
              {/* Ties the curve to the elections, a black caps label
                  (owner, 2026-11-16; was plain text). */}
              <div className="mt-4 sm:mt-10">
                <Caps className="block leading-relaxed !text-ink">{m.study.bridge}</Caps>
              </div>
              <div className="mt-4 sm:mt-6">
                <StudyBody m={m} p={p} />
              </div>
            </>
          )}
        </Pinned>
      </section>
    </>
  );
};

/* The two held pieces' lengths in screen heights: the curve's timeline
   (done at TAIL_DONE of it) and the election example's slide (StudyBody). */
const STUDY = {
  curve: 0.7,
  body: 1.5,
} as const;

/* The one number both examples show, so a reader may sense they are the
   same data (owner, 2026-11-15): the election example's "{n} kysymystä" and
   the weekly example's "Näkyvyytesi {n} vastauksissa". */
const ASKED = 101;

/* The weekly example (owner, 2026-11-15: tie it to the election example):
   the rivals are places 1–3 of `MEASURED.combined` and "Sinä" place 24,
   each rounded. `questions`: per square, 0 = not named, n = place among
   the names in the answer; the last row follows a "⋮". */
const SAMPLE = {
  answers: 92,
  top: [26, 21, 20],
  you: { rank: 24, count: 4 },
  questions: [
    [0, 0, 0, 0],
    [1, 4, 2, 2],
    [0, 2, 0, 0],
  ],
};

/* What a measurement looks like, under the offer's three steps. Held with
   the header and the steps as one piece, like the long tail and the election
   box (owner, 2026-11-15): the box rises closed under the still steps, the
   piece moves up until the box is centred, the box opens, its bars draw one
   by one, then it grows to show the questions, whose named squares turn
   ink. Each bar is its count out of `SAMPLE.answers` (owner, 2026-11-13). */
const Sample = ({ c }: { c: Copy }) => {
  const s = c.visibility.sample;
  const rows = SAMPLE.top.length + 1;
  const Row = ({ rank, name, count, you, grow }: { rank: number; name: string; count: number; you?: boolean; grow: number }) => (
    <li className={`grid grid-cols-[2.2rem_minmax(0,7rem)_1fr_2.5rem] items-center gap-3 px-2 py-1 transition-colors duration-150 motion-reduce:transition-none ${you ? "font-bold" : ""} ${you && grow > 0 ? "bg-rule/50" : ""}`}>
      <span className="tabular-nums text-muted">{rank}.</span>
      <span className="truncate">{name}</span>
      <span className="h-2 bg-[#bdbdbd]">
        <span className="block h-2 bg-ink" style={{ width: `${(count / SAMPLE.answers) * 100 * grow}%` }} />
      </span>
      <span className="text-right tabular-nums">{count}</span>
    </li>
  );
  const Dots = () => <li className="px-2 text-muted">⋮</li>;
  const hits = SAMPLE.questions.flat().filter(Boolean).length;
  return (
    <>
      {/* The three things Josua does, under the section's header and a
          quiet label spaced like the next step's (owner, 2026-11-15). Its
          own held section, apart from the weekly example (owner, 2026-11-15;
          the example rose under the steps as one piece). */}
      <section id={SERVICES_ID} className={SECTION_GAP}>
        <Pinned length={OFFER_HOLD}>
          {(p) => (
            <>
              <h2 className="font-display text-[1.75em] font-bold leading-[1.15] sm:text-[2.1em]">{s.weekly.lead}</h2>
              {/* The label turns black from right to left while the steps
                  hold (owner, 2026-11-15). */}
              <div className="mt-4 mb-4 sm:mt-14 sm:mb-5">
                <FillCaps f={seg(p, OFFER_FILL[0], OFFER_FILL[1])}>{s.weekly.label}</FillCaps>
              </div>
              <B3Steps items={s.weekly.steps} />
            </>
          )}
        </Pinned>
      </section>

      {/* The weekly example as its own section like the election example,
          the whole report open before its animations start (owner,
          2026-11-15; was a box that rose under the steps and opened). */}
      <section className={SECTION_GAP}>
        <Pinned length={WEEKLY_HOLD}>
          {(p) => {
            const p1 = seg(p, 0.1, 0.45);
            const p2 = seg(p, 0.55, 0.95);
            let k = 0;
            return (
              <>
              <h2 className="font-display text-[1.75em] font-bold leading-[1.15] sm:text-[2.1em]">{s.label}</h2>
              {/* A thin line on each side, so the body reads as a report
                  (owner, 2026-11-15). */}
              <div className="mt-8 border-x border-rule px-3 sm:mt-14 sm:px-6">
                <figure>
                  {/* Black caps (owner, 2026-11-15; was a grey line). */}
                  <Caps className="block !text-ink">{s.basis.replace("{n}", String(ASKED))}</Caps>
                  <ol className="mt-4 text-left">
                    {SAMPLE.top.map((n, i) => (
                      <Row key={i} rank={i + 1} name={s.rivals[i]} count={n} grow={seg(p1, i / rows, (i + 1) / rows)} />
                    ))}
                    <Dots />
                    <Row rank={SAMPLE.you.rank} name={s.you} count={SAMPLE.you.count} you grow={seg(p1, (rows - 1) / rows, 1)} />
                    <Dots />
                  </ol>
                    <div className="pt-4 sm:pt-12">
                      {/* Black caps (owner, 2026-11-15; was a bold line). */}
                      <Caps className="block !text-ink">{s.ask}</Caps>
                      {/* Each sentence on its own line (owner, 2026-11-15). */}
                      <p className="mt-2 leading-snug text-muted">
                        {s.legend.split(/(?<=\.) /).map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </p>
                      <ul className="mt-4 space-y-2 text-left">
                        {SAMPLE.questions.map((qs, i) => {
                          const named = qs.some(Boolean);
                          // The first unnamed row gets "Ei mainintaa"; the
                          // first named row's highest place gets "Mainittiin
                          // {n}. nimenä"; the other rows get no label.
                          const first = !named && SAMPLE.questions.findIndex((q) => !q.some(Boolean)) === i;
                          const at = qs.indexOf(Math.max(...qs));
                          const label = first
                            ? { sq: 0, text: s.none, room: 1, wraps: false, draw: seg(p2, 0, 0.2), words: seg(p2, 0.15, 0.3) }
                            : i === SAMPLE.questions.findIndex((q) => q.some(Boolean))
                              ? // Opens its own room first, so its row starts
                                // close under "Aihe 1" (owner, 2026-11-15).
                                { sq: at, text: s.named.replace("{n}", String(qs[at])), room: seg(p2, 0.62, 0.74), wraps: true, draw: seg(p2, 0.72, 0.86), words: seg(p2, 0.82, 1) }
                              : null;
                          return (
                            <Fragment key={i}>
                              {/* "⋮" before the last row, "Aihe 101" (owner, 2026-11-15). */}
                              {i > 0 && i === SAMPLE.questions.length - 1 && <li className="text-muted">⋮</li>}
                              <li>
                                {/* Labels like the long tail's: plain black text over
                                    their square, a thin grey line dropping
                                    to touch it, no arrows (owner, 2026-11-15; plain text, 2026-11-16). */}
                                {label && (
                                  // Taller on phones for the long label, whose words wrap to two lines there.
                                  <div className={`relative ${label.wraps ? "h-[calc(var(--room)*3.4rem)]" : "h-[calc(var(--room)*2.25rem)]"} sm:h-[calc(var(--room)*2.25rem)]`} style={{ "--room": label.room } as CSSProperties}>
                                    <span
                                      className="absolute bottom-[0.9rem] right-0 pl-2 leading-snug text-ink sm:right-auto sm:whitespace-nowrap"
                                      style={{ left: `calc(${label.sq} * (1.25rem + 3px) + 0.625rem - 0.5rem)`, opacity: label.words }}
                                    >
                                      {label.text}
                                    </span>
                                    <span
                                      className="absolute bottom-0 h-[0.75rem] w-px origin-top bg-[#9a9a9a]"
                                      style={{ left: `calc(${label.sq} * (1.25rem + 3px) + 0.625rem)`, transform: `scaleY(${label.draw})` }}
                                    />
                                  </div>
                                )}
                                {/* The squares and the topic on one row (owner, 2026-11-15). */}
                                <div className="flex items-center gap-[3px]">
                                  {qs.map((h, j) => {
                                    const ink = h > 0 && p2 >= 0.3 + (++k / hits) * 0.3;
                                    return (
                                      <span
                                        key={j}
                                        className={`flex h-5 w-5 items-center justify-center text-[0.7em] font-bold tabular-nums transition-colors duration-150 motion-reduce:transition-none ${ink ? "bg-ink text-white" : "bg-[#bdbdbd] text-transparent"}`}
                                      >
                                        {h || ""}
                                      </span>
                                    );
                                  })}
                                  <span className="ml-3">{s.questions[i]}</span>
                                  <span className="ml-auto tabular-nums">
                                    {qs.filter(Boolean).length}/{qs.length}
                                  </span>
                                </div>
                              </li>
                            </Fragment>
                          );
                        })}
                      </ul>
                    </div>
                </figure>
              </div>
              </>
            );
          }}
        </Pinned>
        {/* The free conversation again once the reader has seen the
            prices and the report (owner, 2026-11-15). */}
        <BookButton offer={c.visibility} />
      </section>
    </>
  );
};

/* The weekly example's hold in screen heights: its bars draw, then its
   squares and labels (was 2.5 with the steps, the box's rise and its
   opening; the body alone had 1.15). */
const WEEKLY_HOLD = 1.2;

/* The next step's hold in screen heights while its header fills black
   (owner, 2026-11-16; the label filled before, now it is black at once). */
const NEXT_HOLD = 0.7;

/* The offer's hold in screen heights, the long tail's length. */
const OFFER_HOLD = 0.7;
/* How far into the offer's hold the nav link may stop, and when its label
   fills (was 0.1–0.85; later so the link lands on a grey label, 2026-11-16). */
const OFFER_LAND = 0.3;
const OFFER_FILL = [0.35, 0.9] as const;

/* A grey caps label whose ink fills in from its right end to its left as
   `f` runs 0 to 1. */
/* A header that starts grey and turns black from its right end to its
   left as `f` runs 0 to 1, like FillCaps (owner, 2026-11-16). */
const FillH2 = ({ f, children }: { f: number; children: ReactNode }) => (
  <h2 className="relative font-display text-[1.75em] font-bold leading-[1.15] sm:text-[2.1em]">
    <span className="text-muted">{children}</span>
    <span aria-hidden className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${(1 - f) * 100}%)` }}>
      {children}
    </span>
  </h2>
);

const FillCaps = ({ f, children }: { f: number; children: ReactNode }) => (
  <span className="relative inline-block">
    <Caps>{children}</Caps>
    <span aria-hidden className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${(1 - f) * 100}%)` }}>
      <Caps className="!text-ink">{children}</Caps>
    </span>
  </span>
);

/* The free conversation's button under the next step's topics; the dark
   offer block, its question and urgency line, the phone link and the free
   industry review's price row were dropped from the home page (owner,
   2026-11-14). */
const BookButton = ({ offer }: { offer: Pick<OfferCopy, "request"> }) => (
  <div className="mt-6 sm:mt-12">
    <a href={BOOKING} target="_blank" rel="noopener noreferrer" className="inline-block bg-ink px-5 py-3 font-bold text-white hover:bg-ink/90">
      {offer.request?.label}&nbsp;→
    </a>
  </div>
);

/* The AI-visibility service on the home page, under the first screen: it
   replaced Palvelut, Muut palvelut and the separate service page (owner,
   2026-11-13). One short line per block and wide gaps (owner, 2026-11-12). */
const VisibilitySection = ({ c }: { c: Copy }) => {
  const v = c.visibility;
  return (
    <Band id="palvelut" className="pb-24 sm:pb-32">
      {/* Text centred like the first screen (owner, 2026-11-13). */}
      <div className="mx-auto max-w-[40rem] text-center">
      <Measured c={c} />

      <section className={SECTION_GAP}>
        {/* The header, then the first call's three topics under a quiet
            label spaced like the first screen's "Referenssit": 3.5 rem
            above, 1.25 rem below (owner, 2026-11-14; the label "Seuraava
            askel" and the body line were dropped). Held like the two
            sections above while the label turns black from right to left
            (owner, 2026-11-15). */}
        <Pinned length={NEXT_HOLD}>
          {(p) => (
            <>
              <FillH2 f={seg(p, 0.1, 0.85)}>{v.next.lead}</FillH2>
              <div className="mt-4 mb-5 sm:mt-14">
                {/* Black, no fill (owner, 2026-11-16). */}
                <Caps className="!text-ink">{v.next.body}</Caps>
              </div>
              <B3Steps items={v.next.steps} />
              <BookButton offer={v} />
            </>
          )}
        </Pinned>
      </section>

      <Sample c={c} />
      </div>
    </Band>
  );
};

const B3Case = ({ c }: { c: Copy }) => {
  const cs = c.caseStudy;
  const client = c.clients.find((cl) => cl.findings);
  // The service this case proves leads the line above the title (owner, 2026-11-11).
  const service = c.moreServices.find((s) => s.case);
  return (
    <article className="max-w-[40rem] pt-12 pb-8">
      {client && (
        <p className="text-muted">
          {service && <>{service.title} · </>}
          {client.name} · <span className="tabular-nums">{client.year}</span>
        </p>
      )}
      <h1 className="mt-2 font-display text-[2.1em] font-bold leading-[1.15]">{cs.title}</h1>
      {cs.summary && <p className="mt-4 text-[1.15em] leading-snug text-muted">{cs.summary}</p>}

      <PageH2>{cs.situation.heading}</PageH2>
      {cs.situation.text ? <Prose text={cs.situation.text} /> : <Pending label={cs.pendingLabel} text={cs.situation.pending} />}

      <PageH2>{cs.solution.heading}</PageH2>
      {cs.solution.text ? <Prose text={cs.solution.text} /> : <Pending label={cs.pendingLabel} text={cs.solution.pending ?? ""} />}

      <PageH2>{cs.changed.heading}</PageH2>
      {cs.changed.text ? <Prose text={cs.changed.text} /> : <Pending label={cs.pendingLabel} text={cs.changed.pending} />}

      <PageH2>{cs.quote.heading}</PageH2>
      <Pending label={cs.pendingLabel} text={cs.quote.pending} />

      <Offer c={c} offer={cs} />
    </article>
  );
};

const VariantB3 = ({ c, lang }: { c: Copy; lang: Lang }) => {
  const { page, go } = usePage();
  return (
    <main className="mx-auto w-full max-w-[56rem] px-5 pb-32 sm:px-8">
      <B3Header c={c} lang={lang} page={page} go={go} />
      {page === "home" && <B3Home c={c} go={go} />}
      {page === "background" && <B3Background c={c} />}
      {page === "case" && <B3Case c={c} />}
      <Footer c={c} places />
    </main>
  );
};

export const HomepageVariant = ({ variant, lang }: { variant: string; lang: Lang }) => {
  const c = COPY[lang];
  return variant === "B3" ? <VariantB3 c={c} lang={lang} /> : null;
};
