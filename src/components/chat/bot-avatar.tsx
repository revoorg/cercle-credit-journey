"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface BotAvatarProps {
  size?: number;
  className?: string;
}

export function BotAvatar({ size = 48, className }: BotAvatarProps) {
  const ringSize = Math.round(size * 0.47); // ~34px at 72
  const ringStroke = Math.max(2, Math.round(size * 0.028));
  const imgSize = Math.round(size * 0.58); // ~42px at 72, matches Figma

  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center rounded-full border border-[#E9ECEE] bg-white",
        className
      )}
      style={{
        width: size,
        height: size,
        boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
      }}
    >
      {/* Gradient ring + sparkle highlights (below avatar, white shapes break the ring) */}
      <svg
        className="absolute"
        width={ringSize + 10}
        height={ringSize + 10}
        viewBox="0 0 44 44"
        fill="none"
      >
        <defs>
          <linearGradient id={`ring-grad-${size}`} x1="22" y1="38" x2="22" y2="6" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B04BD4" />
            <stop offset="1" stopColor="#6ADAF6" />
          </linearGradient>
        </defs>
        <circle cx="22" cy="22" r="16" stroke={`url(#ring-grad-${size})`} strokeWidth={ringStroke} />
        {/* Top-right sparkle (~1 o'clock) */}
        <path d="M23.5 4 L27 4 L28 8.5 L22.5 8 Z" fill="white" />
        {/* Right sparkle (~3 o'clock) */}
        <path d="M35 16.5 L40 17.5 L40 21.5 L35 23 Z" fill="white" />
        {/* Bottom-left sparkle (~7 o'clock, rotated 42.69°) */}
        <g transform="translate(13.717 35.748) rotate(42.69) translate(-1.88 -2.073)">
          <path d="M0 0.571 L3.76 0 L3.266 4.112 L0 4.145 Z" fill="white" />
        </g>
        {/* Left sparkle (~8 o'clock, rotated 40.61°) */}
        <g transform="translate(8.77 31.59) rotate(40.61) translate(-1.789 -3.2)">
          <path d="M0 0 L3.577 0.399 L3.577 6.315 L0.217 6.399 Z" fill="white" />
        </g>
      </svg>

      {/* Avatar image (on top — PNG transparency lets ring + sparkle gaps show through) */}
      <div className="absolute z-10 overflow-hidden" style={{ width: imgSize, height: imgSize }}>
        <Image
          src="/images/avatars/bot-avatar.png"
          alt="Cercle AI"
          width={Math.round(imgSize * 1.25)}
          height={Math.round(imgSize * 1.25)}
          className="scale-125"
        />
      </div>
    </div>
  );
}
