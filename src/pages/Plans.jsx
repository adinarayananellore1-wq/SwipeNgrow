// src/pages/Plans.jsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ---------- icons ---------- */
const LockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17 9V7a5 5 0 0 0-10 0v2H5v12h14V9h-2Zm-8 0V7a3 3 0 0 1 6 0v2H9Z" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const BoltIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="#fbbf24" opacity="0.45" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="72" height="72" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z" fill="#6f8dff" opacity="0.55" />
    <path
      d="m8.5 12.2 2.4 2.4 4.6-4.8"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ---------- content (edit plans here) ---------- */
const DESC = "Flexible investment plan for your financial goals";

const plans = [
  { id: 1, term: "short", name: "Foundation Plan", range: "₹100 - ₹2.0K", daily: "₹1", lock: "30 Days", total: "₹39", trending: true },
  { id: 2, term: "short", name: "Basic Plan", range: "₹2.0K - ₹10.0K", daily: "₹5", lock: "90 Days", total: "₹450", trending: true },
  { id: 3, term: "short", name: "Starter Plan", range: "₹10.0K - ₹25.0K", daily: "₹8", lock: "365 Days", total: "₹2,750", trending: true },
  { id: 4, term: "short", name: "Quick Plan", range: "₹500 - ₹5.0K", daily: "₹2", lock: "30 Days", total: "₹60" },
  { id: 5, term: "mid", name: "Growth Plan", range: "₹5.0K - ₹15.0K", daily: "₹10", lock: "180 Days", total: "₹1,800", trending: true },
  { id: 6, term: "mid", name: "Silver Plan", range: "₹15.0K - ₹30.0K", daily: "₹18", lock: "180 Days", total: "₹3,240" },
  { id: 7, term: "mid", name: "Gold Plan", range: "₹30.0K - ₹60.0K", daily: "₹35", lock: "270 Days", total: "₹9,450" },
  { id: 8, term: "mid", name: "Platinum Plan", range: "₹60.0K - ₹1.0L", daily: "₹60", lock: "270 Days", total: "₹16,200" },
  { id: 9, term: "long", name: "Wealth Plan", range: "₹25.0K - ₹50.0K", daily: "₹22", lock: "365 Days", total: "₹8,030", trending: true },
  { id: 10, term: "long", name: "Premier Plan", range: "₹50.0K - ₹1.0L", daily: "₹45", lock: "365 Days", total: "₹16,425" },
  { id: 11, term: "long", name: "Elite Plan", range: "₹1.0L - ₹3.0L", daily: "₹120", lock: "540 Days", total: "₹64,800" },
  { id: 12, term: "long", name: "Legacy Plan", range: "₹3.0L - ₹10.0L", daily: "₹350", lock: "730 Days", total: "₹2,55,500" },
];

const tabs = [
  { id: "all", label: "ALL" },
  { id: "short", label: "Short Term" },
  { id: "mid", label: "Mid Term" },
  { id: "long", label: "Long Term" },
];

export default function Plans({ pageBg }) {
  const [active, setActive] = useState("all");
  const [open, setOpen] = useState(null);

  const count = (id) => (id === "all" ? plans.length : plans.filter((p) => p.term === id).length);
  const visible = active === "all" ? plans : plans.filter((p) => p.term === active);

  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans text-[#111418]" style={pageBg}>
      <div className="absolute inset-x-0 top-0 z-20 pt-6">
        <Navbar />
      </div>

      {/* hero */}
      <section className="relative px-6 pb-12 pt-44 text-center lg:px-20">
        <span aria-hidden="true" className="pointer-events-none absolute left-[18%] top-48 hidden -rotate-12 lg:block">
          <BoltIcon />
        </span>
        <span aria-hidden="true" className="pointer-events-none absolute right-[16%] top-44 hidden rotate-6 lg:block">
          <ShieldIcon />
        </span>

        <h1 className="mx-auto max-w-[1000px] text-[clamp(32px,4.4vw,72px)] font-semibold leading-[1.1] tracking-tight">
          Flexible Plans Designed for Your{" "}
          <span className="bg-gradient-to-r from-[#23479b] to-[#0f9d4a] bg-clip-text text-transparent">
            Investment Goals
          </span>
        </h1>
        <p className="mt-6 text-[clamp(15px,1.2vw,20px)] text-gray-600">
          Investment plans for every goal. Conservative to aggressive growth.
        </p>
      </section>

      {/* plans panel */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-20">
        <div className="mx-auto max-w-[1560px] rounded-[44px] border border-white bg-white/70 px-5 py-8 shadow-[0_20px_60px_rgba(20,39,92,0.08)] backdrop-blur sm:px-8 lg:px-10">
          {/* filters */}
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-3" role="tablist" aria-label="Plan duration">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={active === t.id}
                  onClick={() => {
                    setActive(t.id);
                    setOpen(null);
                  }}
                  className={`rounded-full px-6 py-3 text-[15px] font-medium transition duration-300 ${
                    active === t.id
                      ? "bg-[#23479b] text-white shadow-[0_10px_24px_rgba(35,71,155,0.30)]"
                      : "bg-[#f1f4fa] text-gray-600 hover:-translate-y-0.5 hover:bg-[#e4eafa] hover:text-[#23479b]"
                  }`}
                >
                  {t.label} ({count(t.id)})
                </button>
              ))}
            </div>

            <p className="flex items-center gap-2 text-[15px] text-gray-700">
              <span className="text-gray-500">
                <LockIcon />
              </span>
              Returns shown are indicative — not guaranteed
            </p>
          </div>

          {/* cards */}
          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {visible.map((p) => (
              <article
                key={p.id}
                className="group relative flex flex-col overflow-hidden rounded-[28px] border border-[#23479b]/70 bg-white p-8 shadow-[0_12px_30px_rgba(20,39,92,0.06)] transition duration-300 hover:-translate-y-2 hover:border-[#23479b] hover:shadow-[0_24px_50px_rgba(35,71,155,0.18)]"
              >
                {p.trending && (
                  <span className="absolute right-0 top-0 rounded-bl-2xl bg-gradient-to-r from-[#14275c] to-[#244a9e] px-5 py-2 text-xs font-bold tracking-wide text-white">
                    TRENDING
                  </span>
                )}

                <h3 className="pr-24 text-[clamp(22px,1.7vw,30px)] font-semibold leading-tight text-[#23479b]">
                  {p.name}
                </h3>
                <p className="mt-3 max-w-[300px] text-[15px] leading-relaxed text-gray-700">{DESC}</p>

                <p className="mt-6 flex flex-wrap items-baseline gap-2 text-[clamp(22px,1.8vw,30px)] font-semibold text-[#23479b]">
                  {p.range}
                  <span className="text-[clamp(20px,1.7vw,28px)] font-normal text-gray-300">/</span>
                  <span className="text-[clamp(20px,1.7vw,28px)] font-medium text-gray-300">month</span>
                </p>

                <dl className="mt-6 space-y-4 border-t border-gray-200 pt-6 text-[16px]">
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-800">Daily Interest</dt>
                    <dd className="font-semibold text-[#0f9d4a]">{p.daily}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-800">Lock-in Period</dt>
                    <dd className="text-gray-800">{p.lock}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-800">Total Interest</dt>
                    <dd className="text-gray-800">{p.total}</dd>
                  </div>
                </dl>

                {/* expandable details */}
                <div
                  className={`grid transition-all duration-500 ${
                    open === p.id ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="space-y-2 rounded-2xl bg-[#f3f6fb] p-5 text-sm text-gray-700">
                      <li>• Invest within {p.range} per month</li>
                      <li>• Funds locked for {p.lock}</li>
                      <li>• Withdraw after the lock-in period ends</li>
                      <li>• Returns shown are indicative, not guaranteed</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-auto grid grid-cols-2 gap-4 pt-8">
                  <button
                    type="button"
                    onClick={() => setOpen(open === p.id ? null : p.id)}
                    aria-expanded={open === p.id}
                    className="rounded-full border border-[#23479b]/70 bg-[#f6f7fb] px-5 py-3.5 text-[15px] font-semibold text-[#111418] transition duration-300 hover:bg-[#e4eafa]"
                  >
                    {open === p.id ? "Hide" : "Details"}
                  </button>
                  <a
                    href="#get-started"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#23479b] px-5 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(35,71,155,0.30)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#14275c]"
                  >
                    Get Started
                    <span className="transition duration-300 group-hover:translate-x-0.5">
                      <ArrowIcon />
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}