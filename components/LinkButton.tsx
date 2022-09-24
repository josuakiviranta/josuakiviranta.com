interface ButtonProps {
  link: string;
  text: string;
}

export const LinkButton = (props: ButtonProps) => {
  return (
    <a
      className="text-indigo-400 hover:text-indigo-500 focus:text-indigo-500"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        type="button"
        className="flex flex-row space-x-1 items-center justify-center rounded-md p-1 px-2 text-white focus:outline focus:outline-yellow-500 relative bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700"
      >
        <span>{props.text}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          width="20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          ></path>
        </svg>
      </button>
    </a>
  );
};
