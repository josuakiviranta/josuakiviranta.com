import Head from "next/head";
import Image from "next/image";
import { LinkButton } from "../components/LinkButton";
import type { NextPage } from "next";
import { ProjectContainer } from "../components/ProjectContainer";
import { Section } from "../components/Section";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Josua A. Kiviranta</title>
        <meta name="description" content="Project page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen h-full text-slate-300 flex flex-col">
        <Section>
          <div className="max-w-screen-md m-auto">
            <h1 className="text-white mb-4 text-5xl sm:text-6xl font-extrabold tracking-tight">
              Josua A. Kiviranta
            </h1>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase mb-8">
              Helsinki, Finland
            </h2>
            <div className="w-full flex">
              <Image
                width={300}
                height={400}
                className="rounded-lg"
                src="/profile.jpg"
                alt="Profile picture"
                objectFit="fill"
                layout="fixed"
                quality={100}
              />
            </div>
          </div>
        </Section>
        <Section>
          <div className="max-w-screen-md m-auto">
            <h3 className="mb-4 font-medium text-white text-2xl">
              Hello stranger 👋, <br />
              nice to have you here.
            </h3>
            <p className="mb-5">
              I&apos;m Josua - a product builder and a software engineer. When
              I&apos;m not doing projects, you&apos;ll find me doing
              cross-country skiing, following too many news sources or driving a
              camper van somewhere in Northern Europe. I&apos;m always looking
              for new meaningful projects with enthusiastic people. If you have
              an interesting project or you just feel like saying hi, don&apos;t
              hesitate to contact me.
            </p>
          </div>
        </Section>
        <Section>
          <div className="max-w-screen-md m-auto">
            <h3 className="mb-4 font-semibold text-white text-2xl">Projects</h3>
            <ProjectContainer
              header="Verba (on going development)"
              description="Vocabulary learning application. Watch youtube and learn languages."
              website="https://www.verba.world/"
              projectImage="/verba.png"
            />
            <ProjectContainer
              header="Pssst!"
              description="Recruitment platform with a map and the ability for creating references."
              website="https://www.pssst.work"
              projectImage="/pssst-cover.png"
            />
            <ProjectContainer
              header="Soteduunit"
              description="Demo for Finnish healthcare and social welfare organizations."
              website="https://rekry-map.vercel.app/"
              projectImage="/soteduunit-cover.png"
            />
            <ProjectContainer
              header="Way to influence what millions of people read"
              description="Script for manipulating news items popularity rankings on the online newspaper’s front page. To be clear, I have informed this vulnerability to Finland's newspapers top management and got repsonses. Hope that they have really fixed this issue..."
              source="https://github.com/josuakiviranta/click-script"
              projectImage="/clickscript-cover.png"
            />
          </div>
        </Section>
        <Section>
          <div className="max-w-screen-md m-auto">
            <h3 className="mb-4 font-medium text-white text-2xl">Contact</h3>
            <LinkButton
              link="https://www.linkedin.com/in/josuakiviranta/"
              text="LinkedIn"
            />
          </div>
        </Section>
      </main>
    </div>
  );
};

export default Home;
