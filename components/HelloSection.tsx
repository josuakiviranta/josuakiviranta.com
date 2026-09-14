import type { ReactNode } from "react";

/**
 * Hero — dossier (wayfinder brand-dossier map, 2026-09-11).
 *
 * Spec:
 * - Cool slate palette and contour texture kept from the hero-redesign map.
 * - Name, one factual line, a "Currently" list of engagements, phone number
 *   as the only call to action (2026-09-11: replaced the meeting link).
 * - No story, no photo, no adjectives. The MP block is anonymized (NDA):
 *   no name, party, topic, broadcast, ally, or vote figures.
 * - Staggered entrance, off under prefers-reduced-motion.
 */

const PHONE_DISPLAY = "+358 41 524 2441";
const PHONE_HREF = "tel:+358415242441";

/* Locked cool-slate palette */
const FIELD_CENTER = "#1e242c";
const FIELD_MID = "#101419";
const FIELD_EDGE = "#090b0e";
const LINE = "#7e8894";
const GLOW_OPACITY = 0.3;
const TEXT = "#e8ebef";
const DIM = "rgba(232, 235, 239, 0.48)";

type Engagement = { lead: ReactNode; details?: string[] };

const CURRENTLY: Engagement[] = [
  {
    lead: "For a Finnish MP's 2027 re-election campaign:",
    details: [
      "briefing and comment angles for a live TV debate,",
      "polling-district analysis of where votes were won and lost,",
      "weekly monitoring of a political risk.",
    ],
  },
];

/* Contour texture: radial field, glow, drifting contour splines with edge
   fade, sparse survey dots, fractal grain. Cool slate baked in. */
const ContourTexture = () => (
  <svg
    viewBox="0 0 1440 900"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0 h-full w-full"
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="hero-field" cx="22%" cy="12%" r="85%">
        <stop offset="0%" stopColor={FIELD_CENTER} />
        <stop offset="55%" stopColor={FIELD_MID} />
        <stop offset="100%" stopColor={FIELD_EDGE} />
      </radialGradient>
      <radialGradient id="hero-glow" cx="78%" cy="72%" r="45%">
        <stop offset="0%" stopColor={LINE} stopOpacity={GLOW_OPACITY} />
        <stop offset="100%" stopColor={LINE} stopOpacity="0" />
      </radialGradient>
      <linearGradient id="hero-fade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor={LINE} stopOpacity="0" />
        <stop offset="18%" stopColor={LINE} stopOpacity="1" />
        <stop offset="82%" stopColor={LINE} stopOpacity="1" />
        <stop offset="100%" stopColor={LINE} stopOpacity="0" />
      </linearGradient>
      <linearGradient id="hero-bottom-blend" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={FIELD_EDGE} stopOpacity="0" />
        <stop offset="60%" stopColor={FIELD_EDGE} stopOpacity="0.55" />
        <stop offset="100%" stopColor={FIELD_EDGE} stopOpacity="1" />
      </linearGradient>
      <filter id="hero-grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.9"
          numOctaves="4"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.09" />
        </feComponentTransfer>
        <feComposite operator="over" in2="SourceGraphic" />
      </filter>
    </defs>

    <rect width="1440" height="900" fill="url(#hero-field)" />
    <rect width="1440" height="900" fill="url(#hero-glow)" />

    {/* contour family: same spline nudged down the canvas, opacity decaying from centre */}
    <g fill="none" stroke="url(#hero-fade)" strokeWidth="1">
      <path strokeOpacity="0.05" d="M0 356 C 220 300, 430 420, 700 372 S 1180 292, 1440 368" />
      <path strokeOpacity="0.07" d="M0 392 C 225 334, 435 452, 705 406 S 1185 328, 1440 402" />
      <path strokeOpacity="0.09" d="M0 428 C 230 368, 440 484, 710 440 S 1190 364, 1440 436" />
      <path strokeOpacity="0.12" d="M0 464 C 235 402, 445 516, 715 474 S 1195 400, 1440 470" />
      <path strokeOpacity="0.15" d="M0 500 C 240 436, 450 548, 720 508 S 1200 436, 1440 504" />
      <path strokeOpacity="0.19" d="M0 536 C 245 470, 455 580, 725 542 S 1205 472, 1440 538" />
      <path strokeOpacity="0.23" d="M0 572 C 250 504, 460 612, 730 576 S 1210 508, 1440 572" />
      <path strokeOpacity="0.19" d="M0 608 C 255 538, 465 644, 735 610 S 1215 544, 1440 606" />
      <path strokeOpacity="0.15" d="M0 644 C 260 572, 470 676, 740 644 S 1220 580, 1440 640" />
      <path strokeOpacity="0.12" d="M0 680 C 265 606, 475 708, 745 678 S 1225 616, 1440 674" />
      <path strokeOpacity="0.09" d="M0 716 C 270 640, 480 740, 750 712 S 1230 652, 1440 708" />
      <path strokeOpacity="0.07" d="M0 752 C 275 674, 485 772, 755 746 S 1235 688, 1440 742" />
      <path strokeOpacity="0.05" d="M0 788 C 280 708, 490 804, 760 780 S 1240 724, 1440 776" />
      <path strokeOpacity="0.04" d="M0 824 C 285 742, 495 836, 765 814 S 1245 760, 1440 810" />
    </g>

    {/* sparse survey dots along the ridge */}
    <g fill={LINE}>
      <circle cx="214" cy="452" r="1.6" fillOpacity="0.5" />
      <circle cx="512" cy="560" r="1.3" fillOpacity="0.35" />
      <circle cx="731" cy="576" r="1.8" fillOpacity="0.55" />
      <circle cx="948" cy="512" r="1.2" fillOpacity="0.3" />
      <circle cx="1183" cy="530" r="1.5" fillOpacity="0.45" />
      <circle cx="1329" cy="566" r="1.2" fillOpacity="0.3" />
    </g>

    <rect width="1440" height="900" filter="url(#hero-grain)" opacity="0.5" />
    {/* ease field + grain into the flat page background so the scroll has no seam */}
    <rect y="620" width="1440" height="280" fill="url(#hero-bottom-blend)" />
  </svg>
);

export const HelloSection = () => {
  return (
    <section
      className="relative -mt-[78px] flex min-h-screen w-full flex-col overflow-hidden pt-[78px]"
      style={{ backgroundColor: FIELD_EDGE, color: TEXT }}
    >
      <ContourTexture />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 sm:px-10">
        <div className="flex flex-1 flex-col justify-center py-14">
          <div className="w-full">
            <h1 className="hero-enter hero-d1 font-space-grotesk text-4xl font-light leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
              Josua Kiviranta
            </h1>
            <p
              className="hero-enter hero-d2 mt-3 font-space-grotesk text-lg font-light tracking-[-0.01em] sm:text-xl"
              style={{ color: DIM }}
            >
              Advisor and engineer. Florence - Helsinki.
            </p>

            <div id="currently" className="hero-enter hero-d3 mt-14 scroll-mt-24">
              <p className="font-ibm-plex-mono text-xs uppercase tracking-[0.2em]" style={{ color: LINE }}>
                Currently
              </p>
              <ul className="mt-4 max-w-2xl space-y-4 font-space-grotesk text-base font-light leading-relaxed sm:text-lg">
                {CURRENTLY.map((e, i) => (
                  <li key={i} className="flex gap-4">
                    <span aria-hidden="true" style={{ color: LINE }}>
                      —
                    </span>
                    <span>
                      <span>{e.lead}</span>
                      {e.details && (
                        <span className="mt-1 block pl-0" style={{ color: DIM }}>
                          {e.details.map((d, j) => (
                            <span key={j} className="block">
                              {d}
                            </span>
                          ))}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hero-enter hero-d4 mt-12">
              <a
                href={PHONE_HREF}
                className="hero-textlink inline-flex items-baseline gap-2 font-space-grotesk text-sm font-light tracking-wide"
              >
                <span className="hero-textlink-label">{PHONE_DISPLAY}</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes heroEnter {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-enter {
          opacity: 0;
          animation: heroEnter 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .hero-d1 {
          animation-delay: 0.15s;
        }
        .hero-d2 {
          animation-delay: 0.25s;
        }
        .hero-d3 {
          animation-delay: 0.4s;
        }
        .hero-d4 {
          animation-delay: 0.55s;
        }
        .hero-textlink {
          color: #e8ebef;
        }
        .hero-textlink-label {
          border-bottom: 1px solid transparent;
          transition: border-color 0.3s ease;
          padding-bottom: 2px;
        }
        .hero-textlink:hover .hero-textlink-label {
          border-bottom-color: rgba(232, 235, 239, 0.55);
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-enter {
            opacity: 1;
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};
