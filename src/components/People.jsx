import React from "react";
import {
  Heart,
  Gamepad2,
  Palette,
  Mic,
  Users,
  Sparkles,
  Coffee,
} from "lucide-react";

const People = () => {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      {/* Page Header */}
      <div className="text-center mb-16 animate-scale-up">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-300 drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]">
          OUR PEOPLE.
        </h1>
        <p className="text-xl text-fuchsia-200/80 max-w-2xl mx-auto font-medium">
          The amazing main characters who make Baddie Cafe India feel like home.
        </p>
      </div>

      {/* Main Intro Card */}
      <div className="bg-indigo-950/50 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 text-center max-w-4xl mx-auto mb-20 shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-fuchsia-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10 space-y-6">
          <div className="inline-flex p-4 rounded-full bg-pink-500/20 mb-2">
            <Heart className="w-10 h-10 text-pink-400 animate-pulse fill-pink-400/50" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-wide">
            The Baddie Gang
          </h2>
          <p className="text-indigo-100/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            We are a rapidly growing family of over 400+ trendsetters, gamers,
            artists, and creators from all across India. We aren't just random
            avatars on a screen—we are a tight-knit network of genuine friends
            who share the same elite aesthetics and chaotic energy.
          </p>
        </div>
      </div>

      {/* The Personas / "Types of People" Grid */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black uppercase tracking-wide text-white">
            Who You'll <span className="text-fuchsia-400">Meet</span>
          </h2>
          <p className="text-indigo-200/70 mt-3 text-lg">
            The different vibes that coexist in our ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Persona 1: The Gamers */}
          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:border-pink-500/30 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2">
            <div className="p-3 rounded-2xl bg-indigo-500/20 inline-block mb-6 group-hover:scale-110 transition-transform">
              <Gamepad2 className="w-8 h-8 text-indigo-400" />
            </div>
            <h3 className="text-xl font-black text-white mb-3 tracking-wide uppercase">
              The Grinders
            </h3>
            <p className="text-indigo-100/70 leading-relaxed font-medium">
              From late-night Valorant squads and GTA 5 RP locals to Genshin
              Impact theorycrafters and Minecraft architects. If there is a
              lobby, they are in it.
            </p>
          </div>

          {/* Persona 2: The Creatives */}
          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:border-fuchsia-500/30 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2">
            <div className="p-3 rounded-2xl bg-fuchsia-500/20 inline-block mb-6 group-hover:scale-110 transition-transform">
              <Palette className="w-8 h-8 text-fuchsia-400" />
            </div>
            <h3 className="text-xl font-black text-white mb-3 tracking-wide uppercase">
              The Visionaries
            </h3>
            <p className="text-indigo-100/70 leading-relaxed font-medium">
              Our resident video editors, high-res graphic collage makers, and
              audio designers. The ones dropping fire edits and custom
              aesthetics in the media channels.
            </p>
          </div>

          {/* Persona 3: The Socialites */}
          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:border-pink-400/30 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2">
            <div className="p-3 rounded-2xl bg-pink-500/20 inline-block mb-6 group-hover:scale-110 transition-transform">
              <Mic className="w-8 h-8 text-pink-400" />
            </div>
            <h3 className="text-xl font-black text-white mb-3 tracking-wide uppercase">
              The VC Yappers
            </h3>
            <p className="text-indigo-100/70 leading-relaxed font-medium">
              The heart of the server. Whether tuning into Total Dheet streams
              with Aalloooo, catching up with regulars like Louis, or just
              chilling in the 24/7 Lo-Fi lounge.
            </p>
          </div>
        </div>
      </div>

      {/* Community Vibe Check Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-20 bg-indigo-900/30 backdrop-blur-sm rounded-3xl border border-pink-500/20 p-8 md:p-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-black uppercase tracking-wide text-white">
            The <span className="text-pink-400">Vibe</span> Check
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-indigo-100/90 text-lg font-medium">
              <Sparkles className="w-6 h-6 text-fuchsia-400 flex-shrink-0" />
              <span>We value quality connections over pure member count.</span>
            </li>
            <li className="flex items-center gap-3 text-indigo-100/90 text-lg font-medium">
              <Coffee className="w-6 h-6 text-fuchsia-400 flex-shrink-0" />
              <span>Co-working and study sessions are highly encouraged.</span>
            </li>
            <li className="flex items-center gap-3 text-indigo-100/90 text-lg font-medium">
              <Users className="w-6 h-6 text-fuchsia-400 flex-shrink-0" />
              <span>
                Zero tolerance for toxicity; full support for main character
                energy.
              </span>
            </li>
          </ul>
        </div>

        <div className="flex justify-center lg:justify-end">
          <a
            href="https://discord.gg/baddiecafeindia"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-pink-500 to-fuchsia-600 hover:from-pink-400 hover:to-fuchsia-500 text-white font-black rounded-full transition-all duration-300 hover:scale-105 hover:-translate-y-1 uppercase tracking-wider text-xl shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] border border-white/20"
          >
            Come Say Hi in VC
            <Mic className="w-6 h-6 group-hover:animate-pulse" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default People;
