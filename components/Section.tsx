/* Numbered sections, in the manner of a LaTeX \section. The nav reads the
   same list, so numbers in the margin and in the headings always agree. */
export const SECTIONS = [
  { id: "currently", label: "Currently" },
  { id: "background", label: "Background" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = typeof SECTIONS[number]["id"];

export const sectionNumber = (id: SectionId) =>
  SECTIONS.findIndex((s) => s.id === id) + 1;

export const SectionHeading = ({ id }: { id: SectionId }) => (
  <h2 className="mt-14 mb-4 font-display text-[1.45em] font-bold leading-tight sm:mt-16">
    <span className="mr-[0.75em] tabular-nums">{sectionNumber(id)}</span>
    {SECTIONS.find((s) => s.id === id)?.label}
  </h2>
);
