import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Channels from "./components/Channels";
import Footer from "./components/Footer";
import About from "./components/About";
import People from "./components/People";
import Staff from "./components/Staff";
import StaffProfile from "./components/StaffProfile"; // 👈 Import the profile page
import Rules from "./components/Rules";
import FAQ from "./components/FAQ";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Channels />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-fuchsia-950 to-pink-950 text-zinc-100 font-sans selection:bg-pink-400 selection:text-indigo-950 overflow-x-hidden flex flex-col">
        <Background />
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/people" element={<People />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/staff/:name" element={<StaffProfile />} />{" "}
            {/* 👈 Dynamic profile route */}
            <Route path="/rules" element={<Rules />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
