import React from "react";
import { Link } from "react-router-dom";
import { Mail, Heart, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 pt-16 pb-8 bg-indigo-950/80 backdrop-blur-xl border-t border-pink-500/20 shadow-[0_-10px_30px_rgba(0,0,0,0.2)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand & Info */}
          <div className="space-y-4 text-center md:text-left">
            <Link
              to="/"
              className="inline-block text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-fuchsia-400 uppercase drop-shadow-[0_0_10px_rgba(236,72,153,0.3)] hover:drop-shadow-[0_0_15px_rgba(236,72,153,0.6)] transition-all duration-300"
            >
              Baddie Cafe India
            </Link>
            <p className="text-indigo-200/70 leading-relaxed font-medium max-w-xs mx-auto md:mx-0">
              A cozy, coquette-infused corner of Discord. Keep it cute, keep it
              fun, keep it drama-free.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-sm font-bold tracking-wider shadow-[0_0_10px_rgba(236,72,153,0.1)]">
              <Heart className="w-4 h-4 fill-pink-400 text-pink-400 animate-pulse" />
              400+ Members
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-black uppercase tracking-widest mb-6 flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-pink-400" /> Explore
            </h3>
            <ul className="space-y-3 text-indigo-200/80 font-medium">
              <li>
                <Link
                  to="/about"
                  className="hover:text-pink-400 hover:translate-x-2 transition-all duration-300 inline-block"
                >
                  The Lore (About)
                </Link>
              </li>
              <li>
                <Link
                  to="/about-diva"
                  className="text-pink-300 hover:text-pink-400 hover:translate-x-2 transition-all duration-300 inline-block font-bold"
                >
                  Meet Divaaa (Owner)
                </Link>
              </li>
              <li>
                <Link
                  to="/rules"
                  className="hover:text-pink-400 hover:translate-x-2 transition-all duration-300 inline-block"
                >
                  Server Rules
                </Link>
              </li>
              <li>
                <Link
                  to="/staff"
                  className="hover:text-pink-400 hover:translate-x-2 transition-all duration-300 inline-block"
                >
                  Meet the Staff
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-pink-400 hover:translate-x-2 transition-all duration-300 inline-block"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Socials */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-black uppercase tracking-widest mb-6">
              Connect
            </h3>

            {/* Email */}
            <a
              href="mailto:support@baddiecafeindia.com"
              className="group flex items-center justify-center md:justify-start gap-3 text-indigo-200/80 hover:text-pink-400 transition-colors mb-6 font-medium"
            >
              <div className="p-2 rounded-lg bg-white/5 group-hover:bg-pink-500/20 border border-white/5 group-hover:border-pink-500/50 transition-all duration-300 shadow-lg">
                <Mail className="w-5 h-5" />
              </div>
              support@baddiecafeindia.com
            </a>

            {/* Social Buttons with Custom SVGs */}
            <div className="flex justify-center md:justify-start gap-4">
              {/* Discord Button */}
              <a
                href="https://discord.gg/baddiecafeindia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="w-12 h-12 rounded-full bg-indigo-900/50 border border-indigo-400/30 flex items-center justify-center hover:bg-[#5865F2] hover:border-transparent hover:text-white transition-all duration-300 text-indigo-300 shadow-lg hover:scale-110 hover:shadow-[0_0_20px_rgba(88,101,242,0.6)] group"
              >
                <svg
                  className="w-6 h-6 fill-current transition-transform group-hover:scale-110"
                  viewBox="0 0 127.14 96.36"
                >
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.2,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                </svg>
              </a>

              {/* Instagram Button */}
              <a
                href="https://www.instagram.com/baddiecafeindia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-12 h-12 rounded-full bg-indigo-900/50 border border-pink-500/30 flex items-center justify-center hover:bg-gradient-to-tr hover:from-orange-500 hover:via-pink-500 hover:to-fuchsia-500 hover:border-transparent hover:text-white transition-all duration-300 text-pink-300 shadow-lg hover:scale-110 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] group"
              >
                <svg
                  className="w-5 h-5 fill-current transition-transform group-hover:scale-110"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube Button */}
              <a
                href="https://www.youtube.com/@baddiecafeindia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-12 h-12 rounded-full bg-indigo-900/50 border border-red-500/30 flex items-center justify-center hover:bg-red-600 hover:border-transparent hover:text-white transition-all duration-300 text-red-400 shadow-lg hover:scale-110 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] group"
              >
                <svg
                  className="w-5 h-5 fill-current transition-transform group-hover:scale-110"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-indigo-200/50 text-sm font-medium tracking-wider uppercase text-center md:text-left">
            © {new Date().getFullYear()} Baddie Cafe India. All rights reserved.
          </div>
          <div className="text-pink-400/80 text-sm font-bold tracking-widest uppercase flex items-center gap-2 hover:text-pink-300 transition-colors cursor-default">
            Stay Cute <Heart className="w-4 h-4 fill-pink-400/80" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
