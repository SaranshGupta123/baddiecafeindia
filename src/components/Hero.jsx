import React from "react";
import Sparkle from "./Sparkle";
import { Sparkles, HeartPulse, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="about"
      className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 z-10 flex flex-col items-center text-center px-4 overflow-hidden"
    >
      {/* Ambient white glow specific to hero to make text pop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/80 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <div className="animate-scale-up max-w-4xl flex flex-col items-center transform transition-all duration-700">
        {/* Glassy Pill Badge - Light Mode version */}
        <div className="group flex items-center gap-2 mb-8 px-6 py-2.5 rounded-full bg-white/70 backdrop-blur-xl border border-pink-200 shadow-[0_8px_20px_0_rgba(244,114,182,0.15)] text-pink-600 text-sm font-bold tracking-widest uppercase hover:bg-white/90 transition-all duration-500 cursor-default hover:scale-105">
          <Sparkles className="w-4 h-4 text-pink-500 animate-pulse" />
          <span>Hey bestie, welcome in</span>
          <Sparkles className="w-4 h-4 text-pink-500 animate-pulse" />
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 text-pink-950 drop-shadow-sm leading-tight">
          YOUR NEW <br />
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-fuchsia-500 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
            INTERNET HOME.
          </span>
          <Sparkle className="inline-block align-middle ml-2 text-pink-500 animate-spin-slow" />
        </h1>

        {/* Description */}
        <p className="mt-4 text-xl md:text-2xl text-pink-800/80 max-w-2xl mx-auto font-medium leading-relaxed flex flex-col items-center justify-center gap-3">
          <span>
            A cozy, coquette-infused corner of Discord. We’re just a bunch of
            girlies, gamers, and vibe-curators.
          </span>
          <span className="flex items-center gap-2 text-pink-600 font-bold text-lg bg-white/50 px-4 py-1.5 rounded-full mt-2 border border-pink-100 shadow-sm">
            <HeartPulse className="w-5 h-5 animate-pulse text-rose-500" /> Main
            character energy is highly encouraged.
          </span>
        </p>

        {/* Glossy CTA Button */}
        <div className="mt-12 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-300 animate-pulse"></div>

          <a
            href="https://discord.gg/baddiecafeindia"
            className="relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-400 hover:to-rose-300 text-white font-black rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 uppercase tracking-wider text-xl shadow-[0_10px_30px_rgba(244,114,182,0.4)] border border-pink-200/50"
          >
            Claim Your Spot
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
