export const HelloSection = () => {
  return (
    <section className="min-h-screen w-full flex flex-col text-vainamoinen -mt-[78px] pt-[78px]">
      <div className="flex-1 flex flex-col justify-end pb-8">
        <div className="max-w-4xl mx-auto w-full px-6">
          <div className="flex justify-center pb-8">
            <img
              src="/bigfoot.webp"
              alt="Sassosa Consulting"
              className="h-48 sm:h-64 md:h-80 lg:h-96 w-auto"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-google-sans-flex max-w-4xl text-vainamoinen/60">
            Helping companies{" "}
            <span className="text-vainamoinen">find</span> and{" "}
            <span className="text-vainamoinen">capitalize on</span> opportunities
            to <span className="text-vainamoinen">leverage AI.</span>
          </h1>
          <p className="pt-8 text-base font-ibm-plex-mono text-vainamoinen/70 max-w-3xl">
            Call{" "}
            <a href="tel:+358415242441" className="underline hover:opacity-80">
              +358 41 524 2441
            </a>{" "}
            or scroll down to learn about our approach.
          </p>
          <div className="pt-10">
            <svg
              width="24"
              height="40"
              viewBox="0 0 24 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="-ml-4 w-10 h-16"
            >
              <path
                d="M12 2V38M12 38L15 35M12 38L9 35"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeLinecap="square"
                strokeLinejoin="miter"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
