"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import type { ProjectDetailPayload } from "@/lib/propertyData";
import { featuredEvent } from "@/data/featuredEvent";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  MapPin,
  Sparkles,
  X,
} from "lucide-react";

type Props = {
  /** Kept so the homepage call site stays unchanged; unused while an event is featured. */
  data?: ProjectDetailPayload | null;
};

let hasShownPropertyOfMonthPopup = false;

export default function PropertyOfMonthPopup({}: Props) {
  const [open, setOpen] = useState(false);

  const closePopup = useCallback(() => setOpen(false), []);

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
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, closePopup]);

  if (!open) return null;

  const ev = featuredEvent;

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
      >
        <button
          type="button"
          onClick={closePopup}
          className="absolute right-3 top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white/70 backdrop-blur transition hover:border-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#060606]"
          aria-label="Close event popup"
        >
          <X size={18} />
        </button>

        <section className="relative min-h-[210px] overflow-hidden bg-black sm:min-h-[260px] lg:min-h-[430px]">
          <Image
            src={ev.imageSrc}
            alt={ev.title}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 540px"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          <div className="absolute bottom-8 left-6 right-6 z-10 hidden sm:block">
            <p className="inline-flex border border-[#c9a84c]/35 bg-black/55 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[#c9a84c] backdrop-blur">
              {ev.eyebrow}
            </p>
          </div>
        </section>

        <section className="overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
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
