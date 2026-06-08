import { useState } from "react";

type Service = {
  key: string;
  title: string;
  tagline: string;
  icon: JSX.Element;
  body: JSX.Element;
};

const ChevronIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="0.5"
  >
    <line x1="12" y1="2" x2="12" y2="22" strokeLinecap="square" />
    <path d="M9 19 L12 22" strokeLinecap="square" />
    <path d="M15 19 L12 22" strokeLinecap="square" />
  </svg>
);

const PhaseArrow = () => (
  <div className="flex items-center justify-center h-6 md:h-auto md:w-6 text-vainamoinen/40">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
    >
      <path
        d="M2 12 H22 M18 8 L22 12 L18 16"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  </div>
);

const PhaseCard = ({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="relative border border-vainamoinen/20 overflow-hidden flex-1">
    <div className="h-full flex flex-col bg-vainamoinen/5 pb-6">
      <div className="border-b border-vainamoinen/20 px-6 h-16 flex justify-between items-center text-xs tracking-wider font-ibm-plex-mono">
        <span>{num}</span>
        <span className="uppercase text-vainamoinen">{title}</span>
      </div>
      <div className="flex-1 px-6 pt-6 font-google-sans-flex text-vainamoinen/70 text-[15px] leading-relaxed">
        {children}
      </div>
    </div>
  </div>
);

const DeliverablesGrid = ({
  label,
  items,
}: {
  label: string;
  items: string[];
}) => (
  <>
    <p className="text-[11px] tracking-[0.15em] uppercase text-vainamoinen/40 font-ibm-plex-mono">
      {label}
    </p>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-4">
      {items.map((item, i) => (
        <div
          key={item}
          className="bg-vainamoinen/5 border border-vainamoinen/10 rounded-md p-4"
        >
          <span className="text-[10px] font-ibm-plex-mono text-vainamoinen/40 tracking-[0.2em] block mb-2">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-sm text-vainamoinen leading-snug">{item}</span>
        </div>
      ))}
    </div>
  </>
);

const services: Service[] = [
  {
    key: "ai-transformation",
    title: "AI transformation",
    tagline: "Every workflow, examined and improved.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M20 4L24 8L20 12"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 14V12C4 9.79 5.79 8 8 8H24"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 24L4 20L8 16"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 14V16C24 18.21 22.21 20 20 20H4"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    body: (
      <div>
        <p className="text-sm md:text-base text-vainamoinen/70 leading-relaxed mb-8 max-w-xl">
          We strive to be your long-term AI transformation partner. This is our
          systematic approach.
        </p>
        <div className="flex max-md:flex-col">
          <PhaseCard num="01" title="Workflow listing">
            We interview leadership teams to understand an organization&apos;s
            business processes and priorities.
            <br />
            <br />
            We then conduct deeper interviews with employees to
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                list and document the exact workflows that underpin these
                processes,
              </li>
              <li>list the systems and tools in use, and</li>
              <li>
                understand where time and money are actually spent in practice.
              </li>
            </ul>
          </PhaseCard>
          <PhaseArrow />
          <PhaseCard num="02" title="Opportunity identification">
            We identify modernization opportunities and calculate the savings of
            solving them.
            <br />
            <br />
            Concretely, we deliver a spreadsheet with these specific columns:
            <ol className="list-decimal pl-6 mt-2 space-y-1">
              <li>description of a suggested change,</li>
              <li>estimated EBITDA impact (high / medium / low),</li>
              <li>brief rationale for the EBITDA impact estimate,</li>
              <li>estimated cost (high / medium / low)</li>
              <li>brief rationale for the cost estimate, and</li>
              <li>suggested KPIs.</li>
            </ol>
          </PhaseCard>
          <PhaseArrow />
          <PhaseCard num="03" title="Implementation support">
            We work together with the organization to implement the identified
            changes.
            <br />
            <br />
            Support can be especially helpful in
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                comparing, choosing, deploying, and training teams on new tools,
              </li>
              <li>building workflow automations,</li>
              <li>helping management and employees adopt new ways of working,</li>
              <li>measuring the outcomes of changes (KPIs), and</li>
              <li>
                systematically communicating about successful changes publicly.
              </li>
            </ul>
          </PhaseCard>
        </div>
      </div>
    ),
  },
  {
    key: "software-engineering",
    title: "Software engineering",
    tagline: "Custom software from start to finish.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M10 8L4 14L10 20"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 8L24 14L18 20"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    body: (
      <div>
        <p className="text-sm md:text-base text-vainamoinen/70 leading-relaxed mb-10 max-w-2xl">
          We design, build, and ship production-ready software — from web
          applications and APIs to full system architectures with AI at the
          core. Every project is owned end-to-end: scoping, development,
          deployment, and ongoing maintenance, so you get durable systems that
          keep delivering value.
        </p>
        <DeliverablesGrid
          label="Deliverables"
          items={[
            "Web applications",
            "API development",
            "System architecture",
            "AI integration",
            "Maintenance and support",
          ]}
        />
      </div>
    ),
  },
  {
    key: "employee-training",
    title: "Employee training",
    tagline: "Practical training on the latest tools.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 4L3 10L14 16L25 10L14 4Z"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 16L14 22L25 16"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    body: (
      <div>
        <p className="text-sm md:text-base text-vainamoinen/70 leading-relaxed mb-10 max-w-2xl">
          We deliver hands-on training that equips your team with the skills to
          work effectively with the latest AI tools and development practices.
          Sessions are practical, not theoretical — participants leave with
          workflows they can apply the next day.
        </p>
        <DeliverablesGrid
          label="Topics"
          items={[
            "Claude / ChatGPT / Gemini",
            "AI in software development",
            "Vibe coding",
            "Prompt engineering",
          ]}
        />
      </div>
    ),
  },
  {
    key: "strategy-consulting",
    title: "Strategy consulting",
    tagline: "Concrete plans and sparring.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1" />
        <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1" />
        <line x1="14" y1="4" x2="14" y2="2" stroke="currentColor" strokeWidth="1" />
        <line x1="14" y1="26" x2="14" y2="24" stroke="currentColor" strokeWidth="1" />
        <line x1="4" y1="14" x2="2" y2="14" stroke="currentColor" strokeWidth="1" />
        <line x1="26" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
    body: (
      <div>
        <p className="text-sm md:text-base text-vainamoinen/70 leading-relaxed mb-10 max-w-2xl">
          Every AI investment should deliver measurable business impact. We cut
          through the hype to recommend what genuinely solves your challenge,
          then provide concrete roadmaps and ongoing sparring to turn strategy
          into results.
        </p>
        <DeliverablesGrid
          label="Deliverables"
          items={[
            "Technology roadmaps",
            "Vendor evaluation",
            "Implementation planning",
            "Impact assessment",
          ]}
        />
      </div>
    ),
  },
];

export const ServicesSection = () => {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <section id="services" className="text-vainamoinen scroll-mt-20">
      <div className="max-w-7xl mx-auto w-full px-6 py-20 lg:py-28">
        <div className="pb-6">
          <h3 className="leading-none text-2xl sm:text-3xl font-google-sans-flex text-vainamoinen/60">
            Services
          </h3>
        </div>
        <div>
          {services.map((s) => {
            const open = openKey === s.key;
            return (
              <div key={s.key} className="scroll-mt-20">
                <div className="h-px bg-vainamoinen/20" />
                <button
                  onClick={() => setOpenKey(open ? null : s.key)}
                  className="w-full flex items-center gap-5 py-7 cursor-pointer group"
                  aria-expanded={open}
                >
                  <span className="text-vainamoinen/60 transition-colors duration-300 group-hover:text-vainamoinen/80">
                    {s.icon}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-google-sans-flex flex-1 text-left">
                    {s.title}
                  </h3>
                  <span className="hidden lg:block text-2xl md:text-3xl text-vainamoinen/60 font-google-sans-flex whitespace-nowrap transition-all duration-500">
                    {s.tagline}
                  </span>
                  <span
                    className={`text-vainamoinen/60 transition-transform duration-500 ${
                      open ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronIcon />
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`pb-10 pt-2 transition-all duration-500 ease-out ${
                        open
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-3"
                      }`}
                    >
                      {s.body}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="h-px bg-vainamoinen/20" />
        </div>
      </div>
    </section>
  );
};
