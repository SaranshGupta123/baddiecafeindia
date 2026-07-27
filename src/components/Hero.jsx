import React from "react";
import Sparkle from "./Sparkle";

const Hero = () => {
  return (
    <section
      id="about"
      className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 z-10 flex flex-col items-center text-center px-4"
    >
      <div className="animate-scale-up max-w-4xl">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-pink-500/20 border border-pink-400/30 text-pink-200 text-sm font-bold tracking-widest uppercase backdrop-blur-sm">
          🎀 Welcome to the Club 🎀
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-t from-fuchsia-100 to-white text-transparent bg-clip-text drop-shadow-lg">
          UR FAVORITE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-300 drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]">
            DISCORD SERVER.
          </span>
          <Sparkle className="inline-block align-middle ml-2 text-pink-400 animate-spin-slow" />
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-fuchsia-100/80 max-w-2xl mx-auto font-medium">
          A cozy, coquette-infused corner of Discord. We chill, we game, we
          support each other. Main character energy mandatory. 💅
        </p>
        <div className="mt-12">
          <a
            href="https://discord.gg/baddiecafeindia"
            className="inline-block px-10 py-5 bg-gradient-to-r from-pink-400 to-fuchsia-500 hover:from-pink-300 hover:to-fuchsia-400 text-indigo-950 font-black rounded-full transition-all hover:scale-110 hover:-translate-y-1 uppercase tracking-wider text-xl animate-glow"
          >
            Join The Gang
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
