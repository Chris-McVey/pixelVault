/**
 * Events load from `content/events/*.md` — edit on GitHub (web UI) or locally.
 * One Markdown file per occurrence; frontmatter + body description.
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ShopEvent = {
  slug: string;
  title: string;
  /** Short line for cards / homepage */
  summary: string;
  /** Body below YAML frontmatter — paragraphs separated by blank lines */
  description: string;
  /** ISO 8601 with offset (America/Los_Angeles) */
  startIso: string;
  endIso: string;
  /** Vendor-facing bullets shown on detail page */
  vendorTips: string[];
};

const EVENTS_DIR = path.join(process.cwd(), "content/events");

function parseEventFile(filePath: string): ShopEvent {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const slug = data.slug;
  const title = data.title;
  const summary = data.summary;
  const startIso = data.startIso;
  const endIso = data.endIso;

  if (
    typeof slug !== "string" ||
    typeof title !== "string" ||
    typeof summary !== "string" ||
    typeof startIso !== "string" ||
    typeof endIso !== "string"
  ) {
    throw new Error(
      `Invalid frontmatter in ${filePath}: slug, title, summary, startIso, endIso are required strings.`,
    );
  }

  const vendorTips = Array.isArray(data.vendorTips)
    ? data.vendorTips.map((t: unknown) => String(t))
    : [];

  return {
    slug,
    title,
    summary,
    description: content.trim(),
    startIso,
    endIso,
    vendorTips,
  };
}

function loadEventsFromDisk(): ShopEvent[] {
  if (!fs.existsSync(EVENTS_DIR)) {
    return [];
  }

  const files = fs
    .readdirSync(EVENTS_DIR)
    .filter((f) => f.endsWith(".md") && f.toLowerCase() !== "readme.md");
  const events: ShopEvent[] = [];

  for (const file of files) {
    events.push(parseEventFile(path.join(EVENTS_DIR, file)));
  }

  return events;
}

function parseInstant(iso: string): number {
  return new Date(iso).getTime();
}

/** Raw list from disk (unsorted) */
export function getEvents(): ShopEvent[] {
  return loadEventsFromDisk();
}

/** All events, soonest start first */
export function getAllEventsSorted(): ShopEvent[] {
  return [...loadEventsFromDisk()].sort(
    (a, b) => parseInstant(a.startIso) - parseInstant(b.startIso),
  );
}

export function getEventBySlug(slug: string): ShopEvent | undefined {
  return loadEventsFromDisk().find((e) => e.slug === slug);
}

/** Events whose end time is still in the future (relative to now). */
export function getUpcomingEvents(now = new Date()): ShopEvent[] {
  const t = now.getTime();
  return getAllEventsSorted().filter((e) => parseInstant(e.endIso) >= t);
}

/** Events that already ended */
export function getPastEvents(now = new Date()): ShopEvent[] {
  const t = now.getTime();
  return getAllEventsSorted()
    .filter((e) => parseInstant(e.endIso) < t)
    .reverse();
}

/** Next swap for homepage hero — undefined if none scheduled */
export function getNextFeaturedEvent(now = new Date()): ShopEvent | undefined {
  const upcoming = getUpcomingEvents(now);
  return upcoming[0];
}

const TZ = "America/Los_Angeles";

/** Human-readable range for cards and headings */
export function formatEventRange(startIso: string, endIso: string): string {
  const start = new Date(startIso);
  const end = new Date(endIso);
  const datePart = start.toLocaleDateString("en-US", {
    timeZone: TZ,
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const timeFmt: Intl.DateTimeFormatOptions = {
    timeZone: TZ,
    hour: "numeric",
    minute: "2-digit",
  };
  const startT = start.toLocaleTimeString("en-US", timeFmt);
  const endT = end.toLocaleTimeString("en-US", timeFmt);
  return `${datePart} · ${startT} – ${endT}`;
}
