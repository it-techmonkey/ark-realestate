/**
 * Featured events shown in the homepage popup carousel.
 *
 * Single source of truth: the events page renders these same objects as its
 * first cards, so popup and listing can never drift apart. Update the
 * details here and both surfaces follow.
 */
export type FeaturedEvent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  /** ISO date, used by the events page date strip. */
  date: string;
  /** All event days, used by the events page date strip. */
  dates: string[];
  dateLabel: string;
  timeLabel: string;
  venue: string;
  priceLine: string;
  highlights: string[];
  imageSrc: string;
  ctaHref: string;
  /** IANA timezone for the events page date strip; defaults to Dubai there. */
  timeZone?: string;
  timeZoneLabel?: string;
  /** Events page: show the whole portrait flyer (9:16) instead of a cropped cover. */
  fullFlyer?: boolean;
};

export const featuredEvents: FeaturedEvent[] = [
  {
    eyebrow: "International Event",
    title: "Dubai Property Showcase — Amsterdam",
    subtitle: "One Day Event Only",
    date: "2026-11-01",
    dates: ["2026-11-01"],
    dateLabel: "Sunday, 1 November 2026",
    timeLabel: "10:00 AM to 8:00 PM",
    venue: "Crowne Plaza Hotel Amsterdam",
    priceLine: "Apartments €170K onwards · Townhouses €700K onwards",
    highlights: [
      "Invest and get a UAE Golden Visa",
      "Free Dubai trip vouchers",
      "DAMAC, Danube, Binghatti, Sobha and AZIZI under one roof",
    ],
    imageSrc: "/Events/Hague-Amsterdam.jpg",
    ctaHref: "/#contact",
    timeZone: "Europe/Amsterdam",
    timeZoneLabel: "Amsterdam (CET)",
    fullFlyer: true,
  },
  {
    eyebrow: "International Event",
    title: "Dubai Property Showcase — The Hague",
    subtitle: "One Day Event Only",
    date: "2026-10-31",
    dates: ["2026-10-31"],
    dateLabel: "Saturday, 31 October 2026",
    timeLabel: "10:00 AM to 8:00 PM",
    venue: "Hilton Hague, The Hague",
    priceLine: "Apartments €170K onwards · Townhouses €700K onwards",
    highlights: [
      "Invest and get a UAE Golden Visa",
      "Free Dubai trip vouchers",
      "DAMAC, Danube, Binghatti, Sobha and AZIZI under one roof",
    ],
    imageSrc: "/Events/Hague-Amsterdam.jpg",
    ctaHref: "/#contact",
    timeZone: "Europe/Amsterdam",
    timeZoneLabel: "The Hague (CET)",
    fullFlyer: true,
  },
  {
    eyebrow: "International Event",
    title: "Dubai's Biggest Property Exhibition — Chennai",
    subtitle: "2 Days Event Only",
    date: "2026-10-17",
    dates: ["2026-10-17", "2026-10-18"],
    dateLabel: "Saturday & Sunday, 17–18 October 2026",
    timeLabel: "10:00 AM to 8:00 PM",
    venue: "ITC Grand Chola, Chennai",
    priceLine: "Apartments from ₹2 Cr",
    highlights: [
      "Exclusive apartments and townhouses in Dubai",
      "Flexible payment plans, UAE Golden Visa, tax-free income",
      "DAMAC, Danube, Binghatti, Sobha and AZIZI",
    ],
    imageSrc: "/Events/WhatsApp%20Image%202026-10-03%20at%206.23.48%20PM.jpeg",
    ctaHref: "/#contact",
    timeZone: "Asia/Kolkata",
    timeZoneLabel: "Chennai (IST)",
    fullFlyer: true,
  },
  {
    eyebrow: "Local Event",
    title: "Crazy DAMAC Discounts",
    subtitle: "One Day Event Only",
    date: "2026-10-17",
    dates: ["2026-10-17"],
    dateLabel: "Saturday, 17 October 2026",
    timeLabel: "10:00 AM to 9:00 PM",
    venue: "Radisson Hotel Dubai, DAMAC Hills",
    priceLine: "Apartments from AED 680,000 · Townhouses from AED 2.9M",
    highlights: [
      "Ready properties. Monthly payments from AED 1,700 (apartments) and AED 7,500 (townhouses)",
      "8% discount, 4% DLD waiver, 50/50 payment plan and 0.25% monthly EMI",
      "Food, beverages and valet parking",
    ],
    imageSrc: "/Events/Damac-Crazy-Discounts.jpg",
    ctaHref: "/#contact",
    fullFlyer: true,
  },
];
