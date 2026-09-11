import dynamic from "next/dynamic";

const OfficeMap = dynamic(() => import("./OfficeMap"), { ssr: false });

export const ContactSection = () => {
  return (
    <div id="contact" className="bg-slate-field-2 text-slate-text scroll-mt-20">
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 py-20 lg:py-28">
        <p className="pb-6 font-ibm-plex-mono text-xs uppercase tracking-[0.2em] text-slate-base">
          Contact
        </p>

        <div className="flex flex-col lg:flex-row lg:h-96 gap-6">
          <div className="lg:shrink-0 bg-slate-field-1 border border-slate-base/20 rounded-md p-6 font-space-grotesk text-sm font-light text-slate-text">
            <div className="flex flex-col justify-between gap-8 h-full">
              <div>
                <p className="font-ibm-plex-mono text-xs uppercase tracking-[0.2em] text-slate-base mb-3">
                  BUSINESS ENQUIRIES
                </p>
                <a
                  className="group inline-flex items-baseline gap-2 tracking-wide text-slate-text"
                  href="mailto:josua.kiviranta@gmail.com"
                >
                  <span className="border-b border-transparent pb-0.5 transition-colors duration-300 group-hover:border-slate-text/55">
                    josua.kiviranta@gmail.com
                  </span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
              <div>
                <p className="font-ibm-plex-mono text-xs uppercase tracking-[0.2em] text-slate-base mb-3">
                  TELEPHONE
                </p>
                <a
                  className="group inline-flex items-baseline gap-2 tracking-wide text-slate-text"
                  href="tel:+358415242441"
                >
                  <span className="border-b border-transparent pb-0.5 transition-colors duration-300 group-hover:border-slate-text/55">
                    +358 41 524 2441
                  </span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
              <div>
                <p className="font-ibm-plex-mono text-xs uppercase tracking-[0.2em] text-slate-base mb-3">
                  INVOICING
                </p>
                <p className="text-slate-text">Helsinki, Finland</p>
              </div>
              <div>
                <div className="flex gap-6 font-ibm-plex-mono text-xs uppercase tracking-[0.2em] text-slate-base mb-3">
                  <span>OFFICE</span>
                  <span>GMT+1</span>
                </div>
                <p className="text-slate-text">Pontassieve, Florence, Italy</p>
              </div>
            </div>
          </div>

          <div className="flex h-96 lg:h-auto lg:flex-1 min-w-0 gap-6">
            <div className="min-w-0 flex-1 relative rounded-lg overflow-hidden border border-slate-base/20 bg-slate-field-1">
              <svg width="0" height="0" className="absolute">
                <defs>
                  <filter id="map-duotone" colorInterpolationFilters="sRGB">
                    <feColorMatrix
                      type="matrix"
                      values="0.299 0.587 0.114 0 0  0.299 0.587 0.114 0 0  0.299 0.587 0.114 0 0  0 0 0 1 0"
                    />
                    <feComponentTransfer>
                      <feFuncR type="table" tableValues="0.118 0.118 0.118 0.118 0.776" />
                      <feFuncG type="table" tableValues="0.141 0.141 0.141 0.141 0.804" />
                      <feFuncB type="table" tableValues="0.173 0.173 0.173 0.173 0.843" />
                    </feComponentTransfer>
                  </filter>
                </defs>
              </svg>
              <OfficeMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
