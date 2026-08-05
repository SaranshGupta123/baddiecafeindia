import React, { useState } from "react";
import {
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Gamepad2,
  Heart,
  MessageCircle,
  Mail,
  Check,
} from "lucide-react";

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("support@baddiecafeindia.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const faqs = [
    {
      icon: <Sparkles className="w-6 h-6 text-pink-500" />,
      q: "How do I join the community server?",
      a: "Click our official 'Join Server' button anywhere on the website to jump right into our Discord server! You'll need to complete a quick verification step to prove you're human before gaining access to the aesthetic channels.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-rose-500" />,
      q: "Are staff applications currently open?",
      a: "Keep an eye on the #announcements channel in our Discord server. We post applications there whenever we're expanding the team. Active, helpful members who already pass the vibe check get priority!",
    },
    {
      icon: <Gamepad2 className="w-6 h-6 text-fuchsia-500" />,
      q: "What games do we play together?",
      a: "We host community game nights for Grand Theft Auto 5 RP, Minecraft, Genshin Impact, Valorant, Among Us, and various co-op horror games! If you play it, we probably have a squad for it.",
    },
    {
      icon: <Heart className="w-6 h-6 text-pink-400" />,
      q: "How can I boost the server and what are the perks?",
      a: "Open Discord, click on the Baddie Cafe server name at the top left, and select 'Server Boost'. Boosters get an exclusive pink VIP role, custom picture permissions, bypass slow-mode, and a permanent spot on our recognition wall!",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-rose-400" />,
      q: "Who can I contact if I have an issue with another member?",
      a: "Zero toxicity is our golden rule. If you need help, open a private support ticket in the server or reach out to any of our online Moderators, Managers, or Admins. We handle all reports discreetly.",
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto z-10 relative">
      {/* Header */}
      <div className="text-center mb-16 animate-scale-up">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400 drop-shadow-sm">
          FAQ.
        </h1>
        <p className="text-xl text-pink-800/80 max-w-2xl mx-auto font-medium">
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
                ? "bg-white/90 border-pink-300 shadow-[0_10px_30px_rgba(244,114,182,0.15)]"
                : "bg-white/60 border-pink-100 hover:border-pink-300 hover:bg-white shadow-sm"
            }`}
          >
            <button
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              className="w-full flex items-center justify-between p-6 text-left font-bold text-pink-950 text-lg transition-colors"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-2xl transition-colors duration-300 border ${
                    openFaq === idx
                      ? "bg-pink-100 border-pink-200"
                      : "bg-pink-50 border-pink-100 group-hover:bg-pink-100"
                  }`}
                >
                  {faq.icon}
                </div>
                <span
                  className={`transition-colors duration-300 ${
                    openFaq === idx
                      ? "text-pink-600"
                      : "group-hover:text-pink-600"
                  }`}
                >
                  {faq.q}
                </span>
              </div>
              <div
                className={`p-2 rounded-full transition-colors duration-300 ${
                  openFaq === idx
                    ? "bg-pink-100"
                    : "bg-transparent group-hover:bg-pink-50"
                }`}
              >
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openFaq === idx
                      ? "rotate-180 text-pink-600"
                      : "text-pink-400 group-hover:text-pink-500"
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
              <div className="p-6 pt-0 ml-16 text-pink-800/80 text-base leading-relaxed font-medium">
                <div className="pt-4 border-t border-pink-100">{faq.a}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="bg-white/80 backdrop-blur-xl border border-pink-200 rounded-3xl p-8 text-center shadow-[0_10px_30px_rgba(244,114,182,0.15)] relative overflow-hidden">
        {/* Subtle glow inside the CTA card */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100/50 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-100/50 rounded-full blur-3xl -z-10"></div>

        <h3 className="text-2xl font-black text-pink-950 uppercase tracking-wide mb-3">
          Still have questions?
        </h3>
        <p className="text-pink-800/80 mb-6 max-w-lg mx-auto font-medium">
          If you couldn't find what you were looking for, drop us an email or
          ask a staff member directly in the server.
        </p>
        <a
          href="mailto:support@baddiecafeindia.com"
          onClick={handleCopyEmail}
          className={`inline-flex items-center gap-2 px-6 py-3 font-bold rounded-full transition-all duration-300 border uppercase tracking-wider text-sm shadow-md ${
            copied
              ? "bg-emerald-50 text-emerald-600 border-emerald-200 shadow-[0_5px_15px_rgba(52,211,153,0.3)]"
              : "bg-white text-pink-600 border-pink-200 hover:bg-pink-500 hover:text-white hover:border-transparent hover:shadow-[0_5px_20px_rgba(244,114,182,0.4)] hover:-translate-y-1"
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
