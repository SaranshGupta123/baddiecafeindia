import React from "react";
import Sparkle from "./Sparkle";

const Background = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Ambient Glowing Blobs (Creates the Glassy Lighting) */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-pink-500/20 blur-[120px] mix-blend-screen animate-pulse"
        style={{ animationDuration: "8s" }}
      ></div>

      <div
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-fuchsia-600/20 blur-[150px] mix-blend-screen animate-pulse"
        style={{ animationDuration: "10s" }}
      ></div>

      <div
        className="absolute top-[30%] left-[50%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-indigo-500/20 blur-[100px] mix-blend-screen animate-pulse"
        style={{ animationDuration: "12s", animationDelay: "2s" }}
      ></div>

      {/* 2. Floating Sparkles Layer */}
      <div className="opacity-70">
        <Sparkle className="absolute top-[15%] left-[10%] text-2xl text-pink-300 animate-float drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]" />
        <Sparkle
          className="absolute top-[25%] right-[20%] text-4xl text-fuchsia-300 animate-float drop-shadow-[0_0_10px_rgba(217,70,239,0.8)]"
          style={{ animationDelay: "1s" }}
        />
        <Sparkle
          className="absolute top-[45%] left-[5%] text-xl text-pink-400 animate-pulse drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]"
          style={{ animationDelay: "0.5s" }}
        />
        <Sparkle
          className="absolute bottom-[30%] left-[25%] text-3xl text-pink-300 animate-float drop-shadow-[0_0_10px_rgba(244,114,182,0.8)]"
          style={{ animationDelay: "2s" }}
        />
        <Sparkle
          className="absolute bottom-[20%] right-[15%] text-2xl text-fuchsia-400 animate-pulse drop-shadow-[0_0_8px_rgba(217,70,239,0.8)]"
          style={{ animationDelay: "1.5s" }}
        />
        <Sparkle
          className="absolute top-[60%] left-[70%] text-lg text-indigo-300 animate-float drop-shadow-[0_0_8px_rgba(165,180,252,0.8)]"
          style={{ animationDelay: "0.8s" }}
        />
        <Sparkle
          className="absolute bottom-[10%] left-[60%] text-xl text-pink-200 animate-pulse drop-shadow-[0_0_8px_rgba(251,207,232,0.8)]"
          style={{ animationDelay: "2.5s" }}
        />
      </div>

      {/* 3. Subtle Vignette (Darkens the extreme edges to make the center pop) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(30,27,75,0.4)_100%)]"></div>
    </div>
  );
};

export default Background;
