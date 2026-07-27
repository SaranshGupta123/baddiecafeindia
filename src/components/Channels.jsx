import React from "react";

const serverActivities = [
  {
    icon: "🎀",
    name: "#chill-zone",
    desc: "Just vibe, listen to Lo-Fi, and share your daily aesthetics.",
  },
  {
    icon: "🎮",
    name: "#game-nights",
    desc: "VC-driven sessions: Valorant, Among Us, Roblox & Minecraft.",
  },
  {
    icon: "🍿",
    name: "#movie-streams",
    desc: "Weekly movie watch parties, anime binges, & YT marathons.",
  },
  {
    icon: "🎁",
    name: "#giveaways",
    desc: "Discord Nitro, game keys, and cute aesthetic merch drops.",
  },
  {
    icon: "🎤",
    name: "#events",
    desc: "Karaoke nights, talent shows, and community art contests.",
  },
  {
    icon: "📸",
    name: "#social-hub",
    desc: "Drop your Insta fits, TikTok clips, and YT links here.",
  },
];

const Channels = () => {
  return (
    <section
      id="channels"
      className="py-24 relative z-10 bg-indigo-950/40 border-y border-pink-500/20 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white drop-shadow-md">
            What we <span className="text-pink-400">Do</span>
          </h2>
          <p className="text-fuchsia-200/70 mt-4 text-lg">
            Peek inside the server channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serverActivities.map((item, index) => (
            <div
              key={index}
              className="bg-indigo-900/40 backdrop-blur-md p-6 rounded-3xl border border-pink-500/20 hover:border-pink-400/60 hover:bg-indigo-800/50 transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-white group-hover:text-pink-300 transition-colors mb-2 tracking-wide">
                {item.name}
              </h3>
              <p className="text-indigo-100/70 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Channels;
