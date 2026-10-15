// src/pages/Faq.jsx
import { useState } from "react";
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

const ChevronRight = () => (
  <Svg size={16}>
    <path d="m9 6 6 6-6 6" />
  </Svg>
);

/* =====================================================================
   ANIMATION CSS  (rising cards + floating badges)
   Switched off for people who prefer reduced motion.
   ===================================================================== */
const faqCss = `
@keyframes sng-rise  { from { opacity: 0; transform: translateY(26px); } to { opacity: 1; transform: translateY(0); } }
@keyframes sng-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-9px); } }
@media (prefers-reduced-motion: no-preference) {
  .sng-rise  { animation: sng-rise .75s ease-out both; }
  .sng-float { animation: sng-float 6s ease-in-out infinite; }
}
`;

/* =====================================================================
   DECORATIVE GRAPHICS  (investment / fintech style, pure SVG + CSS)
   ===================================================================== */

/* mint (left) to lavender (right) wash that fades into the page,
   plus soft glows and a faded dot grid. Sits BEHIND everything. */
const PageBackdrop = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[1150px] overflow-hidden"
    style={{
      WebkitMaskImage: "linear-gradient(to bottom, #000 60%, transparent)",
      maskImage: "linear-gradient(to bottom, #000 60%, transparent)",
    }}
  >
    <div className="absolute inset-0 bg-[linear-gradient(115deg,#c6ecd8_0%,#f3faf6_42%,#ffffff_62%,#c5cfee_100%)]" />
    <div className="absolute -left-40 top-24 h-[28rem] w-[28rem] rounded-full bg-green-300/30 blur-3xl" />
    <div className="absolute -right-24 top-40 h-[30rem] w-[30rem] rounded-full bg-indigo-300/30 blur-3xl" />

    <svg
      className="absolute left-0 top-0 hidden h-[520px] w-[720px] lg:block"
      style={{
        WebkitMaskImage: "radial-gradient(ellipse at 25% 40%, #000 0%, transparent 70%)",
        maskImage: "radial-gradient(ellipse at 25% 40%, #000 0%, transparent 70%)",
      }}
    >
      <defs>
        <pattern id="faq-dots" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.6" fill="#64748b" fillOpacity=".3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#faq-dots)" />
    </svg>
  </div>
);

/* thin concentric rings */
const Rings = ({ className = "" }) => (
  <svg
    aria-hidden="true"
    className={`pointer-events-none absolute ${className}`}
    viewBox="0 0 560 560"
    fill="none"
  >
    <defs>
      <linearGradient id="faq-ring-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#3b5bdb" stopOpacity=".4" />
        <stop offset="1" stopColor="#22c55e" stopOpacity=".2" />
      </linearGradient>
    </defs>
    {[270, 210, 150, 90].map((r) => (
      <circle key={r} cx="280" cy="280" r={r} stroke="url(#faq-ring-grad)" strokeWidth="1.2" />
    ))}
  </svg>
);

/* hero artwork: question card + answer card around a glossy shield */
const FaqArt = () => (
  <div aria-hidden="true" className="pointer-events-none relative hidden h-[400px] lg:block">
    <Rings className="-right-16 -top-12 h-[480px] w-[480px]" />

    {/* glossy shield */}
    <span className="sng-float absolute left-[34%] top-[14%]">
      <svg className="h-60 w-60 -rotate-6" viewBox="0 0 24 24" fill="none">
        <defs>
          <linearGradient id="faq-shield" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#d6e8fe" />
            <stop offset="1" stopColor="#8fb8f6" />
          </linearGradient>
        </defs>
        <path
          d="M12 2 3.4 5.6v6.1c0 4.9 3.4 8.6 8.6 10.3 5.2-1.7 8.6-5.4 8.6-10.3V5.6L12 2Z"
          fill="url(#faq-shield)"
          fillOpacity=".9"
        />
        <path
          d="m7.8 12.3 3 3 5.4-5.8"
          stroke="#fff"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>

    {/* question card */}
    <div className="sng-rise absolute left-[2%] top-[6%] w-[250px]" style={{ animationDelay: ".2s" }}>
      <div className="-rotate-3 rounded-3xl bg-white p-4 shadow-xl shadow-blue-900/10 ring-1 ring-gray-100">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-800 text-white shadow-md shadow-blue-800/30">
            <Svg size={20}>
              <circle cx="12" cy="12" r="10" />
              <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 2.5-3 4" />
              <path d="M12 17h.01" />
            </Svg>
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-gray-900">Have a question?</span>
            <span className="block text-xs text-gray-500">Ask us anything</span>
          </span>
        </div>
        <div className="mt-4 h-2 w-full rounded-full bg-gray-100" />
        <div className="mt-2 h-2 w-2/3 rounded-full bg-gray-100" />
      </div>
    </div>

    {/* answer card */}
    <div className="sng-rise absolute bottom-[8%] right-0 w-[250px]" style={{ animationDelay: ".4s" }}>
      <div className="rotate-3 rounded-3xl bg-white p-4 shadow-xl shadow-blue-900/10 ring-1 ring-gray-100">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white shadow-md shadow-green-600/30">
            <Svg size={20}>
              <path d="m5 12.5 4.5 4.5L19 7.5" />
            </Svg>
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-gray-900">Clear answers</span>
            <span className="block text-xs text-gray-500">Simple and transparent</span>
          </span>
        </div>
        <div className="mt-4 h-2 w-full rounded-full bg-green-100" />
        <div className="mt-2 h-2 w-3/4 rounded-full bg-green-100" />
      </div>
    </div>

    {/* green check badge */}
    <span className="sng-float absolute right-[8%] top-0" style={{ animationDelay: "1s" }}>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg shadow-green-600/30 ring-8 ring-white/60">
        <Svg size={26}>
          <path d="m5 12.5 4.5 4.5L19 7.5" strokeWidth="2.6" />
        </Svg>
      </span>
    </span>
  </div>
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
const categories = [
  {
    key: "account",
    title: "Account & Security",
    sub: "Manage your account and privacy",
    tone: "green",
    icon: (
      <Svg size={26}>
        <path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H5" />
        <path d="M16 14h2" />
      </Svg>
    ),
  },
  {
    key: "investments",
    title: "Investments",
    sub: "Plans, returns and investment process",
    tone: "blue",
    icon: (
      <Svg size={24}>
        <path d="M6 5h12M6 9.5h12M8 5c5 0 7 2 7 4.5S13 14 8 14l7 6" />
      </Svg>
    ),
  },
  {
    key: "payments",
    title: "Payments & Withdrawals",
    sub: "Deposits, withdrawals and transactions",
    tone: "green",
    icon: (
      <Svg size={26}>
        <rect x="2" y="5" width="20" height="14" rx="2.5" />
        <path d="M2 10h20" />
        <path d="M6 15h4" />
      </Svg>
    ),
  },
  {
    key: "support",
    title: "Support",
    sub: "Help, guidance and technical support",
    tone: "blue",
    icon: (
      <Svg size={26}>
        <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
        <rect x="2.5" y="14" width="4" height="6" rx="2" />
        <rect x="17.5" y="14" width="4" height="6" rx="2" />
      </Svg>
    ),
  },
];

/* NOTE: order is row by row (left, right, left, right ...).
   These answers are drafted from the text already on your site;
   replace them with your real policies before going live. */
const faqs = [
  {
    id: 1,
    cat: "investments",
    q: "What is SwipeNGrow?",
    a: "SwipeNGrow is a smart investment platform that provides structured, diversified investment plans designed to help you grow your wealth steadily over time with transparency and security.",
  },
  {
    id: 2,
    cat: "investments",
    q: "Do I need prior investing experience?",
    a: "No. SwipeNGrow is built for beginners as well as experienced investors. Our plans are simple to understand, and our team is always available to guide you.",
  },
  {
    id: 3,
    cat: "investments",
    q: "How much do I need to start investing?",
    a: "You can begin with a small amount. The minimum depends on the plan you pick, and the details for each plan are on our Plans page.",
  },
  {
    id: 4,
    cat: "investments",
    q: "What sectors do you invest in?",
    a: "Your money is spread across multiple high-potential sectors to keep your portfolio diversified. Sector details for each plan are available on the Portfolio page.",
  },
  {
    id: 5,
    cat: "account",
    q: "Are my investments secure?",
    a: "We follow bank-level security practices to protect your account and data, and we are transparent about how your money is managed. As with any investment, returns are not guaranteed.",
  },
  {
    id: 6,
    cat: "payments",
    q: "Are there any hidden fees?",
    a: "No. We believe in a transparent process, so all applicable charges are shown clearly before you invest. See the Plans page or contact support for full details.",
  },
  {
    id: 7,
    cat: "investments",
    q: "How do I choose the right investment plan?",
    a: "Pick the plan that matches your goal and time horizon. You can use our Calculator to see how different amounts and durations could grow, or speak to our team for guidance.",
  },
  {
    id: 8,
    cat: "support",
    q: "How can I contact support if I have questions?",
    a: "You can reach us by live chat, by email at info@swipengrow.com, by phone on +91 90000 12146 (Mon - Sat, 9 AM - 7 PM), or on WhatsApp.",
  },
  {
    id: 9,
    cat: "account",
    q: "Can I track my investments in real-time?",
    a: "Yes. You can track your investments and how they are progressing from your account whenever you like.",
  },
  {
    id: 10,
    cat: "investments",
    q: "How long does it take to start seeing returns?",
    a: "It depends on the plan you choose and on market conditions. Our plans are designed for long-term wealth creation, and projected returns are shown with each plan. Actual returns may vary.",
  },
  {
    id: 11,
    cat: "payments",
    q: "How do withdrawals work?",
    a: "You stay in control of your savings. You can request a withdrawal or adjust your savings whenever you need to. Processing times and any applicable terms are listed with each plan.",
  },
  {
    id: 12,
    cat: "payments",
    q: "Can I modify or cancel my investment?",
    a: "Yes. You can adjust or cancel your investment from your account, subject to the terms of your plan. If you need help, our support team is happy to assist.",
  },
];

const contactOptions = [
  {
    title: "Live Chat",
    sub: "Chat with our support team in real-time",
    cta: "Start Chat",
    href: "#",
    tone: "green",
    ctaColor: "text-green-600",
    icon: (
      <Svg size={26}>
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        <path d="M8 10h8M8 14h5" />
      </Svg>
    ),
  },
  {
    title: "Email Us",
    sub: "Drop us an email and we'll get back soon",
    cta: "info@swipengrow.com",
    href: "mailto:info@swipengrow.com",
    tone: "blue",
    ctaColor: "text-blue-800",
    icon: (
      <Svg size={26}>
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="m3.5 7 8.5 6 8.5-6" />
      </Svg>
    ),
  },
  {
    title: "Call Us",
    sub: "Mon - Sat, 9 AM - 7 PM",
    cta: "+91 90000 12146",
    href: "tel:+919000012146",
    tone: "green",
    ctaColor: "text-blue-800",
    icon: (
      <Svg size={26}>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
      </Svg>
    ),
  },
  {
    title: "WhatsApp",
    sub: "Message us on WhatsApp",
    cta: "Chat Now",
    href: "https://wa.me/919000012146",
    tone: "green",
    ctaColor: "text-green-600",
    icon: (
      <Svg size={26}>
        <path d="M3 21l1.65-4.95A9 9 0 1 1 8 19.4L3 21Z" />
        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Zm0 0a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
      </Svg>
    ),
  },
];

/* ---------- one accordion card (turns blue when open) ---------- */
const FaqItem = ({ item, open, onToggle }) => (
  <div
    className={`rounded-3xl transition-all duration-300 ${
      open
        ? "bg-blue-600 shadow-[0_18px_40px_rgba(37,99,235,0.35)]"
        : "bg-white shadow-[0_8px_30px_rgba(15,23,42,0.05)] ring-1 ring-gray-100 hover:ring-gray-200"
    }`}
  >
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      className="flex min-h-[82px] w-full items-center justify-between gap-6 px-7 py-5 text-left"
    >
      <span className={`text-[17px] font-semibold ${open ? "text-white" : "text-[#0f1b3d]"}`}>
        {item.q}
      </span>
      <Svg
        size={20}
        className={`shrink-0 transition-transform duration-300 ${
          open ? "rotate-180 text-white" : "text-gray-400"
        }`}
      >
        <path d="m6 9 6 6 6-6" />
      </Svg>
    </button>

    <div
      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden">
        {/* thin white line between the question and the answer */}
        <div className="mx-7 border-t border-white/30" />
        <p className="px-7 pb-7 pt-5 text-[17px] leading-relaxed text-white">{item.a}</p>
      </div>
    </div>
  </div>
);

/* ---------- page ---------- */
export default function FAQ() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState(null); // active category filter
  const [openId, setOpenId] = useState(null); // first question starts open (use null for all closed)

  const q = query.trim().toLowerCase();
  const visible = faqs.filter(
    (f) =>
      (!cat || f.cat === cat) &&
      (!q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q))
  );

  /* two independent columns on desktop so an opened card only pushes its own column */
  const left = visible.filter((_, i) => i % 2 === 0);
  const right = visible.filter((_, i) => i % 2 === 1);

  const renderItem = (f) => (
    <FaqItem
      key={f.id}
      item={f}
      open={openId === f.id}
      onToggle={() => setOpenId(openId === f.id ? null : f.id)}
    />
  );

  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-[#f8fafc] font-sans text-gray-900">
      <style>{faqCss}</style>
      <PageBackdrop />
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative z-10 mx-auto w-full max-w-[1290px] px-6 pt-14 xl:px-0">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-green-100/80 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-green-700 ring-1 ring-green-200/60">
              <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
              FAQ's
            </span>

            <h1 className="mt-6 text-5xl font-medium leading-[0.95] tracking-tight text-black sm:text-6xl">
              Frequently Asked
              <span className="block text-blue-800">Questions</span>
            </h1>

            <p className="mt-6 max-w-[580px] text-lg leading-snug tracking-[0.035em] text-gray-800">
              Find answers to common questions about our services, investment plans and how
              SwipeNGrow helps you grow.
            </p>

            {/* search */}
            <label className="mt-9 flex h-[62px] w-full max-w-[580px] items-center gap-4 rounded-[18px] border border-gray-200 bg-white px-6 shadow-sm transition focus-within:border-green-400 focus-within:ring-4 focus-within:ring-green-100">
              <Svg size={22} className="shrink-0 text-gray-500">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </Svg>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search your question..."
                aria-label="Search your question"
                className="w-full bg-transparent text-[17px] text-gray-900 outline-none placeholder:text-gray-400"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="shrink-0 rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                >
                  <Svg size={18}>
                    <path d="M6 6l12 12M18 6 6 18" />
                  </Svg>
                </button>
              )}
            </label>
          </div>

          <FaqArt />
        </div>

        {/* categories (click one to filter, click again to clear) */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => {
            const active = cat === c.key;
            return (
              <button
                key={c.key}
                type="button"
                aria-pressed={active}
                onClick={() => setCat(active ? null : c.key)}
                className={`flex items-start gap-4 rounded-2xl p-3 text-left transition ${
                  active ? "bg-white shadow-md ring-1 ring-gray-100" : "hover:bg-white/60"
                }`}
              >
                <span
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full shadow-sm ring-1 ring-white ${
                    c.tone === "green" ? "bg-green-50 text-green-600" : "bg-blue-50 text-blue-700"
                  }`}
                >
                  {c.icon}
                </span>
                <span className="leading-snug">
                  <span className="block text-[17px] font-semibold text-[#0f1b3d]">{c.title}</span>
                  <span className="mt-1 block max-w-[190px] text-sm text-gray-500">{c.sub}</span>
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ================= FAQ LIST ================= */}
      <section className="relative z-10 mx-auto mt-14 w-full max-w-[1290px] px-6 xl:px-0">
        {visible.length === 0 ? (
          <div className="rounded-3xl bg-white px-8 py-12 text-center shadow-[0_8px_30px_rgba(15,23,42,0.05)] ring-1 ring-gray-100">
            <p className="text-lg font-semibold text-[#0f1b3d]">No matching questions found</p>
            <p className="mt-2 text-gray-500">
              Try different keywords, or reach out to our support team below.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCat(null);
              }}
              className="mt-5 rounded-lg bg-blue-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-900"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            {/* mobile / tablet: single list */}
            <div className="flex flex-col gap-4 lg:hidden">{visible.map(renderItem)}</div>

            {/* desktop: two columns */}
            <div className="hidden items-start gap-x-12 lg:grid lg:grid-cols-2">
              <div className="flex flex-col gap-5">{left.map(renderItem)}</div>
              <div className="flex flex-col gap-5">{right.map(renderItem)}</div>
            </div>
          </>
        )}
      </section>

      {/* ================= STILL HAVING QUESTIONS ================= */}
      <section className="relative z-10 mx-auto mt-24 w-full max-w-[1290px] px-6 xl:px-0">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          <div className="lg:w-[420px] lg:shrink-0">
            <span className="inline-flex rounded-full bg-blue-50 px-3.5 py-2 text-[11px] font-bold uppercase tracking-wide text-blue-800 ring-1 ring-blue-100">
              Still having questions
            </span>
            <h2 className="mt-8 text-3xl font-semibold tracking-tight">
              We're Here to <span className="text-blue-600">Help You</span>
            </h2>
            <p className="mt-3 max-w-[390px] text-base leading-snug tracking-wide text-gray-600">
              Our support team is always ready to assist you with any questions or concerns.
            </p>
            <a
              href="mailto:info@swipengrow.com"
              className="mt-5 inline-flex items-center gap-3 rounded-lg bg-green-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-green-600/25 transition hover:-translate-y-0.5 hover:bg-green-700"
            >
              Contact Support
              <ChevronRight />
            </a>
          </div>

          <div className="grid flex-1 gap-8 sm:grid-cols-2 lg:flex lg:gap-0 lg:divide-x lg:divide-gray-200">
            {contactOptions.map((o) => (
              <div key={o.title} className="flex flex-col lg:px-7 lg:py-3 lg:first:pl-0">
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full ${
                    o.tone === "green" ? "bg-green-50 text-green-600" : "bg-blue-50 text-blue-700"
                  }`}
                >
                  {o.icon}
                </span>
                <h3 className="mt-10 text-lg font-medium text-gray-900">{o.title}</h3>
                <p className="mt-2 max-w-[176px] text-sm leading-snug text-gray-500">{o.sub}</p>
                <a
                  href={o.href}
                  className={`mt-auto inline-flex items-center gap-1.5 pt-6 text-[15px] font-semibold ${o.ctaColor}`}
                >
                  {o.cta}
                  <ChevronRight />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= JOIN BANNER ================= */}
      <section id="join" className="relative z-10 mx-auto mt-24 w-full max-w-[1500px] scroll-mt-24 px-6">
        <div className="relative overflow-hidden rounded-[36px] bg-[linear-gradient(90deg,#0057ff_0%,#003a9e_55%,#0057ff_100%)] px-10 py-14 text-white lg:px-20">
          <BannerArt />

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/90">
                Join our journey
              </p>
              <h2 className="mt-5 max-w-[500px] text-3xl font-semibold leading-[1.15] sm:text-4xl xl:text-[44px]">
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

      <div className="relative z-10 mt-24">
        <Footer />
      </div>
    </div>
  );
}