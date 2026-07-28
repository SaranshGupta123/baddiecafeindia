import React from "react";
import { Heart, Gamepad2, Popcorn, Gift, Mic, Camera } from "lucide-react";

const serverActivities = [
  {
    // Replaced 🎀
    icon: (
      <Heart className="w-10 h-10 text-pink-400 drop-shadow-[0_0_10px_rgba(244,114,182,0.5)]" />
    ),
    name: "#chill-zone",
    desc: "Just vibe, listen to Lo-Fi, and share your daily aesthetics.",
  },
  {
    // Replaced 🎮
    icon: (
      <Gamepad2 className="w-10 h-10 text-indigo-400 drop-shadow-[0_0_10px_rgba(129,140,248,0.5)]" />
    ),
    name: "#game-nights",
    desc: "VC-driven sessions: Valorant, Among Us, Roblox & Minecraft.",
  },
  {
    // Replaced 🍿
    icon: (
      <Popcorn className="w-10 h-10 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
    ),
    name: "#movie-streams",
    desc: "Weekly movie watch parties, anime binges, & YT marathons.",
  },
  {
    // Replaced 🎁
    icon: (
      <Gift className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
    ),
    name: "#giveaways",
    desc: "Discord Nitro, game keys, and cute aesthetic merch drops.",
  },
  {
    // Replaced 🎤
    icon: (
      <Mic className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
    ),
    name: "#events",
    desc: "Karaoke nights, talent shows, and community art contests.",
  },
  {
    // Replaced 📸
    icon: (
      <Camera className="w-10 h-10 text-fuchsia-400 drop-shadow-[0_0_10px_rgba(232,121,249,0.5)]" />
    ),
    name: "#social-hub",
    desc: "Drop your Insta fits, TikTok clips, and YT links here.",
  },
];

const Channels = () => {
  return (
    <section
      id="channels"
      className="py-24 relative z-10 bg-indigo-950/30 border-y border-white/5 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white drop-shadow-md">
            What we <span className="text-pink-400">Do</span>
          </h2>
          <p className="text-fuchsia-200/70 mt-4 text-lg font-medium">
            Peek inside the server channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serverActivities.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-pink-500/40 hover:bg-white/10 transition-all duration-500 group hover:-translate-y-2 shadow-lg hover:shadow-[0_10px_40px_rgba(236,72,153,0.15)]"
            >
              <div className="mb-6 transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-white group-hover:text-pink-300 transition-colors mb-3 tracking-wide">
                {item.name}
              </h3>
              <p className="text-indigo-100/70 font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Channels;
