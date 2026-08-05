import React from "react";
import {
  Headphones,
  Tv,
  PartyPopper,
  Gamepad2,
  Camera,
  Star,
} from "lucide-react";

const serverActivities = [
  {
    icon: <Headphones className="w-10 h-10 text-pink-500" />,
    name: "The Lounge",
    desc: "Where we drop our Pinterest boards, listen to lofi, and literally just exist together. No stress allowed.",
  },
  {
    icon: <Gamepad2 className="w-10 h-10 text-rose-500" />,
    name: "Game Nights",
    desc: "Screaming in Valorant, getting betrayed in Among Us, and building cute stuff in Minecraft.",
  },
  {
    icon: <Tv className="w-10 h-10 text-fuchsia-500" />,
    name: "Watch Parties",
    desc: "Grabbing our snacks and binging movies, anime, or unhinged YouTube video essays all night long.",
  },
  {
    icon: <Star className="w-10 h-10 text-pink-400" />,
    name: "Spoils & Giveaways",
    desc: "Because you deserve nice things. We randomly drop Nitro, game keys, and aesthetic merch.",
  },
  {
    icon: <PartyPopper className="w-10 h-10 text-rose-400" />,
    name: "Messy Events",
    desc: "Chaotic karaoke nights, talent shows where we just laugh, and community art contests.",
  },
  {
    icon: <Camera className="w-10 h-10 text-fuchsia-400" />,
    name: "The Social Hub",
    desc: "Spam us with your TikToks, Instagram fit checks, and food pics. Hype each other up!",
  },
];

const Channels = () => {
  return (
    <section
      id="channels"
      className="py-24 relative z-10 bg-white/40 border-y border-pink-200 backdrop-blur-2xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-pink-950">
            What goes on{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">
              Inside
            </span>
          </h2>
          <p className="text-pink-800/70 mt-4 text-lg font-medium">
            Sneak a peek at our favorite channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serverActivities.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] border border-pink-100 hover:border-pink-300 hover:bg-white transition-all duration-500 group hover:-translate-y-2 shadow-[0_8px_30px_rgb(255,192,203,0.3)] hover:shadow-[0_15px_40px_rgb(244,114,182,0.4)]"
            >
              <div className="mb-6 transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 bg-pink-50 w-16 h-16 flex items-center justify-center rounded-2xl shadow-inner border border-pink-100">
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-pink-950 group-hover:text-pink-600 transition-colors mb-3 tracking-wide">
                {item.name}
              </h3>
              <p className="text-pink-800/80 font-medium leading-relaxed">
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
