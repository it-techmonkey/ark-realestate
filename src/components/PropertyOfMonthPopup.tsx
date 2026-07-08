"use client";

import Image from "next/image";
import Link from "next/link";
import type { TouchEvent } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import InquireModal from "@/components/InquireModal";
import type { ProjectDetailPayload } from "@/lib/propertyData";
import {
  ArrowRight,
  BedDouble,
  Building2,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Home,
  MapPin,
  Ruler,
  X,
} from "lucide-react";

type Props = {
  data: ProjectDetailPayload | null;
};

let hasShownPropertyOfMonthPopup = false;

export default function PropertyOfMonthPopup({ data }: Props) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [inquireOpen, setInquireOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const images = useMemo(() => {
    if (!data) return [];
    return Array.from(new Set([data.listing.image, ...data.gallery].filter(Boolean))).slice(0, 8);
  }, [data]);

  const closePopup = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!data) return;
    if (hasShownPropertyOfMonthPopup) return;

    let frame = 0;
    const showPopup = () => {
      frame = window.requestAnimationFrame(() => setOpen(true));
    };

    hasShownPropertyOfMonthPopup = true;
    showPopup();

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [data]);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!data) return null;

  const { listing } = data;
  const propertyHref = `/properties/${listing.slug}`;
  const activeImage = images[activeIndex] ?? listing.image;

  const previousImage = () => {
    setActiveIndex((idx) => (idx === 0 ? images.length - 1 : idx - 1));
  };

  const nextImage = () => {
    setActiveIndex((idx) => (idx === images.length - 1 ? 0 : idx + 1));
  };

  const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
    if (touchStartX === null || images.length < 2) return;

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
    const deltaX = touchEndX - touchStartX;

    if (Math.abs(deltaX) > 48) {
      if (deltaX > 0) previousImage();
      else nextImage();
    }

    setTouchStartX(null);
  };

  const openInquiry = () => {
    setInquireOpen(true);
  };

  return (
    <>
      {open ? (
        <div
          className="absolute inset-0 z-[30] grid place-items-center bg-black/42 p-3 backdrop-blur-0 sm:p-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby="property-of-month-title"
        >
          <div className="relative grid max-h-[calc(100vh-36px)] w-full max-w-[860px] overflow-hidden rounded-lg border border-white/15 bg-[#080808] shadow-[0_22px_68px_-30px_rgba(0,0,0,0.95)] lg:max-h-[86vh] lg:grid-cols-[0.95fr_0.94fr]">
            <button
              type="button"
              onClick={closePopup}
              className="absolute right-3 top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white/70 backdrop-blur transition hover:border-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#060606]"
              aria-label="Close Property of the Month popup"
            >
              <X size={18} />
            </button>

            <section
              className="relative min-h-[210px] touch-pan-y overflow-hidden bg-black sm:min-h-[260px] lg:min-h-[430px]"
              onTouchStart={(event) => setTouchStartX(event.touches[0]?.clientX ?? null)}
              onTouchEnd={handleTouchEnd}
            >
              <Image
                src={activeImage}
                alt={listing.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 540px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {images.length > 1 ? (
                <>
                  <div className="absolute inset-x-0 top-1/2 z-20 hidden -translate-y-1/2 justify-between px-4 sm:flex">
                    <button
                      type="button"
                      onClick={previousImage}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur transition hover:border-[#c9a84c] hover:bg-[#c9a84c] hover:text-black"
                      aria-label="Previous property image"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      type="button"
                      onClick={nextImage}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur transition hover:border-[#c9a84c] hover:bg-[#c9a84c] hover:text-black"
                      aria-label="Next property image"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 z-20 hidden items-center justify-center gap-2 sm:flex">
                    {images.map((src, index) => (
                      <button
                        key={`${src}-${index}`}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className={`h-1.5 rounded-full transition-all ${
                          activeIndex === index ? "w-8 bg-[#c9a84c]" : "w-2 bg-white/45"
                        }`}
                        aria-label={`Show property image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              ) : null}

              <div className="absolute bottom-8 left-6 right-6 z-10 hidden sm:block">
                <p className="inline-flex border border-[#c9a84c]/35 bg-black/55 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[#c9a84c] backdrop-blur">
                  {listing.credenceCategory}
                </p>
              </div>
            </section>

            <section className="overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-[#c9a84c] to-transparent" />
                <p className="text-[10px] font-light uppercase tracking-[0.34em] text-[#c9a84c]">
                  Property of the Month
                </p>
              </div>

              <h2
                id="property-of-month-title"
                className="mt-2.5 font-serif text-[27px] font-light italic leading-tight text-white sm:text-[30px]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {listing.title}
              </h2>

              <p className="mt-2.5 flex items-center gap-2 text-sm text-white/55">
                <MapPin size={15} className="shrink-0 text-[#c9a84c]" />
                {listing.location}
              </p>

              <p className="mt-2.5 font-serif text-[21px] font-medium text-[#c9a84c]">
                {listing.price}
              </p>

              {listing.excerpt ? (
                <p className="mt-3 line-clamp-2 text-sm font-light leading-relaxed text-white/62">
                  {listing.excerpt}
                </p>
              ) : null}

              <dl className="mt-4 hidden grid-cols-2 gap-2 sm:grid">
                <PopupStat icon={<Building2 size={16} />} label="Developer" value={listing.builder} />
                <PopupStat icon={<Home size={16} />} label="Type" value={listing.propertyKind} />
                <PopupStat
                  icon={<CalendarDays size={16} />}
                  label="Handover"
                  value={listing.readyDate || "Ready"}
                />
                <PopupStat
                  icon={<BedDouble size={16} />}
                  label="Bedrooms"
                  value={listing.maxBedroomsFromUnits > 0 ? `${listing.maxBedroomsFromUnits}` : `${listing.beds}`}
                />
                <div className="col-span-2">
                  <PopupStat icon={<Ruler size={16} />} label="Area" value={listing.sqft} />
                </div>
              </dl>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={propertyHref}
                  className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-[#c9a84c] bg-[#c9a84c]/12 px-5 text-sm font-light text-[#c9a84c] transition hover:bg-[#c9a84c] hover:text-[#060606]"
                >
                  View Property
                  <ArrowRight size={15} />
                </Link>
                <button
                  type="button"
                  onClick={openInquiry}
                  className="hidden h-11 flex-1 rounded-lg border border-white/20 bg-white/[0.05] px-5 text-sm font-light text-white/85 transition hover:border-[#c9a84c] hover:text-[#c9a84c] sm:block"
                >
                  Enquire Now
                </button>
              </div>
            </section>
          </div>
        </div>
      ) : null}

      <InquireModal
        listing={inquireOpen ? listing : null}
        onClose={() => setInquireOpen(false)}
        placement="top"
      />
    </>
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
      <dd className="mt-1.5 break-words text-sm font-light capitalize text-white/82">
        {value}
      </dd>
    </div>
  );
}
