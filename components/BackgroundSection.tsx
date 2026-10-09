import { SectionHeading } from "./Section";

/**
 * Background — dossier list (2026-10-09). Facts only, no verbs, no method,
 * no "we"; the closing item is an attributed quote. The Haka-Wood work is
 * told in Clients, beside its logo.
 */

const ENDORSEMENT = {
  text: "Partner in strategic discussions related to emerging technologies and transformation.",
  source: "Vesa Syrjäkari, former VP, Innofactor",
};

const FACTS = [
  "10 years of software engineering.",
  "Led project teams and delivered AI solutions for ten large enterprises.",
];

export const BackgroundSection = () => {
  return (
    <section id="background" className="doc-anchor">
      <SectionHeading id="background" />
      <ul className="dashes">
        {FACTS.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
        <li>
          “{ENDORSEMENT.text}”
          <span className="block italic">{ENDORSEMENT.source}</span>
        </li>
      </ul>
    </section>
  );
};
