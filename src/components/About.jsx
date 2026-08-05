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
        {/* Light theme pill badge */}
        <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full bg-white/70 border border-pink-200 text-pink-600 text-xs font-bold tracking-widest uppercase backdrop-blur-xl shadow-sm">
          <Sparkles className="w-4 h-4 text-pink-500" /> Server History
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-fuchsia-500 drop-shadow-sm">
          THE FULL LORE.
        </h1>
        <p className="text-xl text-pink-800/80 max-w-2xl mx-auto font-medium">
          Get to know the story behind India's most aesthetic Discord sanctuary.
        </p>
      </div>

      {/* Section 1: Introduction & Origins */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <div className="order-2 lg:order-1 space-y-6">
          <h2 className="text-3xl font-black uppercase tracking-wide text-pink-950">
            What is <span className="text-pink-500">Baddie Cafe India?</span>
          </h2>
          <p className="text-pink-800/90 text-lg leading-relaxed font-medium">
            Born out of the need for a non-toxic, purely aesthetic space for
            Indian netizens, Baddie Cafe India is more than just a Discord
            server—it's a digital lifestyle. Originally envisioned as a cozy,
            shared community corner by Saransh and Diva, it quickly evolved into
            a VIP lounge for the internet's main characters.
          </p>
          <p className="text-pink-800/90 text-lg leading-relaxed font-medium">
            Imagine walking into a neon-lit, velvet-roped cafe where everyone
            passes the vibe check. We grew tired of the usual chaotic,
            unmoderated servers and decided to curate an environment where
            self-expression, late-night gaming, and chilling coexist perfectly.
          </p>
        </div>
        <div className="order-1 lg:order-2 relative group">
          {/* Soft pink ambient glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
          <img
            src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1000&auto=format&fit=crop"
            alt="Neon aesthetic"
            loading="lazy"
            decoding="async"
            className="relative rounded-3xl shadow-[0_10px_30px_rgba(244,114,182,0.3)] border border-white w-full h-80 object-cover hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </div>

      {/* NEW Section: By the Numbers (Server Data) */}
      <div className="mb-24">
        <h2 className="text-center text-3xl font-black uppercase tracking-wide text-pink-950 mb-10">
          By The <span className="text-pink-500">Numbers</span>
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
              className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl border border-pink-100 text-center hover:border-pink-300 hover:bg-white hover:-translate-y-2 transition-all duration-300 shadow-[0_8px_30px_rgb(255,192,203,0.3)] hover:shadow-[0_15px_40px_rgba(244,114,182,0.4)]"
            >
              <div className="inline-flex p-3 rounded-2xl bg-pink-50 border border-pink-100 text-pink-500 mb-4 shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-3xl font-black text-pink-950 mb-1">
                {item.stat}
              </h3>
              <p className="text-xs font-bold text-pink-600 uppercase tracking-wider">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: The Move & Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <div className="relative group">
          {/* Soft fuchsia ambient glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-400 to-pink-400 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
          <img
            src="https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?q=80&w=1000&auto=format&fit=crop"
            alt="Gaming setup"
            loading="lazy"
            decoding="async"
            className="relative rounded-3xl shadow-[0_10px_30px_rgba(232,121,249,0.3)] border border-white w-full h-96 object-cover hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-black uppercase tracking-wide text-pink-950">
            The <span className="text-fuchsia-500">Move</span> & What We Do
          </h2>
          <p className="text-pink-800/90 text-lg leading-relaxed font-medium">
            Our move is simple:{" "}
            <strong className="text-pink-600">
              Keep it cute, keep it fun, keep it drama-free.
            </strong>
          </p>

          <ul className="space-y-4 mt-4">
            {/* List Item 1 */}
            <li className="group flex items-start gap-4 bg-white/70 backdrop-blur-xl p-5 rounded-2xl border border-pink-100 hover:border-pink-300 hover:bg-white transition-all duration-300 shadow-[0_5px_15px_rgba(244,114,182,0.15)] hover:shadow-[0_10px_25px_rgba(244,114,182,0.25)]">
              <div className="p-2.5 rounded-xl bg-pink-50 border border-pink-100 group-hover:bg-pink-100 transition-colors shadow-inner">
                <Gamepad2 className="w-7 h-7 text-pink-500 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <strong className="text-pink-950 block text-lg mb-1 group-hover:text-pink-600 transition-colors">
                  Gaming Grinds
                </strong>
                <span className="text-pink-800/80 font-medium text-sm leading-relaxed block">
                  Late-night Valorant queues, GTA 5 RP, Genshin Impact team
                  building, and Minecraft chaos with community regulars like
                  Louis.
                </span>
              </div>
            </li>

            {/* List Item 2 */}
            <li className="group flex items-start gap-4 bg-white/70 backdrop-blur-xl p-5 rounded-2xl border border-pink-100 hover:border-fuchsia-300 hover:bg-white transition-all duration-300 shadow-[0_5px_15px_rgba(244,114,182,0.15)] hover:shadow-[0_10px_25px_rgba(232,121,249,0.25)]">
              <div className="p-2.5 rounded-xl bg-fuchsia-50 border border-fuchsia-100 group-hover:bg-fuchsia-100 transition-colors shadow-inner">
                <Popcorn className="w-7 h-7 text-fuchsia-500 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <strong className="text-pink-950 block text-lg mb-1 group-hover:text-fuchsia-600 transition-colors">
                  Watch Parties & Streams
                </strong>
                <span className="text-pink-800/80 font-medium text-sm leading-relaxed block">
                  Weekly streams ranging from anime binges to horror movie
                  nights, plus community crossover events with Total Dheet.
                </span>
              </div>
            </li>

            {/* List Item 3 */}
            <li className="group flex items-start gap-4 bg-white/70 backdrop-blur-xl p-5 rounded-2xl border border-pink-100 hover:border-rose-300 hover:bg-white transition-all duration-300 shadow-[0_5px_15px_rgba(244,114,182,0.15)] hover:shadow-[0_10px_25px_rgba(251,113,133,0.25)]">
              <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-100 group-hover:bg-rose-100 transition-colors shadow-inner">
                <Headphones className="w-7 h-7 text-rose-500 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <strong className="text-pink-950 block text-lg mb-1 group-hover:text-rose-600 transition-colors">
                  24/7 Vibe Channels
                </strong>
                <span className="text-pink-800/80 font-medium text-sm leading-relaxed block">
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
          <h2 className="text-3xl font-black uppercase tracking-wide text-pink-950">
            Our <span className="text-pink-500">Core Values</span>
          </h2>
          <p className="text-pink-800/70 mt-3 font-medium text-lg">
            What it takes to pass the vibe check.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Value 1 */}
          <div className="bg-gradient-to-b from-white/90 to-white/40 backdrop-blur-xl p-8 rounded-[2rem] border border-pink-200 shadow-[0_10px_30px_rgb(255,192,203,0.4)] text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="mx-auto w-16 h-16 bg-pink-50 rounded-2xl border border-pink-100 flex items-center justify-center mb-5 shadow-inner">
              <ShieldCheck className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold text-pink-950 mb-3 uppercase tracking-wide">
              Zero Toxicity
            </h3>
            <p className="text-pink-800/80 text-sm leading-relaxed font-medium">
              We leave the drama at the door. This is a safe space for everyone
              to unwind, play, and connect without harassment.
            </p>
          </div>

          {/* Value 2 */}
          <div className="bg-gradient-to-b from-white/90 to-white/40 backdrop-blur-xl p-8 rounded-[2rem] border border-pink-200 shadow-[0_10px_30px_rgb(255,192,203,0.4)] text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="mx-auto w-16 h-16 bg-fuchsia-50 rounded-2xl border border-fuchsia-100 flex items-center justify-center mb-5 shadow-inner">
              <Sparkles className="w-8 h-8 text-fuchsia-500" />
            </div>
            <h3 className="text-xl font-bold text-pink-950 mb-3 uppercase tracking-wide">
              Aesthetic First
            </h3>
            <p className="text-pink-800/80 text-sm leading-relaxed font-medium">
              From beautifully formatted channels to custom role icons, we
              believe in keeping the visual experience strictly top-tier.
            </p>
          </div>

          {/* Value 3 */}
          <div className="bg-gradient-to-b from-white/90 to-white/40 backdrop-blur-xl p-8 rounded-[2rem] border border-pink-200 shadow-[0_10px_30px_rgb(255,192,203,0.4)] text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="mx-auto w-16 h-16 bg-rose-50 rounded-2xl border border-rose-100 flex items-center justify-center mb-5 shadow-inner">
              <HeartHandshake className="w-8 h-8 text-rose-500" />
            </div>
            <h3 className="text-xl font-bold text-pink-950 mb-3 uppercase tracking-wide">
              Community Support
            </h3>
            <p className="text-pink-800/80 text-sm leading-relaxed font-medium">
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
