import React from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Staff = () => {
  const staffMembers = [
    {
      name: "Divaaa",
      role: "Founder, Owner & Server Queen",
      video: "/staff/Divaaa.mp4",
      desc: 'The heart and soul and hot "Divaaa" of Baddie Cafe India. Divaaa leads the community with creativity, kindness, and unforgettable events, making every member feel at home.',
    },
    {
      name: "Saransh",
      role: "Tech, Ops Lead & Co-owner",
      avatar:
        "https://api.dicebear.com/7.x/bottts/svg?seed=Saransh&backgroundColor=c7d2fe",
      desc: "Architect behind the server bots, web infrastructure, and backend vibes.",
    },
    {
      name: "Buri-Buri",
      role: "Manager",
      video: "/staff/Buri-Buri.mp4",
      desc: "Architect behind the server bots, web infrastructure, and backend vibes.",
    },
    {
      name: "Harsh / CrazyLoverX",
      role: "Art Mod, Artist & Event Host",
      video: "/staff/Crazy.mp4",
      desc: "A talented artist, singer, and event host who brings creativity, music, and unforgettable moments to the Baddie Cafe India community.",
    },
    {
      name: "Luna",
      role: "Female Voice Moderator & Female Dominator",
      video: "/staff/Maddy.mp4",
      desc: "Architect behind the server bots, web infrastructure, and backend vibes.",
    },
    {
      name: "Sakshi",
      role: "Head of Gaming",
      video: "/staff/Sakshi.mp4",
      desc: "Our adorable Game Handler! 🌸 Sakshi loves bringing fun, new games to the community. She just launched our Minecraft SMP and is already planning to bring epic adventures like GTA 5 RP and more to the server very soon! ✨",
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
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400 drop-shadow-sm">
          MEET THE MODS.
        </h1>
        <p className="text-xl text-pink-800/80 max-w-2xl mx-auto font-medium">
          The main characters working behind the scenes to keep the cafe running
          smoothly. Click a card to view their full lore.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {staffMembers.map((member, index) => (
          <Link
            to={`/staff/${encodeURIComponent(member.name)}`}
            key={index}
            className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-pink-100 text-center hover:border-pink-300 hover:bg-white transition-all duration-300 hover:-translate-y-2 group block shadow-[0_5px_15px_rgba(244,114,182,0.1)] hover:shadow-[0_15px_30px_rgba(244,114,182,0.2)]"
            onMouseEnter={(e) => {
              const video = e.currentTarget.querySelector("video");
              video?.play();
            }}
            onMouseLeave={(e) => {
              const video = e.currentTarget.querySelector("video");
              if (video) {
                video.pause();
                video.currentTime = 0;
              }
            }}
          >
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-pink-300/30 rounded-full blur-xl group-hover:bg-pink-400/50 transition-all"></div>
              <video
                src={member.video}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="relative w-190 h-190 mx-auto rounded-full object-cover border-4 border-white shadow-inner group-hover:border-pink-300 transition-colors bg-pink-50"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <h3 className="text-2xl font-black text-pink-950 mb-3 group-hover:text-pink-600 transition-colors tracking-wide">
              {member.name}
            </h3>
            <span className="inline-block px-4 py-1.5 bg-pink-50 text-pink-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-pink-100 group-hover:bg-pink-100 transition-colors">
              {member.role}
            </span>
            <p className="text-pink-800/80 text-sm leading-relaxed font-medium">
              {member.desc}
            </p>
          </Link>
        ))}
      </div>

      {/* Join the Team CTA */}
      <div className="bg-white/80 border border-pink-200 rounded-[2.5rem] p-8 md:p-12 text-center backdrop-blur-xl shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100/50 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-100/50 rounded-full blur-3xl -z-10"></div>

        <Sparkles className="w-10 h-10 text-pink-500 mx-auto mb-4" />
        <h2 className="text-3xl font-black text-pink-950 uppercase tracking-wide mb-3">
          Want to join the staff?
        </h2>
        <p className="text-pink-800/80 mb-6 max-w-2xl mx-auto font-medium">
          We are always looking for dedicated creatives, moderators, and event
          hosts to help grow the community. Active members get priority!
        </p>
        <a
          href="https://discord.gg/bhNybabwz3"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-white hover:bg-pink-500 text-pink-600 hover:text-white font-bold rounded-full transition-all duration-300 border border-pink-200 hover:border-transparent uppercase tracking-wider text-sm shadow-sm hover:shadow-[0_10px_20px_rgba(244,114,182,0.3)] hover:-translate-y-1"
        >
          Open Ticket in Discord
        </a>
      </div>
    </div>
  );
};

export default Staff;
