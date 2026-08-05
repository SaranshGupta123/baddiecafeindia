import React from "react";
import {
  Gamepad2,
  Server,
  ArrowRight,
  ShieldCheck,
  Pickaxe,
} from "lucide-react";

const Minecraft = () => {
  // Placeholder images - Replace these with your actual local images (e.g., "/mc-1.jpg")
  const galleryImages = [
    "https://images.unsplash.com/photo-1607513746994-51f730a44832?q=80&w=2000&auto=format&fit=crop", // Replace with your image
    "https://images.unsplash.com/photo-1628277613967-6abca504d0ac?q=80&w=2000&auto=format&fit=crop", // Replace with your image
    "https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?q=80&w=2000&auto=format&fit=crop", // Replace with your image
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Header Section */}
      <div className="text-center mb-16 animate-scale-up">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-white/80 rounded-full border border-pink-200 shadow-[0_10px_30px_rgba(244,114,182,0.2)] backdrop-blur-xl">
            <Gamepad2 className="w-12 h-12 text-pink-500" />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400 mb-6 drop-shadow-sm">
          Baddie Cafe SMP
        </h1>
        <p className="text-xl text-pink-800/80 max-w-3xl mx-auto leading-relaxed font-medium">
          Dive into our exclusive community Minecraft server! Whether you love
          building massive castles, going on epic mining expeditions, or just
          chilling with friends, there's a spot for you here.
        </p>
      </div>

      {/* How to Join Card */}
      <div className="max-w-4xl mx-auto mb-24 group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 to-rose-300 rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-60 transition duration-500"></div>
        <div className="relative bg-white/80 backdrop-blur-2xl border border-pink-200 rounded-[2.5rem] p-8 md:p-12 shadow-[0_15px_40px_rgba(244,114,182,0.15)] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-black text-pink-950 mb-4 flex items-center justify-center md:justify-start gap-3 uppercase tracking-wide">
              <Server className="w-8 h-8 text-pink-500" />
              How to Join the Server
            </h2>
            <p className="text-pink-800/80 mb-6 text-lg font-medium">
              To keep our server safe and fun, the server IP is exclusive to our
              Discord members. Join our community to start playing!
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm font-bold text-pink-900 bg-pink-50 p-4 rounded-2xl border border-pink-100 shadow-inner">
                <ShieldCheck className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                Step 1: Join the Baddie Cafe Discord
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-pink-900 bg-pink-50 p-4 rounded-2xl border border-pink-100 shadow-inner">
                <Pickaxe className="w-5 h-5 text-rose-500 flex-shrink-0" />
                Step 2: Head over to the{" "}
                <span className="text-pink-600 bg-white px-2 py-0.5 rounded-md border border-pink-200">
                  #minecraft
                </span>{" "}
                channel
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto flex flex-col gap-4">
            <a
              href="https://discord.gg/txJ2GtV6GT"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-pink-400 to-rose-400 text-white font-black rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_25px_rgba(244,114,182,0.4)] uppercase tracking-wider flex items-center justify-center gap-2 whitespace-nowrap shadow-md"
            >
              Get The IP
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="space-y-8">
        <h2 className="text-3xl font-black uppercase tracking-tighter text-center text-pink-950 mb-10">
          Server <span className="text-pink-500">Highlights</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="group relative h-64 md:h-80 rounded-3xl overflow-hidden border border-pink-200 cursor-pointer bg-white/70 shadow-[0_8px_30px_rgba(244,114,182,0.15)] hover:shadow-[0_15px_35px_rgba(244,114,182,0.25)] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-pink-950/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img
                src={src}
                alt={`Minecraft Server view ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <p className="text-white font-bold tracking-wide text-lg drop-shadow-md">
                  ✨ Epic Builds & Vibes
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Minecraft;
