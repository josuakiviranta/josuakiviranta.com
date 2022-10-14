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
            Idea behind the Verba
          </h2>
          <p className="mb-16">
            In learning the key factor is motivation. To quote Plutarch the
            philosopher, education is cultivating the flame, not filling a
            vessel. If someone is truly motivated she will learn fast.
            <br />
            <br />
            The idea in Verba is to make foreign vocabulary learning more
            motivating. You watch YouTube about the subjects you are interested
            in, and Verba shows subtitles captured from speech, highlighting new
            words, i.e. words not found in your word chest . If you have a Verba
            account, you accumulate words familiar to you into your personal
            word chest, and not get bothered about them any more. Only the new
            intriguing words are highlighted for you to memorize, should you
            wish to. Old fashioned underlining textbooks, brought to digital
            age.
          </p>
          <ProjectContainer
            header="Verba (on going development)"
            description="Vocabulary learning application. Watch youtube and learn languages."
            website="https://www.verba.world/"
            projectImage="/verba.png"
          />
        </div>
      </Section>
    </div>
  );
}
