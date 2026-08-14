/**
 * Featured event shown in the homepage popup.
 *
 * Single source of truth: the events page renders this same object as its
 * first card, so popup and listing can never drift apart. Update the details
 * here and both surfaces follow.
 */
export const featuredEvent = {
  eyebrow: "Featured Event",
  title: "All Developers Under One Roof",
  subtitle: "Multi Developer Property Showcase",
  /** ISO date, used by the events page date strip. */
  date: "2026-08-22",
  dateLabel: "Saturday, 22 August 2026",
  timeLabel: "10:00 AM to 10:00 PM",
  venue: "Metropolitan Hotel, Sheikh Zayed Road, Dubai",
  priceLine: "Apartments from AED 500,000",
  highlights: [
    "Apartments starting from AED 500,000",
    "Townhouses starting from AED 2.8 million",
    "Spin the wheel on every booking to win exciting prizes",
  ],
  imageSrc: "/Events/dubai-metropolitan-hotel-picture-1-1.webp",
  ctaHref: "/#contact",
} as const;
