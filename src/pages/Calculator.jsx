// src/pages/Calculator.jsx
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/logo.png";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";

/* ---------- icons ---------- */
const sv = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const TrendIcon = () => (
  <svg width="26" height="26" {...sv}>
    <path d="m3 17 6-6 4 4 8-8" />
    <path d="M15 7h6v6" />
  </svg>
);
const BarsIcon = () => (
  <svg width="26" height="26" {...sv} strokeWidth="2.6">
    <path d="M6 20V10M12 20V4M18 20v-7" />
  </svg>
);
const WalletIcon = () => (
  <svg width="26" height="26" {...sv}>
    <rect x="3" y="6" width="18" height="13" rx="3" />
    <path d="M16 12.5h5v3h-5a1.5 1.5 0 0 1 0-3Z" />
    <path d="M6 6l9-3v3" />
  </svg>
);
const ArrowIcon = ({ size = 18 }) => (
  <svg width={size} height={size} {...sv} strokeWidth="2.2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const ShieldIcon = ({ size = 16, color = "#3b82f6" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z" fill={color} />
    <path d="m8.5 12.2 2.4 2.4 4.6-4.8" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const BoltBig = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="#fbbf24" opacity="0.45" />
  </svg>
);
const ShieldBig = () => (
  <svg width="72" height="72" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z" fill="#6f8dff" opacity="0.55" />
    <path d="m8.5 12.2 2.4 2.4 4.6-4.8" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const InfoIcon = () => (
  <svg width="18" height="18" {...sv}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5M12 8h.01" />
  </svg>
);
const ControlIcon = () => (
  <svg width="24" height="24" {...sv} stroke="#23479b">
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8v4l3 2" />
  </svg>
);
const SecureIcon = () => (
  <svg width="24" height="24" {...sv} stroke="#0f9d4a">
    <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
const FastIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="#f59e0b" />
  </svg>
);
const AutoIcon = () => (
  <svg width="24" height="24" {...sv} stroke="#0f9d4a">
    <circle cx="12" cy="12" r="8" />
    <path d="M12 12V4M12 12l5.5 3.2" />
  </svg>
);

/* ---------- content (edit here) ---------- */
const TERMS = {
  short: {
    label: "Short Term",
    plan: "Foundation Plan",
    min: 100,
    max: 2000,
    step: 50,
    rate: 24,
    days: 30,
    presets: [1050, 1100, 2000],
  },
  mid: {
    label: "Mid Term",
    plan: "Growth Plan",
    min: 5000,
    max: 60000,
    step: 500,
    rate: 30,
    days: 180,
    presets: [10000, 25000, 60000],
  },
  long: {
    label: "Long Term",
    plan: "Wealth Plan",
    min: 25000,
    max: 300000,
    step: 1000,
    rate: 36,
    days: 365,
    presets: [50000, 100000, 300000],
  },
};

const highlights = [
  { id: "c", icon: <ControlIcon />, title: "Complete Control", text: "Withdraw or adjust your savings anytime seamlessly" },
  { id: "s", icon: <SecureIcon />, title: "Secure & Trusted", text: "Bank-level security for peace of mind" },
  { id: "f", icon: <FastIcon />, title: "Fast & Easy", text: "Invest, track & grow effortlessly" },
  { id: "a", icon: <AutoIcon />, title: "Smart Automation", text: "Save & invest your spare change automatically" },
];

/* profile pictures that travel along the semicircle
   r = distance from the centre, from/to = angle range (deg), dur = seconds */
const ORBITS = [
  { img: p1, r: 270, from: -165, to: -35, dur: 8, delay: 0 },
  { img: p2, r: 182, from: -25, to: -155, dur: 6, delay: -2 },
  { img: p3, r: 270, from: -30, to: -150, dur: 9, delay: -4.5 },
];

const orbitCss = `
@keyframes orbit {
  from { transform: rotate(var(--from)); }
  to   { transform: rotate(var(--to)); }
}
@keyframes orbit-counter {
  from { transform: rotate(calc(var(--from) * -1)); }
  to   { transform: rotate(calc(var(--to) * -1)); }
}
.orbit-arm {
  transform-origin: 0 0;
  transform: rotate(var(--from));
  animation: orbit var(--dur) ease-in-out var(--delay) infinite alternate;
}
.orbit-face {
  animation: orbit-counter var(--dur) ease-in-out var(--delay) infinite alternate;
}
@media (prefers-reduced-motion: reduce) {
  .orbit-arm, .orbit-face { animation: none; }
}
`;

const inr = (n) => "₹" + Math.round(n).toLocaleString("en-IN");
const short = (n) =>
  n >= 100000 ? `${+(n / 100000).toFixed(1)}L` : n >= 1000 ? `${+(n / 1000).toFixed(1)}K` : `${n}`;
const calc = (amount, t) => {
  const returns = (amount * t.rate * t.days) / (100 * 365);
  return { returns, maturity: amount + returns, daily: returns / t.days };
};

export default function Calculator({ pageBg }) {
  const [term, setTerm] = useState("short");
  const t = TERMS[term];
  const [amount, setAmount] = useState(TERMS.short.min);

  const switchTerm = (id) => {
    setTerm(id);
    setAmount(TERMS[id].min);
  };

  const res = useMemo(() => calc(amount, t), [amount, t]);
  const pct = ((amount - t.min) / (t.max - t.min)) * 100;

  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans text-[#111418]" style={pageBg}>
      <style>{orbitCss}</style>

      <div className="absolute inset-x-0 top-0 z-20 pt-6">
        <Navbar />
      </div>

      {/* hero */}
      <section className="relative px-6 pb-14 pt-44 text-center lg:px-20">
        <span aria-hidden="true" className="pointer-events-none absolute left-[22%] top-48 hidden -rotate-12 lg:block">
          <BoltBig />
        </span>
        <span aria-hidden="true" className="pointer-events-none absolute right-[16%] top-44 hidden rotate-6 lg:block">
          <ShieldBig />
        </span>
        <h1 className="mx-auto max-w-[900px] text-[clamp(32px,4.4vw,72px)] font-semibold leading-[1.1] tracking-tight">
          Estimate what your{" "}
          <span className="bg-gradient-to-r from-[#23479b] to-[#0f9d4a] bg-clip-text text-transparent">Money</span>{" "}
          becomes.
        </h1>
        <p className="mt-6 text-[clamp(15px,1.2vw,20px)] text-gray-700">
          Calculate your returns instantly and plan your investments with precision.
        </p>
      </section>

      {/* calculator panel */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-[1800px] rounded-[44px] border border-white bg-white/75 p-5 shadow-[0_20px_60px_rgba(20,39,92,0.08)] backdrop-blur sm:p-8 lg:p-14">
          {/* tabs */}
          <div role="tablist" aria-label="Investment term" className="inline-flex gap-1 rounded-full bg-[#f1f4fa] p-1.5">
            {Object.entries(TERMS).map(([id, v]) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={term === id}
                onClick={() => switchTerm(id)}
                className={`rounded-full px-6 py-3 text-[15px] font-semibold transition duration-300 ${
                  term === id
                    ? "bg-[#23479b] text-white shadow-[0_10px_24px_rgba(35,71,155,0.30)]"
                    : "text-[#23479b]/80 hover:bg-white"
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.78fr_2fr]">
            {/* investment amount card */}
            <div className="relative flex flex-col overflow-hidden rounded-[28px] bg-gradient-to-br from-[#06361a] via-[#1b6b2f] to-[#9bd05a] p-8 text-white shadow-[0_24px_50px_rgba(15,100,50,0.25)]">
              <span aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/20 blur-3xl" />
              <svg aria-hidden="true" viewBox="0 0 400 200" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 bottom-28 h-44 w-full opacity-40">
                <path d="M0 200V150l50-10 40-40 40 10 40 40 40-10 40-60 60-20 50-60v200Z" fill="#c7f27a" />
              </svg>

              <h2 className="relative text-[clamp(26px,2vw,34px)] font-semibold">Investment amount</h2>
              <p className="relative mt-3 text-[15px] text-white/85">
                Choose any amount between {inr(t.min)} and {inr(t.max)}.
              </p>

              <p className="relative mt-8 font-serif text-[clamp(52px,5vw,84px)] font-medium leading-none">
                {inr(amount)}
              </p>

              <div className="relative mt-auto pt-24">
                <p className="text-[15px] text-white/85">Per Investment in {t.plan}</p>

                <div className="relative mt-4">
                  <div className="h-1.5 w-full rounded-full bg-white/35">
                    <div className="h-full rounded-full bg-white" style={{ width: `${pct}%` }} />
                  </div>
                  <input
                    type="range"
                    min={t.min}
                    max={t.max}
                    step={t.step}
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    aria-label="Investment amount"
                    className="absolute inset-x-0 -top-2.5 h-7 w-full cursor-pointer opacity-0"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-[9px] h-6 w-6 -translate-x-1/2 rounded-full border-[5px] border-[#16a34a] bg-white shadow-lg"
                    style={{ left: `${pct}%` }}
                  />
                </div>
                <div className="mt-3 flex justify-between text-sm text-white/85">
                  <span>₹ {t.min.toLocaleString("en-IN")}</span>
                  <span>₹ {t.max.toLocaleString("en-IN")}</span>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {t.presets.map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setAmount(v)}
                      className={`rounded-2xl py-4 text-[15px] font-semibold backdrop-blur transition duration-300 hover:-translate-y-0.5 ${
                        amount === v ? "bg-white text-[#14532d]" : "bg-white/20 hover:bg-white/30"
                      }`}
                    >
                      {inr(v)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* results */}
            <div className="flex flex-col gap-6">
              <div className="grid gap-5 md:grid-cols-3">
                {[
                  { id: "m", label: "Total of Maturity", value: inr(res.maturity), icon: <TrendIcon /> },
                  { id: "r", label: "Total Returns", value: inr(res.returns), icon: <BarsIcon /> },
                  { id: "d", label: "Daily Return", value: inr(res.daily), icon: <WalletIcon /> },
                ].map((c) => (
                  <div
                    key={c.id}
                    className="flex items-center justify-between rounded-[24px] border border-[#e5e9f2] bg-white px-7 py-8 shadow-[0_8px_24px_rgba(20,39,92,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(20,39,92,0.12)]"
                  >
                    <div>
                      <p className="text-[15px] text-gray-500">{c.label}</p>
                      <p className="mt-3 font-serif text-[clamp(26px,2.2vw,36px)]">{c.value}</p>
                    </div>
                    <span className="grid h-[52px] w-[52px] place-items-center rounded-2xl bg-[#e3f5ea] text-[#0f9d4a]">
                      {c.icon}
                    </span>
                  </div>
                ))}
              </div>

              {/* summary */}
              <div className="flex flex-1 flex-col rounded-[24px] border border-[#e5e9f2] bg-white p-8 shadow-[0_8px_24px_rgba(20,39,92,0.05)]">
                <h3 className="text-[clamp(20px,1.6vw,26px)] font-semibold">Your Investment Summary</h3>

                <div className="relative mt-8 flex items-center justify-between px-4">
                  <div>
                    <p className="text-[15px] text-gray-500">You Invest</p>
                    <p className="mt-2 text-[clamp(26px,2.2vw,36px)] font-bold">{inr(amount)}</p>
                  </div>
                  <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                    <span className="h-10 w-px bg-gray-300" />
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-[#e8f1ee] text-[#111418] shadow-sm">
                      <ArrowIcon />
                    </span>
                    <span className="h-10 w-px bg-gray-300" />
                  </div>
                  <div className="text-right">
                    <p className="text-[15px] text-gray-500">You Receive</p>
                    <p className="mt-2 text-[clamp(26px,2.2vw,36px)] font-bold text-[#0f9d4a]">{inr(res.maturity)}</p>
                    <p className="mt-1 text-[15px] text-[#0f9d4a]">In {t.days} Days</p>
                  </div>
                </div>

                <Link
                  to="/plans"
                  className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#00a651] to-[#0f9d4a] px-6 py-5 text-[16px] font-semibold text-white shadow-[0_14px_30px_rgba(15,157,74,0.30)] transition duration-300 hover:-translate-y-0.5"
                >
                  Start Investing {inr(amount)}
                  <ArrowIcon size={18} />
                </Link>
                <p className="mt-5 flex items-center justify-center gap-2 text-[14px] text-gray-500">
                  <ShieldIcon />
                  Secure . Transparent . Trusted by 10,000+ Investors
                </p>
              </div>
            </div>
          </div>

          {/* plan + budget */}
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {/* selected plan */}
            <div className="relative overflow-hidden rounded-[28px] border border-[#e5e9f2] bg-white p-8 shadow-[0_8px_24px_rgba(20,39,92,0.05)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[16px] text-gray-600">Selected Plan</p>
                  <h3 className="mt-1 text-[clamp(24px,2vw,34px)] font-semibold">{t.plan}</h3>
                </div>
                <div className="text-right">
                  <p className="text-sm text-[#0f9d4a]">
                    {t.rate}% p.a. · {t.days}-day lock-in
                  </p>
                  <p className="mt-1 text-[clamp(28px,2.4vw,40px)] font-bold text-[#0f9d4a]">{t.rate}%</p>
                </div>
              </div>

              {/* semicircle with orbiting profile pictures */}
              <div className="relative mx-auto mt-6 h-[340px] max-w-[780px] overflow-hidden">
                <div className="absolute bottom-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#f3f4f6]" />
                <div className="absolute bottom-0 left-1/2 h-[480px] w-[480px] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#e9eaed]" />
                <div className="absolute bottom-0 left-1/2 h-[250px] w-[250px] -translate-x-1/2 translate-y-1/2 rounded-full bg-white" />

                {/* pivot = bottom centre of the semicircle */}
                <div className="absolute bottom-0 left-1/2 h-0 w-0">
                  {ORBITS.map((o, i) => (
                    <div
                      key={i}
                      className="orbit-arm absolute left-0 top-0 h-0"
                      style={{
                        width: o.r,
                        "--from": `${o.from}deg`,
                        "--to": `${o.to}deg`,
                        "--dur": `${o.dur}s`,
                        "--delay": `${o.delay}s`,
                      }}
                    >
                      <div className="absolute -right-7 -top-7 h-14 w-14">
                        <div
                          className="orbit-face relative h-full w-full"
                          style={{
                            "--from": `${o.from}deg`,
                            "--to": `${o.to}deg`,
                            "--dur": `${o.dur}s`,
                            "--delay": `${o.delay}s`,
                          }}
                        >
                          <img
                            src={o.img}
                            alt=""
                            className="h-14 w-14 rounded-full border-4 border-white object-cover shadow-lg"
                          />
                          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[15px] font-bold text-[#111418]">
                            {t.rate}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <img
                  src={logo}
                  alt="SwipeNGrow"
                  className="absolute bottom-[-18px] left-1/2 z-10 h-24 w-24 -translate-x-1/2 object-contain"
                />

                <Link
                  to="/plans"
                  className="absolute bottom-4 right-2 z-10 rounded-xl bg-[#00a651] px-6 py-3.5 text-[16px] font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5"
                >
                  Join with us
                </Link>
              </div>
            </div>

            {/* budget */}
            <div className="rounded-[28px] border border-[#e5e9f2] bg-white p-8 shadow-[0_8px_24px_rgba(20,39,92,0.05)]">
              <p className="text-[16px] text-gray-600">Select budget</p>
              <h3 className="mt-1 text-[clamp(24px,2vw,34px)] font-semibold">If you bumped this ....</h3>

              <ul className="mt-6 space-y-4">
                {t.presets.map((v) => {
                  const r = calc(v, t).returns;
                  return (
                    <li key={v}>
                      <button
                        type="button"
                        onClick={() => setAmount(v)}
                        className={`flex w-full items-center justify-between rounded-2xl px-5 py-5 text-left transition duration-300 hover:-translate-y-0.5 ${
                          amount === v ? "bg-[#e3f5ea] ring-2 ring-[#0f9d4a]/40" : "bg-[#f6f7f9] hover:bg-[#eef1f6]"
                        }`}
                      >
                        <span className="flex items-center gap-4">
                          <span className="grid h-14 w-14 place-items-center rounded-xl bg-[#e6e8ec] text-[15px] font-bold text-gray-600">
                            {short(v)}
                          </span>
                          <span>
                            <span className="block text-[17px] font-bold">Invest {inr(v)}</span>
                            <span className="block text-[15px] text-gray-500">{t.days} days</span>
                          </span>
                        </span>
                        <span className="text-right">
                          <span className="block text-sm text-gray-500">Returns</span>
                          <span className="block text-[18px] font-bold">+{inr(r)}</span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center">
                <p className="flex flex-1 items-center gap-3 rounded-2xl bg-[#f6f7f9] px-5 py-4 text-[14px] leading-snug text-gray-600">
                  <span className="shrink-0 text-gray-400">
                    <InfoIcon />
                  </span>
                  <span>
                    Your returns are projected based on{" "}
                    <b className="text-[#111418]">
                      {t.plan}'s expected {t.rate}% p.a.
                    </b>{" "}
                    rate.
                  </span>
                </p>
                <Link
                  to="/plans"
                  className="shrink-0 rounded-2xl bg-[#00a651] px-7 py-5 text-center text-[17px] font-bold text-white shadow-[0_12px_28px_rgba(15,157,74,0.30)] transition duration-300 hover:-translate-y-0.5"
                >
                  Start with {inr(amount)}
                </Link>
              </div>
            </div>
          </div>

          {/* highlights */}
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <div key={h.id} className="flex items-start gap-4">
                <span className="grid h-[54px] w-[54px] shrink-0 place-items-center rounded-2xl border border-gray-300 bg-white shadow-sm">
                  {h.icon}
                </span>
                <div>
                  <h4 className="text-[16px] font-semibold">{h.title}</h4>
                  <p className="mt-1 max-w-[190px] text-[14px] leading-snug text-gray-600">{h.text}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-[14px] text-gray-500">
            *Returns shown are projected based on {t.plan}'s expected {t.rate}% p.a. rate. Actual returns may vary
            slightly.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}