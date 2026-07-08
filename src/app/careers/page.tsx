import Link from "next/link";
import { Play } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const HIRING_VIDEO_SRC = "/video/hiring%20video.mp4";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <section className="border-b border-white/5 py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-6 md:px-20">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-gradient-to-r from-[#c9a84c] to-transparent" />
              <span className="text-[10px] font-light uppercase tracking-[5px] text-[#c9a84c]">
                Join ARK Vision
              </span>
            </div>
            <h1
              className="mt-4 font-serif text-4xl font-light italic text-white/90 md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              We&apos;re <span className="text-[#c9a84c]">Hiring</span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/55 md:text-base">
              Build your career with a team shaping premium real estate advisory in Dubai and beyond.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-white/10 py-12 md:py-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-20">
          <Reveal>
            <article className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] md:flex md:flex-row-reverse">
              <Link
                href="/#contact"
                className="group relative aspect-video w-full shrink-0 overflow-hidden bg-black md:w-[58%]"
                aria-label="Contact ARK Vision about career opportunities"
              >
                <video
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={HIRING_VIDEO_SRC} type="video/mp4" />
                </video>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-4 py-2 text-[10px] uppercase tracking-[3px] text-white/80 backdrop-blur-sm transition group-hover:border-[#c9a84c]/60 group-hover:text-[#fcf6ba]">
                    <Play size={14} fill="currentColor" aria-hidden />
                    Join our team
                  </div>
                </div>
              </Link>

              <div className="flex flex-1 flex-col justify-center gap-5 p-6 md:p-8 lg:p-10">
                <div className="w-fit rounded-full border border-[#c9a84c]/40 bg-[#c9a84c]/10 px-3 py-1 text-[10px] uppercase tracking-[2px] text-[#e2c779]">
                  Careers at ARK Vision
                </div>
                <div className="flex items-center gap-3 text-[#c9a84c]">
                  <Play size={16} fill="currentColor" aria-hidden />
                  <span className="text-[10px] uppercase tracking-[3px] text-white/45">
                    We are hiring
                  </span>
                </div>
                <div>
                  <h2
                    className="font-serif text-xl font-medium leading-snug text-white/90 md:text-2xl"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    Grow with ARK Vision
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55">
                    Join an ambitious team built on integrity, expertise, and a shared commitment to exceptional client experiences.
                  </p>
                </div>
                <Link
                  href="/#contact"
                  className="btn-magnetic inline-flex w-fit items-center gap-2 border border-[#c9a84c]/50 px-5 py-2.5 text-sm text-[#c9a84c] transition-colors hover:bg-[#c9a84c] hover:text-[#060606]"
                >
                  Contact us <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
