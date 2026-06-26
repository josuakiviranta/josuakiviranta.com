export const HelloSection = () => {
  return (
    <section className="min-h-screen w-full flex flex-col text-vainamoinen -mt-[78px] pt-[78px]">
      <div className="flex-1 flex flex-col justify-end pb-8">
        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="flex justify-center pb-8">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="h-48 sm:h-64 md:h-80 lg:h-96 w-auto"
              aria-label="Logo"
            >
              {/* bottom pyramid — point up at the waist */}
              <path d="M 100 100 L 40 140 L 100 170 Z" fill="#4d5e3c" />
              <path d="M 100 100 L 160 140 L 100 170 Z" fill="#344128" />
              {/* top inverted pyramid — square base cap + side faces */}
              <path d="M 100 90 L 100 100 L 40 60 Z" fill="#4d5e3c" />
              <path d="M 100 90 L 100 100 L 160 60 Z" fill="#344128" />
              <path d="M 100 30 L 40 60 L 100 90 L 160 60 Z" fill="#5c6e49" />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl leading-tight font-google-sans-flex w-full text-center text-vainamoinen lg:whitespace-nowrap">
            Your partner for AI business and software.
          </h1>
          <div className="pt-8 flex justify-center">
            <a
              href="https://calendar.app.google/HQd53sZDXcfrPLnt9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-google-sans-flex tracking-wide text-base rounded-full bg-vainamoinen text-[#F4EDDD] px-6 py-3 transition-colors hover:bg-vainamoinen/90 cursor-pointer"
            >
              Meet & talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
