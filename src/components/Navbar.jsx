import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Sparkles,
  ChevronDown,
  ExternalLink,
  Heart,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  const navMenus = [
    {
      title: "Info",
      items: [
        {
          name: "About Server",
          path: "/about",
          desc: "Learn about our community",
          isExternal: false,
        },
        {
          name: "About Divaaa",
          path: "/about-diva",
          desc: "Meet the owner",
          isExternal: false,
          highlight: true,
        },
        {
          name: "Server Calendar",
          path: "/calendar",
          desc: "Milestones & special days",
          isExternal: false,
          highlight: true,
        },
        {
          name: "Rules",
          path: "/rules",
          desc: "Server guidelines & rules",
          isExternal: false,
        },
        {
          name: "FAQ",
          path: "/faq",
          desc: "Frequently asked questions",
          isExternal: false,
        },
      ],
    },
    {
      title: "Community",
      items: [
        {
          name: "People",
          path: "/people",
          desc: "Our amazing members",
          isExternal: false,
        },
        {
          name: "Staff",
          path: "/staff",
          desc: "Meet the moderation team",
          isExternal: false,
        },
        {
          name: "Baddie Cafe India",
          path: "https://www.youtube.com/@baddiecafeindia",
          desc: "Subscribe to our channel",
          isExternal: true,
        },
      ],
    },
    {
      title: "Games",
      items: [
        {
          name: "Minecraft SMP",
          path: "/minecraft",
          desc: "Baddie Cafe Official Server",
          isExternal: false,
          highlight: true,
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          name: "Vote on Top.gg",
          path: "https://top.gg/discord/servers/867111271676616704/vote",
          desc: "Help us climb the ranks",
          isExternal: true,
        },
        {
          name: "Review Us",
          path: "https://top.gg/discord/servers/867111271676616704",
          desc: "Leave a review on Top.gg",
          isExternal: true,
        },
        {
          name: "Bump Server",
          path: "https://discord.gg/29j6zDVhf6",
          desc: "Jump directly to #bump channel",
          isExternal: true,
        },
      ],
    },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-2xl border-b border-pink-200 shadow-[0_4px_20px_rgba(244,114,182,0.1)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Brand Logo & Text */}
          <Link
            to="/"
            className="flex items-center gap-3 group hover:opacity-90 transition-all duration-300 z-50"
            onClick={closeMenu}
          >
            <div className="relative">
              <img
                src="/logo.png"
                alt="Logo"
                loading="lazy"
                className="w-11 h-11 object-cover rounded-full ring-2 ring-pink-300 group-hover:ring-pink-500 shadow-sm transition-all duration-300"
              />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400 uppercase whitespace-nowrap">
              Baddie Cafe India
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-6">
            <Link
              to="/"
              className="text-pink-900 hover:text-pink-500 transition-colors uppercase tracking-widest text-sm font-bold px-2"
            >
              Home
            </Link>

            {/* Render Dropdowns */}
            {navMenus.map((menu) => (
              <div key={menu.title} className="relative group py-6 px-2">
                <button className="flex items-center gap-1 text-pink-900 hover:text-pink-500 transition-colors uppercase tracking-widest text-sm font-bold">
                  {menu.title}
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>

                <div className="absolute top-[70px] left-1/2 -translate-x-1/2 w-72 bg-white/95 backdrop-blur-2xl border border-pink-200 rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-[0_20px_40px_rgba(244,114,182,0.15)] overflow-hidden flex flex-col p-3">
                  {menu.items.map((item) => {
                    const ItemWrapper = item.isExternal ? "a" : Link;
                    return (
                      <ItemWrapper
                        key={item.name}
                        {...(item.isExternal
                          ? {
                              href: item.path,
                              target: "_blank",
                              rel: "noopener noreferrer",
                            }
                          : { to: item.path })}
                        className="flex flex-col p-3 rounded-xl hover:bg-pink-50 transition-colors group/link"
                      >
                        <span
                          className={`font-bold text-sm uppercase tracking-wide flex justify-between items-center ${item.highlight ? "text-pink-500" : "text-pink-900"} group-hover/link:text-pink-600 transition-colors`}
                        >
                          {item.name}
                          {item.isExternal && (
                            <ExternalLink className="w-3 h-3 text-pink-400 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                          )}
                        </span>
                        <span className="text-pink-700/60 text-xs mt-1">
                          {item.desc}
                        </span>
                      </ItemWrapper>
                    );
                  })}
                </div>
              </div>
            ))}

            <a
              href="https://discord.gg/baddiecafeindia"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-7 py-2.5 bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-400 hover:to-rose-300 text-white font-black rounded-full transition-all duration-300 hover:scale-105 shadow-[0_5px_15px_rgba(244,114,182,0.4)] uppercase tracking-wide flex items-center gap-2 whitespace-nowrap"
            >
              Join Us <Heart className="w-4 h-4 fill-white animate-pulse" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-pink-600 p-2 rounded-full hover:bg-pink-50 transition-colors z-50"
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

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden overflow-y-auto transition-all duration-300 ease-in-out absolute w-full top-20 left-0 bg-white/95 backdrop-blur-3xl border-b border-pink-200 rounded-b-3xl shadow-[0_20px_40px_rgba(244,114,182,0.15)] ${
          isMenuOpen
            ? "max-h-[85vh] opacity-100"
            : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <div className="px-6 py-6 flex flex-col space-y-8">
          <Link
            to="/"
            onClick={closeMenu}
            className="text-xl font-black uppercase tracking-widest text-pink-900 hover:text-pink-500 text-center"
          >
            Home
          </Link>

          {/* Render Mobile Categories */}
          {navMenus.map((menu) => (
            <div key={menu.title} className="flex flex-col space-y-4">
              <span className="text-sm font-black text-pink-400 uppercase tracking-widest border-b border-pink-100 pb-2">
                {menu.title}
              </span>
              <div className="grid grid-cols-1 gap-3 pl-2">
                {menu.items.map((item) => {
                  const ItemWrapper = item.isExternal ? "a" : Link;
                  return (
                    <ItemWrapper
                      key={item.name}
                      {...(item.isExternal
                        ? {
                            href: item.path,
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : { to: item.path })}
                      onClick={closeMenu}
                      className={`text-base font-bold uppercase tracking-wider flex items-center gap-2 transition-colors ${
                        item.highlight
                          ? "text-pink-500"
                          : "text-pink-800 hover:text-pink-500"
                      }`}
                    >
                      {item.name}
                      {item.isExternal && (
                        <ExternalLink className="w-3 h-3 text-pink-300" />
                      )}
                    </ItemWrapper>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="pt-4 pb-8">
            <a
              href="https://discord.gg/baddiecafeindia"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full flex justify-center items-center gap-2 px-6 py-4 bg-gradient-to-r from-pink-500 to-rose-400 text-white font-black rounded-full uppercase tracking-wide shadow-[0_5px_15px_rgba(244,114,182,0.4)]"
            >
              <Sparkles className="w-5 h-5 animate-pulse" />
              Join Discord Server
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
