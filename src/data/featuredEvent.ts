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
    eyebrow: "Local Event",
    title: "Halla Bol 2",
    subtitle: "Record Breaking Partnerships",
    date: "2026-10-10",
    dates: ["2026-10-10", "2026-10-11"],
    dateLabel: "Saturday & Sunday, 10–11 October 2026",
    timeLabel: "Timings to be announced",
    venue: "Dubai — venue to be announced",
    priceLine: "AED 50 Million closed at Halla Bol 1",
    highlights: [
      "Even bigger partnerships: DAMAC, Danube, AZIZI, Sanzen, Binghatti and more",
      "Reportage, Peace Homes and Alef on board",
      "Stronger partnerships, brighter tomorrows",
    ],
    imageSrc: "/Events/WhatsApp%20Image%202026-10-03%20at%206.23.46%20PM.jpeg",
    ctaHref: "/#contact",
    fullFlyer: true,
  },
  {
    eyebrow: "International Event",
    title: "Dubai Property Expo — Coimbatore",
    subtitle: "2 Days Event Only",
    date: "2026-10-10",
    dates: ["2026-10-10", "2026-10-11"],
    dateLabel: "Saturday & Sunday, 10–11 October 2026",
    timeLabel: "10:00 AM to 8:00 PM",
    venue: "Le Méridien, Coimbatore",
    priceLine: "Starting from INR 2 Cr+",
    highlights: [
      "Invest and get a UAE Golden Visa",
      "Book at the event and get a free Dubai trip",
      "DAMAC, Danube, Sobha, AZIZI and Samana under one roof",
    ],
    imageSrc: "/Events/WhatsApp%20Image%202026-10-03%20at%206.23.47%20PM.jpeg",
    ctaHref: "/#contact",
    timeZone: "Asia/Kolkata",
    timeZoneLabel: "Coimbatore (IST)",
    fullFlyer: true,
  },
  {
    eyebrow: "International Event",
    title: "Dubai Property Expo — Hyderabad",
    subtitle: "2 Days Event Only",
    date: "2026-10-10",
    dates: ["2026-10-10", "2026-10-11"],
    dateLabel: "Saturday & Sunday, 10–11 October 2026",
    timeLabel: "10:00 AM to 8:00 PM",
    venue: "Taj Krishna, Banjara Hills, Hyderabad",
    priceLine: "Apartments starting from INR 1.8 Cr+",
    highlights: [
      "Attractive payment plans and UAE Golden Visa eligibility",
      "Tax-free income benefits",
      "Premium finishes and prime waterfront locations",
    ],
    imageSrc: "/Events/event%203.jpeg",
    ctaHref: "/#contact",
    timeZone: "Asia/Kolkata",
    timeZoneLabel: "Hyderabad (IST)",
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
    eyebrow: "One-Day Event",
    title: "Property Carnival",
    subtitle: "One Day Event Only",
    date: "2026-09-19",
    dates: ["2026-09-19"],
    dateLabel: "Saturday, 19 September 2026",
    timeLabel: "10:00 AM to 9:00 PM",
    venue: "Fairmont Hotel Dubai, Sheikh Zayed Road 33rd Floor, Gulf Auditorium",
    priceLine: "Apartments from AED 500,000",
    highlights: [
      "9% discount and 2% DLD waiver on selected developers",
      "Valet parking, food and beverages",
      "Spin the wheel for exciting prizes",
    ],
    imageSrc: "/Events/WhatsApp%20Image%202026-09-17%20at%208.53.44%20PM.jpeg",
    ctaHref: "/#contact",
  },
  {
    eyebrow: "Regional Event",
    title: "Dubai Property Expo — Coimbatore",
    subtitle: "2 Days Event Only",
    date: "2026-09-26",
    dates: ["2026-09-26", "2026-09-27"],
    dateLabel: "Saturday & Sunday, 26–27 September 2026",
    timeLabel: "10:00 AM to 8:00 PM",
    venue: "Le Méridien, Coimbatore",
    priceLine: "Starting from INR 2 Cr+",
    highlights: [
      "Invest and get a UAE Golden Visa",
      "Free Dubai trip on booking at the event",
      "Dubai's top developers under one roof",
    ],
    imageSrc: "/Events/WhatsApp%20Image%202026-09-17%20at%208.53.45%20PM.jpeg",
    ctaHref: "/#contact",
  },
  {
    eyebrow: "Regional Event",
    title: "Dubai Property Expo — Bengaluru",
    subtitle: "2 Days Event Only",
    date: "2026-09-26",
    dates: ["2026-09-26", "2026-09-27"],
    dateLabel: "Saturday & Sunday, 26–27 September 2026",
    timeLabel: "10:00 AM to 8:00 PM",
    venue: "Renaissance Bengaluru Race Course Hotel",
    priceLine: "Starting from INR 1.8 Cr",
    highlights: [
      "Exclusive payment plans",
      "Invest and get a UAE Golden Visa",
      "Tax-free income",
    ],
    imageSrc: "/Events/WhatsApp%20Image%202026-09-17%20at%208.53.46%20PM.jpeg",
    ctaHref: "/#contact",
  },
];
