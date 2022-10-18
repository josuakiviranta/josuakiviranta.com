import { LinkButton } from "./LinkButton";
import { Section } from "./Section";

export const ContactSection = () => {
  return (
    <Section>
      <div className="max-w-screen-md m-auto">
        <h3 className="mb-4 font-medium text-white text-3xl">Contact</h3>
        <LinkButton
          link="https://www.linkedin.com/in/josuakiviranta/"
          text="LinkedIn"
        />
      </div>
    </Section>
  );
};
