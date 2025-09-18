import { NavBar } from "../components/NavBar";
import { ProjectContainer } from "../components/ProjectContainer";
import { Section } from "../components/Section";

export default function socialSynapse() {
  return (
    <div className="w-screen h-full text-slate-300 flex flex-col">
      <NavBar />
      <Section>
        <div className="max-w-screen-md m-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase mb-8">
            Social Synapse — Connect Through Shared Thoughts
          </h2>
          <p className="mb-8">
            During my time living at{" "}
            <a
              className="text-[#f59f0b] underline"
              href="https://nolistudios.com/en"
            >
              Noli Studios
            </a>{" "}
            , an inspiring co-living space where community matters, I noticed a
            challenge: it can still be difficult to find others nearby who truly
            share your interests or outlook. To address this, I created Social
            Synapse—a tool designed to help people connect more meaningfully
            based on shared thoughts.
            <br />
            <br />
            With Social Synapse, users can write down any thought or link
            content from their favorite media (like articles or videos). These
            entries are converted into semantic “vectors”—mathematical
            representations of meaning—using advanced AI models. This allows the
            system to “understand” your ideas, so you can search for and connect
            with others who think in similar ways.
            <br />
            <br />
            Using technologies like vector databases, semantic search, and
            agent-driven interactions (powered by Anthropic’s Model Context
            Protocol) enables finding and connecting with like-minded people
            intuitively and seamlessly.
          </p>
          <ProjectContainer
            header="Social Synapse"
            description="Tool helping to connect with others sharing your thoughts."
            projectImage="/social-synapse.jpg"
            ideaPage="/socialSynapse"
            website="https://www.socialsynapse.ai/"
          />
        </div>
      </Section>
    </div>
  );
}
