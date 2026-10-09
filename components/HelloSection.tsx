import type { ReactNode } from "react";
import { SectionHeading } from "./Section";

/**
 * Letterhead + section 1 (document restyle, 2026-10-09).
 *
 * - Laid out like a letter: small right-aligned sender block (place, phone),
 *   then the name as the document title. Below xl the name sits in the
 *   always-visible top bar instead, so the title is kept for screen readers
 *   only.
 * - "Current work": each engagement is an unnumbered lead line with its
 *   points numbered beneath it. The MP block is anonymized (NDA):
 *   no name, party, topic, broadcast, ally, or vote figures.
 * - No texture, no entrance animation.
 */

const PHONE_DISPLAY = "+358 41 524 2441";
const PHONE_HREF = "tel:+358415242441";
const LOCATION = "Florence – Helsinki";

type Engagement = { lead: ReactNode; details?: string[] };

const CURRENTLY: Engagement[] = [
  {
    lead: "A Finnish MP’s 2027 re-election campaign:",
    details: [
      "Briefing and comment angles for a live TV debate.",
      "Polling-district analysis of where votes were won and lost.",
      "Weekly monitoring of a political risk.",
    ],
  },
];

export const HelloSection = () => {
  return (
    <>
      <header id="top" className="pt-[5.5rem] xl:pt-16">
        <address className="text-right text-[0.88em] not-italic leading-snug">
          <span className="block">{LOCATION}</span>
          <a href={PHONE_HREF} className="doc-link">
            {PHONE_DISPLAY}
          </a>
        </address>

        <h1
          id="title"
          className="sr-only font-display text-[2.4em] font-bold leading-none xl:not-sr-only xl:mt-[2.25rem] xl:block"
        >
          Josua Kiviranta
        </h1>
        <p className="mt-10 text-[1.15em] xl:mt-3">Advisor and engineer.</p>
      </header>

      <section id="currently" className="doc-anchor">
        <SectionHeading id="currently" />
        {CURRENTLY.map((e, i) => (
          <div key={i} className={i > 0 ? "mt-4" : undefined}>
            <p>{e.lead}</p>
            {e.details && (
              <ol className="clauses">
                {e.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ol>
            )}
          </div>
        ))}
      </section>
    </>
  );
};
