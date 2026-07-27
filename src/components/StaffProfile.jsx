import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Sparkles, Shield, Award } from "lucide-react";

const StaffProfile = () => {
  const { name } = useParams();

  // Database of detailed descriptions for each staff member
  const staffDetails = {
    Founder: {
      name: "Founder",
      role: "Founder & Server Queen",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=queen",
      bio: "The visionary behind Baddie Cafe India. Oversees the entire community, plans major events, and keeps the server aesthetic running smoothly.",
      responsibilities: [
        "Server Management & Vision",
        "Event Planning & Coordination",
        "Community Relations & Oversight",
      ],
      joined: "January 2024",
      favoriteGame: "Grand Theft Auto V RP & Genshin Impact",
    },
    "Co-Owner": {
      name: "Co-Owner",
      role: "Head of Operations",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=ops",
      bio: "Handles day-to-day operations, staff performance, and ensures our backend and community guidelines are strictly and fairly enforced.",
      responsibilities: [
        "Operations Management",
        "Staff Oversight",
        "Conflict Resolution",
      ],
      joined: "February 2024",
      favoriteGame: "Valorant & Minecraft",
    },
    Manager: {
      name: "Manager",
      role: "Server Manager",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=manager",
      bio: "Coordinates between different departments and helps members navigate the server channels seamlessly.",
      responsibilities: [
        "Department Coordination",
        "Member Support",
        "Channel Maintenance",
      ],
      joined: "March 2024",
      favoriteGame: "Among Us & Minecraft",
    },
    Director: {
      name: "Director",
      role: "Creative Director",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=director",
      bio: "Leads the creative team in designing custom channel layouts, banners, graphics, and community visual assets.",
      responsibilities: [
        "Visual Branding & Design",
        "Creative Direction",
        "Media Pipeline Management",
      ],
      joined: "April 2024",
      favoriteGame: "Genshin Impact",
    },
    "Creative Lead": {
      name: "Creative Lead",
      role: "Creative Team",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=creative",
      bio: "Works closely on video editing, collages, and rich media content for our shared community platforms.",
      responsibilities: [
        "Video Editing & Assets",
        "Content Curation",
        "Graphic Overlays",
      ],
      joined: "May 2024",
      favoriteGame: "Minecraft & Valorant",
    },
    "Minecraft Manager": {
      name: "Minecraft Manager",
      role: "Minecraft Manager",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=creative",
      desc: "Active server staff member maintaining the vibes.",
      bio: "Manages our custom Minecraft servers, plugins, horror mods, and community build events.",
      responsibilities: [
        "Server Plugin Configuration",
        "Modpack Updates",
        "Community Build Events",
      ],
      joined: "June 2024",
      favoriteGame: "Minecraft Hardcore & Survival",
    },
    "Gaming Mod": {
      name: "Gaming Mod",
      role: "Gaming Moderator",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=gamingmod",
      bio: "Hosts custom game lobbies, maintains fair play during tournaments, and runs our gaming events.",
      responsibilities: [
        "Hosting Game Nights",
        "Tournaments Moderation",
        "Voice Channel Vibe Control",
      ],
      joined: "July 2024",
      favoriteGame: "Valorant & GTA V RP",
    },
    "Art Mod": {
      name: "Art Mod",
      role: "Art Moderator",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=artmod",
      bio: "Curates the creative channels, supports artists sharing their work, and keeps art spaces inspiring.",
      responsibilities: [
        "Art Channel Moderation",
        "Spotlight Features",
        "Creative Feedback",
      ],
      joined: "August 2024",
      favoriteGame: "Genshin Impact & Creative Design",
    },
  };

  // Decode profile name from URL params
  const decodedName = decodeURIComponent(name || "");
  const member = staffDetails[decodedName] || {
    name: decodedName,
    role: "Team Member",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=default",
    bio: "An essential member of the Baddie Cafe India team keeping the community active and vibrant.",
    responsibilities: ["Community Engagement", "Moderation & Support"],
    joined: "2024",
    favoriteGame: "Various Multiplayer Games",
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto z-10 relative">
      <Link
        to="/staff"
        className="inline-flex items-center gap-2 text-pink-300 hover:text-pink-400 font-bold mb-8 transition-colors uppercase tracking-widest text-sm"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Staff
      </Link>

      <div className="bg-indigo-900/40 backdrop-blur-xl border border-pink-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <img
            src={member.avatar}
            alt={member.name}
            className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border-4 border-pink-400/50 shadow-[0_0_25px_rgba(236,72,153,0.4)] bg-indigo-950 flex-shrink-0"
          />
          <div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-2">
              {member.name}
            </h1>
            <span className="inline-block px-4 py-1.5 bg-pink-500/20 text-pink-300 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-pink-400/30">
              {member.role}
            </span>
            <p className="text-indigo-100/80 text-base sm:text-lg leading-relaxed">
              {member.bio}
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-pink-500/20 pt-8">
          <div className="bg-indigo-950/50 p-6 rounded-2xl border border-pink-500/10">
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-pink-400" /> Key Responsibilities
            </h3>
            <ul className="space-y-2 text-sm text-indigo-200/80">
              {member.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>{" "}
                  {resp}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-indigo-950/50 p-6 rounded-2xl border border-pink-500/10 space-y-4">
            <div>
              <h4 className="text-xs font-bold text-pink-300 uppercase tracking-widest">
                Joined Team
              </h4>
              <p className="text-white font-medium">{member.joined}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-pink-300 uppercase tracking-widest">
                Favorite Games
              </h4>
              <p className="text-white font-medium">{member.favoriteGame}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffProfile;
