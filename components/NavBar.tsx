import Link from "next/link";
import { useEffect, useState } from "react";

const PHONE_DISPLAY = "+358 41 524 2441";
const PHONE_HREF = "tel:+358415242441";
const LOCATION = "Florence – Helsinki";

const links = [
  { href: "#currently", label: "Currently" },
  { href: "#background", label: "Background" },
  { href: "#contact", label: "Contact" },
];

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`sticky top-0 z-50 text-slate-text transition-colors duration-300 ${
        scrolled || open ? "bg-slate-field-2" : "bg-transparent"
      }`}
    >
      <div className="w-full px-6">
        <nav className="flex justify-between items-center border-b border-slate-base/20 transition-all duration-300 py-4">
          <Link href="/">
            <a className="flex items-center cursor-pointer">
              <span className="font-space-grotesk font-light text-slate-text select-none text-xl sm:text-2xl tracking-tight">
                Josua Kiviranta
              </span>
            </a>
          </Link>

          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center gap-6">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollToSection(l.href)}
                  className="py-2 relative after:absolute after:bottom-1 after:left-0 after:right-0 after:h-px after:bg-current after:transition-all after:duration-300 font-space-grotesk font-light tracking-wide transition-colors text-sm after:w-0 hover:after:w-full text-slate-text hover:text-slate-text cursor-pointer"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <p className="font-space-grotesk font-light tracking-wide text-sm text-slate-text select-none">
              {LOCATION.split("").map((ch, i) => (
                <span
                  key={i}
                  className={`inline-block opacity-0 animate-[charFade_0.5s_ease-out_forwards] ${
                    ch === " " ? "whitespace-pre" : ""
                  }`}
                  style={{ animationDelay: `${((i * 37) % 20) * 0.05}s` }}
                >
                  {ch}
                </span>
              ))}
            </p>
          </div>

          <button
            className="relative z-50 md:hidden w-6 h-5 cursor-pointer text-slate-text"
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
        className={`md:hidden fixed inset-0 top-[73px] bg-slate-field-2 z-40 flex items-end justify-end p-8 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-end gap-2">
          <a
            href={PHONE_HREF}
            onClick={() => setOpen(false)}
            className="mb-6 font-space-grotesk tracking-wide text-xl rounded-full bg-slate-cta text-slate-ink px-6 py-3 transition-colors hover:bg-slate-cta/90 cursor-pointer"
          >
            {PHONE_DISPLAY}
          </a>
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => {
                setOpen(false);
                scrollToSection(l.href);
              }}
              className="py-2 font-space-grotesk font-light tracking-wide transition-colors text-3xl text-slate-text hover:text-slate-text cursor-pointer"
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
