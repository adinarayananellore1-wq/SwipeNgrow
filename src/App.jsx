// src/App.jsx
import { Component, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Whychoose from "./components/Whychoose";
import HowItWorks from "./components/HowItWorks";
import Investments from "./components/Investments";
import History from "./components/History";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Plans from "./pages/Plans";
import Calculator from "./pages/Calculator";
import Automobile from "./pages/Automobile";
import RealEstate from "./pages/RealEstate";
import ITTechnology from "./pages/ITTechnology";
import EV from "./pages/EV";
import Team from "./pages/Team";
import FAQ from "./pages/Faq";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";

const pageBg = {
  background:
    "radial-gradient(ellipse 55% 50% at 22% 22%, #b9f1d0 0%, rgba(185,241,208,0) 70%), radial-gradient(ellipse 45% 45% at 95% 85%, #c9d3f7 0%, rgba(201,211,247,0) 70%), #ffffff",
};

/* If any page crashes, show the error instead of a white screen */
class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error("Page crashed:", error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="mx-auto max-w-2xl px-6 py-24 text-center font-sans">
          <h1 className="text-2xl font-semibold text-gray-900">Something went wrong on this page</h1>
          <p className="mt-3 text-gray-600">Please send this message to your developer:</p>
          <pre className="mt-4 overflow-auto rounded-xl bg-red-50 p-4 text-left text-sm text-red-700">
            {String(this.state.error?.message || this.state.error)}
          </pre>
          <a
            href="/"
            className="mt-6 inline-block rounded-full bg-green-600 px-8 py-3 font-semibold text-white hover:bg-green-700"
          >
            Back to Home
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans" style={pageBg}>
      <div className="absolute inset-x-0 top-0 z-20 pt-6">
        <Navbar />
      </div>
      <Hero />
      <Whychoose />
      <HowItWorks />
      <Investments />
      <History />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default function App() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollToTop />
      {/* key={pathname} resets the catcher every time you open another page */}
      <ErrorBoundary key={pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans pageBg={pageBg} />} />
          <Route path="/calculator" element={<Calculator pageBg={pageBg} />} />
          <Route path="/automobile" element={<Automobile pageBg={pageBg} />} />
          <Route path="/real-estate" element={<RealEstate pageBg={pageBg} />} />
          <Route path="/it-technology" element={<ITTechnology pageBg={pageBg} />} />
          <Route path="/ev" element={<EV pageBg={pageBg} />} />
          <Route path="/team" element={<Team pageBg={pageBg} />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}