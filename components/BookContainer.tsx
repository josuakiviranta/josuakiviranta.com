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

export const BookContainer = (props: ProjectProps) => {
  return (
    <div className="flex flex-col w-fit">
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
      <div className="bg-gradient-to-bl from-[#fde68a] to-[#f59f0b] rounded-lg  w-fit p-4 mb-8 flex justify-center items-center">
        <img
          className="rounded sm:rounded-lg max-h-full shadow-lg shadow-yellow-900 flex h-80 w-52"
          alt=""
          src={props.projectImage}
        />
      </div>
    </div>
  );
};
