import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Quote,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const SECTION_TITLE_CLASS = "text-sm font-semibold uppercase tracking-[0.28em] text-[#c9a84c]";

const keyStats = [
  { value: "1000+", label: "Roadshows completed" },
  { value: "20+", label: "Countries covered" },
  { value: "10+ yrs", label: "Advisory experience" },
];

const markets = [
  {
    name: "Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80",
    points: [
      "High rental yield potential (6-10%)",
      "Tax-efficient income environment",
      "Strong global investor demand",
    ],
  },
  {
    name: "Bangkok",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1400&q=80",
    points: [
      "Fast-growing metropolitan market",
      "Strong rental demand",
      "Attractive long-term appreciation profile",
    ],
  },
  {
    name: "Pattaya",
    image:
      "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=1400&q=80",
    points: [
      "Affordable entry points",
      "Tourism-led holiday rental opportunity",
      "Growing investor participation",
    ],
  },
  {
    name: "Phuket",
    image:
      "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1400&q=80",
    points: [
      "Premium vacation market",
      "Short-term rental demand",
      "Global tourism-led liquidity",
    ],
  },
];

const reasons = [
  "Direct access to global developers",
  "Verified projects with return-focused filtering",
  "Support across legal, tax, financing, and management",
  "Event-only pricing windows and early inventory access",
];

const testimonials = [
  {
    quote:
      "Investing in Dubai felt complex until ARK Vision guided me. Smooth, transparent, and highly professional.",
    author: "Investor, Mumbai",
  },
  {
    quote:
      "Great exposure to Thailand markets. ARK Vision helped me diversify beyond India with confidence.",
    author: "Investor, Delhi",
  },
];

const globalPopularityPoints = [
  {
    title: "Stable and predictable income",
    detail:
      "Markets like Dubai and Thailand offer steady rental demand that supports recurring passive income.",
  },
  {
    title: "Asset-backed ownership",
    detail:
      "Real estate is a tangible asset that can be owned, leveraged, and transferred across generations.",
  },
  {
    title: "Currency hedge",
    detail:
      "Earning in stronger currencies like AED or THB can reduce INR depreciation risk.",
  },
  {
    title: "Portfolio diversification",
    detail: "Geographic diversification helps spread risk beyond a single domestic market.",
  },
  {
    title: "Tax efficiency",
    detail: "Tax-friendly structures in select markets can improve net rental returns.",
  },
];

const smartInvestorPoints = [
  "They balance mutual funds and equity with real estate, rather than choosing only one asset class.",
  "They prioritize predictable cash flow plus long-term appreciation over speculation alone.",
  "They expand internationally to unlock stronger and more diversified opportunities.",
];

const shiftPoints = [
  "Allocating 20-40% of portfolio exposure to real estate",
  "Exploring international markets for better yields",
  "Prioritizing passive income over speculative gains",
];

const faqs = [
  {
    q: "Is there any fee to attend the roadshow?",
    a: "No. Participation is complimentary for selected attendees.",
  },
  {
    q: "Can I book a property during the event?",
    a: "Yes. You can block units and proceed at event-specific pricing windows.",
  },
  {
    q: "Do you provide post-purchase support?",
    a: "Yes. We support legal coordination, management, and rental handholding.",
  },
];

export default function InternationalPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#080808]">
      <section className="relative border-b border-white/5 py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_0%,rgba(201,168,76,0.12),transparent_40%),radial-gradient(circle_at_86%_12%,rgba(252,246,186,0.08),transparent_34%)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1800&q=80)",
            backgroundPosition: "center 35%",
            backgroundSize: "cover",
          }}
        />
        <div className="mx-auto max-w-[1280px] px-6 md:px-20">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-gradient-to-r from-[#c9a84c] to-transparent" />
              <span className="text-[10px] font-light uppercase tracking-[5px] text-[#c9a84c]">
                Global Opportunities
              </span>
            </div>
            <div className="mt-5 grid items-end gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h1
                  className="font-serif text-4xl font-light italic text-white/90 md:text-5xl lg:text-6xl"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  ARK Vision <span className="text-[#c9a84c]">International</span>
                </h1>
                <p className="mt-5 max-w-2xl font-light text-sm leading-relaxed text-white/50 md:text-base">
                  We connect investors with vetted international real estate opportunities through
                  structured roadshows, market-led advisory, and end-to-end execution support.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-sm">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#c9a84c]">At a glance</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {keyStats.map((item) => (
                    <div key={item.label} className="border-l border-[#c9a84c]/60 pl-3">
                      <p
                        className="font-serif text-2xl font-light text-[#fcf6ba]"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {item.value}
                      </p>
                      <p className="text-xs text-white/60">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-white/10 py-8 md:py-10">
        <div className="mx-auto max-w-[1280px] px-6 md:px-20">
          <Reveal>
            <div className="grid gap-4 rounded-xl border border-[#c9a84c]/35 bg-gradient-to-r from-[#c9a84c]/10 via-[#111111] to-[#111111] p-5 md:grid-cols-[1fr_auto] md:items-center md:p-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c9a84c]">
                  New Lead Magnet
                </p>
                <h2
                  className="mt-2 font-serif text-2xl font-medium text-white/92 md:text-3xl"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  UAE Market Report 2026
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-white/65">
                  Capture qualified leads with a premium Dubai market intelligence pack: pricing bands,
                  rental yield benchmarks, and investor-entry strategy.
                </p>
              </div>
              <Link
                href="/#contact"
                className="btn-magnetic inline-flex items-center justify-center gap-2 rounded-md border border-[#c9a84c]/65 bg-[#c9a84c]/12 px-6 py-3 text-sm font-medium text-[#fcf6ba] transition-colors hover:bg-[#c9a84c] hover:text-[#060606]"
              >
                Get UAE Market Report <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-white/10 py-12 md:py-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-20">
          <div className="mb-7 flex items-center gap-2 text-[#c9a84c]">
            <Target size={16} />
            <h2 className={SECTION_TITLE_CLASS}>Roadshow Journey</h2>
          </div>
          <div className="relative space-y-4 pl-6 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-gradient-to-b before:from-[#c9a84c]/70 before:to-white/10">
            {[
              "Discover markets and compare opportunity bands",
              "Meet developers and evaluate verified inventory",
              "Structure legal, tax, and financing plan",
              "Book, execute, and activate rental support",
            ].map((step, idx) => (
              <Reveal key={step}>
                <div className="relative rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <span className="absolute -left-[26px] top-4 flex h-4 w-4 items-center justify-center rounded-full border border-[#c9a84c]/70 bg-[#080808] text-[9px] text-[#c9a84c]">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-white/75">{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-12 md:py-16">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-6 lg:grid-cols-[1.05fr_1fr] md:px-20">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="mb-4 flex items-center gap-2 text-[#c9a84c]">
                <ShieldCheck size={16} />
                <h2 className={SECTION_TITLE_CLASS}>Who It Is For</h2>
              </div>
              <ul className="grid gap-3 text-sm text-white/75 sm:grid-cols-2">
                <li className="rounded-md bg-white/[0.02] px-3 py-2">HNIs and business owners</li>
                <li className="rounded-md bg-white/[0.02] px-3 py-2">First-time international investors</li>
                <li className="rounded-md bg-white/[0.02] px-3 py-2">NRIs and global families</li>
                <li className="rounded-md bg-white/[0.02] px-3 py-2">Passive income focused investors</li>
                <li className="rounded-md bg-white/[0.02] px-3 py-2 sm:col-span-2">
                  Buyers combining lifestyle and investment goals
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <div className="mb-4 flex items-center gap-2 text-[#c9a84c]">
                <TrendingUp size={16} />
                <h2 className={SECTION_TITLE_CLASS}>What You Gain</h2>
              </div>
              <div className="space-y-3">
                {[
                  "Clear understanding of international property investing",
                  "Access to pre-launch and event-only opportunities",
                  "Personalized strategy for yield, growth, and diversification",
                  "Support from selection and booking to post-purchase management",
                ].map((item) => (
                  <div key={item} className="rounded-md border border-white/10 px-4 py-3 text-sm text-white/75">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-white/10 py-12 md:py-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-20">
          <div className="mb-6 flex items-center gap-2 text-[#c9a84c]">
            <Globe size={16} />
            <h2 className={SECTION_TITLE_CLASS}>Featured Markets</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {markets.map((market, idx) => (
              <Reveal key={market.name}>
                <article className="grid overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] sm:grid-cols-[auto_1fr] sm:gap-4">
                  <div
                    className="relative h-40 w-full bg-cover bg-center sm:col-span-2"
                    style={{ backgroundImage: `url(${market.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/45 to-transparent" />
                    <h3
                      className="absolute bottom-3 left-4 font-serif text-2xl font-light text-white/95"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {market.name}
                    </h3>
                  </div>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#c9a84c]/60 text-sm text-[#c9a84c] sm:mb-0">
                    {idx + 1}
                  </div>
                  <div className="px-5 pb-5 sm:px-0 sm:py-5">
                    <ul className="space-y-2 text-sm text-white/65">
                      {market.points.map((point) => (
                        <li key={point}>- {point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-12 md:py-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-20">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <h2 className={SECTION_TITLE_CLASS}>
                  About ARK Vision International Real Estate
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/65 md:text-base">
                  At ARK Vision International Real Estate, we help investors build diversified global
                  property portfolios through verified inventory, transparent advisory, and end-to-end
                  execution support.
                </p>
              </div>
              <div className="grid gap-3">
                {["Verified Projects Only", "Transparent Advisory", "End-to-End Support"].map((item) => (
                  <div key={item} className="rounded-md border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white/75">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-white/10 py-12 md:py-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-20">
          <h2 className={SECTION_TITLE_CLASS}>
            Why Global Real Estate Is Gaining Popularity
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {globalPopularityPoints.map((item) => (
              <Reveal key={item.title}>
                <article className="rounded-md border border-white/10 bg-white/[0.02] p-4">
                  <h3 className="text-sm font-medium text-white/90">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{item.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-12 md:py-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-20">
          <h2 className={SECTION_TITLE_CLASS}>Why Attend</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {reasons.map((item) => (
              <div key={item} className="rounded-md border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white/75">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-12 md:py-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-20">
          <h2 className={SECTION_TITLE_CLASS}>Smart Investors Think Differently</h2>
          <ul className="mt-5 space-y-3">
            {smartInvestorPoints.map((item) => (
              <Reveal key={item}>
                <li className="rounded-md border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white/75">
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-white/10 py-12 md:py-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-20">
          <h2 className={SECTION_TITLE_CLASS}>The Shift Is Already Happening</h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-3">
            {shiftPoints.map((item) => (
              <Reveal key={item}>
                <li className="rounded-md border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white/75">
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-white/10 py-12 md:py-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-20">
          <h2 className={SECTION_TITLE_CLASS}>The Bottom Line</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70 md:text-base">
            Wealth is not built by one asset class. It is built through smart, disciplined diversification.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 py-12 md:py-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-20">
          <h2 className={SECTION_TITLE_CLASS}>Client Testimonials</h2>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {testimonials.map((item) => (
              <Reveal key={item.author}>
                <blockquote className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
                  <Quote size={16} className="text-[#c9a84c]" />
                  <p className="mt-3 text-sm leading-relaxed text-white/75">"{item.quote}"</p>
                  <footer className="mt-3 text-xs uppercase tracking-wide text-white/45">{item.author}</footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-12 md:py-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-20">
          <h2 className={SECTION_TITLE_CLASS}>Want to Explore Global Opportunities?</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {[
              "Invest in Dubai and Thailand opportunities",
              "Generate rental income in global currencies",
              "Build a future-ready real estate portfolio",
            ].map((item) => (
              <Reveal key={item}>
                <div className="rounded-md border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white/75">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
          <Link
            href="/#contact"
            className="btn-magnetic mt-6 inline-flex items-center gap-2 border border-[#c9a84c]/60 bg-[#c9a84c]/10 px-6 py-2.5 text-sm text-[#c9a84c] transition-colors hover:bg-[#c9a84c] hover:text-[#060606]"
          >
            Apply for Exclusive Access <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <section className="border-b border-white/10 py-12 md:py-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-20">
          <h2 className={SECTION_TITLE_CLASS}>FAQs</h2>
          <div className="mt-5 space-y-3">
            {faqs.map((item) => (
              <Reveal key={item.q}>
                <article className="rounded-md border border-white/10 bg-white/[0.02] p-4">
                  <h3 className="text-sm font-medium text-white/88">{item.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{item.a}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[720px] px-6 text-center">
          <h2
            className="font-serif text-3xl font-light italic text-white/90 md:text-4xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Reserve your spot
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/55 md:text-base">
            Reserve your seat for upcoming sessions and get direct access to global developers and
            vetted international projects.
          </p>
          <Link
            href="/#contact"
            className="btn-magnetic mt-8 inline-block border border-[#c9a84c]/60 px-8 py-3 text-sm text-[#c9a84c] transition-colors hover:bg-[#c9a84c] hover:text-[#060606]"
          >
            Apply for Exclusive Invitation
          </Link>
        </div>
      </section>
    </div>
  );
}
