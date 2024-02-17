import { NavBar } from "../components/NavBar";
import { ProjectContainer } from "../components/ProjectContainer";
import { Section } from "../components/Section";

export default function innofactorGptAgents() {
  return (
    <div className="w-screen h-full text-slate-300 flex flex-col">
      <NavBar />
      <Section>
        <div className="max-w-screen-md m-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase mb-8">
            Task optimized gpt agents.
          </h2>
          <p className="mb-8">
            AI assistans are not (yet) magic buttons that do all the work while
            we can go and ask more salary from our bosses. As much as we&apos;d
            love to believe that these digital marvels possess by default an
            otherworldly ability to effortlessly handle all our tasks, the
            reality is far from it. While AI assistants have undoubtedly made
            significant strides in last year, they still require a fair amount
            of tailoring to perform optimally for specific tasks.
            <br />
            <br />
            Innofactor GPT Agents offer a unique approach to enhancing
            productivity by incorporating human involvement in the loop. Unlike
            traditional AI assistants, our platform recognizes the importance of
            deep task-specific tailoring and the need for human oversight. With
            our system, you can supercharge your individual tasks while still
            having the guidance and expertise of a human counterpart. Our
            promise is to provide AI assistants that are not only optimized for
            your specific job tasks but can also be tailored to your needs at
            the source code level. So, addition to generic AI assistants say
            hello to task-optimized, human-inclusive productivity boosters.
          </p>
          <h1 className="text-xl mb-8">
            What is the real difference between generic AI assistants and
            Innofactor GPT Agents?
          </h1>
          <p className="mb-16">
            Usually generic AI assistants use the language model as a reasoning
            engine which talks to itself in order to create a plan what it
            should do and then executes each step in it&apos;s plan. That is
            very good approach in some cases but we have to remember that
            language models are creating their answers based on probabilities.
            If a generic AI assistant is asked to run a process that takes 5
            individual step to run (e.g. fetch data from data base, use some
            tools to analyze the data, etc.), each step is executed correctly
            with some probability. For example let&apos;s say that each step is
            ran correctly with 90% success rate. Then if we count the planning
            phase as a one extra step the probability that the end result is
            correct is 90% ^ 6 = 53%. In other words, we get satisfying answer
            with the little more often than with the toss of the coin.
            <br />
            <br />
            In building our AI assistant platform, we have come to realize that
            deep task-specific tailoring is crucial for its proper functioning.
            Unlike generic AI assistants, our platform focuses on optimizing the
            success rate for each individual step in a longer process. This is
            achieved by reducing the language model&apos;s capability for
            creating generic answers and instead channeling its power to follow
            a specific pre-determined information flow. In fact, we have even
            designed the platform to allow for customization at the source code
            level, enabling users to force the AI assistant to follow their
            desired information flow if necessary. So, even though
            one-size-fits-all solutions are powerful- with our platform, you can
            chat with task-optimized AI assistants that are tailored to your
            specific job needs. It&apos;s like having a personal assistant, but
            with the added benefit of being able to optimize it to your liking
            right down to the source code.
            <br />
            <br />
            Lastly, while we are also developing a powerful generic assistant,
            we view it as just one tool in achieving optimal results. Our model
            involves utilizing this AI assistant as an orchestrator for process
            execution, while relying on task-optimized agents to handle the
            actual task-specific executions. You can think it as a highly
            capable middle manager that is assisting you with a working agents
            in your daily tasks while keeping you in the loop as a top dog.
            <br />
            <br />
          </p>

          <ProjectContainer
            header="Innofactor GPT Agents"
            description="Platform for deep tailored AI agents for spesific work tasks. Project in Innofactor Oy."
            projectImage="/innofactor-gpt-agents-light.png"
          />
        </div>
      </Section>
    </div>
  );
}
