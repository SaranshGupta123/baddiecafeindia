import React, { useState } from "react";
import {
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Gamepad2,
  Heart,
  MessageCircle,
  Mail,
  Check, // <-- Add this
} from "lucide-react";

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [copied, setCopied] = useState(false);
const handleCopyEmail = (e) => {
  e.preventDefault(); // Prevents the default mailto behavior
  navigator.clipboard.writeText("support@baddiecafeindia.com");
  setCopied(true);
  setTimeout(() => setCopied(false), 2000); // Resets after 2 seconds
};
  const faqs = [
    {
      icon: <Sparkles className="w-6 h-6 text-pink-400" />,
      q: "How do I join the community server?",
      a: "Click our official 'Join Server' button anywhere on the website to jump right into our Discord server! You'll need to complete a quick verification step to prove you're human before gaining access to the aesthetic channels.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-fuchsia-400" />,
      q: "Are staff applications currently open?",
      a: "Keep an eye on the #announcements channel in our Discord server. We post applications there whenever we're expanding the team. Active, helpful members who already pass the vibe check get priority!",
    },
    {
      icon: <Gamepad2 className="w-6 h-6 text-indigo-400" />,
      q: "What games do we play together?",
      a: "We host community game nights for Grand Theft Auto 5 RP, Minecraft, Genshin Impact, Valorant, Among Us, and various co-op horror games! If you play it, we probably have a squad for it.",
    },
    {
      icon: <Heart className="w-6 h-6 text-emerald-400" />,
      q: "How can I boost the server and what are the perks?",
      a: "Open Discord, click on the Baddie Cafe server name at the top left, and select 'Server Boost'. Boosters get an exclusive pink VIP role, custom picture permissions, bypass slow-mode, and a permanent spot on our recognition wall!",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-cyan-400" />,
      q: "Who can I contact if I have an issue with another member?",
      a: "Zero toxicity is our golden rule. If you need help, open a private support ticket in the server or reach out to any of our online Moderators, Managers, or Admins. We handle all reports discreetly.",
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto z-10 relative">
      {/* Header */}
      <div className="text-center mb-16 animate-scale-up">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-300 drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]">
          FAQ.
        </h1>
        <p className="text-xl text-fuchsia-200/80 max-w-2xl mx-auto font-medium">
          Got questions? We've got answers about our community, games, and
          events.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4 mb-16">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className={`group border rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-300 ${
              openFaq === idx
                ? "bg-indigo-950/60 border-pink-500/50 shadow-[0_10px_30px_rgba(236,72,153,0.15)]"
                : "bg-indigo-950/40 border-white/10 hover:border-pink-500/30 hover:bg-white/5"
            }`}
          >
            <button
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              className="w-full flex items-center justify-between p-6 text-left font-bold text-white text-lg transition-colors"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-2xl transition-colors duration-300 ${openFaq === idx ? "bg-white/10" : "bg-white/5 group-hover:bg-white/10"}`}
                >
                  {faq.icon}
                </div>
                <span
                  className={`transition-colors duration-300 ${openFaq === idx ? "text-pink-300" : "group-hover:text-pink-300"}`}
                >
                  {faq.q}
                </span>
              </div>
              <div
                className={`p-2 rounded-full transition-colors duration-300 ${openFaq === idx ? "bg-pink-500/20" : "bg-transparent group-hover:bg-white/5"}`}
              >
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openFaq === idx
                      ? "rotate-180 text-pink-400"
                      : "text-indigo-300"
                  }`}
                />
              </div>
            </button>

            {/* Answer Content */}
            <div
              className={`transition-all duration-300 ease-in-out origin-top ${
                openFaq === idx
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0 pointer-events-none"
              }`}
            >
              <div className="p-6 pt-0 ml-16 text-indigo-100/80 text-base leading-relaxed font-medium">
                <div className="pt-4 border-t border-white/5">{faq.a}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-indigo-900/50 to-pink-900/30 border border-pink-500/20 rounded-3xl p-8 text-center backdrop-blur-md">
        <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-3">
          Still have questions?
        </h3>
        <p className="text-indigo-200/70 mb-6 max-w-lg mx-auto font-medium">
          If you couldn't find what you were looking for, drop us an email or
          ask a staff member directly in the server.
        </p>
        <a
          href="mailto:support@baddiecafeindia.com"
          onClick={handleCopyEmail}
          className={`inline-flex items-center gap-2 px-6 py-3 font-bold rounded-full transition-all duration-300 border uppercase tracking-wider text-sm shadow-lg ${
            copied
              ? "bg-emerald-500/20 text-emerald-300 border-emerald-400 hover:shadow-[0_0_20px_rgba(52,211,153,0.4)]"
              : "bg-white/10 hover:bg-pink-500 text-white border-white/20 hover:border-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
          }`}
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Mail className="w-4 h-4" />
          )}
          {copied ? "Email Copied!" : "Contact Support"}
        </a>
      </div>
    </div>
  );
};

export default FAQ;
