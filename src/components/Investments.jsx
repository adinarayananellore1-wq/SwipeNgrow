// src/components/Investments.jsx
import autoImg from "../assets/auto.png";
import realImg from "../assets/RealEstate.png";
import itImg from "../assets/it.jpg";
import evImg from "../assets/ev.jpg";

/* ---------- small icons ---------- */
const ChartBadgeIcon = () => (
  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#e4eafa] ring-1 ring-[#23479b]/25">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 17l5-5 4 4 7-8"
        stroke="#23479b"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15 8h5v5" stroke="#23479b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* Row of four outlined chevrons that fade to the right */
const Chevrons = () => (
  <svg
    className="pointer-events-none absolute right-0 top-1/2 hidden h-[150px] w-[390px] -translate-y-1/2 xl:block"
    viewBox="0 0 390 150"
    fill="none"
    aria-hidden="true"
  >
    {[0, 88, 176, 264].map((x, i) => (
      <path
        key={x}
        d="M12 8 H52 L100 75 L52 142 H12 L60 75 Z"
        transform={`translate(${x} 0)`}
        stroke="#23479b"
        strokeWidth="1.3"
        strokeLinejoin="round"
        opacity={[0.9, 0.6, 0.32, 0.16][i]}
      />
    ))}
  </svg>
);

/* ---------- content (edit text here) ---------- */
const cards = [
  {
    id: "auto",
    tag: "Automobile",
    title: "Automobile Industry Growth",
    text: "Capturing transformational opportunities in India's booming automobile industry across ancillaries.",
    img: autoImg,
    href: "#",
  },
  {
    id: "realestate",
    tag: "Property",
    title: "Real Estate Investments",
    text: "Strategically curated portfolio delivering consistent long-term returns premium property investments.",
    img: realImg,
    href: "#",
  },
  {
    id: "it",
    tag: "Technology",
    title: "IT Sector Investments",
    text: "Capturing long-term value across IT services, SaaS, fintech, and deep-tech startups in the digital economy.",
    img: itImg,
    href: "#",
  },
  {
    id: "ev",
    tag: "Clean Energy",
    title: "EV Sector Growth",
    text: "Capturing transformational opportunities in India's booming EV industry across infrastructure.",
    img: evImg,
    href: "#",
  },
];

export default function Investments() {
  return (
    <section
      id="investments"
      aria-labelledby="inv-heading"
      className="relative overflow-hidden bg-white bg-[radial-gradient(45%_50%_at_6%_25%,rgba(120,140,235,0.13),transparent_70%),radial-gradient(40%_45%_at_95%_80%,rgba(74,222,128,0.12),transparent_70%)] pb-28 pt-24 text-[#111418]"
    >
      <div className="mx-auto max-w-[1760px] px-6 lg:px-20">
        {/* badge */}
       <span className="inline-flex items-center gap-3 rounded-full border-2 border-[#23479b] bg-white py-2 pl-2 pr-6 text-[14px] font-bold uppercase tracking-[0.12em] text-[#14275c] shadow-[0_10px_28px_rgba(35,71,155,0.28)]">
       <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#14275c] to-[#23479b] shadow-[0_0_16px_rgba(74,222,128,0.55)]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
         <path
        d="M4 17l5-5 4 4 7-8"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
         />
         <path d="M15 8h5v5" stroke="#4ade80" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
       </svg>
      </span>
      Our Investments
     <span className="h-2 w-2 rounded-full bg-[#16a34a]" />
      </span>

        {/* heading + subtitle + chevrons */}
        <div className="relative mt-10">
          <h2
            id="inv-heading"
            className="max-w-[1100px] text-[clamp(30px,3.2vw,60px)] font-semibold leading-[1.12] tracking-tight"
          >
            Diverse Investment Options for{" "}
            <span className="bg-gradient-to-r from-[#23479b] to-[#0f9d4a] bg-clip-text text-transparent">
              Consistent Growth
            </span>
          </h2>
          <p className="mt-5 max-w-[620px] text-[clamp(15px,1.05vw,19px)] leading-[1.7] text-gray-600">
            Explore the sectors we invest in and choose the path that matches your goals.
          </p>
          <Chevrons />
        </div>

        {/* cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <a
              key={c.id}
              href={c.href}
              className="group relative block h-[400px] overflow-hidden rounded-[22px] shadow-[0_18px_40px_rgba(17,20,24,0.20)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_56px_rgba(20,39,92,0.35)]"
            >
              {/* background photo */}
              <img
                src={c.img}
                alt={c.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* navy tint + dark fade so the text is readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1330]/95 via-[#0a1330]/55 to-transparent" />

              {/* category tag */}
              <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-md">
                {c.tag}
              </span>

              {/* text */}
              <div className="absolute inset-x-0 bottom-0 p-6 pr-20">
                <h3 className="text-[clamp(20px,1.5vw,26px)] font-semibold leading-[1.2] text-white">
                  {c.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-[1.5] text-white/85">{c.text}</p>
              </div>

              {/* round arrow button */}
              <span className="absolute bottom-6 right-5 grid h-11 w-11 place-items-center rounded-full bg-white text-[#111418] shadow-lg transition duration-300 group-hover:rotate-[-45deg] group-hover:bg-[#16a34a] group-hover:text-white">
                <ArrowRight />
              </span>

              {/* accent line that grows on hover */}
              <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#23479b] to-[#4ade80] transition duration-500 group-hover:scale-x-100" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}