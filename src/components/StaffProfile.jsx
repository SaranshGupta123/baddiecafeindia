import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Shield,
  Gamepad2,
  Calendar,
  Trophy,
  Activity,
} from "lucide-react";

const StaffProfile = () => {
  const { name } = useParams();

  // Expanded Database of detailed descriptions
  const staffDetails = {
    Divaaa: {
      name: "Divaaa",
      role: "Founder , Owner & Server Queen",
      video: "/staff/Divaaa.mp4",
      status: "Streaming on Total Dheet 🎥",
      bio: "As the Founder, Owner, and Server Queen of Baddie Cafe India, Divaaa is the heart of the community and the vision behind its growth. She is dedicated to creating a welcoming space where people can build genuine friendships, enjoy memorable events, and feel a true sense of belonging. Through her creativity, leadership, and passion, she guides the server's direction while supporting both members and staff. From organizing community activities to inspiring new ideas, Divaaa works tirelessly to ensure Baddie Cafe India remains a fun, inclusive, and vibrant place where everyone is valued and every moment becomes a lasting memory.",
      responsibilities: [
        "Managing the  Server",
        "Engaging with Community Members",
        "Leading & Supporting Staff Team",
        "Welcoming and Assisting Members",
        "Handling Member Concerns & Reports",
        "Organizing Community Events",
        "Maintaining a Positive Environment",
        "Ensuring Server Safety & Moderation",
        "Planning Future Community Growth",
      ],
      joined: "2016",
      favoriteGame: "roblox",
      achievements: [
        "Founder",
        "Server Queen",
        "Community Builder",
        "Visionary Leader",
        "Staff Mentor",
        "Event Organizer",
        "People's Favorite",
        "Community Guardian",
        "Creative Director",
        "Culture Creator",
        "Team Motivator",
        "Member Advocate",
        "Positive Vibes Ambassador",
        "Server Architect",
        "Community Inspirer",
        "Leadership Excellence",
        "Heart of the Community",
      ],
    },
    Saransh: {
      name: "Saransh",
      role: "Tech & Ops Lead and Co - Owner",
      avatar:
        "https://api.dicebear.com/7.x/bottts/svg?seed=Saransh&backgroundColor=c7d2fe",
      status: "Debugging React routes 🧑‍💻",
      bio: "Our resident full-stack wizard. Saransh bridges the gap between community and technology. From building custom API bots and web pipelines to troubleshooting horror mods in Minecraft, he ensures the infrastructure of Baddie Cafe never misses a beat.",
      responsibilities: [
        "Discord Bot Development (Node.js/Python)",
        "Server Security & Automations",
        "Minecraft Server Maintenance",
      ],
      joined: "January 2024",
      favoriteGame: "GTA 5 RP & Valorant",
      achievements: ["Code Ninja", "Bug Squasher", "Late Night Grinder"],
    },
    Zaemon: {
      name: "Buri Buri",
      role: "Director & Manager",
      avatar:
        "https://api.dicebear.com/7.x/bottts/svg?seed=zaemon&backgroundColor=c7d2fe",
      status: "Debugging React routes 🧑‍💻",
      bio: "Our resident full-stack wizard. Buri Buri bridges the gap between community and technology. From building custom API bots and web pipelines to troubleshooting horror mods in Minecraft, he ensures the infrastructure of Baddie Cafe never misses a beat.",
      responsibilities: [
        "Discord Bot Development (Node.js/Python)",
        "Server Security & Automations",
        "Minecraft Server Maintenance",
      ],
      joined: "January 2024",
      favoriteGame: "GTA 5 RP & Valorant",
      achievements: ["Code Ninja", "Bug Squasher", "Late Night Grinder"],
    },
    Sakshi: {
      name: "Sakshi",
      role: "Head of Gaming",
      avatar:
        "https://api.dicebear.com/7.x/bottts/svg?seed=Sakshi&backgroundColor=fef08a",
      status: "In queue for Ranked 🎮",
      bio: "The ultimate lobby host. Louis manages the competitive and casual gaming scene within the server. Need a 5th for Valorant or someone to show you the ropes in a new RP city? Louis is your guy.",
      responsibilities: [
        "Tournament Organization",
        "Game Night Hosting",
        "Voice Channel Moderation",
      ],
      joined: "February 2024",
      favoriteGame: "Valorant",
      achievements: ["Clutch King", "Lobby Legend", "De-escalation Master"],
    },
    // Fallback for the rest of the roles
    "Creative Team": {
      name: "Creative Team",
      role: "Aesthetic Directors",
      avatar:
        "https://api.dicebear.com/7.x/bottts/svg?seed=Creative&backgroundColor=f5d0fe",
      status: "Rendering video files 🎬",
      bio: "A collective of highly talented editors, artists, and sound designers. They are responsible for the beautiful graphic collages, clean audio cuts, and overall visual identity of our channels.",
      responsibilities: [
        "Video Editing",
        "Graphic Design",
        "UI/UX Enhancements",
      ],
      joined: "March 2024",
      favoriteGame: "Minecraft (Creative Mode)",
      achievements: ["Pixel Perfect", "Audio Magicians"],
    },
    "Chat Mod": {
      name: "Chat Mod",
      role: "Aesthetic Directors",
      avatar:
        "https://api.dicebear.com/7.x/bottts/svg?seed=Chat&backgroundColor=f5d0fe",
      status: "Rendering video files 🎬",
      bio: "A collective of highly talented editors, artists, and sound designers. They are responsible for the beautiful graphic collages, clean audio cuts, and overall visual identity of our channels.",
      responsibilities: [
        "Video Editing",
        "Graphic Design",
        "UI/UX Enhancements",
      ],
      joined: "March 2024",
      favoriteGame: "Minecraft (Creative Mode)",
      achievements: ["Pixel Perfect", "Audio Magicians"],
    },
    "Female Voice Mod": {
      name: "Female Voice Mod",
      role: "Aesthetic Directors",
      avatar:
        "https://api.dicebear.com/7.x/bottts/svg?seed=FemaleVoice&backgroundColor=f5d0fe",
      status: "Rendering video files 🎬",
      bio: "A collective of highly talented editors, artists, and sound designers. They are responsible for the beautiful graphic collages, clean audio cuts, and overall visual identity of our channels.",
      responsibilities: [
        "Video Editing",
        "Graphic Design",
        "UI/UX Enhancements",
      ],
      joined: "March 2024",
      favoriteGame: "Minecraft (Creative Mode)",
      achievements: ["Pixel Perfect", "Audio Magicians"],
    },
    "Male Voice Mod": {
      name: "Male Voice Mod",
      role: "Aesthetic Directors",
      avatar:
        "https://api.dicebear.com/7.x/bottts/svg?seed=MaleVoice&backgroundColor=f5d0fe",
      status: "Rendering video files 🎬",
      bio: "A collective of highly talented editors, artists, and sound designers. They are responsible for the beautiful graphic collages, clean audio cuts, and overall visual identity of our channels.",
      responsibilities: [
        "Video Editing",
        "Graphic Design",
        "UI/UX Enhancements",
      ],
      joined: "March 2024",
      favoriteGame: "Minecraft (Creative Mode)",
      achievements: ["Pixel Perfect", "Audio Magicians"],
    },
    "Art Mod": {
      name: "Art Mod",
      role: "Aesthetic Directors",
      avatar:
        "https://api.dicebear.com/7.x/bottts/svg?seed=Art&backgroundColor=f5d0fe",
      status: "Rendering video files 🎬",
      bio: "A collective of highly talented editors, artists, and sound designers. They are responsible for the beautiful graphic collages, clean audio cuts, and overall visual identity of our channels.",
      responsibilities: [
        "Video Editing",
        "Graphic Design",
        "UI/UX Enhancements",
      ],
      joined: "March 2024",
      favoriteGame: "Minecraft (Creative Mode)",
      achievements: ["Pixel Perfect", "Audio Magicians"],
    },
    "Minecraft Manager": {
      name: "Minecraft Manager",
      role: "Aesthetic Directors",
      avatar:
        "https://api.dicebear.com/7.x/bottts/svg?seed=Minecraft&backgroundColor=f5d0fe",
      status: "Rendering video files 🎬",
      bio: "A collective of highly talented editors, artists, and sound designers. They are responsible for the beautiful graphic collages, clean audio cuts, and overall visual identity of our channels.",
      responsibilities: [
        "Video Editing",
        "Graphic Design",
        "UI/UX Enhancements",
      ],
      joined: "March 2024",
      favoriteGame: "Minecraft (Creative Mode)",
      achievements: ["Pixel Perfect", "Audio Magicians"],
    },
  };

  const decodedName = decodeURIComponent(name || "");
  const member = staffDetails[decodedName] || {
    name: decodedName,
    role: "Community Moderator",
    avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${decodedName}&backgroundColor=e2e8f0`,
    status: "Keeping the peace ✌️",
    bio: "An essential pillar of the Baddie Cafe India team, dedicating their time to keeping the community safe, active, and aesthetically pleasing.",
    responsibilities: ["Chat Moderation", "Member Support", "Vibe Maintenance"],
    joined: "Mid 2024",
    favoriteGame: "Various Multiplayer Games",
    achievements: ["Community Guardian", "Active Voice Caller"],
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10 relative">
      <Link
        to="/staff"
        className="inline-flex items-center gap-2 text-pink-300 hover:text-pink-400 font-bold mb-8 transition-colors uppercase tracking-widest text-sm bg-white/5 px-4 py-2 rounded-full border border-white/10"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Staff Roster
      </Link>

      <div className="bg-indigo-950/60 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        {/* Decorative Background Blur */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 text-center md:text-left relative z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-fuchsia-500 rounded-full blur-lg opacity-40"></div>
            <video
              src={member.video}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="relative w-90 h-190 mx-auto rounded-full object-cover border-2 border-white/20 group-hover:border-pink-400 transition-colors bg-indigo-900"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="flex-1 mt-4 md:mt-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-indigo-200 text-xs font-bold mb-4">
              <Activity className="w-3 h-3 text-emerald-400" />
              {member.status}
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200 mb-3 tracking-tight">
              {member.name}
            </h1>
            <span className="inline-block px-5 py-2 bg-gradient-to-r from-pink-500/20 to-fuchsia-500/20 text-pink-300 rounded-full text-sm font-bold uppercase tracking-widest mb-6 border border-pink-400/30">
              {member.role}
            </span>
            <p className="text-indigo-100/80 text-lg leading-relaxed max-w-2xl">
              {member.bio}
            </p>
          </div>
        </div>

        {/* Info Grid Section */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
          {/* Responsibilities */}
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-pink-500/20 transition-colors">
            <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3 uppercase tracking-wide">
              <Shield className="w-6 h-6 text-pink-400" /> Duty Roster
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {member.responsibilities.map((resp, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-indigo-950/40 p-4 rounded-xl border border-white/5"
                >
                  <div className="mt-1 w-2 h-2 bg-pink-400 rounded-full shadow-[0_0_8px_rgba(236,72,153,0.8)]"></div>
                  <span className="text-indigo-100/90 font-medium">{resp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:border-fuchsia-500/20 transition-colors">
              <h4 className="text-xs font-bold text-fuchsia-300 uppercase tracking-widest flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4" /> Date Joined
              </h4>
              <p className="text-white font-bold text-lg">{member.joined}</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:border-indigo-400/20 transition-colors">
              <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-widest flex items-center gap-2 mb-2">
                <Gamepad2 className="w-4 h-4" /> Main Games
              </h4>
              <p className="text-white font-bold text-lg">
                {member.favoriteGame}
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:border-emerald-400/20 transition-colors">
              <h4 className="text-xs font-bold text-emerald-300 uppercase tracking-widest flex items-center gap-2 mb-3">
                <Trophy className="w-4 h-4" /> Server Badges
              </h4>
              <div className="flex flex-wrap gap-2">
                {member.achievements.map((badge, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-indigo-950/60 border border-white/10 text-indigo-100 text-xs font-bold rounded-md"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffProfile;
