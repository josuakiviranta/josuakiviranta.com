import { ProjectContainer } from "./ProjectContainer";
import { Section } from "./Section";

export const ProjectsSection = () => {
  return (
    <Section>
      <div className="max-w-screen-md m-auto">
        <h3 className="mb-4 font-semibold text-white text-3xl">Projects</h3>
        <ProjectContainer
          header="Verba"
          description="Vocabulary learning application. Watch youtube and learn languages."
          website="https://www.verba.world/"
          projectImage="/verba.png"
          ideaPage="/verba"
        />
        <ProjectContainer
          header="Pssst!"
          description="Recruitment platform with a map and the ability for creating references."
          website="https://www.pssst.work"
          projectImage="/pssst-cover.png"
          ideaPage="/pssst"
        />
        {/*
        <ProjectContainer
          header="Soteduunit"
          description="Demo for Finnish healthcare and social welfare organizations."
          website="https://rekry-map.vercel.app/"
          projectImage="/soteduunit-cover.png"
          storyPage="/soteduunit"
  />*/}
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
