import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed w-full z-50 bg-indigo-950/60 backdrop-blur-md border-b border-pink-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link
            to="/"
            className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-fuchsia-400 uppercase drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]"
          >
            Baddie Cafe India
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className="hover:text-pink-300 transition-colors uppercase tracking-widest text-sm font-bold"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-pink-300 transition-colors uppercase tracking-widest text-sm font-bold"
            >
              About
            </Link>
            <Link
              to="/people"
              className="hover:text-pink-300 transition-colors uppercase tracking-widest text-sm font-bold"
            >
              People
            </Link>
            <Link
              to="/staff"
              className="hover:text-pink-300 transition-colors uppercase tracking-widest text-sm font-bold"
            >
              Staff
            </Link>
            <Link
              to="/rules"
              className="hover:text-pink-300 transition-colors uppercase tracking-widest text-sm font-bold"
            >
              Rules
            </Link>
            <Link
              to="/faq"
              className="hover:text-pink-300 transition-colors uppercase tracking-widest text-sm font-bold"
            >
              FAQ
            </Link>
            <a
              href="https://discord.gg/baddiecafeindia"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gradient-to-r from-pink-400 to-fuchsia-500 hover:from-pink-300 hover:to-fuchsia-400 text-indigo-950 font-black rounded-full transition-all hover:scale-105 uppercase tracking-wide animate-glow"
            >
              Join Server
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-pink-300 font-bold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-indigo-950/95 border-b border-pink-400/20 rounded-b-3xl pb-6">
          <div className="px-4 pt-4 flex flex-col space-y-4 text-center">
            <Link
              to="/"
              onClick={closeMenu}
              className="block text-lg font-bold hover:text-pink-300 uppercase tracking-widest transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className="block text-lg font-bold hover:text-pink-300 uppercase tracking-widest transition-colors"
            >
              About
            </Link>
            <Link
              to="/people"
              onClick={closeMenu}
              className="block text-lg font-bold hover:text-pink-300 uppercase tracking-widest transition-colors"
            >
              People
            </Link>
            <Link
              to="/staff"
              onClick={closeMenu}
              className="block text-lg font-bold hover:text-pink-300 uppercase tracking-widest transition-colors"
            >
              Staff
            </Link>
            <Link
              to="/rules"
              onClick={closeMenu}
              className="block text-lg font-bold hover:text-pink-300 uppercase tracking-widest transition-colors"
            >
              Rules
            </Link>
            <Link
              to="/faq"
              onClick={closeMenu}
              className="block text-lg font-bold hover:text-pink-300 uppercase tracking-widest transition-colors"
            >
              FAQ
            </Link>
            <a
              href="https://discord.gg/baddiecafeindia"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full px-6 py-4 bg-gradient-to-r from-pink-400 to-fuchsia-500 text-indigo-950 font-black rounded-full uppercase tracking-wide"
            >
              Join Server
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
