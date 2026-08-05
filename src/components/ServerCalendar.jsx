import React from "react";
import {
  Calendar,
  Crown,
  Cake,
  Sparkles,
  Heart,
  PartyPopper,
} from "lucide-react";

const ServerCalendar = () => {
  const events = [
    {
      title: "Baddie Cafe India Opened",
      date: "28 June 2026",
      icon: <Sparkles className="w-7 h-7 text-fuchsia-500" />,
      desc: "The monumental day the virtual doors of Baddie Cafe India officially swung open to the internet, starting a non-toxic aesthetic movement across Indian Discord.",
      badge: "Server Genesis",
      highlight: false,
    },
    {
      title: "Divaaa's Birthday",
      date: "February 27",
      icon: <Crown className="w-7 h-7 text-rose-500" />,
      desc: "The birthday of our supreme founder and server queen, Divaaa! The entire cafe floods with love, custom aesthetics, appreciation notes, and massive community celebrations.",
      badge: "Queen's Day",
      highlight: true,
    },
    {
      title: "Batak Day",
      date: "August 18",
      icon: <Sparkles className="w-7 h-7 text-pink-500" />,
      desc: "The legendary Batak Day of Baddie Cafe India! A sacred community tradition packed with chaotic energy, special role events, voice channel takeovers, and absolute good vibes.",
      badge: "Flagship Tradition",
      highlight: true,
    },
    {
      title: "Buri Buri Birthday",
      date: "August 6",
      icon: <Cake className="w-7 h-7 text-rose-500" />,
      desc: "The special day of Buri Buri! Time to flood the cafe with birthday wishes, celebration vibes, and appreciation for all the amazing energy brought to the community.",
      badge: "Manager's Day",
      highlight: true,
    },
    {
      title: "Shivraj Birthday",
      date: "August 8",
      icon: <Cake className="w-7 h-7 text-pink-500" />,
      desc: "Celebrating Shivraj from our Creative Team! Get ready for incredible aesthetic appreciation, high-res visual celebrations, and massive love from the whole cafe.",
      badge: "Creative Team's Day",
      highlight: true,
    },
    {
      title: "Harsh / CrazyLoverX Birthday",
      date: "August 21",
      icon: <Cake className="w-7 h-7 text-pink-500" />,
      desc: "Celebrating our talented artist, singer, and event host, Harsh / CrazyLoverX! Get ready for melodic vibes, amazing artwork celebrations, and massive love in the chats.",
      badge: "Artist's Day",
      highlight: true,
    },
    {
      title: "Luna Birthday",
      date: "October 13",
      icon: <PartyPopper className="w-7 h-7 text-fuchsia-500" />,
      desc: "The birthday of our resident voice dominator and beloved princess of the voice chats, Luna! Time to celebrate her special day with endless love and community cheer.",
      badge: "VC Queen's Day",
      highlight: true,
    },
    {
      title: "Billu Birthday",
      date: "October 15",
      icon: <Cake className="w-7 h-7 text-rose-400" />,
      desc: "Celebrating Billu's birthday! Another wonderful milestone to celebrate together with wholesome wishes and fun community moments.",
      badge: "Special Day",
      highlight: true,
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10 relative">
      {/* Header */}
      <div className="text-center mb-16 animate-scale-up">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 border border-pink-200 rounded-full text-pink-600 text-sm font-bold uppercase tracking-widest mb-6 shadow-sm backdrop-blur-xl">
          <Calendar className="w-4 h-4 text-pink-500" /> Important Dates & Lore
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-fuchsia-500 drop-shadow-sm">
          SERVER CALENDAR.
        </h1>
        <p className="text-xl text-pink-800/80 max-w-2xl mx-auto font-medium">
          Mark your calendars! The essential dates, birthdays, and traditions
          that define our timeline.
        </p>
      </div>

      {/* Events Timeline / Grid */}
      <div className="space-y-6">
        {events.map((event, index) => (
          <div
            key={index}
            className={`group bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] border transition-all duration-300 shadow-[0_10px_30px_rgba(244,114,182,0.15)] hover:-translate-y-1 relative overflow-hidden ${
              event.highlight
                ? "border-pink-300 hover:border-pink-400"
                : "border-pink-100 hover:border-pink-300"
            }`}
          >
            {/* Subtle corner accent glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100/50 rounded-full blur-2xl -z-10 group-hover:bg-pink-200/50 transition-colors"></div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-2xl bg-pink-50 border border-pink-100 group-hover:bg-pink-100 transition-colors flex-shrink-0 shadow-inner">
                  {event.icon}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 text-xs font-bold rounded-full uppercase tracking-wider">
                      {event.date}
                    </span>
                    <span className="text-xs font-bold text-rose-500 uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
                      {event.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-pink-950 mb-2 tracking-wide group-hover:text-pink-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-pink-800/80 text-base leading-relaxed font-medium max-w-2xl">
                    {event.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-12 text-center p-8 bg-white/70 border border-pink-200 rounded-[2rem] backdrop-blur-xl shadow-sm">
        <Heart className="w-8 h-8 text-pink-500 mx-auto mb-3 fill-pink-300 animate-pulse" />
        <p className="text-pink-900 font-bold text-lg mb-1">
          Never miss a celebration!
        </p>
        <p className="text-pink-800/80 text-sm font-medium">
          Join our Discord server announcements channel to stay updated on
          upcoming Batak Day events and birthday countdowns. ✨
        </p>
      </div>
    </div>
  );
};

export default ServerCalendar;
