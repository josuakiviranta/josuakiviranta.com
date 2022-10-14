import { Section } from "../components/Section";

export default function Script() {
  return (
    <div className="w-screen h-full text-slate-300 flex flex-col">
      <Section>
        <div className="max-w-screen-md m-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase mb-8">
            The idea behind Pssst! recruiting platform
          </h2>
          <p className="mb-5">
            The main idea with Pssst!-platform was to help companies to recruit
            new candidates through word-of-mouth marketing and by using
            reference links. A reference link is basically a job post that
            anyone could send to their contact. If the referenced person gets
            hired then the person who referred his or her contact would get a
            bounty of a few thousand euros.
            <br />
            <br />
            Furthermore, these references could be linked together in order to
            make reference link chains. The idea in the reference link chains
            was that people could just pass on the job posts to their contacts
            and create tree-like searching structures in social networks. Last
            and second last participant in the reference chain would have earned
            a reward if the company makes a new hire. For a second last person
            the bounty would have been 500€ and for the last person the bounty
            would have been a few thousand euros.
            <br />
            <br />
            Basically the idea was to upgrade companies’ inside recruitment
            systems.
          </p>
        </div>
      </Section>
    </div>
  );
}