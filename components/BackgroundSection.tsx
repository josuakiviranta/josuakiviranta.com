import { SectionHeading } from "./Section";

/**
 * Background — dossier list (wayfinder brand-dossier map, 2026-09-11).
 * Replaces the Services and Case Studies sections. Facts only, no verbs,
 * no method, no "we". The one quote is attributed and sits among the facts;
 * it is the only adjective-bearing line on the page, and it is not ours.
 */
type Line =
  | { kind: "fact"; text: string }
  | { kind: "quote"; text: string; source: string };

const BACKGROUND: Line[] = [
  {
    kind: "quote",
    text: "A useful sparring partner in strategic discussions related to emerging technologies and transformation.",
    source: "Vesa Syrjäkari, former VP, Innofactor",
  },
  {
    kind: "fact",
    text: "3 years building LLM agents and putting them into daily use.",
  },
  {
    kind: "fact",
    text: "10 years of software engineering in Finland. Led project teams and delivered AI solutions for more than ten large enterprises.",
  },
  {
    kind: "fact",
    text: "Haka-Wood, 2026: sawmill maintenance software. Live for end users in two weeks, then six weeks of iteration on live feedback.",
  },
];

export const BackgroundSection = () => {
  return (
    <section id="background" className="doc-anchor">
      <SectionHeading id="background" />
      <ol className="clauses">
        {BACKGROUND.map((line, i) => (
          <li key={i}>
            {line.kind === "fact" ? (
              line.text
            ) : (
              <>
                “{line.text}”
                <span className="mt-0.5 block italic">{line.source}</span>
              </>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};
