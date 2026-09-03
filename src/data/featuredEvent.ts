/**
 * Featured event shown in the homepage popup.
 *
 * Single source of truth: the events page renders this same object as its
 * first card, so popup and listing can never drift apart. Update the details
 * here and both surfaces follow.
 */
export const featuredEvent = {
  eyebrow: "Featured Event",
  title: "AZIZI Crazy Studio Sale",
  subtitle: "2 Days Event Only",
  /** ISO date, used by the events page date strip. */
  date: "2026-09-05",
  /** All event days, used by the events page date strip. */
  dates: ["2026-09-05", "2026-09-06"],
  dateLabel: "Saturday & Sunday, 5–6 September 2026",
  timeLabel: "10:00 AM to 9:00 PM",
  venue: "Office 1302, 13th Floor, Conrad Sales Office Tower — Waterfront Gated Community, Dubai",
  priceLine: "Waterfront Gated Community",
  highlights: [
    "Two-day studio sale at the Azizi Waterfront gated community",
    "Free valet parking",
    "Food and beverages",
  ],
  imageSrc: "/Events/download%20-%202026-09-03T084219.565.jpg",
  ctaHref: "/#contact",
} as const;
