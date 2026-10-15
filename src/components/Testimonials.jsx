// src/components/Testimonials.jsx
import { useRef } from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";

/* ---------- icons ---------- */
const QuoteIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M9.4 5C5.8 6.2 3 9.6 3 13.8V19h6.6v-6.2H6.4c.2-2.1 1.4-3.6 3.6-4.5L9.4 5Zm10 0c-3.6 1.2-6.4 4.6-6.4 8.8V19h6.6v-6.2h-3.2c.2-2.1 1.4-3.6 3.6-4.5L19.4 5Z" />
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" aria-hidden="true">
    <path d="m12 2 2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2Z" />
  </svg>
);

const ArrowIcon = ({ dir = "right" }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={dir === "left" ? "rotate-180" : ""}
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/* ---------- content (edit text here) ---------- */
// Swap p1..p5 for your own testimonial photos if you have them.
const reviews = [
  {
    id: "ram",
    name: "Ram Reddy",
    role: "Working Professional",
    photo: p1,
    text: "What I liked most about SwipeNGrow is the flexibility in plans and the easy onboarding process. It made investing simple for someone like me who is just getting started.",
    accent: "from-[#14275c] to-[#244a9e]",
  },
  {
    id: "kabir",
    name: "Kabir Mehta",
    role: "Entrepreneur",
    photo: p2,
    text: "The dashboard is very user-friendly and gives proper updates on my investments. SwipeNGrow made the entire process simple and easy to understand for beginners.",
    accent: "from-[#23479b] to-[#0f9d4a]",
  },
  {
    id: "vikram",
    name: "Vikram Malhotra",
    role: "Small Business Owner",
    photo: p3,
    text: "SwipeNGrow helped me start my investment journey with confidence. The platform is simple to use, and the plans are flexible. As a small business owner, balancing risks is my top priority.",
    accent: "from-[#0b7a38] to-[#0f9d4a]",
  },
  {
    id: "rahul",
    name: "Rahul Sharma",
    role: "Happy Client",
    photo: p4,
    text: "SwipeNGrow makes growing savings smooth, clear, and easy to follow step-by-step. Before finding this platform, I found traditional investing quite overwhelming. Now, I feel empowered.",
    accent: "from-[#14275c] to-[#0f9d4a]",
  },
  {
    id: "rohan",
    name: "Rohan Gupta",
    role: "Digital Marketer",
    photo: p5,
    text: "Investing used to be intimidating. SwipeNGrow changed that with a friendly app and clear guidance. I can't recommend them enough! The intuitive interface, combined with deeply researched plans, is excellent.",
    accent: "from-[#0f9d4a] to-[#244a9e]",
  },
];

export default function Testimonials() {
  const trackRef = useRef(null);

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("article");
    const step = card ? card.offsetWidth + 24 : 340;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-white bg-[radial-gradient(40%_45%_at_0%_30%,rgba(74,222,128,0.18),transparent_70%),radial-gradient(45%_50%_at_100%_80%,rgba(120,140,235,0.16),transparent_70%)] py-24 text-[#111418]"
    >
      <div className="mx-auto max-w-[1760px] px-6 lg:px-20">
        {/* header */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-gray-800 shadow-[0_6px_24px_rgba(0,0,0,0.10)]">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z" fill="#111418" />
                <path
                  d="m8.5 12.2 2.4 2.4 4.6-4.8"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Testimonial
            </span>

            <h2
              id="testimonials-heading"
              className="mt-8 text-[clamp(30px,3.6vw,62px)] font-semibold leading-[1.1] tracking-tight"
            >
              Client Success{" "}
              <span className="bg-gradient-to-r from-[#23479b] to-[#0f9d4a] bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="mt-4 max-w-[560px] text-[clamp(15px,1.05vw,18px)] leading-[1.7] text-gray-600">
              Real words from people who started small and grew with confidence.
            </p>
          </div>

          {/* arrows */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous testimonials"
              className="grid h-12 w-12 place-items-center rounded-full border border-[#dbe3f1] bg-white text-[#14275c] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#14275c] hover:text-white"
            >
              <ArrowIcon dir="left" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next testimonials"
              className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[#0f9d4a] to-[#0a6e33] text-white shadow-[0_10px_24px_rgba(15,157,74,0.30)] transition duration-300 hover:-translate-y-0.5"
            >
              <ArrowIcon />
            </button>
          </div>
        </div>

        {/* cards */}
        <div
          ref={trackRef}
          className="-mx-2 mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto px-2 pb-10 pt-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {reviews.map((r) => (
            <article
              key={r.id}
              className="group relative w-[85%] shrink-0 snap-start sm:w-[46%] lg:w-[31.5%] xl:w-[23.8%]"
            >
              {/* quote badge */}
              <span
                className={`absolute -top-7 left-7 z-10 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br ${r.accent} text-white shadow-[0_10px_24px_rgba(20,39,92,0.30)] transition duration-300 group-hover:scale-110 group-hover:-rotate-6`}
              >
                <QuoteIcon />
              </span>

              <div className="relative flex h-full flex-col overflow-hidden rounded-[32px] border border-[#e5e9f2] bg-white px-7 pb-7 pt-12 shadow-[0_12px_30px_rgba(20,39,92,0.07)] transition duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_24px_50px_rgba(20,39,92,0.15)]">
                {/* top accent bar */}
                <span
                  className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${r.accent} opacity-0 transition duration-300 group-hover:opacity-100`}
                />

                {/* stars */}
                <div className="flex gap-1" aria-label="Rated 5 out of 5">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <StarIcon key={s} />
                  ))}
                </div>

                <p className="mt-5 text-[clamp(14px,0.95vw,16px)] leading-[1.8] text-gray-600">
                  {r.text}
                </p>

                {/* author */}
                <div className="mt-auto flex items-center gap-4 border-t border-gray-100 pt-6">
                  <img
                    src={r.photo}
                    alt={r.name}
                    className="h-14 w-14 rounded-full border-2 border-white object-cover shadow-md ring-2 ring-[#e5e9f2]"
                  />
                  <div>
                    <h4 className="text-[17px] font-semibold leading-tight text-[#111418]">
                      {r.name}
                    </h4>
                    <p className="mt-0.5 text-sm text-gray-500">{r.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}