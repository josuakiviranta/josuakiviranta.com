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
            In summer 2016 when the American presidential election campaigns
            were in its main phase between the Democrats and Republicans I
            noticed strange behaviour in the Ilta-Sanomat news page “most readed
            articles”-list. I noticed that all news articles that were talking
            negatively about Russia or Donald Trump were falling very fast while
            at the same time garbage news were rising equally fast. For me it
            seemed that some rogue players were deliberately trying to affect
            what Finnish people read on this site.
            <br />
            <br />
            At the same time I was reading the book Thinking Fast and Slow by
            Nobel laureate Daniel Kahneman and one of the key findings of this
            book is the notion of WYSIATI: “What you see is all there is”. This
            struck me hard especially when I linked the suspicious behaviour of
            the news articles in the “most readed”-list to this very same
            notion. If the people won’t see the negative things that Russia and
            Donald Trump is doing they don’t get concerned about those things.
            <br />
            <br />
            The last proof for me that something big was happening was the
            release of Cambridge Analytica’s presentation of{" "}
            <a
              href="https://www.youtube.com/watch?v=n8Dd5aVXLCc"
              className="underline hover:opacity-75"
            >
              “The Power of Big Data and Psychographics”
            </a>{" "}
            at Concordia Summit in September 2016. In this presentation
            Cambridge Analytica’s spokesperson Alexander Nix plainly explains
            how they are manipulating election behaviour based on big data they
            are gathering from American people. I thought that this was
            outrageously dangerous and surely just a tip of the iceberg. If the
            manipulation campaigns were so easy and cheap to do in the States
            then surely there are huge on going manipulation campaigns all over
            the world.
            <br />
            <br />
            Ok, back to the happenings in Finland in 2016. First I told my
            father about my suspicions of news article manipulation, who of
            course didn’t believe me… Luckily after a few days, his curiosity
            won and he tried what would happen if he would select a specific
            news article and open it multiple times in a browser with incognito
            mode on. The finding was striking. When he selected an article that
            possessed a rank of 70 in the “most readed”-list, he was able to
            raise its ranking from 70 to 50 in 30 minutes just by manually
            opening and closing it.
            <br />
            <br />
            After this finding I started to build two scrapers that would scrape
            all top 100 rankings from the “most readed”-list every 10 minutes on
            Ilta-Sanomat and Helsingin-Sanomat news web pages. I let the
            scrapers run for one year and my hope was that from the scraped data
            I could pinpoint a manipulation activity of any news article. My
            assumption was that I could see the manipulation activity if some
            specific and newly added news article would drop faster than on
            average on the “most readed”-list while other news articles were
            rising on top of it. The boundary condition for the articles of
            interest was that those a should start their journey from top 5 most
            readed news in the “most readed“-list.
            <br />
            <br />
            The key finding from my analysis was that surprisingly many articles
            were dropping fast. These articles didn’t only contain the stories
            of Russia or Donald Trump but there were many other articles
            behaving the same way as well. These suspicious articles contained
            for example negative stories about Facebook and Google’s data
            gathering among others. However, there were also some more ordinary
            news dropping at almost the same rate so in the end I concluded that
            this is not enough proof to show that news article manipulation was
            really happening.
            <br />
            <br />
            Next my second way to prove this vulnerability was to create my own
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
            vulnerability to the Sanoma Media’s and Alma Media’s top management.
            These are the two biggest news sources in Finland and both of those
            have this same vulnerability in their news web pages. I got answers
            from both media houses and they said that this issue will be
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
