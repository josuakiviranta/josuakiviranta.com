import { useEffect } from "react";
import { useRouter } from "next/router";

/* The site's own visit counter (owner, 2026-11-25; chosen over Umami,
   Plausible and Google Analytics). It sends three
   kinds of event to /api/hit, which stores them without the IP address and
   sets no cookies (the privacy note in the footer says the same):
   - view: a page opened (the language switch alone is not a new view);
   - click: an element marked `data-track` (name) and `data-track-place`;
   - section: a `data-track-section` reached the middle of the screen, once
     per view, so the counts show how far down the page visitors read.
   The server drops events from any host but the live site. */

type Hit = { t: "view" | "click" | "section"; name?: string; place?: string; ref?: string };

// The page and language as the address gives them: "/fi/privacy" is page
// "privacy", lang "fi" (ticket 20; were ?page= and ?lang=). The unlinked
// background and case pages still come as ?page=.
const where = () => {
  const [, first, ...rest] = location.pathname.split("/");
  const lang = first === "fi" || first === "it" ? first : "en";
  const path = (lang === "en" ? [first, ...rest] : rest).join("/");
  return { page: path || (new URLSearchParams(location.search).get("page") ?? ""), lang };
};

const send = (hit: Hit) => {
  const body = JSON.stringify({
    ...hit,
    path: location.pathname,
    ...where(),
    sw: screen.width,
  });
  if (navigator.sendBeacon?.("/api/hit", new Blob([body], { type: "application/json" }))) return;
  fetch("/api/hit", { method: "POST", body, keepalive: true, headers: { "content-type": "application/json" } }).catch(() => {});
};

// The referrer is sent with the first view only; later views are in-site.
let firstView = true;

export const VisitCounter = () => {
  const router = useRouter();
  // A new page is a new view; the language switch alone is not.
  const page = `${router.pathname}?${typeof router.query.page === "string" ? router.query.page : ""}`;

  // One view per page opened; sections are counted again on each view.
  useEffect(() => {
    if (!router.isReady) return;
    const ref = firstView && !document.referrer.includes(location.host) ? document.referrer : "";
    firstView = false;
    send({ t: "view", ref });
    const seen = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const name = (e.target as HTMLElement).dataset.trackSection;
          if (!e.isIntersecting || !name || seen.has(name)) continue;
          seen.add(name);
          send({ t: "section", name });
        }
      },
      { rootMargin: "0px 0px -50% 0px" },
    );
    document.querySelectorAll("[data-track-section]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [router.isReady, page]);

  useEffect(() => {
    const onClick = (ev: MouseEvent) => {
      const el = (ev.target as HTMLElement | null)?.closest<HTMLElement>("[data-track]");
      if (el) send({ t: "click", name: el.dataset.track, place: el.dataset.trackPlace });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
};
