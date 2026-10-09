import { useEffect, useState } from "react";
import { SECTIONS } from "./Section";

const PHONE_DISPLAY = "+358 41 524 2441";
const PHONE_HREF = "tel:+358415242441";

/* Which section is being read, how far down the page we are, and whether
   the title has scrolled out of view. One rAF-throttled scroll listener. */
const useReadingPosition = () => {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [pastTitle, setPastTitle] = useState(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const readingLine = window.innerHeight * 0.35;
      let idx = 0;
      SECTIONS.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= readingLine) idx = i;
      });
      // The last section may be too short to reach the reading line.
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY >= max - 2) idx = SECTIONS.length - 1;
      setActive(idx);
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      const title = document.getElementById("title");
      setPastTitle(title ? title.getBoundingClientRect().bottom < 0 : false);
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return { active, progress, pastTitle };
};

const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";

/**
 * Two forms of one table of contents:
 * - xl and up: fixed in the left margin, like margin notes. A hairline rule
 *   with a short black segment that slides to the section being read; the
 *   name fades in once the title has scrolled away.
 * - below xl: a slim bar, always on screen; it carries the name, so the
 *   page's own title is hidden there (see HelloSection). The
 *   current section rolls into place like a counter; tapping it opens the
 *   contents. A hairline along the bottom fills with reading progress.
 */
export const NavBar = () => {
  const { active, progress, pastTitle } = useReadingPosition();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <nav
        aria-label="Contents"
        className="fixed top-24 z-40 hidden w-44 text-[15px] xl:block"
        style={{ left: "max(1.5rem, calc(50% - 21rem - 14rem))" }}
      >
        <a
          href="#top"
          className={`mb-5 block font-bold transition-opacity duration-500 ${
            pastTitle ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          tabIndex={pastTitle ? 0 : -1}
        >
          Josua Kiviranta
        </a>
        <ol className="relative border-l border-rule">
          <span
            aria-hidden="true"
            className={`absolute -left-px top-0 w-px bg-ink transition-transform duration-500 ${EASE}`}
            style={{
              height: `${100 / SECTIONS.length}%`,
              transform: `translateY(${active * 100}%)`,
            }}
          />
          {SECTIONS.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={i === active ? "location" : undefined}
                className={`block py-1.5 pl-4 transition-colors duration-300 ${
                  i === active ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                <span className="inline-block w-6 tabular-nums">{i + 1}</span>
                {s.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div
        className="fixed inset-x-0 top-0 z-50 bg-white text-[16px] xl:hidden"
      >
        <div className="mx-auto flex h-12 max-w-[42rem] items-center justify-between px-4 sm:px-6">
          <a href="#top" className="font-bold" onClick={() => setOpen(false)}>
            Josua Kiviranta
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-contents"
            aria-label={`Contents, reading section ${active + 1}: ${SECTIONS[active].label}`}
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-2"
          >
            <span className="relative block h-[1.5em] overflow-hidden" aria-hidden="true">
              <span
                className={`flex flex-col transition-transform duration-500 ${EASE}`}
                style={{ transform: `translateY(-${active * 1.5}em)` }}
              >
                {SECTIONS.map((s, i) => (
                  <span key={s.id} className="block h-[1.5em] whitespace-nowrap text-right leading-[1.5em]">
                    <span className="mr-2 tabular-nums">{i + 1}</span>
                    {s.label}
                  </span>
                ))}
              </span>
            </span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              aria-hidden="true"
              className={`transition-transform duration-500 ${EASE} ${open ? "rotate-180" : ""}`}
            >
              <path d="M1.5 3.5 5 7l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </button>
        </div>

        <div
          id="mobile-contents"
          className={`grid transition-[grid-template-rows] duration-500 ${EASE} ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <ol className="mx-auto max-w-[42rem] px-4 pb-3 sm:px-6">
              {SECTIONS.map((s, i) => (
                <li key={s.id} className="border-t border-rule">
                  <a
                    href={`#${s.id}`}
                    tabIndex={open ? 0 : -1}
                    onClick={() => setOpen(false)}
                    className={`block py-2.5 ${i === active ? "font-bold" : ""}`}
                  >
                    <span className="inline-block w-6 tabular-nums">{i + 1}</span>
                    {s.label}
                  </a>
                </li>
              ))}
              <li className="border-t border-rule pt-2.5">
                <a href={PHONE_HREF} tabIndex={open ? 0 : -1} className="doc-link">
                  {PHONE_DISPLAY}
                </a>
              </li>
            </ol>
          </div>
        </div>

        <div className="relative h-px bg-rule">
          <div
            className="absolute inset-0 origin-left bg-ink"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
      </div>
    </>
  );
};
