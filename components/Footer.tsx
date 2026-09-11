const ArrowIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-60 transition-opacity duration-300 group-hover:opacity-100"
  >
    <path
      d="M3 9L9 3M9 3H4M9 3V8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="relative w-full bg-slate-field-2 text-slate-text/70 font-space-grotesk font-light text-sm mt-16 lg:mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 py-24 lg:py-40 relative">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <div className="flex-1">
            <div className="flex flex-col gap-1">
              <span className="max-sm:text-2xl sm:text-3xl md:text-5xl lg:text-3xl xl:text-5xl font-space-grotesk font-light tracking-[-0.02em] leading-none text-slate-text">
                Josua Kiviranta
              </span>
              <span className="font-ibm-plex-mono text-xs uppercase tracking-[0.2em] text-slate-base">
                ADVISOR AND ENGINEER
              </span>
            </div>
          </div>

          <div className="lg:w-80">
            <p className="font-ibm-plex-mono text-xs uppercase tracking-[0.2em] text-slate-base mb-3">
              SOCIALS
            </p>
            <div className="mb-8">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-3 border-t border-slate-base/25 font-space-grotesk text-sm font-light tracking-wide text-slate-text/70 hover:text-slate-text transition-colors duration-300"
                href="https://www.linkedin.com/in/josuakiviranta/"
              >
                <span className="border-b border-transparent pb-0.5 transition-colors duration-300 group-hover:border-slate-text/55">
                  LINKEDIN
                </span>
                <ArrowIcon />
              </a>
            </div>
            <div className="hidden lg:flex items-center justify-between text-xs text-slate-base pt-6">
              <div className="flex items-center gap-2">
                © 2026 Josua Kiviranta
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden pt-8 text-xs text-slate-base">
          © 2026 Josua Kiviranta
        </div>
      </div>
    </footer>
  );
};
