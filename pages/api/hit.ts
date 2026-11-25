import { createHash, randomBytes } from "crypto";
import type { NextApiRequest, NextApiResponse } from "next";
import { neon } from "@neondatabase/serverless";

/* Stores one event from components/VisitCounter.tsx in the Neon database
   (tables in analytics/schema.sql). What is kept, and what is not:
   - no IP address and no raw browser string: the IP and browser string are
     hashed with a random salt that changes daily and is deleted the next day,
     so the same visitor counts once per day and cannot be traced back;
   - country, region and city from Vercel's location headers;
   - browser, OS and device type, worked out from the browser string;
   - the referring site's host name only (not its full address);
   - events older than 12 months are deleted (owner, 2026-11-25).
   Events from hosts other than the live site (localhost, PR previews) are
   dropped unless TRACK_ANY_HOST=1 is set. */

const LIVE_HOSTS = ["www.josuakiviranta.com", "josuakiviranta.com"];
const BOT = /bot|crawl|spider|slurp|preview|facebookexternalhit|headless|lighthouse|python|curl|wget/i;
const WORD = /^[a-z0-9-]{1,40}$/;

const word = (v: unknown) => (typeof v === "string" && WORD.test(v) ? v : null);
const header = (req: NextApiRequest, name: string) => {
  const v = req.headers[name];
  const s = Array.isArray(v) ? v[0] : v;
  return s ? decodeURIComponent(s).slice(0, 80) : null;
};

const browserOf = (ua: string) =>
  /Edg\//.test(ua) ? "Edge" : /SamsungBrowser/.test(ua) ? "Samsung" : /OPR\//.test(ua) ? "Opera"
  : /Firefox|FxiOS/.test(ua) ? "Firefox" : /Chrome|CriOS/.test(ua) ? "Chrome" : /Safari/.test(ua) ? "Safari" : "other";
const osOf = (ua: string) =>
  /iPhone|iPad|iPod/.test(ua) ? "iOS" : /Android/.test(ua) ? "Android" : /Windows/.test(ua) ? "Windows"
  : /Mac OS X/.test(ua) ? "macOS" : /Linux/.test(ua) ? "Linux" : "other";
const deviceOf = (ua: string, sw: number) =>
  /iPad|Tablet/.test(ua) || (/Android/.test(ua) && !/Mobile/.test(ua)) ? "tablet"
  : /Mobi|iPhone/.test(ua) || (sw > 0 && sw < 768) ? "mobile" : "desktop";
const hostOf = (ref: unknown) => {
  if (typeof ref !== "string" || !ref) return null;
  try { return new URL(ref).hostname.slice(0, 80); } catch { return null; }
};

// Replies only after the write: Vercel may stop the function once it replies.
export default async function hit(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "POST" || !process.env.DATABASE_URL) return;
    const host = (req.headers.host ?? "").split(":")[0];
    if (!LIVE_HOSTS.includes(host) && process.env.TRACK_ANY_HOST !== "1") return;
    const ua = req.headers["user-agent"] ?? "";
    if (!ua || BOT.test(ua)) return;

    const b = typeof req.body === "string" ? JSON.parse(req.body) : req.body ?? {};
    const type = ["view", "click", "section"].includes(b.t) ? b.t : null;
    if (!type) return;
    const sw = Number.isFinite(b.sw) ? Math.round(b.sw) : 0;

    const sql = neon(process.env.DATABASE_URL);
    // Today's salt; the first event of a day also deletes older salts and
    // events past the 12-month limit.
    const day = new Date().toISOString().slice(0, 10);
    let [salt] = await sql`SELECT value FROM salts WHERE day = ${day}`;
    if (!salt) {
      await sql`INSERT INTO salts (day, value) VALUES (${day}, ${randomBytes(32).toString("hex")}) ON CONFLICT (day) DO NOTHING`;
      await sql`DELETE FROM salts WHERE day <> ${day}`;
      await sql`DELETE FROM events WHERE at < now() - interval '12 months'`;
      [salt] = await sql`SELECT value FROM salts WHERE day = ${day}`;
    }
    const ip = (header(req, "x-forwarded-for") ?? "").split(",")[0].trim();
    const visitor = createHash("sha256").update(`${salt.value}|${ip}|${ua}`).digest("hex").slice(0, 16);

    await sql`
      INSERT INTO events (visitor, type, name, place, path, page, lang, referrer,
                          country, region, city, browser, os, device)
      VALUES (${visitor}, ${type}, ${word(b.name)}, ${word(b.place)},
              ${typeof b.path === "string" ? b.path.slice(0, 80) : "/"}, ${word(b.page)}, ${word(b.lang)},
              ${type === "view" ? hostOf(b.ref) : null},
              ${header(req, "x-vercel-ip-country")}, ${header(req, "x-vercel-ip-country-region")},
              ${header(req, "x-vercel-ip-city")}, ${browserOf(ua)}, ${osOf(ua)}, ${deviceOf(ua, sw)})`;
  } catch (e) {
    console.error("hit", e);
  }
  res.status(204).end();
}
