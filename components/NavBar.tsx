import Link from "next/link";
import { useState } from "react";

const BOOKING_URL = "https://calendar.app.google/HQd53sZDXcfrPLnt9";

const links = [
  { href: "#services", label: "Services" },
  { href: "#case-studies", label: "Case Studies" },
];

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-[#F4EDDD] text-vainamoinen">
      <div className="w-full px-6">
        <nav className="flex justify-between items-center border-b border-vainamoinen/20 transition-all duration-300 py-4">
          <Link href="/">
            <a className="flex items-center cursor-pointer">
              <img
                src="/bigfoot.webp"
                alt="Logo"
                className="h-12 w-auto mr-3"
              />
              <span className="font-caveat font-medium text-vainamoinen select-none text-2xl sm:text-3xl tracking-tight">
                Josua A. Kiviranta
              </span>
            </a>
          </Link>

          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center gap-6">
              {links.map((l) => (
                <Link key={l.href} href={l.href}>
                  <button className="py-2 relative after:absolute after:bottom-1 after:left-0 after:right-0 after:h-px after:bg-current after:transition-all after:duration-300 font-google-sans-flex tracking-wide transition-colors text-sm after:w-0 hover:after:w-full text-vainamoinen/50 hover:text-vainamoinen cursor-pointer">
                    {l.label}
                  </button>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-google-sans-flex tracking-wide text-sm rounded-full bg-vainamoinen text-[#F4EDDD] px-5 py-2 transition-colors hover:bg-vainamoinen/90 cursor-pointer"
            >
              Meet & talk
            </a>
          </div>

          <button
            className="relative z-50 md:hidden w-6 h-5 cursor-pointer text-vainamoinen"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`absolute top-1/2 left-0 h-px w-full bg-current transition-all duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-0" : "-translate-y-1"
              }`}
            ></span>
            <span
              className={`absolute top-1/2 left-0 h-px w-full bg-current transition-all duration-300 ease-in-out ${
                open ? "-rotate-45 translate-y-0" : "translate-y-1"
              }`}
            ></span>
          </button>
        </nav>
      </div>

      <div
        className={`md:hidden fixed inset-0 top-[78px] bg-[#F4EDDD] z-40 flex items-end justify-end p-8 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-end gap-2">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mb-6 font-google-sans-flex tracking-wide text-xl rounded-full bg-vainamoinen text-[#F4EDDD] px-6 py-3 transition-colors hover:bg-vainamoinen/90 cursor-pointer"
          >
            Meet & talk
          </a>
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              <button
                onClick={() => setOpen(false)}
                className="py-2 font-google-sans-flex tracking-wide transition-colors text-3xl text-vainamoinen/50 hover:text-vainamoinen cursor-pointer"
              >
                {l.label}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
