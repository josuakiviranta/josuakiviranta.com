-- The visit counter's tables in the Neon database (pages/api/hit.ts writes
-- them). Run once against DATABASE_URL; safe to run again.

-- One row per event: a page view, a tracked click or a page section reached.
-- No IP address and no raw browser string are stored; `visitor` is a hash
-- made with the day's salt, so it groups one visitor's events within a day.
CREATE TABLE IF NOT EXISTS events (
  id       bigserial PRIMARY KEY,
  at       timestamptz NOT NULL DEFAULT now(),
  visitor  text NOT NULL,
  type     text NOT NULL,          -- view | click | section
  name     text,                   -- click: book-call, contact, lang, code-of-conduct-pdf; section: its name
  place    text,                   -- click: where on the page (first-screen, weekly, phone, fi …)
  path     text NOT NULL,
  page     text,                   -- the ?page= view, empty on Home
  lang     text,
  referrer text,                   -- views only: the referring site's host name
  country  text,
  region   text,
  city     text,
  browser  text,
  os       text,
  device   text                    -- mobile | tablet | desktop
);
CREATE INDEX IF NOT EXISTS events_at ON events (at);

-- The day's random salt; older salts are deleted on the first event of a day.
CREATE TABLE IF NOT EXISTS salts (
  day   text PRIMARY KEY,           -- YYYY-MM-DD, UTC
  value text NOT NULL
);
