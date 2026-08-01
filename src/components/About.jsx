import React from "react";
import {
  Gamepad2,
  Popcorn,
  Headphones,
  Users,
  Calendar,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

const About = () => {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      {/* Page Header */}
      <div className="text-center mb-16 animate-scale-up">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-pink-300 text-xs font-bold tracking-widest uppercase backdrop-blur-sm">
          <Sparkles className="w-4 h-4" /> Server History
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-300 drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]">
          THE FULL LORE.
        </h1>
        <p className="text-xl text-fuchsia-200/80 max-w-2xl mx-auto font-medium">
          Get to know the story behind India's most aesthetic Discord sanctuary.
        </p>
      </div>

      {/* Section 1: Introduction & Origins */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <div className="order-2 lg:order-1 space-y-6">
          <h2 className="text-3xl font-black uppercase tracking-wide text-white">
            What is <span className="text-pink-400">Baddie Cafe India?</span>
          </h2>
          <p className="text-indigo-100/80 text-lg leading-relaxed">
            Born out of the need for a non-toxic, purely aesthetic space for
            Indian netizens, Baddie Cafe India is more than just a Discord
            server—it's a digital lifestyle. Originally envisioned as a cozy,
            shared community corner by Saransh and Diva, it quickly evolved
            into a VIP lounge for the internet's main characters.
          </p>
          <p className="text-indigo-100/80 text-lg leading-relaxed">
            Imagine walking into a neon-lit, velvet-roped cafe where everyone
            passes the vibe check. We grew tired of the usual chaotic,
            unmoderated servers and decided to curate an environment where
            self-expression, late-night gaming, and chilling coexist perfectly.
          </p>
        </div>
        <div className="order-1 lg:order-2 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          <img
            src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1000&auto=format&fit=crop"
            alt="Neon aesthetic"
            className="relative rounded-3xl shadow-[0_0_30px_rgba(236,72,153,0.3)] border border-pink-500/30 w-full h-80 object-cover hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </div>

      {/* NEW Section: By the Numbers (Server Data) */}
      <div className="mb-24">
        <h2 className="text-center text-3xl font-black uppercase tracking-wide text-white mb-10">
          By The <span className="text-pink-400">Numbers</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <Users />, stat: "400+", label: "Active Members" },
            {
              icon: <Calendar />,
              stat: "24/7",
              label: "Voice Channel Activity",
            },
            { icon: <MessageCircle />, stat: "10k+", label: "Weekly Messages" },
            { icon: <Sparkles />, stat: "100%", label: "Aesthetic Vibes" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-indigo-950/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center hover:border-pink-400/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex p-3 rounded-full bg-pink-500/20 text-pink-300 mb-4">
                {item.icon}
              </div>
              <h3 className="text-3xl font-black text-white mb-1">
                {item.stat}
              </h3>
              <p className="text-sm font-bold text-indigo-200/60 uppercase tracking-wider">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: The Move & Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-indigo-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          <img
            src="https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?q=80&w=1000&auto=format&fit=crop"
            alt="Gaming setup"
            className="relative rounded-3xl shadow-[0_0_30px_rgba(217,70,239,0.3)] border border-fuchsia-500/30 w-full h-96 object-cover hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-black uppercase tracking-wide text-white">
            The <span className="text-fuchsia-400">Move</span> & What We Do
          </h2>
          <p className="text-indigo-100/80 text-lg leading-relaxed">
            Our move is simple:{" "}
            <strong className="text-pink-300">
              Keep it cute, keep it fun, keep it drama-free.
            </strong>
          </p>

          <ul className="space-y-4 mt-4">
            <li className="group flex items-start gap-4 bg-indigo-950/40 backdrop-blur-md p-5 rounded-2xl border border-white/5 hover:border-pink-500/30 hover:bg-white/5 transition-all duration-300 shadow-lg">
              <div className="p-2 rounded-xl bg-pink-500/10 group-hover:bg-pink-500/20 transition-colors">
                <Gamepad2 className="w-8 h-8 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <strong className="text-pink-300 block text-lg mb-1">
                  Gaming Grinds
                </strong>
                <span className="text-indigo-100/70 text-sm leading-relaxed block">
                  Late-night Valorant queues, GTA 5 RP, Genshin Impact team
                  building, and Minecraft chaos with community regulars like
                  Louis.
                </span>
              </div>
            </li>

            <li className="group flex items-start gap-4 bg-indigo-950/40 backdrop-blur-md p-5 rounded-2xl border border-white/5 hover:border-fuchsia-500/30 hover:bg-white/5 transition-all duration-300 shadow-lg">
              <div className="p-2 rounded-xl bg-fuchsia-500/10 group-hover:bg-fuchsia-500/20 transition-colors">
                <Popcorn className="w-8 h-8 text-fuchsia-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <strong className="text-fuchsia-300 block text-lg mb-1">
                  Watch Parties & Streams
                </strong>
                <span className="text-indigo-100/70 text-sm leading-relaxed block">
                  Weekly streams ranging from anime binges to horror movie
                  nights, plus community crossover events with Total Dheet.
                </span>
              </div>
            </li>

            <li className="group flex items-start gap-4 bg-indigo-950/40 backdrop-blur-md p-5 rounded-2xl border border-white/5 hover:border-indigo-400/30 hover:bg-white/5 transition-all duration-300 shadow-lg">
              <div className="p-2 rounded-xl bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors">
                <Headphones className="w-8 h-8 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <strong className="text-indigo-300 block text-lg mb-1">
                  24/7 Vibe Channels
                </strong>
                <span className="text-indigo-100/70 text-sm leading-relaxed block">
                  Dedicated Lo-Fi bots, study groups, coding help, and sleep VC
                  rooms.
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* NEW Section: Core Values */}
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black uppercase tracking-wide text-white">
            Our <span className="text-pink-400">Core Values</span>
          </h2>
          <p className="text-indigo-100/70 mt-3">
            What it takes to pass the vibe check.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-b from-indigo-900/50 to-transparent p-8 rounded-3xl border-t border-pink-500/30 text-center">
            <ShieldCheck className="w-12 h-12 text-pink-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
              Zero Toxicity
            </h3>
            <p className="text-indigo-100/70 text-sm leading-relaxed">
              We leave the drama at the door. This is a safe space for everyone
              to unwind, play, and connect without harassment.
            </p>
          </div>
          <div className="bg-gradient-to-b from-indigo-900/50 to-transparent p-8 rounded-3xl border-t border-fuchsia-500/30 text-center">
            <Sparkles className="w-12 h-12 text-fuchsia-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
              Aesthetic First
            </h3>
            <p className="text-indigo-100/70 text-sm leading-relaxed">
              From beautifully formatted channels to custom role icons, we
              believe in keeping the visual experience strictly top-tier.
            </p>
          </div>
          <div className="bg-gradient-to-b from-indigo-900/50 to-transparent p-8 rounded-3xl border-t border-indigo-400/30 text-center">
            <HeartHandshake className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
              Community Support
            </h3>
            <p className="text-indigo-100/70 text-sm leading-relaxed">
              Whether you need teammates for a ranked push or just someone to
              listen, the Baddies always have your back.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
