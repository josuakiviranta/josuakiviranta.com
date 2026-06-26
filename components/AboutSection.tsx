type Photo = {
  src: string;
  alt: string;
  className: string;
};

const imgClass =
  "w-full h-full object-cover grayscale opacity-80 transition-all duration-500 ease-out hover:grayscale-0 hover:opacity-100 hover:scale-105";

const GalleryImage = ({ photo }: { photo: Photo }) => (
  <div
    className={`overflow-hidden border border-vainamoinen/15 ${photo.className}`}
  >
    <img src={photo.src} alt={photo.alt} loading="lazy" className={imgClass} />
  </div>
);

const portrait: Photo = {
  src: "/about-portrait.jpg",
  alt: "Toscany countryside",
  className: "lg:w-1/2 aspect-square",
};

const photos: Photo[] = [
  { src: "/about-toissa.jpg", alt: "Good workday", className: "aspect-square" },
  {
    src: "/about-moksa.jpg",
    alt: "Away from the screen",
    className: "aspect-square",
  },
  {
    src: "/about-statue.jpg",
    alt: "I just like this statue",
    className: "aspect-square",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="text-vainamoinen scroll-mt-20">
      <div className="max-w-7xl mx-auto w-full px-6 py-20 lg:py-28">
        <div className="pb-6">
          <h3 className="leading-none text-2xl sm:text-3xl font-google-sans-flex text-vainamoinen/60">
            About me —
          </h3>
        </div>

        <div className="pb-12">
          <p className="text-lg md:text-2xl text-vainamoinen leading-relaxed w-full">
            <span className="flex items-center gap-3 flex-wrap">
              Helsinki, Finland
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                className="text-[#344128] shrink-0"
                aria-hidden="true"
              >
                <path
                  d="M2 12 H22 M18 8 L22 12 L18 16 M6 8 L2 12 L6 16"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                />
              </svg>
              Florence, Italy.
            </span>
            <span className="block">
              Fan of Europe and international opportunities.
            </span>
            <span className="block">
              Supporting business + people to leverage AI in brave new world.
            </span>
          </p>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 items-center pb-12">
          <GalleryImage photo={portrait} />
          <div className="lg:w-1/2 space-y-5 text-base md:text-lg text-vainamoinen/70 leading-relaxed">
            <p>
              Together with my partner{" "}
              <a
                href="https://ylonenconsulting.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vainamoinen underline decoration-vainamoinen/30 underline-offset-4 hover:decoration-vainamoinen transition-colors"
              >
                Ylönen Consulting
              </a>{" "}
              (Berlin, Germany) we want to give you more opportunities for{" "}
              <a
                href="https://en.wikipedia.org/wiki/Serendipity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vainamoinen underline decoration-vainamoinen/30 underline-offset-4 hover:decoration-vainamoinen transition-colors"
              >
                serendipity
              </a>
              .
            </p>
            <div>
              <p>We offer:</p>
              <ol className="list-decimal pl-6 mt-2 space-y-1">
                <li>Iterative and fast Software Development with AI.</li>
                <li>Partners you can just call.</li>
                <li>
                  International business openings between:
                  <span className="block">
                    Finland, Italy, Germany, Lithuania and Nepal
                  </span>
                </li>
              </ol>
            </div>
            <p>
              We believe European business have the best opportunity to thrive
              when AI is combined with international networks in big and small
              scale. We want to build continent wide contact networks while
              helping our customers in technological disruption.
            </p>
            <p className="text-vainamoinen">
              15 min call creates unexpected opportunities:
              <br />
              <a
                href="tel:+358415242441"
                className="underline decoration-vainamoinen/30 underline-offset-4 hover:decoration-vainamoinen transition-colors"
              >
                +358415242441
              </a>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-auto">
          {photos.map((photo) => (
            <GalleryImage key={photo.src} photo={photo} />
          ))}
        </div>
      </div>
    </section>
  );
};
