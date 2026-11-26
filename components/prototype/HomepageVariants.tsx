/* PROTOTYPE (2026-11-09): layout B3 ("problem first") for the brand plan.
   Owner's notes: keep the current site's map,
   simplicity and text size. Open at /, /fi or /it (was ?lang=); the
   earlier layouts B1 and B2 and the comparison switches were removed at
   the clean-up (owner, 2026-11-16). */

import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { MAP_ASPECT, MAP_PINS } from "../officeMapLabels";
import { COPY, LANGS, type Copy, type Lang, type OfferCopy } from "./homepageCopy";
import { pageSlug } from "../SiteHead";

const PHONE = { display: "+358 41 524 2441", href: "tel:+358415242441" };
/* The owner's Google Calendar booking page (owner, 2026-11-12). */
const BOOKING = "https://calendar.app.google/vQtX41PcY1mnrfJZ6";

const LangSwitch = ({ lang }: { lang: Lang }) => {
  const router = useRouter();
  return (
    <div className="text-small tracking-[0.08em]">
      {LANGS.map((l, i) => (
        <span key={l}>
          {i > 0 && <span className="mx-1.5 text-muted">·</span>}
          <button
            data-track="lang"
            data-track-place={l}
            // The same page in the other language's address ("/fi", "/fi/privacy",
            // "/fi/eduskuntavaalit-2027"), where the reader is.
            onClick={() => router.replace({ pathname: router.pathname, query: router.query }, pageSlug(l, router.pathname), { locale: l, scroll: false })}
            className={l === lang ? "font-strong" : "text-muted hover:text-ink"}
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
          className="absolute w-px bg-line"
          style={{ left: `${o.x}%`, top: o.down ? `${o.y}%` : `calc(${o.y}% - var(--line))`, height: "var(--line)" }}
        />
        <span
          className="absolute whitespace-nowrap pl-2 type-caps text-ink"
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
          className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-paper bg-ink"
          style={{ left: `${o.x}%`, top: `${o.y}%` }}
        />
      </Fragment>
    ))}
  </>
);
const OfficeMapOutline = ({ c }: { c: Copy }) => (
  <figure className="relative w-full [--line:1.25rem] sm:[--line:2.5rem]" style={{ aspectRatio: `${MAP_ASPECT}` }}>
    <img src="/office-map-outline.png" alt="" className="image-mono absolute inset-0 h-full w-full" />
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
const Footer = ({ c, places, close }: { c: Copy; places?: boolean; close?: boolean }) => (
  <footer className={`${close ? "mt-8" : "mt-20"} border-t border-ink pt-5 text-small text-muted`}>
    {/* One line, the places before the year (owner, 2026-11-15). */}
    <p>Josua Kiviranta · {c.role.replace(/\.$/, "")} · {places && `${placesLine(c)} · `}© 2026</p>
    {/* Its own legal part: the privacy notice and the AI Code of Conduct,
        one PDF in EN, FI and IT built by coc/generate-pdf.sh (owner,
        2026-11-25). */}
    <p className="mt-2 flex flex-wrap gap-x-2">
      <span className="whitespace-nowrap uppercase tracking-[0.12em]">{c.legal}</span>
      <span>·</span>
      {/* The privacy notice's own address in this language (ticket 20). */}
      <Link href="/privacy">
        <a className="whitespace-nowrap underline underline-offset-2 hover:text-ink">{c.privacyLink}</a>
      </Link>
      <span>·</span>
      <a href="/ai-code-of-conduct.pdf" target="_blank" rel="noopener" data-track="code-of-conduct-pdf" className="whitespace-nowrap underline underline-offset-2 hover:text-ink">{c.codeOfConduct}</a>
    </p>
  </footer>
);

/* A full-width band with no hairline (owner, 2026-11-10). Elections 2027,
   Background and the case are their own pages (?page=background,
   ?page=case), linked from nothing since 2026-11-16. */
const Band = ({ children, tight, id, className = "" }: { children: ReactNode; tight?: boolean; id?: string; className?: string }) => (
  <section id={id} className={`${tight ? "py-10" : "py-14"} ${className}`}>{children}</section>
);

const PAGES = ["home", "background", "case", "privacy", "elections"] as const;
/* The pages with their own address (pages/privacy.tsx,
   pages/finnish-elections-2027.tsx). */
type Route = "privacy" | "elections";
type Page = (typeof PAGES)[number];

/* The page shown: the privacy notice has its own address (`route`); the
   unlinked background and case pages are still views of Home chosen by
   ?page=. */
const usePage = (route?: Route) => {
  const router = useRouter();
  const page: Page = route ?? ((["background", "case"] as readonly string[]).includes(router.query.page as string) ? (router.query.page as Page) : "home");
  // Drop what an old address's redirect left in the query (?lang=, ?page=privacy).
  useEffect(() => {
    const { lang, page: p, ...rest } = router.query;
    if (lang !== undefined || (p !== undefined && page !== p)) {
      router.replace({ pathname: router.pathname, query: page === "home" || route ? rest : { ...rest, page } }, undefined, { shallow: true, scroll: false });
    }
  }, [router.isReady]); // eslint-disable-line react-hooks/exhaustive-deps
  const go = (p: Page) => {
    const { page: _drop, ...rest } = router.query;
    if (route) router.push({ pathname: "/", query: p === "home" ? {} : { page: p } });
    else router.replace({ query: p === "home" ? rest : { ...rest, page: p } }, undefined, { shallow: true });
    window.scrollTo(0, 0);
  };
  return { page, go };
};

/* The screen height for holds and thresholds. On touch screens it is read
   again only when the width changes (turning the phone): phone browsers show
   and hide their address bar while scrolling, which changes innerHeight by
   about 80 px and resized every hold under the reader, so the page jumped
   (2026-11-16). */
let screenW = 0;
let screenH = 0;
const screenHeight = () => {
  if (!window.matchMedia("(pointer: coarse)").matches) return window.innerHeight;
  if (window.innerWidth !== screenW) {
    screenW = window.innerWidth;
    screenH = window.innerHeight;
  }
  return screenH;
};

/* Layout effects only run in the browser; the server render skips them. */
const useBrowserLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/* False in the server's HTML and the first browser render, then true. Parts
   drawn only for the eye wait for it, so crawlers, which run no JavaScript,
   read each text once and in its finished state (ticket 20). */
const useMounted = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
};

/* True once the reader has scrolled past most of the first screen. */
const useScrolledPast = (share = 0.6) => {
  const [past, setPast] = useState(false);
  useEffect(() => {
    const update = () => setPast(window.scrollY > share * screenHeight());
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

/* The offer's section's anchor. */
const SERVICES_ID = "palvelut-ja-hinnat";

/* The nav's link to the elections page, counted like the main page's
   link line; underlined on that page itself (owner, 2026-11-25). */
const ElectionsNav = ({ c, lang, current, place, className }: { c: Copy; lang: Lang; current: boolean; place: string; className: string }) => (
  <Link href="/finnish-elections-2027" as={pageSlug(lang, "/finnish-elections-2027")} scroll={false}>
    <a data-track="elections-page" data-track-place={place} aria-current={current ? "page" : undefined} className={`${className} ${current ? "text-ink underline underline-offset-4" : "text-muted hover:text-ink"}`}>
      {c.navElectionsPage}
    </a>
  </Link>
);

const B3Header = ({ c, lang, page, go }: { c: Copy; lang: Lang; page: Page; go: (p: Page) => void }) => {
  // On phones, once scrolled, one compact row: photo, name, languages; the
  // role comes back at the top (owner, 2026-11-14). The nav sits behind a
  // burger button on phones (owner, 2026-11-16).
  const compact = useScrolledPast();
  const phoneHide = compact ? "hidden sm:block" : "block";
  const [menu, setMenu] = useState(false);
  // The compact row keeps the full header's room as a bottom margin, so the
  // page under it does not move up when it shrinks (2026-11-16: the page
  // jumped 38 px, and Chrome's scroll anchoring then moved back under the
  // threshold, so the header flipped between sizes).
  const ref = useRef<HTMLElement>(null);
  const full = useRef(0);
  const [room, setRoom] = useState(0);
  useBrowserLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!compact) {
      full.current = el.offsetHeight;
      setRoom(0);
    } else setRoom(Math.max(0, full.current - el.offsetHeight));
  }, [compact]);
  return (
  /* Sticky while scrolling (owner, 2026-11-13); white so content passes under it.
     `data-b3-header`: Pinned centres held sections in the space below it. */
  <header
    ref={ref}
    data-b3-header
    style={{ marginBottom: room }}
    className={`sticky top-0 z-30 -mx-5 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 bg-paper px-5 sm:-mx-8 sm:px-8 sm:py-6 ${compact ? "py-3" : "py-6"}`}
  >
    <button onClick={() => go("home")} className="flex items-center gap-3 text-left">
      <Photo className={`shrink-0 rounded-full sm:h-11 sm:w-11 sm:text-[0.45em] ${compact ? "h-8 w-8 text-[0.35em]" : "h-11 w-11 text-[0.45em]"}`} />
      <span className="leading-tight">
        <span className="block font-strong">Josua Kiviranta</span>
        <span className={`${phoneHide} text-small text-muted`}>{c.role.replace(/\.$/, "")}</span>
      </span>
    </button>
    <div className="flex items-center gap-6">
      {/* One link, to the elections page (owner, 2026-11-25; was "Palvelut",
          to the offer, 2026-11-16; "Tausta" hidden, its page kept). */}
      <nav className="hidden gap-5 text-nav sm:flex">
        <ElectionsNav c={c} lang={lang} current={page === "elections"} place="nav" className="" />
      </nav>
      {/* On phones the languages move into the menu, so the header keeps
          one row (2026-11-16). */}
      <div className="hidden sm:block">
        <LangSwitch lang={lang} />
      </div>
      <button onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label="Menu" className="-mr-1 p-1 sm:hidden">
        <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
          {menu ? (
            <path d="M5 5 L17 17 M17 5 L5 17" className="stroke-ink" strokeWidth="1.6" />
          ) : (
            <path d="M3 6 H19 M3 11 H19 M3 16 H19" className="stroke-ink" strokeWidth="1.6" />
          )}
        </svg>
      </button>
    </div>
    {menu && (
      <nav className="absolute inset-x-0 top-full border-b border-rule bg-paper px-5 pb-5 pt-2 sm:hidden">
        <ElectionsNav c={c} lang={lang} current={page === "elections"} place="menu" className="block py-2 type-sub" />
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
  <span className={`type-caps text-muted ${className}`}>{children}</span>
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
    <img src={logoClient.logo.src} alt={logoClient.name} style={{ height: "1.5em" }} className="logo-mono w-auto shrink-0" />
  ) : null;
  return (
    <section className="pt-14 align-page">
      <Caps>{c.clientsHeading}</Caps>
      {SHOW_CASE && caseClient ? (
        // Equal side columns keep the divider exactly under the label.
        <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-x-5 sm:gap-x-8">
          <div className="flex justify-end">{logo}</div>
          <span aria-hidden="true" className="h-8 w-px bg-rule" />
          <div className="flex justify-start">
            <button onClick={() => go("case")} className="group text-left">
              <span className="block type-display leading-tight">{caseClient.name}</span>
              <span className="block text-small text-muted">
                <span className="tabular-nums">{caseClient.year}</span> · <span className="group-hover:underline">{c.caseStudy.cardLink}</span>
              </span>
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-5 flex justify-page">{logo}</div>
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
          <div className="flex items-baseline justify-page gap-[0.5em] sm:block">
            <div className="text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</div>
            <div className="type-h3 sm:mt-1">{s.title}</div>
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
      <section className="align-page">
        {/* Bigger (owner, 2026-11-13; was 2.3em). */}
        <h1 className="mx-page max-w-[44rem] type-h1">{c.problem}</h1>
        <p className="mx-page mt-4 max-w-[32rem] text-lead">{c.offer}</p>
        {/* The free conversation in place of the phone link (owner, 2026-11-15). */}
        <a href={BOOKING} target="_blank" rel="noopener noreferrer" data-track="book-call" data-track-place="first-screen" className="btn-primary mt-5">
          {c.visibility.request?.label}&nbsp;→
        </a>
      </section>

      {/* Named, dated proof right under the promise. */}
      <RefSection c={c} go={go} />
    </div>
    <VisibilitySection c={c} />

    {/* No padding under the map, so the footer starts right under it
        (owner, 2026-11-16). */}
    <Band className="!pb-0">
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
// The visit counter's name for a contact link (components/VisitCounter.tsx).
const contactKind = (href?: string) =>
  href?.startsWith("tel:") ? "phone" : href?.startsWith("mailto:") ? "email" : href?.includes("linkedin") ? "linkedin" : "other";

const ContactCentred = ({ c }: { c: Copy }) => {
  const links = c.facts.filter((f) => f.href);
  return (
    <section data-track-section="contact" className="align-page">
      <h2 className="type-h2">{c.contactHeading}</h2>
      <Photo className="mx-page mt-10 aspect-[4/5] w-40" />
      <div className="mt-10 flex flex-col items-page gap-5 sm:flex-row sm:items-start sm:justify-page sm:gap-x-8">
        {links.map((f, i) => (
          <Fragment key={f.label}>
            {i > 0 && <span aria-hidden="true" className="hidden h-8 w-px self-center bg-rule sm:block" />}
            <div className="flex flex-col items-page">
              <Caps>{f.label}</Caps>
              <a className="doc-link mt-1 whitespace-nowrap" href={f.href} data-track="contact" data-track-place={contactKind(f.href)}>
                {f.value}
              </a>
            </div>
          </Fragment>
        ))}
      </div>
      <div className="mx-page mt-12 w-column">
        <OfficeMapOutline c={c} />
      </div>
    </section>
  );
};


/* The privacy notice (/privacy, /fi/privacy, /it/privacy), linked from the footer's legal part;
   short paragraphs led by a bold heading, as on ylonenconsulting.com
   (owner, 2026-11-25). */
const B3Privacy = ({ c }: { c: Copy }) => (
  <article className="max-w-[40rem] space-y-5 pt-12 pb-8 leading-relaxed">
    <h1 className="mb-8 type-title">{c.privacy.title}</h1>
    <p>{c.privacy.intro}</p>
    {c.privacy.sections.map((s) => (
      <p key={s.heading}>
        <strong>{s.heading}.</strong> {s.text}
      </p>
    ))}
    <div className="pt-4">
      <h2 className="mb-2 type-display text-lead">{c.privacy.party.heading}</h2>
      {c.privacy.party.lines.map((l) => <p key={l}>{l}</p>)}
    </div>
  </article>
);

const B3Background = ({ c }: { c: Copy }) => (
  <section className="pt-12 pb-8">
    <h1 className="mb-8 type-title">{c.backgroundHeading}</h1>
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
  <h2 className="mt-12 mb-4 type-sub">{children}</h2>
);

/* The offer block (owner, 2026-11-11): a dark block with the question, a line
   under it, price and length, and two buttons. Price and length show a
   placeholder until they are set. */
const Offer = ({ c, offer, centred }: { c: Copy; offer: OfferCopy; centred?: boolean }) => {
  const email = c.facts.find((f) => f.href?.startsWith("mailto:"));
  return (
    <section className={`mt-14 bg-ink px-6 py-8 text-paper sm:px-10 sm:py-10 ${centred ? "text-center" : ""}`}>
      <p className="type-display text-[1.5em] leading-tight">{offer.cta}</p>
      <p className="mt-2 text-paper/75">{offer.urgency}</p>
      {offer.terms.length > 0 ? (
        <dl className={`mt-6 grid gap-x-6 gap-y-1 ${centred ? "mx-auto w-fit grid-cols-[auto_auto] text-left" : "grid-cols-[auto_1fr]"}`}>
          {offer.terms.map((t) => (
            <div key={t.label} className="contents">
              <dt className="text-paper/60">{t.label}</dt>
              <dd className="whitespace-nowrap font-strong tabular-nums">{t.value}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <p className="mt-6 border border-dashed border-paper/40 px-4 py-3 italic text-paper/60">{offer.termsPending}</p>
      )}
      {offer.assurance && <p className="mt-4 text-paper/75">{offer.assurance}</p>}
      {offer.request ? (
        <div className={`mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 ${centred ? "justify-center" : ""}`}>
          <a href={BOOKING} target="_blank" rel="noopener noreferrer" data-track="book-call" data-track-place="case" className="bg-paper px-5 py-3 font-strong text-ink hover:bg-paper/90">
            {offer.request.label}&nbsp;→
          </a>
          <a href={PHONE.href} className="text-paper/75 underline underline-offset-4 hover:text-paper">
            {offer.callLabel} {PHONE.display}
          </a>
        </div>
      ) : (
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={PHONE.href} className="bg-paper px-5 py-3 font-strong text-ink hover:bg-paper/90">
            {offer.callLabel} {PHONE.display} →
          </a>
          {email && (
            <a href={email.href} className="border border-paper/60 px-5 py-3 hover:border-paper">
              {offer.emailLabel} →
            </a>
          )}
        </div>
      )}
    </section>
  );
};


/* Measured in a Helsinki Round (18–19.11.2026) over the 78 Candidates with
   an own website and at least one talking point. `combined`: mentions per
   Candidate, OpenAI and Claude joined, sorted high to low. */
const MEASURED = {
  combined: [90.36, 70, 58.45, 57, 53.18, 51.64, 51, 43, 39.36, 38.55, 36.55, 31.27, 30.36, 29.09, 22.55, 21.91, 20.73, 18.82, 18, 16.09, 15.82, 14.64, 14.64, 13.55, 13.27, 13, 12.91, 12.82, 12.55, 12.45, 12, 10.64, 10.55, 10.36, 10.18, 10.18, 9.82, 9.55, 9.36, 9.27, 8.82, 8.82, 8.64, 8.36, 8.36, 8.27, 8.18, 8, 7.82, 7.73, 7.55, 7.45, 7.18, 6.73, 6.27, 6, 6, 5.82, 5.82, 5.82, 5.82, 5.73, 4.91, 4.91, 4.82, 4.73, 3.36, 2.82, 2.18, 1.36, 1.27, 1.18, 1.09, 0.91, 0.45, ...Array(3).fill(0)],
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
        // Every column to scale (owner, 2026-11-19), never under 1 px, the
        // height of a never-named column (owner, 2026-11-12); the graph is
        // 96–112 px (h-24, sm:h-28) for 50 units, so 0.5 units ≈ 1 px.
        const bh = Math.max(0.5, (x / max) * h);
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
const PAGE_ANSWERS = 422;
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
    <figure className="text-left text-muted">
      {/* Axis words in black, spelled out; "Harvat" / "Useimmat" dropped (owner, 2026-11-13). */}
      {/* "↑": up means more mentions (owner, 2026-11-13). */}
      {/* Grey like the election example's axis (owner, 2026-11-15; was black). */}
      {/* Grey caps (owner, 2026-11-16; were plain words). */}
      <span className="block type-caps">↑ {m.tail.y}</span>
      <div className="relative mt-1">
        {/* Taller on phones so the two wrapped labels have room (2026-11-14; 17.5 rem since the caps grew, 2026-11-15). */}
        <svg viewBox={`0 0 ${W} ${H}`} className="block h-[17.5rem] w-full sm:h-auto" preserveAspectRatio="none" aria-hidden>
          <defs>
            <pattern id="tail-stripes" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="9" className="stroke-ink" strokeWidth="2.5" />
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
          <path d={line} fill="none" className="stroke-faint" strokeWidth={2} vectorEffect="non-scaling-stroke" />
          <path d={line} fill="none" className="stroke-ink" strokeWidth={2} vectorEffect="non-scaling-stroke" clipPath="url(#tail-reveal)" />
          {labels.map((a) => (
            <path
              key={a.text}
              d={`M${a.tx},${a.low + 3} L${a.tx},${y(a.tx)}`}
              pathLength={1}
              fill="none"
              className="stroke-line"
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
            className="absolute max-w-[55%] pl-2 leading-snug text-ink sm:max-w-[50%]"
            style={{ left: `${(a.tx / W) * 100}%`, top: `${(a.low / H) * 100}%`, transform: "translate(-0.5rem, -100%)", opacity: a.words }}
          >
            {a.text}
          </span>
        ))}
        {dots.map((x) => (
          <span
            key={x}
            className={`absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${x >= clipX - 1 && x <= clipX + clipW + 1 ? "bg-ink" : "bg-faint"}`}
            style={{ left: `${(x / W) * 100}%`, top: `${(y(x) / H) * 100}%` }}
          />
        ))}
      </div>
      {/* Words at both ends (owner, 2026-11-14; was one line on the right). */}
      <div className="flex justify-between border-t border-faint pt-2 type-caps">
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
      const vh = screenHeight();
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
   sentence, the 78 grey columns over "78 ehdokasta" and the squares at 0;
   a stop; then one ink column slides from the least mentioned Candidate
   on the right to the most mentioned on the left. The columns it has
   passed turn a darker grey; the sentence and the squares show the ink
   column's own mentions per 100 answers. No arrows. */
const StudyBody = ({ m, p }: { m: M; p: number }) => {
  const counts = MEASURED.combined;
  const n = counts.length;
  const pos = (n - 1) * (1 - seg(p, 0.15, 0.85));
  const at = Math.round(pos);
  const per100 = (v: number) => (v / PAGE_ANSWERS) * 100;
  const mounted = useMounted();
  // The typical Candidate: the median of all of them.
  const mid = (n - 1) / 2;
  const typical = per100((counts[Math.floor(mid)] + counts[Math.ceil(mid)]) / 2);
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
        <Spread counts={counts} className="h-24 sm:h-28" shade={(i) => (i < at ? "fill-faint" : i === at ? "fill-ink" : "fill-passed")} />
        {/* Grey caps like the long tail's axis words (owner, 2026-11-16). */}
        <div className="mt-1 border-t border-faint pt-2 text-center"><Caps>{m.study.players.replace("{n}", String(n))}</Caps></div>
      </div>
      {/* The ink column waits on the last place through the stop, so the
          sentence always names a place (owner, 2026-11-14). */}
      {/* The server's HTML names place 1, not place 78's "0 kertaa"
          (ticket 20). */}
      <AvgRow m={m} rank={(mounted ? at : 0) + 1} v={per100(counts[mounted ? at : 0])} max={per100(counts[0])}>
        {/* What the slide shows (owner, 2026-11-19): the typical Candidate as
            soon as the ink column reaches the middle place; then, once it
            reaches place 1, how many times the typical. Between the live
            sentence and its squares, "{x} kertaa useammin" first (owner,
            2026-11-26; was under the squares, typical first). Each line opens
            its own room as it fades in, pushing the lines under it down, one
            line spacing apart (owner, 2026-11-26). */}
        <div className="tabular-nums leading-snug">
          <Reveal f={seg(p, 0.86, 0.95)}>
            <p className="pt-2">
              <Bolded text={m.own.first.replace("{x}", String(Math.round(per100(counts[0]) / typical)))} />
            </p>
          </Reveal>
          <Reveal f={seg(mid + 0.5 - pos, 0, 1.5)}>
            <p className="pt-2">
              <Bolded text={m.own.typical.replace("{n}", String(Math.round(typical)))} />
            </p>
          </Reveal>
        </div>
      </AvgRow>
    </figure>
  );
};

/* Its content at `f` (0 to 1) of its height and opacity, so it opens its
   own room as it appears and closes it again when scrolled back. */
const Reveal = ({ f, children }: { f: number; children: ReactNode }) => {
  const inner = useRef<HTMLDivElement>(null);
  const [h, setH] = useState(0);
  useBrowserLayoutEffect(() => {
    const el = inner.current;
    if (!el) return;
    const measure = () => setH(el.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <div className="overflow-hidden" style={{ height: h ? f * h : f ? undefined : 0, opacity: f }}>
      <div ref={inner}>{children}</div>
    </div>
  );
};

/* Text with its **…** spans in bold. */
const Bolded = ({ text }: { text: string }) => (
  <>{text.split(/\*\*(.+?)\*\*/).map((part, i) => (i % 2 ? <b key={i}>{part}</b> : part))}</>
);

/* One ink square per mention in 100 answers (`v`), a fraction filling part
   of a square; the row fills left to right as the ink column slides, up to
   place 1's `max` (owner, 2026-11-19: the gap shows in the row's length;
   was 10 grey squares filled in ink). One sentence over it says the same,
   its number following the animation; no label, count or key (owner,
   2026-11-14). */
const AvgRow = ({ m, rank, v, max, children }: { m: M; rank: number; v: number; max: number; children?: ReactNode }) => {
  const n = Math.round(v);
  const fill: Record<string, string> = { "{rank}": String(rank), "{n}": String(n) };
  return (
    <div className="space-y-3 pt-4 sm:pt-6">
      {/* The body's size like all plain text (owner, 2026-11-16); the place
          and the count bold (owner, 2026-11-15). */}
      {/* The lines under it (`children`) follow at their own spacing. */}
      <div>
        <p className="tabular-nums leading-snug">
          {(n === 0 ? m.own.liveZero : n === 1 ? m.own.liveOne : m.own.live).split(/(\{rank\}|\{n\})/).map((part, i) => (part in fill ? <b key={i}>{fill[part]}</b> : part))}
        </p>
        {children}
      </div>
      {/* 24 px squares as before (owner, 2026-11-19); 12 px on phones so
          place 1's row fits 360 px screens. The row is as wide as place 1's
          ink, its last square cut to the fraction, so place 1's full row
          ends centred (owner, 2026-11-19). */}
      <div className="mx-page flex w-fit gap-[2px] [--sq:12px] sm:gap-[3px] sm:[--sq:24px]">
        {Array.from({ length: Math.ceil(max) }, (_, i) => (
          <span key={i} className="relative h-[var(--sq)]" style={{ width: `calc(var(--sq) * ${Math.min(1, max - i)})` }}>
            <span className="absolute inset-y-0 left-0 bg-ink" style={{ width: `${(Math.min(1, Math.max(0, v - i)) / Math.min(1, max - i)) * 100}%` }} />
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
      <section data-track-section="long-tail">
        <Pinned length={STUDY.curve}>
          {(p) => (
            <>
              {/* The threat as the long-tail section's header (owner, 2026-11-13). */}
              <h2 className="type-h2">{c.visibility.summary}</h2>
              <div className="mt-8">
                <TailCurve m={m} p={Math.min(1, (p * STUDY.curve) / STUDY.curveAnim)} />
              </div>
            </>
          )}
        </Pinned>
      </section>

      {/* Close under the curve (owner, 2026-11-26; was SECTION_GAP): it rises
          under the still curve, then pushes it up and holds centred. */}
      <section data-track-section="election" className="mt-12 sm:mt-16">
        <Pinned length={STUDY.body}>
          {(p) => (
            <>
              {/* Its own header, the size of the others (owner, 2026-11-15;
                  was the title of a box that opened under the curve). */}
              <h2 className="type-h2">{m.study.title}</h2>
              <div className="mt-6 sm:mt-10">
                <StudyBody m={m} p={p} />
              </div>
            </>
          )}
        </Pinned>
      </section>
    </>
  );
};

/* The two held pieces' lengths in screen heights: the curve's hold, its
   timeline within it (done at TAIL_DONE of it) and the still part after it,
   while the election example rises under the curve (owner, 2026-11-26);
   and the election example's slide (StudyBody). */
const STUDY = {
  curve: 0.8,
  curveAnim: 0.7,
  body: 1.5,
} as const;

/* The questions behind `MEASURED.combined`, each asked in 2 wordings, so
   `PAGE_ANSWERS` answers per AI. Both examples show `ASKED`: the election
   example's "{n} kysymystä" and the weekly example's "Näkyvyytesi {n}
   vastauksessa" (owner, 2026-11-15; 2026-11-19: "keep it simple"). */
const ASKED = 211;

/* The weekly example (owner, 2026-11-15: tie it to the election example):
   the rivals are places 1–3 of `MEASURED.combined` and "Sinä" place 24,
   each rounded. `questions`: per square, 0 = not named, n = place among
   the names in the answer; the last row follows a "⋮". */
const SAMPLE = {
  answers: PAGE_ANSWERS,
  top: [90, 70, 58],
  you: { rank: 24, count: 14 },
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
    <li className={`grid grid-cols-[2.2rem_minmax(0,7rem)_1fr_2.5rem] items-center gap-3 px-2 py-1 transition-colors duration-150 motion-reduce:transition-none ${you ? "font-strong" : ""} ${you && grow > 0 ? "bg-rule/50" : ""}`}>
      <span className="tabular-nums text-muted">{rank}.</span>
      <span className="truncate">{name}</span>
      <span className="h-2 bg-faint">
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
      <OfferSection c={c} />

      {/* The weekly example as its own section like the election example,
          the whole report open before its animations start (owner,
          2026-11-15; was a box that rose under the steps and opened). */}
      <section data-track-section="weekly" className={SECTION_GAP}>
        <Pinned length={WEEKLY_HOLD}>
          {(p) => {
            const p1 = seg(p, 0.1, 0.45);
            const p2 = seg(p, 0.55, 0.95);
            let k = 0;
            return (
              <>
              <h2 className="type-h2">{s.label}</h2>
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
                              {/* "⋮" before the last row, "Aihe 211" (owner, 2026-11-15). */}
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
                                      className="absolute bottom-0 h-[0.75rem] w-px origin-top bg-line"
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
                                        className={`flex h-5 w-5 items-center justify-center text-[0.7em] font-strong tabular-nums transition-colors duration-150 motion-reduce:transition-none ${ink ? "bg-ink text-paper" : "bg-faint text-transparent"}`}
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
        {/* What comes with the report, before the button (owner,
            2026-11-17), as far from the report as the button was (owner,
            2026-11-16). */}
        <div className="mt-12 sm:mt-20">
          {/* Black caps over numbered bold lines, like the next step's
              label and topics (owner, 2026-11-17). */}
          <Caps className="block leading-relaxed !text-ink">{s.guide.lead}</Caps>
          <ol className="mt-5 flex flex-col gap-3">
            {s.guide.items.map((it, i) => (
              <li key={it} className="flex items-baseline justify-page gap-[0.5em]">
                <span className="text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <span className="type-h3">{it}</span>
              </li>
            ))}
          </ol>
        </div>
        {/* The free conversation again once the reader has seen the
            prices and the report (owner, 2026-11-15). */}
        <BookButton offer={c.visibility} place="weekly" />
      </section>
    </>
  );
};

/* The offer's steps, held while their label fills: the main page's priced
   steps, or the elections page's own `lead`, `label` and `steps` with
   `below` (its price, the do-it-for-you line and the button) under the
   held piece. */
const OfferSection = ({ c, lead, label, steps, below }: { c: Copy; lead?: string; label?: string; steps?: { title: string; body: string; price?: string }[]; below?: ReactNode }) => {
  const s = c.visibility.sample;
  return (
    <section id={SERVICES_ID} data-track-section="offer" className={SECTION_GAP}>
      <Pinned length={OFFER_HOLD}>
        {(p) => (
          <>
            <h2 className="type-h2">{lead ?? s.weekly.lead}</h2>
            {/* The label turns black from right to left while the steps
                hold (owner, 2026-11-15). */}
            <div className="mt-4 mb-4 sm:mt-14 sm:mb-5">
              <FillCaps f={seg(p, OFFER_FILL[0], OFFER_FILL[1])}>{label ?? s.weekly.label}</FillCaps>
            </div>
            <B3Steps items={steps ?? s.weekly.steps} />
          </>
        )}
      </Pinned>
      {below}
    </section>
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
/* When the offer's label fills (was 0.1–0.85; later, 2026-11-16). */
const OFFER_FILL = [0.35, 0.9] as const;

/* A grey caps label whose ink fills in from its right end to its left as
   `f` runs 0 to 1. */
/* A header that starts grey and turns black from its right end to its
   left as `f` runs 0 to 1, like FillCaps (owner, 2026-11-16). */
const FillH2 = ({ f, children }: { f: number; children: ReactNode }) => {
  const mounted = useMounted();
  return (
    <h2 className="relative type-h2">
      <span className="text-muted">{children}</span>
      {mounted && (
        <span aria-hidden className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${(1 - f) * 100}%)` }}>
          {children}
        </span>
      )}
    </h2>
  );
};

const FillCaps = ({ f, children }: { f: number; children: ReactNode }) => {
  const mounted = useMounted();
  return (
    <span className="relative inline-block">
      <Caps>{children}</Caps>
      {mounted && (
        <span aria-hidden className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${(1 - f) * 100}%)` }}>
          <Caps className="!text-ink">{children}</Caps>
        </span>
      )}
    </span>
  );
};

/* The free conversation's button under the next step's topics; the dark
   offer block, its question and urgency line, the phone link and the free
   industry review's price row were dropped from the home page (owner,
   2026-11-14). */
const BookButton = ({ offer, place }: { offer: Pick<OfferCopy, "request">; place: string }) => (
  <div className="mt-6 sm:mt-12">
    <a href={BOOKING} target="_blank" rel="noopener noreferrer" data-track="book-call" data-track-place={place} className="btn-primary">
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
      <div className="mx-page w-column align-page">
      <Measured c={c} />

      <section data-track-section="next-step" className={SECTION_GAP}>
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
              <BookButton offer={v} place="next-step" />
            </>
          )}
        </Pinned>
      </section>

      <Sample c={c} />
      </div>
    </Band>
  );
};

/* The Eduskuntavaalit 2027 page (ticket 21; the owner's words or approved
   by the owner, 2026-11-25): the first screen with the deadline over the
   question and the owner's answer under it, the most contested theme with
   how many each AI left out, the main page's election example as it is, the candidates'
   offer, independence, then Yhteystiedot. Laid out like Home's sales
   section. */
const B3Elections = ({ c }: { c: Copy }) => {
  // Opened from the main page's link, start at the top at once: the page's
  // smooth scrolling would pass every section on the way up, and the visit
  // counter would count them all as read.
  useBrowserLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, []);
  const e = c.elections;
  const m = c.visibility.measured;
  const h2 = "type-h2";
  return (
    <>
      <div className="flex min-h-[calc(100svh-9rem)] flex-col justify-center py-16">
        <section data-track-section="first-screen" className="align-page">
          {/* The deadline first, for urgency (owner, 2026-11-25). */}
          {/* Two lines on phones, one line split by a dot on wide screens
              (review, 2026-11-25). */}
          <Caps className="block leading-relaxed !text-ink">
            {e.urgency.split(" · ").map((part, i) => (
              <span key={part}>
                {i > 0 && <span className="hidden sm:inline"> · </span>}
                <span className="block sm:inline">{part}</span>
              </span>
            ))}
          </Caps>
          <h1 className="mx-page mt-4 max-w-[44rem] type-h1-long">{e.title}</h1>
          <p className="mx-page mt-5 max-w-[34rem] text-lead leading-snug">{e.answer}</p>
          <a href={BOOKING} target="_blank" rel="noopener noreferrer" data-track="book-call" data-track-place="first-screen" className="btn-primary mt-6">
            {c.visibility.request?.label}&nbsp;→
          </a>
          {/* The name beside the topic as a quiet byline (owner, 2026-11-25;
              the company in place of the header's role, review 2026-11-25). */}
          <p className="mt-4 text-small text-muted">Josua Kiviranta · Sassosa Consulting · {e.topic}</p>
        </section>
      </div>

      <Band className="pb-24 sm:pb-32">
        <div className="mx-page w-column align-page">
          <section data-track-section="question">
            <h2 className={h2}>{e.question.title}</h2>
            {/* The theme and how many each AI left out, the counts as big
                figures out of the theme's candidates; no grey text (owner,
                2026-11-25, picked from three styles). The questions' wording
                stays unshown (owner, 2026-11-25). */}
            <p className="mt-8 leading-snug sm:mt-10">{e.question.theme}</p>
            <p className="mt-3 leading-snug">{e.question.asked}</p>
            <Caps className="mt-10 block !text-ink">{e.question.missedLead}</Caps>
            <div className="mt-4 grid grid-cols-2 gap-6 sm:gap-12">
              {e.question.missed.map((r) => (
                <div key={r.ai}>
                  <p className="type-display leading-none tabular-nums">
                    <span className="text-figure">{r.n}</span>
                    <span className="text-[1.25em]"> / {e.question.of}</span>
                  </p>
                  <p className="mt-2 leading-snug"><b>{r.ai}</b> {r.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* The main page's election example as it is (owner, 2026-11-25). */}
          <section data-track-section="election" className={SECTION_GAP}>
            <Pinned length={STUDY.body}>
              {(p) => (
                <>
                  <h2 className={h2}>{e.measured.title}</h2>
                  <div className="mt-6 sm:mt-10">
                    <StudyBody m={m} p={p} />
                  </div>
                </>
              )}
            </Pinned>
          </section>

          <OfferSection
            c={c}
            lead={e.offer.lead}
            label={e.offer.label}
            steps={e.offer.steps}
            // Only the header, label and steps are held, so the held piece
            // fits the screen (review, 2026-11-25).
            below={
              <>
                <p className="mt-6 tabular-nums font-strong sm:mt-8">{e.offer.price}</p>
                <p className="mx-page mt-4 max-w-[34rem] leading-snug"><KeepPct text={e.offer.extra} /></p>
                <BookButton offer={c.visibility} place="offer" />
              </>
            }
          />

          {/* Closer to the offer, with a quiet label (review, 2026-11-25). */}
          <section data-track-section="independence" className="mt-[6rem] sm:mt-[8rem]">
            <Caps className="mb-4 block">{e.independenceLabel}</Caps>
            <ul className="space-y-2 type-h3 leading-snug">
              {e.independence.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>
        </div>
      </Band>

      <Band className="!pb-0">
        <ContactCentred c={c} />
      </Band>
    </>
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
      <h1 className="mt-2 type-h2">{cs.title}</h1>
      {cs.summary && <p className="mt-4 text-lead leading-snug text-muted">{cs.summary}</p>}

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

const VariantB3 = ({ c, lang, route }: { c: Copy; lang: Lang; route?: Route }) => {
  const { page, go } = usePage(route);
  return (
    <main className="mx-auto w-full w-frame px-5 pb-32 sm:px-8">
      <B3Header c={c} lang={lang} page={page} go={go} />
      {page === "home" && <B3Home c={c} go={go} />}
      {page === "background" && <B3Background c={c} />}
      {page === "case" && <B3Case c={c} />}
      {page === "privacy" && <B3Privacy c={c} />}
      {page === "elections" && <B3Elections c={c} />}
      <Footer c={c} places close={page === "home" || page === "elections"} />
    </main>
  );
};

export const HomepageVariant = ({ variant, lang, route }: { variant: string; lang: Lang; route?: Route }) => {
  const c = COPY[lang];
  return variant === "B3" ? <VariantB3 c={c} lang={lang} route={route} /> : null;
};
