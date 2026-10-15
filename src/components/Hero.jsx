// src/components/Hero.jsx
// Image: src/assets/hero-bg.png
import heroBg from "../assets/hero-bg.png";

// profile photos: src/assets/p1.png ... p6.png (change .png to .jpg/.webp if yours differ)
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";

const green = "#12a06a";

/* ---------- icons ---------- */
// small green icon (badge) ----------------------------------------------
const GrowthMini = () => (
  <svg className="h-5 w-5 lg:h-[1.3vw] lg:w-[1.3vw]" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 20v-6M11 20V9M17 20v-9M3 9l6-5 4 3 7-5" />
  </svg>
);

// white icons for the colored stat tiles ---------------------------------
const statIconCls = "h-6 w-6 lg:h-[1.9vw] lg:w-[1.9vw]";
const WhiteSvg = ({ children }) => (
  <svg className={statIconCls} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

// live pulse / activity line
const PulseIcon = () => (
  <WhiteSvg>
    <path d="M3 12h4l2.5-6 4 12 2.5-6H21" />
  </WhiteSvg>
);
// stacked layers = plans
const LayersIcon = () => (
  <WhiteSvg>
    <path d="M12 3l9 5-9 5-9-5z" />
    <path d="M3 13l9 5 9-5" />
    <path d="M3 17.5l9 5 9-5" opacity="0.55" />
  </WhiteSvg>
);
// rising trend
const TrendIcon = () => (
  <WhiteSvg>
    <path d="M3 17l6-6 4 4 8-8" />
    <path d="M15 7h6v6" />
  </WhiteSvg>
);
// verified badge = zero fees
const BadgeIcon = () => (
  <WhiteSvg>
    <path d="M12 2.5l2.4 1.7 2.9-.1 1 2.7 2.3 1.8-.9 2.8.9 2.8-2.3 1.8-1 2.7-2.9-.1L12 21.5l-2.4-1.7-2.9.1-1-2.7-2.3-1.8.9-2.8-.9-2.8 2.3-1.8 1-2.7 2.9.1z" />
    <path d="M8.5 12.2l2.4 2.4 4.6-4.8" />
  </WhiteSvg>
);

const ArrowRight = () => (
  <svg className="h-5 w-5 lg:h-[1.25vw] lg:w-[1.25vw]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const JoinIcon = () => (
  <svg className="h-[30px] w-[30px] lg:h-[1.75vw] lg:w-[1.75vw]" viewBox="0 0 30 30" fill="none" aria-hidden="true">
    <circle cx="15" cy="15" r="15" fill="#0B1B3A" />
    <g stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13" cy="11.5" r="3.2" />
      <path d="M7 21.5c0-3.2 2.7-5.2 6-5.2 1.2 0 2.3.3 3.2.8" />
      <path d="M21.5 15v6M18.5 18h6" />
    </g>
  </svg>
);

/* ---------- data ---------- */
// every class is written out in full so Tailwind can find it
const stats = [
  {
    label: "Portfolio Tracking",
    value: "24/7",
    note: "Real-time updates",
    icon: <PulseIcon />,
    tile: "from-emerald-400 to-emerald-600 shadow-emerald-500/40",
    text: "from-emerald-500 to-emerald-700",
    live: true,
  },
  {
    label: "Active Plans",
    value: "12 Plans",
    note: "Tailored for your goals",
    icon: <LayersIcon />,
    tile: "from-sky-400 to-blue-600 shadow-blue-500/40",
    text: "from-sky-500 to-blue-700",
  },
  {
    label: "Average Return",
    value: "9.2%",
    note: "Trusted performance",
    icon: <TrendIcon />,
    tile: "from-violet-400 to-purple-600 shadow-purple-500/40",
    text: "from-violet-500 to-purple-700",
  },
  {
    label: "Maintenance Fees",
    value: "₹0",
    note: "No hidden charges",
    icon: <BadgeIcon />,
    tile: "from-amber-400 to-orange-500 shadow-orange-500/40",
    text: "from-amber-500 to-orange-600",
  },
];

const avatars = [p1, p2, p3, p4, p5, p6];

const fade = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0%, #000 6%), linear-gradient(to bottom, transparent 0%, #000 10%, #000 92%, transparent 100%)",
  maskImage:
    "linear-gradient(to right, transparent 0%, #000 6%), linear-gradient(to bottom, transparent 0%, #000 10%, #000 92%, transparent 100%)",
  WebkitMaskComposite: "source-in",
  maskComposite: "intersect",
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F2FBF7] pb-10 lg:pb-[3.8vw]">
      {/* mint glow */}
      <div className="pointer-events-none absolute -left-[10vw] top-[28vw] h-[34vw] w-[34vw] rounded-full bg-emerald-200/50 blur-3xl" />

      {/* Scene image (desktop) - unchanged */}
      <img
        src={heroBg}
        alt="SwipeNGrow dashboard on a laptop"
        className="pointer-events-none absolute right-0 top-[6.55vw] hidden w-[59.9vw] max-w-none select-none lg:block"
        style={fade}
      />

      <div className="relative z-10 px-6 sm:px-10 lg:px-[4.4vw]">
        {/* TOP AREA */}
        <div className="relative lg:h-[48vw]">
          <div className="pt-32 lg:max-w-[44vw] lg:pt-[11.5vw]">
            {/* Badge */}
            <span className="inline-flex items-center gap-2.5 rounded-full bg-[#D9F4E6] px-5 py-2.5 text-[15px] font-semibold text-[#0f8a5a] ring-1 ring-emerald-200/70 lg:gap-[0.6vw] lg:px-[1.2vw] lg:py-[0.6vw] lg:text-[0.98vw]">
              <GrowthMini />
              Smart Solutions for Wealth Building
            </span>

            {/* Heading */}
            <h1 className="mt-5 text-[clamp(38px,10vw,60px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#0B1B3A] lg:mt-[1.1vw] lg:text-[4.7vw] lg:leading-[1.02]">
              Simple Plans.
              <br />
              <span className="bg-gradient-to-r from-[#3CCB8E] to-[#0a9a62] bg-clip-text text-transparent">
                Strong Returns.
              </span>
            </h1>

            {/* Paragraph */}
            <p className="mt-5 max-w-[500px] text-base leading-relaxed text-[#5d6b85] lg:mt-[1.6vw] lg:max-w-[29vw] lg:text-[1.15vw] lg:leading-[1.55]">
              We provide structured investment solutions designed to help individuals achieve their goals,
              whether you're starting small or building a bigger future.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3.5 lg:mt-[2vw] lg:gap-[1vw]">
              <button className="group flex items-center gap-3.5 rounded-full bg-gradient-to-r from-[#08905b] to-[#12ad72] py-3.5 pl-7 pr-5 text-base font-semibold text-white shadow-[0_16px_30px_-14px_rgba(8,144,91,0.8)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_34px_-14px_rgba(8,144,91,0.9)] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300 lg:h-[3.5vw] lg:gap-[1.4vw] lg:py-0 lg:pl-[2vw] lg:pr-[1.6vw] lg:text-[1.05vw]">
                Explore Investment Plans
                <span className="transition-transform group-hover:translate-x-1">
                  <ArrowRight />
                </span>
              </button>
              <button className="flex items-center gap-2.5 rounded-full border border-[#cfe6dc] bg-white/70 py-3 pl-4 pr-7 text-base font-semibold text-[#0B1B3A] backdrop-blur transition hover:bg-white hover:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-200 lg:h-[3.5vw] lg:gap-[0.65vw] lg:py-0 lg:pl-[1.5vw] lg:pr-[1.8vw] lg:text-[1.05vw]">
                <JoinIcon />
                Join With Us
              </button>
            </div>

            {/* Trusted by */}
            <div className="mt-8 flex items-center gap-4 lg:mt-[2.2vw] lg:gap-[1vw]">
              <div className="flex">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Investor ${i + 1}`}
                    className={`h-11 w-11 rounded-full border-[3px] border-white object-cover shadow-sm lg:h-[2.8vw] lg:w-[2.8vw] ${
                      i > 0 ? "-ml-3 lg:-ml-[0.8vw]" : ""
                    }`}
                  />
                ))}
              </div>
              <div>
                <p className="text-[15px] font-medium text-[#33445f] lg:text-[0.98vw]">Trusted by 10,000+ investors</p>
                <p className="text-lg leading-tight text-amber-400 lg:text-[1.2vw]">
                  ★★★★★ <span className="text-[15px] font-semibold text-[#33445f] lg:text-[0.98vw]">4.9/5</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / tablet image */}
        <img src={heroBg} alt="SwipeNGrow dashboard on a laptop" className="mt-10 w-full rounded-3xl shadow-xl lg:hidden" />

        {/* STATS BAR */}
        <div className="relative mt-10 grid grid-cols-2 gap-y-6 overflow-hidden rounded-[28px] border border-white bg-white px-4 pb-7 pt-8 shadow-[0_30px_70px_-30px_rgba(6,78,59,0.4)] lg:mt-0 lg:h-[9.4vw] lg:grid-cols-4 lg:gap-y-0 lg:rounded-[1.8vw] lg:px-0 lg:py-0">
          {/* colorful top accent line */}
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-400 via-sky-400 via-violet-400 to-amber-400 lg:h-[0.35vw]" />

          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`group flex items-center gap-4 px-3 transition-colors duration-300 hover:bg-slate-50/80 lg:gap-[1.4vw] lg:px-[2.8vw] ${
                i > 0 ? "lg:my-[2.2vw] lg:border-l lg:border-[#E6EEEA]" : ""
              }`}
            >
              {/* gradient icon tile */}
              <span className="relative shrink-0">
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105 lg:h-[3.9vw] lg:w-[3.9vw] lg:rounded-[1.1vw] ${s.tile}`}
                >
                  {s.icon}
                </span>
                {s.live && (
                  <span className="absolute -right-1 -top-1 flex h-3 w-3 lg:h-[0.8vw] lg:w-[0.8vw]">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-full w-full rounded-full border-2 border-white bg-emerald-500" />
                  </span>
                )}
              </span>

              <div>
                <p className="text-[13px] font-semibold text-[#1c2b3f] lg:text-[0.98vw]">{s.label}</p>
                <p
                  className={`bg-gradient-to-r bg-clip-text text-2xl font-extrabold leading-tight tracking-tight text-transparent lg:text-[1.95vw] lg:leading-[1.15] ${s.text}`}
                >
                  {s.value}
                </p>
                <p className="text-xs text-[#7d8ea5] lg:text-[0.85vw]">{s.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="mt-10 flex items-center justify-center gap-5 text-xs font-semibold tracking-[0.3em] text-[#0f8a5a] lg:mt-[2.6vw] lg:gap-[1.4vw] lg:text-[0.78vw]">
          <span className="h-px w-12 bg-[#0f8a5a]/60 lg:w-[3.2vw]" />
          INVEST <span>•</span> GROW <span>•</span> ACHIEVE
          <span className="h-px w-12 bg-[#0f8a5a]/60 lg:w-[3.2vw]" />
        </div>
      </div>
    </section>
  );
}