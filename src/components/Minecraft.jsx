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
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-white/5 rounded-full border border-white/10 shadow-[0_0_30px_rgba(236,72,153,0.3)]">
            <Gamepad2 className="w-12 h-12 text-pink-400" />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-fuchsia-400 mb-6 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]">
          Baddie Cafe SMP
        </h1>
        <p className="text-xl text-indigo-200/80 max-w-3xl mx-auto leading-relaxed">
          Dive into our exclusive community Minecraft server! Whether you love
          building massive castles, going on epic mining expeditions, or just
          chilling with friends, there's a spot for you here.
        </p>
      </div>

      {/* How to Join Card */}
      <div className="max-w-4xl mx-auto mb-20 group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-indigo-950/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center md:justify-start gap-3">
              <Server className="w-8 h-8 text-pink-400" />
              How to Join the Server
            </h2>
            <p className="text-indigo-200/80 mb-6 text-lg">
              To keep our server safe and fun, the server IP is exclusive to our
              Discord members. Join our community to start playing!
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm font-bold text-indigo-100 bg-white/5 p-3 rounded-xl border border-white/5">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                Step 1: Join the Baddie Cafe Discord
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-indigo-100 bg-white/5 p-3 rounded-xl border border-white/5">
                <Pickaxe className="w-5 h-5 text-fuchsia-400" />
                Step 2: Head over to the{" "}
                <span className="text-pink-300">#minecraft</span> channel
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto flex flex-col gap-4">
            <a
              href="https://discord.gg/txJ2GtV6GT"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-pink-400 to-fuchsia-500 text-indigo-950 font-black rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] uppercase tracking-wide flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Get The IP
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="space-y-8">
        <h2 className="text-3xl font-black uppercase tracking-tighter text-center text-white mb-10">
          Server Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="group relative h-64 md:h-80 rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
            >
              <div className="absolute inset-0 bg-indigo-950/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img
                src={src}
                alt={`Minecraft Server view ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-bold tracking-wide">
                  Epic Builds & Vibes
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
