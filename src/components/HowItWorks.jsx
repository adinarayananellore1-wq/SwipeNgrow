// src/components/HowItWorks.jsx
// Same palette and container as Hero.jsx and WhyChoose.jsx
import { useEffect, useRef, useState } from "react";

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
      { threshold: 0.15 }
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
const ico = "h-6 w-6 lg:h-[calc(var(--u)*1.9)] lg:w-[calc(var(--u)*1.9)]";

const UserPlusIcon = () => (
  <svg className={ico} {...lineIcon}>
    <circle cx="9" cy="8" r="4" />
    <path d="M2.5 20c.6-3.6 3.2-5.5 6.5-5.5s5.9 1.9 6.5 5.5" />
    <path d="M19 8v6M16 11h6" />
  </svg>
);
const TargetIcon = () => (
  <svg className={ico} {...lineIcon}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    <path d="M12 12l8-8M16 4h4v4" />
  </svg>
);
const TrendIcon = () => (
  <svg className={ico} {...lineIcon}>
    <path d="M3 17l6-6 4 4 8-8" />
    <path d="M15 7h6v6" />
  </svg>
);
const CheckMini = () => (
  <svg className="h-3.5 w-3.5 lg:h-[calc(var(--u)*1.1)] lg:w-[calc(var(--u)*1.1)]" {...lineIcon} strokeWidth={2.8}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);
const ArrowIcon = () => (
  <svg className="h-5 w-5 lg:h-[calc(var(--u)*1.5)] lg:w-[calc(var(--u)*1.5)]" {...lineIcon} strokeWidth={2.2}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const BadgeMini = () => (
  <svg className="h-4 w-4 lg:h-[calc(var(--u)*1.2)] lg:w-[calc(var(--u)*1.2)]" {...lineIcon} strokeWidth={2.4}>
    <path d="M5 20v-6M11 20V9M17 20v-9M3 9l6-5 4 3 7-5" />
  </svg>
);

/* ---------- content (edit text here) ---------- */
// class names are written in full so Tailwind can find them
const steps = [
  {
    id: "01",
    title: "Register and Get Started",
    text: "This process ensures that every user can begin easily and start their journey with simple steps and guided onboarding support.",
    chip: "Guided onboarding",
    icon: <UserPlusIcon />,
    tile: "from-emerald-400 to-emerald-600 shadow-emerald-500/40",
    bar: "from-emerald-400 to-emerald-600",
    hover: "hover:border-emerald-300",
  },
  {
    id: "02",
    title: "Choose Your Investment Plan",
    text: "We provide multiple options designed for different goals, allowing users to select plans based on their investment capacity and preferences.",
    chip: "12 plans to choose from",
    icon: <TargetIcon />,
    tile: "from-sky-400 to-blue-600 shadow-blue-500/40",
    bar: "from-sky-400 to-blue-600",
    hover: "hover:border-sky-300",
  },
  {
    id: "03",
    title: "Track and Grow Your Returns",
    text: "Follow your portfolio in real time, watch your returns build step by step, and withdraw smoothly once your plan is complete.",
    chip: "24/7 portfolio tracking",
    icon: <TrendIcon />,
    tile: "from-amber-400 to-orange-500 shadow-orange-500/40",
    bar: "from-amber-400 to-orange-500",
    hover: "hover:border-amber-300",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      aria-labelledby="how-heading"
      className="relative isolate overflow-hidden bg-gradient-to-b from-white via-[#F2FBF7] to-white py-16
                 [--u:clamp(11px,0.68vw,14px)] lg:py-[calc(var(--u)*7)]"
    >
      {/* soft glows + dotted texture */}
      <div className="pointer-events-none absolute -left-[10vw] top-[12vw] -z-10 h-[30vw] w-[30vw] rounded-full bg-emerald-200/40 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-[10vw] bottom-0 -z-10 h-[30vw] w-[30vw] rounded-full bg-sky-100/70 blur-3xl" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#0f8a5a1f_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        aria-hidden="true"
      />

      <div className="mx-auto w-[min(1600px,calc(100%_-_2*clamp(20px,4vw,64px)))]">
        {/* ============ HEADER ============ */}
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2.5 rounded-full bg-[#D9F4E6] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#0f8a5a] ring-1 ring-emerald-200/70 lg:gap-[calc(var(--u)*0.7)] lg:px-[calc(var(--u)*1.4)] lg:py-[calc(var(--u)*0.65)] lg:text-[length:calc(var(--u)*0.95)]">
              <BadgeMini />
              How it works
            </span>

            <h2
              id="how-heading"
              className="mt-5 text-[clamp(28px,7vw,40px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#0B1B3A] [text-wrap:balance] lg:mt-[calc(var(--u)*1.4)] lg:text-[length:calc(var(--u)*3.7)] lg:leading-[1.08]"
            >
              Start Investing in{" "}
              <span className="bg-gradient-to-r from-[#3CCB8E] to-[#0a9a62] bg-clip-text text-transparent">
                3 Simple Steps
              </span>
            </h2>

            <p className="mt-4 max-w-[36rem] text-base leading-relaxed text-[#5d6b85] lg:mt-[calc(var(--u)*1.3)] lg:max-w-[calc(var(--u)*46)] lg:text-[length:calc(var(--u)*1.2)] lg:leading-[1.65]">
              Learn, choose and grow with a guided process built for first-time and experienced
              investors.
            </p>
          </div>
        </Reveal>

        {/* ============ STEPS ============ */}
        <div className="mt-12 grid gap-10 lg:mt-[calc(var(--u)*5)] lg:grid-cols-3 lg:gap-0">
          {steps.map((s, i) => (
            <Reveal key={s.id} delay={i * 140} className="h-full">
              <div className="flex h-full flex-col">
                {/* number badge sitting on the connector line */}
                <div className="relative flex items-center justify-center">
                  {i > 0 && (
                    <span
                      className="absolute left-0 right-1/2 top-1/2 hidden h-[3px] -translate-y-1/2 bg-[repeating-linear-gradient(90deg,#7dd9b0_0_9px,transparent_9px_18px)] lg:block"
                      aria-hidden="true"
                    />
                  )}
                  {i < steps.length - 1 && (
                    <span
                      className="absolute left-1/2 right-0 top-1/2 hidden h-[3px] -translate-y-1/2 bg-[repeating-linear-gradient(90deg,#7dd9b0_0_9px,transparent_9px_18px)] lg:block"
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative grid h-[4.6rem] w-[4.6rem] place-items-center rounded-full bg-gradient-to-br from-[#0B1B3A] to-[#12335c] ring-4 ring-white shadow-[0_0_0_9px_rgba(60,203,142,0.18),0_22px_40px_-14px_rgba(11,27,58,0.65)] lg:h-[calc(var(--u)*6.6)] lg:w-[calc(var(--u)*6.6)]">
                    <span className="bg-gradient-to-b from-[#bdf0dc] to-[#4ade80] bg-clip-text text-3xl font-extrabold leading-none tracking-tight text-transparent lg:text-[length:calc(var(--u)*2.7)]">
                      {s.id}
                    </span>
                  </span>
                </div>

                {/* stub from badge to card */}
                <span className="mx-auto block h-6 w-[2px] bg-gradient-to-b from-emerald-300 to-transparent lg:h-[calc(var(--u)*2)]" aria-hidden="true" />

                {/* card */}
                <article
                  className={`group relative mx-auto flex w-full max-w-[34rem] flex-1 flex-col overflow-hidden rounded-3xl border border-[#E3EDE8] bg-white p-7 shadow-[0_24px_50px_-34px_rgba(6,78,59,0.45)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_34px_60px_-30px_rgba(6,78,59,0.5)] lg:mx-[calc(var(--u)*1.1)] lg:max-w-none lg:rounded-[calc(var(--u)*1.9)] lg:p-[calc(var(--u)*2.3)] ${s.hover}`}
                >
                  <div className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r transition duration-500 group-hover:scale-x-100 ${s.bar}`} aria-hidden="true" />

                  <span
                    className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition duration-300 group-hover:scale-105 group-hover:-rotate-3 lg:h-[calc(var(--u)*4.2)] lg:w-[calc(var(--u)*4.2)] lg:rounded-[calc(var(--u)*1.2)] ${s.tile}`}
                  >
                    {s.icon}
                  </span>

                  <h3 className="mt-5 text-xl font-bold leading-[1.3] tracking-tight text-[#0B1B3A] lg:mt-[calc(var(--u)*1.7)] lg:text-[length:calc(var(--u)*1.65)]">
                    {s.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-7 text-[#5d6b85] lg:mt-[calc(var(--u)*0.9)] lg:text-[length:calc(var(--u)*1.1)] lg:leading-[1.7]">
                    {s.text}
                  </p>

                  <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#EAF7F0] px-3.5 py-2 text-xs font-semibold text-[#0f8a5a] lg:mt-[calc(var(--u)*1.8)] lg:gap-[calc(var(--u)*0.6)] lg:px-[calc(var(--u)*1.1)] lg:py-[calc(var(--u)*0.6)] lg:text-[length:calc(var(--u)*0.95)]">
                    <CheckMini />
                    {s.chip}
                  </span>
                </article>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ============ CTA ============ */}
        <Reveal delay={150}>
          <div className="relative mt-12 flex flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B1B3A] via-[#0d2745] to-[#10304f] p-7 text-white shadow-[0_34px_70px_-30px_rgba(11,27,58,0.75)] sm:flex-row sm:items-center lg:mt-[calc(var(--u)*5)] lg:rounded-[calc(var(--u)*1.9)] lg:px-[calc(var(--u)*3.2)] lg:py-[calc(var(--u)*2.4)]">
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-emerald-400/25 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-sky-400/15 blur-3xl" aria-hidden="true" />

            <div className="relative">
              <h3 className="text-xl font-bold leading-snug tracking-tight sm:text-2xl lg:text-[length:calc(var(--u)*2.2)]">
                Ready to start your investment journey?
              </h3>
              <p className="mt-2 text-sm text-slate-300 lg:mt-[calc(var(--u)*0.6)] lg:text-[length:calc(var(--u)*1.1)]">
                Join 10,000+ investors who are growing their wealth with clear, simple plans.
              </p>
            </div>

            <button className="relative inline-flex h-12 shrink-0 items-center gap-3 rounded-full bg-gradient-to-r from-[#08905b] to-[#12ad72] pl-7 pr-6 text-[15px] font-semibold text-white shadow-[0_16px_30px_-14px_rgba(8,144,91,0.9)] transition hover:-translate-y-0.5 lg:h-[calc(var(--u)*3.7)] lg:gap-[calc(var(--u)*1.2)] lg:pl-[calc(var(--u)*2.2)] lg:pr-[calc(var(--u)*1.9)] lg:text-[length:calc(var(--u)*1.2)]">
              Get Started
              <ArrowIcon />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}