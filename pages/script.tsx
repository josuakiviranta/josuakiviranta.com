import { NavBar } from "../components/NavBar";
import { ProjectContainer } from "../components/ProjectContainer";
import { Section } from "../components/Section";

export default function Script() {
  return (
    <div className="w-screen h-full text-slate-300 flex flex-col">
      <NavBar />
      <Section>
        <div className="max-w-screen-md m-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase mb-8">
            Story behind a manipulation script
          </h2>

          <p className="mb-16">
            In summer 2016, when the American presidential election campaigns
            were in its main phase, I noticed strange behaviour in the
            Ilta-Sanomat “most readed articles”-list. All news articles that
            were talking negatively about Russia or Donald Trump were falling
            very fast. These news articles could drop over 30 points in 10-20
            minutes while some nonsense articles took their places. For me it
            seemed that someone was influencing what people in Finland were
            seeing in this specific news media.
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
            dangerous and surely just a tip of the iceberg. If the manipulation
            campaigns were so easy and cheap to do in the States then surely
            there are huge ongoing influence campaigns all over the world.
            <br />
            <br />
            First I told my father about these suspicions of news article
            manipulation, but he of course didn’t believe me… Luckily after a
            few days, his curiosity won and he tried what would happen if he
            would select a specific news article and open it multiple times in a
            browser with incognito mode on. The finding was striking. He was
            alone able to raise a news article’s ranking from 70 to 50 in 30
            minutes just by manually opening and closing it.
            <br />
            <br />
            After this I started to build two scrapers that would scrape every
            10 minutes all top 100 rankings from the “most readed”-list on
            Ilta-Sanomat and Helsingin-Sanomat web pages. I let the scrapers run
            for a year and my hope was that from the scraped data I could
            pinpoint a manipulation activity of any article.
            <br />
            <br />
            However, this task was harder than I had anticipated. It is hard to
            say if some news article is influenced or is there some other reason
            why it’s dropping fast. Therefore I had to invent something else to
            prove my point. Nevertheless, I could find categories that contained
            quite a lot of fast-dropping articles: Politics and Diginews.
            <br />
            <br />
            My second way to prove this vulnerability was to create my own
            manipulation script. The script’s idea is the same as what my father
            had done earlier. Open a specific news article multiple times in a
            browser with incognito mode on. My script can open a specific
            article around 500 times in a minute. With this ability I have
            managed to raise any article from the place of 100 to place of 14
            with only one computer. I believe that with a few more computers it
            would be possible to raise any news article to the first place in
            “most readed”-list. I also assume that in order to gain full control
            of the “most readed”-list I would need around a few dozen computers.
            <br />
            <br />
            Final words. When the war started in Ukraine I told about this
            vulnerability to the Sanoma Media and Alma Media’s top management.
            These are the two biggest media houses in Finland and both of those
            have had this same vulnerability in their news web pages. I got
            answers from both media houses and they said that this issue will be
            notified inside the companies. I hope that by now they have fixed
            this issue.
          </p>
          <ProjectContainer
            header="Way to influence what millions of people read"
            description="Script for manipulating news items popularity rankings on the online newspaper’s front page. To be clear, I have informed this vulnerability to Finland's newspapers top management and got repsonses. Hope that they have really fixed this issue..."
            source="https://github.com/josuakiviranta/click-script"
            projectImage="/clickscript-cover.png"
          />
        </div>
      </Section>
    </div>
  );
}
