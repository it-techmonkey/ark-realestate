export type LeadershipProfile = {
  name: string;
  designation: string;
  email?: string;
  image: string;
  /** Anchor crop to top so heads are not clipped in portrait frames */
  objectPositionTop?: boolean;
  /** Bypass optimization for problematic source encodings on live */
  unoptimized?: boolean;
};

const LEADERS_BASE = "/final%20images/Leaders";

export const leadershipProfiles: LeadershipProfile[] = [
  {
    name: "Karan Hotchandani",
    designation: "Founder",
    image: `${LEADERS_BASE}/karan boss (1).png`,
  },
  {
    name: "Vinay Chelani",
    designation: "Founder",
    image: `${LEADERS_BASE}/vinay boss.png`,
    unoptimized: true,
  },
  {
    name: "Arpana Singh",
    designation: "Vice President",
    image: `/Director%20of%20sales/Arpana.JPG`,
    objectPositionTop: true,
    unoptimized: true,
  },
  {
    name: "Vinit Chelani",
    designation: "Vice President",
    image: `${LEADERS_BASE}/vinat sir.jpg.jpeg`,
    unoptimized: true,
  },
];
