import { BookContainer } from "./BookContainer";
import { Section } from "./Section";

export const BooksSection = () => {
  return (
    <Section>
      <div className="max-w-screen-md m-auto">
        <h3 className="mb-4 font-semibold text-white text-3xl">
          Books and journals that resonate
        </h3>
        <div className="grid lg:grid-cols-[2fr_1fr] grid-cols-1 grid-rows-1">
          <BookContainer
            header="Thinking, Fast and Slow"
            description="Daniel Kahneman, 2011"
            projectImage="/thinking-fast-and-slow.jpg"
          />
          <BookContainer
            header="The Experience Machine"
            description="Andy Clark, 2023"
            projectImage="/the-experience-machine.jpeg"
          />
          <BookContainer
            header="Surely You're Joking, Mr. Feynman!"
            description="Ralph Leighton and Richard Feynman, 1985"
            projectImage="/feynman.jpg"
          />
          <BookContainer
            header="Linked: The New Science Of Networks"
            description="Albert-László Barabási, 2002"
            projectImage="/linked.jpg"
          />
          <BookContainer
            header="The Man Who Mistook His Wife for a Hat"
            description="Oliver Sacks, 1985"
            projectImage="/hat.jpg"
          />
          <BookContainer
            header="The Economist"
            description="1843"
            projectImage="/economist.jpg"
          />
        </div>
      </div>
    </Section>
  );
};
