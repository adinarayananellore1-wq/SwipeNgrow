// src/pages/Team.jsx
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ---------- small icon helper ---------- */
const Svg = ({ size = 22, children, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

/* filled green shield used in the small badges */
const ShieldBadge = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 2 3 6v6c0 5 3.8 8.6 9 10 5.2-1.4 9-5 9-10V6l-9-4Z" fill="#16a34a" />
    <path
      d="m8.5 12 2.5 2.5 4.5-5"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5a2.5 2.5 0 1 1-.01 5 2.5 2.5 0 0 1 .01-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.83v1.57h.05c.53-1 1.84-2.07 3.78-2.07 4.04 0 4.79 2.66 4.79 6.12v5.88h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75v5.29h-4V9.75Z" />
  </svg>
);

/* =====================================================================
   ANIMATION CSS  (draw-in chart, rising cards, floating badges)
   Everything is switched off for people who prefer reduced motion.
   ===================================================================== */
const heroCss = `
.sng-draw { stroke-dasharray: 1; stroke-dashoffset: 0; }
@keyframes sng-draw  { to { stroke-dashoffset: 0; } }
@keyframes sng-fade  { to { opacity: 1; } }
@keyframes sng-grow  { to { transform: scaleY(1); } }
@keyframes sng-rise  { from { opacity: 0; transform: translateY(26px); } to { opacity: 1; transform: translateY(0); } }
@keyframes sng-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-9px); } }
@media (prefers-reduced-motion: no-preference) {
  .sng-draw  { stroke-dashoffset: 1; animation: sng-draw 2.4s .5s ease-out forwards; }
  .sng-fade  { opacity: 0; animation: sng-fade 1.1s 1.3s ease-out forwards; }
  .sng-bar   { transform-box: fill-box; transform-origin: bottom; transform: scaleY(0); animation: sng-grow .8s ease-out forwards; }
  .sng-rise  { animation: sng-rise .75s ease-out both; }
  .sng-float { animation: sng-float 6s ease-in-out infinite; }
}
`;

/* =====================================================================
   DECORATIVE GRAPHICS  (investment / fintech style, pure SVG + CSS)
   ===================================================================== */

/* page-level soft glows + faded dot grid, sits BEHIND everything */
const PageBackdrop = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[1000px] overflow-hidden"
  >
    <div className="absolute -left-40 top-24 h-[28rem] w-[28rem] rounded-full bg-green-300/30 blur-3xl" />
    <div className="absolute -right-20 top-40 h-[32rem] w-[32rem] rounded-full bg-blue-300/25 blur-3xl" />
    <div className="absolute left-1/3 top-[520px] h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />

    <svg
      className="absolute left-0 top-0 hidden h-[520px] w-[720px] lg:block"
      style={{
        WebkitMaskImage: "radial-gradient(ellipse at 25% 40%, #000 0%, transparent 70%)",
        maskImage: "radial-gradient(ellipse at 25% 40%, #000 0%, transparent 70%)",
      }}
    >
      <defs>
        <pattern id="hero-dots" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.6" fill="#64748b" fillOpacity=".35" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-dots)" />
    </svg>
  </div>
);

/* thin concentric rings inside the dashboard panel */
const Rings = ({ className = "" }) => (
  <svg
    aria-hidden="true"
    className={`pointer-events-none absolute ${className}`}
    viewBox="0 0 560 560"
    fill="none"
  >
    <defs>
      <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#3b5bdb" stopOpacity=".4" />
        <stop offset="1" stopColor="#22c55e" stopOpacity=".2" />
      </linearGradient>
    </defs>
    {[270, 210, 150, 90].map((r) => (
      <circle key={r} cx="280" cy="280" r={r} stroke="url(#ring-grad)" strokeWidth="1.2" />
    ))}
  </svg>
);

/* ---- animated growth chart ---- */
const CHART_LINE =
  "M0 292 C50 288 90 266 140 262 S220 232 280 214 S360 178 410 158 S490 112 530 92 S548 66 560 56";
const chartBars = [34, 46, 40, 58, 52, 74, 68, 88, 82, 106, 100, 122, 134];
const chartDots = [
  [140, 262],
  [280, 214],
  [410, 158],
  [530, 92],
];

const GrowthChart = () => (
  <div className="absolute inset-x-0 bottom-0" style={{ aspectRatio: "620 / 340" }}>
    <svg className="h-full w-full" viewBox="0 0 620 340" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="gc-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#22c55e" stopOpacity=".30" />
          <stop offset="1" stopColor="#22c55e" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="gc-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3b5bdb" />
          <stop offset="1" stopColor="#16a34a" />
        </linearGradient>
        <filter id="gc-glow" x="-10%" y="-40%" width="120%" height="180%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* grid */}
      {[70, 130, 190, 250, 310].map((y) => (
        <line
          key={y}
          x1="0"
          x2="620"
          y1={y}
          y2={y}
          stroke="#94a3b8"
          strokeOpacity=".28"
          strokeDasharray="4 6"
        />
      ))}

      {/* bars */}
      {chartBars.map((h, i) => (
        <rect
          key={i}
          className="sng-bar"
          style={{ animationDelay: `${0.2 + i * 0.07}s` }}
          x={24 + i * 46}
          y={340 - h}
          width="20"
          height={h}
          rx="5"
          fill="#3b5bdb"
          fillOpacity=".11"
        />
      ))}

      {/* area, glow, line */}
      <path className="sng-fade" d={`${CHART_LINE} L560 340 L0 340 Z`} fill="url(#gc-area)" />
      <path
        className="sng-draw"
        pathLength="1"
        d={CHART_LINE}
        stroke="#16a34a"
        strokeOpacity=".4"
        strokeWidth="9"
        strokeLinecap="round"
        filter="url(#gc-glow)"
      />
      <path
        className="sng-draw"
        pathLength="1"
        d={CHART_LINE}
        stroke="url(#gc-line)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* milestone dots */}
      {chartDots.map(([x, y]) => (
        <circle
          key={x}
          className="sng-fade"
          cx={x}
          cy={y}
          r="6"
          fill="#fff"
          stroke="#16a34a"
          strokeWidth="2.5"
        />
      ))}
    </svg>

    {/* glowing end marker + label (HTML so the pulse can animate) */}
    <span
      className="absolute"
      style={{ left: `${(560 / 620) * 100}%`, top: `${(56 / 340) * 100}%` }}
    >
      <span className="absolute -left-2.5 -top-2.5 h-5 w-5 animate-ping rounded-full bg-green-500/40 motion-reduce:animate-none" />
      <span className="absolute -left-[7px] -top-[7px] h-3.5 w-3.5 rounded-full bg-green-600 ring-4 ring-white" />
      <span className="absolute -top-14 left-0 flex -translate-x-[82%] items-center gap-2 whitespace-nowrap rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-gray-800 shadow-lg shadow-blue-900/10 ring-1 ring-gray-100">
        <Svg size={14} className="text-green-600">
          <path d="m3 17 6-6 4 4 8-8" />
          <path d="M15 7h6v6" />
        </Svg>
        Wealth Creation
      </span>
    </span>
  </div>
);

/* the glass "dashboard" panel (extra-wide screens only) */
const DashboardPanel = () => (
  <>
    {/* colour glow behind the panel */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-10 left-[22%] right-0 top-10 hidden rounded-full bg-gradient-to-br from-green-300/50 to-blue-400/40 blur-3xl xl:block"
    />

    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-8 left-[90px] right-0 top-8 hidden overflow-hidden rounded-[32px] border border-white bg-gradient-to-br from-white/90 via-white/70 to-blue-50/80 shadow-[0_30px_80px_-20px_rgba(30,64,175,0.28)] backdrop-blur-xl xl:block"
    >
      <Rings className="-right-24 -top-24 h-[380px] w-[380px]" />

      {/* panel header */}
      <div className="relative z-10 flex items-center justify-between px-6 pt-5">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-green-600 text-white shadow-md shadow-green-600/30">
            <Svg size={18}>
              <path d="M6 20V10M12 20V4M18 20v-7" />
            </Svg>
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-gray-900">Portfolio Growth</span>
            <span className="block text-xs text-gray-500">Long-term wealth creation</span>
          </span>
        </div>

        <div className="flex gap-1 rounded-full bg-gray-100/80 p-1 text-[11px] font-semibold text-gray-500">
          <span className="rounded-full px-2.5 py-1">1Y</span>
          <span className="rounded-full px-2.5 py-1">3Y</span>
          <span className="rounded-full bg-blue-800 px-2.5 py-1 text-white shadow">5Y</span>
        </div>
      </div>

      <GrowthChart />
    </div>
  </>
);

/* floating app-style icon tiles that straddle the panel edge */
const FloatBadge = ({ className = "", tone = "green", delay = "0s", children }) => (
  <span
    aria-hidden="true"
    className={`sng-float pointer-events-none absolute z-20 hidden xl:block ${className}`}
    style={{ animationDelay: delay }}
  >
    <span
      className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg ring-4 ring-white/70 ${
        tone === "green"
          ? "rotate-6 bg-gradient-to-br from-green-400 to-green-600 shadow-green-600/30"
          : "-rotate-6 bg-gradient-to-br from-blue-500 to-blue-800 shadow-blue-800/30"
      }`}
    >
      {children}
    </span>
  </span>
);

/* "expert-led team" chip with overlapping avatars */
const TeamChip = () => (
  <span
    aria-hidden="true"
    className="sng-float pointer-events-none absolute bottom-3 right-14 z-20 hidden items-center gap-3 rounded-full bg-white/95 py-2 pl-2 pr-4 shadow-xl shadow-blue-900/10 ring-1 ring-gray-100 xl:flex"
    style={{ animationDelay: "1.5s" }}
  >
    <span className="flex">
      {["from-blue-500 to-blue-800", "from-green-400 to-green-600", "from-blue-400 to-green-500"].map(
        (g, i) => (
          <span
            key={i}
            className={`-ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br text-white ring-2 ring-white first:ml-0 ${g}`}
          >
            <Svg size={15}>
              <circle cx="12" cy="8" r="4" fill="currentColor" stroke="none" />
              <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7Z" fill="currentColor" stroke="none" />
            </Svg>
          </span>
        )
      )}
    </span>
    <span className="text-xs font-semibold text-gray-800">Expert-led team</span>
  </span>
);

/* faint rings + rising line for the blue join banner */
const BannerArt = () => (
  <svg
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 h-full w-full"
    viewBox="0 0 1200 300"
    preserveAspectRatio="xMidYMid slice"
    fill="none"
  >
    <g stroke="#fff" strokeOpacity=".12">
      {[110, 190, 270, 350].map((r) => (
        <circle key={r} cx="1040" cy="170" r={r} />
      ))}
    </g>
    <path
      d="M0 270 C150 262 250 215 380 222 S600 160 720 150 S980 90 1200 50 L1200 300 L0 300 Z"
      fill="#fff"
      fillOpacity=".05"
    />
    <path
      d="M0 270 C150 262 250 215 380 222 S600 160 720 150 S980 90 1200 50"
      stroke="#fff"
      strokeOpacity=".28"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

/* ---------- page data (edit the text here) ---------- */
const heroChips = [
  {
    title: "High Growth",
    sub: "Sector Potential",
    box: false,
    icon: (
      <Svg size={32}>
        <path d="M6 20V10M12 20V4M18 20v-7" strokeWidth="3.4" />
      </Svg>
    ),
  },
  {
    title: "Diversified",
    sub: "Across Segments",
    box: false,
    icon: (
      <Svg size={32}>
        <path d="M6 20V10M12 20V4M18 20v-7" strokeWidth="3.4" />
      </Svg>
    ),
  },
  {
    title: "Long Term",
    sub: "Wealth Creation",
    box: true,
    icon: (
      <Svg size={24}>
        <path d="m3 17 6-6 4 4 8-8" />
        <path d="M15 7h6v6" />
      </Svg>
    ),
  },
];

/* wrap = horizontal offset (staircase), rot = tilt of the card */
const values = [
  {
    title: "Expertise",
    sub: "Deep Domain Knowledge in Investments and Finance",
    wrap: "ml-0",
    rot: "rotate-2",
    icon: <Svg size={24}><path d="m2 9 10-5 10 5-10 5L2 9Z" /><path d="M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5" /></Svg>,
  },
  {
    title: "Trust",
    sub: "Transparent Process & Client-First Approach",
    wrap: "lg:ml-10 xl:ml-14",
    rot: "-rotate-1",
    icon: <Svg size={24}><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></Svg>,
  },
  {
    title: "Innovation",
    sub: "Technology Powered Investment Solutions",
    wrap: "lg:ml-4 xl:ml-5",
    rot: "-rotate-2",
    icon: <Svg size={24}><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" /></Svg>,
  },
];

const leaders = [
  {
    role: "Founder & CEO",
    text: "Visionary leader with 15+ years of experience in investments and wealth management.",
    tone: "blue",
  },
  {
    role: "COO",
    text: "Operations expert ensuring seamless processes and exceptional client experience.",
    tone: "green",
  },
  {
    role: "CTO",
    text: "Technology leader building secure, scalable, and innovative fintech solutions.",
    tone: "blue",
  },
  {
    role: "Head of Investments",
    text: "Investment strategist with expertise in portfolio management and research.",
    tone: "green",
  },
];

const features = [
  {
    title: "Complete Control",
    sub: "Withdraw or adjust your savings anytime seamlessly",
    color: "text-blue-800",
    icon: <Svg size={28}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></Svg>,
  },
  {
    title: "Secure & Trusted",
    sub: "Bank-level security for peace of mind",
    color: "text-green-600",
    icon: <Svg size={28}><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></Svg>,
  },
  {
    title: "Fast & Easy",
    sub: "Invest, track & grow effortlessly",
    color: "text-amber-500",
    icon: <Svg size={28}><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" /></Svg>,
  },
  {
    title: "Smart Automation",
    sub: "Save & invest your spare change automatically",
    color: "text-green-600",
    icon: <Svg size={28}><path d="M21 12a9 9 0 1 1-9-9v9h9Z" /><path d="M15 3.5A9 9 0 0 1 20.5 9H15V3.5Z" /></Svg>,
  },
];

/* ---------- page ---------- */
export default function Team() {
  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-[linear-gradient(135deg,#f0fdf4_0%,#ffffff_40%,#e3eefb_100%)] font-sans text-gray-900">
      <style>{heroCss}</style>
      <PageBackdrop />
      <Navbar />

      {/* ================= HERO ================= */}
      <div className="relative">
        <section className="relative z-10 mx-auto grid max-w-[1520px] items-center gap-10 px-6 pb-16 pt-16 lg:grid-cols-2 lg:px-10">
          <div className="relative">
            <span className="relative z-10 inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 text-base font-normal shadow-sm ring-1 ring-gray-100">
              <ShieldBadge />
              Our Team
            </span>

            <h1 className="relative z-10 mt-6 text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl">
              The People Behind
              <span className="block">
                <span className="text-blue-800">SwipeN</span>
                <span className="text-green-600">Grow</span>'s Success
              </span>
            </h1>

            <p className="relative z-10 mt-8 max-w-2xl text-lg leading-normal text-gray-800">
              A passionate team of financial experts, technologists, and strategists
              committed to helping you invest smarter and achieve your financial goals.
            </p>

            <div className="relative z-10 mt-8 flex flex-wrap gap-4">
              <a
                href="#leadership"
                className="rounded-lg bg-blue-800 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-800/25 transition hover:-translate-y-0.5 hover:bg-blue-900"
              >
                Meet our Experts
              </a>
              <a
                href="#join"
                className="rounded-lg border border-blue-800 bg-white px-6 py-3.5 text-base font-semibold text-blue-800 transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Join Our Team
              </a>
            </div>

            <div className="relative z-10 mt-10 flex flex-wrap gap-5">
              {heroChips.map((c) => (
                <div
                  key={c.title}
                  className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-sm ring-1 ring-gray-100"
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center text-green-600 ${
                      c.box ? "rounded-lg bg-green-50" : ""
                    }`}
                  >
                    {c.icon}
                  </span>
                  <span className="leading-tight">
                    <span className="block text-[15px]">{c.title}</span>
                    <span className="block text-[13px] text-gray-800">{c.sub}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ===== right column: dashboard panel + overlapping value cards ===== */}
          <div className="relative py-6 xl:h-[580px] xl:py-0">
            <DashboardPanel />

            <FloatBadge tone="green" className="-top-1 right-4">
              <Svg size={26}>
                <path d="m3 17 6-6 4 4 8-8" />
                <path d="M15 7h6v6" />
              </Svg>
            </FloatBadge>

            <FloatBadge tone="blue" delay="1s" className="bottom-6 left-[60px]">
              <Svg size={26}>
                <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
                <path d="m9 12 2 2 4-4" />
              </Svg>
            </FloatBadge>

            <TeamChip />

            <div className="relative z-10 flex flex-col gap-5 xl:absolute xl:left-0 xl:top-1/2 xl:w-[330px] xl:-translate-y-1/2">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className={`sng-rise w-full max-w-[260px] ${v.wrap}`}
                  style={{ animationDelay: `${0.15 + i * 0.15}s` }}
                >
                  <div
                    className={`flex items-center gap-4 rounded-3xl bg-white p-4 shadow-xl shadow-blue-900/10 ring-1 ring-gray-100 ${v.rot}`}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600 ring-1 ring-green-200">
                      {v.icon}
                    </span>
                    <span className="leading-tight">
                      <span className="block text-lg font-semibold">{v.title}</span>
                      <span className="mt-1 block text-[13px] text-gray-700">{v.sub}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ================= LEADERSHIP ================= */}
      <section
        id="leadership"
        className="mx-auto mt-8 max-w-[1400px] scroll-mt-24 px-6 lg:px-10"
      >
        <div className="text-center">
          <span className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 text-base font-normal shadow-sm ring-1 ring-gray-100">
            <ShieldBadge />
            Leadership Team
          </span>
          <h2 className="mt-8 text-3xl font-semibold tracking-tight sm:text-4xl">
            Experienced Leaders, Proven Track Record
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-800">
            Our leadership team combines decades of experience in finance, technology, and
            business strategy to build a platform you can trust.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((l) => (
            <div
              key={l.role}
              className="flex h-full flex-col items-center rounded-[40px] border border-gray-900/80 bg-white px-8 pb-10 pt-10 text-center"
            >
              <span
                className={`flex h-[124px] w-[124px] items-center justify-center rounded-full ${
                  l.tone === "blue" ? "bg-blue-100" : "bg-green-100"
                }`}
              >
                <span
                  className={`flex h-20 w-20 items-center justify-center rounded-full text-white ${
                    l.tone === "blue" ? "bg-blue-800" : "bg-green-600"
                  }`}
                >
                  <Svg size={30}>
                    <circle cx="12" cy="8" r="4" fill="currentColor" stroke="none" />
                    <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7Z" fill="currentColor" stroke="none" />
                  </Svg>
                </span>
              </span>

              <h3 className="mt-8 text-xl font-semibold">{l.role}</h3>
              <p className="mt-3 min-h-[60px] text-sm leading-snug text-gray-700">{l.text}</p>

              <a
                href="#"
                aria-label={`${l.role} on LinkedIn`}
                className="mt-8 flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-700 shadow-sm ring-1 ring-gray-200 transition hover:bg-blue-800 hover:text-white hover:ring-blue-800"
              >
                <LinkedInIcon />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ================= JOIN BANNER ================= */}
      <section id="join" className="mx-auto mt-24 max-w-[1400px] scroll-mt-24 px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[40px] bg-[linear-gradient(90deg,#0057ff_0%,#003a9e_55%,#0057ff_100%)] px-10 py-14 text-white">
          <BannerArt />

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/90">
                Join our journey
              </p>
              <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl xl:text-5xl">
                Ready to Grow With Experts You Can Trust?
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/95">
                Let our team of experts guide you towards smarter investment decisions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 lg:pr-24">
              <a
                href="mailto:info@swipengrow.com"
                className="inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 text-lg font-semibold text-blue-800 transition hover:bg-blue-50"
              >
                Contact Our Team
                <Svg size={18}><path d="M5 12h14M13 6l6 6-6 6" /></Svg>
              </a>
              <Link
                to="/plans"
                className="inline-flex items-center gap-3 rounded-xl border border-white px-6 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
              >
                Join SwipeNGrow
                <Svg size={18}><path d="M5 12h14M13 6l6 6-6 6" /></Svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURE STRIP ================= */}
      <section className="mx-auto mt-24 max-w-[1200px] px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="flex items-center gap-4">
              <span
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-gray-300 ${f.color}`}
              >
                {f.icon}
              </span>
              <span className="leading-tight">
                <span className="block text-base font-semibold">{f.title}</span>
                <span className="mt-1 block text-sm text-gray-600">{f.sub}</span>
              </span>
            </div>
          ))}
        </div>

        <p className="mt-16 text-center text-[11px] text-gray-500">
          *Returns shown are projected based on Foundation Plan's expected 24% p.a. rate.
          Actual returns may vary slightly.
        </p>
      </section>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}