import React from "react";
import { ThumbsUp, Star, ArrowUpCircle, ExternalLink } from "lucide-react";

const SupportSection = () => {
  const supportCards = [
    {
      title: "Vote on Top.gg",
      description:
        "Help Baddie Cafe India climb the global ranks! Every vote increases our visibility and brings more amazing members into our community. You can vote every 12 hours.",
      icon: <ThumbsUp className="w-8 h-8 text-pink-400" />,
      actionText: "Vote Now",
      url: "https://top.gg/servers/YOUR_SERVER_ID/vote",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]",
    },
    {
      title: "Leave a Review",
      description:
        "Enjoying the server? Share your experience by leaving a 5-star review on our Top.gg page. Let others know why Baddie Cafe India is the best place to hang out!",
      icon: <Star className="w-8 h-8 text-fuchsia-400" />,
      actionText: "Write Review",
      url: "https://top.gg/servers/YOUR_SERVER_ID#reviews",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(217,70,239,0.3)]",
    },
    {
      title: "Bump the Server",
      description:
        "Keep our server active on Disboard! Clicking this will jump you straight to our dedicated #bump channel in Discord. Just type /bump to help us out.",
      icon: <ArrowUpCircle className="w-8 h-8 text-purple-400" />,
      actionText: "Go to #bump",
      url: "https://discord.com/channels/YOUR_SERVER_ID/YOUR_BUMP_CHANNEL_ID", // Discord deep link
      glowColor: "group-hover:shadow-[0_0_30px_rgba(192,132,252,0.3)]",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-[#0a071a]">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-fuchsia-400 mb-4 drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]">
            Support Baddie Cafe
          </h2>
          <p className="text-indigo-200/80 max-w-2xl mx-auto text-lg">
            Growing our community takes a village! Help us stay at the top of
            the charts by taking a few seconds to vote, review, or bump our
            server.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportCards.map((card, index) => (
            <div
              key={index}
              className={`group bg-indigo-950/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 ${card.glowColor}`}
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-3">
                {card.title}
              </h3>
              <p className="text-indigo-200/70 mb-8 flex-grow leading-relaxed">
                {card.description}
              </p>
              <a
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-full bg-white/5 border border-white/10 text-pink-300 font-bold uppercase tracking-widest text-sm hover:bg-pink-400/20 hover:border-pink-400/50 transition-all flex items-center justify-center gap-2 group/btn"
              >
                {card.actionText}
                <ExternalLink className="w-4 h-4 opacity-70 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
