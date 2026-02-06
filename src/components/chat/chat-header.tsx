"use client";

import Image from "next/image";
import { BotAvatar } from "@/components/chat/bot-avatar";

interface ChatHeaderProps {
  compact?: boolean;
}

export function ChatHeader({ compact = false }: ChatHeaderProps) {
  if (compact) {
    return (
      <header className="sticky top-0 z-50 relative flex shrink-0 items-center justify-between px-4 pb-4 pt-[max(24px,env(safe-area-inset-top))]">
        {/* Curved gradient background */}
        <div
          className="absolute inset-x-0 top-0 bottom-0"
          style={{
            background: "linear-gradient(180deg, #F3F8FD 0%, #EDF3F8 100%)",
          }}
        >
          {/* White overlay creating concave (∩) bottom curve */}
          <div
            className="absolute inset-x-0 bottom-0"
            style={{
              height: 12,
              background: "white",
              borderRadius: "50% 50% 0 0 / 12px 12px 0 0",
            }}
          />
        </div>
        <div className="relative w-10" />
        <div className="relative">
          <BotAvatar size={48} />
        </div>
        {/* User avatar with lock badge */}
        <div className="relative">
          <div className="h-10 w-10 overflow-hidden rounded-full">
            <Image
              src="/images/avatars/user-avatar.png"
              alt="Utilisateur"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <span className="absolute -bottom-0.5 -left-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-cercle-blue">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M5 1a2 2 0 0 0-2 2v1H2.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5H7V3a2 2 0 0 0-2-2ZM4 3a1 1 0 1 1 2 0v1H4V3Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 relative flex shrink-0 flex-col items-center px-4 pt-[max(24px,env(safe-area-inset-top))]">
      {/* Curved gradient background */}
      <div
        className="absolute inset-x-0 top-0 bottom-0"
        style={{
          background: "linear-gradient(180deg, #F3F8FD 0%, #EDF3F8 100%)",
        }}
      >
        {/* White overlay creating concave (∩) bottom curve */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            height: 20,
            background: "white",
            borderRadius: "50% 50% 0 0 / 20px 20px 0 0",
          }}
        />
      </div>

      {/* User avatar in top-right */}
      <div className="absolute right-4 top-[max(24px,env(safe-area-inset-top))] z-10">
        <div className="relative">
          <div className="h-10 w-10 overflow-hidden rounded-full">
            <Image
              src="/images/avatars/user-avatar.png"
              alt="Utilisateur"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <span className="absolute -bottom-0.5 -left-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-cercle-blue">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M5 1a2 2 0 0 0-2 2v1H2.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5H7V3a2 2 0 0 0-2-2ZM4 3a1 1 0 1 1 2 0v1H4V3Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* Centered bot avatar */}
      <div className="relative z-10 mt-8">
        <BotAvatar size={72} />
      </div>
    </header>
  );
}
