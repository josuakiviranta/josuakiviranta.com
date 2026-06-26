export const ClientsSection = () => {
  return (
    <section id="clients" className="text-vainamoinen scroll-mt-20">
      <div className="max-w-7xl mx-auto w-full px-6 py-20 lg:py-28">
        <div className="pb-6">
          <h3 className="leading-none text-2xl sm:text-3xl font-google-sans-flex text-vainamoinen/60">
            Clients —
          </h3>
        </div>
        <div className="flex flex-wrap items-center gap-x-16 gap-y-10">
          <img
            src="/hakawood-logo.svg"
            alt="Hakawood"
            className="h-20 w-auto grayscale opacity-70 transition-all duration-300 ease-out hover:grayscale-0 hover:opacity-100 hover:scale-105"
          />
          <img
            src="/eps-logo.png"
            alt="EPS — Energia per lo Sviluppo"
            className="h-24 w-auto grayscale opacity-70 transition-all duration-300 ease-out hover:grayscale-0 hover:opacity-100 hover:scale-105"
          />
          <img
            src="/chelli-logo.png"
            alt="Chelli Energy Solutions"
            className="h-20 w-auto grayscale opacity-70 transition-all duration-300 ease-out hover:grayscale-0 hover:opacity-100 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};
