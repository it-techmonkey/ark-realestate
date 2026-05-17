import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Calendar, Clock, MapPin } from "lucide-react";

const DEFAULT_EVENT_TZ = "Asia/Dubai";
const DEFAULT_EVENT_TZ_LABEL = "Dubai (UTC+4)";

/** Noon in this zone — used so calendar day matches the listed date when formatting. */
const EVENT_DAY_REF_OFFSET: Partial<Record<string, string>> = {
  "Asia/Dubai": "+04:00",
  "Asia/Kolkata": "+05:30",
};

type EventListing = {
  title: string;
  dates: string[];
  scheduleSummary: string;
  location: string;
  excerpt: string;
  imageSrc: string;
  /** IANA timezone for date display; defaults to UAE. */
  timeZone?: string;
  /** Shown in the date strip, e.g. "Hyderabad (IST)". */
  timeZoneLabel?: string;
  /** Pill label above the title; defaults to "Local Event". */
  badge?: string;
};

const events: EventListing[] = [
  {
    title: "6 & 7 June Bangalore - ITC Windsor",
    dates: ["2026-06-06", "2026-06-07"],
    scheduleSummary: "Two-day property exhibition — session timings shared after registration",
    location: "ITC Windsor, A Luxury Collection Hotel, Bangalore",
    excerpt: "Meet ARK Vision in Bangalore for a curated Dubai and UAE property expo — developer showcases, investment walkthroughs, and one-to-one advisory across the weekend.",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1697729447666-c39f50d595ea?q=80&w=1471&auto=format&fit=crop",
    timeZone: "Asia/Kolkata",
    timeZoneLabel: "Bangalore (IST)",
    badge: "Regional event",
  },
  {
    title: "30 & 31 May Indore - Sayaji Hotel",
    dates: ["2026-05-30", "2026-05-31"],
    scheduleSummary: "Two-day property exhibition — session timings shared after registration",
    location: "Sayaji Hotel, Indore",
    excerpt: "Meet ARK Vision in Indore for a curated Dubai and UAE property expo — developer showcases, investment walkthroughs, and one-to-one advisory across the weekend.",
    imageSrc:
      "https://images.unsplash.com/photo-1775585571570-5c937c7c2dd5?q=80&w=687&auto=format&fit=crop",
    timeZone: "Asia/Kolkata",
    timeZoneLabel: "Indore (IST)",
    badge: "Regional event",
  },
  {
    title: "24 May Kolkata - ITC Royal Bengal",
    dates: ["2026-05-24"],
    scheduleSummary: "24 May",
    location: "ITC Royal Bengal, Kolkata",
    excerpt: "24 May Kolkata - ITC Royal Bengal",
    imageSrc:
      "https://images.unsplash.com/photo-1571679654681-ba01b9e1e117?fm=jpg&q=80&w=1600&auto=format&fit=crop",
    timeZone: "Asia/Kolkata",
    timeZoneLabel: "Kolkata (IST)",
    badge: "Regional event",
  },
  {
    title: "Hyderabad Property Expo",
    dates: ["2026-05-16", "2026-05-17"],
    scheduleSummary: "Two-day property exhibition — session timings shared after registration",
    location: "Hyderabad, Telangana, India",
    excerpt:
      "Meet ARK Vision in Hyderabad for a curated Dubai and UAE property expo — developer showcases, investment walkthroughs, and one-to-one advisory across the weekend.",
    imageSrc:
      "https://images.unsplash.com/photo-1741545979534-02f59c742730?w=960&q=80",
    timeZone: "Asia/Kolkata",
    timeZoneLabel: "Hyderabad (IST)",
    badge: "Regional event",
  },
  {
    title: "Le Royal Meridien Property Showcase",
    dates: ["2026-05-09"],
    scheduleSummary: "One-day exhibition — detailed slots shared after registration",
    location: "Le Royal Meridien Abu Dhabi — Abu Dhabi, United Arab Emirates",
    excerpt:
      "Join ARK Vision at Le Royal Meridien Abu Dhabi for curated property showcases, on-ground advisory, and tailored investment conversations.",
    imageSrc:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=960&q=80",
  },
  {
    title: "Fairmont Dubai Local Property Event",
    dates: ["2026-05-16", "2026-05-17"],
    scheduleSummary: "Two-day event — session details shared with confirmed guests",
    location:
      "Fairmont Dubai, Sheikh Zayed Road, Trade Centre — Dubai, United Arab Emirates",
    excerpt:
      "A focused weekend event at Fairmont Dubai featuring premium project showcases, expert consultations, and private guidance from the ARK Vision team.",
    imageSrc:
      "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?w=960&q=80",
  },
  {
    title: "Dubai's Biggest Property Expo — Multi-developer × ARK Vision Real Estate",
    dates: ["2026-04-25", "2026-04-26"],
    scheduleSummary:
      "Weekend exhibition — daily session times shared when you register",
    location:
      "Fairmont Dubai, Sheikh Zayed Road, Trade Centre — Dubai, United Arab Emirates",
    excerpt:
      "Dubai's largest property showcase — multiple developers × ARK Vision Real Estate. Leading names, new launches, and private advisory sessions across the weekend at Fairmont Dubai.",
    imageSrc:
      "https://images.unsplash.com/photo-1748373448914-1d7f882700e2?w=960&q=80",
  },
];

function eventDayDate(isoDate: string, timeZone: string): Date {
  const offset = EVENT_DAY_REF_OFFSET[timeZone] ?? "+04:00";
  return new Date(`${isoDate}T12:00:00${offset}`);
}

function eventParts(isoDate: string, timeZone: string) {
  const d = eventDayDate(isoDate, timeZone);
  const o = { timeZone };
  return {
    weekdayShort: new Intl.DateTimeFormat("en-US", { ...o, weekday: "short" }).format(d),
    weekdayLong: new Intl.DateTimeFormat("en-US", { ...o, weekday: "long" }).format(d),
    dayNum: new Intl.DateTimeFormat("en-US", { ...o, day: "numeric" }).format(d),
    monthShort: new Intl.DateTimeFormat("en-US", { ...o, month: "short" }).format(d).toUpperCase(),
    monthLong: new Intl.DateTimeFormat("en-US", { ...o, month: "long" }).format(d),
    year: new Intl.DateTimeFormat("en-US", { ...o, year: "numeric" }).format(d),
  };
}

function formatDateRangeLabel(dates: string[], timeZone: string): string {
  if (dates.length === 0) return "";
  const parts = dates.map((iso) => eventParts(iso, timeZone));
  if (dates.length === 1) {
    const p = parts[0];
    return `${p.weekdayLong}, ${p.monthLong} ${p.dayNum}, ${p.year}`;
  }
  const a = parts[0];
  const b = parts[parts.length - 1];
  if (a.monthLong === b.monthLong && a.year === b.year) {
    return `${a.monthLong} ${a.dayNum}–${b.dayNum}, ${a.year}`;
  }
  return `${a.monthLong} ${a.dayNum}, ${a.year} – ${b.monthLong} ${b.dayNum}, ${b.year}`;
}

function EventDateStrip({
  dates,
  timeZone,
  timeZoneLabel,
}: {
  dates: string[];
  timeZone: string;
  timeZoneLabel: string;
}) {
  const years = [...new Set(dates.map((d) => eventParts(d, timeZone).year))];
  const yearLine = years.length === 1 ? years[0] : years.join(" · ");

  return (
    <div className="flex flex-wrap items-end gap-3 sm:gap-5">
      {dates.map((iso) => {
        const p = eventParts(iso, timeZone);
        return (
          <div key={iso} className="flex items-baseline gap-2 border-l-2 border-[#c9a84c]/60 pl-3">
            <span className="text-xs font-medium uppercase tracking-wide text-[#c9a84c]">
              {p.weekdayShort}
            </span>
            <span
              className="font-serif text-3xl font-light tabular-nums text-white/90"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {p.dayNum}
            </span>
            <span className="text-sm text-white/50">{p.monthShort}</span>
          </div>
        );
      })}
      <span className="w-full text-xs text-white/40 sm:w-auto sm:pl-1">
        {yearLine} · {timeZoneLabel}
      </span>
    </div>
  );
}

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <section className="border-b border-white/5 py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-6 md:px-20">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-gradient-to-r from-[#c9a84c] to-transparent" />
              <span className="text-[10px] font-light uppercase tracking-[5px] text-[#c9a84c]">
                Gatherings
              </span>
            </div>
            <h1
              className="mt-4 font-serif text-4xl font-light italic text-white/90 md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Upcoming <span className="text-[#c9a84c]">Events</span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/55 md:text-base">
              Discover upcoming property showcases across the UAE and beyond — reserve your place for curated sessions
              and on-ground advisory.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[1280px] space-y-10 px-6 md:px-20">
          {events.map((ev, i) => {
            const tz = ev.timeZone ?? DEFAULT_EVENT_TZ;
            const tzLabel = ev.timeZoneLabel ?? DEFAULT_EVENT_TZ_LABEL;
            const rangeLabel = formatDateRangeLabel(ev.dates, tz);
            const weekdayLine = ev.dates.map((iso) => eventParts(iso, tz).weekdayLong).join(", ");

            return (
              <Reveal key={ev.title} delayMs={i * 60}>
                <article className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] md:flex">
                  <div className="relative aspect-[5/3] w-full shrink-0 md:aspect-auto md:w-[42%] md:max-w-md">
                    <Image
                      src={ev.imageSrc}
                      alt={ev.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 360px"
                      priority={i === 0}
                      unoptimized
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-center gap-6 p-6 md:gap-7 md:p-8 lg:p-10">
                    <div className="w-fit rounded-full border border-[#c9a84c]/40 bg-[#c9a84c]/10 px-3 py-1 text-[10px] uppercase tracking-[2px] text-[#e2c779]">
                      {ev.badge ?? "Local Event"}
                    </div>
                    <EventDateStrip dates={ev.dates} timeZone={tz} timeZoneLabel={tzLabel} />

                    <div>
                      <h2
                        className="font-serif text-xl font-medium leading-snug text-white/90 md:text-2xl"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {ev.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-white/50">{ev.excerpt}</p>
                    </div>

                    <div className="space-y-4 border-t border-white/10 pt-5 text-sm">
                      <div className="flex gap-3">
                        <Calendar size={16} className="mt-0.5 shrink-0 text-[#c9a84c]" aria-hidden />
                        <div>
                          <p className="text-[11px] uppercase tracking-wide text-white/40">When</p>
                          <p className="mt-0.5 text-white/85">
                            {rangeLabel}
                            <span className="text-white/40"> · </span>
                            <span className="text-white/55">{weekdayLine}</span>
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Clock size={16} className="mt-0.5 shrink-0 text-[#c9a84c]" aria-hidden />
                        <div>
                          <p className="text-[11px] uppercase tracking-wide text-white/40">Hours</p>
                          <p className="mt-0.5 text-white/70">{ev.scheduleSummary}</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <MapPin size={16} className="mt-0.5 shrink-0 text-[#c9a84c]" aria-hidden />
                        <div>
                          <p className="text-[11px] uppercase tracking-wide text-white/40">Where</p>
                          <p className="mt-0.5 text-white/70">{ev.location}</p>
                        </div>
                      </div>
                    </div>

                    <Link
                      href="/#contact"
                      className="btn-magnetic inline-flex w-fit items-center gap-2 border border-[#c9a84c]/50 px-5 py-2.5 text-sm text-[#c9a84c] transition-colors hover:bg-[#c9a84c] hover:text-[#060606]"
                    >
                      Request invitation <span aria-hidden>→</span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-t border-white/10 py-16 md:py-20">
        <Reveal>
          <div className="mx-auto max-w-lg px-6 text-center md:px-8">
            <h2
              className="font-serif text-2xl font-light italic text-white/90 md:text-3xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Host a private event with ARK Vision
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/50">
              Bespoke viewings and corporate hospitality for qualified buyers and partners.
            </p>
            <Link
              href="/#contact"
              className="btn-magnetic mt-8 inline-block bg-[#c9a84c] px-8 py-3 text-sm font-medium text-[#060606] hover:bg-[#fcf6ba]"
            >
              Contact us
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
