// src/components/History.jsx
import { useEffect, useRef, useState } from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";
import p9 from "../assets/p9.png";
import p10 from "../assets/p10.png";
import p11 from "../assets/p11.png";
import p12 from "../assets/p12.png";

/* ---------- fade-up on scroll ---------- */
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        on ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------- icons ---------- */
const lineIcon = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};
const ico = "h-6 w-6 lg:h-[calc(var(--u)*2)] lg:w-[calc(var(--u)*2)]";

const GearIcon = () => (
  <svg className={ico} {...lineIcon}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5h0a1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
  </svg>
);
const ChartIcon = () => (
  <svg className={ico} {...lineIcon}>
    <path d="M3 3v18h18" />
    <path d="m7 15 4-4 3 3 5-6" />
  </svg>
);
const RocketIcon = () => (
  <svg className={ico} {...lineIcon}>
    <path d="M5 15c-1.5 1.3-2 5-2 5s3.7-.5 5-2" />
    <path d="M12 15 9 12a22 22 0 0 1 2-4 12 12 0 0 1 11-6c0 3-1.5 8-6 11a22 22 0 0 1-4 2Z" />
    <circle cx="16" cy="8" r="1.5" />
  </svg>
);
const SparkIcon = () => (
  <svg className={ico} {...lineIcon}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
  </svg>
);

/* ---------- content (edit text here) ---------- */
const timeline = [
  {
    year: "2023",
    phase: "Phase 01",
    title: "Strengthening Operations",
    text: "Optimized internal processes and enhanced system performance to support a growing number of users and investments.",
    people: [p1, p2, p3],
    icon: <GearIcon />,
  },
  {
    year: "2024",
    phase: "Phase 02",
    title: "Advanced Platform Features",
    text: "Introduced enhanced tracking tools and smoother processes to improve user experience and investment management.",
    people: [p4, p5, p6],
    icon: <ChartIcon />,
  },
  {
    year: "2025",
    phase: "Phase 03",
    title: "Scaling Investment Opportunities",
    text: "Expanded into more sectors and strengthened diversified strategies to support long-term growth for users.",
    people: [p7, p8, p9],
    icon: <RocketIcon />,
  },
  {
    year: "2026",
    phase: "Now",
    title: "Future Focus and Innovation",
    text: "Continuing to evolve with new technologies and investment strategies while focusing on long-term growth.",
    people: [p10, p11, p12],
    icon: <SparkIcon />,
    current: true,
  },
];

export default function OurHistory() {
  return (
    <section
      id="history"
      aria-labelledby="history-heading"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#F2FBF7] to-white py-16
                 [--u:clamp(11px,0.68vw,14px)] [--g:calc(var(--u)*2)] lg:py-[calc(var(--u)*7.5)]"
    >
      {/* soft mint glow */}
      <div className="pointer-events-none absolute left-1/2 top-[4vw] -z-10 h-[28vw] w-[50vw] -translate-x-1/2 rounded-full bg-emerald-200/40 blur-3xl" aria-hidden="true" />

      <div className="mx-auto w-[min(1600px,calc(100%_-_2*clamp(20px,4vw,64px)))]">
        {/* ============ HEADER ============ */}
        <Reveal>
          <div className="relative flex flex-col items-center text-center">
            {/* pill */}
            <span className="inline-flex items-center gap-3 rounded-full bg-[#0B1B3A] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-[0_16px_30px_-16px_rgba(11,27,58,0.8)] lg:gap-[calc(var(--u)*0.9)] lg:px-[calc(var(--u)*1.7)] lg:py-[calc(var(--u)*0.8)] lg:text-[length:calc(var(--u)*0.95)]">
              <span className="relative flex h-2 w-2 lg:h-[calc(var(--u)*0.7)] lg:w-[calc(var(--u)*0.7)]">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3CCB8E] opacity-75" />
                <span className="relative inline-flex h-full w-full rounded-full bg-[#3CCB8E]" />
              </span>
              Our History
            </span>

            <h2
              id="history-heading"
              className="mt-6 text-[clamp(36px,9.5vw,56px)] font-extrabold leading-[1.04] tracking-[-0.035em] text-[#0B1B3A] [text-wrap:balance] lg:mt-[calc(var(--u)*2)] lg:text-[length:calc(var(--u)*5.6)] lg:leading-[1.03]"
            >
              Growing Stronger{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#3CCB8E] to-[#0a9a62] bg-clip-text text-transparent">
                  Year After Year
                </span>
                {/* hand-drawn underline */}
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full lg:-bottom-[calc(var(--u)*1)] lg:h-[calc(var(--u)*1.3)]"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="hist-underline" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0" stopColor="#3CCB8E" />
                      <stop offset="1" stopColor="#0a9a62" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M3 8C60 2 120 11 180 6S270 3 297 7"
                    stroke="url(#hist-underline)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p className="mt-7 max-w-[36rem] text-base leading-relaxed text-[#5d6b85] lg:mt-[calc(var(--u)*2.4)] lg:max-w-[calc(var(--u)*46)] lg:text-[length:calc(var(--u)*1.35)] lg:leading-[1.65]">
              Every year brought stronger systems, smarter strategies and more people investing
              with confidence.
            </p>
          </div>
        </Reveal>

        {/* ============ TIMELINE ============ */}
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:mt-[calc(var(--u)*6)] xl:grid-cols-4 xl:gap-x-[var(--g)] xl:gap-y-0">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 120} className="h-full">
              <div className="flex h-full flex-col">
                {/* dot on the connector line (wide screens) */}
                <div className="relative mb-6 hidden items-center justify-center xl:flex lg:mb-[calc(var(--u)*2.2)]">
                  {i > 0 && (
                    <span
                      className="absolute top-1/2 h-[2px] -translate-y-1/2 bg-[#bfe9d6]"
                      style={{ left: "calc(var(--g) / -2)", right: "50%" }}
                      aria-hidden="true"
                    />
                  )}
                  {i < timeline.length - 1 && (
                    <span
                      className="absolute top-1/2 h-[2px] -translate-y-1/2 bg-[#bfe9d6]"
                      style={{ left: "50%", right: "calc(var(--g) / -2)" }}
                      aria-hidden="true"
                    />
                  )}

                  <span className="relative grid h-7 w-7 place-items-center rounded-full bg-white ring-4 ring-[#D9F4E6]">
                    <span className={`h-3.5 w-3.5 rounded-full ${t.current ? "bg-[#12ad72]" : "bg-[#0B1B3A]"}`} />
                    {t.current && (
                      <span className="absolute inset-0 animate-ping rounded-full bg-[#12ad72] opacity-30" aria-hidden="true" />
                    )}
                  </span>
                </div>

                {/* card (the current year is the one filled navy card = focus) */}
                <article
                  className={`group relative flex h-full flex-col rounded-3xl p-7 transition duration-300 hover:-translate-y-2 lg:rounded-[calc(var(--u)*2)] lg:p-[calc(var(--u)*2.4)] ${
                    t.current
                      ? "bg-[#0B1B3A] text-white shadow-[0_34px_70px_-28px_rgba(11,27,58,0.75)]"
                      : "border border-[#E3EDE8] bg-white shadow-[0_24px_50px_-34px_rgba(6,78,59,0.4)] hover:border-[#12ad72] hover:shadow-[0_36px_64px_-30px_rgba(6,78,59,0.45)]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#08905b] to-[#12ad72] text-white shadow-[0_14px_26px_-12px_rgba(8,144,91,0.8)] transition duration-300 group-hover:scale-105 lg:h-[calc(var(--u)*4)] lg:w-[calc(var(--u)*4)] lg:rounded-[calc(var(--u)*1.2)]">
                      {t.icon}
                    </span>
                    <span
                      className={`rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide lg:px-[calc(var(--u)*1.1)] lg:py-[calc(var(--u)*0.5)] lg:text-[length:calc(var(--u)*0.95)] ${
                        t.current ? "bg-[#12ad72] text-white" : "bg-[#EAF7F0] text-[#0f8a5a]"
                      }`}
                    >
                      {t.phase}
                    </span>
                  </div>

                  <h3
                    className={`mt-6 text-[clamp(48px,9vw,64px)] font-extrabold leading-none tracking-tight lg:mt-[calc(var(--u)*2)] lg:text-[length:calc(var(--u)*5.2)] ${
                      t.current
                        ? "bg-gradient-to-r from-[#3CCB8E] to-[#8af2c6] bg-clip-text text-transparent"
                        : "text-[#0B1B3A]"
                    }`}
                  >
                    {t.year}
                  </h3>

                  <p
                    className={`mt-4 text-xl font-bold leading-snug tracking-tight lg:mt-[calc(var(--u)*1.5)] lg:text-[length:calc(var(--u)*1.65)] ${
                      t.current ? "text-white" : "text-[#0B1B3A]"
                    }`}
                  >
                    {t.title}
                  </p>

                  <p
                    className={`mt-3 text-[15px] leading-7 lg:mt-[calc(var(--u)*1)] lg:text-[length:calc(var(--u)*1.08)] lg:leading-[1.7] ${
                      t.current ? "text-slate-300" : "text-[#5d6b85]"
                    }`}
                  >
                    {t.text}
                  </p>

                  {/* people */}
                  <div
                    className={`mt-auto flex items-center gap-3 border-t pt-6 lg:gap-[calc(var(--u)*1)] lg:pt-[calc(var(--u)*2)] ${
                      t.current ? "border-white/10" : "border-[#E3EDE8]"
                    }`}
                  >
                    <div className="flex shrink-0">
                      {t.people.map((src, k) => (
                        <img
                          key={k}
                          src={src}
                          alt=""
                          className={`h-11 w-11 rounded-full border-2 object-cover shadow-md lg:h-[calc(var(--u)*3.4)] lg:w-[calc(var(--u)*3.4)] ${
                            t.current ? "border-[#0B1B3A]" : "border-white"
                          } ${k ? "-ml-3 lg:-ml-[calc(var(--u)*1)]" : ""}`}
                        />
                      ))}
                    </div>
                    <span className={`h-px flex-1 ${t.current ? "bg-white/15" : "bg-[#E3EDE8]"}`} />
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-[#08905b] to-[#12ad72] text-lg font-light leading-none text-white transition duration-300 group-hover:rotate-90 lg:h-[calc(var(--u)*2.6)] lg:w-[calc(var(--u)*2.6)] lg:text-[length:calc(var(--u)*1.6)]">
                      +
                    </span>
                  </div>
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}