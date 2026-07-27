import React from "react";
import Sparkle from "./Sparkle";

const Background = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
      <Sparkle className="absolute top-20 left-[10%] text-2xl text-pink-300 animate-float" />
      <Sparkle className="absolute top-[40%] right-[15%] text-xl text-fuchsia-300 animate-pulse" />
      <Sparkle
        className="absolute bottom-32 left-[30%] text-3xl text-pink-300 animate-float"
        style={{ animationDelay: "1s" }}
      />
      <Sparkle className="absolute top-[70%] left-[60%] text-lg text-fuchsia-300 animate-pulse" />
    </div>
  );
};

export default Background;
