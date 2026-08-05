import React from "react";
import {
  ThumbsUp,
  Star,
  ArrowUpCircle,
  ExternalLink,
  Heart,
} from "lucide-react";

const SupportSection = () => {
  const supportCards = [
    {
      title: "Vote on Top.gg",
      description:
        "Help us climb the Top.gg charts! Every vote brings more cute members into our circle. You can drop a vote every 12 hours!",
      icon: (
        <ThumbsUp className="w-8 h-8 text-pink-500 drop-shadow-[0_0_8px_rgba(236,72,153,0.4)]" />
      ),
      actionText: "Drop a Vote",
      url: "https://top.gg/discord/servers/867111271676616704/vote",
      glowColor:
        "hover:shadow-[0_15px_40px_rgba(244,114,182,0.3)] hover:border-pink-300",
    },
    {
      title: "Leave a Review",
      description:
        "Obsessed with the vibes? Drop us a 5-star review and let everyone know why this is your favorite corner of the internet.",
      icon: (
        <Star className="w-8 h-8 text-rose-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.4)]" />
      ),
      actionText: "Spill the Tea",
      url: "https://top.gg/discord/servers/867111271676616704",
      glowColor:
        "hover:shadow-[0_15px_40px_rgba(251,113,133,0.3)] hover:border-rose-300",
    },
    {
      title: "Bump the Server",
      description:
        "Keep us at the top of Disboard! This jumps you straight to our #bump channel. Just type /bump and you're literally an angel.",
      icon: (
        <ArrowUpCircle className="w-8 h-8 text-fuchsia-500 drop-shadow-[0_0_8px_rgba(217,70,239,0.4)]" />
      ),
      actionText: "Go to #bump",
      url: "https://discord.gg/YTAXZRnVFe",
      glowColor:
        "hover:shadow-[0_15px_40px_rgba(232,121,249,0.3)] hover:border-fuchsia-300",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      {/* Background ambient glow - Soft baby pink */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-pink-300/30 rounded-full blur-[130px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Heart className="w-8 h-8 text-pink-400 fill-pink-300 animate-bounce drop-shadow-sm" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-pink-950 mb-4">
            Support the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">
              Cafe
            </span>
          </h2>
          <p className="text-pink-800/80 max-w-2xl mx-auto text-lg font-medium">
            It takes a village to keep the aesthetics this immaculate. Take a
            quick sec to vote, review, or bump so more besties can find us!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportCards.map((card, index) => (
            <div
              key={index}
              className={`group bg-white/80 backdrop-blur-xl border border-pink-100 rounded-[2rem] p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 shadow-[0_8px_30px_rgb(255,192,203,0.4)] ${card.glowColor}`}
            >
              {/* Cute Icon Wrapper */}
              <div className="w-16 h-16 rounded-2xl bg-pink-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 border border-pink-100 shadow-inner">
                {card.icon}
              </div>

              <h3 className="text-xl font-black text-pink-950 uppercase tracking-wide mb-3 group-hover:text-pink-600 transition-colors">
                {card.title}
              </h3>

              <p className="text-pink-800/75 mb-8 flex-grow leading-relaxed font-medium">
                {card.description}
              </p>

              {/* Glossy Button */}
              <a
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full bg-pink-50 border border-pink-200 text-pink-600 font-bold uppercase tracking-widest text-sm hover:bg-gradient-to-r hover:from-pink-400 hover:to-rose-400 hover:text-white hover:border-transparent hover:shadow-[0_5px_15px_rgba(244,114,182,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group/btn"
              >
                {card.actionText}
                <ExternalLink className="w-4 h-4 opacity-70 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
