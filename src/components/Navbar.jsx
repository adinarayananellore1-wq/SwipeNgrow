// src/components/Navbar.jsx
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const leftLinks = [
  { label: "Home", to: "/" },
  { label: "Plans", to: "/plans" },
  { label: "Calculator", to: "/calculator" },
  { label: "Portfolio", to: "#", dropdown: true },
];
const rightLinks = [
  { label: "Team", to: "/team" },
  { label: "FAQ's", to: "/faq" },
  { label: "Contact Us", to: "/contact" },
];

// Small inline icons (no extra package needed)
const Icon = ({ children }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

// Change the routes and descriptions to suit your pages
const portfolioItems = [
  {
    label: "Auto Mobile",
    desc: "Vehicles & mobility",
    to: "/automobile",
    icon: (
      <Icon>
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <path d="M9 17h6" />
        <circle cx="17" cy="17" r="2" />
      </Icon>
    ),
  },
  {
    label: "Real Estate",
    desc: "Property & land",
    to: "/real-estate",
    icon: (
      <Icon>
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
        <path d="M10 6h4M10 10h4M10 14h4M10 18h4" />
      </Icon>
    ),
  },
  {
    label: "IT & Technology",
    desc: "Software & digital",
    to: "/it-technology",
    icon: (
      <Icon>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" />
      </Icon>
    ),
  },
  {
    label: "EV",
    desc: "Electric mobility",
    to: "/ev",
    icon: (
      <Icon>
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </Icon>
    ),
  },
];

function PortfolioMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const { pathname } = useLocation();
  const isActive = portfolioItems.some((item) => item.to === pathname);

  // close when the page changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // close on outside click/tap, and on the Escape key
  useEffect(() => {
    const onPointerDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <li ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
        className={`flex items-center gap-1.5 rounded-full px-5 py-2 transition ${
          isActive
            ? "bg-blue-900 text-white"
            : open
            ? "text-green-600"
            : "hover:text-green-700"
        }`}
      >
        Portfolio
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {/* Always rendered so the open/close animation can play */}
      <div
        className={`absolute left-0 top-full z-30 pt-3 transition-all duration-200 ease-out ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="relative w-72 rounded-2xl bg-white p-2 shadow-xl ring-1 ring-black/5">
          {/* little arrow pointing at the button */}
          <span className="absolute -top-1.5 left-10 h-3 w-3 rotate-45 bg-white ring-1 ring-black/5 [clip-path:polygon(0_0,100%_0,0_100%)]" />

          <ul className="relative">
            {portfolioItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-gray-50"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                    {item.icon}
                  </span>
                  <span className="leading-tight">
                    <span className="block text-base font-medium text-gray-900">
                      {item.label}
                    </span>
                    <span className="block text-sm text-gray-500">{item.desc}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="relative z-20 w-full bg-transparent">
      <nav className="relative mx-auto flex max-w-[1760px] items-center justify-between px-20 py-5">
        <ul className="flex items-center gap-6 text-lg text-gray-900">
          {leftLinks.map((l) => {
            if (l.dropdown) return <PortfolioMenu key={l.label} />;

            const active = pathname === l.to;
            const cls = `flex items-center gap-1.5 rounded-full px-5 py-2 transition ${
              active ? "bg-blue-900 text-white" : "hover:text-green-700"
            }`;
            return (
              <li key={l.label}>
                <Link to={l.to} className={cls}>
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link to="/" className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2">
          <img src={logo} alt="SwipeNGrow" className="h-12 w-auto" />
          <div className="leading-tight">
            <h1 className="text-2xl font-bold">
              <span className="text-blue-900">Swipe</span>
              <span className="text-green-600">NGrow</span>
            </h1>
            <p className="text-[8px] font-semibold uppercase tracking-wide text-gray-800">
              Invest Today - Grow Tomorrow
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-10 text-lg text-gray-900">
          <ul className="flex items-center gap-6">
            {rightLinks.map((l) => {
              // real page links use <Link> and show the active pill
              if (l.to.startsWith("/")) {
                const active = pathname === l.to;
                return (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className={`flex items-center rounded-full px-5 py-2 transition ${
                        active ? "bg-blue-900 text-white" : "hover:text-green-700"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              }
              // placeholder links (Contact Us) stay as normal anchors for now
              return (
                <li key={l.label}>
                  <a href={l.to} className="px-5 py-2 transition hover:text-green-700">
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <Link
            to="/Signup"
            className="rounded-full bg-green-600 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-green-700"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}