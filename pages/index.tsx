import { BackgroundSection } from "../components/BackgroundSection";
import { ClientsSection } from "../components/ClientsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import Head from "next/head";
import { HelloSection } from "../components/HelloSection";
import type { NextPage } from "next";
import { NavBar } from "../components/NavBar";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Josua Kiviranta — Advisor and engineer, Florence</title>
        <meta
          name="description"
          content="Josua Kiviranta. Advisor and engineer in Pontassieve, Florence. Research, briefings and AI work for Finnish and Italian clients."
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <main className="w-full min-h-screen text-slate-300 flex flex-col">
        <NavBar />
        <HelloSection />
        <ClientsSection />
        <BackgroundSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
