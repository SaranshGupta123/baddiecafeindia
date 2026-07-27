import React from "react";
import { ShieldCheck } from "lucide-react";

const Rules = () => {
  const rulesList = [
    {
      title: "1. Be Respectful & Inclusive",
      desc: "Treat everyone with kindness. Harassment, hate speech, sexism, racism, or toxicity of any kind will result in an immediate ban.",
    },
    {
      title: "2. Keep Channels Organized",
      desc: "Please use the correct channels for your topics (e.g., gaming in gaming channels, bot commands in bot channels).",
    },
    {
      title: "3. No Unsolicited Self-Promotion",
      desc: "Do not advertise other Discord servers, social media links, or products in chat or DMs without explicit staff permission.",
    },
    {
      title: "4. Keep Content SFW (Safe For Work)",
      desc: "All text, images, and media shared must be safe for work and appropriate for all ages. No NSFW content.",
    },
    {
      title: "5. Listen to Staff Instructions",
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
            className="bg-indigo-900/40 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-pink-500/20 hover:border-pink-400/50 transition-all flex items-start gap-4"
          >
            <ShieldCheck className="w-8 h-8 text-pink-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-black text-white mb-2">
                {rule.title}
              </h3>
              <p className="text-indigo-100/80 text-base leading-relaxed">
                {rule.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rules;
