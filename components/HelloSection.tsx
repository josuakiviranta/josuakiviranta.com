import { Section } from "./Section";

export const HelloSection = () => {
  return (
    <Section>
      <div className="max-w-screen-md m-auto">
        <h3 className="mb-4 font-medium text-white text-2xl">
          Hello stranger 👋, <br />
          nice to have you here.
        </h3>
        <p className="mb-5">
          I&apos;m Josua - a product builder and a problem solver. When I&apos;m
          not doing projects, you&apos;ll find me doing cross-country skiing,
          following too many news sources or driving a camper van somewhere in
          Northern Europe. I&apos;m always looking for new meaningful projects
          with enthusiastic people. If you have an interesting project or you
          just feel like saying hi, don&apos;t hesitate to contact me.
        </p>
      </div>
    </Section>
  );
};
