import React from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Staff = () => {
  const staffMembers = [
    {
      name: "Divaaa",
      role: "Founder & Server Queen",
      avatar:
        "https://api.dicebear.com/7.x/bottts/svg?seed=Divaaa&backgroundColor=fbcfe8",
      desc: "The visionary setting the aesthetic and leading the Total Dheet streams.",
    },
    {
      name: "Saransh",
      role: "Tech , Ops Lead & Co-owner",
      avatar:
        "https://api.dicebear.com/7.x/bottts/svg?seed=Saransh&backgroundColor=c7d2fe",
      desc: "Architect behind the server bots, web infrastructure, and backend vibes.",
    },
    {
      name: "Buri Buri",
      role: "Director & Manager",
      avatar:
        "https://api.dicebear.com/7.x/bottts/svg?seed=zaemon&backgroundColor=c7d2fe",
      desc: "Architect behind the server bots, web infrastructure, and backend vibes.",
    },
    {
      name: "Sakshi",
      role: "Head of Gaming",
      avatar:
        "https://api.dicebear.com/7.x/bottts/svg?seed=Louis&backgroundColor=fef08a",
      desc: "Keeps the GTA 5 RP and Valorant lobbies strictly toxic-free.",
    },
    {
      name: "Creative Team",
      role: "Aesthetic Directors",
      avatar:
        "https://api.dicebear.com/7.x/bottts/svg?seed=Creative&backgroundColor=f5d0fe",
      desc: "Curators of our media pipelines, collages, and video edits.",
    },
    {
      name: "Night Owls",
      role: "Late-Night Mods",
      avatar:
        "https://api.dicebear.com/7.x/bottts/svg?seed=Night&backgroundColor=a5f3fc",
      desc: "Guarding the 24/7 Lo-Fi channels and study groups.",
    },
    {
      name: "Event Staff",
      role: "Hype Squad",
      avatar:
        "https://api.dicebear.com/7.x/bottts/svg?seed=Events&backgroundColor=bbf7d0",
      desc: "Hosting watch parties, karaoke, and community contests.",
    },
    {
      name: "Chat Mod",
      role: "Hype Squad",
      avatar:
        "https://api.dicebear.com/7.x/bottts/svg?seed=Chat&backgroundColor=bbf7d0",
      desc: "Hosting watch parties, karaoke, and community contests.",
    },
    {
      name: "Female Voice Mod",
      role: "Hype Squad",
      avatar:
        "https://api.dicebear.com/7.x/bottts/svg?seed=FemaleVoice&backgroundColor=bbf7d0",
      desc: "Hosting watch parties, karaoke, and community contests.",
    },
    {
      name: "Male Voice Mod",
      role: "Hype Squad",
      avatar:
        "https://api.dicebear.com/7.x/bottts/svg?seed=MaleVoice&backgroundColor=bbf7d0",
      desc: "Hosting watch parties, karaoke, and community contests.",
    },
    {
      name: "Art Mod",
      role: "Hype Squad",
      avatar:
        "https://api.dicebear.com/7.x/bottts/svg?seed=Art&backgroundColor=bbf7d0",
      desc: "Hosting watch parties, karaoke, and community contests.",
    },
    {
      name: "Minecraft Manager",
      role: "Hype Squad",
      avatar:
        "https://api.dicebear.com/7.x/bottts/svg?seed=Minecraft&backgroundColor=bbf7d0",
      desc: "Hosting watch parties, karaoke, and community contests.",
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      <div className="text-center mb-16 animate-scale-up">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-300 drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]">
          MEET THE MODS.
        </h1>
        <p className="text-xl text-fuchsia-200/80 max-w-2xl mx-auto font-medium">
          The main characters working behind the scenes to keep the cafe running
          smoothly. Click a card to view their full lore.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {staffMembers.map((member, index) => (
          <Link
            to={`/staff/${encodeURIComponent(member.name)}`}
            key={index}
            className="bg-indigo-950/50 backdrop-blur-xl p-8 rounded-3xl border border-white/10 text-center hover:border-pink-500/40 transition-all duration-300 hover:-translate-y-2 group block shadow-lg hover:shadow-[0_10px_30px_rgba(236,72,153,0.15)]"
          >
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-pink-500/20 rounded-full blur-md group-hover:bg-pink-500/40 transition-all"></div>
              <img
                src={member.avatar}
                alt={member.name}
                className="relative w-28 h-28 mx-auto rounded-full object-cover border-2 border-white/20 group-hover:border-pink-400 transition-colors bg-indigo-900"
              />
            </div>
            <h3 className="text-2xl font-black text-white mb-2 group-hover:text-pink-300 transition-colors tracking-wide">
              {member.name}
            </h3>
            <span className="inline-block px-4 py-1.5 bg-white/5 text-pink-300 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-white/10 group-hover:border-pink-500/30 transition-colors">
              {member.role}
            </span>
            <p className="text-indigo-100/70 text-sm leading-relaxed font-medium">
              {member.desc}
            </p>
          </Link>
        ))}
      </div>

      {/* Join the Team CTA */}
      <div className="bg-gradient-to-r from-pink-500/20 to-fuchsia-600/20 border border-pink-500/30 rounded-3xl p-8 md:p-12 text-center backdrop-blur-md">
        <Sparkles className="w-10 h-10 text-pink-400 mx-auto mb-4" />
        <h2 className="text-3xl font-black text-white uppercase tracking-wide mb-3">
          Want to join the staff?
        </h2>
        <p className="text-indigo-100/80 mb-6 max-w-2xl mx-auto">
          We are always looking for dedicated creatives, moderators, and event
          hosts to help grow the community. Active members get priority!
        </p>
        <a
          href="https://discord.gg/bhNybabwz3"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-white/10 hover:bg-pink-500 text-white font-bold rounded-full transition-colors border border-white/20 hover:border-pink-400 uppercase tracking-wider text-sm"
        >
          Open Ticket in Discord
        </a>
      </div>
    </div>
  );
};

export default Staff;
