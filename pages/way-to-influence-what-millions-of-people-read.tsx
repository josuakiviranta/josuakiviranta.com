import { NavBar } from "../components/NavBar";
import { ProjectContainer } from "../components/ProjectContainer";
import { Section } from "../components/Section";

export default function WayToInfluenceWhatMillionsOfPeopleRead() {
  return (
    <div className="w-screen h-full text-slate-300 flex flex-col">
      <NavBar />
      <Section>
        <div className="max-w-screen-md m-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase mb-8">
            How to influence what millions of people read in Finland
          </h2>
          <p className="mb-16">
            In summer 2016, when the American presidential election campaigns
            were in its main phase, I noticed strange behaviour in the
            Ilta-Sanomat “most readed articles”-list. All news articles that
            were talking negatively about Russia or Donald Trump were falling
            very fast. These news articles could fell over 30 spots in the
            rankings in 10-20 minutes while filler content rose to take their
            spots. For me it seemed that someone could possibly influence what
            people in Finland were seeing in this specific news media.
            <br />
            <br />
            My suspicions were raised even more when Cambridge Analytica
            released a presentation of{" "}
            <a
              href="https://www.youtube.com/watch?v=n8Dd5aVXLCc"
              className="underline hover:opacity-75"
            >
              “The Power of Big Data and Psychographics”
            </a>{" "}
            at Concordia Summit in September 2016. In this presentation
            Cambridge Analytica’s spokesperson Alexander Nix plainly explains
            how they are manipulating election behaviour based on data they are
            gathering from American people. I thought that this was outrageously
            dangerous and surely just a tip of an iceberg. If the manipulation
            campaigns were so easy and cheap to do in the States then surely
            there are huge ongoing influence campaigns all over the world.
            <br />
            <br />
            First I wondered what would happen if I would select a specific news
            article and open it multiple times in a browser with incognito mode
            on. The finding was striking. I was able to raise a news article’s
            ranking from 70 to 50 in 30 minutes just by manually opening and
            closing it.
            <br />
            <br />
            After this I build scrapers that would scrape every 10 minutes all
            top 100 rankings from the “most readed”-list on Ilta-Sanomat,
            Ilta-Lehti and Helsingin-Sanomat online media web pages. I let the
            scrapers run for two years and my goal was that from the scraped
            data I could pinpoint a manipulation activity of any news media
            site.
            <br />
            <br />
            However, it is hard to say if some news articles are influenced or
            are there some other reason why those are dropping fast. Therefore,
            I decided to build an automatic news article popularity ranking
            manipulation script to proof my point. The script’s idea is the same
            as what I had done earlier. E.g. opening and closing a specific news
            article multiple times in a browser with incognito mode on. However,
            this time the script were opening and closing a specific article
            around 500 times in a minute. With this script, I’ve managed to
            raise any article from the place of 100 or lower to place of 14 with
            only one computer. I believe that with a few more bots running this
            script it would be possible to raise any news article to the first
            place in “most readed”-list and with few more to gain full control
            of the “most readed”-lists in Finland.
            <br />
            <br />
            When the war started in Ukraine 2022 I told about this vulnerability
            to the Sanoma Media and Alma Media’s top management. These are the
            two biggest media houses in Finland and both of those have had this
            same vulnerability in their online media web pages. I got answers
            from both media houses and they said that this issue will be
            notified inside the companies. However, I suspect/fear is that this
            kind of click farming can be too close to online media houses
            business models and therefore those are not too keen to address this
            issue broadly.
          </p>
          <ProjectContainer
            header="Way to influence what millions of people read"
            description="Script for manipulating news items popularity rankings on the online newspaper’s front page. To be clear, I have informed this vulnerability to Finland's newspapers top management and got repsonses. Hope that they have really fixed this issue..."
            source="https://github.com/josuakiviranta/click-script"
            projectImage="/clickscript-cover.jpg"
          />
        </div>
      </Section>
    </div>
  );
}
