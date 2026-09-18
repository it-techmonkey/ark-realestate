"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ProjectDetailPayload } from "@/lib/propertyData";
import { featuredEvents } from "@/data/featuredEvent";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Sparkles,
  X,
} from "lucide-react";

type Props = {
  /** Kept so the homepage call site stays unchanged; unused while events are featured. */
  data?: ProjectDetailPayload | null;
};

const AUTOPLAY_MS = 4000;

let hasShownPropertyOfMonthPopup = false;

export default function PropertyOfMonthPopup({}: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [paused, setPaused] = useState(false);
  const total = featuredEvents.length;

  const closePopup = useCallback(() => setOpen(false), []);

  const goTo = useCallback(
    (nextIndex: number, dir: "next" | "prev") => {
      setDirection(dir);
      setIndex(((nextIndex % total) + total) % total);
    },
    [total]
  );

  const goNext = useCallback(() => goTo(index + 1, "next"), [index, goTo]);
  const goPrev = useCallback(() => goTo(index - 1, "prev"), [index, goTo]);

  useEffect(() => {
    if (hasShownPropertyOfMonthPopup) return;

    let frame = 0;
    hasShownPropertyOfMonthPopup = true;
    frame = window.requestAnimationFrame(() => setOpen(true));

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePopup();
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, closePopup, goNext, goPrev]);

  useEffect(() => {
    if (!open || paused || total <= 1) return;

    const timer = window.setTimeout(() => {
      setDirection("next");
      setIndex((i) => (i + 1) % total);
    }, AUTOPLAY_MS);

    return () => window.clearTimeout(timer);
  }, [open, paused, total, index]);

  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(deltaX) < 40) return;
    if (deltaX < 0) goNext();
    else goPrev();
  };

  if (!open) return null;

  const ev = featuredEvents[index];
  const slideAnimation =
    direction === "next"
      ? "slide-in-right 0.45s ease-out forwards"
      : "slide-in-left 0.45s ease-out forwards";

  return (
    <div
      className="absolute inset-0 z-[30] grid place-items-center bg-black/42 p-3 backdrop-blur-0 sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="property-of-month-title"
      onClick={closePopup}
    >
      <div
        className="relative grid max-h-[calc(100vh-36px)] w-full max-w-[860px] overflow-hidden rounded-lg border border-white/15 bg-[#080808] shadow-[0_22px_68px_-30px_rgba(0,0,0,0.95)] lg:max-h-[86vh] lg:grid-cols-[0.95fr_0.94fr]"
        onClick={(event) => event.stopPropagation()}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button
          type="button"
          onClick={closePopup}
          className="absolute right-3 top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white/70 backdrop-blur transition hover:border-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#060606]"
          aria-label="Close event popup"
        >
          <X size={18} />
        </button>

        <section
          className="relative min-h-[210px] overflow-hidden bg-black sm:min-h-[260px] lg:min-h-[430px]"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div key={`img-${index}`} className="absolute inset-0" style={{ animation: slideAnimation }}>
            <Image
              src={ev.imageSrc}
              alt={ev.title}
              fill
              className="object-cover object-bottom"
              sizes="(max-width: 1024px) 100vw, 540px"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
          </div>

          <div className="absolute left-4 top-4 z-10">
            <p className="inline-flex border border-[#c9a84c]/35 bg-black/55 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[#c9a84c] backdrop-blur">
              {ev.eyebrow}
            </p>
          </div>

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white/80 backdrop-blur transition hover:border-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#060606] sm:h-10 sm:w-10"
                aria-label="Previous event"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white/80 backdrop-blur transition hover:border-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#060606] sm:h-10 sm:w-10"
                aria-label="Next event"
              >
                <ChevronRight size={20} />
              </button>

              <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                {featuredEvents.map((item, i) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => goTo(i, i > index ? "next" : "prev")}
                    aria-label={`Show ${item.title}`}
                    aria-current={i === index}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-5 bg-[#c9a84c]" : "w-1.5 bg-white/35 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </section>

        <section key={`content-${index}`} className="overflow-y-auto px-5 py-5 sm:px-6 sm:py-6" style={{ animation: slideAnimation }}>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-[#c9a84c] to-transparent" />
            <p className="text-[10px] font-light uppercase tracking-[0.34em] text-[#c9a84c]">
              {ev.subtitle}
            </p>
          </div>

          <h2
            id="property-of-month-title"
            className="mt-2.5 font-serif text-[27px] font-light italic leading-tight text-white sm:text-[30px]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {ev.title}
          </h2>

          <p className="mt-2.5 flex items-center gap-2 text-sm text-white/55">
            <MapPin size={15} className="shrink-0 text-[#c9a84c]" />
            {ev.venue}
          </p>

          <p className="mt-2.5 font-serif text-[21px] font-medium text-[#c9a84c]">
            {ev.priceLine}
          </p>

          <ul className="mt-3 space-y-1.5">
            {ev.highlights.map((item) => (
              <li key={item} className="flex gap-2 text-sm font-light leading-relaxed text-white/62">
                <Sparkles size={14} className="mt-1 shrink-0 text-[#c9a84c]" aria-hidden />
                {item}
              </li>
            ))}
          </ul>

          <dl className="mt-4 grid grid-cols-2 gap-2">
            <PopupStat icon={<CalendarDays size={16} />} label="Date" value={ev.dateLabel} />
            <PopupStat icon={<Clock size={16} />} label="Time" value={ev.timeLabel} />
          </dl>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href={ev.ctaHref}
              onClick={closePopup}
              className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-[#c9a84c] bg-[#c9a84c]/12 px-5 text-sm font-light text-[#c9a84c] transition hover:bg-[#c9a84c] hover:text-[#060606]"
            >
              Request invitation
              <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

function PopupStat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="min-h-[68px] rounded-lg border border-white/10 bg-white/[0.035] p-3">
      <div className="flex items-center gap-2 text-[#c9a84c]">
        {icon}
        <dt className="text-[10px] uppercase tracking-[0.22em] text-white/38">
          {label}
        </dt>
      </div>
      <dd className="mt-1.5 break-words text-sm font-light text-white/82">
        {value}
      </dd>
    </div>
  );
}
