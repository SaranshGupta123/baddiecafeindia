import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "How do I join the community server?",
      a: "Click our official 'Join Server' button anywhere on the website to jump right into our Discord server and verify your account!",
    },
    {
      q: "Are staff applications currently open?",
      a: "Keep an eye on the #announcements channel in our Discord server. We post applications there whenever we're expanding the team.",
    },
    {
      q: "What games do we play together?",
      a: "We host community game nights for Grand Theft Auto 5 RP, Minecraft, Genshin Impact, Valorant, Among Us, and various co-op horror games!",
    },
    {
      q: "How can I boost the server?",
      a: "Open Discord, click on the Baddie Cafe server name at the top left, and select 'Server Boost'. Boosters get special roles, perks, and recognition on our wall!",
    },
    {
      q: "Who can I contact if I have an issue?",
      a: "If you need help, feel free to reach out to any of our online Moderators, Managers, or Admins inside the Discord server.",
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto z-10 relative">
      <div className="text-center mb-16 animate-scale-up">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-300 drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]">
          FREQUENTLY ASKED QUESTIONS.
        </h1>
        <p className="text-xl text-fuchsia-200/80 max-w-2xl mx-auto font-medium">
          Got questions? We've got answers about our community, games, and
          events.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="border border-pink-500/20 rounded-2xl overflow-hidden bg-indigo-900/40 backdrop-blur-md"
          >
            <button
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              className="w-full flex items-center justify-between p-6 text-left font-bold text-white text-lg hover:text-pink-300 transition-colors"
            >
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <span>{faq.q}</span>
              </div>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openFaq === idx
                    ? "rotate-180 text-pink-400"
                    : "text-fuchsia-300"
                }`}
              />
            </button>
            {openFaq === idx && (
              <div className="p-6 pt-0 text-indigo-200/90 text-base border-t border-pink-500/10 leading-relaxed">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
