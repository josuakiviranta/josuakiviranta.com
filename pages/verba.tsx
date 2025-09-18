import { NavBar } from "../components/NavBar";
import { ProjectContainer } from "../components/ProjectContainer";
import { Section } from "../components/Section";

export default function SoteDuunit() {
  return (
    <div className="w-screen h-full text-slate-300 flex flex-col">
      <NavBar />
      <Section>
        <div className="max-w-screen-md m-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase mb-8">
            Idea behind Verba
          </h2>
          <p className="mb-16">
            In learning the key factor is motivation. To quote Plutarch the
            philosopher, education is cultivating the flame, not filling a
            vessel. If someone is truly motivated she will learn fast.
            <br />
            <br />
            With Verba you can learn languages while watching YouTube videos.
            You can train sentences from the videos as well as stop and
            translate subtitles to your own language when you don&apos;t
            understand something in the video.
          </p>
          <ProjectContainer
            header="Verba"
            description="Vocabulary learning application. Watch youtube and learn languages."
            website="https://www.verba.world/"
            projectImage="/verba.jpg"
          />
        </div>
      </Section>
    </div>
  );
}
