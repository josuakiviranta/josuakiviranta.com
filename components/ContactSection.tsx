import dynamic from "next/dynamic";

const OfficeMap = dynamic(() => import("./OfficeMap"), { ssr: false });

export const ContactSection = () => {
  return (
    <div
      id="contact"
      className="max-w-7xl mx-auto w-full px-6 text-vainamoinen py-20 lg:py-28 scroll-mt-20"
    >
      <div className="pb-6">
        <h3 className="leading-none text-2xl sm:text-3xl font-google-sans-flex text-vainamoinen/60">
          Contact
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row lg:h-96 gap-6">
        <div className="lg:shrink-0 bg-vainamoinen/10 rounded-md p-6 font-ibm-plex-mono text-sm text-vainamoinen/70">
          <div className="flex flex-col justify-between gap-8 h-full">
            <div>
              <p className="text-xs tracking-widest text-vainamoinen/50 mb-3">
                BUSINESS ENQUIRIES
              </p>
              <a
                className="text-vainamoinen hover:opacity-80 transition-colors"
                href="mailto:josua.kiviranta@gmail.com"
              >
                josua.kiviranta@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs tracking-widest text-vainamoinen/50 mb-3">
                TELEPHONE
              </p>
              <a
                className="text-vainamoinen hover:opacity-80 transition-colors"
                href="tel:+358415242441"
              >
                +358 41 524 2441
              </a>
            </div>
            <div>
              <p className="text-xs tracking-widest text-vainamoinen/50 mb-3">
                INVOICING
              </p>
              <p className="text-vainamoinen/80">Helsinki, Finland</p>
            </div>
            <div>
              <div className="flex gap-6 text-xs tracking-widest text-vainamoinen/50 mb-3">
                <span>OFFICE</span>
                <span>GMT+1</span>
              </div>
              <p className="text-vainamoinen/80">Pontassieve, Firenze, Italy</p>
            </div>
          </div>
        </div>

        <div className="flex h-96 lg:h-auto lg:flex-1 min-w-0 gap-6">
          <div className="min-w-0 flex-1 relative rounded-lg overflow-hidden bg-[#F4EDDD]">
            <svg width="0" height="0" className="absolute">
              <defs>
                <filter id="map-duotone" colorInterpolationFilters="sRGB">
                  <feColorMatrix
                    type="matrix"
                    values="0.299 0.587 0.114 0 0  0.299 0.587 0.114 0 0  0.299 0.587 0.114 0 0  0 0 0 1 0"
                  />
                  <feComponentTransfer>
                    <feFuncR type="discrete" tableValues="0.204 0.204 0.204 0.204 0.957" />
                    <feFuncG type="discrete" tableValues="0.255 0.255 0.255 0.255 0.929" />
                    <feFuncB type="discrete" tableValues="0.157 0.157 0.157 0.157 0.867" />
                  </feComponentTransfer>
                </filter>
              </defs>
            </svg>
            <OfficeMap />
          </div>
        </div>
      </div>
    </div>
  );
};
