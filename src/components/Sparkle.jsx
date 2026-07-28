import React from "react";
import { Sparkles } from "lucide-react";

const Sparkle = ({ className, style }) => (
  <span
    className={`inline-flex items-center justify-center ${className}`}
    style={style}
  >
    <Sparkles className="w-[1em] h-[1em]" />
  </span>
);

export default Sparkle;
