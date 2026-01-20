import { NavBar } from "../components/NavBar";
import { ProjectContainer } from "../components/ProjectContainer";
import { Section } from "../components/Section";

export default function Verba() {
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
            vessel. If someone is truly motivated she will learn fast. And the
            right kind of content for learning gives the motivation
            <br />
            <br />
            With{" "}
            <a
              className="text-[#f59f0b] underline"
              href="https://www.verba.world/"
            >
              Verba
            </a>{" "}
            you can learn languages while watching any YouTube video. You can
            translate subtitles on the fly to your own language and collect any
            word for later review/training. Or even train the whole vocabulary
            in the video before watching it. The core idea is immerse yourself
            to the language and let your brain to do the hard part
            automatically. (Just like babies do it.)
            <br />
            <br />
            I&apos;m personally using Verba to learn 🇮🇹 Italian and I have to
            say that it&apos;s a pretty fast way to start understanding spoken
            language. Even if it first feels that I can&apos;t understand
            anything in the videos, my brain starts to pick up words and
            sentence structures automatically. My Italian friends are pretty
            impressed how fast I&apos;m learning their language. 🎉
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
