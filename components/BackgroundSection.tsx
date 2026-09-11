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
    <section
      id="background"
      className="bg-slate-field-2 text-slate-text scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 py-20 lg:py-28">
        <p className="font-ibm-plex-mono text-xs uppercase tracking-[0.2em] text-slate-base">
          Background
        </p>
        <ul className="mt-4 max-w-2xl space-y-4 font-space-grotesk text-base font-light leading-relaxed sm:text-lg">
          {BACKGROUND.map((line, i) => (
            <li key={i} className="flex gap-4">
              <span aria-hidden="true" className="text-slate-base">
                —
              </span>
              {line.kind === "fact" ? (
                <span>{line.text}</span>
              ) : (
                <span>
                  <span>“{line.text}”</span>
                  <span className="mt-1 block text-sm text-slate-dim sm:text-base">
                    {line.source}
                  </span>
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
