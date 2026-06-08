import { CaseStudiesSection } from "../components/CaseStudiesSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import Head from "next/head";
import { HelloSection } from "../components/HelloSection";
import type { NextPage } from "next";
import { NavBar } from "../components/NavBar";
import { ServicesSection } from "../components/ServicesSection";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Josua A. Kiviranta</title>
        <meta name="description" content="Project page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen min-h-screen text-slate-300 flex flex-col">
        <NavBar />
        <HelloSection />
        <ServicesSection />
        <CaseStudiesSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
