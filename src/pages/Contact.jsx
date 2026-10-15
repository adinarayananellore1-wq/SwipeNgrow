// src/pages/Contact.jsx
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* =====================================================
   1. EDIT YOUR DETAILS HERE
   ===================================================== */
const PHONE_SHOW = "+91 9000012146";
const PHONE_LINK = "tel:+919000012146";
const EMAIL = "info@swipengrow.com";
const PARTNER_EMAIL = "partner@swipengrow.com";
const COMPANY = "SwipeNGrow Private Limited";
const ADDRESS =
  "First Floor, Lakshmi Nilayam, Plot no: 47, H.no: 1, 98/9/3/30, Silicon Valley, Madhapur, Telangana 500081";

/* the map. To pin your exact office: open Google Maps, search your office,
   click Share > Embed a map, and paste the link inside src="..." here instead. */
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  `${COMPANY}, ${ADDRESS}`
)}&output=embed`;
const DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${COMPANY}, ${ADDRESS}`
)}`;

const subjects = [
  "General enquiry",
  "Investment plans",
  "Account & support",
  "Partnership",
  "Other",
];

/* =====================================================
   2. SMALL HELPERS
   ===================================================== */
const Icon = ({ size = 22, className = "", children }) => (
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
    aria-hidden="true"
  >
    {children}
  </svg>
);

const icons = {
  headset: (
    <>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="2.5" y="14" width="4" height="6" rx="2" />
      <rect x="17.5" y="14" width="4" height="6" rx="2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2 3.4 5.6v6.1c0 4.9 3.4 8.6 8.6 10.3 5.2-1.7 8.6-5.4 8.6-10.3V5.6L12 2Z" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17.5" cy="9" r="2.4" />
      <path d="M17 14.2c2.4.3 4 2.4 4 4.8" />
    </>
  ),
  chat: <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  briefcase: (
    <>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 13h20" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </>
  ),
  chevron: <path d="m9 6 6 6-6 6" />,
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    </>
  ),
  pie: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v9h9" />
    </>
  ),
  book: (
    <>
      <path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2Z" />
      <path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7Z" />
    </>
  ),
};

/* text under the heading */
const heroFeatures = [
  { icon: "headset", title: "Quick Support", text: "Dedicated and reliable assistance." },
  { icon: "shield", title: "Secure & Trusted", text: "Your information is safe with us." },
  { icon: "users", title: "Expert Guidance", text: "Talk to our investment specialists." },
];

/* the four cards at the bottom */
const reasons = [
  {
    icon: "user",
    tone: "blue",
    title: "Personalized Guidance",
    text: "Get customized investment advice tailored to your goals.",
  },
  {
    icon: "pie",
    tone: "green",
    title: "Plan Recommendations",
    text: "Find the best investment plan that suits your needs.",
  },
  {
    icon: "shield",
    tone: "blue",
    title: "Account & Support",
    text: "Help with your account, plans, or transactions.",
  },
  {
    icon: "book",
    tone: "green",
    title: "Learn & Grow",
    text: "Know more about investing and wealth-building opportunities.",
  },
];

/* =====================================================
   3. HERO PICTURE (drawn with SVG, no image file needed)
   To use your own picture instead, replace <ContactArt /> with <img src={...} />
   ===================================================== */
const Spark = ({ x, y, s = 1, c }) => (
  <path
    transform={`translate(${x} ${y}) scale(${s})`}
    d="M0 -14 Q2 -2 14 0 Q2 2 0 14 Q-2 2 -14 0 Q-2 -2 0 -14Z"
    fill={c}
  />
);

const ContactArt = () => (
  <svg viewBox="0 0 640 480" className="h-full w-full" fill="none" aria-hidden="true">
    <defs>
      <radialGradient id="ct-glow" cx="50%" cy="55%" r="50%">
        <stop offset="0" stopColor="#bfdbfe" stopOpacity=".9" />
        <stop offset="1" stopColor="#bfdbfe" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="ct-env" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="1" stopColor="#dbe4fb" />
      </linearGradient>
      <linearGradient id="ct-chat" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#4ade80" />
        <stop offset="1" stopColor="#16a34a" />
      </linearGradient>
      <linearGradient id="ct-plane" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#3b82f6" />
        <stop offset="1" stopColor="#1d4ed8" />
      </linearGradient>
    </defs>

    {/* soft glow + dashed orbit */}
    <circle cx="320" cy="270" r="210" fill="url(#ct-glow)" />
    <ellipse
      cx="320"
      cy="262"
      rx="262"
      ry="128"
      transform="rotate(-10 320 262)"
      stroke="#2dd4bf"
      strokeOpacity=".7"
      strokeWidth="1.6"
      strokeDasharray="5 7"
    />

    {/* envelope */}
    <g style={{ filter: "drop-shadow(0 22px 26px rgba(37,99,235,.22))" }}>
      <rect x="205" y="235" width="250" height="165" rx="20" fill="url(#ct-env)" stroke="#e2e8f0" />
      <g transform="rotate(-6 330 250)">
        <rect x="258" y="150" width="150" height="170" rx="16" fill="#fff" stroke="#e2e8f0" />
        <text
          x="333"
          y="262"
          textAnchor="middle"
          fontSize="92"
          fontWeight="800"
          fill="#1d4ed8"
          fontFamily="Poppins, Arial, sans-serif"
        >
          S
        </text>
        <path d="M368 188 L392 176 L386 202 Z" fill="#16a34a" />
      </g>
      <path
        d="M205 255 L330 345 L455 255 V382 a18 18 0 0 1 -18 18 H223 a18 18 0 0 1 -18 -18 Z"
        fill="url(#ct-env)"
        stroke="#e2e8f0"
      />
    </g>

    {/* chat bubble */}
    <g style={{ filter: "drop-shadow(0 16px 18px rgba(22,163,74,.28))" }}>
      <rect x="95" y="205" width="135" height="92" rx="46" fill="url(#ct-chat)" />
      <path d="M175 292 L196 326 L214 288 Z" fill="#16a34a" />
      <circle cx="135" cy="251" r="9" fill="#fff" />
      <circle cx="163" cy="251" r="9" fill="#fff" />
      <circle cx="191" cy="251" r="9" fill="#fff" />
    </g>

    {/* paper plane */}
    <g style={{ filter: "drop-shadow(0 14px 16px rgba(37,99,235,.3))" }}>
      <path d="M470 252 L592 196 L548 312 L520 276 Z" fill="url(#ct-plane)" />
      <path d="M520 276 L592 196 L488 262 Z" fill="#60a5fa" />
      <path d="M520 276 L548 312 L534 270 Z" fill="#1e40af" />
    </g>

    {/* phone badge */}
    <g style={{ filter: "drop-shadow(0 12px 18px rgba(15,23,42,.15))" }}>
      <circle cx="545" cy="396" r="50" fill="#fff" />
      <circle cx="545" cy="396" r="36" fill="#dcfce7" />
      <g transform="translate(527 378) scale(1.5)">
        <path
          d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"
          fill="#16a34a"
          stroke="#16a34a"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </g>
    </g>

    {/* sparkles */}
    <Spark x={108} y={372} s={1} c="#2563eb" />
    <Spark x={520} y={160} s={0.9} c="#22c55e" />
    <Spark x={588} y={118} s={0.7} c="#22c55e" />
    <Spark x={172} y={168} s={0.6} c="#3b82f6" />
  </svg>
);

/* soft background: mint on the left, lavender on the right */
const PageBackdrop = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[1100px] overflow-hidden"
    style={{
      WebkitMaskImage: "linear-gradient(to bottom, #000 60%, transparent)",
      maskImage: "linear-gradient(to bottom, #000 60%, transparent)",
    }}
  >
    <div className="absolute inset-0 bg-[linear-gradient(115deg,#c6ecd8_0%,#f3faf6_42%,#ffffff_62%,#c5cfee_100%)]" />
    <div className="absolute -left-40 top-24 h-[28rem] w-[28rem] rounded-full bg-green-300/30 blur-3xl" />
    <div className="absolute -right-24 top-40 h-[30rem] w-[30rem] rounded-full bg-indigo-300/30 blur-3xl" />

    {/* thin curved lines on both sides */}
    <svg className="absolute left-0 top-28 hidden h-[420px] w-[420px] lg:block" viewBox="0 0 420 420" fill="none">
      <path d="M0 150 C80 120 160 100 220 90" stroke="#22c55e" strokeOpacity=".35" />
      <path d="M0 230 C60 200 140 190 200 210 S230 270 150 280 S40 300 0 330" stroke="#22c55e" strokeOpacity=".3" />
    </svg>
    <svg className="absolute right-0 top-40 hidden h-[420px] w-[360px] lg:block" viewBox="0 0 360 420" fill="none">
      <path d="M360 90 C280 100 200 150 170 220 S190 330 360 340" stroke="#3b5bdb" strokeOpacity=".3" />
      <path d="M360 180 C300 190 250 230 260 280" stroke="#3b5bdb" strokeOpacity=".25" />
    </svg>
  </div>
);

/* =====================================================
   4. FORM PIECES
   ===================================================== */
const emptyForm = { name: "", email: "", phone: "", subject: "", message: "" };

function validate(f) {
  const e = {};
  if (!f.name.trim()) e.name = "Please enter your full name";
  if (!/^\S+@\S+\.\S+$/.test(f.email.trim())) e.email = "Please enter a valid email";
  if (f.phone.trim() && !/^[+\d][\d\s-]{6,}$/.test(f.phone.trim()))
    e.phone = "Please enter a valid phone number";
  if (!f.subject) e.subject = "Please choose a subject";
  if (f.message.trim().length < 10) e.message = "Please write at least 10 characters";
  return e;
}

/* This is the ONE place that sends the message.
   Right now it opens the visitor's email app with everything filled in.
   Later you can replace it with a real service (Formspree, EmailJS or your own API). */
function sendForm(f) {
  const body = `Name: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone || "-"}\n\n${f.message}`;
  window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
    f.subject
  )}&body=${encodeURIComponent(body)}`;
}

const inputClass = (error) =>
  `h-14 w-full rounded-xl border bg-gray-50/60 px-4 text-[15px] text-gray-900 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-4 ${
    error
      ? "border-red-400 focus:border-red-500 focus:ring-red-100"
      : "border-gray-200 focus:border-green-500 focus:ring-green-100"
  }`;

const Field = ({ label, error, children }) => (
  <label className="block">
    <span className="mb-2 block text-sm font-semibold text-gray-900">{label}</span>
    {children}
    {error && <span className="mt-1.5 block text-xs text-red-600">{error}</span>}
  </label>
);

/* a row inside the "Get in Touch" card */
const InfoRow = ({ icon, tone = "indigo", title, children }) => (
  <div className="flex items-start gap-4">
    <span
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-blue-800 ${
        tone === "green" ? "bg-green-50" : "bg-indigo-50"
      }`}
    >
      <Icon size={20}>{icons[icon]}</Icon>
    </span>
    <div className="leading-snug">
      <p className="font-semibold text-gray-900">{title}</p>
      {children}
    </div>
  </div>
);

/* card heading: small green icon square + title + one line of text */
const CardHeading = ({ icon, title, text }) => (
  <>
    <div className="flex items-center gap-4">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
        <Icon size={20}>{icons[icon]}</Icon>
      </span>
      <h2 className="text-2xl font-medium text-gray-900">{title}</h2>
    </div>
    <p className="mt-4 text-gray-500">{text}</p>
  </>
);

/* =====================================================
   5. THE PAGE
   ===================================================== */
export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = "Contact Us | SwipeNGrow";
  }, []);

  const update = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    if (errors[field]) setErrors({ ...errors, [field]: undefined });
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    sendForm(form);
    setSent(true);
    setForm(emptyForm);
  };

  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-white font-sans text-gray-900">
      <PageBackdrop />
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="mx-auto grid w-full max-w-[1590px] items-center gap-12 px-6 pt-14 lg:grid-cols-[1fr_1.1fr] lg:px-10">
        <div className="lg:pl-16">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0f1b3d]">
            <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
            Contact Us
          </p>

          <h1 className="mt-6 text-5xl font-medium leading-[1.05] tracking-tight text-black sm:text-6xl">
            We're Here to Help
            <span className="block">
              You <span className="text-green-600">Grow Smarter</span>
            </span>
          </h1>

          <p className="mt-8 max-w-[560px] text-lg leading-relaxed text-gray-900">
            Have questions or need guidance? Our team is ready to help you with the best investment
            solutions for your goals.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {heroFeatures.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-green-600 shadow-sm ring-1 ring-gray-100">
                  <Icon size={20}>{icons[f.icon]}</Icon>
                </span>
                <span className="leading-snug">
                  <span className="block text-[15px] font-medium text-gray-900">{f.title}</span>
                  <span className="mt-1 block text-xs text-gray-500">{f.text}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* picture card */}
        <div className="rounded-[28px] bg-white/70 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] ring-1 ring-white">
          <div className="aspect-[4/3] w-full">
            <ContactArt />
          </div>
        </div>
      </section>

      {/* ================= TWO CARDS ================= */}
      <section className="mx-auto mt-16 grid w-full max-w-[1590px] gap-8 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        {/* ----- Get in Touch ----- */}
        <div className="flex flex-col rounded-[32px] border border-gray-900 bg-white p-8 sm:p-10">
          <CardHeading
            icon="chat"
            title="Get in Touch"
            text="Reach out to us through any of the following channels."
          />

          <div className="mt-10 flex flex-col gap-7">
            <InfoRow icon="phone" tone="green" title="Phone">
              <a href={PHONE_LINK} className="mt-1 block text-[15px] font-semibold text-blue-700 hover:underline">
                {PHONE_SHOW}
              </a>
              <p className="mt-1 text-sm font-medium text-gray-600">Available 24/7</p>
            </InfoRow>

            <InfoRow icon="mail" title="Email">
              <a href={`mailto:${EMAIL}`} className="mt-1 block text-[15px] text-blue-700 hover:underline">
                {EMAIL}
              </a>
              <p className="mt-1 text-sm text-gray-500">We reply within 24 hours</p>
            </InfoRow>

            <InfoRow icon="pin" title="Office Address">
              <p className="mt-1 text-[15px] leading-relaxed text-gray-600">
                {COMPANY}, {ADDRESS}
              </p>
            </InfoRow>

            <InfoRow icon="briefcase" title="Business Inquiries">
              <a href={`mailto:${PARTNER_EMAIL}`} className="mt-1 block text-[15px] text-gray-600 hover:text-blue-700">
                {PARTNER_EMAIL}
              </a>
              <p className="mt-1 text-sm text-gray-500">For partnerships and corporate enquiries.</p>
            </InfoRow>
          </div>

          <a
            href={`mailto:${EMAIL}?subject=${encodeURIComponent("Schedule a call")}`}
            className="mt-10 flex h-16 items-center justify-center gap-3 rounded-xl border border-green-600 text-lg font-semibold text-green-600 transition hover:bg-green-50 lg:mt-auto"
          >
            <Icon size={20}>{icons.calendar}</Icon>
            Schedule a Call
          </a>
        </div>

        {/* ----- Send Us a Message ----- */}
        <div className="rounded-[32px] border border-gray-900 bg-white p-8 sm:p-10">
          <CardHeading
            icon="mail"
            title="Send Us a Message"
            text="Fill out the form below and our team will get back to you shortly."
          />

          <form onSubmit={handleSubmit} noValidate className="mt-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your Full Name" error={errors.name}>
                <input
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Enter your full name"
                  className={inputClass(errors.name)}
                />
              </Field>

              <Field label="Your Email" error={errors.email}>
                <input
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="Enter your email"
                  className={inputClass(errors.email)}
                />
              </Field>

              <Field label="Phone Number" error={errors.phone}>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="Enter your phone number"
                  className={inputClass(errors.phone)}
                />
              </Field>

              <Field label="Subject" error={errors.subject}>
                <select
                  value={form.subject}
                  onChange={update("subject")}
                  className={`${inputClass(errors.subject)} ${
                    form.subject ? "text-gray-900" : "text-gray-500"
                  }`}
                >
                  <option value="">Choose a subject</option>
                  {subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Message" error={errors.message}>
                <textarea
                  value={form.message}
                  onChange={update("message")}
                  rows={5}
                  placeholder="Type your message here..."
                  className={`${inputClass(errors.message)} h-auto resize-none py-4`}
                />
              </Field>
            </div>

            <p className="mt-6 flex items-center gap-2 text-sm text-gray-500">
              <Icon size={15}>{icons.lock}</Icon>
              Your information is secure and confidential.
            </p>

            {sent && (
              <p
                role="status"
                className="mt-5 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700 ring-1 ring-green-200"
              >
                Thank you! Your email app should open with your message ready to send.
              </p>
            )}

            <button
              type="submit"
              className="mt-7 flex h-16 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 via-sky-600 to-green-500 text-lg font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Send Message
              <Icon size={18}>{icons.chevron}</Icon>
            </button>
          </form>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="mx-auto mt-10 w-full max-w-[1590px] px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[28px] border border-gray-900 bg-white">
          <iframe
            title="SwipeNGrow office location"
            src={MAP_SRC}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="block h-[400px] w-full border-0"
          />

          <div className="relative z-10 m-4 rounded-2xl bg-white p-6 shadow-xl lg:absolute lg:left-5 lg:top-5 lg:m-0 lg:w-[350px]">
            <h3 className="text-xl font-semibold text-blue-800">Our Location</h3>
            <p className="mt-1 text-sm text-gray-500">Visit us at our office.</p>
            <p className="mt-5 font-semibold text-gray-900">{COMPANY}</p>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{ADDRESS}</p>
            <a
              href={DIRECTIONS}
              target="_blank"
              rel="noreferrer"
              className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-blue-800 text-sm font-semibold text-white transition hover:bg-blue-900"
            >
              Get Directions
              <Icon size={14}>{icons.chevron}</Icon>
            </a>
          </div>
        </div>
      </section>

      {/* ================= WHY REACH OUT ================= */}
      <section className="mx-auto mt-24 w-full max-w-[1590px] px-6 text-center lg:px-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm text-gray-800 shadow-sm ring-1 ring-gray-100">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-white">
            <Icon size={12} className="stroke-[3]">
              <path d="m5 12.5 4.5 4.5L19 7.5" />
            </Icon>
          </span>
          Why Contact Us
        </span>

        <h2 className="mt-7 text-4xl font-medium tracking-tight text-black sm:text-5xl">
          Why Reach Out to <span className="text-blue-800">SwipeN</span>
          <span className="text-green-600">Grow</span>?
        </h2>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-[28px] border border-gray-900 bg-white px-6 py-9 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span
                className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${
                  r.tone === "green" ? "bg-green-50" : "bg-blue-50"
                }`}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-white ${
                    r.tone === "green" ? "bg-green-600" : "bg-blue-800"
                  }`}
                >
                  <Icon size={20}>{icons[r.icon]}</Icon>
                </span>
              </span>
              <h3 className="mt-7 text-lg font-semibold text-black">{r.title}</h3>
              <p className="mx-auto mt-3 max-w-[260px] text-[15px] leading-relaxed text-gray-700">
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}