import { LinkButton } from "./LinkButton";

interface ProjectProps {
  header: string;
  description: string;
  projectImage: string;
  storyPage?: string;
  ideaPage?: string;
  website?: string;
  source?: string;
}

export const ProjectContainer = (props: ProjectProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex space-x-2">
        <h3 className="grow mb-2 font-medium text-white text-2xl">
          {props.header}
        </h3>
        {props.ideaPage && <LinkButton link={props.ideaPage} text="Idea" />}
        {props.storyPage && <LinkButton link={props.storyPage} text="Story" />}
        {props.website && <LinkButton link={props.website} text="Website" />}
        {props.source && <LinkButton link={props.source} text="Source" />}
      </div>
      <p className="mb-3">{props.description}</p>
      <div className="bg-gradient-to-bl from-[#fde68a] to-[#f59f0b] rounded-lg p-4 sm:p-8 mb-8 w-full flex justify-center items-center">
        <img
          className="rounded sm:rounded-lg max-h-full shadow-lg shadow-yellow-900 flex"
          alt=""
          src={props.projectImage}
        />
      </div>
    </div>
  );
};
