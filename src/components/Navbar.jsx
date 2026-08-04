import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sparkles, ChevronDown, ExternalLink } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  // We organize the navbar into beautiful dropdown categories to hold more content
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
    <nav className="fixed w-full z-50 bg-indigo-950/40 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Brand Logo & Text */}
          <Link
            to="/"
            className="flex items-center gap-3 group hover:opacity-90 transition-all duration-300 z-50"
          >
            <div className="relative">
              <img
                src="/logo.png"
                alt="Baddie Cafe India Logo"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-pink-400/50 group-hover:ring-pink-300 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-pink-400/20 blur-md -z-10 group-hover:bg-pink-400/40 transition-all"></div>
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-fuchsia-400 uppercase drop-shadow-[0_0_10px_rgba(236,72,153,0.5)] group-hover:drop-shadow-[0_0_15px_rgba(236,72,153,0.8)] whitespace-nowrap">
              Baddie Cafe India
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-6">
            <Link
              to="/"
              className="text-indigo-100 hover:text-pink-300 transition-colors uppercase tracking-widest text-sm font-bold hover:-translate-y-0.5 transform duration-200 px-2"
            >
              Home
            </Link>

            {/* Render all Dropdowns Dynamically */}
            {navMenus.map((menu) => (
              <div key={menu.title} className="relative group py-6 px-2">
                <button className="flex items-center gap-1 text-indigo-100 hover:text-pink-300 transition-colors uppercase tracking-widest text-sm font-bold hover:-translate-y-0.5 transform duration-200">
                  {menu.title}
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>

                <div className="absolute top-[70px] left-1/2 -translate-x-1/2 w-72 bg-indigo-950/95 backdrop-blur-xl border border-white/10 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl overflow-hidden flex flex-col p-2">
                  {menu.items.map((item) => {
                    const ItemWrapper = item.isExternal ? "a" : Link;
                    const wrapperProps = item.isExternal
                      ? {
                          href: item.path,
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : { to: item.path };

                    return (
                      <ItemWrapper
                        key={item.name}
                        {...wrapperProps}
                        className="flex flex-col p-3 rounded-lg hover:bg-white/5 transition-colors group/link"
                      >
                        <span
                          className={`font-bold text-sm uppercase tracking-wide flex justify-between items-center ${
                            item.highlight
                              ? "text-pink-300 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]"
                              : "text-indigo-100"
                          } group-hover/link:text-pink-300 transition-colors`}
                        >
                          {item.name}
                          {item.isExternal && (
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity text-pink-300" />
                          )}
                        </span>
                        <span className="text-indigo-200/60 text-xs mt-1">
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
              className="group relative ml-4 px-6 py-2.5 bg-gradient-to-r from-pink-400 to-fuchsia-500 text-indigo-950 font-black rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] uppercase tracking-wide flex items-center gap-2 whitespace-nowrap"
            >
              Join Server
              <Sparkles className="w-4 h-4 group-hover:animate-pulse" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-pink-300 p-2 rounded-full hover:bg-white/5 transition-colors z-50"
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
        className={`lg:hidden overflow-y-auto transition-all duration-300 ease-in-out absolute w-full top-20 left-0 bg-indigo-950/95 backdrop-blur-2xl border-b border-white/10 rounded-b-3xl shadow-2xl ${
          isMenuOpen
            ? "max-h-[85vh] opacity-100"
            : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <div className="px-6 py-6 flex flex-col space-y-8">
          <Link
            to="/"
            onClick={closeMenu}
            className="text-xl font-black uppercase tracking-widest text-indigo-100 hover:text-pink-300 text-center"
          >
            Home
          </Link>

          {/* Render Mobile Categories */}
          {navMenus.map((menu) => (
            <div key={menu.title} className="flex flex-col space-y-4">
              <span className="text-sm font-black text-indigo-300/40 uppercase tracking-widest border-b border-white/5 pb-2">
                {menu.title}
              </span>
              <div className="grid grid-cols-1 gap-3 pl-2">
                {menu.items.map((item) => {
                  const ItemWrapper = item.isExternal ? "a" : Link;
                  const wrapperProps = item.isExternal
                    ? {
                        href: item.path,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : { to: item.path };

                  return (
                    <ItemWrapper
                      key={item.name}
                      {...wrapperProps}
                      onClick={closeMenu}
                      className={`text-base font-bold uppercase tracking-wider flex items-center gap-2 transition-colors ${
                        item.highlight
                          ? "text-pink-400"
                          : "text-indigo-100 hover:text-pink-300"
                      }`}
                    >
                      {item.name}
                      {item.isExternal && (
                        <ExternalLink className="w-3 h-3 text-indigo-400/50" />
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
              className="w-full flex justify-center items-center gap-2 px-6 py-4 bg-gradient-to-r from-pink-400 to-fuchsia-500 text-indigo-950 font-black rounded-full uppercase tracking-wide shadow-lg"
            >
              <Sparkles className="w-5 h-5" />
              Join Discord Server
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
