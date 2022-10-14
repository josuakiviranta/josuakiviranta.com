import Link from "next/link";
import { Section } from "../components/Section";

export default function SoteDuunit() {
  return (
    <div className="w-screen h-full text-slate-300 flex flex-col">
      <Section>
        <div className="max-w-screen-md m-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase mb-8">
            Story behind the Soteduunit
          </h2>
          <p className="mb-5">
            I’m a map enthusiast and I have always thought that those are great
            ways to present information. I also believe that map interfaces are
            key factors for Airbnb’s, Uber’s and Hoodmap’s success. These were
            also my reasons to build a demo for job finding platform with a map
            interface
            <br />
            <br />
            The usual job searching websites (e.g LinkedIn, Duunitori) are list
            and text search based searching platforms which makes those tedious
            to use. Furthermore, it takes even more work to find out where the
            exact location of the workplace will be. (I personally would still
            very much like to be at the working place even in the era of remote
            work). Also the company’s location can tell a lot about the company
            itself. For example, a company that is near the city centre is
            probably more successful than some that is in the suburbs area.
            <br />
            <br />
            In the long run it would also have been nice to have a map based
            global job finding platform because of the soaring number of remote
            jobs. Currently, if I want to find a job for example from Berlin, it
            requires quite a lot of work to do. However, I believe that with a
            map based interface this job could be made much easier and pleasant.
            <br />
            <br />
            About the project itself.
            <br /> At the same time my brother, a fresh medical doctor, was also
            considering jobs and was frustrated how bad the current job
            searching platforms were. I needed some target group for my platform
            demo and we agreed with my brother to focus first on Finnish
            healthcare and social welfare organisations.
            <br />
            <br />
            Discussing with the administration of HUS and certain other health
            organizations, we managed to get a lot of interest for this project,
            but then three big obstacles became obvious. Firstly, we realised
            that Finnish healthcare and social care organisations are very
            bureaucratic and slow on any decisions they make. Secondly, their
            job postings were in highly unstructured format, which lacked a way
            to easily perform API integrations for their job posts. Finally, my
            brother got a very lucrative offer to be a school doctor and no
            longer had time to contact various healthcare and social care
            organisations. (As a medical professional he had brought a lot of
            credibility to our project.)
            <br />
            <br />
            After these events I pivoted the project towards startups that I
            knew would be more agile and easier for me to contact. You can read
            the idea of{" "}
            <Link href="/pssst" className="underline hover:opacity-75">
              Pssst! here.
            </Link>
          </p>
        </div>
      </Section>
    </div>
  );
}
