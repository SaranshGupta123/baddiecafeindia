import React from "react";

const Footer = () => {
  return (
    <footer className="relative z-10 py-12 bg-indigo-950/80 border-t border-pink-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <div className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-fuchsia-400 uppercase mb-2">
            Baddie Cafe India
          </div>
          <p className="text-fuchsia-200/60 font-medium">
            400+ members and growing.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/baddiecafeindia/reels/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-indigo-900/50 border border-pink-500/20 flex items-center justify-center hover:bg-pink-500 hover:border-pink-400 hover:text-indigo-950 transition-all text-pink-200 font-black hover:scale-110 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]"
          >
            IG
          </a>

          <a
            href="https://www.youtube.com/@baddiecafeindia"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-indigo-900/50 border border-pink-500/20 flex items-center justify-center hover:bg-pink-500 hover:border-pink-400 hover:text-indigo-950 transition-all text-pink-200 font-black hover:scale-110 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]"
          >
            YT
          </a>
        </div>
      </div>
      <div className="text-center text-fuchsia-200/40 text-sm mt-12 font-medium tracking-wider uppercase">
        © {new Date().getFullYear()} Baddie Cafe India Stay cute.
      </div>
    </footer>
  );
};

export default Footer;
