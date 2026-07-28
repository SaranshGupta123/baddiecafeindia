import React from "react";
import {
  ShieldCheck,
  HeartHandshake,
  Hash,
  MegaphoneOff,
  EyeOff,
  MicOff,
  MessageSquareOff,
  UserX,
} from "lucide-react";

const Rules = () => {
  const rulesList = [
    {
      icon: (
        <HeartHandshake className="w-8 h-8 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
      ),
      title: "1. Be Respectful & Inclusive",
      desc: "Treat everyone with kindness. Harassment, hate speech, sexism, racism, or toxicity of any kind will result in an immediate ban.",
    },
    {
      icon: (
        <Hash className="w-8 h-8 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
      ),
      title: "2. Keep Channels Organized",
      desc: "Please use the correct channels for your topics (e.g., gaming in gaming channels, bot commands in bot channels).",
    },
    {
      icon: (
        <MegaphoneOff className="w-8 h-8 text-fuchsia-400 group-hover:scale-110 transition-transform duration-300" />
      ),
      title: "3. No Unsolicited Self-Promotion",
      desc: "Do not advertise other Discord servers, social media links, or products in chat or DMs without explicit staff permission.",
    },
    {
      icon: (
        <EyeOff className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
      ),
      title: "4. Keep Content SFW (Safe For Work)",
      desc: "All text, images, and media shared must be safe for work and appropriate for all ages. No NSFW, gore, or extreme content.",
    },
    {
      icon: (
        <MicOff className="w-8 h-8 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
      ),
      title: "5. Voice Channel Etiquette",
      desc: "No loud background noises, screaming, or soundboards without permission. If your mic is noisy, please use Push-to-Talk.",
    },
    {
      icon: (
        <MessageSquareOff className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
      ),
      title: "6. No Spamming or Flooding",
      desc: "Do not spam messages, emojis, or mentions. Do not ping @everyone or @here, and avoid ghost-pinging members.",
    },
    {
      icon: (
        <UserX className="w-8 h-8 text-red-400 group-hover:scale-110 transition-transform duration-300" />
      ),
      title: "7. Respect Privacy",
      desc: "No doxxing or leaking personal information. Do not share private DMs publicly or record Voice Channels without everyone's consent.",
    },
    {
      icon: (
        <ShieldCheck className="w-8 h-8 text-pink-500 group-hover:scale-110 transition-transform duration-300" />
      ),
      title: "8. Listen to Staff Instructions",
      desc: "Our moderation team is here to keep the community safe. If a staff member asks you to drop a topic, please respect their decision.",
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10 relative">
      <div className="text-center mb-16 animate-scale-up">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-300 drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]">
          SERVER RULES.
        </h1>
        <p className="text-xl text-fuchsia-200/80 max-w-2xl mx-auto font-medium">
          Follow these guidelines to keep Baddie Cafe India a safe, positive,
          and aesthetic space for everyone.
        </p>
      </div>

      <div className="space-y-6">
        {rulesList.map((rule, index) => (
          <div
            key={index}
            className="group bg-indigo-950/40 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/5 hover:border-pink-500/30 hover:bg-white/5 transition-all duration-300 shadow-lg flex flex-col sm:flex-row items-start gap-6 hover:-translate-y-1"
          >
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:border-pink-500/20 transition-colors flex-shrink-0">
              {rule.icon}
            </div>
            <div className="pt-1">
              <h3 className="text-2xl font-black text-white mb-2 tracking-wide group-hover:text-pink-300 transition-colors">
                {rule.title}
              </h3>
              <p className="text-indigo-100/70 text-base leading-relaxed font-medium">
                {rule.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-12 text-center p-6 bg-pink-500/10 border border-pink-500/20 rounded-2xl backdrop-blur-sm">
        <p className="text-pink-200/90 font-medium">
          ⚠️ <strong className="text-pink-400">Note:</strong> Loopholes will not
          be tolerated. Staff reserve the right to moderate any behavior that
          disrupts the peace of the server, even if not explicitly listed here.
        </p>
      </div>
    </div>
  );
};

export default Rules;
