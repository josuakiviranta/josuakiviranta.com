import { BooksSection } from "../components/BooksSection";
import { ContactSection } from "../components/ContactSection";
import Head from "next/head";
import { HelloSection } from "../components/HelloSection";
import type { NextPage } from "next";
import { ProjectsSection } from "../components/ProjectsSection";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Josua A. Kiviranta</title>
        <meta name="description" content="Project page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-full text-slate-300 flex flex-col">
        <ProjectsSection />
        <HelloSection />
        <ProjectsSection />
        <BooksSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Home;
