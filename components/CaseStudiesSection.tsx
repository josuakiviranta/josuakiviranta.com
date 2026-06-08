import Link from "next/link";

type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
};

const studies: CaseStudy[] = [
  {
    slug: "/case-studies/haka-wood",
    title: "Haka-wood",
    tagline: "Sawmill maintenance software",
  },
  {
    slug: "/case-studies/eps-energia-per-lo-sviluppo",
    title: "Energia per lo sviluppo",
    tagline: "Websites created in a day for NGO",
  },
];

const ArrowIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="0.5"
  >
    <line x1="2" y1="12" x2="22" y2="12" strokeLinecap="square" />
    <path d="M19 9L22 12L19 15" strokeLinecap="square" />
  </svg>
);

export const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="text-vainamoinen scroll-mt-20">
      <div className="max-w-7xl mx-auto w-full px-6 pt-20 lg:pt-28 pb-6">
        <h3 className="leading-none text-2xl sm:text-3xl font-google-sans-flex text-vainamoinen/60">
          Case Studies
        </h3>
      </div>

      <div>
        {studies.map((s) => (
          <div key={s.slug} className="max-w-7xl mx-auto w-full px-6">
            <div className="h-px bg-vainamoinen/20" />
            <Link href={s.slug}>
              <a className="w-full flex items-center gap-5 py-7 group">
                <h3 className="text-2xl md:text-3xl font-google-sans-flex flex-1 text-left">
                  {s.title}
                </h3>
                <span className="hidden md:block text-2xl md:text-3xl text-vainamoinen/60 font-google-sans-flex whitespace-nowrap">
                  {s.tagline}
                </span>
                <span className="text-vainamoinen/60 group-hover:text-vainamoinen transition-colors">
                  <ArrowIcon />
                </span>
              </a>
            </Link>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full px-6">
        <div className="h-px bg-vainamoinen/20" />
        <p className="py-5 text-sm text-vainamoinen/50 font-ibm-plex-mono">
          More references available on request.
        </p>
      </div>
      <div className="pb-20 lg:pb-28" />
    </section>
  );
};
