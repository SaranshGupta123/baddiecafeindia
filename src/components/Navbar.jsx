import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  // 👈 Using a mapped array makes routing much cleaner
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "People", path: "/people" },
    { name: "Staff", path: "/staff" },
    { name: "About Divaaa", path: "/about-diva" }, // 👈 Points to the new page
    { name: "Rules", path: "/rules" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-indigo-950/40 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Brand Logo & Text */}
          <Link
            to="/"
            className="flex items-center gap-3 group hover:opacity-90 transition-all duration-300"
          >
            <div className="relative">
              <img
                src="/logo.png"
                alt="Baddie Cafe India Logo"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-pink-400/50 group-hover:ring-pink-300 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-pink-400/20 blur-md -z-10 group-hover:bg-pink-400/40 transition-all"></div>
            </div>
            <span className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-fuchsia-400 uppercase drop-shadow-[0_0_10px_rgba(236,72,153,0.5)] group-hover:drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]">
              Baddie Cafe India
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-indigo-100 hover:text-pink-300 transition-colors uppercase tracking-widest text-sm font-bold hover:-translate-y-0.5 transform duration-200 ${
                  item.name === "About Divaaa"
                    ? "text-pink-300 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ))}

            <a
              href="https://discord.gg/baddiecafeindia"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-2.5 bg-gradient-to-r from-pink-400 to-fuchsia-500 text-indigo-950 font-black rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] uppercase tracking-wide flex items-center gap-2"
            >
              Join Server
              <Sparkles className="w-4 h-4 group-hover:animate-pulse" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-pink-300 p-2 rounded-full hover:bg-white/5 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Glassy) */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-indigo-950/80 backdrop-blur-2xl border-b border-white/10 rounded-b-3xl pb-6 shadow-2xl">
          <div className="px-4 pt-4 flex flex-col space-y-4 text-center">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className={`block text-lg font-bold uppercase tracking-widest transition-colors ${
                  item.name === "About Divaaa"
                    ? "text-pink-400 hover:text-pink-300"
                    : "text-indigo-100 hover:text-pink-300"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <a
              href="https://discord.gg/baddiecafeindia"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full flex justify-center items-center gap-2 px-6 py-4 bg-gradient-to-r from-pink-400 to-fuchsia-500 text-indigo-950 font-black rounded-full uppercase tracking-wide shadow-lg mt-2"
            >
              <Sparkles className="w-5 h-5" />
              Join Server
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
