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

  const staffDetails = {
    Divaaa: {
      name: "Divaaa",
      role: "Founder, Owner & Server Queen",
      video: "/staff/Divaaa.mp4",
      status: "Streaming on Total Dheet 🎥",
      bio: "As the Founder, Owner, and Server Queen of Baddie Cafe India, Divaaa is the heart of the community and the vision behind its growth. She is dedicated to creating a welcoming space where people can build genuine friendships, enjoy memorable events, and feel a true sense of belonging. Through her creativity, leadership, and passion, she guides the server's direction while supporting both members and staff. From organizing community activities to inspiring new ideas, Divaaa works tirelessly to ensure Baddie Cafe India remains a fun, inclusive, and vibrant place where everyone is valued and every moment becomes a lasting memory.",
      responsibilities: [
        "Managing the Server",
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
      role: "Tech & Ops Lead and Co-Owner",
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
   "Buri-Buri" : {
      name: "Buri Buri",
      role: "Manager",
      video: "/staff/Buri-Buri.mp4",
      status: "Managing the chaos ✨",
      bio: "As one of our core managers, Buri Buri keeps the cafe running smoothly with top-tier oversight and organizational magic. Whether handling community operations, coordinating with the team, or making sure everyone is having a great time, Buri Buri's dedication is unmatched.",
      responsibilities: [
        "Community Management",
        "Staff Coordination & Support",
        "Event Operations",
        "Maintaining Server Order",
        "Overseeing Daily Operations",
        "Resolving Member Disputes",
        "Guiding New Staff Members",
      ],
      joined: "2023",
      favoriteGame: "GTA 5 RP , MineCraft & Valorant",
      achievements: [
        "Master Manager 📋",
        "Operations Pro ⚡",
        "Vibe Keeper 🌸",
        "Elite Supervisor 🛡️",
        "Conflict Resolver 🤝",
        "Team Pillar ⭐",
      ],
    },
    Sakshi: {
      name: "Sakshi",
      role: "Head of Gaming",
      video: "/staff/Sakshi.mp4",
      status: "In queue for Ranked 🎮",
      bio: "As our adorable official Game Handler, Sakshi is the mastermind behind our server's gaming adventures! 🌸 She loves introducing different, fun games for everyone to enjoy. Right now, she’s running our amazing Minecraft SMP, but keep an eye out—she's already planning to bring GTA 5 RP and plenty of other exciting games to the cafe, all while keeping the lobbies strictly toxic-free! ✨",
      responsibilities: [
        "Minecraft SMP Management",
        "New Game Server Launches",
        "Toxicity Prevention",
        "Community Event Planning",
      ],
      joined: "2017",
      favoriteGame: "Minecraft & GTA 5 RP",
      achievements: ["SMP Architect 🏰", "Vibe Protector 🌸", "Game Scout 🎮"],
    },
    Luna: {
      name: "Luna",
      role: "Female Voice Moderator & Female Dominator",
      video: "/staff/Maddy.mp4",
      status: "In queue for Ranked 🎮",
      bio: "Luna is the server's ultimate paradox. She is undeniably cute and a deeply dedicated staff member who holds the entire community in the palm of her hand. Known as the resident female voice dominator, she commands any voice channel with effortless authority and a captivating presence. Yet, beneath that fierce, commanding exterior is a remarkably sweet soul who is universally adored by everyone and holds a special place as one of Divaaa's personal favorites. Whether she’s enforcing the rules or melting hearts, Luna is the undisputed princess of the voice chats.",
      responsibilities: [
        "Active Voice Channel Domination",
        "Enforcing Lobby Etiquette",
        "Welcoming & Guiding New Members",
        "De-escalating VC Drama",
        "Hosting Late-Night Social Calls",
      ],
      joined: "2025",
      favoriteGame: "N/A",
      achievements: [
        "VC Queen",
        "Sweet & Savage",
        "Divaaa's Favorite",
        "Crowd Controller",
      ],
    },
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
    "Harsh / CrazyLoverX": {
      name: "Harsh / CrazyLoverX",
      role: "Art Mod, Artist & Event Host",
      video: "/staff/Crazy.mp4",
      status: "Rendering video files 🎬",
      bio: "Harsh, known as CrazyLoverX, is a dedicated Art Moderator, talented singer, and enthusiastic Event Host at Baddie Cafe India. He helps maintain the community's creative spaces, encourages members to share their talents, and ensures everyone feels welcome and engaged. Whether he's hosting exciting events, performing music, or supporting members across the server, his positive energy and friendly personality make every gathering more enjoyable.",
      responsibilities: [
        "Art Channel Moderation",
        "Community Engagement",
        "Event Planning & Hosting",
        "Live Singing Performances",
        "Member Support & Guidance",
        "Creative Community Management",
        "Voice Chat Activities",
        "Maintaining Community Standards",
      ],
      joined: "2020",
      favoriteGame: "Minecraft",
      achievements: [
        "Event Host",
        "Melody Maker",
        "Community Entertainer",
        "Art Moderator",
        "Voice Chat Star",
        "Creative Supporter",
        "Community Favorite",
        "Positive Vibes Ambassador",
      ],
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
        className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 font-bold mb-8 transition-colors uppercase tracking-widest text-sm bg-white/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-pink-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Staff Roster
      </Link>

      <div className="bg-white/80 backdrop-blur-2xl border border-pink-200 rounded-[3rem] p-8 sm:p-12 shadow-[0_15px_40px_rgba(244,114,182,0.15)] relative overflow-hidden">
        {/* Decorative Background Blur */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200/40 blur-[100px] rounded-full pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-100/40 blur-[100px] rounded-full pointer-events-none -z-10"></div>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 text-center md:text-left relative z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-300 to-fuchsia-300 rounded-full blur-xl opacity-60"></div>
            <video
              src={member.video}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="relative w-100 h-190 mx-auto rounded-full object-cover border-4 border-white shadow-inner group-hover:border-pink-300 transition-colors bg-pink-50"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="flex-1 mt-4 md:mt-0">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-pink-50 border border-pink-100 rounded-full text-pink-600 text-xs font-bold mb-4 shadow-inner">
              <Activity className="w-3.5 h-3.5 text-emerald-500" />
              {member.status}
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-pink-950 mb-3 tracking-tight">
              {member.name}
            </h1>
            <span className="inline-block px-5 py-2 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 rounded-full text-sm font-bold uppercase tracking-widest mb-6 border border-pink-200 shadow-sm">
              {member.role}
            </span>
            <p className="text-pink-800/90 text-lg leading-relaxed max-w-2xl font-medium">
              {member.bio}
            </p>
          </div>
        </div>

        {/* Info Grid Section */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
          {/* Responsibilities */}
          <div className="lg:col-span-2 bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-pink-100 hover:border-pink-300 transition-colors shadow-sm">
            <h3 className="text-xl font-black text-pink-950 mb-6 flex items-center gap-3 uppercase tracking-wide">
              <Shield className="w-6 h-6 text-pink-500" /> Duty Roster
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {member.responsibilities.map((resp, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-pink-50 p-4 rounded-2xl border border-pink-100 shadow-inner"
                >
                  <div className="mt-1.5 w-2 h-2 bg-pink-400 rounded-full flex-shrink-0"></div>
                  <span className="text-pink-800/90 font-medium leading-snug">
                    {resp}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-xl p-6 rounded-3xl border border-pink-100 hover:border-pink-300 transition-colors shadow-sm">
              <h4 className="text-xs font-bold text-fuchsia-500 uppercase tracking-widest flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4" /> Date Joined
              </h4>
              <p className="text-pink-950 font-black text-lg">
                {member.joined}
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-xl p-6 rounded-3xl border border-pink-100 hover:border-indigo-300 transition-colors shadow-sm">
              <h4 className="text-xs font-bold text-indigo-500 uppercase tracking-widest flex items-center gap-2 mb-2">
                <Gamepad2 className="w-4 h-4" /> Main Games
              </h4>
              <p className="text-pink-950 font-black text-lg">
                {member.favoriteGame}
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-xl p-6 rounded-3xl border border-pink-100 hover:border-emerald-300 transition-colors shadow-sm">
              <h4 className="text-xs font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-2 mb-3">
                <Trophy className="w-4 h-4" /> Server Badges
              </h4>
              <div className="flex flex-wrap gap-2">
                {member.achievements.map((badge, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-pink-50 border border-pink-200 text-pink-700 text-xs font-bold rounded-lg shadow-inner"
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
