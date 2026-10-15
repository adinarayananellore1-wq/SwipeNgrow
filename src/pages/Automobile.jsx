// src/pages/Automobile.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // your existing footer file

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

/* ---------- page data (edit the text here) ---------- */
const portfolio = [
  { label: "Auto Mobile", to: "/automobile" },
  { label: "Real Estate", to: "/real-estate" },
  { label: "IT & Technology", to: "/it-technology" },
  { label: "EV", to: "/ev" },
];

const heroChips = [
  {
    title: "High Growth",
    sub: "Sector Potential",
    icon: <Svg><path d="M6 20V10M12 20V4M18 20v-7" /></Svg>,
  },
  {
    title: "Diversified",
    sub: "Across Segments",
    icon: <Svg><path d="M6 20V10M12 20V4M18 20v-7" /></Svg>,
  },
  {
    title: "Long Term",
    sub: "Wealth Creation",
    icon: <Svg><path d="m3 17 6-6 4 4 8-8" /><path d="M15 7h6v6" /></Svg>,
  },
];

const highlights = [
  { bold: "India", text: "is the world's third-largest automobile market." },
  { bold: "Strong", text: "Policy support for EV and clean mobility." },
  {
    bold: "Withdrawal at maturity",
    text: "is processed within 1 working day. You can roll over or withdraw to your bank.",
  },
  { bold: "No fees.", text: "Zero entry, exit, or management fees on this plan." },
  {
    bold: "Tax.",
    text: "Returns are treated as income and taxed at your slab rate. We Provide an annual statement.",
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
export default function Automobile() {
  const [playing, setPlaying] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = portfolio.filter((p) =>
    p.label.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 font-sans text-gray-900">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="mx-auto grid max-w-[1400px] items-center gap-10 px-6 pb-16 pt-10 lg:grid-cols-2 lg:px-10">
        <div>
          <h1 className="text-4xl font-medium leading-tight sm:text-5xl xl:text-6xl">
            Automobile Sector Growth Fund{" "}
            <span className="text-blue-800">Investment</span> Strategy
          </h1>
          <p className="mt-8 text-lg text-gray-800">
            Calculate your returns instantly and plan your investments with precision.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/plans"
              className="rounded-xl bg-green-600 px-10 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
            >
              Invest Now
            </Link>
            <a
              href="/brochures/automobile.pdf"
              download
              className="rounded-xl border border-blue-800 bg-white px-10 py-4 text-lg font-semibold text-blue-800 transition hover:bg-blue-50"
            >
              Download Brochure
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {heroChips.map((c) => (
              <div
                key={c.title}
                className="flex items-center gap-3 rounded-xl bg-white/80 px-5 py-3 shadow-sm ring-1 ring-gray-100"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-600">
                  {c.icon}
                </span>
                <span className="leading-tight">
                  <span className="block text-base">{c.title}</span>
                  <span className="block text-sm text-gray-700">{c.sub}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <img
          src="/images/automobile/car-hero.png"
          alt="Automobile"
          className="w-full object-contain lg:scale-110"
        />
      </section>

      {/* ================= VIDEO + SIDEBAR ================= */}
      <section className="mx-auto grid max-w-[1400px] items-start gap-10 px-6 lg:grid-cols-[1fr_436px] lg:px-10">
        {/* video card */}
        <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-200">
            {playing ? (
              <video
                src="/videos/automobile.mp4"
                controls
                autoPlay
                className="h-full w-full object-cover"
              />
            ) : (
              <>
                <img
                  src="/images/automobile/video-poster.png"
                  alt="Automobile fund video"
                  className="h-full w-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label="Play video"
                  className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-green-600/90 text-white shadow-lg transition hover:scale-105 hover:bg-green-600"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>

        {/* sidebar */}
        <aside className="space-y-8">
          {/* search funds */}
          <div className="rounded-3xl border border-gray-900/80 bg-white p-8">
            <h3 className="text-xl font-semibold">Search Funds</h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex items-center gap-2 rounded-xl bg-gray-100 p-1.5"
            >
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Keyword, Name, ID..."
                className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-gray-400"
              />
              <button
                type="submit"
                aria-label="Search"
                className="flex h-10 w-12 items-center justify-center rounded-lg bg-green-600 text-white transition hover:bg-green-700"
              >
                <Svg size={18}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></Svg>
              </button>
            </form>
          </div>

          {/* our portfolio */}
          <div className="rounded-3xl border border-gray-900/80 bg-white p-8">
            <h3 className="text-xl font-semibold">Our Portfolio</h3>
            <ul className="mt-5 space-y-4">
              {filtered.map((p) => (
                <li key={p.label}>
                  <NavLink
                    to={p.to}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-xl px-6 py-5 text-base font-semibold transition ${
                        isActive
                          ? "bg-green-600 text-white"
                          : "bg-gray-50 text-gray-900 hover:bg-green-50"
                      }`
                    }
                  >
                    {p.label}
                    <Svg size={16}><path d="m9 6 6 6-6 6" /></Svg>
                  </NavLink>
                </li>
              ))}
              {filtered.length === 0 && (
                <li className="py-4 text-center text-sm text-gray-500">No funds found</li>
              )}
            </ul>
          </div>
        </aside>
      </section>

      {/* ================= TEXT + IMAGE ================= */}
      <section className="mx-auto mt-12 grid max-w-[1400px] items-start gap-10 px-6 lg:grid-cols-2 lg:px-10">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold">Automobile Sector Growth Fund</h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-800">
            Capturing transformational opportunities in India's booming automobile industry
            across ancillaries.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-gray-800">
            The automobile sector is undergoing its biggest transformation in a century —
            driven by electrification, digitalisation, and changing consumer behaviour. Our
            investment strategy is positioned to benefit from both legacy companies adapting
            to change and new-age players leading disruption.
          </p>

          <h2 className="mt-10 text-3xl font-semibold">Why invest in the Automobile sector</h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-800">
            With rising middle-class incomes, government incentives for EVs, and strong export
            growth, the sector offers compelling returns for informed investors with a
            medium-to-long-term horizon.
          </p>

          <ul className="mt-6 space-y-3">
            {highlights.map((h) => (
              <li key={h.bold} className="flex items-start gap-3 text-[15px] leading-snug">
                <span className="mt-0.5 shrink-0 text-green-600">
                  <Svg size={20}><circle cx="12" cy="12" r="9" /><path d="m8.5 12 2.5 2.5 4.5-5" /></Svg>
                </span>
                <span>
                  <strong className="font-semibold">{h.bold}</strong> {h.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-green-100 to-white p-5 shadow-lg lg:mt-24">
          <img
            src="/images/automobile/factory.png"
            alt="Automobile manufacturing"
            className="aspect-[16/10] w-full rounded-2xl object-cover"
          />
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