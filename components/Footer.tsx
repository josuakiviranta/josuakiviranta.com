const ArrowIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-60"
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
    <footer className="relative w-full bg-vainamoinen text-[#F4EDDD]/70 font-ibm-plex-mono text-sm mt-16 lg:mt-24 overflow-hidden">
      <img
        src="/footer-logo.webp"
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-80 xl:h-[28rem] w-auto pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full px-6 py-24 lg:py-40 relative">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <div className="flex-1">
            <p className="text-xs tracking-widest text-[#F4EDDD]/50 mb-8">
              AI CONSULTING &amp; SOFTWARE ENGINEERING
            </p>
            <div className="flex flex-col gap-1">
              <span className="max-sm:text-4xl sm:text-5xl md:text-7xl lg:text-5xl xl:text-7xl font-caveat font-medium leading-none text-[#F4EDDD]">
                Josua A. Kiviranta
              </span>
              <span className="text-xs tracking-widest text-[#F4EDDD]/50">
                SASSOSA CONSULTING
              </span>
            </div>
          </div>

          <div className="lg:w-80">
            <p className="text-xs tracking-widest text-[#F4EDDD]/50 mb-3">
              SOCIALS
            </p>
            <div className="mb-8">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-3 border-t border-[#F4EDDD]/20 hover:text-[#F4EDDD] transition-colors"
                href="https://www.linkedin.com/in/josuakiviranta/"
              >
                <span>LINKEDIN</span>
                <ArrowIcon />
              </a>
            </div>
            <div className="hidden lg:flex items-center justify-between text-xs text-[#F4EDDD]/50 pt-6">
              <div className="flex items-center gap-2">
                © 2026 Sassosa Consulting
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden pt-8 text-xs text-[#F4EDDD]/50">
          © 2026 Sassosa Consulting
        </div>
        <div className="lg:hidden pt-8 -mx-6">
          <img
            src="/footer-logo.webp"
            alt="Sassosa Consulting"
            className="h-48 sm:h-64 md:h-80 w-auto"
          />
        </div>
      </div>
    </footer>
  );
};
