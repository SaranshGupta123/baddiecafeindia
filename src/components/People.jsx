import React from "react";

const People = () => {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      <div className="text-center mb-16 animate-scale-up">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-300 drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]">
          OUR PEOPLE.
        </h1>
        <p className="text-xl text-fuchsia-200/80 max-w-2xl mx-auto font-medium">
          The amazing main characters who make Baddie Cafe India feel like home.
        </p>
      </div>

      <div className="bg-indigo-900/40 backdrop-blur-md p-8 rounded-3xl border border-pink-500/20 text-center max-w-3xl mx-auto space-y-6">
        <div className="text-5xl">💖</div>
        <h2 className="text-3xl font-black text-white">The Baddie Gang</h2>
        <p className="text-indigo-100/80 text-lg leading-relaxed">
          We are a rapidly growing family of over 400+ trendsetters, gamers,
          artists, and creators from all across India. Whether you're hanging
          out in our active voice channels or sharing your creative edits,
          everyone brings their own unique flavor to the server.
        </p>
        <div className="pt-4">
          <a
            href="https://discord.gg/baddiecafeindia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-pink-400 to-fuchsia-500 text-indigo-950 font-black rounded-full hover:scale-105 transition-all uppercase tracking-wide shadow-[0_0_15px_rgba(236,72,153,0.5)]"
          >
            Come Say Hi in VC
          </a>
        </div>
      </div>
    </div>
  );
};

export default People;
