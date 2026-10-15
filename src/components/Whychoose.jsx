// src/components/Whychoose.jsx
// Same palette as Hero.jsx: mint #F2FBF7 | navy #0B1B3A | green #08905b -> #12ad72 | text #5d6b85
import logo from "../assets/logo.png";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";

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

const WalletIcon = () => (
  <svg className="h-7 w-7" {...lineIcon}>
    <rect x="3" y="6" width="18" height="13" rx="3" />
    <path d="M16 12.5h5v3h-5a1.5 1.5 0 0 1 0-3Z" />
    <path d="M6 6l9-3v3" />
  </svg>
);
const PieIcon = () => (
  <svg className="h-7 w-7" {...lineIcon}>
    <path d="M12 3v9h9" />
    <path d="M20.5 15A9 9 0 1 1 9 3.5" />
  </svg>
);
const LayersIcon = () => (
  <svg className="h-7 w-7" {...lineIcon}>
    <path d="M12 3 3 8l9 5 9-5-9-5Z" />
    <path d="m3 13 9 5 9-5" />
    <path d="m3 17.5 9 5 9-5" opacity="0.55" />
  </svg>
);
const WithdrawIcon = () => (
  <svg className="h-7 w-7" {...lineIcon}>
    <path d="M12 4v11" />
    <path d="m7 11 5 5 5-5" />
    <path d="M5 20h14" />
  </svg>
);
const ShieldIcon = () => (
  <svg className="h-6 w-6" {...lineIcon}>
    <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.3 7.5 9.5 4.3-1.2 7.5-4.9 7.5-9.5V6L12 3Z" />
    <path d="m8.8 12.1 2.3 2.3 4.2-4.4" />
  </svg>
);
const BoltIcon = () => (
  <svg className="h-6 w-6" {...lineIcon}>
    <path d="M13 2 4 14h6.5L9.5 22 19 10h-6.5L13 2Z" />
  </svg>
);
const ArrowIcon = () => (
  <svg className="h-5 w-5" {...lineIcon} strokeWidth={2.2}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const BadgeMini = () => (
  <svg className="h-4 w-4" {...lineIcon} strokeWidth={2.4}>
    <path d="M5 20v-6M11 20V9M17 20v-9M3 9l6-5 4 3 7-5" />
  </svg>
);

/* ---------- content (edit text here) ---------- */
// class names are written in full so Tailwind can find them
const cards = [
  {
    id: "entry",
    no: "01",
    title: "Low Investment Entry for Everyone",
    text: "Start your investment journey with a minimal amount, making it accessible for beginners.",
    tag: "Beginner friendly",
    icon: <WalletIcon />,
    tile: "from-emerald-400 to-emerald-600 shadow-emerald-500/40",
    blob: "bg-emerald-300/40",
    chip: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    dot: "bg-emerald-500",
    line: "from-emerald-400 to-emerald-600",
    hover: "hover:border-emerald-300",
  },
  {
    id: "strategy",
    no: "02",
    title: "Diversified Investment Strategy Model",
    text: "We allocate investments across different sectors to balance risk and create a structured approach.",
    tag: "Balanced risk",
    icon: <PieIcon />,
    tile: "from-sky-400 to-blue-600 shadow-blue-500/40",
    blob: "bg-sky-300/40",
    chip: "bg-sky-50 text-sky-700 ring-sky-200",
    dot: "bg-sky-500",
    line: "from-sky-400 to-blue-600",
    hover: "hover:border-sky-300",
  },
  {
    id: "plans",
    no: "03",
    title: "Flexible Investment Plans Options",
    text: "Choose from multiple plans designed to match different goals, allowing users to invest comfortably.",
    tag: "Goal based plans",
    icon: <LayersIcon />,
    tile: "from-violet-400 to-purple-600 shadow-purple-500/40",
    blob: "bg-violet-300/40",
    chip: "bg-violet-50 text-violet-700 ring-violet-200",
    dot: "bg-violet-500",
    line: "from-violet-400 to-purple-600",
    hover: "hover:border-violet-300",
  },
  {
    id: "withdraw",
    no: "04",
    title: "Easy Withdrawal and Smooth Process",
    text: "Withdraw your funds after completion with a simple process designed to ensure a smooth experience.",
    tag: "Hassle free payout",
    icon: <WithdrawIcon />,
    tile: "from-amber-400 to-orange-500 shadow-orange-500/40",
    blob: "bg-amber-300/40",
    chip: "bg-amber-50 text-amber-700 ring-amber-200",
    dot: "bg-amber-500",
    line: "from-amber-400 to-orange-500",
    hover: "hover:border-amber-300",
  },
];

const features = [
  {
    id: "secure",
    icon: <ShieldIcon />,
    title: "Secure & Trusted",
    text: "Bank-level security for peace of mind",
    tile: "bg-emerald-400/15 text-emerald-300 ring-emerald-300/30",
  },
  {
    id: "fast",
    icon: <BoltIcon />,
    title: "Fast & Easy",
    text: "Invest, track & grow effortlessly",
    tile: "bg-amber-400/15 text-amber-300 ring-amber-300/30",
  },
];

const avatars = [p1, p2, p3, p4, p5];

export default function WhyChoose() {
  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#F2FBF7] via-white to-[#F2FBF7] py-16 lg:py-[5.5vw]"
    >
      {/* soft background decoration */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background-image:radial-gradient(rgba(16,160,106,0.10)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -right-[10vw] top-[16vw] -z-10 h-[34vw] w-[34vw] rounded-full bg-emerald-200/40 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-[12vw] bottom-[6vw] -z-10 h-[28vw] w-[28vw] rounded-full bg-sky-200/30 blur-3xl" aria-hidden="true" />

      <div className="px-6 sm:px-10 lg:px-[4.4vw]">
        {/* HEADER */}
        <div className="max-w-[64rem]">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-[#D9F4E6] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#0f8a5a] ring-1 ring-emerald-200/70 lg:gap-[0.6vw] lg:px-[1.2vw] lg:py-[0.6vw] lg:text-[0.8vw]">
            <BadgeMini />
            Why choose SwipeNGrow
          </span>

          <h2
            id="why-heading"
            className="mt-5 text-[clamp(28px,6.5vw,42px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#0B1B3A] lg:mt-[1.1vw] lg:text-[3vw] lg:leading-[1.1]"
          >
            For investors seeking secure, transparent, and{" "}
            <span className="bg-gradient-to-r from-[#3CCB8E] to-[#0a9a62] bg-clip-text text-transparent">
              consistent growth.
            </span>
          </h2>

          <p className="mt-4 max-w-[34rem] text-base leading-relaxed text-[#5d6b85] lg:mt-[1.2vw] lg:max-w-[36vw] lg:text-[1.05vw] lg:leading-[1.65]">
            Learn how investing works, pick a plan that fits you, and grow step by step with clear
            guidance.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="mt-10 grid gap-5 lg:mt-[3vw] lg:grid-cols-[1.75fr_1fr] lg:gap-[1.6vw]">
          {/* four cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:gap-[1.6vw]">
            {cards.map((c) => (
              <article
                key={c.id}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border border-[#E3EDE8] bg-white p-7 shadow-[0_24px_50px_-32px_rgba(6,78,59,0.4)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_34px_64px_-30px_rgba(6,78,59,0.55)] lg:rounded-[1.7vw] lg:p-[2vw] ${c.hover}`}
              >
                {/* corner colour glow */}
                <div
                  className={`pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full blur-2xl transition duration-500 group-hover:scale-125 lg:h-[11vw] lg:w-[11vw] ${c.blob}`}
                  aria-hidden="true"
                />

                <div className="relative flex items-start justify-between">
                  <span
                    className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg ring-4 ring-white transition duration-300 group-hover:-rotate-3 group-hover:scale-105 lg:h-[4vw] lg:w-[4vw] lg:rounded-[1.1vw] ${c.tile}`}
                  >
                    {c.icon}
                  </span>
                  <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold tracking-widest text-[#8aa398] ring-1 ring-[#E3EDE8] lg:text-[0.8vw]">
                    {c.no}
                  </span>
                </div>

                <h3 className="relative mt-6 text-xl font-bold leading-snug text-[#0B1B3A] lg:mt-[1.5vw] lg:text-[1.3vw]">
                  {c.title}
                </h3>
                <p className="relative mt-3 text-[15px] leading-7 text-[#5d6b85] lg:mt-[0.7vw] lg:text-[0.98vw] lg:leading-[1.65]">
                  {c.text}
                </p>

                {/* tag pinned to the bottom */}
                <div className="relative mt-auto pt-6 lg:pt-[1.4vw]">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-semibold ring-1 lg:text-[0.82vw] ${c.chip}`}
                  >
                    <span className={`h-2 w-2 rounded-full ${c.dot}`} />
                    {c.tag}
                  </span>
                </div>

                {/* accent line that grows on hover */}
                <span
                  className={`absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100 ${c.line}`}
                  aria-hidden="true"
                />
              </article>
            ))}
          </div>

          {/* navy trust panel */}
          <aside className="relative flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B1B3A] via-[#0d2447] to-[#0c3a4a] p-7 text-white shadow-[0_30px_70px_-30px_rgba(11,27,58,0.7)] lg:rounded-[1.7vw] lg:p-[2vw]">
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-400/25 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" aria-hidden="true" />

            {/* logo with soft rings */}
            <div className="relative flex flex-col items-center text-center">
              <div className="relative grid place-items-center">
                <span className="absolute h-44 w-44 animate-pulse rounded-full border border-emerald-300/20 lg:h-[12.5vw] lg:w-[12.5vw]" aria-hidden="true" />
                <span className="absolute h-36 w-36 rounded-full border border-white/10 lg:h-[10.2vw] lg:w-[10.2vw]" aria-hidden="true" />
                <div className="rounded-full bg-gradient-to-br from-[#3CCB8E] to-[#0a9a62] p-[3px] shadow-[0_0_50px_rgba(60,203,142,0.4)]">
                  <div className="grid h-28 w-28 place-items-center rounded-full bg-white lg:h-[8vw] lg:w-[8vw]">
                    <img src={logo} alt="SwipeNGrow" className="h-[72%] w-[72%] object-contain" />
                  </div>
                </div>
              </div>
              <p className="mt-9 text-xs font-semibold tracking-[0.3em] text-emerald-300 lg:mt-[2.2vw] lg:text-[0.75vw]">
                INVEST • GROW • ACHIEVE
              </p>
            </div>

            {/* features */}
            <div className="relative mt-6 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm lg:mt-[1.5vw]">
              {features.map((f) => (
                <div key={f.id} className="flex items-center gap-4 px-5 py-4 lg:gap-[1vw] lg:px-[1.2vw] lg:py-[0.95vw]">
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ring-1 lg:h-[3vw] lg:w-[3vw] ${f.tile}`}>
                    {f.icon}
                  </span>
                  <div>
                    <h4 className="text-base font-semibold text-white lg:text-[1.02vw]">{f.title}</h4>
                    <p className="mt-0.5 text-sm text-slate-300 lg:text-[0.85vw]">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* happy clients */}
            <div className="relative mt-4 flex items-center gap-4 rounded-2xl bg-white px-5 py-4 text-[#0B1B3A] lg:mt-[1vw] lg:gap-[1vw] lg:px-[1.2vw] lg:py-[0.95vw]">
              <div className="flex" aria-hidden="true">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className={`h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm lg:h-[2.5vw] lg:w-[2.5vw] ${i ? "-ml-3 lg:-ml-[0.75vw]" : ""}`}
                  />
                ))}
              </div>
              <div>
                <div className="text-sm leading-none tracking-widest text-amber-400 lg:text-[0.95vw]" aria-label="Rated 5 out of 5">
                  ★★★★★
                </div>
                <p className="mt-1.5 text-sm font-medium text-[#33445f] lg:text-[0.9vw]">
                  <span className="font-bold text-[#0B1B3A]">115+</span> happy clients
                </p>
              </div>
            </div>

            {/* call to action, same style as the hero button */}
            <a
              href="/plans"
              className="group relative mt-4 flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#08905b] to-[#12ad72] py-3.5 text-base font-semibold text-white shadow-[0_16px_30px_-14px_rgba(8,144,91,0.8)] transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300 lg:mt-[1vw] lg:py-[0.95vw] lg:text-[1.02vw]"
            >
              Join With Us
              <span className="transition-transform group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}