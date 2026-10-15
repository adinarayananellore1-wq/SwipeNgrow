// src/pages/Signup.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

/* =====================================================
   1. CONNECT YOUR SERVER HERE
   Put the web address where your server accepts new accounts.
   While it is empty, the form checks everything but shows
   "not connected" instead of pretending the account was created.
   ===================================================== */
const SIGNUP_URL = ""; // example: "https://api.swipengrow.com/signup"

async function createAccount(f) {
  if (!SIGNUP_URL) throw new Error("Sign up is not connected to a server yet.");

  const res = await fetch(SIGNUP_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: f.name.trim(),
      email: f.email.trim(),
      mobile: f.mobile.trim(),
      password: f.password,
    }),
  });
  if (!res.ok) throw new Error("Something went wrong. Please try again.");
}

/* =====================================================
   2. SMALL HELPERS
   ===================================================== */
const Icon = ({ size = 20, className = "", children }) => (
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

const EyeIcon = ({ off }) =>
  off ? (
    <Icon size={20}>
      <path d="M3 3l18 18" />
      <path d="M10.6 6.2A9.8 9.8 0 0 1 12 6c6.4 0 10 6 10 6a17 17 0 0 1-3.2 3.9M6.5 7.6A17.4 17.4 0 0 0 2 12s3.6 6 10 6a9.7 9.7 0 0 0 4.2-.9" />
      <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
    </Icon>
  ) : (
    <Icon size={20}>
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </Icon>
  );

const ZAP = "M13 2 3 14h9l-1 8 10-12h-9l1-8z";

/* soft background: mint on the left, lavender on the right */
const PageBackdrop = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
  >
    <div className="absolute inset-0 bg-[linear-gradient(115deg,#c6ecd8_0%,#f3faf6_40%,#ffffff_60%,#c5cfee_100%)]" />
    <div className="absolute -left-40 top-24 h-[28rem] w-[28rem] rounded-full bg-green-300/30 blur-3xl" />
    <div className="absolute -right-24 top-40 h-[30rem] w-[30rem] rounded-full bg-indigo-300/30 blur-3xl" />

    {/* thin curved lines on both sides */}
    <svg className="absolute left-0 top-32 hidden h-[420px] w-[420px] lg:block" viewBox="0 0 420 420" fill="none">
      <path d="M0 150 C80 120 160 100 220 90" stroke="#22c55e" strokeOpacity=".35" />
      <path d="M0 230 C60 200 140 190 200 210 S230 270 150 280 S40 300 0 330" stroke="#22c55e" strokeOpacity=".3" />
    </svg>
    <svg className="absolute right-0 top-40 hidden h-[420px] w-[360px] lg:block" viewBox="0 0 360 420" fill="none">
      <path d="M360 90 C280 100 200 150 170 220 S190 330 360 340" stroke="#3b5bdb" strokeOpacity=".3" />
      <path d="M360 180 C300 190 250 230 260 280" stroke="#3b5bdb" strokeOpacity=".25" />
    </svg>
  </div>
);

/* one small feature (white icon box + two lines of text) */
const Feature = ({ icon, title, text }) => (
  <div className="flex items-center gap-4">
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-md ring-1 ring-gray-100">
      {icon}
    </span>
    <span className="leading-snug">
      <span className="block text-[17px] font-medium text-gray-900">{title}</span>
      <span className="block text-sm text-gray-700">{text}</span>
    </span>
  </div>
);

/* =====================================================
   3. FORM PIECES
   ===================================================== */
const emptyForm = { name: "", email: "", mobile: "", password: "", confirm: "", agree: false };

function validate(f) {
  const e = {};
  if (!f.name.trim()) e.name = "Please enter your full name";
  if (!/^\S+@\S+\.\S+$/.test(f.email.trim())) e.email = "Please enter a valid email address";
  if (!/^[6-9]\d{9}$/.test(f.mobile.trim())) e.mobile = "Please enter a valid 10-digit mobile number";
  if (!/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(f.password))
    e.password = "Use at least 8 characters with a letter and a number";
  if (f.confirm !== f.password || !f.confirm) e.confirm = "Passwords do not match";
  if (!f.agree) e.agree = "Please accept the terms to continue";
  return e;
}

const inputClass = (error) =>
  `h-[50px] w-full rounded-xl border bg-white px-4 text-[15px] text-gray-900 outline-none transition placeholder:text-gray-400 focus:ring-4 ${
    error
      ? "border-red-400 focus:border-red-500 focus:ring-red-100"
      : "border-gray-300 focus:border-blue-600 focus:ring-blue-100"
  }`;

const Field = ({ label, error, children }) => (
  <label className="block">
    <span className="mb-2 block text-sm font-medium text-gray-900">{label}</span>
    {children}
    {error && <span className="mt-1.5 block text-xs text-red-600">{error}</span>}
  </label>
);

/* password box with the show / hide eye */
const PasswordInput = ({ value, onChange, error, placeholder, autoComplete }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`${inputClass(error)} pr-12`}
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        aria-label={show ? "Hide password" : "Show password"}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-gray-400 transition hover:text-gray-700"
      >
        <EyeIcon off={!show} />
      </button>
    </div>
  );
};

/* =====================================================
   4. THE PAGE
   ===================================================== */
export default function Signup() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle" }); // idle | loading | success | error

  useEffect(() => {
    document.title = "Create Account | SwipeNGrow";
  }, []);

  const update = (field) => (e) => {
    const value = field === "agree" ? e.target.checked : e.target.value;
    setForm({ ...form, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: undefined });
    if (status.type !== "idle") setStatus({ type: "idle" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus({ type: "loading" });
    try {
      await createAccount(form);
      setStatus({ type: "success" });
      setForm(emptyForm);
    } catch (err) {
      setStatus({ type: "error", message: err.message });
    }
  };

  return (
    <div className="relative isolate min-h-screen overflow-x-hidden font-sans text-gray-900">
      <PageBackdrop />
      <Navbar />

      <main className="mx-auto grid w-full max-w-[1500px] gap-8 px-6 pb-20 pt-10 lg:grid-cols-[1fr_500px_1fr] lg:px-10">
        {/* ----- left side (desktop only) ----- */}
        <div className="hidden flex-col justify-between pb-40 pt-12 lg:flex" aria-hidden="true">
          <svg width="90" height="90" viewBox="0 0 24 24" className="ml-[28%] rotate-[8deg]">
            <path d={ZAP} fill="#fcd34d" fillOpacity=".55" />
          </svg>

          <div className="ml-[10%]">
            <Feature
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2 3.4 5.6v6.1c0 4.9 3.4 8.6 8.6 10.3 5.2-1.7 8.6-5.4 8.6-10.3V5.6L12 2Z"
                    fill="#16a34a"
                  />
                  <path
                    d="m8.5 12 2.5 2.5 4.5-5"
                    stroke="#fff"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              title="Secure & Trusted"
              text="Bank-level security for peace of mind"
            />
          </div>
        </div>

        {/* ----- the form card ----- */}
        <section className="w-full rounded-[32px] border border-gray-900 bg-white px-8 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:px-10">
          <h1 className="text-center text-3xl font-medium text-black">Create your account</h1>
          <p className="mx-auto mt-3 max-w-[330px] text-center text-sm leading-relaxed text-gray-600">
            Join thousands of investors building a secure financial future with SwipeNGrow.
          </p>

          <form onSubmit={handleSubmit} noValidate className="mt-8 flex flex-col gap-5">
            <Field label="Full Name" error={errors.name}>
              <input
                type="text"
                value={form.name}
                onChange={update("name")}
                placeholder="Your full name"
                autoComplete="name"
                className={inputClass(errors.name)}
              />
            </Field>

            <Field label="Email Address" error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="name@gmail.com"
                autoComplete="email"
                className={inputClass(errors.email)}
              />
            </Field>

            <Field label="Mobile Number" error={errors.mobile}>
              <input
                type="tel"
                inputMode="numeric"
                maxLength={10}
                value={form.mobile}
                onChange={update("mobile")}
                placeholder="10-digit mobile number"
                autoComplete="tel"
                className={inputClass(errors.mobile)}
              />
            </Field>

            <Field label="Password" error={errors.password}>
              <PasswordInput
                value={form.password}
                onChange={update("password")}
                error={errors.password}
                placeholder="Create a password"
                autoComplete="new-password"
              />
            </Field>

            <Field label="Re enter Password" error={errors.confirm}>
              <PasswordInput
                value={form.confirm}
                onChange={update("confirm")}
                error={errors.confirm}
                placeholder="Re enter your password"
                autoComplete="new-password"
              />
            </Field>

            {/* terms */}
            <div>
              <label className="flex items-start gap-3 text-sm leading-snug text-gray-600">
                <input
                  type="checkbox"
                  checked={form.agree}
                  onChange={update("agree")}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 accent-blue-600"
                />
                <span>
                  By creating an account, I agree to the{" "}
                  {/* change href="#" to your real Terms and Privacy pages when they exist */}
                  <a href="#" className="text-blue-700 hover:underline">
                    Terms of service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-700 hover:underline">
                    Privacy policy
                  </a>
                </span>
              </label>
              {errors.agree && <span className="mt-1.5 block text-xs text-red-600">{errors.agree}</span>}
            </div>

            {status.type === "success" && (
              <p
                role="status"
                className="rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700 ring-1 ring-green-200"
              >
                Your account has been created. Welcome to SwipeNGrow!
              </p>
            )}
            {status.type === "error" && (
              <p
                role="alert"
                className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700 ring-1 ring-red-200"
              >
                {status.message}
              </p>
            )}

            <button
              type="submit"
              disabled={status.type === "loading"}
              className="h-14 w-full rounded-xl bg-blue-600 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status.type === "loading" ? "Creating account..." : "Create Account"}
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-blue-700 hover:underline">
                Log in
              </Link>
            </p>
          </form>
        </section>

        {/* ----- right side (desktop only) ----- */}
        <div className="hidden flex-col gap-10 pl-6 pt-12 lg:flex" aria-hidden="true">
          <svg width="96" height="96" viewBox="0 0 24 24" fill="none" className="ml-[18%]">
            <defs>
              <linearGradient id="su-shield" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#60a5fa" />
                <stop offset="1" stopColor="#3b82f6" stopOpacity=".7" />
              </linearGradient>
            </defs>
            <path
              d="M12 2 3.4 5.6v6.1c0 4.9 3.4 8.6 8.6 10.3 5.2-1.7 8.6-5.4 8.6-10.3V5.6L12 2Z"
              fill="url(#su-shield)"
            />
            <path
              d="m7.8 12.3 3 3 5.4-5.8"
              stroke="#fff"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <Feature
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#f59e0b">
                <path d={ZAP} />
              </svg>
            }
            title="Fast & Easy"
            text="Invest, track & grow effortlessly"
          />

          <h2 className="text-5xl font-medium leading-[1.15] text-slate-300">
            Start Growing
            <span className="block">
              Your <span className="text-green-500">Wealth</span>
            </span>
            <span className="block">Today</span>
          </h2>
        </div>
      </main>
    </div>
  );
}