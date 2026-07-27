import React from "react";
import { Link } from "react-router-dom";

const Staff = () => {
  const staffMembers = [
    {
      name: "Founder",
      role: "Founder & Server Queen",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=queen",
      desc: "Active server staff member maintaining the vibes.",
    },
    {
      name: "Co-Owner",
      role: "Head of Operations",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=ops",
      desc: "Active server staff member maintaining the vibes.",
    },
    {
      name: "Manager",
      role: "Server Manager",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=manager",
      desc: "Active server staff member maintaining the vibes.",
    },
    {
      name: "Director",
      role: "Creative Director",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=director",
      desc: "Active server staff member maintaining the vibes.",
    },
    {
      name: "Creative Lead",
      role: "Creative Team",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=creative",
      desc: "Active server staff member maintaining the vibes.",
    },
    {
      name: "Minecraft Manager",
      role: "Minecraft Manager",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=creative",
      desc: "Active server staff member maintaining the vibes.",
    },
    {
      name: "Gaming Mod",
      role: "Gaming Moderator",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=gamingmod",
      desc: "Active server staff member maintaining the vibes.",
    },
    {
      name: "Art Mod",
      role: "Art Moderator",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=artmod",
      desc: "Active server staff member maintaining the vibes.",
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      <div className="text-center mb-16 animate-scale-up">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-300 drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]">
          THE BADDIE STAFF.
        </h1>
        <p className="text-xl text-fuchsia-200/80 max-w-2xl mx-auto font-medium">
          Click on any staff member card to view their complete profile and role
          details!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {staffMembers.map((member, index) => (
          <Link
            to={`/staff/${encodeURIComponent(member.name)}`}
            key={index}
            className="bg-indigo-900/40 backdrop-blur-md p-6 rounded-3xl border border-pink-500/20 text-center hover:border-pink-400/50 transition-all hover:-translate-y-2 group block"
          >
            <img
              src={member.avatar}
              alt={member.name}
              className="w-28 h-28 mx-auto rounded-full object-cover border-2 border-pink-400/50 mb-4 shadow-[0_0_15px_rgba(236,72,153,0.3)] group-hover:scale-105 transition-transform bg-indigo-950"
            />
            <h3 className="text-2xl font-black text-white mb-1 group-hover:text-pink-300 transition-colors">
              {member.name}
            </h3>
            <span className="inline-block px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-xs font-bold uppercase tracking-widest mb-3 border border-pink-400/30">
              {member.role}
            </span>
            <p className="text-indigo-100/70 text-sm">{member.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Staff;
