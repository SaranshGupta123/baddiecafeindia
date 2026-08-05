import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Channels from "./components/Channels";
import SupportSection from "./components/SupportSection";
import Footer from "./components/Footer";

const About = lazy(() => import("./components/About"));
const People = lazy(() => import("./components/People"));
const Staff = lazy(() => import("./components/Staff"));
const StaffProfile = lazy(() => import("./components/StaffProfile"));
const Rules = lazy(() => import("./components/Rules"));
const FAQ = lazy(() => import("./components/FAQ"));
const AboutDiva = lazy(() => import("./components/AboutDiva"));
const Minecraft = lazy(() => import("./components/Minecraft"));
const ServerCalendar = lazy(() => import("./components/ServerCalendar")); // 👈 Imported new calendar component

const HomePage = () => {
  return (
    <>
      <Hero />
      <Channels />
      <SupportSection />
    </>
  );
};

const App = () => {
  return (
    <Router>
      {/* Updated wrapper background and text color to match the light pink coquette aesthetic */}
      <div className="min-h-screen text-pink-950 font-sans selection:bg-pink-300 selection:text-pink-950 overflow-x-hidden flex flex-col relative">
        <Background />
        <Navbar />

        <div className="flex-grow z-10">
          <Suspense
            fallback={
              <div className="min-h-[60vh] flex items-center justify-center text-pink-500 font-bold tracking-widest uppercase">
                Loading Vibe... ✨
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/minecraft" element={<Minecraft />} />
              <Route path="/people" element={<People />} />
              <Route path="/staff" element={<Staff />} />
              <Route path="/staff/:name" element={<StaffProfile />} />
              <Route path="/rules" element={<Rules />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/about-diva" element={<AboutDiva />} />
              <Route path="/calendar" element={<ServerCalendar />} />{" "}
              {/* 👈 Added calendar route */}
            </Routes>
          </Suspense>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
