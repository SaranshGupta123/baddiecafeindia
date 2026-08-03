import React from "react";
import {
  Crown,
  Heart,
  Sparkles,
  Star,
  Users,
  Zap,
  Flame,
  Diamond,
  HandHeart,
  PartyPopper,
  ShieldCheck,
  Wand2,
} from "lucide-react";

const AboutDiva = () => {
  // Array of detailed lore points to keep the code clean and easy to edit
  const divaLore = [
    {
      title: "Who is Divaaa?",
      icon: <Sparkles className="w-6 h-6 text-pink-400" />,
      desc: "The supreme architect and overarching visionary who breathed life into Baddie Cafe India. She transcends the traditional role of a server owner—she is the gravitational center that holds the community's aesthetic, culture, and immaculate energy in perfect harmony. With an impeccable eye for detail, she curates every channel, role, and pixel to carry her signature touch, ensuring the server remains a premium, top-tier destination.",
    },
    {
      title: "Why Divaaa?",
      icon: <Zap className="w-6 h-6 text-fuchsia-400" />,
      desc: "Because settling for ordinary was never an option in her world. Divaaa brings an intoxicating, magnetic energy that completely redefines the Discord experience. Through her sheer charisma and sky-high standards, she has elevated a simple chat platform into a luxurious digital home and a highly-curated, exclusive VIP club where everyone wants a seat at the table.",
    },
    {
      title: "Why the extra 'a's?",
      icon: <Flame className="w-6 h-6 text-pink-500" />,
      desc: "A single 'a' simply couldn't contain the sheer magnitude of her aura. Those extra letters aren't just for show—they are a bold signature representing the relentless extra effort, the immaculate extra style, and the profound extra care she pours into everything she touches. From massive server revamps to a simple late-night conversation, it is a constant reminder that she always goes above and beyond.",
    },
    {
      title: "The Ultimate Baddie",
      icon: <Diamond className="w-6 h-6 text-indigo-300" />,
      desc: "She doesn't just meet the standard; she is the blueprint. Unapologetically confident, effortlessly stylish, and fiercely protective of her inner peace, she guards her energy as fiercely as she guards her community. She isn't out here following aesthetic trends—she is the one inventing them. With unmatched charisma and a flawless presence, she reigns as the undisputed, ultimate hot baddie of the server, turning heads in every channel.",
    },
    {
      title: "Why We Choose Her",
      icon: <HandHeart className="w-6 h-6 text-pink-400" />,
      desc: "In her realm, loyalty is never demanded—it is fiercely earned. The entire staff team and community rally united behind her because she leads not with an iron fist, but with profound empathy and genuine understanding. She doesn't just passively hear her people; she actively listens and validates them. Whether she's mediating a complex situation or simply supporting a member through a tough day, she consistently proves that she will fiercely protect her own and always have their backs when it truly counts.",
    },
    {
      title: "The Event Queen",
      icon: <PartyPopper className="w-6 h-6 text-fuchsia-300" />,
      desc: "She is the undisputed architect of the server's nightlife and social scene. From orchestrating massive, cozy weekend watch parties to diving headfirst into beautifully chaotic 3 AM karaoke sessions, her energy is completely infectious. She possesses a rare, effortless talent for hyping up any crowd and breaking the ice for newcomers, weaving ordinary voice calls into unforgettable digital memories that keep members logging in day after day.",
    },
    {
      title: "Guardian of the Peace",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      desc: "Toxic energy officially stops at the door under her watch. She commands the room and enforces firm boundaries with absolute grace and elegance, yet she will never hesitate to swiftly bring down the ban hammer to protect the sanctity of her community. For her, safeguarding this space isn't just a duty—it's a promise. No drama, no toxicity, just immaculate vibes and a fiercely protected safe haven.",
    },
    {
      title: "The Trendsetter",
      icon: <Wand2 className="w-6 h-6 text-pink-300" />,
      desc: "She is the driving creative force that keeps the server's aesthetic flawlessly on point. Whether she is orchestrating stunning, full-scale server revamps, approving highly requested custom bot integrations, or curating gorgeous channel layout redesigns, her innovative vision is unmatched. She ensures the space never feels stagnant, constantly evolving the digital environment to stay lightyears ahead of the competition and setting trends long before anyone else catches on.",
    },
    {
      title: "Heart of Gold",
      icon: <Heart className="w-6 h-6 text-red-400" />,
      desc: "Beneath the fierce, untouchable 'baddie' persona lies a remarkably compassionate leader with a genuine heart of gold. She goes far beyond surface-level moderation—she actively checks in on her members behind the scenes, remembers the tiniest personal details of their lives, and consistently shows up when they need her most. She possesses the rare ability to make an ever-growing digital space feel deeply intimate, ensuring absolutely everyone feels truly seen, heard, and valued.",
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-500/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      {/* Hero Section */}
      <div className="text-center mb-16 animate-scale-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full text-pink-300 text-sm font-bold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(236,72,153,0.2)]">
          <Crown className="w-4 h-4" /> Founder & Server Queen
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-fuchsia-400 to-pink-300 drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]">
          MEET DIVAAA
        </h1>
        <p className="text-xl text-indigo-100/80 max-w-2xl mx-auto font-medium leading-relaxed">
          The heart, soul, and creative visionary behind Baddie Cafe India.
          Dedicated to building a space where everyone belongs.
        </p>
      </div>

      {/* Top Section: Media & Core Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        {/* Left: Media/Video Profile */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-fuchsia-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          <div className="relative bg-indigo-950/60 backdrop-blur-xl border border-white/10 rounded-3xl p-4 shadow-2xl">
            <video
              src="/staff/Divaaa.mp4" /* Make sure this path is correct */
              autoPlay
              loop
              muted
              playsInline
              className="w-full aspect-[3/5] object-cover rounded-2xl border border-white/5"
            >
              Your browser does not support the video tag.
            </video>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-pink-500 to-fuchsia-500 p-4 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        {/* Right: Core Intro & Badges */}
        <div className="space-y-8">
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-pink-500/30 transition-colors shadow-lg">
            <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3 uppercase tracking-wide">
              <Heart className="w-6 h-6 text-pink-400" /> Her Vision
            </h2>
            <div className="space-y-4">
              <p className="text-indigo-100/80 text-lg leading-relaxed">
                As the Founder and Owner of Baddie Cafe India, Divaaa is far
                more than just a title—she is the living, breathing heartbeat of
                the community. She painstakingly built this server from the
                ground up, transforming a simple digital space into an
                exclusive, highly curated aesthetic haven.
              </p>
              <p className="text-indigo-100/80 text-lg leading-relaxed">
                Her singular vision was clear from day one: to cultivate an
                unapologetically welcoming, strictly toxic-free sanctuary where
                drama is left at the door and positive energy thrives. Under her
                meticulous guidance, Baddie Cafe has evolved beyond a standard
                Discord server into a genuine digital home—a place where people
                can forge authentic friendships, bond over unforgettable
                late-night events, and experience an unwavering sense of
                belonging.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-indigo-950/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 text-center hover:border-fuchsia-500/30 transition-colors">
              <Star className="w-8 h-8 text-fuchsia-400 mx-auto mb-3" />
              <div className="text-3xl font-black text-white mb-1">2016</div>
              <div className="text-xs font-bold text-fuchsia-300 uppercase tracking-widest">
                Year Started
              </div>
            </div>
            <div className="bg-indigo-950/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 text-center hover:border-pink-500/30 transition-colors">
              <Crown className="w-8 h-8 text-pink-400 mx-auto mb-3" />
              <div className="text-3xl font-black text-white mb-1">Queen</div>
              <div className="text-xs font-bold text-pink-300 uppercase tracking-widest">
                Server Status
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: The Divaaa Lore (Grid) */}
      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-200 uppercase tracking-wide mb-4">
            The Lore of Divaaa
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {divaLore.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-pink-500/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-lg group"
            >
              <div className="bg-indigo-950/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-3 tracking-wide">
                {item.title}
              </h3>
              <p className="text-indigo-100/70 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutDiva;
