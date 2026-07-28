import React from "react";
import Sparkle from "./Sparkle";
// 1. Import the classy SVG icons from lucide-react
import { Crown, ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="about"
      className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 z-10 flex flex-col items-center text-center px-4 overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/20 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <div className="animate-scale-up max-w-4xl flex flex-col items-center transform transition-all duration-700">
        {/* Glassmorphic Badge with Shadcn Icons */}
        <div className="group inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] text-pink-200 text-sm font-bold tracking-widest uppercase hover:bg-white/10 transition-all duration-300 cursor-default hover:scale-105">
          <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" />
          Welcome to the Club
          <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" />
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-t from-fuchsia-100 to-white text-transparent bg-clip-text drop-shadow-2xl leading-tight">
          YOUR FAVORITE <br />
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-300 to-pink-400 drop-shadow-[0_0_20px_rgba(236,72,153,0.5)] bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
            DISCORD SERVER.
          </span>
          <Sparkle className="inline-block align-middle ml-2 text-pink-400 animate-spin-slow drop-shadow-md" />
        </h1>

        {/* Description with Shadcn Crown Icon */}
        <p className="mt-6 text-xl md:text-2xl text-fuchsia-100/80 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm flex items-center justify-center flex-wrap gap-2">
          <span>
            A cozy, coquette-infused corner of Discord. We chill, we game, we
            support each other. Main character energy mandatory.
          </span>
          <Crown className="w-7 h-7 text-yellow-400 drop-shadow-[0_0_8px_rgba(253,224,71,0.6)] group-hover:animate-bounce" />
        </p>

        {/* Call to Action with Shadcn Arrow Icon */}
        <div className="mt-12 relative group">
          {/* Background button glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-fuchsia-500 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>

          <a
            href="https://discord.gg/baddiecafeindia"
            className="relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-pink-500 to-fuchsia-600 hover:from-pink-400 hover:to-fuchsia-500 text-white font-black rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 uppercase tracking-wider text-xl shadow-xl border border-white/20"
          >
            Join The Gang
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
