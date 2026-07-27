import React from "react";

const About = () => {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      {/* Page Header */}
      <div className="text-center mb-16 animate-scale-up">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-300 drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]">
          THE FULL LORE.
        </h1>
        <p className="text-xl text-fuchsia-200/80 max-w-2xl mx-auto font-medium">
          Get to know the story behind India's most aesthetic Discord sanctuary.
        </p>
      </div>

      {/* Section 1: Introduction */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <div className="order-2 lg:order-1 space-y-6">
          <h2 className="text-3xl font-black uppercase tracking-wide text-white">
            What is <span className="text-pink-400">Baddie Cafe India?</span>
          </h2>
          <p className="text-indigo-100/80 text-lg leading-relaxed">
            Born out of the need for a non-toxic, purely aesthetic space for
            Indian netizens, Baddie Cafe India is more than just a Discord
            server—it's a digital lifestyle. We grew tired of the usual chaotic,
            unmoderated servers and decided to create a VIP lounge for the main
            characters.
          </p>
          <p className="text-indigo-100/80 text-lg leading-relaxed">
            Imagine walking into a neon-lit, velvet-roped cafe where everyone
            passes the vibe check. That’s what our server feels like. We curate
            an environment where self-expression, gaming, and chilling coexist
            perfectly.
          </p>
        </div>
        <div className="order-1 lg:order-2">
          <img
            src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1000&auto=format&fit=crop"
            alt="Neon aesthetic"
            className="rounded-3xl shadow-[0_0_30px_rgba(236,72,153,0.3)] border border-pink-500/30 w-full h-80 object-cover"
          />
        </div>
      </div>

      {/* Section 2: The Move & Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <img
            src="https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?q=80&w=1000&auto=format&fit=crop"
            alt="Gaming setup"
            className="rounded-3xl shadow-[0_0_30px_rgba(217,70,239,0.3)] border border-fuchsia-500/30 w-full h-80 object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-black uppercase tracking-wide text-white">
            The <span className="text-fuchsia-400">Move</span> & What We Do
          </h2>
          <p className="text-indigo-100/80 text-lg leading-relaxed">
            Our move is simple:{" "}
            <strong>Keep it cute, keep it fun, keep it drama-free.</strong>
          </p>
          <ul className="space-y-4 mt-4">
            <li className="flex items-start gap-3 bg-indigo-900/40 p-4 rounded-xl border border-pink-500/10">
              <span className="text-2xl">🎮</span>
              <div>
                <strong className="text-pink-300 block">Gaming Grinds</strong>
                <span className="text-indigo-100/70 text-sm">
                  Late-night Valorant queues, Minecraft building sessions, and
                  Roblox chaos.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3 bg-indigo-900/40 p-4 rounded-xl border border-pink-500/10">
              <span className="text-2xl">🍿</span>
              <div>
                <strong className="text-pink-300 block">Watch Parties</strong>
                <span className="text-indigo-100/70 text-sm">
                  Weekly streams ranging from the latest anime episodes to
                  horror movie nights.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3 bg-indigo-900/40 p-4 rounded-xl border border-pink-500/10">
              <span className="text-2xl">🎧</span>
              <div>
                <strong className="text-pink-300 block">
                  24/7 Vibe Channels
                </strong>
                <span className="text-indigo-100/70 text-sm">
                  Dedicated Lo-Fi bots, study groups, and sleep VC rooms.
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
