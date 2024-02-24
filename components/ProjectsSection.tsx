import { ProjectContainer } from "./ProjectContainer";
import { Section } from "./Section";

export const ProjectsSection = () => {
  return (
    <Section>
      <div className="max-w-screen-md m-auto">
        <h3 className="mb-4 font-semibold text-white text-3xl">Projects</h3>
        <div className="hidden lg:block">
          <ProjectContainer
            header="Innofactor GPT Agents"
            description="Platform for optimized AI agents for spesific work tasks. Leading the project in Innofactor Oy."
            projectImage="/innofactor-gpt-agents-black.png"
            ideaPage="/innofactorGptAgents"
            website="https://ai.innofactor.com/"
          />
        </div>
        <ProjectContainer
          header="Verba"
          description="Vocabulary learning application. Watch youtube and learn languages."
          website="https://www.verba.world/"
          projectImage="/verba.png"
          ideaPage="/verba"
        />
        <ProjectContainer
          header="Pssst!"
          description="Crowd-sourced headhunting - Recruitment platform with a map and the ability for creating references."
          website="https://www.pssst.work"
          projectImage="/pssst-cover.png"
          ideaPage="/pssst"
        />
        <div className="hidden lg:block">
          <ProjectContainer
            header="Soteduunit"
            description="Demo for Finnish healthcare and social welfare organizations."
            website="https://rekry-map.vercel.app/"
            projectImage="/soteduunit-cover.png"
            storyPage="/soteduunit"
          />
        </div>
        <ProjectContainer
          header="Way to influence what millions of people read"
          description="Script for manipulating news items popularity rankings on the online newspaper’s front page. To be clear, I have informed this vulnerability to Finland's newspapers top management and got repsonses. Hope that they have really fixed this issue..."
          source="https://github.com/josuakiviranta/click-script"
          projectImage="/clickscript-cover.png"
          storyPage="/script"
        />
      </div>
    </Section>
  );
};
