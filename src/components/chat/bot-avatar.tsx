"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface BotAvatarProps {
  size?: number;
  className?: string;
}

export function BotAvatar({ size = 48, className }: BotAvatarProps) {
  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center rounded-full",
        className
      )}
      style={{ width: size, height: size }}
    >
      {/* Gradient ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "linear-gradient(135deg, #B8D4F0 0%, #D4C5F0 50%, #B8D4F0 100%)",
          padding: 2,
        }}
      >
        <div className="h-full w-full rounded-full bg-white" />
      </div>
      {/* Avatar image */}
      <div className="relative z-10 overflow-hidden rounded-full" style={{ width: Math.round(size * 0.56), height: Math.round(size * 0.56) }}>
        <Image
          src="/images/avatars/bot-avatar.png"
          alt="Cercle AI"
          width={Math.round(size * 0.56)}
          height={Math.round(size * 0.56)}
          className="object-cover"
        />
      </div>
    </div>
  );
}
