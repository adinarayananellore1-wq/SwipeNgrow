// src/components/Footer.jsx
import { useState } from "react";
import logo from "../assets/logo.png";

/* ---------- icons ---------- */
const sv = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const PhoneIcon = () => (
  <svg width="20" height="20" {...sv}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" {...sv}>
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

const PinIcon = () => (
  <svg width="20" height="20" {...sv}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="18" height="18" {...sv} strokeWidth="2.2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const UpIcon = () => (
  <svg width="18" height="18" {...sv} strokeWidth="2.2">
    <path d="M12 19V5M6 11l6-6 6 6" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="18" height="18" {...sv}>
    <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.5 22v-8h2.7l.5-3.3h-3.2V8.6c0-.9.4-1.7 1.8-1.7h1.5V4.1S15.5 3.9 14.2 3.9c-2.6 0-4.3 1.6-4.3 4.4v2.4H7v3.3h2.9v8h3.6Z" />
  </svg>
);

const XIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.3L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.5 3A1.9 1.9 0 1 0 4.5 6.8 1.9 1.9 0 0 0 4.5 3ZM2.8 8.4h3.4V21H2.8V8.4Zm5.5 0h3.2v1.7h.1c.5-.9 1.6-2 3.4-2 3.6 0 4.2 2.3 4.2 5.4V21h-3.4v-6.6c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5V21H8.3V8.4Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" {...sv} strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const TelegramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M21.9 4.1 18.6 20c-.2 1-.9 1.3-1.7.8l-4.8-3.6-2.3 2.3c-.3.3-.5.5-1 .5l.3-4.9 8.9-8c.4-.3-.1-.5-.6-.2L6.4 13.8 1.7 12.3c-1-.3-1-1 .2-1.5L20.2 3.8c.9-.3 1.7.2 1.7.3Z" />
  </svg>
);

/* ---------- content (edit text here) ---------- */
const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Why Choose Us", href: "#why" },
  { label: "How it Works", href: "#how" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Our History", href: "#history" },
  { label: "Testimonials", href: "#testimonials" },
];

const socials = [
  { id: "facebook", label: "Facebook", href: "#", icon: <FacebookIcon /> },
  { id: "x", label: "X", href: "#", icon: <XIcon /> },
  { id: "linkedin", label: "LinkedIn", href: "#", icon: <LinkedinIcon /> },
  { id: "instagram", label: "Instagram", href: "#", icon: <InstagramIcon /> },
  { id: "telegram", label: "Telegram", href: "#", icon: <TelegramIcon /> },
];

const contacts = [
  { id: "phone", icon: <PhoneIcon />, label: "Call us", value: "+91 9000012146", href: "tel:+919000012146" },
  { id: "mail", icon: <MailIcon />, label: "Email us", value: "info@swipengrow.com", href: "mailto:info@swipengrow.com" },
  { id: "web", icon: <PinIcon />, label: "Website", value: "swipengrow.com", href: "https://swipengrow.com" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-white px-4 pb-6 pt-24 text-white sm:px-6 lg:px-12"
    >
      <div className="relative mx-auto max-w-[1400px]">
        {/* floating CTA */}
        <div className="relative z-10 mx-6 -mb-16 overflow-hidden rounded-[32px] bg-gradient-to-r from-[#0f9d4a] via-[#0d8a6a] to-[#244a9e] px-8 py-10 shadow-[0_24px_60px_rgba(15,157,74,0.35)] md:mx-14 md:px-14">
          <span aria-hidden="true" className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-white/15 blur-2xl" />
          <span aria-hidden="true" className="pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-[clamp(22px,2.2vw,36px)] font-semibold leading-tight tracking-tight">
                Ready to grow your savings?
              </h3>
              <p className="mt-2 max-w-[520px] text-[15px] leading-relaxed text-white/80">
                Start with a small amount today and build a smarter financial future, step by step.
              </p>
            </div>
            <a
              href="#plans"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-[15px] font-semibold text-[#14275c] shadow-xl transition duration-300 hover:-translate-y-1"
            >
              Get Started
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#14275c] text-white transition duration-300 group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </div>

        {/* main footer card */}
        <div className="relative overflow-hidden rounded-[44px] bg-[#0a1230] bg-[radial-gradient(50%_60%_at_0%_0%,rgba(36,74,158,0.45),transparent_70%),radial-gradient(45%_55%_at_100%_100%,rgba(15,157,74,0.30),transparent_70%)] px-8 pb-10 pt-28 shadow-[0_30px_80px_rgba(10,18,48,0.35)] md:px-14">
          {/* dotted texture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
              backgroundSize: "26px 26px",
              maskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)",
            }}
          />

          <div className="relative grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1.2fr_1.4fr] lg:gap-10">
            {/* brand */}
            <div>
              <a href="#home" aria-label="SwipeNGrow home" className="inline-flex items-center gap-3">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white shadow-lg">
                  <img src={logo} alt="" className="h-9 w-9 object-contain" />
                </span>
                <span className="leading-none">
                  <span className="block text-[26px] font-bold tracking-tight">
                    Swipe<span className="text-[#4ade80]">N</span>Grow
                  </span>
                  <span className="mt-1.5 block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
                    Invest Today · Grow Tomorrow
                  </span>
                </span>
              </a>

              <p className="mt-6 max-w-[340px] text-[15px] leading-[1.8] text-white/65">
                Ready to build a smarter financial future? Get started with SwipeNGrow today and
                watch your savings work harder for you.
              </p>

              <div className="mt-7 flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.id}
                    href={s.href}
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-white/80 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-br hover:from-[#0f9d4a] hover:to-[#244a9e] hover:text-white hover:shadow-[0_10px_24px_rgba(15,157,74,0.35)]"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* quick links */}
            <div>
              <h4 className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#4ade80]">
                Quick Links
              </h4>
              <ul className="mt-6 space-y-3.5">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="group inline-flex items-center gap-2 text-[15px] text-white/70 transition duration-300 hover:translate-x-1 hover:text-white"
                    >
                      <span className="h-px w-3 bg-white/30 transition-all duration-300 group-hover:w-5 group-hover:bg-[#4ade80]" />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* contact */}
            <div>
              <h4 className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#4ade80]">
                Contact
              </h4>
              <ul className="mt-6 space-y-5">
                {contacts.map((c) => (
                  <li key={c.id}>
                    <a href={c.href} className="group flex items-center gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-[#4ade80] transition duration-300 group-hover:bg-[#0f9d4a] group-hover:text-white">
                        {c.icon}
                      </span>
                      <span>
                        <span className="block text-xs text-white/45">{c.label}</span>
                        <span className="block text-[15px] font-medium text-white/90 transition group-hover:text-[#4ade80]">
                          {c.value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* newsletter */}
            <div>
              <h4 className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#4ade80]">
                Stay Updated
              </h4>
              <p className="mt-6 text-[15px] leading-[1.75] text-white/65">
                Subscribe to get the latest updates on finance, investments, and market insights.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-5 flex items-center rounded-full border border-white/20 bg-white/[0.07] p-1.5 pl-5 backdrop-blur transition focus-within:border-[#4ade80] focus-within:ring-4 focus-within:ring-[#4ade80]/15"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  aria-label="Email address"
                  className="min-w-0 flex-1 bg-transparent text-[15px] text-white outline-none placeholder:text-white/40"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-gradient-to-br from-[#0f9d4a] to-[#0a6e33] px-5 py-3 text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(15,157,74,0.40)] transition duration-300 hover:-translate-y-0.5"
                >
                  {sent ? "Subscribed ✓" : "Get Listed"}
                </button>
              </form>

              <p className="mt-4 flex items-center gap-2 text-xs text-white/50">
                <span className="text-[#4ade80]">
                  <ShieldIcon />
                </span>
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* bottom bar */}
          <div className="relative mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-[14px] text-white/55 md:flex-row">
            <p>
              © Copyright 2026 - SwipeNGrow Private Limited. All Rights Reserved
            </p>

            <div className="flex items-center gap-4">
              <a href="#privacy" className="transition hover:text-white">
                Privacy Policy
              </a>
              <span aria-hidden="true" className="h-4 w-px bg-white/20" />
              <a href="#terms" className="transition hover:text-white">
                Terms &amp; Conditions
              </a>
              <a
                href="#home"
                aria-label="Back to top"
                className="ml-2 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition duration-300 hover:-translate-y-1 hover:bg-[#0f9d4a]"
              >
                <UpIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}