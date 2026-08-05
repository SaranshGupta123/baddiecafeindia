import React from "react";
import Sparkle from "./Sparkle";

const Background = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#fff0f5]">
      <div
        className="absolute -top-[10%] -left-[8%] w-[42vw] h-[42vw] max-w-[520px] max-h-[520px] rounded-full bg-pink-300/30 blur-[110px] animate-pulse motion-reduce:animate-none hidden sm:block"
        style={{ animationDuration: "10s" }}
      />

      <div
        className="absolute -bottom-[10%] -right-[12%] w-[50vw] h-[50vw] max-w-[620px] max-h-[620px] rounded-full bg-rose-200/30 blur-[140px] animate-pulse motion-reduce:animate-none hidden md:block"
        style={{ animationDuration: "12s" }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.22)_0%,rgba(255,240,245,0.78)_100%)]"></div>

      <span
        className="absolute top-[18%] left-[12%] inline-flex w-5 h-5 rounded-full bg-pink-400/70 blur-sm animate-float motion-reduce:animate-none"
        style={{ animationDuration: "5s" }}
      />
      <span
        className="absolute bottom-[20%] right-[18%] inline-flex w-6 h-6 rounded-full bg-rose-300/60 blur-sm animate-pulse motion-reduce:animate-none"
        style={{ animationDuration: "7s", animationDelay: "1.2s" }}
      />
    </div>
  );
};

export default React.memo(Background);
